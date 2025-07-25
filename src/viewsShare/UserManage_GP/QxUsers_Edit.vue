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
          <tr id="trUserName">
            <td class="text-right">
              <label
                id="lblUserId"
                name="lblUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId"
                v-model="userId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblUserName"
                name="lblUserName"
                class="col-form-label text-right"
                style="width: 90px"
                >用户名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserName"
                v-model="userName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trUserStateId">
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
              <select
                id="ddlDepartmentId"
                v-model="departmentId"
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
                id="lblUserStateId"
                name="lblUserStateId"
                class="col-form-label text-right"
                style="width: 90px"
                >用户状态Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUserStateId"
                v-model="userStateId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrQxUserState"
                  :key="index"
                  :value="item.userStateId"
                >
                  {{ item.userStateName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trEffitiveBeginDate">
            <td class="text-right">
              <label
                id="lblPassword"
                name="lblPassword"
                class="col-form-label text-right"
                style="width: 90px"
                >口令
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPassword"
                v-model="password"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblEffitiveBeginDate"
                name="lblEffitiveBeginDate"
                class="col-form-label text-right"
                style="width: 90px"
                >有效开始日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtEffitiveBeginDate"
                v-model="effitiveBeginDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trStuTeacherId">
            <td class="text-right">
              <label
                id="lblEffitiveEndDate"
                name="lblEffitiveEndDate"
                class="col-form-label text-right"
                style="width: 90px"
                >有效结束日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtEffitiveEndDate"
                v-model="effitiveEndDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblStuTeacherId"
                name="lblStuTeacherId"
                class="col-form-label text-right"
                style="width: 90px"
                >学工号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuTeacherId"
                v-model="stuTeacherId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsArchive">
            <td class="text-right">
              <label
                id="lblIdentityId"
                name="lblIdentityId"
                class="col-form-label text-right"
                style="width: 90px"
                >身份编号
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdentityId"
                v-model="identityId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrQxUserIdentity"
                  :key="index"
                  :value="item.identityId"
                >
                  {{ item.identityDesc }}
                </option></select
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsArchive"
                  v-model="isArchive"
                  type="checkbox"
                  Text="是否存档"
                /><label for="chkIsArchive">是否存档</label></span
              >
            </td>
          </tr>
          <tr id="trEmail">
            <td class="text-right">
              <label
                id="lblOpenId"
                name="lblOpenId"
                class="col-form-label text-right"
                style="width: 90px"
                >微信openid
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOpenId"
                v-model="openId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblEmail"
                name="lblEmail"
                class="col-form-label text-right"
                style="width: 90px"
                >邮箱
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtEmail"
                v-model="email"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsSynch">
            <td class="text-right">
              <label
                id="lblPhoneNumber"
                name="lblPhoneNumber"
                class="col-form-label text-right"
                style="width: 90px"
                >电话号码
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPhoneNumber"
                v-model="phoneNumber"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsSynch" v-model="isSynch" type="checkbox" Text="是否同步" /><label
                  for="chkIsSynch"
                  >是否同步</label
                ></span
              >
            </td>
          </tr>
          <tr id="trDetailInfoTab">
            <td class="text-right">
              <label
                id="lblSynchDate"
                name="lblSynchDate"
                class="col-form-label text-right"
                style="width: 90px"
                >同步日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSynchDate"
                v-model="synchDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDetailInfoTab"
                name="lblDetailInfoTab"
                class="col-form-label text-right"
                style="width: 90px"
                >详细信息表
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDetailInfoTab"
                v-model="detailInfoTab"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdGradeBase">
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
            <td class="text-right">
              <label
                id="lblIdGradeBase"
                name="lblIdGradeBase"
                class="col-form-label text-right"
                style="width: 90px"
                >年级流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdGradeBase"
                v-model="idGradeBase"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdXzCollege">
            <td class="text-right">
              <label
                id="lblIdSchool"
                name="lblIdSchool"
                class="col-form-label text-right"
                style="width: 90px"
                >学校流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdSchool"
                v-model="idSchool"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblIdXzCollege"
                name="lblIdXzCollege"
                class="col-form-label text-right"
                style="width: 90px"
                >学院Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdXzCollege"
                v-model="idXzCollege"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxUsers" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitQxUsers" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import QxUsers_EditEx from '@/viewsShare/UserManage_GP/QxUsers_EditEx';
  import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
  import { clsQxDepartmentInfoEN } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoEN';
  import { clsQxUserStateEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserStateEN';
  import { clsQxUserIdentityEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserIdentityEN';
  import { QxDepartmentInfo_GetArrQxDepartmentInfo } from '@/ts/L3ForWApi/UserManage_GP/clsQxDepartmentInfoWApi';
  import { QxUserState_GetArrQxUserState } from '@/ts/L3ForWApi/UserManage_GP/clsQxUserStateWApi';
  import { QxUserIdentity_GetArrQxUserIdentity } from '@/ts/L3ForWApi/UserManage_GP/clsQxUserIdentityWApi';
  import { refDivEdit } from '@/viewsShare/UserManage_GP/QxUsersVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { QxUsers_Edit } from '@/viewsBase/UserManage_GP/QxUsers_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'QxUsersEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const userId = ref('');
      const userName = ref('');
      const departmentId = ref('');
      const userStateId = ref('');
      const password = ref('');
      const effitiveBeginDate = ref('');
      const effitiveEndDate = ref('');
      const stuTeacherId = ref('');
      const identityId = ref('');
      const isArchive = ref(true);
      const openId = ref('');
      const email = ref('');
      const phoneNumber = ref('');
      const isSynch = ref(true);
      const synchDate = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const detailInfoTab = ref('');
      const memo = ref('');
      const idGradeBase = ref('');
      const idSchool = ref('');
      const idXzCollege = ref('');

      const arrQxDepartmentInfo = ref<clsQxDepartmentInfoEN[] | null>([]);
      const arrQxUserState = ref<clsQxUserStateEN[] | null>([]);
      const arrQxUserIdentity = ref<clsQxUserIdentityEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrQxDepartmentInfo.value = await QxDepartmentInfo_GetArrQxDepartmentInfo(); //编辑区域
        departmentId.value = '0';

        arrQxUserState.value = await QxUserState_GetArrQxUserState(); //编辑区域
        userStateId.value = '0';

        arrQxUserIdentity.value = await QxUserIdentity_GetArrQxUserIdentity(); //编辑区域
        identityId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQxUsersEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQxUsersObj() {
        const pobjQxUsersEN = new clsQxUsersEN();
        pobjQxUsersEN.SetUserId(userId.value); // 用户ID
        pobjQxUsersEN.SetUserName(userName.value); // 用户名
        pobjQxUsersEN.SetDepartmentId(Is0EqEmpty(departmentId.value)); // 部门Id
        pobjQxUsersEN.SetUserStateId(Is0EqEmpty(userStateId.value)); // 用户状态Id
        pobjQxUsersEN.SetPassword(password.value); // 口令
        pobjQxUsersEN.SetEffitiveBeginDate(effitiveBeginDate.value); // 有效开始日期
        pobjQxUsersEN.SetEffitiveEndDate(effitiveEndDate.value); // 有效结束日期
        pobjQxUsersEN.SetStuTeacherId(stuTeacherId.value); // 学工号
        pobjQxUsersEN.SetIdentityId(Is0EqEmpty(identityId.value)); // 身份编号
        pobjQxUsersEN.SetIsArchive(isArchive.value); // 是否存档
        pobjQxUsersEN.SetOpenId(openId.value); // 微信openid
        pobjQxUsersEN.SetEmail(email.value); // 邮箱
        pobjQxUsersEN.SetPhoneNumber(phoneNumber.value); // 电话号码
        pobjQxUsersEN.SetIsSynch(isSynch.value); // 是否同步
        pobjQxUsersEN.SetSynchDate(synchDate.value); // 同步日期
        pobjQxUsersEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjQxUsersEN.SetUpdUser(userStore.getUserId); // 修改用户
        pobjQxUsersEN.SetDetailInfoTab(detailInfoTab.value); // 详细信息表
        pobjQxUsersEN.SetMemo(memo.value); // 备注
        pobjQxUsersEN.SetIdGradeBase(idGradeBase.value); // 年级流水号
        pobjQxUsersEN.SetIdSchool(idSchool.value); // 学校流水号
        pobjQxUsersEN.SetIdXzCollege(idXzCollege.value); // 学院Id
        return pobjQxUsersEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxUsersEN">表实体类对象</param>
       **/
      async function ShowDataFromQxUsersObj(pobjQxUsersEN: clsQxUsersEN) {
        userId.value = pobjQxUsersEN.userId; // 用户ID
        userName.value = pobjQxUsersEN.userName; // 用户名
        departmentId.value = IsNullOrEmptyEq0(pobjQxUsersEN.departmentId); // 部门Id
        userStateId.value = IsNullOrEmptyEq0(pobjQxUsersEN.userStateId); // 用户状态Id
        password.value = pobjQxUsersEN.password; // 口令
        effitiveBeginDate.value = pobjQxUsersEN.effitiveBeginDate; // 有效开始日期
        effitiveEndDate.value = pobjQxUsersEN.effitiveEndDate; // 有效结束日期
        stuTeacherId.value = pobjQxUsersEN.stuTeacherId; // 学工号
        identityId.value = IsNullOrEmptyEq0(pobjQxUsersEN.identityId); // 身份编号
        isArchive.value = pobjQxUsersEN.isArchive; // 是否存档
        openId.value = pobjQxUsersEN.openId; // 微信openid
        email.value = pobjQxUsersEN.email; // 邮箱
        phoneNumber.value = pobjQxUsersEN.phoneNumber; // 电话号码
        isSynch.value = pobjQxUsersEN.isSynch; // 是否同步
        synchDate.value = pobjQxUsersEN.synchDate; // 同步日期
        detailInfoTab.value = pobjQxUsersEN.detailInfoTab; // 详细信息表
        memo.value = pobjQxUsersEN.memo; // 备注
        idGradeBase.value = pobjQxUsersEN.idGradeBase; // 年级流水号
        idSchool.value = pobjQxUsersEN.idSchool; // 学校流水号
        idXzCollege.value = pobjQxUsersEN.idXzCollege; // 学院Id
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        userId.value = '';
        userName.value = '';
        departmentId.value = '0';
        userStateId.value = '0';
        password.value = '';
        effitiveBeginDate.value = '';
        effitiveEndDate.value = '';
        stuTeacherId.value = '';
        identityId.value = '0';
        isArchive.value = false;
        openId.value = '';
        email.value = '';
        phoneNumber.value = '';
        isSynch.value = false;
        synchDate.value = '';
        detailInfoTab.value = '';
        memo.value = '';
        idGradeBase.value = '';
        idSchool.value = '';
        idXzCollege.value = '';
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
              if (['02', '03', '06'].indexOf(clsQxUsersEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (QxUsers_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsQxUsersEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (QxUsers_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsQxUsersEN._CurrTabName, keyId.value);
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In QxUsers_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (QxUsers_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsQxUsersEN._CurrTabName, keyId.value);
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
      const strTitle = ref('用户编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<QxUsers_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: QxUsers_EditEx) => {
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
        GetEditDataQxUsersObj,
        ShowDataFromQxUsersObj,
        Clear,
        btnSubmit_Click,
        userId,
        userName,
        departmentId,
        userStateId,
        password,
        effitiveBeginDate,
        effitiveEndDate,
        stuTeacherId,
        identityId,
        isArchive,
        openId,
        email,
        phoneNumber,
        isSynch,
        synchDate,
        updDate,
        updUser,
        detailInfoTab,
        memo,
        idGradeBase,
        idSchool,
        idXzCollege,
        arrQxDepartmentInfo,
        arrQxUserState,
        arrQxUserIdentity,
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
      btnQxUsers_Edit_Click(strCommandName: string, strKeyId: string) {
        QxUsers_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
