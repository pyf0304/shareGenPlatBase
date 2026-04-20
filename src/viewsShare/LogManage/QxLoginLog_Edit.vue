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
          <tr id="trLoginIP">
            <td class="text-right">
              <label
                id="lblLoginLogNumber"
                name="lblLoginLogNumber"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginLogNumber
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginLogNumber"
                v-model="loginLogNumber"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginIP"
                name="lblLoginIP"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginIP
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginIP"
                v-model="loginIP"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trLoginResult">
            <td class="text-right">
              <label
                id="lblFailReason"
                name="lblFailReason"
                class="col-form-label text-right"
                style="width: 90px"
                >FailReason
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFailReason"
                v-model="failReason"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginResult"
                name="lblLoginResult"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginResult
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginResult"
                v-model="loginResult"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trLoginUserId">
            <td class="text-right">
              <label
                id="lblLoginTime"
                name="lblLoginTime"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginTime"
                v-model="loginTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginUserId"
                name="lblLoginUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginUserId
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginUserId"
                v-model="loginUserId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trOutTime">
            <td class="text-right">
              <label
                id="lblOnlineTime"
                name="lblOnlineTime"
                class="col-form-label text-right"
                style="width: 90px"
                >OnlineTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOnlineTime"
                v-model="onlineTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblOutTime"
                name="lblOutTime"
                class="col-form-label text-right"
                style="width: 90px"
                >OutTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOutTime"
                v-model="outTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
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
      <el-button id="btnCancelQxLoginLog" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitQxLoginLog" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import QxLoginLog_EditEx from '@/views/LogManage/QxLoginLog_EditEx';
  import { clsQxLoginLogEN } from '@/ts/L0Entity/LogManage/clsQxLoginLogEN';
  import { refDivEdit } from '@/viewsShare/LogManage/QxLoginLogVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { QxLoginLog_Edit } from '@/viewsBase/LogManage/QxLoginLog_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'QxLoginLogEdit',

    components: {
      // 组件注册
    },

    setup() {
      const userStore = useUserStore();
      const strTitle = ref('登录日志编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<QxLoginLog_EditEx>();
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

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjQxLoginLogEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQxLoginLogObj() {
        const pobjQxLoginLogEN = new clsQxLoginLogEN();
        pobjQxLoginLogEN.SetLoginLogNumber(loginLogNumber.value); // LoginLogNumber
        pobjQxLoginLogEN.SetLoginIP(loginIP.value); // LoginIP
        pobjQxLoginLogEN.SetFailReason(failReason.value); // FailReason
        pobjQxLoginLogEN.SetLoginResult(loginResult.value); // LoginResult
        pobjQxLoginLogEN.SetLoginTime(loginTime.value); // LoginTime
        pobjQxLoginLogEN.SetLoginUserId(loginUserId.value); // LoginUserId
        pobjQxLoginLogEN.SetOnlineTime(onlineTime.value); // OnlineTime
        pobjQxLoginLogEN.SetOutTime(outTime.value); // OutTime
        pobjQxLoginLogEN.SetMemo(memo.value); // 备注
        return pobjQxLoginLogEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjQxLoginLogEN">表实体类对象</param>
       **/
      async function ShowDataFromQxLoginLogObj(pobjQxLoginLogEN: clsQxLoginLogEN) {
        loginLogNumber.value = pobjQxLoginLogEN.loginLogNumber; // LoginLogNumber
        loginIP.value = pobjQxLoginLogEN.loginIP; // LoginIP
        failReason.value = pobjQxLoginLogEN.failReason; // FailReason
        loginResult.value = pobjQxLoginLogEN.loginResult; // LoginResult
        loginTime.value = pobjQxLoginLogEN.loginTime; // LoginTime
        loginUserId.value = pobjQxLoginLogEN.loginUserId; // LoginUserId
        onlineTime.value = pobjQxLoginLogEN.onlineTime; // OnlineTime
        outTime.value = pobjQxLoginLogEN.outTime; // OutTime
        memo.value = pobjQxLoginLogEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        loginLogNumber.value = '';
        loginIP.value = '';
        failReason.value = '';
        loginResult.value = '';
        loginTime.value = '';
        loginUserId.value = '';
        onlineTime.value = '';
        outTime.value = '';
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
              if (['02', '03', '06'].indexOf(clsQxLoginLogEN._PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsQxLoginLogEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (QxLoginLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsQxLoginLogEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In QxLoginLog_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (QxLoginLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsQxLoginLogEN._CurrTabName,
                    keyId.value.toString(),
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

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDialog)
       **/
      const showDialog = async (pobjPage_Edit: QxLoginLog_EditEx) => {
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
        GetEditDataQxLoginLogObj,
        ShowDataFromQxLoginLogObj,
        Clear,
        btnSubmit_Click,
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

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Methods_btnEdit_Click)
       **/
      btnQxLoginLog_Edit_Click(strCommandName: string, strKeyId: string) {
        QxLoginLog_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
