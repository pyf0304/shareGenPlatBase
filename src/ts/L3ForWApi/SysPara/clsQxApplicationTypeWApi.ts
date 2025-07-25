
 /**
 * 类名:clsQxApplicationTypeWApi
 * 表名:QxApplicationType(00140088)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:28
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 应用程序类型(QxApplicationType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsQxApplicationTypeEN } from "@/ts/L0Entity/SysPara/clsQxApplicationTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const qxApplicationType_Controller = "QxApplicationTypeApi";
 export const qxApplicationType_ConstructorName = "qxApplicationType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param intApplicationTypeId:关键字
 * @returns 对象
 **/
export  async function QxApplicationType_GetObjByApplicationTypeIdAsync(intApplicationTypeId: number): Promise<clsQxApplicationTypeEN|null>  
{
const strThisFuncName = "GetObjByApplicationTypeIdAsync";

if (intApplicationTypeId == 0)
{
  const strMsg = Format("参数:[intApplicationTypeId]不能为空!(In clsQxApplicationTypeWApi.GetObjByApplicationTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByApplicationTypeId";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
intApplicationTypeId,
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
const objQxApplicationType = QxApplicationType_GetObjFromJsonObj(returnObj);
return objQxApplicationType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param intApplicationTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxApplicationType_GetObjByApplicationTypeIdlocalStorage(intApplicationTypeId: number) {
const strThisFuncName = "GetObjByApplicationTypeIdlocalStorage";

if (intApplicationTypeId == 0)
{
  const strMsg = Format("参数:[intApplicationTypeId]不能为空!(In clsQxApplicationTypeWApi.GetObjByApplicationTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsQxApplicationTypeEN._CurrTabName, intApplicationTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objQxApplicationTypeCache: clsQxApplicationTypeEN = JSON.parse(strTempObj);
return objQxApplicationTypeCache;
}
try
{
const objQxApplicationType = await QxApplicationType_GetObjByApplicationTypeIdAsync(intApplicationTypeId);
if (objQxApplicationType != null)
{
localStorage.setItem(strKey, JSON.stringify(objQxApplicationType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objQxApplicationType;
}
return objQxApplicationType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, intApplicationTypeId, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param intApplicationTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxApplicationType_GetObjByApplicationTypeIdCache(intApplicationTypeId: number, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByApplicationTypeIdCache";

if (intApplicationTypeId == 0)
{
  const strMsg = Format("参数:[intApplicationTypeId]不能为空!(In clsQxApplicationTypeWApi.GetObjByApplicationTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstCache();
try
{
const arrQxApplicationTypeSel = arrQxApplicationTypeObjLstCache.filter(x => 
 x.applicationTypeId == intApplicationTypeId );
let objQxApplicationType: clsQxApplicationTypeEN;
if (arrQxApplicationTypeSel.length > 0)
{
objQxApplicationType = arrQxApplicationTypeSel[0];
return objQxApplicationType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objQxApplicationTypeConst = await QxApplicationType_GetObjByApplicationTypeIdAsync(intApplicationTypeId);
if (objQxApplicationTypeConst != null)
{
QxApplicationType_ReFreshThisCache();
return objQxApplicationTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, intApplicationTypeId, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQxApplicationType:所给的对象
 * @returns 对象
*/
export  async function QxApplicationType_UpdateObjInLstCache(objQxApplicationType: clsQxApplicationTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstCache();
const obj = arrQxApplicationTypeObjLstCache.find(x => x.applicationTypeName == objQxApplicationType.applicationTypeName);
if (obj != null)
{
objQxApplicationType.applicationTypeId = obj.applicationTypeId;
ObjectAssign( obj, objQxApplicationType);
}
else
{
arrQxApplicationTypeObjLstCache.push(objQxApplicationType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxApplicationType_SortFunDefa(a:clsQxApplicationTypeEN , b:clsQxApplicationTypeEN): number 
{
return a.applicationTypeId-b.applicationTypeId;
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
export  function QxApplicationType_SortFunDefa2Fld(a:clsQxApplicationTypeEN , b:clsQxApplicationTypeEN): number 
{
if (a.applicationTypeName == b.applicationTypeName) return a.applicationTypeENName.localeCompare(b.applicationTypeENName);
else return a.applicationTypeName.localeCompare(b.applicationTypeName);
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
export  function QxApplicationType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxApplicationTypeEN.con_ApplicationTypeId:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
return a.applicationTypeId-b.applicationTypeId;
}
case clsQxApplicationTypeEN.con_ApplicationTypeName:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
return a.applicationTypeName.localeCompare(b.applicationTypeName);
}
case clsQxApplicationTypeEN.con_ApplicationTypeENName:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
return a.applicationTypeENName.localeCompare(b.applicationTypeENName);
}
case clsQxApplicationTypeEN.con_ProgLangTypeId:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (a.progLangTypeId == null) return -1;
if (b.progLangTypeId == null) return 1;
return a.progLangTypeId.localeCompare(b.progLangTypeId);
}
case clsQxApplicationTypeEN.con_ProgLangTypeId2:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (a.progLangTypeId2 == null) return -1;
if (b.progLangTypeId2 == null) return 1;
return a.progLangTypeId2.localeCompare(b.progLangTypeId2);
}
case clsQxApplicationTypeEN.con_ProgLangTypeId3:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (a.progLangTypeId3 == null) return -1;
if (b.progLangTypeId3 == null) return 1;
return a.progLangTypeId3.localeCompare(b.progLangTypeId3);
}
case clsQxApplicationTypeEN.con_ProgLangTypeId4:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (a.progLangTypeId4 == null) return -1;
if (b.progLangTypeId4 == null) return 1;
return a.progLangTypeId4.localeCompare(b.progLangTypeId4);
}
case clsQxApplicationTypeEN.con_ProgLangTypeId5:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (a.progLangTypeId5 == null) return -1;
if (b.progLangTypeId5 == null) return 1;
return a.progLangTypeId5.localeCompare(b.progLangTypeId5);
}
case clsQxApplicationTypeEN.con_IsVisible:
return (a: clsQxApplicationTypeEN) => {
if (a.isVisible == true) return 1;
else return -1
}
case clsQxApplicationTypeEN.con_OrderNum:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
return a.orderNum-b.orderNum;
}
case clsQxApplicationTypeEN.con_Memo:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxApplicationType]中不存在!(in ${ qxApplicationType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxApplicationTypeEN.con_ApplicationTypeId:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
return b.applicationTypeId-a.applicationTypeId;
}
case clsQxApplicationTypeEN.con_ApplicationTypeName:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
return b.applicationTypeName.localeCompare(a.applicationTypeName);
}
case clsQxApplicationTypeEN.con_ApplicationTypeENName:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
return b.applicationTypeENName.localeCompare(a.applicationTypeENName);
}
case clsQxApplicationTypeEN.con_ProgLangTypeId:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (b.progLangTypeId == null) return -1;
if (a.progLangTypeId == null) return 1;
return b.progLangTypeId.localeCompare(a.progLangTypeId);
}
case clsQxApplicationTypeEN.con_ProgLangTypeId2:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (b.progLangTypeId2 == null) return -1;
if (a.progLangTypeId2 == null) return 1;
return b.progLangTypeId2.localeCompare(a.progLangTypeId2);
}
case clsQxApplicationTypeEN.con_ProgLangTypeId3:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (b.progLangTypeId3 == null) return -1;
if (a.progLangTypeId3 == null) return 1;
return b.progLangTypeId3.localeCompare(a.progLangTypeId3);
}
case clsQxApplicationTypeEN.con_ProgLangTypeId4:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (b.progLangTypeId4 == null) return -1;
if (a.progLangTypeId4 == null) return 1;
return b.progLangTypeId4.localeCompare(a.progLangTypeId4);
}
case clsQxApplicationTypeEN.con_ProgLangTypeId5:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (b.progLangTypeId5 == null) return -1;
if (a.progLangTypeId5 == null) return 1;
return b.progLangTypeId5.localeCompare(a.progLangTypeId5);
}
case clsQxApplicationTypeEN.con_IsVisible:
return (b: clsQxApplicationTypeEN) => {
if (b.isVisible == true) return 1;
else return -1
}
case clsQxApplicationTypeEN.con_OrderNum:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
return b.orderNum-a.orderNum;
}
case clsQxApplicationTypeEN.con_Memo:
return (a: clsQxApplicationTypeEN, b: clsQxApplicationTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxApplicationType]中不存在!(in ${ qxApplicationType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param intApplicationTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxApplicationType_GetNameByApplicationTypeIdCache(intApplicationTypeId: number) {

if (intApplicationTypeId == 0)
{
  const strMsg = Format("参数:[intApplicationTypeId]不能为空!(In clsQxApplicationTypeWApi.GetNameByApplicationTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstCache();
if (arrQxApplicationTypeObjLstCache == null) return "";
try
{
const arrQxApplicationTypeSel = arrQxApplicationTypeObjLstCache.filter(x => 
 x.applicationTypeId == intApplicationTypeId );
let objQxApplicationType: clsQxApplicationTypeEN;
if (arrQxApplicationTypeSel.length > 0)
{
objQxApplicationType = arrQxApplicationTypeSel[0];
return objQxApplicationType.applicationTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, intApplicationTypeId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxApplicationType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxApplicationTypeEN.con_ApplicationTypeId:
return (obj: clsQxApplicationTypeEN) => {
return obj.applicationTypeId === value;
}
case clsQxApplicationTypeEN.con_ApplicationTypeName:
return (obj: clsQxApplicationTypeEN) => {
return obj.applicationTypeName === value;
}
case clsQxApplicationTypeEN.con_ApplicationTypeENName:
return (obj: clsQxApplicationTypeEN) => {
return obj.applicationTypeENName === value;
}
case clsQxApplicationTypeEN.con_ProgLangTypeId:
return (obj: clsQxApplicationTypeEN) => {
return obj.progLangTypeId === value;
}
case clsQxApplicationTypeEN.con_ProgLangTypeId2:
return (obj: clsQxApplicationTypeEN) => {
return obj.progLangTypeId2 === value;
}
case clsQxApplicationTypeEN.con_ProgLangTypeId3:
return (obj: clsQxApplicationTypeEN) => {
return obj.progLangTypeId3 === value;
}
case clsQxApplicationTypeEN.con_ProgLangTypeId4:
return (obj: clsQxApplicationTypeEN) => {
return obj.progLangTypeId4 === value;
}
case clsQxApplicationTypeEN.con_ProgLangTypeId5:
return (obj: clsQxApplicationTypeEN) => {
return obj.progLangTypeId5 === value;
}
case clsQxApplicationTypeEN.con_IsVisible:
return (obj: clsQxApplicationTypeEN) => {
return obj.isVisible === value;
}
case clsQxApplicationTypeEN.con_OrderNum:
return (obj: clsQxApplicationTypeEN) => {
return obj.orderNum === value;
}
case clsQxApplicationTypeEN.con_Memo:
return (obj: clsQxApplicationTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxApplicationType]中不存在!(in ${ qxApplicationType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function QxApplicationType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsQxApplicationTypeEN.con_ApplicationTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsQxApplicationTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsQxApplicationTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const intApplicationTypeId = Number(strInValue);
if (intApplicationTypeId == 0)
{
return "";
}
const objQxApplicationType = await QxApplicationType_GetObjByApplicationTypeIdCache(intApplicationTypeId );
if (objQxApplicationType == null) return "";
if (objQxApplicationType.GetFldValue(strOutFldName) == null) return "";
return objQxApplicationType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function QxApplicationType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<number>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsQxApplicationTypeEN.con_ApplicationTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrQxApplicationType = await QxApplicationType_GetObjLstCache();
if (arrQxApplicationType == null) return [];
let arrQxApplicationTypeSel = arrQxApplicationType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrQxApplicationTypeSel.length == 0) return [];
return arrQxApplicationTypeSel.map(x=>x.applicationTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxApplicationType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_GetFirstObjAsync(strWhereCond: string): Promise<clsQxApplicationTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const objQxApplicationType = QxApplicationType_GetObjFromJsonObj(returnObj);
return objQxApplicationType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxApplicationTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxApplicationTypeEN.WhereFormat) == false)
{
strWhereCond = clsQxApplicationTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsQxApplicationTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxApplicationTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrQxApplicationTypeExObjLstCache: Array<clsQxApplicationTypeEN> = CacheHelper.Get(strKey);
const arrQxApplicationTypeObjLstT = QxApplicationType_GetObjLstByJSONObjLst(arrQxApplicationTypeExObjLstCache);
return arrQxApplicationTypeObjLstT;
}
try
{
const arrQxApplicationTypeExObjLst = await QxApplicationType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrQxApplicationTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxApplicationTypeExObjLst.length);
console.log(strInfo);
return arrQxApplicationTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxApplicationType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxApplicationTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxApplicationTypeEN.WhereFormat) == false)
{
strWhereCond = clsQxApplicationTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsQxApplicationTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxApplicationTypeEN.CacheAddiCondition);
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
const arrQxApplicationTypeExObjLstCache: Array<clsQxApplicationTypeEN> = JSON.parse(strTempObjLst);
const arrQxApplicationTypeObjLstT = QxApplicationType_GetObjLstByJSONObjLst(arrQxApplicationTypeExObjLstCache);
return arrQxApplicationTypeObjLstT;
}
try
{
const arrQxApplicationTypeExObjLst = await QxApplicationType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrQxApplicationTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxApplicationTypeExObjLst.length);
console.log(strInfo);
return arrQxApplicationTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxApplicationType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxApplicationTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrQxApplicationTypeObjLstCache: Array<clsQxApplicationTypeEN> = JSON.parse(strTempObjLst);
return arrQxApplicationTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function QxApplicationType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxApplicationTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxApplicationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxApplicationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsQxApplicationTypeEN._CurrTabName;
if (IsNullOrEmpty(clsQxApplicationTypeEN.WhereFormat) == false)
{
strWhereCond = clsQxApplicationTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsQxApplicationTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsQxApplicationTypeEN.CacheAddiCondition);
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
const arrQxApplicationTypeExObjLstCache: Array<clsQxApplicationTypeEN> = JSON.parse(strTempObjLst);
const arrQxApplicationTypeObjLstT = QxApplicationType_GetObjLstByJSONObjLst(arrQxApplicationTypeExObjLstCache);
return arrQxApplicationTypeObjLstT;
}
try
{
const arrQxApplicationTypeExObjLst = await QxApplicationType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrQxApplicationTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrQxApplicationTypeExObjLst.length);
console.log(strInfo);
return arrQxApplicationTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxApplicationType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsQxApplicationTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrQxApplicationTypeObjLstCache: Array<clsQxApplicationTypeEN> = JSON.parse(strTempObjLst);
return arrQxApplicationTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxApplicationType_GetObjLstCache(): Promise<Array<clsQxApplicationTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrQxApplicationTypeObjLstCache;
switch (clsQxApplicationTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstClientCache();
break;
default:
arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstClientCache();
break;
}
return arrQxApplicationTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function QxApplicationType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrQxApplicationTypeObjLstCache;
switch (clsQxApplicationTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrQxApplicationTypeObjLstCache = null;
break;
default:
arrQxApplicationTypeObjLstCache = null;
break;
}
return arrQxApplicationTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objintApplicationTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxApplicationType_GetSubObjLstCache(objQxApplicationTypeCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstCache();
let arrQxApplicationTypeSel = arrQxApplicationTypeObjLstCache;
if (objQxApplicationTypeCond.GetConditions().length == 0) return arrQxApplicationTypeSel;
try {
//console.log(sstrKeys);
for (const objCondition of objQxApplicationTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxApplicationTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objQxApplicationTypeCond), qxApplicationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxApplicationTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrApplicationTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function QxApplicationType_GetObjLstByApplicationTypeIdLstAsync(arrApplicationTypeId: Array<string>): Promise<Array<clsQxApplicationTypeEN>>  
{
const strThisFuncName = "GetObjLstByApplicationTypeIdLstAsync";
const strAction = "GetObjLstByApplicationTypeIdLst";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrApplicationTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxApplicationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxApplicationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param arrintApplicationTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function QxApplicationType_GetObjLstByApplicationTypeIdLstCache(arrApplicationTypeIdLst: Array<number> ) {
const strThisFuncName = "GetObjLstByApplicationTypeIdLstCache";
try
{
const arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstCache();
const arrQxApplicationTypeSel = arrQxApplicationTypeObjLstCache.filter(x => arrApplicationTypeIdLst.indexOf(x.applicationTypeId)>-1);
return arrQxApplicationTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrApplicationTypeIdLst.join(","), qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxApplicationTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxApplicationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxApplicationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxApplicationTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxApplicationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxApplicationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsQxApplicationTypeEN>();
const arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstCache();
if (arrQxApplicationTypeObjLstCache.length == 0) return arrQxApplicationTypeObjLstCache;
let arrQxApplicationTypeSel = arrQxApplicationTypeObjLstCache;
const objQxApplicationTypeCond = objPagerPara.conditionCollection;
if (objQxApplicationTypeCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return new Array<clsQxApplicationTypeEN>();
}
//console.log("clsQxApplicationTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objQxApplicationTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxApplicationTypeSel.length == 0) return arrQxApplicationTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxApplicationTypeSel = arrQxApplicationTypeSel.sort(QxApplicationType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxApplicationTypeSel = arrQxApplicationTypeSel.sort(objPagerPara.sortFun);
}
arrQxApplicationTypeSel = arrQxApplicationTypeSel.slice(intStart, intEnd);     
return arrQxApplicationTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxApplicationTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function QxApplicationType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxApplicationTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxApplicationTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxApplicationType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxApplicationType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param intApplicationTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxApplicationType_DelRecordAsync(intApplicationTypeId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, intApplicationTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param arrApplicationTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxApplicationType_DelQxApplicationTypesAsync(arrApplicationTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxApplicationTypesAsync";
const strAction = "DelQxApplicationTypes";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrApplicationTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_DelQxApplicationTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxApplicationTypesByCondAsync";
const strAction = "DelQxApplicationTypesByCond";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param objQxApplicationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxApplicationType_AddNewRecordAsync(objQxApplicationTypeEN: clsQxApplicationTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxApplicationTypeEN);
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxApplicationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_AddNewObjSave(objQxApplicationTypeEN: clsQxApplicationTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxApplicationType_CheckPropertyNew(objQxApplicationTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxApplicationType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxApplicationType_CheckUniCond4Add(objQxApplicationTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxApplicationType_AddNewRecordAsync(objQxApplicationTypeEN);
if (returnBool == true)
{
QxApplicationType_ReFreshCache();
}
else
{
const strInfo = `添加[应用程序类型(QxApplicationType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxApplicationTypeEN.applicationTypeId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxApplicationType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxApplicationType_CheckUniCond4Add(objQxApplicationTypeEN: clsQxApplicationTypeEN): Promise<boolean>{
const strUniquenessCondition = QxApplicationType_GetUniCondStr(objQxApplicationTypeEN);
const bolIsExistCondition = await QxApplicationType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxApplicationType_CheckUniCond4Update(objQxApplicationTypeEN: clsQxApplicationTypeEN): Promise<boolean>{
const strUniquenessCondition = QxApplicationType_GetUniCondStr4Update(objQxApplicationTypeEN);
const bolIsExistCondition = await QxApplicationType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxApplicationType_UpdateObjSave(objQxApplicationTypeEN: clsQxApplicationTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxApplicationTypeEN.sfUpdFldSetStr = objQxApplicationTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxApplicationTypeEN.applicationTypeId == 0 || objQxApplicationTypeEN.applicationTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxApplicationType_CheckProperty4Update(objQxApplicationTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxApplicationType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxApplicationType_CheckUniCond4Update(objQxApplicationTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxApplicationType_UpdateRecordAsync(objQxApplicationTypeEN);
if (returnBool == true)
{
QxApplicationType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxApplicationType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxApplicationTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxApplicationType_AddNewRecordWithReturnKeyAsync(objQxApplicationTypeEN: clsQxApplicationTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxApplicationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param objQxApplicationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxApplicationType_UpdateRecordAsync(objQxApplicationTypeEN: clsQxApplicationTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxApplicationTypeEN.sfUpdFldSetStr === undefined || objQxApplicationTypeEN.sfUpdFldSetStr === null || objQxApplicationTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxApplicationTypeEN.applicationTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxApplicationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param objQxApplicationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxApplicationType_EditRecordExAsync(objQxApplicationTypeEN: clsQxApplicationTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxApplicationTypeEN.sfUpdFldSetStr === undefined || objQxApplicationTypeEN.sfUpdFldSetStr === null || objQxApplicationTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxApplicationTypeEN.applicationTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxApplicationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param objQxApplicationTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxApplicationType_UpdateWithConditionAsync(objQxApplicationTypeEN: clsQxApplicationTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxApplicationTypeEN.sfUpdFldSetStr === undefined || objQxApplicationTypeEN.sfUpdFldSetStr === null || objQxApplicationTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxApplicationTypeEN.applicationTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);
objQxApplicationTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxApplicationTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param objintApplicationTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function QxApplicationType_IsExistRecordCache(objQxApplicationTypeCond: ConditionCollection) {
const strThisFuncName = "IsExistRecordCache";
const arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstCache();
if (arrQxApplicationTypeObjLstCache == null) return false;
let arrQxApplicationTypeSel = arrQxApplicationTypeObjLstCache;
if (objQxApplicationTypeCond.GetConditions().length == 0) return arrQxApplicationTypeSel.length>0?true:false;
try {
for (const objCondition of objQxApplicationTypeCond.GetConditions()) {
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
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxApplicationTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objQxApplicationTypeCond), qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param intApplicationTypeId:所给的关键字
 * @returns 对象
*/
export  async function QxApplicationType_IsExistCache(intApplicationTypeId:number) {
const strThisFuncName = "IsExistCache";
const arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstCache();
if (arrQxApplicationTypeObjLstCache == null) return false;
try
{
const arrQxApplicationTypeSel = arrQxApplicationTypeObjLstCache.filter(x => x.applicationTypeId == intApplicationTypeId);
if (arrQxApplicationTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", intApplicationTypeId, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param intApplicationTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxApplicationType_IsExistAsync(intApplicationTypeId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
intApplicationTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
 * @param objQxApplicationTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function QxApplicationType_GetRecCountByCondCache(objQxApplicationTypeCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrQxApplicationTypeObjLstCache = await QxApplicationType_GetObjLstCache();
if (arrQxApplicationTypeObjLstCache == null) return 0;
let arrQxApplicationTypeSel = arrQxApplicationTypeObjLstCache;
if (objQxApplicationTypeCond.GetConditions().length == 0) return arrQxApplicationTypeSel.length;
try {
for (const objCondition of objQxApplicationTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxApplicationTypeSel = arrQxApplicationTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrQxApplicationTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objQxApplicationTypeCond), qxApplicationType_ConstructorName, strThisFuncName);
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
export  async function QxApplicationType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxApplicationType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxApplicationType_ConstructorName, strThisFuncName);
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
export  function QxApplicationType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxApplicationType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsQxApplicationTypeEN._CurrTabName;
switch (clsQxApplicationTypeEN.CacheModeId)
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
clsQxApplicationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function QxApplicationType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsQxApplicationTypeEN._CurrTabName;
switch (clsQxApplicationTypeEN.CacheModeId)
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
clsQxApplicationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function QxApplicationType_GetLastRefreshTime():string
{
if (clsQxApplicationTypeEN._RefreshTimeLst.length == 0) return "";
return clsQxApplicationTypeEN._RefreshTimeLst[clsQxApplicationTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxApplicationType_Cache(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await QxApplicationType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxApplicationTypeEN.con_ApplicationTypeId, clsQxApplicationTypeEN.con_ApplicationTypeName, "应用程序类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxApplicationType_GetArrQxApplicationType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrQxApplicationType = new Array<clsQxApplicationTypeEN>();
const arrObjLstSel = await QxApplicationType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsQxApplicationTypeEN();
obj0.applicationTypeId = 0;
obj0.applicationTypeName = '选应用程序类型...';
arrQxApplicationType.push(obj0);
arrObjLstSel.forEach(x => arrQxApplicationType.push(x));
return arrQxApplicationType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxApplicationType_CheckPropertyNew(pobjQxApplicationTypeEN: clsQxApplicationTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxApplicationTypeEN.applicationTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[应用程序类型名称]不能为空(In 应用程序类型)!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.applicationTypeENName) === true )
{
 throw new Error(`(errid:Watl000411)字段[应用类型英文名]不能为空(In 应用程序类型)!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (null === pobjQxApplicationTypeEN.orderNum 
 || pobjQxApplicationTypeEN.orderNum != null && pobjQxApplicationTypeEN.orderNum.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[排序号]不能为空(In 应用程序类型)!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxApplicationTypeEN.applicationTypeName) == false && GetStrLen(pobjQxApplicationTypeEN.applicationTypeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[应用程序类型名称(applicationTypeName)]的长度不能超过30(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.applicationTypeName}(clsQxApplicationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.applicationTypeENName) == false && GetStrLen(pobjQxApplicationTypeEN.applicationTypeENName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[应用类型英文名(applicationTypeENName)]的长度不能超过30(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.applicationTypeENName}(clsQxApplicationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId) == false && GetStrLen(pobjQxApplicationTypeEN.progLangTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.progLangTypeId}(clsQxApplicationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId2) == false && GetStrLen(pobjQxApplicationTypeEN.progLangTypeId2) > 2)
{
 throw new Error(`(errid:Watl000413)字段[编程语言类型Id2(progLangTypeId2)]的长度不能超过2(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.progLangTypeId2}(clsQxApplicationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId3) == false && GetStrLen(pobjQxApplicationTypeEN.progLangTypeId3) > 2)
{
 throw new Error(`(errid:Watl000413)字段[编程语言类型Id3(progLangTypeId3)]的长度不能超过2(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.progLangTypeId3}(clsQxApplicationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId4) == false && GetStrLen(pobjQxApplicationTypeEN.progLangTypeId4) > 2)
{
 throw new Error(`(errid:Watl000413)字段[编程语言类型Id4(progLangTypeId4)]的长度不能超过2(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.progLangTypeId4}(clsQxApplicationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId5) == false && GetStrLen(pobjQxApplicationTypeEN.progLangTypeId5) > 2)
{
 throw new Error(`(errid:Watl000413)字段[编程语言类型Id5(progLangTypeId5)]的长度不能超过2(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.progLangTypeId5}(clsQxApplicationTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.memo) == false && GetStrLen(pobjQxApplicationTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.memo}(clsQxApplicationTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxApplicationTypeEN.applicationTypeId && undefined !== pobjQxApplicationTypeEN.applicationTypeId && tzDataType.isNumber(pobjQxApplicationTypeEN.applicationTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[应用程序类型Id(applicationTypeId)]的值:[${pobjQxApplicationTypeEN.applicationTypeId}], 非法,应该为数值型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.applicationTypeName) == false && undefined !== pobjQxApplicationTypeEN.applicationTypeName && tzDataType.isString(pobjQxApplicationTypeEN.applicationTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[应用程序类型名称(applicationTypeName)]的值:[${pobjQxApplicationTypeEN.applicationTypeName}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.applicationTypeENName) == false && undefined !== pobjQxApplicationTypeEN.applicationTypeENName && tzDataType.isString(pobjQxApplicationTypeEN.applicationTypeENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[应用类型英文名(applicationTypeENName)]的值:[${pobjQxApplicationTypeEN.applicationTypeENName}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId) == false && undefined !== pobjQxApplicationTypeEN.progLangTypeId && tzDataType.isString(pobjQxApplicationTypeEN.progLangTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjQxApplicationTypeEN.progLangTypeId}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId2) == false && undefined !== pobjQxApplicationTypeEN.progLangTypeId2 && tzDataType.isString(pobjQxApplicationTypeEN.progLangTypeId2) === false)
{
 throw new Error(`(errid:Watl000414)字段[编程语言类型Id2(progLangTypeId2)]的值:[${pobjQxApplicationTypeEN.progLangTypeId2}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId3) == false && undefined !== pobjQxApplicationTypeEN.progLangTypeId3 && tzDataType.isString(pobjQxApplicationTypeEN.progLangTypeId3) === false)
{
 throw new Error(`(errid:Watl000414)字段[编程语言类型Id3(progLangTypeId3)]的值:[${pobjQxApplicationTypeEN.progLangTypeId3}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId4) == false && undefined !== pobjQxApplicationTypeEN.progLangTypeId4 && tzDataType.isString(pobjQxApplicationTypeEN.progLangTypeId4) === false)
{
 throw new Error(`(errid:Watl000414)字段[编程语言类型Id4(progLangTypeId4)]的值:[${pobjQxApplicationTypeEN.progLangTypeId4}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId5) == false && undefined !== pobjQxApplicationTypeEN.progLangTypeId5 && tzDataType.isString(pobjQxApplicationTypeEN.progLangTypeId5) === false)
{
 throw new Error(`(errid:Watl000414)字段[编程语言类型Id5(progLangTypeId5)]的值:[${pobjQxApplicationTypeEN.progLangTypeId5}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (null != pobjQxApplicationTypeEN.isVisible && undefined !== pobjQxApplicationTypeEN.isVisible && tzDataType.isBoolean(pobjQxApplicationTypeEN.isVisible) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjQxApplicationTypeEN.isVisible}], 非法,应该为布尔型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (null != pobjQxApplicationTypeEN.orderNum && undefined !== pobjQxApplicationTypeEN.orderNum && tzDataType.isNumber(pobjQxApplicationTypeEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[排序号(orderNum)]的值:[${pobjQxApplicationTypeEN.orderNum}], 非法,应该为数值型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.memo) == false && undefined !== pobjQxApplicationTypeEN.memo && tzDataType.isString(pobjQxApplicationTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxApplicationTypeEN.memo}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxApplicationType_CheckProperty4Update(pobjQxApplicationTypeEN: clsQxApplicationTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxApplicationTypeEN.applicationTypeName) == false && GetStrLen(pobjQxApplicationTypeEN.applicationTypeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[应用程序类型名称(applicationTypeName)]的长度不能超过30(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.applicationTypeName}(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.applicationTypeENName) == false && GetStrLen(pobjQxApplicationTypeEN.applicationTypeENName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[应用类型英文名(applicationTypeENName)]的长度不能超过30(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.applicationTypeENName}(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId) == false && GetStrLen(pobjQxApplicationTypeEN.progLangTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.progLangTypeId}(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId2) == false && GetStrLen(pobjQxApplicationTypeEN.progLangTypeId2) > 2)
{
 throw new Error(`(errid:Watl000416)字段[编程语言类型Id2(progLangTypeId2)]的长度不能超过2(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.progLangTypeId2}(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId3) == false && GetStrLen(pobjQxApplicationTypeEN.progLangTypeId3) > 2)
{
 throw new Error(`(errid:Watl000416)字段[编程语言类型Id3(progLangTypeId3)]的长度不能超过2(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.progLangTypeId3}(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId4) == false && GetStrLen(pobjQxApplicationTypeEN.progLangTypeId4) > 2)
{
 throw new Error(`(errid:Watl000416)字段[编程语言类型Id4(progLangTypeId4)]的长度不能超过2(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.progLangTypeId4}(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId5) == false && GetStrLen(pobjQxApplicationTypeEN.progLangTypeId5) > 2)
{
 throw new Error(`(errid:Watl000416)字段[编程语言类型Id5(progLangTypeId5)]的长度不能超过2(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.progLangTypeId5}(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.memo) == false && GetStrLen(pobjQxApplicationTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 应用程序类型(QxApplicationType))!值:${pobjQxApplicationTypeEN.memo}(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxApplicationTypeEN.applicationTypeId && undefined !== pobjQxApplicationTypeEN.applicationTypeId && tzDataType.isNumber(pobjQxApplicationTypeEN.applicationTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[应用程序类型Id(applicationTypeId)]的值:[${pobjQxApplicationTypeEN.applicationTypeId}], 非法,应该为数值型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.applicationTypeName) == false && undefined !== pobjQxApplicationTypeEN.applicationTypeName && tzDataType.isString(pobjQxApplicationTypeEN.applicationTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[应用程序类型名称(applicationTypeName)]的值:[${pobjQxApplicationTypeEN.applicationTypeName}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.applicationTypeENName) == false && undefined !== pobjQxApplicationTypeEN.applicationTypeENName && tzDataType.isString(pobjQxApplicationTypeEN.applicationTypeENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[应用类型英文名(applicationTypeENName)]的值:[${pobjQxApplicationTypeEN.applicationTypeENName}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId) == false && undefined !== pobjQxApplicationTypeEN.progLangTypeId && tzDataType.isString(pobjQxApplicationTypeEN.progLangTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjQxApplicationTypeEN.progLangTypeId}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId2) == false && undefined !== pobjQxApplicationTypeEN.progLangTypeId2 && tzDataType.isString(pobjQxApplicationTypeEN.progLangTypeId2) === false)
{
 throw new Error(`(errid:Watl000417)字段[编程语言类型Id2(progLangTypeId2)]的值:[${pobjQxApplicationTypeEN.progLangTypeId2}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId3) == false && undefined !== pobjQxApplicationTypeEN.progLangTypeId3 && tzDataType.isString(pobjQxApplicationTypeEN.progLangTypeId3) === false)
{
 throw new Error(`(errid:Watl000417)字段[编程语言类型Id3(progLangTypeId3)]的值:[${pobjQxApplicationTypeEN.progLangTypeId3}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId4) == false && undefined !== pobjQxApplicationTypeEN.progLangTypeId4 && tzDataType.isString(pobjQxApplicationTypeEN.progLangTypeId4) === false)
{
 throw new Error(`(errid:Watl000417)字段[编程语言类型Id4(progLangTypeId4)]的值:[${pobjQxApplicationTypeEN.progLangTypeId4}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.progLangTypeId5) == false && undefined !== pobjQxApplicationTypeEN.progLangTypeId5 && tzDataType.isString(pobjQxApplicationTypeEN.progLangTypeId5) === false)
{
 throw new Error(`(errid:Watl000417)字段[编程语言类型Id5(progLangTypeId5)]的值:[${pobjQxApplicationTypeEN.progLangTypeId5}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (null != pobjQxApplicationTypeEN.isVisible && undefined !== pobjQxApplicationTypeEN.isVisible && tzDataType.isBoolean(pobjQxApplicationTypeEN.isVisible) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjQxApplicationTypeEN.isVisible}], 非法,应该为布尔型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (null != pobjQxApplicationTypeEN.orderNum && undefined !== pobjQxApplicationTypeEN.orderNum && tzDataType.isNumber(pobjQxApplicationTypeEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[排序号(orderNum)]的值:[${pobjQxApplicationTypeEN.orderNum}], 非法,应该为数值型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxApplicationTypeEN.memo) == false && undefined !== pobjQxApplicationTypeEN.memo && tzDataType.isString(pobjQxApplicationTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxApplicationTypeEN.memo}], 非法,应该为字符型(In 应用程序类型(QxApplicationType))!(clsQxApplicationTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxApplicationTypeEN.applicationTypeId 
 || pobjQxApplicationTypeEN.applicationTypeId != null && pobjQxApplicationTypeEN.applicationTypeId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[应用程序类型Id]不能为空(In 应用程序类型)!(clsQxApplicationTypeBL:CheckProperty4Update)`);
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
export  function QxApplicationType_GetJSONStrByObj (pobjQxApplicationTypeEN: clsQxApplicationTypeEN): string
{
pobjQxApplicationTypeEN.sfUpdFldSetStr = pobjQxApplicationTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxApplicationTypeEN);
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
export  function QxApplicationType_GetObjLstByJSONStr (strJSON: string): Array<clsQxApplicationTypeEN>
{
let arrQxApplicationTypeObjLst = new Array<clsQxApplicationTypeEN>();
if (strJSON === "")
{
return arrQxApplicationTypeObjLst;
}
try
{
arrQxApplicationTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxApplicationTypeObjLst;
}
return arrQxApplicationTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxApplicationTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxApplicationType_GetObjLstByJSONObjLst (arrQxApplicationTypeObjLstS: Array<clsQxApplicationTypeEN>): Array<clsQxApplicationTypeEN>
{
const arrQxApplicationTypeObjLst = new Array<clsQxApplicationTypeEN>();
for (const objInFor of arrQxApplicationTypeObjLstS) {
const obj1 = QxApplicationType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxApplicationTypeObjLst.push(obj1);
}
return arrQxApplicationTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxApplicationType_GetObjByJSONStr (strJSON: string): clsQxApplicationTypeEN
{
let pobjQxApplicationTypeEN = new clsQxApplicationTypeEN();
if (strJSON === "")
{
return pobjQxApplicationTypeEN;
}
try
{
pobjQxApplicationTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxApplicationTypeEN;
}
return pobjQxApplicationTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxApplicationType_GetCombineCondition(objQxApplicationTypeCond: clsQxApplicationTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_ApplicationTypeId) == true)
{
const strComparisonOpApplicationTypeId:string = objQxApplicationTypeCond.dicFldComparisonOp[clsQxApplicationTypeEN.con_ApplicationTypeId];
strWhereCond += Format(" And {0} {2} {1}", clsQxApplicationTypeEN.con_ApplicationTypeId, objQxApplicationTypeCond.applicationTypeId, strComparisonOpApplicationTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_ApplicationTypeName) == true)
{
const strComparisonOpApplicationTypeName:string = objQxApplicationTypeCond.dicFldComparisonOp[clsQxApplicationTypeEN.con_ApplicationTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxApplicationTypeEN.con_ApplicationTypeName, objQxApplicationTypeCond.applicationTypeName, strComparisonOpApplicationTypeName);
}
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_ApplicationTypeENName) == true)
{
const strComparisonOpApplicationTypeENName:string = objQxApplicationTypeCond.dicFldComparisonOp[clsQxApplicationTypeEN.con_ApplicationTypeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxApplicationTypeEN.con_ApplicationTypeENName, objQxApplicationTypeCond.applicationTypeENName, strComparisonOpApplicationTypeENName);
}
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_ProgLangTypeId) == true)
{
const strComparisonOpProgLangTypeId:string = objQxApplicationTypeCond.dicFldComparisonOp[clsQxApplicationTypeEN.con_ProgLangTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxApplicationTypeEN.con_ProgLangTypeId, objQxApplicationTypeCond.progLangTypeId, strComparisonOpProgLangTypeId);
}
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_ProgLangTypeId2) == true)
{
const strComparisonOpProgLangTypeId2:string = objQxApplicationTypeCond.dicFldComparisonOp[clsQxApplicationTypeEN.con_ProgLangTypeId2];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxApplicationTypeEN.con_ProgLangTypeId2, objQxApplicationTypeCond.progLangTypeId2, strComparisonOpProgLangTypeId2);
}
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_ProgLangTypeId3) == true)
{
const strComparisonOpProgLangTypeId3:string = objQxApplicationTypeCond.dicFldComparisonOp[clsQxApplicationTypeEN.con_ProgLangTypeId3];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxApplicationTypeEN.con_ProgLangTypeId3, objQxApplicationTypeCond.progLangTypeId3, strComparisonOpProgLangTypeId3);
}
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_ProgLangTypeId4) == true)
{
const strComparisonOpProgLangTypeId4:string = objQxApplicationTypeCond.dicFldComparisonOp[clsQxApplicationTypeEN.con_ProgLangTypeId4];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxApplicationTypeEN.con_ProgLangTypeId4, objQxApplicationTypeCond.progLangTypeId4, strComparisonOpProgLangTypeId4);
}
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_ProgLangTypeId5) == true)
{
const strComparisonOpProgLangTypeId5:string = objQxApplicationTypeCond.dicFldComparisonOp[clsQxApplicationTypeEN.con_ProgLangTypeId5];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxApplicationTypeEN.con_ProgLangTypeId5, objQxApplicationTypeCond.progLangTypeId5, strComparisonOpProgLangTypeId5);
}
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_IsVisible) == true)
{
if (objQxApplicationTypeCond.isVisible == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxApplicationTypeEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxApplicationTypeEN.con_IsVisible);
}
}
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objQxApplicationTypeCond.dicFldComparisonOp[clsQxApplicationTypeEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsQxApplicationTypeEN.con_OrderNum, objQxApplicationTypeCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objQxApplicationTypeCond.dicFldComparisonOp, clsQxApplicationTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxApplicationTypeCond.dicFldComparisonOp[clsQxApplicationTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxApplicationTypeEN.con_Memo, objQxApplicationTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxApplicationType(应用程序类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strApplicationTypeName: 应用程序类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxApplicationType_GetUniCondStr(objQxApplicationTypeEN: clsQxApplicationTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ApplicationTypeName = '{0}'", objQxApplicationTypeEN.applicationTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxApplicationType(应用程序类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strApplicationTypeName: 应用程序类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxApplicationType_GetUniCondStr4Update(objQxApplicationTypeEN: clsQxApplicationTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ApplicationTypeId <> '{0}'", objQxApplicationTypeEN.applicationTypeId);
 strWhereCond +=  Format(" and ApplicationTypeName = '{0}'", objQxApplicationTypeEN.applicationTypeName);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxApplicationTypeENS:源对象
 * @param objQxApplicationTypeENT:目标对象
*/
export  function QxApplicationType_GetObjFromJsonObj(objQxApplicationTypeENS: clsQxApplicationTypeEN): clsQxApplicationTypeEN 
{
 const objQxApplicationTypeENT: clsQxApplicationTypeEN = new clsQxApplicationTypeEN();
ObjectAssign(objQxApplicationTypeENT, objQxApplicationTypeENS);
 return objQxApplicationTypeENT;
}