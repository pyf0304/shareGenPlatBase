
 /**
 * 类名:clsQxCmProjectWApi
 * 表名:QxCmProject(00140119)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:04:06
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统管理(SysManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * QxCmProject(QxCmProject)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2026年04月01日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format,GetStrLen,tzDataType } from "@/ts/PubFun/clsString";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { ObjectAssign,GetExceptionStr,myShowErrorMsg } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxCmProjectENEx } from "@/ts/L0Entity/SysManage/clsQxCmProjectENEx";
import { clsQxCmProjectEN } from "@/ts/L0Entity/SysManage/clsQxCmProjectEN";
import { QxUseState_func } from "@/ts/L3ForWApi/UserManage_GP/clsQxUseStateWApi";
import { clsQxUseStateEN } from "@/ts/L0Entity/UserManage_GP/clsQxUseStateEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";

 export const qxCmProject_Controller = "QxCmProjectApi";
 export const qxCmProject_ConstructorName = "qxCmProject";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCmPrjId:关键字
 * @returns 对象
 **/
export  async function QxCmProject_GetObjByCmPrjIdAsync(strCmPrjId: string): Promise<clsQxCmProjectEN|null>  
{
const strThisFuncName = "GetObjByCmPrjIdAsync";

if (IsNullOrEmpty(strCmPrjId) == true)
{
  const strMsg = Format("参数:[strCmPrjId]不能为空!(In clsQxCmProjectWApi.GetObjByCmPrjIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCmPrjId.length != 6)
{
const strMsg = Format("缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsQxCmProjectWApi.GetObjByCmPrjIdAsync)", strCmPrjId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCmPrjId";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCmPrjId,
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
const objQxCmProject = QxCmProject_GetObjFromJsonObj(returnObj);
return objQxCmProject;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByCmPrjIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByCmPrjIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxCmProject_SortFunDefa(a:clsQxCmProjectEN , b:clsQxCmProjectEN): number 
{
return a.cmPrjId.localeCompare(b.cmPrjId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxCmProject_SortFunDefa2Fld(a:clsQxCmProjectEN , b:clsQxCmProjectEN): number 
{
if (a.cmPrjName == b.cmPrjName) return a.qxPrjId.localeCompare(b.qxPrjId);
else return a.cmPrjName.localeCompare(b.cmPrjName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxCmProject_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxCmProjectEN.con_CmPrjId:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
return a.cmPrjId.localeCompare(b.cmPrjId);
}
case clsQxCmProjectEN.con_CmPrjName:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
return a.cmPrjName.localeCompare(b.cmPrjName);
}
case clsQxCmProjectEN.con_QxPrjId:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxCmProjectEN.con_UseStateId:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
if (a.useStateId == null) return -1;
if (b.useStateId == null) return 1;
return a.useStateId.localeCompare(b.useStateId);
}
case clsQxCmProjectEN.con_UpdDate:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQxCmProjectEN.con_UpdUserId:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
return a.updUserId.localeCompare(b.updUserId);
}
case clsQxCmProjectEN.con_Memo:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxCmProject]中不存在!(in ${ qxCmProject_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxCmProjectEN.con_CmPrjId:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
return b.cmPrjId.localeCompare(a.cmPrjId);
}
case clsQxCmProjectEN.con_CmPrjName:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
return b.cmPrjName.localeCompare(a.cmPrjName);
}
case clsQxCmProjectEN.con_QxPrjId:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxCmProjectEN.con_UseStateId:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
if (b.useStateId == null) return -1;
if (a.useStateId == null) return 1;
return b.useStateId.localeCompare(a.useStateId);
}
case clsQxCmProjectEN.con_UpdDate:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQxCmProjectEN.con_UpdUserId:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
return b.updUserId.localeCompare(a.updUserId);
}
case clsQxCmProjectEN.con_Memo:
return (a: clsQxCmProjectEN, b: clsQxCmProjectEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxCmProject]中不存在!(in ${ qxCmProject_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByCmPrjIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxCmProject_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxCmProjectEN.con_CmPrjId:
return (obj: clsQxCmProjectEN) => {
return obj.cmPrjId === value;
}
case clsQxCmProjectEN.con_CmPrjName:
return (obj: clsQxCmProjectEN) => {
return obj.cmPrjName === value;
}
case clsQxCmProjectEN.con_QxPrjId:
return (obj: clsQxCmProjectEN) => {
return obj.qxPrjId === value;
}
case clsQxCmProjectEN.con_UseStateId:
return (obj: clsQxCmProjectEN) => {
return obj.useStateId === value;
}
case clsQxCmProjectEN.con_UpdDate:
return (obj: clsQxCmProjectEN) => {
return obj.updDate === value;
}
case clsQxCmProjectEN.con_UpdUserId:
return (obj: clsQxCmProjectEN) => {
return obj.updUserId === value;
}
case clsQxCmProjectEN.con_Memo:
return (obj: clsQxCmProjectEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxCmProject]中不存在!(in ${ qxCmProject_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxCmProject__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxCmProject_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  async function QxCmProject_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  async function QxCmProject_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  async function QxCmProject_GetFirstObjAsync(strWhereCond: string): Promise<clsQxCmProjectEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const objQxCmProject = QxCmProject_GetObjFromJsonObj(returnObj);
return objQxCmProject;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  async function QxCmProject_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxCmProjectEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxCmProject_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxCmProject_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
 * @param arrCmPrjId:关键字列表
 * @returns 对象列表
 **/
export  async function QxCmProject_GetObjLstByCmPrjIdLstAsync(arrCmPrjId: Array<string>): Promise<Array<clsQxCmProjectEN>>  
{
const strThisFuncName = "GetObjLstByCmPrjIdLstAsync";
const strAction = "GetObjLstByCmPrjIdLst";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCmPrjId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxCmProject_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxCmProject_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByCmPrjIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxCmProject_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxCmProjectEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxCmProject_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxCmProject_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  async function QxCmProject_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxCmProjectEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxCmProject_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxCmProject_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  async function QxCmProject_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxCmProjectEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxCmProjectEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxCmProject_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxCmProject_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
 * @param strCmPrjId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxCmProject_DelRecordAsync(strCmPrjId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strCmPrjId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
 * @param arrCmPrjId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxCmProject_DelQxCmProjectsAsync(arrCmPrjId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxCmProjectsAsync";
const strAction = "DelQxCmProjects";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCmPrjId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objQxCmProjectENS:源对象
 * @returns 目标对象=>clsQxCmProjectEN:objQxCmProjectENT
 **/
export  function QxCmProject_CopyToEx(objQxCmProjectENS:clsQxCmProjectEN ): clsQxCmProjectENEx
{
const strThisFuncName  = QxCmProject_CopyToEx.name;
 const objQxCmProjectENT = new clsQxCmProjectENEx();
try
{
ObjectAssign(objQxCmProjectENT, objQxCmProjectENS);
 return objQxCmProjectENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, qxCmProject_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objQxCmProjectENT;
}
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function QxCmProject_FuncMapByFldName(strFldName: string, objQxCmProjectEx: clsQxCmProjectENEx)
{
const strThisFuncName = QxCmProject_FuncMapByFldName.name;
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsQxCmProjectEN._AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clsQxCmProjectENEx.con_UseStateName:
return QxCmProject_FuncMapUseStateName(objQxCmProjectEx);
        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxCmProject_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxCmProjectENEx.con_UseStateName:
return (a: clsQxCmProjectENEx, b: clsQxCmProjectENEx) => {
return a.useStateName.localeCompare(b.useStateName);
}
        default:
return QxCmProject_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsQxCmProjectENEx.con_UseStateName:
return (a: clsQxCmProjectENEx, b: clsQxCmProjectENEx) => {
return b.useStateName.localeCompare(a.useStateName);
}
        default:
return QxCmProject_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objQxCmProjectS:源对象
 **/
export  async function QxCmProject_FuncMapUseStateName(objQxCmProject:clsQxCmProjectENEx )
{
const strThisFuncName = QxCmProject_FuncMapUseStateName.name;
try
{
if (IsNullOrEmpty(objQxCmProject.useStateName) == true){
 const QxUseStateUseStateId = objQxCmProject.useStateId;
 const QxUseStateUseStateName = await QxUseState_func(clsQxUseStateEN.con_UseStateId, clsQxUseStateEN.con_UseStateName, QxUseStateUseStateId );
 objQxCmProject.useStateName = QxUseStateUseStateName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001317)函数映射表对象数据出错,{0}.(in {1}.{2})", e, qxCmProject_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function QxCmProject_DelQxCmProjectsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxCmProjectsByCondAsync";
const strAction = "DelQxCmProjectsByCond";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
 * @param objQxCmProjectEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxCmProject_AddNewRecordAsync(objQxCmProjectEN: clsQxCmProjectEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxCmProjectEN.cmPrjId === null || objQxCmProjectEN.cmPrjId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxCmProjectEN);
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxCmProjectEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
 * @param objQxCmProjectEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxCmProject_AddNewRecordWithMaxIdAsync(objQxCmProjectEN: clsQxCmProjectEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxCmProjectEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  async function QxCmProject_AddNewObjSave(objQxCmProjectEN: clsQxCmProjectEN ): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxCmProject_CheckPropertyNew(objQxCmProjectEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxCmProject_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await QxCmProject_IsExistAsync(objQxCmProjectEN.cmPrjId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objQxCmProjectEN.cmPrjId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await QxCmProject_AddNewRecordAsync(objQxCmProjectEN);
if (returnBool == true)
{
//QxCmProject_ReFreshCache();
}
else
{
const strInfo = `添加[QxCmProject(QxCmProject)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxCmProjectEN.cmPrjId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxCmProject_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function QxCmProject_UpdateObjSave(objQxCmProjectEN: clsQxCmProjectEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxCmProjectEN.sfUpdFldSetStr = objQxCmProjectEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxCmProjectEN.cmPrjId == "" || objQxCmProjectEN.cmPrjId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxCmProject_CheckProperty4Update(objQxCmProjectEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxCmProject_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await QxCmProject_UpdateRecordAsync(objQxCmProjectEN);
if (returnBool == true)
{
//QxCmProject_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxCmProject_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxCmProjectEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxCmProject_AddNewRecordWithReturnKeyAsync(objQxCmProjectEN: clsQxCmProjectEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxCmProjectEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
 * @param objQxCmProjectEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxCmProject_UpdateRecordAsync(objQxCmProjectEN: clsQxCmProjectEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxCmProjectEN.sfUpdFldSetStr === undefined || objQxCmProjectEN.sfUpdFldSetStr === null || objQxCmProjectEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxCmProjectEN.cmPrjId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxCmProjectEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
 * @param objQxCmProjectEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxCmProject_EditRecordExAsync(objQxCmProjectEN: clsQxCmProjectEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxCmProjectEN.sfUpdFldSetStr === undefined || objQxCmProjectEN.sfUpdFldSetStr === null || objQxCmProjectEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxCmProjectEN.cmPrjId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxCmProjectEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
 * @param objQxCmProjectEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxCmProject_UpdateWithConditionAsync(objQxCmProjectEN: clsQxCmProjectEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxCmProjectEN.sfUpdFldSetStr === undefined || objQxCmProjectEN.sfUpdFldSetStr === null || objQxCmProjectEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxCmProjectEN.cmPrjId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);
objQxCmProjectEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxCmProjectEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  async function QxCmProject_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
 * @param strCmPrjId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxCmProject_IsExistAsync(strCmPrjId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCmPrjId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  async function QxCmProject_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  async function QxCmProject_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxCmProject_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxCmProject_ConstructorName, strThisFuncName);
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
export  function QxCmProject_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxCmProject_CheckPropertyNew(pobjQxCmProjectEN: clsQxCmProjectEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxCmProjectEN.cmPrjName) === true )
{
 throw new Error(`(errid:Watl000411)字段[CmPrjName]不能为空(In QxCmProject)!(clsQxCmProjectBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.qxPrjId) === true 
 || pobjQxCmProjectEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In QxCmProject)!(clsQxCmProjectBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.updUserId) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改用户Id]不能为空(In QxCmProject)!(clsQxCmProjectBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxCmProjectEN.cmPrjId) == false && GetStrLen(pobjQxCmProjectEN.cmPrjId) > 6)
{
 throw new Error(`(errid:Watl000413)字段[Cm项目Id(cmPrjId)]的长度不能超过6(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.cmPrjId}(clsQxCmProjectBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.cmPrjName) == false && GetStrLen(pobjQxCmProjectEN.cmPrjName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[CmPrjName(cmPrjName)]的长度不能超过50(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.cmPrjName}(clsQxCmProjectBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.qxPrjId) == false && GetStrLen(pobjQxCmProjectEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.qxPrjId}(clsQxCmProjectBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.useStateId) == false && GetStrLen(pobjQxCmProjectEN.useStateId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[使用状态Id(useStateId)]的长度不能超过2(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.useStateId}(clsQxCmProjectBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.updDate) == false && GetStrLen(pobjQxCmProjectEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.updDate}(clsQxCmProjectBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.updUserId) == false && GetStrLen(pobjQxCmProjectEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.updUserId}(clsQxCmProjectBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.memo) == false && GetStrLen(pobjQxCmProjectEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.memo}(clsQxCmProjectBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxCmProjectEN.cmPrjId) == false && undefined !== pobjQxCmProjectEN.cmPrjId && tzDataType.isString(pobjQxCmProjectEN.cmPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[Cm项目Id(cmPrjId)]的值:[${pobjQxCmProjectEN.cmPrjId}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.cmPrjName) == false && undefined !== pobjQxCmProjectEN.cmPrjName && tzDataType.isString(pobjQxCmProjectEN.cmPrjName) === false)
{
 throw new Error(`(errid:Watl000414)字段[CmPrjName(cmPrjName)]的值:[${pobjQxCmProjectEN.cmPrjName}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.qxPrjId) == false && undefined !== pobjQxCmProjectEN.qxPrjId && tzDataType.isString(pobjQxCmProjectEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxCmProjectEN.qxPrjId}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.useStateId) == false && undefined !== pobjQxCmProjectEN.useStateId && tzDataType.isString(pobjQxCmProjectEN.useStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[使用状态Id(useStateId)]的值:[${pobjQxCmProjectEN.useStateId}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.updDate) == false && undefined !== pobjQxCmProjectEN.updDate && tzDataType.isString(pobjQxCmProjectEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxCmProjectEN.updDate}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.updUserId) == false && undefined !== pobjQxCmProjectEN.updUserId && tzDataType.isString(pobjQxCmProjectEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjQxCmProjectEN.updUserId}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.memo) == false && undefined !== pobjQxCmProjectEN.memo && tzDataType.isString(pobjQxCmProjectEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxCmProjectEN.memo}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxCmProject_CheckProperty4Update(pobjQxCmProjectEN: clsQxCmProjectEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxCmProjectEN.cmPrjId) == false && GetStrLen(pobjQxCmProjectEN.cmPrjId) > 6)
{
 throw new Error(`(errid:Watl000416)字段[Cm项目Id(cmPrjId)]的长度不能超过6(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.cmPrjId}(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.cmPrjName) == false && GetStrLen(pobjQxCmProjectEN.cmPrjName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[CmPrjName(cmPrjName)]的长度不能超过50(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.cmPrjName}(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.qxPrjId) == false && GetStrLen(pobjQxCmProjectEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.qxPrjId}(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.useStateId) == false && GetStrLen(pobjQxCmProjectEN.useStateId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[使用状态Id(useStateId)]的长度不能超过2(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.useStateId}(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.updDate) == false && GetStrLen(pobjQxCmProjectEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.updDate}(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.updUserId) == false && GetStrLen(pobjQxCmProjectEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.updUserId}(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.memo) == false && GetStrLen(pobjQxCmProjectEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In QxCmProject(QxCmProject))!值:${pobjQxCmProjectEN.memo}(clsQxCmProjectBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxCmProjectEN.cmPrjId) == false && undefined !== pobjQxCmProjectEN.cmPrjId && tzDataType.isString(pobjQxCmProjectEN.cmPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[Cm项目Id(cmPrjId)]的值:[${pobjQxCmProjectEN.cmPrjId}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.cmPrjName) == false && undefined !== pobjQxCmProjectEN.cmPrjName && tzDataType.isString(pobjQxCmProjectEN.cmPrjName) === false)
{
 throw new Error(`(errid:Watl000417)字段[CmPrjName(cmPrjName)]的值:[${pobjQxCmProjectEN.cmPrjName}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.qxPrjId) == false && undefined !== pobjQxCmProjectEN.qxPrjId && tzDataType.isString(pobjQxCmProjectEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxCmProjectEN.qxPrjId}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.useStateId) == false && undefined !== pobjQxCmProjectEN.useStateId && tzDataType.isString(pobjQxCmProjectEN.useStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[使用状态Id(useStateId)]的值:[${pobjQxCmProjectEN.useStateId}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.updDate) == false && undefined !== pobjQxCmProjectEN.updDate && tzDataType.isString(pobjQxCmProjectEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxCmProjectEN.updDate}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.updUserId) == false && undefined !== pobjQxCmProjectEN.updUserId && tzDataType.isString(pobjQxCmProjectEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjQxCmProjectEN.updUserId}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxCmProjectEN.memo) == false && undefined !== pobjQxCmProjectEN.memo && tzDataType.isString(pobjQxCmProjectEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxCmProjectEN.memo}], 非法,应该为字符型(In QxCmProject(QxCmProject))!(clsQxCmProjectBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxCmProjectEN.cmPrjId) === true 
 || pobjQxCmProjectEN.cmPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[Cm项目Id]不能为空(In QxCmProject)!(clsQxCmProjectBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxCmProject_GetJSONStrByObj (pobjQxCmProjectEN: clsQxCmProjectEN): string
{
pobjQxCmProjectEN.sfUpdFldSetStr = pobjQxCmProjectEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxCmProjectEN);
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
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxCmProject_GetObjLstByJSONStr (strJSON: string): Array<clsQxCmProjectEN>
{
let arrQxCmProjectObjLst = new Array<clsQxCmProjectEN>();
if (strJSON === "")
{
return arrQxCmProjectObjLst;
}
try
{
arrQxCmProjectObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxCmProjectObjLst;
}
return arrQxCmProjectObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxCmProjectObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxCmProject_GetObjLstByJSONObjLst (arrQxCmProjectObjLstS: Array<clsQxCmProjectEN>): Array<clsQxCmProjectEN>
{
const arrQxCmProjectObjLst = new Array<clsQxCmProjectEN>();
for (const objInFor of arrQxCmProjectObjLstS) {
const obj1 = QxCmProject_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxCmProjectObjLst.push(obj1);
}
return arrQxCmProjectObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxCmProject_GetObjByJSONStr (strJSON: string): clsQxCmProjectEN
{
let pobjQxCmProjectEN = new clsQxCmProjectEN();
if (strJSON === "")
{
return pobjQxCmProjectEN;
}
try
{
pobjQxCmProjectEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxCmProjectEN;
}
return pobjQxCmProjectEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxCmProject_GetCombineCondition(objQxCmProjectCond: clsQxCmProjectEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxCmProjectCond.dicFldComparisonOp, clsQxCmProjectEN.con_CmPrjId) == true)
{
const strComparisonOpCmPrjId:string = objQxCmProjectCond.dicFldComparisonOp[clsQxCmProjectEN.con_CmPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxCmProjectEN.con_CmPrjId, objQxCmProjectCond.cmPrjId, strComparisonOpCmPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxCmProjectCond.dicFldComparisonOp, clsQxCmProjectEN.con_CmPrjName) == true)
{
const strComparisonOpCmPrjName:string = objQxCmProjectCond.dicFldComparisonOp[clsQxCmProjectEN.con_CmPrjName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxCmProjectEN.con_CmPrjName, objQxCmProjectCond.cmPrjName, strComparisonOpCmPrjName);
}
if (Object.prototype.hasOwnProperty.call(objQxCmProjectCond.dicFldComparisonOp, clsQxCmProjectEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxCmProjectCond.dicFldComparisonOp[clsQxCmProjectEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxCmProjectEN.con_QxPrjId, objQxCmProjectCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxCmProjectCond.dicFldComparisonOp, clsQxCmProjectEN.con_UseStateId) == true)
{
const strComparisonOpUseStateId:string = objQxCmProjectCond.dicFldComparisonOp[clsQxCmProjectEN.con_UseStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxCmProjectEN.con_UseStateId, objQxCmProjectCond.useStateId, strComparisonOpUseStateId);
}
if (Object.prototype.hasOwnProperty.call(objQxCmProjectCond.dicFldComparisonOp, clsQxCmProjectEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxCmProjectCond.dicFldComparisonOp[clsQxCmProjectEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxCmProjectEN.con_UpdDate, objQxCmProjectCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxCmProjectCond.dicFldComparisonOp, clsQxCmProjectEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objQxCmProjectCond.dicFldComparisonOp[clsQxCmProjectEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxCmProjectEN.con_UpdUserId, objQxCmProjectCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxCmProjectCond.dicFldComparisonOp, clsQxCmProjectEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxCmProjectCond.dicFldComparisonOp[clsQxCmProjectEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxCmProjectEN.con_Memo, objQxCmProjectCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxCmProjectENS:源对象
 * @param objQxCmProjectENT:目标对象
*/
export  function QxCmProject_GetObjFromJsonObj(objQxCmProjectENS: clsQxCmProjectEN): clsQxCmProjectEN 
{
 const objQxCmProjectENT: clsQxCmProjectEN = new clsQxCmProjectEN();
ObjectAssign(objQxCmProjectENT, objQxCmProjectENS);
 return objQxCmProjectENT;
}