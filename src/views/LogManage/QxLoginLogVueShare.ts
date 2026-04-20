
 /**
 * 类名:QxLoginLogVueShare(界面:QxLoginLogCRUD,00140048)
 * 表名:QxLoginLog(00140137)
 * 版本:2026.04.18.2(服务器:WIN-SRV103-116)
 * 日期:2026/04/18 19:56:55
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日志管理(LogManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsQxLoginLogENEx } from "@/ts/L0Entity/LogManage/clsQxLoginLogENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsQxLoginLogEN } from "@/ts/L0Entity/LogManage/clsQxLoginLogEN";
import { Format } from "@/ts/PubFun/clsString";

const ascOrDesc4SortFun = ref ('Asc');
const sortQxLoginLogBy = ref ('');

const viewVarSet = reactive({
ascOrDesc4SortFun,
sortQxLoginLogBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refQxLoginLog_Detail = ref ();
const refQxLoginLog_Edit = ref ();
const refQxLoginLog_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refQxLoginLog_Detail,
refQxLoginLog_Edit,
refQxLoginLog_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refQxLoginLog_Detail,
refQxLoginLog_Edit,
refQxLoginLog_List, };

export const showErrorMessage = ref (false);
export const dataListQxLoginLog = ref<Array<clsQxLoginLogENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const qxLoginLogCache: { [key: string]: clsQxLoginLogENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const loginLogNumber_q = ref('');
export const loginIP_q = ref('');
export const failReason_q = ref('');
export const loginResult_q = ref('');
export const loginTime_q = ref('');
export const loginUserId_q = ref('');
export const onlineTime_q = ref('');
export const outTime_q = ref('');
const qryVarSet = reactive({
 loginLogNumber_q,
 loginIP_q,
 failReason_q,
 loginResult_q,
 loginTime_q,
 loginUserId_q,
 onlineTime_q,
 outTime_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineQxLoginLogCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( loginLogNumber_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginLogNumber, loginLogNumber_q.value);
}
if ( loginIP_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginIP, loginIP_q.value);
}
if ( failReason_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_FailReason, failReason_q.value);
}
if ( loginResult_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginResult, loginResult_q.value);
}
if ( loginTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginTime, loginTime_q.value);
}
if ( loginUserId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginUserId, loginUserId_q.value);
}
if ( onlineTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_OnlineTime, onlineTime_q.value);
}
if ( outTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_OutTime, outTime_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineQxLoginLogCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxLoginLogConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxLoginLogCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( loginLogNumber_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginLogNumber, loginLogNumber_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_LoginLogNumber, loginLogNumber_q.value, "like");
}
if ( loginIP_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginIP, loginIP_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_LoginIP, loginIP_q.value, "like");
}
if ( failReason_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_FailReason, failReason_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_FailReason, failReason_q.value, "like");
}
if ( loginResult_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginResult, loginResult_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_LoginResult, loginResult_q.value, "like");
}
if ( loginTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginTime, loginTime_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_LoginTime, loginTime_q.value, "like");
}
if ( loginUserId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginUserId, loginUserId_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_LoginUserId, loginUserId_q.value, "like");
}
if ( onlineTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_OnlineTime, onlineTime_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_OnlineTime, onlineTime_q.value, "like");
}
if ( outTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_OutTime, outTime_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_OutTime, outTime_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineQxLoginLogConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxLoginLogCond.whereCond = strWhereCond;
return objQxLoginLogCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxLoginLogConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxLoginLogCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( loginLogNumber_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginLogNumber, loginLogNumber_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_LoginLogNumber, loginLogNumber_q.value, "like");
}
if ( loginIP_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginIP, loginIP_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_LoginIP, loginIP_q.value, "like");
}
if ( failReason_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_FailReason, failReason_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_FailReason, failReason_q.value, "like");
}
if ( loginResult_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginResult, loginResult_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_LoginResult, loginResult_q.value, "like");
}
if ( loginTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginTime, loginTime_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_LoginTime, loginTime_q.value, "like");
}
if ( loginUserId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_LoginUserId, loginUserId_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_LoginUserId, loginUserId_q.value, "like");
}
if ( onlineTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_OnlineTime, onlineTime_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_OnlineTime, onlineTime_q.value, "like");
}
if ( outTime_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxLoginLogEN.con_OutTime, outTime_q.value);
objQxLoginLogCond.SetCondFldValue(clsQxLoginLogEN.con_OutTime, outTime_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineQxLoginLogConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxLoginLogCond.whereCond = strWhereCond;
return objQxLoginLogCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsQxLoginLogENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListQxLoginLog.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refQxLoginLog_List.value != null) refQxLoginLog_List.value.selectAllChecked = false;
};

export  function QxLoginLog_DeleteKeyIdCache( lngLoginLogId:number):void
{


if (
lngLoginLogId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngLoginLogId }`;
delete qxLoginLogCache[cacheKey];
return;
}
}