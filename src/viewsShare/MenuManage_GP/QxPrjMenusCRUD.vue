<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" class="h5">{{ strTitle }}-GPShare </label>
      <label id="lblMsg_List" class="text-warning" style="width: 250px"> </label>
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
              <label id="lblMenuSetId_q" class="col-form-label text-right" style="width: 90px"
                >菜单集(*)
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMenuSetId_qq"
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
              <select
                id="ddlUpMenuId_q"
                v-model="upMenuId_q"
                title="请选择上级菜单"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrQxPrjMenus" :key="index" :value="item.menuId">
                  {{ item.menuName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <input
                id="txtMenuId_q"
                v-model="menuId_q"
                placeholder="请输入菜单ID"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <input
                id="txtMenuName_q"
                v-model="menuName_q"
                placeholder="请输入菜单名称"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <input
                id="txtMenuTitle_q"
                v-model="menuTitle_q"
                placeholder="请输入菜单标题"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <select
                id="ddlbIsLeafNode_q"
                v-model="isLeafNode_q"
                title="请选择是否叶子节点"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择叶子？</option>
                <option value="true">是-叶子</option>
                <option value="false">否-不是叶子</option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlbInUse_q"
                v-model="inUse_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择（在用？）</option>
                <option value="true">是-在用</option>
                <option value="false">否-不在用</option>
              </select>
            </td>
            <td class="text-left">
              <button
                id="btnQuery"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('Query', '')"
                >查询</button
              >
            </td>
            <td class="text-left">
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
          <label id="lblQxPrjMenusList" class="col-form-label text-info" style="width: 250px"
            >工程菜单列表
          </label>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
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
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetInUse', '')"
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
              style="width: 150px"
            >
              <option v-for="(item, index) in arrQxPrjMenuSet" :key="index" :value="item.menuSetId">
                {{ item.menuSetName }}
              </option></select
            >
            <button
              id="btnSetMenuSetId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetMenuSetId', '')"
              >设置菜单集</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlRoleId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 90px"
            ></select>
            <button
              id="btnSetRoleId"
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
      <input id="hidSortQxPrjMenusBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxPrjMenus_EditCom ref="refQxPrjMenus_Edit"></QxPrjMenus_EditCom>
    <!--详细信息层-->
    <QxPrjMenus_DetailCom ref="QxPrjMenus_Detail"></QxPrjMenus_DetailCom>
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
  import QxPrjMenusCRUDEx from '@/viewsShare/MenuManage_GP/QxPrjMenusCRUDEx';
  import QxPrjMenus_EditCom from '@/viewsShare/MenuManage_GP/QxPrjMenus_Edit.vue';
  import QxPrjMenus_DetailCom from '@/viewsShare/MenuManage_GP/QxPrjMenus_Detail.vue';
  import { extractValues } from '@/ts/PubFun/clsString';
  import {
    refQxPrjMenus_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQxPrjMenus_Detail,
    upMenuId_q,
    QxPrjId_Local,
    divVarSet,
    menuId_q,
    menuName_q,
    menuTitle_q,
    isLeafNode_q,
    inUse_q,
    menuSetId_f,
    inUse_f,
    menuSetId_q,
    CmPrjId_Local,
  } from '@/viewsShare/MenuManage_GP/QxPrjMenusVueShare';
  import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
  import { QxPrjMenusEx_GetData4UpMenuIdByQxPrjId } from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxPrjMenusExWApi';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { QxPrjMenuSet_GetArrQxPrjMenuSetByCmPrjId } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
  import { clsQxPrjMenuSetEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetEN';

  import { BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import { useUserStore } from '@/store/modulesShare/user';
  import QxPrjMenus_EditEx from './QxPrjMenus_EditEx';
  import QxPrjMenus_DetailEx from './QxPrjMenus_DetailEx';

  export default defineComponent({
    name: 'QxPrjMenusCRUD',
    components: {
      // 组件注册
      QxPrjMenus_EditCom,
      QxPrjMenus_DetailCom,
    },
    props: {
      paras: {
        type: String,
        default: false,
      },
    },

    setup(props) {
      QxPrjId_Local.value = clsSysPara4WebApi.currSelPrjId;
      CmPrjId_Local.value = clsSysPara4WebApi.cmPrjId;
      const objPage = ref<QxPrjMenusCRUDEx>();
      const objPage_Edit = ref<QxPrjMenus_EditEx>();
      const objPage_Detail = ref<QxPrjMenus_DetailEx>();
      const userStore = useUserStore();
      const arrQxPrjMenus = ref<clsQxPrjMenusEN[] | null>([]);
      const arrQxPrjMenuSet = ref<clsQxPrjMenuSetEN[] | null>([]);

      const editTabName = ref('QxPrjMenus');
      const strTitle = ref('工程菜单维护0');

      onMounted(async () => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        isLeafNode_q.value = '0';
        inUse_q.value = '0';
        QxPrjMenusCRUDEx.vuebtn_Click = btn_Click;
        QxPrjMenusCRUDEx.GetPropValue = GetPropValue;
        const strEditTabName = extractValues(props.paras, 'EditTabName');
        if (strEditTabName != '') editTabName.value = strEditTabName;
        if (editTabName.value == 'QxRoleMenus') strTitle.value = '角色菜单维护';
        objPage.value = new QxPrjMenusCRUDEx();
        await objPage.value.PageLoadCache();
        // alert(`当前表:${editTabName.value}`);
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'editTabName':
            return editTabName.value;

          default:
            return '';
        }
        return '';
      }
      function SetDefaultValue() {
        const strMenuSetId = userStore.getMenuSetId;
        menuSetId_q.value = strMenuSetId;
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

        arrQxPrjMenus.value = await QxPrjMenusEx_GetData4UpMenuIdByQxPrjId(strQxPrjId); //查询区域
        upMenuId_q.value = '0';
        arrQxPrjMenuSet.value = await QxPrjMenuSet_GetArrQxPrjMenuSetByCmPrjId(CmPrjId_Local.value); //查询区域
        if (arrQxPrjMenuSet.value != null && arrQxPrjMenuSet.value.length > 0) {
          SetDefaultValue();
        } else {
          menuSetId_q.value = '0';
        }

        // BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbIsLeafNode_q');
        // isLeafNode_q.value = '0';

        // inUse_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        // BindDdl_TrueAndFalseInDivObj(divVarSet.refDivFunction, 'ddlbInUse');
        inUse_f.value = '0';

        arrQxPrjMenuSet.value = await QxPrjMenuSet_GetArrQxPrjMenuSetByCmPrjId(strCmPrjId); //功能区域
        menuSetId_f.value = '0';
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(' menuSetId_q(in btn_Click)', menuSetId_q);
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
        strTitle,
        btn_Click,
        refQxPrjMenus_Edit,
        refQxPrjMenus_Detail,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        upMenuId_q,
        arrQxPrjMenus,
        menuId_q,
        menuName_q,

        menuTitle_q,
        isLeafNode_q,
        inUse_q,
        arrQxPrjMenuSet,
        menuSetId_q,
        menuSetId_f,
        inUse_f,
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
<style scoped>
  .grey-background {
    background-color: #f0f0f0; /* 设置背景色为浅灰色 */
  }
  .light-red-background {
    background-color: #ffcccc; /* 设置背景色为浅红色 */
  }
  .light-red-text {
    /* color:red;//: #ff8080; 设置字体颜色为浅红色 */
    color: red; /* 设置字体颜色为浅红色 */
  }
</style>
