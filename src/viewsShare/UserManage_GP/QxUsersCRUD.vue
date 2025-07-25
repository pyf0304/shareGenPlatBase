<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }}-GPShare </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 800px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-left">
              <input
                id="txtUserId_q"
                v-model="userId_q"
                placeholder="请输入用户Id"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <input
                id="txtUserName_q"
                v-model="userName_q"
                placeholder="请输入用户名"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <select
                id="ddlDepartmentTypeId_q"
                v-model="departmentTypeId_q"
                title="请选择部门类型"
                class="form-control form-control-sm"
                style="width: 200px"
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
            <td class="text-left">
              <select
                id="ddlDepartmentId_q"
                v-model="departmentId_q"
                class="form-control form-control-sm"
                style="width: 120px"
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

            <td class="text-left">
              <select
                id="ddlIdSchool_q"
                v-model="idSchool_q"
                title="请选择学校"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option v-for="(item, index) in arrXzSchool" :key="index" :value="item.idSchool">
                  {{ item.schoolName }}
                </option></select
              >
            </td>
            <td class="text-left">
              <button
                id="btnQuery"
                name="btnQuery"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnQuery_Click"
                >查询</button
              >
            </td>

            <td class="text-left">
              <button
                id="btnExportExcel"
                name="btnExportExcel"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnExportExcel_Click"
                >导出Excel</button
              >
            </td>
          </tr>
        </tbody></table
      >
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblQxUsersList"
            name="lblQxUsersList"
            class="col-form-label text-info"
            style="width: 250px"
            >用户列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnCreate_Click"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnUpdate_Click"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnDelete_Click"
            >删除</button
          >
        </li>

        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlRoleId_SetFldValue"
              v-model="roleId_f"
              class="form-control form-control-sm"
              style="width: 100px"
            >
              <option v-for="(item, index) in arrQxRoles" :key="index" :value="item.roleId">
                {{ item.roleName }}
              </option></select
            >

            <button
              id="btnSetRole"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetRole', '')"
              >设置角色</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlIdSchool_SetFldValue"
              v-model="idSchool_f"
              class="form-control form-control-sm"
              style="width: 100px"
            >
              <option v-for="(item, index) in arrXzSchool" :key="index" :value="item.idSchool">
                {{ item.schoolName }}
              </option></select
            >
            <button
              id="btnSetIdSchool"
              name="btnSetIdSchool"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetIdSchool_Click"
              >设置学校</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <select
            v-model="detailInfoTab"
            ref="ddlDetailInfoTab"
            id="ddlDetailInfoTab"
            class="form-control form-control-sm"
            style="width: 100px"
          >
            <option value="unknown">未知</option>
            <option value="StudentInfo">学生信息表</option>
            <option value="TeacherInfo">教师信息表</option>
            <option value="CompanyInfo">公司信息表</option></select
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnSetDetailInfoTab"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('SetDetailInfoTab', '')"
            >设置详细信息表</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <!-- <QxUsers_ListCom
        ref="refQxUsers_List"
        :items="dataListQxUsers"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </QxUsers_ListCom> -->
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxUsersBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxUsers_EditCom ref="refQxUsers_Edit"></QxUsers_EditCom>
    <!--详细信息层-->
    <QxUsers_DetailCom ref="refQxUsers_Detail"></QxUsers_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import * as XLSX from 'xlsx';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
    GetSelectValueInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQxUsers_Edit,
    refQxUsers_Detail,
    refQxUsers_List,
    showErrorMessage,
    dataListQxUsers,
    emptyRecNumInfo,
    userId_q,
    userName_q,
    departmentTypeId_q,
    departmentId_q,
    roleId_f,
    QxPrjId_Local,
    idSchool_q,
    idSchool_f,
  } from '@/viewsShare/UserManage_GP/QxUsersVueShare';
  import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
  import QxUsers_EditEx from '@/viewsShare/UserManage_GP/QxUsers_EditEx';
  import QxUsers_DetailEx from '@/viewsShare/UserManage_GP/QxUsers_DetailEx';
  import QxUsersCRUDEx from '@/viewsShare/UserManage_GP/QxUsersCRUDEx';
  import QxUsers_EditCom from '@/viewsShare/UserManage_GP/QxUsers_Edit.vue';
  import QxUsers_DetailCom from '@/viewsShare/UserManage_GP/QxUsers_Detail.vue';
  import QxUsers_ListCom from '@/viewsShare/UserManage_GP/QxUsers_List.vue';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import { clsQxDepartmentTypeEN } from '@/ts/L0Entity/SysPara/clsQxDepartmentTypeEN';
  import { QxDepartmentType_GetArrQxDepartmentType } from '@/ts/L3ForWApi/SysPara/clsQxDepartmentTypeWApi';
  import { clsQxDepartmentInfoEN } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoEN';
  import { QxDepartmentInfo_GetArrQxDepartmentInfo } from '@/ts/L3ForWApi/UserManage_GP/clsQxDepartmentInfoWApi';
  import { message } from '@/utils/myMessage';
  import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
  import { QxRolesEx_GetArrQxRolesByQxPrjIdEx } from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxRolesExWApi';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
  import { XzSchool_GetArrXzSchool } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
  export default defineComponent({
    name: 'QxUsersCRUD',
    components: {
      // 组件注册
      QxUsers_EditCom,
      QxUsers_DetailCom,
      QxUsers_ListCom,
    },

    setup() {
      QxPrjId_Local.value = clsSysPara4WebApi.currSelPrjId;
      const objPage = ref<QxUsersCRUDEx>();
      const objPage_Edit = ref<QxUsers_EditEx>();
      const objPage_Detail = ref<QxUsers_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'QxUsersCRUD';
      const detailInfoTab = ref('unknown');

      const ddlRoleId = ref();
      const ddlDetailInfoTab = ref();

      const arrQxDepartmentType = ref<clsQxDepartmentTypeEN[] | null>([]);
      const arrQxDepartmentInfo = ref<clsQxDepartmentInfoEN[] | null>([]);

      const arrQxRoles = ref<clsQxRolesEN[] | null>([]);
      const arrXzSchool = ref<clsXzSchoolEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_QxUsers4Func(refDivList.value);
      };

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new QxUsers_EditEx('QxUsers_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxUsers(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsQxUsersEN.PrimaryTypeId) > -1) {
            await objPage_Edit.value.AddNewRecordWithMaxId();
          } else {
            await objPage_Edit.value.AddNewRecord();
          }
        } catch (e) {
          const strMsg = Format(
            '添加新记录初始化不成功,{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 修改记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new QxUsers_EditEx('QxUsers_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strUserId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strUserId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxUsers(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strUserId);
          if (update == false) {
            const strMsg = Format('在修改记录时,显示记录数据不成功!');
            console.error(strMsg);
            alert(strMsg);
            return;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsQxUsersEN._CurrTabName;
      };

      /** 删除记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDelete_Click)
       **/
      const btnDelete_Click = async () => {
        const strThisFuncName = btnDelete_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyIds.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord(arrKeyIds);
          await objPage.value.BindGv_QxUsers4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      const exportToExcel = (
        arrData: Array<Record<string, any>>,
        strSheetName: string,
        strFileName: string,
      ) => {
        try {
          // Convert object list to worksheet
          const worksheet = XLSX.utils.json_to_sheet(arrData);
          // Create a new workbook and append the worksheet
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, strSheetName);
          // Export the workbook to an Excel file
          XLSX.writeFile(workbook, strFileName);
          alert('导出成功！');
        } catch (error) {
          console.error('导出失败:', error);
          alert('导出失败，请检查控制台日志！');
        }
      };
      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        const objExportExcelData: ExportExcelData = await objPage.value.ExportExcel_QxUsers4Func();
        if (objExportExcelData.sheetName == '') {
          alert('获取导出数据出错,请检查!');
          return;
        }
        exportToExcel(
          objExportExcelData.arrObjLst,
          objExportExcelData.sheetName,
          objExportExcelData.fileName,
        );
      };
      /** 设置字段值-IdSchool
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetIdSchool_Click = async () => {
        const strThisFuncName = btnSetIdSchool_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置学校流水号的${thisTabName}记录!`);
            return '';
          }
          const strIdSchool = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlIdSchool_SetFldValue',
          );
          if (strIdSchool == '') {
            const strMsg = '请输入学校流水号(IdSchool)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strIdSchool=' + strIdSchool);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetIdSchool(arrKeyIds, strIdSchool);
          await objPage.value.BindGv_QxUsers4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrQxDepartmentType.value = await QxDepartmentType_GetArrQxDepartmentType(); //查询区域
        departmentTypeId_q.value = '0';
        arrQxDepartmentInfo.value = await QxDepartmentInfo_GetArrQxDepartmentInfo(); //查询区域
        departmentId_q.value = '0';

        arrXzSchool.value = await XzSchool_GetArrXzSchool(); //查询区域
        idSchool_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        arrQxRoles.value = await QxRolesEx_GetArrQxRolesByQxPrjIdEx(QxPrjId_Local.value); //功能区域
        roleId_f.value = '0';

        arrXzSchool.value = await XzSchool_GetArrXzSchool(); //功能区域
        idSchool_f.value = '0';
      }
      const strTitle = ref('用户维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        QxUsersCRUDEx.vuebtn_Click = btn_Click;
        QxUsersCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new QxUsersCRUDEx();
        objPage.value.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;

          case 'SetRole':
            if (roleId_f.value == '') {
              message.warning('请选择一个角色！');
              ddlRoleId.value.focus();
              return;
            }
            QxUsersCRUDEx.btn_Click(strCommandName, roleId_f.value);
            return;
          case 'SetDetailInfoTab':
            if (detailInfoTab.value == '' || detailInfoTab.value == 'unknown') {
              message.warning('请选择一个合适的信息表！');
              ddlDetailInfoTab.value.focus();
              return;
            }
            QxUsersCRUDEx.btn_Click(strCommandName, detailInfoTab.value);
            return;

          case 'DelRole':
            console.log(strCommandName, strKeyId);
            break;
          default:
            break;
        }
        QxUsersCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListQxUsers,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refQxUsers_Edit,
        refQxUsers_Detail,
        refQxUsers_List,
        userId_q,
        userName_q,
        idSchool_q,
        departmentTypeId_q,
        arrQxDepartmentType,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        departmentId_q,
        arrQxDepartmentInfo,

        ddlRoleId,
        // myTest,
        detailInfoTab,
        ddlDetailInfoTab,
        roleId_f,
        arrQxRoles,
        arrXzSchool,
        idSchool_f,
        btnSetIdSchool_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editQxUsers', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new QxUsersCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
