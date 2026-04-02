
 /**
 * 类名:clsvQx_UserTypeWApi
 * 表名:vQx_UserType(00140134)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/02 10:54:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vQx_UserType(vQx_UserType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2026年04月02日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvQx_UserTypeEN } from "@/ts/L0Entity/SysPara/clsvQx_UserTypeEN";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vQx_UserType_Controller = "vQx_UserTypeApi";
 export const vQx_UserType_ConstructorName = "vQx_UserType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserTypeId:关键字
 * @returns 对象
 **/
export  async function vQx_UserType_GetObjByUserTypeIdAsync(strUserTypeId: string): Promise<clsvQx_UserTypeEN|null>  
{
const strThisFuncName = "GetObjByUserTypeIdAsync";

if (IsNullOrEmpty(strUserTypeId) == true)
{
  const strMsg = Format("参数:[strUserTypeId]不能为空!(In clsvQx_UserTypeWApi.GetObjByUserTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUserTypeId]的长度:[{0}]不正确!(clsvQx_UserTypeWApi.GetObjByUserTypeIdAsync)", strUserTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByUserTypeId";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserTypeId,
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
const objvQx_UserType = vQx_UserType_GetObjFromJsonObj(returnObj);
return objvQx_UserType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
 * @param strUserTypeId:所给的关键字
 * @returns 对象
*/
export  async function vQx_UserType_GetObjByUserTypeIdlocalStorage(strUserTypeId: string) {
const strThisFuncName = "GetObjByUserTypeIdlocalStorage";

if (IsNullOrEmpty(strUserTypeId) == true)
{
  const strMsg = Format("参数:[strUserTypeId]不能为空!(In clsvQx_UserTypeWApi.GetObjByUserTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUserTypeId]的长度:[{0}]不正确!(clsvQx_UserTypeWApi.GetObjByUserTypeIdlocalStorage)", strUserTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvQx_UserTypeEN._CurrTabName, strUserTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvQx_UserTypeCache: clsvQx_UserTypeEN = JSON.parse(strTempObj);
return objvQx_UserTypeCache;
}
try
{
const objvQx_UserType = await vQx_UserType_GetObjByUserTypeIdAsync(strUserTypeId);
if (objvQx_UserType != null)
{
localStorage.setItem(strKey, JSON.stringify(objvQx_UserType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvQx_UserType;
}
return objvQx_UserType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strUserTypeId, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strUserTypeId:所给的关键字
 * @returns 对象
*/
export  async function vQx_UserType_GetObjByUserTypeIdCache(strUserTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByUserTypeIdCache";

if (IsNullOrEmpty(strUserTypeId) == true)
{
  const strMsg = Format("参数:[strUserTypeId]不能为空!(In clsvQx_UserTypeWApi.GetObjByUserTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUserTypeId]的长度:[{0}]不正确!(clsvQx_UserTypeWApi.GetObjByUserTypeIdCache)", strUserTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstCache();
try
{
const arrvQx_UserTypeSel = arrvQx_UserTypeObjLstCache.filter(x => 
 x.userTypeId == strUserTypeId );
let objvQx_UserType: clsvQx_UserTypeEN;
if (arrvQx_UserTypeSel.length > 0)
{
objvQx_UserType = arrvQx_UserTypeSel[0];
return objvQx_UserType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvQx_UserTypeConst = await vQx_UserType_GetObjByUserTypeIdAsync(strUserTypeId);
if (objvQx_UserTypeConst != null)
{
vQx_UserType_ReFreshThisCache();
return objvQx_UserTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strUserTypeId, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQx_UserType_SortFunDefa(a:clsvQx_UserTypeEN , b:clsvQx_UserTypeEN): number 
{
return a.userTypeId.localeCompare(b.userTypeId);
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
export  function vQx_UserType_SortFunDefa2Fld(a:clsvQx_UserTypeEN , b:clsvQx_UserTypeEN): number 
{
if (a.userTypeName == b.userTypeName) return a.userTypeNameSim.localeCompare(b.userTypeNameSim);
else return a.userTypeName.localeCompare(b.userTypeName);
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
export  function vQx_UserType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQx_UserTypeEN.con_UserTypeId:
return (a: clsvQx_UserTypeEN, b: clsvQx_UserTypeEN) => {
return a.userTypeId.localeCompare(b.userTypeId);
}
case clsvQx_UserTypeEN.con_UserTypeName:
return (a: clsvQx_UserTypeEN, b: clsvQx_UserTypeEN) => {
return a.userTypeName.localeCompare(b.userTypeName);
}
case clsvQx_UserTypeEN.con_UserTypeNameSim:
return (a: clsvQx_UserTypeEN, b: clsvQx_UserTypeEN) => {
if (a.userTypeNameSim == null) return -1;
if (b.userTypeNameSim == null) return 1;
return a.userTypeNameSim.localeCompare(b.userTypeNameSim);
}
case clsvQx_UserTypeEN.con_UserTypeENName:
return (a: clsvQx_UserTypeEN, b: clsvQx_UserTypeEN) => {
if (a.userTypeENName == null) return -1;
if (b.userTypeENName == null) return 1;
return a.userTypeENName.localeCompare(b.userTypeENName);
}
case clsvQx_UserTypeEN.con_Memo:
return (a: clsvQx_UserTypeEN, b: clsvQx_UserTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQx_UserType]中不存在!(in ${ vQx_UserType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQx_UserTypeEN.con_UserTypeId:
return (a: clsvQx_UserTypeEN, b: clsvQx_UserTypeEN) => {
return b.userTypeId.localeCompare(a.userTypeId);
}
case clsvQx_UserTypeEN.con_UserTypeName:
return (a: clsvQx_UserTypeEN, b: clsvQx_UserTypeEN) => {
return b.userTypeName.localeCompare(a.userTypeName);
}
case clsvQx_UserTypeEN.con_UserTypeNameSim:
return (a: clsvQx_UserTypeEN, b: clsvQx_UserTypeEN) => {
if (b.userTypeNameSim == null) return -1;
if (a.userTypeNameSim == null) return 1;
return b.userTypeNameSim.localeCompare(a.userTypeNameSim);
}
case clsvQx_UserTypeEN.con_UserTypeENName:
return (a: clsvQx_UserTypeEN, b: clsvQx_UserTypeEN) => {
if (b.userTypeENName == null) return -1;
if (a.userTypeENName == null) return 1;
return b.userTypeENName.localeCompare(a.userTypeENName);
}
case clsvQx_UserTypeEN.con_Memo:
return (a: clsvQx_UserTypeEN, b: clsvQx_UserTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQx_UserType]中不存在!(in ${ vQx_UserType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strUserTypeId:所给的关键字
 * @returns 对象
*/
export  async function vQx_UserType_GetNameByUserTypeIdCache(strUserTypeId: string ) {

if (IsNullOrEmpty(strUserTypeId) == true)
{
  const strMsg = Format("参数:[strUserTypeId]不能为空!(In clsvQx_UserTypeWApi.GetNameByUserTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUserTypeId]的长度:[{0}]不正确!(clsvQx_UserTypeWApi.GetNameByUserTypeIdCache)", strUserTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstCache();
if (arrvQx_UserTypeObjLstCache == null) return "";
try
{
const arrvQx_UserTypeSel = arrvQx_UserTypeObjLstCache.filter(x => 
 x.userTypeId == strUserTypeId );
let objvQx_UserType: clsvQx_UserTypeEN;
if (arrvQx_UserTypeSel.length > 0)
{
objvQx_UserType = arrvQx_UserTypeSel[0];
return objvQx_UserType.userTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strUserTypeId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vQx_UserType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQx_UserTypeEN.con_UserTypeId:
return (obj: clsvQx_UserTypeEN) => {
return obj.userTypeId === value;
}
case clsvQx_UserTypeEN.con_UserTypeName:
return (obj: clsvQx_UserTypeEN) => {
return obj.userTypeName === value;
}
case clsvQx_UserTypeEN.con_UserTypeNameSim:
return (obj: clsvQx_UserTypeEN) => {
return obj.userTypeNameSim === value;
}
case clsvQx_UserTypeEN.con_UserTypeENName:
return (obj: clsvQx_UserTypeEN) => {
return obj.userTypeENName === value;
}
case clsvQx_UserTypeEN.con_Memo:
return (obj: clsvQx_UserTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQx_UserType]中不存在!(in ${ vQx_UserType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function vQx_UserType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsvQx_UserTypeEN.con_UserTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvQx_UserTypeEN._AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvQx_UserTypeEN._AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strUserTypeId = strInValue;
if (IsNullOrEmpty(strUserTypeId) == true)
{
return "";
}
const objvQx_UserType = await vQx_UserType_GetObjByUserTypeIdCache(strUserTypeId );
if (objvQx_UserType == null) return "";
if (objvQx_UserType.GetFldValue(strOutFldName) == null) return "";
return objvQx_UserType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function vQx_UserType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsvQx_UserTypeEN.con_UserTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvQx_UserType = await vQx_UserType_GetObjLstCache();
if (arrvQx_UserType == null) return [];
let arrvQx_UserTypeSel = arrvQx_UserType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvQx_UserTypeSel.length == 0) return [];
return arrvQx_UserTypeSel.map(x=>x.userTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQx_UserType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
export  async function vQx_UserType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
export  async function vQx_UserType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
export  async function vQx_UserType_GetFirstObjAsync(strWhereCond: string): Promise<clsvQx_UserTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

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
const objvQx_UserType = vQx_UserType_GetObjFromJsonObj(returnObj);
return objvQx_UserType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
export  async function vQx_UserType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvQx_UserTypeEN._CurrTabName;
if (IsNullOrEmpty(clsvQx_UserTypeEN._WhereFormat) == false)
{
strWhereCond = clsvQx_UserTypeEN._WhereFormat;
}
if (IsNullOrEmpty(clsvQx_UserTypeEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQx_UserTypeEN._CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvQx_UserTypeExObjLstCache: Array<clsvQx_UserTypeEN> = CacheHelper.Get(strKey);
const arrvQx_UserTypeObjLstT = vQx_UserType_GetObjLstByJSONObjLst(arrvQx_UserTypeExObjLstCache);
return arrvQx_UserTypeObjLstT;
}
try
{
const arrvQx_UserTypeExObjLst = await vQx_UserType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvQx_UserTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQx_UserTypeExObjLst.length);
console.log(strInfo);
return arrvQx_UserTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQx_UserType_GetObjLstlocalStorage()
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvQx_UserTypeEN._CurrTabName;
if (IsNullOrEmpty(clsvQx_UserTypeEN._WhereFormat) == false)
{
strWhereCond = clsvQx_UserTypeEN._WhereFormat;
}
if (IsNullOrEmpty(clsvQx_UserTypeEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQx_UserTypeEN._CacheAddiCondition);
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
const arrvQx_UserTypeExObjLstCache: Array<clsvQx_UserTypeEN> = JSON.parse(strTempObjLst);
const arrvQx_UserTypeObjLstT = vQx_UserType_GetObjLstByJSONObjLst(arrvQx_UserTypeExObjLstCache);
return arrvQx_UserTypeObjLstT;
}
try
{
const arrvQx_UserTypeExObjLst = await vQx_UserType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvQx_UserTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQx_UserTypeExObjLst.length);
console.log(strInfo);
return arrvQx_UserTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQx_UserType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsvQx_UserTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvQx_UserTypeObjLstCache: Array<clsvQx_UserTypeEN> = JSON.parse(strTempObjLst);
return arrvQx_UserTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vQx_UserType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQx_UserTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQx_UserType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQx_UserType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
export  async function vQx_UserType_GetObjLstsessionStorage()
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvQx_UserTypeEN._CurrTabName;
if (IsNullOrEmpty(clsvQx_UserTypeEN._WhereFormat) == false)
{
strWhereCond = clsvQx_UserTypeEN._WhereFormat;
}
if (IsNullOrEmpty(clsvQx_UserTypeEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQx_UserTypeEN._CacheAddiCondition);
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
const arrvQx_UserTypeExObjLstCache: Array<clsvQx_UserTypeEN> = JSON.parse(strTempObjLst);
const arrvQx_UserTypeObjLstT = vQx_UserType_GetObjLstByJSONObjLst(arrvQx_UserTypeExObjLstCache);
return arrvQx_UserTypeObjLstT;
}
try
{
const arrvQx_UserTypeExObjLst = await vQx_UserType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvQx_UserTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQx_UserTypeExObjLst.length);
console.log(strInfo);
return arrvQx_UserTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQx_UserType_GetObjLstsessionStoragePureCache()
{
//初始化列表缓存
const strKey = clsvQx_UserTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvQx_UserTypeObjLstCache: Array<clsvQx_UserTypeEN> = JSON.parse(strTempObjLst);
return arrvQx_UserTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQx_UserType_GetObjLstCache(): Promise<Array<clsvQx_UserTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrvQx_UserTypeObjLstCache;
switch (clsvQx_UserTypeEN._CacheModeId)
{
case "04"://sessionStorage
arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstClientCache();
break;
default:
arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstClientCache();
break;
}
return arrvQx_UserTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQx_UserType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvQx_UserTypeObjLstCache;
switch (clsvQx_UserTypeEN._CacheModeId)
{
case "04"://sessionStorage
arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrvQx_UserTypeObjLstCache = null;
break;
default:
arrvQx_UserTypeObjLstCache = null;
break;
}
return arrvQx_UserTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vQx_UserType_GetSubObjLstCache(objvQx_UserTypeCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstCache();
let arrvQx_UserTypeSel = arrvQx_UserTypeObjLstCache;
if (objvQx_UserTypeCond.GetConditions().length == 0) return arrvQx_UserTypeSel;
try {
//console.log(sstrKeys);
for (const objCondition of objvQx_UserTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvQx_UserTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvQx_UserTypeCond), vQx_UserType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvQx_UserTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUserTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function vQx_UserType_GetObjLstByUserTypeIdLstAsync(arrUserTypeId: Array<string>): Promise<Array<clsvQx_UserTypeEN>>  
{
const strThisFuncName = "GetObjLstByUserTypeIdLstAsync";
const strAction = "GetObjLstByUserTypeIdLst";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUserTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQx_UserType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQx_UserType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
 * @param arrstrUserTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vQx_UserType_GetObjLstByUserTypeIdLstCache(arrUserTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByUserTypeIdLstCache";
try
{
const arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstCache();
const arrvQx_UserTypeSel = arrvQx_UserTypeObjLstCache.filter(x => arrUserTypeIdLst.indexOf(x.userTypeId)>-1);
return arrvQx_UserTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrUserTypeIdLst.join(","), vQx_UserType_ConstructorName, strThisFuncName);
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
export  async function vQx_UserType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQx_UserTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQx_UserType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQx_UserType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
export  async function vQx_UserType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQx_UserTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQx_UserType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQx_UserType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrUserTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vQx_UserType_IsExistRecordCache(objvQx_UserTypeCond: ConditionCollection ) {
const strThisFuncName = "IsExistRecordCache";
const arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstCache();
if (arrvQx_UserTypeObjLstCache == null) return false;
let arrvQx_UserTypeSel = arrvQx_UserTypeObjLstCache;
if (objvQx_UserTypeCond.GetConditions().length == 0) return arrvQx_UserTypeSel.length>0?true:false;
try {
for (const objCondition of objvQx_UserTypeCond.GetConditions()) {
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
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvQx_UserTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvQx_UserTypeCond), vQx_UserType_ConstructorName, strThisFuncName);
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
export  async function vQx_UserType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
 * @param strUserTypeId:所给的关键字
 * @returns 对象
*/
export  async function vQx_UserType_IsExistCache(strUserTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstCache();
if (arrvQx_UserTypeObjLstCache == null) return false;
try
{
const arrvQx_UserTypeSel = arrvQx_UserTypeObjLstCache.filter(x => x.userTypeId == strUserTypeId);
if (arrvQx_UserTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strUserTypeId, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strUserTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQx_UserType_IsExistAsync(strUserTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
export  async function vQx_UserType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(vQx_UserType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_UserType_ConstructorName, strThisFuncName);
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
 * @param objvQx_UserTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vQx_UserType_GetRecCountByCondCache(objvQx_UserTypeCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvQx_UserTypeObjLstCache = await vQx_UserType_GetObjLstCache();
if (arrvQx_UserTypeObjLstCache == null) return 0;
let arrvQx_UserTypeSel = arrvQx_UserTypeObjLstCache;
if (objvQx_UserTypeCond.GetConditions().length == 0) return arrvQx_UserTypeSel.length;
try {
for (const objCondition of objvQx_UserTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQx_UserTypeSel = arrvQx_UserTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvQx_UserTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvQx_UserTypeCond), vQx_UserType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vQx_UserType_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function vQx_UserType_ReFreshThisCache():void
{

if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsvQx_UserTypeEN._CurrTabName;
switch (clsvQx_UserTypeEN._CacheModeId)
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
clsvQx_UserTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function vQx_UserType_GetLastRefreshTime():string
{
if (clsvQx_UserTypeEN._RefreshTimeLst.length == 0) return "";
return clsvQx_UserTypeEN._RefreshTimeLst[clsvQx_UserTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQx_UserType_BindDdl_UserTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_UserTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_UserTypeIdInDivCache");
const arrObjLstSel = await vQx_UserType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQx_UserTypeEN.con_UserTypeId, clsvQx_UserTypeEN.con_UserTypeName, "选vQx_UserType...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQx_UserType_GetArrvQx_UserType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_UserTypeIdInDivCache");
const arrvQx_UserType = new Array<clsvQx_UserTypeEN>();
const arrObjLstSel = await vQx_UserType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsvQx_UserTypeEN();
obj0.userTypeId = '0';
obj0.userTypeName = '选vQx_UserType...';
arrvQx_UserType.push(obj0);
arrObjLstSel.forEach(x => arrvQx_UserType.push(x));
return arrvQx_UserType;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQx_UserType_GetJSONStrByObj (pobjvQx_UserTypeEN: clsvQx_UserTypeEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQx_UserTypeEN);
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
export  function vQx_UserType_GetObjLstByJSONStr (strJSON: string): Array<clsvQx_UserTypeEN>
{
let arrvQx_UserTypeObjLst = new Array<clsvQx_UserTypeEN>();
if (strJSON === "")
{
return arrvQx_UserTypeObjLst;
}
try
{
arrvQx_UserTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQx_UserTypeObjLst;
}
return arrvQx_UserTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQx_UserTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQx_UserType_GetObjLstByJSONObjLst (arrvQx_UserTypeObjLstS: Array<clsvQx_UserTypeEN>): Array<clsvQx_UserTypeEN>
{
const arrvQx_UserTypeObjLst = new Array<clsvQx_UserTypeEN>();
for (const objInFor of arrvQx_UserTypeObjLstS) {
const obj1 = vQx_UserType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQx_UserTypeObjLst.push(obj1);
}
return arrvQx_UserTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQx_UserType_GetObjByJSONStr (strJSON: string): clsvQx_UserTypeEN
{
let pobjvQx_UserTypeEN = new clsvQx_UserTypeEN();
if (strJSON === "")
{
return pobjvQx_UserTypeEN;
}
try
{
pobjvQx_UserTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQx_UserTypeEN;
}
return pobjvQx_UserTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQx_UserType_GetCombineCondition(objvQx_UserTypeCond: clsvQx_UserTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQx_UserTypeCond.dicFldComparisonOp, clsvQx_UserTypeEN.con_UserTypeId) == true)
{
const strComparisonOpUserTypeId:string = objvQx_UserTypeCond.dicFldComparisonOp[clsvQx_UserTypeEN.con_UserTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_UserTypeEN.con_UserTypeId, objvQx_UserTypeCond.userTypeId, strComparisonOpUserTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQx_UserTypeCond.dicFldComparisonOp, clsvQx_UserTypeEN.con_UserTypeName) == true)
{
const strComparisonOpUserTypeName:string = objvQx_UserTypeCond.dicFldComparisonOp[clsvQx_UserTypeEN.con_UserTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_UserTypeEN.con_UserTypeName, objvQx_UserTypeCond.userTypeName, strComparisonOpUserTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQx_UserTypeCond.dicFldComparisonOp, clsvQx_UserTypeEN.con_UserTypeNameSim) == true)
{
const strComparisonOpUserTypeNameSim:string = objvQx_UserTypeCond.dicFldComparisonOp[clsvQx_UserTypeEN.con_UserTypeNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_UserTypeEN.con_UserTypeNameSim, objvQx_UserTypeCond.userTypeNameSim, strComparisonOpUserTypeNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvQx_UserTypeCond.dicFldComparisonOp, clsvQx_UserTypeEN.con_UserTypeENName) == true)
{
const strComparisonOpUserTypeENName:string = objvQx_UserTypeCond.dicFldComparisonOp[clsvQx_UserTypeEN.con_UserTypeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_UserTypeEN.con_UserTypeENName, objvQx_UserTypeCond.userTypeENName, strComparisonOpUserTypeENName);
}
if (Object.prototype.hasOwnProperty.call(objvQx_UserTypeCond.dicFldComparisonOp, clsvQx_UserTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQx_UserTypeCond.dicFldComparisonOp[clsvQx_UserTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_UserTypeEN.con_Memo, objvQx_UserTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQx_UserTypeENS:源对象
 * @param objvQx_UserTypeENT:目标对象
*/
export  function vQx_UserType_GetObjFromJsonObj(objvQx_UserTypeENS: clsvQx_UserTypeEN): clsvQx_UserTypeEN 
{
 const objvQx_UserTypeENT: clsvQx_UserTypeEN = new clsvQx_UserTypeEN();
ObjectAssign(objvQx_UserTypeENT, objvQx_UserTypeENS);
 return objvQx_UserTypeENT;
}