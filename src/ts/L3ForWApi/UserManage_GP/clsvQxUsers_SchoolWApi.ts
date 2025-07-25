
 /**
 * 类名:clsvQxUsers_SchoolWApi
 * 表名:vQxUsers_School(00140075)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:21:57
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
 * vUsers_School(vQxUsers_School)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { clsvQxUsers_SchoolEN } from "@/ts/L0Entity/UserManage_GP/clsvQxUsers_SchoolEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vQxUsers_School_Controller = "vQxUsers_SchoolApi";
 export const vQxUsers_School_ConstructorName = "vQxUsers_School";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export  async function vQxUsers_School_GetObjByUserIdAsync(strUserId: string): Promise<clsvQxUsers_SchoolEN|null>  
{
const strThisFuncName = "GetObjByUserIdAsync";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsvQxUsers_SchoolWApi.GetObjByUserIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByUserId";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId,
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
const objvQxUsers_School = vQxUsers_School_GetObjFromJsonObj(returnObj);
return objvQxUsers_School;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByUserIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByUserIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxUsers_School_SortFunDefa(a:clsvQxUsers_SchoolEN , b:clsvQxUsers_SchoolEN): number 
{
return a.userId.localeCompare(b.userId);
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
export  function vQxUsers_School_SortFunDefa2Fld(a:clsvQxUsers_SchoolEN , b:clsvQxUsers_SchoolEN): number 
{
if (a.userName == b.userName) return a.departmentId.localeCompare(b.departmentId);
else return a.userName.localeCompare(b.userName);
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
export  function vQxUsers_School_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQxUsers_SchoolEN.con_UserId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.userId.localeCompare(b.userId);
}
case clsvQxUsers_SchoolEN.con_UserName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.userName.localeCompare(b.userName);
}
case clsvQxUsers_SchoolEN.con_DepartmentId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.departmentId.localeCompare(b.departmentId);
}
case clsvQxUsers_SchoolEN.con_DepartmentName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.departmentName.localeCompare(b.departmentName);
}
case clsvQxUsers_SchoolEN.con_DepartmentAbbrName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.departmentAbbrName == null) return -1;
if (b.departmentAbbrName == null) return 1;
return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
}
case clsvQxUsers_SchoolEN.con_DepartmentTypeId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.departmentTypeId.localeCompare(b.departmentTypeId);
}
case clsvQxUsers_SchoolEN.con_DepartmentTypeName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.departmentTypeName.localeCompare(b.departmentTypeName);
}
case clsvQxUsers_SchoolEN.con_UpDepartmentId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.upDepartmentId == null) return -1;
if (b.upDepartmentId == null) return 1;
return a.upDepartmentId.localeCompare(b.upDepartmentId);
}
case clsvQxUsers_SchoolEN.con_UpDepartmentName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.upDepartmentName == null) return -1;
if (b.upDepartmentName == null) return 1;
return a.upDepartmentName.localeCompare(b.upDepartmentName);
}
case clsvQxUsers_SchoolEN.con_UserStateId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.userStateId.localeCompare(b.userStateId);
}
case clsvQxUsers_SchoolEN.con_UserStateName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.userStateName.localeCompare(b.userStateName);
}
case clsvQxUsers_SchoolEN.con_IdentityId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.identityId.localeCompare(b.identityId);
}
case clsvQxUsers_SchoolEN.con_IdentityDesc:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.identityDesc.localeCompare(b.identityDesc);
}
case clsvQxUsers_SchoolEN.con_CardNo:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.cardNo == null) return -1;
if (b.cardNo == null) return 1;
return a.cardNo.localeCompare(b.cardNo);
}
case clsvQxUsers_SchoolEN.con_StuTeacherId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.stuTeacherId == null) return -1;
if (b.stuTeacherId == null) return 1;
return a.stuTeacherId.localeCompare(b.stuTeacherId);
}
case clsvQxUsers_SchoolEN.con_IdGradeBase:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.idGradeBase == null) return -1;
if (b.idGradeBase == null) return 1;
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsvQxUsers_SchoolEN.con_GradeBaseName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return a.gradeBaseName.localeCompare(b.gradeBaseName);
}
case clsvQxUsers_SchoolEN.con_EnterSchoolDate:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.enterSchoolDate == null) return -1;
if (b.enterSchoolDate == null) return 1;
return a.enterSchoolDate.localeCompare(b.enterSchoolDate);
}
case clsvQxUsers_SchoolEN.con_IsOffed:
return (a: clsvQxUsers_SchoolEN) => {
if (a.isOffed == true) return 1;
else return -1
}
case clsvQxUsers_SchoolEN.con_BeginYearMonth:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.beginYearMonth == null) return -1;
if (b.beginYearMonth == null) return 1;
return a.beginYearMonth.localeCompare(b.beginYearMonth);
}
case clsvQxUsers_SchoolEN.con_EndYearMonth:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.endYearMonth == null) return -1;
if (b.endYearMonth == null) return 1;
return a.endYearMonth.localeCompare(b.endYearMonth);
}
case clsvQxUsers_SchoolEN.con_CardState:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.cardState == null) return -1;
if (b.cardState == null) return 1;
return a.cardState.localeCompare(b.cardState);
}
case clsvQxUsers_SchoolEN.con_IsLeaved:
return (a: clsvQxUsers_SchoolEN) => {
if (a.isLeaved == true) return 1;
else return -1
}
case clsvQxUsers_SchoolEN.con_UpdDate:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvQxUsers_SchoolEN.con_UpdUser:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvQxUsers_SchoolEN.con_Memo:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxUsers_School]中不存在!(in ${ vQxUsers_School_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQxUsers_SchoolEN.con_UserId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.userId.localeCompare(a.userId);
}
case clsvQxUsers_SchoolEN.con_UserName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.userName.localeCompare(a.userName);
}
case clsvQxUsers_SchoolEN.con_DepartmentId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.departmentId.localeCompare(a.departmentId);
}
case clsvQxUsers_SchoolEN.con_DepartmentName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.departmentName.localeCompare(a.departmentName);
}
case clsvQxUsers_SchoolEN.con_DepartmentAbbrName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.departmentAbbrName == null) return -1;
if (a.departmentAbbrName == null) return 1;
return b.departmentAbbrName.localeCompare(a.departmentAbbrName);
}
case clsvQxUsers_SchoolEN.con_DepartmentTypeId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.departmentTypeId.localeCompare(a.departmentTypeId);
}
case clsvQxUsers_SchoolEN.con_DepartmentTypeName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.departmentTypeName.localeCompare(a.departmentTypeName);
}
case clsvQxUsers_SchoolEN.con_UpDepartmentId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.upDepartmentId == null) return -1;
if (a.upDepartmentId == null) return 1;
return b.upDepartmentId.localeCompare(a.upDepartmentId);
}
case clsvQxUsers_SchoolEN.con_UpDepartmentName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.upDepartmentName == null) return -1;
if (a.upDepartmentName == null) return 1;
return b.upDepartmentName.localeCompare(a.upDepartmentName);
}
case clsvQxUsers_SchoolEN.con_UserStateId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.userStateId.localeCompare(a.userStateId);
}
case clsvQxUsers_SchoolEN.con_UserStateName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.userStateName.localeCompare(a.userStateName);
}
case clsvQxUsers_SchoolEN.con_IdentityId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.identityId.localeCompare(a.identityId);
}
case clsvQxUsers_SchoolEN.con_IdentityDesc:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.identityDesc.localeCompare(a.identityDesc);
}
case clsvQxUsers_SchoolEN.con_CardNo:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.cardNo == null) return -1;
if (a.cardNo == null) return 1;
return b.cardNo.localeCompare(a.cardNo);
}
case clsvQxUsers_SchoolEN.con_StuTeacherId:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.stuTeacherId == null) return -1;
if (a.stuTeacherId == null) return 1;
return b.stuTeacherId.localeCompare(a.stuTeacherId);
}
case clsvQxUsers_SchoolEN.con_IdGradeBase:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.idGradeBase == null) return -1;
if (a.idGradeBase == null) return 1;
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsvQxUsers_SchoolEN.con_GradeBaseName:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
return b.gradeBaseName.localeCompare(a.gradeBaseName);
}
case clsvQxUsers_SchoolEN.con_EnterSchoolDate:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.enterSchoolDate == null) return -1;
if (a.enterSchoolDate == null) return 1;
return b.enterSchoolDate.localeCompare(a.enterSchoolDate);
}
case clsvQxUsers_SchoolEN.con_IsOffed:
return (b: clsvQxUsers_SchoolEN) => {
if (b.isOffed == true) return 1;
else return -1
}
case clsvQxUsers_SchoolEN.con_BeginYearMonth:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.beginYearMonth == null) return -1;
if (a.beginYearMonth == null) return 1;
return b.beginYearMonth.localeCompare(a.beginYearMonth);
}
case clsvQxUsers_SchoolEN.con_EndYearMonth:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.endYearMonth == null) return -1;
if (a.endYearMonth == null) return 1;
return b.endYearMonth.localeCompare(a.endYearMonth);
}
case clsvQxUsers_SchoolEN.con_CardState:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.cardState == null) return -1;
if (a.cardState == null) return 1;
return b.cardState.localeCompare(a.cardState);
}
case clsvQxUsers_SchoolEN.con_IsLeaved:
return (b: clsvQxUsers_SchoolEN) => {
if (b.isLeaved == true) return 1;
else return -1
}
case clsvQxUsers_SchoolEN.con_UpdDate:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvQxUsers_SchoolEN.con_UpdUser:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvQxUsers_SchoolEN.con_Memo:
return (a: clsvQxUsers_SchoolEN, b: clsvQxUsers_SchoolEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxUsers_School]中不存在!(in ${ vQxUsers_School_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByUserIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vQxUsers_School_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQxUsers_SchoolEN.con_UserId:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.userId === value;
}
case clsvQxUsers_SchoolEN.con_UserName:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.userName === value;
}
case clsvQxUsers_SchoolEN.con_DepartmentId:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.departmentId === value;
}
case clsvQxUsers_SchoolEN.con_DepartmentName:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.departmentName === value;
}
case clsvQxUsers_SchoolEN.con_DepartmentAbbrName:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.departmentAbbrName === value;
}
case clsvQxUsers_SchoolEN.con_DepartmentTypeId:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.departmentTypeId === value;
}
case clsvQxUsers_SchoolEN.con_DepartmentTypeName:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.departmentTypeName === value;
}
case clsvQxUsers_SchoolEN.con_UpDepartmentId:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.upDepartmentId === value;
}
case clsvQxUsers_SchoolEN.con_UpDepartmentName:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.upDepartmentName === value;
}
case clsvQxUsers_SchoolEN.con_UserStateId:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.userStateId === value;
}
case clsvQxUsers_SchoolEN.con_UserStateName:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.userStateName === value;
}
case clsvQxUsers_SchoolEN.con_IdentityId:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.identityId === value;
}
case clsvQxUsers_SchoolEN.con_IdentityDesc:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.identityDesc === value;
}
case clsvQxUsers_SchoolEN.con_CardNo:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.cardNo === value;
}
case clsvQxUsers_SchoolEN.con_StuTeacherId:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.stuTeacherId === value;
}
case clsvQxUsers_SchoolEN.con_IdGradeBase:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.idGradeBase === value;
}
case clsvQxUsers_SchoolEN.con_GradeBaseName:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.gradeBaseName === value;
}
case clsvQxUsers_SchoolEN.con_EnterSchoolDate:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.enterSchoolDate === value;
}
case clsvQxUsers_SchoolEN.con_IsOffed:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.isOffed === value;
}
case clsvQxUsers_SchoolEN.con_BeginYearMonth:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.beginYearMonth === value;
}
case clsvQxUsers_SchoolEN.con_EndYearMonth:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.endYearMonth === value;
}
case clsvQxUsers_SchoolEN.con_CardState:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.cardState === value;
}
case clsvQxUsers_SchoolEN.con_IsLeaved:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.isLeaved === value;
}
case clsvQxUsers_SchoolEN.con_UpdDate:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.updDate === value;
}
case clsvQxUsers_SchoolEN.con_UpdUser:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.updUser === value;
}
case clsvQxUsers_SchoolEN.con_Memo:
return (obj: clsvQxUsers_SchoolEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxUsers_School]中不存在!(in ${ vQxUsers_School_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vQxUsers_School__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQxUsers_School_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_School_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_School_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_School_GetFirstObjAsync(strWhereCond: string): Promise<clsvQxUsers_SchoolEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

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
const objvQxUsers_School = vQxUsers_School_GetObjFromJsonObj(returnObj);
return objvQxUsers_School;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_School_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQxUsers_SchoolEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxUsers_School_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
 * @param arrUserId:关键字列表
 * @returns 对象列表
 **/
