
 /**
 * 类名:QxUsers_Detail(界面:QxUsersCRUD,00140033)
 * 表名:QxUsers(00140015)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:02:36
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { QxUsers_GetObjByUserIdAsync } from "@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi";
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { QxUsersEx_FuncMapByFldName } from "@/ts/L3ForWApiExShare/UserManage_GP/clsQxUsersExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsQxUsersEN } from "@/ts/L0Entity/UserManage_GP/clsQxUsersEN";
import { divVarSet,refQxUsers_Detail } from "@/viewsShare/UserManage_GP/QxUsersVueShare";
import { clsQxUsersENEx } from "@/ts/L0Entity/UserManage_GP/clsQxUsersENEx";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* QxUsers_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  QxUsers_Detail 
{
public static times4TestShowDialog = 0;
public opType = "";
public keyId = "";
public static strPageDispModeId = "01";//PopupBox(弹出框)
private iShowList: IShowList;
public mstrListDiv = "divDataLst";
public bolIsLoadDetailRegion = false;  //记录是否导入编辑区的变量
public divName4Detail = "divDetail";  //编辑区的Id
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivDetail(): HTMLDivElement {
return divVarSet.refDivDetail;
}
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivLayout(): HTMLDivElement {
return divVarSet.refDivDetail;
}
constructor(objShowList: IShowList) {
this.iShowList = objShowList;
}


 /**
 * 隐藏对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
 **/
public HideDialog_QxUsers() {
if (QxUsers_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refQxUsers_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_QxUsers(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_QxUsers.name;
if (QxUsers_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refQxUsers_Detail.value == null)
{
const strMsg = Format(
'当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return false;
}
await refQxUsers_Detail.value.showDialog();
}
divVarSet.refDivDetail = refQxUsers_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (QxUsers_Detail.times4TestShowDialog < 2)
{
QxUsers_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_QxUsers(strOp);
}, 100);
}
else
{
const strMsg = Format("当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;
}
return false;
} else {
QxUsers_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelQxUsers = "关闭";
        }
return true;
}

 /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
public async btnDetailRecordInTab_Click(strKeyId:string) {
const strThisFuncName = this.btnDetailRecordInTab_Click.name;
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_QxUsers('Detail');
if (bolIsSuccess == false) return;
try
{
 if (strKeyId == "")
{
alert("请选择需要详细信息的记录!");
return "";
}
this.DetailRecord4Func(strKeyId);
}
catch(e)
{
const strMsg = Format("详细信息记录不成功. {0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /* 
 根据关键字详细信息记录
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord4Func)
  <param name = "sender">参数列表</param>
*/
public async DetailRecord4Func(strUserId: string) 
{
const strThisFuncName = this.DetailRecord4Func.name;
this.btnCancelQxUsers = "关闭";
try
{
const objQxUsersEN = await QxUsers_GetObjByUserIdAsync(strUserId);
const objQxUsersENEx = new clsQxUsersENEx();
ObjectAssign(objQxUsersENEx, objQxUsersEN); 
await QxUsersEx_FuncMapByFldName(clsQxUsersENEx.con_DepartmentName, objQxUsersENEx);
await QxUsersEx_FuncMapByFldName(clsQxUsersENEx.con_DepartmentTypeId, objQxUsersENEx);
await QxUsersEx_FuncMapByFldName(clsQxUsersENEx.con_DepartmentTypeName, objQxUsersENEx);
await QxUsersEx_FuncMapByFldName(clsQxUsersENEx.con_DuUserName, objQxUsersENEx);
await QxUsersEx_FuncMapByFldName(clsQxUsersENEx.con_UserStateName, objQxUsersENEx);
await QxUsersEx_FuncMapByFldName(clsQxUsersENEx.con_IdentityDesc, objQxUsersENEx);
await QxUsersEx_FuncMapByFldName(clsQxUsersENEx.con_CollegeName, objQxUsersENEx);
await QxUsersEx_FuncMapByFldName(clsQxUsersENEx.con_SchoolName, objQxUsersENEx);
await QxUsersEx_FuncMapByFldName(clsQxUsersENEx.con_GradeBaseName, objQxUsersENEx);
await QxUsersEx_FuncMapByFldName(clsQxUsersENEx.con_DateTimeSim, objQxUsersENEx);
if (refQxUsers_Detail.value == null)
{
const strMsg = Format('当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefQxUsers_Detail imported from: @/views/UserManage_GP/QxUsersVueShare',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return;
}
await refQxUsers_Detail.value.ShowDataFromQxUsersObj(objQxUsersENEx);
console.log("完成DetailRecord4Func!");
}
catch(e)
{
const strMsg = Format("显示详细信息4Func不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
public async btnDetailRecord_Click(strKeyId: string) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_QxUsers('Detail');
if (bolIsSuccess == false) return;
if (IsNullOrEmpty(strKeyId) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
 // 为编辑区绑定下拉框
//const conBindDdl = await this.BindDdl4DetailRegion();
this.bolIsLoadDetailRegion = true;  //
this.DetailRecord4Func(strKeyId);
}

 /// <summary>
 /// 把同一个类的对象,复制到另一个对象
 /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 /// </summary>
 /// <param name = "objQxUsersENS">源对象</param>
 /// <returns>目标对象=>clsQxUsersEN:objQxUsersENT</returns>
 public CopyToEx(objQxUsersENS:clsQxUsersEN ): clsQxUsersENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objQxUsersENT = new clsQxUsersENEx();
try
{
ObjectAssign(objQxUsersENT, objQxUsersENS);
 return objQxUsersENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objQxUsersENT;
}
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelQxUsers(value: string) {
refQxUsers_Detail.value.strCancelButtonText = value;
}
}