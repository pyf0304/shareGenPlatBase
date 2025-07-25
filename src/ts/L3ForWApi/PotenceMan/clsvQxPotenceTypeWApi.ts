
 /**
 * 类名:clsvQxPotenceTypeWApi
 * 表名:vQxPotenceType(00140026)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:47:23
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
 * v权限类型(vQxPotenceType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年03月16日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvQxPotenceTypeEN } from "@/ts/L0Entity/PotenceMan/clsvQxPotenceTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vQxPotenceType_Controller = "vQxPotenceTypeApi";
 export const vQxPotenceType_ConstructorName = "vQxPotenceType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPotenceTypeId:关键字
 * @returns 对象
 **/
export  async function vQxPotenceType_GetObjByPotenceTypeIdAsync(strPotenceTypeId: string): Promise<clsvQxPotenceTypeEN|null>  
{
const strThisFuncName = "GetObjByPotenceTypeIdAsync";

if (IsNullOrEmpty(strPotenceTypeId) == true)
{
  const strMsg = Format("参数:[strPotenceTypeId]不能为空!(In clsvQxPotenceTypeWApi.GetObjByPotenceTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceTypeId.length != 6)
{
const strMsg = Format("缓存分类变量:[strPotenceTypeId]的长度:[{0}]不正确!(clsvQxPotenceTypeWApi.GetObjByPotenceTypeIdAsync)", strPotenceTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByPotenceTypeId";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPotenceTypeId,
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
const objvQxPotenceType = vQxPotenceType_GetObjFromJsonObj(returnObj);
return objvQxPotenceType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPotenceTypeIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByPotenceTypeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxPotenceType_SortFunDefa(a:clsvQxPotenceTypeEN , b:clsvQxPotenceTypeEN): number 
{
return a.potenceTypeId.localeCompare(b.potenceTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxPotenceType_SortFunDefa2Fld(a:clsvQxPotenceTypeEN , b:clsvQxPotenceTypeEN): number 
{
if (a.potenceTypeName == b.potenceTypeName) return a.qxPrjId.localeCompare(b.qxPrjId);
else return a.potenceTypeName.localeCompare(b.potenceTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxPotenceType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQxPotenceTypeEN.con_PotenceTypeId:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return a.potenceTypeId.localeCompare(b.potenceTypeId);
}
case clsvQxPotenceTypeEN.con_PotenceTypeName:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return a.potenceTypeName.localeCompare(b.potenceTypeName);
}
case clsvQxPotenceTypeEN.con_QxPrjId:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsvQxPotenceTypeEN.con_PrjName:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return a.prjName.localeCompare(b.prjName);
}
case clsvQxPotenceTypeEN.con_FuncModuleId:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (a.funcModuleId == null) return -1;
if (b.funcModuleId == null) return 1;
return a.funcModuleId.localeCompare(b.funcModuleId);
}
case clsvQxPotenceTypeEN.con_FuncModuleName:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (a.funcModuleName == null) return -1;
if (b.funcModuleName == null) return 1;
return a.funcModuleName.localeCompare(b.funcModuleName);
}
case clsvQxPotenceTypeEN.con_FuncModuleNameSim:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (a.funcModuleNameSim == null) return -1;
if (b.funcModuleNameSim == null) return 1;
return a.funcModuleNameSim.localeCompare(b.funcModuleNameSim);
}
case clsvQxPotenceTypeEN.con_OrderNum:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return a.orderNum-b.orderNum;
}
case clsvQxPotenceTypeEN.con_InUse:
return (a: clsvQxPotenceTypeEN) => {
if (a.inUse == true) return 1;
else return -1
}
case clsvQxPotenceTypeEN.con_ViewId:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (a.viewId == null) return -1;
if (b.viewId == null) return 1;
return a.viewId.localeCompare(b.viewId);
}
case clsvQxPotenceTypeEN.con_ViewName:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (a.viewName == null) return -1;
if (b.viewName == null) return 1;
return a.viewName.localeCompare(b.viewName);
}
case clsvQxPotenceTypeEN.con_IsVisible:
return (a: clsvQxPotenceTypeEN) => {
if (a.isVisible == true) return 1;
else return -1
}
case clsvQxPotenceTypeEN.con_UpdDate:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsvQxPotenceTypeEN.con_UpdUserId:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return a.updUserId.localeCompare(b.updUserId);
}
case clsvQxPotenceTypeEN.con_Memo:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPotenceType]中不存在!(in ${ vQxPotenceType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQxPotenceTypeEN.con_PotenceTypeId:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return b.potenceTypeId.localeCompare(a.potenceTypeId);
}
case clsvQxPotenceTypeEN.con_PotenceTypeName:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return b.potenceTypeName.localeCompare(a.potenceTypeName);
}
case clsvQxPotenceTypeEN.con_QxPrjId:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsvQxPotenceTypeEN.con_PrjName:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return b.prjName.localeCompare(a.prjName);
}
case clsvQxPotenceTypeEN.con_FuncModuleId:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (b.funcModuleId == null) return -1;
if (a.funcModuleId == null) return 1;
return b.funcModuleId.localeCompare(a.funcModuleId);
}
case clsvQxPotenceTypeEN.con_FuncModuleName:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (b.funcModuleName == null) return -1;
if (a.funcModuleName == null) return 1;
return b.funcModuleName.localeCompare(a.funcModuleName);
}
case clsvQxPotenceTypeEN.con_FuncModuleNameSim:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (b.funcModuleNameSim == null) return -1;
if (a.funcModuleNameSim == null) return 1;
return b.funcModuleNameSim.localeCompare(a.funcModuleNameSim);
}
case clsvQxPotenceTypeEN.con_OrderNum:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return b.orderNum-a.orderNum;
}
case clsvQxPotenceTypeEN.con_InUse:
return (b: clsvQxPotenceTypeEN) => {
if (b.inUse == true) return 1;
else return -1
}
case clsvQxPotenceTypeEN.con_ViewId:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (b.viewId == null) return -1;
if (a.viewId == null) return 1;
return b.viewId.localeCompare(a.viewId);
}
case clsvQxPotenceTypeEN.con_ViewName:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (b.viewName == null) return -1;
if (a.viewName == null) return 1;
return b.viewName.localeCompare(a.viewName);
}
case clsvQxPotenceTypeEN.con_IsVisible:
return (b: clsvQxPotenceTypeEN) => {
if (b.isVisible == true) return 1;
else return -1
}
case clsvQxPotenceTypeEN.con_UpdDate:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsvQxPotenceTypeEN.con_UpdUserId:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
return b.updUserId.localeCompare(a.updUserId);
}
case clsvQxPotenceTypeEN.con_Memo:
return (a: clsvQxPotenceTypeEN, b: clsvQxPotenceTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPotenceType]中不存在!(in ${ vQxPotenceType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByPotenceTypeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vQxPotenceType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQxPotenceTypeEN.con_PotenceTypeId:
return (obj: clsvQxPotenceTypeEN) => {
return obj.potenceTypeId === value;
}
case clsvQxPotenceTypeEN.con_PotenceTypeName:
return (obj: clsvQxPotenceTypeEN) => {
return obj.potenceTypeName === value;
}
case clsvQxPotenceTypeEN.con_QxPrjId:
return (obj: clsvQxPotenceTypeEN) => {
return obj.qxPrjId === value;
}
case clsvQxPotenceTypeEN.con_PrjName:
return (obj: clsvQxPotenceTypeEN) => {
return obj.prjName === value;
}
case clsvQxPotenceTypeEN.con_FuncModuleId:
return (obj: clsvQxPotenceTypeEN) => {
return obj.funcModuleId === value;
}
case clsvQxPotenceTypeEN.con_FuncModuleName:
return (obj: clsvQxPotenceTypeEN) => {
return obj.funcModuleName === value;
}
case clsvQxPotenceTypeEN.con_FuncModuleNameSim:
return (obj: clsvQxPotenceTypeEN) => {
return obj.funcModuleNameSim === value;
}
case clsvQxPotenceTypeEN.con_OrderNum:
return (obj: clsvQxPotenceTypeEN) => {
return obj.orderNum === value;
}
case clsvQxPotenceTypeEN.con_InUse:
return (obj: clsvQxPotenceTypeEN) => {
return obj.inUse === value;
}
case clsvQxPotenceTypeEN.con_ViewId:
return (obj: clsvQxPotenceTypeEN) => {
return obj.viewId === value;
}
case clsvQxPotenceTypeEN.con_ViewName:
return (obj: clsvQxPotenceTypeEN) => {
return obj.viewName === value;
}
case clsvQxPotenceTypeEN.con_IsVisible:
return (obj: clsvQxPotenceTypeEN) => {
return obj.isVisible === value;
}
case clsvQxPotenceTypeEN.con_UpdDate:
return (obj: clsvQxPotenceTypeEN) => {
return obj.updDate === value;
}
case clsvQxPotenceTypeEN.con_UpdUserId:
return (obj: clsvQxPotenceTypeEN) => {
return obj.updUserId === value;
}
case clsvQxPotenceTypeEN.con_Memo:
return (obj: clsvQxPotenceTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPotenceType]中不存在!(in ${ vQxPotenceType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vQxPotenceType__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQxPotenceType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
export  async function vQxPotenceType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
export  async function vQxPotenceType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
export  async function vQxPotenceType_GetFirstObjAsync(strWhereCond: string): Promise<clsvQxPotenceTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

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
const objvQxPotenceType = vQxPotenceType_GetObjFromJsonObj(returnObj);
return objvQxPotenceType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
export  async function vQxPotenceType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQxPotenceTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPotenceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
 * @param arrPotenceTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function vQxPotenceType_GetObjLstByPotenceTypeIdLstAsync(arrPotenceTypeId: Array<string>): Promise<Array<clsvQxPotenceTypeEN>>  
{
const strThisFuncName = "GetObjLstByPotenceTypeIdLstAsync";
const strAction = "GetObjLstByPotenceTypeIdLst";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPotenceTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPotenceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPotenceTypeIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vQxPotenceType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQxPotenceTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPotenceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
export  async function vQxPotenceType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQxPotenceTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPotenceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
export  async function vQxPotenceType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQxPotenceTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQxPotenceTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPotenceType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
export  async function vQxPotenceType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
 * @param strPotenceTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQxPotenceType_IsExistAsync(strPotenceTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPotenceTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
export  async function vQxPotenceType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(vQxPotenceType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPotenceType_ConstructorName, strThisFuncName);
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vQxPotenceType_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQxPotenceType_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await vQxPotenceType_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQxPotenceTypeEN.con_PotenceTypeId, clsvQxPotenceTypeEN.con_PotenceTypeName, "v权限类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQxPotenceType_GetArrvQxPotenceType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrvQxPotenceType = new Array<clsvQxPotenceTypeEN>();
const strCondition = `1=1`;
const arrObjLstSel = await vQxPotenceType_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsvQxPotenceTypeEN();
obj0.potenceTypeId = '0';
obj0.potenceTypeName = '选v权限类型...';
arrvQxPotenceType.push(obj0);
arrObjLstSel.forEach(x => arrvQxPotenceType.push(x));
return arrvQxPotenceType;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxPotenceType_GetJSONStrByObj (pobjvQxPotenceTypeEN: clsvQxPotenceTypeEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQxPotenceTypeEN);
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
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vQxPotenceType_GetObjLstByJSONStr (strJSON: string): Array<clsvQxPotenceTypeEN>
{
let arrvQxPotenceTypeObjLst = new Array<clsvQxPotenceTypeEN>();
if (strJSON === "")
{
return arrvQxPotenceTypeObjLst;
}
try
{
arrvQxPotenceTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQxPotenceTypeObjLst;
}
return arrvQxPotenceTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQxPotenceTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQxPotenceType_GetObjLstByJSONObjLst (arrvQxPotenceTypeObjLstS: Array<clsvQxPotenceTypeEN>): Array<clsvQxPotenceTypeEN>
{
const arrvQxPotenceTypeObjLst = new Array<clsvQxPotenceTypeEN>();
for (const objInFor of arrvQxPotenceTypeObjLstS) {
const obj1 = vQxPotenceType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQxPotenceTypeObjLst.push(obj1);
}
return arrvQxPotenceTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxPotenceType_GetObjByJSONStr (strJSON: string): clsvQxPotenceTypeEN
{
let pobjvQxPotenceTypeEN = new clsvQxPotenceTypeEN();
if (strJSON === "")
{
return pobjvQxPotenceTypeEN;
}
try
{
pobjvQxPotenceTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQxPotenceTypeEN;
}
return pobjvQxPotenceTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQxPotenceType_GetCombineCondition(objvQxPotenceTypeCond: clsvQxPotenceTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_PotenceTypeId) == true)
{
const strComparisonOpPotenceTypeId:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_PotenceTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_PotenceTypeId, objvQxPotenceTypeCond.potenceTypeId, strComparisonOpPotenceTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_PotenceTypeName) == true)
{
const strComparisonOpPotenceTypeName:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_PotenceTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_PotenceTypeName, objvQxPotenceTypeCond.potenceTypeName, strComparisonOpPotenceTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_QxPrjId, objvQxPotenceTypeCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_PrjName) == true)
{
const strComparisonOpPrjName:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_PrjName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_PrjName, objvQxPotenceTypeCond.prjName, strComparisonOpPrjName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_FuncModuleId) == true)
{
const strComparisonOpFuncModuleId:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_FuncModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_FuncModuleId, objvQxPotenceTypeCond.funcModuleId, strComparisonOpFuncModuleId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_FuncModuleName) == true)
{
const strComparisonOpFuncModuleName:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_FuncModuleName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_FuncModuleName, objvQxPotenceTypeCond.funcModuleName, strComparisonOpFuncModuleName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_FuncModuleNameSim) == true)
{
const strComparisonOpFuncModuleNameSim:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_FuncModuleNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_FuncModuleNameSim, objvQxPotenceTypeCond.funcModuleNameSim, strComparisonOpFuncModuleNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQxPotenceTypeEN.con_OrderNum, objvQxPotenceTypeCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_InUse) == true)
{
if (objvQxPotenceTypeCond.inUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxPotenceTypeEN.con_InUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxPotenceTypeEN.con_InUse);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_ViewId) == true)
{
const strComparisonOpViewId:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_ViewId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_ViewId, objvQxPotenceTypeCond.viewId, strComparisonOpViewId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_ViewName) == true)
{
const strComparisonOpViewName:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_ViewName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_ViewName, objvQxPotenceTypeCond.viewName, strComparisonOpViewName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_IsVisible) == true)
{
if (objvQxPotenceTypeCond.isVisible == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxPotenceTypeEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxPotenceTypeEN.con_IsVisible);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_UpdDate, objvQxPotenceTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_UpdUserId, objvQxPotenceTypeCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPotenceTypeCond.dicFldComparisonOp, clsvQxPotenceTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQxPotenceTypeCond.dicFldComparisonOp[clsvQxPotenceTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPotenceTypeEN.con_Memo, objvQxPotenceTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQxPotenceTypeENS:源对象
 * @param objvQxPotenceTypeENT:目标对象
*/
export  function vQxPotenceType_GetObjFromJsonObj(objvQxPotenceTypeENS: clsvQxPotenceTypeEN): clsvQxPotenceTypeEN 
{
 const objvQxPotenceTypeENT: clsvQxPotenceTypeEN = new clsvQxPotenceTypeEN();
ObjectAssign(objvQxPotenceTypeENT, objvQxPotenceTypeENS);
 return objvQxPotenceTypeENT;
}