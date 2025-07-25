
 /**
 * 类名:clsvQxDepartmentInfoByUserNumWApi
 * 表名:vQxDepartmentInfoByUserNum(00140082)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:21:54
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
 * v部门信息By用户数(vQxDepartmentInfoByUserNum)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvQxDepartmentInfoByUserNumEN } from "@/ts/L0Entity/UserManage_GP/clsvQxDepartmentInfoByUserNumEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vQxDepartmentInfoByUserNum_Controller = "vQxDepartmentInfoByUserNumApi";
 export const vQxDepartmentInfoByUserNum_ConstructorName = "vQxDepartmentInfoByUserNum";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDepartmentId:关键字
 * @returns 对象
 **/
export  async function vQxDepartmentInfoByUserNum_GetObjByDepartmentIdAsync(strDepartmentId: string): Promise<clsvQxDepartmentInfoByUserNumEN|null>  
{
const strThisFuncName = "GetObjByDepartmentIdAsync";

if (IsNullOrEmpty(strDepartmentId) == true)
{
  const strMsg = Format("参数:[strDepartmentId]不能为空!(In clsvQxDepartmentInfoByUserNumWApi.GetObjByDepartmentIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByDepartmentId";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strDepartmentId,
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
const objvQxDepartmentInfoByUserNum = vQxDepartmentInfoByUserNum_GetObjFromJsonObj(returnObj);
return objvQxDepartmentInfoByUserNum;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByDepartmentIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByDepartmentIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxDepartmentInfoByUserNum_SortFunDefa(a:clsvQxDepartmentInfoByUserNumEN , b:clsvQxDepartmentInfoByUserNumEN): number 
{
return a.departmentId.localeCompare(b.departmentId);
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
export  function vQxDepartmentInfoByUserNum_SortFunDefa2Fld(a:clsvQxDepartmentInfoByUserNumEN , b:clsvQxDepartmentInfoByUserNumEN): number 
{
if (a.departmentName == b.departmentName) return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
else return a.departmentName.localeCompare(b.departmentName);
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
export  function vQxDepartmentInfoByUserNum_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentId:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
return a.departmentId.localeCompare(b.departmentId);
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentName:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
return a.departmentName.localeCompare(b.departmentName);
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentAbbrName:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (a.departmentAbbrName == null) return -1;
if (b.departmentAbbrName == null) return 1;
return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeId:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (a.departmentTypeId == null) return -1;
if (b.departmentTypeId == null) return 1;
return a.departmentTypeId.localeCompare(b.departmentTypeId);
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeName:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (a.departmentTypeName == null) return -1;
if (b.departmentTypeName == null) return 1;
return a.departmentTypeName.localeCompare(b.departmentTypeName);
}
case clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentId:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (a.upDepartmentId == null) return -1;
if (b.upDepartmentId == null) return 1;
return a.upDepartmentId.localeCompare(b.upDepartmentId);
}
case clsvQxDepartmentInfoByUserNumEN.con_OrderNum:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
return a.orderNum-b.orderNum;
}
case clsvQxDepartmentInfoByUserNumEN.con_InUse:
return (a: clsvQxDepartmentInfoByUserNumEN) => {
if (a.inUse == true) return 1;
else return -1
}
case clsvQxDepartmentInfoByUserNumEN.con_Memo:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvQxDepartmentInfoByUserNumEN.con_UserNum:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
return a.userNum-b.userNum;
}
case clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentName:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (a.upDepartmentName == null) return -1;
if (b.upDepartmentName == null) return 1;
return a.upDepartmentName.localeCompare(b.upDepartmentName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxDepartmentInfoByUserNum]中不存在!(in ${ vQxDepartmentInfoByUserNum_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentId:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
return b.departmentId.localeCompare(a.departmentId);
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentName:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
return b.departmentName.localeCompare(a.departmentName);
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentAbbrName:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (b.departmentAbbrName == null) return -1;
if (a.departmentAbbrName == null) return 1;
return b.departmentAbbrName.localeCompare(a.departmentAbbrName);
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeId:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (b.departmentTypeId == null) return -1;
if (a.departmentTypeId == null) return 1;
return b.departmentTypeId.localeCompare(a.departmentTypeId);
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeName:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (b.departmentTypeName == null) return -1;
if (a.departmentTypeName == null) return 1;
return b.departmentTypeName.localeCompare(a.departmentTypeName);
}
case clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentId:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (b.upDepartmentId == null) return -1;
if (a.upDepartmentId == null) return 1;
return b.upDepartmentId.localeCompare(a.upDepartmentId);
}
case clsvQxDepartmentInfoByUserNumEN.con_OrderNum:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
return b.orderNum-a.orderNum;
}
case clsvQxDepartmentInfoByUserNumEN.con_InUse:
return (b: clsvQxDepartmentInfoByUserNumEN) => {
if (b.inUse == true) return 1;
else return -1
}
case clsvQxDepartmentInfoByUserNumEN.con_Memo:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvQxDepartmentInfoByUserNumEN.con_UserNum:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
return b.userNum-a.userNum;
}
case clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentName:
return (a: clsvQxDepartmentInfoByUserNumEN, b: clsvQxDepartmentInfoByUserNumEN) => {
if (b.upDepartmentName == null) return -1;
if (a.upDepartmentName == null) return 1;
return b.upDepartmentName.localeCompare(a.upDepartmentName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxDepartmentInfoByUserNum]中不存在!(in ${ vQxDepartmentInfoByUserNum_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByDepartmentIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vQxDepartmentInfoByUserNum_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentId:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.departmentId === value;
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentName:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.departmentName === value;
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentAbbrName:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.departmentAbbrName === value;
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeId:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.departmentTypeId === value;
}
case clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeName:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.departmentTypeName === value;
}
case clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentId:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.upDepartmentId === value;
}
case clsvQxDepartmentInfoByUserNumEN.con_OrderNum:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.orderNum === value;
}
case clsvQxDepartmentInfoByUserNumEN.con_InUse:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.inUse === value;
}
case clsvQxDepartmentInfoByUserNumEN.con_Memo:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.memo === value;
}
case clsvQxDepartmentInfoByUserNumEN.con_UserNum:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.userNum === value;
}
case clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentName:
return (obj: clsvQxDepartmentInfoByUserNumEN) => {
return obj.upDepartmentName === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxDepartmentInfoByUserNum]中不存在!(in ${ vQxDepartmentInfoByUserNum_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vQxDepartmentInfoByUserNum__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQxDepartmentInfoByUserNum_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxDepartmentInfoByUserNum_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxDepartmentInfoByUserNum_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxDepartmentInfoByUserNum_GetFirstObjAsync(strWhereCond: string): Promise<clsvQxDepartmentInfoByUserNumEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

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
const objvQxDepartmentInfoByUserNum = vQxDepartmentInfoByUserNum_GetObjFromJsonObj(returnObj);
return objvQxDepartmentInfoByUserNum;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxDepartmentInfoByUserNum_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQxDepartmentInfoByUserNumEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxDepartmentInfoByUserNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
 * @param arrDepartmentId:关键字列表
 * @returns 对象列表
 **/
export  async function vQxDepartmentInfoByUserNum_GetObjLstByDepartmentIdLstAsync(arrDepartmentId: Array<string>): Promise<Array<clsvQxDepartmentInfoByUserNumEN>>  
{
const strThisFuncName = "GetObjLstByDepartmentIdLstAsync";
const strAction = "GetObjLstByDepartmentIdLst";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrDepartmentId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxDepartmentInfoByUserNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByDepartmentIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vQxDepartmentInfoByUserNum_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQxDepartmentInfoByUserNumEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxDepartmentInfoByUserNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxDepartmentInfoByUserNum_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQxDepartmentInfoByUserNumEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxDepartmentInfoByUserNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxDepartmentInfoByUserNum_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQxDepartmentInfoByUserNumEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQxDepartmentInfoByUserNumEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxDepartmentInfoByUserNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxDepartmentInfoByUserNum_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
 * @param strDepartmentId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQxDepartmentInfoByUserNum_IsExistAsync(strDepartmentId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strDepartmentId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxDepartmentInfoByUserNum_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(vQxDepartmentInfoByUserNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxDepartmentInfoByUserNum_ConstructorName, strThisFuncName);
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
export  function vQxDepartmentInfoByUserNum_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQxDepartmentInfoByUserNum_(objDiv: HTMLDivElement, strDdlName: string )
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
const strCondition = `1=1`;
const arrObjLstSel = await vQxDepartmentInfoByUserNum_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQxDepartmentInfoByUserNumEN.con_DepartmentId, clsvQxDepartmentInfoByUserNumEN.con_DepartmentName, "v部门信息By用户数...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQxDepartmentInfoByUserNum_GetArrvQxDepartmentInfoByUserNum()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrvQxDepartmentInfoByUserNum = new Array<clsvQxDepartmentInfoByUserNumEN>();
const strCondition = `1=1`;
const arrObjLstSel = await vQxDepartmentInfoByUserNum_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsvQxDepartmentInfoByUserNumEN();
obj0.departmentId = '0';
obj0.departmentName = '选v部门信息By用户数...';
arrvQxDepartmentInfoByUserNum.push(obj0);
arrObjLstSel.forEach(x => arrvQxDepartmentInfoByUserNum.push(x));
return arrvQxDepartmentInfoByUserNum;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxDepartmentInfoByUserNum_GetJSONStrByObj (pobjvQxDepartmentInfoByUserNumEN: clsvQxDepartmentInfoByUserNumEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQxDepartmentInfoByUserNumEN);
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
export  function vQxDepartmentInfoByUserNum_GetObjLstByJSONStr (strJSON: string): Array<clsvQxDepartmentInfoByUserNumEN>
{
let arrvQxDepartmentInfoByUserNumObjLst = new Array<clsvQxDepartmentInfoByUserNumEN>();
if (strJSON === "")
{
return arrvQxDepartmentInfoByUserNumObjLst;
}
try
{
arrvQxDepartmentInfoByUserNumObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQxDepartmentInfoByUserNumObjLst;
}
return arrvQxDepartmentInfoByUserNumObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQxDepartmentInfoByUserNumObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQxDepartmentInfoByUserNum_GetObjLstByJSONObjLst (arrvQxDepartmentInfoByUserNumObjLstS: Array<clsvQxDepartmentInfoByUserNumEN>): Array<clsvQxDepartmentInfoByUserNumEN>
{
const arrvQxDepartmentInfoByUserNumObjLst = new Array<clsvQxDepartmentInfoByUserNumEN>();
for (const objInFor of arrvQxDepartmentInfoByUserNumObjLstS) {
const obj1 = vQxDepartmentInfoByUserNum_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQxDepartmentInfoByUserNumObjLst.push(obj1);
}
return arrvQxDepartmentInfoByUserNumObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxDepartmentInfoByUserNum_GetObjByJSONStr (strJSON: string): clsvQxDepartmentInfoByUserNumEN
{
let pobjvQxDepartmentInfoByUserNumEN = new clsvQxDepartmentInfoByUserNumEN();
if (strJSON === "")
{
return pobjvQxDepartmentInfoByUserNumEN;
}
try
{
pobjvQxDepartmentInfoByUserNumEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQxDepartmentInfoByUserNumEN;
}
return pobjvQxDepartmentInfoByUserNumEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQxDepartmentInfoByUserNum_GetCombineCondition(objvQxDepartmentInfoByUserNumCond: clsvQxDepartmentInfoByUserNumEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_DepartmentId) == true)
{
const strComparisonOpDepartmentId:string = objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp[clsvQxDepartmentInfoByUserNumEN.con_DepartmentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxDepartmentInfoByUserNumEN.con_DepartmentId, objvQxDepartmentInfoByUserNumCond.departmentId, strComparisonOpDepartmentId);
}
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_DepartmentName) == true)
{
const strComparisonOpDepartmentName:string = objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp[clsvQxDepartmentInfoByUserNumEN.con_DepartmentName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxDepartmentInfoByUserNumEN.con_DepartmentName, objvQxDepartmentInfoByUserNumCond.departmentName, strComparisonOpDepartmentName);
}
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_DepartmentAbbrName) == true)
{
const strComparisonOpDepartmentAbbrName:string = objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp[clsvQxDepartmentInfoByUserNumEN.con_DepartmentAbbrName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxDepartmentInfoByUserNumEN.con_DepartmentAbbrName, objvQxDepartmentInfoByUserNumCond.departmentAbbrName, strComparisonOpDepartmentAbbrName);
}
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeId) == true)
{
const strComparisonOpDepartmentTypeId:string = objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp[clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeId, objvQxDepartmentInfoByUserNumCond.departmentTypeId, strComparisonOpDepartmentTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeName) == true)
{
const strComparisonOpDepartmentTypeName:string = objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp[clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxDepartmentInfoByUserNumEN.con_DepartmentTypeName, objvQxDepartmentInfoByUserNumCond.departmentTypeName, strComparisonOpDepartmentTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentId) == true)
{
const strComparisonOpUpDepartmentId:string = objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp[clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentId, objvQxDepartmentInfoByUserNumCond.upDepartmentId, strComparisonOpUpDepartmentId);
}
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp[clsvQxDepartmentInfoByUserNumEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQxDepartmentInfoByUserNumEN.con_OrderNum, objvQxDepartmentInfoByUserNumCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_InUse) == true)
{
if (objvQxDepartmentInfoByUserNumCond.inUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxDepartmentInfoByUserNumEN.con_InUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxDepartmentInfoByUserNumEN.con_InUse);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp[clsvQxDepartmentInfoByUserNumEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxDepartmentInfoByUserNumEN.con_Memo, objvQxDepartmentInfoByUserNumCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_UserNum) == true)
{
const strComparisonOpUserNum:string = objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp[clsvQxDepartmentInfoByUserNumEN.con_UserNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQxDepartmentInfoByUserNumEN.con_UserNum, objvQxDepartmentInfoByUserNumCond.userNum, strComparisonOpUserNum);
}
if (Object.prototype.hasOwnProperty.call(objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp, clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentName) == true)
{
const strComparisonOpUpDepartmentName:string = objvQxDepartmentInfoByUserNumCond.dicFldComparisonOp[clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxDepartmentInfoByUserNumEN.con_UpDepartmentName, objvQxDepartmentInfoByUserNumCond.upDepartmentName, strComparisonOpUpDepartmentName);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQxDepartmentInfoByUserNumENS:源对象
 * @param objvQxDepartmentInfoByUserNumENT:目标对象
*/
export  function vQxDepartmentInfoByUserNum_GetObjFromJsonObj(objvQxDepartmentInfoByUserNumENS: clsvQxDepartmentInfoByUserNumEN): clsvQxDepartmentInfoByUserNumEN 
{
 const objvQxDepartmentInfoByUserNumENT: clsvQxDepartmentInfoByUserNumEN = new clsvQxDepartmentInfoByUserNumEN();
ObjectAssign(objvQxDepartmentInfoByUserNumENT, objvQxDepartmentInfoByUserNumENS);
 return objvQxDepartmentInfoByUserNumENT;
}