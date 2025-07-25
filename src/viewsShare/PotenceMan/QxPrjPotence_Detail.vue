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
              <span
                id="spnPotenceName_d"
                name="spnPotenceName_d"
                CssClass="col-form-label text-right"
                >权限名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPotenceName_d"
                name="lblPotenceName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ potenceName }}
              </label>
            </td>
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
          <tr>
            <td class="text-right">
              <span
                id="spnFuncModuleId_d"
                name="spnFuncModuleId_d"
                CssClass="col-form-label text-right"
                >模块Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncModuleId_d"
                name="lblFuncModuleId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcModuleId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnPotenceTypeId_d"
                name="spnPotenceTypeId_d"
                CssClass="col-form-label text-right"
                >权限类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPotenceTypeId_d"
                name="lblPotenceTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ potenceTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMenuId_d" name="spnMenuId_d" CssClass="col-form-label text-right"
                >菜单Id</span
              >
            </td>
            <td class="text-left">
              <label id="lblMenuId_d" name="lblMenuId_d" class="text-primary" style="width: 150px">
                {{ menuId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnMenuId4Win_d" name="spnMenuId4Win_d" CssClass="col-form-label text-right"
                >菜单Id4Win</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMenuId4Win_d"
                name="lblMenuId4Win_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ menuId4Win }}
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
            <td class="text-right">
              <span
                id="spnFuncModuleName_d"
                name="spnFuncModuleName_d"
                CssClass="col-form-label text-right"
                >模块名</span
              >
            </td>
            <td class="text-left">
              <label id="lblFuncModuleName_d" name="lblFuncModuleName_d" class="text-primary"
                >{{ funcModuleName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnPotenceTypeName_d"
                name="spnPotenceTypeName_d"
                CssClass="col-form-label text-right"
                >权限类型名</span
              >
            </td>
            <td class="text-left">
              <label id="lblPotenceTypeName_d" name="lblPotenceTypeName_d" class="text-primary"
                >{{ potenceTypeName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnMenuName_d" name="spnMenuName_d" CssClass="col-form-label text-right"
                >菜单名</span
              >
            </td>
            <td class="text-left">
              <label id="lblMenuName_d" name="lblMenuName_d" class="text-primary"
                >{{ menuName }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxPrjPotence" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import QxPrjPotence_DetailEx from '@/viewsShare/PotenceMan/QxPrjPotence_DetailEx';
  import { clsQxPrjPotenceENEx } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceENEx';
  export default defineComponent({
    name: 'QxPrjPotenceDetail',
    components: {
      // 组件注册
    },
    setup() {
      const potenceName = ref('');
      const qxPrjId = ref('');
      const funcModuleId = ref('');
      const potenceTypeId = ref('');
      const menuId = ref('');
      const menuId4Win = ref('');
      const memo = ref('');
      const funcModuleName = ref('');
      const potenceTypeName = ref('');
      const dateTimeSim = ref('');
      const menuName = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxPrjPotenceEN">表实体类对象</param>
       **/
      async function ShowDataFromQxPrjPotenceObj(pobjQxPrjPotenceENEx: clsQxPrjPotenceENEx) {
        potenceName.value = pobjQxPrjPotenceENEx.potenceName; // 权限名称
        qxPrjId.value = pobjQxPrjPotenceENEx.qxPrjId; // 项目Id
        funcModuleId.value = pobjQxPrjPotenceENEx.funcModuleId; // 模块Id
        potenceTypeId.value = pobjQxPrjPotenceENEx.potenceTypeId; // 权限类型Id
        menuId.value = pobjQxPrjPotenceENEx.menuId; // 菜单Id
        menuId4Win.value = pobjQxPrjPotenceENEx.menuId4Win; // 菜单Id4Win
        memo.value = pobjQxPrjPotenceENEx.memo; // 备注
        funcModuleName.value = pobjQxPrjPotenceENEx.funcModuleName; // 模块名
        potenceTypeName.value = pobjQxPrjPotenceENEx.potenceTypeName; // 权限类型名
        dateTimeSim.value = pobjQxPrjPotenceENEx.dateTimeSim; // 简化日期时间
        menuName.value = pobjQxPrjPotenceENEx.menuName; // 菜单名
      }
      const strTitle = ref('工程权限详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxPrjPotence':
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
          case 'btnCancelQxPrjPotence':
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
        ShowDataFromQxPrjPotenceObj,
        potenceName,
        qxPrjId,
        funcModuleId,
        potenceTypeId,
        menuId,
        menuId4Win,
        memo,
        funcModuleName,
        potenceTypeName,
        dateTimeSim,
        menuName,
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
      btnQxPrjPotence_Detail_Click(strCommandName: string, strKeyId: string) {
        QxPrjPotence_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
