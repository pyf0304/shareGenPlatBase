
 /**
 * 类名:clsQxServer4SynchWApi
 * 表名:QxServer4Synch(00140091)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:数据同步(DataSynch)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 同步服务器(QxServer4Synch)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxServer4SynchEN } from "@/ts/L0Entity/DataSynch/clsQxServer4SynchEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxServer4Synch_Controller = "QxServer4SynchApi";
 export const qxServer4Synch_ConstructorName = "qxServer4Synch";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strServerId:关键字
 * @returns 对象
 **/
export  async function QxServer4Synch_GetObjByServerIdAsync(strServerId: string): Promise<clsQxServer4SynchEN|null>  
{
const strThisFuncName = "GetObjByServerIdAsync";

if (IsNullOrEmpty(strServerId) == true)
{
  const strMsg = Format("参数:[strServerId]不能为空!(In clsQxServer4SynchWApi.GetObjByServerIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strServerId.length != 4)
{
const strMsg = Format("缓存分类变量:[strServerId]的长度:[{0}]不正确!(clsQxServer4SynchWApi.GetObjByServerIdAsync)", strServerId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByServerId";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strServerId,
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
const objQxServer4Synch = QxServer4Synch_GetObjFromJsonObj(returnObj);
return objQxServer4Synch;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByServerIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByServerIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function QxServer4Synch_SortFunDefa(a:clsQxServer4SynchEN , b:clsQxServer4SynchEN): number 
{
return a.serverId.localeCompare(b.serverId);
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
export  function QxServer4Synch_SortFunDefa2Fld(a:clsQxServer4SynchEN , b:clsQxServer4SynchEN): number 
{
if (a.serverName == b.serverName) return a.ipAddress.localeCompare(b.ipAddress);
else return a.serverName.localeCompare(b.serverName);
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
export  function QxServer4Synch_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxServer4SynchEN.con_ServerId:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
return a.serverId.localeCompare(b.serverId);
}
case clsQxServer4SynchEN.con_ServerName:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
if (a.serverName == null) return -1;
if (b.serverName == null) return 1;
return a.serverName.localeCompare(b.serverName);
}
case clsQxServer4SynchEN.con_IpAddress:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
return a.ipAddress.localeCompare(b.ipAddress);
}
case clsQxServer4SynchEN.con_WebApiAddress:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
return a.webApiAddress.localeCompare(b.webApiAddress);
}
case clsQxServer4SynchEN.con_IsSelf:
return (a: clsQxServer4SynchEN) => {
if (a.isSelf == true) return 1;
else return -1
}
case clsQxServer4SynchEN.con_InUse:
return (a: clsQxServer4SynchEN) => {
if (a.inUse == true) return 1;
else return -1
}
case clsQxServer4SynchEN.con_UpdDate:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxServer4SynchEN.con_UpdUser:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsQxServer4SynchEN.con_Memo:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxServer4Synch]中不存在!(in ${ qxServer4Synch_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxServer4SynchEN.con_ServerId:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
return b.serverId.localeCompare(a.serverId);
}
case clsQxServer4SynchEN.con_ServerName:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
if (b.serverName == null) return -1;
if (a.serverName == null) return 1;
return b.serverName.localeCompare(a.serverName);
}
case clsQxServer4SynchEN.con_IpAddress:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
return b.ipAddress.localeCompare(a.ipAddress);
}
case clsQxServer4SynchEN.con_WebApiAddress:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
return b.webApiAddress.localeCompare(a.webApiAddress);
}
case clsQxServer4SynchEN.con_IsSelf:
return (b: clsQxServer4SynchEN) => {
if (b.isSelf == true) return 1;
else return -1
}
case clsQxServer4SynchEN.con_InUse:
return (b: clsQxServer4SynchEN) => {
if (b.inUse == true) return 1;
else return -1
}
case clsQxServer4SynchEN.con_UpdDate:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxServer4SynchEN.con_UpdUser:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsQxServer4SynchEN.con_Memo:
return (a: clsQxServer4SynchEN, b: clsQxServer4SynchEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxServer4Synch]中不存在!(in ${ qxServer4Synch_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByServerIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxServer4Synch_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxServer4SynchEN.con_ServerId:
return (obj: clsQxServer4SynchEN) => {
return obj.serverId === value;
}
case clsQxServer4SynchEN.con_ServerName:
return (obj: clsQxServer4SynchEN) => {
return obj.serverName === value;
}
case clsQxServer4SynchEN.con_IpAddress:
return (obj: clsQxServer4SynchEN) => {
return obj.ipAddress === value;
}
case clsQxServer4SynchEN.con_WebApiAddress:
return (obj: clsQxServer4SynchEN) => {
return obj.webApiAddress === value;
}
case clsQxServer4SynchEN.con_IsSelf:
return (obj: clsQxServer4SynchEN) => {
return obj.isSelf === value;
}
case clsQxServer4SynchEN.con_InUse:
return (obj: clsQxServer4SynchEN) => {
return obj.inUse === value;
}
case clsQxServer4SynchEN.con_UpdDate:
return (obj: clsQxServer4SynchEN) => {
return obj.updDate === value;
}
case clsQxServer4SynchEN.con_UpdUser:
return (obj: clsQxServer4SynchEN) => {
return obj.updUser === value;
}
case clsQxServer4SynchEN.con_Memo:
return (obj: clsQxServer4SynchEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxServer4Synch]中不存在!(in ${ qxServer4Synch_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxServer4Synch__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxServer4Synch_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_GetFirstObjAsync(strWhereCond: string): Promise<clsQxServer4SynchEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const objQxServer4Synch = QxServer4Synch_GetObjFromJsonObj(returnObj);
return objQxServer4Synch;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxServer4SynchEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxServer4Synch_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
 * @param arrServerId:关键字列表
 * @returns 对象列表
 **/
export  async function QxServer4Synch_GetObjLstByServerIdLstAsync(arrServerId: Array<string>): Promise<Array<clsQxServer4SynchEN>>  
{
const strThisFuncName = "GetObjLstByServerIdLstAsync";
const strAction = "GetObjLstByServerIdLst";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrServerId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxServer4Synch_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByServerIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxServer4Synch_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxServer4SynchEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxServer4Synch_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxServer4SynchEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxServer4Synch_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxServer4SynchEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxServer4SynchEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxServer4Synch_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
 * @param strServerId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxServer4Synch_DelRecordAsync(strServerId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strServerId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
 * @param arrServerId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxServer4Synch_DelQxServer4SynchsAsync(arrServerId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxServer4SynchsAsync";
const strAction = "DelQxServer4Synchs";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrServerId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_DelQxServer4SynchsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxServer4SynchsByCondAsync";
const strAction = "DelQxServer4SynchsByCond";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
 * @param objQxServer4SynchEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxServer4Synch_AddNewRecordAsync(objQxServer4SynchEN: clsQxServer4SynchEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxServer4SynchEN);
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxServer4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
 * @param objQxServer4SynchEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxServer4Synch_AddNewRecordWithMaxIdAsync(objQxServer4SynchEN: clsQxServer4SynchEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxServer4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_AddNewObjSave(objQxServer4SynchEN: clsQxServer4SynchEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxServer4Synch_CheckPropertyNew(objQxServer4SynchEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxServer4Synch_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxServer4Synch_CheckUniCond4Add(objQxServer4SynchEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await QxServer4Synch_AddNewRecordWithMaxIdAsync(objQxServer4SynchEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//QxServer4Synch_ReFreshCache();
}
else
{
const strInfo = `添加[同步服务器(QxServer4Synch)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxServer4Synch_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxServer4Synch_CheckUniCond4Add(objQxServer4SynchEN: clsQxServer4SynchEN): Promise<boolean>{
const strUniquenessCondition = QxServer4Synch_GetUniCondStr(objQxServer4SynchEN);
const bolIsExistCondition = await QxServer4Synch_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxServer4Synch_CheckUniCond4Update(objQxServer4SynchEN: clsQxServer4SynchEN): Promise<boolean>{
const strUniquenessCondition = QxServer4Synch_GetUniCondStr4Update(objQxServer4SynchEN);
const bolIsExistCondition = await QxServer4Synch_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxServer4Synch_UpdateObjSave(objQxServer4SynchEN: clsQxServer4SynchEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxServer4SynchEN.sfUpdFldSetStr = objQxServer4SynchEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxServer4SynchEN.serverId == "" || objQxServer4SynchEN.serverId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxServer4Synch_CheckProperty4Update(objQxServer4SynchEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxServer4Synch_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxServer4Synch_CheckUniCond4Update(objQxServer4SynchEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxServer4Synch_UpdateRecordAsync(objQxServer4SynchEN);
if (returnBool == true)
{
//QxServer4Synch_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxServer4Synch_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxServer4SynchEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxServer4Synch_AddNewRecordWithReturnKeyAsync(objQxServer4SynchEN: clsQxServer4SynchEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxServer4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
 * @param objQxServer4SynchEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxServer4Synch_UpdateRecordAsync(objQxServer4SynchEN: clsQxServer4SynchEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxServer4SynchEN.sfUpdFldSetStr === undefined || objQxServer4SynchEN.sfUpdFldSetStr === null || objQxServer4SynchEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxServer4SynchEN.serverId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxServer4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
 * @param objQxServer4SynchEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxServer4Synch_EditRecordExAsync(objQxServer4SynchEN: clsQxServer4SynchEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxServer4SynchEN.sfUpdFldSetStr === undefined || objQxServer4SynchEN.sfUpdFldSetStr === null || objQxServer4SynchEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxServer4SynchEN.serverId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxServer4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
 * @param objQxServer4SynchEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxServer4Synch_UpdateWithConditionAsync(objQxServer4SynchEN: clsQxServer4SynchEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxServer4SynchEN.sfUpdFldSetStr === undefined || objQxServer4SynchEN.sfUpdFldSetStr === null || objQxServer4SynchEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxServer4SynchEN.serverId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);
objQxServer4SynchEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxServer4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
 * @param strServerId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxServer4Synch_IsExistAsync(strServerId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strServerId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  async function QxServer4Synch_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxServer4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxServer4Synch_ConstructorName, strThisFuncName);
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
export  function QxServer4Synch_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxServer4Synch_(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const strCondition = `1=1`;
const arrObjLstSel = await QxServer4Synch_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxServer4SynchEN.con_ServerId, clsQxServer4SynchEN.con_ServerName, "同步服务器...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxServer4Synch_GetArrQxServer4Synch()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrQxServer4Synch = new Array<clsQxServer4SynchEN>();
const strCondition = `1=1`;
const arrObjLstSel = await QxServer4Synch_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsQxServer4SynchEN();
obj0.serverId = '0';
obj0.serverName = '选同步服务器...';
arrQxServer4Synch.push(obj0);
arrObjLstSel.forEach(x => arrQxServer4Synch.push(x));
return arrQxServer4Synch;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxServer4Synch_CheckPropertyNew(pobjQxServer4SynchEN: clsQxServer4SynchEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxServer4SynchEN.ipAddress) === true )
{
 throw new Error(`(errid:Watl000411)字段[IP地址]不能为空(In 同步服务器)!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.webApiAddress) === true )
{
 throw new Error(`(errid:Watl000411)字段[WApi地址]不能为空(In 同步服务器)!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxServer4SynchEN.serverId) == false && GetStrLen(pobjQxServer4SynchEN.serverId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[服务器Id(serverId)]的长度不能超过4(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.serverId}(clsQxServer4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.serverName) == false && GetStrLen(pobjQxServer4SynchEN.serverName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[服务器名(serverName)]的长度不能超过50(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.serverName}(clsQxServer4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.ipAddress) == false && GetStrLen(pobjQxServer4SynchEN.ipAddress) > 23)
{
 throw new Error(`(errid:Watl000413)字段[IP地址(ipAddress)]的长度不能超过23(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.ipAddress}(clsQxServer4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.webApiAddress) == false && GetStrLen(pobjQxServer4SynchEN.webApiAddress) > 50)
{
 throw new Error(`(errid:Watl000413)字段[WApi地址(webApiAddress)]的长度不能超过50(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.webApiAddress}(clsQxServer4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.updDate) == false && GetStrLen(pobjQxServer4SynchEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.updDate}(clsQxServer4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.updUser) == false && GetStrLen(pobjQxServer4SynchEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.updUser}(clsQxServer4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.memo) == false && GetStrLen(pobjQxServer4SynchEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.memo}(clsQxServer4SynchBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxServer4SynchEN.serverId) == false && undefined !== pobjQxServer4SynchEN.serverId && tzDataType.isString(pobjQxServer4SynchEN.serverId) === false)
{
 throw new Error(`(errid:Watl000414)字段[服务器Id(serverId)]的值:[${pobjQxServer4SynchEN.serverId}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.serverName) == false && undefined !== pobjQxServer4SynchEN.serverName && tzDataType.isString(pobjQxServer4SynchEN.serverName) === false)
{
 throw new Error(`(errid:Watl000414)字段[服务器名(serverName)]的值:[${pobjQxServer4SynchEN.serverName}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.ipAddress) == false && undefined !== pobjQxServer4SynchEN.ipAddress && tzDataType.isString(pobjQxServer4SynchEN.ipAddress) === false)
{
 throw new Error(`(errid:Watl000414)字段[IP地址(ipAddress)]的值:[${pobjQxServer4SynchEN.ipAddress}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.webApiAddress) == false && undefined !== pobjQxServer4SynchEN.webApiAddress && tzDataType.isString(pobjQxServer4SynchEN.webApiAddress) === false)
{
 throw new Error(`(errid:Watl000414)字段[WApi地址(webApiAddress)]的值:[${pobjQxServer4SynchEN.webApiAddress}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
if (null != pobjQxServer4SynchEN.isSelf && undefined !== pobjQxServer4SynchEN.isSelf && tzDataType.isBoolean(pobjQxServer4SynchEN.isSelf) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否当前服务器(isSelf)]的值:[${pobjQxServer4SynchEN.isSelf}], 非法,应该为布尔型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
if (null != pobjQxServer4SynchEN.inUse && undefined !== pobjQxServer4SynchEN.inUse && tzDataType.isBoolean(pobjQxServer4SynchEN.inUse) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjQxServer4SynchEN.inUse}], 非法,应该为布尔型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.updDate) == false && undefined !== pobjQxServer4SynchEN.updDate && tzDataType.isString(pobjQxServer4SynchEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxServer4SynchEN.updDate}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.updUser) == false && undefined !== pobjQxServer4SynchEN.updUser && tzDataType.isString(pobjQxServer4SynchEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户(updUser)]的值:[${pobjQxServer4SynchEN.updUser}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.memo) == false && undefined !== pobjQxServer4SynchEN.memo && tzDataType.isString(pobjQxServer4SynchEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxServer4SynchEN.memo}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxServer4Synch_CheckProperty4Update(pobjQxServer4SynchEN: clsQxServer4SynchEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxServer4SynchEN.serverId) == false && GetStrLen(pobjQxServer4SynchEN.serverId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[服务器Id(serverId)]的长度不能超过4(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.serverId}(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.serverName) == false && GetStrLen(pobjQxServer4SynchEN.serverName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[服务器名(serverName)]的长度不能超过50(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.serverName}(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.ipAddress) == false && GetStrLen(pobjQxServer4SynchEN.ipAddress) > 23)
{
 throw new Error(`(errid:Watl000416)字段[IP地址(ipAddress)]的长度不能超过23(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.ipAddress}(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.webApiAddress) == false && GetStrLen(pobjQxServer4SynchEN.webApiAddress) > 50)
{
 throw new Error(`(errid:Watl000416)字段[WApi地址(webApiAddress)]的长度不能超过50(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.webApiAddress}(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.updDate) == false && GetStrLen(pobjQxServer4SynchEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.updDate}(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.updUser) == false && GetStrLen(pobjQxServer4SynchEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.updUser}(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.memo) == false && GetStrLen(pobjQxServer4SynchEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 同步服务器(QxServer4Synch))!值:${pobjQxServer4SynchEN.memo}(clsQxServer4SynchBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxServer4SynchEN.serverId) == false && undefined !== pobjQxServer4SynchEN.serverId && tzDataType.isString(pobjQxServer4SynchEN.serverId) === false)
{
 throw new Error(`(errid:Watl000417)字段[服务器Id(serverId)]的值:[${pobjQxServer4SynchEN.serverId}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.serverName) == false && undefined !== pobjQxServer4SynchEN.serverName && tzDataType.isString(pobjQxServer4SynchEN.serverName) === false)
{
 throw new Error(`(errid:Watl000417)字段[服务器名(serverName)]的值:[${pobjQxServer4SynchEN.serverName}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.ipAddress) == false && undefined !== pobjQxServer4SynchEN.ipAddress && tzDataType.isString(pobjQxServer4SynchEN.ipAddress) === false)
{
 throw new Error(`(errid:Watl000417)字段[IP地址(ipAddress)]的值:[${pobjQxServer4SynchEN.ipAddress}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.webApiAddress) == false && undefined !== pobjQxServer4SynchEN.webApiAddress && tzDataType.isString(pobjQxServer4SynchEN.webApiAddress) === false)
{
 throw new Error(`(errid:Watl000417)字段[WApi地址(webApiAddress)]的值:[${pobjQxServer4SynchEN.webApiAddress}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (null != pobjQxServer4SynchEN.isSelf && undefined !== pobjQxServer4SynchEN.isSelf && tzDataType.isBoolean(pobjQxServer4SynchEN.isSelf) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否当前服务器(isSelf)]的值:[${pobjQxServer4SynchEN.isSelf}], 非法,应该为布尔型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (null != pobjQxServer4SynchEN.inUse && undefined !== pobjQxServer4SynchEN.inUse && tzDataType.isBoolean(pobjQxServer4SynchEN.inUse) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjQxServer4SynchEN.inUse}], 非法,应该为布尔型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.updDate) == false && undefined !== pobjQxServer4SynchEN.updDate && tzDataType.isString(pobjQxServer4SynchEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxServer4SynchEN.updDate}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.updUser) == false && undefined !== pobjQxServer4SynchEN.updUser && tzDataType.isString(pobjQxServer4SynchEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户(updUser)]的值:[${pobjQxServer4SynchEN.updUser}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxServer4SynchEN.memo) == false && undefined !== pobjQxServer4SynchEN.memo && tzDataType.isString(pobjQxServer4SynchEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxServer4SynchEN.memo}], 非法,应该为字符型(In 同步服务器(QxServer4Synch))!(clsQxServer4SynchBL:CheckProperty4Update)`);
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
export  function QxServer4Synch_GetJSONStrByObj (pobjQxServer4SynchEN: clsQxServer4SynchEN): string
{
pobjQxServer4SynchEN.sfUpdFldSetStr = pobjQxServer4SynchEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxServer4SynchEN);
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
export  function QxServer4Synch_GetObjLstByJSONStr (strJSON: string): Array<clsQxServer4SynchEN>
{
let arrQxServer4SynchObjLst = new Array<clsQxServer4SynchEN>();
if (strJSON === "")
{
return arrQxServer4SynchObjLst;
}
try
{
arrQxServer4SynchObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxServer4SynchObjLst;
}
return arrQxServer4SynchObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxServer4SynchObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxServer4Synch_GetObjLstByJSONObjLst (arrQxServer4SynchObjLstS: Array<clsQxServer4SynchEN>): Array<clsQxServer4SynchEN>
{
const arrQxServer4SynchObjLst = new Array<clsQxServer4SynchEN>();
for (const objInFor of arrQxServer4SynchObjLstS) {
const obj1 = QxServer4Synch_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxServer4SynchObjLst.push(obj1);
}
return arrQxServer4SynchObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxServer4Synch_GetObjByJSONStr (strJSON: string): clsQxServer4SynchEN
{
let pobjQxServer4SynchEN = new clsQxServer4SynchEN();
if (strJSON === "")
{
return pobjQxServer4SynchEN;
}
try
{
pobjQxServer4SynchEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxServer4SynchEN;
}
return pobjQxServer4SynchEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxServer4Synch_GetCombineCondition(objQxServer4SynchCond: clsQxServer4SynchEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxServer4SynchCond.dicFldComparisonOp, clsQxServer4SynchEN.con_ServerId) == true)
{
const strComparisonOpServerId:string = objQxServer4SynchCond.dicFldComparisonOp[clsQxServer4SynchEN.con_ServerId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxServer4SynchEN.con_ServerId, objQxServer4SynchCond.serverId, strComparisonOpServerId);
}
if (Object.prototype.hasOwnProperty.call(objQxServer4SynchCond.dicFldComparisonOp, clsQxServer4SynchEN.con_ServerName) == true)
{
const strComparisonOpServerName:string = objQxServer4SynchCond.dicFldComparisonOp[clsQxServer4SynchEN.con_ServerName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxServer4SynchEN.con_ServerName, objQxServer4SynchCond.serverName, strComparisonOpServerName);
}
if (Object.prototype.hasOwnProperty.call(objQxServer4SynchCond.dicFldComparisonOp, clsQxServer4SynchEN.con_IpAddress) == true)
{
const strComparisonOpIpAddress:string = objQxServer4SynchCond.dicFldComparisonOp[clsQxServer4SynchEN.con_IpAddress];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxServer4SynchEN.con_IpAddress, objQxServer4SynchCond.ipAddress, strComparisonOpIpAddress);
}
if (Object.prototype.hasOwnProperty.call(objQxServer4SynchCond.dicFldComparisonOp, clsQxServer4SynchEN.con_WebApiAddress) == true)
{
const strComparisonOpWebApiAddress:string = objQxServer4SynchCond.dicFldComparisonOp[clsQxServer4SynchEN.con_WebApiAddress];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxServer4SynchEN.con_WebApiAddress, objQxServer4SynchCond.webApiAddress, strComparisonOpWebApiAddress);
}
if (Object.prototype.hasOwnProperty.call(objQxServer4SynchCond.dicFldComparisonOp, clsQxServer4SynchEN.con_IsSelf) == true)
{
if (objQxServer4SynchCond.isSelf == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxServer4SynchEN.con_IsSelf);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxServer4SynchEN.con_IsSelf);
}
}
if (Object.prototype.hasOwnProperty.call(objQxServer4SynchCond.dicFldComparisonOp, clsQxServer4SynchEN.con_InUse) == true)
{
if (objQxServer4SynchCond.inUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxServer4SynchEN.con_InUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxServer4SynchEN.con_InUse);
}
}
if (Object.prototype.hasOwnProperty.call(objQxServer4SynchCond.dicFldComparisonOp, clsQxServer4SynchEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxServer4SynchCond.dicFldComparisonOp[clsQxServer4SynchEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxServer4SynchEN.con_UpdDate, objQxServer4SynchCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxServer4SynchCond.dicFldComparisonOp, clsQxServer4SynchEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxServer4SynchCond.dicFldComparisonOp[clsQxServer4SynchEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxServer4SynchEN.con_UpdUser, objQxServer4SynchCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxServer4SynchCond.dicFldComparisonOp, clsQxServer4SynchEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxServer4SynchCond.dicFldComparisonOp[clsQxServer4SynchEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxServer4SynchEN.con_Memo, objQxServer4SynchCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxServer4Synch(同步服务器),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strServerName: 服务器名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxServer4Synch_GetUniCondStr(objQxServer4SynchEN: clsQxServer4SynchEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ServerName = '{0}'", objQxServer4SynchEN.serverName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxServer4Synch(同步服务器),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strServerName: 服务器名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxServer4Synch_GetUniCondStr4Update(objQxServer4SynchEN: clsQxServer4SynchEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ServerId <> '{0}'", objQxServer4SynchEN.serverId);
 strWhereCond +=  Format(" and ServerName = '{0}'", objQxServer4SynchEN.serverName);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxServer4SynchENS:源对象
 * @param objQxServer4SynchENT:目标对象
*/
export  function QxServer4Synch_GetObjFromJsonObj(objQxServer4SynchENS: clsQxServer4SynchEN): clsQxServer4SynchEN 
{
 const objQxServer4SynchENT: clsQxServer4SynchEN = new clsQxServer4SynchEN();
ObjectAssign(objQxServer4SynchENT, objQxServer4SynchENS);
 return objQxServer4SynchENT;
}