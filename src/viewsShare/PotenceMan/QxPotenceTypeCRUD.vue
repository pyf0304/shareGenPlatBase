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
                id="lblPotenceTypeId_q"
                name="lblPotenceTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >权限类型Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPotenceTypeId_q"
                v-model="potenceTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblPotenceTypeName_q"
                name="lblPotenceTypeName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >权限类型名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPotenceTypeName_q"
                v-model="potenceTypeName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFuncModuleId_q"
                name="lblFuncModuleId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >模块Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncModuleId_q"
                v-model="funcModuleId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrQxFuncModule"
                  :key="index"
                  :value="item.funcModuleId"
                >
                  {{ item.funcModuleName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIsVisible_q"
                name="lblIsVisible_q"
                class="col-form-label text-right"
                style="width: 90px"
                >是否显示
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlbIsVisible_q"
                v-model="isVisible_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
              >
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
            id="lblQxPotenceTypeList"
            name="lblQxPotenceTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >权限类型列表
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
              id="ddlFuncModuleId_SetFldValue"
              v-model="funcModuleId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option
                v-for="(item, index) in arrQxFuncModule"
                :key="index"
                :value="item.funcModuleId"
              >
                {{ item.funcModuleName }}
              </option></select
            >
            <button
              id="btnSetFuncModuleId"
              name="btnSetFuncModuleId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetFuncModuleId_Click"
              >设置模块Id</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlbIsVisible_SetFldValue"
              v-model="isVisible_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option value="0">选择是/否</option>
              <option value="true">是</option>
              <option value="false">否</option></select
            >
            <button
              id="btnSetIsVisible"
              name="btnSetIsVisible"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetIsVisible_Click"
              >设置是否显示</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <QxPotenceType_ListCom
        ref="refQxPotenceType_List"
        :items="dataListQxPotenceType"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </QxPotenceType_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxPotenceTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxPotenceType_EditCom ref="refQxPotenceType_Edit"></QxPotenceType_EditCom>
    <!--详细信息层-->
    <QxPotenceType_DetailCom ref="refQxPotenceType_Detail"></QxPotenceType_DetailCom>
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
    GetSelectValueInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQxPotenceType_Edit,
    refQxPotenceType_Detail,
    refQxPotenceType_List,
    showErrorMessage,
    dataListQxPotenceType,
    emptyRecNumInfo,
    dataColumn,
    QxPrjId_Local,
    potenceTypeId_q,
    potenceTypeName_q,
    qxPrjId_q,
    funcModuleId_q,
    isVisible_q,
    isVisible_f,
    funcModuleId_f,
  } from '@/viewsShare/PotenceMan/QxPotenceTypeVueShare';
  import { clsQxPotenceTypeEN } from '@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN';
  import QxPotenceType_EditEx from '@/viewsShare/PotenceMan/QxPotenceType_EditEx';
  import QxPotenceType_DetailEx from '@/viewsShare/PotenceMan/QxPotenceType_DetailEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import QxPotenceTypeCRUDEx from '@/viewsShare/PotenceMan/QxPotenceTypeCRUDEx';
  import QxPotenceType_EditCom from '@/viewsShare/PotenceMan/QxPotenceType_Edit.vue';
  import QxPotenceType_DetailCom from '@/viewsShare/PotenceMan/QxPotenceType_Detail.vue';
  import QxPotenceType_ListCom from '@/viewsShare/PotenceMan/QxPotenceType_List.vue';
  import { clsQxFuncModuleEN } from '@/ts/L0Entity/PrjManage_GP/clsQxFuncModuleEN';
  import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
  import { BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import { QxFuncModule_GetArrQxFuncModule } from '@/ts/L3ForWApi/PrjManage_GP/clsQxFuncModuleWApi';
  import { QxPrjMenus_GetArrQxPrjMenus } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
  export default defineComponent({
    name: 'QxPotenceTypeCRUD',
    components: {
      // 组件注册
      QxPotenceType_EditCom,
      QxPotenceType_DetailCom,
      QxPotenceType_ListCom,
    },

    setup() {
      QxPrjId_Local.value = clsSysPara4WebApi.currSelPrjId;
      const objPage = ref<QxPotenceTypeCRUDEx>();
      const objPage_Edit = ref<QxPotenceType_EditEx>();
      const objPage_Detail = ref<QxPotenceType_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'QxPotenceTypeCRUD';

      const arrQxFuncModule = ref<clsQxFuncModuleEN[] | null>([]);
      const arrQxPrjMenus = ref<clsQxPrjMenusEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_QxPotenceType4Func(refDivList.value);
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
        objPage_Edit.value = new QxPotenceType_EditEx('QxPotenceType_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxPotenceType(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsQxPotenceTypeEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new QxPotenceType_EditEx('QxPotenceType_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strPotenceTypeId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strPotenceTypeId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxPotenceType(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strPotenceTypeId);
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
        return clsQxPotenceTypeEN._CurrTabName;
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
          await objPage.value.BindGv_QxPotenceType4Func(divVarSet.refDivList);
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
          await objPage.value.ExportExcel_QxPotenceType4Func();
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

      /** 设置字段值-IsVisible
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetIsVisible_Click = async () => {
        const strThisFuncName = btnSetIsVisible_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置是否显示的${thisTabName}记录!`);
            return '';
          }
          const bolIsVisible: boolean = $('#ddlbIsVisible_SetFldValue').prop('checked');
          //console.log('bolIsVisible=' + bolIsVisible);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetIsVisible(arrKeyIds, bolIsVisible);
          await objPage.value.BindGv_QxPotenceType4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 设置字段值-FuncModuleId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetFuncModuleId_Click = async () => {
        const strThisFuncName = btnSetFuncModuleId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置模块Id的${thisTabName}记录!`);
            return '';
          }
          const strFuncModuleId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlFuncModuleId_SetFldValue',
          );
          if (strFuncModuleId == '') {
            const strMsg = '请输入模块Id(FuncModuleId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strFuncModuleId=' + strFuncModuleId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetFuncModuleId(arrKeyIds, strFuncModuleId);
          await objPage.value.BindGv_QxPotenceType4Func(divVarSet.refDivList);
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
        arrQxFuncModule.value = await QxFuncModule_GetArrQxFuncModule(); //查询区域
        funcModuleId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        isVisible_f.value = '0';

        arrQxFuncModule.value = await QxFuncModule_GetArrQxFuncModule(); //功能区域
        funcModuleId_f.value = '0';
      }

      const strTitle = ref('权限类型维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        QxPotenceTypeCRUDEx.vuebtn_Click = btn_Click;
        QxPotenceTypeCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new QxPotenceTypeCRUDEx();
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
        QxPotenceTypeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListQxPotenceType,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refQxPotenceType_Edit,
        refQxPotenceType_Detail,
        refQxPotenceType_List,
        potenceTypeId_q,
        potenceTypeName_q,
        qxPrjId_q,
        funcModuleId_q,
        isVisible_q,
        isVisible_f,
        funcModuleId_f,
        arrQxFuncModule,
        arrQxPrjMenus,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnSetIsVisible_Click,
        btnSetFuncModuleId_Click,
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
        router.push({ name: 'editQxPotenceType', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new QxPotenceTypeCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
