
 /**
 * 类名:clsQxLoginLogWApi
 * 表名:QxLoginLog(00140137)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/02 11:56:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日志管理(LogManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 登录日志(QxLoginLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2026年04月02日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsQxLoginLogEN } from "@/ts/L0Entity/LogManage/clsQxLoginLogEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";

 export const qxLoginLog_Controller = "QxLoginLogApi";
 export const qxLoginLog_ConstructorName = "qxLoginLog";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngLoginLogId:关键字
 * @returns 对象
 **/
export  async function QxLoginLog_GetObjByLoginLogIdAsync(lngLoginLogId: number): Promise<clsQxLoginLogEN|null>  
{
const strThisFuncName = "GetObjByLoginLogIdAsync";

if (lngLoginLogId == 0)
{
  const strMsg = Format("参数:[lngLoginLogId]不能为空!(In clsQxLoginLogWApi.GetObjByLoginLogIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByLoginLogId";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngLoginLogId,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objQxLoginLog = QxLoginLog_GetObjFromJsonObj(returnObj);
return objQxLoginLog;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByLoginLogIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByLoginLogIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxLoginLog_SortFunDefa(a:clsQxLoginLogEN , b:clsQxLoginLogEN): number 
{
return a.loginLogId-b.loginLogId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxLoginLog_SortFunDefa2Fld(a:clsQxLoginLogEN , b:clsQxLoginLogEN): number 
{
if (a.loginLogNumber == b.loginLogNumber) return a.loginIP.localeCompare(b.loginIP);
else return a.loginLogNumber.localeCompare(b.loginLogNumber);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxLoginLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxLoginLogEN.con_LoginLogId:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
return a.loginLogId-b.loginLogId;
}
case clsQxLoginLogEN.con_LoginLogNumber:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (a.loginLogNumber == null) return -1;
if (b.loginLogNumber == null) return 1;
return a.loginLogNumber.localeCompare(b.loginLogNumber);
}
case clsQxLoginLogEN.con_LoginIP:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (a.loginIP == null) return -1;
if (b.loginIP == null) return 1;
return a.loginIP.localeCompare(b.loginIP);
}
case clsQxLoginLogEN.con_FailReason:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (a.failReason == null) return -1;
if (b.failReason == null) return 1;
return a.failReason.localeCompare(b.failReason);
}
case clsQxLoginLogEN.con_LoginResult:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (a.loginResult == null) return -1;
if (b.loginResult == null) return 1;
return a.loginResult.localeCompare(b.loginResult);
}
case clsQxLoginLogEN.con_LoginTime:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (a.loginTime == null) return -1;
if (b.loginTime == null) return 1;
return a.loginTime.localeCompare(b.loginTime);
}
case clsQxLoginLogEN.con_LoginUserId:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (a.loginUserId == null) return -1;
if (b.loginUserId == null) return 1;
return a.loginUserId.localeCompare(b.loginUserId);
}
case clsQxLoginLogEN.con_OnlineTime:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (a.onlineTime == null) return -1;
if (b.onlineTime == null) return 1;
return a.onlineTime.localeCompare(b.onlineTime);
}
case clsQxLoginLogEN.con_OutTime:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (a.outTime == null) return -1;
if (b.outTime == null) return 1;
return a.outTime.localeCompare(b.outTime);
}
case clsQxLoginLogEN.con_Memo:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxLoginLog]中不存在!(in ${ qxLoginLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxLoginLogEN.con_LoginLogId:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
return b.loginLogId-a.loginLogId;
}
case clsQxLoginLogEN.con_LoginLogNumber:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (b.loginLogNumber == null) return -1;
if (a.loginLogNumber == null) return 1;
return b.loginLogNumber.localeCompare(a.loginLogNumber);
}
case clsQxLoginLogEN.con_LoginIP:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (b.loginIP == null) return -1;
if (a.loginIP == null) return 1;
return b.loginIP.localeCompare(a.loginIP);
}
case clsQxLoginLogEN.con_FailReason:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (b.failReason == null) return -1;
if (a.failReason == null) return 1;
return b.failReason.localeCompare(a.failReason);
}
case clsQxLoginLogEN.con_LoginResult:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (b.loginResult == null) return -1;
if (a.loginResult == null) return 1;
return b.loginResult.localeCompare(a.loginResult);
}
case clsQxLoginLogEN.con_LoginTime:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (b.loginTime == null) return -1;
if (a.loginTime == null) return 1;
return b.loginTime.localeCompare(a.loginTime);
}
case clsQxLoginLogEN.con_LoginUserId:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (b.loginUserId == null) return -1;
if (a.loginUserId == null) return 1;
return b.loginUserId.localeCompare(a.loginUserId);
}
case clsQxLoginLogEN.con_OnlineTime:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (b.onlineTime == null) return -1;
if (a.onlineTime == null) return 1;
return b.onlineTime.localeCompare(a.onlineTime);
}
case clsQxLoginLogEN.con_OutTime:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (b.outTime == null) return -1;
if (a.outTime == null) return 1;
return b.outTime.localeCompare(a.outTime);
}
case clsQxLoginLogEN.con_Memo:
return (a: clsQxLoginLogEN, b: clsQxLoginLogEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxLoginLog]中不存在!(in ${ qxLoginLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByLoginLogIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxLoginLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxLoginLogEN.con_LoginLogId:
return (obj: clsQxLoginLogEN) => {
return obj.loginLogId === value;
}
case clsQxLoginLogEN.con_LoginLogNumber:
return (obj: clsQxLoginLogEN) => {
return obj.loginLogNumber === value;
}
case clsQxLoginLogEN.con_LoginIP:
return (obj: clsQxLoginLogEN) => {
return obj.loginIP === value;
}
case clsQxLoginLogEN.con_FailReason:
return (obj: clsQxLoginLogEN) => {
return obj.failReason === value;
}
case clsQxLoginLogEN.con_LoginResult:
return (obj: clsQxLoginLogEN) => {
return obj.loginResult === value;
}
case clsQxLoginLogEN.con_LoginTime:
return (obj: clsQxLoginLogEN) => {
return obj.loginTime === value;
}
case clsQxLoginLogEN.con_LoginUserId:
return (obj: clsQxLoginLogEN) => {
return obj.loginUserId === value;
}
case clsQxLoginLogEN.con_OnlineTime:
return (obj: clsQxLoginLogEN) => {
return obj.onlineTime === value;
}
case clsQxLoginLogEN.con_OutTime:
return (obj: clsQxLoginLogEN) => {
return obj.outTime === value;
}
case clsQxLoginLogEN.con_Memo:
return (obj: clsQxLoginLogEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxLoginLog]中不存在!(in ${ qxLoginLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxLoginLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxLoginLog_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFldName,
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const arrId = data.returnStrLst.split(',');
return arrId;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxLoginLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
*/
export  async function QxLoginLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export  async function QxLoginLog_GetFirstObjAsync(strWhereCond: string): Promise<clsQxLoginLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objQxLoginLog = QxLoginLog_GetObjFromJsonObj(returnObj);
return objQxLoginLog;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxLoginLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxLoginLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxLoginLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxLoginLog_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrLoginLogId:关键字列表
 * @returns 对象列表
 **/
export  async function QxLoginLog_GetObjLstByLoginLogIdLstAsync(arrLoginLogId: Array<string>): Promise<Array<clsQxLoginLogEN>>  
{
const strThisFuncName = "GetObjLstByLoginLogIdLstAsync";
const strAction = "GetObjLstByLoginLogIdLst";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrLoginLogId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxLoginLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxLoginLog_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByLoginLogIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxLoginLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxLoginLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTopPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxLoginLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxLoginLog_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxLoginLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxLoginLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRangePara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxLoginLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxLoginLog_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)

 /**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param lngLoginLogId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxLoginLog_DelRecordAsync(lngLoginLogId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngLoginLogId);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const configDel = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.delete(strUrl, configDel);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrLoginLogId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxLoginLog_DelQxLoginLogsAsync(arrLoginLogId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxLoginLogsAsync";
const strAction = "DelQxLoginLogs";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrLoginLogId, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw data.errorMsg;
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function QxLoginLog_DelQxLoginLogsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxLoginLogsByCondAsync";
const strAction = "DelQxLoginLogsByCond";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objQxLoginLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxLoginLog_AddNewRecordAsync(objQxLoginLogEN: clsQxLoginLogEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxLoginLogEN);
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxLoginLogEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

 /** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export  async function QxLoginLog_AddNewObjSave(objQxLoginLogEN: clsQxLoginLogEN ): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxLoginLog_CheckPropertyNew(objQxLoginLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxLoginLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxLoginLog_CheckUniCond4Add(objQxLoginLogEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxLoginLog_AddNewRecordAsync(objQxLoginLogEN);
if (returnBool == true)
{
//QxLoginLog_ReFreshCache();
}
else
{
const strInfo = `添加[登录日志(QxLoginLog)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxLoginLogEN.loginLogId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxLoginLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxLoginLog_CheckUniCond4Add(objQxLoginLogEN: clsQxLoginLogEN): Promise<boolean>{
const strUniquenessCondition = QxLoginLog_GetUniCondStr(objQxLoginLogEN);
const bolIsExistCondition = await QxLoginLog_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export  async function QxLoginLog_CheckUniCond4Update(objQxLoginLogEN: clsQxLoginLogEN): Promise<boolean>{
const strUniquenessCondition = QxLoginLog_GetUniCondStr4Update(objQxLoginLogEN);
const bolIsExistCondition = await QxLoginLog_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function QxLoginLog_UpdateObjSave(objQxLoginLogEN: clsQxLoginLogEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxLoginLogEN.sfUpdFldSetStr = objQxLoginLogEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxLoginLogEN.loginLogId == 0 || objQxLoginLogEN.loginLogId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxLoginLog_CheckProperty4Update(objQxLoginLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxLoginLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxLoginLog_CheckUniCond4Update(objQxLoginLogEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxLoginLog_UpdateRecordAsync(objQxLoginLogEN);
if (returnBool == true)
{
//QxLoginLog_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxLoginLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxLoginLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxLoginLog_AddNewRecordWithReturnKeyAsync(objQxLoginLogEN: clsQxLoginLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxLoginLogEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objQxLoginLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxLoginLog_UpdateRecordAsync(objQxLoginLogEN: clsQxLoginLogEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxLoginLogEN.sfUpdFldSetStr === undefined || objQxLoginLogEN.sfUpdFldSetStr === null || objQxLoginLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxLoginLogEN.loginLogId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxLoginLogEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objQxLoginLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxLoginLog_EditRecordExAsync(objQxLoginLogEN: clsQxLoginLogEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxLoginLogEN.sfUpdFldSetStr === undefined || objQxLoginLogEN.sfUpdFldSetStr === null || objQxLoginLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxLoginLogEN.loginLogId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxLoginLogEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objQxLoginLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxLoginLog_UpdateWithConditionAsync(objQxLoginLogEN: clsQxLoginLogEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxLoginLogEN.sfUpdFldSetStr === undefined || objQxLoginLogEN.sfUpdFldSetStr === null || objQxLoginLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxLoginLogEN.loginLogId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);
objQxLoginLogEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxLoginLogEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function QxLoginLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngLoginLogId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxLoginLog_IsExistAsync(lngLoginLogId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngLoginLogId
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export  async function QxLoginLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function QxLoginLog_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxLoginLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPrefix,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxLoginLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function QxLoginLog_GetWebApiUrl(strController: string, strAction: string): string {
let strServiceUrl:string;
let strCurrIPAddressAndPort = "";
if (clsSysPara4WebApi.bolIsLocalHost == false)
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
}
else
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
}
if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true)
{
strServiceUrl = Format("{0}/{1}/{2}", strCurrIPAddressAndPort, strController, strAction);
}
else
{
strServiceUrl = Format("{0}/{1}/{2}/{3}", strCurrIPAddressAndPort, clsSysPara4WebApi.CurrPrx, strController, strAction);
}
return strServiceUrl;
}
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxLoginLog_CheckPropertyNew(pobjQxLoginLogEN: clsQxLoginLogEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxLoginLogEN.loginLogNumber) == false && GetStrLen(pobjQxLoginLogEN.loginLogNumber) > 500)
{
 throw new Error(`(errid:Watl000413)字段[LoginLogNumber(loginLogNumber)]的长度不能超过500(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.loginLogNumber}(clsQxLoginLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginIP) == false && GetStrLen(pobjQxLoginLogEN.loginIP) > 200)
{
 throw new Error(`(errid:Watl000413)字段[LoginIP(loginIP)]的长度不能超过200(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.loginIP}(clsQxLoginLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.failReason) == false && GetStrLen(pobjQxLoginLogEN.failReason) > 500)
{
 throw new Error(`(errid:Watl000413)字段[FailReason(failReason)]的长度不能超过500(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.failReason}(clsQxLoginLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginResult) == false && GetStrLen(pobjQxLoginLogEN.loginResult) > 500)
{
 throw new Error(`(errid:Watl000413)字段[LoginResult(loginResult)]的长度不能超过500(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.loginResult}(clsQxLoginLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginTime) == false && GetStrLen(pobjQxLoginLogEN.loginTime) > 20)
{
 throw new Error(`(errid:Watl000413)字段[LoginTime(loginTime)]的长度不能超过20(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.loginTime}(clsQxLoginLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginUserId) == false && GetStrLen(pobjQxLoginLogEN.loginUserId) > 200)
{
 throw new Error(`(errid:Watl000413)字段[LoginUserId(loginUserId)]的长度不能超过200(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.loginUserId}(clsQxLoginLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.onlineTime) == false && GetStrLen(pobjQxLoginLogEN.onlineTime) > 200)
{
 throw new Error(`(errid:Watl000413)字段[OnlineTime(onlineTime)]的长度不能超过200(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.onlineTime}(clsQxLoginLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.outTime) == false && GetStrLen(pobjQxLoginLogEN.outTime) > 20)
{
 throw new Error(`(errid:Watl000413)字段[OutTime(outTime)]的长度不能超过20(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.outTime}(clsQxLoginLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.memo) == false && GetStrLen(pobjQxLoginLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.memo}(clsQxLoginLogBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxLoginLogEN.loginLogId && undefined !== pobjQxLoginLogEN.loginLogId && tzDataType.isNumber(pobjQxLoginLogEN.loginLogId) === false)
{
 throw new Error(`(errid:Watl000414)字段[LoginLogId(loginLogId)]的值:[${pobjQxLoginLogEN.loginLogId}], 非法,应该为数值型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginLogNumber) == false && undefined !== pobjQxLoginLogEN.loginLogNumber && tzDataType.isString(pobjQxLoginLogEN.loginLogNumber) === false)
{
 throw new Error(`(errid:Watl000414)字段[LoginLogNumber(loginLogNumber)]的值:[${pobjQxLoginLogEN.loginLogNumber}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginIP) == false && undefined !== pobjQxLoginLogEN.loginIP && tzDataType.isString(pobjQxLoginLogEN.loginIP) === false)
{
 throw new Error(`(errid:Watl000414)字段[LoginIP(loginIP)]的值:[${pobjQxLoginLogEN.loginIP}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.failReason) == false && undefined !== pobjQxLoginLogEN.failReason && tzDataType.isString(pobjQxLoginLogEN.failReason) === false)
{
 throw new Error(`(errid:Watl000414)字段[FailReason(failReason)]的值:[${pobjQxLoginLogEN.failReason}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginResult) == false && undefined !== pobjQxLoginLogEN.loginResult && tzDataType.isString(pobjQxLoginLogEN.loginResult) === false)
{
 throw new Error(`(errid:Watl000414)字段[LoginResult(loginResult)]的值:[${pobjQxLoginLogEN.loginResult}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginTime) == false && undefined !== pobjQxLoginLogEN.loginTime && tzDataType.isString(pobjQxLoginLogEN.loginTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[LoginTime(loginTime)]的值:[${pobjQxLoginLogEN.loginTime}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginUserId) == false && undefined !== pobjQxLoginLogEN.loginUserId && tzDataType.isString(pobjQxLoginLogEN.loginUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[LoginUserId(loginUserId)]的值:[${pobjQxLoginLogEN.loginUserId}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.onlineTime) == false && undefined !== pobjQxLoginLogEN.onlineTime && tzDataType.isString(pobjQxLoginLogEN.onlineTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[OnlineTime(onlineTime)]的值:[${pobjQxLoginLogEN.onlineTime}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.outTime) == false && undefined !== pobjQxLoginLogEN.outTime && tzDataType.isString(pobjQxLoginLogEN.outTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[OutTime(outTime)]的值:[${pobjQxLoginLogEN.outTime}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.memo) == false && undefined !== pobjQxLoginLogEN.memo && tzDataType.isString(pobjQxLoginLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxLoginLogEN.memo}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxLoginLog_CheckProperty4Update(pobjQxLoginLogEN: clsQxLoginLogEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxLoginLogEN.loginLogNumber) == false && GetStrLen(pobjQxLoginLogEN.loginLogNumber) > 500)
{
 throw new Error(`(errid:Watl000416)字段[LoginLogNumber(loginLogNumber)]的长度不能超过500(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.loginLogNumber}(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginIP) == false && GetStrLen(pobjQxLoginLogEN.loginIP) > 200)
{
 throw new Error(`(errid:Watl000416)字段[LoginIP(loginIP)]的长度不能超过200(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.loginIP}(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.failReason) == false && GetStrLen(pobjQxLoginLogEN.failReason) > 500)
{
 throw new Error(`(errid:Watl000416)字段[FailReason(failReason)]的长度不能超过500(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.failReason}(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginResult) == false && GetStrLen(pobjQxLoginLogEN.loginResult) > 500)
{
 throw new Error(`(errid:Watl000416)字段[LoginResult(loginResult)]的长度不能超过500(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.loginResult}(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginTime) == false && GetStrLen(pobjQxLoginLogEN.loginTime) > 20)
{
 throw new Error(`(errid:Watl000416)字段[LoginTime(loginTime)]的长度不能超过20(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.loginTime}(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginUserId) == false && GetStrLen(pobjQxLoginLogEN.loginUserId) > 200)
{
 throw new Error(`(errid:Watl000416)字段[LoginUserId(loginUserId)]的长度不能超过200(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.loginUserId}(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.onlineTime) == false && GetStrLen(pobjQxLoginLogEN.onlineTime) > 200)
{
 throw new Error(`(errid:Watl000416)字段[OnlineTime(onlineTime)]的长度不能超过200(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.onlineTime}(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.outTime) == false && GetStrLen(pobjQxLoginLogEN.outTime) > 20)
{
 throw new Error(`(errid:Watl000416)字段[OutTime(outTime)]的长度不能超过20(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.outTime}(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.memo) == false && GetStrLen(pobjQxLoginLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 登录日志(QxLoginLog))!值:${pobjQxLoginLogEN.memo}(clsQxLoginLogBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxLoginLogEN.loginLogId && undefined !== pobjQxLoginLogEN.loginLogId && tzDataType.isNumber(pobjQxLoginLogEN.loginLogId) === false)
{
 throw new Error(`(errid:Watl000417)字段[LoginLogId(loginLogId)]的值:[${pobjQxLoginLogEN.loginLogId}], 非法,应该为数值型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginLogNumber) == false && undefined !== pobjQxLoginLogEN.loginLogNumber && tzDataType.isString(pobjQxLoginLogEN.loginLogNumber) === false)
{
 throw new Error(`(errid:Watl000417)字段[LoginLogNumber(loginLogNumber)]的值:[${pobjQxLoginLogEN.loginLogNumber}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginIP) == false && undefined !== pobjQxLoginLogEN.loginIP && tzDataType.isString(pobjQxLoginLogEN.loginIP) === false)
{
 throw new Error(`(errid:Watl000417)字段[LoginIP(loginIP)]的值:[${pobjQxLoginLogEN.loginIP}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.failReason) == false && undefined !== pobjQxLoginLogEN.failReason && tzDataType.isString(pobjQxLoginLogEN.failReason) === false)
{
 throw new Error(`(errid:Watl000417)字段[FailReason(failReason)]的值:[${pobjQxLoginLogEN.failReason}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginResult) == false && undefined !== pobjQxLoginLogEN.loginResult && tzDataType.isString(pobjQxLoginLogEN.loginResult) === false)
{
 throw new Error(`(errid:Watl000417)字段[LoginResult(loginResult)]的值:[${pobjQxLoginLogEN.loginResult}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginTime) == false && undefined !== pobjQxLoginLogEN.loginTime && tzDataType.isString(pobjQxLoginLogEN.loginTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[LoginTime(loginTime)]的值:[${pobjQxLoginLogEN.loginTime}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.loginUserId) == false && undefined !== pobjQxLoginLogEN.loginUserId && tzDataType.isString(pobjQxLoginLogEN.loginUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[LoginUserId(loginUserId)]的值:[${pobjQxLoginLogEN.loginUserId}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.onlineTime) == false && undefined !== pobjQxLoginLogEN.onlineTime && tzDataType.isString(pobjQxLoginLogEN.onlineTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[OnlineTime(onlineTime)]的值:[${pobjQxLoginLogEN.onlineTime}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.outTime) == false && undefined !== pobjQxLoginLogEN.outTime && tzDataType.isString(pobjQxLoginLogEN.outTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[OutTime(outTime)]的值:[${pobjQxLoginLogEN.outTime}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxLoginLogEN.memo) == false && undefined !== pobjQxLoginLogEN.memo && tzDataType.isString(pobjQxLoginLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxLoginLogEN.memo}], 非法,应该为字符型(In 登录日志(QxLoginLog))!(clsQxLoginLogBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxLoginLogEN.loginLogId 
 || pobjQxLoginLogEN.loginLogId != null && pobjQxLoginLogEN.loginLogId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[LoginLogId]不能为空(In 登录日志)!(clsQxLoginLogBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxLoginLog_GetJSONStrByObj (pobjQxLoginLogEN: clsQxLoginLogEN): string
{
pobjQxLoginLogEN.sfUpdFldSetStr = pobjQxLoginLogEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxLoginLogEN);
}
catch(objException)
{
const strEx = GetExceptionStr(objException);
myShowErrorMsg(strEx);
}
if (strJson == undefined) return "";
else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxLoginLog_GetObjLstByJSONStr (strJSON: string): Array<clsQxLoginLogEN>
{
let arrQxLoginLogObjLst = new Array<clsQxLoginLogEN>();
if (strJSON === "")
{
return arrQxLoginLogObjLst;
}
try
{
arrQxLoginLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxLoginLogObjLst;
}
return arrQxLoginLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxLoginLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxLoginLog_GetObjLstByJSONObjLst (arrQxLoginLogObjLstS: Array<clsQxLoginLogEN>): Array<clsQxLoginLogEN>
{
const arrQxLoginLogObjLst = new Array<clsQxLoginLogEN>();
for (const objInFor of arrQxLoginLogObjLstS) {
const obj1 = QxLoginLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxLoginLogObjLst.push(obj1);
}
return arrQxLoginLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxLoginLog_GetObjByJSONStr (strJSON: string): clsQxLoginLogEN
{
let pobjQxLoginLogEN = new clsQxLoginLogEN();
if (strJSON === "")
{
return pobjQxLoginLogEN;
}
try
{
pobjQxLoginLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxLoginLogEN;
}
return pobjQxLoginLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxLoginLog_GetCombineCondition(objQxLoginLogCond: clsQxLoginLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxLoginLogCond.dicFldComparisonOp, clsQxLoginLogEN.con_LoginLogId) == true)
{
const strComparisonOpLoginLogId:string = objQxLoginLogCond.dicFldComparisonOp[clsQxLoginLogEN.con_LoginLogId];
strWhereCond += Format(" And {0} {2} {1}", clsQxLoginLogEN.con_LoginLogId, objQxLoginLogCond.loginLogId, strComparisonOpLoginLogId);
}
if (Object.prototype.hasOwnProperty.call(objQxLoginLogCond.dicFldComparisonOp, clsQxLoginLogEN.con_LoginLogNumber) == true)
{
const strComparisonOpLoginLogNumber:string = objQxLoginLogCond.dicFldComparisonOp[clsQxLoginLogEN.con_LoginLogNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxLoginLogEN.con_LoginLogNumber, objQxLoginLogCond.loginLogNumber, strComparisonOpLoginLogNumber);
}
if (Object.prototype.hasOwnProperty.call(objQxLoginLogCond.dicFldComparisonOp, clsQxLoginLogEN.con_LoginIP) == true)
{
const strComparisonOpLoginIP:string = objQxLoginLogCond.dicFldComparisonOp[clsQxLoginLogEN.con_LoginIP];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxLoginLogEN.con_LoginIP, objQxLoginLogCond.loginIP, strComparisonOpLoginIP);
}
if (Object.prototype.hasOwnProperty.call(objQxLoginLogCond.dicFldComparisonOp, clsQxLoginLogEN.con_FailReason) == true)
{
const strComparisonOpFailReason:string = objQxLoginLogCond.dicFldComparisonOp[clsQxLoginLogEN.con_FailReason];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxLoginLogEN.con_FailReason, objQxLoginLogCond.failReason, strComparisonOpFailReason);
}
if (Object.prototype.hasOwnProperty.call(objQxLoginLogCond.dicFldComparisonOp, clsQxLoginLogEN.con_LoginResult) == true)
{
const strComparisonOpLoginResult:string = objQxLoginLogCond.dicFldComparisonOp[clsQxLoginLogEN.con_LoginResult];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxLoginLogEN.con_LoginResult, objQxLoginLogCond.loginResult, strComparisonOpLoginResult);
}
if (Object.prototype.hasOwnProperty.call(objQxLoginLogCond.dicFldComparisonOp, clsQxLoginLogEN.con_LoginTime) == true)
{
const strComparisonOpLoginTime:string = objQxLoginLogCond.dicFldComparisonOp[clsQxLoginLogEN.con_LoginTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxLoginLogEN.con_LoginTime, objQxLoginLogCond.loginTime, strComparisonOpLoginTime);
}
if (Object.prototype.hasOwnProperty.call(objQxLoginLogCond.dicFldComparisonOp, clsQxLoginLogEN.con_LoginUserId) == true)
{
const strComparisonOpLoginUserId:string = objQxLoginLogCond.dicFldComparisonOp[clsQxLoginLogEN.con_LoginUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxLoginLogEN.con_LoginUserId, objQxLoginLogCond.loginUserId, strComparisonOpLoginUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxLoginLogCond.dicFldComparisonOp, clsQxLoginLogEN.con_OnlineTime) == true)
{
const strComparisonOpOnlineTime:string = objQxLoginLogCond.dicFldComparisonOp[clsQxLoginLogEN.con_OnlineTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxLoginLogEN.con_OnlineTime, objQxLoginLogCond.onlineTime, strComparisonOpOnlineTime);
}
if (Object.prototype.hasOwnProperty.call(objQxLoginLogCond.dicFldComparisonOp, clsQxLoginLogEN.con_OutTime) == true)
{
const strComparisonOpOutTime:string = objQxLoginLogCond.dicFldComparisonOp[clsQxLoginLogEN.con_OutTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxLoginLogEN.con_OutTime, objQxLoginLogCond.outTime, strComparisonOpOutTime);
}
if (Object.prototype.hasOwnProperty.call(objQxLoginLogCond.dicFldComparisonOp, clsQxLoginLogEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxLoginLogCond.dicFldComparisonOp[clsQxLoginLogEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxLoginLogEN.con_Memo, objQxLoginLogCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxLoginLog(登录日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strLoginLogNumber: LoginLogNumber(要求唯一的字段)
 * @param strLoginUserId: LoginUserId(要求唯一的字段)
 * @param strLoginTime: LoginTime(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxLoginLog_GetUniCondStr(objQxLoginLogEN: clsQxLoginLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and LoginLogNumber = '{0}'", objQxLoginLogEN.loginLogNumber);
 strWhereCond +=  Format(" and LoginUserId = '{0}'", objQxLoginLogEN.loginUserId);
 strWhereCond +=  Format(" and LoginTime = '{0}'", objQxLoginLogEN.loginTime);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxLoginLog(登录日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strLoginLogNumber: LoginLogNumber(要求唯一的字段)
 * @param strLoginUserId: LoginUserId(要求唯一的字段)
 * @param strLoginTime: LoginTime(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxLoginLog_GetUniCondStr4Update(objQxLoginLogEN: clsQxLoginLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and LoginLogId <> '{0}'", objQxLoginLogEN.loginLogId);
 strWhereCond +=  Format(" and LoginLogNumber = '{0}'", objQxLoginLogEN.loginLogNumber);
 strWhereCond +=  Format(" and LoginUserId = '{0}'", objQxLoginLogEN.loginUserId);
 strWhereCond +=  Format(" and LoginTime = '{0}'", objQxLoginLogEN.loginTime);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxLoginLogENS:源对象
 * @param objQxLoginLogENT:目标对象
*/
export  function QxLoginLog_GetObjFromJsonObj(objQxLoginLogENS: clsQxLoginLogEN): clsQxLoginLogEN 
{
 const objQxLoginLogENT: clsQxLoginLogEN = new clsQxLoginLogEN();
ObjectAssign(objQxLoginLogENT, objQxLoginLogENS);
 return objQxLoginLogENT;
}