
 /**
 * 类名:clsQxUserMenuDetailWApi
 * 表名:QxUserMenuDetail(00140011)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:10
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户菜单(QxUserMenuDetail)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsQxUserMenuDetailEN } from "@/ts/L0Entity/MenuManage_GP/clsQxUserMenuDetailEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUserMenuDetail_Controller = "QxUserMenuDetailApi";
 export const qxUserMenuDetail_ConstructorName = "qxUserMenuDetail";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function QxUserMenuDetail_GetObjBymIdAsync(lngmId: number): Promise<clsQxUserMenuDetailEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxUserMenuDetailWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const objQxUserMenuDetail = QxUserMenuDetail_GetObjFromJsonObj(returnObj);
return objQxUserMenuDetail;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  function QxUserMenuDetail_SortFunDefa(a:clsQxUserMenuDetailEN , b:clsQxUserMenuDetailEN): number 
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
export  function QxUserMenuDetail_SortFunDefa2Fld(a:clsQxUserMenuDetailEN , b:clsQxUserMenuDetailEN): number 
{
if (a.menuId == b.menuId) return a.menuName.localeCompare(b.menuName);
else return a.menuId.localeCompare(b.menuId);
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
export  function QxUserMenuDetail_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUserMenuDetailEN.con_mId:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return a.mId-b.mId;
}
case clsQxUserMenuDetailEN.con_MenuId:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return a.menuId.localeCompare(b.menuId);
}
case clsQxUserMenuDetailEN.con_MenuName:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return a.menuName.localeCompare(b.menuName);
}
case clsQxUserMenuDetailEN.con_IsDisp:
return (a: clsQxUserMenuDetailEN) => {
if (a.isDisp == true) return 1;
else return -1
}
case clsQxUserMenuDetailEN.con_UpMenuId:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
if (a.upMenuId == null) return -1;
if (b.upMenuId == null) return 1;
return a.upMenuId.localeCompare(b.upMenuId);
}
case clsQxUserMenuDetailEN.con_LinkFile:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
if (a.linkFile == null) return -1;
if (b.linkFile == null) return 1;
return a.linkFile.localeCompare(b.linkFile);
}
case clsQxUserMenuDetailEN.con_ImgFile:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
if (a.imgFile == null) return -1;
if (b.imgFile == null) return 1;
return a.imgFile.localeCompare(b.imgFile);
}
case clsQxUserMenuDetailEN.con_IsCustomMenu:
return (a: clsQxUserMenuDetailEN) => {
if (a.isCustomMenu == true) return 1;
else return -1
}
case clsQxUserMenuDetailEN.con_UserId:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return a.userId.localeCompare(b.userId);
}
case clsQxUserMenuDetailEN.con_QxPrjId:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxUserMenuDetailEN.con_OrderNum:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return a.orderNum-b.orderNum;
}
case clsQxUserMenuDetailEN.con_Memo:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserMenuDetail]中不存在!(in ${ qxUserMenuDetail_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUserMenuDetailEN.con_mId:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return b.mId-a.mId;
}
case clsQxUserMenuDetailEN.con_MenuId:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return b.menuId.localeCompare(a.menuId);
}
case clsQxUserMenuDetailEN.con_MenuName:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return b.menuName.localeCompare(a.menuName);
}
case clsQxUserMenuDetailEN.con_IsDisp:
return (b: clsQxUserMenuDetailEN) => {
if (b.isDisp == true) return 1;
else return -1
}
case clsQxUserMenuDetailEN.con_UpMenuId:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
if (b.upMenuId == null) return -1;
if (a.upMenuId == null) return 1;
return b.upMenuId.localeCompare(a.upMenuId);
}
case clsQxUserMenuDetailEN.con_LinkFile:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
if (b.linkFile == null) return -1;
if (a.linkFile == null) return 1;
return b.linkFile.localeCompare(a.linkFile);
}
case clsQxUserMenuDetailEN.con_ImgFile:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
if (b.imgFile == null) return -1;
if (a.imgFile == null) return 1;
return b.imgFile.localeCompare(a.imgFile);
}
case clsQxUserMenuDetailEN.con_IsCustomMenu:
return (b: clsQxUserMenuDetailEN) => {
if (b.isCustomMenu == true) return 1;
else return -1
}
case clsQxUserMenuDetailEN.con_UserId:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return b.userId.localeCompare(a.userId);
}
case clsQxUserMenuDetailEN.con_QxPrjId:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxUserMenuDetailEN.con_OrderNum:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
return b.orderNum-a.orderNum;
}
case clsQxUserMenuDetailEN.con_Memo:
return (a: clsQxUserMenuDetailEN, b: clsQxUserMenuDetailEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserMenuDetail]中不存在!(in ${ qxUserMenuDetail_ConstructorName}.${ strThisFuncName})`;
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
export  async function QxUserMenuDetail_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUserMenuDetailEN.con_mId:
return (obj: clsQxUserMenuDetailEN) => {
return obj.mId === value;
}
case clsQxUserMenuDetailEN.con_MenuId:
return (obj: clsQxUserMenuDetailEN) => {
return obj.menuId === value;
}
case clsQxUserMenuDetailEN.con_MenuName:
return (obj: clsQxUserMenuDetailEN) => {
return obj.menuName === value;
}
case clsQxUserMenuDetailEN.con_IsDisp:
return (obj: clsQxUserMenuDetailEN) => {
return obj.isDisp === value;
}
case clsQxUserMenuDetailEN.con_UpMenuId:
return (obj: clsQxUserMenuDetailEN) => {
return obj.upMenuId === value;
}
case clsQxUserMenuDetailEN.con_LinkFile:
return (obj: clsQxUserMenuDetailEN) => {
return obj.linkFile === value;
}
case clsQxUserMenuDetailEN.con_ImgFile:
return (obj: clsQxUserMenuDetailEN) => {
return obj.imgFile === value;
}
case clsQxUserMenuDetailEN.con_IsCustomMenu:
return (obj: clsQxUserMenuDetailEN) => {
return obj.isCustomMenu === value;
}
case clsQxUserMenuDetailEN.con_UserId:
return (obj: clsQxUserMenuDetailEN) => {
return obj.userId === value;
}
case clsQxUserMenuDetailEN.con_QxPrjId:
return (obj: clsQxUserMenuDetailEN) => {
return obj.qxPrjId === value;
}
case clsQxUserMenuDetailEN.con_OrderNum:
return (obj: clsQxUserMenuDetailEN) => {
return obj.orderNum === value;
}
case clsQxUserMenuDetailEN.con_Memo:
return (obj: clsQxUserMenuDetailEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserMenuDetail]中不存在!(in ${ qxUserMenuDetail_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxUserMenuDetail__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserMenuDetail_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUserMenuDetailEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const objQxUserMenuDetail = QxUserMenuDetail_GetObjFromJsonObj(returnObj);
return objQxUserMenuDetail;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUserMenuDetailEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserMenuDetail_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsQxUserMenuDetailEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserMenuDetail_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUserMenuDetailEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserMenuDetail_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUserMenuDetailEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserMenuDetail_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUserMenuDetailEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUserMenuDetailEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserMenuDetail_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_DelQxUserMenuDetailsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUserMenuDetailsAsync";
const strAction = "DelQxUserMenuDetails";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_DelQxUserMenuDetailsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUserMenuDetailsByCondAsync";
const strAction = "DelQxUserMenuDetailsByCond";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
 * @param objQxUserMenuDetailEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserMenuDetail_AddNewRecordAsync(objQxUserMenuDetailEN: clsQxUserMenuDetailEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxUserMenuDetailEN);
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserMenuDetailEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_AddNewObjSave(objQxUserMenuDetailEN: clsQxUserMenuDetailEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxUserMenuDetail_CheckPropertyNew(objQxUserMenuDetailEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserMenuDetail_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserMenuDetail_CheckUniCond4Add(objQxUserMenuDetailEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxUserMenuDetail_AddNewRecordAsync(objQxUserMenuDetailEN);
if (returnBool == true)
{
//QxUserMenuDetail_ReFreshCache();
}
else
{
const strInfo = `添加[用户菜单(QxUserMenuDetail)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxUserMenuDetailEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxUserMenuDetail_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxUserMenuDetail_CheckUniCond4Add(objQxUserMenuDetailEN: clsQxUserMenuDetailEN): Promise<boolean>{
const strUniquenessCondition = QxUserMenuDetail_GetUniCondStr(objQxUserMenuDetailEN);
const bolIsExistCondition = await QxUserMenuDetail_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserMenuDetail_CheckUniCond4Update(objQxUserMenuDetailEN: clsQxUserMenuDetailEN): Promise<boolean>{
const strUniquenessCondition = QxUserMenuDetail_GetUniCondStr4Update(objQxUserMenuDetailEN);
const bolIsExistCondition = await QxUserMenuDetail_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserMenuDetail_UpdateObjSave(objQxUserMenuDetailEN: clsQxUserMenuDetailEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxUserMenuDetailEN.sfUpdFldSetStr = objQxUserMenuDetailEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxUserMenuDetailEN.mId == 0 || objQxUserMenuDetailEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxUserMenuDetail_CheckProperty4Update(objQxUserMenuDetailEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserMenuDetail_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserMenuDetail_CheckUniCond4Update(objQxUserMenuDetailEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxUserMenuDetail_UpdateRecordAsync(objQxUserMenuDetailEN);
if (returnBool == true)
{
//QxUserMenuDetail_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxUserMenuDetail_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxUserMenuDetailEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUserMenuDetail_AddNewRecordWithReturnKeyAsync(objQxUserMenuDetailEN: clsQxUserMenuDetailEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserMenuDetailEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
 * @param objQxUserMenuDetailEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserMenuDetail_UpdateRecordAsync(objQxUserMenuDetailEN: clsQxUserMenuDetailEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUserMenuDetailEN.sfUpdFldSetStr === undefined || objQxUserMenuDetailEN.sfUpdFldSetStr === null || objQxUserMenuDetailEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserMenuDetailEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserMenuDetailEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
 * @param objQxUserMenuDetailEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserMenuDetail_EditRecordExAsync(objQxUserMenuDetailEN: clsQxUserMenuDetailEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxUserMenuDetailEN.sfUpdFldSetStr === undefined || objQxUserMenuDetailEN.sfUpdFldSetStr === null || objQxUserMenuDetailEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserMenuDetailEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserMenuDetailEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
 * @param objQxUserMenuDetailEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserMenuDetail_UpdateWithConditionAsync(objQxUserMenuDetailEN: clsQxUserMenuDetailEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUserMenuDetailEN.sfUpdFldSetStr === undefined || objQxUserMenuDetailEN.sfUpdFldSetStr === null || objQxUserMenuDetailEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserMenuDetailEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);
objQxUserMenuDetailEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserMenuDetailEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  async function QxUserMenuDetail_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxUserMenuDetail_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserMenuDetail_ConstructorName, strThisFuncName);
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
export  function QxUserMenuDetail_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxUserMenuDetail_CheckPropertyNew(pobjQxUserMenuDetailEN: clsQxUserMenuDetailEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuId) === true 
 || pobjQxUserMenuDetailEN.menuId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[菜单Id]不能为空(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuName) === true )
{
 throw new Error(`(errid:Watl000411)字段[菜单名]不能为空(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (null === pobjQxUserMenuDetailEN.isDisp 
 || pobjQxUserMenuDetailEN.isDisp != null && pobjQxUserMenuDetailEN.isDisp.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否显示]不能为空(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (null === pobjQxUserMenuDetailEN.isCustomMenu 
 || pobjQxUserMenuDetailEN.isCustomMenu != null && pobjQxUserMenuDetailEN.isCustomMenu.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否定制菜单]不能为空(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.userId) === true 
 || pobjQxUserMenuDetailEN.userId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.qxPrjId) === true 
 || pobjQxUserMenuDetailEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (null === pobjQxUserMenuDetailEN.orderNum 
 || pobjQxUserMenuDetailEN.orderNum != null && pobjQxUserMenuDetailEN.orderNum.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[排序号]不能为空(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuId) == false && GetStrLen(pobjQxUserMenuDetailEN.menuId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[菜单Id(menuId)]的长度不能超过8(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.menuId}(clsQxUserMenuDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuName) == false && GetStrLen(pobjQxUserMenuDetailEN.menuName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[菜单名(menuName)]的长度不能超过50(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.menuName}(clsQxUserMenuDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.upMenuId) == false && GetStrLen(pobjQxUserMenuDetailEN.upMenuId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[上级菜单Id(upMenuId)]的长度不能超过8(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.upMenuId}(clsQxUserMenuDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.linkFile) == false && GetStrLen(pobjQxUserMenuDetailEN.linkFile) > 500)
{
 throw new Error(`(errid:Watl000413)字段[链接文件(linkFile)]的长度不能超过500(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.linkFile}(clsQxUserMenuDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.imgFile) == false && GetStrLen(pobjQxUserMenuDetailEN.imgFile) > 300)
{
 throw new Error(`(errid:Watl000413)字段[图像文件(imgFile)]的长度不能超过300(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.imgFile}(clsQxUserMenuDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.userId) == false && GetStrLen(pobjQxUserMenuDetailEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.userId}(clsQxUserMenuDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.qxPrjId) == false && GetStrLen(pobjQxUserMenuDetailEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.qxPrjId}(clsQxUserMenuDetailBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.memo) == false && GetStrLen(pobjQxUserMenuDetailEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.memo}(clsQxUserMenuDetailBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUserMenuDetailEN.mId && undefined !== pobjQxUserMenuDetailEN.mId && tzDataType.isNumber(pobjQxUserMenuDetailEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(mId)]的值:[${pobjQxUserMenuDetailEN.mId}], 非法,应该为数值型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuId) == false && undefined !== pobjQxUserMenuDetailEN.menuId && tzDataType.isString(pobjQxUserMenuDetailEN.menuId) === false)
{
 throw new Error(`(errid:Watl000414)字段[菜单Id(menuId)]的值:[${pobjQxUserMenuDetailEN.menuId}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuName) == false && undefined !== pobjQxUserMenuDetailEN.menuName && tzDataType.isString(pobjQxUserMenuDetailEN.menuName) === false)
{
 throw new Error(`(errid:Watl000414)字段[菜单名(menuName)]的值:[${pobjQxUserMenuDetailEN.menuName}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (null != pobjQxUserMenuDetailEN.isDisp && undefined !== pobjQxUserMenuDetailEN.isDisp && tzDataType.isBoolean(pobjQxUserMenuDetailEN.isDisp) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否显示(isDisp)]的值:[${pobjQxUserMenuDetailEN.isDisp}], 非法,应该为布尔型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.upMenuId) == false && undefined !== pobjQxUserMenuDetailEN.upMenuId && tzDataType.isString(pobjQxUserMenuDetailEN.upMenuId) === false)
{
 throw new Error(`(errid:Watl000414)字段[上级菜单Id(upMenuId)]的值:[${pobjQxUserMenuDetailEN.upMenuId}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.linkFile) == false && undefined !== pobjQxUserMenuDetailEN.linkFile && tzDataType.isString(pobjQxUserMenuDetailEN.linkFile) === false)
{
 throw new Error(`(errid:Watl000414)字段[链接文件(linkFile)]的值:[${pobjQxUserMenuDetailEN.linkFile}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.imgFile) == false && undefined !== pobjQxUserMenuDetailEN.imgFile && tzDataType.isString(pobjQxUserMenuDetailEN.imgFile) === false)
{
 throw new Error(`(errid:Watl000414)字段[图像文件(imgFile)]的值:[${pobjQxUserMenuDetailEN.imgFile}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (null != pobjQxUserMenuDetailEN.isCustomMenu && undefined !== pobjQxUserMenuDetailEN.isCustomMenu && tzDataType.isBoolean(pobjQxUserMenuDetailEN.isCustomMenu) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否定制菜单(isCustomMenu)]的值:[${pobjQxUserMenuDetailEN.isCustomMenu}], 非法,应该为布尔型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.userId) == false && undefined !== pobjQxUserMenuDetailEN.userId && tzDataType.isString(pobjQxUserMenuDetailEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjQxUserMenuDetailEN.userId}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.qxPrjId) == false && undefined !== pobjQxUserMenuDetailEN.qxPrjId && tzDataType.isString(pobjQxUserMenuDetailEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxUserMenuDetailEN.qxPrjId}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (null != pobjQxUserMenuDetailEN.orderNum && undefined !== pobjQxUserMenuDetailEN.orderNum && tzDataType.isNumber(pobjQxUserMenuDetailEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[排序号(orderNum)]的值:[${pobjQxUserMenuDetailEN.orderNum}], 非法,应该为数值型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.memo) == false && undefined !== pobjQxUserMenuDetailEN.memo && tzDataType.isString(pobjQxUserMenuDetailEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxUserMenuDetailEN.memo}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuId) == false && pobjQxUserMenuDetailEN.menuId != '[nuull]' && GetStrLen(pobjQxUserMenuDetailEN.menuId) !=  8)
{
 throw ("(errid:Watl000415)字段[菜单Id]作为外键字段,长度应该为8(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.qxPrjId) == false && pobjQxUserMenuDetailEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxUserMenuDetailEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUserMenuDetail_CheckProperty4Update(pobjQxUserMenuDetailEN: clsQxUserMenuDetailEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuId) == false && GetStrLen(pobjQxUserMenuDetailEN.menuId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[菜单Id(menuId)]的长度不能超过8(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.menuId}(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuName) == false && GetStrLen(pobjQxUserMenuDetailEN.menuName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[菜单名(menuName)]的长度不能超过50(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.menuName}(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.upMenuId) == false && GetStrLen(pobjQxUserMenuDetailEN.upMenuId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[上级菜单Id(upMenuId)]的长度不能超过8(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.upMenuId}(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.linkFile) == false && GetStrLen(pobjQxUserMenuDetailEN.linkFile) > 500)
{
 throw new Error(`(errid:Watl000416)字段[链接文件(linkFile)]的长度不能超过500(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.linkFile}(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.imgFile) == false && GetStrLen(pobjQxUserMenuDetailEN.imgFile) > 300)
{
 throw new Error(`(errid:Watl000416)字段[图像文件(imgFile)]的长度不能超过300(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.imgFile}(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.userId) == false && GetStrLen(pobjQxUserMenuDetailEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.userId}(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.qxPrjId) == false && GetStrLen(pobjQxUserMenuDetailEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.qxPrjId}(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.memo) == false && GetStrLen(pobjQxUserMenuDetailEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户菜单(QxUserMenuDetail))!值:${pobjQxUserMenuDetailEN.memo}(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUserMenuDetailEN.mId && undefined !== pobjQxUserMenuDetailEN.mId && tzDataType.isNumber(pobjQxUserMenuDetailEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(mId)]的值:[${pobjQxUserMenuDetailEN.mId}], 非法,应该为数值型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuId) == false && undefined !== pobjQxUserMenuDetailEN.menuId && tzDataType.isString(pobjQxUserMenuDetailEN.menuId) === false)
{
 throw new Error(`(errid:Watl000417)字段[菜单Id(menuId)]的值:[${pobjQxUserMenuDetailEN.menuId}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuName) == false && undefined !== pobjQxUserMenuDetailEN.menuName && tzDataType.isString(pobjQxUserMenuDetailEN.menuName) === false)
{
 throw new Error(`(errid:Watl000417)字段[菜单名(menuName)]的值:[${pobjQxUserMenuDetailEN.menuName}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (null != pobjQxUserMenuDetailEN.isDisp && undefined !== pobjQxUserMenuDetailEN.isDisp && tzDataType.isBoolean(pobjQxUserMenuDetailEN.isDisp) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否显示(isDisp)]的值:[${pobjQxUserMenuDetailEN.isDisp}], 非法,应该为布尔型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.upMenuId) == false && undefined !== pobjQxUserMenuDetailEN.upMenuId && tzDataType.isString(pobjQxUserMenuDetailEN.upMenuId) === false)
{
 throw new Error(`(errid:Watl000417)字段[上级菜单Id(upMenuId)]的值:[${pobjQxUserMenuDetailEN.upMenuId}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.linkFile) == false && undefined !== pobjQxUserMenuDetailEN.linkFile && tzDataType.isString(pobjQxUserMenuDetailEN.linkFile) === false)
{
 throw new Error(`(errid:Watl000417)字段[链接文件(linkFile)]的值:[${pobjQxUserMenuDetailEN.linkFile}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.imgFile) == false && undefined !== pobjQxUserMenuDetailEN.imgFile && tzDataType.isString(pobjQxUserMenuDetailEN.imgFile) === false)
{
 throw new Error(`(errid:Watl000417)字段[图像文件(imgFile)]的值:[${pobjQxUserMenuDetailEN.imgFile}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (null != pobjQxUserMenuDetailEN.isCustomMenu && undefined !== pobjQxUserMenuDetailEN.isCustomMenu && tzDataType.isBoolean(pobjQxUserMenuDetailEN.isCustomMenu) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否定制菜单(isCustomMenu)]的值:[${pobjQxUserMenuDetailEN.isCustomMenu}], 非法,应该为布尔型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.userId) == false && undefined !== pobjQxUserMenuDetailEN.userId && tzDataType.isString(pobjQxUserMenuDetailEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjQxUserMenuDetailEN.userId}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.qxPrjId) == false && undefined !== pobjQxUserMenuDetailEN.qxPrjId && tzDataType.isString(pobjQxUserMenuDetailEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxUserMenuDetailEN.qxPrjId}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (null != pobjQxUserMenuDetailEN.orderNum && undefined !== pobjQxUserMenuDetailEN.orderNum && tzDataType.isNumber(pobjQxUserMenuDetailEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[排序号(orderNum)]的值:[${pobjQxUserMenuDetailEN.orderNum}], 非法,应该为数值型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.memo) == false && undefined !== pobjQxUserMenuDetailEN.memo && tzDataType.isString(pobjQxUserMenuDetailEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxUserMenuDetailEN.memo}], 非法,应该为字符型(In 用户菜单(QxUserMenuDetail))!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxUserMenuDetailEN.mId 
 || pobjQxUserMenuDetailEN.mId != null && pobjQxUserMenuDetailEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 用户菜单)!(clsQxUserMenuDetailBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.menuId) == false && pobjQxUserMenuDetailEN.menuId != '[nuull]' && GetStrLen(pobjQxUserMenuDetailEN.menuId) !=  8)
{
 throw ("(errid:Watl000418)字段[菜单Id]作为外键字段,长度应该为8(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserMenuDetailEN.qxPrjId) == false && pobjQxUserMenuDetailEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxUserMenuDetailEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 用户菜单)!(clsQxUserMenuDetailBL:CheckPropertyNew)");
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
export  function QxUserMenuDetail_GetJSONStrByObj (pobjQxUserMenuDetailEN: clsQxUserMenuDetailEN): string
{
pobjQxUserMenuDetailEN.sfUpdFldSetStr = pobjQxUserMenuDetailEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUserMenuDetailEN);
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
export  function QxUserMenuDetail_GetObjLstByJSONStr (strJSON: string): Array<clsQxUserMenuDetailEN>
{
let arrQxUserMenuDetailObjLst = new Array<clsQxUserMenuDetailEN>();
if (strJSON === "")
{
return arrQxUserMenuDetailObjLst;
}
try
{
arrQxUserMenuDetailObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUserMenuDetailObjLst;
}
return arrQxUserMenuDetailObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUserMenuDetailObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUserMenuDetail_GetObjLstByJSONObjLst (arrQxUserMenuDetailObjLstS: Array<clsQxUserMenuDetailEN>): Array<clsQxUserMenuDetailEN>
{
const arrQxUserMenuDetailObjLst = new Array<clsQxUserMenuDetailEN>();
for (const objInFor of arrQxUserMenuDetailObjLstS) {
const obj1 = QxUserMenuDetail_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUserMenuDetailObjLst.push(obj1);
}
return arrQxUserMenuDetailObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserMenuDetail_GetObjByJSONStr (strJSON: string): clsQxUserMenuDetailEN
{
let pobjQxUserMenuDetailEN = new clsQxUserMenuDetailEN();
if (strJSON === "")
{
return pobjQxUserMenuDetailEN;
}
try
{
pobjQxUserMenuDetailEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUserMenuDetailEN;
}
return pobjQxUserMenuDetailEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUserMenuDetail_GetCombineCondition(objQxUserMenuDetailCond: clsQxUserMenuDetailEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_mId) == true)
{
const strComparisonOpmId:string = objQxUserMenuDetailCond.dicFldComparisonOp[clsQxUserMenuDetailEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsQxUserMenuDetailEN.con_mId, objQxUserMenuDetailCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_MenuId) == true)
{
const strComparisonOpMenuId:string = objQxUserMenuDetailCond.dicFldComparisonOp[clsQxUserMenuDetailEN.con_MenuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserMenuDetailEN.con_MenuId, objQxUserMenuDetailCond.menuId, strComparisonOpMenuId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_MenuName) == true)
{
const strComparisonOpMenuName:string = objQxUserMenuDetailCond.dicFldComparisonOp[clsQxUserMenuDetailEN.con_MenuName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserMenuDetailEN.con_MenuName, objQxUserMenuDetailCond.menuName, strComparisonOpMenuName);
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_IsDisp) == true)
{
if (objQxUserMenuDetailCond.isDisp == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUserMenuDetailEN.con_IsDisp);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUserMenuDetailEN.con_IsDisp);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_UpMenuId) == true)
{
const strComparisonOpUpMenuId:string = objQxUserMenuDetailCond.dicFldComparisonOp[clsQxUserMenuDetailEN.con_UpMenuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserMenuDetailEN.con_UpMenuId, objQxUserMenuDetailCond.upMenuId, strComparisonOpUpMenuId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_LinkFile) == true)
{
const strComparisonOpLinkFile:string = objQxUserMenuDetailCond.dicFldComparisonOp[clsQxUserMenuDetailEN.con_LinkFile];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserMenuDetailEN.con_LinkFile, objQxUserMenuDetailCond.linkFile, strComparisonOpLinkFile);
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_ImgFile) == true)
{
const strComparisonOpImgFile:string = objQxUserMenuDetailCond.dicFldComparisonOp[clsQxUserMenuDetailEN.con_ImgFile];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserMenuDetailEN.con_ImgFile, objQxUserMenuDetailCond.imgFile, strComparisonOpImgFile);
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_IsCustomMenu) == true)
{
if (objQxUserMenuDetailCond.isCustomMenu == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUserMenuDetailEN.con_IsCustomMenu);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUserMenuDetailEN.con_IsCustomMenu);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objQxUserMenuDetailCond.dicFldComparisonOp[clsQxUserMenuDetailEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserMenuDetailEN.con_UserId, objQxUserMenuDetailCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxUserMenuDetailCond.dicFldComparisonOp[clsQxUserMenuDetailEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserMenuDetailEN.con_QxPrjId, objQxUserMenuDetailCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objQxUserMenuDetailCond.dicFldComparisonOp[clsQxUserMenuDetailEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsQxUserMenuDetailEN.con_OrderNum, objQxUserMenuDetailCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objQxUserMenuDetailCond.dicFldComparisonOp, clsQxUserMenuDetailEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUserMenuDetailCond.dicFldComparisonOp[clsQxUserMenuDetailEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserMenuDetailEN.con_Memo, objQxUserMenuDetailCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserMenuDetail(用户菜单),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strMenuId: 菜单Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserMenuDetail_GetUniCondStr(objQxUserMenuDetailEN: clsQxUserMenuDetailEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUserMenuDetailEN.userId);
 strWhereCond +=  Format(" and MenuId = '{0}'", objQxUserMenuDetailEN.menuId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserMenuDetail(用户菜单),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strMenuId: 菜单Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserMenuDetail_GetUniCondStr4Update(objQxUserMenuDetailEN: clsQxUserMenuDetailEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objQxUserMenuDetailEN.mId);
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUserMenuDetailEN.userId);
 strWhereCond +=  Format(" and MenuId = '{0}'", objQxUserMenuDetailEN.menuId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUserMenuDetailENS:源对象
 * @param objQxUserMenuDetailENT:目标对象
*/
export  function QxUserMenuDetail_GetObjFromJsonObj(objQxUserMenuDetailENS: clsQxUserMenuDetailEN): clsQxUserMenuDetailEN 
{
 const objQxUserMenuDetailENT: clsQxUserMenuDetailEN = new clsQxUserMenuDetailEN();
ObjectAssign(objQxUserMenuDetailENT, objQxUserMenuDetailENS);
 return objQxUserMenuDetailENT;
}