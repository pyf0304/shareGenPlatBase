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
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <label
                id="lblRoleId_q"
                name="lblRoleId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >角色Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtRoleId_q"
                v-model="roleId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblRoleName_q"
                name="lblRoleName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >角色名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtRoleName_q"
                v-model="roleName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblRoleENName_q"
                name="lblRoleENName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >角色英文名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtRoleENName_q"
                v-model="roleENName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblQxPrjId_q"
                name="lblQxPrjId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >项目Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQxPrjId_q"
                v-model="qxPrjId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrQxProjects" :key="index" :value="item.qxPrjId">
                  {{ item.prjName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblIsInUse_q"
                name="lblIsInUse_q"
                class="col-form-label text-right"
                style="width: 90px"
                >是否在使用
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlbIsInUse_q"
                v-model="isInUse_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
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
            id="lblQxRolesList"
            name="lblQxRolesList"
            class="col-form-label text-info"
            style="width: 250px"
            >角色列表
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
              id="ddlRoleTypeId_SetFldValue"
              v-model="roleTypeId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrRoleType" :key="index" :value="item.roleTypeId">
                {{ item.roleTypeName }}
              </option></select
            >
            <button
              id="btnSetRoleTypeId"
              name="btnSetRoleTypeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetRoleTypeId_Click"
              >设置角色类型Id</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlUserTypeId_SetFldValue"
              v-model="userTypeId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrUserType" :key="index" :value="item.userTypeId">
                {{ item.userTypeName }}
              </option></select
            >
            <button
              id="btnSetUserTypeId"
              name="btnSetUserTypeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetUserTypeId_Click"
              >设置用户类型Id</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <QxRoles_ListCom
        ref="refQxRoles_List"
        :items="dataListQxRoles"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </QxRoles_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxRolesBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxRoles_EditCom ref="refQxRoles_Edit"></QxRoles_EditCom>
    <!--详细信息层-->
    <QxRoles_DetailCom ref="refQxRoles_Detail"></QxRoles_DetailCom>
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
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
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
    refQxRoles_Edit,
    refQxRoles_Detail,
    refQxRoles_List,
    showErrorMessage,
    dataListQxRoles,
    emptyRecNumInfo,
    QxPrjId_Local,
    roleId_q,
    roleName_q,
    roleENName_q,
    qxPrjId_q,
    isInUse_q,
    roleTypeId_f,
    userTypeId_f,
    userTypeId_q,
    roleTypeId_q,
  } from '@/viewsShare/UserManage_GP/QxRolesVueShare';
  import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
  import QxRoles_EditEx from '@/viewsShare/UserManage_GP/QxRoles_EditEx';
  import QxRoles_DetailEx from '@/viewsShare/UserManage_GP/QxRoles_DetailEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import QxRolesCRUDEx from '@/viewsShare/UserManage_GP/QxRolesCRUDEx';
  import QxRoles_EditCom from '@/viewsShare/UserManage_GP/QxRoles_Edit.vue';
  import QxRoles_DetailCom from '@/viewsShare/UserManage_GP/QxRoles_Detail.vue';
  import QxRoles_ListCom from '@/viewsShare/UserManage_GP/QxRoles_List.vue';
  import { clsQxProjectsEN } from '@/ts/L0Entity/PrjManage_GP/clsQxProjectsEN';
  import { BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import { QxProjects_GetArrQxProjects } from '@/ts/L3ForWApi/PrjManage_GP/clsQxProjectsWApi';
  import { clsUserTypeEN } from '@/ts/L0Entity/UserManage_GP/clsUserTypeEN';
  import { clsRoleTypeEN } from '@/ts/L0Entity/UserManage_GP/clsRoleTypeEN';
  import { UserType_GetArrUserType } from '@/ts/L3ForWApi/UserManage_GP/clsUserTypeWApi';
  import { RoleType_GetArrRoleType } from '@/ts/L3ForWApi/UserManage_GP/clsRoleTypeWApi';

  export default defineComponent({
    name: 'QxRolesCRUD',
    components: {
      // 组件注册
      QxRoles_EditCom,
      QxRoles_DetailCom,
      QxRoles_ListCom,
    },

    setup() {
      QxPrjId_Local.value = clsSysPara4WebApi.currSelPrjId;
      const objPage = ref<QxRolesCRUDEx>();
      const objPage_Edit = ref<QxRoles_EditEx>();
      const objPage_Detail = ref<QxRoles_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'QxRolesCRUD';

      const arrQxProjects = ref<clsQxProjectsEN[] | null>([]);

      const arrUserType = ref<clsUserTypeEN[] | null>([]);
      const arrRoleType = ref<clsRoleTypeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_QxRoles4Func(refDivList.value);
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
        objPage_Edit.value = new QxRoles_EditEx('QxRoles_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxRoles(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsQxRolesEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new QxRoles_EditEx('QxRoles_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strRoleId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strRoleId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxRoles(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strRoleId);
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
        return clsQxRolesEN._CurrTabName;
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
          await objPage.value.BindGv_QxRoles4Func(divVarSet.refDivList);
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
        const objExportExcelData: ExportExcelData = await objPage.value.ExportExcel_QxRoles4Func();
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

      /** 设置字段值-UserTypeId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetUserTypeId_Click = async () => {
        const strThisFuncName = btnSetUserTypeId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置用户类型Id的${thisTabName}记录!`);
            return '';
          }
          const strUserTypeId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlUserTypeId_SetFldValue',
          );
          if (strUserTypeId == '') {
            const strMsg = '请输入用户类型Id(UserTypeId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strUserTypeId=' + strUserTypeId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetUserTypeId(arrKeyIds, strUserTypeId);
          await objPage.value.BindGv_QxRoles4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 设置字段值-RoleTypeId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetRoleTypeId_Click = async () => {
        const strThisFuncName = btnSetRoleTypeId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置角色类型Id的${thisTabName}记录!`);
            return '';
          }
          const strRoleTypeId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlRoleTypeId_SetFldValue',
          );
          if (strRoleTypeId == '') {
            const strMsg = '请输入角色类型Id(RoleTypeId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strRoleTypeId=' + strRoleTypeId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetRoleTypeId(arrKeyIds, strRoleTypeId);
          await objPage.value.BindGv_QxRoles4Func(divVarSet.refDivList);
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
        arrQxProjects.value = await QxProjects_GetArrQxProjects(); //查询区域
        qxPrjId_q.value = '0';

        // BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbIsInUse_q');
        isInUse_q.value = '0';

        arrUserType.value = await UserType_GetArrUserType(); //查询区域
        userTypeId_q.value = '0';

        arrRoleType.value = await RoleType_GetArrRoleType(); //查询区域
        roleTypeId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        arrRoleType.value = await RoleType_GetArrRoleType(); //功能区域
        roleTypeId_f.value = '0';

        arrUserType.value = await UserType_GetArrUserType(); //功能区域
        userTypeId_f.value = '0';
      }

      const strTitle = ref('角色维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        QxRolesCRUDEx.vuebtn_Click = btn_Click;
        QxRolesCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new QxRolesCRUDEx();
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
          default:
            break;
        }
        QxRolesCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListQxRoles,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refQxRoles_Edit,
        refQxRoles_Detail,
        refQxRoles_List,
        roleId_q,
        roleName_q,
        roleENName_q,
        qxPrjId_q,
        isInUse_q,

        arrQxProjects,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        userTypeId_f,
        roleTypeId_f,
        arrRoleType,
        arrUserType,
        userTypeId_q,
        roleTypeId_q,
        btnSetUserTypeId_Click,
        btnSetRoleTypeId_Click,
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
        router.push({ name: 'editQxRoles', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new QxRolesCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
