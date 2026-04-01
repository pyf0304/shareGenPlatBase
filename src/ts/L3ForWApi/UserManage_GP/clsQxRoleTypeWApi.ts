
 /**
 * 类名:clsQxRoleTypeWApi
 * 表名:QxRoleType(00140128)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:01:34
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色类型(QxRoleType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2026年04月01日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxRoleTypeEN } from "@/ts/L0Entity/UserManage_GP/clsQxRoleTypeEN";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const qxRoleType_Controller = "QxRoleTypeApi";
 export const qxRoleType_ConstructorName = "qxRoleType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRoleTypeId:关键字
 * @returns 对象
 **/
export  async function QxRoleType_GetObjByRoleTypeIdAsync(strRoleTypeId: string): Promise<clsQxRoleTypeEN|null>  
{
const strThisFuncName = "GetObjByRoleTypeIdAsync";

if (IsNullOrEmpty(strRoleTypeId) == true)
{
  const strMsg = Format("参数:[strRoleTypeId]不能为空!(In clsQxRoleTypeWApi.GetObjByRoleTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRoleTypeId]的长度:[{0}]不正确!(clsQxRoleTypeWApi.GetObjByRoleTypeIdAsync)", strRoleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByRoleTypeId";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRoleTypeId,
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
const objQxRoleType = QxRoleType_GetObjFromJsonObj(returnObj);
return objQxRoleType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param strRoleTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxRoleType_GetObjByRoleTypeIdlocalStorage(strRoleTypeId: string) {
const strThisFuncName = "GetObjByRoleTypeIdlocalStorage";

if (IsNullOrEmpty(strRoleTypeId) == true)
{
  const strMsg = Format("参数:[strRoleTypeId]不能为空!(In clsQxRoleTypeWApi.GetObjByRoleTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRoleTypeId]的长度:[{0}]不正确!(clsQxRoleTypeWApi.GetObjByRoleTypeIdlocalStorage)", strRoleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxRoleTypeEN._CurrTabName, strRoleTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxRoleTypeCache: clsQxRoleTypeEN = JSON.parse(strTempObj);
return objQxRoleTypeCache;
}
try
{
const objQxRoleType = await QxRoleType_GetObjByRoleTypeIdAsync(strRoleTypeId);
if (objQxRoleType != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxRoleType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxRoleType;
}
return objQxRoleType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strRoleTypeId, qxRoleType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strRoleTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxRoleType_GetObjByRoleTypeIdCache(strRoleTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByRoleTypeIdCache";

if (IsNullOrEmpty(strRoleTypeId) == true)
{
  const strMsg = Format("参数:[strRoleTypeId]不能为空!(In clsQxRoleTypeWApi.GetObjByRoleTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRoleTypeId]的长度:[{0}]不正确!(clsQxRoleTypeWApi.GetObjByRoleTypeIdCache)", strRoleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstCache();
try
{
const arrQxRoleTypeSel = arrQxRoleTypeObjLstCache.filter(x => 
 x.roleTypeId == strRoleTypeId );
let objQxRoleType: clsQxRoleTypeEN;
if (arrQxRoleTypeSel.length > 0)
{
objQxRoleType = arrQxRoleTypeSel[0];
return objQxRoleType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxRoleTypeConst = await QxRoleType_GetObjByRoleTypeIdAsync(strRoleTypeId);
if (objQxRoleTypeConst != null)
{
QxRoleType_ReFreshThisCache();
return objQxRoleTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strRoleTypeId, qxRoleType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxRoleType:所给的对象
 * @returns 对象
*/
export  async function QxRoleType_UpdateObjInLstCache(objQxRoleType: clsQxRoleTypeEN ) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstCache();
const obj = arrQxRoleTypeObjLstCache.find(x => 
x.roleTypeId == objQxRoleType.roleTypeId);
if (obj != null)
{
objQxRoleType.roleTypeId = obj.roleTypeId;
ObjectAssign( obj, objQxRoleType);
}
else
{
arrQxRoleTypeObjLstCache.push(objQxRoleType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxRoleType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRoleType_SortFunDefa(a:clsQxRoleTypeEN , b:clsQxRoleTypeEN): number 
{
return a.roleTypeId.localeCompare(b.roleTypeId);
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
export  function QxRoleType_SortFunDefa2Fld(a:clsQxRoleTypeEN , b:clsQxRoleTypeEN): number 
{
if (a.roleTypeName == b.roleTypeName) return a.roleTypeEnName.localeCompare(b.roleTypeEnName);
else return a.roleTypeName.localeCompare(b.roleTypeName);
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
export  function QxRoleType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxRoleTypeEN.con_RoleTypeId:
return (a: clsQxRoleTypeEN, b: clsQxRoleTypeEN) => {
return a.roleTypeId.localeCompare(b.roleTypeId);
}
case clsQxRoleTypeEN.con_RoleTypeName:
return (a: clsQxRoleTypeEN, b: clsQxRoleTypeEN) => {
return a.roleTypeName.localeCompare(b.roleTypeName);
}
case clsQxRoleTypeEN.con_RoleTypeEnName:
return (a: clsQxRoleTypeEN, b: clsQxRoleTypeEN) => {
return a.roleTypeEnName.localeCompare(b.roleTypeEnName);
}
case clsQxRoleTypeEN.con_Memo:
return (a: clsQxRoleTypeEN, b: clsQxRoleTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRoleType]中不存在!(in ${ qxRoleType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxRoleTypeEN.con_RoleTypeId:
return (a: clsQxRoleTypeEN, b: clsQxRoleTypeEN) => {
return b.roleTypeId.localeCompare(a.roleTypeId);
}
case clsQxRoleTypeEN.con_RoleTypeName:
return (a: clsQxRoleTypeEN, b: clsQxRoleTypeEN) => {
return b.roleTypeName.localeCompare(a.roleTypeName);
}
case clsQxRoleTypeEN.con_RoleTypeEnName:
return (a: clsQxRoleTypeEN, b: clsQxRoleTypeEN) => {
return b.roleTypeEnName.localeCompare(a.roleTypeEnName);
}
case clsQxRoleTypeEN.con_Memo:
return (a: clsQxRoleTypeEN, b: clsQxRoleTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRoleType]中不存在!(in ${ qxRoleType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRoleTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxRoleType_GetNameByRoleTypeIdCache(strRoleTypeId: string ) {

if (IsNullOrEmpty(strRoleTypeId) == true)
{
  const strMsg = Format("参数:[strRoleTypeId]不能为空!(In clsQxRoleTypeWApi.GetNameByRoleTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strRoleTypeId]的长度:[{0}]不正确!(clsQxRoleTypeWApi.GetNameByRoleTypeIdCache)", strRoleTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstCache();
if (arrQxRoleTypeObjLstCache == null) return "";
try
{
const arrQxRoleTypeSel = arrQxRoleTypeObjLstCache.filter(x => 
 x.roleTypeId == strRoleTypeId );
let objQxRoleType: clsQxRoleTypeEN;
if (arrQxRoleTypeSel.length > 0)
{
objQxRoleType = arrQxRoleTypeSel[0];
return objQxRoleType.roleTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strRoleTypeId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxRoleType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxRoleTypeEN.con_RoleTypeId:
return (obj: clsQxRoleTypeEN) => {
return obj.roleTypeId === value;
}
case clsQxRoleTypeEN.con_RoleTypeName:
return (obj: clsQxRoleTypeEN) => {
return obj.roleTypeName === value;
}
case clsQxRoleTypeEN.con_RoleTypeEnName:
return (obj: clsQxRoleTypeEN) => {
return obj.roleTypeEnName === value;
}
case clsQxRoleTypeEN.con_Memo:
return (obj: clsQxRoleTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRoleType]中不存在!(in ${ qxRoleType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function QxRoleType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQxRoleTypeEN.con_RoleTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxRoleTypeEN._AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxRoleTypeEN._AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strRoleTypeId = strInValue;
if (IsNullOrEmpty(strRoleTypeId) == true)
{
return "";
}
const objQxRoleType = await QxRoleType_GetObjByRoleTypeIdCache(strRoleTypeId );
if (objQxRoleType == null) return "";
if (objQxRoleType.GetFldValue(strOutFldName) == null) return "";
return objQxRoleType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function QxRoleType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQxRoleTypeEN.con_RoleTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQxRoleType = await QxRoleType_GetObjLstCache();
if (arrQxRoleType == null) return [];
let arrQxRoleTypeSel = arrQxRoleType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxRoleTypeSel.length == 0) return [];
return arrQxRoleTypeSel.map(x=>x.roleTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRoleType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_GetFirstObjAsync(strWhereCond: string): Promise<clsQxRoleTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const objQxRoleType = QxRoleType_GetObjFromJsonObj(returnObj);
return objQxRoleType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxRoleTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxRoleTypeEN._WhereFormat) == false)
{
strWhereCond = clsQxRoleTypeEN._WhereFormat;
}
if (IsNullOrEmpty(clsQxRoleTypeEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxRoleTypeEN._CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxRoleTypeExObjLstCache: Array<clsQxRoleTypeEN> = CacheHelper.Get(strKey);
const arrQxRoleTypeObjLstT = QxRoleType_GetObjLstByJSONObjLst(arrQxRoleTypeExObjLstCache);
return arrQxRoleTypeObjLstT;
}
try
{
const arrQxRoleTypeExObjLst = await QxRoleType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxRoleTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxRoleTypeExObjLst.length);
console.log(strInfo);
return arrQxRoleTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxRoleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleType_GetObjLstlocalStorage()
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxRoleTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxRoleTypeEN._WhereFormat) == false)
{
strWhereCond = clsQxRoleTypeEN._WhereFormat;
}
if (IsNullOrEmpty(clsQxRoleTypeEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxRoleTypeEN._CacheAddiCondition);
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
const arrQxRoleTypeExObjLstCache: Array<clsQxRoleTypeEN> = JSON.parse(strTempObjLst);
const arrQxRoleTypeObjLstT = QxRoleType_GetObjLstByJSONObjLst(arrQxRoleTypeExObjLstCache);
return arrQxRoleTypeObjLstT;
}
try
{
const arrQxRoleTypeExObjLst = await QxRoleType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxRoleTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxRoleTypeExObjLst.length);
console.log(strInfo);
return arrQxRoleTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxRoleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxRoleTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxRoleTypeObjLstCache: Array<clsQxRoleTypeEN> = JSON.parse(strTempObjLst);
return arrQxRoleTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxRoleType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxRoleTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_GetObjLstsessionStorage()
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxRoleTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxRoleTypeEN._WhereFormat) == false)
{
strWhereCond = clsQxRoleTypeEN._WhereFormat;
}
if (IsNullOrEmpty(clsQxRoleTypeEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxRoleTypeEN._CacheAddiCondition);
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
const arrQxRoleTypeExObjLstCache: Array<clsQxRoleTypeEN> = JSON.parse(strTempObjLst);
const arrQxRoleTypeObjLstT = QxRoleType_GetObjLstByJSONObjLst(arrQxRoleTypeExObjLstCache);
return arrQxRoleTypeObjLstT;
}
try
{
const arrQxRoleTypeExObjLst = await QxRoleType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxRoleTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxRoleTypeExObjLst.length);
console.log(strInfo);
return arrQxRoleTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxRoleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleType_GetObjLstsessionStoragePureCache()
{
//初始化列表缓存
const strKey = clsQxRoleTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxRoleTypeObjLstCache: Array<clsQxRoleTypeEN> = JSON.parse(strTempObjLst);
return arrQxRoleTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleType_GetObjLstCache(): Promise<Array<clsQxRoleTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQxRoleTypeObjLstCache;
switch (clsQxRoleTypeEN._CacheModeId)
{
case "04"://sessionStorage
arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstClientCache();
break;
default:
arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstClientCache();
break;
}
return arrQxRoleTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxRoleType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxRoleTypeObjLstCache;
switch (clsQxRoleTypeEN._CacheModeId)
{
case "04"://sessionStorage
arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQxRoleTypeObjLstCache = null;
break;
default:
arrQxRoleTypeObjLstCache = null;
break;
}
return arrQxRoleTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRoleTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxRoleType_GetSubObjLstCache(objQxRoleTypeCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstCache();
let arrQxRoleTypeSel = arrQxRoleTypeObjLstCache;
if (objQxRoleTypeCond.GetConditions().length == 0) return arrQxRoleTypeSel;
try {
//console.log(sstrKeys);
for (const objCondition of objQxRoleTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxRoleTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxRoleTypeCond), qxRoleType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxRoleTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRoleTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function QxRoleType_GetObjLstByRoleTypeIdLstAsync(arrRoleTypeId: Array<string>): Promise<Array<clsQxRoleTypeEN>>  
{
const strThisFuncName = "GetObjLstByRoleTypeIdLstAsync";
const strAction = "GetObjLstByRoleTypeIdLst";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRoleTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param arrstrRoleTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxRoleType_GetObjLstByRoleTypeIdLstCache(arrRoleTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByRoleTypeIdLstCache";
try
{
const arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstCache();
const arrQxRoleTypeSel = arrQxRoleTypeObjLstCache.filter(x => arrRoleTypeIdLst.indexOf(x.roleTypeId)>-1);
return arrQxRoleTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrRoleTypeIdLst.join(","), qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxRoleTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxRoleTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRoleType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRoleType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)

 /**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strRoleTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxRoleType_DelRecordAsync(strRoleTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strRoleTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param arrRoleTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxRoleType_DelQxRoleTypesAsync(arrRoleTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxRoleTypesAsync";
const strAction = "DelQxRoleTypes";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRoleTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function QxRoleType_DelQxRoleTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxRoleTypesByCondAsync";
const strAction = "DelQxRoleTypesByCond";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param objQxRoleTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxRoleType_AddNewRecordAsync(objQxRoleTypeEN: clsQxRoleTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxRoleTypeEN.roleTypeId === null || objQxRoleTypeEN.roleTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxRoleTypeEN);
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param objQxRoleTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxRoleType_AddNewRecordWithMaxIdAsync(objQxRoleTypeEN: clsQxRoleTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_AddNewObjSave(objQxRoleTypeEN: clsQxRoleTypeEN ): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxRoleType_CheckPropertyNew(objQxRoleTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxRoleType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await QxRoleType_IsExistAsync(objQxRoleTypeEN.roleTypeId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objQxRoleTypeEN.roleTypeId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await QxRoleType_AddNewRecordAsync(objQxRoleTypeEN);
if (returnBool == true)
{
QxRoleType_ReFreshCache();
}
else
{
const strInfo = `添加[角色类型(QxRoleType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxRoleTypeEN.roleTypeId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxRoleType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function QxRoleType_UpdateObjSave(objQxRoleTypeEN: clsQxRoleTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxRoleTypeEN.sfUpdFldSetStr = objQxRoleTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxRoleTypeEN.roleTypeId == "" || objQxRoleTypeEN.roleTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxRoleType_CheckProperty4Update(objQxRoleTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxRoleType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await QxRoleType_UpdateRecordAsync(objQxRoleTypeEN);
if (returnBool == true)
{
QxRoleType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxRoleType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxRoleTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxRoleType_AddNewRecordWithReturnKeyAsync(objQxRoleTypeEN: clsQxRoleTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param objQxRoleTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxRoleType_UpdateRecordAsync(objQxRoleTypeEN: clsQxRoleTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxRoleTypeEN.sfUpdFldSetStr === undefined || objQxRoleTypeEN.sfUpdFldSetStr === null || objQxRoleTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRoleTypeEN.roleTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param objQxRoleTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxRoleType_EditRecordExAsync(objQxRoleTypeEN: clsQxRoleTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxRoleTypeEN.sfUpdFldSetStr === undefined || objQxRoleTypeEN.sfUpdFldSetStr === null || objQxRoleTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRoleTypeEN.roleTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param objQxRoleTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRoleType_UpdateWithConditionAsync(objQxRoleTypeEN: clsQxRoleTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxRoleTypeEN.sfUpdFldSetStr === undefined || objQxRoleTypeEN.sfUpdFldSetStr === null || objQxRoleTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRoleTypeEN.roleTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);
objQxRoleTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRoleTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param objstrRoleTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxRoleType_IsExistRecordCache(objQxRoleTypeCond: ConditionCollection ) {
const strThisFuncName = "IsExistRecordCache";
const arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstCache();
if (arrQxRoleTypeObjLstCache == null) return false;
let arrQxRoleTypeSel = arrQxRoleTypeObjLstCache;
if (objQxRoleTypeCond.GetConditions().length == 0) return arrQxRoleTypeSel.length>0?true:false;
try {
for (const objCondition of objQxRoleTypeCond.GetConditions()) {
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
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxRoleTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxRoleTypeCond), qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param strRoleTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxRoleType_IsExistCache(strRoleTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstCache();
if (arrQxRoleTypeObjLstCache == null) return false;
try
{
const arrQxRoleTypeSel = arrQxRoleTypeObjLstCache.filter(x => x.roleTypeId == strRoleTypeId);
if (arrQxRoleTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strRoleTypeId, qxRoleType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strRoleTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxRoleType_IsExistAsync(strRoleTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRoleTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
 * @param objQxRoleTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxRoleType_GetRecCountByCondCache(objQxRoleTypeCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxRoleTypeObjLstCache = await QxRoleType_GetObjLstCache();
if (arrQxRoleTypeObjLstCache == null) return 0;
let arrQxRoleTypeSel = arrQxRoleTypeObjLstCache;
if (objQxRoleTypeCond.GetConditions().length == 0) return arrQxRoleTypeSel.length;
try {
for (const objCondition of objQxRoleTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxRoleTypeSel = arrQxRoleTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxRoleTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxRoleTypeCond), qxRoleType_ConstructorName, strThisFuncName);
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
export  async function QxRoleType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxRoleType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRoleType_ConstructorName, strThisFuncName);
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
export  function QxRoleType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxRoleType_ReFreshCache():void
{


 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQxRoleTypeEN._CurrTabName;
switch (clsQxRoleTypeEN._CacheModeId)
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
clsQxRoleTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function QxRoleType_ReFreshThisCache():void
{

if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQxRoleTypeEN._CurrTabName;
switch (clsQxRoleTypeEN._CacheModeId)
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
clsQxRoleTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function QxRoleType_GetLastRefreshTime():string
{
if (clsQxRoleTypeEN._RefreshTimeLst.length == 0) return "";
return clsQxRoleTypeEN._RefreshTimeLst[clsQxRoleTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxRoleType_BindDdl_RoleTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_RoleTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_RoleTypeIdInDivCache");
const arrObjLstSel = await QxRoleType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxRoleTypeEN.con_RoleTypeId, clsQxRoleTypeEN.con_RoleTypeName, "选角色类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxRoleType_GetArrQxRoleType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_RoleTypeIdInDivCache");
const arrQxRoleType = new Array<clsQxRoleTypeEN>();
const arrObjLstSel = await QxRoleType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsQxRoleTypeEN();
obj0.roleTypeId = '0';
obj0.roleTypeName = '选角色类型...';
arrQxRoleType.push(obj0);
arrObjLstSel.forEach(x => arrQxRoleType.push(x));
return arrQxRoleType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxRoleType_CheckPropertyNew(pobjQxRoleTypeEN: clsQxRoleTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[角色类型名]不能为空(In 角色类型)!(clsQxRoleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[角色类型英文名]不能为空(In 角色类型)!(clsQxRoleTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeId) == false && GetStrLen(pobjQxRoleTypeEN.roleTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[角色类型Id(roleTypeId)]的长度不能超过2(In 角色类型(QxRoleType))!值:${pobjQxRoleTypeEN.roleTypeId}(clsQxRoleTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeName) == false && GetStrLen(pobjQxRoleTypeEN.roleTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[角色类型名(roleTypeName)]的长度不能超过50(In 角色类型(QxRoleType))!值:${pobjQxRoleTypeEN.roleTypeName}(clsQxRoleTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeEnName) == false && GetStrLen(pobjQxRoleTypeEN.roleTypeEnName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[角色类型英文名(roleTypeEnName)]的长度不能超过50(In 角色类型(QxRoleType))!值:${pobjQxRoleTypeEN.roleTypeEnName}(clsQxRoleTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.memo) == false && GetStrLen(pobjQxRoleTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 角色类型(QxRoleType))!值:${pobjQxRoleTypeEN.memo}(clsQxRoleTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeId) == false && undefined !== pobjQxRoleTypeEN.roleTypeId && tzDataType.isString(pobjQxRoleTypeEN.roleTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色类型Id(roleTypeId)]的值:[${pobjQxRoleTypeEN.roleTypeId}], 非法,应该为字符型(In 角色类型(QxRoleType))!(clsQxRoleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeName) == false && undefined !== pobjQxRoleTypeEN.roleTypeName && tzDataType.isString(pobjQxRoleTypeEN.roleTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色类型名(roleTypeName)]的值:[${pobjQxRoleTypeEN.roleTypeName}], 非法,应该为字符型(In 角色类型(QxRoleType))!(clsQxRoleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeEnName) == false && undefined !== pobjQxRoleTypeEN.roleTypeEnName && tzDataType.isString(pobjQxRoleTypeEN.roleTypeEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色类型英文名(roleTypeEnName)]的值:[${pobjQxRoleTypeEN.roleTypeEnName}], 非法,应该为字符型(In 角色类型(QxRoleType))!(clsQxRoleTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.memo) == false && undefined !== pobjQxRoleTypeEN.memo && tzDataType.isString(pobjQxRoleTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxRoleTypeEN.memo}], 非法,应该为字符型(In 角色类型(QxRoleType))!(clsQxRoleTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxRoleType_CheckProperty4Update(pobjQxRoleTypeEN: clsQxRoleTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeId) == false && GetStrLen(pobjQxRoleTypeEN.roleTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[角色类型Id(roleTypeId)]的长度不能超过2(In 角色类型(QxRoleType))!值:${pobjQxRoleTypeEN.roleTypeId}(clsQxRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeName) == false && GetStrLen(pobjQxRoleTypeEN.roleTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[角色类型名(roleTypeName)]的长度不能超过50(In 角色类型(QxRoleType))!值:${pobjQxRoleTypeEN.roleTypeName}(clsQxRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeEnName) == false && GetStrLen(pobjQxRoleTypeEN.roleTypeEnName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[角色类型英文名(roleTypeEnName)]的长度不能超过50(In 角色类型(QxRoleType))!值:${pobjQxRoleTypeEN.roleTypeEnName}(clsQxRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.memo) == false && GetStrLen(pobjQxRoleTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 角色类型(QxRoleType))!值:${pobjQxRoleTypeEN.memo}(clsQxRoleTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeId) == false && undefined !== pobjQxRoleTypeEN.roleTypeId && tzDataType.isString(pobjQxRoleTypeEN.roleTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色类型Id(roleTypeId)]的值:[${pobjQxRoleTypeEN.roleTypeId}], 非法,应该为字符型(In 角色类型(QxRoleType))!(clsQxRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeName) == false && undefined !== pobjQxRoleTypeEN.roleTypeName && tzDataType.isString(pobjQxRoleTypeEN.roleTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色类型名(roleTypeName)]的值:[${pobjQxRoleTypeEN.roleTypeName}], 非法,应该为字符型(In 角色类型(QxRoleType))!(clsQxRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeEnName) == false && undefined !== pobjQxRoleTypeEN.roleTypeEnName && tzDataType.isString(pobjQxRoleTypeEN.roleTypeEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色类型英文名(roleTypeEnName)]的值:[${pobjQxRoleTypeEN.roleTypeEnName}], 非法,应该为字符型(In 角色类型(QxRoleType))!(clsQxRoleTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxRoleTypeEN.memo) == false && undefined !== pobjQxRoleTypeEN.memo && tzDataType.isString(pobjQxRoleTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxRoleTypeEN.memo}], 非法,应该为字符型(In 角色类型(QxRoleType))!(clsQxRoleTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxRoleTypeEN.roleTypeId) === true 
 || pobjQxRoleTypeEN.roleTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[角色类型Id]不能为空(In 角色类型)!(clsQxRoleTypeBL:CheckProperty4Update)`);
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
export  function QxRoleType_GetJSONStrByObj (pobjQxRoleTypeEN: clsQxRoleTypeEN): string
{
pobjQxRoleTypeEN.sfUpdFldSetStr = pobjQxRoleTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxRoleTypeEN);
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
export  function QxRoleType_GetObjLstByJSONStr (strJSON: string): Array<clsQxRoleTypeEN>
{
let arrQxRoleTypeObjLst = new Array<clsQxRoleTypeEN>();
if (strJSON === "")
{
return arrQxRoleTypeObjLst;
}
try
{
arrQxRoleTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxRoleTypeObjLst;
}
return arrQxRoleTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxRoleTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxRoleType_GetObjLstByJSONObjLst (arrQxRoleTypeObjLstS: Array<clsQxRoleTypeEN>): Array<clsQxRoleTypeEN>
{
const arrQxRoleTypeObjLst = new Array<clsQxRoleTypeEN>();
for (const objInFor of arrQxRoleTypeObjLstS) {
const obj1 = QxRoleType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxRoleTypeObjLst.push(obj1);
}
return arrQxRoleTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxRoleType_GetObjByJSONStr (strJSON: string): clsQxRoleTypeEN
{
let pobjQxRoleTypeEN = new clsQxRoleTypeEN();
if (strJSON === "")
{
return pobjQxRoleTypeEN;
}
try
{
pobjQxRoleTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxRoleTypeEN;
}
return pobjQxRoleTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxRoleType_GetCombineCondition(objQxRoleTypeCond: clsQxRoleTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxRoleTypeCond.dicFldComparisonOp, clsQxRoleTypeEN.con_RoleTypeId) == true)
{
const strComparisonOpRoleTypeId:string = objQxRoleTypeCond.dicFldComparisonOp[clsQxRoleTypeEN.con_RoleTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRoleTypeEN.con_RoleTypeId, objQxRoleTypeCond.roleTypeId, strComparisonOpRoleTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQxRoleTypeCond.dicFldComparisonOp, clsQxRoleTypeEN.con_RoleTypeName) == true)
{
const strComparisonOpRoleTypeName:string = objQxRoleTypeCond.dicFldComparisonOp[clsQxRoleTypeEN.con_RoleTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRoleTypeEN.con_RoleTypeName, objQxRoleTypeCond.roleTypeName, strComparisonOpRoleTypeName);
}
if (Object.prototype.hasOwnProperty.call(objQxRoleTypeCond.dicFldComparisonOp, clsQxRoleTypeEN.con_RoleTypeEnName) == true)
{
const strComparisonOpRoleTypeEnName:string = objQxRoleTypeCond.dicFldComparisonOp[clsQxRoleTypeEN.con_RoleTypeEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRoleTypeEN.con_RoleTypeEnName, objQxRoleTypeCond.roleTypeEnName, strComparisonOpRoleTypeEnName);
}
if (Object.prototype.hasOwnProperty.call(objQxRoleTypeCond.dicFldComparisonOp, clsQxRoleTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxRoleTypeCond.dicFldComparisonOp[clsQxRoleTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRoleTypeEN.con_Memo, objQxRoleTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxRoleTypeENS:源对象
 * @param objQxRoleTypeENT:目标对象
*/
export  function QxRoleType_GetObjFromJsonObj(objQxRoleTypeENS: clsQxRoleTypeEN): clsQxRoleTypeEN 
{
 const objQxRoleTypeENT: clsQxRoleTypeEN = new clsQxRoleTypeEN();
ObjectAssign(objQxRoleTypeENT, objQxRoleTypeENS);
 return objQxRoleTypeENT;
}