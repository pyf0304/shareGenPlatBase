
 /**
 * 类名:clsQxRoleRightRelationWApi
 * 表名:QxRoleRightRelation(00140118)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:27:53
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色赋权关系(QxRoleRightRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { GetSortExpressInfo,ObjectAssign,GetExceptionStr,myShowErrorMsg } from "@/ts/PubFun/clsCommFunc4Web";
import { qxRoleRightRelationCache,isFuncMapCache } from "@/viewsShare/UserManage_GP/QxRoleRightRelationVueShare";
import { clsQxRoleRightRelationENEx } from "@/ts/L0Entity/UserManage_GP/clsQxRoleRightRelationENEx";
import { clsQxRoleRightRelationEN } from "@/ts/L0Entity/UserManage_GP/clsQxRoleRightRelationEN";
import { Format,GetStrLen,tzDataType,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { QxProjects_func } from "@/ts/L3ForWApi/PrjManage_GP/clsQxProjectsWApi";
import { clsQxProjectsEN } from "@/ts/L0Entity/PrjManage_GP/clsQxProjectsEN";
import { QxRoles_func } from "@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi";
import { clsQxRolesEN } from "@/ts/L0Entity/UserManage_GP/clsQxRolesEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const qxRoleRightRelation_Controller = "QxRoleRightRelationApi";
 export const qxRoleRightRelation_ConstructorName = "qxRoleRightRelation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function QxRoleRightRelation_GetObjBymIdAsync(lngmId: number): Promise<clsQxRoleRightRelationEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxRoleRightRelationWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const objQxRoleRightRelation = QxRoleRightRelation_GetObjFromJsonObj(returnObj);
return objQxRoleRightRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function QxRoleRightRelation_GetObjBymIdlocalStorage(lngmId: number) {
const strThisFuncName = "GetObjBymIdlocalStorage";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxRoleRightRelationWApi.GetObjBymIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxRoleRightRelationEN._CurrTabName, lngmId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxRoleRightRelationCache: clsQxRoleRightRelationEN = JSON.parse(strTempObj);
return objQxRoleRightRelationCache;
}
try
{
const objQxRoleRightRelation = await QxRoleRightRelation_GetObjBymIdAsync(lngmId);
if (objQxRoleRightRelation != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxRoleRightRelation));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxRoleRightRelation;
}
return objQxRoleRightRelation;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function QxRoleRightRelation_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBymIdCache";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxRoleRightRelationWApi.GetObjBymIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstCache();
try
{
const arrQxRoleRightRelationSel = arrQxRoleRightRelationObjLstCache.filter(x => 
 x.mId == lngmId );
let objQxRoleRightRelation: clsQxRoleRightRelationEN;
if (arrQxRoleRightRelationSel.length > 0)
{
objQxRoleRightRelation = arrQxRoleRightRelationSel[0];
return objQxRoleRightRelation;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxRoleRightRelationConst = await QxRoleRightRelation_GetObjBymIdAsync(lngmId);
if (objQxRoleRightRelationConst != null)
{
QxRoleRightRelation_ReFreshThisCache();
return objQxRoleRightRelationConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxRoleRightRelation:所给的对象
 * @returns 对象
*/
export  async function QxRoleRightRelation_UpdateObjInLstCache(objQxRoleRightRelation: clsQxRoleRightRelationEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstCache();
const obj = arrQxRoleRightRelationObjLstCache.find(x => x.myRoleId == objQxRoleRightRelation.myRoleId && x.roleId == objQxRoleRightRelation.roleId);
if (obj != null)
{
objQxRoleRightRelation.mId = obj.mId;
ObjectAssign( obj, objQxRoleRightRelation);
}
else
{
arrQxRoleRightRelationObjLstCache.push(objQxRoleRightRelation);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRoleRightRelation_SortFunDefa(a:clsQxRoleRightRelationEN , b:clsQxRoleRightRelationEN): number 
{
return a.mId-b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRoleRightRelation_SortFunDefa2Fld(a:clsQxRoleRightRelationEN , b:clsQxRoleRightRelationEN): number 
{
if (a.myRoleId == b.myRoleId) return a.roleId.localeCompare(b.roleId);
else return a.myRoleId.localeCompare(b.myRoleId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRoleRightRelation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxRoleRightRelationEN.con_mId:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return a.mId-b.mId;
}
case clsQxRoleRightRelationEN.con_MyRoleId:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return a.myRoleId.localeCompare(b.myRoleId);
}
case clsQxRoleRightRelationEN.con_RoleId:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return a.roleId.localeCompare(b.roleId);
}
case clsQxRoleRightRelationEN.con_QxPrjId:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxRoleRightRelationEN.con_UpdDate:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQxRoleRightRelationEN.con_UpdUser:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsQxRoleRightRelationEN.con_Memo:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRoleRightRelation]中不存在!(in ${ qxRoleRightRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxRoleRightRelationEN.con_mId:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return b.mId-a.mId;
}
case clsQxRoleRightRelationEN.con_MyRoleId:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return b.myRoleId.localeCompare(a.myRoleId);
}
case clsQxRoleRightRelationEN.con_RoleId:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return b.roleId.localeCompare(a.roleId);
}
case clsQxRoleRightRelationEN.con_QxPrjId:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxRoleRightRelationEN.con_UpdDate:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQxRoleRightRelationEN.con_UpdUser:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsQxRoleRightRelationEN.con_Memo:
return (a: clsQxRoleRightRelationEN, b: clsQxRoleRightRelationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRoleRightRelation]中不存在!(in ${ qxRoleRightRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxRoleRightRelation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxRoleRightRelationEN.con_mId:
return (obj: clsQxRoleRightRelationEN) => {
return obj.mId === value;
}
case clsQxRoleRightRelationEN.con_MyRoleId:
return (obj: clsQxRoleRightRelationEN) => {
return obj.myRoleId === value;
}
case clsQxRoleRightRelationEN.con_RoleId:
return (obj: clsQxRoleRightRelationEN) => {
return obj.roleId === value;
}
case clsQxRoleRightRelationEN.con_QxPrjId:
return (obj: clsQxRoleRightRelationEN) => {
return obj.qxPrjId === value;
}
case clsQxRoleRightRelationEN.con_UpdDate:
return (obj: clsQxRoleRightRelationEN) => {
return obj.updDate === value;
}
case clsQxRoleRightRelationEN.con_UpdUser:
return (obj: clsQxRoleRightRelationEN) => {
return obj.updUser === value;
}
case clsQxRoleRightRelationEN.con_Memo:
return (obj: clsQxRoleRightRelationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRoleRightRelation]中不存在!(in ${ qxRoleRightRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function QxRoleRightRelation_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQxRoleRightRelationEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxRoleRightRelationEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxRoleRightRelationEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngmId = Number(strInValue);
if (lngmId == 0)
{
return "";
}
const objQxRoleRightRelation = await QxRoleRightRelation_GetObjBymIdCache(lngmId );
if (objQxRoleRightRelation == null) return "";
if (objQxRoleRightRelation.GetFldValue(strOutFldName) == null) return "";
return objQxRoleRightRelation.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function QxRoleRightRelation_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<number>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQxRoleRightRelationEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrQxRoleRightRelation = await QxRoleRightRelation_GetObjLstCache();
if (arrQxRoleRightRelation == null) return [];
let arrQxRoleRightRelationSel = arrQxRoleRightRelation;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxRoleRightRelationSel.length == 0) return [];
return arrQxRoleRightRelationSel.map(x=>x.mId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRoleRightRelation_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
export  async function QxRoleRightRelation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
export  async function QxRoleRightRelation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
export  async function QxRoleRightRelation_GetFirstObjAsync(strWhereCond: string): Promise<clsQxRoleRightRelationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const objQxRoleRightRelation = QxRoleRightRelation_GetObjFromJsonObj(returnObj);
return objQxRoleRightRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleRightRelation_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxRoleRightRelationEN._CurrTabName;
if (IsNullOrEmpty(clsQxRoleRightRelationEN.WhereFormat) == false)
{
strWhereCond = clsQxRoleRightRelationEN.WhereFormat;
}
if (IsNullOrEmpty(clsQxRoleRightRelationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxRoleRightRelationEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxRoleRightRelationExObjLstCache: Array<clsQxRoleRightRelationEN> = CacheHelper.Get(strKey);
const arrQxRoleRightRelationObjLstT = QxRoleRightRelation_GetObjLstByJSONObjLst(arrQxRoleRightRelationExObjLstCache);
return arrQxRoleRightRelationObjLstT;
}
try
{
const arrQxRoleRightRelationExObjLst = await QxRoleRightRelation_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxRoleRightRelationExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxRoleRightRelationExObjLst.length);
console.log(strInfo);
return arrQxRoleRightRelationExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleRightRelation_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxRoleRightRelationEN._CurrTabName;
if (IsNullOrEmpty(clsQxRoleRightRelationEN.WhereFormat) == false)
{
strWhereCond = clsQxRoleRightRelationEN.WhereFormat;
}
if (IsNullOrEmpty(clsQxRoleRightRelationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxRoleRightRelationEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxRoleRightRelationExObjLstCache: Array<clsQxRoleRightRelationEN> = JSON.parse(strTempObjLst);
const arrQxRoleRightRelationObjLstT = QxRoleRightRelation_GetObjLstByJSONObjLst(arrQxRoleRightRelationExObjLstCache);
return arrQxRoleRightRelationObjLstT;
}
try
{
const arrQxRoleRightRelationExObjLst = await QxRoleRightRelation_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxRoleRightRelationExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxRoleRightRelationExObjLst.length);
console.log(strInfo);
return arrQxRoleRightRelationExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleRightRelation_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxRoleRightRelationEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxRoleRightRelationObjLstCache: Array<clsQxRoleRightRelationEN> = JSON.parse(strTempObjLst);
return arrQxRoleRightRelationObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxRoleRightRelation_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxRoleRightRelationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoleRightRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleRightRelation_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxRoleRightRelationEN._CurrTabName;
if (IsNullOrEmpty(clsQxRoleRightRelationEN.WhereFormat) == false)
{
strWhereCond = clsQxRoleRightRelationEN.WhereFormat;
}
if (IsNullOrEmpty(clsQxRoleRightRelationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxRoleRightRelationEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxRoleRightRelationExObjLstCache: Array<clsQxRoleRightRelationEN> = JSON.parse(strTempObjLst);
const arrQxRoleRightRelationObjLstT = QxRoleRightRelation_GetObjLstByJSONObjLst(arrQxRoleRightRelationExObjLstCache);
return arrQxRoleRightRelationObjLstT;
}
try
{
const arrQxRoleRightRelationExObjLst = await QxRoleRightRelation_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxRoleRightRelationExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxRoleRightRelationExObjLst.length);
console.log(strInfo);
return arrQxRoleRightRelationExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleRightRelation_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxRoleRightRelationEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxRoleRightRelationObjLstCache: Array<clsQxRoleRightRelationEN> = JSON.parse(strTempObjLst);
return arrQxRoleRightRelationObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleRightRelation_GetObjLstCache(): Promise<Array<clsQxRoleRightRelationEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQxRoleRightRelationObjLstCache;
switch (clsQxRoleRightRelationEN.CacheModeId)
{
case "04"://sessionStorage
arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstClientCache();
break;
default:
arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstClientCache();
break;
}
return arrQxRoleRightRelationObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleRightRelation_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxRoleRightRelationObjLstCache;
switch (clsQxRoleRightRelationEN.CacheModeId)
{
case "04"://sessionStorage
arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQxRoleRightRelationObjLstCache = null;
break;
default:
arrQxRoleRightRelationObjLstCache = null;
break;
}
return arrQxRoleRightRelationObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxRoleRightRelation_GetSubObjLstCache(objQxRoleRightRelationCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstCache();
let arrQxRoleRightRelationSel = arrQxRoleRightRelationObjLstCache;
if (objQxRoleRightRelationCond.GetConditions().length == 0) return arrQxRoleRightRelationSel;
try {
//console.log(sstrKeys);
for (const objCondition of objQxRoleRightRelationCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxRoleRightRelationSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxRoleRightRelationCond), qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxRoleRightRelationEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function QxRoleRightRelation_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsQxRoleRightRelationEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoleRightRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxRoleRightRelation_GetObjLstBymIdLstCache(arrmIdLst: Array<number> ) {
const strThisFuncName = "GetObjLstBymIdLstCache";
try
{
const arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstCache();
const arrQxRoleRightRelationSel = arrQxRoleRightRelationObjLstCache.filter(x => arrmIdLst.indexOf(x.mId)>-1);
return arrQxRoleRightRelationSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrmIdLst.join(","), qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
}

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxRoleRightRelation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxRoleRightRelationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoleRightRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
export  async function QxRoleRightRelation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxRoleRightRelationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoleRightRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function QxRoleRightRelation_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQxRoleRightRelationEN>();
const arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstCache();
if (arrQxRoleRightRelationObjLstCache.length == 0) return arrQxRoleRightRelationObjLstCache;
let arrQxRoleRightRelationSel = arrQxRoleRightRelationObjLstCache;
const objQxRoleRightRelationCond = objPagerPara.conditionCollection;
if (objQxRoleRightRelationCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return new Array<clsQxRoleRightRelationEN>();
}
//console.log("clsQxRoleRightRelationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objQxRoleRightRelationCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxRoleRightRelationSel.length == 0) return arrQxRoleRightRelationSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.sort(QxRoleRightRelation_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.sort(objPagerPara.sortFun);
}
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.slice(intStart, intEnd);     
return arrQxRoleRightRelationSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxRoleRightRelationEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxRoleRightRelation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxRoleRightRelationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxRoleRightRelationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoleRightRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
export  async function QxRoleRightRelation_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
export  async function QxRoleRightRelation_DelQxRoleRightRelationsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxRoleRightRelationsAsync";
const strAction = "DelQxRoleRightRelations";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function QxRoleRightRelation_GetObjExLstByPagerCache(objPagerPara: stuPagerPara ):Promise<Array<clsQxRoleRightRelationENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
 const objSortInfo = GetSortExpressInfo(objPagerPara);
const isFuncMapKey = `${ objSortInfo.SortFld}`;
const arrQxRoleRightRelationObjLst = await QxRoleRightRelation_GetObjLstCache();
//从缓存中获取对象，如果缓存中不存在就扩展复制
const arrNewObj = new Array<clsQxRoleRightRelationENEx>();
const arrQxRoleRightRelationExObjLst = arrQxRoleRightRelationObjLst.map((obj) => {
const cacheKey = `${ obj.mId}`;
if (qxRoleRightRelationCache[cacheKey])
{
const oldObj = qxRoleRightRelationCache[cacheKey];
return oldObj;
}
else
{
const newObj = QxRoleRightRelation_CopyToEx(obj);
arrNewObj.push(newObj);
qxRoleRightRelationCache[cacheKey] = newObj;
return newObj;
}
});
for (const newObj of arrNewObj) {
for (const strFldName of Object.keys(isFuncMapCache)) {
await QxRoleRightRelation_FuncMapByFldName(strFldName, newObj);
}
}
//检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
if (
IsNullOrEmpty(objSortInfo.SortFld) == false &&
clsQxRoleRightRelationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
(bolIsFuncMap == false || bolIsFuncMap == undefined)
)
{
for (const newObj of arrQxRoleRightRelationExObjLst) {
await QxRoleRightRelation_FuncMapByFldName(objSortInfo.SortFld, newObj);
const cacheKey = `${ newObj.mId}`;
qxRoleRightRelationCache[cacheKey] = newObj;
}
isFuncMapCache[isFuncMapKey] = true;
}
if (arrQxRoleRightRelationExObjLst.length == 0) return arrQxRoleRightRelationExObjLst;
let arrQxRoleRightRelationSel: Array < clsQxRoleRightRelationENEx > = arrQxRoleRightRelationExObjLst;
const objQxRoleRightRelationCond = objPagerPara.conditionCollection;
if (objQxRoleRightRelationCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return arrQxRoleRightRelationExObjLst;
}
try {
for (const objCondition of objQxRoleRightRelationCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxRoleRightRelationSel.length == 0) return arrQxRoleRightRelationSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.sort(QxRoleRightRelation_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.sort(objPagerPara.sortFun);
}
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.slice(intStart, intEnd);     
return arrQxRoleRightRelationSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxRoleRightRelationENEx>();
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objQxRoleRightRelationENS:源对象
 * @returns 目标对象=>clsQxRoleRightRelationEN:objQxRoleRightRelationENT
 **/
export  function QxRoleRightRelation_CopyToEx(objQxRoleRightRelationENS:clsQxRoleRightRelationEN ): clsQxRoleRightRelationENEx
{
const strThisFuncName  = QxRoleRightRelation_CopyToEx.name;
 const objQxRoleRightRelationENT = new clsQxRoleRightRelationENEx();
try
{
ObjectAssign(objQxRoleRightRelationENT, objQxRoleRightRelationENS);
 return objQxRoleRightRelationENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objQxRoleRightRelationENT;
}
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function QxRoleRightRelation_FuncMapByFldName(strFldName: string, objQxRoleRightRelationEx: clsQxRoleRightRelationENEx)
{
const strThisFuncName = QxRoleRightRelation_FuncMapByFldName.name;
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsQxRoleRightRelationEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clsQxRoleRightRelationENEx.con_RoleName:
return QxRoleRightRelation_FuncMapRoleName(objQxRoleRightRelationEx);
case clsQxRoleRightRelationENEx.con_MyRoleName:
return QxRoleRightRelation_FuncMapMyRoleName(objQxRoleRightRelationEx);
case clsQxRoleRightRelationENEx.con_PrjName:
return QxRoleRightRelation_FuncMapPrjName(objQxRoleRightRelationEx);
case clsQxRoleRightRelationENEx.con_DateTimeSim:
return QxRoleRightRelation_FuncMapDateTimeSim(objQxRoleRightRelationEx);
        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRoleRightRelation_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxRoleRightRelationENEx.con_RoleName:
return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
return a.roleName.localeCompare(b.roleName);
}
case clsQxRoleRightRelationENEx.con_MyRoleName:
return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
return a.myRoleName.localeCompare(b.myRoleName);
}
case clsQxRoleRightRelationENEx.con_PrjName:
return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
return a.prjName.localeCompare(b.prjName);
}
case clsQxRoleRightRelationENEx.con_DateTimeSim:
return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
    if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
if (a.dateTimeSim === null) return -1;
if (b.dateTimeSim === null) return 1;
return a.dateTimeSim.localeCompare(b.dateTimeSim);
}
        default:
return QxRoleRightRelation_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsQxRoleRightRelationENEx.con_RoleName:
return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
return b.roleName.localeCompare(a.roleName);
}
case clsQxRoleRightRelationENEx.con_MyRoleName:
return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
return b.myRoleName.localeCompare(a.myRoleName);
}
case clsQxRoleRightRelationENEx.con_PrjName:
return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
return b.prjName.localeCompare(a.prjName);
}
case clsQxRoleRightRelationENEx.con_DateTimeSim:
return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
    if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
if (a.dateTimeSim === null) return 1;
if (b.dateTimeSim === null) return -1;
return b.dateTimeSim.localeCompare(a.dateTimeSim);
}
        default:
return QxRoleRightRelation_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objQxRoleRightRelationS:源对象
 **/
export  async function QxRoleRightRelation_FuncMapPrjName(objQxRoleRightRelation:clsQxRoleRightRelationENEx )
{
const strThisFuncName = QxRoleRightRelation_FuncMapPrjName.name;
try
{
if (IsNullOrEmpty(objQxRoleRightRelation.prjName) == true){
 const QxProjectsQxPrjId = objQxRoleRightRelation.qxPrjId;
 const QxProjectsPrjName = await QxProjects_func(clsQxProjectsEN.con_QxPrjId, clsQxProjectsEN.con_PrjName, QxProjectsQxPrjId );
 objQxRoleRightRelation.prjName = QxProjectsPrjName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001315)函数映射表对象数据出错,{0}.(in {1}.{2})", e, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objQxRoleRightRelationS:源对象
 **/
export  async function QxRoleRightRelation_FuncMapRoleName(objQxRoleRightRelation:clsQxRoleRightRelationENEx )
{
const strThisFuncName = QxRoleRightRelation_FuncMapRoleName.name;
try
{
if (IsNullOrEmpty(objQxRoleRightRelation.roleName) == true){
 const QxUserRolesRoleId = objQxRoleRightRelation.roleId;
if (IsNullOrEmpty(objQxRoleRightRelation.qxPrjId) == true)
{
const strMsg = `函数映射[RoleName]数据出错,qxPrjId不能为空!(in ${ qxRoleRightRelation_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const QxUserRolesRoleName = await QxRoles_func(clsQxRolesEN.con_RoleId, clsQxRolesEN.con_RoleName, QxUserRolesRoleId , objQxRoleRightRelation.qxPrjId);
 objQxRoleRightRelation.roleName = QxUserRolesRoleName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001496)函数映射表对象数据出错,{0}.(in {1}.{2})", e, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objQxRoleRightRelationS:源对象
 **/
export  async function QxRoleRightRelation_FuncMapMyRoleName(objQxRoleRightRelation:clsQxRoleRightRelationENEx )
{
const strThisFuncName = QxRoleRightRelation_FuncMapMyRoleName.name;
try
{
if (IsNullOrEmpty(objQxRoleRightRelation.myRoleName) == true){
 const QxUserRolesRoleId = objQxRoleRightRelation.roleId;
if (IsNullOrEmpty(objQxRoleRightRelation.qxPrjId) == true)
{
const strMsg = `函数映射[MyRoleName]数据出错,qxPrjId不能为空!(in ${ qxRoleRightRelation_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const QxUserRolesRoleName = await QxRoles_func(clsQxRolesEN.con_RoleId, clsQxRolesEN.con_RoleName, QxUserRolesRoleId , objQxRoleRightRelation.qxPrjId);
 objQxRoleRightRelation.myRoleName = QxUserRolesRoleName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001497)函数映射表对象数据出错,{0}.(in {1}.{2})", e, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objQxRoleRightRelationS:源对象
 **/
export  async function QxRoleRightRelation_FuncMapDateTimeSim(objQxRoleRightRelation:clsQxRoleRightRelationENEx )
{
const strThisFuncName = QxRoleRightRelation_FuncMapDateTimeSim.name;
try
{
if (IsNullOrEmpty(objQxRoleRightRelation.dateTimeSim) == true){
 const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objQxRoleRightRelation.updDate);
 objQxRoleRightRelation.dateTimeSim = CommonDataNodeDateTimeSim;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001326)函数映射表对象数据出错,{0}.(in {1}.{2})", e, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function QxRoleRightRelation_DelQxRoleRightRelationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxRoleRightRelationsByCondAsync";
const strAction = "DelQxRoleRightRelationsByCond";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * @param objQxRoleRightRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxRoleRightRelation_AddNewRecordAsync(objQxRoleRightRelationEN: clsQxRoleRightRelationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxRoleRightRelationEN);
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleRightRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
export  async function QxRoleRightRelation_AddNewObjSave(objQxRoleRightRelationEN: clsQxRoleRightRelationEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxRoleRightRelation_CheckPropertyNew(objQxRoleRightRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxRoleRightRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxRoleRightRelation_CheckUniCond4Add(objQxRoleRightRelationEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxRoleRightRelation_AddNewRecordAsync(objQxRoleRightRelationEN);
if (returnBool == true)
{
QxRoleRightRelation_ReFreshCache();
}
else
{
const strInfo = `添加[角色赋权关系(QxRoleRightRelation)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxRoleRightRelationEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxRoleRightRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxRoleRightRelation_CheckUniCond4Add(objQxRoleRightRelationEN: clsQxRoleRightRelationEN): Promise<boolean>{
const strUniquenessCondition = QxRoleRightRelation_GetUniCondStr(objQxRoleRightRelationEN);
const bolIsExistCondition = await QxRoleRightRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxRoleRightRelation_CheckUniCond4Update(objQxRoleRightRelationEN: clsQxRoleRightRelationEN): Promise<boolean>{
const strUniquenessCondition = QxRoleRightRelation_GetUniCondStr4Update(objQxRoleRightRelationEN);
const bolIsExistCondition = await QxRoleRightRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxRoleRightRelation_UpdateObjSave(objQxRoleRightRelationEN: clsQxRoleRightRelationEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxRoleRightRelationEN.sfUpdFldSetStr = objQxRoleRightRelationEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxRoleRightRelationEN.mId == 0 || objQxRoleRightRelationEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxRoleRightRelation_CheckProperty4Update(objQxRoleRightRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxRoleRightRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxRoleRightRelation_CheckUniCond4Update(objQxRoleRightRelationEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxRoleRightRelation_UpdateRecordAsync(objQxRoleRightRelationEN);
if (returnBool == true)
{
QxRoleRightRelation_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxRoleRightRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxRoleRightRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxRoleRightRelation_AddNewRecordWithReturnKeyAsync(objQxRoleRightRelationEN: clsQxRoleRightRelationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleRightRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * @param objQxRoleRightRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxRoleRightRelation_UpdateRecordAsync(objQxRoleRightRelationEN: clsQxRoleRightRelationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxRoleRightRelationEN.sfUpdFldSetStr === undefined || objQxRoleRightRelationEN.sfUpdFldSetStr === null || objQxRoleRightRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRoleRightRelationEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleRightRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * @param objQxRoleRightRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxRoleRightRelation_EditRecordExAsync(objQxRoleRightRelationEN: clsQxRoleRightRelationEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxRoleRightRelationEN.sfUpdFldSetStr === undefined || objQxRoleRightRelationEN.sfUpdFldSetStr === null || objQxRoleRightRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRoleRightRelationEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleRightRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * @param objQxRoleRightRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRoleRightRelation_UpdateWithConditionAsync(objQxRoleRightRelationEN: clsQxRoleRightRelationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxRoleRightRelationEN.sfUpdFldSetStr === undefined || objQxRoleRightRelationEN.sfUpdFldSetStr === null || objQxRoleRightRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRoleRightRelationEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);
objQxRoleRightRelationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleRightRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxRoleRightRelation_IsExistRecordCache(objQxRoleRightRelationCond: ConditionCollection) {
const strThisFuncName = "IsExistRecordCache";
const arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstCache();
if (arrQxRoleRightRelationObjLstCache == null) return false;
let arrQxRoleRightRelationSel = arrQxRoleRightRelationObjLstCache;
if (objQxRoleRightRelationCond.GetConditions().length == 0) return arrQxRoleRightRelationSel.length>0?true:false;
try {
for (const objCondition of objQxRoleRightRelationCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxRoleRightRelationSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxRoleRightRelationCond), qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return false;
}

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function QxRoleRightRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function QxRoleRightRelation_IsExistCache(lngmId:number) {
const strThisFuncName = "IsExistCache";
const arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstCache();
if (arrQxRoleRightRelationObjLstCache == null) return false;
try
{
const arrQxRoleRightRelationSel = arrQxRoleRightRelationObjLstCache.filter(x => x.mId == lngmId);
if (arrQxRoleRightRelationSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e)
{
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngmId, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxRoleRightRelation_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
export  async function QxRoleRightRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objQxRoleRightRelationCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxRoleRightRelation_GetRecCountByCondCache(objQxRoleRightRelationCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxRoleRightRelationObjLstCache = await QxRoleRightRelation_GetObjLstCache();
if (arrQxRoleRightRelationObjLstCache == null) return 0;
let arrQxRoleRightRelationSel = arrQxRoleRightRelationObjLstCache;
if (objQxRoleRightRelationCond.GetConditions().length == 0) return arrQxRoleRightRelationSel.length;
try {
for (const objCondition of objQxRoleRightRelationCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxRoleRightRelationSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxRoleRightRelationCond), qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function QxRoleRightRelation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxRoleRightRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleRightRelation_ConstructorName, strThisFuncName);
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
export  function QxRoleRightRelation_GetWebApiUrl(strController: string, strAction: string): string {
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

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export  function QxRoleRightRelation_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQxRoleRightRelationEN._CurrTabName;
switch (clsQxRoleRightRelationEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
clsQxRoleRightRelationEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function QxRoleRightRelation_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQxRoleRightRelationEN._CurrTabName;
switch (clsQxRoleRightRelationEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
clsQxRoleRightRelationEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
const strMsg = Format("刷新缓存成功!");
console.trace(strMsg);
}
else
{
const strMsg = Format("刷新缓存已经关闭。");
console.trace(strMsg);
}
}
/**
* 获取最新的缓存刷新时间
* @returns 最新的缓存刷新时间，字符串型
**/
export  function QxRoleRightRelation_GetLastRefreshTime():string
{
if (clsQxRoleRightRelationEN._RefreshTimeLst.length == 0) return "";
return clsQxRoleRightRelationEN._RefreshTimeLst[clsQxRoleRightRelationEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxRoleRightRelation_CheckPropertyNew(pobjQxRoleRightRelationEN: clsQxRoleRightRelationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.myRoleId) === true 
 || pobjQxRoleRightRelationEN.myRoleId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[主角色Id]不能为空(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.roleId) === true 
 || pobjQxRoleRightRelationEN.roleId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[角色Id]不能为空(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.qxPrjId) === true 
 || pobjQxRoleRightRelationEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改用户]不能为空(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.myRoleId) == false && GetStrLen(pobjQxRoleRightRelationEN.myRoleId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[主角色Id(myRoleId)]的长度不能超过8(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.myRoleId}(clsQxRoleRightRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.roleId) == false && GetStrLen(pobjQxRoleRightRelationEN.roleId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[角色Id(roleId)]的长度不能超过8(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.roleId}(clsQxRoleRightRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.qxPrjId) == false && GetStrLen(pobjQxRoleRightRelationEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.qxPrjId}(clsQxRoleRightRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.updDate) == false && GetStrLen(pobjQxRoleRightRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.updDate}(clsQxRoleRightRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.updUser) == false && GetStrLen(pobjQxRoleRightRelationEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.updUser}(clsQxRoleRightRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.memo) == false && GetStrLen(pobjQxRoleRightRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.memo}(clsQxRoleRightRelationBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxRoleRightRelationEN.mId && undefined !== pobjQxRoleRightRelationEN.mId && tzDataType.isNumber(pobjQxRoleRightRelationEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(mId)]的值:[${pobjQxRoleRightRelationEN.mId}], 非法,应该为数值型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.myRoleId) == false && undefined !== pobjQxRoleRightRelationEN.myRoleId && tzDataType.isString(pobjQxRoleRightRelationEN.myRoleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[主角色Id(myRoleId)]的值:[${pobjQxRoleRightRelationEN.myRoleId}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.roleId) == false && undefined !== pobjQxRoleRightRelationEN.roleId && tzDataType.isString(pobjQxRoleRightRelationEN.roleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色Id(roleId)]的值:[${pobjQxRoleRightRelationEN.roleId}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.qxPrjId) == false && undefined !== pobjQxRoleRightRelationEN.qxPrjId && tzDataType.isString(pobjQxRoleRightRelationEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxRoleRightRelationEN.qxPrjId}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.updDate) == false && undefined !== pobjQxRoleRightRelationEN.updDate && tzDataType.isString(pobjQxRoleRightRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxRoleRightRelationEN.updDate}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.updUser) == false && undefined !== pobjQxRoleRightRelationEN.updUser && tzDataType.isString(pobjQxRoleRightRelationEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户(updUser)]的值:[${pobjQxRoleRightRelationEN.updUser}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.memo) == false && undefined !== pobjQxRoleRightRelationEN.memo && tzDataType.isString(pobjQxRoleRightRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxRoleRightRelationEN.memo}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.myRoleId) == false && pobjQxRoleRightRelationEN.myRoleId != '[nuull]' && GetStrLen(pobjQxRoleRightRelationEN.myRoleId) !=  8)
{
 throw ("(errid:Watl000415)字段[主角色Id]作为外键字段,长度应该为8(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.roleId) == false && pobjQxRoleRightRelationEN.roleId != '[nuull]' && GetStrLen(pobjQxRoleRightRelationEN.roleId) !=  8)
{
 throw ("(errid:Watl000415)字段[角色Id]作为外键字段,长度应该为8(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.qxPrjId) == false && pobjQxRoleRightRelationEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxRoleRightRelationEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxRoleRightRelation_CheckProperty4Update(pobjQxRoleRightRelationEN: clsQxRoleRightRelationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.myRoleId) == false && GetStrLen(pobjQxRoleRightRelationEN.myRoleId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[主角色Id(myRoleId)]的长度不能超过8(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.myRoleId}(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.roleId) == false && GetStrLen(pobjQxRoleRightRelationEN.roleId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[角色Id(roleId)]的长度不能超过8(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.roleId}(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.qxPrjId) == false && GetStrLen(pobjQxRoleRightRelationEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.qxPrjId}(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.updDate) == false && GetStrLen(pobjQxRoleRightRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.updDate}(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.updUser) == false && GetStrLen(pobjQxRoleRightRelationEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.updUser}(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.memo) == false && GetStrLen(pobjQxRoleRightRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 角色赋权关系(QxRoleRightRelation))!值:${pobjQxRoleRightRelationEN.memo}(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxRoleRightRelationEN.mId && undefined !== pobjQxRoleRightRelationEN.mId && tzDataType.isNumber(pobjQxRoleRightRelationEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(mId)]的值:[${pobjQxRoleRightRelationEN.mId}], 非法,应该为数值型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.myRoleId) == false && undefined !== pobjQxRoleRightRelationEN.myRoleId && tzDataType.isString(pobjQxRoleRightRelationEN.myRoleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[主角色Id(myRoleId)]的值:[${pobjQxRoleRightRelationEN.myRoleId}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.roleId) == false && undefined !== pobjQxRoleRightRelationEN.roleId && tzDataType.isString(pobjQxRoleRightRelationEN.roleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色Id(roleId)]的值:[${pobjQxRoleRightRelationEN.roleId}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.qxPrjId) == false && undefined !== pobjQxRoleRightRelationEN.qxPrjId && tzDataType.isString(pobjQxRoleRightRelationEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxRoleRightRelationEN.qxPrjId}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.updDate) == false && undefined !== pobjQxRoleRightRelationEN.updDate && tzDataType.isString(pobjQxRoleRightRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxRoleRightRelationEN.updDate}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.updUser) == false && undefined !== pobjQxRoleRightRelationEN.updUser && tzDataType.isString(pobjQxRoleRightRelationEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户(updUser)]的值:[${pobjQxRoleRightRelationEN.updUser}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.memo) == false && undefined !== pobjQxRoleRightRelationEN.memo && tzDataType.isString(pobjQxRoleRightRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxRoleRightRelationEN.memo}], 非法,应该为字符型(In 角色赋权关系(QxRoleRightRelation))!(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxRoleRightRelationEN.mId 
 || pobjQxRoleRightRelationEN.mId != null && pobjQxRoleRightRelationEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.myRoleId) == false && pobjQxRoleRightRelationEN.myRoleId != '[nuull]' && GetStrLen(pobjQxRoleRightRelationEN.myRoleId) !=  8)
{
 throw ("(errid:Watl000418)字段[主角色Id]作为外键字段,长度应该为8(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.roleId) == false && pobjQxRoleRightRelationEN.roleId != '[nuull]' && GetStrLen(pobjQxRoleRightRelationEN.roleId) !=  8)
{
 throw ("(errid:Watl000418)字段[角色Id]作为外键字段,长度应该为8(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRoleRightRelationEN.qxPrjId) == false && pobjQxRoleRightRelationEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxRoleRightRelationEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 角色赋权关系)!(clsQxRoleRightRelationBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxRoleRightRelation_GetJSONStrByObj (pobjQxRoleRightRelationEN: clsQxRoleRightRelationEN): string
{
pobjQxRoleRightRelationEN.sfUpdFldSetStr = pobjQxRoleRightRelationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxRoleRightRelationEN);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxRoleRightRelation_GetObjLstByJSONStr (strJSON: string): Array<clsQxRoleRightRelationEN>
{
let arrQxRoleRightRelationObjLst = new Array<clsQxRoleRightRelationEN>();
if (strJSON === "")
{
return arrQxRoleRightRelationObjLst;
}
try
{
arrQxRoleRightRelationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxRoleRightRelationObjLst;
}
return arrQxRoleRightRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxRoleRightRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxRoleRightRelation_GetObjLstByJSONObjLst (arrQxRoleRightRelationObjLstS: Array<clsQxRoleRightRelationEN>): Array<clsQxRoleRightRelationEN>
{
const arrQxRoleRightRelationObjLst = new Array<clsQxRoleRightRelationEN>();
for (const objInFor of arrQxRoleRightRelationObjLstS) {
const obj1 = QxRoleRightRelation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxRoleRightRelationObjLst.push(obj1);
}
return arrQxRoleRightRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxRoleRightRelation_GetObjByJSONStr (strJSON: string): clsQxRoleRightRelationEN
{
let pobjQxRoleRightRelationEN = new clsQxRoleRightRelationEN();
if (strJSON === "")
{
return pobjQxRoleRightRelationEN;
}
try
{
pobjQxRoleRightRelationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxRoleRightRelationEN;
}
return pobjQxRoleRightRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxRoleRightRelation_GetCombineCondition(objQxRoleRightRelationCond: clsQxRoleRightRelationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxRoleRightRelationCond.dicFldComparisonOp, clsQxRoleRightRelationEN.con_mId) == true)
{
const strComparisonOpmId:string = objQxRoleRightRelationCond.dicFldComparisonOp[clsQxRoleRightRelationEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsQxRoleRightRelationEN.con_mId, objQxRoleRightRelationCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objQxRoleRightRelationCond.dicFldComparisonOp, clsQxRoleRightRelationEN.con_MyRoleId) == true)
{
const strComparisonOpMyRoleId:string = objQxRoleRightRelationCond.dicFldComparisonOp[clsQxRoleRightRelationEN.con_MyRoleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRoleRightRelationEN.con_MyRoleId, objQxRoleRightRelationCond.myRoleId, strComparisonOpMyRoleId);
}
if (Object.prototype.hasOwnProperty.call(objQxRoleRightRelationCond.dicFldComparisonOp, clsQxRoleRightRelationEN.con_RoleId) == true)
{
const strComparisonOpRoleId:string = objQxRoleRightRelationCond.dicFldComparisonOp[clsQxRoleRightRelationEN.con_RoleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRoleRightRelationEN.con_RoleId, objQxRoleRightRelationCond.roleId, strComparisonOpRoleId);
}
if (Object.prototype.hasOwnProperty.call(objQxRoleRightRelationCond.dicFldComparisonOp, clsQxRoleRightRelationEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxRoleRightRelationCond.dicFldComparisonOp[clsQxRoleRightRelationEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRoleRightRelationEN.con_QxPrjId, objQxRoleRightRelationCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxRoleRightRelationCond.dicFldComparisonOp, clsQxRoleRightRelationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxRoleRightRelationCond.dicFldComparisonOp[clsQxRoleRightRelationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRoleRightRelationEN.con_UpdDate, objQxRoleRightRelationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxRoleRightRelationCond.dicFldComparisonOp, clsQxRoleRightRelationEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxRoleRightRelationCond.dicFldComparisonOp[clsQxRoleRightRelationEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRoleRightRelationEN.con_UpdUser, objQxRoleRightRelationCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxRoleRightRelationCond.dicFldComparisonOp, clsQxRoleRightRelationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxRoleRightRelationCond.dicFldComparisonOp[clsQxRoleRightRelationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRoleRightRelationEN.con_Memo, objQxRoleRightRelationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxRoleRightRelation(角色赋权关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strMyRoleId: 主角色Id(要求唯一的字段)
 * @param strRoleId: 角色Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxRoleRightRelation_GetUniCondStr(objQxRoleRightRelationEN: clsQxRoleRightRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and MyRoleId = '{0}'", objQxRoleRightRelationEN.myRoleId);
 strWhereCond +=  Format(" and RoleId = '{0}'", objQxRoleRightRelationEN.roleId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxRoleRightRelation(角色赋权关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strMyRoleId: 主角色Id(要求唯一的字段)
 * @param strRoleId: 角色Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxRoleRightRelation_GetUniCondStr4Update(objQxRoleRightRelationEN: clsQxRoleRightRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objQxRoleRightRelationEN.mId);
 strWhereCond +=  Format(" and MyRoleId = '{0}'", objQxRoleRightRelationEN.myRoleId);
 strWhereCond +=  Format(" and RoleId = '{0}'", objQxRoleRightRelationEN.roleId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxRoleRightRelationENS:源对象
 * @param objQxRoleRightRelationENT:目标对象
*/
export  function QxRoleRightRelation_GetObjFromJsonObj(objQxRoleRightRelationENS: clsQxRoleRightRelationEN): clsQxRoleRightRelationEN 
{
 const objQxRoleRightRelationENT: clsQxRoleRightRelationEN = new clsQxRoleRightRelationEN();
ObjectAssign(objQxRoleRightRelationENT, objQxRoleRightRelationENS);
 return objQxRoleRightRelationENT;
}