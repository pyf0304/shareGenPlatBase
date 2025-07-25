
 /**
 * 类名:QxPrjPotence_Detail(界面:QxPrjPotenceCRUD,00140042)
 * 表名:QxPrjPotence(00140005)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:04:32
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:权限管理(PotenceMan)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { QxPrjPotence_GetObjByPotenceIdAsync } from "@/ts/L3ForWApi/PotenceMan/clsQxPrjPotenceWApi";
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { QxPrjPotenceEx_FuncMapByFldName } from "@/ts/L3ForWApiExShare/PotenceMan/clsQxPrjPotenceExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsQxPrjPotenceEN } from "@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN";
import { divVarSet,refQxPrjPotence_Detail } from "@/viewsShare/PotenceMan/QxPrjPotenceVueShare";
import { clsQxPrjPotenceENEx } from "@/ts/L0Entity/PotenceMan/clsQxPrjPotenceENEx";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* QxPrjPotence_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  QxPrjPotence_Detail 
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
public HideDialog_QxPrjPotence() {
if (QxPrjPotence_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refQxPrjPotence_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_QxPrjPotence(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_QxPrjPotence.name;
if (QxPrjPotence_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refQxPrjPotence_Detail.value == null)
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
await refQxPrjPotence_Detail.value.showDialog();
}
divVarSet.refDivDetail = refQxPrjPotence_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (QxPrjPotence_Detail.times4TestShowDialog < 2)
{
QxPrjPotence_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_QxPrjPotence(strOp);
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
QxPrjPotence_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelQxPrjPotence = "关闭";
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
const bolIsSuccess = await this.ShowDialog_QxPrjPotence('Detail');
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
public async DetailRecord4Func(strPotenceId: string) 
{
const strThisFuncName = this.DetailRecord4Func.name;
this.btnCancelQxPrjPotence = "关闭";
try
{
const objQxPrjPotenceEN = await QxPrjPotence_GetObjByPotenceIdAsync(strPotenceId);
const objQxPrjPotenceENEx = new clsQxPrjPotenceENEx();
ObjectAssign(objQxPrjPotenceENEx, objQxPrjPotenceEN); 
await QxPrjPotenceEx_FuncMapByFldName(clsQxPrjPotenceENEx.con_FuncModuleName, objQxPrjPotenceENEx);
await QxPrjPotenceEx_FuncMapByFldName(clsQxPrjPotenceENEx.con_PotenceTypeName, objQxPrjPotenceENEx);
await QxPrjPotenceEx_FuncMapByFldName(clsQxPrjPotenceENEx.con_DateTimeSim, objQxPrjPotenceENEx);
await QxPrjPotenceEx_FuncMapByFldName(clsQxPrjPotenceENEx.con_MenuName, objQxPrjPotenceENEx);
if (refQxPrjPotence_Detail.value == null)
{
const strMsg = Format('当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefQxPrjPotence_Detail imported from: @/views/PotenceMan/QxPrjPotenceVueShare',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return;
}
await refQxPrjPotence_Detail.value.ShowDataFromQxPrjPotenceObj(objQxPrjPotenceENEx);
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
const bolIsSuccess = await this.ShowDialog_QxPrjPotence('Detail');
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
 /// <param name = "objQxPrjPotenceENS">源对象</param>
 /// <returns>目标对象=>clsQxPrjPotenceEN:objQxPrjPotenceENT</returns>
 public CopyToEx(objQxPrjPotenceENS:clsQxPrjPotenceEN ): clsQxPrjPotenceENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objQxPrjPotenceENT = new clsQxPrjPotenceENEx();
try
{
ObjectAssign(objQxPrjPotenceENT, objQxPrjPotenceENS);
 return objQxPrjPotenceENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objQxPrjPotenceENT;
}
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelQxPrjPotence(value: string) {
refQxPrjPotence_Detail.value.strCancelButtonText = value;
}
}