export  async function vQxUsers_School_GetObjLstByUserIdLstAsync(arrUserId: Array<string>): Promise<Array<clsvQxUsers_SchoolEN>>  
{
const strThisFuncName = "GetObjLstByUserIdLstAsync";
const strAction = "GetObjLstByUserIdLst";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUserId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxUsers_School_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByUserIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vQxUsers_School_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQxUsers_SchoolEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxUsers_School_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_School_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQxUsers_SchoolEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxUsers_School_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_School_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQxUsers_SchoolEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQxUsers_SchoolEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxUsers_School_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_School_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
 * @param strUserId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQxUsers_School_IsExistAsync(strUserId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_School_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(vQxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_School_ConstructorName, strThisFuncName);
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
export  function vQxUsers_School_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxUsers_School_GetJSONStrByObj (pobjvQxUsers_SchoolEN: clsvQxUsers_SchoolEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQxUsers_SchoolEN);
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
export  function vQxUsers_School_GetObjLstByJSONStr (strJSON: string): Array<clsvQxUsers_SchoolEN>
{
let arrvQxUsers_SchoolObjLst = new Array<clsvQxUsers_SchoolEN>();
if (strJSON === "")
{
return arrvQxUsers_SchoolObjLst;
}
try
{
arrvQxUsers_SchoolObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQxUsers_SchoolObjLst;
}
return arrvQxUsers_SchoolObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQxUsers_SchoolObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQxUsers_School_GetObjLstByJSONObjLst (arrvQxUsers_SchoolObjLstS: Array<clsvQxUsers_SchoolEN>): Array<clsvQxUsers_SchoolEN>
{
const arrvQxUsers_SchoolObjLst = new Array<clsvQxUsers_SchoolEN>();
for (const objInFor of arrvQxUsers_SchoolObjLstS) {
const obj1 = vQxUsers_School_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQxUsers_SchoolObjLst.push(obj1);
}
return arrvQxUsers_SchoolObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxUsers_School_GetObjByJSONStr (strJSON: string): clsvQxUsers_SchoolEN
{
let pobjvQxUsers_SchoolEN = new clsvQxUsers_SchoolEN();
if (strJSON === "")
{
return pobjvQxUsers_SchoolEN;
}
try
{
pobjvQxUsers_SchoolEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQxUsers_SchoolEN;
}
return pobjvQxUsers_SchoolEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQxUsers_School_GetCombineCondition(objvQxUsers_SchoolCond: clsvQxUsers_SchoolEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_UserId, objvQxUsers_SchoolCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_UserName, objvQxUsers_SchoolCond.userName, strComparisonOpUserName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_DepartmentId) == true)
{
const strComparisonOpDepartmentId:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_DepartmentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_DepartmentId, objvQxUsers_SchoolCond.departmentId, strComparisonOpDepartmentId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_DepartmentName) == true)
{
const strComparisonOpDepartmentName:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_DepartmentName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_DepartmentName, objvQxUsers_SchoolCond.departmentName, strComparisonOpDepartmentName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_DepartmentAbbrName) == true)
{
const strComparisonOpDepartmentAbbrName:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_DepartmentAbbrName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_DepartmentAbbrName, objvQxUsers_SchoolCond.departmentAbbrName, strComparisonOpDepartmentAbbrName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_DepartmentTypeId) == true)
{
const strComparisonOpDepartmentTypeId:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_DepartmentTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_DepartmentTypeId, objvQxUsers_SchoolCond.departmentTypeId, strComparisonOpDepartmentTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_DepartmentTypeName) == true)
{
const strComparisonOpDepartmentTypeName:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_DepartmentTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_DepartmentTypeName, objvQxUsers_SchoolCond.departmentTypeName, strComparisonOpDepartmentTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_UpDepartmentId) == true)
{
const strComparisonOpUpDepartmentId:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_UpDepartmentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_UpDepartmentId, objvQxUsers_SchoolCond.upDepartmentId, strComparisonOpUpDepartmentId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_UpDepartmentName) == true)
{
const strComparisonOpUpDepartmentName:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_UpDepartmentName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_UpDepartmentName, objvQxUsers_SchoolCond.upDepartmentName, strComparisonOpUpDepartmentName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_UserStateId) == true)
{
const strComparisonOpUserStateId:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_UserStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_UserStateId, objvQxUsers_SchoolCond.userStateId, strComparisonOpUserStateId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_UserStateName) == true)
{
const strComparisonOpUserStateName:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_UserStateName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_UserStateName, objvQxUsers_SchoolCond.userStateName, strComparisonOpUserStateName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_IdentityId) == true)
{
const strComparisonOpIdentityId:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_IdentityId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_IdentityId, objvQxUsers_SchoolCond.identityId, strComparisonOpIdentityId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_IdentityDesc) == true)
{
const strComparisonOpIdentityDesc:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_IdentityDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_IdentityDesc, objvQxUsers_SchoolCond.identityDesc, strComparisonOpIdentityDesc);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_CardNo) == true)
{
const strComparisonOpCardNo:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_CardNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_CardNo, objvQxUsers_SchoolCond.cardNo, strComparisonOpCardNo);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_StuTeacherId) == true)
{
const strComparisonOpStuTeacherId:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_StuTeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_StuTeacherId, objvQxUsers_SchoolCond.stuTeacherId, strComparisonOpStuTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_IdGradeBase, objvQxUsers_SchoolCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_GradeBaseName) == true)
{
const strComparisonOpGradeBaseName:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_GradeBaseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_GradeBaseName, objvQxUsers_SchoolCond.gradeBaseName, strComparisonOpGradeBaseName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_EnterSchoolDate) == true)
{
const strComparisonOpEnterSchoolDate:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_EnterSchoolDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_EnterSchoolDate, objvQxUsers_SchoolCond.enterSchoolDate, strComparisonOpEnterSchoolDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_IsOffed) == true)
{
if (objvQxUsers_SchoolCond.isOffed == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxUsers_SchoolEN.con_IsOffed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxUsers_SchoolEN.con_IsOffed);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_BeginYearMonth) == true)
{
const strComparisonOpBeginYearMonth:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_BeginYearMonth];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_BeginYearMonth, objvQxUsers_SchoolCond.beginYearMonth, strComparisonOpBeginYearMonth);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_EndYearMonth) == true)
{
const strComparisonOpEndYearMonth:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_EndYearMonth];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_EndYearMonth, objvQxUsers_SchoolCond.endYearMonth, strComparisonOpEndYearMonth);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_CardState) == true)
{
const strComparisonOpCardState:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_CardState];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_CardState, objvQxUsers_SchoolCond.cardState, strComparisonOpCardState);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_IsLeaved) == true)
{
if (objvQxUsers_SchoolCond.isLeaved == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxUsers_SchoolEN.con_IsLeaved);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxUsers_SchoolEN.con_IsLeaved);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_UpdDate, objvQxUsers_SchoolCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_UpdUser, objvQxUsers_SchoolCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsers_SchoolCond.dicFldComparisonOp, clsvQxUsers_SchoolEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQxUsers_SchoolCond.dicFldComparisonOp[clsvQxUsers_SchoolEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsers_SchoolEN.con_Memo, objvQxUsers_SchoolCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQxUsers_SchoolENS:源对象
 * @param objvQxUsers_SchoolENT:目标对象
*/
export  function vQxUsers_School_GetObjFromJsonObj(objvQxUsers_SchoolENS: clsvQxUsers_SchoolEN): clsvQxUsers_SchoolEN 
{
 const objvQxUsers_SchoolENT: clsvQxUsers_SchoolEN = new clsvQxUsers_SchoolEN();
ObjectAssign(objvQxUsers_SchoolENT, objvQxUsers_SchoolENS);
 return objvQxUsers_SchoolENT;
}