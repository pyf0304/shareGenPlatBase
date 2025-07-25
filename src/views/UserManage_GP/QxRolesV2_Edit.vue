
<template>
<!-- 编辑层 -->

 <el-dialog v-model = "dialogVisible" :width="dialogWidth" :show-close="false" >
<!--使用头部插槽来自定义对话框的标题-->
<template #header>
<div class="custom-header">
<h3>{{ strTitle }}</ h3 >
<el-button @click = "dialogVisible = false" type = "primary" ><font-awesome-icon icon="times" /></el-button>
</div>
</template>
<div id = "divEditLayout" ref="refDivEdit" class = "tab_layout"> 
<table id="tabEdit" style="width:600px" class="table table-bordered table-hover table td table-sm">
<tbody>
<tr id="trRoleENName">
<td class="text-right">
<label id="lblRoleName" name="lblRoleName" class="col-form-label text-right" style="width:90px;">角色名称
</label>
</td>
<td class="text-left">
<input  id="txtRoleName" v-model="roleName" class="form-control form-control-sm" style="width:150px;"/>
</td>
<td class="text-right">
<label id="lblRoleENName" name="lblRoleENName" class="col-form-label text-right" style="width:90px;">角色英文名
</label>
</td>
<td class="text-left">
<input  id="txtRoleENName" v-model="roleENName" class="form-control form-control-sm" style="width:150px;"/>
</td>
</tr>
<tr id="trQxPrjId">
<td class="text-right">
<label id="lblRoleIndex" name="lblRoleIndex" class="col-form-label text-right" style="width:90px;">角色序号
</label>
</td>
<td class="text-left">
<input  id="txtRoleIndex" v-model.number="roleIndex" class="form-control form-control-sm" style="width:150px;"/>
</td>
<td class="text-right">
<label id="lblQxPrjId" name="lblQxPrjId" class="col-form-label text-right" style="width:90px;">项目Id
</label>
</td>
<td class="text-left">
<select id="ddlQxPrjId" v-model='qxPrjId' class="form-control form-control-sm" style="width:150px;">
<option v-for="(item, index) in arrQxProjects " :key = "index" :value = "item.qxPrjId" >
{{ item.prjName }}
</option></select>
</td>
</tr>
<tr id="trMemo">
<td class="text-left" ColSpan=2>
<span class="form-control form-control-sm"  style="width:150px;">
<input  id="chkIsInUse" v-model="isInUse" type="checkbox"  Text = "是否在使用"  ><label for="chkIsInUse">是否在使用</label></span>
</td>
<td class="text-right">
<label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width:90px;">备注
</label>
</td>
<td class="text-left">
<input  id="txtMemo" v-model="memo" class="form-control form-control-sm" style="width:150px;"/>
</td>
</tr>
</tbody>
</table>
 </div>
      <template #footer>
 <el-button  id="btnCancelQxRolesV2" @click = "dialogVisible = false">{{ strCancelButtonText }}</el-button>
 <el-button  id="btnSubmitQxRolesV2" type = "primary" @click="btnSubmit_Click">{{ strSubmitButtonText }}</el-button>
 </template>
 </el-dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import QxRolesV2_EditEx from "@/views/UserManage_GP/QxRolesV2_EditEx";
