
 /**
 * 类名:QxLoginLog_Detail(界面:QxLoginLogCRUD,00140048)
 * 表名:QxLoginLog(00140137)
 * 版本:2026.04.18.2(服务器:WIN-SRV103-116)
 * 日期:2026/04/18 19:50:56
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日志管理(LogManage)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { QxLoginLog_GetObjByLoginLogIdAsync } from "@/ts/L3ForWApi/LogManage/clsQxLoginLogWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { divVarSet,refQxLoginLog_Detail } from "@/views/LogManage/QxLoginLogVueShare";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* QxLoginLog_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class  QxLoginLog_Detail 
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
public HideDialog_QxLoginLog() {
if (QxLoginLog_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refQxLoginLog_Detail.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_QxLoginLog(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_QxLoginLog.name;
if (QxLoginLog_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refQxLoginLog_Detail.value == null)
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
await refQxLoginLog_Detail.value.showDialog();
}
divVarSet.refDivDetail = refQxLoginLog_Detail.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (QxLoginLog_Detail.times4TestShowDialog < 2)
{
QxLoginLog_Detail.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_QxLoginLog(strOp);
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
QxLoginLog_Detail.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelQxLoginLog = "关闭";
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
const bolIsSuccess = await this.ShowDialog_QxLoginLog('Detail');
if (bolIsSuccess == false) return;
try
{
 if (strKeyId == "")
{
alert("请选择需要详细信息的记录!");
return "";
}
const lngKeyId =  Number(strKeyId);
this.DetailRecord(lngKeyId);
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
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord)
  <param name = "sender">参数列表</param>
*/
public async DetailRecord(lngLoginLogId: number):Promise<boolean> 
{
const strThisFuncName = this.DetailRecord.name;
this.btnCancelQxLoginLog = "关闭";
try
{
const objQxLoginLogEN = await QxLoginLog_GetObjByLoginLogIdAsync(lngLoginLogId);
       if (objQxLoginLogEN == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return false;
        }
if (refQxLoginLog_Detail.value == null)
{
const strMsg = Format('当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefQxLoginLog_Detail imported from: @/views/LogManage/QxLoginLogVueShare',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return false;
}
await refQxLoginLog_Detail.value.ShowDataFromQxLoginLogObj(objQxLoginLogEN);
console.log("完成DetailRecord!");
}
catch(e)
{
const strMsg = Format("显示详细信息不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
            return false;
}
            return true;
}

 /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
public async btnDetailRecord_Click(strKeyId: string) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_QxLoginLog('Detail');
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
const lngKeyId =  Number(strKeyId);
this.DetailRecord(lngKeyId);
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelQxLoginLog(value: string) {
refQxLoginLog_Detail.value.strCancelButtonText = value;
}
}