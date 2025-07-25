<template>
  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button type="primary" @click="dialogVisible = false"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <span id="spnQxPrjId_d" name="spnQxPrjId_d" CssClass="col-form-label text-right"
                >项目Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblQxPrjId_d"
                name="lblQxPrjId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ qxPrjId }}
              </label>
            </td>
          </tr>
          <tr> </tr>
          <tr>
            <td class="text-right">
              <span id="spnPrjName_d" name="spnPrjName_d" CssClass="col-form-label text-right"
                >工程名</span
              >
            </td>
            <td class="text-left" ColSpan="3">
              <label id="lblPrjName_d" name="lblPrjName_d" class="text-primary" style="width: 100px"
                >{{ prjName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMenuName_d" name="spnMenuName_d" CssClass="col-form-label text-right"
                >菜单名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMenuName_d"
                name="lblMenuName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ menuName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnRoleName_d" name="spnRoleName_d" CssClass="col-form-label text-right"
                >角色名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRoleName_d"
                name="lblRoleName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ roleName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnMenuSetName_d"
                name="spnMenuSetName_d"
                CssClass="col-form-label text-right"
                >菜单集名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMenuSetName_d"
                name="lblMenuSetName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ menuSetName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnOrderNum_d" name="spnOrderNum_d" CssClass="col-form-label text-right"
                >排序号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblOrderNum_d"
                name="lblOrderNum_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ orderNum }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsLeafNode_d" name="spnIsLeafNode_d" CssClass="col-form-label text-right"
                >是否叶子</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsLeafNode_d"
                name="lblIsLeafNode_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isLeafNode }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnInUse_d" name="spnInUse_d" CssClass="col-form-label text-right"
                >是否在用</span
              >
            </td>
            <td class="text-left">
              <label id="lblInUse_d" name="lblInUse_d" class="text-primary" style="width: 150px">
                {{ inUse }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnUpMenuId_d" name="spnUpMenuId_d" CssClass="col-form-label text-right"
                >上级菜单Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUpMenuId_d"
                name="lblUpMenuId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ upMenuId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnLinkFile_d" name="spnLinkFile_d" CssClass="col-form-label text-right"
                >链接文件</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblLinkFile_d"
                name="lblLinkFile_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ linkFile }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsDisp_d" name="spnIsDisp_d" CssClass="col-form-label text-right"
                >是否显示</span
              >
            </td>
            <td class="text-left">
              <label id="lblIsDisp_d" name="lblIsDisp_d" class="text-primary" style="width: 150px">
                {{ isDisp }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
                {{ memo }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnPageDispModeName_d"
                name="spnPageDispModeName_d"
                CssClass="col-form-label text-right"
                >页面显示模式名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPageDispModeName_d"
                name="lblPageDispModeName_d"
                class="text-primary"
                style="width: 100px"
                >{{ pageDispModeName }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxRoleMenus" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import QxRoleMenus_DetailEx from '@/viewsShare/MenuManage_GP/QxRoleMenus_DetailEx';
  import { clsQxRoleMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusENEx';
  export default defineComponent({
    name: 'QxRoleMenusDetail',
    components: {
      // 组件注册
    },
    setup() {
      const qxPrjId = ref('');
      const prjName = ref('');
      const menuName = ref('');
      const roleName = ref('');
      const menuSetName = ref('');
      const orderNum = ref(0);
      const isLeafNode = ref('0');
      const inUse = ref('0');
      const upMenuId = ref('');
      const linkFile = ref('');
      const isDisp = ref('0');
      const memo = ref('');
      const pageDispModeName = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxRoleMenusEN">表实体类对象</param>
       **/
      async function ShowDataFromQxRoleMenusObj(pobjQxRoleMenusENEx: clsQxRoleMenusENEx) {
        qxPrjId.value = pobjQxRoleMenusENEx.qxPrjId; // 项目Id
        prjName.value = pobjQxRoleMenusENEx.prjName; // 工程名
        menuName.value = pobjQxRoleMenusENEx.menuName; // 菜单名
        roleName.value = pobjQxRoleMenusENEx.roleName; // 角色名称
        menuSetName.value = pobjQxRoleMenusENEx.menuSetName; // 菜单集名称
        orderNum.value = pobjQxRoleMenusENEx.orderNum; // 排序号
        isLeafNode.value =
          pobjQxRoleMenusENEx.isLeafNode !== null ? pobjQxRoleMenusENEx.isLeafNode.toString() : ''; // 是否叶子
        inUse.value =
          pobjQxRoleMenusENEx.inUse !== null ? pobjQxRoleMenusENEx.inUse.toString() : ''; // 是否在用
        upMenuId.value = pobjQxRoleMenusENEx.upMenuId; // 上级菜单Id
        linkFile.value = pobjQxRoleMenusENEx.linkFile; // 链接文件
        isDisp.value =
          pobjQxRoleMenusENEx.isDisp !== null ? pobjQxRoleMenusENEx.isDisp.toString() : ''; // 是否显示
        memo.value = pobjQxRoleMenusENEx.memo; // 备注
        pageDispModeName.value = pobjQxRoleMenusENEx.pageDispModeName; // 页面显示模式名称
      }
      const strTitle = ref('角色菜单详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxRoleMenus':
            strCancelButtonText.value = strNewValue;
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
          case 'btnCancelQxRoleMenus':
            return strCancelButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        refDivDetail,
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        ShowDataFromQxRoleMenusObj,
        qxPrjId,
        prjName,
        menuName,
        roleName,
        menuSetName,
        orderNum,
        isLeafNode,
        inUse,
        upMenuId,
        linkFile,
        isDisp,
        memo,
        pageDispModeName,
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
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnQxRoleMenus_Detail_Click(strCommandName: string, strKeyId: string) {
        QxRoleMenus_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
