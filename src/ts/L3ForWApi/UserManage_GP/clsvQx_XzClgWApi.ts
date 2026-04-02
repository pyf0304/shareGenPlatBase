
 /**
 * 类名:clsvQx_XzClgWApi
 * 表名:vQx_XzClg(00140130)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/02 10:54:12
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
 * vQx_XzClg(vQx_XzClg)
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
import { clsvQx_XzClgEN } from "@/ts/L0Entity/UserManage_GP/clsvQx_XzClgEN";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vQx_XzClg_Controller = "vQx_XzClgApi";
 export const vQx_XzClg_ConstructorName = "vQx_XzClg";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strId_XzCollege:关键字
 * @returns 对象
 **/
export  async function vQx_XzClg_GetObjById_XzCollegeAsync(strId_XzCollege: string): Promise<clsvQx_XzClgEN|null>  
{
const strThisFuncName = "GetObjById_XzCollegeAsync";

if (IsNullOrEmpty(strId_XzCollege) == true)
{
  const strMsg = Format("参数:[strId_XzCollege]不能为空!(In clsvQx_XzClgWApi.GetObjById_XzCollegeAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strId_XzCollege.length != 4)
{
const strMsg = Format("缓存分类变量:[strId_XzCollege]的长度:[{0}]不正确!(clsvQx_XzClgWApi.GetObjById_XzCollegeAsync)", strId_XzCollege.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjById_XzCollege";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strId_XzCollege,
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
const objvQx_XzClg = vQx_XzClg_GetObjFromJsonObj(returnObj);
return objvQx_XzClg;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
 * @param strId_XzCollege:所给的关键字
 * @returns 对象
*/
export  async function vQx_XzClg_GetObjById_XzCollegelocalStorage(strId_XzCollege: string) {
const strThisFuncName = "GetObjById_XzCollegelocalStorage";

if (IsNullOrEmpty(strId_XzCollege) == true)
{
  const strMsg = Format("参数:[strId_XzCollege]不能为空!(In clsvQx_XzClgWApi.GetObjById_XzCollegelocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strId_XzCollege.length != 4)
{
const strMsg = Format("缓存分类变量:[strId_XzCollege]的长度:[{0}]不正确!(clsvQx_XzClgWApi.GetObjById_XzCollegelocalStorage)", strId_XzCollege.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvQx_XzClgEN._CurrTabName, strId_XzCollege);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvQx_XzClgCache: clsvQx_XzClgEN = JSON.parse(strTempObj);
return objvQx_XzClgCache;
}
try
{
const objvQx_XzClg = await vQx_XzClg_GetObjById_XzCollegeAsync(strId_XzCollege);
if (objvQx_XzClg != null)
{
localStorage.setItem(strKey, JSON.stringify(objvQx_XzClg));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvQx_XzClg;
}
return objvQx_XzClg;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strId_XzCollege, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strId_XzCollege:所给的关键字
 * @returns 对象
*/
export  async function vQx_XzClg_GetObjById_XzCollegeCache(strId_XzCollege: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjById_XzCollegeCache";

if (IsNullOrEmpty(strId_XzCollege) == true)
{
  const strMsg = Format("参数:[strId_XzCollege]不能为空!(In clsvQx_XzClgWApi.GetObjById_XzCollegeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strId_XzCollege.length != 4)
{
const strMsg = Format("缓存分类变量:[strId_XzCollege]的长度:[{0}]不正确!(clsvQx_XzClgWApi.GetObjById_XzCollegeCache)", strId_XzCollege.length);
console.error(strMsg);
throw (strMsg);
}
const arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstCache();
try
{
const arrvQx_XzClgSel = arrvQx_XzClgObjLstCache.filter(x => 
 x.id_XzCollege == strId_XzCollege );
let objvQx_XzClg: clsvQx_XzClgEN;
if (arrvQx_XzClgSel.length > 0)
{
objvQx_XzClg = arrvQx_XzClgSel[0];
return objvQx_XzClg;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvQx_XzClgConst = await vQx_XzClg_GetObjById_XzCollegeAsync(strId_XzCollege);
if (objvQx_XzClgConst != null)
{
vQx_XzClg_ReFreshThisCache();
return objvQx_XzClgConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strId_XzCollege, vQx_XzClg_ConstructorName, strThisFuncName);
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
export  function vQx_XzClg_SortFunDefa(a:clsvQx_XzClgEN , b:clsvQx_XzClgEN): number 
{
return a.id_XzCollege.localeCompare(b.id_XzCollege);
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
export  function vQx_XzClg_SortFunDefa2Fld(a:clsvQx_XzClgEN , b:clsvQx_XzClgEN): number 
{
if (a.collegeId == b.collegeId) return a.collegeIdInGP.localeCompare(b.collegeIdInGP);
else return a.collegeId.localeCompare(b.collegeId);
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
export  function vQx_XzClg_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQx_XzClgEN.con_Id_XzCollege:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
return a.id_XzCollege.localeCompare(b.id_XzCollege);
}
case clsvQx_XzClgEN.con_CollegeId:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
return a.collegeId.localeCompare(b.collegeId);
}
case clsvQx_XzClgEN.con_CollegeIdInGP:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (a.collegeIdInGP == null) return -1;
if (b.collegeIdInGP == null) return 1;
return a.collegeIdInGP.localeCompare(b.collegeIdInGP);
}
case clsvQx_XzClgEN.con_CollegeName:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
return a.collegeName.localeCompare(b.collegeName);
}
case clsvQx_XzClgEN.con_CollegeNameA:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
return a.collegeNameA.localeCompare(b.collegeNameA);
}
case clsvQx_XzClgEN.con_ClgEnglishName:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (a.clgEnglishName == null) return -1;
if (b.clgEnglishName == null) return 1;
return a.clgEnglishName.localeCompare(b.clgEnglishName);
}
case clsvQx_XzClgEN.con_PhoneNumber:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (a.phoneNumber == null) return -1;
if (b.phoneNumber == null) return 1;
return a.phoneNumber.localeCompare(b.phoneNumber);
}
case clsvQx_XzClgEN.con_WebSite:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (a.webSite == null) return -1;
if (b.webSite == null) return 1;
return a.webSite.localeCompare(b.webSite);
}
case clsvQx_XzClgEN.con_Id_Uni:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (a.id_Uni == null) return -1;
if (b.id_Uni == null) return 1;
return a.id_Uni.localeCompare(b.id_Uni);
}
case clsvQx_XzClgEN.con_ModifyUserId:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsvQx_XzClgEN.con_Memo:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvQx_XzClgEN.con_IsVisible:
return (a: clsvQx_XzClgEN) => {
if (a.isVisible == true) return 1;
else return -1
}
case clsvQx_XzClgEN.con_OrderNum:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
return a.orderNum-b.orderNum;
}
case clsvQx_XzClgEN.con_ModifyDate:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsvQx_XzClgEN.con_Id_School:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (a.id_School == null) return -1;
if (b.id_School == null) return 1;
return a.id_School.localeCompare(b.id_School);
}
case clsvQx_XzClgEN.con_UserTypeId:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (a.userTypeId == null) return -1;
if (b.userTypeId == null) return 1;
return a.userTypeId.localeCompare(b.userTypeId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQx_XzClg]中不存在!(in ${ vQx_XzClg_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQx_XzClgEN.con_Id_XzCollege:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
return b.id_XzCollege.localeCompare(a.id_XzCollege);
}
case clsvQx_XzClgEN.con_CollegeId:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
return b.collegeId.localeCompare(a.collegeId);
}
case clsvQx_XzClgEN.con_CollegeIdInGP:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (b.collegeIdInGP == null) return -1;
if (a.collegeIdInGP == null) return 1;
return b.collegeIdInGP.localeCompare(a.collegeIdInGP);
}
case clsvQx_XzClgEN.con_CollegeName:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
return b.collegeName.localeCompare(a.collegeName);
}
case clsvQx_XzClgEN.con_CollegeNameA:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
return b.collegeNameA.localeCompare(a.collegeNameA);
}
case clsvQx_XzClgEN.con_ClgEnglishName:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (b.clgEnglishName == null) return -1;
if (a.clgEnglishName == null) return 1;
return b.clgEnglishName.localeCompare(a.clgEnglishName);
}
case clsvQx_XzClgEN.con_PhoneNumber:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (b.phoneNumber == null) return -1;
if (a.phoneNumber == null) return 1;
return b.phoneNumber.localeCompare(a.phoneNumber);
}
case clsvQx_XzClgEN.con_WebSite:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (b.webSite == null) return -1;
if (a.webSite == null) return 1;
return b.webSite.localeCompare(a.webSite);
}
case clsvQx_XzClgEN.con_Id_Uni:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (b.id_Uni == null) return -1;
if (a.id_Uni == null) return 1;
return b.id_Uni.localeCompare(a.id_Uni);
}
case clsvQx_XzClgEN.con_ModifyUserId:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsvQx_XzClgEN.con_Memo:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvQx_XzClgEN.con_IsVisible:
return (b: clsvQx_XzClgEN) => {
if (b.isVisible == true) return 1;
else return -1
}
case clsvQx_XzClgEN.con_OrderNum:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
return b.orderNum-a.orderNum;
}
case clsvQx_XzClgEN.con_ModifyDate:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsvQx_XzClgEN.con_Id_School:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (b.id_School == null) return -1;
if (a.id_School == null) return 1;
return b.id_School.localeCompare(a.id_School);
}
case clsvQx_XzClgEN.con_UserTypeId:
return (a: clsvQx_XzClgEN, b: clsvQx_XzClgEN) => {
if (b.userTypeId == null) return -1;
if (a.userTypeId == null) return 1;
return b.userTypeId.localeCompare(a.userTypeId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQx_XzClg]中不存在!(in ${ vQx_XzClg_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strId_XzCollege:所给的关键字
 * @returns 对象
*/
export  async function vQx_XzClg_GetNameById_XzCollegeCache(strId_XzCollege: string ) {

if (IsNullOrEmpty(strId_XzCollege) == true)
{
  const strMsg = Format("参数:[strId_XzCollege]不能为空!(In clsvQx_XzClgWApi.GetNameById_XzCollegeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strId_XzCollege.length != 4)
{
const strMsg = Format("缓存分类变量:[strId_XzCollege]的长度:[{0}]不正确!(clsvQx_XzClgWApi.GetNameById_XzCollegeCache)", strId_XzCollege.length);
console.error(strMsg);
throw (strMsg);
}
const arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstCache();
if (arrvQx_XzClgObjLstCache == null) return "";
try
{
const arrvQx_XzClgSel = arrvQx_XzClgObjLstCache.filter(x => 
 x.id_XzCollege == strId_XzCollege );
let objvQx_XzClg: clsvQx_XzClgEN;
if (arrvQx_XzClgSel.length > 0)
{
objvQx_XzClg = arrvQx_XzClgSel[0];
return objvQx_XzClg.collegeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strId_XzCollege);
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
export  async function vQx_XzClg_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQx_XzClgEN.con_Id_XzCollege:
return (obj: clsvQx_XzClgEN) => {
return obj.id_XzCollege === value;
}
case clsvQx_XzClgEN.con_CollegeId:
return (obj: clsvQx_XzClgEN) => {
return obj.collegeId === value;
}
case clsvQx_XzClgEN.con_CollegeIdInGP:
return (obj: clsvQx_XzClgEN) => {
return obj.collegeIdInGP === value;
}
case clsvQx_XzClgEN.con_CollegeName:
return (obj: clsvQx_XzClgEN) => {
return obj.collegeName === value;
}
case clsvQx_XzClgEN.con_CollegeNameA:
return (obj: clsvQx_XzClgEN) => {
return obj.collegeNameA === value;
}
case clsvQx_XzClgEN.con_ClgEnglishName:
return (obj: clsvQx_XzClgEN) => {
return obj.clgEnglishName === value;
}
case clsvQx_XzClgEN.con_PhoneNumber:
return (obj: clsvQx_XzClgEN) => {
return obj.phoneNumber === value;
}
case clsvQx_XzClgEN.con_WebSite:
return (obj: clsvQx_XzClgEN) => {
return obj.webSite === value;
}
case clsvQx_XzClgEN.con_Id_Uni:
return (obj: clsvQx_XzClgEN) => {
return obj.id_Uni === value;
}
case clsvQx_XzClgEN.con_ModifyUserId:
return (obj: clsvQx_XzClgEN) => {
return obj.modifyUserId === value;
}
case clsvQx_XzClgEN.con_Memo:
return (obj: clsvQx_XzClgEN) => {
return obj.memo === value;
}
case clsvQx_XzClgEN.con_IsVisible:
return (obj: clsvQx_XzClgEN) => {
return obj.isVisible === value;
}
case clsvQx_XzClgEN.con_OrderNum:
return (obj: clsvQx_XzClgEN) => {
return obj.orderNum === value;
}
case clsvQx_XzClgEN.con_ModifyDate:
return (obj: clsvQx_XzClgEN) => {
return obj.modifyDate === value;
}
case clsvQx_XzClgEN.con_Id_School:
return (obj: clsvQx_XzClgEN) => {
return obj.id_School === value;
}
case clsvQx_XzClgEN.con_UserTypeId:
return (obj: clsvQx_XzClgEN) => {
return obj.userTypeId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQx_XzClg]中不存在!(in ${ vQx_XzClg_ConstructorName}.${ strThisFuncName})`;
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
export  async function vQx_XzClg_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsvQx_XzClgEN.con_Id_XzCollege)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvQx_XzClgEN._AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvQx_XzClgEN._AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strId_XzCollege = strInValue;
if (IsNullOrEmpty(strId_XzCollege) == true)
{
return "";
}
const objvQx_XzClg = await vQx_XzClg_GetObjById_XzCollegeCache(strId_XzCollege );
if (objvQx_XzClg == null) return "";
if (objvQx_XzClg.GetFldValue(strOutFldName) == null) return "";
return objvQx_XzClg.GetFldValue(strOutFldName).toString();
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
export  async function vQx_XzClg_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsvQx_XzClgEN.con_Id_XzCollege)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvQx_XzClg = await vQx_XzClg_GetObjLstCache();
if (arrvQx_XzClg == null) return [];
let arrvQx_XzClgSel = arrvQx_XzClg;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvQx_XzClgSel.length == 0) return [];
return arrvQx_XzClgSel.map(x=>x.id_XzCollege);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQx_XzClg_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
export  async function vQx_XzClg_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
export  async function vQx_XzClg_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
export  async function vQx_XzClg_GetFirstObjAsync(strWhereCond: string): Promise<clsvQx_XzClgEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

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
const objvQx_XzClg = vQx_XzClg_GetObjFromJsonObj(returnObj);
return objvQx_XzClg;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
export  async function vQx_XzClg_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvQx_XzClgEN._CurrTabName;
if (IsNullOrEmpty(clsvQx_XzClgEN._WhereFormat) == false)
{
strWhereCond = clsvQx_XzClgEN._WhereFormat;
}
if (IsNullOrEmpty(clsvQx_XzClgEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQx_XzClgEN._CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvQx_XzClgExObjLstCache: Array<clsvQx_XzClgEN> = CacheHelper.Get(strKey);
const arrvQx_XzClgObjLstT = vQx_XzClg_GetObjLstByJSONObjLst(arrvQx_XzClgExObjLstCache);
return arrvQx_XzClgObjLstT;
}
try
{
const arrvQx_XzClgExObjLst = await vQx_XzClg_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvQx_XzClgExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQx_XzClgExObjLst.length);
console.log(strInfo);
return arrvQx_XzClgExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQx_XzClg_GetObjLstlocalStorage()
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvQx_XzClgEN._CurrTabName;
if (IsNullOrEmpty(clsvQx_XzClgEN._WhereFormat) == false)
{
strWhereCond = clsvQx_XzClgEN._WhereFormat;
}
if (IsNullOrEmpty(clsvQx_XzClgEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQx_XzClgEN._CacheAddiCondition);
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
const arrvQx_XzClgExObjLstCache: Array<clsvQx_XzClgEN> = JSON.parse(strTempObjLst);
const arrvQx_XzClgObjLstT = vQx_XzClg_GetObjLstByJSONObjLst(arrvQx_XzClgExObjLstCache);
return arrvQx_XzClgObjLstT;
}
try
{
const arrvQx_XzClgExObjLst = await vQx_XzClg_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvQx_XzClgExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQx_XzClgExObjLst.length);
console.log(strInfo);
return arrvQx_XzClgExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQx_XzClg_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsvQx_XzClgEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvQx_XzClgObjLstCache: Array<clsvQx_XzClgEN> = JSON.parse(strTempObjLst);
return arrvQx_XzClgObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vQx_XzClg_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQx_XzClgEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQx_XzClg_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
export  async function vQx_XzClg_GetObjLstsessionStorage()
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvQx_XzClgEN._CurrTabName;
if (IsNullOrEmpty(clsvQx_XzClgEN._WhereFormat) == false)
{
strWhereCond = clsvQx_XzClgEN._WhereFormat;
}
if (IsNullOrEmpty(clsvQx_XzClgEN._CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQx_XzClgEN._CacheAddiCondition);
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
const arrvQx_XzClgExObjLstCache: Array<clsvQx_XzClgEN> = JSON.parse(strTempObjLst);
const arrvQx_XzClgObjLstT = vQx_XzClg_GetObjLstByJSONObjLst(arrvQx_XzClgExObjLstCache);
return arrvQx_XzClgObjLstT;
}
try
{
const arrvQx_XzClgExObjLst = await vQx_XzClg_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvQx_XzClgExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQx_XzClgExObjLst.length);
console.log(strInfo);
return arrvQx_XzClgExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQx_XzClg_GetObjLstsessionStoragePureCache()
{
//初始化列表缓存
const strKey = clsvQx_XzClgEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvQx_XzClgObjLstCache: Array<clsvQx_XzClgEN> = JSON.parse(strTempObjLst);
return arrvQx_XzClgObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQx_XzClg_GetObjLstCache(): Promise<Array<clsvQx_XzClgEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrvQx_XzClgObjLstCache;
switch (clsvQx_XzClgEN._CacheModeId)
{
case "04"://sessionStorage
arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstClientCache();
break;
default:
arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstClientCache();
break;
}
return arrvQx_XzClgObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQx_XzClg_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvQx_XzClgObjLstCache;
switch (clsvQx_XzClgEN._CacheModeId)
{
case "04"://sessionStorage
arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrvQx_XzClgObjLstCache = null;
break;
default:
arrvQx_XzClgObjLstCache = null;
break;
}
return arrvQx_XzClgObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrId_XzCollegeCond:条件对象
 * @returns 对象列表子集
*/
export  async function vQx_XzClg_GetSubObjLstCache(objvQx_XzClgCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstCache();
let arrvQx_XzClgSel = arrvQx_XzClgObjLstCache;
if (objvQx_XzClgCond.GetConditions().length == 0) return arrvQx_XzClgSel;
try {
//console.log(sstrKeys);
for (const objCondition of objvQx_XzClgCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvQx_XzClgSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvQx_XzClgCond), vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvQx_XzClgEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrId_XzCollege:关键字列表
 * @returns 对象列表
 **/
export  async function vQx_XzClg_GetObjLstById_XzCollegeLstAsync(arrId_XzCollege: Array<string>): Promise<Array<clsvQx_XzClgEN>>  
{
const strThisFuncName = "GetObjLstById_XzCollegeLstAsync";
const strAction = "GetObjLstById_XzCollegeLst";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrId_XzCollege, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQx_XzClg_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
 * @param arrstrId_XzCollegeLst:关键字列表
 * @returns 对象列表
*/
export  async function vQx_XzClg_GetObjLstById_XzCollegeLstCache(arrId_XzCollegeLst: Array<string> ) {
const strThisFuncName = "GetObjLstById_XzCollegeLstCache";
try
{
const arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstCache();
const arrvQx_XzClgSel = arrvQx_XzClgObjLstCache.filter(x => arrId_XzCollegeLst.indexOf(x.id_XzCollege)>-1);
return arrvQx_XzClgSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrId_XzCollegeLst.join(","), vQx_XzClg_ConstructorName, strThisFuncName);
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
export  async function vQx_XzClg_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQx_XzClgEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQx_XzClg_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
export  async function vQx_XzClg_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQx_XzClgEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQx_XzClg_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
 * @param objstrId_XzCollegeCond:条件对象
 * @returns 对象列表子集
*/
export  async function vQx_XzClg_IsExistRecordCache(objvQx_XzClgCond: ConditionCollection ) {
const strThisFuncName = "IsExistRecordCache";
const arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstCache();
if (arrvQx_XzClgObjLstCache == null) return false;
let arrvQx_XzClgSel = arrvQx_XzClgObjLstCache;
if (objvQx_XzClgCond.GetConditions().length == 0) return arrvQx_XzClgSel.length>0?true:false;
try {
for (const objCondition of objvQx_XzClgCond.GetConditions()) {
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
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvQx_XzClgSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvQx_XzClgCond), vQx_XzClg_ConstructorName, strThisFuncName);
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
export  async function vQx_XzClg_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
 * @param strId_XzCollege:所给的关键字
 * @returns 对象
*/
export  async function vQx_XzClg_IsExistCache(strId_XzCollege:string) {
const strThisFuncName = "IsExistCache";
const arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstCache();
if (arrvQx_XzClgObjLstCache == null) return false;
try
{
const arrvQx_XzClgSel = arrvQx_XzClgObjLstCache.filter(x => x.id_XzCollege == strId_XzCollege);
if (arrvQx_XzClgSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strId_XzCollege, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strId_XzCollege:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQx_XzClg_IsExistAsync(strId_XzCollege: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strId_XzCollege
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
export  async function vQx_XzClg_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(vQx_XzClg_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQx_XzClg_ConstructorName, strThisFuncName);
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
 * @param objvQx_XzClgCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vQx_XzClg_GetRecCountByCondCache(objvQx_XzClgCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvQx_XzClgObjLstCache = await vQx_XzClg_GetObjLstCache();
if (arrvQx_XzClgObjLstCache == null) return 0;
let arrvQx_XzClgSel = arrvQx_XzClgObjLstCache;
if (objvQx_XzClgCond.GetConditions().length == 0) return arrvQx_XzClgSel.length;
try {
for (const objCondition of objvQx_XzClgCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQx_XzClgSel = arrvQx_XzClgSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvQx_XzClgSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvQx_XzClgCond), vQx_XzClg_ConstructorName, strThisFuncName);
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
export  function vQx_XzClg_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vQx_XzClg_ReFreshThisCache():void
{

if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsvQx_XzClgEN._CurrTabName;
switch (clsvQx_XzClgEN._CacheModeId)
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
clsvQx_XzClgEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function vQx_XzClg_GetLastRefreshTime():string
{
if (clsvQx_XzClgEN._RefreshTimeLst.length == 0) return "";
return clsvQx_XzClgEN._RefreshTimeLst[clsvQx_XzClgEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strUserTypeId:
*/
export  async function vQx_XzClg_BindDdl_Id_XzCollegeByUserTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strUserTypeId: string)
{

if (IsNullOrEmpty(strUserTypeId) == true)
{
  const strMsg = Format("参数:[strUserTypeId]不能为空！(In clsvQx_XzClgWApi.BindDdl_Id_XzCollegeByUserTypeIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUserTypeId]的长度:[{0}]不正确！(clsvQx_XzClgWApi.BindDdl_Id_XzCollegeByUserTypeIdInDiv)", strUserTypeId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_Id_XzCollegeByUserTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_Id_XzCollegeByUserTypeIdInDivCache");
let arrObjLstSel = await vQx_XzClg_GetObjLstCache();
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.userTypeId == strUserTypeId);
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQx_XzClgEN.con_Id_XzCollege, clsvQx_XzClgEN.con_CollegeName, "选vQx_XzClg...");
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQx_XzClg_BindDdl_Id_XzCollegeInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_Id_XzCollegeInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_Id_XzCollegeInDivCache");
const arrObjLstSel = await vQx_XzClg_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQx_XzClgEN.con_Id_XzCollege, clsvQx_XzClgEN.con_CollegeName, "选vQx_XzClg...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strUserTypeId:
*/
export  async function vQx_XzClg_GetArrvQx_XzClgByUserTypeIdCache(strUserTypeId: string)
{

if (IsNullOrEmpty(strUserTypeId) == true)
{
  const strMsg = Format("参数:[strUserTypeId]不能为空！(In clsvQx_XzClgWApi.BindDdl_Id_XzCollegeByUserTypeIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strUserTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strUserTypeId]的长度:[{0}]不正确！(clsvQx_XzClgWApi.BindDdl_Id_XzCollegeByUserTypeIdInDiv)", strUserTypeId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_Id_XzCollegeByUserTypeIdInDivCache");
const arrvQx_XzClg = new Array<clsvQx_XzClgEN>();
let arrObjLstSel = await vQx_XzClg_GetObjLstCache();
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.userTypeId == strUserTypeId);
const obj0 = new clsvQx_XzClgEN();
obj0.id_XzCollege = '0';
obj0.collegeName = '选vQx_XzClg...';
arrvQx_XzClg.push(obj0);
arrObjLstSel.forEach(x => arrvQx_XzClg.push(x));
return arrvQx_XzClg;
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQx_XzClg_GetArrvQx_XzClg()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_Id_XzCollegeInDivCache");
const arrvQx_XzClg = new Array<clsvQx_XzClgEN>();
const arrObjLstSel = await vQx_XzClg_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsvQx_XzClgEN();
obj0.id_XzCollege = '0';
obj0.collegeName = '选vQx_XzClg...';
arrvQx_XzClg.push(obj0);
arrObjLstSel.forEach(x => arrvQx_XzClg.push(x));
return arrvQx_XzClg;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQx_XzClg_GetJSONStrByObj (pobjvQx_XzClgEN: clsvQx_XzClgEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQx_XzClgEN);
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
export  function vQx_XzClg_GetObjLstByJSONStr (strJSON: string): Array<clsvQx_XzClgEN>
{
let arrvQx_XzClgObjLst = new Array<clsvQx_XzClgEN>();
if (strJSON === "")
{
return arrvQx_XzClgObjLst;
}
try
{
arrvQx_XzClgObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQx_XzClgObjLst;
}
return arrvQx_XzClgObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQx_XzClgObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQx_XzClg_GetObjLstByJSONObjLst (arrvQx_XzClgObjLstS: Array<clsvQx_XzClgEN>): Array<clsvQx_XzClgEN>
{
const arrvQx_XzClgObjLst = new Array<clsvQx_XzClgEN>();
for (const objInFor of arrvQx_XzClgObjLstS) {
const obj1 = vQx_XzClg_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQx_XzClgObjLst.push(obj1);
}
return arrvQx_XzClgObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQx_XzClg_GetObjByJSONStr (strJSON: string): clsvQx_XzClgEN
{
let pobjvQx_XzClgEN = new clsvQx_XzClgEN();
if (strJSON === "")
{
return pobjvQx_XzClgEN;
}
try
{
pobjvQx_XzClgEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQx_XzClgEN;
}
return pobjvQx_XzClgEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQx_XzClg_GetCombineCondition(objvQx_XzClgCond: clsvQx_XzClgEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_Id_XzCollege) == true)
{
const strComparisonOpId_XzCollege:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_Id_XzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_Id_XzCollege, objvQx_XzClgCond.id_XzCollege, strComparisonOpId_XzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_CollegeId) == true)
{
const strComparisonOpCollegeId:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_CollegeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_CollegeId, objvQx_XzClgCond.collegeId, strComparisonOpCollegeId);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_CollegeIdInGP) == true)
{
const strComparisonOpCollegeIdInGP:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_CollegeIdInGP];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_CollegeIdInGP, objvQx_XzClgCond.collegeIdInGP, strComparisonOpCollegeIdInGP);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_CollegeName) == true)
{
const strComparisonOpCollegeName:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_CollegeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_CollegeName, objvQx_XzClgCond.collegeName, strComparisonOpCollegeName);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_CollegeNameA) == true)
{
const strComparisonOpCollegeNameA:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_CollegeNameA];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_CollegeNameA, objvQx_XzClgCond.collegeNameA, strComparisonOpCollegeNameA);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_ClgEnglishName) == true)
{
const strComparisonOpClgEnglishName:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_ClgEnglishName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_ClgEnglishName, objvQx_XzClgCond.clgEnglishName, strComparisonOpClgEnglishName);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_PhoneNumber) == true)
{
const strComparisonOpPhoneNumber:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_PhoneNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_PhoneNumber, objvQx_XzClgCond.phoneNumber, strComparisonOpPhoneNumber);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_WebSite) == true)
{
const strComparisonOpWebSite:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_WebSite];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_WebSite, objvQx_XzClgCond.webSite, strComparisonOpWebSite);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_Id_Uni) == true)
{
const strComparisonOpId_Uni:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_Id_Uni];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_Id_Uni, objvQx_XzClgCond.id_Uni, strComparisonOpId_Uni);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_ModifyUserId, objvQx_XzClgCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_Memo, objvQx_XzClgCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_IsVisible) == true)
{
if (objvQx_XzClgCond.isVisible == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQx_XzClgEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQx_XzClgEN.con_IsVisible);
}
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQx_XzClgEN.con_OrderNum, objvQx_XzClgCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_ModifyDate, objvQx_XzClgCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_Id_School) == true)
{
const strComparisonOpId_School:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_Id_School];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_Id_School, objvQx_XzClgCond.id_School, strComparisonOpId_School);
}
if (Object.prototype.hasOwnProperty.call(objvQx_XzClgCond.dicFldComparisonOp, clsvQx_XzClgEN.con_UserTypeId) == true)
{
const strComparisonOpUserTypeId:string = objvQx_XzClgCond.dicFldComparisonOp[clsvQx_XzClgEN.con_UserTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQx_XzClgEN.con_UserTypeId, objvQx_XzClgCond.userTypeId, strComparisonOpUserTypeId);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQx_XzClgENS:源对象
 * @param objvQx_XzClgENT:目标对象
*/
export  function vQx_XzClg_GetObjFromJsonObj(objvQx_XzClgENS: clsvQx_XzClgEN): clsvQx_XzClgEN 
{
 const objvQx_XzClgENT: clsvQx_XzClgEN = new clsvQx_XzClgEN();
ObjectAssign(objvQx_XzClgENT, objvQx_XzClgENS);
 return objvQx_XzClgENT;
}