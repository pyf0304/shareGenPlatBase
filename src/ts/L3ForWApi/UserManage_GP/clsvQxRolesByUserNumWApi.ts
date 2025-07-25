
 /**
 * 类名:clsvQxRolesByUserNumWApi
 * 表名:vQxRolesByUserNum(00140081)
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
 * v角色By用户数(vQxRolesByUserNum)
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
import { clsvQxRolesByUserNumEN } from "@/ts/L0Entity/UserManage_GP/clsvQxRolesByUserNumEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vQxRolesByUserNum_Controller = "vQxRolesByUserNumApi";
 export const vQxRolesByUserNum_ConstructorName = "vQxRolesByUserNum";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRoleId:关键字
 * @returns 对象
 **/
export  async function vQxRolesByUserNum_GetObjByRoleIdAsync(strRoleId: string): Promise<clsvQxRolesByUserNumEN|null>  
{
const strThisFuncName = "GetObjByRoleIdAsync";

if (IsNullOrEmpty(strRoleId) == true)
{
  const strMsg = Format("参数:[strRoleId]不能为空!(In clsvQxRolesByUserNumWApi.GetObjByRoleIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsvQxRolesByUserNumWApi.GetObjByRoleIdAsync)", strRoleId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByRoleId";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRoleId,
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
const objvQxRolesByUserNum = vQxRolesByUserNum_GetObjFromJsonObj(returnObj);
return objvQxRolesByUserNum;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByRoleIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByRoleIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxRolesByUserNum_SortFunDefa(a:clsvQxRolesByUserNumEN , b:clsvQxRolesByUserNumEN): number 
{
return a.roleId.localeCompare(b.roleId);
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
export  function vQxRolesByUserNum_SortFunDefa2Fld(a:clsvQxRolesByUserNumEN , b:clsvQxRolesByUserNumEN): number 
{
if (a.roleName == b.roleName) return a.roleENName.localeCompare(b.roleENName);
else return a.roleName.localeCompare(b.roleName);
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
export  function vQxRolesByUserNum_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQxRolesByUserNumEN.con_RoleId:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
return a.roleId.localeCompare(b.roleId);
}
case clsvQxRolesByUserNumEN.con_RoleName:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
return a.roleName.localeCompare(b.roleName);
}
case clsvQxRolesByUserNumEN.con_RoleENName:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (a.roleENName == null) return -1;
if (b.roleENName == null) return 1;
return a.roleENName.localeCompare(b.roleENName);
}
case clsvQxRolesByUserNumEN.con_RoleIndex:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
return a.roleIndex-b.roleIndex;
}
case clsvQxRolesByUserNumEN.con_QxPrjId:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (a.qxPrjId == null) return -1;
if (b.qxPrjId == null) return 1;
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsvQxRolesByUserNumEN.con_PrjName:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (a.prjName == null) return -1;
if (b.prjName == null) return 1;
return a.prjName.localeCompare(b.prjName);
}
case clsvQxRolesByUserNumEN.con_IsInUse:
return (a: clsvQxRolesByUserNumEN) => {
if (a.isInUse == true) return 1;
else return -1
}
case clsvQxRolesByUserNumEN.con_UpdDate:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvQxRolesByUserNumEN.con_UpdUserId:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsvQxRolesByUserNumEN.con_Memo:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvQxRolesByUserNumEN.con_UserNum:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
return a.userNum-b.userNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxRolesByUserNum]中不存在!(in ${ vQxRolesByUserNum_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQxRolesByUserNumEN.con_RoleId:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
return b.roleId.localeCompare(a.roleId);
}
case clsvQxRolesByUserNumEN.con_RoleName:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
return b.roleName.localeCompare(a.roleName);
}
case clsvQxRolesByUserNumEN.con_RoleENName:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (b.roleENName == null) return -1;
if (a.roleENName == null) return 1;
return b.roleENName.localeCompare(a.roleENName);
}
case clsvQxRolesByUserNumEN.con_RoleIndex:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
return b.roleIndex-a.roleIndex;
}
case clsvQxRolesByUserNumEN.con_QxPrjId:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (b.qxPrjId == null) return -1;
if (a.qxPrjId == null) return 1;
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsvQxRolesByUserNumEN.con_PrjName:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (b.prjName == null) return -1;
if (a.prjName == null) return 1;
return b.prjName.localeCompare(a.prjName);
}
case clsvQxRolesByUserNumEN.con_IsInUse:
return (b: clsvQxRolesByUserNumEN) => {
if (b.isInUse == true) return 1;
else return -1
}
case clsvQxRolesByUserNumEN.con_UpdDate:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvQxRolesByUserNumEN.con_UpdUserId:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsvQxRolesByUserNumEN.con_Memo:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvQxRolesByUserNumEN.con_UserNum:
return (a: clsvQxRolesByUserNumEN, b: clsvQxRolesByUserNumEN) => {
return b.userNum-a.userNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxRolesByUserNum]中不存在!(in ${ vQxRolesByUserNum_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByRoleIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vQxRolesByUserNum_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQxRolesByUserNumEN.con_RoleId:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.roleId === value;
}
case clsvQxRolesByUserNumEN.con_RoleName:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.roleName === value;
}
case clsvQxRolesByUserNumEN.con_RoleENName:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.roleENName === value;
}
case clsvQxRolesByUserNumEN.con_RoleIndex:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.roleIndex === value;
}
case clsvQxRolesByUserNumEN.con_QxPrjId:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.qxPrjId === value;
}
case clsvQxRolesByUserNumEN.con_PrjName:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.prjName === value;
}
case clsvQxRolesByUserNumEN.con_IsInUse:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.isInUse === value;
}
case clsvQxRolesByUserNumEN.con_UpdDate:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.updDate === value;
}
case clsvQxRolesByUserNumEN.con_UpdUserId:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.updUserId === value;
}
case clsvQxRolesByUserNumEN.con_Memo:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.memo === value;
}
case clsvQxRolesByUserNumEN.con_UserNum:
return (obj: clsvQxRolesByUserNumEN) => {
return obj.userNum === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxRolesByUserNum]中不存在!(in ${ vQxRolesByUserNum_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vQxRolesByUserNum__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQxRolesByUserNum_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByUserNum_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByUserNum_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByUserNum_GetFirstObjAsync(strWhereCond: string): Promise<clsvQxRolesByUserNumEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

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
const objvQxRolesByUserNum = vQxRolesByUserNum_GetObjFromJsonObj(returnObj);
return objvQxRolesByUserNum;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByUserNum_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQxRolesByUserNumEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxRolesByUserNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
 * @param arrRoleId:关键字列表
 * @returns 对象列表
 **/
export  async function vQxRolesByUserNum_GetObjLstByRoleIdLstAsync(arrRoleId: Array<string>): Promise<Array<clsvQxRolesByUserNumEN>>  
{
const strThisFuncName = "GetObjLstByRoleIdLstAsync";
const strAction = "GetObjLstByRoleIdLst";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrRoleId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxRolesByUserNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByRoleIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vQxRolesByUserNum_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQxRolesByUserNumEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxRolesByUserNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByUserNum_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQxRolesByUserNumEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxRolesByUserNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByUserNum_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQxRolesByUserNumEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQxRolesByUserNumEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxRolesByUserNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByUserNum_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
 * @param strRoleId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQxRolesByUserNum_IsExistAsync(strRoleId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRoleId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByUserNum_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(vQxRolesByUserNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByUserNum_ConstructorName, strThisFuncName);
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
export  function vQxRolesByUserNum_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function vQxRolesByUserNum_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await vQxRolesByUserNum_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQxRolesByUserNumEN.con_RoleId, clsvQxRolesByUserNumEN.con_RoleName, "v角色By用户数...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQxRolesByUserNum_GetArrvQxRolesByUserNum()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrvQxRolesByUserNum = new Array<clsvQxRolesByUserNumEN>();
const strCondition = `1=1`;
const arrObjLstSel = await vQxRolesByUserNum_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsvQxRolesByUserNumEN();
obj0.roleId = '0';
obj0.roleName = '选v角色By用户数...';
arrvQxRolesByUserNum.push(obj0);
arrObjLstSel.forEach(x => arrvQxRolesByUserNum.push(x));
return arrvQxRolesByUserNum;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxRolesByUserNum_GetJSONStrByObj (pobjvQxRolesByUserNumEN: clsvQxRolesByUserNumEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQxRolesByUserNumEN);
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
export  function vQxRolesByUserNum_GetObjLstByJSONStr (strJSON: string): Array<clsvQxRolesByUserNumEN>
{
let arrvQxRolesByUserNumObjLst = new Array<clsvQxRolesByUserNumEN>();
if (strJSON === "")
{
return arrvQxRolesByUserNumObjLst;
}
try
{
arrvQxRolesByUserNumObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQxRolesByUserNumObjLst;
}
return arrvQxRolesByUserNumObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQxRolesByUserNumObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQxRolesByUserNum_GetObjLstByJSONObjLst (arrvQxRolesByUserNumObjLstS: Array<clsvQxRolesByUserNumEN>): Array<clsvQxRolesByUserNumEN>
{
const arrvQxRolesByUserNumObjLst = new Array<clsvQxRolesByUserNumEN>();
for (const objInFor of arrvQxRolesByUserNumObjLstS) {
const obj1 = vQxRolesByUserNum_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQxRolesByUserNumObjLst.push(obj1);
}
return arrvQxRolesByUserNumObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxRolesByUserNum_GetObjByJSONStr (strJSON: string): clsvQxRolesByUserNumEN
{
let pobjvQxRolesByUserNumEN = new clsvQxRolesByUserNumEN();
if (strJSON === "")
{
return pobjvQxRolesByUserNumEN;
}
try
{
pobjvQxRolesByUserNumEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQxRolesByUserNumEN;
}
return pobjvQxRolesByUserNumEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQxRolesByUserNum_GetCombineCondition(objvQxRolesByUserNumCond: clsvQxRolesByUserNumEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_RoleId) == true)
{
const strComparisonOpRoleId:string = objvQxRolesByUserNumCond.dicFldComparisonOp[clsvQxRolesByUserNumEN.con_RoleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByUserNumEN.con_RoleId, objvQxRolesByUserNumCond.roleId, strComparisonOpRoleId);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_RoleName) == true)
{
const strComparisonOpRoleName:string = objvQxRolesByUserNumCond.dicFldComparisonOp[clsvQxRolesByUserNumEN.con_RoleName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByUserNumEN.con_RoleName, objvQxRolesByUserNumCond.roleName, strComparisonOpRoleName);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_RoleENName) == true)
{
const strComparisonOpRoleENName:string = objvQxRolesByUserNumCond.dicFldComparisonOp[clsvQxRolesByUserNumEN.con_RoleENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByUserNumEN.con_RoleENName, objvQxRolesByUserNumCond.roleENName, strComparisonOpRoleENName);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_RoleIndex) == true)
{
const strComparisonOpRoleIndex:string = objvQxRolesByUserNumCond.dicFldComparisonOp[clsvQxRolesByUserNumEN.con_RoleIndex];
strWhereCond += Format(" And {0} {2} {1}", clsvQxRolesByUserNumEN.con_RoleIndex, objvQxRolesByUserNumCond.roleIndex, strComparisonOpRoleIndex);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objvQxRolesByUserNumCond.dicFldComparisonOp[clsvQxRolesByUserNumEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByUserNumEN.con_QxPrjId, objvQxRolesByUserNumCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_PrjName) == true)
{
const strComparisonOpPrjName:string = objvQxRolesByUserNumCond.dicFldComparisonOp[clsvQxRolesByUserNumEN.con_PrjName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByUserNumEN.con_PrjName, objvQxRolesByUserNumCond.prjName, strComparisonOpPrjName);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_IsInUse) == true)
{
if (objvQxRolesByUserNumCond.isInUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxRolesByUserNumEN.con_IsInUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxRolesByUserNumEN.con_IsInUse);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvQxRolesByUserNumCond.dicFldComparisonOp[clsvQxRolesByUserNumEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByUserNumEN.con_UpdDate, objvQxRolesByUserNumCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objvQxRolesByUserNumCond.dicFldComparisonOp[clsvQxRolesByUserNumEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByUserNumEN.con_UpdUserId, objvQxRolesByUserNumCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQxRolesByUserNumCond.dicFldComparisonOp[clsvQxRolesByUserNumEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByUserNumEN.con_Memo, objvQxRolesByUserNumCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByUserNumCond.dicFldComparisonOp, clsvQxRolesByUserNumEN.con_UserNum) == true)
{
const strComparisonOpUserNum:string = objvQxRolesByUserNumCond.dicFldComparisonOp[clsvQxRolesByUserNumEN.con_UserNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQxRolesByUserNumEN.con_UserNum, objvQxRolesByUserNumCond.userNum, strComparisonOpUserNum);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQxRolesByUserNumENS:源对象
 * @param objvQxRolesByUserNumENT:目标对象
*/
export  function vQxRolesByUserNum_GetObjFromJsonObj(objvQxRolesByUserNumENS: clsvQxRolesByUserNumEN): clsvQxRolesByUserNumEN 
{
 const objvQxRolesByUserNumENT: clsvQxRolesByUserNumEN = new clsvQxRolesByUserNumEN();
ObjectAssign(objvQxRolesByUserNumENT, objvQxRolesByUserNumENS);
 return objvQxRolesByUserNumENT;
}