
 /**
 * 类名:clsQxPrjUserRelationWApi
 * 表名:QxPrjUserRelation(00140031)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:27:43
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
 * 工程用户关系(QxPrjUserRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { ObjectAssign,GetExceptionStr,myShowErrorMsg } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxPrjUserRelationENEx } from "@/ts/L0Entity/UserManage_GP/clsQxPrjUserRelationENEx";
import { clsQxPrjUserRelationEN } from "@/ts/L0Entity/UserManage_GP/clsQxPrjUserRelationEN";
import { Format,GetStrLen,tzDataType,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";

 export const qxPrjUserRelation_Controller = "QxPrjUserRelationApi";
 export const qxPrjUserRelation_ConstructorName = "qxPrjUserRelation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function QxPrjUserRelation_GetObjBymIdAsync(lngmId: number): Promise<clsQxPrjUserRelationEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxPrjUserRelationWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const objQxPrjUserRelation = QxPrjUserRelation_GetObjFromJsonObj(returnObj);
return objQxPrjUserRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxPrjUserRelation_SortFunDefa(a:clsQxPrjUserRelationEN , b:clsQxPrjUserRelationEN): number 
{
return a.mId-b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxPrjUserRelation_SortFunDefa2Fld(a:clsQxPrjUserRelationEN , b:clsQxPrjUserRelationEN): number 
{
if (a.qxPrjId == b.qxPrjId) return a.userId.localeCompare(b.userId);
else return a.qxPrjId.localeCompare(b.qxPrjId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxPrjUserRelation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxPrjUserRelationEN.con_mId:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
return a.mId-b.mId;
}
case clsQxPrjUserRelationEN.con_QxPrjId:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxPrjUserRelationEN.con_UserId:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
return a.userId.localeCompare(b.userId);
}
case clsQxPrjUserRelationEN.con_UpdDate:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxPrjUserRelationEN.con_UpdUser:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsQxPrjUserRelationEN.con_Memo:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjUserRelation]中不存在!(in ${ qxPrjUserRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxPrjUserRelationEN.con_mId:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
return b.mId-a.mId;
}
case clsQxPrjUserRelationEN.con_QxPrjId:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxPrjUserRelationEN.con_UserId:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
return b.userId.localeCompare(a.userId);
}
case clsQxPrjUserRelationEN.con_UpdDate:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxPrjUserRelationEN.con_UpdUser:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsQxPrjUserRelationEN.con_Memo:
return (a: clsQxPrjUserRelationEN, b: clsQxPrjUserRelationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjUserRelation]中不存在!(in ${ qxPrjUserRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxPrjUserRelation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxPrjUserRelationEN.con_mId:
return (obj: clsQxPrjUserRelationEN) => {
return obj.mId === value;
}
case clsQxPrjUserRelationEN.con_QxPrjId:
return (obj: clsQxPrjUserRelationEN) => {
return obj.qxPrjId === value;
}
case clsQxPrjUserRelationEN.con_UserId:
return (obj: clsQxPrjUserRelationEN) => {
return obj.userId === value;
}
case clsQxPrjUserRelationEN.con_UpdDate:
return (obj: clsQxPrjUserRelationEN) => {
return obj.updDate === value;
}
case clsQxPrjUserRelationEN.con_UpdUser:
return (obj: clsQxPrjUserRelationEN) => {
return obj.updUser === value;
}
case clsQxPrjUserRelationEN.con_Memo:
return (obj: clsQxPrjUserRelationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxPrjUserRelation]中不存在!(in ${ qxPrjUserRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxPrjUserRelation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPrjUserRelation_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_GetFirstObjAsync(strWhereCond: string): Promise<clsQxPrjUserRelationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const objQxPrjUserRelation = QxPrjUserRelation_GetObjFromJsonObj(returnObj);
return objQxPrjUserRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxPrjUserRelationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjUserRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsQxPrjUserRelationEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjUserRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxPrjUserRelationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjUserRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxPrjUserRelationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjUserRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxPrjUserRelationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxPrjUserRelationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxPrjUserRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_DelQxPrjUserRelationsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxPrjUserRelationsAsync";
const strAction = "DelQxPrjUserRelations";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objQxPrjUserRelationENS:源对象
 * @returns 目标对象=>clsQxPrjUserRelationEN:objQxPrjUserRelationENT
 **/