import { clsQxRolesV2EN } from "@/ts/L0Entity/UserManage_GP/clsQxRolesV2EN";
import { clsQxProjectsEN } from "@/ts/L0Entity/PrjManage_GP/clsQxProjectsEN";
import { QxProjects_GetArrQxProjects } from "@/ts/L3ForWApi/PrjManage_GP/clsQxProjectsWApi";
import { refDivEdit  } from '@/views/UserManage_GP/QxRolesV2VueShare';
import { useUserStore } from '@/store/modulesShare/user';
import { Format, IsNullOrEmpty }                from '@/ts/PubFun/clsString';
import { QxRolesV2_Edit }                from '@/viewsBase/UserManage_GP/QxRolesV2_Edit';
import { enumPageDispMode }                from '@/ts/PubFun/enumPageDispMode';
  export  default defineComponent({
name: 'QxRolesV2Edit',
        components: {
            // 组件注册
        },
setup() {
const userStore = useUserStore();
const roleName = ref('');
const roleENName = ref('');
const roleIndex = ref(0);
const qxPrjId = ref('');
const isInUse = ref(true)
const updDate = ref('');
const updUserId = ref('');
const memo = ref('');

const arrQxProjects = ref<clsQxProjectsEN[]|null>([]);

 /** 函数功能:为编辑区绑定下拉框
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
 **/
async function BindDdl4EditRegionInDiv()
{


arrQxProjects.value = await QxProjects_GetArrQxProjects();//编辑区域
qxPrjId.value = '0';
}


 /** 函数功能:把界面上的属性数据传到类对象中
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
 * @param pobjQxRolesV2EN">数据传输的目的类对象</param>
 **/
 async function GetEditDataQxRolesV2Obj()
{
const pobjQxRolesV2EN = new clsQxRolesV2EN();
pobjQxRolesV2EN.SetRoleName(roleName.value);// 角色名称
pobjQxRolesV2EN.SetRoleENName(roleENName.value);// 角色英文名
pobjQxRolesV2EN.SetRoleIndex(Number(roleIndex.value));// 角色序号
pobjQxRolesV2EN.SetQxPrjId(qxPrjId.value);// 项目Id
pobjQxRolesV2EN.SetIsInUse(isInUse.value);// 是否在使用
pobjQxRolesV2EN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1));// 修改日期
pobjQxRolesV2EN.SetUpdUserId(userStore.getUserId);// 修改用户Id
pobjQxRolesV2EN.SetMemo(memo.value);// 备注
return pobjQxRolesV2EN;
}


 /** 函数功能:把类对象的属性内容显示到界面上
 * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
 * 如果在设置数据库时,就应该一级字段在前,二级字段在后
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
 * @param pobjQxRolesV2EN">表实体类对象</param>
 **/
 async function ShowDataFromQxRolesV2Obj(pobjQxRolesV2EN: clsQxRolesV2EN )
{
 roleName.value = pobjQxRolesV2EN.roleName;// 角色名称
 roleENName.value = pobjQxRolesV2EN.roleENName;// 角色英文名
 roleIndex.value = pobjQxRolesV2EN.roleIndex;// 角色序号
 qxPrjId.value = pobjQxRolesV2EN.qxPrjId;// 项目Id
isInUse.value = pobjQxRolesV2EN.isInUse;// 是否在使用
 memo.value = pobjQxRolesV2EN.memo;// 备注
}

/**
 * 清除用户自定义控件中,所有控件的值
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
 **/
function Clear()
{
roleName.value = "";
roleENName.value = "";
roleIndex.value = 0;
qxPrjId.value = "0";
isInUse.value = false;
memo.value = "";
}

 /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_btnSubmit_Click)
 **/
const btnSubmit_Click =  async ()=>
{
const strThisFuncName = btnSubmit_Click.name;
if (objPage_Edit.value == null)
{
alert('编辑页面初始化不成功,请联系管理员!');
return;
}
const strCommandText: string = strSubmitButtonText.value;
try {
let returnBool = false;
let strInfo = "";
let strMsg = "";
switch(strCommandText)
{
case "添加":
strSubmitButtonText.value = "确认添加";
strCancelButtonText.value = "取消添加";
 await objPage_Edit.value.AddNewRecord();
break;				
case "确认添加":
//这是一个单表的插入的代码,由于逻辑层太简单,
//就把逻辑层合并到控制层,
if (['02', '03', '06'].indexOf(clsQxRolesV2EN.PrimaryTypeId) > -1)
{
const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
if (returnKeyId != 0)
{
hideDialog();
if (objPage_Edit.value.iShowList != null) objPage_Edit.value.iShowList.BindGvCache(clsQxRolesV2EN._CurrTabName, "");
}
}
else
{
returnBool = await objPage_Edit.value.AddNewRecordSave();
if (returnBool == true)
{
if (QxRolesV2_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
hideDialog();
}
if (objPage_Edit.value.iShowList != null) objPage_Edit.value.iShowList.BindGv(clsQxRolesV2EN._CurrTabName, keyId.value.toString());
}
}
break;
case "确认修改":
//这是一个单表的修改的代码,由于逻辑层太简单,
returnBool = await objPage_Edit.value.UpdateRecordSave();
strInfo = returnBool ? "修改成功!" : "修改不成功!";
strInfo += "(In QxRolesV2_Edit.btnSubmit_Click)";
//显示信息框
//console.log(strInfo);
alert(strInfo);
if (returnBool == true)
{
if (QxRolesV2_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
hideDialog();
}
if (objPage_Edit.value.iShowList != null) objPage_Edit.value.iShowList.BindGv(clsQxRolesV2EN._CurrTabName, keyId.value.toString());
}
break;
default:
strMsg = Format("strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())", strCommandText);
console.error(strMsg);
alert(strMsg);
break;
}
}
catch (e)
{
const strMsg = Format("(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})", e, objPage_Edit.value.className, strThisFuncName, strCommandText);
console.error(strMsg);
alert(strMsg);
}
}
const strTitle = ref ('角色V2编辑');
const strSubmitButtonText = ref ('添加');
const strCancelButtonText = ref ('取消');
const keyId = ref ('');
 const objPage_Edit = ref<QxRolesV2_EditEx>();
const dialogVisible = ref (false);
const dialogWidth = ref ('800px'); // 设置对话框的宽度
const showDialog =async (pobjPage_Edit: QxRolesV2_EditEx) => {
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
 GetEditDataQxRolesV2Obj,
 ShowDataFromQxRolesV2Obj,
 Clear,
 btnSubmit_Click,
roleName,
roleENName,
roleIndex,
qxPrjId,
isInUse,
updDate,
updUserId,
memo,
arrQxProjects,
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
btnQxRolesV2_Edit_Click(strCommandName:string, strKeyId:string) {
QxRolesV2_EditEx.btnEdit_Click(strCommandName, strKeyId);
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