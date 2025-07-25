<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!-- 使用头部插槽来自定义对话框的标题 -->
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
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <!-- <tr id="trMenuId">
          <td class="text-right">
            <label
              id="lblMenuId"
              name="lblMenuId"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMenuId"
              name="txtMenuId"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr> -->
          <tr id="trMenuName">
            <td class="text-right">
              <label id="lblMenuName" class="col-form-label text-right" style="width: 90px"
                >菜单名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMenuName"
                v-model="menuName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trMenuTitle">
            <td class="text-right">
              <label
                id="lblMenuTitle"
                name="lblMenuTitle"
                class="col-form-label text-right"
                style="width: 90px"
                >菜单标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMenuTitle"
                v-model="menuTitle"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trMenuControlName">
            <td class="text-right">
              <label
                id="lblMenuControlName"
                name="lblMenuControlName"
                class="col-form-label text-right"
                style="width: 90px"
                >菜单控件名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMenuControlName"
                name="txtMenuControlName"
                v-model="menuControlName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trUpMenuId">
            <td class="text-right">
              <label
                id="lblUpMenuId"
                name="lblUpMenuId"
                class="col-form-label text-right"
                style="width: 90px"
                >上级菜单Id
              </label>
            </td>
            <td class="text-left">
              <div style="display: flex; align-items: center; gap: 8px">
                <span class="form-control form-control-sm" style="width: 90px">
                  <input
                    id="chkIsRootMenu"
                    v-model="isRootMenu"
                    type="checkbox"
                    Text="根菜单?"
                  /><label for="chkIsRootMenu">根菜单?</label></span
                >
                <select
                  id="ddlUpMenuId"
                  v-model="upMenuId"
                  v-show="!isRootMenu"
                  class="form-control form-control-sm"
                  style="width: 310px"
                >
                  <option v-for="(item, index) in arrQxPrjMenus" :key="index" :value="item.menuId">
                    {{ item.menuName }}
                  </option></select
                >
              </div>
            </td>
          </tr>
          <tr id="trLinkFile">
            <td class="text-right">
              <label
                id="lblLinkFile"
                name="lblLinkFile"
                class="col-form-label text-right"
                style="width: 90px"
                >链接文件
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLinkFile"
                name="txtLinkFile"
                v-model="linkFile"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trqsParameters">
            <td class="text-right">
              <label
                id="lblqsParameters"
                name="lblqsParameters"
                class="col-form-label text-right"
                style="width: 90px"
                >qs参数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtqsParameters"
                name="txtqsParameters"
                v-model="qsParameters"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trPageDispModeId">
            <td class="text-right">
              <label
                id="lblPageDispModeId"
                name="lblPageDispModeId"
                class="col-form-label text-right"
                style="width: 90px"
                >显示模式
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlPageDispModeId"
                v-model="pageDispModeId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrQxPageDispMode"
                  :key="index"
                  :value="item.pageDispModeId"
                >
                  {{ item.pageDispModeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trImgFile">
            <td class="text-right">
              <label
                id="lblImgFile"
                name="lblImgFile"
                class="col-form-label text-right"
                style="width: 90px"
                >图像文件
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtImgFile"
                name="txtImgFile"
                v-model="imgFile"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trOrderNum">
            <td class="text-right">
              <label
                id="lblOrderNum"
                name="lblOrderNum"
                class="col-form-label text-right"
                style="width: 90px"
                >排序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOrderNum"
                name="txtOrderNum"
                v-model="orderNum"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trIsLeafNode">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 400px">
                <input
                  id="chkIsLeafNode"
                  name="chkIsLeafNode"
                  v-model="isLeafNode"
                  type="checkbox"
                  Text="是否叶子"
                /><label for="chkIsLeafNode">是否叶子</label></span
              >
            </td>
          </tr>
          <tr id="trInUse">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 400px">
                <input
                  id="chkInUse"
                  name="chkInUse"
                  v-model="inUse"
                  type="checkbox"
                  Text="是否在用"
                /><label for="chkInUse">是否在用</label></span
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
                name="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelQxPrjMenus" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQxPrjMenus"
        type="primary"
        @click="btnQxPrjMenus_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { Format, Is0EqEmpty, IsNullOrEmptyEq0 } from '@/ts/PubFun/clsString';
  import QxPrjMenusCRUDEx from '@/viewsShare/MenuManage_GP/QxPrjMenusCRUDEx';
  import QxPrjMenus_EditEx from '@/viewsShare/MenuManage_GP/QxPrjMenus_EditEx';
  import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
  import { clsQxPrjMenuSetEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetEN';
  import { clsQxPageDispModeEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPageDispModeEN';
  import { useUserStore } from '@/store/modulesShare/user';
  import { refDivEdit, QxPrjId_Local } from '@/viewsShare/MenuManage_GP/QxPrjMenusVueShare';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { QxPrjMenuSet_GetArrQxPrjMenuSetByCmPrjId } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
  import { QxPrjMenusEx_GetData4UpMenuIdByQxPrjId } from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxPrjMenusExWApi';
  import { QxPageDispMode_GetArrQxPageDispMode } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPageDispModeWApi';
  export default defineComponent({
    name: 'QxPrjMenusEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const menuId = ref('');
      const menuName = ref('');
      const qxPrjId = ref('');
      const menuTitle = ref('');
      const menuControlName = ref('');
      const upMenuId = ref('');
      const linkFile = ref('');
      const qsParameters = ref('');
      const pageDispModeId = ref('');
      const imgFile = ref('');
      const orderNum = ref(0);
      const isLeafNode = ref('0');
      const inUse = ref(true);
      const memo = ref('');
      const updDate = ref('');
      const updUserId = ref('');
      const isRootMenu = ref(false); // 是否根菜单
      const arrQxPrjMenuSet = ref<clsQxPrjMenuSetEN[] | null>([]);
      const arrQxPrjMenus = ref<clsQxPrjMenusEN[] | null>([]);
      const arrQxPageDispMode = ref<clsQxPageDispModeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strQxPrjId = QxPrjId_Local.value; //静态变量;//Session存储、local存储

        arrQxPrjMenus.value = await QxPrjMenusEx_GetData4UpMenuIdByQxPrjId(strQxPrjId); //编辑区域
        upMenuId.value = '0';

        arrQxPageDispMode.value = await QxPageDispMode_GetArrQxPageDispMode(); //编辑区域
        pageDispModeId.value = '0';

        isLeafNode.value = '0';
      }

      const strTitle = ref('工程菜单编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxPrjMenus':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitQxPrjMenus':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxPrjMenus':
            return strCancelButtonText.value;
          case 'btnSubmitQxPrjMenus':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const objPage_Edit = ref<QxPrjMenus_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: QxPrjMenus_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
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
      watch(isRootMenu, (val) => {
        if (val === true) {
          isLeafNode.value = '0'; // 或 isLeafNode.value = false; 取决于你的绑定
        }
      });
      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQxPrjMenusEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQxPrjMenusObj() {
        const pobjQxPrjMenusEN = new clsQxPrjMenusEN();
        pobjQxPrjMenusEN.SetMenuId(menuId.value); // 菜单Id
        pobjQxPrjMenusEN.SetMenuName(menuName.value); // 菜单名
        pobjQxPrjMenusEN.SetQxPrjId(QxPrjId_Local.value); // 项目Id
        pobjQxPrjMenusEN.SetMenuTitle(menuTitle.value); // 菜单标题
        pobjQxPrjMenusEN.SetMenuControlName(menuControlName.value); // 菜单控件名
        pobjQxPrjMenusEN.SetUpMenuId(Is0EqEmpty(upMenuId.value)); // 上级菜单Id
        if (isRootMenu.value) {
          pobjQxPrjMenusEN.SetUpMenuId('00000000'); // 根菜单
          pobjQxPrjMenusEN.SetIsLeafNode(false); // 是否叶子
        } else {
          pobjQxPrjMenusEN.SetUpMenuId(Is0EqEmpty(upMenuId.value)); // 上级菜单Id
          pobjQxPrjMenusEN.SetIsLeafNode(isLeafNode.value == 'true' ? true : false); // 是否叶子
        }
        if (pobjQxPrjMenusEN.upMenuId == '') pobjQxPrjMenusEN.SetUpMenuId('00000000');
        if (pobjQxPrjMenusEN.upMenuId == '0') pobjQxPrjMenusEN.SetUpMenuId('00000000');

        pobjQxPrjMenusEN.SetLinkFile(linkFile.value); // 链接文件
        pobjQxPrjMenusEN.SetqsParameters(qsParameters.value); // qs参数
        pobjQxPrjMenusEN.SetPageDispModeId(Is0EqEmpty(pageDispModeId.value)); // 显示模式
        pobjQxPrjMenusEN.SetImgFile(imgFile.value); // 图像文件
        pobjQxPrjMenusEN.SetOrderNum(Number(orderNum.value)); // 排序号

        pobjQxPrjMenusEN.SetInUse(inUse.value); // 是否在用
        pobjQxPrjMenusEN.SetMemo(memo.value); // 备注
        pobjQxPrjMenusEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjQxPrjMenusEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        return pobjQxPrjMenusEN;
      }
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        menuId.value = '';
        menuName.value = '';
        menuTitle.value = '';
        menuControlName.value = '';
        upMenuId.value = '0';
        linkFile.value = '';
        qsParameters.value = '';
        pageDispModeId.value = '0';
        imgFile.value = '';
        orderNum.value = 0;
        isLeafNode.value = '0';
        inUse.value = false;
        memo.value = '';
      }
      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxPrjMenusEN">表实体类对象</param>
       **/
      async function ShowDataFromQxPrjMenusObj(pobjQxPrjMenusEN: clsQxPrjMenusEN) {
        menuId.value = pobjQxPrjMenusEN.menuId; // 菜单Id
        menuName.value = pobjQxPrjMenusEN.menuName; // 菜单名
        menuTitle.value = pobjQxPrjMenusEN.menuTitle; // 菜单标题
        menuControlName.value = pobjQxPrjMenusEN.menuControlName; // 菜单控件名
        if (pobjQxPrjMenusEN.upMenuId == '00000000') {
          isRootMenu.value = true; // 根菜单
          upMenuId.value = '0'; // 上级菜单Id
          isLeafNode.value = '0';
        } else {
          isRootMenu.value = false; // 非根菜单
          upMenuId.value = IsNullOrEmptyEq0(pobjQxPrjMenusEN.upMenuId); // 上级菜单Id
          isLeafNode.value = pobjQxPrjMenusEN.isLeafNode.toString(); // 是否叶子
        }

        linkFile.value = pobjQxPrjMenusEN.linkFile; // 链接文件
        qsParameters.value = pobjQxPrjMenusEN.qsParameters; // qs参数
        pageDispModeId.value = IsNullOrEmptyEq0(pobjQxPrjMenusEN.pageDispModeId); // 显示模式
        imgFile.value = pobjQxPrjMenusEN.imgFile; // 图像文件
        orderNum.value = pobjQxPrjMenusEN.orderNum; // 排序号
        inUse.value = pobjQxPrjMenusEN.inUse; // 是否在用
        memo.value = pobjQxPrjMenusEN.memo; // 备注
      }
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        ShowDataFromQxPrjMenusObj,
        GetEditDataQxPrjMenusObj,
        refDivEdit,
        menuId,
        menuName,
        qxPrjId,
        menuTitle,
        menuControlName,
        upMenuId,
        linkFile,
        qsParameters,
        pageDispModeId,
        imgFile,
        orderNum,
        isLeafNode,
        inUse,
        memo,
        isRootMenu,
        updDate,
        updUserId,
        arrQxPrjMenuSet,
        arrQxPrjMenus,
        arrQxPageDispMode,
        Clear,
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
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //QxPrjMenus_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQxPrjMenus_Edit_Click(strCommandName: string, strKeyId: string) {
        QxPrjMenus_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_QxPrjMenus(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new QxPrjMenus_EditEx('QxPrjMenus_EditEx', new QxPrjMenusCRUDEx());
        objPage.btnSubmit_Click();
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
