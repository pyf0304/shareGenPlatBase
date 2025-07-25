
 /**
 * 类名:clsQxUsers_SchoolWApi
 * 表名:QxUsers_School(00140074)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:13
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
 * 用户_学校(QxUsers_School)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { clsQxUsers_SchoolEN } from "@/ts/L0Entity/UserManage_GP/clsQxUsers_SchoolEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUsers_School_Controller = "QxUsers_SchoolApi";
 export const qxUsers_School_ConstructorName = "qxUsers_School";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export  async function QxUsers_School_GetObjByUserIdAsync(strUserId: string): Promise<clsQxUsers_SchoolEN|null>  
{
const strThisFuncName = "GetObjByUserIdAsync";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsQxUsers_SchoolWApi.GetObjByUserIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByUserId";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const objQxUsers_School = QxUsers_School_GetObjFromJsonObj(returnObj);
return objQxUsers_School;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  function QxUsers_School_SortFunDefa(a:clsQxUsers_SchoolEN , b:clsQxUsers_SchoolEN): number 
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
export  function QxUsers_School_SortFunDefa2Fld(a:clsQxUsers_SchoolEN , b:clsQxUsers_SchoolEN): number 
{
if (a.identityId == b.identityId) return a.cardNo.localeCompare(b.cardNo);
else return a.identityId.localeCompare(b.identityId);
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
export  function QxUsers_School_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUsers_SchoolEN.con_UserId:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
return a.userId.localeCompare(b.userId);
}
case clsQxUsers_SchoolEN.con_IdentityId:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
return a.identityId.localeCompare(b.identityId);
}
case clsQxUsers_SchoolEN.con_CardNo:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (a.cardNo == null) return -1;
if (b.cardNo == null) return 1;
return a.cardNo.localeCompare(b.cardNo);
}
case clsQxUsers_SchoolEN.con_StuTeacherId:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (a.stuTeacherId == null) return -1;
if (b.stuTeacherId == null) return 1;
return a.stuTeacherId.localeCompare(b.stuTeacherId);
}
case clsQxUsers_SchoolEN.con_IdGradeBase:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (a.idGradeBase == null) return -1;
if (b.idGradeBase == null) return 1;
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsQxUsers_SchoolEN.con_CardState:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (a.cardState == null) return -1;
if (b.cardState == null) return 1;
return a.cardState.localeCompare(b.cardState);
}
case clsQxUsers_SchoolEN.con_IsLeaved:
return (a: clsQxUsers_SchoolEN) => {
if (a.isLeaved == true) return 1;
else return -1
}
case clsQxUsers_SchoolEN.con_UpdDate:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQxUsers_SchoolEN.con_UpdUser:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsQxUsers_SchoolEN.con_Memo:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUsers_School]中不存在!(in ${ qxUsers_School_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUsers_SchoolEN.con_UserId:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
return b.userId.localeCompare(a.userId);
}
case clsQxUsers_SchoolEN.con_IdentityId:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
return b.identityId.localeCompare(a.identityId);
}
case clsQxUsers_SchoolEN.con_CardNo:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (b.cardNo == null) return -1;
if (a.cardNo == null) return 1;
return b.cardNo.localeCompare(a.cardNo);
}
case clsQxUsers_SchoolEN.con_StuTeacherId:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (b.stuTeacherId == null) return -1;
if (a.stuTeacherId == null) return 1;
return b.stuTeacherId.localeCompare(a.stuTeacherId);
}
case clsQxUsers_SchoolEN.con_IdGradeBase:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (b.idGradeBase == null) return -1;
if (a.idGradeBase == null) return 1;
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsQxUsers_SchoolEN.con_CardState:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (b.cardState == null) return -1;
if (a.cardState == null) return 1;
return b.cardState.localeCompare(a.cardState);
}
case clsQxUsers_SchoolEN.con_IsLeaved:
return (b: clsQxUsers_SchoolEN) => {
if (b.isLeaved == true) return 1;
else return -1
}
case clsQxUsers_SchoolEN.con_UpdDate:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQxUsers_SchoolEN.con_UpdUser:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsQxUsers_SchoolEN.con_Memo:
return (a: clsQxUsers_SchoolEN, b: clsQxUsers_SchoolEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUsers_School]中不存在!(in ${ qxUsers_School_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxUsers_School_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUsers_SchoolEN.con_UserId:
return (obj: clsQxUsers_SchoolEN) => {
return obj.userId === value;
}
case clsQxUsers_SchoolEN.con_IdentityId:
return (obj: clsQxUsers_SchoolEN) => {
return obj.identityId === value;
}
case clsQxUsers_SchoolEN.con_CardNo:
return (obj: clsQxUsers_SchoolEN) => {
return obj.cardNo === value;
}
case clsQxUsers_SchoolEN.con_StuTeacherId:
return (obj: clsQxUsers_SchoolEN) => {
return obj.stuTeacherId === value;
}
case clsQxUsers_SchoolEN.con_IdGradeBase:
return (obj: clsQxUsers_SchoolEN) => {
return obj.idGradeBase === value;
}
case clsQxUsers_SchoolEN.con_CardState:
return (obj: clsQxUsers_SchoolEN) => {
return obj.cardState === value;
}
case clsQxUsers_SchoolEN.con_IsLeaved:
return (obj: clsQxUsers_SchoolEN) => {
return obj.isLeaved === value;
}
case clsQxUsers_SchoolEN.con_UpdDate:
return (obj: clsQxUsers_SchoolEN) => {
return obj.updDate === value;
}
case clsQxUsers_SchoolEN.con_UpdUser:
return (obj: clsQxUsers_SchoolEN) => {
return obj.updUser === value;
}
case clsQxUsers_SchoolEN.con_Memo:
return (obj: clsQxUsers_SchoolEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUsers_School]中不存在!(in ${ qxUsers_School_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxUsers_School__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUsers_School_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUsers_SchoolEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const objQxUsers_School = QxUsers_School_GetObjFromJsonObj(returnObj);
return objQxUsers_School;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUsers_SchoolEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers_School_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers_School_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_GetObjLstByUserIdLstAsync(arrUserId: Array<string>): Promise<Array<clsQxUsers_SchoolEN>>  
{
const strThisFuncName = "GetObjLstByUserIdLstAsync";
const strAction = "GetObjLstByUserIdLst";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers_School_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers_School_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUsers_SchoolEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers_School_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers_School_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUsers_SchoolEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers_School_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers_School_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUsers_SchoolEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUsers_SchoolEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers_School_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers_School_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
 * @param strUserId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxUsers_School_DelRecordAsync(strUserId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strUserId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
 * @param arrUserId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxUsers_School_DelQxUsers_SchoolsAsync(arrUserId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUsers_SchoolsAsync";
const strAction = "DelQxUsers_Schools";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_DelQxUsers_SchoolsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUsers_SchoolsByCondAsync";
const strAction = "DelQxUsers_SchoolsByCond";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
 * @param objQxUsers_SchoolEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUsers_School_AddNewRecordAsync(objQxUsers_SchoolEN: clsQxUsers_SchoolEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxUsers_SchoolEN.userId === null || objQxUsers_SchoolEN.userId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxUsers_SchoolEN);
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers_SchoolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
 * @param objQxUsers_SchoolEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUsers_School_AddNewRecordWithMaxIdAsync(objQxUsers_SchoolEN: clsQxUsers_SchoolEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers_SchoolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_AddNewObjSave(objQxUsers_SchoolEN: clsQxUsers_SchoolEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxUsers_School_CheckPropertyNew(objQxUsers_SchoolEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUsers_School_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await QxUsers_School_IsExistAsync(objQxUsers_SchoolEN.userId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objQxUsers_SchoolEN.userId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await QxUsers_School_AddNewRecordAsync(objQxUsers_SchoolEN);
if (returnBool == true)
{
//QxUsers_School_ReFreshCache();
}
else
{
const strInfo = `添加[用户_学校(QxUsers_School)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxUsers_SchoolEN.userId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxUsers_School_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function QxUsers_School_UpdateObjSave(objQxUsers_SchoolEN: clsQxUsers_SchoolEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxUsers_SchoolEN.sfUpdFldSetStr = objQxUsers_SchoolEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxUsers_SchoolEN.userId == "" || objQxUsers_SchoolEN.userId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxUsers_School_CheckProperty4Update(objQxUsers_SchoolEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUsers_School_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await QxUsers_School_UpdateRecordAsync(objQxUsers_SchoolEN);
if (returnBool == true)
{
//QxUsers_School_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxUsers_School_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxUsers_SchoolEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUsers_School_AddNewRecordWithReturnKeyAsync(objQxUsers_SchoolEN: clsQxUsers_SchoolEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers_SchoolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
 * @param objQxUsers_SchoolEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUsers_School_UpdateRecordAsync(objQxUsers_SchoolEN: clsQxUsers_SchoolEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUsers_SchoolEN.sfUpdFldSetStr === undefined || objQxUsers_SchoolEN.sfUpdFldSetStr === null || objQxUsers_SchoolEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUsers_SchoolEN.userId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers_SchoolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
 * @param objQxUsers_SchoolEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUsers_School_EditRecordExAsync(objQxUsers_SchoolEN: clsQxUsers_SchoolEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxUsers_SchoolEN.sfUpdFldSetStr === undefined || objQxUsers_SchoolEN.sfUpdFldSetStr === null || objQxUsers_SchoolEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUsers_SchoolEN.userId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers_SchoolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
 * @param objQxUsers_SchoolEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUsers_School_UpdateWithConditionAsync(objQxUsers_SchoolEN: clsQxUsers_SchoolEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUsers_SchoolEN.sfUpdFldSetStr === undefined || objQxUsers_SchoolEN.sfUpdFldSetStr === null || objQxUsers_SchoolEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUsers_SchoolEN.userId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);
objQxUsers_SchoolEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsers_SchoolEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_IsExistAsync(strUserId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  async function QxUsers_School_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxUsers_School_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_School_ConstructorName, strThisFuncName);
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
export  function QxUsers_School_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxUsers_School_CheckPropertyNew(pobjQxUsers_SchoolEN: clsQxUsers_SchoolEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.identityId) === true 
 || pobjQxUsers_SchoolEN.identityId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[身份编号]不能为空(In 用户_学校)!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.userId) == false && GetStrLen(pobjQxUsers_SchoolEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.userId}(clsQxUsers_SchoolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.identityId) == false && GetStrLen(pobjQxUsers_SchoolEN.identityId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[身份编号(identityId)]的长度不能超过2(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.identityId}(clsQxUsers_SchoolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.cardNo) == false && GetStrLen(pobjQxUsers_SchoolEN.cardNo) > 10)
{
 throw new Error(`(errid:Watl000413)字段[卡号(cardNo)]的长度不能超过10(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.cardNo}(clsQxUsers_SchoolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.stuTeacherId) == false && GetStrLen(pobjQxUsers_SchoolEN.stuTeacherId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[学工号(stuTeacherId)]的长度不能超过20(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.stuTeacherId}(clsQxUsers_SchoolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.idGradeBase) == false && GetStrLen(pobjQxUsers_SchoolEN.idGradeBase) > 4)
{
 throw new Error(`(errid:Watl000413)字段[年级流水号(idGradeBase)]的长度不能超过4(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.idGradeBase}(clsQxUsers_SchoolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.cardState) == false && GetStrLen(pobjQxUsers_SchoolEN.cardState) > 10)
{
 throw new Error(`(errid:Watl000413)字段[卡状态(cardState)]的长度不能超过10(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.cardState}(clsQxUsers_SchoolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.updDate) == false && GetStrLen(pobjQxUsers_SchoolEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.updDate}(clsQxUsers_SchoolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.updUser) == false && GetStrLen(pobjQxUsers_SchoolEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.updUser}(clsQxUsers_SchoolBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.memo) == false && GetStrLen(pobjQxUsers_SchoolEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.memo}(clsQxUsers_SchoolBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.userId) == false && undefined !== pobjQxUsers_SchoolEN.userId && tzDataType.isString(pobjQxUsers_SchoolEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjQxUsers_SchoolEN.userId}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.identityId) == false && undefined !== pobjQxUsers_SchoolEN.identityId && tzDataType.isString(pobjQxUsers_SchoolEN.identityId) === false)
{
 throw new Error(`(errid:Watl000414)字段[身份编号(identityId)]的值:[${pobjQxUsers_SchoolEN.identityId}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.cardNo) == false && undefined !== pobjQxUsers_SchoolEN.cardNo && tzDataType.isString(pobjQxUsers_SchoolEN.cardNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[卡号(cardNo)]的值:[${pobjQxUsers_SchoolEN.cardNo}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.stuTeacherId) == false && undefined !== pobjQxUsers_SchoolEN.stuTeacherId && tzDataType.isString(pobjQxUsers_SchoolEN.stuTeacherId) === false)
{
 throw new Error(`(errid:Watl000414)字段[学工号(stuTeacherId)]的值:[${pobjQxUsers_SchoolEN.stuTeacherId}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.idGradeBase) == false && undefined !== pobjQxUsers_SchoolEN.idGradeBase && tzDataType.isString(pobjQxUsers_SchoolEN.idGradeBase) === false)
{
 throw new Error(`(errid:Watl000414)字段[年级流水号(idGradeBase)]的值:[${pobjQxUsers_SchoolEN.idGradeBase}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.cardState) == false && undefined !== pobjQxUsers_SchoolEN.cardState && tzDataType.isString(pobjQxUsers_SchoolEN.cardState) === false)
{
 throw new Error(`(errid:Watl000414)字段[卡状态(cardState)]的值:[${pobjQxUsers_SchoolEN.cardState}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
if (null != pobjQxUsers_SchoolEN.isLeaved && undefined !== pobjQxUsers_SchoolEN.isLeaved && tzDataType.isBoolean(pobjQxUsers_SchoolEN.isLeaved) === false)
{
 throw new Error(`(errid:Watl000414)字段[IsLeaved(isLeaved)]的值:[${pobjQxUsers_SchoolEN.isLeaved}], 非法,应该为布尔型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.updDate) == false && undefined !== pobjQxUsers_SchoolEN.updDate && tzDataType.isString(pobjQxUsers_SchoolEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxUsers_SchoolEN.updDate}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.updUser) == false && undefined !== pobjQxUsers_SchoolEN.updUser && tzDataType.isString(pobjQxUsers_SchoolEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户(updUser)]的值:[${pobjQxUsers_SchoolEN.updUser}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.memo) == false && undefined !== pobjQxUsers_SchoolEN.memo && tzDataType.isString(pobjQxUsers_SchoolEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxUsers_SchoolEN.memo}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.identityId) == false && pobjQxUsers_SchoolEN.identityId != '[nuull]' && GetStrLen(pobjQxUsers_SchoolEN.identityId) !=  2)
{
 throw ("(errid:Watl000415)字段[身份编号]作为外键字段,长度应该为2(In 用户_学校)!(clsQxUsers_SchoolBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUsers_School_CheckProperty4Update(pobjQxUsers_SchoolEN: clsQxUsers_SchoolEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.userId) == false && GetStrLen(pobjQxUsers_SchoolEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.userId}(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.identityId) == false && GetStrLen(pobjQxUsers_SchoolEN.identityId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[身份编号(identityId)]的长度不能超过2(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.identityId}(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.cardNo) == false && GetStrLen(pobjQxUsers_SchoolEN.cardNo) > 10)
{
 throw new Error(`(errid:Watl000416)字段[卡号(cardNo)]的长度不能超过10(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.cardNo}(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.stuTeacherId) == false && GetStrLen(pobjQxUsers_SchoolEN.stuTeacherId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[学工号(stuTeacherId)]的长度不能超过20(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.stuTeacherId}(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.idGradeBase) == false && GetStrLen(pobjQxUsers_SchoolEN.idGradeBase) > 4)
{
 throw new Error(`(errid:Watl000416)字段[年级流水号(idGradeBase)]的长度不能超过4(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.idGradeBase}(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.cardState) == false && GetStrLen(pobjQxUsers_SchoolEN.cardState) > 10)
{
 throw new Error(`(errid:Watl000416)字段[卡状态(cardState)]的长度不能超过10(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.cardState}(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.updDate) == false && GetStrLen(pobjQxUsers_SchoolEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.updDate}(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.updUser) == false && GetStrLen(pobjQxUsers_SchoolEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.updUser}(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.memo) == false && GetStrLen(pobjQxUsers_SchoolEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户_学校(QxUsers_School))!值:${pobjQxUsers_SchoolEN.memo}(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.userId) == false && undefined !== pobjQxUsers_SchoolEN.userId && tzDataType.isString(pobjQxUsers_SchoolEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjQxUsers_SchoolEN.userId}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.identityId) == false && undefined !== pobjQxUsers_SchoolEN.identityId && tzDataType.isString(pobjQxUsers_SchoolEN.identityId) === false)
{
 throw new Error(`(errid:Watl000417)字段[身份编号(identityId)]的值:[${pobjQxUsers_SchoolEN.identityId}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.cardNo) == false && undefined !== pobjQxUsers_SchoolEN.cardNo && tzDataType.isString(pobjQxUsers_SchoolEN.cardNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[卡号(cardNo)]的值:[${pobjQxUsers_SchoolEN.cardNo}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.stuTeacherId) == false && undefined !== pobjQxUsers_SchoolEN.stuTeacherId && tzDataType.isString(pobjQxUsers_SchoolEN.stuTeacherId) === false)
{
 throw new Error(`(errid:Watl000417)字段[学工号(stuTeacherId)]的值:[${pobjQxUsers_SchoolEN.stuTeacherId}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.idGradeBase) == false && undefined !== pobjQxUsers_SchoolEN.idGradeBase && tzDataType.isString(pobjQxUsers_SchoolEN.idGradeBase) === false)
{
 throw new Error(`(errid:Watl000417)字段[年级流水号(idGradeBase)]的值:[${pobjQxUsers_SchoolEN.idGradeBase}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.cardState) == false && undefined !== pobjQxUsers_SchoolEN.cardState && tzDataType.isString(pobjQxUsers_SchoolEN.cardState) === false)
{
 throw new Error(`(errid:Watl000417)字段[卡状态(cardState)]的值:[${pobjQxUsers_SchoolEN.cardState}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (null != pobjQxUsers_SchoolEN.isLeaved && undefined !== pobjQxUsers_SchoolEN.isLeaved && tzDataType.isBoolean(pobjQxUsers_SchoolEN.isLeaved) === false)
{
 throw new Error(`(errid:Watl000417)字段[IsLeaved(isLeaved)]的值:[${pobjQxUsers_SchoolEN.isLeaved}], 非法,应该为布尔型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.updDate) == false && undefined !== pobjQxUsers_SchoolEN.updDate && tzDataType.isString(pobjQxUsers_SchoolEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxUsers_SchoolEN.updDate}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.updUser) == false && undefined !== pobjQxUsers_SchoolEN.updUser && tzDataType.isString(pobjQxUsers_SchoolEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户(updUser)]的值:[${pobjQxUsers_SchoolEN.updUser}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.memo) == false && undefined !== pobjQxUsers_SchoolEN.memo && tzDataType.isString(pobjQxUsers_SchoolEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxUsers_SchoolEN.memo}], 非法,应该为字符型(In 用户_学校(QxUsers_School))!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.userId) === true 
 || pobjQxUsers_SchoolEN.userId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[用户ID]不能为空(In 用户_学校)!(clsQxUsers_SchoolBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxUsers_SchoolEN.identityId) == false && pobjQxUsers_SchoolEN.identityId != '[nuull]' && GetStrLen(pobjQxUsers_SchoolEN.identityId) !=  2)
{
 throw ("(errid:Watl000418)字段[身份编号]作为外键字段,长度应该为2(In 用户_学校)!(clsQxUsers_SchoolBL:CheckPropertyNew)");
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
export  function QxUsers_School_GetJSONStrByObj (pobjQxUsers_SchoolEN: clsQxUsers_SchoolEN): string
{
pobjQxUsers_SchoolEN.sfUpdFldSetStr = pobjQxUsers_SchoolEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUsers_SchoolEN);
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
export  function QxUsers_School_GetObjLstByJSONStr (strJSON: string): Array<clsQxUsers_SchoolEN>
{
let arrQxUsers_SchoolObjLst = new Array<clsQxUsers_SchoolEN>();
if (strJSON === "")
{
return arrQxUsers_SchoolObjLst;
}
try
{
arrQxUsers_SchoolObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUsers_SchoolObjLst;
}
return arrQxUsers_SchoolObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUsers_SchoolObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUsers_School_GetObjLstByJSONObjLst (arrQxUsers_SchoolObjLstS: Array<clsQxUsers_SchoolEN>): Array<clsQxUsers_SchoolEN>
{
const arrQxUsers_SchoolObjLst = new Array<clsQxUsers_SchoolEN>();
for (const objInFor of arrQxUsers_SchoolObjLstS) {
const obj1 = QxUsers_School_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUsers_SchoolObjLst.push(obj1);
}
return arrQxUsers_SchoolObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUsers_School_GetObjByJSONStr (strJSON: string): clsQxUsers_SchoolEN
{
let pobjQxUsers_SchoolEN = new clsQxUsers_SchoolEN();
if (strJSON === "")
{
return pobjQxUsers_SchoolEN;
}
try
{
pobjQxUsers_SchoolEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUsers_SchoolEN;
}
return pobjQxUsers_SchoolEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUsers_School_GetCombineCondition(objQxUsers_SchoolCond: clsQxUsers_SchoolEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUsers_SchoolCond.dicFldComparisonOp, clsQxUsers_SchoolEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objQxUsers_SchoolCond.dicFldComparisonOp[clsQxUsers_SchoolEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers_SchoolEN.con_UserId, objQxUsers_SchoolCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers_SchoolCond.dicFldComparisonOp, clsQxUsers_SchoolEN.con_IdentityId) == true)
{
const strComparisonOpIdentityId:string = objQxUsers_SchoolCond.dicFldComparisonOp[clsQxUsers_SchoolEN.con_IdentityId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers_SchoolEN.con_IdentityId, objQxUsers_SchoolCond.identityId, strComparisonOpIdentityId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers_SchoolCond.dicFldComparisonOp, clsQxUsers_SchoolEN.con_CardNo) == true)
{
const strComparisonOpCardNo:string = objQxUsers_SchoolCond.dicFldComparisonOp[clsQxUsers_SchoolEN.con_CardNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers_SchoolEN.con_CardNo, objQxUsers_SchoolCond.cardNo, strComparisonOpCardNo);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers_SchoolCond.dicFldComparisonOp, clsQxUsers_SchoolEN.con_StuTeacherId) == true)
{
const strComparisonOpStuTeacherId:string = objQxUsers_SchoolCond.dicFldComparisonOp[clsQxUsers_SchoolEN.con_StuTeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers_SchoolEN.con_StuTeacherId, objQxUsers_SchoolCond.stuTeacherId, strComparisonOpStuTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers_SchoolCond.dicFldComparisonOp, clsQxUsers_SchoolEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objQxUsers_SchoolCond.dicFldComparisonOp[clsQxUsers_SchoolEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers_SchoolEN.con_IdGradeBase, objQxUsers_SchoolCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers_SchoolCond.dicFldComparisonOp, clsQxUsers_SchoolEN.con_CardState) == true)
{
const strComparisonOpCardState:string = objQxUsers_SchoolCond.dicFldComparisonOp[clsQxUsers_SchoolEN.con_CardState];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers_SchoolEN.con_CardState, objQxUsers_SchoolCond.cardState, strComparisonOpCardState);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers_SchoolCond.dicFldComparisonOp, clsQxUsers_SchoolEN.con_IsLeaved) == true)
{
if (objQxUsers_SchoolCond.isLeaved == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUsers_SchoolEN.con_IsLeaved);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUsers_SchoolEN.con_IsLeaved);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUsers_SchoolCond.dicFldComparisonOp, clsQxUsers_SchoolEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxUsers_SchoolCond.dicFldComparisonOp[clsQxUsers_SchoolEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers_SchoolEN.con_UpdDate, objQxUsers_SchoolCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers_SchoolCond.dicFldComparisonOp, clsQxUsers_SchoolEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxUsers_SchoolCond.dicFldComparisonOp[clsQxUsers_SchoolEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers_SchoolEN.con_UpdUser, objQxUsers_SchoolCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxUsers_SchoolCond.dicFldComparisonOp, clsQxUsers_SchoolEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUsers_SchoolCond.dicFldComparisonOp[clsQxUsers_SchoolEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsers_SchoolEN.con_Memo, objQxUsers_SchoolCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUsers_SchoolENS:源对象
 * @param objQxUsers_SchoolENT:目标对象
*/
export  function QxUsers_School_GetObjFromJsonObj(objQxUsers_SchoolENS: clsQxUsers_SchoolEN): clsQxUsers_SchoolEN 
{
 const objQxUsers_SchoolENT: clsQxUsers_SchoolEN = new clsQxUsers_SchoolEN();
ObjectAssign(objQxUsers_SchoolENT, objQxUsers_SchoolENS);
 return objQxUsers_SchoolENT;
}