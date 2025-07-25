
 /**
 * 类名:clsvQxRolesByMenuNumWApi
 * 表名:vQxRolesByMenuNum(00140083)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:21:55
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
 * v角色By菜单数(vQxRolesByMenuNum)
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
import { clsvQxRolesByMenuNumEN } from "@/ts/L0Entity/UserManage_GP/clsvQxRolesByMenuNumEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vQxRolesByMenuNum_Controller = "vQxRolesByMenuNumApi";
 export const vQxRolesByMenuNum_ConstructorName = "vQxRolesByMenuNum";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRoleId:关键字
 * @returns 对象
 **/
export  async function vQxRolesByMenuNum_GetObjByRoleIdAsync(strRoleId: string): Promise<clsvQxRolesByMenuNumEN|null>  
{
const strThisFuncName = "GetObjByRoleIdAsync";

if (IsNullOrEmpty(strRoleId) == true)
{
  const strMsg = Format("参数:[strRoleId]不能为空!(In clsvQxRolesByMenuNumWApi.GetObjByRoleIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsvQxRolesByMenuNumWApi.GetObjByRoleIdAsync)", strRoleId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByRoleId";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const objvQxRolesByMenuNum = vQxRolesByMenuNum_GetObjFromJsonObj(returnObj);
return objvQxRolesByMenuNum;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  function vQxRolesByMenuNum_SortFunDefa(a:clsvQxRolesByMenuNumEN , b:clsvQxRolesByMenuNumEN): number 
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
export  function vQxRolesByMenuNum_SortFunDefa2Fld(a:clsvQxRolesByMenuNumEN , b:clsvQxRolesByMenuNumEN): number 
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
export  function vQxRolesByMenuNum_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQxRolesByMenuNumEN.con_RoleId:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
return a.roleId.localeCompare(b.roleId);
}
case clsvQxRolesByMenuNumEN.con_RoleName:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
return a.roleName.localeCompare(b.roleName);
}
case clsvQxRolesByMenuNumEN.con_RoleENName:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (a.roleENName == null) return -1;
if (b.roleENName == null) return 1;
return a.roleENName.localeCompare(b.roleENName);
}
case clsvQxRolesByMenuNumEN.con_RoleIndex:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
return a.roleIndex-b.roleIndex;
}
case clsvQxRolesByMenuNumEN.con_QxPrjId:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (a.qxPrjId == null) return -1;
if (b.qxPrjId == null) return 1;
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsvQxRolesByMenuNumEN.con_PrjName:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (a.prjName == null) return -1;
if (b.prjName == null) return 1;
return a.prjName.localeCompare(b.prjName);
}
case clsvQxRolesByMenuNumEN.con_IsInUse:
return (a: clsvQxRolesByMenuNumEN) => {
if (a.isInUse == true) return 1;
else return -1
}
case clsvQxRolesByMenuNumEN.con_UpdDate:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvQxRolesByMenuNumEN.con_UpdUserId:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsvQxRolesByMenuNumEN.con_Memo:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvQxRolesByMenuNumEN.con_MenuNum:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
return a.menuNum-b.menuNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxRolesByMenuNum]中不存在!(in ${ vQxRolesByMenuNum_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQxRolesByMenuNumEN.con_RoleId:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
return b.roleId.localeCompare(a.roleId);
}
case clsvQxRolesByMenuNumEN.con_RoleName:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
return b.roleName.localeCompare(a.roleName);
}
case clsvQxRolesByMenuNumEN.con_RoleENName:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (b.roleENName == null) return -1;
if (a.roleENName == null) return 1;
return b.roleENName.localeCompare(a.roleENName);
}
case clsvQxRolesByMenuNumEN.con_RoleIndex:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
return b.roleIndex-a.roleIndex;
}
case clsvQxRolesByMenuNumEN.con_QxPrjId:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (b.qxPrjId == null) return -1;
if (a.qxPrjId == null) return 1;
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsvQxRolesByMenuNumEN.con_PrjName:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (b.prjName == null) return -1;
if (a.prjName == null) return 1;
return b.prjName.localeCompare(a.prjName);
}
case clsvQxRolesByMenuNumEN.con_IsInUse:
return (b: clsvQxRolesByMenuNumEN) => {
if (b.isInUse == true) return 1;
else return -1
}
case clsvQxRolesByMenuNumEN.con_UpdDate:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvQxRolesByMenuNumEN.con_UpdUserId:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsvQxRolesByMenuNumEN.con_Memo:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvQxRolesByMenuNumEN.con_MenuNum:
return (a: clsvQxRolesByMenuNumEN, b: clsvQxRolesByMenuNumEN) => {
return b.menuNum-a.menuNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxRolesByMenuNum]中不存在!(in ${ vQxRolesByMenuNum_ConstructorName}.${ strThisFuncName})`;
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
export  async function vQxRolesByMenuNum_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQxRolesByMenuNumEN.con_RoleId:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.roleId === value;
}
case clsvQxRolesByMenuNumEN.con_RoleName:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.roleName === value;
}
case clsvQxRolesByMenuNumEN.con_RoleENName:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.roleENName === value;
}
case clsvQxRolesByMenuNumEN.con_RoleIndex:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.roleIndex === value;
}
case clsvQxRolesByMenuNumEN.con_QxPrjId:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.qxPrjId === value;
}
case clsvQxRolesByMenuNumEN.con_PrjName:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.prjName === value;
}
case clsvQxRolesByMenuNumEN.con_IsInUse:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.isInUse === value;
}
case clsvQxRolesByMenuNumEN.con_UpdDate:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.updDate === value;
}
case clsvQxRolesByMenuNumEN.con_UpdUserId:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.updUserId === value;
}
case clsvQxRolesByMenuNumEN.con_Memo:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.memo === value;
}
case clsvQxRolesByMenuNumEN.con_MenuNum:
return (obj: clsvQxRolesByMenuNumEN) => {
return obj.menuNum === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxRolesByMenuNum]中不存在!(in ${ vQxRolesByMenuNum_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vQxRolesByMenuNum__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQxRolesByMenuNum_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_GetFirstObjAsync(strWhereCond: string): Promise<clsvQxRolesByMenuNumEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const objvQxRolesByMenuNum = vQxRolesByMenuNum_GetObjFromJsonObj(returnObj);
return objvQxRolesByMenuNum;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQxRolesByMenuNumEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxRolesByMenuNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_GetObjLstByRoleIdLstAsync(arrRoleId: Array<string>): Promise<Array<clsvQxRolesByMenuNumEN>>  
{
const strThisFuncName = "GetObjLstByRoleIdLstAsync";
const strAction = "GetObjLstByRoleIdLst";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxRolesByMenuNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQxRolesByMenuNumEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxRolesByMenuNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQxRolesByMenuNumEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxRolesByMenuNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQxRolesByMenuNumEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQxRolesByMenuNumEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxRolesByMenuNum_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_IsExistAsync(strRoleId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  async function vQxRolesByMenuNum_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(vQxRolesByMenuNum_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxRolesByMenuNum_ConstructorName, strThisFuncName);
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
export  function vQxRolesByMenuNum_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function vQxRolesByMenuNum_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await vQxRolesByMenuNum_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvQxRolesByMenuNumEN.con_RoleId, clsvQxRolesByMenuNumEN.con_RoleName, "v角色By菜单数...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vQxRolesByMenuNum_GetArrvQxRolesByMenuNum()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrvQxRolesByMenuNum = new Array<clsvQxRolesByMenuNumEN>();
const strCondition = `1=1`;
const arrObjLstSel = await vQxRolesByMenuNum_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsvQxRolesByMenuNumEN();
obj0.roleId = '0';
obj0.roleName = '选v角色By菜单数...';
arrvQxRolesByMenuNum.push(obj0);
arrObjLstSel.forEach(x => arrvQxRolesByMenuNum.push(x));
return arrvQxRolesByMenuNum;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxRolesByMenuNum_GetJSONStrByObj (pobjvQxRolesByMenuNumEN: clsvQxRolesByMenuNumEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQxRolesByMenuNumEN);
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
export  function vQxRolesByMenuNum_GetObjLstByJSONStr (strJSON: string): Array<clsvQxRolesByMenuNumEN>
{
let arrvQxRolesByMenuNumObjLst = new Array<clsvQxRolesByMenuNumEN>();
if (strJSON === "")
{
return arrvQxRolesByMenuNumObjLst;
}
try
{
arrvQxRolesByMenuNumObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQxRolesByMenuNumObjLst;
}
return arrvQxRolesByMenuNumObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQxRolesByMenuNumObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQxRolesByMenuNum_GetObjLstByJSONObjLst (arrvQxRolesByMenuNumObjLstS: Array<clsvQxRolesByMenuNumEN>): Array<clsvQxRolesByMenuNumEN>
{
const arrvQxRolesByMenuNumObjLst = new Array<clsvQxRolesByMenuNumEN>();
for (const objInFor of arrvQxRolesByMenuNumObjLstS) {
const obj1 = vQxRolesByMenuNum_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQxRolesByMenuNumObjLst.push(obj1);
}
return arrvQxRolesByMenuNumObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxRolesByMenuNum_GetObjByJSONStr (strJSON: string): clsvQxRolesByMenuNumEN
{
let pobjvQxRolesByMenuNumEN = new clsvQxRolesByMenuNumEN();
if (strJSON === "")
{
return pobjvQxRolesByMenuNumEN;
}
try
{
pobjvQxRolesByMenuNumEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQxRolesByMenuNumEN;
}
return pobjvQxRolesByMenuNumEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQxRolesByMenuNum_GetCombineCondition(objvQxRolesByMenuNumCond: clsvQxRolesByMenuNumEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_RoleId) == true)
{
const strComparisonOpRoleId:string = objvQxRolesByMenuNumCond.dicFldComparisonOp[clsvQxRolesByMenuNumEN.con_RoleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByMenuNumEN.con_RoleId, objvQxRolesByMenuNumCond.roleId, strComparisonOpRoleId);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_RoleName) == true)
{
const strComparisonOpRoleName:string = objvQxRolesByMenuNumCond.dicFldComparisonOp[clsvQxRolesByMenuNumEN.con_RoleName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByMenuNumEN.con_RoleName, objvQxRolesByMenuNumCond.roleName, strComparisonOpRoleName);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_RoleENName) == true)
{
const strComparisonOpRoleENName:string = objvQxRolesByMenuNumCond.dicFldComparisonOp[clsvQxRolesByMenuNumEN.con_RoleENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByMenuNumEN.con_RoleENName, objvQxRolesByMenuNumCond.roleENName, strComparisonOpRoleENName);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_RoleIndex) == true)
{
const strComparisonOpRoleIndex:string = objvQxRolesByMenuNumCond.dicFldComparisonOp[clsvQxRolesByMenuNumEN.con_RoleIndex];
strWhereCond += Format(" And {0} {2} {1}", clsvQxRolesByMenuNumEN.con_RoleIndex, objvQxRolesByMenuNumCond.roleIndex, strComparisonOpRoleIndex);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objvQxRolesByMenuNumCond.dicFldComparisonOp[clsvQxRolesByMenuNumEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByMenuNumEN.con_QxPrjId, objvQxRolesByMenuNumCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_PrjName) == true)
{
const strComparisonOpPrjName:string = objvQxRolesByMenuNumCond.dicFldComparisonOp[clsvQxRolesByMenuNumEN.con_PrjName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByMenuNumEN.con_PrjName, objvQxRolesByMenuNumCond.prjName, strComparisonOpPrjName);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_IsInUse) == true)
{
if (objvQxRolesByMenuNumCond.isInUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxRolesByMenuNumEN.con_IsInUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxRolesByMenuNumEN.con_IsInUse);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvQxRolesByMenuNumCond.dicFldComparisonOp[clsvQxRolesByMenuNumEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByMenuNumEN.con_UpdDate, objvQxRolesByMenuNumCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objvQxRolesByMenuNumCond.dicFldComparisonOp[clsvQxRolesByMenuNumEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByMenuNumEN.con_UpdUserId, objvQxRolesByMenuNumCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQxRolesByMenuNumCond.dicFldComparisonOp[clsvQxRolesByMenuNumEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxRolesByMenuNumEN.con_Memo, objvQxRolesByMenuNumCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvQxRolesByMenuNumCond.dicFldComparisonOp, clsvQxRolesByMenuNumEN.con_MenuNum) == true)
{
const strComparisonOpMenuNum:string = objvQxRolesByMenuNumCond.dicFldComparisonOp[clsvQxRolesByMenuNumEN.con_MenuNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQxRolesByMenuNumEN.con_MenuNum, objvQxRolesByMenuNumCond.menuNum, strComparisonOpMenuNum);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQxRolesByMenuNumENS:源对象
 * @param objvQxRolesByMenuNumENT:目标对象
*/
export  function vQxRolesByMenuNum_GetObjFromJsonObj(objvQxRolesByMenuNumENS: clsvQxRolesByMenuNumEN): clsvQxRolesByMenuNumEN 
{
 const objvQxRolesByMenuNumENT: clsvQxRolesByMenuNumEN = new clsvQxRolesByMenuNumEN();
ObjectAssign(objvQxRolesByMenuNumENT, objvQxRolesByMenuNumENS);
 return objvQxRolesByMenuNumENT;
}