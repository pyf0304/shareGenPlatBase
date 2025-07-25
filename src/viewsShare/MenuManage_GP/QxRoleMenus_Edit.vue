<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 450px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trRoleId">
            <td class="text-right">
              <label
                id="lblRoleId"
                name="lblRoleId"
                class="col-form-label text-right"
                style="width: 90px"
                >角色
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlRoleId"
                v-model="roleId"
                class="form-control form-control-sm"
                style="width: 350px"
              >
                <option v-for="(item, index) in arrQxRoles" :key="index" :value="item.roleId">
                  {{ item.roleName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trMenuId">
            <td class="text-right">
              <label
                id="lblMenuId"
                name="lblMenuId"
                class="col-form-label text-right"
                style="width: 90px"
                >菜单
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMenuId"
                v-model="menuId"
                class="form-control form-control-sm"
                style="width: 350px"
              >
                <option v-for="(item, index) in arrQxPrjMenus" :key="index" :value="item.menuId">
                  {{ item.menuName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIsDisp">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 350px">
                <input id="chkIsDisp" v-model="isDisp" type="checkbox" Text="是否显示" /><label
                  for="chkIsDisp"
                  >是否显示</label
                ></span
              >
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >备注
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxRoleMenus" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQxRoleMenus"
        type="primary"
        @click="btnQxRoleMenus_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import QxRoleMenus_EditEx from '@/viewsShare/MenuManage_GP/QxRoleMenus_EditEx';
  import { clsQxRoleMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN';
  import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
  import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
  import { QxRoles_GetArrQxRolesByQxPrjId } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';

  import { refDivEdit, QxPrjId_Local } from '@/viewsShare/MenuManage_GP/QxRoleMenusVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { QxPrjMenus_GetArrQxPrjMenus } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';

  export default defineComponent({
    name: 'QxRoleMenusEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const roleId = ref('');
      const qxPrjId = ref('');
      const menuId = ref('');
      const isDisp = ref(true);
      const updDate = ref('');
      const updUserId = ref('');
      const memo = ref('');

      const arrQxRoles = ref<clsQxRolesEN[] | null>([]);
      const arrQxPrjMenus = ref<clsQxPrjMenusEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrQxRoles.value = await QxRoles_GetArrQxRolesByQxPrjId(clsSysPara4WebApi.currSelPrjId); //编辑区域

        arrQxPrjMenus.value = await QxPrjMenus_GetArrQxPrjMenus(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQxRoleMenusEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQxRoleMenusObj() {
        const pobjQxRoleMenusEN = new clsQxRoleMenusEN();
        pobjQxRoleMenusEN.SetRoleId(roleId.value); // 角色
        pobjQxRoleMenusEN.SetQxPrjId(QxPrjId_Local.value); // 项目Id
        pobjQxRoleMenusEN.SetMenuId(menuId.value); // 菜单
        pobjQxRoleMenusEN.SetIsDisp(isDisp.value); // 是否显示
        pobjQxRoleMenusEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjQxRoleMenusEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        pobjQxRoleMenusEN.SetMemo(memo.value); // 备注
        return pobjQxRoleMenusEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxRoleMenusEN">表实体类对象</param>
       **/
      async function ShowDataFromQxRoleMenusObj(pobjQxRoleMenusEN: clsQxRoleMenusEN) {
        roleId.value = pobjQxRoleMenusEN.roleId; // 角色
        menuId.value = pobjQxRoleMenusEN.menuId; // 菜单
        isDisp.value = pobjQxRoleMenusEN.isDisp; // 是否显示
        memo.value = pobjQxRoleMenusEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        roleId.value = '0';
        menuId.value = '0';
        isDisp.value = false;
        memo.value = '';
      }
      const strTitle = ref('角色菜单编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataQxRoleMenusObj,
        ShowDataFromQxRoleMenusObj,
        Clear,
        roleId,
        qxPrjId,
        menuId,
        isDisp,
        updDate,
        updUserId,
        memo,
        arrQxRoles,
        arrQxPrjMenus,
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

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQxRoleMenus_Edit_Click(strCommandName: string, strKeyId: string) {
        QxRoleMenus_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
