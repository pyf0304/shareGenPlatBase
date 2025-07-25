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
            <td class="text-right">
              <label
                id="lblUserId_q"
                name="lblUserId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUserId_q"
                v-model="userId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrQxUsers" :key="index" :value="item.userId">
                  {{ item.userName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblUpdUser_q"
                name="lblUpdUser_q"
                class="col-form-label text-right"
                style="width: 90px"
                >修改用户
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUpdUser_q"
                v-model="updUser_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
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
        </tbody></table
      >
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblQxPrjUserRelationList"
            name="lblQxPrjUserRelationList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程用户关系列表
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
      <QxPrjUserRelation_ListCom
        ref="refQxPrjUserRelation_List"
        :items="dataListQxPrjUserRelation"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </QxPrjUserRelation_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxPrjUserRelationBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxPrjUserRelation_EditCom ref="refQxPrjUserRelation_Edit"></QxPrjUserRelation_EditCom>
    <!--详细信息层-->
    <QxPrjUserRelation_DetailCom ref="refQxPrjUserRelation_Detail"></QxPrjUserRelation_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
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
    refQxPrjUserRelation_Edit,
    refQxPrjUserRelation_Detail,
    refQxPrjUserRelation_List,
    showErrorMessage,
    dataListQxPrjUserRelation,
    emptyRecNumInfo,
    qxPrjId_q,
    userId_q,
    updUser_q,
  } from '@/viewsShare/UserManage_GP/QxPrjUserRelationVueShare';
  import { clsQxPrjUserRelationEN } from '@/ts/L0Entity/UserManage_GP/clsQxPrjUserRelationEN';
  import QxPrjUserRelation_EditEx from '@/viewsShare/UserManage_GP/QxPrjUserRelation_EditEx';
  import QxPrjUserRelation_DetailEx from '@/viewsShare/UserManage_GP/QxPrjUserRelation_DetailEx';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import QxPrjUserRelationCRUDEx from '@/viewsShare/UserManage_GP/QxPrjUserRelationCRUDEx';
  import QxPrjUserRelation_EditCom from '@/viewsShare/UserManage_GP/QxPrjUserRelation_Edit.vue';
  import QxPrjUserRelation_DetailCom from '@/viewsShare/UserManage_GP/QxPrjUserRelation_Detail.vue';
  import QxPrjUserRelation_ListCom from '@/viewsShare/UserManage_GP/QxPrjUserRelation_List.vue';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import { clsQxProjectsEN } from '@/ts/L0Entity/PrjManage_GP/clsQxProjectsEN';
  import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
  import { QxProjects_GetArrQxProjects } from '@/ts/L3ForWApi/PrjManage_GP/clsQxProjectsWApi';
  import { QxUsers_GetArrQxUsers } from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';
  export default defineComponent({
    name: 'QxPrjUserRelationCRUD',
    components: {
      // 组件注册
      QxPrjUserRelation_EditCom,
      QxPrjUserRelation_DetailCom,
      QxPrjUserRelation_ListCom,
    },

    setup() {
      const objPage = ref<QxPrjUserRelationCRUDEx>();
      const objPage_Edit = ref<QxPrjUserRelation_EditEx>();
      const objPage_Detail = ref<QxPrjUserRelation_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'QxPrjUserRelationCRUD';

      const arrQxProjects = ref<clsQxProjectsEN[] | null>([]);
      const arrQxUsers = ref<clsQxUsersEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_QxPrjUserRelation(refDivList.value);
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
        objPage_Edit.value = new QxPrjUserRelation_EditEx(
          'QxPrjUserRelation_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxPrjUserRelation(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsQxPrjUserRelationEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new QxPrjUserRelation_EditEx(
          'QxPrjUserRelation_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFstKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        const lngmId = Number(strFstKeyId);
        if (lngmId == 0) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_QxPrjUserRelation(opType.value);
          if (bolIsSuccess == false) return;
          const lngKeyId = lngmId;
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
        return clsQxPrjUserRelationEN._CurrTabName;
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
          await objPage.value.BindGv_QxPrjUserRelation(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
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
        await objPage.value.ExportExcel_QxPrjUserRelation();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrQxProjects.value = await QxProjects_GetArrQxProjects(); //查询区域
        qxPrjId_q.value = '0';

        arrQxUsers.value = await QxUsers_GetArrQxUsers(); //查询区域
        userId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('工程用户关系维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        QxPrjUserRelationCRUDEx.vuebtn_Click = btn_Click;
        QxPrjUserRelationCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new QxPrjUserRelationCRUDEx();
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
        QxPrjUserRelationCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListQxPrjUserRelation,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refQxPrjUserRelation_Edit,
        refQxPrjUserRelation_Detail,
        refQxPrjUserRelation_List,
        qxPrjId_q,
        userId_q,
        updUser_q,
        arrQxProjects,
        arrQxUsers,
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
        router.push({ name: 'editQxPrjUserRelation', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new QxPrjUserRelationCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
