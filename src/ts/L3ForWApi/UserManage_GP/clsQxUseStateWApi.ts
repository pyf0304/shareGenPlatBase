
 /**
 * 类名:clsQxUseStateWApi
 * 表名:QxUseState(00140133)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:01:37
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
 * 使用状态(QxUseState)
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
import { clsQxUseStateEN } from "@/ts/L0Entity/UserManage_GP/clsQxUseStateEN";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const qxUseState_Controller = "QxUseStateApi";
 export const qxUseState_ConstructorName = "qxUseState";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUseStateId:关键字
 * @returns 对象
 **/
export  async function QxUseState_GetObjByUseStateIdAsync(strUseStateId: string): Promise<clsQxUseStateEN|null>  
{
const strThisFuncName = "GetObjByUseStateIdAsync";

if (IsNullOrEmpty(strUseStateId) == true)
{
  const strMsg = Format("参数:[strUseStateId]不能为空!(In clsQxUseStateWApi.GetObjByUseStateIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strUseStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUseStateId]的长度:[{0}]不正确!(clsQxUseStateWApi.GetObjByUseStateIdAsync)", strUseStateId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByUseStateId";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUseStateId,
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
const objQxUseState = QxUseState_GetObjFromJsonObj(returnObj);
return objQxUseState;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param strUseStateId:所给的关键字
 * @returns 对象
*/
export  async function QxUseState_GetObjByUseStateIdlocalStorage(strUseStateId: string) {
const strThisFuncName = "GetObjByUseStateIdlocalStorage";

if (IsNullOrEmpty(strUseStateId) == true)
{
  const strMsg = Format("参数:[strUseStateId]不能为空!(In clsQxUseStateWApi.GetObjByUseStateIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strUseStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUseStateId]的长度:[{0}]不正确!(clsQxUseStateWApi.GetObjByUseStateIdlocalStorage)", strUseStateId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxUseStateEN._CurrTabName, strUseStateId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxUseStateCache: clsQxUseStateEN = JSON.parse(strTempObj);
return objQxUseStateCache;
}
try
{
const objQxUseState = await QxUseState_GetObjByUseStateIdAsync(strUseStateId);
if (objQxUseState != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxUseState));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxUseState;
}
return objQxUseState;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strUseStateId, qxUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strUseStateId:所给的关键字
 * @returns 对象
*/
export  async function QxUseState_GetObjByUseStateIdCache(strUseStateId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByUseStateIdCache";

if (IsNullOrEmpty(strUseStateId) == true)
{
  const strMsg = Format("参数:[strUseStateId]不能为空!(In clsQxUseStateWApi.GetObjByUseStateIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strUseStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUseStateId]的长度:[{0}]不正确!(clsQxUseStateWApi.GetObjByUseStateIdCache)", strUseStateId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxUseStateObjLstCache = await QxUseState_GetObjLstCache();
try
{
const arrQxUseStateSel = arrQxUseStateObjLstCache.filter(x => 
 x.useStateId == strUseStateId );
let objQxUseState: clsQxUseStateEN;
if (arrQxUseStateSel.length > 0)
{
objQxUseState = arrQxUseStateSel[0];
return objQxUseState;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxUseStateConst = await QxUseState_GetObjByUseStateIdAsync(strUseStateId);
if (objQxUseStateConst != null)
{
QxUseState_ReFreshThisCache();
return objQxUseStateConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strUseStateId, qxUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxUseState:所给的对象
 * @returns 对象
*/
export  async function QxUseState_UpdateObjInLstCache(objQxUseState: clsQxUseStateEN ) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxUseStateObjLstCache = await QxUseState_GetObjLstCache();
const obj = arrQxUseStateObjLstCache.find(x => x.useStateName == objQxUseState.useStateName);
if (obj != null)
{
objQxUseState.useStateId = obj.useStateId;
ObjectAssign( obj, objQxUseState);
}
else
{
arrQxUseStateObjLstCache.push(objQxUseState);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxUseState_ConstructorName, strThisFuncName);
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
export  function QxUseState_SortFunDefa(a:clsQxUseStateEN , b:clsQxUseStateEN): number 
{
return a.useStateId.localeCompare(b.useStateId);
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
export  function QxUseState_SortFunDefa2Fld(a:clsQxUseStateEN , b:clsQxUseStateEN): number 
{
if (a.useStateName == b.useStateName) return a.memo.localeCompare(b.memo);
else return a.useStateName.localeCompare(b.useStateName);
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
export  function QxUseState_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUseStateEN.con_UseStateId:
return (a: clsQxUseStateEN, b: clsQxUseStateEN) => {
return a.useStateId.localeCompare(b.useStateId);
}
case clsQxUseStateEN.con_UseStateName:
return (a: clsQxUseStateEN, b: clsQxUseStateEN) => {
return a.useStateName.localeCompare(b.useStateName);
}
case clsQxUseStateEN.con_Memo:
return (a: clsQxUseStateEN, b: clsQxUseStateEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUseState]中不存在!(in ${ qxUseState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUseStateEN.con_UseStateId:
return (a: clsQxUseStateEN, b: clsQxUseStateEN) => {
return b.useStateId.localeCompare(a.useStateId);
}
case clsQxUseStateEN.con_UseStateName:
return (a: clsQxUseStateEN, b: clsQxUseStateEN) => {
return b.useStateName.localeCompare(a.useStateName);
}
case clsQxUseStateEN.con_Memo:
return (a: clsQxUseStateEN, b: clsQxUseStateEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUseState]中不存在!(in ${ qxUseState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strUseStateId:所给的关键字
 * @returns 对象
*/
export  async function QxUseState_GetNameByUseStateIdCache(strUseStateId: string ) {

if (IsNullOrEmpty(strUseStateId) == true)
{
  const strMsg = Format("参数:[strUseStateId]不能为空!(In clsQxUseStateWApi.GetNameByUseStateIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strUseStateId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUseStateId]的长度:[{0}]不正确!(clsQxUseStateWApi.GetNameByUseStateIdCache)", strUseStateId.length);
console.error(strMsg);
throw (strMsg);
}
const arrQxUseStateObjLstCache = await QxUseState_GetObjLstCache();
if (arrQxUseStateObjLstCache == null) return "";
try
{
const arrQxUseStateSel = arrQxUseStateObjLstCache.filter(x => 
 x.useStateId == strUseStateId );
let objQxUseState: clsQxUseStateEN;
if (arrQxUseStateSel.length > 0)
{
objQxUseState = arrQxUseStateSel[0];
return objQxUseState.useStateName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strUseStateId);
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
export  async function QxUseState_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUseStateEN.con_UseStateId:
return (obj: clsQxUseStateEN) => {
return obj.useStateId === value;
}
case clsQxUseStateEN.con_UseStateName:
return (obj: clsQxUseStateEN) => {
return obj.useStateName === value;
}
case clsQxUseStateEN.con_Memo:
return (obj: clsQxUseStateEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUseState]中不存在!(in ${ qxUseState_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxUseState_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQxUseStateEN.con_UseStateId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxUseStateEN._AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxUseStateEN._AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strUseStateId = strInValue;
if (IsNullOrEmpty(strUseStateId) == true)
{
return "";
}
const objQxUseState = await QxUseState_GetObjByUseStateIdCache(strUseStateId );
if (objQxUseState == null) return "";
if (objQxUseState.GetFldValue(strOutFldName) == null) return "";
return objQxUseState.GetFldValue(strOutFldName).toString();
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
export  async function QxUseState_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQxUseStateEN.con_UseStateId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrQxUseState = await QxUseState_GetObjLstCache();
if (arrQxUseState == null) return [];
let arrQxUseStateSel = arrQxUseState;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxUseStateSel = arrQxUseStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxUseStateSel.length == 0) return [];
return arrQxUseStateSel.map(x=>x.useStateId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUseState_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUseStateEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const objQxUseState = QxUseState_GetObjFromJsonObj(returnObj);
return objQxUseState;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxUseStateEN._CurrTabName;
if (IsNullOrEmpty(clsQxUseStateEN._WhereFormat) == false)
{
strWhereCond = clsQxUseStateEN._WhereFormat;
}
if (IsNullOrEmpty(clsQxUseStateEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxUseStateEN._CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxUseStateExObjLstCache: Array<clsQxUseStateEN> = CacheHelper.Get(strKey);
const arrQxUseStateObjLstT = QxUseState_GetObjLstByJSONObjLst(arrQxUseStateExObjLstCache);
return arrQxUseStateObjLstT;
}
try
{
const arrQxUseStateExObjLst = await QxUseState_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxUseStateExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxUseStateExObjLst.length);
console.log(strInfo);
return arrQxUseStateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUseState_GetObjLstlocalStorage()
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxUseStateEN._CurrTabName;
if (IsNullOrEmpty(clsQxUseStateEN._WhereFormat) == false)
{
strWhereCond = clsQxUseStateEN._WhereFormat;
}
if (IsNullOrEmpty(clsQxUseStateEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxUseStateEN._CacheAddiCondition);
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
const arrQxUseStateExObjLstCache: Array<clsQxUseStateEN> = JSON.parse(strTempObjLst);
const arrQxUseStateObjLstT = QxUseState_GetObjLstByJSONObjLst(arrQxUseStateExObjLstCache);
return arrQxUseStateObjLstT;
}
try
{
const arrQxUseStateExObjLst = await QxUseState_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxUseStateExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxUseStateExObjLst.length);
console.log(strInfo);
return arrQxUseStateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUseState_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxUseStateEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxUseStateObjLstCache: Array<clsQxUseStateEN> = JSON.parse(strTempObjLst);
return arrQxUseStateObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxUseState_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUseStateEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUseState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUseState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_GetObjLstsessionStorage()
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxUseStateEN._CurrTabName;
if (IsNullOrEmpty(clsQxUseStateEN._WhereFormat) == false)
{
strWhereCond = clsQxUseStateEN._WhereFormat;
}
if (IsNullOrEmpty(clsQxUseStateEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxUseStateEN._CacheAddiCondition);
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
const arrQxUseStateExObjLstCache: Array<clsQxUseStateEN> = JSON.parse(strTempObjLst);
const arrQxUseStateObjLstT = QxUseState_GetObjLstByJSONObjLst(arrQxUseStateExObjLstCache);
return arrQxUseStateObjLstT;
}
try
{
const arrQxUseStateExObjLst = await QxUseState_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxUseStateExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxUseStateExObjLst.length);
console.log(strInfo);
return arrQxUseStateExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUseState_GetObjLstsessionStoragePureCache()
{
//初始化列表缓存
const strKey = clsQxUseStateEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxUseStateObjLstCache: Array<clsQxUseStateEN> = JSON.parse(strTempObjLst);
return arrQxUseStateObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUseState_GetObjLstCache(): Promise<Array<clsQxUseStateEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQxUseStateObjLstCache;
switch (clsQxUseStateEN._CacheModeId)
{
case "04"://sessionStorage
arrQxUseStateObjLstCache = await QxUseState_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQxUseStateObjLstCache = await QxUseState_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQxUseStateObjLstCache = await QxUseState_GetObjLstClientCache();
break;
default:
arrQxUseStateObjLstCache = await QxUseState_GetObjLstClientCache();
break;
}
return arrQxUseStateObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxUseState_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxUseStateObjLstCache;
switch (clsQxUseStateEN._CacheModeId)
{
case "04"://sessionStorage
arrQxUseStateObjLstCache = await QxUseState_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQxUseStateObjLstCache = await QxUseState_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQxUseStateObjLstCache = null;
break;
default:
arrQxUseStateObjLstCache = null;
break;
}
return arrQxUseStateObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUseStateIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxUseState_GetSubObjLstCache(objQxUseStateCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxUseStateObjLstCache = await QxUseState_GetObjLstCache();
let arrQxUseStateSel = arrQxUseStateObjLstCache;
if (objQxUseStateCond.GetConditions().length == 0) return arrQxUseStateSel;
try {
//console.log(sstrKeys);
for (const objCondition of objQxUseStateCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxUseStateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxUseStateCond), qxUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxUseStateEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUseStateId:关键字列表
 * @returns 对象列表
 **/
export  async function QxUseState_GetObjLstByUseStateIdLstAsync(arrUseStateId: Array<string>): Promise<Array<clsQxUseStateEN>>  
{
const strThisFuncName = "GetObjLstByUseStateIdLstAsync";
const strAction = "GetObjLstByUseStateIdLst";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUseStateId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUseState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUseState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param arrstrUseStateIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxUseState_GetObjLstByUseStateIdLstCache(arrUseStateIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByUseStateIdLstCache";
try
{
const arrQxUseStateObjLstCache = await QxUseState_GetObjLstCache();
const arrQxUseStateSel = arrQxUseStateObjLstCache.filter(x => arrUseStateIdLst.indexOf(x.useStateId)>-1);
return arrQxUseStateSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrUseStateIdLst.join(","), qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUseStateEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUseState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUseState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUseStateEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUseState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUseState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param strUseStateId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxUseState_DelRecordAsync(strUseStateId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strUseStateId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param arrUseStateId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxUseState_DelQxUseStatesAsync(arrUseStateId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUseStatesAsync";
const strAction = "DelQxUseStates";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUseStateId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_DelQxUseStatesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUseStatesByCondAsync";
const strAction = "DelQxUseStatesByCond";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param objQxUseStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUseState_AddNewRecordAsync(objQxUseStateEN: clsQxUseStateEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxUseStateEN);
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUseStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param objQxUseStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUseState_AddNewRecordWithMaxIdAsync(objQxUseStateEN: clsQxUseStateEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUseStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_AddNewObjSave(objQxUseStateEN: clsQxUseStateEN ): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxUseState_CheckPropertyNew(objQxUseStateEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUseState_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUseState_CheckUniCond4Add(objQxUseStateEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await QxUseState_AddNewRecordWithMaxIdAsync(objQxUseStateEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
QxUseState_ReFreshCache();
}
else
{
const strInfo = `添加[使用状态(QxUseState)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxUseState_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxUseState_CheckUniCond4Add(objQxUseStateEN: clsQxUseStateEN): Promise<boolean>{
const strUniquenessCondition = QxUseState_GetUniCondStr(objQxUseStateEN);
const bolIsExistCondition = await QxUseState_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUseState_CheckUniCond4Update(objQxUseStateEN: clsQxUseStateEN): Promise<boolean>{
const strUniquenessCondition = QxUseState_GetUniCondStr4Update(objQxUseStateEN);
const bolIsExistCondition = await QxUseState_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUseState_UpdateObjSave(objQxUseStateEN: clsQxUseStateEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxUseStateEN.sfUpdFldSetStr = objQxUseStateEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxUseStateEN.useStateId == "" || objQxUseStateEN.useStateId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxUseState_CheckProperty4Update(objQxUseStateEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUseState_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUseState_CheckUniCond4Update(objQxUseStateEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxUseState_UpdateRecordAsync(objQxUseStateEN);
if (returnBool == true)
{
QxUseState_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxUseState_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxUseStateEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUseState_AddNewRecordWithReturnKeyAsync(objQxUseStateEN: clsQxUseStateEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUseStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param objQxUseStateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUseState_UpdateRecordAsync(objQxUseStateEN: clsQxUseStateEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUseStateEN.sfUpdFldSetStr === undefined || objQxUseStateEN.sfUpdFldSetStr === null || objQxUseStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUseStateEN.useStateId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUseStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param objQxUseStateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUseState_EditRecordExAsync(objQxUseStateEN: clsQxUseStateEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxUseStateEN.sfUpdFldSetStr === undefined || objQxUseStateEN.sfUpdFldSetStr === null || objQxUseStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUseStateEN.useStateId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUseStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param objQxUseStateEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUseState_UpdateWithConditionAsync(objQxUseStateEN: clsQxUseStateEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUseStateEN.sfUpdFldSetStr === undefined || objQxUseStateEN.sfUpdFldSetStr === null || objQxUseStateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUseStateEN.useStateId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);
objQxUseStateEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUseStateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param objstrUseStateIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxUseState_IsExistRecordCache(objQxUseStateCond: ConditionCollection ) {
const strThisFuncName = "IsExistRecordCache";
const arrQxUseStateObjLstCache = await QxUseState_GetObjLstCache();
if (arrQxUseStateObjLstCache == null) return false;
let arrQxUseStateSel = arrQxUseStateObjLstCache;
if (objQxUseStateCond.GetConditions().length == 0) return arrQxUseStateSel.length>0?true:false;
try {
for (const objCondition of objQxUseStateCond.GetConditions()) {
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
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxUseStateSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxUseStateCond), qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param strUseStateId:所给的关键字
 * @returns 对象
*/
export  async function QxUseState_IsExistCache(strUseStateId:string) {
const strThisFuncName = "IsExistCache";
const arrQxUseStateObjLstCache = await QxUseState_GetObjLstCache();
if (arrQxUseStateObjLstCache == null) return false;
try
{
const arrQxUseStateSel = arrQxUseStateObjLstCache.filter(x => x.useStateId == strUseStateId);
if (arrQxUseStateSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strUseStateId, qxUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strUseStateId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxUseState_IsExistAsync(strUseStateId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUseStateId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
export  async function QxUseState_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
 * @param objQxUseStateCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxUseState_GetRecCountByCondCache(objQxUseStateCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxUseStateObjLstCache = await QxUseState_GetObjLstCache();
if (arrQxUseStateObjLstCache == null) return 0;
let arrQxUseStateSel = arrQxUseStateObjLstCache;
if (objQxUseStateCond.GetConditions().length == 0) return arrQxUseStateSel.length;
try {
for (const objCondition of objQxUseStateCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxUseStateSel = arrQxUseStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxUseStateSel = arrQxUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxUseStateSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxUseStateCond), qxUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function QxUseState_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function QxUseState_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUseState_ConstructorName, strThisFuncName);
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
export  function QxUseState_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxUseState_ReFreshCache():void
{


 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQxUseStateEN._CurrTabName;
switch (clsQxUseStateEN._CacheModeId)
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
clsQxUseStateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function QxUseState_ReFreshThisCache():void
{

if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQxUseStateEN._CurrTabName;
switch (clsQxUseStateEN._CacheModeId)
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
clsQxUseStateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function QxUseState_GetLastRefreshTime():string
{
if (clsQxUseStateEN._RefreshTimeLst.length == 0) return "";
return clsQxUseStateEN._RefreshTimeLst[clsQxUseStateEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxUseState_BindDdl_UseStateIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_UseStateIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_UseStateIdInDivCache");
const arrObjLstSel = await QxUseState_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxUseStateEN.con_UseStateId, clsQxUseStateEN.con_UseStateName, "选使用状态...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxUseState_GetArrQxUseState()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_UseStateIdInDivCache");
const arrQxUseState = new Array<clsQxUseStateEN>();
const arrObjLstSel = await QxUseState_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsQxUseStateEN();
obj0.useStateId = '0';
obj0.useStateName = '选使用状态...';
arrQxUseState.push(obj0);
arrObjLstSel.forEach(x => arrQxUseState.push(x));
return arrQxUseState;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUseState_CheckPropertyNew(pobjQxUseStateEN: clsQxUseStateEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUseStateEN.useStateName) === true )
{
 throw new Error(`(errid:Watl000411)字段[使用状态名称]不能为空(In 使用状态)!(clsQxUseStateBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUseStateEN.useStateId) == false && GetStrLen(pobjQxUseStateEN.useStateId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[使用状态Id(useStateId)]的长度不能超过2(In 使用状态(QxUseState))!值:${pobjQxUseStateEN.useStateId}(clsQxUseStateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUseStateEN.useStateName) == false && GetStrLen(pobjQxUseStateEN.useStateName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[使用状态名称(useStateName)]的长度不能超过30(In 使用状态(QxUseState))!值:${pobjQxUseStateEN.useStateName}(clsQxUseStateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUseStateEN.memo) == false && GetStrLen(pobjQxUseStateEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 使用状态(QxUseState))!值:${pobjQxUseStateEN.memo}(clsQxUseStateBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUseStateEN.useStateId) == false && undefined !== pobjQxUseStateEN.useStateId && tzDataType.isString(pobjQxUseStateEN.useStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[使用状态Id(useStateId)]的值:[${pobjQxUseStateEN.useStateId}], 非法,应该为字符型(In 使用状态(QxUseState))!(clsQxUseStateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUseStateEN.useStateName) == false && undefined !== pobjQxUseStateEN.useStateName && tzDataType.isString(pobjQxUseStateEN.useStateName) === false)
{
 throw new Error(`(errid:Watl000414)字段[使用状态名称(useStateName)]的值:[${pobjQxUseStateEN.useStateName}], 非法,应该为字符型(In 使用状态(QxUseState))!(clsQxUseStateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUseStateEN.memo) == false && undefined !== pobjQxUseStateEN.memo && tzDataType.isString(pobjQxUseStateEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxUseStateEN.memo}], 非法,应该为字符型(In 使用状态(QxUseState))!(clsQxUseStateBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUseState_CheckProperty4Update(pobjQxUseStateEN: clsQxUseStateEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUseStateEN.useStateId) == false && GetStrLen(pobjQxUseStateEN.useStateId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[使用状态Id(useStateId)]的长度不能超过2(In 使用状态(QxUseState))!值:${pobjQxUseStateEN.useStateId}(clsQxUseStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUseStateEN.useStateName) == false && GetStrLen(pobjQxUseStateEN.useStateName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[使用状态名称(useStateName)]的长度不能超过30(In 使用状态(QxUseState))!值:${pobjQxUseStateEN.useStateName}(clsQxUseStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUseStateEN.memo) == false && GetStrLen(pobjQxUseStateEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 使用状态(QxUseState))!值:${pobjQxUseStateEN.memo}(clsQxUseStateBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUseStateEN.useStateId) == false && undefined !== pobjQxUseStateEN.useStateId && tzDataType.isString(pobjQxUseStateEN.useStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[使用状态Id(useStateId)]的值:[${pobjQxUseStateEN.useStateId}], 非法,应该为字符型(In 使用状态(QxUseState))!(clsQxUseStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUseStateEN.useStateName) == false && undefined !== pobjQxUseStateEN.useStateName && tzDataType.isString(pobjQxUseStateEN.useStateName) === false)
{
 throw new Error(`(errid:Watl000417)字段[使用状态名称(useStateName)]的值:[${pobjQxUseStateEN.useStateName}], 非法,应该为字符型(In 使用状态(QxUseState))!(clsQxUseStateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUseStateEN.memo) == false && undefined !== pobjQxUseStateEN.memo && tzDataType.isString(pobjQxUseStateEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxUseStateEN.memo}], 非法,应该为字符型(In 使用状态(QxUseState))!(clsQxUseStateBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
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
export  function QxUseState_GetJSONStrByObj (pobjQxUseStateEN: clsQxUseStateEN): string
{
pobjQxUseStateEN.sfUpdFldSetStr = pobjQxUseStateEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUseStateEN);
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
export  function QxUseState_GetObjLstByJSONStr (strJSON: string): Array<clsQxUseStateEN>
{
let arrQxUseStateObjLst = new Array<clsQxUseStateEN>();
if (strJSON === "")
{
return arrQxUseStateObjLst;
}
try
{
arrQxUseStateObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUseStateObjLst;
}
return arrQxUseStateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUseStateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUseState_GetObjLstByJSONObjLst (arrQxUseStateObjLstS: Array<clsQxUseStateEN>): Array<clsQxUseStateEN>
{
const arrQxUseStateObjLst = new Array<clsQxUseStateEN>();
for (const objInFor of arrQxUseStateObjLstS) {
const obj1 = QxUseState_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUseStateObjLst.push(obj1);
}
return arrQxUseStateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUseState_GetObjByJSONStr (strJSON: string): clsQxUseStateEN
{
let pobjQxUseStateEN = new clsQxUseStateEN();
if (strJSON === "")
{
return pobjQxUseStateEN;
}
try
{
pobjQxUseStateEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUseStateEN;
}
return pobjQxUseStateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUseState_GetCombineCondition(objQxUseStateCond: clsQxUseStateEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUseStateCond.dicFldComparisonOp, clsQxUseStateEN.con_UseStateId) == true)
{
const strComparisonOpUseStateId:string = objQxUseStateCond.dicFldComparisonOp[clsQxUseStateEN.con_UseStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUseStateEN.con_UseStateId, objQxUseStateCond.useStateId, strComparisonOpUseStateId);
}
if (Object.prototype.hasOwnProperty.call(objQxUseStateCond.dicFldComparisonOp, clsQxUseStateEN.con_UseStateName) == true)
{
const strComparisonOpUseStateName:string = objQxUseStateCond.dicFldComparisonOp[clsQxUseStateEN.con_UseStateName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUseStateEN.con_UseStateName, objQxUseStateCond.useStateName, strComparisonOpUseStateName);
}
if (Object.prototype.hasOwnProperty.call(objQxUseStateCond.dicFldComparisonOp, clsQxUseStateEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUseStateCond.dicFldComparisonOp[clsQxUseStateEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUseStateEN.con_Memo, objQxUseStateCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUseState(使用状态),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUseStateName: 使用状态名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUseState_GetUniCondStr(objQxUseStateEN: clsQxUseStateEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and UseStateName = '{0}'", objQxUseStateEN.useStateName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUseState(使用状态),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUseStateName: 使用状态名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUseState_GetUniCondStr4Update(objQxUseStateEN: clsQxUseStateEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and UseStateId <> '{0}'", objQxUseStateEN.useStateId);
 strWhereCond +=  Format(" and UseStateName = '{0}'", objQxUseStateEN.useStateName);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUseStateENS:源对象
 * @param objQxUseStateENT:目标对象
*/
export  function QxUseState_GetObjFromJsonObj(objQxUseStateENS: clsQxUseStateEN): clsQxUseStateEN 
{
 const objQxUseStateENT: clsQxUseStateEN = new clsQxUseStateEN();
ObjectAssign(objQxUseStateENT, objQxUseStateENS);
 return objQxUseStateENT;
}