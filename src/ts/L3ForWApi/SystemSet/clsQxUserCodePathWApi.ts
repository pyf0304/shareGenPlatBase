
 /**
 * 类名:clsQxUserCodePathWApi
 * 表名:QxUserCodePath(00140056)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:23
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户生成路径(QxUserCodePath)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsQxUserCodePathEN } from "@/ts/L0Entity/SystemSet/clsQxUserCodePathEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUserCodePath_Controller = "QxUserCodePathApi";
 export const qxUserCodePath_ConstructorName = "qxUserCodePath";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function QxUserCodePath_GetObjBymIdAsync(lngmId: number): Promise<clsQxUserCodePathEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxUserCodePathWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const objQxUserCodePath = QxUserCodePath_GetObjFromJsonObj(returnObj);
return objQxUserCodePath;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  function QxUserCodePath_SortFunDefa(a:clsQxUserCodePathEN , b:clsQxUserCodePathEN): number 
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
export  function QxUserCodePath_SortFunDefa2Fld(a:clsQxUserCodePathEN , b:clsQxUserCodePathEN): number 
{
if (a.qxPrjId == b.qxPrjId) return a.userId.localeCompare(b.userId);
else return a.qxPrjId.localeCompare(b.qxPrjId);
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
export  function QxUserCodePath_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUserCodePathEN.con_mId:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return a.mId-b.mId;
}
case clsQxUserCodePathEN.con_QxPrjId:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxUserCodePathEN.con_UserId:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return a.userId.localeCompare(b.userId);
}
case clsQxUserCodePathEN.con_QxCodeTypeId:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return a.qxCodeTypeId.localeCompare(b.qxCodeTypeId);
}
case clsQxUserCodePathEN.con_CodePath:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return a.codePath.localeCompare(b.codePath);
}
case clsQxUserCodePathEN.con_CodePathBackup:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return a.codePathBackup.localeCompare(b.codePathBackup);
}
case clsQxUserCodePathEN.con_IsTemplate:
return (a: clsQxUserCodePathEN) => {
if (a.isTemplate == true) return 1;
else return -1
}
case clsQxUserCodePathEN.con_UpdDate:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxUserCodePathEN.con_UpdUserId:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsQxUserCodePathEN.con_Memo:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsQxUserCodePathEN.con_IsGeneReport:
return (a: clsQxUserCodePathEN) => {
if (a.isGeneReport == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserCodePath]中不存在!(in ${ qxUserCodePath_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUserCodePathEN.con_mId:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return b.mId-a.mId;
}
case clsQxUserCodePathEN.con_QxPrjId:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxUserCodePathEN.con_UserId:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return b.userId.localeCompare(a.userId);
}
case clsQxUserCodePathEN.con_QxCodeTypeId:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return b.qxCodeTypeId.localeCompare(a.qxCodeTypeId);
}
case clsQxUserCodePathEN.con_CodePath:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return b.codePath.localeCompare(a.codePath);
}
case clsQxUserCodePathEN.con_CodePathBackup:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
return b.codePathBackup.localeCompare(a.codePathBackup);
}
case clsQxUserCodePathEN.con_IsTemplate:
return (b: clsQxUserCodePathEN) => {
if (b.isTemplate == true) return 1;
else return -1
}
case clsQxUserCodePathEN.con_UpdDate:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxUserCodePathEN.con_UpdUserId:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsQxUserCodePathEN.con_Memo:
return (a: clsQxUserCodePathEN, b: clsQxUserCodePathEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsQxUserCodePathEN.con_IsGeneReport:
return (b: clsQxUserCodePathEN) => {
if (b.isGeneReport == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserCodePath]中不存在!(in ${ qxUserCodePath_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxUserCodePath_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUserCodePathEN.con_mId:
return (obj: clsQxUserCodePathEN) => {
return obj.mId === value;
}
case clsQxUserCodePathEN.con_QxPrjId:
return (obj: clsQxUserCodePathEN) => {
return obj.qxPrjId === value;
}
case clsQxUserCodePathEN.con_UserId:
return (obj: clsQxUserCodePathEN) => {
return obj.userId === value;
}
case clsQxUserCodePathEN.con_QxCodeTypeId:
return (obj: clsQxUserCodePathEN) => {
return obj.qxCodeTypeId === value;
}
case clsQxUserCodePathEN.con_CodePath:
return (obj: clsQxUserCodePathEN) => {
return obj.codePath === value;
}
case clsQxUserCodePathEN.con_CodePathBackup:
return (obj: clsQxUserCodePathEN) => {
return obj.codePathBackup === value;
}
case clsQxUserCodePathEN.con_IsTemplate:
return (obj: clsQxUserCodePathEN) => {
return obj.isTemplate === value;
}
case clsQxUserCodePathEN.con_UpdDate:
return (obj: clsQxUserCodePathEN) => {
return obj.updDate === value;
}
case clsQxUserCodePathEN.con_UpdUserId:
return (obj: clsQxUserCodePathEN) => {
return obj.updUserId === value;
}
case clsQxUserCodePathEN.con_Memo:
return (obj: clsQxUserCodePathEN) => {
return obj.memo === value;
}
case clsQxUserCodePathEN.con_IsGeneReport:
return (obj: clsQxUserCodePathEN) => {
return obj.isGeneReport === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserCodePath]中不存在!(in ${ qxUserCodePath_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxUserCodePath__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserCodePath_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUserCodePathEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const objQxUserCodePath = QxUserCodePath_GetObjFromJsonObj(returnObj);
return objQxUserCodePath;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUserCodePathEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsQxUserCodePathEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUserCodePathEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUserCodePathEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUserCodePathEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUserCodePathEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_DelQxUserCodePathsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUserCodePathsAsync";
const strAction = "DelQxUserCodePaths";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_DelQxUserCodePathsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUserCodePathsByCondAsync";
const strAction = "DelQxUserCodePathsByCond";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
 * @param objQxUserCodePathEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserCodePath_AddNewRecordAsync(objQxUserCodePathEN: clsQxUserCodePathEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxUserCodePathEN);
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserCodePathEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_AddNewObjSave(objQxUserCodePathEN: clsQxUserCodePathEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxUserCodePath_CheckPropertyNew(objQxUserCodePathEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserCodePath_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserCodePath_CheckUniCond4Add(objQxUserCodePathEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxUserCodePath_AddNewRecordAsync(objQxUserCodePathEN);
if (returnBool == true)
{
//QxUserCodePath_ReFreshCache();
}
else
{
const strInfo = `添加[用户生成路径(QxUserCodePath)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxUserCodePathEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxUserCodePath_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxUserCodePath_CheckUniCond4Add(objQxUserCodePathEN: clsQxUserCodePathEN): Promise<boolean>{
const strUniquenessCondition = QxUserCodePath_GetUniCondStr(objQxUserCodePathEN);
const bolIsExistCondition = await QxUserCodePath_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserCodePath_CheckUniCond4Update(objQxUserCodePathEN: clsQxUserCodePathEN): Promise<boolean>{
const strUniquenessCondition = QxUserCodePath_GetUniCondStr4Update(objQxUserCodePathEN);
const bolIsExistCondition = await QxUserCodePath_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserCodePath_UpdateObjSave(objQxUserCodePathEN: clsQxUserCodePathEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxUserCodePathEN.sfUpdFldSetStr = objQxUserCodePathEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxUserCodePathEN.mId == 0 || objQxUserCodePathEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxUserCodePath_CheckProperty4Update(objQxUserCodePathEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserCodePath_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserCodePath_CheckUniCond4Update(objQxUserCodePathEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxUserCodePath_UpdateRecordAsync(objQxUserCodePathEN);
if (returnBool == true)
{
//QxUserCodePath_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxUserCodePath_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxUserCodePathEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUserCodePath_AddNewRecordWithReturnKeyAsync(objQxUserCodePathEN: clsQxUserCodePathEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserCodePathEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
 * @param objQxUserCodePathEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserCodePath_UpdateRecordAsync(objQxUserCodePathEN: clsQxUserCodePathEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUserCodePathEN.sfUpdFldSetStr === undefined || objQxUserCodePathEN.sfUpdFldSetStr === null || objQxUserCodePathEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserCodePathEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserCodePathEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
 * @param objQxUserCodePathEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserCodePath_EditRecordExAsync(objQxUserCodePathEN: clsQxUserCodePathEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxUserCodePathEN.sfUpdFldSetStr === undefined || objQxUserCodePathEN.sfUpdFldSetStr === null || objQxUserCodePathEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserCodePathEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserCodePathEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
 * @param objQxUserCodePathEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserCodePath_UpdateWithConditionAsync(objQxUserCodePathEN: clsQxUserCodePathEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUserCodePathEN.sfUpdFldSetStr === undefined || objQxUserCodePathEN.sfUpdFldSetStr === null || objQxUserCodePathEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserCodePathEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);
objQxUserCodePathEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserCodePathEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  async function QxUserCodePath_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxUserCodePath_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserCodePath_ConstructorName, strThisFuncName);
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
export  function QxUserCodePath_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxUserCodePath_CheckPropertyNew(pobjQxUserCodePathEN: clsQxUserCodePathEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUserCodePathEN.qxPrjId) === true 
 || pobjQxUserCodePathEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 用户生成路径)!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.userId) === true 
 || pobjQxUserCodePathEN.userId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 用户生成路径)!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.qxCodeTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[代码类型Id]不能为空(In 用户生成路径)!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.codePath) === true )
{
 throw new Error(`(errid:Watl000411)字段[代码路径]不能为空(In 用户生成路径)!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.codePathBackup) === true )
{
 throw new Error(`(errid:Watl000411)字段[备份代码路径]不能为空(In 用户生成路径)!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (null === pobjQxUserCodePathEN.isTemplate 
 || pobjQxUserCodePathEN.isTemplate != null && pobjQxUserCodePathEN.isTemplate.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否模板]不能为空(In 用户生成路径)!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserCodePathEN.qxPrjId) == false && GetStrLen(pobjQxUserCodePathEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.qxPrjId}(clsQxUserCodePathBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.userId) == false && GetStrLen(pobjQxUserCodePathEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.userId}(clsQxUserCodePathBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.qxCodeTypeId) == false && GetStrLen(pobjQxUserCodePathEN.qxCodeTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[代码类型Id(qxCodeTypeId)]的长度不能超过4(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.qxCodeTypeId}(clsQxUserCodePathBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.codePath) == false && GetStrLen(pobjQxUserCodePathEN.codePath) > 200)
{
 throw new Error(`(errid:Watl000413)字段[代码路径(codePath)]的长度不能超过200(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.codePath}(clsQxUserCodePathBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.codePathBackup) == false && GetStrLen(pobjQxUserCodePathEN.codePathBackup) > 200)
{
 throw new Error(`(errid:Watl000413)字段[备份代码路径(codePathBackup)]的长度不能超过200(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.codePathBackup}(clsQxUserCodePathBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.updDate) == false && GetStrLen(pobjQxUserCodePathEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.updDate}(clsQxUserCodePathBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.updUserId) == false && GetStrLen(pobjQxUserCodePathEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.updUserId}(clsQxUserCodePathBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.memo) == false && GetStrLen(pobjQxUserCodePathEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.memo}(clsQxUserCodePathBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUserCodePathEN.mId && undefined !== pobjQxUserCodePathEN.mId && tzDataType.isNumber(pobjQxUserCodePathEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(mId)]的值:[${pobjQxUserCodePathEN.mId}], 非法,应该为数值型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.qxPrjId) == false && undefined !== pobjQxUserCodePathEN.qxPrjId && tzDataType.isString(pobjQxUserCodePathEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxUserCodePathEN.qxPrjId}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.userId) == false && undefined !== pobjQxUserCodePathEN.userId && tzDataType.isString(pobjQxUserCodePathEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjQxUserCodePathEN.userId}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.qxCodeTypeId) == false && undefined !== pobjQxUserCodePathEN.qxCodeTypeId && tzDataType.isString(pobjQxUserCodePathEN.qxCodeTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[代码类型Id(qxCodeTypeId)]的值:[${pobjQxUserCodePathEN.qxCodeTypeId}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.codePath) == false && undefined !== pobjQxUserCodePathEN.codePath && tzDataType.isString(pobjQxUserCodePathEN.codePath) === false)
{
 throw new Error(`(errid:Watl000414)字段[代码路径(codePath)]的值:[${pobjQxUserCodePathEN.codePath}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.codePathBackup) == false && undefined !== pobjQxUserCodePathEN.codePathBackup && tzDataType.isString(pobjQxUserCodePathEN.codePathBackup) === false)
{
 throw new Error(`(errid:Watl000414)字段[备份代码路径(codePathBackup)]的值:[${pobjQxUserCodePathEN.codePathBackup}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (null != pobjQxUserCodePathEN.isTemplate && undefined !== pobjQxUserCodePathEN.isTemplate && tzDataType.isBoolean(pobjQxUserCodePathEN.isTemplate) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否模板(isTemplate)]的值:[${pobjQxUserCodePathEN.isTemplate}], 非法,应该为布尔型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.updDate) == false && undefined !== pobjQxUserCodePathEN.updDate && tzDataType.isString(pobjQxUserCodePathEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxUserCodePathEN.updDate}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.updUserId) == false && undefined !== pobjQxUserCodePathEN.updUserId && tzDataType.isString(pobjQxUserCodePathEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjQxUserCodePathEN.updUserId}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.memo) == false && undefined !== pobjQxUserCodePathEN.memo && tzDataType.isString(pobjQxUserCodePathEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxUserCodePathEN.memo}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
if (null != pobjQxUserCodePathEN.isGeneReport && undefined !== pobjQxUserCodePathEN.isGeneReport && tzDataType.isBoolean(pobjQxUserCodePathEN.isGeneReport) === false)
{
 throw new Error(`(errid:Watl000414)字段[IsGeneReport(isGeneReport)]的值:[${pobjQxUserCodePathEN.isGeneReport}], 非法,应该为布尔型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUserCodePath_CheckProperty4Update(pobjQxUserCodePathEN: clsQxUserCodePathEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserCodePathEN.qxPrjId) == false && GetStrLen(pobjQxUserCodePathEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.qxPrjId}(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.userId) == false && GetStrLen(pobjQxUserCodePathEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.userId}(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.qxCodeTypeId) == false && GetStrLen(pobjQxUserCodePathEN.qxCodeTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[代码类型Id(qxCodeTypeId)]的长度不能超过4(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.qxCodeTypeId}(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.codePath) == false && GetStrLen(pobjQxUserCodePathEN.codePath) > 200)
{
 throw new Error(`(errid:Watl000416)字段[代码路径(codePath)]的长度不能超过200(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.codePath}(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.codePathBackup) == false && GetStrLen(pobjQxUserCodePathEN.codePathBackup) > 200)
{
 throw new Error(`(errid:Watl000416)字段[备份代码路径(codePathBackup)]的长度不能超过200(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.codePathBackup}(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.updDate) == false && GetStrLen(pobjQxUserCodePathEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.updDate}(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.updUserId) == false && GetStrLen(pobjQxUserCodePathEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.updUserId}(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.memo) == false && GetStrLen(pobjQxUserCodePathEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户生成路径(QxUserCodePath))!值:${pobjQxUserCodePathEN.memo}(clsQxUserCodePathBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUserCodePathEN.mId && undefined !== pobjQxUserCodePathEN.mId && tzDataType.isNumber(pobjQxUserCodePathEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(mId)]的值:[${pobjQxUserCodePathEN.mId}], 非法,应该为数值型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.qxPrjId) == false && undefined !== pobjQxUserCodePathEN.qxPrjId && tzDataType.isString(pobjQxUserCodePathEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxUserCodePathEN.qxPrjId}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.userId) == false && undefined !== pobjQxUserCodePathEN.userId && tzDataType.isString(pobjQxUserCodePathEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjQxUserCodePathEN.userId}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.qxCodeTypeId) == false && undefined !== pobjQxUserCodePathEN.qxCodeTypeId && tzDataType.isString(pobjQxUserCodePathEN.qxCodeTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[代码类型Id(qxCodeTypeId)]的值:[${pobjQxUserCodePathEN.qxCodeTypeId}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.codePath) == false && undefined !== pobjQxUserCodePathEN.codePath && tzDataType.isString(pobjQxUserCodePathEN.codePath) === false)
{
 throw new Error(`(errid:Watl000417)字段[代码路径(codePath)]的值:[${pobjQxUserCodePathEN.codePath}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.codePathBackup) == false && undefined !== pobjQxUserCodePathEN.codePathBackup && tzDataType.isString(pobjQxUserCodePathEN.codePathBackup) === false)
{
 throw new Error(`(errid:Watl000417)字段[备份代码路径(codePathBackup)]的值:[${pobjQxUserCodePathEN.codePathBackup}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (null != pobjQxUserCodePathEN.isTemplate && undefined !== pobjQxUserCodePathEN.isTemplate && tzDataType.isBoolean(pobjQxUserCodePathEN.isTemplate) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否模板(isTemplate)]的值:[${pobjQxUserCodePathEN.isTemplate}], 非法,应该为布尔型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.updDate) == false && undefined !== pobjQxUserCodePathEN.updDate && tzDataType.isString(pobjQxUserCodePathEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxUserCodePathEN.updDate}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.updUserId) == false && undefined !== pobjQxUserCodePathEN.updUserId && tzDataType.isString(pobjQxUserCodePathEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjQxUserCodePathEN.updUserId}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserCodePathEN.memo) == false && undefined !== pobjQxUserCodePathEN.memo && tzDataType.isString(pobjQxUserCodePathEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxUserCodePathEN.memo}], 非法,应该为字符型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
if (null != pobjQxUserCodePathEN.isGeneReport && undefined !== pobjQxUserCodePathEN.isGeneReport && tzDataType.isBoolean(pobjQxUserCodePathEN.isGeneReport) === false)
{
 throw new Error(`(errid:Watl000417)字段[IsGeneReport(isGeneReport)]的值:[${pobjQxUserCodePathEN.isGeneReport}], 非法,应该为布尔型(In 用户生成路径(QxUserCodePath))!(clsQxUserCodePathBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxUserCodePathEN.mId 
 || pobjQxUserCodePathEN.mId != null && pobjQxUserCodePathEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 用户生成路径)!(clsQxUserCodePathBL:CheckProperty4Update)`);
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
export  function QxUserCodePath_GetJSONStrByObj (pobjQxUserCodePathEN: clsQxUserCodePathEN): string
{
pobjQxUserCodePathEN.sfUpdFldSetStr = pobjQxUserCodePathEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUserCodePathEN);
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
export  function QxUserCodePath_GetObjLstByJSONStr (strJSON: string): Array<clsQxUserCodePathEN>
{
let arrQxUserCodePathObjLst = new Array<clsQxUserCodePathEN>();
if (strJSON === "")
{
return arrQxUserCodePathObjLst;
}
try
{
arrQxUserCodePathObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUserCodePathObjLst;
}
return arrQxUserCodePathObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUserCodePathObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUserCodePath_GetObjLstByJSONObjLst (arrQxUserCodePathObjLstS: Array<clsQxUserCodePathEN>): Array<clsQxUserCodePathEN>
{
const arrQxUserCodePathObjLst = new Array<clsQxUserCodePathEN>();
for (const objInFor of arrQxUserCodePathObjLstS) {
const obj1 = QxUserCodePath_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUserCodePathObjLst.push(obj1);
}
return arrQxUserCodePathObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserCodePath_GetObjByJSONStr (strJSON: string): clsQxUserCodePathEN
{
let pobjQxUserCodePathEN = new clsQxUserCodePathEN();
if (strJSON === "")
{
return pobjQxUserCodePathEN;
}
try
{
pobjQxUserCodePathEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUserCodePathEN;
}
return pobjQxUserCodePathEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUserCodePath_GetCombineCondition(objQxUserCodePathCond: clsQxUserCodePathEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_mId) == true)
{
const strComparisonOpmId:string = objQxUserCodePathCond.dicFldComparisonOp[clsQxUserCodePathEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsQxUserCodePathEN.con_mId, objQxUserCodePathCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxUserCodePathCond.dicFldComparisonOp[clsQxUserCodePathEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserCodePathEN.con_QxPrjId, objQxUserCodePathCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objQxUserCodePathCond.dicFldComparisonOp[clsQxUserCodePathEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserCodePathEN.con_UserId, objQxUserCodePathCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_QxCodeTypeId) == true)
{
const strComparisonOpQxCodeTypeId:string = objQxUserCodePathCond.dicFldComparisonOp[clsQxUserCodePathEN.con_QxCodeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserCodePathEN.con_QxCodeTypeId, objQxUserCodePathCond.qxCodeTypeId, strComparisonOpQxCodeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_CodePath) == true)
{
const strComparisonOpCodePath:string = objQxUserCodePathCond.dicFldComparisonOp[clsQxUserCodePathEN.con_CodePath];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserCodePathEN.con_CodePath, objQxUserCodePathCond.codePath, strComparisonOpCodePath);
}
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_CodePathBackup) == true)
{
const strComparisonOpCodePathBackup:string = objQxUserCodePathCond.dicFldComparisonOp[clsQxUserCodePathEN.con_CodePathBackup];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserCodePathEN.con_CodePathBackup, objQxUserCodePathCond.codePathBackup, strComparisonOpCodePathBackup);
}
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_IsTemplate) == true)
{
if (objQxUserCodePathCond.isTemplate == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUserCodePathEN.con_IsTemplate);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUserCodePathEN.con_IsTemplate);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxUserCodePathCond.dicFldComparisonOp[clsQxUserCodePathEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserCodePathEN.con_UpdDate, objQxUserCodePathCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objQxUserCodePathCond.dicFldComparisonOp[clsQxUserCodePathEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserCodePathEN.con_UpdUserId, objQxUserCodePathCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUserCodePathCond.dicFldComparisonOp[clsQxUserCodePathEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserCodePathEN.con_Memo, objQxUserCodePathCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objQxUserCodePathCond.dicFldComparisonOp, clsQxUserCodePathEN.con_IsGeneReport) == true)
{
if (objQxUserCodePathCond.isGeneReport == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUserCodePathEN.con_IsGeneReport);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUserCodePathEN.con_IsGeneReport);
}
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserCodePath(用户生成路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strQxCodeTypeId: 代码类型Id(要求唯一的字段)
 * @param strCodePath: 代码路径(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserCodePath_GetUniCondStr(objQxUserCodePathEN: clsQxUserCodePathEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxUserCodePathEN.qxPrjId);
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUserCodePathEN.userId);
 strWhereCond +=  Format(" and QxCodeTypeId = '{0}'", objQxUserCodePathEN.qxCodeTypeId);
 strWhereCond +=  Format(" and CodePath = '{0}'", objQxUserCodePathEN.codePath);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserCodePath(用户生成路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strQxCodeTypeId: 代码类型Id(要求唯一的字段)
 * @param strCodePath: 代码路径(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserCodePath_GetUniCondStr4Update(objQxUserCodePathEN: clsQxUserCodePathEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objQxUserCodePathEN.mId);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxUserCodePathEN.qxPrjId);
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUserCodePathEN.userId);
 strWhereCond +=  Format(" and QxCodeTypeId = '{0}'", objQxUserCodePathEN.qxCodeTypeId);
 strWhereCond +=  Format(" and CodePath = '{0}'", objQxUserCodePathEN.codePath);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUserCodePathENS:源对象
 * @param objQxUserCodePathENT:目标对象
*/
export  function QxUserCodePath_GetObjFromJsonObj(objQxUserCodePathENS: clsQxUserCodePathEN): clsQxUserCodePathEN 
{
 const objQxUserCodePathENT: clsQxUserCodePathEN = new clsQxUserCodePathEN();
ObjectAssign(objQxUserCodePathENT, objQxUserCodePathENS);
 return objQxUserCodePathENT;
}