export  function QxPrjUserRelation_CopyToEx(objQxPrjUserRelationENS:clsQxPrjUserRelationEN ): clsQxPrjUserRelationENEx
{
const strThisFuncName  = QxPrjUserRelation_CopyToEx.name;
 const objQxPrjUserRelationENT = new clsQxPrjUserRelationENEx();
try
{
ObjectAssign(objQxPrjUserRelationENT, objQxPrjUserRelationENS);
 return objQxPrjUserRelationENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objQxPrjUserRelationENT;
}
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function QxPrjUserRelation_FuncMapByFldName(strFldName: string, objQxPrjUserRelationEx: clsQxPrjUserRelationENEx)
{
const strThisFuncName = QxPrjUserRelation_FuncMapByFldName.name;
console.log(objQxPrjUserRelationEx);
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsQxPrjUserRelationEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxPrjUserRelation_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return QxPrjUserRelation_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return QxPrjUserRelation_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function QxPrjUserRelation_DelQxPrjUserRelationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxPrjUserRelationsByCondAsync";
const strAction = "DelQxPrjUserRelationsByCond";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
 * @param objQxPrjUserRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxPrjUserRelation_AddNewRecordAsync(objQxPrjUserRelationEN: clsQxPrjUserRelationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxPrjUserRelationEN);
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjUserRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_AddNewObjSave(objQxPrjUserRelationEN: clsQxPrjUserRelationEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxPrjUserRelation_CheckPropertyNew(objQxPrjUserRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxPrjUserRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxPrjUserRelation_CheckUniCond4Add(objQxPrjUserRelationEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxPrjUserRelation_AddNewRecordAsync(objQxPrjUserRelationEN);
if (returnBool == true)
{
//QxPrjUserRelation_ReFreshCache();
}
else
{
const strInfo = `添加[工程用户关系(QxPrjUserRelation)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxPrjUserRelationEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxPrjUserRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxPrjUserRelation_CheckUniCond4Add(objQxPrjUserRelationEN: clsQxPrjUserRelationEN): Promise<boolean>{
const strUniquenessCondition = QxPrjUserRelation_GetUniCondStr(objQxPrjUserRelationEN);
const bolIsExistCondition = await QxPrjUserRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxPrjUserRelation_CheckUniCond4Update(objQxPrjUserRelationEN: clsQxPrjUserRelationEN): Promise<boolean>{
const strUniquenessCondition = QxPrjUserRelation_GetUniCondStr4Update(objQxPrjUserRelationEN);
const bolIsExistCondition = await QxPrjUserRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxPrjUserRelation_UpdateObjSave(objQxPrjUserRelationEN: clsQxPrjUserRelationEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxPrjUserRelationEN.sfUpdFldSetStr = objQxPrjUserRelationEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxPrjUserRelationEN.mId == 0 || objQxPrjUserRelationEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxPrjUserRelation_CheckProperty4Update(objQxPrjUserRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxPrjUserRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxPrjUserRelation_CheckUniCond4Update(objQxPrjUserRelationEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxPrjUserRelation_UpdateRecordAsync(objQxPrjUserRelationEN);
if (returnBool == true)
{
//QxPrjUserRelation_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxPrjUserRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxPrjUserRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxPrjUserRelation_AddNewRecordWithReturnKeyAsync(objQxPrjUserRelationEN: clsQxPrjUserRelationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjUserRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
 * @param objQxPrjUserRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxPrjUserRelation_UpdateRecordAsync(objQxPrjUserRelationEN: clsQxPrjUserRelationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxPrjUserRelationEN.sfUpdFldSetStr === undefined || objQxPrjUserRelationEN.sfUpdFldSetStr === null || objQxPrjUserRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjUserRelationEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjUserRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
 * @param objQxPrjUserRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxPrjUserRelation_EditRecordExAsync(objQxPrjUserRelationEN: clsQxPrjUserRelationEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxPrjUserRelationEN.sfUpdFldSetStr === undefined || objQxPrjUserRelationEN.sfUpdFldSetStr === null || objQxPrjUserRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjUserRelationEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjUserRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
 * @param objQxPrjUserRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxPrjUserRelation_UpdateWithConditionAsync(objQxPrjUserRelationEN: clsQxPrjUserRelationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxPrjUserRelationEN.sfUpdFldSetStr === undefined || objQxPrjUserRelationEN.sfUpdFldSetStr === null || objQxPrjUserRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxPrjUserRelationEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);
objQxPrjUserRelationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxPrjUserRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  async function QxPrjUserRelation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxPrjUserRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxPrjUserRelation_ConstructorName, strThisFuncName);
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
export  function QxPrjUserRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxPrjUserRelation_CheckPropertyNew(pobjQxPrjUserRelationEN: clsQxPrjUserRelationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.qxPrjId) === true 
 || pobjQxPrjUserRelationEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 工程用户关系)!(clsQxPrjUserRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.userId) === true 
 || pobjQxPrjUserRelationEN.userId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 工程用户关系)!(clsQxPrjUserRelationBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.qxPrjId) == false && GetStrLen(pobjQxPrjUserRelationEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 工程用户关系(QxPrjUserRelation))!值:${pobjQxPrjUserRelationEN.qxPrjId}(clsQxPrjUserRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.userId) == false && GetStrLen(pobjQxPrjUserRelationEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 工程用户关系(QxPrjUserRelation))!值:${pobjQxPrjUserRelationEN.userId}(clsQxPrjUserRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.updDate) == false && GetStrLen(pobjQxPrjUserRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程用户关系(QxPrjUserRelation))!值:${pobjQxPrjUserRelationEN.updDate}(clsQxPrjUserRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.updUser) == false && GetStrLen(pobjQxPrjUserRelationEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 工程用户关系(QxPrjUserRelation))!值:${pobjQxPrjUserRelationEN.updUser}(clsQxPrjUserRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.memo) == false && GetStrLen(pobjQxPrjUserRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 工程用户关系(QxPrjUserRelation))!值:${pobjQxPrjUserRelationEN.memo}(clsQxPrjUserRelationBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxPrjUserRelationEN.mId && undefined !== pobjQxPrjUserRelationEN.mId && tzDataType.isNumber(pobjQxPrjUserRelationEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(mId)]的值:[${pobjQxPrjUserRelationEN.mId}], 非法,应该为数值型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.qxPrjId) == false && undefined !== pobjQxPrjUserRelationEN.qxPrjId && tzDataType.isString(pobjQxPrjUserRelationEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxPrjUserRelationEN.qxPrjId}], 非法,应该为字符型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.userId) == false && undefined !== pobjQxPrjUserRelationEN.userId && tzDataType.isString(pobjQxPrjUserRelationEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjQxPrjUserRelationEN.userId}], 非法,应该为字符型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.updDate) == false && undefined !== pobjQxPrjUserRelationEN.updDate && tzDataType.isString(pobjQxPrjUserRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxPrjUserRelationEN.updDate}], 非法,应该为字符型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.updUser) == false && undefined !== pobjQxPrjUserRelationEN.updUser && tzDataType.isString(pobjQxPrjUserRelationEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户(updUser)]的值:[${pobjQxPrjUserRelationEN.updUser}], 非法,应该为字符型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.memo) == false && undefined !== pobjQxPrjUserRelationEN.memo && tzDataType.isString(pobjQxPrjUserRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxPrjUserRelationEN.memo}], 非法,应该为字符型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.qxPrjId) == false && pobjQxPrjUserRelationEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxPrjUserRelationEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 工程用户关系)!(clsQxPrjUserRelationBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxPrjUserRelation_CheckProperty4Update(pobjQxPrjUserRelationEN: clsQxPrjUserRelationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.qxPrjId) == false && GetStrLen(pobjQxPrjUserRelationEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 工程用户关系(QxPrjUserRelation))!值:${pobjQxPrjUserRelationEN.qxPrjId}(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.userId) == false && GetStrLen(pobjQxPrjUserRelationEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 工程用户关系(QxPrjUserRelation))!值:${pobjQxPrjUserRelationEN.userId}(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.updDate) == false && GetStrLen(pobjQxPrjUserRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程用户关系(QxPrjUserRelation))!值:${pobjQxPrjUserRelationEN.updDate}(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.updUser) == false && GetStrLen(pobjQxPrjUserRelationEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 工程用户关系(QxPrjUserRelation))!值:${pobjQxPrjUserRelationEN.updUser}(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.memo) == false && GetStrLen(pobjQxPrjUserRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 工程用户关系(QxPrjUserRelation))!值:${pobjQxPrjUserRelationEN.memo}(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxPrjUserRelationEN.mId && undefined !== pobjQxPrjUserRelationEN.mId && tzDataType.isNumber(pobjQxPrjUserRelationEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(mId)]的值:[${pobjQxPrjUserRelationEN.mId}], 非法,应该为数值型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.qxPrjId) == false && undefined !== pobjQxPrjUserRelationEN.qxPrjId && tzDataType.isString(pobjQxPrjUserRelationEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxPrjUserRelationEN.qxPrjId}], 非法,应该为字符型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.userId) == false && undefined !== pobjQxPrjUserRelationEN.userId && tzDataType.isString(pobjQxPrjUserRelationEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjQxPrjUserRelationEN.userId}], 非法,应该为字符型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.updDate) == false && undefined !== pobjQxPrjUserRelationEN.updDate && tzDataType.isString(pobjQxPrjUserRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxPrjUserRelationEN.updDate}], 非法,应该为字符型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.updUser) == false && undefined !== pobjQxPrjUserRelationEN.updUser && tzDataType.isString(pobjQxPrjUserRelationEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户(updUser)]的值:[${pobjQxPrjUserRelationEN.updUser}], 非法,应该为字符型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.memo) == false && undefined !== pobjQxPrjUserRelationEN.memo && tzDataType.isString(pobjQxPrjUserRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxPrjUserRelationEN.memo}], 非法,应该为字符型(In 工程用户关系(QxPrjUserRelation))!(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxPrjUserRelationEN.mId 
 || pobjQxPrjUserRelationEN.mId != null && pobjQxPrjUserRelationEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 工程用户关系)!(clsQxPrjUserRelationBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxPrjUserRelationEN.qxPrjId) == false && pobjQxPrjUserRelationEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxPrjUserRelationEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 工程用户关系)!(clsQxPrjUserRelationBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxPrjUserRelation_GetJSONStrByObj (pobjQxPrjUserRelationEN: clsQxPrjUserRelationEN): string
{
pobjQxPrjUserRelationEN.sfUpdFldSetStr = pobjQxPrjUserRelationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxPrjUserRelationEN);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxPrjUserRelation_GetObjLstByJSONStr (strJSON: string): Array<clsQxPrjUserRelationEN>
{
let arrQxPrjUserRelationObjLst = new Array<clsQxPrjUserRelationEN>();
if (strJSON === "")
{
return arrQxPrjUserRelationObjLst;
}
try
{
arrQxPrjUserRelationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxPrjUserRelationObjLst;
}
return arrQxPrjUserRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxPrjUserRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxPrjUserRelation_GetObjLstByJSONObjLst (arrQxPrjUserRelationObjLstS: Array<clsQxPrjUserRelationEN>): Array<clsQxPrjUserRelationEN>
{
const arrQxPrjUserRelationObjLst = new Array<clsQxPrjUserRelationEN>();
for (const objInFor of arrQxPrjUserRelationObjLstS) {
const obj1 = QxPrjUserRelation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxPrjUserRelationObjLst.push(obj1);
}
return arrQxPrjUserRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxPrjUserRelation_GetObjByJSONStr (strJSON: string): clsQxPrjUserRelationEN
{
let pobjQxPrjUserRelationEN = new clsQxPrjUserRelationEN();
if (strJSON === "")
{
return pobjQxPrjUserRelationEN;
}
try
{
pobjQxPrjUserRelationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxPrjUserRelationEN;
}
return pobjQxPrjUserRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxPrjUserRelation_GetCombineCondition(objQxPrjUserRelationCond: clsQxPrjUserRelationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxPrjUserRelationCond.dicFldComparisonOp, clsQxPrjUserRelationEN.con_mId) == true)
{
const strComparisonOpmId:string = objQxPrjUserRelationCond.dicFldComparisonOp[clsQxPrjUserRelationEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsQxPrjUserRelationEN.con_mId, objQxPrjUserRelationCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjUserRelationCond.dicFldComparisonOp, clsQxPrjUserRelationEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxPrjUserRelationCond.dicFldComparisonOp[clsQxPrjUserRelationEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjUserRelationEN.con_QxPrjId, objQxPrjUserRelationCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjUserRelationCond.dicFldComparisonOp, clsQxPrjUserRelationEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objQxPrjUserRelationCond.dicFldComparisonOp[clsQxPrjUserRelationEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjUserRelationEN.con_UserId, objQxPrjUserRelationCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjUserRelationCond.dicFldComparisonOp, clsQxPrjUserRelationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxPrjUserRelationCond.dicFldComparisonOp[clsQxPrjUserRelationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjUserRelationEN.con_UpdDate, objQxPrjUserRelationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjUserRelationCond.dicFldComparisonOp, clsQxPrjUserRelationEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxPrjUserRelationCond.dicFldComparisonOp[clsQxPrjUserRelationEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjUserRelationEN.con_UpdUser, objQxPrjUserRelationCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxPrjUserRelationCond.dicFldComparisonOp, clsQxPrjUserRelationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxPrjUserRelationCond.dicFldComparisonOp[clsQxPrjUserRelationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxPrjUserRelationEN.con_Memo, objQxPrjUserRelationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPrjUserRelation(工程用户关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPrjUserRelation_GetUniCondStr(objQxPrjUserRelationEN: clsQxPrjUserRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxPrjUserRelationEN.qxPrjId);
 strWhereCond +=  Format(" and UserId = '{0}'", objQxPrjUserRelationEN.userId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxPrjUserRelation(工程用户关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxPrjUserRelation_GetUniCondStr4Update(objQxPrjUserRelationEN: clsQxPrjUserRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objQxPrjUserRelationEN.mId);
 strWhereCond +=  Format(" and QxPrjId = '{0}'", objQxPrjUserRelationEN.qxPrjId);
 strWhereCond +=  Format(" and UserId = '{0}'", objQxPrjUserRelationEN.userId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxPrjUserRelationENS:源对象
 * @param objQxPrjUserRelationENT:目标对象
*/
export  function QxPrjUserRelation_GetObjFromJsonObj(objQxPrjUserRelationENS: clsQxPrjUserRelationEN): clsQxPrjUserRelationEN 
{
 const objQxPrjUserRelationENT: clsQxPrjUserRelationEN = new clsQxPrjUserRelationEN();
ObjectAssign(objQxPrjUserRelationENT, objQxPrjUserRelationENS);
 return objQxPrjUserRelationENT;
}