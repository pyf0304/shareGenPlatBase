<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
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
                id="lblLoginLogNumber_q"
                name="lblLoginLogNumber_q"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginLogNumber
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginLogNumber_q"
                v-model="loginLogNumber_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginIP_q"
                name="lblLoginIP_q"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginIP
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginIP_q"
                v-model="loginIP_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFailReason_q"
                name="lblFailReason_q"
                class="col-form-label text-right"
                style="width: 90px"
                >FailReason
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFailReason_q"
                v-model="failReason_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginResult_q"
                name="lblLoginResult_q"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginResult
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginResult_q"
                v-model="loginResult_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblLoginTime_q"
                name="lblLoginTime_q"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginTime_q"
                v-model="loginTime_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLoginUserId_q"
                name="lblLoginUserId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >LoginUserId
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLoginUserId_q"
                v-model="loginUserId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblOnlineTime_q"
                name="lblOnlineTime_q"
                class="col-form-label text-right"
                style="width: 90px"
                >OnlineTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOnlineTime_q"
                v-model="onlineTime_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblOutTime_q"
                name="lblOutTime_q"
                class="col-form-label text-right"
                style="width: 90px"
                >OutTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOutTime_q"
                v-model="outTime_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr>
          <tr>
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
        </tbody>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblQxLoginLogList"
            name="lblQxLoginLogList"
            class="col-form-label text-info"
            style="width: 250px"
            >登录日志列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <QxLoginLog_ListCom
        ref="refQxLoginLog_List"
        :items="dataListQxLoginLog"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </QxLoginLog_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxLoginLogBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxLoginLog_EditCom ref="refQxLoginLog_Edit"></QxLoginLog_EditCom>
    <!--详细信息层-->
    <QxLoginLog_DetailCom ref="refQxLoginLog_Detail"></QxLoginLog_DetailCom>
  </div>
</template>

<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import router from '@/router';
  import {
    GetFirstCheckedKeyIdInDivObj,
    GetCheckedKeyIdsInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQxLoginLog_Edit,
    refQxLoginLog_Detail,
    refQxLoginLog_List,
    showErrorMessage,
    dataListQxLoginLog,
    emptyRecNumInfo,
    dataColumn,
    loginLogNumber_q,
    loginIP_q,
    failReason_q,
    loginResult_q,
    loginTime_q,
    loginUserId_q,
    onlineTime_q,
    outTime_q,
  } from '@/views/LogManage/QxLoginLogVueShare';
  import { clsQxLoginLogEN } from '@/ts/L0Entity/LogManage/clsQxLoginLogEN';
  import QxLoginLog_EditEx from '@/views/LogManage/QxLoginLog_EditEx';
  import QxLoginLog_DetailEx from '@/views/LogManage/QxLoginLog_DetailEx';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import QxLoginLogCRUDEx from '@/views/LogManage/QxLoginLogCRUDEx';
  import QxLoginLog_EditCom from '@/views/LogManage/QxLoginLog_Edit.vue';
  import QxLoginLog_DetailCom from '@/views/LogManage/QxLoginLog_Detail.vue';
  import QxLoginLog_ListCom from '@/views/LogManage/QxLoginLog_List.vue';
  export default defineComponent({
    name: 'QxLoginLogCRUD',

    components: {
      // 组件注册
      QxLoginLog_EditCom,
      QxLoginLog_DetailCom,
      QxLoginLog_ListCom,
    },

    setup() {
      const objPage = ref<QxLoginLogCRUDEx>();
      const objPage_Edit = ref<QxLoginLog_EditEx>();
      const objPage_Detail = ref<QxLoginLog_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'QxLoginLogCRUD';

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_QxLoginLog(refDivList.value);
      };

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new QxLoginLog_EditEx('QxLoginLog_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxLoginLog(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsQxLoginLogEN._PrimaryTypeId) > -1) {
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
      /**
       * 修改记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;

        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }

        objPage_Edit.value = new QxLoginLog_EditEx('QxLoginLog_EditEx', objPage.value);

        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }

        const strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          const strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        const lngLoginLogId = strKeyId;

        if (lngLoginLogId == 0) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        try {
          opType.value = 'Update';

          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxLoginLog(opType.value);
          if (bolIsSuccess == false) return;

          const lngKeyId = lngLoginLogId;
          const update = await objPage_Edit.value.UpdateRecord(lngKeyId);

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
        return clsQxLoginLogEN._CurrTabName;
      };

      /** 删除记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnDelete_Click)
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
          await objPage.value.BindGv_QxLoginLog(divVarSet.refDivList);
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
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        const objExportExcelData: ExportExcelData = await objPage.value.ExportExcel_QxLoginLog();
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

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {}

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('登录日志维护');

      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        QxLoginLogCRUDEx.vuebtn_Click = btn_Click;
        QxLoginLogCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new QxLoginLogCRUDEx();
        await objPage.value.PageLoadCache();
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
        QxLoginLogCRUDEx.btn_Click(strCommandName, strKeyId);
      }

      return {
        showErrorMessage,
        dataListQxLoginLog,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refQxLoginLog_Edit,
        refQxLoginLog_Detail,
        refQxLoginLog_List,
        loginLogNumber_q,
        loginIP_q,
        failReason_q,
        loginResult_q,
        loginTime_q,
        loginUserId_q,
        onlineTime_q,
        outTime_q,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_method_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editQxLoginLog', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_method_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new QxLoginLogCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>

<style scoped></style>
