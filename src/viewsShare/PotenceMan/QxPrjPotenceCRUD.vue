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
            <td class="text-left">
              <input
                id="txtPotenceId_q"
                v-model="potenceId_q"
                placeholder="权限ID"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <input
                id="txtPotenceName_q"
                v-model="potenceName_q"
                placeholder="权限名称"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <select
                id="ddlFuncModuleId_q"
                v-model="funcModuleId_q"
                title="功能模块"
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

            <td class="text-left">
              <select
                id="ddlPotenceTypeId_q"
                v-model="potenceTypeId_q"
                title="权限类型"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrQxPotenceType"
                  :key="index"
                  :value="item.potenceTypeId"
                >
                  {{ item.potenceTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <button
                id="btnQuery"
                name="btnQuery"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('Query', '')"
                >查询</button
              >
            </td>
            <td class="text-right">
              <button
                id="btnExportExcel"
                class="btn btn-outline-warning btn-sm text-nowrap"
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
            id="lblQxPrjPotenceList"
            name="lblQxPrjPotenceList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程权限列表
          </label>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlRoleId_SetFldValue"
              v-model="roleId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrQxRoles" :key="index" :value="item.roleId">
                {{ item.roleName }}
              </option></select
            >
            <button
              id="btnSetRoleId"
              name="btnSetRoleId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetRoleId', '')"
              >设置角色</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxPrjPotenceBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxPrjPotence_EditCom ref="refQxPrjPotence_Edit"></QxPrjPotence_EditCom>
    <!--详细信息层-->
    <QxPrjPotence_DetailCom ref="QxPrjPotence_Detail"></QxPrjPotence_DetailCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import QxPrjPotenceCRUDEx from '@/viewsShare/PotenceMan/QxPrjPotenceCRUDEx';
  import QxPrjPotence_EditCom from '@/viewsShare/PotenceMan/QxPrjPotence_Edit.vue';
  import QxPrjPotence_DetailCom from '@/viewsShare/PotenceMan/QxPrjPotence_Detail.vue';
  import {
    refQxPrjPotence_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQxPrjPotence_Detail,
    QxPrjId_Local,
    potenceId_q,
    potenceName_q,
  } from './QxPrjPotenceVueShare';
  import { roleId_f } from '@/viewsShare/MenuManage_GP/QxRoleMenusVueShare';
  import { clsQxFuncModuleEN } from '@/ts/L0Entity/PrjManage_GP/clsQxFuncModuleEN';
  import { clsQxPotenceTypeEN } from '@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN';
  import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
  import { clsQxPrjPotenceEN } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN';
  import { QxFuncModule_GetArrQxFuncModule } from '@/ts/L3ForWApi/PrjManage_GP/clsQxFuncModuleWApi';
  import { QxPotenceType_GetArrQxPotenceType } from '@/ts/L3ForWApi/PotenceMan/clsQxPotenceTypeWApi';
  import { QxRoles_GetArrQxRolesByQxPrjId } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
  import { funcModuleId_q, potenceTypeId_q } from '@/viewsShare/PotenceMan/QxPotenceTypeVueShare';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import QxPrjPotence_EditEx from './QxPrjPotence_EditEx';

  import QxPrjPotence_DetailEx from './QxPrjPotence_DetailEx';

  export default defineComponent({
    name: 'QxPrjPotenceCRUD',
    components: {
      // 组件注册
      QxPrjPotence_EditCom,
      QxPrjPotence_DetailCom,
    },
    setup() {
      QxPrjId_Local.value = clsSysPara4WebApi.currSelPrjId;
      const objPage = ref<QxPrjPotenceCRUDEx>();
      const objPage_Edit = ref<QxPrjPotence_EditEx>();
      const objPage_Detail = ref<QxPrjPotence_DetailEx>();
      const arrQxFuncModule = ref<clsQxFuncModuleEN[] | null>([]);
      const arrQxPotenceType = ref<clsQxPotenceTypeEN[] | null>([]);

      const arrQxRoles = ref<clsQxRolesEN[] | null>([]);
      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsQxPrjPotenceEN._CurrTabName;
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrQxFuncModule.value = await QxFuncModule_GetArrQxFuncModule(); //查询区域
        funcModuleId_q.value = '0';

        arrQxPotenceType.value = await QxPotenceType_GetArrQxPotenceType(); //查询区域
        potenceTypeId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const strQxPrjId = QxPrjId_Local.value; //静态变量;//Session存储、local存储

        arrQxRoles.value = await QxRoles_GetArrQxRolesByQxPrjId(strQxPrjId); //功能区域
        roleId_f.value = '0';
      }
      const strTitle = ref('工程权限维护');

      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        QxPrjPotenceCRUDEx.vuebtn_Click = btn_Click;
        QxPrjPotenceCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new QxPrjPotenceCRUDEx();
        objPage.value.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
        return '';
      }

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
          await objPage.value.ExportExcel_QxPrjPotence4Func();
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
        QxPrjPotenceCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refQxPrjPotence_Edit,
        refQxPrjPotence_Detail,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        roleId_f,
        arrQxRoles,
        funcModuleId_q,
        potenceTypeId_q,
        potenceId_q,
        potenceName_q,
        arrQxFuncModule,
        arrQxPotenceType,
        btnExportExcel_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
@/viewsShare/PotenceMan/QxPrjPotenceCRUDEx
