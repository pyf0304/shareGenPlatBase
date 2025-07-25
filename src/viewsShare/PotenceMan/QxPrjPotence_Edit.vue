<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trPotenceName">
            <td class="text-right">
              <label
                id="lblPotenceName"
                name="lblPotenceName"
                class="col-form-label text-right"
                style="width: 90px"
                >权限名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPotenceName"
                v-model="potenceName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trPotenceTypeId">
            <td class="text-right">
              <label
                id="lblPotenceTypeId"
                name="lblPotenceTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >权限类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlPotenceTypeId"
                v-model="potenceTypeId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrQxPotenceType"
                  :key="index"
                  :value="item.potenceTypeId"
                >
                  {{ item.potenceTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFuncModuleId">
            <td class="text-right">
              <label
                id="lblFuncModuleId"
                name="lblFuncModuleId"
                class="col-form-label text-right"
                style="width: 90px"
                >模块Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncModuleId"
                v-model="funcModuleId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrQxFuncModule"
                  :key="index"
                  :value="item.funcModuleId"
                >
                  {{ item.funcModuleName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trMenuId">
            <td class="text-right">
              <label
                id="lblMenuId"
                name="lblMenuId"
                class="col-form-label text-right"
                style="width: 90px"
                >菜单Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMenuId"
                v-model="menuId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrQxPrjMenus" :key="index" :value="item.menuId">
                  {{ item.menuName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >备注
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxPrjPotence" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitQxPrjPotence" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import QxPrjPotence_EditEx from '@/viewsShare/PotenceMan/QxPrjPotence_EditEx';
  import { clsQxPrjPotenceEN } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN';
  import { clsQxPotenceTypeEN } from '@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN';
  import { clsQxFuncModuleEN } from '@/ts/L0Entity/PrjManage_GP/clsQxFuncModuleEN';
  import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
  import { QxPotenceType_GetArrQxPotenceType } from '@/ts/L3ForWApi/PotenceMan/clsQxPotenceTypeWApi';
  import { QxFuncModule_GetArrQxFuncModule } from '@/ts/L3ForWApi/PrjManage_GP/clsQxFuncModuleWApi';
  import { QxPrjMenus_GetArrQxPrjMenus } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
  import { refDivEdit, QxPrjId_Local } from '@/viewsShare/PotenceMan/QxPrjPotenceVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { QxPrjPotence_Edit } from '@/viewsBase/PotenceMan/QxPrjPotence_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'QxPrjPotenceEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const potenceId = ref('');
      const potenceName = ref('');
      const qxPrjId = ref('');
      const potenceTypeId = ref('');
      const funcModuleId = ref('');
      const menuId = ref('');
      const updDate = ref('');
      const updUserId = ref('');
      const memo = ref('');

      const arrQxPotenceType = ref<clsQxPotenceTypeEN[] | null>([]);
      const arrQxFuncModule = ref<clsQxFuncModuleEN[] | null>([]);
      const arrQxPrjMenus = ref<clsQxPrjMenusEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrQxPotenceType.value = await QxPotenceType_GetArrQxPotenceType(); //编辑区域
        potenceTypeId.value = '0';

        arrQxFuncModule.value = await QxFuncModule_GetArrQxFuncModule(); //编辑区域
        funcModuleId.value = '0';

        arrQxPrjMenus.value = await QxPrjMenus_GetArrQxPrjMenus(); //编辑区域
        menuId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQxPrjPotenceEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQxPrjPotenceObj() {
        const pobjQxPrjPotenceEN = new clsQxPrjPotenceEN();
        pobjQxPrjPotenceEN.SetPotenceId(potenceId.value); // 权限ID
        pobjQxPrjPotenceEN.SetPotenceName(potenceName.value); // 权限名称
        pobjQxPrjPotenceEN.SetQxPrjId(QxPrjId_Local.value); // 项目Id
        pobjQxPrjPotenceEN.SetPotenceTypeId(Is0EqEmpty(potenceTypeId.value)); // 权限类型Id
        pobjQxPrjPotenceEN.SetFuncModuleId(Is0EqEmpty(funcModuleId.value)); // 模块Id
        pobjQxPrjPotenceEN.SetMenuId(Is0EqEmpty(menuId.value)); // 菜单Id
        pobjQxPrjPotenceEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjQxPrjPotenceEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        pobjQxPrjPotenceEN.SetMemo(memo.value); // 备注
        return pobjQxPrjPotenceEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxPrjPotenceEN">表实体类对象</param>
       **/
      async function ShowDataFromQxPrjPotenceObj(pobjQxPrjPotenceEN: clsQxPrjPotenceEN) {
        potenceId.value = pobjQxPrjPotenceEN.potenceId; // 权限ID
        potenceName.value = pobjQxPrjPotenceEN.potenceName; // 权限名称
        potenceTypeId.value = IsNullOrEmptyEq0(pobjQxPrjPotenceEN.potenceTypeId); // 权限类型Id
        funcModuleId.value = IsNullOrEmptyEq0(pobjQxPrjPotenceEN.funcModuleId); // 模块Id
        menuId.value = IsNullOrEmptyEq0(pobjQxPrjPotenceEN.menuId); // 菜单Id
        memo.value = pobjQxPrjPotenceEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        potenceId.value = '';
        potenceName.value = '';
        potenceTypeId.value = '0';
        funcModuleId.value = '0';
        menuId.value = '0';
        memo.value = '';
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_btnSubmit_Click)
       **/
      const btnSubmit_Click = async () => {
        const strThisFuncName = btnSubmit_Click.name;
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strCommandText: string = strSubmitButtonText.value;
        try {
          let returnBool = false;
          let returnKeyId = '';
          let strInfo = '';
          let strMsg = '';
          switch (strCommandText) {
            case '添加':
              strSubmitButtonText.value = '确认添加';
              strCancelButtonText.value = '取消添加';
              await objPage_Edit.value.AddNewRecord();
              break;
            case '确认添加':
              //这是一个单表的插入的代码,由于逻辑层太简单,
              //就把逻辑层合并到控制层,
              if (['02', '03', '06'].indexOf(clsQxPrjPotenceEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (QxPrjPotence_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsQxPrjPotenceEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (QxPrjPotence_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsQxPrjPotenceEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In QxPrjPotence_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (QxPrjPotence_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsQxPrjPotenceEN._CurrTabName,
                    keyId.value,
                  );
              }
              break;
            default:
              strMsg = Format(
                'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
                strCommandText,
              );
              console.error(strMsg);
              alert(strMsg);
              break;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };
      const strTitle = ref('工程权限编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<QxPrjPotence_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: QxPrjPotence_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataQxPrjPotenceObj,
        ShowDataFromQxPrjPotenceObj,
        Clear,
        btnSubmit_Click,
        potenceId,
        potenceName,
        qxPrjId,
        potenceTypeId,
        funcModuleId,
        menuId,
        updDate,
        updUserId,
        memo,
        arrQxPotenceType,
        arrQxFuncModule,
        arrQxPrjMenus,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQxPrjPotence_Edit_Click(strCommandName: string, strKeyId: string) {
        QxPrjPotence_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
