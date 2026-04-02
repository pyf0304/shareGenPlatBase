
 /**
 * 类名:clsvQxPrjTabWApi
 * 表名:vQxPrjTab(00140097)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/02 11:37:38
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v工程表(vQxPrjTab)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2026年04月02日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsvQxPrjTabEN } from "@/ts/L0Entity/Table_Field/clsvQxPrjTabEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";

 export const vQxPrjTab_Controller = "vQxPrjTabApi";
 export const vQxPrjTab_ConstructorName = "vQxPrjTab";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabId:关键字
 * @returns 对象
 **/
export  async function vQxPrjTab_GetObjByTabIdAsync(strTabId: string): Promise<clsvQxPrjTabEN|null>  
{
const strThisFuncName = "GetObjByTabIdAsync";

if (IsNullOrEmpty(strTabId) == true)
{
  const strMsg = Format("参数:[strTabId]不能为空!(In clsvQxPrjTabWApi.GetObjByTabIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTabId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvQxPrjTabWApi.GetObjByTabIdAsync)", strTabId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByTabId";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTabId,
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
const objvQxPrjTab = vQxPrjTab_GetObjFromJsonObj(returnObj);
return objvQxPrjTab;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByTabIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByTabIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxPrjTab_SortFunDefa(a:clsvQxPrjTabEN , b:clsvQxPrjTabEN): number 
{
return a.tabId.localeCompare(b.tabId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxPrjTab_SortFunDefa2Fld(a:clsvQxPrjTabEN , b:clsvQxPrjTabEN): number 
{
if (a.tabName == b.tabName) return a.tabCnName.localeCompare(b.tabCnName);
else return a.tabName.localeCompare(b.tabName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxPrjTab_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQxPrjTabEN.con_TabId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return a.tabId.localeCompare(b.tabId);
}
case clsvQxPrjTabEN.con_TabName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return a.tabName.localeCompare(b.tabName);
}
case clsvQxPrjTabEN.con_TabCnName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return a.tabCnName.localeCompare(b.tabCnName);
}
case clsvQxPrjTabEN.con_QxPrjId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsvQxPrjTabEN.con_PrjName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.prjName == null) return -1;
if (b.prjName == null) return 1;
return a.prjName.localeCompare(b.prjName);
}
case clsvQxPrjTabEN.con_SQLDSTypeId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.sQLDSTypeId == null) return -1;
if (b.sQLDSTypeId == null) return 1;
return a.sQLDSTypeId.localeCompare(b.sQLDSTypeId);
}
case clsvQxPrjTabEN.con_SqlDsTypeName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.sqlDsTypeName == null) return -1;
if (b.sqlDsTypeName == null) return 1;
return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
}
case clsvQxPrjTabEN.con_TabStateId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return a.tabStateId.localeCompare(b.tabStateId);
}
case clsvQxPrjTabEN.con_TabStateName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.tabStateName == null) return -1;
if (b.tabStateName == null) return 1;
return a.tabStateName.localeCompare(b.tabStateName);
}
case clsvQxPrjTabEN.con_IsParaTab:
return (a: clsvQxPrjTabEN) => {
if (a.isParaTab == true) return 1;
else return -1
}
case clsvQxPrjTabEN.con_FuncModuleAgcId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.funcModuleAgcId == null) return -1;
if (b.funcModuleAgcId == null) return 1;
return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
}
case clsvQxPrjTabEN.con_FuncModuleName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.funcModuleName == null) return -1;
if (b.funcModuleName == null) return 1;
return a.funcModuleName.localeCompare(b.funcModuleName);
}
case clsvQxPrjTabEN.con_FuncModuleEnName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.funcModuleEnName == null) return -1;
if (b.funcModuleEnName == null) return 1;
return a.funcModuleEnName.localeCompare(b.funcModuleEnName);
}
case clsvQxPrjTabEN.con_Owner:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.owner == null) return -1;
if (b.owner == null) return 1;
return a.owner.localeCompare(b.owner);
}
case clsvQxPrjTabEN.con_Keyword:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.keyword == null) return -1;
if (b.keyword == null) return 1;
return a.keyword.localeCompare(b.keyword);
}
case clsvQxPrjTabEN.con_TabTypeId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return a.tabTypeId.localeCompare(b.tabTypeId);
}
case clsvQxPrjTabEN.con_TabTypeName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.tabTypeName == null) return -1;
if (b.tabTypeName == null) return 1;
return a.tabTypeName.localeCompare(b.tabTypeName);
}
case clsvQxPrjTabEN.con_PrimaryTypeId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.primaryTypeId == null) return -1;
if (b.primaryTypeId == null) return 1;
return a.primaryTypeId.localeCompare(b.primaryTypeId);
}
case clsvQxPrjTabEN.con_PrimaryTypeName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.primaryTypeName == null) return -1;
if (b.primaryTypeName == null) return 1;
return a.primaryTypeName.localeCompare(b.primaryTypeName);
}
case clsvQxPrjTabEN.con_KeyFldId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.keyFldId == null) return -1;
if (b.keyFldId == null) return 1;
return a.keyFldId.localeCompare(b.keyFldId);
}
case clsvQxPrjTabEN.con_KeyFldName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.keyFldName == null) return -1;
if (b.keyFldName == null) return 1;
return a.keyFldName.localeCompare(b.keyFldName);
}
case clsvQxPrjTabEN.con_UpdUserId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsvQxPrjTabEN.con_UpdDate:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvQxPrjTabEN.con_Memo:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvQxPrjTabEN.con_UpdDate2:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.updDate2 == null) return -1;
if (b.updDate2 == null) return 1;
return a.updDate2.localeCompare(b.updDate2);
}
case clsvQxPrjTabEN.con_RelaViewId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (a.relaViewId == null) return -1;
if (b.relaViewId == null) return 1;
return a.relaViewId.localeCompare(b.relaViewId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPrjTab]中不存在!(in ${ vQxPrjTab_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQxPrjTabEN.con_TabId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return b.tabId.localeCompare(a.tabId);
}
case clsvQxPrjTabEN.con_TabName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return b.tabName.localeCompare(a.tabName);
}
case clsvQxPrjTabEN.con_TabCnName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return b.tabCnName.localeCompare(a.tabCnName);
}
case clsvQxPrjTabEN.con_QxPrjId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsvQxPrjTabEN.con_PrjName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.prjName == null) return -1;
if (a.prjName == null) return 1;
return b.prjName.localeCompare(a.prjName);
}
case clsvQxPrjTabEN.con_SQLDSTypeId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.sQLDSTypeId == null) return -1;
if (a.sQLDSTypeId == null) return 1;
return b.sQLDSTypeId.localeCompare(a.sQLDSTypeId);
}
case clsvQxPrjTabEN.con_SqlDsTypeName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.sqlDsTypeName == null) return -1;
if (a.sqlDsTypeName == null) return 1;
return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
}
case clsvQxPrjTabEN.con_TabStateId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return b.tabStateId.localeCompare(a.tabStateId);
}
case clsvQxPrjTabEN.con_TabStateName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.tabStateName == null) return -1;
if (a.tabStateName == null) return 1;
return b.tabStateName.localeCompare(a.tabStateName);
}
case clsvQxPrjTabEN.con_IsParaTab:
return (b: clsvQxPrjTabEN) => {
if (b.isParaTab == true) return 1;
else return -1
}
case clsvQxPrjTabEN.con_FuncModuleAgcId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.funcModuleAgcId == null) return -1;
if (a.funcModuleAgcId == null) return 1;
return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
}
case clsvQxPrjTabEN.con_FuncModuleName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.funcModuleName == null) return -1;
if (a.funcModuleName == null) return 1;
return b.funcModuleName.localeCompare(a.funcModuleName);
}
case clsvQxPrjTabEN.con_FuncModuleEnName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.funcModuleEnName == null) return -1;
if (a.funcModuleEnName == null) return 1;
return b.funcModuleEnName.localeCompare(a.funcModuleEnName);
}
case clsvQxPrjTabEN.con_Owner:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.owner == null) return -1;
if (a.owner == null) return 1;
return b.owner.localeCompare(a.owner);
}
case clsvQxPrjTabEN.con_Keyword:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.keyword == null) return -1;
if (a.keyword == null) return 1;
return b.keyword.localeCompare(a.keyword);
}
case clsvQxPrjTabEN.con_TabTypeId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
return b.tabTypeId.localeCompare(a.tabTypeId);
}
case clsvQxPrjTabEN.con_TabTypeName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.tabTypeName == null) return -1;
if (a.tabTypeName == null) return 1;
return b.tabTypeName.localeCompare(a.tabTypeName);
}
case clsvQxPrjTabEN.con_PrimaryTypeId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.primaryTypeId == null) return -1;
if (a.primaryTypeId == null) return 1;
return b.primaryTypeId.localeCompare(a.primaryTypeId);
}
case clsvQxPrjTabEN.con_PrimaryTypeName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.primaryTypeName == null) return -1;
if (a.primaryTypeName == null) return 1;
return b.primaryTypeName.localeCompare(a.primaryTypeName);
}
case clsvQxPrjTabEN.con_KeyFldId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.keyFldId == null) return -1;
if (a.keyFldId == null) return 1;
return b.keyFldId.localeCompare(a.keyFldId);
}
case clsvQxPrjTabEN.con_KeyFldName:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.keyFldName == null) return -1;
if (a.keyFldName == null) return 1;
return b.keyFldName.localeCompare(a.keyFldName);
}
case clsvQxPrjTabEN.con_UpdUserId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsvQxPrjTabEN.con_UpdDate:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvQxPrjTabEN.con_Memo:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvQxPrjTabEN.con_UpdDate2:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.updDate2 == null) return -1;
if (a.updDate2 == null) return 1;
return b.updDate2.localeCompare(a.updDate2);
}
case clsvQxPrjTabEN.con_RelaViewId:
return (a: clsvQxPrjTabEN, b: clsvQxPrjTabEN) => {
if (b.relaViewId == null) return -1;
if (a.relaViewId == null) return 1;
return b.relaViewId.localeCompare(a.relaViewId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPrjTab]中不存在!(in ${ vQxPrjTab_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByTabIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vQxPrjTab_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQxPrjTabEN.con_TabId:
return (obj: clsvQxPrjTabEN) => {
return obj.tabId === value;
}
case clsvQxPrjTabEN.con_TabName:
return (obj: clsvQxPrjTabEN) => {
return obj.tabName === value;
}
case clsvQxPrjTabEN.con_TabCnName:
return (obj: clsvQxPrjTabEN) => {
return obj.tabCnName === value;
}
case clsvQxPrjTabEN.con_QxPrjId:
return (obj: clsvQxPrjTabEN) => {
return obj.qxPrjId === value;
}
case clsvQxPrjTabEN.con_PrjName:
return (obj: clsvQxPrjTabEN) => {
return obj.prjName === value;
}
case clsvQxPrjTabEN.con_SQLDSTypeId:
return (obj: clsvQxPrjTabEN) => {
return obj.sQLDSTypeId === value;
}
case clsvQxPrjTabEN.con_SqlDsTypeName:
return (obj: clsvQxPrjTabEN) => {
return obj.sqlDsTypeName === value;
}
case clsvQxPrjTabEN.con_TabStateId:
return (obj: clsvQxPrjTabEN) => {
return obj.tabStateId === value;
}
case clsvQxPrjTabEN.con_TabStateName:
return (obj: clsvQxPrjTabEN) => {
return obj.tabStateName === value;
}
case clsvQxPrjTabEN.con_IsParaTab:
return (obj: clsvQxPrjTabEN) => {
return obj.isParaTab === value;
}
case clsvQxPrjTabEN.con_FuncModuleAgcId:
return (obj: clsvQxPrjTabEN) => {
return obj.funcModuleAgcId === value;
}
case clsvQxPrjTabEN.con_FuncModuleName:
return (obj: clsvQxPrjTabEN) => {
return obj.funcModuleName === value;
}
case clsvQxPrjTabEN.con_FuncModuleEnName:
return (obj: clsvQxPrjTabEN) => {
return obj.funcModuleEnName === value;
}
case clsvQxPrjTabEN.con_Owner:
return (obj: clsvQxPrjTabEN) => {
return obj.owner === value;
}
case clsvQxPrjTabEN.con_Keyword:
return (obj: clsvQxPrjTabEN) => {
return obj.keyword === value;
}
case clsvQxPrjTabEN.con_TabTypeId:
return (obj: clsvQxPrjTabEN) => {
return obj.tabTypeId === value;
}
case clsvQxPrjTabEN.con_TabTypeName:
return (obj: clsvQxPrjTabEN) => {
return obj.tabTypeName === value;
}
case clsvQxPrjTabEN.con_PrimaryTypeId:
return (obj: clsvQxPrjTabEN) => {
return obj.primaryTypeId === value;
}
case clsvQxPrjTabEN.con_PrimaryTypeName:
return (obj: clsvQxPrjTabEN) => {
return obj.primaryTypeName === value;
}
case clsvQxPrjTabEN.con_KeyFldId:
return (obj: clsvQxPrjTabEN) => {
return obj.keyFldId === value;
}
case clsvQxPrjTabEN.con_KeyFldName:
return (obj: clsvQxPrjTabEN) => {
return obj.keyFldName === value;
}
case clsvQxPrjTabEN.con_UpdUserId:
return (obj: clsvQxPrjTabEN) => {
return obj.updUserId === value;
}
case clsvQxPrjTabEN.con_UpdDate:
return (obj: clsvQxPrjTabEN) => {
return obj.updDate === value;
}
case clsvQxPrjTabEN.con_Memo:
return (obj: clsvQxPrjTabEN) => {
return obj.memo === value;
}
case clsvQxPrjTabEN.con_UpdDate2:
return (obj: clsvQxPrjTabEN) => {
return obj.updDate2 === value;
}
case clsvQxPrjTabEN.con_RelaViewId:
return (obj: clsvQxPrjTabEN) => {
return obj.relaViewId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPrjTab]中不存在!(in ${ vQxPrjTab_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vQxPrjTab__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQxPrjTab_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
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
export  async function vQxPrjTab_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
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
export  async function vQxPrjTab_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
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
export  async function vQxPrjTab_GetFirstObjAsync(strWhereCond: string): Promise<clsvQxPrjTabEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

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
const objvQxPrjTab = vQxPrjTab_GetObjFromJsonObj(returnObj);
return objvQxPrjTab;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
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
export  async function vQxPrjTab_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQxPrjTabEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
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
 * @param arrTabId:关键字列表
 * @returns 对象列表
 **/
export  async function vQxPrjTab_GetObjLstByTabIdLstAsync(arrTabId: Array<string>): Promise<Array<clsvQxPrjTabEN>>  
{
const strThisFuncName = "GetObjLstByTabIdLstAsync";
const strAction = "GetObjLstByTabIdLst";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrTabId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByTabIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vQxPrjTab_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQxPrjTabEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
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
export  async function vQxPrjTab_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQxPrjTabEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
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
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function vQxPrjTab_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
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
 * @param strTabId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQxPrjTab_IsExistAsync(strTabId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTabId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
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
export  async function vQxPrjTab_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(vQxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjTab_ConstructorName, strThisFuncName);
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
export  function vQxPrjTab_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxPrjTab_GetJSONStrByObj (pobjvQxPrjTabEN: clsvQxPrjTabEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQxPrjTabEN);
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
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vQxPrjTab_GetObjLstByJSONStr (strJSON: string): Array<clsvQxPrjTabEN>
{
let arrvQxPrjTabObjLst = new Array<clsvQxPrjTabEN>();
if (strJSON === "")
{
return arrvQxPrjTabObjLst;
}
try
{
arrvQxPrjTabObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQxPrjTabObjLst;
}
return arrvQxPrjTabObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQxPrjTabObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQxPrjTab_GetObjLstByJSONObjLst (arrvQxPrjTabObjLstS: Array<clsvQxPrjTabEN>): Array<clsvQxPrjTabEN>
{
const arrvQxPrjTabObjLst = new Array<clsvQxPrjTabEN>();
for (const objInFor of arrvQxPrjTabObjLstS) {
const obj1 = vQxPrjTab_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQxPrjTabObjLst.push(obj1);
}
return arrvQxPrjTabObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxPrjTab_GetObjByJSONStr (strJSON: string): clsvQxPrjTabEN
{
let pobjvQxPrjTabEN = new clsvQxPrjTabEN();
if (strJSON === "")
{
return pobjvQxPrjTabEN;
}
try
{
pobjvQxPrjTabEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQxPrjTabEN;
}
return pobjvQxPrjTabEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQxPrjTab_GetCombineCondition(objvQxPrjTabCond: clsvQxPrjTabEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_TabId) == true)
{
const strComparisonOpTabId:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_TabId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_TabId, objvQxPrjTabCond.tabId, strComparisonOpTabId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_TabName) == true)
{
const strComparisonOpTabName:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_TabName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_TabName, objvQxPrjTabCond.tabName, strComparisonOpTabName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_TabCnName) == true)
{
const strComparisonOpTabCnName:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_TabCnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_TabCnName, objvQxPrjTabCond.tabCnName, strComparisonOpTabCnName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_QxPrjId, objvQxPrjTabCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_PrjName) == true)
{
const strComparisonOpPrjName:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_PrjName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_PrjName, objvQxPrjTabCond.prjName, strComparisonOpPrjName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_SQLDSTypeId) == true)
{
const strComparisonOpSQLDSTypeId:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_SQLDSTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_SQLDSTypeId, objvQxPrjTabCond.sQLDSTypeId, strComparisonOpSQLDSTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_SqlDsTypeName) == true)
{
const strComparisonOpSqlDsTypeName:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_SqlDsTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_SqlDsTypeName, objvQxPrjTabCond.sqlDsTypeName, strComparisonOpSqlDsTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_TabStateId) == true)
{
const strComparisonOpTabStateId:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_TabStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_TabStateId, objvQxPrjTabCond.tabStateId, strComparisonOpTabStateId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_TabStateName) == true)
{
const strComparisonOpTabStateName:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_TabStateName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_TabStateName, objvQxPrjTabCond.tabStateName, strComparisonOpTabStateName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_IsParaTab) == true)
{
if (objvQxPrjTabCond.isParaTab == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxPrjTabEN.con_IsParaTab);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxPrjTabEN.con_IsParaTab);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_FuncModuleAgcId) == true)
{
const strComparisonOpFuncModuleAgcId:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_FuncModuleAgcId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_FuncModuleAgcId, objvQxPrjTabCond.funcModuleAgcId, strComparisonOpFuncModuleAgcId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_FuncModuleName) == true)
{
const strComparisonOpFuncModuleName:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_FuncModuleName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_FuncModuleName, objvQxPrjTabCond.funcModuleName, strComparisonOpFuncModuleName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_FuncModuleEnName) == true)
{
const strComparisonOpFuncModuleEnName:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_FuncModuleEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_FuncModuleEnName, objvQxPrjTabCond.funcModuleEnName, strComparisonOpFuncModuleEnName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_Owner) == true)
{
const strComparisonOpOwner:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_Owner];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_Owner, objvQxPrjTabCond.owner, strComparisonOpOwner);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_Keyword) == true)
{
const strComparisonOpKeyword:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_Keyword];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_Keyword, objvQxPrjTabCond.keyword, strComparisonOpKeyword);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_TabTypeId) == true)
{
const strComparisonOpTabTypeId:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_TabTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_TabTypeId, objvQxPrjTabCond.tabTypeId, strComparisonOpTabTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_TabTypeName) == true)
{
const strComparisonOpTabTypeName:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_TabTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_TabTypeName, objvQxPrjTabCond.tabTypeName, strComparisonOpTabTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_PrimaryTypeId) == true)
{
const strComparisonOpPrimaryTypeId:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_PrimaryTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_PrimaryTypeId, objvQxPrjTabCond.primaryTypeId, strComparisonOpPrimaryTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_PrimaryTypeName) == true)
{
const strComparisonOpPrimaryTypeName:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_PrimaryTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_PrimaryTypeName, objvQxPrjTabCond.primaryTypeName, strComparisonOpPrimaryTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_KeyFldId) == true)
{
const strComparisonOpKeyFldId:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_KeyFldId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_KeyFldId, objvQxPrjTabCond.keyFldId, strComparisonOpKeyFldId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_KeyFldName) == true)
{
const strComparisonOpKeyFldName:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_KeyFldName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_KeyFldName, objvQxPrjTabCond.keyFldName, strComparisonOpKeyFldName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_UpdUserId, objvQxPrjTabCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_UpdDate, objvQxPrjTabCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_Memo, objvQxPrjTabCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_UpdDate2) == true)
{
const strComparisonOpUpdDate2:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_UpdDate2];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_UpdDate2, objvQxPrjTabCond.updDate2, strComparisonOpUpdDate2);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjTabCond.dicFldComparisonOp, clsvQxPrjTabEN.con_RelaViewId) == true)
{
const strComparisonOpRelaViewId:string = objvQxPrjTabCond.dicFldComparisonOp[clsvQxPrjTabEN.con_RelaViewId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjTabEN.con_RelaViewId, objvQxPrjTabCond.relaViewId, strComparisonOpRelaViewId);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQxPrjTabENS:源对象
 * @param objvQxPrjTabENT:目标对象
*/
export  function vQxPrjTab_GetObjFromJsonObj(objvQxPrjTabENS: clsvQxPrjTabEN): clsvQxPrjTabEN 
{
 const objvQxPrjTabENT: clsvQxPrjTabEN = new clsvQxPrjTabEN();
ObjectAssign(objvQxPrjTabENT, objvQxPrjTabENS);
 return objvQxPrjTabENT;
}