
 /**
 * 类名:clsQxViewInfoWApi
 * 表名:QxViewInfo(00140017)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:16
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:界面管理(InterfaceMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面(QxViewInfo)
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
import { clsQxViewInfoEN } from "@/ts/L0Entity/InterfaceMan/clsQxViewInfoEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxViewInfo_Controller = "QxViewInfoApi";
 export const qxViewInfo_ConstructorName = "qxViewInfo";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewId:关键字
 * @returns 对象
 **/
export  async function QxViewInfo_GetObjByViewIdAsync(strViewId: string): Promise<clsQxViewInfoEN|null>  
{
const strThisFuncName = "GetObjByViewIdAsync";

if (IsNullOrEmpty(strViewId) == true)
{
  const strMsg = Format("参数:[strViewId]不能为空!(In clsQxViewInfoWApi.GetObjByViewIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strViewId.length != 8)
{
const strMsg = Format("缓存分类变量:[strViewId]的长度:[{0}]不正确!(clsQxViewInfoWApi.GetObjByViewIdAsync)", strViewId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByViewId";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strViewId,
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
const objQxViewInfo = QxViewInfo_GetObjFromJsonObj(returnObj);
return objQxViewInfo;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByViewIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByViewIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function QxViewInfo_SortFunDefa(a:clsQxViewInfoEN , b:clsQxViewInfoEN): number 
{
return a.viewId.localeCompare(b.viewId);
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
export  function QxViewInfo_SortFunDefa2Fld(a:clsQxViewInfoEN , b:clsQxViewInfoEN): number 
{
if (a.viewName == b.viewName) return a.viewCnName.localeCompare(b.viewCnName);
else return a.viewName.localeCompare(b.viewName);
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
export  function QxViewInfo_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxViewInfoEN.con_ViewId:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return a.viewId.localeCompare(b.viewId);
}
case clsQxViewInfoEN.con_ViewName:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return a.viewName.localeCompare(b.viewName);
}
case clsQxViewInfoEN.con_ViewCnName:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return a.viewCnName.localeCompare(b.viewCnName);
}
case clsQxViewInfoEN.con_FileName:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return a.fileName.localeCompare(b.fileName);
}
case clsQxViewInfoEN.con_FilePath:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return a.filePath.localeCompare(b.filePath);
}
case clsQxViewInfoEN.con_DefaMenuName:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return a.defaMenuName.localeCompare(b.defaMenuName);
}
case clsQxViewInfoEN.con_ViewTypeCode:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return a.viewTypeCode.localeCompare(b.viewTypeCode);
}
case clsQxViewInfoEN.con_DataBaseName:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (a.dataBaseName == null) return -1;
if (b.dataBaseName == null) return 1;
return a.dataBaseName.localeCompare(b.dataBaseName);
}
case clsQxViewInfoEN.con_QxPrjId:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxViewInfoEN.con_ViewFunction:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (a.viewFunction == null) return -1;
if (b.viewFunction == null) return 1;
return a.viewFunction.localeCompare(b.viewFunction);
}
case clsQxViewInfoEN.con_ViewDetail:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (a.viewDetail == null) return -1;
if (b.viewDetail == null) return 1;
return a.viewDetail.localeCompare(b.viewDetail);
}
case clsQxViewInfoEN.con_ModuleId:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (a.moduleId == null) return -1;
if (b.moduleId == null) return 1;
return a.moduleId.localeCompare(b.moduleId);
}
case clsQxViewInfoEN.con_UpdDate:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxViewInfoEN.con_UpdUserId:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsQxViewInfoEN.con_Memo:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxViewInfo]中不存在!(in ${ qxViewInfo_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxViewInfoEN.con_ViewId:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return b.viewId.localeCompare(a.viewId);
}
case clsQxViewInfoEN.con_ViewName:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return b.viewName.localeCompare(a.viewName);
}
case clsQxViewInfoEN.con_ViewCnName:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return b.viewCnName.localeCompare(a.viewCnName);
}
case clsQxViewInfoEN.con_FileName:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return b.fileName.localeCompare(a.fileName);
}
case clsQxViewInfoEN.con_FilePath:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return b.filePath.localeCompare(a.filePath);
}
case clsQxViewInfoEN.con_DefaMenuName:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return b.defaMenuName.localeCompare(a.defaMenuName);
}
case clsQxViewInfoEN.con_ViewTypeCode:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return b.viewTypeCode.localeCompare(a.viewTypeCode);
}
case clsQxViewInfoEN.con_DataBaseName:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (b.dataBaseName == null) return -1;
if (a.dataBaseName == null) return 1;
return b.dataBaseName.localeCompare(a.dataBaseName);
}
case clsQxViewInfoEN.con_QxPrjId:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxViewInfoEN.con_ViewFunction:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (b.viewFunction == null) return -1;
if (a.viewFunction == null) return 1;
return b.viewFunction.localeCompare(a.viewFunction);
}
case clsQxViewInfoEN.con_ViewDetail:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (b.viewDetail == null) return -1;
if (a.viewDetail == null) return 1;
return b.viewDetail.localeCompare(a.viewDetail);
}
case clsQxViewInfoEN.con_ModuleId:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (b.moduleId == null) return -1;
if (a.moduleId == null) return 1;
return b.moduleId.localeCompare(a.moduleId);
}
case clsQxViewInfoEN.con_UpdDate:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxViewInfoEN.con_UpdUserId:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsQxViewInfoEN.con_Memo:
return (a: clsQxViewInfoEN, b: clsQxViewInfoEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxViewInfo]中不存在!(in ${ qxViewInfo_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByViewIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxViewInfo_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxViewInfoEN.con_ViewId:
return (obj: clsQxViewInfoEN) => {
return obj.viewId === value;
}
case clsQxViewInfoEN.con_ViewName:
return (obj: clsQxViewInfoEN) => {
return obj.viewName === value;
}
case clsQxViewInfoEN.con_ViewCnName:
return (obj: clsQxViewInfoEN) => {
return obj.viewCnName === value;
}
case clsQxViewInfoEN.con_FileName:
return (obj: clsQxViewInfoEN) => {
return obj.fileName === value;
}
case clsQxViewInfoEN.con_FilePath:
return (obj: clsQxViewInfoEN) => {
return obj.filePath === value;
}
case clsQxViewInfoEN.con_DefaMenuName:
return (obj: clsQxViewInfoEN) => {
return obj.defaMenuName === value;
}
case clsQxViewInfoEN.con_ViewTypeCode:
return (obj: clsQxViewInfoEN) => {
return obj.viewTypeCode === value;
}
case clsQxViewInfoEN.con_DataBaseName:
return (obj: clsQxViewInfoEN) => {
return obj.dataBaseName === value;
}
case clsQxViewInfoEN.con_QxPrjId:
return (obj: clsQxViewInfoEN) => {
return obj.qxPrjId === value;
}
case clsQxViewInfoEN.con_ViewFunction:
return (obj: clsQxViewInfoEN) => {
return obj.viewFunction === value;
}
case clsQxViewInfoEN.con_ViewDetail:
return (obj: clsQxViewInfoEN) => {
return obj.viewDetail === value;
}
case clsQxViewInfoEN.con_ModuleId:
return (obj: clsQxViewInfoEN) => {
return obj.moduleId === value;
}
case clsQxViewInfoEN.con_UpdDate:
return (obj: clsQxViewInfoEN) => {
return obj.updDate === value;
}
case clsQxViewInfoEN.con_UpdUserId:
return (obj: clsQxViewInfoEN) => {
return obj.updUserId === value;
}
case clsQxViewInfoEN.con_Memo:
return (obj: clsQxViewInfoEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxViewInfo]中不存在!(in ${ qxViewInfo_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxViewInfo__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxViewInfo_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  async function QxViewInfo_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  async function QxViewInfo_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  async function QxViewInfo_GetFirstObjAsync(strWhereCond: string): Promise<clsQxViewInfoEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const objQxViewInfo = QxViewInfo_GetObjFromJsonObj(returnObj);
return objQxViewInfo;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  async function QxViewInfo_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxViewInfoEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxViewInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxViewInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
 * @param arrViewId:关键字列表
 * @returns 对象列表
 **/
export  async function QxViewInfo_GetObjLstByViewIdLstAsync(arrViewId: Array<string>): Promise<Array<clsQxViewInfoEN>>  
{
const strThisFuncName = "GetObjLstByViewIdLstAsync";
const strAction = "GetObjLstByViewIdLst";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrViewId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxViewInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxViewInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByViewIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxViewInfo_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxViewInfoEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxViewInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxViewInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  async function QxViewInfo_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxViewInfoEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxViewInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxViewInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  async function QxViewInfo_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxViewInfoEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxViewInfoEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxViewInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxViewInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
 * @param strViewId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxViewInfo_DelRecordAsync(strViewId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strViewId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
 * @param arrViewId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxViewInfo_DelQxViewInfosAsync(arrViewId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxViewInfosAsync";
const strAction = "DelQxViewInfos";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrViewId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  async function QxViewInfo_DelQxViewInfosByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxViewInfosByCondAsync";
const strAction = "DelQxViewInfosByCond";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
 * @param objQxViewInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxViewInfo_AddNewRecordAsync(objQxViewInfoEN: clsQxViewInfoEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxViewInfoEN.viewId === null || objQxViewInfoEN.viewId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxViewInfoEN);
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxViewInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
 * @param objQxViewInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxViewInfo_AddNewRecordWithMaxIdAsync(objQxViewInfoEN: clsQxViewInfoEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxViewInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  async function QxViewInfo_AddNewObjSave(objQxViewInfoEN: clsQxViewInfoEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxViewInfo_CheckPropertyNew(objQxViewInfoEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxViewInfo_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxViewInfo_CheckUniCond4Add(objQxViewInfoEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await QxViewInfo_AddNewRecordWithMaxIdAsync(objQxViewInfoEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//QxViewInfo_ReFreshCache();
}
else
{
const strInfo = `添加[界面(QxViewInfo)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxViewInfo_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxViewInfo_CheckUniCond4Add(objQxViewInfoEN: clsQxViewInfoEN): Promise<boolean>{
const strUniquenessCondition = QxViewInfo_GetUniCondStr(objQxViewInfoEN);
const bolIsExistCondition = await QxViewInfo_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxViewInfo_CheckUniCond4Update(objQxViewInfoEN: clsQxViewInfoEN): Promise<boolean>{
const strUniquenessCondition = QxViewInfo_GetUniCondStr4Update(objQxViewInfoEN);
const bolIsExistCondition = await QxViewInfo_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxViewInfo_UpdateObjSave(objQxViewInfoEN: clsQxViewInfoEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxViewInfoEN.sfUpdFldSetStr = objQxViewInfoEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxViewInfoEN.viewId == "" || objQxViewInfoEN.viewId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxViewInfo_CheckProperty4Update(objQxViewInfoEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxViewInfo_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxViewInfo_CheckUniCond4Update(objQxViewInfoEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxViewInfo_UpdateRecordAsync(objQxViewInfoEN);
if (returnBool == true)
{
//QxViewInfo_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxViewInfo_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxViewInfoEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxViewInfo_AddNewRecordWithReturnKeyAsync(objQxViewInfoEN: clsQxViewInfoEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxViewInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
 * @param objQxViewInfoEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxViewInfo_UpdateRecordAsync(objQxViewInfoEN: clsQxViewInfoEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxViewInfoEN.sfUpdFldSetStr === undefined || objQxViewInfoEN.sfUpdFldSetStr === null || objQxViewInfoEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxViewInfoEN.viewId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxViewInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
 * @param objQxViewInfoEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxViewInfo_EditRecordExAsync(objQxViewInfoEN: clsQxViewInfoEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxViewInfoEN.sfUpdFldSetStr === undefined || objQxViewInfoEN.sfUpdFldSetStr === null || objQxViewInfoEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxViewInfoEN.viewId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxViewInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
 * @param objQxViewInfoEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxViewInfo_UpdateWithConditionAsync(objQxViewInfoEN: clsQxViewInfoEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxViewInfoEN.sfUpdFldSetStr === undefined || objQxViewInfoEN.sfUpdFldSetStr === null || objQxViewInfoEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxViewInfoEN.viewId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);
objQxViewInfoEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxViewInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  async function QxViewInfo_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
 * @param strViewId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxViewInfo_IsExistAsync(strViewId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strViewId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  async function QxViewInfo_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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

 /**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export  async function QxViewInfo_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdByPrefixAsync";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function QxViewInfo_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxViewInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxViewInfo_ConstructorName, strThisFuncName);
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
export  function QxViewInfo_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function QxViewInfo_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await QxViewInfo_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxViewInfoEN.con_ViewId, clsQxViewInfoEN.con_ViewName, "界面...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxViewInfo_GetArrQxViewInfo()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrQxViewInfo = new Array<clsQxViewInfoEN>();
const strCondition = `1=1`;
const arrObjLstSel = await QxViewInfo_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsQxViewInfoEN();
obj0.viewId = '0';
obj0.viewName = '选界面...';
arrQxViewInfo.push(obj0);
arrObjLstSel.forEach(x => arrQxViewInfo.push(x));
return arrQxViewInfo;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxViewInfo_CheckPropertyNew(pobjQxViewInfoEN: clsQxViewInfoEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxViewInfoEN.viewName) === true )
{
 throw new Error(`(errid:Watl000411)字段[界面名称]不能为空(In 界面)!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewCnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[界面中文名称]不能为空(In 界面)!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.fileName) === true )
{
 throw new Error(`(errid:Watl000411)字段[文件名]不能为空(In 界面)!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.filePath) === true )
{
 throw new Error(`(errid:Watl000411)字段[文件路径]不能为空(In 界面)!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.defaMenuName) === true )
{
 throw new Error(`(errid:Watl000411)字段[缺省菜单名]不能为空(In 界面)!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewTypeCode) === true )
{
 throw new Error(`(errid:Watl000411)字段[界面类型码]不能为空(In 界面)!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.qxPrjId) === true 
 || pobjQxViewInfoEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 界面)!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxViewInfoEN.viewId) == false && GetStrLen(pobjQxViewInfoEN.viewId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[界面编号(viewId)]的长度不能超过8(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewId}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewName) == false && GetStrLen(pobjQxViewInfoEN.viewName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[界面名称(viewName)]的长度不能超过100(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewName}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewCnName) == false && GetStrLen(pobjQxViewInfoEN.viewCnName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[界面中文名称(viewCnName)]的长度不能超过50(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewCnName}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.fileName) == false && GetStrLen(pobjQxViewInfoEN.fileName) > 500)
{
 throw new Error(`(errid:Watl000413)字段[文件名(fileName)]的长度不能超过500(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.fileName}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.filePath) == false && GetStrLen(pobjQxViewInfoEN.filePath) > 500)
{
 throw new Error(`(errid:Watl000413)字段[文件路径(filePath)]的长度不能超过500(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.filePath}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.defaMenuName) == false && GetStrLen(pobjQxViewInfoEN.defaMenuName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[缺省菜单名(defaMenuName)]的长度不能超过50(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.defaMenuName}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewTypeCode) == false && GetStrLen(pobjQxViewInfoEN.viewTypeCode) > 4)
{
 throw new Error(`(errid:Watl000413)字段[界面类型码(viewTypeCode)]的长度不能超过4(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewTypeCode}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.dataBaseName) == false && GetStrLen(pobjQxViewInfoEN.dataBaseName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[数据库名称(dataBaseName)]的长度不能超过30(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.dataBaseName}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.qxPrjId) == false && GetStrLen(pobjQxViewInfoEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.qxPrjId}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewFunction) == false && GetStrLen(pobjQxViewInfoEN.viewFunction) > 100)
{
 throw new Error(`(errid:Watl000413)字段[界面功能(viewFunction)]的长度不能超过100(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewFunction}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewDetail) == false && GetStrLen(pobjQxViewInfoEN.viewDetail) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[界面详细信息(viewDetail)]的长度不能超过1000(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewDetail}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.moduleId) == false && GetStrLen(pobjQxViewInfoEN.moduleId) > 6)
{
 throw new Error(`(errid:Watl000413)字段[模块号(moduleId)]的长度不能超过6(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.moduleId}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.updDate) == false && GetStrLen(pobjQxViewInfoEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.updDate}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.updUserId) == false && GetStrLen(pobjQxViewInfoEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.updUserId}(clsQxViewInfoBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.memo) == false && GetStrLen(pobjQxViewInfoEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.memo}(clsQxViewInfoBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxViewInfoEN.viewId) == false && undefined !== pobjQxViewInfoEN.viewId && tzDataType.isString(pobjQxViewInfoEN.viewId) === false)
{
 throw new Error(`(errid:Watl000414)字段[界面编号(viewId)]的值:[${pobjQxViewInfoEN.viewId}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewName) == false && undefined !== pobjQxViewInfoEN.viewName && tzDataType.isString(pobjQxViewInfoEN.viewName) === false)
{
 throw new Error(`(errid:Watl000414)字段[界面名称(viewName)]的值:[${pobjQxViewInfoEN.viewName}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewCnName) == false && undefined !== pobjQxViewInfoEN.viewCnName && tzDataType.isString(pobjQxViewInfoEN.viewCnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[界面中文名称(viewCnName)]的值:[${pobjQxViewInfoEN.viewCnName}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.fileName) == false && undefined !== pobjQxViewInfoEN.fileName && tzDataType.isString(pobjQxViewInfoEN.fileName) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件名(fileName)]的值:[${pobjQxViewInfoEN.fileName}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.filePath) == false && undefined !== pobjQxViewInfoEN.filePath && tzDataType.isString(pobjQxViewInfoEN.filePath) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件路径(filePath)]的值:[${pobjQxViewInfoEN.filePath}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.defaMenuName) == false && undefined !== pobjQxViewInfoEN.defaMenuName && tzDataType.isString(pobjQxViewInfoEN.defaMenuName) === false)
{
 throw new Error(`(errid:Watl000414)字段[缺省菜单名(defaMenuName)]的值:[${pobjQxViewInfoEN.defaMenuName}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewTypeCode) == false && undefined !== pobjQxViewInfoEN.viewTypeCode && tzDataType.isString(pobjQxViewInfoEN.viewTypeCode) === false)
{
 throw new Error(`(errid:Watl000414)字段[界面类型码(viewTypeCode)]的值:[${pobjQxViewInfoEN.viewTypeCode}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.dataBaseName) == false && undefined !== pobjQxViewInfoEN.dataBaseName && tzDataType.isString(pobjQxViewInfoEN.dataBaseName) === false)
{
 throw new Error(`(errid:Watl000414)字段[数据库名称(dataBaseName)]的值:[${pobjQxViewInfoEN.dataBaseName}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.qxPrjId) == false && undefined !== pobjQxViewInfoEN.qxPrjId && tzDataType.isString(pobjQxViewInfoEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxViewInfoEN.qxPrjId}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewFunction) == false && undefined !== pobjQxViewInfoEN.viewFunction && tzDataType.isString(pobjQxViewInfoEN.viewFunction) === false)
{
 throw new Error(`(errid:Watl000414)字段[界面功能(viewFunction)]的值:[${pobjQxViewInfoEN.viewFunction}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewDetail) == false && undefined !== pobjQxViewInfoEN.viewDetail && tzDataType.isString(pobjQxViewInfoEN.viewDetail) === false)
{
 throw new Error(`(errid:Watl000414)字段[界面详细信息(viewDetail)]的值:[${pobjQxViewInfoEN.viewDetail}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.moduleId) == false && undefined !== pobjQxViewInfoEN.moduleId && tzDataType.isString(pobjQxViewInfoEN.moduleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[模块号(moduleId)]的值:[${pobjQxViewInfoEN.moduleId}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.updDate) == false && undefined !== pobjQxViewInfoEN.updDate && tzDataType.isString(pobjQxViewInfoEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxViewInfoEN.updDate}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.updUserId) == false && undefined !== pobjQxViewInfoEN.updUserId && tzDataType.isString(pobjQxViewInfoEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjQxViewInfoEN.updUserId}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.memo) == false && undefined !== pobjQxViewInfoEN.memo && tzDataType.isString(pobjQxViewInfoEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxViewInfoEN.memo}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxViewInfoEN.viewTypeCode) == false && pobjQxViewInfoEN.viewTypeCode != '[nuull]' && GetStrLen(pobjQxViewInfoEN.viewTypeCode) !=  4)
{
 throw ("(errid:Watl000415)字段[界面类型码]作为外键字段,长度应该为4(In 界面)!(clsQxViewInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxViewInfoEN.qxPrjId) == false && pobjQxViewInfoEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxViewInfoEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 界面)!(clsQxViewInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxViewInfoEN.moduleId) == false && pobjQxViewInfoEN.moduleId != '[nuull]' && GetStrLen(pobjQxViewInfoEN.moduleId) !=  6)
{
 throw ("(errid:Watl000415)字段[模块号]作为外键字段,长度应该为6(In 界面)!(clsQxViewInfoBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxViewInfo_CheckProperty4Update(pobjQxViewInfoEN: clsQxViewInfoEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxViewInfoEN.viewId) == false && GetStrLen(pobjQxViewInfoEN.viewId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[界面编号(viewId)]的长度不能超过8(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewId}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewName) == false && GetStrLen(pobjQxViewInfoEN.viewName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[界面名称(viewName)]的长度不能超过100(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewName}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewCnName) == false && GetStrLen(pobjQxViewInfoEN.viewCnName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[界面中文名称(viewCnName)]的长度不能超过50(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewCnName}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.fileName) == false && GetStrLen(pobjQxViewInfoEN.fileName) > 500)
{
 throw new Error(`(errid:Watl000416)字段[文件名(fileName)]的长度不能超过500(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.fileName}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.filePath) == false && GetStrLen(pobjQxViewInfoEN.filePath) > 500)
{
 throw new Error(`(errid:Watl000416)字段[文件路径(filePath)]的长度不能超过500(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.filePath}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.defaMenuName) == false && GetStrLen(pobjQxViewInfoEN.defaMenuName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[缺省菜单名(defaMenuName)]的长度不能超过50(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.defaMenuName}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewTypeCode) == false && GetStrLen(pobjQxViewInfoEN.viewTypeCode) > 4)
{
 throw new Error(`(errid:Watl000416)字段[界面类型码(viewTypeCode)]的长度不能超过4(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewTypeCode}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.dataBaseName) == false && GetStrLen(pobjQxViewInfoEN.dataBaseName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[数据库名称(dataBaseName)]的长度不能超过30(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.dataBaseName}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.qxPrjId) == false && GetStrLen(pobjQxViewInfoEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.qxPrjId}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewFunction) == false && GetStrLen(pobjQxViewInfoEN.viewFunction) > 100)
{
 throw new Error(`(errid:Watl000416)字段[界面功能(viewFunction)]的长度不能超过100(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewFunction}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewDetail) == false && GetStrLen(pobjQxViewInfoEN.viewDetail) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[界面详细信息(viewDetail)]的长度不能超过1000(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.viewDetail}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.moduleId) == false && GetStrLen(pobjQxViewInfoEN.moduleId) > 6)
{
 throw new Error(`(errid:Watl000416)字段[模块号(moduleId)]的长度不能超过6(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.moduleId}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.updDate) == false && GetStrLen(pobjQxViewInfoEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.updDate}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.updUserId) == false && GetStrLen(pobjQxViewInfoEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.updUserId}(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.memo) == false && GetStrLen(pobjQxViewInfoEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 界面(QxViewInfo))!值:${pobjQxViewInfoEN.memo}(clsQxViewInfoBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxViewInfoEN.viewId) == false && undefined !== pobjQxViewInfoEN.viewId && tzDataType.isString(pobjQxViewInfoEN.viewId) === false)
{
 throw new Error(`(errid:Watl000417)字段[界面编号(viewId)]的值:[${pobjQxViewInfoEN.viewId}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewName) == false && undefined !== pobjQxViewInfoEN.viewName && tzDataType.isString(pobjQxViewInfoEN.viewName) === false)
{
 throw new Error(`(errid:Watl000417)字段[界面名称(viewName)]的值:[${pobjQxViewInfoEN.viewName}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewCnName) == false && undefined !== pobjQxViewInfoEN.viewCnName && tzDataType.isString(pobjQxViewInfoEN.viewCnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[界面中文名称(viewCnName)]的值:[${pobjQxViewInfoEN.viewCnName}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.fileName) == false && undefined !== pobjQxViewInfoEN.fileName && tzDataType.isString(pobjQxViewInfoEN.fileName) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件名(fileName)]的值:[${pobjQxViewInfoEN.fileName}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.filePath) == false && undefined !== pobjQxViewInfoEN.filePath && tzDataType.isString(pobjQxViewInfoEN.filePath) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件路径(filePath)]的值:[${pobjQxViewInfoEN.filePath}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.defaMenuName) == false && undefined !== pobjQxViewInfoEN.defaMenuName && tzDataType.isString(pobjQxViewInfoEN.defaMenuName) === false)
{
 throw new Error(`(errid:Watl000417)字段[缺省菜单名(defaMenuName)]的值:[${pobjQxViewInfoEN.defaMenuName}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewTypeCode) == false && undefined !== pobjQxViewInfoEN.viewTypeCode && tzDataType.isString(pobjQxViewInfoEN.viewTypeCode) === false)
{
 throw new Error(`(errid:Watl000417)字段[界面类型码(viewTypeCode)]的值:[${pobjQxViewInfoEN.viewTypeCode}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.dataBaseName) == false && undefined !== pobjQxViewInfoEN.dataBaseName && tzDataType.isString(pobjQxViewInfoEN.dataBaseName) === false)
{
 throw new Error(`(errid:Watl000417)字段[数据库名称(dataBaseName)]的值:[${pobjQxViewInfoEN.dataBaseName}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.qxPrjId) == false && undefined !== pobjQxViewInfoEN.qxPrjId && tzDataType.isString(pobjQxViewInfoEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxViewInfoEN.qxPrjId}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewFunction) == false && undefined !== pobjQxViewInfoEN.viewFunction && tzDataType.isString(pobjQxViewInfoEN.viewFunction) === false)
{
 throw new Error(`(errid:Watl000417)字段[界面功能(viewFunction)]的值:[${pobjQxViewInfoEN.viewFunction}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.viewDetail) == false && undefined !== pobjQxViewInfoEN.viewDetail && tzDataType.isString(pobjQxViewInfoEN.viewDetail) === false)
{
 throw new Error(`(errid:Watl000417)字段[界面详细信息(viewDetail)]的值:[${pobjQxViewInfoEN.viewDetail}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.moduleId) == false && undefined !== pobjQxViewInfoEN.moduleId && tzDataType.isString(pobjQxViewInfoEN.moduleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[模块号(moduleId)]的值:[${pobjQxViewInfoEN.moduleId}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.updDate) == false && undefined !== pobjQxViewInfoEN.updDate && tzDataType.isString(pobjQxViewInfoEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxViewInfoEN.updDate}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.updUserId) == false && undefined !== pobjQxViewInfoEN.updUserId && tzDataType.isString(pobjQxViewInfoEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjQxViewInfoEN.updUserId}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxViewInfoEN.memo) == false && undefined !== pobjQxViewInfoEN.memo && tzDataType.isString(pobjQxViewInfoEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxViewInfoEN.memo}], 非法,应该为字符型(In 界面(QxViewInfo))!(clsQxViewInfoBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxViewInfoEN.viewId) === true 
 || pobjQxViewInfoEN.viewId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[界面编号]不能为空(In 界面)!(clsQxViewInfoBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxViewInfoEN.viewTypeCode) == false && pobjQxViewInfoEN.viewTypeCode != '[nuull]' && GetStrLen(pobjQxViewInfoEN.viewTypeCode) !=  4)
{
 throw ("(errid:Watl000418)字段[界面类型码]作为外键字段,长度应该为4(In 界面)!(clsQxViewInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxViewInfoEN.qxPrjId) == false && pobjQxViewInfoEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxViewInfoEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 界面)!(clsQxViewInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxViewInfoEN.moduleId) == false && pobjQxViewInfoEN.moduleId != '[nuull]' && GetStrLen(pobjQxViewInfoEN.moduleId) !=  6)
{
 throw ("(errid:Watl000418)字段[模块号]作为外键字段,长度应该为6(In 界面)!(clsQxViewInfoBL:CheckPropertyNew)");
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
export  function QxViewInfo_GetJSONStrByObj (pobjQxViewInfoEN: clsQxViewInfoEN): string
{
pobjQxViewInfoEN.sfUpdFldSetStr = pobjQxViewInfoEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxViewInfoEN);
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
export  function QxViewInfo_GetObjLstByJSONStr (strJSON: string): Array<clsQxViewInfoEN>
{
let arrQxViewInfoObjLst = new Array<clsQxViewInfoEN>();
if (strJSON === "")
{
return arrQxViewInfoObjLst;
}
try
{
arrQxViewInfoObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxViewInfoObjLst;
}
return arrQxViewInfoObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxViewInfoObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxViewInfo_GetObjLstByJSONObjLst (arrQxViewInfoObjLstS: Array<clsQxViewInfoEN>): Array<clsQxViewInfoEN>
{
const arrQxViewInfoObjLst = new Array<clsQxViewInfoEN>();
for (const objInFor of arrQxViewInfoObjLstS) {
const obj1 = QxViewInfo_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxViewInfoObjLst.push(obj1);
}
return arrQxViewInfoObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxViewInfo_GetObjByJSONStr (strJSON: string): clsQxViewInfoEN
{
let pobjQxViewInfoEN = new clsQxViewInfoEN();
if (strJSON === "")
{
return pobjQxViewInfoEN;
}
try
{
pobjQxViewInfoEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxViewInfoEN;
}
return pobjQxViewInfoEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxViewInfo_GetCombineCondition(objQxViewInfoCond: clsQxViewInfoEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_ViewId) == true)
{
const strComparisonOpViewId:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_ViewId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_ViewId, objQxViewInfoCond.viewId, strComparisonOpViewId);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_ViewName) == true)
{
const strComparisonOpViewName:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_ViewName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_ViewName, objQxViewInfoCond.viewName, strComparisonOpViewName);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_ViewCnName) == true)
{
const strComparisonOpViewCnName:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_ViewCnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_ViewCnName, objQxViewInfoCond.viewCnName, strComparisonOpViewCnName);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_FileName) == true)
{
const strComparisonOpFileName:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_FileName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_FileName, objQxViewInfoCond.fileName, strComparisonOpFileName);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_FilePath) == true)
{
const strComparisonOpFilePath:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_FilePath];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_FilePath, objQxViewInfoCond.filePath, strComparisonOpFilePath);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_DefaMenuName) == true)
{
const strComparisonOpDefaMenuName:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_DefaMenuName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_DefaMenuName, objQxViewInfoCond.defaMenuName, strComparisonOpDefaMenuName);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_ViewTypeCode) == true)
{
const strComparisonOpViewTypeCode:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_ViewTypeCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_ViewTypeCode, objQxViewInfoCond.viewTypeCode, strComparisonOpViewTypeCode);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_DataBaseName) == true)
{
const strComparisonOpDataBaseName:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_DataBaseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_DataBaseName, objQxViewInfoCond.dataBaseName, strComparisonOpDataBaseName);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_QxPrjId, objQxViewInfoCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_ViewFunction) == true)
{
const strComparisonOpViewFunction:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_ViewFunction];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_ViewFunction, objQxViewInfoCond.viewFunction, strComparisonOpViewFunction);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_ViewDetail) == true)
{
const strComparisonOpViewDetail:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_ViewDetail];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_ViewDetail, objQxViewInfoCond.viewDetail, strComparisonOpViewDetail);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_ModuleId) == true)
{
const strComparisonOpModuleId:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_ModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_ModuleId, objQxViewInfoCond.moduleId, strComparisonOpModuleId);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_UpdDate, objQxViewInfoCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_UpdUserId, objQxViewInfoCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxViewInfoCond.dicFldComparisonOp, clsQxViewInfoEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxViewInfoCond.dicFldComparisonOp[clsQxViewInfoEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxViewInfoEN.con_Memo, objQxViewInfoCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxViewInfo(界面),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strViewName: 界面名称(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxViewInfo_GetUniCondStr(objQxViewInfoEN: clsQxViewInfoEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ViewName = '{0}'", objQxViewInfoEN.viewName);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxViewInfoEN.qxPrjId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxViewInfo(界面),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strViewName: 界面名称(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxViewInfo_GetUniCondStr4Update(objQxViewInfoEN: clsQxViewInfoEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ViewId <> '{0}'", objQxViewInfoEN.viewId);
 strWhereCond +=  Format(" and ViewName = '{0}'", objQxViewInfoEN.viewName);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxViewInfoEN.qxPrjId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxViewInfoENS:源对象
 * @param objQxViewInfoENT:目标对象
*/
export  function QxViewInfo_GetObjFromJsonObj(objQxViewInfoENS: clsQxViewInfoEN): clsQxViewInfoEN 
{
 const objQxViewInfoENT: clsQxViewInfoEN = new clsQxViewInfoEN();
ObjectAssign(objQxViewInfoENT, objQxViewInfoENS);
 return objQxViewInfoENT;
}