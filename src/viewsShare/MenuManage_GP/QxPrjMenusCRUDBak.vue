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
                id="lblMenuId_q"
                name="lblMenuId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >菜单Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMenuId_q"
                v-model="menuId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblMenuName_q"
                name="lblMenuName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >菜单名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMenuName_q"
                v-model="menuName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblUpMenuId_q"
                name="lblUpMenuId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >上级菜单
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUpMenuId_q"
                v-model="upMenuId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrQxPrjMenus" :key="index" :value="item.menuId">
                  {{ item.menuName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblMenuTitle_q"
                name="lblMenuTitle_q"
                class="col-form-label text-right"
                style="width: 90px"
                >菜单标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMenuTitle_q"
                v-model="menuTitle_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblIsLeafNode_q"
                name="lblIsLeafNode_q"
                class="col-form-label text-right"
                style="width: 90px"
                >是否叶子
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlbIsLeafNode_q"
                v-model="isLeafNode_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblInUse_q"
                name="lblInUse_q"
                class="col-form-label text-right"
                style="width: 90px"
                >是否在用
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlbInUse_q"
                v-model="inUse_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblMenuSetId_q"
                name="lblMenuSetId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >菜单集Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMenuSetId_q"
                v-model="menuSetId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrQxPrjMenuSet"
                  :key="index"
                  :value="item.menuSetId"
                >
                  {{ item.menuSetName }}
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
          </tr>
          <tr>
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
            id="lblQxPrjMenusList"
            name="lblQxPrjMenusList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程菜单列表
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
              id="ddlbInUse_SetFldValue"
              v-model="inUse_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option value="0">选择是/否</option>
              <option value="true">是</option>
              <option value="false">否</option></select
            >
            <button
              id="btnSetInUse"
              name="btnSetInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetInUse_Click"
              >设置是否在用</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlMenuSetId_SetFldValue"
              v-model="menuSetId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrQxPrjMenuSet" :key="index" :value="item.menuSetId">
                {{ item.menuSetName }}
              </option></select
            >
            <button
              id="btnSetMenuSetId"
              name="btnSetMenuSetId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetMenuSetId_Click"
              >设置菜单集Id</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <QxPrjMenus_ListCom
        ref="refQxPrjMenus_List"
        :items="dataListQxPrjMenus"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </QxPrjMenus_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxPrjMenusBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxPrjMenus_EditCom ref="refQxPrjMenus_Edit"></QxPrjMenus_EditCom>
    <!--详细信息层-->
    <QxPrjMenus_DetailCom ref="refQxPrjMenus_Detail"></QxPrjMenus_DetailCom>
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
  import {
    GetCheckedKeyIdsInDivObj,
    GetSelectValueInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQxPrjMenus_Edit,
    refQxPrjMenus_Detail,
    refQxPrjMenus_List,
    showErrorMessage,
    dataListQxPrjMenus,
    emptyRecNumInfo,
    dataColumn,
    QxPrjId_Local,
    CmPrjId_Local,
    menuId_q,
    menuName_q,
    upMenuId_q,
    menuTitle_q,
    isLeafNode_q,
    inUse_q,
    menuSetId_q,
    inUse_f,
    menuSetId_f,
  } from '@/viewsShare/MenuManage_GP/QxPrjMenusVueShare';
  import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
  import QxPrjMenus_EditEx from '@/viewsShare/MenuManage_GP/QxPrjMenus_EditEx';
  import QxPrjMenus_DetailEx from '@/viewsShare/MenuManage_GP/QxPrjMenus_DetailEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import QxPrjMenusCRUDEx from '@/viewsShare/MenuManage_GP/QxPrjMenusCRUDEx';
  import QxPrjMenus_EditCom from '@/viewsShare/MenuManage_GP/QxPrjMenus_Edit.vue';
  import QxPrjMenus_DetailCom from '@/viewsShare/MenuManage_GP/QxPrjMenus_Detail.vue';
  import QxPrjMenus_ListCom from '@/viewsShare/MenuManage_GP/QxPrjMenus_List.vue';
  import { clsQxPrjMenuSetEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetEN';
  import { BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import { QxPrjMenusEx_GetData4UpMenuIdByQxPrjId } from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxPrjMenusExWApi';
  import { QxPrjMenuSet_GetArrQxPrjMenuSetByCmPrjId } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
  export default defineComponent({
    name: 'QxPrjMenusCRUD',
    components: {
      // 组件注册
      QxPrjMenus_EditCom,
      QxPrjMenus_DetailCom,
      QxPrjMenus_ListCom,
    },

    setup() {
      QxPrjId_Local.value = clsSysPara4WebApi.currSelPrjId;
      CmPrjId_Local.value = clsSysPara4WebApi.cmPrjId;
      const objPage = ref<QxPrjMenusCRUDEx>();
      const objPage_Edit = ref<QxPrjMenus_EditEx>();
      const objPage_Detail = ref<QxPrjMenus_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'QxPrjMenusCRUD';

      const arrQxPrjMenus = ref<clsQxPrjMenusEN[] | null>([]);
      const arrQxPrjMenuSet = ref<clsQxPrjMenuSetEN[] | null>([]);

      /** 设置字段值-InUse
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetInUse_Click = async () => {
        const strThisFuncName = btnSetInUse_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置是否在用的${thisTabName}记录!`);
            return '';
          }
          const bolInUse: boolean = $('#ddlbInUse_SetFldValue').prop('checked');
          //console.log('bolInUse=' + bolInUse);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetInUse(arrKeyIds, bolInUse);
          await objPage.value.BindGv_QxPrjMenus4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 设置字段值-MenuSetId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetMenuSetId_Click = async () => {
        const strThisFuncName = btnSetMenuSetId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置菜单集Id的${thisTabName}记录!`);
            return '';
          }
          const strMenuSetId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlMenuSetId_SetFldValue',
          );
          if (strMenuSetId == '') {
            const strMsg = '请输入菜单集Id(MenuSetId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strMenuSetId=' + strMenuSetId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetMenuSetId(arrKeyIds, strMenuSetId);
          await objPage.value.BindGv_QxPrjMenus4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_QxPrjMenus4Func(refDivList.value);
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
        objPage_Edit.value = new QxPrjMenus_EditEx('QxPrjMenus_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxPrjMenus(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsQxPrjMenusEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new QxPrjMenus_EditEx('QxPrjMenus_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strMenuId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strMenuId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxPrjMenus(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strMenuId);
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
        return clsQxPrjMenusEN._CurrTabName;
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
          await objPage.value.BindGv_QxPrjMenus4Func(divVarSet.refDivList);
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
        const objExportExcelData: ExportExcelData = await objPage.value.ExportExcel_QxPrjMenus();
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
        const strQxPrjId = QxPrjId_Local.value; //静态变量;//Session存储、local存储
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        arrQxPrjMenus.value = await QxPrjMenusEx_GetData4UpMenuIdByQxPrjId(strQxPrjId); //查询区域
        upMenuId_q.value = '0';

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbIsLeafNode_q');

        arrQxPrjMenuSet.value = await QxPrjMenuSet_GetArrQxPrjMenuSetByCmPrjId(strCmPrjId); //查询区域
        menuSetId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivFunction, 'ddlbInUse');
        inUse_f.value = '0';

        arrQxPrjMenuSet.value = await QxPrjMenuSet_GetArrQxPrjMenuSetByCmPrjId(strCmPrjId); //功能区域
        menuSetId_f.value = '0';
      }

      const strTitle = ref('工程菜单维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        QxPrjMenusCRUDEx.vuebtn_Click = btn_Click;
        QxPrjMenusCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new QxPrjMenusCRUDEx();
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
        QxPrjMenusCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListQxPrjMenus,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refQxPrjMenus_Edit,
        refQxPrjMenus_Detail,
        refQxPrjMenus_List,
        menuId_q,
        menuName_q,
        upMenuId_q,
        menuTitle_q,
        isLeafNode_q,
        inUse_q,
        menuSetId_q,
        inUse_f,
        menuSetId_f,
        arrQxPrjMenus,
        arrQxPrjMenuSet,
        btnSetInUse_Click,
        btnSetMenuSetId_Click,
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
        router.push({ name: 'editQxPrjMenus', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new QxPrjMenusCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
