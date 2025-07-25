
 /**
 * 类名:clsQxPrjTabWApi
 * 表名:QxPrjTab(00140096)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:45
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程表(QxPrjTab)
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
import { clsQxPrjTabEN } from "@/ts/L0Entity/Table_Field/clsQxPrjTabEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxPrjTab_Controller = "QxPrjTabApi";
 export const qxPrjTab_ConstructorName = "qxPrjTab";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabId:关键字
 * @returns 对象
 **/
export  async function QxPrjTab_GetObjByTabIdAsync(strTabId: string): Promise<clsQxPrjTabEN|null>  
{
const strThisFuncName = "GetObjByTabIdAsync";

if (IsNullOrEmpty(strTabId) == true)
{
  const strMsg = Format("参数:[strTabId]不能为空!(In clsQxPrjTabWApi.GetObjByTabIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTabId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsQxPrjTabWApi.GetObjByTabIdAsync)", strTabId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByTabId";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const objQxPrjTab = QxPrjTab_GetObjFromJsonObj(returnObj);
return objQxPrjTab;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  function QxPrjTab_SortFunDefa(a:clsQxPrjTabEN , b:clsQxPrjTabEN): number 
{
return a.tabId.localeCompare(b.tabId);
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
export  function QxPrjTab_SortFunDefa2Fld(a:clsQxPrjTabEN , b:clsQxPrjTabEN): number 
{
if (a.tabName == b.tabName) return a.tabCnName.localeCompare(b.tabCnName);
else return a.tabName.localeCompare(b.tabName);
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
export  function QxPrjTab_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxPrjTabEN.con_TabId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
return a.tabId.localeCompare(b.tabId);
}
case clsQxPrjTabEN.con_TabName:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
return a.tabName.localeCompare(b.tabName);
}
case clsQxPrjTabEN.con_TabCnName:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.tabCnName == null) return -1;
if (b.tabCnName == null) return 1;
return a.tabCnName.localeCompare(b.tabCnName);
}
case clsQxPrjTabEN.con_QxPrjId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxPrjTabEN.con_SQLDSTypeId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.sQLDSTypeId == null) return -1;
if (b.sQLDSTypeId == null) return 1;
return a.sQLDSTypeId.localeCompare(b.sQLDSTypeId);
}
case clsQxPrjTabEN.con_TabStateId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
return a.tabStateId.localeCompare(b.tabStateId);
}
case clsQxPrjTabEN.con_IsParaTab:
return (a: clsQxPrjTabEN) => {
if (a.isParaTab == true) return 1;
else return -1
}
case clsQxPrjTabEN.con_FuncModuleAgcId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.funcModuleAgcId == null) return -1;
if (b.funcModuleAgcId == null) return 1;
return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
}
case clsQxPrjTabEN.con_Owner:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.owner == null) return -1;
if (b.owner == null) return 1;
return a.owner.localeCompare(b.owner);
}
case clsQxPrjTabEN.con_Keyword:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.keyword == null) return -1;
if (b.keyword == null) return 1;
return a.keyword.localeCompare(b.keyword);
}
case clsQxPrjTabEN.con_TabTypeId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
return a.tabTypeId.localeCompare(b.tabTypeId);
}
case clsQxPrjTabEN.con_RelaViewId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.relaViewId == null) return -1;
if (b.relaViewId == null) return 1;
return a.relaViewId.localeCompare(b.relaViewId);
}
case clsQxPrjTabEN.con_PrimaryTypeId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.primaryTypeId == null) return -1;
if (b.primaryTypeId == null) return 1;
return a.primaryTypeId.localeCompare(b.primaryTypeId);
}
case clsQxPrjTabEN.con_PrimaryTypeName:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.primaryTypeName == null) return -1;
if (b.primaryTypeName == null) return 1;
return a.primaryTypeName.localeCompare(b.primaryTypeName);
}
case clsQxPrjTabEN.con_KeyFldId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.keyFldId == null) return -1;
if (b.keyFldId == null) return 1;
return a.keyFldId.localeCompare(b.keyFldId);
}
case clsQxPrjTabEN.con_KeyFldName:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.keyFldName == null) return -1;
if (b.keyFldName == null) return 1;
return a.keyFldName.localeCompare(b.keyFldName);
}
case clsQxPrjTabEN.con_UpdUserId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsQxPrjTabEN.con_UpdDate:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxPrjTabEN.con_Memo:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsQxPrjTabEN.con_SynchDate:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (a.synchDate == null) return -1;
if (b.synchDate == null) return 1;
return a.synchDate.localeCompare(b.synchDate);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjTab]中不存在!(in ${ qxPrjTab_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxPrjTabEN.con_TabId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
return b.tabId.localeCompare(a.tabId);
}
case clsQxPrjTabEN.con_TabName:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
return b.tabName.localeCompare(a.tabName);
}
case clsQxPrjTabEN.con_TabCnName:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.tabCnName == null) return -1;
if (a.tabCnName == null) return 1;
return b.tabCnName.localeCompare(a.tabCnName);
}
case clsQxPrjTabEN.con_QxPrjId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxPrjTabEN.con_SQLDSTypeId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.sQLDSTypeId == null) return -1;
if (a.sQLDSTypeId == null) return 1;
return b.sQLDSTypeId.localeCompare(a.sQLDSTypeId);
}
case clsQxPrjTabEN.con_TabStateId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
return b.tabStateId.localeCompare(a.tabStateId);
}
case clsQxPrjTabEN.con_IsParaTab:
return (b: clsQxPrjTabEN) => {
if (b.isParaTab == true) return 1;
else return -1
}
case clsQxPrjTabEN.con_FuncModuleAgcId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.funcModuleAgcId == null) return -1;
if (a.funcModuleAgcId == null) return 1;
return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
}
case clsQxPrjTabEN.con_Owner:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.owner == null) return -1;
if (a.owner == null) return 1;
return b.owner.localeCompare(a.owner);
}
case clsQxPrjTabEN.con_Keyword:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.keyword == null) return -1;
if (a.keyword == null) return 1;
return b.keyword.localeCompare(a.keyword);
}
case clsQxPrjTabEN.con_TabTypeId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
return b.tabTypeId.localeCompare(a.tabTypeId);
}
case clsQxPrjTabEN.con_RelaViewId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.relaViewId == null) return -1;
if (a.relaViewId == null) return 1;
return b.relaViewId.localeCompare(a.relaViewId);
}
case clsQxPrjTabEN.con_PrimaryTypeId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.primaryTypeId == null) return -1;
if (a.primaryTypeId == null) return 1;
return b.primaryTypeId.localeCompare(a.primaryTypeId);
}
case clsQxPrjTabEN.con_PrimaryTypeName:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.primaryTypeName == null) return -1;
if (a.primaryTypeName == null) return 1;
return b.primaryTypeName.localeCompare(a.primaryTypeName);
}
case clsQxPrjTabEN.con_KeyFldId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.keyFldId == null) return -1;
if (a.keyFldId == null) return 1;
return b.keyFldId.localeCompare(a.keyFldId);
}
case clsQxPrjTabEN.con_KeyFldName:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.keyFldName == null) return -1;
if (a.keyFldName == null) return 1;
return b.keyFldName.localeCompare(a.keyFldName);
}
case clsQxPrjTabEN.con_UpdUserId:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsQxPrjTabEN.con_UpdDate:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxPrjTabEN.con_Memo:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsQxPrjTabEN.con_SynchDate:
return (a: clsQxPrjTabEN, b: clsQxPrjTabEN) => {
if (b.synchDate == null) return -1;
if (a.synchDate == null) return 1;
return b.synchDate.localeCompare(a.synchDate);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjTab]中不存在!(in ${ qxPrjTab_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByTabIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxPrjTab_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxPrjTabEN.con_TabId:
return (obj: clsQxPrjTabEN) => {
return obj.tabId === value;
}
case clsQxPrjTabEN.con_TabName:
return (obj: clsQxPrjTabEN) => {
return obj.tabName === value;
}
case clsQxPrjTabEN.con_TabCnName:
return (obj: clsQxPrjTabEN) => {
return obj.tabCnName === value;
}
case clsQxPrjTabEN.con_QxPrjId:
return (obj: clsQxPrjTabEN) => {
return obj.qxPrjId === value;
}
case clsQxPrjTabEN.con_SQLDSTypeId:
return (obj: clsQxPrjTabEN) => {
return obj.sQLDSTypeId === value;
}
case clsQxPrjTabEN.con_TabStateId:
return (obj: clsQxPrjTabEN) => {
return obj.tabStateId === value;
}
case clsQxPrjTabEN.con_IsParaTab:
return (obj: clsQxPrjTabEN) => {
return obj.isParaTab === value;
}
case clsQxPrjTabEN.con_FuncModuleAgcId:
return (obj: clsQxPrjTabEN) => {
return obj.funcModuleAgcId === value;
}
case clsQxPrjTabEN.con_Owner:
return (obj: clsQxPrjTabEN) => {
return obj.owner === value;
}
case clsQxPrjTabEN.con_Keyword:
return (obj: clsQxPrjTabEN) => {
return obj.keyword === value;
}
case clsQxPrjTabEN.con_TabTypeId:
return (obj: clsQxPrjTabEN) => {
return obj.tabTypeId === value;
}
case clsQxPrjTabEN.con_RelaViewId:
return (obj: clsQxPrjTabEN) => {
return obj.relaViewId === value;
}
case clsQxPrjTabEN.con_PrimaryTypeId:
return (obj: clsQxPrjTabEN) => {
return obj.primaryTypeId === value;
}
case clsQxPrjTabEN.con_PrimaryTypeName:
return (obj: clsQxPrjTabEN) => {
return obj.primaryTypeName === value;
}
case clsQxPrjTabEN.con_KeyFldId:
return (obj: clsQxPrjTabEN) => {
return obj.keyFldId === value;
}
case clsQxPrjTabEN.con_KeyFldName:
return (obj: clsQxPrjTabEN) => {
return obj.keyFldName === value;
}
case clsQxPrjTabEN.con_UpdUserId:
return (obj: clsQxPrjTabEN) => {
return obj.updUserId === value;
}
case clsQxPrjTabEN.con_UpdDate:
return (obj: clsQxPrjTabEN) => {
return obj.updDate === value;
}
case clsQxPrjTabEN.con_Memo:
return (obj: clsQxPrjTabEN) => {
return obj.memo === value;
}
case clsQxPrjTabEN.con_SynchDate:
return (obj: clsQxPrjTabEN) => {
return obj.synchDate === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjTab]中不存在!(in ${ qxPrjTab_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxPrjTab__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPrjTab_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetFirstObjAsync(strWhereCond: string): Promise<clsQxPrjTabEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const objQxPrjTab = QxPrjTab_GetObjFromJsonObj(returnObj);
return objQxPrjTab;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxPrjTabEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjTab_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetObjLstByTabIdLstAsync(arrTabId: Array<string>): Promise<Array<clsQxPrjTabEN>>  
{
const strThisFuncName = "GetObjLstByTabIdLstAsync";
const strAction = "GetObjLstByTabIdLst";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjTab_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxPrjTabEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjTab_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxPrjTabEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjTab_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxPrjTabEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxPrjTabEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjTab_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
 * @param strTabId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxPrjTab_DelRecordAsync(strTabId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strTabId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
 * @param arrTabId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxPrjTab_DelQxPrjTabsAsync(arrTabId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxPrjTabsAsync";
const strAction = "DelQxPrjTabs";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_DelQxPrjTabsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxPrjTabsByCondAsync";
const strAction = "DelQxPrjTabsByCond";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
 * @param objQxPrjTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxPrjTab_AddNewRecordAsync(objQxPrjTabEN: clsQxPrjTabEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxPrjTabEN.tabId === null || objQxPrjTabEN.tabId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxPrjTabEN);
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjTabEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
 * @param objQxPrjTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxPrjTab_AddNewRecordWithMaxIdAsync(objQxPrjTabEN: clsQxPrjTabEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjTabEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_AddNewObjSave(objQxPrjTabEN: clsQxPrjTabEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxPrjTab_CheckPropertyNew(objQxPrjTabEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxPrjTab_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxPrjTab_CheckUniCond4Add(objQxPrjTabEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await QxPrjTab_AddNewRecordWithMaxIdAsync(objQxPrjTabEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
//QxPrjTab_ReFreshCache();
}
else
{
const strInfo = `添加[工程表(QxPrjTab)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxPrjTab_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxPrjTab_CheckUniCond4Add(objQxPrjTabEN: clsQxPrjTabEN): Promise<boolean>{
const strUniquenessCondition = QxPrjTab_GetUniCondStr(objQxPrjTabEN);
const bolIsExistCondition = await QxPrjTab_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxPrjTab_CheckUniCond4Update(objQxPrjTabEN: clsQxPrjTabEN): Promise<boolean>{
const strUniquenessCondition = QxPrjTab_GetUniCondStr4Update(objQxPrjTabEN);
const bolIsExistCondition = await QxPrjTab_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxPrjTab_UpdateObjSave(objQxPrjTabEN: clsQxPrjTabEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxPrjTabEN.sfUpdFldSetStr = objQxPrjTabEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxPrjTabEN.tabId == "" || objQxPrjTabEN.tabId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxPrjTab_CheckProperty4Update(objQxPrjTabEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxPrjTab_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxPrjTab_CheckUniCond4Update(objQxPrjTabEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxPrjTab_UpdateRecordAsync(objQxPrjTabEN);
if (returnBool == true)
{
//QxPrjTab_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxPrjTab_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxPrjTabEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxPrjTab_AddNewRecordWithReturnKeyAsync(objQxPrjTabEN: clsQxPrjTabEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjTabEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
 * @param objQxPrjTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxPrjTab_UpdateRecordAsync(objQxPrjTabEN: clsQxPrjTabEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxPrjTabEN.sfUpdFldSetStr === undefined || objQxPrjTabEN.sfUpdFldSetStr === null || objQxPrjTabEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjTabEN.tabId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjTabEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
 * @param objQxPrjTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxPrjTab_EditRecordExAsync(objQxPrjTabEN: clsQxPrjTabEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxPrjTabEN.sfUpdFldSetStr === undefined || objQxPrjTabEN.sfUpdFldSetStr === null || objQxPrjTabEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjTabEN.tabId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjTabEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
 * @param objQxPrjTabEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPrjTab_UpdateWithConditionAsync(objQxPrjTabEN: clsQxPrjTabEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxPrjTabEN.sfUpdFldSetStr === undefined || objQxPrjTabEN.sfUpdFldSetStr === null || objQxPrjTabEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjTabEN.tabId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);
objQxPrjTabEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjTabEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_IsExistAsync(strTabId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdByPrefixAsync";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  async function QxPrjTab_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxPrjTab_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjTab_ConstructorName, strThisFuncName);
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
export  function QxPrjTab_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function QxPrjTab_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await QxPrjTab_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxPrjTabEN.con_TabId, clsQxPrjTabEN.con_TabName, "工程表...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxPrjTab_GetArrQxPrjTab()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrQxPrjTab = new Array<clsQxPrjTabEN>();
const strCondition = `1=1`;
const arrObjLstSel = await QxPrjTab_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsQxPrjTabEN();
obj0.tabId = '0';
obj0.tabName = '选工程表...';
arrQxPrjTab.push(obj0);
arrObjLstSel.forEach(x => arrQxPrjTab.push(x));
return arrQxPrjTab;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxPrjTab_CheckPropertyNew(pobjQxPrjTabEN: clsQxPrjTabEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxPrjTabEN.tabName) === true )
{
 throw new Error(`(errid:Watl000411)字段[TabName]不能为空(In 工程表)!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.qxPrjId) === true 
 || pobjQxPrjTabEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 工程表)!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabStateId) === true )
{
 throw new Error(`(errid:Watl000411)字段[表状态ID]不能为空(In 工程表)!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[表类型Id]不能为空(In 工程表)!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPrjTabEN.tabId) == false && GetStrLen(pobjQxPrjTabEN.tabId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.tabId}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabName) == false && GetStrLen(pobjQxPrjTabEN.tabName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[TabName(tabName)]的长度不能超过100(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.tabName}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabCnName) == false && GetStrLen(pobjQxPrjTabEN.tabCnName) > 200)
{
 throw new Error(`(errid:Watl000413)字段[表中文名(tabCnName)]的长度不能超过200(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.tabCnName}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.qxPrjId) == false && GetStrLen(pobjQxPrjTabEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.qxPrjId}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.sQLDSTypeId) == false && GetStrLen(pobjQxPrjTabEN.sQLDSTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[数据源类型(sQLDSTypeId)]的长度不能超过2(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.sQLDSTypeId}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabStateId) == false && GetStrLen(pobjQxPrjTabEN.tabStateId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[表状态ID(tabStateId)]的长度不能超过2(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.tabStateId}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.funcModuleAgcId) == false && GetStrLen(pobjQxPrjTabEN.funcModuleAgcId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.funcModuleAgcId}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.owner) == false && GetStrLen(pobjQxPrjTabEN.owner) > 50)
{
 throw new Error(`(errid:Watl000413)字段[拥有者(owner)]的长度不能超过50(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.owner}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyword) == false && GetStrLen(pobjQxPrjTabEN.keyword) > 50)
{
 throw new Error(`(errid:Watl000413)字段[关键字(keyword)]的长度不能超过50(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.keyword}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabTypeId) == false && GetStrLen(pobjQxPrjTabEN.tabTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[表类型Id(tabTypeId)]的长度不能超过4(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.tabTypeId}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.relaViewId) == false && GetStrLen(pobjQxPrjTabEN.relaViewId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[RelaViewId(relaViewId)]的长度不能超过8(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.relaViewId}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.primaryTypeId) == false && GetStrLen(pobjQxPrjTabEN.primaryTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[主键类型ID(primaryTypeId)]的长度不能超过2(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.primaryTypeId}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.primaryTypeName) == false && GetStrLen(pobjQxPrjTabEN.primaryTypeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[主键类型名(primaryTypeName)]的长度不能超过30(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.primaryTypeName}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyFldId) == false && GetStrLen(pobjQxPrjTabEN.keyFldId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[关键字段Id(keyFldId)]的长度不能超过8(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.keyFldId}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyFldName) == false && GetStrLen(pobjQxPrjTabEN.keyFldName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[关键字段名(keyFldName)]的长度不能超过50(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.keyFldName}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.updUserId) == false && GetStrLen(pobjQxPrjTabEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.updUserId}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.updDate) == false && GetStrLen(pobjQxPrjTabEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.updDate}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.memo) == false && GetStrLen(pobjQxPrjTabEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.memo}(clsQxPrjTabBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.synchDate) == false && GetStrLen(pobjQxPrjTabEN.synchDate) > 30)
{
 throw new Error(`(errid:Watl000413)字段[同步日期(synchDate)]的长度不能超过30(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.synchDate}(clsQxPrjTabBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxPrjTabEN.tabId) == false && undefined !== pobjQxPrjTabEN.tabId && tzDataType.isString(pobjQxPrjTabEN.tabId) === false)
{
 throw new Error(`(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjQxPrjTabEN.tabId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabName) == false && undefined !== pobjQxPrjTabEN.tabName && tzDataType.isString(pobjQxPrjTabEN.tabName) === false)
{
 throw new Error(`(errid:Watl000414)字段[TabName(tabName)]的值:[${pobjQxPrjTabEN.tabName}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabCnName) == false && undefined !== pobjQxPrjTabEN.tabCnName && tzDataType.isString(pobjQxPrjTabEN.tabCnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[表中文名(tabCnName)]的值:[${pobjQxPrjTabEN.tabCnName}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.qxPrjId) == false && undefined !== pobjQxPrjTabEN.qxPrjId && tzDataType.isString(pobjQxPrjTabEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxPrjTabEN.qxPrjId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.sQLDSTypeId) == false && undefined !== pobjQxPrjTabEN.sQLDSTypeId && tzDataType.isString(pobjQxPrjTabEN.sQLDSTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[数据源类型(sQLDSTypeId)]的值:[${pobjQxPrjTabEN.sQLDSTypeId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabStateId) == false && undefined !== pobjQxPrjTabEN.tabStateId && tzDataType.isString(pobjQxPrjTabEN.tabStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[表状态ID(tabStateId)]的值:[${pobjQxPrjTabEN.tabStateId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (null != pobjQxPrjTabEN.isParaTab && undefined !== pobjQxPrjTabEN.isParaTab && tzDataType.isBoolean(pobjQxPrjTabEN.isParaTab) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否参数表(isParaTab)]的值:[${pobjQxPrjTabEN.isParaTab}], 非法,应该为布尔型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.funcModuleAgcId) == false && undefined !== pobjQxPrjTabEN.funcModuleAgcId && tzDataType.isString(pobjQxPrjTabEN.funcModuleAgcId) === false)
{
 throw new Error(`(errid:Watl000414)字段[功能模块Id(funcModuleAgcId)]的值:[${pobjQxPrjTabEN.funcModuleAgcId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.owner) == false && undefined !== pobjQxPrjTabEN.owner && tzDataType.isString(pobjQxPrjTabEN.owner) === false)
{
 throw new Error(`(errid:Watl000414)字段[拥有者(owner)]的值:[${pobjQxPrjTabEN.owner}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyword) == false && undefined !== pobjQxPrjTabEN.keyword && tzDataType.isString(pobjQxPrjTabEN.keyword) === false)
{
 throw new Error(`(errid:Watl000414)字段[关键字(keyword)]的值:[${pobjQxPrjTabEN.keyword}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabTypeId) == false && undefined !== pobjQxPrjTabEN.tabTypeId && tzDataType.isString(pobjQxPrjTabEN.tabTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[表类型Id(tabTypeId)]的值:[${pobjQxPrjTabEN.tabTypeId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.relaViewId) == false && undefined !== pobjQxPrjTabEN.relaViewId && tzDataType.isString(pobjQxPrjTabEN.relaViewId) === false)
{
 throw new Error(`(errid:Watl000414)字段[RelaViewId(relaViewId)]的值:[${pobjQxPrjTabEN.relaViewId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.primaryTypeId) == false && undefined !== pobjQxPrjTabEN.primaryTypeId && tzDataType.isString(pobjQxPrjTabEN.primaryTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[主键类型ID(primaryTypeId)]的值:[${pobjQxPrjTabEN.primaryTypeId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.primaryTypeName) == false && undefined !== pobjQxPrjTabEN.primaryTypeName && tzDataType.isString(pobjQxPrjTabEN.primaryTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[主键类型名(primaryTypeName)]的值:[${pobjQxPrjTabEN.primaryTypeName}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyFldId) == false && undefined !== pobjQxPrjTabEN.keyFldId && tzDataType.isString(pobjQxPrjTabEN.keyFldId) === false)
{
 throw new Error(`(errid:Watl000414)字段[关键字段Id(keyFldId)]的值:[${pobjQxPrjTabEN.keyFldId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyFldName) == false && undefined !== pobjQxPrjTabEN.keyFldName && tzDataType.isString(pobjQxPrjTabEN.keyFldName) === false)
{
 throw new Error(`(errid:Watl000414)字段[关键字段名(keyFldName)]的值:[${pobjQxPrjTabEN.keyFldName}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.updUserId) == false && undefined !== pobjQxPrjTabEN.updUserId && tzDataType.isString(pobjQxPrjTabEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjQxPrjTabEN.updUserId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.updDate) == false && undefined !== pobjQxPrjTabEN.updDate && tzDataType.isString(pobjQxPrjTabEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxPrjTabEN.updDate}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.memo) == false && undefined !== pobjQxPrjTabEN.memo && tzDataType.isString(pobjQxPrjTabEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxPrjTabEN.memo}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.synchDate) == false && undefined !== pobjQxPrjTabEN.synchDate && tzDataType.isString(pobjQxPrjTabEN.synchDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[同步日期(synchDate)]的值:[${pobjQxPrjTabEN.synchDate}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxPrjTabEN.qxPrjId) == false && pobjQxPrjTabEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxPrjTabEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 工程表)!(clsQxPrjTabBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxPrjTab_CheckProperty4Update(pobjQxPrjTabEN: clsQxPrjTabEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPrjTabEN.tabId) == false && GetStrLen(pobjQxPrjTabEN.tabId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.tabId}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabName) == false && GetStrLen(pobjQxPrjTabEN.tabName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[TabName(tabName)]的长度不能超过100(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.tabName}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabCnName) == false && GetStrLen(pobjQxPrjTabEN.tabCnName) > 200)
{
 throw new Error(`(errid:Watl000416)字段[表中文名(tabCnName)]的长度不能超过200(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.tabCnName}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.qxPrjId) == false && GetStrLen(pobjQxPrjTabEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.qxPrjId}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.sQLDSTypeId) == false && GetStrLen(pobjQxPrjTabEN.sQLDSTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[数据源类型(sQLDSTypeId)]的长度不能超过2(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.sQLDSTypeId}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabStateId) == false && GetStrLen(pobjQxPrjTabEN.tabStateId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[表状态ID(tabStateId)]的长度不能超过2(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.tabStateId}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.funcModuleAgcId) == false && GetStrLen(pobjQxPrjTabEN.funcModuleAgcId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.funcModuleAgcId}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.owner) == false && GetStrLen(pobjQxPrjTabEN.owner) > 50)
{
 throw new Error(`(errid:Watl000416)字段[拥有者(owner)]的长度不能超过50(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.owner}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyword) == false && GetStrLen(pobjQxPrjTabEN.keyword) > 50)
{
 throw new Error(`(errid:Watl000416)字段[关键字(keyword)]的长度不能超过50(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.keyword}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabTypeId) == false && GetStrLen(pobjQxPrjTabEN.tabTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[表类型Id(tabTypeId)]的长度不能超过4(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.tabTypeId}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.relaViewId) == false && GetStrLen(pobjQxPrjTabEN.relaViewId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[RelaViewId(relaViewId)]的长度不能超过8(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.relaViewId}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.primaryTypeId) == false && GetStrLen(pobjQxPrjTabEN.primaryTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[主键类型ID(primaryTypeId)]的长度不能超过2(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.primaryTypeId}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.primaryTypeName) == false && GetStrLen(pobjQxPrjTabEN.primaryTypeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[主键类型名(primaryTypeName)]的长度不能超过30(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.primaryTypeName}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyFldId) == false && GetStrLen(pobjQxPrjTabEN.keyFldId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[关键字段Id(keyFldId)]的长度不能超过8(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.keyFldId}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyFldName) == false && GetStrLen(pobjQxPrjTabEN.keyFldName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[关键字段名(keyFldName)]的长度不能超过50(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.keyFldName}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.updUserId) == false && GetStrLen(pobjQxPrjTabEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.updUserId}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.updDate) == false && GetStrLen(pobjQxPrjTabEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.updDate}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.memo) == false && GetStrLen(pobjQxPrjTabEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.memo}(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.synchDate) == false && GetStrLen(pobjQxPrjTabEN.synchDate) > 30)
{
 throw new Error(`(errid:Watl000416)字段[同步日期(synchDate)]的长度不能超过30(In 工程表(QxPrjTab))!值:${pobjQxPrjTabEN.synchDate}(clsQxPrjTabBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxPrjTabEN.tabId) == false && undefined !== pobjQxPrjTabEN.tabId && tzDataType.isString(pobjQxPrjTabEN.tabId) === false)
{
 throw new Error(`(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjQxPrjTabEN.tabId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabName) == false && undefined !== pobjQxPrjTabEN.tabName && tzDataType.isString(pobjQxPrjTabEN.tabName) === false)
{
 throw new Error(`(errid:Watl000417)字段[TabName(tabName)]的值:[${pobjQxPrjTabEN.tabName}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabCnName) == false && undefined !== pobjQxPrjTabEN.tabCnName && tzDataType.isString(pobjQxPrjTabEN.tabCnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[表中文名(tabCnName)]的值:[${pobjQxPrjTabEN.tabCnName}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.qxPrjId) == false && undefined !== pobjQxPrjTabEN.qxPrjId && tzDataType.isString(pobjQxPrjTabEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxPrjTabEN.qxPrjId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.sQLDSTypeId) == false && undefined !== pobjQxPrjTabEN.sQLDSTypeId && tzDataType.isString(pobjQxPrjTabEN.sQLDSTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[数据源类型(sQLDSTypeId)]的值:[${pobjQxPrjTabEN.sQLDSTypeId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabStateId) == false && undefined !== pobjQxPrjTabEN.tabStateId && tzDataType.isString(pobjQxPrjTabEN.tabStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[表状态ID(tabStateId)]的值:[${pobjQxPrjTabEN.tabStateId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (null != pobjQxPrjTabEN.isParaTab && undefined !== pobjQxPrjTabEN.isParaTab && tzDataType.isBoolean(pobjQxPrjTabEN.isParaTab) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否参数表(isParaTab)]的值:[${pobjQxPrjTabEN.isParaTab}], 非法,应该为布尔型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.funcModuleAgcId) == false && undefined !== pobjQxPrjTabEN.funcModuleAgcId && tzDataType.isString(pobjQxPrjTabEN.funcModuleAgcId) === false)
{
 throw new Error(`(errid:Watl000417)字段[功能模块Id(funcModuleAgcId)]的值:[${pobjQxPrjTabEN.funcModuleAgcId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.owner) == false && undefined !== pobjQxPrjTabEN.owner && tzDataType.isString(pobjQxPrjTabEN.owner) === false)
{
 throw new Error(`(errid:Watl000417)字段[拥有者(owner)]的值:[${pobjQxPrjTabEN.owner}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyword) == false && undefined !== pobjQxPrjTabEN.keyword && tzDataType.isString(pobjQxPrjTabEN.keyword) === false)
{
 throw new Error(`(errid:Watl000417)字段[关键字(keyword)]的值:[${pobjQxPrjTabEN.keyword}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.tabTypeId) == false && undefined !== pobjQxPrjTabEN.tabTypeId && tzDataType.isString(pobjQxPrjTabEN.tabTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[表类型Id(tabTypeId)]的值:[${pobjQxPrjTabEN.tabTypeId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.relaViewId) == false && undefined !== pobjQxPrjTabEN.relaViewId && tzDataType.isString(pobjQxPrjTabEN.relaViewId) === false)
{
 throw new Error(`(errid:Watl000417)字段[RelaViewId(relaViewId)]的值:[${pobjQxPrjTabEN.relaViewId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.primaryTypeId) == false && undefined !== pobjQxPrjTabEN.primaryTypeId && tzDataType.isString(pobjQxPrjTabEN.primaryTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[主键类型ID(primaryTypeId)]的值:[${pobjQxPrjTabEN.primaryTypeId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.primaryTypeName) == false && undefined !== pobjQxPrjTabEN.primaryTypeName && tzDataType.isString(pobjQxPrjTabEN.primaryTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[主键类型名(primaryTypeName)]的值:[${pobjQxPrjTabEN.primaryTypeName}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyFldId) == false && undefined !== pobjQxPrjTabEN.keyFldId && tzDataType.isString(pobjQxPrjTabEN.keyFldId) === false)
{
 throw new Error(`(errid:Watl000417)字段[关键字段Id(keyFldId)]的值:[${pobjQxPrjTabEN.keyFldId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.keyFldName) == false && undefined !== pobjQxPrjTabEN.keyFldName && tzDataType.isString(pobjQxPrjTabEN.keyFldName) === false)
{
 throw new Error(`(errid:Watl000417)字段[关键字段名(keyFldName)]的值:[${pobjQxPrjTabEN.keyFldName}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.updUserId) == false && undefined !== pobjQxPrjTabEN.updUserId && tzDataType.isString(pobjQxPrjTabEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjQxPrjTabEN.updUserId}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.updDate) == false && undefined !== pobjQxPrjTabEN.updDate && tzDataType.isString(pobjQxPrjTabEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxPrjTabEN.updDate}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.memo) == false && undefined !== pobjQxPrjTabEN.memo && tzDataType.isString(pobjQxPrjTabEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxPrjTabEN.memo}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjTabEN.synchDate) == false && undefined !== pobjQxPrjTabEN.synchDate && tzDataType.isString(pobjQxPrjTabEN.synchDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[同步日期(synchDate)]的值:[${pobjQxPrjTabEN.synchDate}], 非法,应该为字符型(In 工程表(QxPrjTab))!(clsQxPrjTabBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxPrjTabEN.tabId) === true )
{
 throw new Error(`(errid:Watl000064)字段[表ID]不能为空(In 工程表)!(clsQxPrjTabBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxPrjTabEN.qxPrjId) == false && pobjQxPrjTabEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxPrjTabEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 工程表)!(clsQxPrjTabBL:CheckPropertyNew)");
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
export  function QxPrjTab_GetJSONStrByObj (pobjQxPrjTabEN: clsQxPrjTabEN): string
{
pobjQxPrjTabEN.sfUpdFldSetStr = pobjQxPrjTabEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxPrjTabEN);
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
export  function QxPrjTab_GetObjLstByJSONStr (strJSON: string): Array<clsQxPrjTabEN>
{
let arrQxPrjTabObjLst = new Array<clsQxPrjTabEN>();
if (strJSON === "")
{
return arrQxPrjTabObjLst;
}
try
{
arrQxPrjTabObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxPrjTabObjLst;
}
return arrQxPrjTabObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxPrjTabObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxPrjTab_GetObjLstByJSONObjLst (arrQxPrjTabObjLstS: Array<clsQxPrjTabEN>): Array<clsQxPrjTabEN>
{
const arrQxPrjTabObjLst = new Array<clsQxPrjTabEN>();
for (const objInFor of arrQxPrjTabObjLstS) {
const obj1 = QxPrjTab_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxPrjTabObjLst.push(obj1);
}
return arrQxPrjTabObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxPrjTab_GetObjByJSONStr (strJSON: string): clsQxPrjTabEN
{
let pobjQxPrjTabEN = new clsQxPrjTabEN();
if (strJSON === "")
{
return pobjQxPrjTabEN;
}
try
{
pobjQxPrjTabEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxPrjTabEN;
}
return pobjQxPrjTabEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxPrjTab_GetCombineCondition(objQxPrjTabCond: clsQxPrjTabEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_TabId) == true)
{
const strComparisonOpTabId:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_TabId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_TabId, objQxPrjTabCond.tabId, strComparisonOpTabId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_TabName) == true)
{
const strComparisonOpTabName:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_TabName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_TabName, objQxPrjTabCond.tabName, strComparisonOpTabName);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_TabCnName) == true)
{
const strComparisonOpTabCnName:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_TabCnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_TabCnName, objQxPrjTabCond.tabCnName, strComparisonOpTabCnName);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_QxPrjId, objQxPrjTabCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_SQLDSTypeId) == true)
{
const strComparisonOpSQLDSTypeId:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_SQLDSTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_SQLDSTypeId, objQxPrjTabCond.sQLDSTypeId, strComparisonOpSQLDSTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_TabStateId) == true)
{
const strComparisonOpTabStateId:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_TabStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_TabStateId, objQxPrjTabCond.tabStateId, strComparisonOpTabStateId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_IsParaTab) == true)
{
if (objQxPrjTabCond.isParaTab == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxPrjTabEN.con_IsParaTab);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxPrjTabEN.con_IsParaTab);
}
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_FuncModuleAgcId) == true)
{
const strComparisonOpFuncModuleAgcId:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_FuncModuleAgcId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_FuncModuleAgcId, objQxPrjTabCond.funcModuleAgcId, strComparisonOpFuncModuleAgcId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_Owner) == true)
{
const strComparisonOpOwner:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_Owner];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_Owner, objQxPrjTabCond.owner, strComparisonOpOwner);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_Keyword) == true)
{
const strComparisonOpKeyword:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_Keyword];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_Keyword, objQxPrjTabCond.keyword, strComparisonOpKeyword);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_TabTypeId) == true)
{
const strComparisonOpTabTypeId:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_TabTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_TabTypeId, objQxPrjTabCond.tabTypeId, strComparisonOpTabTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_RelaViewId) == true)
{
const strComparisonOpRelaViewId:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_RelaViewId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_RelaViewId, objQxPrjTabCond.relaViewId, strComparisonOpRelaViewId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_PrimaryTypeId) == true)
{
const strComparisonOpPrimaryTypeId:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_PrimaryTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_PrimaryTypeId, objQxPrjTabCond.primaryTypeId, strComparisonOpPrimaryTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_PrimaryTypeName) == true)
{
const strComparisonOpPrimaryTypeName:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_PrimaryTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_PrimaryTypeName, objQxPrjTabCond.primaryTypeName, strComparisonOpPrimaryTypeName);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_KeyFldId) == true)
{
const strComparisonOpKeyFldId:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_KeyFldId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_KeyFldId, objQxPrjTabCond.keyFldId, strComparisonOpKeyFldId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_KeyFldName) == true)
{
const strComparisonOpKeyFldName:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_KeyFldName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_KeyFldName, objQxPrjTabCond.keyFldName, strComparisonOpKeyFldName);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_UpdUserId, objQxPrjTabCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_UpdDate, objQxPrjTabCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_Memo, objQxPrjTabCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjTabCond.dicFldComparisonOp, clsQxPrjTabEN.con_SynchDate) == true)
{
const strComparisonOpSynchDate:string = objQxPrjTabCond.dicFldComparisonOp[clsQxPrjTabEN.con_SynchDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjTabEN.con_SynchDate, objQxPrjTabCond.synchDate, strComparisonOpSynchDate);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPrjTab(工程表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabName: TabName(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPrjTab_GetUniCondStr(objQxPrjTabEN: clsQxPrjTabEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and TabName = '{0}'", objQxPrjTabEN.tabName);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxPrjTabEN.qxPrjId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPrjTab(工程表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabName: TabName(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPrjTab_GetUniCondStr4Update(objQxPrjTabEN: clsQxPrjTabEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and TabId <> '{0}'", objQxPrjTabEN.tabId);
 strWhereCond +=  Format(" and TabName = '{0}'", objQxPrjTabEN.tabName);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxPrjTabEN.qxPrjId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxPrjTabENS:源对象
 * @param objQxPrjTabENT:目标对象
*/
export  function QxPrjTab_GetObjFromJsonObj(objQxPrjTabENS: clsQxPrjTabEN): clsQxPrjTabEN 
{
 const objQxPrjTabENT: clsQxPrjTabEN = new clsQxPrjTabEN();
ObjectAssign(objQxPrjTabENT, objQxPrjTabENS);
 return objQxPrjTabENT;
}