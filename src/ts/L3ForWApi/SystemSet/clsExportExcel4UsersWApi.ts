
 /**
 * 类名:clsExportExcel4UsersWApi
 * 表名:ExportExcel4Users(00140066)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:27
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 导出Excel用户字段(ExportExcel4Users)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsExportExcel4UsersEN } from "@/ts/L0Entity/SystemSet/clsExportExcel4UsersEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const exportExcel4Users_Controller = "ExportExcel4UsersApi";
 export const exportExcel4Users_ConstructorName = "exportExcel4Users";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ExportExcel4Users_GetObjBymIdAsync(lngmId: number): Promise<clsExportExcel4UsersEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsExportExcel4UsersWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const objExportExcel4Users = ExportExcel4Users_GetObjFromJsonObj(returnObj);
return objExportExcel4Users;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  function ExportExcel4Users_SortFunDefa(a:clsExportExcel4UsersEN , b:clsExportExcel4UsersEN): number 
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
export  function ExportExcel4Users_SortFunDefa2Fld(a:clsExportExcel4UsersEN , b:clsExportExcel4UsersEN): number 
{
if (a.idExportExcel4Users == b.idExportExcel4Users) return a.fieldName.localeCompare(b.fieldName);
else return a.idExportExcel4Users.localeCompare(b.idExportExcel4Users);
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
export  function ExportExcel4Users_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsExportExcel4UsersEN.con_mId:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
return a.mId-b.mId;
}
case clsExportExcel4UsersEN.con_IdExportExcel4Users:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
return a.idExportExcel4Users.localeCompare(b.idExportExcel4Users);
}
case clsExportExcel4UsersEN.con_FieldName:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
return a.fieldName.localeCompare(b.fieldName);
}
case clsExportExcel4UsersEN.con_FieldCnName:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
return a.fieldCnName.localeCompare(b.fieldCnName);
}
case clsExportExcel4UsersEN.con_IsExport:
return (a: clsExportExcel4UsersEN) => {
if (a.isExport == true) return 1;
else return -1
}
case clsExportExcel4UsersEN.con_OrderNum:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
return a.orderNum-b.orderNum;
}
case clsExportExcel4UsersEN.con_UpdDate:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsExportExcel4UsersEN.con_UpdUserId:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsExportExcel4UsersEN.con_Memo:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsExportExcel4UsersEN.con_UserId:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clsExportExcel4UsersEN.con_ViewName:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
if (a.viewName == null) return -1;
if (b.viewName == null) return 1;
return a.viewName.localeCompare(b.viewName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ExportExcel4Users]中不存在!(in ${ exportExcel4Users_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsExportExcel4UsersEN.con_mId:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
return b.mId-a.mId;
}
case clsExportExcel4UsersEN.con_IdExportExcel4Users:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
return b.idExportExcel4Users.localeCompare(a.idExportExcel4Users);
}
case clsExportExcel4UsersEN.con_FieldName:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
return b.fieldName.localeCompare(a.fieldName);
}
case clsExportExcel4UsersEN.con_FieldCnName:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
return b.fieldCnName.localeCompare(a.fieldCnName);
}
case clsExportExcel4UsersEN.con_IsExport:
return (b: clsExportExcel4UsersEN) => {
if (b.isExport == true) return 1;
else return -1
}
case clsExportExcel4UsersEN.con_OrderNum:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
return b.orderNum-a.orderNum;
}
case clsExportExcel4UsersEN.con_UpdDate:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsExportExcel4UsersEN.con_UpdUserId:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsExportExcel4UsersEN.con_Memo:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsExportExcel4UsersEN.con_UserId:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clsExportExcel4UsersEN.con_ViewName:
return (a: clsExportExcel4UsersEN, b: clsExportExcel4UsersEN) => {
if (b.viewName == null) return -1;
if (a.viewName == null) return 1;
return b.viewName.localeCompare(a.viewName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ExportExcel4Users]中不存在!(in ${ exportExcel4Users_ConstructorName}.${ strThisFuncName})`;
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
export  async function ExportExcel4Users_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsExportExcel4UsersEN.con_mId:
return (obj: clsExportExcel4UsersEN) => {
return obj.mId === value;
}
case clsExportExcel4UsersEN.con_IdExportExcel4Users:
return (obj: clsExportExcel4UsersEN) => {
return obj.idExportExcel4Users === value;
}
case clsExportExcel4UsersEN.con_FieldName:
return (obj: clsExportExcel4UsersEN) => {
return obj.fieldName === value;
}
case clsExportExcel4UsersEN.con_FieldCnName:
return (obj: clsExportExcel4UsersEN) => {
return obj.fieldCnName === value;
}
case clsExportExcel4UsersEN.con_IsExport:
return (obj: clsExportExcel4UsersEN) => {
return obj.isExport === value;
}
case clsExportExcel4UsersEN.con_OrderNum:
return (obj: clsExportExcel4UsersEN) => {
return obj.orderNum === value;
}
case clsExportExcel4UsersEN.con_UpdDate:
return (obj: clsExportExcel4UsersEN) => {
return obj.updDate === value;
}
case clsExportExcel4UsersEN.con_UpdUserId:
return (obj: clsExportExcel4UsersEN) => {
return obj.updUserId === value;
}
case clsExportExcel4UsersEN.con_Memo:
return (obj: clsExportExcel4UsersEN) => {
return obj.memo === value;
}
case clsExportExcel4UsersEN.con_UserId:
return (obj: clsExportExcel4UsersEN) => {
return obj.userId === value;
}
case clsExportExcel4UsersEN.con_ViewName:
return (obj: clsExportExcel4UsersEN) => {
return obj.viewName === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ExportExcel4Users]中不存在!(in ${ exportExcel4Users_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ExportExcel4Users__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ExportExcel4Users_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_GetFirstObjAsync(strWhereCond: string): Promise<clsExportExcel4UsersEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const objExportExcel4Users = ExportExcel4Users_GetObjFromJsonObj(returnObj);
return objExportExcel4Users;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_GetObjLstAsync(strWhereCond: string): Promise<Array<clsExportExcel4UsersEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ExportExcel4Users_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsExportExcel4UsersEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ExportExcel4Users_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsExportExcel4UsersEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ExportExcel4Users_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsExportExcel4UsersEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ExportExcel4Users_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsExportExcel4UsersEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsExportExcel4UsersEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ExportExcel4Users_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_DelExportExcel4UserssAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelExportExcel4UserssAsync";
const strAction = "DelExportExcel4Userss";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_DelExportExcel4UserssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelExportExcel4UserssByCondAsync";
const strAction = "DelExportExcel4UserssByCond";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
 * @param objExportExcel4UsersEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ExportExcel4Users_AddNewRecordAsync(objExportExcel4UsersEN: clsExportExcel4UsersEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objExportExcel4UsersEN);
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objExportExcel4UsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_AddNewObjSave(objExportExcel4UsersEN: clsExportExcel4UsersEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ExportExcel4Users_CheckPropertyNew(objExportExcel4UsersEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ exportExcel4Users_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ExportExcel4Users_CheckUniCond4Add(objExportExcel4UsersEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await ExportExcel4Users_AddNewRecordAsync(objExportExcel4UsersEN);
if (returnBool == true)
{
//ExportExcel4Users_ReFreshCache();
}
else
{
const strInfo = `添加[导出Excel用户字段(ExportExcel4Users)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objExportExcel4UsersEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ exportExcel4Users_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ExportExcel4Users_CheckUniCond4Add(objExportExcel4UsersEN: clsExportExcel4UsersEN): Promise<boolean>{
const strUniquenessCondition = ExportExcel4Users_GetUniCondStr(objExportExcel4UsersEN);
const bolIsExistCondition = await ExportExcel4Users_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ExportExcel4Users_CheckUniCond4Update(objExportExcel4UsersEN: clsExportExcel4UsersEN): Promise<boolean>{
const strUniquenessCondition = ExportExcel4Users_GetUniCondStr4Update(objExportExcel4UsersEN);
const bolIsExistCondition = await ExportExcel4Users_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ExportExcel4Users_UpdateObjSave(objExportExcel4UsersEN: clsExportExcel4UsersEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objExportExcel4UsersEN.sfUpdFldSetStr = objExportExcel4UsersEN.updFldString;//设置哪些字段被修改(脏字段)
if (objExportExcel4UsersEN.mId == 0 || objExportExcel4UsersEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ExportExcel4Users_CheckProperty4Update(objExportExcel4UsersEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ exportExcel4Users_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ExportExcel4Users_CheckUniCond4Update(objExportExcel4UsersEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ExportExcel4Users_UpdateRecordAsync(objExportExcel4UsersEN);
if (returnBool == true)
{
//ExportExcel4Users_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ exportExcel4Users_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objExportExcel4UsersEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ExportExcel4Users_AddNewRecordWithReturnKeyAsync(objExportExcel4UsersEN: clsExportExcel4UsersEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objExportExcel4UsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
 * @param objExportExcel4UsersEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ExportExcel4Users_UpdateRecordAsync(objExportExcel4UsersEN: clsExportExcel4UsersEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objExportExcel4UsersEN.sfUpdFldSetStr === undefined || objExportExcel4UsersEN.sfUpdFldSetStr === null || objExportExcel4UsersEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objExportExcel4UsersEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objExportExcel4UsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
 * @param objExportExcel4UsersEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ExportExcel4Users_EditRecordExAsync(objExportExcel4UsersEN: clsExportExcel4UsersEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objExportExcel4UsersEN.sfUpdFldSetStr === undefined || objExportExcel4UsersEN.sfUpdFldSetStr === null || objExportExcel4UsersEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objExportExcel4UsersEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objExportExcel4UsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
 * @param objExportExcel4UsersEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ExportExcel4Users_UpdateWithConditionAsync(objExportExcel4UsersEN: clsExportExcel4UsersEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objExportExcel4UsersEN.sfUpdFldSetStr === undefined || objExportExcel4UsersEN.sfUpdFldSetStr === null || objExportExcel4UsersEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objExportExcel4UsersEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);
objExportExcel4UsersEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objExportExcel4UsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  async function ExportExcel4Users_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(exportExcel4Users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, exportExcel4Users_ConstructorName, strThisFuncName);
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
export  function ExportExcel4Users_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ExportExcel4Users_CheckPropertyNew(pobjExportExcel4UsersEN: clsExportExcel4UsersEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjExportExcel4UsersEN.idExportExcel4Users) === true )
{
 throw new Error(`(errid:Watl000411)字段[导出Excel用户字段流水号]不能为空(In 导出Excel用户字段)!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.fieldName) === true )
{
 throw new Error(`(errid:Watl000411)字段[字段名]不能为空(In 导出Excel用户字段)!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.fieldCnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[字段中文名称]不能为空(In 导出Excel用户字段)!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (null === pobjExportExcel4UsersEN.isExport 
 || pobjExportExcel4UsersEN.isExport != null && pobjExportExcel4UsersEN.isExport.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否导出]不能为空(In 导出Excel用户字段)!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (null === pobjExportExcel4UsersEN.orderNum 
 || pobjExportExcel4UsersEN.orderNum != null && pobjExportExcel4UsersEN.orderNum.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[排序号]不能为空(In 导出Excel用户字段)!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjExportExcel4UsersEN.idExportExcel4Users) == false && GetStrLen(pobjExportExcel4UsersEN.idExportExcel4Users) > 8)
{
 throw new Error(`(errid:Watl000413)字段[导出Excel用户字段流水号(idExportExcel4Users)]的长度不能超过8(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.idExportExcel4Users}(clsExportExcel4UsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.fieldName) == false && GetStrLen(pobjExportExcel4UsersEN.fieldName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[字段名(fieldName)]的长度不能超过50(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.fieldName}(clsExportExcel4UsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.fieldCnName) == false && GetStrLen(pobjExportExcel4UsersEN.fieldCnName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[字段中文名称(fieldCnName)]的长度不能超过50(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.fieldCnName}(clsExportExcel4UsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.updDate) == false && GetStrLen(pobjExportExcel4UsersEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.updDate}(clsExportExcel4UsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.updUserId) == false && GetStrLen(pobjExportExcel4UsersEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.updUserId}(clsExportExcel4UsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.memo) == false && GetStrLen(pobjExportExcel4UsersEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.memo}(clsExportExcel4UsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.userId) == false && GetStrLen(pobjExportExcel4UsersEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.userId}(clsExportExcel4UsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.viewName) == false && GetStrLen(pobjExportExcel4UsersEN.viewName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[界面名称(viewName)]的长度不能超过100(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.viewName}(clsExportExcel4UsersBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjExportExcel4UsersEN.mId && undefined !== pobjExportExcel4UsersEN.mId && tzDataType.isNumber(pobjExportExcel4UsersEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(mId)]的值:[${pobjExportExcel4UsersEN.mId}], 非法,应该为数值型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.idExportExcel4Users) == false && undefined !== pobjExportExcel4UsersEN.idExportExcel4Users && tzDataType.isString(pobjExportExcel4UsersEN.idExportExcel4Users) === false)
{
 throw new Error(`(errid:Watl000414)字段[导出Excel用户字段流水号(idExportExcel4Users)]的值:[${pobjExportExcel4UsersEN.idExportExcel4Users}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.fieldName) == false && undefined !== pobjExportExcel4UsersEN.fieldName && tzDataType.isString(pobjExportExcel4UsersEN.fieldName) === false)
{
 throw new Error(`(errid:Watl000414)字段[字段名(fieldName)]的值:[${pobjExportExcel4UsersEN.fieldName}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.fieldCnName) == false && undefined !== pobjExportExcel4UsersEN.fieldCnName && tzDataType.isString(pobjExportExcel4UsersEN.fieldCnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[字段中文名称(fieldCnName)]的值:[${pobjExportExcel4UsersEN.fieldCnName}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (null != pobjExportExcel4UsersEN.isExport && undefined !== pobjExportExcel4UsersEN.isExport && tzDataType.isBoolean(pobjExportExcel4UsersEN.isExport) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否导出(isExport)]的值:[${pobjExportExcel4UsersEN.isExport}], 非法,应该为布尔型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (null != pobjExportExcel4UsersEN.orderNum && undefined !== pobjExportExcel4UsersEN.orderNum && tzDataType.isNumber(pobjExportExcel4UsersEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[排序号(orderNum)]的值:[${pobjExportExcel4UsersEN.orderNum}], 非法,应该为数值型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.updDate) == false && undefined !== pobjExportExcel4UsersEN.updDate && tzDataType.isString(pobjExportExcel4UsersEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjExportExcel4UsersEN.updDate}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.updUserId) == false && undefined !== pobjExportExcel4UsersEN.updUserId && tzDataType.isString(pobjExportExcel4UsersEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjExportExcel4UsersEN.updUserId}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.memo) == false && undefined !== pobjExportExcel4UsersEN.memo && tzDataType.isString(pobjExportExcel4UsersEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjExportExcel4UsersEN.memo}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.userId) == false && undefined !== pobjExportExcel4UsersEN.userId && tzDataType.isString(pobjExportExcel4UsersEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjExportExcel4UsersEN.userId}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.viewName) == false && undefined !== pobjExportExcel4UsersEN.viewName && tzDataType.isString(pobjExportExcel4UsersEN.viewName) === false)
{
 throw new Error(`(errid:Watl000414)字段[界面名称(viewName)]的值:[${pobjExportExcel4UsersEN.viewName}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ExportExcel4Users_CheckProperty4Update(pobjExportExcel4UsersEN: clsExportExcel4UsersEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjExportExcel4UsersEN.idExportExcel4Users) == false && GetStrLen(pobjExportExcel4UsersEN.idExportExcel4Users) > 8)
{
 throw new Error(`(errid:Watl000416)字段[导出Excel用户字段流水号(idExportExcel4Users)]的长度不能超过8(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.idExportExcel4Users}(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.fieldName) == false && GetStrLen(pobjExportExcel4UsersEN.fieldName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[字段名(fieldName)]的长度不能超过50(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.fieldName}(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.fieldCnName) == false && GetStrLen(pobjExportExcel4UsersEN.fieldCnName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[字段中文名称(fieldCnName)]的长度不能超过50(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.fieldCnName}(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.updDate) == false && GetStrLen(pobjExportExcel4UsersEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.updDate}(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.updUserId) == false && GetStrLen(pobjExportExcel4UsersEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.updUserId}(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.memo) == false && GetStrLen(pobjExportExcel4UsersEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.memo}(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.userId) == false && GetStrLen(pobjExportExcel4UsersEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.userId}(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.viewName) == false && GetStrLen(pobjExportExcel4UsersEN.viewName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[界面名称(viewName)]的长度不能超过100(In 导出Excel用户字段(ExportExcel4Users))!值:${pobjExportExcel4UsersEN.viewName}(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjExportExcel4UsersEN.mId && undefined !== pobjExportExcel4UsersEN.mId && tzDataType.isNumber(pobjExportExcel4UsersEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(mId)]的值:[${pobjExportExcel4UsersEN.mId}], 非法,应该为数值型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.idExportExcel4Users) == false && undefined !== pobjExportExcel4UsersEN.idExportExcel4Users && tzDataType.isString(pobjExportExcel4UsersEN.idExportExcel4Users) === false)
{
 throw new Error(`(errid:Watl000417)字段[导出Excel用户字段流水号(idExportExcel4Users)]的值:[${pobjExportExcel4UsersEN.idExportExcel4Users}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.fieldName) == false && undefined !== pobjExportExcel4UsersEN.fieldName && tzDataType.isString(pobjExportExcel4UsersEN.fieldName) === false)
{
 throw new Error(`(errid:Watl000417)字段[字段名(fieldName)]的值:[${pobjExportExcel4UsersEN.fieldName}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.fieldCnName) == false && undefined !== pobjExportExcel4UsersEN.fieldCnName && tzDataType.isString(pobjExportExcel4UsersEN.fieldCnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[字段中文名称(fieldCnName)]的值:[${pobjExportExcel4UsersEN.fieldCnName}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (null != pobjExportExcel4UsersEN.isExport && undefined !== pobjExportExcel4UsersEN.isExport && tzDataType.isBoolean(pobjExportExcel4UsersEN.isExport) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否导出(isExport)]的值:[${pobjExportExcel4UsersEN.isExport}], 非法,应该为布尔型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (null != pobjExportExcel4UsersEN.orderNum && undefined !== pobjExportExcel4UsersEN.orderNum && tzDataType.isNumber(pobjExportExcel4UsersEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[排序号(orderNum)]的值:[${pobjExportExcel4UsersEN.orderNum}], 非法,应该为数值型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.updDate) == false && undefined !== pobjExportExcel4UsersEN.updDate && tzDataType.isString(pobjExportExcel4UsersEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjExportExcel4UsersEN.updDate}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.updUserId) == false && undefined !== pobjExportExcel4UsersEN.updUserId && tzDataType.isString(pobjExportExcel4UsersEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjExportExcel4UsersEN.updUserId}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.memo) == false && undefined !== pobjExportExcel4UsersEN.memo && tzDataType.isString(pobjExportExcel4UsersEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjExportExcel4UsersEN.memo}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.userId) == false && undefined !== pobjExportExcel4UsersEN.userId && tzDataType.isString(pobjExportExcel4UsersEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjExportExcel4UsersEN.userId}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjExportExcel4UsersEN.viewName) == false && undefined !== pobjExportExcel4UsersEN.viewName && tzDataType.isString(pobjExportExcel4UsersEN.viewName) === false)
{
 throw new Error(`(errid:Watl000417)字段[界面名称(viewName)]的值:[${pobjExportExcel4UsersEN.viewName}], 非法,应该为字符型(In 导出Excel用户字段(ExportExcel4Users))!(clsExportExcel4UsersBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjExportExcel4UsersEN.mId 
 || pobjExportExcel4UsersEN.mId != null && pobjExportExcel4UsersEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 导出Excel用户字段)!(clsExportExcel4UsersBL:CheckProperty4Update)`);
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
export  function ExportExcel4Users_GetJSONStrByObj (pobjExportExcel4UsersEN: clsExportExcel4UsersEN): string
{
pobjExportExcel4UsersEN.sfUpdFldSetStr = pobjExportExcel4UsersEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjExportExcel4UsersEN);
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
export  function ExportExcel4Users_GetObjLstByJSONStr (strJSON: string): Array<clsExportExcel4UsersEN>
{
let arrExportExcel4UsersObjLst = new Array<clsExportExcel4UsersEN>();
if (strJSON === "")
{
return arrExportExcel4UsersObjLst;
}
try
{
arrExportExcel4UsersObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrExportExcel4UsersObjLst;
}
return arrExportExcel4UsersObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrExportExcel4UsersObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ExportExcel4Users_GetObjLstByJSONObjLst (arrExportExcel4UsersObjLstS: Array<clsExportExcel4UsersEN>): Array<clsExportExcel4UsersEN>
{
const arrExportExcel4UsersObjLst = new Array<clsExportExcel4UsersEN>();
for (const objInFor of arrExportExcel4UsersObjLstS) {
const obj1 = ExportExcel4Users_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrExportExcel4UsersObjLst.push(obj1);
}
return arrExportExcel4UsersObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ExportExcel4Users_GetObjByJSONStr (strJSON: string): clsExportExcel4UsersEN
{
let pobjExportExcel4UsersEN = new clsExportExcel4UsersEN();
if (strJSON === "")
{
return pobjExportExcel4UsersEN;
}
try
{
pobjExportExcel4UsersEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjExportExcel4UsersEN;
}
return pobjExportExcel4UsersEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ExportExcel4Users_GetCombineCondition(objExportExcel4UsersCond: clsExportExcel4UsersEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_mId) == true)
{
const strComparisonOpmId:string = objExportExcel4UsersCond.dicFldComparisonOp[clsExportExcel4UsersEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsExportExcel4UsersEN.con_mId, objExportExcel4UsersCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_IdExportExcel4Users) == true)
{
const strComparisonOpIdExportExcel4Users:string = objExportExcel4UsersCond.dicFldComparisonOp[clsExportExcel4UsersEN.con_IdExportExcel4Users];
strWhereCond += Format(" And {0} {2} '{1}'", clsExportExcel4UsersEN.con_IdExportExcel4Users, objExportExcel4UsersCond.idExportExcel4Users, strComparisonOpIdExportExcel4Users);
}
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_FieldName) == true)
{
const strComparisonOpFieldName:string = objExportExcel4UsersCond.dicFldComparisonOp[clsExportExcel4UsersEN.con_FieldName];
strWhereCond += Format(" And {0} {2} '{1}'", clsExportExcel4UsersEN.con_FieldName, objExportExcel4UsersCond.fieldName, strComparisonOpFieldName);
}
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_FieldCnName) == true)
{
const strComparisonOpFieldCnName:string = objExportExcel4UsersCond.dicFldComparisonOp[clsExportExcel4UsersEN.con_FieldCnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsExportExcel4UsersEN.con_FieldCnName, objExportExcel4UsersCond.fieldCnName, strComparisonOpFieldCnName);
}
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_IsExport) == true)
{
if (objExportExcel4UsersCond.isExport == true)
{
strWhereCond += Format(" And {0} = '1'", clsExportExcel4UsersEN.con_IsExport);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsExportExcel4UsersEN.con_IsExport);
}
}
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objExportExcel4UsersCond.dicFldComparisonOp[clsExportExcel4UsersEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsExportExcel4UsersEN.con_OrderNum, objExportExcel4UsersCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objExportExcel4UsersCond.dicFldComparisonOp[clsExportExcel4UsersEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsExportExcel4UsersEN.con_UpdDate, objExportExcel4UsersCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objExportExcel4UsersCond.dicFldComparisonOp[clsExportExcel4UsersEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsExportExcel4UsersEN.con_UpdUserId, objExportExcel4UsersCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objExportExcel4UsersCond.dicFldComparisonOp[clsExportExcel4UsersEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsExportExcel4UsersEN.con_Memo, objExportExcel4UsersCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objExportExcel4UsersCond.dicFldComparisonOp[clsExportExcel4UsersEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsExportExcel4UsersEN.con_UserId, objExportExcel4UsersCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objExportExcel4UsersCond.dicFldComparisonOp, clsExportExcel4UsersEN.con_ViewName) == true)
{
const strComparisonOpViewName:string = objExportExcel4UsersCond.dicFldComparisonOp[clsExportExcel4UsersEN.con_ViewName];
strWhereCond += Format(" And {0} {2} '{1}'", clsExportExcel4UsersEN.con_ViewName, objExportExcel4UsersCond.viewName, strComparisonOpViewName);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ExportExcel4Users(导出Excel用户字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdExportExcel4Users: 导出Excel用户字段流水号(要求唯一的字段)
 * @param strFieldName: 字段名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ExportExcel4Users_GetUniCondStr(objExportExcel4UsersEN: clsExportExcel4UsersEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and IdExportExcel4Users = '{0}'", objExportExcel4UsersEN.idExportExcel4Users);
 strWhereCond +=  Format(" and FieldName = '{0}'", objExportExcel4UsersEN.fieldName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ExportExcel4Users(导出Excel用户字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdExportExcel4Users: 导出Excel用户字段流水号(要求唯一的字段)
 * @param strFieldName: 字段名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ExportExcel4Users_GetUniCondStr4Update(objExportExcel4UsersEN: clsExportExcel4UsersEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objExportExcel4UsersEN.mId);
 strWhereCond +=  Format(" and IdExportExcel4Users = '{0}'", objExportExcel4UsersEN.idExportExcel4Users);
 strWhereCond +=  Format(" and FieldName = '{0}'", objExportExcel4UsersEN.fieldName);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objExportExcel4UsersENS:源对象
 * @param objExportExcel4UsersENT:目标对象
*/
export  function ExportExcel4Users_GetObjFromJsonObj(objExportExcel4UsersENS: clsExportExcel4UsersEN): clsExportExcel4UsersEN 
{
 const objExportExcel4UsersENT: clsExportExcel4UsersEN = new clsExportExcel4UsersEN();
ObjectAssign(objExportExcel4UsersENT, objExportExcel4UsersENS);
 return objExportExcel4UsersENT;
}