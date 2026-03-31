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
          <tr id="trCmPrjId">
            <td class="text-right">
              <label
                id="lblCmPrjId"
                name="lblCmPrjId"
                class="col-form-label text-right"
                style="width: 90px"
                >Cm项目Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCmPrjId"
                v-model="cmPrjId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trCmPrjName">
            <td class="text-right">
              <label
                id="lblCmPrjName"
                name="lblCmPrjName"
                class="col-form-label text-right"
                style="width: 90px"
                >Cm项目名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCmPrjName"
                v-model="cmPrjName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trUseStateId">
            <td class="text-right">
              <label
                id="lblUseStateId"
                name="lblUseStateId"
                class="col-form-label text-right"
                style="width: 90px"
                >使用状态
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUseStateId"
                v-model="useStateId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrQxUseState"
                  :key="index"
                  :value="item.useStateId"
                >
                  {{ item.useStateName }}
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
                style="width: 150px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxCmProject" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitQxCmProject" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import QxCmProject_EditEx from '@/views/SysManage/QxCmProject_EditEx';
  import { clsQxCmProjectEN } from '@/ts/L0Entity/SysManage/clsQxCmProjectEN';
  import { clsQxUseStateEN } from '@/ts/L0Entity/UserManage_GP/clsQxUseStateEN';
  import { QxUseState_GetArrQxUseState } from '@/ts/L3ForWApi/UserManage_GP/clsQxUseStateWApi';
  import { refDivEdit, QxPrjId_Local } from '@/views/SysManage/QxCmProjectVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { QxCmProject_Edit } from '@/viewsBase/SysManage/QxCmProject_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'QxCmProjectEdit',

    components: {
      // 组件注册
    },

    setup() {
      const userStore = useUserStore();
      const strTitle = ref('QxCmProject编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<QxCmProject_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度

      const cmPrjId = ref('');
      const cmPrjName = ref('');
      const qxPrjId = ref('');
      const useStateId = ref('');
      const memo = ref('');

      const arrQxUseState = ref<clsQxUseStateEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrQxUseState.value = await QxUseState_GetArrQxUseState(); //编辑区域
        useStateId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjQxCmProjectEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQxCmProjectObj() {
        const pobjQxCmProjectEN = new clsQxCmProjectEN();
        pobjQxCmProjectEN.SetCmPrjId(cmPrjId.value); // Cm项目Id
        pobjQxCmProjectEN.SetCmPrjName(cmPrjName.value); // Cm项目名
        pobjQxCmProjectEN.SetQxPrjId(QxPrjId_Local.value); // 项目Id
        pobjQxCmProjectEN.SetUseStateId(Is0EqEmpty(useStateId.value)); // 使用状态
        pobjQxCmProjectEN.SetMemo(memo.value); // 备注
        return pobjQxCmProjectEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjQxCmProjectEN">表实体类对象</param>
       **/
      async function ShowDataFromQxCmProjectObj(pobjQxCmProjectEN: clsQxCmProjectEN) {
        cmPrjId.value = pobjQxCmProjectEN.cmPrjId; // Cm项目Id
        cmPrjName.value = pobjQxCmProjectEN.cmPrjName; // Cm项目名
        useStateId.value = IsNullOrEmptyEq0(pobjQxCmProjectEN.useStateId); // 使用状态
        memo.value = pobjQxCmProjectEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        cmPrjId.value = '';
        cmPrjName.value = '';
        useStateId.value = '0';
        memo.value = '';
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_btnSubmit_Click)
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
              if (['02', '03', '06'].indexOf(clsQxCmProjectEN._PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (QxCmProject_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsQxCmProjectEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (QxCmProject_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsQxCmProjectEN._CurrTabName, keyId.value);
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In QxCmProject_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (QxCmProject_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsQxCmProjectEN._CurrTabName, keyId.value);
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

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDialog)
       **/
      const showDialog = async (pobjPage_Edit: QxCmProject_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };

      /**
       * 处理保存逻辑
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_HandleSave)
       **/
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };

      /**
       * 隐藏对话框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_HideDialog)
       **/
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
        GetEditDataQxCmProjectObj,
        ShowDataFromQxCmProjectObj,
        Clear,
        btnSubmit_Click,
        cmPrjId,
        cmPrjName,
        qxPrjId,
        useStateId,
        memo,
        arrQxUseState,
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
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Methods_btnEdit_Click)
       **/
      btnQxCmProject_Edit_Click(strCommandName: string, strKeyId: string) {
        QxCmProject_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
