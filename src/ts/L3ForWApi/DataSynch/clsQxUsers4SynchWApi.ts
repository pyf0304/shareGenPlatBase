
 /**
 * 类名:clsQxUsers4SynchWApi
 * 表名:QxUsers4Synch(00140089)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:14
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:数据同步(DataSynch)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户4同步(QxUsers4Synch)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsQxUsers4SynchEN } from "@/ts/L0Entity/DataSynch/clsQxUsers4SynchEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUsers4Synch_Controller = "QxUsers4SynchApi";
 export const qxUsers4Synch_ConstructorName = "qxUsers4Synch";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function QxUsers4Synch_GetObjBymIdAsync(lngmId: number): Promise<clsQxUsers4SynchEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxUsers4SynchWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const objQxUsers4Synch = QxUsers4Synch_GetObjFromJsonObj(returnObj);
return objQxUsers4Synch;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function QxUsers4Synch_SortFunDefa(a:clsQxUsers4SynchEN , b:clsQxUsers4SynchEN): number 
{
return a.mId-b.mId;
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
export  function QxUsers4Synch_SortFunDefa2Fld(a:clsQxUsers4SynchEN , b:clsQxUsers4SynchEN): number 
{
if (a.ipAddress == b.ipAddress) return a.userId.localeCompare(b.userId);
else return a.ipAddress.localeCompare(b.ipAddress);
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
export  function QxUsers4Synch_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUsers4SynchEN.con_mId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
return a.mId-b.mId;
}
case clsQxUsers4SynchEN.con_IpAddress:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.ipAddress == null) return -1;
if (b.ipAddress == null) return 1;
return a.ipAddress.localeCompare(b.ipAddress);
}
case clsQxUsers4SynchEN.con_UserId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
return a.userId.localeCompare(b.userId);
}
case clsQxUsers4SynchEN.con_UserName:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
return a.userName.localeCompare(b.userName);
}
case clsQxUsers4SynchEN.con_UserStateId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
return a.userStateId.localeCompare(b.userStateId);
}
case clsQxUsers4SynchEN.con_OpenId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.openId == null) return -1;
if (b.openId == null) return 1;
return a.openId.localeCompare(b.openId);
}
case clsQxUsers4SynchEN.con_IdentityId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.identityId == null) return -1;
if (b.identityId == null) return 1;
return a.identityId.localeCompare(b.identityId);
}
case clsQxUsers4SynchEN.con_StuTeacherId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.stuTeacherId == null) return -1;
if (b.stuTeacherId == null) return 1;
return a.stuTeacherId.localeCompare(b.stuTeacherId);
}
case clsQxUsers4SynchEN.con_Password:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
return a.password.localeCompare(b.password);
}
case clsQxUsers4SynchEN.con_PhoneNumber:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.phoneNumber == null) return -1;
if (b.phoneNumber == null) return 1;
return a.phoneNumber.localeCompare(b.phoneNumber);
}
case clsQxUsers4SynchEN.con_DepartmentId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.departmentId == null) return -1;
if (b.departmentId == null) return 1;
return a.departmentId.localeCompare(b.departmentId);
}
case clsQxUsers4SynchEN.con_IdXzCollege:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsQxUsers4SynchEN.con_EffitiveBeginDate:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.effitiveBeginDate == null) return -1;
if (b.effitiveBeginDate == null) return 1;
return a.effitiveBeginDate.localeCompare(b.effitiveBeginDate);
}
case clsQxUsers4SynchEN.con_EffitiveEndDate:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.effitiveEndDate == null) return -1;
if (b.effitiveEndDate == null) return 1;
return a.effitiveEndDate.localeCompare(b.effitiveEndDate);
}
case clsQxUsers4SynchEN.con_Email:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.email == null) return -1;
if (b.email == null) return 1;
return a.email.localeCompare(b.email);
}
case clsQxUsers4SynchEN.con_IsArchive:
return (a: clsQxUsers4SynchEN) => {
if (a.isArchive == true) return 1;
else return -1
}
case clsQxUsers4SynchEN.con_IsAccessSynch:
return (a: clsQxUsers4SynchEN) => {
if (a.isAccessSynch == true) return 1;
else return -1
}
case clsQxUsers4SynchEN.con_AccessSynchDate:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.accessSynchDate == null) return -1;
if (b.accessSynchDate == null) return 1;
return a.accessSynchDate.localeCompare(b.accessSynchDate);
}
case clsQxUsers4SynchEN.con_IsExistUserInCurr:
return (a: clsQxUsers4SynchEN) => {
if (a.isExistUserInCurr == true) return 1;
else return -1
}
case clsQxUsers4SynchEN.con_IsSamePwd:
return (a: clsQxUsers4SynchEN) => {
if (a.isSamePwd == true) return 1;
else return -1
}
case clsQxUsers4SynchEN.con_UpdDate:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxUsers4SynchEN.con_UpdUser:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsQxUsers4SynchEN.con_Memo:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUsers4Synch]中不存在!(in ${ qxUsers4Synch_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUsers4SynchEN.con_mId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
return b.mId-a.mId;
}
case clsQxUsers4SynchEN.con_IpAddress:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.ipAddress == null) return -1;
if (a.ipAddress == null) return 1;
return b.ipAddress.localeCompare(a.ipAddress);
}
case clsQxUsers4SynchEN.con_UserId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
return b.userId.localeCompare(a.userId);
}
case clsQxUsers4SynchEN.con_UserName:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
return b.userName.localeCompare(a.userName);
}
case clsQxUsers4SynchEN.con_UserStateId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
return b.userStateId.localeCompare(a.userStateId);
}
case clsQxUsers4SynchEN.con_OpenId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.openId == null) return -1;
if (a.openId == null) return 1;
return b.openId.localeCompare(a.openId);
}
case clsQxUsers4SynchEN.con_IdentityId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.identityId == null) return -1;
if (a.identityId == null) return 1;
return b.identityId.localeCompare(a.identityId);
}
case clsQxUsers4SynchEN.con_StuTeacherId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.stuTeacherId == null) return -1;
if (a.stuTeacherId == null) return 1;
return b.stuTeacherId.localeCompare(a.stuTeacherId);
}
case clsQxUsers4SynchEN.con_Password:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
return b.password.localeCompare(a.password);
}
case clsQxUsers4SynchEN.con_PhoneNumber:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.phoneNumber == null) return -1;
if (a.phoneNumber == null) return 1;
return b.phoneNumber.localeCompare(a.phoneNumber);
}
case clsQxUsers4SynchEN.con_DepartmentId:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.departmentId == null) return -1;
if (a.departmentId == null) return 1;
return b.departmentId.localeCompare(a.departmentId);
}
case clsQxUsers4SynchEN.con_IdXzCollege:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsQxUsers4SynchEN.con_EffitiveBeginDate:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.effitiveBeginDate == null) return -1;
if (a.effitiveBeginDate == null) return 1;
return b.effitiveBeginDate.localeCompare(a.effitiveBeginDate);
}
case clsQxUsers4SynchEN.con_EffitiveEndDate:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.effitiveEndDate == null) return -1;
if (a.effitiveEndDate == null) return 1;
return b.effitiveEndDate.localeCompare(a.effitiveEndDate);
}
case clsQxUsers4SynchEN.con_Email:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.email == null) return -1;
if (a.email == null) return 1;
return b.email.localeCompare(a.email);
}
case clsQxUsers4SynchEN.con_IsArchive:
return (b: clsQxUsers4SynchEN) => {
if (b.isArchive == true) return 1;
else return -1
}
case clsQxUsers4SynchEN.con_IsAccessSynch:
return (b: clsQxUsers4SynchEN) => {
if (b.isAccessSynch == true) return 1;
else return -1
}
case clsQxUsers4SynchEN.con_AccessSynchDate:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.accessSynchDate == null) return -1;
if (a.accessSynchDate == null) return 1;
return b.accessSynchDate.localeCompare(a.accessSynchDate);
}
case clsQxUsers4SynchEN.con_IsExistUserInCurr:
return (b: clsQxUsers4SynchEN) => {
if (b.isExistUserInCurr == true) return 1;
else return -1
}
case clsQxUsers4SynchEN.con_IsSamePwd:
return (b: clsQxUsers4SynchEN) => {
if (b.isSamePwd == true) return 1;
else return -1
}
case clsQxUsers4SynchEN.con_UpdDate:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxUsers4SynchEN.con_UpdUser:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsQxUsers4SynchEN.con_Memo:
return (a: clsQxUsers4SynchEN, b: clsQxUsers4SynchEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUsers4Synch]中不存在!(in ${ qxUsers4Synch_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxUsers4Synch_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUsers4SynchEN.con_mId:
return (obj: clsQxUsers4SynchEN) => {
return obj.mId === value;
}
case clsQxUsers4SynchEN.con_IpAddress:
return (obj: clsQxUsers4SynchEN) => {
return obj.ipAddress === value;
}
case clsQxUsers4SynchEN.con_UserId:
return (obj: clsQxUsers4SynchEN) => {
return obj.userId === value;
}
case clsQxUsers4SynchEN.con_UserName:
return (obj: clsQxUsers4SynchEN) => {
return obj.userName === value;
}
case clsQxUsers4SynchEN.con_UserStateId:
return (obj: clsQxUsers4SynchEN) => {
return obj.userStateId === value;
}
case clsQxUsers4SynchEN.con_OpenId:
return (obj: clsQxUsers4SynchEN) => {
return obj.openId === value;
}
case clsQxUsers4SynchEN.con_IdentityId:
return (obj: clsQxUsers4SynchEN) => {
return obj.identityId === value;
}
case clsQxUsers4SynchEN.con_StuTeacherId:
return (obj: clsQxUsers4SynchEN) => {
return obj.stuTeacherId === value;
}
case clsQxUsers4SynchEN.con_Password:
return (obj: clsQxUsers4SynchEN) => {
return obj.password === value;
}
case clsQxUsers4SynchEN.con_PhoneNumber:
return (obj: clsQxUsers4SynchEN) => {
return obj.phoneNumber === value;
}
case clsQxUsers4SynchEN.con_DepartmentId:
return (obj: clsQxUsers4SynchEN) => {
return obj.departmentId === value;
}
case clsQxUsers4SynchEN.con_IdXzCollege:
return (obj: clsQxUsers4SynchEN) => {
return obj.idXzCollege === value;
}
case clsQxUsers4SynchEN.con_EffitiveBeginDate:
return (obj: clsQxUsers4SynchEN) => {
return obj.effitiveBeginDate === value;
}
case clsQxUsers4SynchEN.con_EffitiveEndDate:
return (obj: clsQxUsers4SynchEN) => {
return obj.effitiveEndDate === value;
}
case clsQxUsers4SynchEN.con_Email:
return (obj: clsQxUsers4SynchEN) => {
return obj.email === value;
}
case clsQxUsers4SynchEN.con_IsArchive:
return (obj: clsQxUsers4SynchEN) => {
return obj.isArchive === value;
}
case clsQxUsers4SynchEN.con_IsAccessSynch:
return (obj: clsQxUsers4SynchEN) => {
return obj.isAccessSynch === value;
}
case clsQxUsers4SynchEN.con_AccessSynchDate:
return (obj: clsQxUsers4SynchEN) => {
return obj.accessSynchDate === value;
}
case clsQxUsers4SynchEN.con_IsExistUserInCurr:
return (obj: clsQxUsers4SynchEN) => {
return obj.isExistUserInCurr === value;
}
case clsQxUsers4SynchEN.con_IsSamePwd:
return (obj: clsQxUsers4SynchEN) => {
return obj.isSamePwd === value;
}
case clsQxUsers4SynchEN.con_UpdDate:
return (obj: clsQxUsers4SynchEN) => {
return obj.updDate === value;
}
case clsQxUsers4SynchEN.con_UpdUser:
return (obj: clsQxUsers4SynchEN) => {
return obj.updUser === value;
}
case clsQxUsers4SynchEN.con_Memo:
return (obj: clsQxUsers4SynchEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUsers4Synch]中不存在!(in ${ qxUsers4Synch_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxUsers4Synch__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUsers4Synch_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUsers4SynchEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const objQxUsers4Synch = QxUsers4Synch_GetObjFromJsonObj(returnObj);
return objQxUsers4Synch;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUsers4SynchEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers4Synch_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function QxUsers4Synch_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsQxUsers4SynchEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers4Synch_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxUsers4Synch_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUsers4SynchEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers4Synch_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUsers4SynchEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers4Synch_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUsers4SynchEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUsers4SynchEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers4Synch_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_DelQxUsers4SynchsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUsers4SynchsAsync";
const strAction = "DelQxUsers4Synchs";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_DelQxUsers4SynchsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUsers4SynchsByCondAsync";
const strAction = "DelQxUsers4SynchsByCond";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
 * @param objQxUsers4SynchEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUsers4Synch_AddNewRecordAsync(objQxUsers4SynchEN: clsQxUsers4SynchEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxUsers4SynchEN);
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_AddNewObjSave(objQxUsers4SynchEN: clsQxUsers4SynchEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxUsers4Synch_CheckPropertyNew(objQxUsers4SynchEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUsers4Synch_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUsers4Synch_CheckUniCond4Add(objQxUsers4SynchEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxUsers4Synch_AddNewRecordAsync(objQxUsers4SynchEN);
if (returnBool == true)
{
//QxUsers4Synch_ReFreshCache();
}
else
{
const strInfo = `添加[用户4同步(QxUsers4Synch)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxUsers4SynchEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxUsers4Synch_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxUsers4Synch_CheckUniCond4Add(objQxUsers4SynchEN: clsQxUsers4SynchEN): Promise<boolean>{
const strUniquenessCondition = QxUsers4Synch_GetUniCondStr(objQxUsers4SynchEN);
const bolIsExistCondition = await QxUsers4Synch_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUsers4Synch_CheckUniCond4Update(objQxUsers4SynchEN: clsQxUsers4SynchEN): Promise<boolean>{
const strUniquenessCondition = QxUsers4Synch_GetUniCondStr4Update(objQxUsers4SynchEN);
const bolIsExistCondition = await QxUsers4Synch_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUsers4Synch_UpdateObjSave(objQxUsers4SynchEN: clsQxUsers4SynchEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxUsers4SynchEN.sfUpdFldSetStr = objQxUsers4SynchEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxUsers4SynchEN.mId == 0 || objQxUsers4SynchEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxUsers4Synch_CheckProperty4Update(objQxUsers4SynchEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUsers4Synch_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUsers4Synch_CheckUniCond4Update(objQxUsers4SynchEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxUsers4Synch_UpdateRecordAsync(objQxUsers4SynchEN);
if (returnBool == true)
{
//QxUsers4Synch_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxUsers4Synch_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxUsers4SynchEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUsers4Synch_AddNewRecordWithReturnKeyAsync(objQxUsers4SynchEN: clsQxUsers4SynchEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
 * @param objQxUsers4SynchEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUsers4Synch_UpdateRecordAsync(objQxUsers4SynchEN: clsQxUsers4SynchEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUsers4SynchEN.sfUpdFldSetStr === undefined || objQxUsers4SynchEN.sfUpdFldSetStr === null || objQxUsers4SynchEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUsers4SynchEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
 * @param objQxUsers4SynchEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUsers4Synch_EditRecordExAsync(objQxUsers4SynchEN: clsQxUsers4SynchEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxUsers4SynchEN.sfUpdFldSetStr === undefined || objQxUsers4SynchEN.sfUpdFldSetStr === null || objQxUsers4SynchEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUsers4SynchEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
 * @param objQxUsers4SynchEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUsers4Synch_UpdateWithConditionAsync(objQxUsers4SynchEN: clsQxUsers4SynchEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUsers4SynchEN.sfUpdFldSetStr === undefined || objQxUsers4SynchEN.sfUpdFldSetStr === null || objQxUsers4SynchEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUsers4SynchEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);
objQxUsers4SynchEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers4SynchEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxUsers4Synch_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  async function QxUsers4Synch_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function QxUsers4Synch_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxUsers4Synch_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers4Synch_ConstructorName, strThisFuncName);
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
export  function QxUsers4Synch_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUsers4Synch_CheckPropertyNew(pobjQxUsers4SynchEN: clsQxUsers4SynchEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userId) === true 
 || pobjQxUsers4SynchEN.userId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 用户4同步)!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userName) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户名]不能为空(In 用户4同步)!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userStateId) === true 
 || pobjQxUsers4SynchEN.userStateId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[用户状态Id]不能为空(In 用户4同步)!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.password) === true )
{
 throw new Error(`(errid:Watl000411)字段[口令]不能为空(In 用户4同步)!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUsers4SynchEN.ipAddress) == false && GetStrLen(pobjQxUsers4SynchEN.ipAddress) > 23)
{
 throw new Error(`(errid:Watl000413)字段[IP地址(ipAddress)]的长度不能超过23(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.ipAddress}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userId) == false && GetStrLen(pobjQxUsers4SynchEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.userId}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userName) == false && GetStrLen(pobjQxUsers4SynchEN.userName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[用户名(userName)]的长度不能超过30(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.userName}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userStateId) == false && GetStrLen(pobjQxUsers4SynchEN.userStateId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[用户状态Id(userStateId)]的长度不能超过2(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.userStateId}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.openId) == false && GetStrLen(pobjQxUsers4SynchEN.openId) > 50)
{
 throw new Error(`(errid:Watl000413)字段[微信openid(openId)]的长度不能超过50(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.openId}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.identityId) == false && GetStrLen(pobjQxUsers4SynchEN.identityId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[身份编号(identityId)]的长度不能超过2(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.identityId}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.stuTeacherId) == false && GetStrLen(pobjQxUsers4SynchEN.stuTeacherId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[学工号(stuTeacherId)]的长度不能超过20(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.stuTeacherId}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.password) == false && GetStrLen(pobjQxUsers4SynchEN.password) > 20)
{
 throw new Error(`(errid:Watl000413)字段[口令(password)]的长度不能超过20(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.password}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.phoneNumber) == false && GetStrLen(pobjQxUsers4SynchEN.phoneNumber) > 15)
{
 throw new Error(`(errid:Watl000413)字段[电话号码(phoneNumber)]的长度不能超过15(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.phoneNumber}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.departmentId) == false && GetStrLen(pobjQxUsers4SynchEN.departmentId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[部门Id(departmentId)]的长度不能超过8(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.departmentId}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.idXzCollege) == false && GetStrLen(pobjQxUsers4SynchEN.idXzCollege) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学院Id(idXzCollege)]的长度不能超过4(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.idXzCollege}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.effitiveBeginDate) == false && GetStrLen(pobjQxUsers4SynchEN.effitiveBeginDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[有效开始日期(effitiveBeginDate)]的长度不能超过14(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.effitiveBeginDate}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.effitiveEndDate) == false && GetStrLen(pobjQxUsers4SynchEN.effitiveEndDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[有效结束日期(effitiveEndDate)]的长度不能超过14(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.effitiveEndDate}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.email) == false && GetStrLen(pobjQxUsers4SynchEN.email) > 100)
{
 throw new Error(`(errid:Watl000413)字段[邮箱(email)]的长度不能超过100(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.email}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.accessSynchDate) == false && GetStrLen(pobjQxUsers4SynchEN.accessSynchDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[处理同步日期(accessSynchDate)]的长度不能超过14(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.accessSynchDate}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.updDate) == false && GetStrLen(pobjQxUsers4SynchEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.updDate}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.updUser) == false && GetStrLen(pobjQxUsers4SynchEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.updUser}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.memo) == false && GetStrLen(pobjQxUsers4SynchEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.memo}(clsQxUsers4SynchBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUsers4SynchEN.mId && undefined !== pobjQxUsers4SynchEN.mId && tzDataType.isNumber(pobjQxUsers4SynchEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(mId)]的值:[${pobjQxUsers4SynchEN.mId}], 非法,应该为数值型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.ipAddress) == false && undefined !== pobjQxUsers4SynchEN.ipAddress && tzDataType.isString(pobjQxUsers4SynchEN.ipAddress) === false)
{
 throw new Error(`(errid:Watl000414)字段[IP地址(ipAddress)]的值:[${pobjQxUsers4SynchEN.ipAddress}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userId) == false && undefined !== pobjQxUsers4SynchEN.userId && tzDataType.isString(pobjQxUsers4SynchEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjQxUsers4SynchEN.userId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userName) == false && undefined !== pobjQxUsers4SynchEN.userName && tzDataType.isString(pobjQxUsers4SynchEN.userName) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户名(userName)]的值:[${pobjQxUsers4SynchEN.userName}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userStateId) == false && undefined !== pobjQxUsers4SynchEN.userStateId && tzDataType.isString(pobjQxUsers4SynchEN.userStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户状态Id(userStateId)]的值:[${pobjQxUsers4SynchEN.userStateId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.openId) == false && undefined !== pobjQxUsers4SynchEN.openId && tzDataType.isString(pobjQxUsers4SynchEN.openId) === false)
{
 throw new Error(`(errid:Watl000414)字段[微信openid(openId)]的值:[${pobjQxUsers4SynchEN.openId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.identityId) == false && undefined !== pobjQxUsers4SynchEN.identityId && tzDataType.isString(pobjQxUsers4SynchEN.identityId) === false)
{
 throw new Error(`(errid:Watl000414)字段[身份编号(identityId)]的值:[${pobjQxUsers4SynchEN.identityId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.stuTeacherId) == false && undefined !== pobjQxUsers4SynchEN.stuTeacherId && tzDataType.isString(pobjQxUsers4SynchEN.stuTeacherId) === false)
{
 throw new Error(`(errid:Watl000414)字段[学工号(stuTeacherId)]的值:[${pobjQxUsers4SynchEN.stuTeacherId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.password) == false && undefined !== pobjQxUsers4SynchEN.password && tzDataType.isString(pobjQxUsers4SynchEN.password) === false)
{
 throw new Error(`(errid:Watl000414)字段[口令(password)]的值:[${pobjQxUsers4SynchEN.password}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.phoneNumber) == false && undefined !== pobjQxUsers4SynchEN.phoneNumber && tzDataType.isString(pobjQxUsers4SynchEN.phoneNumber) === false)
{
 throw new Error(`(errid:Watl000414)字段[电话号码(phoneNumber)]的值:[${pobjQxUsers4SynchEN.phoneNumber}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.departmentId) == false && undefined !== pobjQxUsers4SynchEN.departmentId && tzDataType.isString(pobjQxUsers4SynchEN.departmentId) === false)
{
 throw new Error(`(errid:Watl000414)字段[部门Id(departmentId)]的值:[${pobjQxUsers4SynchEN.departmentId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.idXzCollege) == false && undefined !== pobjQxUsers4SynchEN.idXzCollege && tzDataType.isString(pobjQxUsers4SynchEN.idXzCollege) === false)
{
 throw new Error(`(errid:Watl000414)字段[学院Id(idXzCollege)]的值:[${pobjQxUsers4SynchEN.idXzCollege}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.effitiveBeginDate) == false && undefined !== pobjQxUsers4SynchEN.effitiveBeginDate && tzDataType.isString(pobjQxUsers4SynchEN.effitiveBeginDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[有效开始日期(effitiveBeginDate)]的值:[${pobjQxUsers4SynchEN.effitiveBeginDate}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.effitiveEndDate) == false && undefined !== pobjQxUsers4SynchEN.effitiveEndDate && tzDataType.isString(pobjQxUsers4SynchEN.effitiveEndDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[有效结束日期(effitiveEndDate)]的值:[${pobjQxUsers4SynchEN.effitiveEndDate}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.email) == false && undefined !== pobjQxUsers4SynchEN.email && tzDataType.isString(pobjQxUsers4SynchEN.email) === false)
{
 throw new Error(`(errid:Watl000414)字段[邮箱(email)]的值:[${pobjQxUsers4SynchEN.email}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (null != pobjQxUsers4SynchEN.isArchive && undefined !== pobjQxUsers4SynchEN.isArchive && tzDataType.isBoolean(pobjQxUsers4SynchEN.isArchive) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否存档(isArchive)]的值:[${pobjQxUsers4SynchEN.isArchive}], 非法,应该为布尔型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (null != pobjQxUsers4SynchEN.isAccessSynch && undefined !== pobjQxUsers4SynchEN.isAccessSynch && tzDataType.isBoolean(pobjQxUsers4SynchEN.isAccessSynch) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否处理同步(isAccessSynch)]的值:[${pobjQxUsers4SynchEN.isAccessSynch}], 非法,应该为布尔型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.accessSynchDate) == false && undefined !== pobjQxUsers4SynchEN.accessSynchDate && tzDataType.isString(pobjQxUsers4SynchEN.accessSynchDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[处理同步日期(accessSynchDate)]的值:[${pobjQxUsers4SynchEN.accessSynchDate}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (null != pobjQxUsers4SynchEN.isExistUserInCurr && undefined !== pobjQxUsers4SynchEN.isExistUserInCurr && tzDataType.isBoolean(pobjQxUsers4SynchEN.isExistUserInCurr) === false)
{
 throw new Error(`(errid:Watl000414)字段[当前是否存在用户(isExistUserInCurr)]的值:[${pobjQxUsers4SynchEN.isExistUserInCurr}], 非法,应该为布尔型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (null != pobjQxUsers4SynchEN.isSamePwd && undefined !== pobjQxUsers4SynchEN.isSamePwd && tzDataType.isBoolean(pobjQxUsers4SynchEN.isSamePwd) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否相同密码(isSamePwd)]的值:[${pobjQxUsers4SynchEN.isSamePwd}], 非法,应该为布尔型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.updDate) == false && undefined !== pobjQxUsers4SynchEN.updDate && tzDataType.isString(pobjQxUsers4SynchEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxUsers4SynchEN.updDate}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.updUser) == false && undefined !== pobjQxUsers4SynchEN.updUser && tzDataType.isString(pobjQxUsers4SynchEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户(updUser)]的值:[${pobjQxUsers4SynchEN.updUser}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.memo) == false && undefined !== pobjQxUsers4SynchEN.memo && tzDataType.isString(pobjQxUsers4SynchEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxUsers4SynchEN.memo}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUsers4Synch_CheckProperty4Update(pobjQxUsers4SynchEN: clsQxUsers4SynchEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUsers4SynchEN.ipAddress) == false && GetStrLen(pobjQxUsers4SynchEN.ipAddress) > 23)
{
 throw new Error(`(errid:Watl000416)字段[IP地址(ipAddress)]的长度不能超过23(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.ipAddress}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userId) == false && GetStrLen(pobjQxUsers4SynchEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.userId}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userName) == false && GetStrLen(pobjQxUsers4SynchEN.userName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[用户名(userName)]的长度不能超过30(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.userName}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userStateId) == false && GetStrLen(pobjQxUsers4SynchEN.userStateId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[用户状态Id(userStateId)]的长度不能超过2(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.userStateId}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.openId) == false && GetStrLen(pobjQxUsers4SynchEN.openId) > 50)
{
 throw new Error(`(errid:Watl000416)字段[微信openid(openId)]的长度不能超过50(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.openId}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.identityId) == false && GetStrLen(pobjQxUsers4SynchEN.identityId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[身份编号(identityId)]的长度不能超过2(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.identityId}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.stuTeacherId) == false && GetStrLen(pobjQxUsers4SynchEN.stuTeacherId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[学工号(stuTeacherId)]的长度不能超过20(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.stuTeacherId}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.password) == false && GetStrLen(pobjQxUsers4SynchEN.password) > 20)
{
 throw new Error(`(errid:Watl000416)字段[口令(password)]的长度不能超过20(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.password}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.phoneNumber) == false && GetStrLen(pobjQxUsers4SynchEN.phoneNumber) > 15)
{
 throw new Error(`(errid:Watl000416)字段[电话号码(phoneNumber)]的长度不能超过15(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.phoneNumber}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.departmentId) == false && GetStrLen(pobjQxUsers4SynchEN.departmentId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[部门Id(departmentId)]的长度不能超过8(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.departmentId}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.idXzCollege) == false && GetStrLen(pobjQxUsers4SynchEN.idXzCollege) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学院Id(idXzCollege)]的长度不能超过4(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.idXzCollege}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.effitiveBeginDate) == false && GetStrLen(pobjQxUsers4SynchEN.effitiveBeginDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[有效开始日期(effitiveBeginDate)]的长度不能超过14(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.effitiveBeginDate}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.effitiveEndDate) == false && GetStrLen(pobjQxUsers4SynchEN.effitiveEndDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[有效结束日期(effitiveEndDate)]的长度不能超过14(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.effitiveEndDate}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.email) == false && GetStrLen(pobjQxUsers4SynchEN.email) > 100)
{
 throw new Error(`(errid:Watl000416)字段[邮箱(email)]的长度不能超过100(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.email}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.accessSynchDate) == false && GetStrLen(pobjQxUsers4SynchEN.accessSynchDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[处理同步日期(accessSynchDate)]的长度不能超过14(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.accessSynchDate}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.updDate) == false && GetStrLen(pobjQxUsers4SynchEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.updDate}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.updUser) == false && GetStrLen(pobjQxUsers4SynchEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.updUser}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.memo) == false && GetStrLen(pobjQxUsers4SynchEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户4同步(QxUsers4Synch))!值:${pobjQxUsers4SynchEN.memo}(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUsers4SynchEN.mId && undefined !== pobjQxUsers4SynchEN.mId && tzDataType.isNumber(pobjQxUsers4SynchEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(mId)]的值:[${pobjQxUsers4SynchEN.mId}], 非法,应该为数值型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.ipAddress) == false && undefined !== pobjQxUsers4SynchEN.ipAddress && tzDataType.isString(pobjQxUsers4SynchEN.ipAddress) === false)
{
 throw new Error(`(errid:Watl000417)字段[IP地址(ipAddress)]的值:[${pobjQxUsers4SynchEN.ipAddress}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userId) == false && undefined !== pobjQxUsers4SynchEN.userId && tzDataType.isString(pobjQxUsers4SynchEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjQxUsers4SynchEN.userId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userName) == false && undefined !== pobjQxUsers4SynchEN.userName && tzDataType.isString(pobjQxUsers4SynchEN.userName) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户名(userName)]的值:[${pobjQxUsers4SynchEN.userName}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.userStateId) == false && undefined !== pobjQxUsers4SynchEN.userStateId && tzDataType.isString(pobjQxUsers4SynchEN.userStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户状态Id(userStateId)]的值:[${pobjQxUsers4SynchEN.userStateId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.openId) == false && undefined !== pobjQxUsers4SynchEN.openId && tzDataType.isString(pobjQxUsers4SynchEN.openId) === false)
{
 throw new Error(`(errid:Watl000417)字段[微信openid(openId)]的值:[${pobjQxUsers4SynchEN.openId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.identityId) == false && undefined !== pobjQxUsers4SynchEN.identityId && tzDataType.isString(pobjQxUsers4SynchEN.identityId) === false)
{
 throw new Error(`(errid:Watl000417)字段[身份编号(identityId)]的值:[${pobjQxUsers4SynchEN.identityId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.stuTeacherId) == false && undefined !== pobjQxUsers4SynchEN.stuTeacherId && tzDataType.isString(pobjQxUsers4SynchEN.stuTeacherId) === false)
{
 throw new Error(`(errid:Watl000417)字段[学工号(stuTeacherId)]的值:[${pobjQxUsers4SynchEN.stuTeacherId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.password) == false && undefined !== pobjQxUsers4SynchEN.password && tzDataType.isString(pobjQxUsers4SynchEN.password) === false)
{
 throw new Error(`(errid:Watl000417)字段[口令(password)]的值:[${pobjQxUsers4SynchEN.password}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.phoneNumber) == false && undefined !== pobjQxUsers4SynchEN.phoneNumber && tzDataType.isString(pobjQxUsers4SynchEN.phoneNumber) === false)
{
 throw new Error(`(errid:Watl000417)字段[电话号码(phoneNumber)]的值:[${pobjQxUsers4SynchEN.phoneNumber}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.departmentId) == false && undefined !== pobjQxUsers4SynchEN.departmentId && tzDataType.isString(pobjQxUsers4SynchEN.departmentId) === false)
{
 throw new Error(`(errid:Watl000417)字段[部门Id(departmentId)]的值:[${pobjQxUsers4SynchEN.departmentId}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.idXzCollege) == false && undefined !== pobjQxUsers4SynchEN.idXzCollege && tzDataType.isString(pobjQxUsers4SynchEN.idXzCollege) === false)
{
 throw new Error(`(errid:Watl000417)字段[学院Id(idXzCollege)]的值:[${pobjQxUsers4SynchEN.idXzCollege}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.effitiveBeginDate) == false && undefined !== pobjQxUsers4SynchEN.effitiveBeginDate && tzDataType.isString(pobjQxUsers4SynchEN.effitiveBeginDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[有效开始日期(effitiveBeginDate)]的值:[${pobjQxUsers4SynchEN.effitiveBeginDate}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.effitiveEndDate) == false && undefined !== pobjQxUsers4SynchEN.effitiveEndDate && tzDataType.isString(pobjQxUsers4SynchEN.effitiveEndDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[有效结束日期(effitiveEndDate)]的值:[${pobjQxUsers4SynchEN.effitiveEndDate}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.email) == false && undefined !== pobjQxUsers4SynchEN.email && tzDataType.isString(pobjQxUsers4SynchEN.email) === false)
{
 throw new Error(`(errid:Watl000417)字段[邮箱(email)]的值:[${pobjQxUsers4SynchEN.email}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (null != pobjQxUsers4SynchEN.isArchive && undefined !== pobjQxUsers4SynchEN.isArchive && tzDataType.isBoolean(pobjQxUsers4SynchEN.isArchive) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否存档(isArchive)]的值:[${pobjQxUsers4SynchEN.isArchive}], 非法,应该为布尔型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (null != pobjQxUsers4SynchEN.isAccessSynch && undefined !== pobjQxUsers4SynchEN.isAccessSynch && tzDataType.isBoolean(pobjQxUsers4SynchEN.isAccessSynch) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否处理同步(isAccessSynch)]的值:[${pobjQxUsers4SynchEN.isAccessSynch}], 非法,应该为布尔型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.accessSynchDate) == false && undefined !== pobjQxUsers4SynchEN.accessSynchDate && tzDataType.isString(pobjQxUsers4SynchEN.accessSynchDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[处理同步日期(accessSynchDate)]的值:[${pobjQxUsers4SynchEN.accessSynchDate}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (null != pobjQxUsers4SynchEN.isExistUserInCurr && undefined !== pobjQxUsers4SynchEN.isExistUserInCurr && tzDataType.isBoolean(pobjQxUsers4SynchEN.isExistUserInCurr) === false)
{
 throw new Error(`(errid:Watl000417)字段[当前是否存在用户(isExistUserInCurr)]的值:[${pobjQxUsers4SynchEN.isExistUserInCurr}], 非法,应该为布尔型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (null != pobjQxUsers4SynchEN.isSamePwd && undefined !== pobjQxUsers4SynchEN.isSamePwd && tzDataType.isBoolean(pobjQxUsers4SynchEN.isSamePwd) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否相同密码(isSamePwd)]的值:[${pobjQxUsers4SynchEN.isSamePwd}], 非法,应该为布尔型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.updDate) == false && undefined !== pobjQxUsers4SynchEN.updDate && tzDataType.isString(pobjQxUsers4SynchEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxUsers4SynchEN.updDate}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.updUser) == false && undefined !== pobjQxUsers4SynchEN.updUser && tzDataType.isString(pobjQxUsers4SynchEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户(updUser)]的值:[${pobjQxUsers4SynchEN.updUser}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers4SynchEN.memo) == false && undefined !== pobjQxUsers4SynchEN.memo && tzDataType.isString(pobjQxUsers4SynchEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxUsers4SynchEN.memo}], 非法,应该为字符型(In 用户4同步(QxUsers4Synch))!(clsQxUsers4SynchBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxUsers4SynchEN.mId 
 || pobjQxUsers4SynchEN.mId != null && pobjQxUsers4SynchEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 用户4同步)!(clsQxUsers4SynchBL:CheckProperty4Update)`);
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
export  function QxUsers4Synch_GetJSONStrByObj (pobjQxUsers4SynchEN: clsQxUsers4SynchEN): string
{
pobjQxUsers4SynchEN.sfUpdFldSetStr = pobjQxUsers4SynchEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUsers4SynchEN);
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
export  function QxUsers4Synch_GetObjLstByJSONStr (strJSON: string): Array<clsQxUsers4SynchEN>
{
let arrQxUsers4SynchObjLst = new Array<clsQxUsers4SynchEN>();
if (strJSON === "")
{
return arrQxUsers4SynchObjLst;
}
try
{
arrQxUsers4SynchObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUsers4SynchObjLst;
}
return arrQxUsers4SynchObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUsers4SynchObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUsers4Synch_GetObjLstByJSONObjLst (arrQxUsers4SynchObjLstS: Array<clsQxUsers4SynchEN>): Array<clsQxUsers4SynchEN>
{
const arrQxUsers4SynchObjLst = new Array<clsQxUsers4SynchEN>();
for (const objInFor of arrQxUsers4SynchObjLstS) {
const obj1 = QxUsers4Synch_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUsers4SynchObjLst.push(obj1);
}
return arrQxUsers4SynchObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUsers4Synch_GetObjByJSONStr (strJSON: string): clsQxUsers4SynchEN
{
let pobjQxUsers4SynchEN = new clsQxUsers4SynchEN();
if (strJSON === "")
{
return pobjQxUsers4SynchEN;
}
try
{
pobjQxUsers4SynchEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUsers4SynchEN;
}
return pobjQxUsers4SynchEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUsers4Synch_GetCombineCondition(objQxUsers4SynchCond: clsQxUsers4SynchEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_mId) == true)
{
const strComparisonOpmId:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsQxUsers4SynchEN.con_mId, objQxUsers4SynchCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_IpAddress) == true)
{
const strComparisonOpIpAddress:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_IpAddress];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_IpAddress, objQxUsers4SynchCond.ipAddress, strComparisonOpIpAddress);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_UserId, objQxUsers4SynchCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_UserName, objQxUsers4SynchCond.userName, strComparisonOpUserName);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_UserStateId) == true)
{
const strComparisonOpUserStateId:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_UserStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_UserStateId, objQxUsers4SynchCond.userStateId, strComparisonOpUserStateId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_OpenId) == true)
{
const strComparisonOpOpenId:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_OpenId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_OpenId, objQxUsers4SynchCond.openId, strComparisonOpOpenId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_IdentityId) == true)
{
const strComparisonOpIdentityId:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_IdentityId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_IdentityId, objQxUsers4SynchCond.identityId, strComparisonOpIdentityId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_StuTeacherId) == true)
{
const strComparisonOpStuTeacherId:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_StuTeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_StuTeacherId, objQxUsers4SynchCond.stuTeacherId, strComparisonOpStuTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_Password) == true)
{
const strComparisonOpPassword:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_Password];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_Password, objQxUsers4SynchCond.password, strComparisonOpPassword);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_PhoneNumber) == true)
{
const strComparisonOpPhoneNumber:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_PhoneNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_PhoneNumber, objQxUsers4SynchCond.phoneNumber, strComparisonOpPhoneNumber);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_DepartmentId) == true)
{
const strComparisonOpDepartmentId:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_DepartmentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_DepartmentId, objQxUsers4SynchCond.departmentId, strComparisonOpDepartmentId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_IdXzCollege, objQxUsers4SynchCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_EffitiveBeginDate) == true)
{
const strComparisonOpEffitiveBeginDate:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_EffitiveBeginDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_EffitiveBeginDate, objQxUsers4SynchCond.effitiveBeginDate, strComparisonOpEffitiveBeginDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_EffitiveEndDate) == true)
{
const strComparisonOpEffitiveEndDate:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_EffitiveEndDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_EffitiveEndDate, objQxUsers4SynchCond.effitiveEndDate, strComparisonOpEffitiveEndDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_Email) == true)
{
const strComparisonOpEmail:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_Email];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_Email, objQxUsers4SynchCond.email, strComparisonOpEmail);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_IsArchive) == true)
{
if (objQxUsers4SynchCond.isArchive == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUsers4SynchEN.con_IsArchive);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUsers4SynchEN.con_IsArchive);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_IsAccessSynch) == true)
{
if (objQxUsers4SynchCond.isAccessSynch == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUsers4SynchEN.con_IsAccessSynch);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUsers4SynchEN.con_IsAccessSynch);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_AccessSynchDate) == true)
{
const strComparisonOpAccessSynchDate:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_AccessSynchDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_AccessSynchDate, objQxUsers4SynchCond.accessSynchDate, strComparisonOpAccessSynchDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_IsExistUserInCurr) == true)
{
if (objQxUsers4SynchCond.isExistUserInCurr == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUsers4SynchEN.con_IsExistUserInCurr);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUsers4SynchEN.con_IsExistUserInCurr);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_IsSamePwd) == true)
{
if (objQxUsers4SynchCond.isSamePwd == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUsers4SynchEN.con_IsSamePwd);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUsers4SynchEN.con_IsSamePwd);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_UpdDate, objQxUsers4SynchCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_UpdUser, objQxUsers4SynchCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers4SynchCond.dicFldComparisonOp, clsQxUsers4SynchEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUsers4SynchCond.dicFldComparisonOp[clsQxUsers4SynchEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers4SynchEN.con_Memo, objQxUsers4SynchCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUsers4Synch(用户4同步),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIpAddress: IP地址(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUsers4Synch_GetUniCondStr(objQxUsers4SynchEN: clsQxUsers4SynchEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and IpAddress = '{0}'", objQxUsers4SynchEN.ipAddress);
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUsers4SynchEN.userId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUsers4Synch(用户4同步),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIpAddress: IP地址(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUsers4Synch_GetUniCondStr4Update(objQxUsers4SynchEN: clsQxUsers4SynchEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objQxUsers4SynchEN.mId);
 strWhereCond +=  Format(" and IpAddress = '{0}'", objQxUsers4SynchEN.ipAddress);
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUsers4SynchEN.userId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUsers4SynchENS:源对象
 * @param objQxUsers4SynchENT:目标对象
*/
export  function QxUsers4Synch_GetObjFromJsonObj(objQxUsers4SynchENS: clsQxUsers4SynchEN): clsQxUsers4SynchEN 
{
 const objQxUsers4SynchENT: clsQxUsers4SynchEN = new clsQxUsers4SynchEN();
ObjectAssign(objQxUsers4SynchENT, objQxUsers4SynchENS);
 return objQxUsers4SynchENT;
}