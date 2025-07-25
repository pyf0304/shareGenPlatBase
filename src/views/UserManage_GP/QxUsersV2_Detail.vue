
<template>
 <el-dialog v-model = "dialogVisible" :width="dialogWidth" :show-close="false" >
<!--使用头部插槽来自定义对话框的标题-->
<template #header>
<div class="custom-header">
<h3>{{ strTitle }}</ h3 >
<el-button @click = "dialogVisible = false" type = "primary" ><font-awesome-icon icon="times" /></el-button>
</div>
</template>
<div id = "divDetailLayout" ref="refDivDetail" class = "tab_layout" 
>
<!-- 详细信息层 -->

<table id="tabEdit" style="width:600px" class="table table-bordered table-hover table td table-sm">
<tbody>
<tr >
<td class="text-right">
<span id="spnCreateTime_d" name="spnCreateTime_d" CssClass="col-form-label text-right">建立时间</span>
</td>
<td class="text-left">
<label id="lblCreateTime_d" name="lblCreateTime_d" class="text-primary" style="width:150px;">
</label>
</td>
<td class="text-right">
<span id="spnDepartmentIdInt_d" name="spnDepartmentIdInt_d" CssClass="col-form-label text-right">部门Id</span>
</td>
<td class="text-left">
<label id="lblDepartmentIdInt_d" name="lblDepartmentIdInt_d" class="text-primary" style="width:150px;">
</label>
</td>
</tr>
<tr >
<td class="text-right">
<span id="spnname_d" name="spnname_d" CssClass="col-form-label text-right">姓名</span>
</td>
<td class="text-left">
<label id="lblname_d" name="lblname_d" class="text-primary" style="width:150px;">
</label>
</td>
<td class="text-right">
<span id="spnUserName_d" name="spnUserName_d" CssClass="col-form-label text-right">用户名</span>
</td>
<td class="text-left">
<label id="lblUserName_d" name="lblUserName_d" class="text-primary" style="width:150px;">
</label>
</td>
</tr>
<tr >
<td class="text-right">
<span id="spnPassword_d" name="spnPassword_d" CssClass="col-form-label text-right">口令</span>
</td>
<td class="text-left">
<label id="lblPassword_d" name="lblPassword_d" class="text-primary" style="width:150px;">
</label>
</td>
<td class="text-right">
<span id="spnpsalt_d" name="spnpsalt_d" CssClass="col-form-label text-right">密码盐值</span>
</td>
<td class="text-left">
<label id="lblpsalt_d" name="lblpsalt_d" class="text-primary" style="width:150px;">
</label>
</td>
</tr>
<tr >
<td class="text-right">
<span id="spnnickName_d" name="spnnickName_d" CssClass="col-form-label text-right">邮箱</span>
</td>
<td class="text-left">
<label id="lblnickName_d" name="lblnickName_d" class="text-primary" style="width:150px;">
</label>
</td>
<td class="text-right">
<span id="spnheadImg_d" name="spnheadImg_d" CssClass="col-form-label text-right">邮箱</span>
</td>
<td class="text-left">
<label id="lblheadImg_d" name="lblheadImg_d" class="text-primary" style="width:150px;">
</label>
</td>
</tr>
<tr >
<td class="text-right">
<span id="spnEmail_d" name="spnEmail_d" CssClass="col-form-label text-right">邮箱</span>
</td>
<td class="text-left">
<label id="lblEmail_d" name="lblEmail_d" class="text-primary" style="width:150px;">
</label>
</td>
<td class="text-right">
<span id="spnphone_d" name="spnphone_d" CssClass="col-form-label text-right">电话号码</span>
</td>
<td class="text-left">
<label id="lblphone_d" name="lblphone_d" class="text-primary" style="width:150px;">
</label>
</td>
</tr>
<tr >
<td class="text-right">
<span id="spnremark_d" name="spnremark_d" CssClass="col-form-label text-right">备注</span>
</td>
<td class="text-left">
<label id="lblremark_d" name="lblremark_d" class="text-primary" style="width:150px;">
</label>
</td>
<td class="text-right">
<span id="spnstatus_d" name="spnstatus_d" CssClass="col-form-label text-right">用户状态Id</span>
</td>
<td class="text-left">
<label id="lblstatus_d" name="lblstatus_d" class="text-primary" style="width:150px;">
</label>
</td>
</tr>
</tbody>
</table>
 </div>
      <template #footer>
 <el-button  id="btnCancelQxUsersV2" @click = "dialogVisible = false">{{ strCancelButtonText }}</el-button>
 </template>
 </el-dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Format } from "@/ts/PubFun/clsString"
import QxUsersV2_DetailEx from "@/views/UserManage_GP/QxUsersV2_DetailEx";
  export  default defineComponent({
name: 'QxUsersV2_Detail',
        components: {
            // 组件注册
        },
setup() {
const strTitle = ref ('用户V2详细信息');
const refDivDetail = ref ();
const strCancelButtonText = ref ('取消');
const SetButtonText = (strButtonId: string, strNewValue: string) => {
let strMsg;
switch (strButtonId)
{
case 'btnCancelQxUsersV2':
strCancelButtonText.value = strNewValue;
break;
default:
strMsg = `按钮Id:${ strButtonId} 在函数中没有被处理!`;
console.error(strMsg);
alert(strMsg);
break;
}
};
const GetButtonText = (strButtonId: string) => {
let strMsg;
switch (strButtonId)
{
case 'btnCancelQxUsersV2':
return strCancelButtonText.value;
default:
strMsg = `按钮Id:${ strButtonId} 在函数中没有被处理!`;
console.error(strMsg);
alert(strMsg);
break;
}
};
const dialogVisible = ref (false);
const dialogWidth = ref ('800px'); // 设置对话框的宽度
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
btnClick(strCommandName:string, strKeyId:string) {
                alert(Format("{0}-{1}", strCommandName, strKeyId));
},

 /**
  *按钮单击,用于调用Js函数中btnDetail_Click
 *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
 **/
btnQxUsersV2_Detail_Click(strCommandName:string, strKeyId:string) {
QxUsersV2_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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