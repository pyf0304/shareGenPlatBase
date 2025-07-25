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
                id="spnPotenceTypeName_d"
                name="spnPotenceTypeName_d"
                CssClass="col-form-label text-right"
                >权限类型名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPotenceTypeName_d"
                name="lblPotenceTypeName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ potenceTypeName }}
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
              <span id="spnMenuId_d" name="spnMenuId_d" CssClass="col-form-label text-right"
                >菜单Id</span
              >
            </td>
            <td class="text-left">
              <label id="lblMenuId_d" name="lblMenuId_d" class="text-primary" style="width: 150px">
                {{ menuId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnViewId_d" name="spnViewId_d" CssClass="col-form-label text-right"
                >界面编号</span
              >
            </td>
            <td class="text-left">
              <label id="lblViewId_d" name="lblViewId_d" class="text-primary" style="width: 150px">
                {{ viewId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnIsVisible_d" name="spnIsVisible_d" CssClass="col-form-label text-right"
                >是否显示</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsVisible_d"
                name="lblIsVisible_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isVisible }}
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
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxPotenceType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import QxPotenceType_DetailEx from '@/viewsShare/PotenceMan/QxPotenceType_DetailEx';
  import { clsQxPotenceTypeENEx } from '@/ts/L0Entity/PotenceMan/clsQxPotenceTypeENEx';
  export default defineComponent({
    name: 'QxPotenceTypeDetail',
    components: {
      // 组件注册
    },
    setup() {
      const potenceTypeName = ref('');
      const qxPrjId = ref('');
      const funcModuleId = ref('');
      const menuId = ref('');
      const viewId = ref('');
      const isVisible = ref('0');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxPotenceTypeEN">表实体类对象</param>
       **/
      async function ShowDataFromQxPotenceTypeObj(pobjQxPotenceTypeENEx: clsQxPotenceTypeENEx) {
        potenceTypeName.value = pobjQxPotenceTypeENEx.potenceTypeName; // 权限类型名
        qxPrjId.value = pobjQxPotenceTypeENEx.qxPrjId; // 项目Id
        funcModuleId.value = pobjQxPotenceTypeENEx.funcModuleId; // 模块Id
        menuId.value = pobjQxPotenceTypeENEx.menuId; // 菜单Id
        viewId.value = pobjQxPotenceTypeENEx.viewId; // 界面编号
        isVisible.value =
          pobjQxPotenceTypeENEx.isVisible !== null
            ? pobjQxPotenceTypeENEx.isVisible.toString()
            : ''; // 是否显示
        memo.value = pobjQxPotenceTypeENEx.memo; // 备注
      }
      const strTitle = ref('权限类型详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxPotenceType':
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
          case 'btnCancelQxPotenceType':
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
        ShowDataFromQxPotenceTypeObj,
        potenceTypeName,
        qxPrjId,
        funcModuleId,
        menuId,
        viewId,
        isVisible,
        memo,
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
      btnQxPotenceType_Detail_Click(strCommandName: string, strKeyId: string) {
        QxPotenceType_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
