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
              <span id="spnUserId_d" name="spnUserId_d" CssClass="col-form-label text-right"
                >用户ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblUserId_d" name="lblUserId_d" class="text-primary" style="width: 150px">
                {{ userId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnUserName_d" name="spnUserName_d" CssClass="col-form-label text-right"
                >用户名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUserName_d"
                name="lblUserName_d"
                class="text-primary"
                style="width: 100px"
                >{{ userName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnRoleId_d" name="spnRoleId_d" CssClass="col-form-label text-right"
                >角色Id</span
              >
            </td>
            <td class="text-left">
              <label id="lblRoleId_d" name="lblRoleId_d" class="text-primary" style="width: 150px">
                {{ roleId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnRoleName_d" name="spnRoleName_d" CssClass="col-form-label text-right"
                >角色名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRoleName_d"
                name="lblRoleName_d"
                class="text-primary"
                style="width: 100px"
                >{{ roleName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnUserId_d" name="spnUserId_d" CssClass="col-form-label text-right"
                >部门名</span
              >
            </td>
            <td class="text-left">
              <label id="lblUserId_d" name="lblUserId_d" class="text-primary" style="width: 100px">
                {{ userId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnUserId_d" name="spnUserId_d" CssClass="col-form-label text-right"
                >部门类型名</span
              >
            </td>
            <td class="text-left">
              <label id="lblUserId_d" name="lblUserId_d" class="text-primary" style="width: 100px">
                {{ userId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnQxPrjId_d" name="spnQxPrjId_d" CssClass="col-form-label text-right"
                >项目Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblQxPrjId_d"
                name="lblQxPrjId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ qxPrjId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnQxPrjId_d" name="spnQxPrjId_d" CssClass="col-form-label text-right"
                >工程名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblQxPrjId_d"
                name="lblQxPrjId_d"
                class="text-primary"
                style="width: 100px"
              >
                {{ qxPrjId }}
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
      <el-button id="btnCancelQxUserRoleRelation" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import QxUserRoleRelation_DetailEx from '@/viewsShare/UserManage_GP/QxUserRoleRelation_DetailEx';
  import { clsQxUserRoleRelationENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUserRoleRelationENEx';
  export default defineComponent({
    name: 'QxUserRoleRelationDetail',
    components: {
      // 组件注册
    },
    setup() {
      const userId = ref('');
      const userName = ref('');
      const roleId = ref('');
      const roleName = ref('');

      const qxPrjId = ref('');

      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxUserRoleRelationEN">表实体类对象</param>
       **/
      async function ShowDataFromQxUserRoleRelationObj(
        pobjQxUserRoleRelationENEx: clsQxUserRoleRelationENEx,
      ) {
        userId.value = pobjQxUserRoleRelationENEx.userId; // 用户ID
        userName.value = pobjQxUserRoleRelationENEx.userName; // 用户名
        roleId.value = pobjQxUserRoleRelationENEx.roleId; // 角色Id
        roleName.value = pobjQxUserRoleRelationENEx.roleName; // 角色名称
        userId.value = pobjQxUserRoleRelationENEx.userId; // 部门名
        userId.value = pobjQxUserRoleRelationENEx.userId; // 部门类型名
        qxPrjId.value = pobjQxUserRoleRelationENEx.qxPrjId; // 项目Id
        qxPrjId.value = pobjQxUserRoleRelationENEx.qxPrjId; // 工程名
        memo.value = pobjQxUserRoleRelationENEx.memo; // 备注
      }
      const strTitle = ref('用户角色关系详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxUserRoleRelation':
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
          case 'btnCancelQxUserRoleRelation':
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
        ShowDataFromQxUserRoleRelationObj,
        userId,
        userName,
        roleId,
        roleName,

        qxPrjId,

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
      btnQxUserRoleRelation_Detail_Click(strCommandName: string, strKeyId: string) {
        QxUserRoleRelation_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
