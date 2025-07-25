<template>
  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button type="primary" @click="dialogVisible = false"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <span
                id="spnDepartmentName_d"
                name="spnDepartmentName_d"
                CssClass="col-form-label text-right"
                >部门名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDepartmentName_d"
                name="lblDepartmentName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ departmentName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnDepartmentAbbrName_d"
                name="spnDepartmentAbbrName_d"
                CssClass="col-form-label text-right"
                >名称缩写</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDepartmentAbbrName_d"
                name="lblDepartmentAbbrName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ departmentAbbrName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDepartmentTypeId_d"
                name="spnDepartmentTypeId_d"
                CssClass="col-form-label text-right"
                >部门类型ID</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDepartmentTypeId_d"
                name="lblDepartmentTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ departmentTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnUpDepartmentId_d"
                name="spnUpDepartmentId_d"
                CssClass="col-form-label text-right"
                >所属部门号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUpDepartmentId_d"
                name="lblUpDepartmentId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ upDepartmentId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnOrderNum_d" name="spnOrderNum_d" CssClass="col-form-label text-right"
                >排序号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblOrderNum_d"
                name="lblOrderNum_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ orderNum }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnInUse_d" name="spnInUse_d" CssClass="col-form-label text-right"
                >是否在用</span
              >
            </td>
            <td class="text-left">
              <label id="lblInUse_d" name="lblInUse_d" class="text-primary" style="width: 150px">
                {{ inUse }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
                {{ memo }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxDepartmentInfo" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import QxDepartmentInfo_DetailEx from '@/viewsShare/UserManage/QxDepartmentInfo_DetailEx';
  import { clsQxDepartmentInfoENEx } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoENEx';
  export default defineComponent({
    name: 'QxDepartmentInfoDetail',
    components: {
      // 组件注册
    },
    setup() {
      const departmentName = ref('');
      const departmentAbbrName = ref('');
      const departmentTypeId = ref('');
      const upDepartmentId = ref('');
      const orderNum = ref(0);
      const inUse = ref('0');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxDepartmentInfoEN">表实体类对象</param>
       **/
      async function ShowDataFromQxDepartmentInfoObj(
        pobjQxDepartmentInfoENEx: clsQxDepartmentInfoENEx,
      ) {
        departmentName.value = pobjQxDepartmentInfoENEx.departmentName; // 部门名
        departmentAbbrName.value = pobjQxDepartmentInfoENEx.departmentAbbrName; // 名称缩写
        departmentTypeId.value = pobjQxDepartmentInfoENEx.departmentTypeId; // 部门类型ID
        upDepartmentId.value = pobjQxDepartmentInfoENEx.upDepartmentId; // 所属部门号
        orderNum.value = pobjQxDepartmentInfoENEx.orderNum; // 排序号
        inUse.value =
          pobjQxDepartmentInfoENEx.inUse !== null ? pobjQxDepartmentInfoENEx.inUse.toString() : ''; // 是否在用
        memo.value = pobjQxDepartmentInfoENEx.memo; // 备注
      }
      const strTitle = ref('部门详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxDepartmentInfo':
            strCancelButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxDepartmentInfo':
            return strCancelButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        refDivDetail,
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        ShowDataFromQxDepartmentInfoObj,
        departmentName,
        departmentAbbrName,
        departmentTypeId,
        upDepartmentId,
        orderNum,
        inUse,
        memo,
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
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnQxDepartmentInfo_Detail_Click(strCommandName: string, strKeyId: string) {
        QxDepartmentInfo_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
