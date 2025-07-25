
 /**
 * 类名:clsQxUserDownLoadLogWApi
 * 表名:QxUserDownLoadLog(00140058)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:25
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:工程文件下载(PrjFileDownLoad)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户下载日志(QxUserDownLoadLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { clsQxUserDownLoadLogEN } from "@/ts/L0Entity/PrjFileDownLoad/clsQxUserDownLoadLogEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUserDownLoadLog_Controller = "QxUserDownLoadLogApi";
 export const qxUserDownLoadLog_ConstructorName = "qxUserDownLoadLog";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserDownLoadLogId:关键字
 * @returns 对象
 **/
export  async function QxUserDownLoadLog_GetObjByUserDownLoadLogIdAsync(strUserDownLoadLogId: string): Promise<clsQxUserDownLoadLogEN|null>  
{
const strThisFuncName = "GetObjByUserDownLoadLogIdAsync";

if (IsNullOrEmpty(strUserDownLoadLogId) == true)
{
  const strMsg = Format("参数:[strUserDownLoadLogId]不能为空!(In clsQxUserDownLoadLogWApi.GetObjByUserDownLoadLogIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserDownLoadLogId.length != 8)
{
const strMsg = Format("缓存分类变量:[strUserDownLoadLogId]的长度:[{0}]不正确!(clsQxUserDownLoadLogWApi.GetObjByUserDownLoadLogIdAsync)", strUserDownLoadLogId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByUserDownLoadLogId";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserDownLoadLogId,
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
const objQxUserDownLoadLog = QxUserDownLoadLog_GetObjFromJsonObj(returnObj);
return objQxUserDownLoadLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByUserDownLoadLogIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByUserDownLoadLogIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserDownLoadLog_SortFunDefa(a:clsQxUserDownLoadLogEN , b:clsQxUserDownLoadLogEN): number 
{
return a.userDownLoadLogId.localeCompare(b.userDownLoadLogId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserDownLoadLog_SortFunDefa2Fld(a:clsQxUserDownLoadLogEN , b:clsQxUserDownLoadLogEN): number 
{
if (a.userId == b.userId) return a.prjSiteId.localeCompare(b.prjSiteId);
else return a.userId.localeCompare(b.userId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserDownLoadLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUserDownLoadLogEN.con_UserDownLoadLogId:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
return a.userDownLoadLogId.localeCompare(b.userDownLoadLogId);
}
case clsQxUserDownLoadLogEN.con_UserId:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
return a.userId.localeCompare(b.userId);
}
case clsQxUserDownLoadLogEN.con_PrjSiteId:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
return a.prjSiteId.localeCompare(b.prjSiteId);
}
case clsQxUserDownLoadLogEN.con_DownLownDate:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
return a.downLownDate.localeCompare(b.downLownDate);
}
case clsQxUserDownLoadLogEN.con_IsSuccess:
return (a: clsQxUserDownLoadLogEN) => {
if (a.isSuccess == true) return 1;
else return -1
}
case clsQxUserDownLoadLogEN.con_LogInfo:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
return a.logInfo.localeCompare(b.logInfo);
}
case clsQxUserDownLoadLogEN.con_Memo:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserDownLoadLog]中不存在!(in ${ qxUserDownLoadLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUserDownLoadLogEN.con_UserDownLoadLogId:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
return b.userDownLoadLogId.localeCompare(a.userDownLoadLogId);
}
case clsQxUserDownLoadLogEN.con_UserId:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
return b.userId.localeCompare(a.userId);
}
case clsQxUserDownLoadLogEN.con_PrjSiteId:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
return b.prjSiteId.localeCompare(a.prjSiteId);
}
case clsQxUserDownLoadLogEN.con_DownLownDate:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
return b.downLownDate.localeCompare(a.downLownDate);
}
case clsQxUserDownLoadLogEN.con_IsSuccess:
return (b: clsQxUserDownLoadLogEN) => {
if (b.isSuccess == true) return 1;
else return -1
}
case clsQxUserDownLoadLogEN.con_LogInfo:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
return b.logInfo.localeCompare(a.logInfo);
}
case clsQxUserDownLoadLogEN.con_Memo:
return (a: clsQxUserDownLoadLogEN, b: clsQxUserDownLoadLogEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserDownLoadLog]中不存在!(in ${ qxUserDownLoadLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByUserDownLoadLogIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxUserDownLoadLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUserDownLoadLogEN.con_UserDownLoadLogId:
return (obj: clsQxUserDownLoadLogEN) => {
return obj.userDownLoadLogId === value;
}
case clsQxUserDownLoadLogEN.con_UserId:
return (obj: clsQxUserDownLoadLogEN) => {
return obj.userId === value;
}
case clsQxUserDownLoadLogEN.con_PrjSiteId:
return (obj: clsQxUserDownLoadLogEN) => {
return obj.prjSiteId === value;
}
case clsQxUserDownLoadLogEN.con_DownLownDate:
return (obj: clsQxUserDownLoadLogEN) => {
return obj.downLownDate === value;
}
case clsQxUserDownLoadLogEN.con_IsSuccess:
return (obj: clsQxUserDownLoadLogEN) => {
return obj.isSuccess === value;
}
case clsQxUserDownLoadLogEN.con_LogInfo:
return (obj: clsQxUserDownLoadLogEN) => {
return obj.logInfo === value;
}
case clsQxUserDownLoadLogEN.con_Memo:
return (obj: clsQxUserDownLoadLogEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserDownLoadLog]中不存在!(in ${ qxUserDownLoadLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxUserDownLoadLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserDownLoadLog_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadLog_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUserDownLoadLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const objQxUserDownLoadLog = QxUserDownLoadLog_GetObjFromJsonObj(returnObj);
return objQxUserDownLoadLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUserDownLoadLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserDownLoadLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
 * @param arrUserDownLoadLogId:关键字列表
 * @returns 对象列表
 **/
export  async function QxUserDownLoadLog_GetObjLstByUserDownLoadLogIdLstAsync(arrUserDownLoadLogId: Array<string>): Promise<Array<clsQxUserDownLoadLogEN>>  
{
const strThisFuncName = "GetObjLstByUserDownLoadLogIdLstAsync";
const strAction = "GetObjLstByUserDownLoadLogIdLst";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUserDownLoadLogId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserDownLoadLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByUserDownLoadLogIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxUserDownLoadLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUserDownLoadLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserDownLoadLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUserDownLoadLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserDownLoadLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxUserDownLoadLog_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUserDownLoadLogEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUserDownLoadLogEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPagerPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserDownLoadLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strUserDownLoadLogId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxUserDownLoadLog_DelRecordAsync(strUserDownLoadLogId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strUserDownLoadLogId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
 * @param arrUserDownLoadLogId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxUserDownLoadLog_DelQxUserDownLoadLogsAsync(arrUserDownLoadLogId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUserDownLoadLogsAsync";
const strAction = "DelQxUserDownLoadLogs";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUserDownLoadLogId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function QxUserDownLoadLog_DelQxUserDownLoadLogsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUserDownLoadLogsByCondAsync";
const strAction = "DelQxUserDownLoadLogsByCond";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
 * @param objQxUserDownLoadLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserDownLoadLog_AddNewRecordAsync(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxUserDownLoadLogEN);
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objQxUserDownLoadLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserDownLoadLog_AddNewRecordWithMaxIdAsync(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export  async function QxUserDownLoadLog_AddNewObjSave(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxUserDownLoadLog_CheckPropertyNew(objQxUserDownLoadLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserDownLoadLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserDownLoadLog_CheckUniCond4Add(objQxUserDownLoadLogEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await QxUserDownLoadLog_AddNewRecordWithMaxIdAsync(objQxUserDownLoadLogEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//QxUserDownLoadLog_ReFreshCache();
}
else
{
const strInfo = `添加[用户下载日志(QxUserDownLoadLog)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxUserDownLoadLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxUserDownLoadLog_CheckUniCond4Add(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN): Promise<boolean>{
const strUniquenessCondition = QxUserDownLoadLog_GetUniCondStr(objQxUserDownLoadLogEN);
const bolIsExistCondition = await QxUserDownLoadLog_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserDownLoadLog_CheckUniCond4Update(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN): Promise<boolean>{
const strUniquenessCondition = QxUserDownLoadLog_GetUniCondStr4Update(objQxUserDownLoadLogEN);
const bolIsExistCondition = await QxUserDownLoadLog_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserDownLoadLog_UpdateObjSave(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxUserDownLoadLogEN.sfUpdFldSetStr = objQxUserDownLoadLogEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxUserDownLoadLogEN.userDownLoadLogId == "" || objQxUserDownLoadLogEN.userDownLoadLogId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxUserDownLoadLog_CheckProperty4Update(objQxUserDownLoadLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserDownLoadLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserDownLoadLog_CheckUniCond4Update(objQxUserDownLoadLogEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxUserDownLoadLog_UpdateRecordAsync(objQxUserDownLoadLogEN);
if (returnBool == true)
{
//QxUserDownLoadLog_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxUserDownLoadLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxUserDownLoadLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUserDownLoadLog_AddNewRecordWithReturnKeyAsync(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
 * @param objQxUserDownLoadLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserDownLoadLog_UpdateRecordAsync(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUserDownLoadLogEN.sfUpdFldSetStr === undefined || objQxUserDownLoadLogEN.sfUpdFldSetStr === null || objQxUserDownLoadLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserDownLoadLogEN.userDownLoadLogId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
 * @param objQxUserDownLoadLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserDownLoadLog_EditRecordExAsync(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxUserDownLoadLogEN.sfUpdFldSetStr === undefined || objQxUserDownLoadLogEN.sfUpdFldSetStr === null || objQxUserDownLoadLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserDownLoadLogEN.userDownLoadLogId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
 * @param objQxUserDownLoadLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserDownLoadLog_UpdateWithConditionAsync(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUserDownLoadLogEN.sfUpdFldSetStr === undefined || objQxUserDownLoadLogEN.sfUpdFldSetStr === null || objQxUserDownLoadLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserDownLoadLogEN.userDownLoadLogId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);
objQxUserDownLoadLogEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
 * @param strUserDownLoadLogId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxUserDownLoadLog_IsExistAsync(strUserDownLoadLogId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserDownLoadLogId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function QxUserDownLoadLog_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function QxUserDownLoadLog_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadLog_ConstructorName, strThisFuncName);
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
export  function QxUserDownLoadLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxUserDownLoadLog_CheckPropertyNew(pobjQxUserDownLoadLogEN: clsQxUserDownLoadLogEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.userId) === true 
 || pobjQxUserDownLoadLogEN.userId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 用户下载日志)!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.prjSiteId) === true )
{
 throw new Error(`(errid:Watl000411)字段[工程站点Id]不能为空(In 用户下载日志)!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.downLownDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[下载日期]不能为空(In 用户下载日志)!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
if (null === pobjQxUserDownLoadLogEN.isSuccess 
 || pobjQxUserDownLoadLogEN.isSuccess != null && pobjQxUserDownLoadLogEN.isSuccess.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否成功]不能为空(In 用户下载日志)!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.logInfo) === true )
{
 throw new Error(`(errid:Watl000411)字段[日志信息]不能为空(In 用户下载日志)!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.userDownLoadLogId) == false && GetStrLen(pobjQxUserDownLoadLogEN.userDownLoadLogId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[用户下载日志Id(userDownLoadLogId)]的长度不能超过8(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.userDownLoadLogId}(clsQxUserDownLoadLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.userId) == false && GetStrLen(pobjQxUserDownLoadLogEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.userId}(clsQxUserDownLoadLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.prjSiteId) == false && GetStrLen(pobjQxUserDownLoadLogEN.prjSiteId) > 6)
{
 throw new Error(`(errid:Watl000413)字段[工程站点Id(prjSiteId)]的长度不能超过6(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.prjSiteId}(clsQxUserDownLoadLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.downLownDate) == false && GetStrLen(pobjQxUserDownLoadLogEN.downLownDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[下载日期(downLownDate)]的长度不能超过20(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.downLownDate}(clsQxUserDownLoadLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.logInfo) == false && GetStrLen(pobjQxUserDownLoadLogEN.logInfo) > 500)
{
 throw new Error(`(errid:Watl000413)字段[日志信息(logInfo)]的长度不能超过500(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.logInfo}(clsQxUserDownLoadLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.memo) == false && GetStrLen(pobjQxUserDownLoadLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.memo}(clsQxUserDownLoadLogBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.userDownLoadLogId) == false && undefined !== pobjQxUserDownLoadLogEN.userDownLoadLogId && tzDataType.isString(pobjQxUserDownLoadLogEN.userDownLoadLogId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户下载日志Id(userDownLoadLogId)]的值:[${pobjQxUserDownLoadLogEN.userDownLoadLogId}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.userId) == false && undefined !== pobjQxUserDownLoadLogEN.userId && tzDataType.isString(pobjQxUserDownLoadLogEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjQxUserDownLoadLogEN.userId}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.prjSiteId) == false && undefined !== pobjQxUserDownLoadLogEN.prjSiteId && tzDataType.isString(pobjQxUserDownLoadLogEN.prjSiteId) === false)
{
 throw new Error(`(errid:Watl000414)字段[工程站点Id(prjSiteId)]的值:[${pobjQxUserDownLoadLogEN.prjSiteId}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.downLownDate) == false && undefined !== pobjQxUserDownLoadLogEN.downLownDate && tzDataType.isString(pobjQxUserDownLoadLogEN.downLownDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[下载日期(downLownDate)]的值:[${pobjQxUserDownLoadLogEN.downLownDate}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
if (null != pobjQxUserDownLoadLogEN.isSuccess && undefined !== pobjQxUserDownLoadLogEN.isSuccess && tzDataType.isBoolean(pobjQxUserDownLoadLogEN.isSuccess) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否成功(isSuccess)]的值:[${pobjQxUserDownLoadLogEN.isSuccess}], 非法,应该为布尔型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.logInfo) == false && undefined !== pobjQxUserDownLoadLogEN.logInfo && tzDataType.isString(pobjQxUserDownLoadLogEN.logInfo) === false)
{
 throw new Error(`(errid:Watl000414)字段[日志信息(logInfo)]的值:[${pobjQxUserDownLoadLogEN.logInfo}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.memo) == false && undefined !== pobjQxUserDownLoadLogEN.memo && tzDataType.isString(pobjQxUserDownLoadLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxUserDownLoadLogEN.memo}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUserDownLoadLog_CheckProperty4Update(pobjQxUserDownLoadLogEN: clsQxUserDownLoadLogEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.userDownLoadLogId) == false && GetStrLen(pobjQxUserDownLoadLogEN.userDownLoadLogId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[用户下载日志Id(userDownLoadLogId)]的长度不能超过8(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.userDownLoadLogId}(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.userId) == false && GetStrLen(pobjQxUserDownLoadLogEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.userId}(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.prjSiteId) == false && GetStrLen(pobjQxUserDownLoadLogEN.prjSiteId) > 6)
{
 throw new Error(`(errid:Watl000416)字段[工程站点Id(prjSiteId)]的长度不能超过6(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.prjSiteId}(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.downLownDate) == false && GetStrLen(pobjQxUserDownLoadLogEN.downLownDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[下载日期(downLownDate)]的长度不能超过20(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.downLownDate}(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.logInfo) == false && GetStrLen(pobjQxUserDownLoadLogEN.logInfo) > 500)
{
 throw new Error(`(errid:Watl000416)字段[日志信息(logInfo)]的长度不能超过500(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.logInfo}(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.memo) == false && GetStrLen(pobjQxUserDownLoadLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户下载日志(QxUserDownLoadLog))!值:${pobjQxUserDownLoadLogEN.memo}(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.userDownLoadLogId) == false && undefined !== pobjQxUserDownLoadLogEN.userDownLoadLogId && tzDataType.isString(pobjQxUserDownLoadLogEN.userDownLoadLogId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户下载日志Id(userDownLoadLogId)]的值:[${pobjQxUserDownLoadLogEN.userDownLoadLogId}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.userId) == false && undefined !== pobjQxUserDownLoadLogEN.userId && tzDataType.isString(pobjQxUserDownLoadLogEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjQxUserDownLoadLogEN.userId}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.prjSiteId) == false && undefined !== pobjQxUserDownLoadLogEN.prjSiteId && tzDataType.isString(pobjQxUserDownLoadLogEN.prjSiteId) === false)
{
 throw new Error(`(errid:Watl000417)字段[工程站点Id(prjSiteId)]的值:[${pobjQxUserDownLoadLogEN.prjSiteId}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.downLownDate) == false && undefined !== pobjQxUserDownLoadLogEN.downLownDate && tzDataType.isString(pobjQxUserDownLoadLogEN.downLownDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[下载日期(downLownDate)]的值:[${pobjQxUserDownLoadLogEN.downLownDate}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (null != pobjQxUserDownLoadLogEN.isSuccess && undefined !== pobjQxUserDownLoadLogEN.isSuccess && tzDataType.isBoolean(pobjQxUserDownLoadLogEN.isSuccess) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否成功(isSuccess)]的值:[${pobjQxUserDownLoadLogEN.isSuccess}], 非法,应该为布尔型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.logInfo) == false && undefined !== pobjQxUserDownLoadLogEN.logInfo && tzDataType.isString(pobjQxUserDownLoadLogEN.logInfo) === false)
{
 throw new Error(`(errid:Watl000417)字段[日志信息(logInfo)]的值:[${pobjQxUserDownLoadLogEN.logInfo}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadLogEN.memo) == false && undefined !== pobjQxUserDownLoadLogEN.memo && tzDataType.isString(pobjQxUserDownLoadLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxUserDownLoadLogEN.memo}], 非法,应该为字符型(In 用户下载日志(QxUserDownLoadLog))!(clsQxUserDownLoadLogBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserDownLoadLog_GetJSONStrByObj (pobjQxUserDownLoadLogEN: clsQxUserDownLoadLogEN): string
{
pobjQxUserDownLoadLogEN.sfUpdFldSetStr = pobjQxUserDownLoadLogEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUserDownLoadLogEN);
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
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxUserDownLoadLog_GetObjLstByJSONStr (strJSON: string): Array<clsQxUserDownLoadLogEN>
{
let arrQxUserDownLoadLogObjLst = new Array<clsQxUserDownLoadLogEN>();
if (strJSON === "")
{
return arrQxUserDownLoadLogObjLst;
}
try
{
arrQxUserDownLoadLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUserDownLoadLogObjLst;
}
return arrQxUserDownLoadLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUserDownLoadLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUserDownLoadLog_GetObjLstByJSONObjLst (arrQxUserDownLoadLogObjLstS: Array<clsQxUserDownLoadLogEN>): Array<clsQxUserDownLoadLogEN>
{
const arrQxUserDownLoadLogObjLst = new Array<clsQxUserDownLoadLogEN>();
for (const objInFor of arrQxUserDownLoadLogObjLstS) {
const obj1 = QxUserDownLoadLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUserDownLoadLogObjLst.push(obj1);
}
return arrQxUserDownLoadLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserDownLoadLog_GetObjByJSONStr (strJSON: string): clsQxUserDownLoadLogEN
{
let pobjQxUserDownLoadLogEN = new clsQxUserDownLoadLogEN();
if (strJSON === "")
{
return pobjQxUserDownLoadLogEN;
}
try
{
pobjQxUserDownLoadLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUserDownLoadLogEN;
}
return pobjQxUserDownLoadLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUserDownLoadLog_GetCombineCondition(objQxUserDownLoadLogCond: clsQxUserDownLoadLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadLogCond.dicFldComparisonOp, clsQxUserDownLoadLogEN.con_UserDownLoadLogId) == true)
{
const strComparisonOpUserDownLoadLogId:string = objQxUserDownLoadLogCond.dicFldComparisonOp[clsQxUserDownLoadLogEN.con_UserDownLoadLogId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadLogEN.con_UserDownLoadLogId, objQxUserDownLoadLogCond.userDownLoadLogId, strComparisonOpUserDownLoadLogId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadLogCond.dicFldComparisonOp, clsQxUserDownLoadLogEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objQxUserDownLoadLogCond.dicFldComparisonOp[clsQxUserDownLoadLogEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadLogEN.con_UserId, objQxUserDownLoadLogCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadLogCond.dicFldComparisonOp, clsQxUserDownLoadLogEN.con_PrjSiteId) == true)
{
const strComparisonOpPrjSiteId:string = objQxUserDownLoadLogCond.dicFldComparisonOp[clsQxUserDownLoadLogEN.con_PrjSiteId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadLogEN.con_PrjSiteId, objQxUserDownLoadLogCond.prjSiteId, strComparisonOpPrjSiteId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadLogCond.dicFldComparisonOp, clsQxUserDownLoadLogEN.con_DownLownDate) == true)
{
const strComparisonOpDownLownDate:string = objQxUserDownLoadLogCond.dicFldComparisonOp[clsQxUserDownLoadLogEN.con_DownLownDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadLogEN.con_DownLownDate, objQxUserDownLoadLogCond.downLownDate, strComparisonOpDownLownDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadLogCond.dicFldComparisonOp, clsQxUserDownLoadLogEN.con_IsSuccess) == true)
{
if (objQxUserDownLoadLogCond.isSuccess == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUserDownLoadLogEN.con_IsSuccess);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUserDownLoadLogEN.con_IsSuccess);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadLogCond.dicFldComparisonOp, clsQxUserDownLoadLogEN.con_LogInfo) == true)
{
const strComparisonOpLogInfo:string = objQxUserDownLoadLogCond.dicFldComparisonOp[clsQxUserDownLoadLogEN.con_LogInfo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadLogEN.con_LogInfo, objQxUserDownLoadLogCond.logInfo, strComparisonOpLogInfo);
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadLogCond.dicFldComparisonOp, clsQxUserDownLoadLogEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUserDownLoadLogCond.dicFldComparisonOp[clsQxUserDownLoadLogEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadLogEN.con_Memo, objQxUserDownLoadLogCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserDownLoadLog(用户下载日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strPrjSiteId: 工程站点Id(要求唯一的字段)
 * @param strDownLownDate: 下载日期(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserDownLoadLog_GetUniCondStr(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUserDownLoadLogEN.userId);
 strWhereCond +=  Format(" and PrjSiteId = '{0}'", objQxUserDownLoadLogEN.prjSiteId);
 strWhereCond +=  Format(" and DownLownDate = '{0}'", objQxUserDownLoadLogEN.downLownDate);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserDownLoadLog(用户下载日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strPrjSiteId: 工程站点Id(要求唯一的字段)
 * @param strDownLownDate: 下载日期(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserDownLoadLog_GetUniCondStr4Update(objQxUserDownLoadLogEN: clsQxUserDownLoadLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and UserDownLoadLogId <> '{0}'", objQxUserDownLoadLogEN.userDownLoadLogId);
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUserDownLoadLogEN.userId);
 strWhereCond +=  Format(" and PrjSiteId = '{0}'", objQxUserDownLoadLogEN.prjSiteId);
 strWhereCond +=  Format(" and DownLownDate = '{0}'", objQxUserDownLoadLogEN.downLownDate);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUserDownLoadLogENS:源对象
 * @param objQxUserDownLoadLogENT:目标对象
*/
export  function QxUserDownLoadLog_GetObjFromJsonObj(objQxUserDownLoadLogENS: clsQxUserDownLoadLogEN): clsQxUserDownLoadLogEN 
{
 const objQxUserDownLoadLogENT: clsQxUserDownLoadLogEN = new clsQxUserDownLoadLogEN();
ObjectAssign(objQxUserDownLoadLogENT, objQxUserDownLoadLogENS);
 return objQxUserDownLoadLogENT;
}