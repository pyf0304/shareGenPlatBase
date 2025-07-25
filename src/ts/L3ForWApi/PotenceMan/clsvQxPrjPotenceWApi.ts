
 /**
 * 类名:clsvQxPrjPotenceWApi
 * 表名:vQxPrjPotence(00140027)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:47:12
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
 * v工程权限(vQxPrjPotence)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年03月16日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvQxPrjPotenceEN } from "@/ts/L0Entity/PotenceMan/clsvQxPrjPotenceEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vQxPrjPotence_Controller = "vQxPrjPotenceApi";
 export const vQxPrjPotence_ConstructorName = "vQxPrjPotence";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPotenceId:关键字
 * @returns 对象
 **/
export  async function vQxPrjPotence_GetObjByPotenceIdAsync(strPotenceId: string): Promise<clsvQxPrjPotenceEN|null>  
{
const strThisFuncName = "GetObjByPotenceIdAsync";

if (IsNullOrEmpty(strPotenceId) == true)
{
  const strMsg = Format("参数:[strPotenceId]不能为空!(In clsvQxPrjPotenceWApi.GetObjByPotenceIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceId.length != 8)
{
const strMsg = Format("缓存分类变量:[strPotenceId]的长度:[{0}]不正确!(clsvQxPrjPotenceWApi.GetObjByPotenceIdAsync)", strPotenceId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByPotenceId";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPotenceId,
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
const objvQxPrjPotence = vQxPrjPotence_GetObjFromJsonObj(returnObj);
return objvQxPrjPotence;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPotenceIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByPotenceIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxPrjPotence_SortFunDefa(a:clsvQxPrjPotenceEN , b:clsvQxPrjPotenceEN): number 
{
return a.potenceId.localeCompare(b.potenceId);
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
export  function vQxPrjPotence_SortFunDefa2Fld(a:clsvQxPrjPotenceEN , b:clsvQxPrjPotenceEN): number 
{
if (a.potenceName == b.potenceName) return a.qxPrjId.localeCompare(b.qxPrjId);
else return a.potenceName.localeCompare(b.potenceName);
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
export  function vQxPrjPotence_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQxPrjPotenceEN.con_PotenceId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return a.potenceId.localeCompare(b.potenceId);
}
case clsvQxPrjPotenceEN.con_PotenceName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return a.potenceName.localeCompare(b.potenceName);
}
case clsvQxPrjPotenceEN.con_QxPrjId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsvQxPrjPotenceEN.con_PrjName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return a.prjName.localeCompare(b.prjName);
}
case clsvQxPrjPotenceEN.con_FuncModuleId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (a.funcModuleId == null) return -1;
if (b.funcModuleId == null) return 1;
return a.funcModuleId.localeCompare(b.funcModuleId);
}
case clsvQxPrjPotenceEN.con_PotenceTypeId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return a.potenceTypeId.localeCompare(b.potenceTypeId);
}
case clsvQxPrjPotenceEN.con_PotenceTypeName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return a.potenceTypeName.localeCompare(b.potenceTypeName);
}
case clsvQxPrjPotenceEN.con_FuncModuleName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (a.funcModuleName == null) return -1;
if (b.funcModuleName == null) return 1;
return a.funcModuleName.localeCompare(b.funcModuleName);
}
case clsvQxPrjPotenceEN.con_FuncModuleNameSim:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (a.funcModuleNameSim == null) return -1;
if (b.funcModuleNameSim == null) return 1;
return a.funcModuleNameSim.localeCompare(b.funcModuleNameSim);
}
case clsvQxPrjPotenceEN.con_InUse:
return (a: clsvQxPrjPotenceEN) => {
if (a.inUse == true) return 1;
else return -1
}
case clsvQxPrjPotenceEN.con_IsVisible:
return (a: clsvQxPrjPotenceEN) => {
if (a.isVisible == true) return 1;
else return -1
}
case clsvQxPrjPotenceEN.con_MenuId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (a.menuId == null) return -1;
if (b.menuId == null) return 1;
return a.menuId.localeCompare(b.menuId);
}
case clsvQxPrjPotenceEN.con_MenuName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (a.menuName == null) return -1;
if (b.menuName == null) return 1;
return a.menuName.localeCompare(b.menuName);
}
case clsvQxPrjPotenceEN.con_UpMenuId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (a.upMenuId == null) return -1;
if (b.upMenuId == null) return 1;
return a.upMenuId.localeCompare(b.upMenuId);
}
case clsvQxPrjPotenceEN.con_IsLeafNode:
return (a: clsvQxPrjPotenceEN) => {
if (a.isLeafNode == true) return 1;
else return -1
}
case clsvQxPrjPotenceEN.con_UpMenuName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (a.upMenuName == null) return -1;
if (b.upMenuName == null) return 1;
return a.upMenuName.localeCompare(b.upMenuName);
}
case clsvQxPrjPotenceEN.con_UpdDate:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsvQxPrjPotenceEN.con_UpdUserId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return a.updUserId.localeCompare(b.updUserId);
}
case clsvQxPrjPotenceEN.con_Memo:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvQxPrjPotenceEN.con_SymbolNum:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return a.symbolNum-b.symbolNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPrjPotence]中不存在!(in ${ vQxPrjPotence_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQxPrjPotenceEN.con_PotenceId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return b.potenceId.localeCompare(a.potenceId);
}
case clsvQxPrjPotenceEN.con_PotenceName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return b.potenceName.localeCompare(a.potenceName);
}
case clsvQxPrjPotenceEN.con_QxPrjId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsvQxPrjPotenceEN.con_PrjName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return b.prjName.localeCompare(a.prjName);
}
case clsvQxPrjPotenceEN.con_FuncModuleId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (b.funcModuleId == null) return -1;
if (a.funcModuleId == null) return 1;
return b.funcModuleId.localeCompare(a.funcModuleId);
}
case clsvQxPrjPotenceEN.con_PotenceTypeId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return b.potenceTypeId.localeCompare(a.potenceTypeId);
}
case clsvQxPrjPotenceEN.con_PotenceTypeName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return b.potenceTypeName.localeCompare(a.potenceTypeName);
}
case clsvQxPrjPotenceEN.con_FuncModuleName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (b.funcModuleName == null) return -1;
if (a.funcModuleName == null) return 1;
return b.funcModuleName.localeCompare(a.funcModuleName);
}
case clsvQxPrjPotenceEN.con_FuncModuleNameSim:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (b.funcModuleNameSim == null) return -1;
if (a.funcModuleNameSim == null) return 1;
return b.funcModuleNameSim.localeCompare(a.funcModuleNameSim);
}
case clsvQxPrjPotenceEN.con_InUse:
return (b: clsvQxPrjPotenceEN) => {
if (b.inUse == true) return 1;
else return -1
}
case clsvQxPrjPotenceEN.con_IsVisible:
return (b: clsvQxPrjPotenceEN) => {
if (b.isVisible == true) return 1;
else return -1
}
case clsvQxPrjPotenceEN.con_MenuId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (b.menuId == null) return -1;
if (a.menuId == null) return 1;
return b.menuId.localeCompare(a.menuId);
}
case clsvQxPrjPotenceEN.con_MenuName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (b.menuName == null) return -1;
if (a.menuName == null) return 1;
return b.menuName.localeCompare(a.menuName);
}
case clsvQxPrjPotenceEN.con_UpMenuId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (b.upMenuId == null) return -1;
if (a.upMenuId == null) return 1;
return b.upMenuId.localeCompare(a.upMenuId);
}
case clsvQxPrjPotenceEN.con_IsLeafNode:
return (b: clsvQxPrjPotenceEN) => {
if (b.isLeafNode == true) return 1;
else return -1
}
case clsvQxPrjPotenceEN.con_UpMenuName:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (b.upMenuName == null) return -1;
if (a.upMenuName == null) return 1;
return b.upMenuName.localeCompare(a.upMenuName);
}
case clsvQxPrjPotenceEN.con_UpdDate:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsvQxPrjPotenceEN.con_UpdUserId:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return b.updUserId.localeCompare(a.updUserId);
}
case clsvQxPrjPotenceEN.con_Memo:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvQxPrjPotenceEN.con_SymbolNum:
return (a: clsvQxPrjPotenceEN, b: clsvQxPrjPotenceEN) => {
return b.symbolNum-a.symbolNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPrjPotence]中不存在!(in ${ vQxPrjPotence_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByPotenceIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vQxPrjPotence_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQxPrjPotenceEN.con_PotenceId:
return (obj: clsvQxPrjPotenceEN) => {
return obj.potenceId === value;
}
case clsvQxPrjPotenceEN.con_PotenceName:
return (obj: clsvQxPrjPotenceEN) => {
return obj.potenceName === value;
}
case clsvQxPrjPotenceEN.con_QxPrjId:
return (obj: clsvQxPrjPotenceEN) => {
return obj.qxPrjId === value;
}
case clsvQxPrjPotenceEN.con_PrjName:
return (obj: clsvQxPrjPotenceEN) => {
return obj.prjName === value;
}
case clsvQxPrjPotenceEN.con_FuncModuleId:
return (obj: clsvQxPrjPotenceEN) => {
return obj.funcModuleId === value;
}
case clsvQxPrjPotenceEN.con_PotenceTypeId:
return (obj: clsvQxPrjPotenceEN) => {
return obj.potenceTypeId === value;
}
case clsvQxPrjPotenceEN.con_PotenceTypeName:
return (obj: clsvQxPrjPotenceEN) => {
return obj.potenceTypeName === value;
}
case clsvQxPrjPotenceEN.con_FuncModuleName:
return (obj: clsvQxPrjPotenceEN) => {
return obj.funcModuleName === value;
}
case clsvQxPrjPotenceEN.con_FuncModuleNameSim:
return (obj: clsvQxPrjPotenceEN) => {
return obj.funcModuleNameSim === value;
}
case clsvQxPrjPotenceEN.con_InUse:
return (obj: clsvQxPrjPotenceEN) => {
return obj.inUse === value;
}
case clsvQxPrjPotenceEN.con_IsVisible:
return (obj: clsvQxPrjPotenceEN) => {
return obj.isVisible === value;
}
case clsvQxPrjPotenceEN.con_MenuId:
return (obj: clsvQxPrjPotenceEN) => {
return obj.menuId === value;
}
case clsvQxPrjPotenceEN.con_MenuName:
return (obj: clsvQxPrjPotenceEN) => {
return obj.menuName === value;
}
case clsvQxPrjPotenceEN.con_UpMenuId:
return (obj: clsvQxPrjPotenceEN) => {
return obj.upMenuId === value;
}
case clsvQxPrjPotenceEN.con_IsLeafNode:
return (obj: clsvQxPrjPotenceEN) => {
return obj.isLeafNode === value;
}
case clsvQxPrjPotenceEN.con_UpMenuName:
return (obj: clsvQxPrjPotenceEN) => {
return obj.upMenuName === value;
}
case clsvQxPrjPotenceEN.con_UpdDate:
return (obj: clsvQxPrjPotenceEN) => {
return obj.updDate === value;
}
case clsvQxPrjPotenceEN.con_UpdUserId:
return (obj: clsvQxPrjPotenceEN) => {
return obj.updUserId === value;
}
case clsvQxPrjPotenceEN.con_Memo:
return (obj: clsvQxPrjPotenceEN) => {
return obj.memo === value;
}
case clsvQxPrjPotenceEN.con_SymbolNum:
return (obj: clsvQxPrjPotenceEN) => {
return obj.symbolNum === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPrjPotence]中不存在!(in ${ vQxPrjPotence_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vQxPrjPotence__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQxPrjPotence_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function vQxPrjPotence_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function vQxPrjPotence_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function vQxPrjPotence_GetFirstObjAsync(strWhereCond: string): Promise<clsvQxPrjPotenceEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

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
const objvQxPrjPotence = vQxPrjPotence_GetObjFromJsonObj(returnObj);
return objvQxPrjPotence;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function vQxPrjPotence_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQxPrjPotenceEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param arrPotenceId:关键字列表
 * @returns 对象列表
 **/
export  async function vQxPrjPotence_GetObjLstByPotenceIdLstAsync(arrPotenceId: Array<string>): Promise<Array<clsvQxPrjPotenceEN>>  
{
const strThisFuncName = "GetObjLstByPotenceIdLstAsync";
const strAction = "GetObjLstByPotenceIdLst";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPotenceId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPotenceIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vQxPrjPotence_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQxPrjPotenceEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function vQxPrjPotence_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQxPrjPotenceEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function vQxPrjPotence_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQxPrjPotenceEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQxPrjPotenceEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function vQxPrjPotence_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
 * @param strPotenceId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQxPrjPotence_IsExistAsync(strPotenceId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPotenceId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
export  async function vQxPrjPotence_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(vQxPrjPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjPotence_ConstructorName, strThisFuncName);
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
export  function vQxPrjPotence_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function vQxPrjPotence_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await vQxPrjPotence_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQxPrjPotenceEN.con_PotenceId, clsvQxPrjPotenceEN.con_PotenceName, "v工程权限...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQxPrjPotence_GetArrvQxPrjPotence()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrvQxPrjPotence = new Array<clsvQxPrjPotenceEN>();
const strCondition = `1=1`;
const arrObjLstSel = await vQxPrjPotence_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsvQxPrjPotenceEN();
obj0.potenceId = '0';
obj0.potenceName = '选v工程权限...';
arrvQxPrjPotence.push(obj0);
arrObjLstSel.forEach(x => arrvQxPrjPotence.push(x));
return arrvQxPrjPotence;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxPrjPotence_GetJSONStrByObj (pobjvQxPrjPotenceEN: clsvQxPrjPotenceEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQxPrjPotenceEN);
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
export  function vQxPrjPotence_GetObjLstByJSONStr (strJSON: string): Array<clsvQxPrjPotenceEN>
{
let arrvQxPrjPotenceObjLst = new Array<clsvQxPrjPotenceEN>();
if (strJSON === "")
{
return arrvQxPrjPotenceObjLst;
}
try
{
arrvQxPrjPotenceObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQxPrjPotenceObjLst;
}
return arrvQxPrjPotenceObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQxPrjPotenceObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQxPrjPotence_GetObjLstByJSONObjLst (arrvQxPrjPotenceObjLstS: Array<clsvQxPrjPotenceEN>): Array<clsvQxPrjPotenceEN>
{
const arrvQxPrjPotenceObjLst = new Array<clsvQxPrjPotenceEN>();
for (const objInFor of arrvQxPrjPotenceObjLstS) {
const obj1 = vQxPrjPotence_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQxPrjPotenceObjLst.push(obj1);
}
return arrvQxPrjPotenceObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxPrjPotence_GetObjByJSONStr (strJSON: string): clsvQxPrjPotenceEN
{
let pobjvQxPrjPotenceEN = new clsvQxPrjPotenceEN();
if (strJSON === "")
{
return pobjvQxPrjPotenceEN;
}
try
{
pobjvQxPrjPotenceEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQxPrjPotenceEN;
}
return pobjvQxPrjPotenceEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQxPrjPotence_GetCombineCondition(objvQxPrjPotenceCond: clsvQxPrjPotenceEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_PotenceId) == true)
{
const strComparisonOpPotenceId:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_PotenceId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_PotenceId, objvQxPrjPotenceCond.potenceId, strComparisonOpPotenceId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_PotenceName) == true)
{
const strComparisonOpPotenceName:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_PotenceName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_PotenceName, objvQxPrjPotenceCond.potenceName, strComparisonOpPotenceName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_QxPrjId, objvQxPrjPotenceCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_PrjName) == true)
{
const strComparisonOpPrjName:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_PrjName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_PrjName, objvQxPrjPotenceCond.prjName, strComparisonOpPrjName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_FuncModuleId) == true)
{
const strComparisonOpFuncModuleId:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_FuncModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_FuncModuleId, objvQxPrjPotenceCond.funcModuleId, strComparisonOpFuncModuleId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_PotenceTypeId) == true)
{
const strComparisonOpPotenceTypeId:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_PotenceTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_PotenceTypeId, objvQxPrjPotenceCond.potenceTypeId, strComparisonOpPotenceTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_PotenceTypeName) == true)
{
const strComparisonOpPotenceTypeName:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_PotenceTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_PotenceTypeName, objvQxPrjPotenceCond.potenceTypeName, strComparisonOpPotenceTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_FuncModuleName) == true)
{
const strComparisonOpFuncModuleName:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_FuncModuleName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_FuncModuleName, objvQxPrjPotenceCond.funcModuleName, strComparisonOpFuncModuleName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_FuncModuleNameSim) == true)
{
const strComparisonOpFuncModuleNameSim:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_FuncModuleNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_FuncModuleNameSim, objvQxPrjPotenceCond.funcModuleNameSim, strComparisonOpFuncModuleNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_InUse) == true)
{
if (objvQxPrjPotenceCond.inUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxPrjPotenceEN.con_InUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxPrjPotenceEN.con_InUse);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_IsVisible) == true)
{
if (objvQxPrjPotenceCond.isVisible == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxPrjPotenceEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxPrjPotenceEN.con_IsVisible);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_MenuId) == true)
{
const strComparisonOpMenuId:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_MenuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_MenuId, objvQxPrjPotenceCond.menuId, strComparisonOpMenuId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_MenuName) == true)
{
const strComparisonOpMenuName:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_MenuName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_MenuName, objvQxPrjPotenceCond.menuName, strComparisonOpMenuName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_UpMenuId) == true)
{
const strComparisonOpUpMenuId:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_UpMenuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_UpMenuId, objvQxPrjPotenceCond.upMenuId, strComparisonOpUpMenuId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_IsLeafNode) == true)
{
if (objvQxPrjPotenceCond.isLeafNode == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxPrjPotenceEN.con_IsLeafNode);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxPrjPotenceEN.con_IsLeafNode);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_UpMenuName) == true)
{
const strComparisonOpUpMenuName:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_UpMenuName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_UpMenuName, objvQxPrjPotenceCond.upMenuName, strComparisonOpUpMenuName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_UpdDate, objvQxPrjPotenceCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_UpdUserId, objvQxPrjPotenceCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjPotenceEN.con_Memo, objvQxPrjPotenceCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjPotenceCond.dicFldComparisonOp, clsvQxPrjPotenceEN.con_SymbolNum) == true)
{
const strComparisonOpSymbolNum:string = objvQxPrjPotenceCond.dicFldComparisonOp[clsvQxPrjPotenceEN.con_SymbolNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQxPrjPotenceEN.con_SymbolNum, objvQxPrjPotenceCond.symbolNum, strComparisonOpSymbolNum);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQxPrjPotenceENS:源对象
 * @param objvQxPrjPotenceENT:目标对象
*/
export  function vQxPrjPotence_GetObjFromJsonObj(objvQxPrjPotenceENS: clsvQxPrjPotenceEN): clsvQxPrjPotenceEN 
{
 const objvQxPrjPotenceENT: clsvQxPrjPotenceEN = new clsvQxPrjPotenceEN();
ObjectAssign(objvQxPrjPotenceENT, objvQxPrjPotenceENS);
 return objvQxPrjPotenceENT;
}