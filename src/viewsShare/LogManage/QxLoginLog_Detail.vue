<template>
  <el-dialog v-model:visible="dialogVisible" :width="dialogWidth" :show-close="false">
    <!-- 使用头部插槽来自定义对话框的标题 -->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
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
                id="spnLoginLogNumber_d"
                name="spnLoginLogNumber_d"
                CssClass="col-form-label text-right"
                >LoginLogNumber</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblLoginLogNumber_d"
                name="lblLoginLogNumber_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ loginLogNumber }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnLoginIP_d" name="spnLoginIP_d" CssClass="col-form-label text-right"
                >LoginIP</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblLoginIP_d"
                name="lblLoginIP_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ loginIP }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnFailReason_d" name="spnFailReason_d" CssClass="col-form-label text-right"
                >FailReason</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFailReason_d"
                name="lblFailReason_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ failReason }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnLoginResult_d"
                name="spnLoginResult_d"
                CssClass="col-form-label text-right"
                >LoginResult</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblLoginResult_d"
                name="lblLoginResult_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ loginResult }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnLoginTime_d" name="spnLoginTime_d" CssClass="col-form-label text-right"
                >LoginTime</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblLoginTime_d"
                name="lblLoginTime_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ loginTime }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnLoginUserId_d"
                name="spnLoginUserId_d"
                CssClass="col-form-label text-right"
                >LoginUserId</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblLoginUserId_d"
                name="lblLoginUserId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ loginUserId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnOnlineTime_d" name="spnOnlineTime_d" CssClass="col-form-label text-right"
                >OnlineTime</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblOnlineTime_d"
                name="lblOnlineTime_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ onlineTime }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnOutTime_d" name="spnOutTime_d" CssClass="col-form-label text-right"
                >OutTime</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblOutTime_d"
                name="lblOutTime_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ outTime }}
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
      <el-button id="btnCancelQxLoginLog" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import QxLoginLog_DetailEx from '@/views/LogManage/QxLoginLog_DetailEx';
  import { clsQxLoginLogENEx } from '@/ts/L0Entity/LogManage/clsQxLoginLogENEx';
  export default defineComponent({
    name: 'QxLoginLogDetail',

    components: {
      // 组件注册
    },

    setup() {
      const strTitle = ref('登录日志详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const loginLogNumber = ref('');
      const loginIP = ref('');
      const failReason = ref('');
      const loginResult = ref('');
      const loginTime = ref('');
      const loginUserId = ref('');
      const onlineTime = ref('');
      const outTime = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Detail_setup_ShowDataFromObj)
       * @param pobjQxLoginLogEN">表实体类对象</param>
       **/
      async function ShowDataFromQxLoginLogObj(pobjQxLoginLogENEx: clsQxLoginLogENEx) {
        loginLogNumber.value = pobjQxLoginLogENEx.loginLogNumber; // LoginLogNumber
        loginIP.value = pobjQxLoginLogENEx.loginIP; // LoginIP
        failReason.value = pobjQxLoginLogENEx.failReason; // FailReason
        loginResult.value = pobjQxLoginLogENEx.loginResult; // LoginResult
        loginTime.value = pobjQxLoginLogENEx.loginTime; // LoginTime
        loginUserId.value = pobjQxLoginLogENEx.loginUserId; // LoginUserId
        onlineTime.value = pobjQxLoginLogENEx.onlineTime; // OnlineTime
        outTime.value = pobjQxLoginLogENEx.outTime; // OutTime
        memo.value = pobjQxLoginLogENEx.memo; // 备注
      }

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Detail_Setup_ShowDialog)
       **/
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

      /**
       * 隐藏对话框
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Detail_Setup_HideDialog)
       **/
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
        ShowDataFromQxLoginLogObj,
        loginLogNumber,
        loginIP,
        failReason,
        loginResult,
        loginTime,
        loginUserId,
        onlineTime,
        outTime,
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
      btnQxLoginLog_Detail_Click(strCommandName: string, strKeyId: string) {
        QxLoginLog_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
