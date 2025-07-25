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
          <tr id="trDepartmentName">
            <td class="text-right">
              <label
                id="lblDepartmentId"
                name="lblDepartmentId"
                class="col-form-label text-right"
                style="width: 90px"
                >部门Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDepartmentId"
                v-model="departmentId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDepartmentName"
                name="lblDepartmentName"
                class="col-form-label text-right"
                style="width: 90px"
                >部门名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDepartmentName"
                v-model="departmentName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trDepartmentTypeId">
            <td class="text-right">
              <label
                id="lblDepartmentAbbrName"
                name="lblDepartmentAbbrName"
                class="col-form-label text-right"
                style="width: 90px"
                >名称缩写
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDepartmentAbbrName"
                v-model="departmentAbbrName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDepartmentTypeId"
                name="lblDepartmentTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >部门类型ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDepartmentTypeId"
                v-model="departmentTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrQxDepartmentType"
                  :key="index"
                  :value="item.departmentTypeId"
                >
                  {{ item.departmentTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trOrderNum">
            <td class="text-right">
              <label
                id="lblUpDepartmentId"
                name="lblUpDepartmentId"
                class="col-form-label text-right"
                style="width: 90px"
                >所属部门号
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUpDepartmentId"
                v-model="upDepartmentId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrQxDepartmentInfo"
                  :key="index"
                  :value="item.departmentId"
                >
                  {{ item.departmentName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblOrderNum"
                name="lblOrderNum"
                class="col-form-label text-right"
                style="width: 90px"
                >排序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOrderNum"
                v-model.number="orderNum"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkInUse" v-model="inUse" type="checkbox" Text="是否在用" /><label
                  for="chkInUse"
                  >是否在用</label
                ></span
              >
            </td>
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
      <el-button id="btnCancelQxDepartmentInfo" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitQxDepartmentInfo" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import QxDepartmentInfo_EditEx from '@/viewsShare/UserManage/QxDepartmentInfo_EditEx';
  import { clsQxDepartmentInfoEN } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoEN';
  import { clsQxDepartmentTypeEN } from '@/ts/L0Entity/SysPara/clsQxDepartmentTypeEN';
  import { QxDepartmentType_GetArrQxDepartmentType } from '@/ts/L3ForWApi/SysPara/clsQxDepartmentTypeWApi';
  import { QxDepartmentInfo_GetArrQxDepartmentInfo } from '@/ts/L3ForWApi/UserManage_GP/clsQxDepartmentInfoWApi';
  import { refDivEdit } from '@/viewsShare/UserManage/QxDepartmentInfoVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { QxDepartmentInfo_Edit } from '@/viewsBase/UserManage_GP/QxDepartmentInfo_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'QxDepartmentInfoEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const departmentId = ref('');
      const departmentName = ref('');
      const departmentAbbrName = ref('');
      const departmentTypeId = ref('');
      const upDepartmentId = ref('');
      const orderNum = ref(0);
      const inUse = ref(true);
      const memo = ref('');

      const arrQxDepartmentType = ref<clsQxDepartmentTypeEN[] | null>([]);
      const arrQxDepartmentInfo = ref<clsQxDepartmentInfoEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrQxDepartmentType.value = await QxDepartmentType_GetArrQxDepartmentType(); //编辑区域
        departmentTypeId.value = '0';

        arrQxDepartmentInfo.value = await QxDepartmentInfo_GetArrQxDepartmentInfo(); //编辑区域
        upDepartmentId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQxDepartmentInfoEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQxDepartmentInfoObj() {
        const pobjQxDepartmentInfoEN = new clsQxDepartmentInfoEN();
        pobjQxDepartmentInfoEN.SetDepartmentId(departmentId.value); // 部门Id
        pobjQxDepartmentInfoEN.SetDepartmentName(departmentName.value); // 部门名
        pobjQxDepartmentInfoEN.SetDepartmentAbbrName(departmentAbbrName.value); // 名称缩写
        pobjQxDepartmentInfoEN.SetDepartmentTypeId(departmentTypeId.value); // 部门类型ID
        pobjQxDepartmentInfoEN.SetUpDepartmentId(upDepartmentId.value); // 所属部门号
        pobjQxDepartmentInfoEN.SetOrderNum(Number(orderNum.value)); // 排序号
        pobjQxDepartmentInfoEN.SetInUse(inUse.value); // 是否在用
        pobjQxDepartmentInfoEN.SetMemo(memo.value); // 备注
        return pobjQxDepartmentInfoEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxDepartmentInfoEN">表实体类对象</param>
       **/
      async function ShowDataFromQxDepartmentInfoObj(
        pobjQxDepartmentInfoEN: clsQxDepartmentInfoEN,
      ) {
        departmentId.value = pobjQxDepartmentInfoEN.departmentId; // 部门Id
        departmentName.value = pobjQxDepartmentInfoEN.departmentName; // 部门名
        departmentAbbrName.value = pobjQxDepartmentInfoEN.departmentAbbrName; // 名称缩写
        departmentTypeId.value = pobjQxDepartmentInfoEN.departmentTypeId; // 部门类型ID
        upDepartmentId.value = pobjQxDepartmentInfoEN.upDepartmentId; // 所属部门号
        orderNum.value = pobjQxDepartmentInfoEN.orderNum; // 排序号
        inUse.value = pobjQxDepartmentInfoEN.inUse; // 是否在用
        memo.value = pobjQxDepartmentInfoEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        departmentId.value = '';
        departmentName.value = '';
        departmentAbbrName.value = '';
        departmentTypeId.value = '0';
        upDepartmentId.value = '0';
        orderNum.value = 0;
        inUse.value = false;
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
              if (['02', '03', '06'].indexOf(clsQxDepartmentInfoEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (QxDepartmentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsQxDepartmentInfoEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (QxDepartmentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsQxDepartmentInfoEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In QxDepartmentInfo_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (QxDepartmentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsQxDepartmentInfoEN._CurrTabName,
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
      const strTitle = ref('部门编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<QxDepartmentInfo_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: QxDepartmentInfo_EditEx) => {
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
        GetEditDataQxDepartmentInfoObj,
        ShowDataFromQxDepartmentInfoObj,
        Clear,
        btnSubmit_Click,
        departmentId,
        departmentName,
        departmentAbbrName,
        departmentTypeId,
        upDepartmentId,
        orderNum,
        inUse,
        memo,
        arrQxDepartmentType,
        arrQxDepartmentInfo,
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
      btnQxDepartmentInfo_Edit_Click(strCommandName: string, strKeyId: string) {
        QxDepartmentInfo_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
