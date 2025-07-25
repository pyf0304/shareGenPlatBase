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
              <span id="spnUserName_d" name="spnUserName_d" CssClass="col-form-label text-right"
                >用户名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUserName_d"
                name="lblUserName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ userName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnDepartmentId_d"
                name="spnDepartmentId_d"
                CssClass="col-form-label text-right"
                >部门Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDepartmentId_d"
                name="lblDepartmentId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ departmentId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnUserStateId_d"
                name="spnUserStateId_d"
                CssClass="col-form-label text-right"
                >用户状态Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUserStateId_d"
                name="lblUserStateId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ userStateId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnPassword_d" name="spnPassword_d" CssClass="col-form-label text-right"
                >口令</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPassword_d"
                name="lblPassword_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ password }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnEffitiveBeginDate_d"
                name="spnEffitiveBeginDate_d"
                CssClass="col-form-label text-right"
                >有效开始日期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblEffitiveBeginDate_d"
                name="lblEffitiveBeginDate_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ effitiveBeginDate }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnEffitiveEndDate_d"
                name="spnEffitiveEndDate_d"
                CssClass="col-form-label text-right"
                >有效结束日期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblEffitiveEndDate_d"
                name="lblEffitiveEndDate_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ effitiveEndDate }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnStuTeacherId_d"
                name="spnStuTeacherId_d"
                CssClass="col-form-label text-right"
                >学工号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblStuTeacherId_d"
                name="lblStuTeacherId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ stuTeacherId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnIdentityId_d" name="spnIdentityId_d" CssClass="col-form-label text-right"
                >身份编号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdentityId_d"
                name="lblIdentityId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ identityId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsArchive_d" name="spnIsArchive_d" CssClass="col-form-label text-right"
                >是否存档</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsArchive_d"
                name="lblIsArchive_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isArchive }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnOpenId_d" name="spnOpenId_d" CssClass="col-form-label text-right"
                >微信openid</span
              >
            </td>
            <td class="text-left">
              <label id="lblOpenId_d" name="lblOpenId_d" class="text-primary" style="width: 150px">
                {{ openId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnEmail_d" name="spnEmail_d" CssClass="col-form-label text-right"
                >邮箱</span
              >
            </td>
            <td class="text-left">
              <label id="lblEmail_d" name="lblEmail_d" class="text-primary" style="width: 150px">
                {{ email }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnPhoneNumber_d"
                name="spnPhoneNumber_d"
                CssClass="col-form-label text-right"
                >电话号码</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPhoneNumber_d"
                name="lblPhoneNumber_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ phoneNumber }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsSynch_d" name="spnIsSynch_d" CssClass="col-form-label text-right"
                >是否同步</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsSynch_d"
                name="lblIsSynch_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isSynch }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnSynchDate_d" name="spnSynchDate_d" CssClass="col-form-label text-right"
                >同步日期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblSynchDate_d"
                name="lblSynchDate_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ synchDate }}
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
            <td class="text-right">
              <span
                id="spnDetailInfoTab_d"
                name="spnDetailInfoTab_d"
                CssClass="col-form-label text-right"
                >详细信息表</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDetailInfoTab_d"
                name="lblDetailInfoTab_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ detailInfoTab }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIdGradeBase_d"
                name="spnIdGradeBase_d"
                CssClass="col-form-label text-right"
                >年级流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdGradeBase_d"
                name="lblIdGradeBase_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ idGradeBase }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnIdSchool_d" name="spnIdSchool_d" CssClass="col-form-label text-right"
                >学校流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdSchool_d"
                name="lblIdSchool_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ idSchool }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnheadPic_d" name="spnheadPic_d" CssClass="col-form-label text-right"
                >头像</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblheadPic_d"
                name="lblheadPic_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ headPic }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIdXzCollege_d"
                name="spnIdXzCollege_d"
                CssClass="col-form-label text-right"
                >学院Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdXzCollege_d"
                name="lblIdXzCollege_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ idXzCollege }}
              </label>
            </td>
          </tr>
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
              <label id="lblDepartmentName_d" name="lblDepartmentName_d" class="text-primary"
                >{{ departmentName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnDepartmentTypeId_d"
                name="spnDepartmentTypeId_d"
                CssClass="col-form-label text-right"
                >部门类型ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblDepartmentTypeId_d" name="lblDepartmentTypeId_d" class="text-primary"
                >{{ departmentTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDepartmentTypeName_d"
                name="spnDepartmentTypeName_d"
                CssClass="col-form-label text-right"
                >部门类型名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDepartmentTypeName_d"
                name="lblDepartmentTypeName_d"
                class="text-primary"
                >{{ departmentTypeName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnDuUserName_d" name="spnDuUserName_d" CssClass="col-form-label text-right"
                >用户名</span
              >
            </td>
            <td class="text-left">
              <label id="lblDuUserName_d" name="lblDuUserName_d" class="text-primary"
                >{{ duUserName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnUserStateName_d"
                name="spnUserStateName_d"
                CssClass="col-form-label text-right"
                >用户状态名</span
              >
            </td>
            <td class="text-left">
              <label id="lblUserStateName_d" name="lblUserStateName_d" class="text-primary"
                >{{ userStateName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIdentityDesc_d"
                name="spnIdentityDesc_d"
                CssClass="col-form-label text-right"
                >身份描述</span
              >
            </td>
            <td class="text-left">
              <label id="lblIdentityDesc_d" name="lblIdentityDesc_d" class="text-primary"
                >{{ identityDesc }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCollegeName_d"
                name="spnCollegeName_d"
                CssClass="col-form-label text-right"
                >学院名</span
              >
            </td>
            <td class="text-left">
              <label id="lblCollegeName_d" name="lblCollegeName_d" class="text-primary"
                >{{ collegeName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnSchoolName_d" name="spnSchoolName_d" CssClass="col-form-label text-right"
                >学校名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblSchoolName_d" name="lblSchoolName_d" class="text-primary"
                >{{ schoolName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnGradeBaseName_d"
                name="spnGradeBaseName_d"
                CssClass="col-form-label text-right"
                >年级名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblGradeBaseName_d" name="lblGradeBaseName_d" class="text-primary"
                >{{ gradeBaseName }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxUsers" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import QxUsers_DetailEx from '@/viewsShare/UserManage_GP/QxUsers_DetailEx';
  import { clsQxUsersENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUsersENEx';
  export default defineComponent({
    name: 'QxUsersDetail',
    components: {
      // 组件注册
    },
    setup() {
      const userName = ref('');
      const departmentId = ref('');
      const userStateId = ref('');
      const password = ref('');
      const effitiveBeginDate = ref('');
      const effitiveEndDate = ref('');
      const stuTeacherId = ref('');
      const identityId = ref('');
      const isArchive = ref('0');
      const openId = ref('');
      const email = ref('');
      const phoneNumber = ref('');
      const isSynch = ref('0');
      const synchDate = ref('');
      const memo = ref('');
      const detailInfoTab = ref('');
      const idGradeBase = ref('');
      const idSchool = ref('');
      const headPic = ref('');
      const idXzCollege = ref('');
      const departmentName = ref('');
      const departmentTypeId = ref('');
      const departmentTypeName = ref('');
      const duUserName = ref('');
      const userStateName = ref('');
      const identityDesc = ref('');
      const collegeName = ref('');
      const schoolName = ref('');
      const gradeBaseName = ref('');
      const dateTimeSim = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxUsersEN">表实体类对象</param>
       **/
      async function ShowDataFromQxUsersObj(pobjQxUsersENEx: clsQxUsersENEx) {
        userName.value = pobjQxUsersENEx.userName; // 用户名
        departmentId.value = pobjQxUsersENEx.departmentId; // 部门Id
        userStateId.value = pobjQxUsersENEx.userStateId; // 用户状态Id
        password.value = pobjQxUsersENEx.password; // 口令
        effitiveBeginDate.value = pobjQxUsersENEx.effitiveBeginDate; // 有效开始日期
        effitiveEndDate.value = pobjQxUsersENEx.effitiveEndDate; // 有效结束日期
        stuTeacherId.value = pobjQxUsersENEx.stuTeacherId; // 学工号
        identityId.value = pobjQxUsersENEx.identityId; // 身份编号
        isArchive.value =
          pobjQxUsersENEx.isArchive !== null ? pobjQxUsersENEx.isArchive.toString() : ''; // 是否存档
        openId.value = pobjQxUsersENEx.openId; // 微信openid
        email.value = pobjQxUsersENEx.email; // 邮箱
        phoneNumber.value = pobjQxUsersENEx.phoneNumber; // 电话号码
        isSynch.value = pobjQxUsersENEx.isSynch !== null ? pobjQxUsersENEx.isSynch.toString() : ''; // 是否同步
        synchDate.value = pobjQxUsersENEx.synchDate; // 同步日期
        memo.value = pobjQxUsersENEx.memo; // 备注
        detailInfoTab.value = pobjQxUsersENEx.detailInfoTab; // 详细信息表
        idGradeBase.value = pobjQxUsersENEx.idGradeBase; // 年级流水号
        idSchool.value = pobjQxUsersENEx.idSchool; // 学校流水号
        headPic.value = pobjQxUsersENEx.headPic; // 头像
        idXzCollege.value = pobjQxUsersENEx.idXzCollege; // 学院Id
        departmentName.value = pobjQxUsersENEx.departmentName; // 部门名
        departmentTypeId.value = pobjQxUsersENEx.departmentTypeId; // 部门类型ID
        departmentTypeName.value = pobjQxUsersENEx.departmentTypeName; // 部门类型名
        duUserName.value = pobjQxUsersENEx.duUserName; // 用户名
        userStateName.value = pobjQxUsersENEx.userStateName; // 用户状态名
        identityDesc.value = pobjQxUsersENEx.identityDesc; // 身份描述
        collegeName.value = pobjQxUsersENEx.collegeName; // 学院名
        schoolName.value = pobjQxUsersENEx.schoolName; // 学校名称
        gradeBaseName.value = pobjQxUsersENEx.gradeBaseName; // 年级名称
        dateTimeSim.value = pobjQxUsersENEx.dateTimeSim; // 简化日期时间
      }
      const strTitle = ref('用户详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxUsers':
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
          case 'btnCancelQxUsers':
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
        ShowDataFromQxUsersObj,
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
        memo,
        detailInfoTab,
        idGradeBase,
        idSchool,
        headPic,
        idXzCollege,
        departmentName,
        departmentTypeId,
        departmentTypeName,
        duUserName,
        userStateName,
        identityDesc,
        collegeName,
        schoolName,
        gradeBaseName,
        dateTimeSim,
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
      btnQxUsers_Detail_Click(strCommandName: string, strKeyId: string) {
        QxUsers_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
