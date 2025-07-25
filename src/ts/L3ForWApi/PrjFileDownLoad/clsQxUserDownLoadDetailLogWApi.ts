
 /**
 * 类名:clsQxUserDownLoadDetailLogWApi
 * 表名:QxUserDownLoadDetailLog(00140059)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:24
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
 * 用户下载日志细节(QxUserDownLoadDetailLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsQxUserDownLoadDetailLogEN } from "@/ts/L0Entity/PrjFileDownLoad/clsQxUserDownLoadDetailLogEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUserDownLoadDetailLog_Controller = "QxUserDownLoadDetailLogApi";
 export const qxUserDownLoadDetailLog_ConstructorName = "qxUserDownLoadDetailLog";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function QxUserDownLoadDetailLog_GetObjBymIdAsync(lngmId: number): Promise<clsQxUserDownLoadDetailLogEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxUserDownLoadDetailLogWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId,
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
const objQxUserDownLoadDetailLog = QxUserDownLoadDetailLog_GetObjFromJsonObj(returnObj);
return objQxUserDownLoadDetailLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function QxUserDownLoadDetailLog_SortFunDefa(a:clsQxUserDownLoadDetailLogEN , b:clsQxUserDownLoadDetailLogEN): number 
{
return a.mId-b.mId;
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
export  function QxUserDownLoadDetailLog_SortFunDefa2Fld(a:clsQxUserDownLoadDetailLogEN , b:clsQxUserDownLoadDetailLogEN): number 
{
if (a.userDownLoadLogId == b.userDownLoadLogId) return a.fileName.localeCompare(b.fileName);
else return a.userDownLoadLogId.localeCompare(b.userDownLoadLogId);
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
export  function QxUserDownLoadDetailLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUserDownLoadDetailLogEN.con_mId:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
return a.mId-b.mId;
}
case clsQxUserDownLoadDetailLogEN.con_UserDownLoadLogId:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
return a.userDownLoadLogId.localeCompare(b.userDownLoadLogId);
}
case clsQxUserDownLoadDetailLogEN.con_FileName:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
return a.fileName.localeCompare(b.fileName);
}
case clsQxUserDownLoadDetailLogEN.con_Version:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
return a.version.localeCompare(b.version);
}
case clsQxUserDownLoadDetailLogEN.con_IsSuccess:
return (a: clsQxUserDownLoadDetailLogEN) => {
if (a.isSuccess == true) return 1;
else return -1
}
case clsQxUserDownLoadDetailLogEN.con_LogInfo:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
return a.logInfo.localeCompare(b.logInfo);
}
case clsQxUserDownLoadDetailLogEN.con_Memo:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserDownLoadDetailLog]中不存在!(in ${ qxUserDownLoadDetailLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUserDownLoadDetailLogEN.con_mId:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
return b.mId-a.mId;
}
case clsQxUserDownLoadDetailLogEN.con_UserDownLoadLogId:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
return b.userDownLoadLogId.localeCompare(a.userDownLoadLogId);
}
case clsQxUserDownLoadDetailLogEN.con_FileName:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
return b.fileName.localeCompare(a.fileName);
}
case clsQxUserDownLoadDetailLogEN.con_Version:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
return b.version.localeCompare(a.version);
}
case clsQxUserDownLoadDetailLogEN.con_IsSuccess:
return (b: clsQxUserDownLoadDetailLogEN) => {
if (b.isSuccess == true) return 1;
else return -1
}
case clsQxUserDownLoadDetailLogEN.con_LogInfo:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
return b.logInfo.localeCompare(a.logInfo);
}
case clsQxUserDownLoadDetailLogEN.con_Memo:
return (a: clsQxUserDownLoadDetailLogEN, b: clsQxUserDownLoadDetailLogEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserDownLoadDetailLog]中不存在!(in ${ qxUserDownLoadDetailLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxUserDownLoadDetailLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUserDownLoadDetailLogEN.con_mId:
return (obj: clsQxUserDownLoadDetailLogEN) => {
return obj.mId === value;
}
case clsQxUserDownLoadDetailLogEN.con_UserDownLoadLogId:
return (obj: clsQxUserDownLoadDetailLogEN) => {
return obj.userDownLoadLogId === value;
}
case clsQxUserDownLoadDetailLogEN.con_FileName:
return (obj: clsQxUserDownLoadDetailLogEN) => {
return obj.fileName === value;
}
case clsQxUserDownLoadDetailLogEN.con_Version:
return (obj: clsQxUserDownLoadDetailLogEN) => {
return obj.version === value;
}
case clsQxUserDownLoadDetailLogEN.con_IsSuccess:
return (obj: clsQxUserDownLoadDetailLogEN) => {
return obj.isSuccess === value;
}
case clsQxUserDownLoadDetailLogEN.con_LogInfo:
return (obj: clsQxUserDownLoadDetailLogEN) => {
return obj.logInfo === value;
}
case clsQxUserDownLoadDetailLogEN.con_Memo:
return (obj: clsQxUserDownLoadDetailLogEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserDownLoadDetailLog]中不存在!(in ${ qxUserDownLoadDetailLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxUserDownLoadDetailLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserDownLoadDetailLog_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUserDownLoadDetailLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const objQxUserDownLoadDetailLog = QxUserDownLoadDetailLog_GetObjFromJsonObj(returnObj);
return objQxUserDownLoadDetailLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUserDownLoadDetailLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserDownLoadDetailLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function QxUserDownLoadDetailLog_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsQxUserDownLoadDetailLogEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserDownLoadDetailLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxUserDownLoadDetailLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUserDownLoadDetailLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserDownLoadDetailLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUserDownLoadDetailLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserDownLoadDetailLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUserDownLoadDetailLogEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUserDownLoadDetailLogEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserDownLoadDetailLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxUserDownLoadDetailLog_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngmId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxUserDownLoadDetailLog_DelQxUserDownLoadDetailLogsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUserDownLoadDetailLogsAsync";
const strAction = "DelQxUserDownLoadDetailLogs";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_DelQxUserDownLoadDetailLogsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUserDownLoadDetailLogsByCondAsync";
const strAction = "DelQxUserDownLoadDetailLogsByCond";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
 * @param objQxUserDownLoadDetailLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserDownLoadDetailLog_AddNewRecordAsync(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxUserDownLoadDetailLogEN);
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadDetailLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_AddNewObjSave(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxUserDownLoadDetailLog_CheckPropertyNew(objQxUserDownLoadDetailLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserDownLoadDetailLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserDownLoadDetailLog_CheckUniCond4Add(objQxUserDownLoadDetailLogEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxUserDownLoadDetailLog_AddNewRecordAsync(objQxUserDownLoadDetailLogEN);
if (returnBool == true)
{
//QxUserDownLoadDetailLog_ReFreshCache();
}
else
{
const strInfo = `添加[用户下载日志细节(QxUserDownLoadDetailLog)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxUserDownLoadDetailLogEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxUserDownLoadDetailLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxUserDownLoadDetailLog_CheckUniCond4Add(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN): Promise<boolean>{
const strUniquenessCondition = QxUserDownLoadDetailLog_GetUniCondStr(objQxUserDownLoadDetailLogEN);
const bolIsExistCondition = await QxUserDownLoadDetailLog_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserDownLoadDetailLog_CheckUniCond4Update(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN): Promise<boolean>{
const strUniquenessCondition = QxUserDownLoadDetailLog_GetUniCondStr4Update(objQxUserDownLoadDetailLogEN);
const bolIsExistCondition = await QxUserDownLoadDetailLog_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserDownLoadDetailLog_UpdateObjSave(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxUserDownLoadDetailLogEN.sfUpdFldSetStr = objQxUserDownLoadDetailLogEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxUserDownLoadDetailLogEN.mId == 0 || objQxUserDownLoadDetailLogEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxUserDownLoadDetailLog_CheckProperty4Update(objQxUserDownLoadDetailLogEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserDownLoadDetailLog_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserDownLoadDetailLog_CheckUniCond4Update(objQxUserDownLoadDetailLogEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxUserDownLoadDetailLog_UpdateRecordAsync(objQxUserDownLoadDetailLogEN);
if (returnBool == true)
{
//QxUserDownLoadDetailLog_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxUserDownLoadDetailLog_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxUserDownLoadDetailLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUserDownLoadDetailLog_AddNewRecordWithReturnKeyAsync(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadDetailLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
 * @param objQxUserDownLoadDetailLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserDownLoadDetailLog_UpdateRecordAsync(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUserDownLoadDetailLogEN.sfUpdFldSetStr === undefined || objQxUserDownLoadDetailLogEN.sfUpdFldSetStr === null || objQxUserDownLoadDetailLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserDownLoadDetailLogEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadDetailLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
 * @param objQxUserDownLoadDetailLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserDownLoadDetailLog_EditRecordExAsync(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxUserDownLoadDetailLogEN.sfUpdFldSetStr === undefined || objQxUserDownLoadDetailLogEN.sfUpdFldSetStr === null || objQxUserDownLoadDetailLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserDownLoadDetailLogEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadDetailLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
 * @param objQxUserDownLoadDetailLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserDownLoadDetailLog_UpdateWithConditionAsync(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUserDownLoadDetailLogEN.sfUpdFldSetStr === undefined || objQxUserDownLoadDetailLogEN.sfUpdFldSetStr === null || objQxUserDownLoadDetailLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserDownLoadDetailLogEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);
objQxUserDownLoadDetailLogEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserDownLoadDetailLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxUserDownLoadDetailLog_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  async function QxUserDownLoadDetailLog_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxUserDownLoadDetailLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserDownLoadDetailLog_ConstructorName, strThisFuncName);
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
export  function QxUserDownLoadDetailLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxUserDownLoadDetailLog_CheckPropertyNew(pobjQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.userDownLoadLogId) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户下载日志Id]不能为空(In 用户下载日志细节)!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.fileName) === true )
{
 throw new Error(`(errid:Watl000411)字段[文件名]不能为空(In 用户下载日志细节)!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.version) === true )
{
 throw new Error(`(errid:Watl000411)字段[版本]不能为空(In 用户下载日志细节)!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
if (null === pobjQxUserDownLoadDetailLogEN.isSuccess 
 || pobjQxUserDownLoadDetailLogEN.isSuccess != null && pobjQxUserDownLoadDetailLogEN.isSuccess.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否成功]不能为空(In 用户下载日志细节)!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.logInfo) === true )
{
 throw new Error(`(errid:Watl000411)字段[日志信息]不能为空(In 用户下载日志细节)!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.userDownLoadLogId) == false && GetStrLen(pobjQxUserDownLoadDetailLogEN.userDownLoadLogId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[用户下载日志Id(userDownLoadLogId)]的长度不能超过8(In 用户下载日志细节(QxUserDownLoadDetailLog))!值:${pobjQxUserDownLoadDetailLogEN.userDownLoadLogId}(clsQxUserDownLoadDetailLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.fileName) == false && GetStrLen(pobjQxUserDownLoadDetailLogEN.fileName) > 500)
{
 throw new Error(`(errid:Watl000413)字段[文件名(fileName)]的长度不能超过500(In 用户下载日志细节(QxUserDownLoadDetailLog))!值:${pobjQxUserDownLoadDetailLogEN.fileName}(clsQxUserDownLoadDetailLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.version) == false && GetStrLen(pobjQxUserDownLoadDetailLogEN.version) > 30)
{
 throw new Error(`(errid:Watl000413)字段[版本(version)]的长度不能超过30(In 用户下载日志细节(QxUserDownLoadDetailLog))!值:${pobjQxUserDownLoadDetailLogEN.version}(clsQxUserDownLoadDetailLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.logInfo) == false && GetStrLen(pobjQxUserDownLoadDetailLogEN.logInfo) > 500)
{
 throw new Error(`(errid:Watl000413)字段[日志信息(logInfo)]的长度不能超过500(In 用户下载日志细节(QxUserDownLoadDetailLog))!值:${pobjQxUserDownLoadDetailLogEN.logInfo}(clsQxUserDownLoadDetailLogBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.memo) == false && GetStrLen(pobjQxUserDownLoadDetailLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户下载日志细节(QxUserDownLoadDetailLog))!值:${pobjQxUserDownLoadDetailLogEN.memo}(clsQxUserDownLoadDetailLogBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUserDownLoadDetailLogEN.mId && undefined !== pobjQxUserDownLoadDetailLogEN.mId && tzDataType.isNumber(pobjQxUserDownLoadDetailLogEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(mId)]的值:[${pobjQxUserDownLoadDetailLogEN.mId}], 非法,应该为数值型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.userDownLoadLogId) == false && undefined !== pobjQxUserDownLoadDetailLogEN.userDownLoadLogId && tzDataType.isString(pobjQxUserDownLoadDetailLogEN.userDownLoadLogId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户下载日志Id(userDownLoadLogId)]的值:[${pobjQxUserDownLoadDetailLogEN.userDownLoadLogId}], 非法,应该为字符型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.fileName) == false && undefined !== pobjQxUserDownLoadDetailLogEN.fileName && tzDataType.isString(pobjQxUserDownLoadDetailLogEN.fileName) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件名(fileName)]的值:[${pobjQxUserDownLoadDetailLogEN.fileName}], 非法,应该为字符型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.version) == false && undefined !== pobjQxUserDownLoadDetailLogEN.version && tzDataType.isString(pobjQxUserDownLoadDetailLogEN.version) === false)
{
 throw new Error(`(errid:Watl000414)字段[版本(version)]的值:[${pobjQxUserDownLoadDetailLogEN.version}], 非法,应该为字符型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
if (null != pobjQxUserDownLoadDetailLogEN.isSuccess && undefined !== pobjQxUserDownLoadDetailLogEN.isSuccess && tzDataType.isBoolean(pobjQxUserDownLoadDetailLogEN.isSuccess) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否成功(isSuccess)]的值:[${pobjQxUserDownLoadDetailLogEN.isSuccess}], 非法,应该为布尔型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.logInfo) == false && undefined !== pobjQxUserDownLoadDetailLogEN.logInfo && tzDataType.isString(pobjQxUserDownLoadDetailLogEN.logInfo) === false)
{
 throw new Error(`(errid:Watl000414)字段[日志信息(logInfo)]的值:[${pobjQxUserDownLoadDetailLogEN.logInfo}], 非法,应该为字符型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.memo) == false && undefined !== pobjQxUserDownLoadDetailLogEN.memo && tzDataType.isString(pobjQxUserDownLoadDetailLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxUserDownLoadDetailLogEN.memo}], 非法,应该为字符型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUserDownLoadDetailLog_CheckProperty4Update(pobjQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.userDownLoadLogId) == false && GetStrLen(pobjQxUserDownLoadDetailLogEN.userDownLoadLogId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[用户下载日志Id(userDownLoadLogId)]的长度不能超过8(In 用户下载日志细节(QxUserDownLoadDetailLog))!值:${pobjQxUserDownLoadDetailLogEN.userDownLoadLogId}(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.fileName) == false && GetStrLen(pobjQxUserDownLoadDetailLogEN.fileName) > 500)
{
 throw new Error(`(errid:Watl000416)字段[文件名(fileName)]的长度不能超过500(In 用户下载日志细节(QxUserDownLoadDetailLog))!值:${pobjQxUserDownLoadDetailLogEN.fileName}(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.version) == false && GetStrLen(pobjQxUserDownLoadDetailLogEN.version) > 30)
{
 throw new Error(`(errid:Watl000416)字段[版本(version)]的长度不能超过30(In 用户下载日志细节(QxUserDownLoadDetailLog))!值:${pobjQxUserDownLoadDetailLogEN.version}(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.logInfo) == false && GetStrLen(pobjQxUserDownLoadDetailLogEN.logInfo) > 500)
{
 throw new Error(`(errid:Watl000416)字段[日志信息(logInfo)]的长度不能超过500(In 用户下载日志细节(QxUserDownLoadDetailLog))!值:${pobjQxUserDownLoadDetailLogEN.logInfo}(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.memo) == false && GetStrLen(pobjQxUserDownLoadDetailLogEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户下载日志细节(QxUserDownLoadDetailLog))!值:${pobjQxUserDownLoadDetailLogEN.memo}(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUserDownLoadDetailLogEN.mId && undefined !== pobjQxUserDownLoadDetailLogEN.mId && tzDataType.isNumber(pobjQxUserDownLoadDetailLogEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(mId)]的值:[${pobjQxUserDownLoadDetailLogEN.mId}], 非法,应该为数值型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.userDownLoadLogId) == false && undefined !== pobjQxUserDownLoadDetailLogEN.userDownLoadLogId && tzDataType.isString(pobjQxUserDownLoadDetailLogEN.userDownLoadLogId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户下载日志Id(userDownLoadLogId)]的值:[${pobjQxUserDownLoadDetailLogEN.userDownLoadLogId}], 非法,应该为字符型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.fileName) == false && undefined !== pobjQxUserDownLoadDetailLogEN.fileName && tzDataType.isString(pobjQxUserDownLoadDetailLogEN.fileName) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件名(fileName)]的值:[${pobjQxUserDownLoadDetailLogEN.fileName}], 非法,应该为字符型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.version) == false && undefined !== pobjQxUserDownLoadDetailLogEN.version && tzDataType.isString(pobjQxUserDownLoadDetailLogEN.version) === false)
{
 throw new Error(`(errid:Watl000417)字段[版本(version)]的值:[${pobjQxUserDownLoadDetailLogEN.version}], 非法,应该为字符型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
if (null != pobjQxUserDownLoadDetailLogEN.isSuccess && undefined !== pobjQxUserDownLoadDetailLogEN.isSuccess && tzDataType.isBoolean(pobjQxUserDownLoadDetailLogEN.isSuccess) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否成功(isSuccess)]的值:[${pobjQxUserDownLoadDetailLogEN.isSuccess}], 非法,应该为布尔型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.logInfo) == false && undefined !== pobjQxUserDownLoadDetailLogEN.logInfo && tzDataType.isString(pobjQxUserDownLoadDetailLogEN.logInfo) === false)
{
 throw new Error(`(errid:Watl000417)字段[日志信息(logInfo)]的值:[${pobjQxUserDownLoadDetailLogEN.logInfo}], 非法,应该为字符型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserDownLoadDetailLogEN.memo) == false && undefined !== pobjQxUserDownLoadDetailLogEN.memo && tzDataType.isString(pobjQxUserDownLoadDetailLogEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxUserDownLoadDetailLogEN.memo}], 非法,应该为字符型(In 用户下载日志细节(QxUserDownLoadDetailLog))!(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxUserDownLoadDetailLogEN.mId 
 || pobjQxUserDownLoadDetailLogEN.mId != null && pobjQxUserDownLoadDetailLogEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 用户下载日志细节)!(clsQxUserDownLoadDetailLogBL:CheckProperty4Update)`);
}
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
export  function QxUserDownLoadDetailLog_GetJSONStrByObj (pobjQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN): string
{
pobjQxUserDownLoadDetailLogEN.sfUpdFldSetStr = pobjQxUserDownLoadDetailLogEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUserDownLoadDetailLogEN);
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
export  function QxUserDownLoadDetailLog_GetObjLstByJSONStr (strJSON: string): Array<clsQxUserDownLoadDetailLogEN>
{
let arrQxUserDownLoadDetailLogObjLst = new Array<clsQxUserDownLoadDetailLogEN>();
if (strJSON === "")
{
return arrQxUserDownLoadDetailLogObjLst;
}
try
{
arrQxUserDownLoadDetailLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUserDownLoadDetailLogObjLst;
}
return arrQxUserDownLoadDetailLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUserDownLoadDetailLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUserDownLoadDetailLog_GetObjLstByJSONObjLst (arrQxUserDownLoadDetailLogObjLstS: Array<clsQxUserDownLoadDetailLogEN>): Array<clsQxUserDownLoadDetailLogEN>
{
const arrQxUserDownLoadDetailLogObjLst = new Array<clsQxUserDownLoadDetailLogEN>();
for (const objInFor of arrQxUserDownLoadDetailLogObjLstS) {
const obj1 = QxUserDownLoadDetailLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUserDownLoadDetailLogObjLst.push(obj1);
}
return arrQxUserDownLoadDetailLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserDownLoadDetailLog_GetObjByJSONStr (strJSON: string): clsQxUserDownLoadDetailLogEN
{
let pobjQxUserDownLoadDetailLogEN = new clsQxUserDownLoadDetailLogEN();
if (strJSON === "")
{
return pobjQxUserDownLoadDetailLogEN;
}
try
{
pobjQxUserDownLoadDetailLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUserDownLoadDetailLogEN;
}
return pobjQxUserDownLoadDetailLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUserDownLoadDetailLog_GetCombineCondition(objQxUserDownLoadDetailLogCond: clsQxUserDownLoadDetailLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadDetailLogCond.dicFldComparisonOp, clsQxUserDownLoadDetailLogEN.con_mId) == true)
{
const strComparisonOpmId:string = objQxUserDownLoadDetailLogCond.dicFldComparisonOp[clsQxUserDownLoadDetailLogEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsQxUserDownLoadDetailLogEN.con_mId, objQxUserDownLoadDetailLogCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadDetailLogCond.dicFldComparisonOp, clsQxUserDownLoadDetailLogEN.con_UserDownLoadLogId) == true)
{
const strComparisonOpUserDownLoadLogId:string = objQxUserDownLoadDetailLogCond.dicFldComparisonOp[clsQxUserDownLoadDetailLogEN.con_UserDownLoadLogId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadDetailLogEN.con_UserDownLoadLogId, objQxUserDownLoadDetailLogCond.userDownLoadLogId, strComparisonOpUserDownLoadLogId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadDetailLogCond.dicFldComparisonOp, clsQxUserDownLoadDetailLogEN.con_FileName) == true)
{
const strComparisonOpFileName:string = objQxUserDownLoadDetailLogCond.dicFldComparisonOp[clsQxUserDownLoadDetailLogEN.con_FileName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadDetailLogEN.con_FileName, objQxUserDownLoadDetailLogCond.fileName, strComparisonOpFileName);
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadDetailLogCond.dicFldComparisonOp, clsQxUserDownLoadDetailLogEN.con_Version) == true)
{
const strComparisonOpVersion:string = objQxUserDownLoadDetailLogCond.dicFldComparisonOp[clsQxUserDownLoadDetailLogEN.con_Version];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadDetailLogEN.con_Version, objQxUserDownLoadDetailLogCond.version, strComparisonOpVersion);
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadDetailLogCond.dicFldComparisonOp, clsQxUserDownLoadDetailLogEN.con_IsSuccess) == true)
{
if (objQxUserDownLoadDetailLogCond.isSuccess == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUserDownLoadDetailLogEN.con_IsSuccess);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUserDownLoadDetailLogEN.con_IsSuccess);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadDetailLogCond.dicFldComparisonOp, clsQxUserDownLoadDetailLogEN.con_LogInfo) == true)
{
const strComparisonOpLogInfo:string = objQxUserDownLoadDetailLogCond.dicFldComparisonOp[clsQxUserDownLoadDetailLogEN.con_LogInfo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadDetailLogEN.con_LogInfo, objQxUserDownLoadDetailLogCond.logInfo, strComparisonOpLogInfo);
}
if (Object.prototype.hasOwnProperty.call(objQxUserDownLoadDetailLogCond.dicFldComparisonOp, clsQxUserDownLoadDetailLogEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUserDownLoadDetailLogCond.dicFldComparisonOp[clsQxUserDownLoadDetailLogEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserDownLoadDetailLogEN.con_Memo, objQxUserDownLoadDetailLogCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserDownLoadDetailLog(用户下载日志细节),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserDownLoadLogId: 用户下载日志Id(要求唯一的字段)
 * @param strFileName: 文件名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserDownLoadDetailLog_GetUniCondStr(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and UserDownLoadLogId = '{0}'", objQxUserDownLoadDetailLogEN.userDownLoadLogId);
 strWhereCond +=  Format(" and FileName = '{0}'", objQxUserDownLoadDetailLogEN.fileName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserDownLoadDetailLog(用户下载日志细节),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserDownLoadLogId: 用户下载日志Id(要求唯一的字段)
 * @param strFileName: 文件名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserDownLoadDetailLog_GetUniCondStr4Update(objQxUserDownLoadDetailLogEN: clsQxUserDownLoadDetailLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objQxUserDownLoadDetailLogEN.mId);
 strWhereCond +=  Format(" and UserDownLoadLogId = '{0}'", objQxUserDownLoadDetailLogEN.userDownLoadLogId);
 strWhereCond +=  Format(" and FileName = '{0}'", objQxUserDownLoadDetailLogEN.fileName);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUserDownLoadDetailLogENS:源对象
 * @param objQxUserDownLoadDetailLogENT:目标对象
*/
export  function QxUserDownLoadDetailLog_GetObjFromJsonObj(objQxUserDownLoadDetailLogENS: clsQxUserDownLoadDetailLogEN): clsQxUserDownLoadDetailLogEN 
{
 const objQxUserDownLoadDetailLogENT: clsQxUserDownLoadDetailLogEN = new clsQxUserDownLoadDetailLogEN();
ObjectAssign(objQxUserDownLoadDetailLogENT, objQxUserDownLoadDetailLogENS);
 return objQxUserDownLoadDetailLogENT;
}