
 /**
 * 类名:clsQxPrjFileRelaWApi
 * 表名:QxPrjFileRela(00140054)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:37
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
 * 项目相关文件(QxPrjFileRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsQxPrjFileRelaEN } from "@/ts/L0Entity/PrjFileDownLoad/clsQxPrjFileRelaEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxPrjFileRela_Controller = "QxPrjFileRelaApi";
 export const qxPrjFileRela_ConstructorName = "qxPrjFileRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function QxPrjFileRela_GetObjBymIdAsync(lngmId: number): Promise<clsQxPrjFileRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxPrjFileRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const objQxPrjFileRela = QxPrjFileRela_GetObjFromJsonObj(returnObj);
return objQxPrjFileRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  function QxPrjFileRela_SortFunDefa(a:clsQxPrjFileRelaEN , b:clsQxPrjFileRelaEN): number 
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
export  function QxPrjFileRela_SortFunDefa2Fld(a:clsQxPrjFileRelaEN , b:clsQxPrjFileRelaEN): number 
{
if (a.qxPrjId == b.qxPrjId) return a.fileName.localeCompare(b.fileName);
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
export  function QxPrjFileRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxPrjFileRelaEN.con_mId:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return a.mId-b.mId;
}
case clsQxPrjFileRelaEN.con_QxPrjId:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxPrjFileRelaEN.con_FileName:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return a.fileName.localeCompare(b.fileName);
}
case clsQxPrjFileRelaEN.con_FilePath:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return a.filePath.localeCompare(b.filePath);
}
case clsQxPrjFileRelaEN.con_IsNeedDownLoad:
return (a: clsQxPrjFileRelaEN) => {
if (a.isNeedDownLoad == true) return 1;
else return -1
}
case clsQxPrjFileRelaEN.con_Version:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return a.version.localeCompare(b.version);
}
case clsQxPrjFileRelaEN.con_UpdDate:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQxPrjFileRelaEN.con_UpdUserId:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return a.updUserId.localeCompare(b.updUserId);
}
case clsQxPrjFileRelaEN.con_Memo:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjFileRela]中不存在!(in ${ qxPrjFileRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxPrjFileRelaEN.con_mId:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return b.mId-a.mId;
}
case clsQxPrjFileRelaEN.con_QxPrjId:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxPrjFileRelaEN.con_FileName:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return b.fileName.localeCompare(a.fileName);
}
case clsQxPrjFileRelaEN.con_FilePath:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return b.filePath.localeCompare(a.filePath);
}
case clsQxPrjFileRelaEN.con_IsNeedDownLoad:
return (b: clsQxPrjFileRelaEN) => {
if (b.isNeedDownLoad == true) return 1;
else return -1
}
case clsQxPrjFileRelaEN.con_Version:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return b.version.localeCompare(a.version);
}
case clsQxPrjFileRelaEN.con_UpdDate:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQxPrjFileRelaEN.con_UpdUserId:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
return b.updUserId.localeCompare(a.updUserId);
}
case clsQxPrjFileRelaEN.con_Memo:
return (a: clsQxPrjFileRelaEN, b: clsQxPrjFileRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjFileRela]中不存在!(in ${ qxPrjFileRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxPrjFileRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxPrjFileRelaEN.con_mId:
return (obj: clsQxPrjFileRelaEN) => {
return obj.mId === value;
}
case clsQxPrjFileRelaEN.con_QxPrjId:
return (obj: clsQxPrjFileRelaEN) => {
return obj.qxPrjId === value;
}
case clsQxPrjFileRelaEN.con_FileName:
return (obj: clsQxPrjFileRelaEN) => {
return obj.fileName === value;
}
case clsQxPrjFileRelaEN.con_FilePath:
return (obj: clsQxPrjFileRelaEN) => {
return obj.filePath === value;
}
case clsQxPrjFileRelaEN.con_IsNeedDownLoad:
return (obj: clsQxPrjFileRelaEN) => {
return obj.isNeedDownLoad === value;
}
case clsQxPrjFileRelaEN.con_Version:
return (obj: clsQxPrjFileRelaEN) => {
return obj.version === value;
}
case clsQxPrjFileRelaEN.con_UpdDate:
return (obj: clsQxPrjFileRelaEN) => {
return obj.updDate === value;
}
case clsQxPrjFileRelaEN.con_UpdUserId:
return (obj: clsQxPrjFileRelaEN) => {
return obj.updUserId === value;
}
case clsQxPrjFileRelaEN.con_Memo:
return (obj: clsQxPrjFileRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjFileRela]中不存在!(in ${ qxPrjFileRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxPrjFileRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPrjFileRela_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_GetFirstObjAsync(strWhereCond: string): Promise<clsQxPrjFileRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const objQxPrjFileRela = QxPrjFileRela_GetObjFromJsonObj(returnObj);
return objQxPrjFileRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxPrjFileRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjFileRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsQxPrjFileRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjFileRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxPrjFileRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjFileRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxPrjFileRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjFileRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxPrjFileRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxPrjFileRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjFileRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_DelQxPrjFileRelasAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxPrjFileRelasAsync";
const strAction = "DelQxPrjFileRelas";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_DelQxPrjFileRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxPrjFileRelasByCondAsync";
const strAction = "DelQxPrjFileRelasByCond";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
 * @param objQxPrjFileRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxPrjFileRela_AddNewRecordAsync(objQxPrjFileRelaEN: clsQxPrjFileRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxPrjFileRelaEN);
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjFileRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_AddNewObjSave(objQxPrjFileRelaEN: clsQxPrjFileRelaEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxPrjFileRela_CheckPropertyNew(objQxPrjFileRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxPrjFileRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxPrjFileRela_CheckUniCond4Add(objQxPrjFileRelaEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxPrjFileRela_AddNewRecordAsync(objQxPrjFileRelaEN);
if (returnBool == true)
{
//QxPrjFileRela_ReFreshCache();
}
else
{
const strInfo = `添加[项目相关文件(QxPrjFileRela)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxPrjFileRelaEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxPrjFileRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxPrjFileRela_CheckUniCond4Add(objQxPrjFileRelaEN: clsQxPrjFileRelaEN): Promise<boolean>{
const strUniquenessCondition = QxPrjFileRela_GetUniCondStr(objQxPrjFileRelaEN);
const bolIsExistCondition = await QxPrjFileRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxPrjFileRela_CheckUniCond4Update(objQxPrjFileRelaEN: clsQxPrjFileRelaEN): Promise<boolean>{
const strUniquenessCondition = QxPrjFileRela_GetUniCondStr4Update(objQxPrjFileRelaEN);
const bolIsExistCondition = await QxPrjFileRela_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxPrjFileRela_UpdateObjSave(objQxPrjFileRelaEN: clsQxPrjFileRelaEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxPrjFileRelaEN.sfUpdFldSetStr = objQxPrjFileRelaEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxPrjFileRelaEN.mId == 0 || objQxPrjFileRelaEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxPrjFileRela_CheckProperty4Update(objQxPrjFileRelaEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxPrjFileRela_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxPrjFileRela_CheckUniCond4Update(objQxPrjFileRelaEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxPrjFileRela_UpdateRecordAsync(objQxPrjFileRelaEN);
if (returnBool == true)
{
//QxPrjFileRela_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxPrjFileRela_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxPrjFileRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxPrjFileRela_AddNewRecordWithReturnKeyAsync(objQxPrjFileRelaEN: clsQxPrjFileRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjFileRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
 * @param objQxPrjFileRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxPrjFileRela_UpdateRecordAsync(objQxPrjFileRelaEN: clsQxPrjFileRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxPrjFileRelaEN.sfUpdFldSetStr === undefined || objQxPrjFileRelaEN.sfUpdFldSetStr === null || objQxPrjFileRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjFileRelaEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjFileRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
 * @param objQxPrjFileRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxPrjFileRela_EditRecordExAsync(objQxPrjFileRelaEN: clsQxPrjFileRelaEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxPrjFileRelaEN.sfUpdFldSetStr === undefined || objQxPrjFileRelaEN.sfUpdFldSetStr === null || objQxPrjFileRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjFileRelaEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjFileRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
 * @param objQxPrjFileRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPrjFileRela_UpdateWithConditionAsync(objQxPrjFileRelaEN: clsQxPrjFileRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxPrjFileRelaEN.sfUpdFldSetStr === undefined || objQxPrjFileRelaEN.sfUpdFldSetStr === null || objQxPrjFileRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjFileRelaEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);
objQxPrjFileRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjFileRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  async function QxPrjFileRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxPrjFileRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjFileRela_ConstructorName, strThisFuncName);
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
export  function QxPrjFileRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxPrjFileRela_CheckPropertyNew(pobjQxPrjFileRelaEN: clsQxPrjFileRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.qxPrjId) === true 
 || pobjQxPrjFileRelaEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 项目相关文件)!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.fileName) === true )
{
 throw new Error(`(errid:Watl000411)字段[文件名]不能为空(In 项目相关文件)!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.filePath) === true )
{
 throw new Error(`(errid:Watl000411)字段[文件路径]不能为空(In 项目相关文件)!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (null === pobjQxPrjFileRelaEN.isNeedDownLoad 
 || pobjQxPrjFileRelaEN.isNeedDownLoad != null && pobjQxPrjFileRelaEN.isNeedDownLoad.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否需要下载]不能为空(In 项目相关文件)!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.version) === true )
{
 throw new Error(`(errid:Watl000411)字段[版本]不能为空(In 项目相关文件)!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.updUserId) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改用户Id]不能为空(In 项目相关文件)!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.qxPrjId) == false && GetStrLen(pobjQxPrjFileRelaEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.qxPrjId}(clsQxPrjFileRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.fileName) == false && GetStrLen(pobjQxPrjFileRelaEN.fileName) > 500)
{
 throw new Error(`(errid:Watl000413)字段[文件名(fileName)]的长度不能超过500(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.fileName}(clsQxPrjFileRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.filePath) == false && GetStrLen(pobjQxPrjFileRelaEN.filePath) > 500)
{
 throw new Error(`(errid:Watl000413)字段[文件路径(filePath)]的长度不能超过500(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.filePath}(clsQxPrjFileRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.version) == false && GetStrLen(pobjQxPrjFileRelaEN.version) > 30)
{
 throw new Error(`(errid:Watl000413)字段[版本(version)]的长度不能超过30(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.version}(clsQxPrjFileRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.updDate) == false && GetStrLen(pobjQxPrjFileRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.updDate}(clsQxPrjFileRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.updUserId) == false && GetStrLen(pobjQxPrjFileRelaEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.updUserId}(clsQxPrjFileRelaBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.memo) == false && GetStrLen(pobjQxPrjFileRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.memo}(clsQxPrjFileRelaBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxPrjFileRelaEN.mId && undefined !== pobjQxPrjFileRelaEN.mId && tzDataType.isNumber(pobjQxPrjFileRelaEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(mId)]的值:[${pobjQxPrjFileRelaEN.mId}], 非法,应该为数值型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.qxPrjId) == false && undefined !== pobjQxPrjFileRelaEN.qxPrjId && tzDataType.isString(pobjQxPrjFileRelaEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxPrjFileRelaEN.qxPrjId}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.fileName) == false && undefined !== pobjQxPrjFileRelaEN.fileName && tzDataType.isString(pobjQxPrjFileRelaEN.fileName) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件名(fileName)]的值:[${pobjQxPrjFileRelaEN.fileName}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.filePath) == false && undefined !== pobjQxPrjFileRelaEN.filePath && tzDataType.isString(pobjQxPrjFileRelaEN.filePath) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件路径(filePath)]的值:[${pobjQxPrjFileRelaEN.filePath}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (null != pobjQxPrjFileRelaEN.isNeedDownLoad && undefined !== pobjQxPrjFileRelaEN.isNeedDownLoad && tzDataType.isBoolean(pobjQxPrjFileRelaEN.isNeedDownLoad) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否需要下载(isNeedDownLoad)]的值:[${pobjQxPrjFileRelaEN.isNeedDownLoad}], 非法,应该为布尔型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.version) == false && undefined !== pobjQxPrjFileRelaEN.version && tzDataType.isString(pobjQxPrjFileRelaEN.version) === false)
{
 throw new Error(`(errid:Watl000414)字段[版本(version)]的值:[${pobjQxPrjFileRelaEN.version}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.updDate) == false && undefined !== pobjQxPrjFileRelaEN.updDate && tzDataType.isString(pobjQxPrjFileRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxPrjFileRelaEN.updDate}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.updUserId) == false && undefined !== pobjQxPrjFileRelaEN.updUserId && tzDataType.isString(pobjQxPrjFileRelaEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjQxPrjFileRelaEN.updUserId}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.memo) == false && undefined !== pobjQxPrjFileRelaEN.memo && tzDataType.isString(pobjQxPrjFileRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxPrjFileRelaEN.memo}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxPrjFileRela_CheckProperty4Update(pobjQxPrjFileRelaEN: clsQxPrjFileRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.qxPrjId) == false && GetStrLen(pobjQxPrjFileRelaEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.qxPrjId}(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.fileName) == false && GetStrLen(pobjQxPrjFileRelaEN.fileName) > 500)
{
 throw new Error(`(errid:Watl000416)字段[文件名(fileName)]的长度不能超过500(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.fileName}(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.filePath) == false && GetStrLen(pobjQxPrjFileRelaEN.filePath) > 500)
{
 throw new Error(`(errid:Watl000416)字段[文件路径(filePath)]的长度不能超过500(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.filePath}(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.version) == false && GetStrLen(pobjQxPrjFileRelaEN.version) > 30)
{
 throw new Error(`(errid:Watl000416)字段[版本(version)]的长度不能超过30(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.version}(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.updDate) == false && GetStrLen(pobjQxPrjFileRelaEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.updDate}(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.updUserId) == false && GetStrLen(pobjQxPrjFileRelaEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.updUserId}(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.memo) == false && GetStrLen(pobjQxPrjFileRelaEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 项目相关文件(QxPrjFileRela))!值:${pobjQxPrjFileRelaEN.memo}(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxPrjFileRelaEN.mId && undefined !== pobjQxPrjFileRelaEN.mId && tzDataType.isNumber(pobjQxPrjFileRelaEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(mId)]的值:[${pobjQxPrjFileRelaEN.mId}], 非法,应该为数值型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.qxPrjId) == false && undefined !== pobjQxPrjFileRelaEN.qxPrjId && tzDataType.isString(pobjQxPrjFileRelaEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxPrjFileRelaEN.qxPrjId}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.fileName) == false && undefined !== pobjQxPrjFileRelaEN.fileName && tzDataType.isString(pobjQxPrjFileRelaEN.fileName) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件名(fileName)]的值:[${pobjQxPrjFileRelaEN.fileName}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.filePath) == false && undefined !== pobjQxPrjFileRelaEN.filePath && tzDataType.isString(pobjQxPrjFileRelaEN.filePath) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件路径(filePath)]的值:[${pobjQxPrjFileRelaEN.filePath}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (null != pobjQxPrjFileRelaEN.isNeedDownLoad && undefined !== pobjQxPrjFileRelaEN.isNeedDownLoad && tzDataType.isBoolean(pobjQxPrjFileRelaEN.isNeedDownLoad) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否需要下载(isNeedDownLoad)]的值:[${pobjQxPrjFileRelaEN.isNeedDownLoad}], 非法,应该为布尔型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.version) == false && undefined !== pobjQxPrjFileRelaEN.version && tzDataType.isString(pobjQxPrjFileRelaEN.version) === false)
{
 throw new Error(`(errid:Watl000417)字段[版本(version)]的值:[${pobjQxPrjFileRelaEN.version}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.updDate) == false && undefined !== pobjQxPrjFileRelaEN.updDate && tzDataType.isString(pobjQxPrjFileRelaEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxPrjFileRelaEN.updDate}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.updUserId) == false && undefined !== pobjQxPrjFileRelaEN.updUserId && tzDataType.isString(pobjQxPrjFileRelaEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjQxPrjFileRelaEN.updUserId}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjFileRelaEN.memo) == false && undefined !== pobjQxPrjFileRelaEN.memo && tzDataType.isString(pobjQxPrjFileRelaEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxPrjFileRelaEN.memo}], 非法,应该为字符型(In 项目相关文件(QxPrjFileRela))!(clsQxPrjFileRelaBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxPrjFileRelaEN.mId 
 || pobjQxPrjFileRelaEN.mId != null && pobjQxPrjFileRelaEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 项目相关文件)!(clsQxPrjFileRelaBL:CheckProperty4Update)`);
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
export  function QxPrjFileRela_GetJSONStrByObj (pobjQxPrjFileRelaEN: clsQxPrjFileRelaEN): string
{
pobjQxPrjFileRelaEN.sfUpdFldSetStr = pobjQxPrjFileRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxPrjFileRelaEN);
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
export  function QxPrjFileRela_GetObjLstByJSONStr (strJSON: string): Array<clsQxPrjFileRelaEN>
{
let arrQxPrjFileRelaObjLst = new Array<clsQxPrjFileRelaEN>();
if (strJSON === "")
{
return arrQxPrjFileRelaObjLst;
}
try
{
arrQxPrjFileRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxPrjFileRelaObjLst;
}
return arrQxPrjFileRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxPrjFileRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxPrjFileRela_GetObjLstByJSONObjLst (arrQxPrjFileRelaObjLstS: Array<clsQxPrjFileRelaEN>): Array<clsQxPrjFileRelaEN>
{
const arrQxPrjFileRelaObjLst = new Array<clsQxPrjFileRelaEN>();
for (const objInFor of arrQxPrjFileRelaObjLstS) {
const obj1 = QxPrjFileRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxPrjFileRelaObjLst.push(obj1);
}
return arrQxPrjFileRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxPrjFileRela_GetObjByJSONStr (strJSON: string): clsQxPrjFileRelaEN
{
let pobjQxPrjFileRelaEN = new clsQxPrjFileRelaEN();
if (strJSON === "")
{
return pobjQxPrjFileRelaEN;
}
try
{
pobjQxPrjFileRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxPrjFileRelaEN;
}
return pobjQxPrjFileRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxPrjFileRela_GetCombineCondition(objQxPrjFileRelaCond: clsQxPrjFileRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxPrjFileRelaCond.dicFldComparisonOp, clsQxPrjFileRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objQxPrjFileRelaCond.dicFldComparisonOp[clsQxPrjFileRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsQxPrjFileRelaEN.con_mId, objQxPrjFileRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjFileRelaCond.dicFldComparisonOp, clsQxPrjFileRelaEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxPrjFileRelaCond.dicFldComparisonOp[clsQxPrjFileRelaEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjFileRelaEN.con_QxPrjId, objQxPrjFileRelaCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjFileRelaCond.dicFldComparisonOp, clsQxPrjFileRelaEN.con_FileName) == true)
{
const strComparisonOpFileName:string = objQxPrjFileRelaCond.dicFldComparisonOp[clsQxPrjFileRelaEN.con_FileName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjFileRelaEN.con_FileName, objQxPrjFileRelaCond.fileName, strComparisonOpFileName);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjFileRelaCond.dicFldComparisonOp, clsQxPrjFileRelaEN.con_FilePath) == true)
{
const strComparisonOpFilePath:string = objQxPrjFileRelaCond.dicFldComparisonOp[clsQxPrjFileRelaEN.con_FilePath];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjFileRelaEN.con_FilePath, objQxPrjFileRelaCond.filePath, strComparisonOpFilePath);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjFileRelaCond.dicFldComparisonOp, clsQxPrjFileRelaEN.con_IsNeedDownLoad) == true)
{
if (objQxPrjFileRelaCond.isNeedDownLoad == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxPrjFileRelaEN.con_IsNeedDownLoad);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxPrjFileRelaEN.con_IsNeedDownLoad);
}
}
if (Object.prototype.hasOwnProperty.call(objQxPrjFileRelaCond.dicFldComparisonOp, clsQxPrjFileRelaEN.con_Version) == true)
{
const strComparisonOpVersion:string = objQxPrjFileRelaCond.dicFldComparisonOp[clsQxPrjFileRelaEN.con_Version];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjFileRelaEN.con_Version, objQxPrjFileRelaCond.version, strComparisonOpVersion);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjFileRelaCond.dicFldComparisonOp, clsQxPrjFileRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxPrjFileRelaCond.dicFldComparisonOp[clsQxPrjFileRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjFileRelaEN.con_UpdDate, objQxPrjFileRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjFileRelaCond.dicFldComparisonOp, clsQxPrjFileRelaEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objQxPrjFileRelaCond.dicFldComparisonOp[clsQxPrjFileRelaEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjFileRelaEN.con_UpdUserId, objQxPrjFileRelaCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjFileRelaCond.dicFldComparisonOp, clsQxPrjFileRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxPrjFileRelaCond.dicFldComparisonOp[clsQxPrjFileRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjFileRelaEN.con_Memo, objQxPrjFileRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPrjFileRela(项目相关文件),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @param strFileName: 文件名(要求唯一的字段)
 * @param strFilePath: 文件路径(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPrjFileRela_GetUniCondStr(objQxPrjFileRelaEN: clsQxPrjFileRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxPrjFileRelaEN.qxPrjId);
 strWhereCond +=  Format(" and FileName = '{0}'", objQxPrjFileRelaEN.fileName);
 strWhereCond +=  Format(" and FilePath = '{0}'", objQxPrjFileRelaEN.filePath);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPrjFileRela(项目相关文件),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @param strFileName: 文件名(要求唯一的字段)
 * @param strFilePath: 文件路径(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPrjFileRela_GetUniCondStr4Update(objQxPrjFileRelaEN: clsQxPrjFileRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objQxPrjFileRelaEN.mId);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxPrjFileRelaEN.qxPrjId);
 strWhereCond +=  Format(" and FileName = '{0}'", objQxPrjFileRelaEN.fileName);
 strWhereCond +=  Format(" and FilePath = '{0}'", objQxPrjFileRelaEN.filePath);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxPrjFileRelaENS:源对象
 * @param objQxPrjFileRelaENT:目标对象
*/
export  function QxPrjFileRela_GetObjFromJsonObj(objQxPrjFileRelaENS: clsQxPrjFileRelaEN): clsQxPrjFileRelaEN 
{
 const objQxPrjFileRelaENT: clsQxPrjFileRelaEN = new clsQxPrjFileRelaEN();
ObjectAssign(objQxPrjFileRelaENT, objQxPrjFileRelaENS);
 return objQxPrjFileRelaENT;
}