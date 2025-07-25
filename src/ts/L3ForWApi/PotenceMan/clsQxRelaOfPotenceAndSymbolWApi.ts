
 /**
 * 类名:clsQxRelaOfPotenceAndSymbolWApi
 * 表名:QxRelaOfPotenceAndSymbol(00140020)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:04
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 权限编程标志关系(QxRelaOfPotenceAndSymbol)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsQxRelaOfPotenceAndSymbolEN } from "@/ts/L0Entity/PotenceMan/clsQxRelaOfPotenceAndSymbolEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxRelaOfPotenceAndSymbol_Controller = "QxRelaOfPotenceAndSymbolApi";
 export const qxRelaOfPotenceAndSymbol_ConstructorName = "qxRelaOfPotenceAndSymbol";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngRelaMid:关键字
 * @returns 对象
 **/
export  async function QxRelaOfPotenceAndSymbol_GetObjByRelaMidAsync(lngRelaMid: number): Promise<clsQxRelaOfPotenceAndSymbolEN|null>  
{
const strThisFuncName = "GetObjByRelaMidAsync";

if (lngRelaMid == 0)
{
  const strMsg = Format("参数:[lngRelaMid]不能为空!(In clsQxRelaOfPotenceAndSymbolWApi.GetObjByRelaMidAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByRelaMid";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngRelaMid,
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
const objQxRelaOfPotenceAndSymbol = QxRelaOfPotenceAndSymbol_GetObjFromJsonObj(returnObj);
return objQxRelaOfPotenceAndSymbol;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByRelaMidlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByRelaMidCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function QxRelaOfPotenceAndSymbol_SortFunDefa(a:clsQxRelaOfPotenceAndSymbolEN , b:clsQxRelaOfPotenceAndSymbolEN): number 
{
return a.relaMid-b.relaMid;
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
export  function QxRelaOfPotenceAndSymbol_SortFunDefa2Fld(a:clsQxRelaOfPotenceAndSymbolEN , b:clsQxRelaOfPotenceAndSymbolEN): number 
{
if (a.potenceId == b.potenceId) return a.symbolForProgramme.localeCompare(b.symbolForProgramme);
else return a.potenceId.localeCompare(b.potenceId);
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
export  function QxRelaOfPotenceAndSymbol_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxRelaOfPotenceAndSymbolEN.con_RelaMid:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return a.relaMid-b.relaMid;
}
case clsQxRelaOfPotenceAndSymbolEN.con_PotenceId:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return a.potenceId.localeCompare(b.potenceId);
}
case clsQxRelaOfPotenceAndSymbolEN.con_SymbolForProgramme:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return a.symbolForProgramme.localeCompare(b.symbolForProgramme);
}
case clsQxRelaOfPotenceAndSymbolEN.con_SymbolName:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
if (a.symbolName == null) return -1;
if (b.symbolName == null) return 1;
return a.symbolName.localeCompare(b.symbolName);
}
case clsQxRelaOfPotenceAndSymbolEN.con_Memo:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsQxRelaOfPotenceAndSymbolEN.con_QxPrjId:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxRelaOfPotenceAndSymbolEN.con_UpdDate:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQxRelaOfPotenceAndSymbolEN.con_UpdUserId:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return a.updUserId.localeCompare(b.updUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRelaOfPotenceAndSymbol]中不存在!(in ${ qxRelaOfPotenceAndSymbol_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxRelaOfPotenceAndSymbolEN.con_RelaMid:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return b.relaMid-a.relaMid;
}
case clsQxRelaOfPotenceAndSymbolEN.con_PotenceId:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return b.potenceId.localeCompare(a.potenceId);
}
case clsQxRelaOfPotenceAndSymbolEN.con_SymbolForProgramme:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return b.symbolForProgramme.localeCompare(a.symbolForProgramme);
}
case clsQxRelaOfPotenceAndSymbolEN.con_SymbolName:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
if (b.symbolName == null) return -1;
if (a.symbolName == null) return 1;
return b.symbolName.localeCompare(a.symbolName);
}
case clsQxRelaOfPotenceAndSymbolEN.con_Memo:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsQxRelaOfPotenceAndSymbolEN.con_QxPrjId:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxRelaOfPotenceAndSymbolEN.con_UpdDate:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQxRelaOfPotenceAndSymbolEN.con_UpdUserId:
return (a: clsQxRelaOfPotenceAndSymbolEN, b: clsQxRelaOfPotenceAndSymbolEN) => {
return b.updUserId.localeCompare(a.updUserId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRelaOfPotenceAndSymbol]中不存在!(in ${ qxRelaOfPotenceAndSymbol_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByRelaMidCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxRelaOfPotenceAndSymbol_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxRelaOfPotenceAndSymbolEN.con_RelaMid:
return (obj: clsQxRelaOfPotenceAndSymbolEN) => {
return obj.relaMid === value;
}
case clsQxRelaOfPotenceAndSymbolEN.con_PotenceId:
return (obj: clsQxRelaOfPotenceAndSymbolEN) => {
return obj.potenceId === value;
}
case clsQxRelaOfPotenceAndSymbolEN.con_SymbolForProgramme:
return (obj: clsQxRelaOfPotenceAndSymbolEN) => {
return obj.symbolForProgramme === value;
}
case clsQxRelaOfPotenceAndSymbolEN.con_SymbolName:
return (obj: clsQxRelaOfPotenceAndSymbolEN) => {
return obj.symbolName === value;
}
case clsQxRelaOfPotenceAndSymbolEN.con_Memo:
return (obj: clsQxRelaOfPotenceAndSymbolEN) => {
return obj.memo === value;
}
case clsQxRelaOfPotenceAndSymbolEN.con_QxPrjId:
return (obj: clsQxRelaOfPotenceAndSymbolEN) => {
return obj.qxPrjId === value;
}
case clsQxRelaOfPotenceAndSymbolEN.con_UpdDate:
return (obj: clsQxRelaOfPotenceAndSymbolEN) => {
return obj.updDate === value;
}
case clsQxRelaOfPotenceAndSymbolEN.con_UpdUserId:
return (obj: clsQxRelaOfPotenceAndSymbolEN) => {
return obj.updUserId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRelaOfPotenceAndSymbol]中不存在!(in ${ qxRelaOfPotenceAndSymbol_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxRelaOfPotenceAndSymbol__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRelaOfPotenceAndSymbol_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_GetFirstObjAsync(strWhereCond: string): Promise<clsQxRelaOfPotenceAndSymbolEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const objQxRelaOfPotenceAndSymbol = QxRelaOfPotenceAndSymbol_GetObjFromJsonObj(returnObj);
return objQxRelaOfPotenceAndSymbol;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxRelaOfPotenceAndSymbolEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRelaOfPotenceAndSymbol_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
 * @param arrRelaMid:关键字列表
 * @returns 对象列表
 **/
export  async function QxRelaOfPotenceAndSymbol_GetObjLstByRelaMidLstAsync(arrRelaMid: Array<string>): Promise<Array<clsQxRelaOfPotenceAndSymbolEN>>  
{
const strThisFuncName = "GetObjLstByRelaMidLstAsync";
const strAction = "GetObjLstByRelaMidLst";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRelaMid, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRelaOfPotenceAndSymbol_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByRelaMidLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxRelaOfPotenceAndSymbol_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxRelaOfPotenceAndSymbolEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRelaOfPotenceAndSymbol_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxRelaOfPotenceAndSymbolEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRelaOfPotenceAndSymbol_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxRelaOfPotenceAndSymbolEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxRelaOfPotenceAndSymbolEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRelaOfPotenceAndSymbol_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
 * @param lngRelaMid:关键字
 * @returns 获取删除的结果
 **/
export  async function QxRelaOfPotenceAndSymbol_DelRecordAsync(lngRelaMid: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngRelaMid);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
 * @param arrRelaMid:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxRelaOfPotenceAndSymbol_DelQxRelaOfPotenceAndSymbolsAsync(arrRelaMid: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxRelaOfPotenceAndSymbolsAsync";
const strAction = "DelQxRelaOfPotenceAndSymbols";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRelaMid, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_DelQxRelaOfPotenceAndSymbolsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxRelaOfPotenceAndSymbolsByCondAsync";
const strAction = "DelQxRelaOfPotenceAndSymbolsByCond";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
 * @param objQxRelaOfPotenceAndSymbolEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxRelaOfPotenceAndSymbol_AddNewRecordAsync(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxRelaOfPotenceAndSymbolEN);
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRelaOfPotenceAndSymbolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_AddNewObjSave(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxRelaOfPotenceAndSymbol_CheckPropertyNew(objQxRelaOfPotenceAndSymbolEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxRelaOfPotenceAndSymbol_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxRelaOfPotenceAndSymbol_CheckUniCond4Add(objQxRelaOfPotenceAndSymbolEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxRelaOfPotenceAndSymbol_AddNewRecordAsync(objQxRelaOfPotenceAndSymbolEN);
if (returnBool == true)
{
//QxRelaOfPotenceAndSymbol_ReFreshCache();
}
else
{
const strInfo = `添加[权限编程标志关系(QxRelaOfPotenceAndSymbol)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxRelaOfPotenceAndSymbolEN.relaMid.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxRelaOfPotenceAndSymbol_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxRelaOfPotenceAndSymbol_CheckUniCond4Add(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN): Promise<boolean>{
const strUniquenessCondition = QxRelaOfPotenceAndSymbol_GetUniCondStr(objQxRelaOfPotenceAndSymbolEN);
const bolIsExistCondition = await QxRelaOfPotenceAndSymbol_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxRelaOfPotenceAndSymbol_CheckUniCond4Update(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN): Promise<boolean>{
const strUniquenessCondition = QxRelaOfPotenceAndSymbol_GetUniCondStr4Update(objQxRelaOfPotenceAndSymbolEN);
const bolIsExistCondition = await QxRelaOfPotenceAndSymbol_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxRelaOfPotenceAndSymbol_UpdateObjSave(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr = objQxRelaOfPotenceAndSymbolEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxRelaOfPotenceAndSymbolEN.relaMid == 0 || objQxRelaOfPotenceAndSymbolEN.relaMid == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxRelaOfPotenceAndSymbol_CheckProperty4Update(objQxRelaOfPotenceAndSymbolEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxRelaOfPotenceAndSymbol_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxRelaOfPotenceAndSymbol_CheckUniCond4Update(objQxRelaOfPotenceAndSymbolEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxRelaOfPotenceAndSymbol_UpdateRecordAsync(objQxRelaOfPotenceAndSymbolEN);
if (returnBool == true)
{
//QxRelaOfPotenceAndSymbol_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxRelaOfPotenceAndSymbol_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxRelaOfPotenceAndSymbolEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxRelaOfPotenceAndSymbol_AddNewRecordWithReturnKeyAsync(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRelaOfPotenceAndSymbolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
 * @param objQxRelaOfPotenceAndSymbolEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxRelaOfPotenceAndSymbol_UpdateRecordAsync(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr === undefined || objQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr === null || objQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRelaOfPotenceAndSymbolEN.relaMid);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRelaOfPotenceAndSymbolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
 * @param objQxRelaOfPotenceAndSymbolEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxRelaOfPotenceAndSymbol_EditRecordExAsync(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr === undefined || objQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr === null || objQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRelaOfPotenceAndSymbolEN.relaMid);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRelaOfPotenceAndSymbolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
 * @param objQxRelaOfPotenceAndSymbolEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRelaOfPotenceAndSymbol_UpdateWithConditionAsync(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr === undefined || objQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr === null || objQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRelaOfPotenceAndSymbolEN.relaMid);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);
objQxRelaOfPotenceAndSymbolEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRelaOfPotenceAndSymbolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
 * @param lngRelaMid:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxRelaOfPotenceAndSymbol_IsExistAsync(lngRelaMid: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngRelaMid
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  async function QxRelaOfPotenceAndSymbol_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxRelaOfPotenceAndSymbol_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRelaOfPotenceAndSymbol_ConstructorName, strThisFuncName);
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
export  function QxRelaOfPotenceAndSymbol_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxRelaOfPotenceAndSymbol_CheckPropertyNew(pobjQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.potenceId) === true 
 || pobjQxRelaOfPotenceAndSymbolEN.potenceId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[权限ID]不能为空(In 权限编程标志关系)!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme) === true )
{
 throw new Error(`(errid:Watl000411)字段[编程标志]不能为空(In 权限编程标志关系)!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) === true 
 || pobjQxRelaOfPotenceAndSymbolEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 权限编程标志关系)!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.updUserId) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改用户Id]不能为空(In 权限编程标志关系)!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.potenceId) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.potenceId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[权限ID(potenceId)]的长度不能超过8(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.potenceId}(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme) > 20)
{
 throw new Error(`(errid:Watl000413)字段[编程标志(symbolForProgramme)]的长度不能超过20(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme}(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.symbolName) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.symbolName) > 200)
{
 throw new Error(`(errid:Watl000413)字段[标志名称(symbolName)]的长度不能超过200(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.symbolName}(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.memo) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.memo}(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.qxPrjId}(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.updDate) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.updDate}(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.updUserId) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.updUserId}(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxRelaOfPotenceAndSymbolEN.relaMid && undefined !== pobjQxRelaOfPotenceAndSymbolEN.relaMid && tzDataType.isNumber(pobjQxRelaOfPotenceAndSymbolEN.relaMid) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(relaMid)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.relaMid}], 非法,应该为数值型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.potenceId) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.potenceId && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.potenceId) === false)
{
 throw new Error(`(errid:Watl000414)字段[权限ID(potenceId)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.potenceId}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme) === false)
{
 throw new Error(`(errid:Watl000414)字段[编程标志(symbolForProgramme)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.symbolName) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.symbolName && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.symbolName) === false)
{
 throw new Error(`(errid:Watl000414)字段[标志名称(symbolName)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.symbolName}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.memo) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.memo && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.memo}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.qxPrjId && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.qxPrjId}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.updDate) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.updDate && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.updDate}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.updUserId) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.updUserId && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.updUserId}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.potenceId) == false && pobjQxRelaOfPotenceAndSymbolEN.potenceId != '[nuull]' && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.potenceId) !=  8)
{
 throw ("(errid:Watl000415)字段[权限ID]作为外键字段,长度应该为8(In 权限编程标志关系)!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) == false && pobjQxRelaOfPotenceAndSymbolEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 权限编程标志关系)!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxRelaOfPotenceAndSymbol_CheckProperty4Update(pobjQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.potenceId) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.potenceId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[权限ID(potenceId)]的长度不能超过8(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.potenceId}(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme) > 20)
{
 throw new Error(`(errid:Watl000416)字段[编程标志(symbolForProgramme)]的长度不能超过20(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme}(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.symbolName) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.symbolName) > 200)
{
 throw new Error(`(errid:Watl000416)字段[标志名称(symbolName)]的长度不能超过200(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.symbolName}(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.memo) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.memo}(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.qxPrjId}(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.updDate) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.updDate}(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.updUserId) == false && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!值:${pobjQxRelaOfPotenceAndSymbolEN.updUserId}(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxRelaOfPotenceAndSymbolEN.relaMid && undefined !== pobjQxRelaOfPotenceAndSymbolEN.relaMid && tzDataType.isNumber(pobjQxRelaOfPotenceAndSymbolEN.relaMid) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(relaMid)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.relaMid}], 非法,应该为数值型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.potenceId) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.potenceId && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.potenceId) === false)
{
 throw new Error(`(errid:Watl000417)字段[权限ID(potenceId)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.potenceId}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme) === false)
{
 throw new Error(`(errid:Watl000417)字段[编程标志(symbolForProgramme)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.symbolForProgramme}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.symbolName) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.symbolName && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.symbolName) === false)
{
 throw new Error(`(errid:Watl000417)字段[标志名称(symbolName)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.symbolName}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.memo) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.memo && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.memo}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.qxPrjId && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.qxPrjId}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.updDate) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.updDate && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.updDate}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.updUserId) == false && undefined !== pobjQxRelaOfPotenceAndSymbolEN.updUserId && tzDataType.isString(pobjQxRelaOfPotenceAndSymbolEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjQxRelaOfPotenceAndSymbolEN.updUserId}], 非法,应该为字符型(In 权限编程标志关系(QxRelaOfPotenceAndSymbol))!(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxRelaOfPotenceAndSymbolEN.relaMid 
 || pobjQxRelaOfPotenceAndSymbolEN.relaMid != null && pobjQxRelaOfPotenceAndSymbolEN.relaMid.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 权限编程标志关系)!(clsQxRelaOfPotenceAndSymbolBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.potenceId) == false && pobjQxRelaOfPotenceAndSymbolEN.potenceId != '[nuull]' && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.potenceId) !=  8)
{
 throw ("(errid:Watl000418)字段[权限ID]作为外键字段,长度应该为8(In 权限编程标志关系)!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) == false && pobjQxRelaOfPotenceAndSymbolEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxRelaOfPotenceAndSymbolEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 权限编程标志关系)!(clsQxRelaOfPotenceAndSymbolBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxRelaOfPotenceAndSymbol_GetJSONStrByObj (pobjQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN): string
{
pobjQxRelaOfPotenceAndSymbolEN.sfUpdFldSetStr = pobjQxRelaOfPotenceAndSymbolEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxRelaOfPotenceAndSymbolEN);
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
export  function QxRelaOfPotenceAndSymbol_GetObjLstByJSONStr (strJSON: string): Array<clsQxRelaOfPotenceAndSymbolEN>
{
let arrQxRelaOfPotenceAndSymbolObjLst = new Array<clsQxRelaOfPotenceAndSymbolEN>();
if (strJSON === "")
{
return arrQxRelaOfPotenceAndSymbolObjLst;
}
try
{
arrQxRelaOfPotenceAndSymbolObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxRelaOfPotenceAndSymbolObjLst;
}
return arrQxRelaOfPotenceAndSymbolObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxRelaOfPotenceAndSymbolObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxRelaOfPotenceAndSymbol_GetObjLstByJSONObjLst (arrQxRelaOfPotenceAndSymbolObjLstS: Array<clsQxRelaOfPotenceAndSymbolEN>): Array<clsQxRelaOfPotenceAndSymbolEN>
{
const arrQxRelaOfPotenceAndSymbolObjLst = new Array<clsQxRelaOfPotenceAndSymbolEN>();
for (const objInFor of arrQxRelaOfPotenceAndSymbolObjLstS) {
const obj1 = QxRelaOfPotenceAndSymbol_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxRelaOfPotenceAndSymbolObjLst.push(obj1);
}
return arrQxRelaOfPotenceAndSymbolObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxRelaOfPotenceAndSymbol_GetObjByJSONStr (strJSON: string): clsQxRelaOfPotenceAndSymbolEN
{
let pobjQxRelaOfPotenceAndSymbolEN = new clsQxRelaOfPotenceAndSymbolEN();
if (strJSON === "")
{
return pobjQxRelaOfPotenceAndSymbolEN;
}
try
{
pobjQxRelaOfPotenceAndSymbolEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxRelaOfPotenceAndSymbolEN;
}
return pobjQxRelaOfPotenceAndSymbolEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxRelaOfPotenceAndSymbol_GetCombineCondition(objQxRelaOfPotenceAndSymbolCond: clsQxRelaOfPotenceAndSymbolEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp, clsQxRelaOfPotenceAndSymbolEN.con_RelaMid) == true)
{
const strComparisonOpRelaMid:string = objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp[clsQxRelaOfPotenceAndSymbolEN.con_RelaMid];
strWhereCond += Format(" And {0} {2} {1}", clsQxRelaOfPotenceAndSymbolEN.con_RelaMid, objQxRelaOfPotenceAndSymbolCond.relaMid, strComparisonOpRelaMid);
}
if (Object.prototype.hasOwnProperty.call(objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp, clsQxRelaOfPotenceAndSymbolEN.con_PotenceId) == true)
{
const strComparisonOpPotenceId:string = objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp[clsQxRelaOfPotenceAndSymbolEN.con_PotenceId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRelaOfPotenceAndSymbolEN.con_PotenceId, objQxRelaOfPotenceAndSymbolCond.potenceId, strComparisonOpPotenceId);
}
if (Object.prototype.hasOwnProperty.call(objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp, clsQxRelaOfPotenceAndSymbolEN.con_SymbolForProgramme) == true)
{
const strComparisonOpSymbolForProgramme:string = objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp[clsQxRelaOfPotenceAndSymbolEN.con_SymbolForProgramme];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRelaOfPotenceAndSymbolEN.con_SymbolForProgramme, objQxRelaOfPotenceAndSymbolCond.symbolForProgramme, strComparisonOpSymbolForProgramme);
}
if (Object.prototype.hasOwnProperty.call(objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp, clsQxRelaOfPotenceAndSymbolEN.con_SymbolName) == true)
{
const strComparisonOpSymbolName:string = objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp[clsQxRelaOfPotenceAndSymbolEN.con_SymbolName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRelaOfPotenceAndSymbolEN.con_SymbolName, objQxRelaOfPotenceAndSymbolCond.symbolName, strComparisonOpSymbolName);
}
if (Object.prototype.hasOwnProperty.call(objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp, clsQxRelaOfPotenceAndSymbolEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp[clsQxRelaOfPotenceAndSymbolEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRelaOfPotenceAndSymbolEN.con_Memo, objQxRelaOfPotenceAndSymbolCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp, clsQxRelaOfPotenceAndSymbolEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp[clsQxRelaOfPotenceAndSymbolEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRelaOfPotenceAndSymbolEN.con_QxPrjId, objQxRelaOfPotenceAndSymbolCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp, clsQxRelaOfPotenceAndSymbolEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp[clsQxRelaOfPotenceAndSymbolEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRelaOfPotenceAndSymbolEN.con_UpdDate, objQxRelaOfPotenceAndSymbolCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp, clsQxRelaOfPotenceAndSymbolEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objQxRelaOfPotenceAndSymbolCond.dicFldComparisonOp[clsQxRelaOfPotenceAndSymbolEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRelaOfPotenceAndSymbolEN.con_UpdUserId, objQxRelaOfPotenceAndSymbolCond.updUserId, strComparisonOpUpdUserId);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxRelaOfPotenceAndSymbol(权限编程标志关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPotenceId: 权限ID(要求唯一的字段)
 * @param strSymbolForProgramme: 编程标志(要求唯一的字段)
 * @param strSymbolName: 标志名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxRelaOfPotenceAndSymbol_GetUniCondStr(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and PotenceId = '{0}'", objQxRelaOfPotenceAndSymbolEN.potenceId);
 strWhereCond +=  Format(" and SymbolForProgramme = '{0}'", objQxRelaOfPotenceAndSymbolEN.symbolForProgramme);
 strWhereCond +=  Format(" and SymbolName = '{0}'", objQxRelaOfPotenceAndSymbolEN.symbolName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxRelaOfPotenceAndSymbol(权限编程标志关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPotenceId: 权限ID(要求唯一的字段)
 * @param strSymbolForProgramme: 编程标志(要求唯一的字段)
 * @param strSymbolName: 标志名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxRelaOfPotenceAndSymbol_GetUniCondStr4Update(objQxRelaOfPotenceAndSymbolEN: clsQxRelaOfPotenceAndSymbolEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and RelaMid <> '{0}'", objQxRelaOfPotenceAndSymbolEN.relaMid);
 strWhereCond +=  Format(" and PotenceId = '{0}'", objQxRelaOfPotenceAndSymbolEN.potenceId);
 strWhereCond +=  Format(" and SymbolForProgramme = '{0}'", objQxRelaOfPotenceAndSymbolEN.symbolForProgramme);
 strWhereCond +=  Format(" and SymbolName = '{0}'", objQxRelaOfPotenceAndSymbolEN.symbolName);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxRelaOfPotenceAndSymbolENS:源对象
 * @param objQxRelaOfPotenceAndSymbolENT:目标对象
*/
export  function QxRelaOfPotenceAndSymbol_GetObjFromJsonObj(objQxRelaOfPotenceAndSymbolENS: clsQxRelaOfPotenceAndSymbolEN): clsQxRelaOfPotenceAndSymbolEN 
{
 const objQxRelaOfPotenceAndSymbolENT: clsQxRelaOfPotenceAndSymbolEN = new clsQxRelaOfPotenceAndSymbolEN();
ObjectAssign(objQxRelaOfPotenceAndSymbolENT, objQxRelaOfPotenceAndSymbolENS);
 return objQxRelaOfPotenceAndSymbolENT;
}