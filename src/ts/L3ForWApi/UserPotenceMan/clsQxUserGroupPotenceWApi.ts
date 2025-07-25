
 /**
 * 类名:clsQxUserGroupPotenceWApi
 * 表名:QxUserGroupPotence(00140008)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:43
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户权限管理(UserPotenceMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户权限关系(QxUserGroupPotence)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsQxUserGroupPotenceEN } from "@/ts/L0Entity/UserPotenceMan/clsQxUserGroupPotenceEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUserGroupPotence_Controller = "QxUserGroupPotenceApi";
 export const qxUserGroupPotence_ConstructorName = "qxUserGroupPotence";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function QxUserGroupPotence_GetObjBymIdAsync(lngmId: number): Promise<clsQxUserGroupPotenceEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxUserGroupPotenceWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const objQxUserGroupPotence = QxUserGroupPotence_GetObjFromJsonObj(returnObj);
return objQxUserGroupPotence;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  function QxUserGroupPotence_SortFunDefa(a:clsQxUserGroupPotenceEN , b:clsQxUserGroupPotenceEN): number 
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
export  function QxUserGroupPotence_SortFunDefa2Fld(a:clsQxUserGroupPotenceEN , b:clsQxUserGroupPotenceEN): number 
{
if (a.userId == b.userId) return a.groupId.localeCompare(b.groupId);
else return a.userId.localeCompare(b.userId);
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
export  function QxUserGroupPotence_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUserGroupPotenceEN.con_mId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
return a.mId-b.mId;
}
case clsQxUserGroupPotenceEN.con_UserId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clsQxUserGroupPotenceEN.con_GroupId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
if (a.groupId == null) return -1;
if (b.groupId == null) return 1;
return a.groupId.localeCompare(b.groupId);
}
case clsQxUserGroupPotenceEN.con_RoleId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
if (a.roleId == null) return -1;
if (b.roleId == null) return 1;
return a.roleId.localeCompare(b.roleId);
}
case clsQxUserGroupPotenceEN.con_QxPrjId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxUserGroupPotenceEN.con_PotenceId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
return a.potenceId.localeCompare(b.potenceId);
}
case clsQxUserGroupPotenceEN.con_RelaMid:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
return a.relaMid-b.relaMid;
}
case clsQxUserGroupPotenceEN.con_Memo:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserGroupPotence]中不存在!(in ${ qxUserGroupPotence_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUserGroupPotenceEN.con_mId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
return b.mId-a.mId;
}
case clsQxUserGroupPotenceEN.con_UserId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clsQxUserGroupPotenceEN.con_GroupId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
if (b.groupId == null) return -1;
if (a.groupId == null) return 1;
return b.groupId.localeCompare(a.groupId);
}
case clsQxUserGroupPotenceEN.con_RoleId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
if (b.roleId == null) return -1;
if (a.roleId == null) return 1;
return b.roleId.localeCompare(a.roleId);
}
case clsQxUserGroupPotenceEN.con_QxPrjId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxUserGroupPotenceEN.con_PotenceId:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
return b.potenceId.localeCompare(a.potenceId);
}
case clsQxUserGroupPotenceEN.con_RelaMid:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
return b.relaMid-a.relaMid;
}
case clsQxUserGroupPotenceEN.con_Memo:
return (a: clsQxUserGroupPotenceEN, b: clsQxUserGroupPotenceEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserGroupPotence]中不存在!(in ${ qxUserGroupPotence_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxUserGroupPotence_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUserGroupPotenceEN.con_mId:
return (obj: clsQxUserGroupPotenceEN) => {
return obj.mId === value;
}
case clsQxUserGroupPotenceEN.con_UserId:
return (obj: clsQxUserGroupPotenceEN) => {
return obj.userId === value;
}
case clsQxUserGroupPotenceEN.con_GroupId:
return (obj: clsQxUserGroupPotenceEN) => {
return obj.groupId === value;
}
case clsQxUserGroupPotenceEN.con_RoleId:
return (obj: clsQxUserGroupPotenceEN) => {
return obj.roleId === value;
}
case clsQxUserGroupPotenceEN.con_QxPrjId:
return (obj: clsQxUserGroupPotenceEN) => {
return obj.qxPrjId === value;
}
case clsQxUserGroupPotenceEN.con_PotenceId:
return (obj: clsQxUserGroupPotenceEN) => {
return obj.potenceId === value;
}
case clsQxUserGroupPotenceEN.con_RelaMid:
return (obj: clsQxUserGroupPotenceEN) => {
return obj.relaMid === value;
}
case clsQxUserGroupPotenceEN.con_Memo:
return (obj: clsQxUserGroupPotenceEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserGroupPotence]中不存在!(in ${ qxUserGroupPotence_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxUserGroupPotence__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserGroupPotence_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUserGroupPotenceEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const objQxUserGroupPotence = QxUserGroupPotence_GetObjFromJsonObj(returnObj);
return objQxUserGroupPotence;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUserGroupPotenceEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserGroupPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsQxUserGroupPotenceEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserGroupPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUserGroupPotenceEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserGroupPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUserGroupPotenceEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserGroupPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUserGroupPotenceEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUserGroupPotenceEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserGroupPotence_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_DelQxUserGroupPotencesAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUserGroupPotencesAsync";
const strAction = "DelQxUserGroupPotences";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_DelQxUserGroupPotencesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUserGroupPotencesByCondAsync";
const strAction = "DelQxUserGroupPotencesByCond";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
 * @param objQxUserGroupPotenceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserGroupPotence_AddNewRecordAsync(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxUserGroupPotenceEN);
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserGroupPotenceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_AddNewObjSave(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxUserGroupPotence_CheckPropertyNew(objQxUserGroupPotenceEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserGroupPotence_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserGroupPotence_CheckUniCond4Add(objQxUserGroupPotenceEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxUserGroupPotence_AddNewRecordAsync(objQxUserGroupPotenceEN);
if (returnBool == true)
{
//QxUserGroupPotence_ReFreshCache();
}
else
{
const strInfo = `添加[用户权限关系(QxUserGroupPotence)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxUserGroupPotenceEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxUserGroupPotence_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxUserGroupPotence_CheckUniCond4Add(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN): Promise<boolean>{
const strUniquenessCondition = QxUserGroupPotence_GetUniCondStr(objQxUserGroupPotenceEN);
const bolIsExistCondition = await QxUserGroupPotence_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserGroupPotence_CheckUniCond4Update(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN): Promise<boolean>{
const strUniquenessCondition = QxUserGroupPotence_GetUniCondStr4Update(objQxUserGroupPotenceEN);
const bolIsExistCondition = await QxUserGroupPotence_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserGroupPotence_UpdateObjSave(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxUserGroupPotenceEN.sfUpdFldSetStr = objQxUserGroupPotenceEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxUserGroupPotenceEN.mId == 0 || objQxUserGroupPotenceEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxUserGroupPotence_CheckProperty4Update(objQxUserGroupPotenceEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserGroupPotence_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserGroupPotence_CheckUniCond4Update(objQxUserGroupPotenceEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxUserGroupPotence_UpdateRecordAsync(objQxUserGroupPotenceEN);
if (returnBool == true)
{
//QxUserGroupPotence_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxUserGroupPotence_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxUserGroupPotenceEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUserGroupPotence_AddNewRecordWithReturnKeyAsync(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserGroupPotenceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
 * @param objQxUserGroupPotenceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserGroupPotence_UpdateRecordAsync(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUserGroupPotenceEN.sfUpdFldSetStr === undefined || objQxUserGroupPotenceEN.sfUpdFldSetStr === null || objQxUserGroupPotenceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserGroupPotenceEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserGroupPotenceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
 * @param objQxUserGroupPotenceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserGroupPotence_EditRecordExAsync(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxUserGroupPotenceEN.sfUpdFldSetStr === undefined || objQxUserGroupPotenceEN.sfUpdFldSetStr === null || objQxUserGroupPotenceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserGroupPotenceEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserGroupPotenceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
 * @param objQxUserGroupPotenceEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserGroupPotence_UpdateWithConditionAsync(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUserGroupPotenceEN.sfUpdFldSetStr === undefined || objQxUserGroupPotenceEN.sfUpdFldSetStr === null || objQxUserGroupPotenceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserGroupPotenceEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);
objQxUserGroupPotenceEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserGroupPotenceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  async function QxUserGroupPotence_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxUserGroupPotence_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserGroupPotence_ConstructorName, strThisFuncName);
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
export  function QxUserGroupPotence_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxUserGroupPotence_CheckPropertyNew(pobjQxUserGroupPotenceEN: clsQxUserGroupPotenceEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.qxPrjId) === true 
 || pobjQxUserGroupPotenceEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.potenceId) === true 
 || pobjQxUserGroupPotenceEN.potenceId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[权限ID]不能为空(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.userId) == false && GetStrLen(pobjQxUserGroupPotenceEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.userId}(clsQxUserGroupPotenceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.groupId) == false && GetStrLen(pobjQxUserGroupPotenceEN.groupId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[组Id(groupId)]的长度不能超过8(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.groupId}(clsQxUserGroupPotenceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.roleId) == false && GetStrLen(pobjQxUserGroupPotenceEN.roleId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[角色Id(roleId)]的长度不能超过8(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.roleId}(clsQxUserGroupPotenceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.qxPrjId) == false && GetStrLen(pobjQxUserGroupPotenceEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.qxPrjId}(clsQxUserGroupPotenceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.potenceId) == false && GetStrLen(pobjQxUserGroupPotenceEN.potenceId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[权限ID(potenceId)]的长度不能超过8(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.potenceId}(clsQxUserGroupPotenceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.memo) == false && GetStrLen(pobjQxUserGroupPotenceEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.memo}(clsQxUserGroupPotenceBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUserGroupPotenceEN.mId && undefined !== pobjQxUserGroupPotenceEN.mId && tzDataType.isNumber(pobjQxUserGroupPotenceEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(mId)]的值:[${pobjQxUserGroupPotenceEN.mId}], 非法,应该为数值型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.userId) == false && undefined !== pobjQxUserGroupPotenceEN.userId && tzDataType.isString(pobjQxUserGroupPotenceEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjQxUserGroupPotenceEN.userId}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.groupId) == false && undefined !== pobjQxUserGroupPotenceEN.groupId && tzDataType.isString(pobjQxUserGroupPotenceEN.groupId) === false)
{
 throw new Error(`(errid:Watl000414)字段[组Id(groupId)]的值:[${pobjQxUserGroupPotenceEN.groupId}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.roleId) == false && undefined !== pobjQxUserGroupPotenceEN.roleId && tzDataType.isString(pobjQxUserGroupPotenceEN.roleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色Id(roleId)]的值:[${pobjQxUserGroupPotenceEN.roleId}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.qxPrjId) == false && undefined !== pobjQxUserGroupPotenceEN.qxPrjId && tzDataType.isString(pobjQxUserGroupPotenceEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxUserGroupPotenceEN.qxPrjId}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.potenceId) == false && undefined !== pobjQxUserGroupPotenceEN.potenceId && tzDataType.isString(pobjQxUserGroupPotenceEN.potenceId) === false)
{
 throw new Error(`(errid:Watl000414)字段[权限ID(potenceId)]的值:[${pobjQxUserGroupPotenceEN.potenceId}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckPropertyNew0)`);
}
if (null != pobjQxUserGroupPotenceEN.relaMid && undefined !== pobjQxUserGroupPotenceEN.relaMid && tzDataType.isNumber(pobjQxUserGroupPotenceEN.relaMid) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(relaMid)]的值:[${pobjQxUserGroupPotenceEN.relaMid}], 非法,应该为数值型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.memo) == false && undefined !== pobjQxUserGroupPotenceEN.memo && tzDataType.isString(pobjQxUserGroupPotenceEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxUserGroupPotenceEN.memo}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.groupId) == false && pobjQxUserGroupPotenceEN.groupId != '[nuull]' && GetStrLen(pobjQxUserGroupPotenceEN.groupId) !=  8)
{
 throw ("(errid:Watl000415)字段[组Id]作为外键字段,长度应该为8(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.roleId) == false && pobjQxUserGroupPotenceEN.roleId != '[nuull]' && GetStrLen(pobjQxUserGroupPotenceEN.roleId) !=  8)
{
 throw ("(errid:Watl000415)字段[角色Id]作为外键字段,长度应该为8(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.qxPrjId) == false && pobjQxUserGroupPotenceEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxUserGroupPotenceEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.potenceId) == false && pobjQxUserGroupPotenceEN.potenceId != '[nuull]' && GetStrLen(pobjQxUserGroupPotenceEN.potenceId) !=  8)
{
 throw ("(errid:Watl000415)字段[权限ID]作为外键字段,长度应该为8(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUserGroupPotence_CheckProperty4Update(pobjQxUserGroupPotenceEN: clsQxUserGroupPotenceEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.userId) == false && GetStrLen(pobjQxUserGroupPotenceEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.userId}(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.groupId) == false && GetStrLen(pobjQxUserGroupPotenceEN.groupId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[组Id(groupId)]的长度不能超过8(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.groupId}(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.roleId) == false && GetStrLen(pobjQxUserGroupPotenceEN.roleId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[角色Id(roleId)]的长度不能超过8(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.roleId}(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.qxPrjId) == false && GetStrLen(pobjQxUserGroupPotenceEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.qxPrjId}(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.potenceId) == false && GetStrLen(pobjQxUserGroupPotenceEN.potenceId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[权限ID(potenceId)]的长度不能超过8(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.potenceId}(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.memo) == false && GetStrLen(pobjQxUserGroupPotenceEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户权限关系(QxUserGroupPotence))!值:${pobjQxUserGroupPotenceEN.memo}(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUserGroupPotenceEN.mId && undefined !== pobjQxUserGroupPotenceEN.mId && tzDataType.isNumber(pobjQxUserGroupPotenceEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(mId)]的值:[${pobjQxUserGroupPotenceEN.mId}], 非法,应该为数值型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.userId) == false && undefined !== pobjQxUserGroupPotenceEN.userId && tzDataType.isString(pobjQxUserGroupPotenceEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjQxUserGroupPotenceEN.userId}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.groupId) == false && undefined !== pobjQxUserGroupPotenceEN.groupId && tzDataType.isString(pobjQxUserGroupPotenceEN.groupId) === false)
{
 throw new Error(`(errid:Watl000417)字段[组Id(groupId)]的值:[${pobjQxUserGroupPotenceEN.groupId}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.roleId) == false && undefined !== pobjQxUserGroupPotenceEN.roleId && tzDataType.isString(pobjQxUserGroupPotenceEN.roleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色Id(roleId)]的值:[${pobjQxUserGroupPotenceEN.roleId}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.qxPrjId) == false && undefined !== pobjQxUserGroupPotenceEN.qxPrjId && tzDataType.isString(pobjQxUserGroupPotenceEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxUserGroupPotenceEN.qxPrjId}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.potenceId) == false && undefined !== pobjQxUserGroupPotenceEN.potenceId && tzDataType.isString(pobjQxUserGroupPotenceEN.potenceId) === false)
{
 throw new Error(`(errid:Watl000417)字段[权限ID(potenceId)]的值:[${pobjQxUserGroupPotenceEN.potenceId}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (null != pobjQxUserGroupPotenceEN.relaMid && undefined !== pobjQxUserGroupPotenceEN.relaMid && tzDataType.isNumber(pobjQxUserGroupPotenceEN.relaMid) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(relaMid)]的值:[${pobjQxUserGroupPotenceEN.relaMid}], 非法,应该为数值型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.memo) == false && undefined !== pobjQxUserGroupPotenceEN.memo && tzDataType.isString(pobjQxUserGroupPotenceEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxUserGroupPotenceEN.memo}], 非法,应该为字符型(In 用户权限关系(QxUserGroupPotence))!(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxUserGroupPotenceEN.mId 
 || pobjQxUserGroupPotenceEN.mId != null && pobjQxUserGroupPotenceEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.groupId) == false && pobjQxUserGroupPotenceEN.groupId != '[nuull]' && GetStrLen(pobjQxUserGroupPotenceEN.groupId) !=  8)
{
 throw ("(errid:Watl000418)字段[组Id]作为外键字段,长度应该为8(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.roleId) == false && pobjQxUserGroupPotenceEN.roleId != '[nuull]' && GetStrLen(pobjQxUserGroupPotenceEN.roleId) !=  8)
{
 throw ("(errid:Watl000418)字段[角色Id]作为外键字段,长度应该为8(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.qxPrjId) == false && pobjQxUserGroupPotenceEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxUserGroupPotenceEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserGroupPotenceEN.potenceId) == false && pobjQxUserGroupPotenceEN.potenceId != '[nuull]' && GetStrLen(pobjQxUserGroupPotenceEN.potenceId) !=  8)
{
 throw ("(errid:Watl000418)字段[权限ID]作为外键字段,长度应该为8(In 用户权限关系)!(clsQxUserGroupPotenceBL:CheckPropertyNew)");
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
export  function QxUserGroupPotence_GetJSONStrByObj (pobjQxUserGroupPotenceEN: clsQxUserGroupPotenceEN): string
{
pobjQxUserGroupPotenceEN.sfUpdFldSetStr = pobjQxUserGroupPotenceEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUserGroupPotenceEN);
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
export  function QxUserGroupPotence_GetObjLstByJSONStr (strJSON: string): Array<clsQxUserGroupPotenceEN>
{
let arrQxUserGroupPotenceObjLst = new Array<clsQxUserGroupPotenceEN>();
if (strJSON === "")
{
return arrQxUserGroupPotenceObjLst;
}
try
{
arrQxUserGroupPotenceObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUserGroupPotenceObjLst;
}
return arrQxUserGroupPotenceObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUserGroupPotenceObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUserGroupPotence_GetObjLstByJSONObjLst (arrQxUserGroupPotenceObjLstS: Array<clsQxUserGroupPotenceEN>): Array<clsQxUserGroupPotenceEN>
{
const arrQxUserGroupPotenceObjLst = new Array<clsQxUserGroupPotenceEN>();
for (const objInFor of arrQxUserGroupPotenceObjLstS) {
const obj1 = QxUserGroupPotence_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUserGroupPotenceObjLst.push(obj1);
}
return arrQxUserGroupPotenceObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserGroupPotence_GetObjByJSONStr (strJSON: string): clsQxUserGroupPotenceEN
{
let pobjQxUserGroupPotenceEN = new clsQxUserGroupPotenceEN();
if (strJSON === "")
{
return pobjQxUserGroupPotenceEN;
}
try
{
pobjQxUserGroupPotenceEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUserGroupPotenceEN;
}
return pobjQxUserGroupPotenceEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUserGroupPotence_GetCombineCondition(objQxUserGroupPotenceCond: clsQxUserGroupPotenceEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUserGroupPotenceCond.dicFldComparisonOp, clsQxUserGroupPotenceEN.con_mId) == true)
{
const strComparisonOpmId:string = objQxUserGroupPotenceCond.dicFldComparisonOp[clsQxUserGroupPotenceEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsQxUserGroupPotenceEN.con_mId, objQxUserGroupPotenceCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserGroupPotenceCond.dicFldComparisonOp, clsQxUserGroupPotenceEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objQxUserGroupPotenceCond.dicFldComparisonOp[clsQxUserGroupPotenceEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserGroupPotenceEN.con_UserId, objQxUserGroupPotenceCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserGroupPotenceCond.dicFldComparisonOp, clsQxUserGroupPotenceEN.con_GroupId) == true)
{
const strComparisonOpGroupId:string = objQxUserGroupPotenceCond.dicFldComparisonOp[clsQxUserGroupPotenceEN.con_GroupId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserGroupPotenceEN.con_GroupId, objQxUserGroupPotenceCond.groupId, strComparisonOpGroupId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserGroupPotenceCond.dicFldComparisonOp, clsQxUserGroupPotenceEN.con_RoleId) == true)
{
const strComparisonOpRoleId:string = objQxUserGroupPotenceCond.dicFldComparisonOp[clsQxUserGroupPotenceEN.con_RoleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserGroupPotenceEN.con_RoleId, objQxUserGroupPotenceCond.roleId, strComparisonOpRoleId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserGroupPotenceCond.dicFldComparisonOp, clsQxUserGroupPotenceEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxUserGroupPotenceCond.dicFldComparisonOp[clsQxUserGroupPotenceEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserGroupPotenceEN.con_QxPrjId, objQxUserGroupPotenceCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserGroupPotenceCond.dicFldComparisonOp, clsQxUserGroupPotenceEN.con_PotenceId) == true)
{
const strComparisonOpPotenceId:string = objQxUserGroupPotenceCond.dicFldComparisonOp[clsQxUserGroupPotenceEN.con_PotenceId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserGroupPotenceEN.con_PotenceId, objQxUserGroupPotenceCond.potenceId, strComparisonOpPotenceId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserGroupPotenceCond.dicFldComparisonOp, clsQxUserGroupPotenceEN.con_RelaMid) == true)
{
const strComparisonOpRelaMid:string = objQxUserGroupPotenceCond.dicFldComparisonOp[clsQxUserGroupPotenceEN.con_RelaMid];
strWhereCond += Format(" And {0} {2} {1}", clsQxUserGroupPotenceEN.con_RelaMid, objQxUserGroupPotenceCond.relaMid, strComparisonOpRelaMid);
}
if (Object.prototype.hasOwnProperty.call(objQxUserGroupPotenceCond.dicFldComparisonOp, clsQxUserGroupPotenceEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUserGroupPotenceCond.dicFldComparisonOp[clsQxUserGroupPotenceEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserGroupPotenceEN.con_Memo, objQxUserGroupPotenceCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserGroupPotence(用户权限关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strGroupId: 组Id(要求唯一的字段)
 * @param strPotenceId: 权限ID(要求唯一的字段)
 * @param strRoleId: 角色Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserGroupPotence_GetUniCondStr(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUserGroupPotenceEN.userId);
 strWhereCond +=  Format(" and GroupId = '{0}'", objQxUserGroupPotenceEN.groupId);
 strWhereCond +=  Format(" and PotenceId = '{0}'", objQxUserGroupPotenceEN.potenceId);
 strWhereCond +=  Format(" and RoleId = '{0}'", objQxUserGroupPotenceEN.roleId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserGroupPotence(用户权限关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strGroupId: 组Id(要求唯一的字段)
 * @param strPotenceId: 权限ID(要求唯一的字段)
 * @param strRoleId: 角色Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserGroupPotence_GetUniCondStr4Update(objQxUserGroupPotenceEN: clsQxUserGroupPotenceEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objQxUserGroupPotenceEN.mId);
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUserGroupPotenceEN.userId);
 strWhereCond +=  Format(" and GroupId = '{0}'", objQxUserGroupPotenceEN.groupId);
 strWhereCond +=  Format(" and PotenceId = '{0}'", objQxUserGroupPotenceEN.potenceId);
 strWhereCond +=  Format(" and RoleId = '{0}'", objQxUserGroupPotenceEN.roleId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUserGroupPotenceENS:源对象
 * @param objQxUserGroupPotenceENT:目标对象
*/
export  function QxUserGroupPotence_GetObjFromJsonObj(objQxUserGroupPotenceENS: clsQxUserGroupPotenceEN): clsQxUserGroupPotenceEN 
{
 const objQxUserGroupPotenceENT: clsQxUserGroupPotenceEN = new clsQxUserGroupPotenceEN();
ObjectAssign(objQxUserGroupPotenceENT, objQxUserGroupPotenceENS);
 return objQxUserGroupPotenceENT;
}