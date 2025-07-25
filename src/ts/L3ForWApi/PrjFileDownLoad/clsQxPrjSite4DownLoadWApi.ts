
 /**
 * 类名:clsQxPrjSite4DownLoadWApi
 * 表名:QxPrjSite4DownLoad(00140055)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:21
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
 * 文件下载站点(QxPrjSite4DownLoad)
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
import { clsQxPrjSite4DownLoadEN } from "@/ts/L0Entity/PrjFileDownLoad/clsQxPrjSite4DownLoadEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxPrjSite4DownLoad_Controller = "QxPrjSite4DownLoadApi";
 export const qxPrjSite4DownLoad_ConstructorName = "qxPrjSite4DownLoad";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPrjSiteId:关键字
 * @returns 对象
 **/
export  async function QxPrjSite4DownLoad_GetObjByPrjSiteIdAsync(strPrjSiteId: string): Promise<clsQxPrjSite4DownLoadEN|null>  
{
const strThisFuncName = "GetObjByPrjSiteIdAsync";

if (IsNullOrEmpty(strPrjSiteId) == true)
{
  const strMsg = Format("参数:[strPrjSiteId]不能为空!(In clsQxPrjSite4DownLoadWApi.GetObjByPrjSiteIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strPrjSiteId.length != 6)
{
const strMsg = Format("缓存分类变量:[strPrjSiteId]的长度:[{0}]不正确!(clsQxPrjSite4DownLoadWApi.GetObjByPrjSiteIdAsync)", strPrjSiteId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByPrjSiteId";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPrjSiteId,
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
const objQxPrjSite4DownLoad = QxPrjSite4DownLoad_GetObjFromJsonObj(returnObj);
return objQxPrjSite4DownLoad;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPrjSiteIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByPrjSiteIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function QxPrjSite4DownLoad_SortFunDefa(a:clsQxPrjSite4DownLoadEN , b:clsQxPrjSite4DownLoadEN): number 
{
return a.prjSiteId.localeCompare(b.prjSiteId);
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
export  function QxPrjSite4DownLoad_SortFunDefa2Fld(a:clsQxPrjSite4DownLoadEN , b:clsQxPrjSite4DownLoadEN): number 
{
if (a.prjSiteName == b.prjSiteName) return a.qxPrjId.localeCompare(b.qxPrjId);
else return a.prjSiteName.localeCompare(b.prjSiteName);
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
export  function QxPrjSite4DownLoad_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxPrjSite4DownLoadEN.con_PrjSiteId:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return a.prjSiteId.localeCompare(b.prjSiteId);
}
case clsQxPrjSite4DownLoadEN.con_PrjSiteName:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return a.prjSiteName.localeCompare(b.prjSiteName);
}
case clsQxPrjSite4DownLoadEN.con_QxPrjId:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxPrjSite4DownLoadEN.con_FtpServer:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return a.ftpServer.localeCompare(b.ftpServer);
}
case clsQxPrjSite4DownLoadEN.con_FtpUserId:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return a.ftpUserId.localeCompare(b.ftpUserId);
}
case clsQxPrjSite4DownLoadEN.con_FtpUserPassword:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return a.ftpUserPassword.localeCompare(b.ftpUserPassword);
}
case clsQxPrjSite4DownLoadEN.con_UpdDate:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQxPrjSite4DownLoadEN.con_UpdUserId:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return a.updUserId.localeCompare(b.updUserId);
}
case clsQxPrjSite4DownLoadEN.con_Memo:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjSite4DownLoad]中不存在!(in ${ qxPrjSite4DownLoad_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxPrjSite4DownLoadEN.con_PrjSiteId:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return b.prjSiteId.localeCompare(a.prjSiteId);
}
case clsQxPrjSite4DownLoadEN.con_PrjSiteName:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return b.prjSiteName.localeCompare(a.prjSiteName);
}
case clsQxPrjSite4DownLoadEN.con_QxPrjId:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxPrjSite4DownLoadEN.con_FtpServer:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return b.ftpServer.localeCompare(a.ftpServer);
}
case clsQxPrjSite4DownLoadEN.con_FtpUserId:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return b.ftpUserId.localeCompare(a.ftpUserId);
}
case clsQxPrjSite4DownLoadEN.con_FtpUserPassword:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return b.ftpUserPassword.localeCompare(a.ftpUserPassword);
}
case clsQxPrjSite4DownLoadEN.con_UpdDate:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQxPrjSite4DownLoadEN.con_UpdUserId:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
return b.updUserId.localeCompare(a.updUserId);
}
case clsQxPrjSite4DownLoadEN.con_Memo:
return (a: clsQxPrjSite4DownLoadEN, b: clsQxPrjSite4DownLoadEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjSite4DownLoad]中不存在!(in ${ qxPrjSite4DownLoad_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByPrjSiteIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxPrjSite4DownLoad_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxPrjSite4DownLoadEN.con_PrjSiteId:
return (obj: clsQxPrjSite4DownLoadEN) => {
return obj.prjSiteId === value;
}
case clsQxPrjSite4DownLoadEN.con_PrjSiteName:
return (obj: clsQxPrjSite4DownLoadEN) => {
return obj.prjSiteName === value;
}
case clsQxPrjSite4DownLoadEN.con_QxPrjId:
return (obj: clsQxPrjSite4DownLoadEN) => {
return obj.qxPrjId === value;
}
case clsQxPrjSite4DownLoadEN.con_FtpServer:
return (obj: clsQxPrjSite4DownLoadEN) => {
return obj.ftpServer === value;
}
case clsQxPrjSite4DownLoadEN.con_FtpUserId:
return (obj: clsQxPrjSite4DownLoadEN) => {
return obj.ftpUserId === value;
}
case clsQxPrjSite4DownLoadEN.con_FtpUserPassword:
return (obj: clsQxPrjSite4DownLoadEN) => {
return obj.ftpUserPassword === value;
}
case clsQxPrjSite4DownLoadEN.con_UpdDate:
return (obj: clsQxPrjSite4DownLoadEN) => {
return obj.updDate === value;
}
case clsQxPrjSite4DownLoadEN.con_UpdUserId:
return (obj: clsQxPrjSite4DownLoadEN) => {
return obj.updUserId === value;
}
case clsQxPrjSite4DownLoadEN.con_Memo:
return (obj: clsQxPrjSite4DownLoadEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjSite4DownLoad]中不存在!(in ${ qxPrjSite4DownLoad_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxPrjSite4DownLoad__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPrjSite4DownLoad_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_GetFirstObjAsync(strWhereCond: string): Promise<clsQxPrjSite4DownLoadEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const objQxPrjSite4DownLoad = QxPrjSite4DownLoad_GetObjFromJsonObj(returnObj);
return objQxPrjSite4DownLoad;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxPrjSite4DownLoadEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjSite4DownLoad_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
 * @param arrPrjSiteId:关键字列表
 * @returns 对象列表
 **/
export  async function QxPrjSite4DownLoad_GetObjLstByPrjSiteIdLstAsync(arrPrjSiteId: Array<string>): Promise<Array<clsQxPrjSite4DownLoadEN>>  
{
const strThisFuncName = "GetObjLstByPrjSiteIdLstAsync";
const strAction = "GetObjLstByPrjSiteIdLst";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPrjSiteId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjSite4DownLoad_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPrjSiteIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxPrjSite4DownLoad_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxPrjSite4DownLoadEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjSite4DownLoad_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxPrjSite4DownLoadEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjSite4DownLoad_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxPrjSite4DownLoadEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxPrjSite4DownLoadEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjSite4DownLoad_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
 * @param strPrjSiteId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxPrjSite4DownLoad_DelRecordAsync(strPrjSiteId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strPrjSiteId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
 * @param arrPrjSiteId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxPrjSite4DownLoad_DelQxPrjSite4DownLoadsAsync(arrPrjSiteId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxPrjSite4DownLoadsAsync";
const strAction = "DelQxPrjSite4DownLoads";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPrjSiteId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_DelQxPrjSite4DownLoadsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxPrjSite4DownLoadsByCondAsync";
const strAction = "DelQxPrjSite4DownLoadsByCond";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
 * @param objQxPrjSite4DownLoadEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxPrjSite4DownLoad_AddNewRecordAsync(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxPrjSite4DownLoadEN);
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjSite4DownLoadEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
 * @param objQxPrjSite4DownLoadEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxPrjSite4DownLoad_AddNewRecordWithMaxIdAsync(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjSite4DownLoadEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_AddNewObjSave(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxPrjSite4DownLoad_CheckPropertyNew(objQxPrjSite4DownLoadEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxPrjSite4DownLoad_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxPrjSite4DownLoad_CheckUniCond4Add(objQxPrjSite4DownLoadEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await QxPrjSite4DownLoad_AddNewRecordWithMaxIdAsync(objQxPrjSite4DownLoadEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//QxPrjSite4DownLoad_ReFreshCache();
}
else
{
const strInfo = `添加[文件下载站点(QxPrjSite4DownLoad)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxPrjSite4DownLoad_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxPrjSite4DownLoad_CheckUniCond4Add(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN): Promise<boolean>{
const strUniquenessCondition = QxPrjSite4DownLoad_GetUniCondStr(objQxPrjSite4DownLoadEN);
const bolIsExistCondition = await QxPrjSite4DownLoad_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxPrjSite4DownLoad_CheckUniCond4Update(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN): Promise<boolean>{
const strUniquenessCondition = QxPrjSite4DownLoad_GetUniCondStr4Update(objQxPrjSite4DownLoadEN);
const bolIsExistCondition = await QxPrjSite4DownLoad_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxPrjSite4DownLoad_UpdateObjSave(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxPrjSite4DownLoadEN.sfUpdFldSetStr = objQxPrjSite4DownLoadEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxPrjSite4DownLoadEN.prjSiteId == "" || objQxPrjSite4DownLoadEN.prjSiteId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxPrjSite4DownLoad_CheckProperty4Update(objQxPrjSite4DownLoadEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxPrjSite4DownLoad_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxPrjSite4DownLoad_CheckUniCond4Update(objQxPrjSite4DownLoadEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxPrjSite4DownLoad_UpdateRecordAsync(objQxPrjSite4DownLoadEN);
if (returnBool == true)
{
//QxPrjSite4DownLoad_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxPrjSite4DownLoad_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxPrjSite4DownLoadEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxPrjSite4DownLoad_AddNewRecordWithReturnKeyAsync(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjSite4DownLoadEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
 * @param objQxPrjSite4DownLoadEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxPrjSite4DownLoad_UpdateRecordAsync(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxPrjSite4DownLoadEN.sfUpdFldSetStr === undefined || objQxPrjSite4DownLoadEN.sfUpdFldSetStr === null || objQxPrjSite4DownLoadEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjSite4DownLoadEN.prjSiteId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjSite4DownLoadEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
 * @param objQxPrjSite4DownLoadEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxPrjSite4DownLoad_EditRecordExAsync(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxPrjSite4DownLoadEN.sfUpdFldSetStr === undefined || objQxPrjSite4DownLoadEN.sfUpdFldSetStr === null || objQxPrjSite4DownLoadEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjSite4DownLoadEN.prjSiteId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjSite4DownLoadEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
 * @param objQxPrjSite4DownLoadEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPrjSite4DownLoad_UpdateWithConditionAsync(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxPrjSite4DownLoadEN.sfUpdFldSetStr === undefined || objQxPrjSite4DownLoadEN.sfUpdFldSetStr === null || objQxPrjSite4DownLoadEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjSite4DownLoadEN.prjSiteId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);
objQxPrjSite4DownLoadEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjSite4DownLoadEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
 * @param strPrjSiteId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxPrjSite4DownLoad_IsExistAsync(strPrjSiteId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPrjSiteId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  async function QxPrjSite4DownLoad_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxPrjSite4DownLoad_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjSite4DownLoad_ConstructorName, strThisFuncName);
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
export  function QxPrjSite4DownLoad_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function QxPrjSite4DownLoad_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await QxPrjSite4DownLoad_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxPrjSite4DownLoadEN.con_PrjSiteId, clsQxPrjSite4DownLoadEN.con_PrjSiteName, "文件下载站点...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxPrjSite4DownLoad_GetArrQxPrjSite4DownLoad()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrQxPrjSite4DownLoad = new Array<clsQxPrjSite4DownLoadEN>();
const strCondition = `1=1`;
const arrObjLstSel = await QxPrjSite4DownLoad_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsQxPrjSite4DownLoadEN();
obj0.prjSiteId = '0';
obj0.prjSiteName = '选文件下载站点...';
arrQxPrjSite4DownLoad.push(obj0);
arrObjLstSel.forEach(x => arrQxPrjSite4DownLoad.push(x));
return arrQxPrjSite4DownLoad;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxPrjSite4DownLoad_CheckPropertyNew(pobjQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.prjSiteName) === true )
{
 throw new Error(`(errid:Watl000411)字段[工程站点名]不能为空(In 文件下载站点)!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.qxPrjId) === true 
 || pobjQxPrjSite4DownLoadEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 文件下载站点)!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpServer) === true )
{
 throw new Error(`(errid:Watl000411)字段[Ftp服务器]不能为空(In 文件下载站点)!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpUserId) === true )
{
 throw new Error(`(errid:Watl000411)字段[Ftp用户Id]不能为空(In 文件下载站点)!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpUserPassword) === true )
{
 throw new Error(`(errid:Watl000411)字段[Ftp用户口令]不能为空(In 文件下载站点)!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.updUserId) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改用户Id]不能为空(In 文件下载站点)!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.prjSiteId) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.prjSiteId) > 6)
{
 throw new Error(`(errid:Watl000413)字段[工程站点Id(prjSiteId)]的长度不能超过6(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.prjSiteId}(clsQxPrjSite4DownLoadBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.prjSiteName) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.prjSiteName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[工程站点名(prjSiteName)]的长度不能超过50(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.prjSiteName}(clsQxPrjSite4DownLoadBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.qxPrjId) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.qxPrjId}(clsQxPrjSite4DownLoadBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpServer) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.ftpServer) > 50)
{
 throw new Error(`(errid:Watl000413)字段[Ftp服务器(ftpServer)]的长度不能超过50(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.ftpServer}(clsQxPrjSite4DownLoadBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpUserId) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.ftpUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[Ftp用户Id(ftpUserId)]的长度不能超过20(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.ftpUserId}(clsQxPrjSite4DownLoadBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpUserPassword) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.ftpUserPassword) > 50)
{
 throw new Error(`(errid:Watl000413)字段[Ftp用户口令(ftpUserPassword)]的长度不能超过50(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.ftpUserPassword}(clsQxPrjSite4DownLoadBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.updDate) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.updDate}(clsQxPrjSite4DownLoadBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.updUserId) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.updUserId}(clsQxPrjSite4DownLoadBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.memo) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.memo}(clsQxPrjSite4DownLoadBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.prjSiteId) == false && undefined !== pobjQxPrjSite4DownLoadEN.prjSiteId && tzDataType.isString(pobjQxPrjSite4DownLoadEN.prjSiteId) === false)
{
 throw new Error(`(errid:Watl000414)字段[工程站点Id(prjSiteId)]的值:[${pobjQxPrjSite4DownLoadEN.prjSiteId}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.prjSiteName) == false && undefined !== pobjQxPrjSite4DownLoadEN.prjSiteName && tzDataType.isString(pobjQxPrjSite4DownLoadEN.prjSiteName) === false)
{
 throw new Error(`(errid:Watl000414)字段[工程站点名(prjSiteName)]的值:[${pobjQxPrjSite4DownLoadEN.prjSiteName}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.qxPrjId) == false && undefined !== pobjQxPrjSite4DownLoadEN.qxPrjId && tzDataType.isString(pobjQxPrjSite4DownLoadEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxPrjSite4DownLoadEN.qxPrjId}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpServer) == false && undefined !== pobjQxPrjSite4DownLoadEN.ftpServer && tzDataType.isString(pobjQxPrjSite4DownLoadEN.ftpServer) === false)
{
 throw new Error(`(errid:Watl000414)字段[Ftp服务器(ftpServer)]的值:[${pobjQxPrjSite4DownLoadEN.ftpServer}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpUserId) == false && undefined !== pobjQxPrjSite4DownLoadEN.ftpUserId && tzDataType.isString(pobjQxPrjSite4DownLoadEN.ftpUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[Ftp用户Id(ftpUserId)]的值:[${pobjQxPrjSite4DownLoadEN.ftpUserId}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpUserPassword) == false && undefined !== pobjQxPrjSite4DownLoadEN.ftpUserPassword && tzDataType.isString(pobjQxPrjSite4DownLoadEN.ftpUserPassword) === false)
{
 throw new Error(`(errid:Watl000414)字段[Ftp用户口令(ftpUserPassword)]的值:[${pobjQxPrjSite4DownLoadEN.ftpUserPassword}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.updDate) == false && undefined !== pobjQxPrjSite4DownLoadEN.updDate && tzDataType.isString(pobjQxPrjSite4DownLoadEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxPrjSite4DownLoadEN.updDate}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.updUserId) == false && undefined !== pobjQxPrjSite4DownLoadEN.updUserId && tzDataType.isString(pobjQxPrjSite4DownLoadEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjQxPrjSite4DownLoadEN.updUserId}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.memo) == false && undefined !== pobjQxPrjSite4DownLoadEN.memo && tzDataType.isString(pobjQxPrjSite4DownLoadEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxPrjSite4DownLoadEN.memo}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxPrjSite4DownLoad_CheckProperty4Update(pobjQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.prjSiteId) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.prjSiteId) > 6)
{
 throw new Error(`(errid:Watl000416)字段[工程站点Id(prjSiteId)]的长度不能超过6(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.prjSiteId}(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.prjSiteName) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.prjSiteName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[工程站点名(prjSiteName)]的长度不能超过50(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.prjSiteName}(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.qxPrjId) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.qxPrjId}(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpServer) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.ftpServer) > 50)
{
 throw new Error(`(errid:Watl000416)字段[Ftp服务器(ftpServer)]的长度不能超过50(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.ftpServer}(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpUserId) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.ftpUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[Ftp用户Id(ftpUserId)]的长度不能超过20(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.ftpUserId}(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpUserPassword) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.ftpUserPassword) > 50)
{
 throw new Error(`(errid:Watl000416)字段[Ftp用户口令(ftpUserPassword)]的长度不能超过50(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.ftpUserPassword}(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.updDate) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.updDate}(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.updUserId) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.updUserId}(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.memo) == false && GetStrLen(pobjQxPrjSite4DownLoadEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 文件下载站点(QxPrjSite4DownLoad))!值:${pobjQxPrjSite4DownLoadEN.memo}(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.prjSiteId) == false && undefined !== pobjQxPrjSite4DownLoadEN.prjSiteId && tzDataType.isString(pobjQxPrjSite4DownLoadEN.prjSiteId) === false)
{
 throw new Error(`(errid:Watl000417)字段[工程站点Id(prjSiteId)]的值:[${pobjQxPrjSite4DownLoadEN.prjSiteId}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.prjSiteName) == false && undefined !== pobjQxPrjSite4DownLoadEN.prjSiteName && tzDataType.isString(pobjQxPrjSite4DownLoadEN.prjSiteName) === false)
{
 throw new Error(`(errid:Watl000417)字段[工程站点名(prjSiteName)]的值:[${pobjQxPrjSite4DownLoadEN.prjSiteName}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.qxPrjId) == false && undefined !== pobjQxPrjSite4DownLoadEN.qxPrjId && tzDataType.isString(pobjQxPrjSite4DownLoadEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxPrjSite4DownLoadEN.qxPrjId}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpServer) == false && undefined !== pobjQxPrjSite4DownLoadEN.ftpServer && tzDataType.isString(pobjQxPrjSite4DownLoadEN.ftpServer) === false)
{
 throw new Error(`(errid:Watl000417)字段[Ftp服务器(ftpServer)]的值:[${pobjQxPrjSite4DownLoadEN.ftpServer}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpUserId) == false && undefined !== pobjQxPrjSite4DownLoadEN.ftpUserId && tzDataType.isString(pobjQxPrjSite4DownLoadEN.ftpUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[Ftp用户Id(ftpUserId)]的值:[${pobjQxPrjSite4DownLoadEN.ftpUserId}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.ftpUserPassword) == false && undefined !== pobjQxPrjSite4DownLoadEN.ftpUserPassword && tzDataType.isString(pobjQxPrjSite4DownLoadEN.ftpUserPassword) === false)
{
 throw new Error(`(errid:Watl000417)字段[Ftp用户口令(ftpUserPassword)]的值:[${pobjQxPrjSite4DownLoadEN.ftpUserPassword}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.updDate) == false && undefined !== pobjQxPrjSite4DownLoadEN.updDate && tzDataType.isString(pobjQxPrjSite4DownLoadEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxPrjSite4DownLoadEN.updDate}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.updUserId) == false && undefined !== pobjQxPrjSite4DownLoadEN.updUserId && tzDataType.isString(pobjQxPrjSite4DownLoadEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjQxPrjSite4DownLoadEN.updUserId}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjSite4DownLoadEN.memo) == false && undefined !== pobjQxPrjSite4DownLoadEN.memo && tzDataType.isString(pobjQxPrjSite4DownLoadEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxPrjSite4DownLoadEN.memo}], 非法,应该为字符型(In 文件下载站点(QxPrjSite4DownLoad))!(clsQxPrjSite4DownLoadBL:CheckProperty4Update)`);
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
export  function QxPrjSite4DownLoad_GetJSONStrByObj (pobjQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN): string
{
pobjQxPrjSite4DownLoadEN.sfUpdFldSetStr = pobjQxPrjSite4DownLoadEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxPrjSite4DownLoadEN);
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
export  function QxPrjSite4DownLoad_GetObjLstByJSONStr (strJSON: string): Array<clsQxPrjSite4DownLoadEN>
{
let arrQxPrjSite4DownLoadObjLst = new Array<clsQxPrjSite4DownLoadEN>();
if (strJSON === "")
{
return arrQxPrjSite4DownLoadObjLst;
}
try
{
arrQxPrjSite4DownLoadObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxPrjSite4DownLoadObjLst;
}
return arrQxPrjSite4DownLoadObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxPrjSite4DownLoadObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxPrjSite4DownLoad_GetObjLstByJSONObjLst (arrQxPrjSite4DownLoadObjLstS: Array<clsQxPrjSite4DownLoadEN>): Array<clsQxPrjSite4DownLoadEN>
{
const arrQxPrjSite4DownLoadObjLst = new Array<clsQxPrjSite4DownLoadEN>();
for (const objInFor of arrQxPrjSite4DownLoadObjLstS) {
const obj1 = QxPrjSite4DownLoad_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxPrjSite4DownLoadObjLst.push(obj1);
}
return arrQxPrjSite4DownLoadObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxPrjSite4DownLoad_GetObjByJSONStr (strJSON: string): clsQxPrjSite4DownLoadEN
{
let pobjQxPrjSite4DownLoadEN = new clsQxPrjSite4DownLoadEN();
if (strJSON === "")
{
return pobjQxPrjSite4DownLoadEN;
}
try
{
pobjQxPrjSite4DownLoadEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxPrjSite4DownLoadEN;
}
return pobjQxPrjSite4DownLoadEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxPrjSite4DownLoad_GetCombineCondition(objQxPrjSite4DownLoadCond: clsQxPrjSite4DownLoadEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxPrjSite4DownLoadCond.dicFldComparisonOp, clsQxPrjSite4DownLoadEN.con_PrjSiteId) == true)
{
const strComparisonOpPrjSiteId:string = objQxPrjSite4DownLoadCond.dicFldComparisonOp[clsQxPrjSite4DownLoadEN.con_PrjSiteId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjSite4DownLoadEN.con_PrjSiteId, objQxPrjSite4DownLoadCond.prjSiteId, strComparisonOpPrjSiteId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjSite4DownLoadCond.dicFldComparisonOp, clsQxPrjSite4DownLoadEN.con_PrjSiteName) == true)
{
const strComparisonOpPrjSiteName:string = objQxPrjSite4DownLoadCond.dicFldComparisonOp[clsQxPrjSite4DownLoadEN.con_PrjSiteName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjSite4DownLoadEN.con_PrjSiteName, objQxPrjSite4DownLoadCond.prjSiteName, strComparisonOpPrjSiteName);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjSite4DownLoadCond.dicFldComparisonOp, clsQxPrjSite4DownLoadEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxPrjSite4DownLoadCond.dicFldComparisonOp[clsQxPrjSite4DownLoadEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjSite4DownLoadEN.con_QxPrjId, objQxPrjSite4DownLoadCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjSite4DownLoadCond.dicFldComparisonOp, clsQxPrjSite4DownLoadEN.con_FtpServer) == true)
{
const strComparisonOpFtpServer:string = objQxPrjSite4DownLoadCond.dicFldComparisonOp[clsQxPrjSite4DownLoadEN.con_FtpServer];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjSite4DownLoadEN.con_FtpServer, objQxPrjSite4DownLoadCond.ftpServer, strComparisonOpFtpServer);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjSite4DownLoadCond.dicFldComparisonOp, clsQxPrjSite4DownLoadEN.con_FtpUserId) == true)
{
const strComparisonOpFtpUserId:string = objQxPrjSite4DownLoadCond.dicFldComparisonOp[clsQxPrjSite4DownLoadEN.con_FtpUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjSite4DownLoadEN.con_FtpUserId, objQxPrjSite4DownLoadCond.ftpUserId, strComparisonOpFtpUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjSite4DownLoadCond.dicFldComparisonOp, clsQxPrjSite4DownLoadEN.con_FtpUserPassword) == true)
{
const strComparisonOpFtpUserPassword:string = objQxPrjSite4DownLoadCond.dicFldComparisonOp[clsQxPrjSite4DownLoadEN.con_FtpUserPassword];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjSite4DownLoadEN.con_FtpUserPassword, objQxPrjSite4DownLoadCond.ftpUserPassword, strComparisonOpFtpUserPassword);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjSite4DownLoadCond.dicFldComparisonOp, clsQxPrjSite4DownLoadEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxPrjSite4DownLoadCond.dicFldComparisonOp[clsQxPrjSite4DownLoadEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjSite4DownLoadEN.con_UpdDate, objQxPrjSite4DownLoadCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjSite4DownLoadCond.dicFldComparisonOp, clsQxPrjSite4DownLoadEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objQxPrjSite4DownLoadCond.dicFldComparisonOp[clsQxPrjSite4DownLoadEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjSite4DownLoadEN.con_UpdUserId, objQxPrjSite4DownLoadCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjSite4DownLoadCond.dicFldComparisonOp, clsQxPrjSite4DownLoadEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxPrjSite4DownLoadCond.dicFldComparisonOp[clsQxPrjSite4DownLoadEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjSite4DownLoadEN.con_Memo, objQxPrjSite4DownLoadCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPrjSite4DownLoad(文件下载站点),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjSiteName: 工程站点名(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPrjSite4DownLoad_GetUniCondStr(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and PrjSiteName = '{0}'", objQxPrjSite4DownLoadEN.prjSiteName);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxPrjSite4DownLoadEN.qxPrjId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPrjSite4DownLoad(文件下载站点),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjSiteName: 工程站点名(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPrjSite4DownLoad_GetUniCondStr4Update(objQxPrjSite4DownLoadEN: clsQxPrjSite4DownLoadEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and PrjSiteId <> '{0}'", objQxPrjSite4DownLoadEN.prjSiteId);
 strWhereCond +=  Format(" and PrjSiteName = '{0}'", objQxPrjSite4DownLoadEN.prjSiteName);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxPrjSite4DownLoadEN.qxPrjId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxPrjSite4DownLoadENS:源对象
 * @param objQxPrjSite4DownLoadENT:目标对象
*/
export  function QxPrjSite4DownLoad_GetObjFromJsonObj(objQxPrjSite4DownLoadENS: clsQxPrjSite4DownLoadEN): clsQxPrjSite4DownLoadEN 
{
 const objQxPrjSite4DownLoadENT: clsQxPrjSite4DownLoadEN = new clsQxPrjSite4DownLoadEN();
ObjectAssign(objQxPrjSite4DownLoadENT, objQxPrjSite4DownLoadENS);
 return objQxPrjSite4DownLoadENT;
}