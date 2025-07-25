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
                id="lblDepartmentId_q"
                name="lblDepartmentId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >部门Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDepartmentId_q"
                v-model="departmentId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDepartmentName_q"
                name="lblDepartmentName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >部门名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDepartmentName_q"
                v-model="departmentName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDepartmentAbbrName_q"
                name="lblDepartmentAbbrName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >名称缩写
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDepartmentAbbrName_q"
                v-model="departmentAbbrName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDepartmentTypeId_q"
                name="lblDepartmentTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >部门类型ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDepartmentTypeId_q"
                v-model="departmentTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
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
          <tr>
            <td class="text-right">
              <label
                id="lblUpDepartmentId_q"
                name="lblUpDepartmentId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >所属部门号
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUpDepartmentId_q"
                v-model="upDepartmentId_q"
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
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 120px">
                <input id="chkInUse_q" v-model="inUse_q" type="checkbox" Text="是否在用" /><label
                  for="chkInUse_q"
                  >是否在用</label
                ></span
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
        </tbody>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblQxDepartmentInfoList"
            name="lblQxDepartmentInfoList"
            class="col-form-label text-info"
            style="width: 250px"
            >部门列表
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
      <QxDepartmentInfo_ListCom
        ref="refQxDepartmentInfo_List"
        :items="dataListQxDepartmentInfo"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </QxDepartmentInfo_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxDepartmentInfoBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxDepartmentInfo_EditCom ref="refQxDepartmentInfo_Edit"></QxDepartmentInfo_EditCom>
    <!--详细信息层-->
    <QxDepartmentInfo_DetailCom ref="refQxDepartmentInfo_Detail"></QxDepartmentInfo_DetailCom>
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
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQxDepartmentInfo_Edit,
    refQxDepartmentInfo_Detail,
    refQxDepartmentInfo_List,
    showErrorMessage,
    dataListQxDepartmentInfo,
    emptyRecNumInfo,
    dataColumn,
    departmentId_q,
    departmentName_q,
    departmentAbbrName_q,
    departmentTypeId_q,
    upDepartmentId_q,
    inUse_q,
  } from '@/viewsShare/UserManage/QxDepartmentInfoVueShare';
  import { clsQxDepartmentInfoEN } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoEN';
  import QxDepartmentInfo_EditEx from '@/viewsShare/UserManage/QxDepartmentInfo_EditEx';
  import QxDepartmentInfo_DetailEx from '@/viewsShare/UserManage/QxDepartmentInfo_DetailEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import QxDepartmentInfoCRUDEx from '@/viewsShare/UserManage/QxDepartmentInfoCRUDEx';
  import QxDepartmentInfo_EditCom from '@/viewsShare/UserManage/QxDepartmentInfo_Edit.vue';
  import QxDepartmentInfo_DetailCom from '@/viewsShare/UserManage/QxDepartmentInfo_Detail.vue';
  import QxDepartmentInfo_ListCom from '@/viewsShare/SysPara/QxDepartmentInfo_List.vue';
  import { clsQxDepartmentTypeEN } from '@/ts/L0Entity/SysPara/clsQxDepartmentTypeEN';
  import { QxDepartmentType_GetArrQxDepartmentType } from '@/ts/L3ForWApi/SysPara/clsQxDepartmentTypeWApi';
  import { QxDepartmentInfo_GetArrQxDepartmentInfo } from '@/ts/L3ForWApi/UserManage_GP/clsQxDepartmentInfoWApi';
  export default defineComponent({
    name: 'QxDepartmentInfoCRUD',
    components: {
      // 组件注册
      QxDepartmentInfo_EditCom,
      QxDepartmentInfo_DetailCom,
      QxDepartmentInfo_ListCom,
    },

    setup() {
      const objPage = ref<QxDepartmentInfoCRUDEx>();
      const objPage_Edit = ref<QxDepartmentInfo_EditEx>();
      const objPage_Detail = ref<QxDepartmentInfo_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'QxDepartmentInfoCRUD';

      const arrQxDepartmentType = ref<clsQxDepartmentTypeEN[] | null>([]);
      const arrQxDepartmentInfo = ref<clsQxDepartmentInfoEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_QxDepartmentInfoCache(refDivList.value);
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
        objPage_Edit.value = new QxDepartmentInfo_EditEx('QxDepartmentInfo_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxDepartmentInfo(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsQxDepartmentInfoEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new QxDepartmentInfo_EditEx('QxDepartmentInfo_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strDepartmentId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strDepartmentId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxDepartmentInfo(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strDepartmentId);
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
        return clsQxDepartmentInfoEN._CurrTabName;
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
          await objPage.value.BindGv_QxDepartmentInfoCache(divVarSet.refDivList);
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
        const objExportExcelData: ExportExcelData =
          await objPage.value.ExportExcel_QxDepartmentInfoCache();
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
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrQxDepartmentType.value = await QxDepartmentType_GetArrQxDepartmentType(); //查询区域
        departmentTypeId_q.value = '0';

        arrQxDepartmentInfo.value = await QxDepartmentInfo_GetArrQxDepartmentInfo(); //查询区域
        upDepartmentId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('部门维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        QxDepartmentInfoCRUDEx.vuebtn_Click = btn_Click;
        QxDepartmentInfoCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new QxDepartmentInfoCRUDEx();
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
        QxDepartmentInfoCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListQxDepartmentInfo,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refQxDepartmentInfo_Edit,
        refQxDepartmentInfo_Detail,
        refQxDepartmentInfo_List,
        departmentId_q,
        departmentName_q,
        departmentAbbrName_q,
        departmentTypeId_q,
        upDepartmentId_q,
        inUse_q,
        arrQxDepartmentType,
        arrQxDepartmentInfo,
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
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editQxDepartmentInfo', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new QxDepartmentInfoCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
