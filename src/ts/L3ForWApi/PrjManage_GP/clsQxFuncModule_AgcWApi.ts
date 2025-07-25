
 /**
 * 类名:clsQxFuncModule_AgcWApi
 * 表名:QxFuncModule_Agc(00140101)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:33
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:工程管理(PrjManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 功能模块_Agc(QxFuncModule_Agc)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月13日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxFuncModule_AgcEN } from "@/ts/L0Entity/PrjManage_GP/clsQxFuncModule_AgcEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxFuncModule_Agc_Controller = "QxFuncModule_AgcApi";
 export const qxFuncModule_Agc_ConstructorName = "qxFuncModule_Agc";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncModuleAgcId:关键字
 * @returns 对象
 **/
export  async function QxFuncModule_Agc_GetObjByFuncModuleAgcIdAsync(strFuncModuleAgcId: string): Promise<clsQxFuncModule_AgcEN|null>  
{
const strThisFuncName = "GetObjByFuncModuleAgcIdAsync";

if (IsNullOrEmpty(strFuncModuleAgcId) == true)
{
  const strMsg = Format("参数:[strFuncModuleAgcId]不能为空!(In clsQxFuncModule_AgcWApi.GetObjByFuncModuleAgcIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strFuncModuleAgcId.length != 8)
{
const strMsg = Format("缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsQxFuncModule_AgcWApi.GetObjByFuncModuleAgcIdAsync)", strFuncModuleAgcId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByFuncModuleAgcId";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFuncModuleAgcId,
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
const objQxFuncModule_Agc = QxFuncModule_Agc_GetObjFromJsonObj(returnObj);
return objQxFuncModule_Agc;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByFuncModuleAgcIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByFuncModuleAgcIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export  function QxFuncModule_Agc_SortFunDefa(a:clsQxFuncModule_AgcEN , b:clsQxFuncModule_AgcEN): number 
{
return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
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
export  function QxFuncModule_Agc_SortFunDefa2Fld(a:clsQxFuncModule_AgcEN , b:clsQxFuncModule_AgcEN): number 
{
if (a.funcModuleName == b.funcModuleName) return a.funcModuleEnName.localeCompare(b.funcModuleEnName);
else return a.funcModuleName.localeCompare(b.funcModuleName);
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
export  function QxFuncModule_Agc_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxFuncModule_AgcEN.con_FuncModuleAgcId:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
}
case clsQxFuncModule_AgcEN.con_FuncModuleName:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
return a.funcModuleName.localeCompare(b.funcModuleName);
}
case clsQxFuncModule_AgcEN.con_FuncModuleEnName:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (a.funcModuleEnName == null) return -1;
if (b.funcModuleEnName == null) return 1;
return a.funcModuleEnName.localeCompare(b.funcModuleEnName);
}
case clsQxFuncModule_AgcEN.con_FuncModuleNameSim:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (a.funcModuleNameSim == null) return -1;
if (b.funcModuleNameSim == null) return 1;
return a.funcModuleNameSim.localeCompare(b.funcModuleNameSim);
}
case clsQxFuncModule_AgcEN.con_QxPrjId:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxFuncModule_AgcEN.con_OrderNum:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
return a.orderNum-b.orderNum;
}
case clsQxFuncModule_AgcEN.con_UseStateId:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
return a.useStateId.localeCompare(b.useStateId);
}
case clsQxFuncModule_AgcEN.con_UpdUser:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsQxFuncModule_AgcEN.con_UpdDate:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxFuncModule_AgcEN.con_Memo:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsQxFuncModule_AgcEN.con_SynchDate:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (a.synchDate == null) return -1;
if (b.synchDate == null) return 1;
return a.synchDate.localeCompare(b.synchDate);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxFuncModule_Agc]中不存在!(in ${ qxFuncModule_Agc_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxFuncModule_AgcEN.con_FuncModuleAgcId:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
}
case clsQxFuncModule_AgcEN.con_FuncModuleName:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
return b.funcModuleName.localeCompare(a.funcModuleName);
}
case clsQxFuncModule_AgcEN.con_FuncModuleEnName:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (b.funcModuleEnName == null) return -1;
if (a.funcModuleEnName == null) return 1;
return b.funcModuleEnName.localeCompare(a.funcModuleEnName);
}
case clsQxFuncModule_AgcEN.con_FuncModuleNameSim:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (b.funcModuleNameSim == null) return -1;
if (a.funcModuleNameSim == null) return 1;
return b.funcModuleNameSim.localeCompare(a.funcModuleNameSim);
}
case clsQxFuncModule_AgcEN.con_QxPrjId:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxFuncModule_AgcEN.con_OrderNum:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
return b.orderNum-a.orderNum;
}
case clsQxFuncModule_AgcEN.con_UseStateId:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
return b.useStateId.localeCompare(a.useStateId);
}
case clsQxFuncModule_AgcEN.con_UpdUser:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsQxFuncModule_AgcEN.con_UpdDate:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxFuncModule_AgcEN.con_Memo:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsQxFuncModule_AgcEN.con_SynchDate:
return (a: clsQxFuncModule_AgcEN, b: clsQxFuncModule_AgcEN) => {
if (b.synchDate == null) return -1;
if (a.synchDate == null) return 1;
return b.synchDate.localeCompare(a.synchDate);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxFuncModule_Agc]中不存在!(in ${ qxFuncModule_Agc_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByFuncModuleAgcIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxFuncModule_Agc_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxFuncModule_AgcEN.con_FuncModuleAgcId:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.funcModuleAgcId === value;
}
case clsQxFuncModule_AgcEN.con_FuncModuleName:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.funcModuleName === value;
}
case clsQxFuncModule_AgcEN.con_FuncModuleEnName:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.funcModuleEnName === value;
}
case clsQxFuncModule_AgcEN.con_FuncModuleNameSim:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.funcModuleNameSim === value;
}
case clsQxFuncModule_AgcEN.con_QxPrjId:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.qxPrjId === value;
}
case clsQxFuncModule_AgcEN.con_OrderNum:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.orderNum === value;
}
case clsQxFuncModule_AgcEN.con_UseStateId:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.useStateId === value;
}
case clsQxFuncModule_AgcEN.con_UpdUser:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.updUser === value;
}
case clsQxFuncModule_AgcEN.con_UpdDate:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.updDate === value;
}
case clsQxFuncModule_AgcEN.con_Memo:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.memo === value;
}
case clsQxFuncModule_AgcEN.con_SynchDate:
return (obj: clsQxFuncModule_AgcEN) => {
return obj.synchDate === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxFuncModule_Agc]中不存在!(in ${ qxFuncModule_Agc_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxFuncModule_Agc__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxFuncModule_Agc_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_GetFirstObjAsync(strWhereCond: string): Promise<clsQxFuncModule_AgcEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const objQxFuncModule_Agc = QxFuncModule_Agc_GetObjFromJsonObj(returnObj);
return objQxFuncModule_Agc;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxFuncModule_AgcEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxFuncModule_Agc_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * @param arrFuncModuleAgcId:关键字列表
 * @returns 对象列表
 **/
export  async function QxFuncModule_Agc_GetObjLstByFuncModuleAgcIdLstAsync(arrFuncModuleAgcId: Array<string>): Promise<Array<clsQxFuncModule_AgcEN>>  
{
const strThisFuncName = "GetObjLstByFuncModuleAgcIdLstAsync";
const strAction = "GetObjLstByFuncModuleAgcIdLst";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrFuncModuleAgcId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxFuncModule_Agc_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByFuncModuleAgcIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxFuncModule_Agc_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxFuncModule_AgcEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxFuncModule_Agc_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxFuncModule_AgcEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxFuncModule_Agc_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxFuncModule_AgcEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxFuncModule_AgcEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxFuncModule_Agc_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * @param strFuncModuleAgcId:关键字
 * @returns 获取删除的结果
 **/
export  async function QxFuncModule_Agc_DelRecordAsync(strFuncModuleAgcId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strFuncModuleAgcId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * @param arrFuncModuleAgcId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function QxFuncModule_Agc_DelQxFuncModule_AgcsAsync(arrFuncModuleAgcId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxFuncModule_AgcsAsync";
const strAction = "DelQxFuncModule_Agcs";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrFuncModuleAgcId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_DelQxFuncModule_AgcsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxFuncModule_AgcsByCondAsync";
const strAction = "DelQxFuncModule_AgcsByCond";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_Agc_AddNewRecordAsync(objQxFuncModule_AgcEN: clsQxFuncModule_AgcEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxFuncModule_AgcEN.funcModuleAgcId === null || objQxFuncModule_AgcEN.funcModuleAgcId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxFuncModule_AgcEN);
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModule_AgcEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_Agc_AddNewRecordWithMaxIdAsync(objQxFuncModule_AgcEN: clsQxFuncModule_AgcEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModule_AgcEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objQxFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_Agc_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objQxFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_Agc_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxFuncModule_AgcEN);
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objQxFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_Agc_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxFuncModule_AgcEN);
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_AddNewObjSave(objQxFuncModule_AgcEN: clsQxFuncModule_AgcEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxFuncModule_Agc_CheckPropertyNew(objQxFuncModule_AgcEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxFuncModule_Agc_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await QxFuncModule_Agc_IsExistAsync(objQxFuncModule_AgcEN.funcModuleAgcId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objQxFuncModule_AgcEN.funcModuleAgcId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await QxFuncModule_Agc_AddNewRecordAsync(objQxFuncModule_AgcEN);
if (returnBool == true)
{
//QxFuncModule_Agc_ReFreshCache();
}
else
{
const strInfo = `添加[功能模块_Agc(QxFuncModule_Agc)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxFuncModule_AgcEN.funcModuleAgcId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxFuncModule_Agc_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function QxFuncModule_Agc_UpdateObjSave(objQxFuncModule_AgcEN: clsQxFuncModule_AgcEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxFuncModule_AgcEN.sfUpdFldSetStr = objQxFuncModule_AgcEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxFuncModule_AgcEN.funcModuleAgcId == "" || objQxFuncModule_AgcEN.funcModuleAgcId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxFuncModule_Agc_CheckProperty4Update(objQxFuncModule_AgcEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxFuncModule_Agc_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await QxFuncModule_Agc_UpdateRecordAsync(objQxFuncModule_AgcEN);
if (returnBool == true)
{
//QxFuncModule_Agc_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxFuncModule_Agc_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objQxFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_Agc_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxFuncModule_AgcEN);
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objQxFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxFuncModule_Agc_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objQxFuncModule_AgcEN);
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxFuncModule_AgcEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxFuncModule_Agc_AddNewRecordWithReturnKeyAsync(objQxFuncModule_AgcEN: clsQxFuncModule_AgcEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModule_AgcEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModule_AgcEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxFuncModule_Agc_UpdateRecordAsync(objQxFuncModule_AgcEN: clsQxFuncModule_AgcEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxFuncModule_AgcEN.sfUpdFldSetStr === undefined || objQxFuncModule_AgcEN.sfUpdFldSetStr === null || objQxFuncModule_AgcEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxFuncModule_AgcEN.funcModuleAgcId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModule_AgcEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModule_AgcEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxFuncModule_Agc_EditRecordExAsync(objQxFuncModule_AgcEN: clsQxFuncModule_AgcEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxFuncModule_AgcEN.sfUpdFldSetStr === undefined || objQxFuncModule_AgcEN.sfUpdFldSetStr === null || objQxFuncModule_AgcEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxFuncModule_AgcEN.funcModuleAgcId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModule_AgcEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * @param objQxFuncModule_AgcEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxFuncModule_Agc_UpdateWithConditionAsync(objQxFuncModule_AgcEN: clsQxFuncModule_AgcEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxFuncModule_AgcEN.sfUpdFldSetStr === undefined || objQxFuncModule_AgcEN.sfUpdFldSetStr === null || objQxFuncModule_AgcEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxFuncModule_AgcEN.funcModuleAgcId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);
objQxFuncModule_AgcEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxFuncModule_AgcEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
 * @param strFuncModuleAgcId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxFuncModule_Agc_IsExistAsync(strFuncModuleAgcId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFuncModuleAgcId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  async function QxFuncModule_Agc_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxFuncModule_Agc_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxFuncModule_Agc_ConstructorName, strThisFuncName);
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
export  function QxFuncModule_Agc_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxFuncModule_Agc_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await QxFuncModule_Agc_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxFuncModule_AgcEN.con_FuncModuleAgcId, clsQxFuncModule_AgcEN.con_FuncModuleName, "功能模块_Agc...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxFuncModule_Agc_GetArrQxFuncModule_Agc()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrQxFuncModule_Agc = new Array<clsQxFuncModule_AgcEN>();
const strCondition = `1=1`;
const arrObjLstSel = await QxFuncModule_Agc_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsQxFuncModule_AgcEN();
obj0.funcModuleAgcId = '0';
obj0.funcModuleName = '选功能模块_Agc...';
arrQxFuncModule_Agc.push(obj0);
arrObjLstSel.forEach(x => arrQxFuncModule_Agc.push(x));
return arrQxFuncModule_Agc;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxFuncModule_Agc_CheckPropertyNew(pobjQxFuncModule_AgcEN: clsQxFuncModule_AgcEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleName) === true )
{
 throw new Error(`(errid:Watl000411)字段[模块名]不能为空(In 功能模块_Agc)!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.qxPrjId) === true 
 || pobjQxFuncModule_AgcEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 功能模块_Agc)!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (null === pobjQxFuncModule_AgcEN.orderNum 
 || pobjQxFuncModule_AgcEN.orderNum != null && pobjQxFuncModule_AgcEN.orderNum.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[排序号]不能为空(In 功能模块_Agc)!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.useStateId) === true )
{
 throw new Error(`(errid:Watl000411)字段[UseStateId]不能为空(In 功能模块_Agc)!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleAgcId) == false && GetStrLen(pobjQxFuncModule_AgcEN.funcModuleAgcId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.funcModuleAgcId}(clsQxFuncModule_AgcBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleName) == false && GetStrLen(pobjQxFuncModule_AgcEN.funcModuleName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[模块名(funcModuleName)]的长度不能超过30(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.funcModuleName}(clsQxFuncModule_AgcBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleEnName) == false && GetStrLen(pobjQxFuncModule_AgcEN.funcModuleEnName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[模块英文名(funcModuleEnName)]的长度不能超过30(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.funcModuleEnName}(clsQxFuncModule_AgcBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleNameSim) == false && GetStrLen(pobjQxFuncModule_AgcEN.funcModuleNameSim) > 30)
{
 throw new Error(`(errid:Watl000413)字段[模块名_Sim(funcModuleNameSim)]的长度不能超过30(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.funcModuleNameSim}(clsQxFuncModule_AgcBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.qxPrjId) == false && GetStrLen(pobjQxFuncModule_AgcEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.qxPrjId}(clsQxFuncModule_AgcBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.useStateId) == false && GetStrLen(pobjQxFuncModule_AgcEN.useStateId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[UseStateId(useStateId)]的长度不能超过4(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.useStateId}(clsQxFuncModule_AgcBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.updUser) == false && GetStrLen(pobjQxFuncModule_AgcEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.updUser}(clsQxFuncModule_AgcBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.updDate) == false && GetStrLen(pobjQxFuncModule_AgcEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.updDate}(clsQxFuncModule_AgcBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.memo) == false && GetStrLen(pobjQxFuncModule_AgcEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.memo}(clsQxFuncModule_AgcBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.synchDate) == false && GetStrLen(pobjQxFuncModule_AgcEN.synchDate) > 30)
{
 throw new Error(`(errid:Watl000413)字段[同步日期(synchDate)]的长度不能超过30(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.synchDate}(clsQxFuncModule_AgcBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleAgcId) == false && undefined !== pobjQxFuncModule_AgcEN.funcModuleAgcId && tzDataType.isString(pobjQxFuncModule_AgcEN.funcModuleAgcId) === false)
{
 throw new Error(`(errid:Watl000414)字段[功能模块Id(funcModuleAgcId)]的值:[${pobjQxFuncModule_AgcEN.funcModuleAgcId}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleName) == false && undefined !== pobjQxFuncModule_AgcEN.funcModuleName && tzDataType.isString(pobjQxFuncModule_AgcEN.funcModuleName) === false)
{
 throw new Error(`(errid:Watl000414)字段[模块名(funcModuleName)]的值:[${pobjQxFuncModule_AgcEN.funcModuleName}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleEnName) == false && undefined !== pobjQxFuncModule_AgcEN.funcModuleEnName && tzDataType.isString(pobjQxFuncModule_AgcEN.funcModuleEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[模块英文名(funcModuleEnName)]的值:[${pobjQxFuncModule_AgcEN.funcModuleEnName}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleNameSim) == false && undefined !== pobjQxFuncModule_AgcEN.funcModuleNameSim && tzDataType.isString(pobjQxFuncModule_AgcEN.funcModuleNameSim) === false)
{
 throw new Error(`(errid:Watl000414)字段[模块名_Sim(funcModuleNameSim)]的值:[${pobjQxFuncModule_AgcEN.funcModuleNameSim}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.qxPrjId) == false && undefined !== pobjQxFuncModule_AgcEN.qxPrjId && tzDataType.isString(pobjQxFuncModule_AgcEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxFuncModule_AgcEN.qxPrjId}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (null != pobjQxFuncModule_AgcEN.orderNum && undefined !== pobjQxFuncModule_AgcEN.orderNum && tzDataType.isNumber(pobjQxFuncModule_AgcEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[排序号(orderNum)]的值:[${pobjQxFuncModule_AgcEN.orderNum}], 非法,应该为数值型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.useStateId) == false && undefined !== pobjQxFuncModule_AgcEN.useStateId && tzDataType.isString(pobjQxFuncModule_AgcEN.useStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[UseStateId(useStateId)]的值:[${pobjQxFuncModule_AgcEN.useStateId}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.updUser) == false && undefined !== pobjQxFuncModule_AgcEN.updUser && tzDataType.isString(pobjQxFuncModule_AgcEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户(updUser)]的值:[${pobjQxFuncModule_AgcEN.updUser}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.updDate) == false && undefined !== pobjQxFuncModule_AgcEN.updDate && tzDataType.isString(pobjQxFuncModule_AgcEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxFuncModule_AgcEN.updDate}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.memo) == false && undefined !== pobjQxFuncModule_AgcEN.memo && tzDataType.isString(pobjQxFuncModule_AgcEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxFuncModule_AgcEN.memo}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.synchDate) == false && undefined !== pobjQxFuncModule_AgcEN.synchDate && tzDataType.isString(pobjQxFuncModule_AgcEN.synchDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[同步日期(synchDate)]的值:[${pobjQxFuncModule_AgcEN.synchDate}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.qxPrjId) == false && pobjQxFuncModule_AgcEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxFuncModule_AgcEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 功能模块_Agc)!(clsQxFuncModule_AgcBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.useStateId) == false && pobjQxFuncModule_AgcEN.useStateId != '[nuull]' && GetStrLen(pobjQxFuncModule_AgcEN.useStateId) !=  4)
{
 throw ("(errid:Watl000415)字段[UseStateId]作为外键字段,长度应该为4(In 功能模块_Agc)!(clsQxFuncModule_AgcBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxFuncModule_Agc_CheckProperty4Update(pobjQxFuncModule_AgcEN: clsQxFuncModule_AgcEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleAgcId) == false && GetStrLen(pobjQxFuncModule_AgcEN.funcModuleAgcId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.funcModuleAgcId}(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleName) == false && GetStrLen(pobjQxFuncModule_AgcEN.funcModuleName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[模块名(funcModuleName)]的长度不能超过30(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.funcModuleName}(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleEnName) == false && GetStrLen(pobjQxFuncModule_AgcEN.funcModuleEnName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[模块英文名(funcModuleEnName)]的长度不能超过30(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.funcModuleEnName}(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleNameSim) == false && GetStrLen(pobjQxFuncModule_AgcEN.funcModuleNameSim) > 30)
{
 throw new Error(`(errid:Watl000416)字段[模块名_Sim(funcModuleNameSim)]的长度不能超过30(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.funcModuleNameSim}(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.qxPrjId) == false && GetStrLen(pobjQxFuncModule_AgcEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.qxPrjId}(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.useStateId) == false && GetStrLen(pobjQxFuncModule_AgcEN.useStateId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[UseStateId(useStateId)]的长度不能超过4(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.useStateId}(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.updUser) == false && GetStrLen(pobjQxFuncModule_AgcEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.updUser}(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.updDate) == false && GetStrLen(pobjQxFuncModule_AgcEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.updDate}(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.memo) == false && GetStrLen(pobjQxFuncModule_AgcEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.memo}(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.synchDate) == false && GetStrLen(pobjQxFuncModule_AgcEN.synchDate) > 30)
{
 throw new Error(`(errid:Watl000416)字段[同步日期(synchDate)]的长度不能超过30(In 功能模块_Agc(QxFuncModule_Agc))!值:${pobjQxFuncModule_AgcEN.synchDate}(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleAgcId) == false && undefined !== pobjQxFuncModule_AgcEN.funcModuleAgcId && tzDataType.isString(pobjQxFuncModule_AgcEN.funcModuleAgcId) === false)
{
 throw new Error(`(errid:Watl000417)字段[功能模块Id(funcModuleAgcId)]的值:[${pobjQxFuncModule_AgcEN.funcModuleAgcId}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleName) == false && undefined !== pobjQxFuncModule_AgcEN.funcModuleName && tzDataType.isString(pobjQxFuncModule_AgcEN.funcModuleName) === false)
{
 throw new Error(`(errid:Watl000417)字段[模块名(funcModuleName)]的值:[${pobjQxFuncModule_AgcEN.funcModuleName}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleEnName) == false && undefined !== pobjQxFuncModule_AgcEN.funcModuleEnName && tzDataType.isString(pobjQxFuncModule_AgcEN.funcModuleEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[模块英文名(funcModuleEnName)]的值:[${pobjQxFuncModule_AgcEN.funcModuleEnName}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleNameSim) == false && undefined !== pobjQxFuncModule_AgcEN.funcModuleNameSim && tzDataType.isString(pobjQxFuncModule_AgcEN.funcModuleNameSim) === false)
{
 throw new Error(`(errid:Watl000417)字段[模块名_Sim(funcModuleNameSim)]的值:[${pobjQxFuncModule_AgcEN.funcModuleNameSim}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.qxPrjId) == false && undefined !== pobjQxFuncModule_AgcEN.qxPrjId && tzDataType.isString(pobjQxFuncModule_AgcEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxFuncModule_AgcEN.qxPrjId}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (null != pobjQxFuncModule_AgcEN.orderNum && undefined !== pobjQxFuncModule_AgcEN.orderNum && tzDataType.isNumber(pobjQxFuncModule_AgcEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[排序号(orderNum)]的值:[${pobjQxFuncModule_AgcEN.orderNum}], 非法,应该为数值型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.useStateId) == false && undefined !== pobjQxFuncModule_AgcEN.useStateId && tzDataType.isString(pobjQxFuncModule_AgcEN.useStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[UseStateId(useStateId)]的值:[${pobjQxFuncModule_AgcEN.useStateId}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.updUser) == false && undefined !== pobjQxFuncModule_AgcEN.updUser && tzDataType.isString(pobjQxFuncModule_AgcEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户(updUser)]的值:[${pobjQxFuncModule_AgcEN.updUser}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.updDate) == false && undefined !== pobjQxFuncModule_AgcEN.updDate && tzDataType.isString(pobjQxFuncModule_AgcEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxFuncModule_AgcEN.updDate}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.memo) == false && undefined !== pobjQxFuncModule_AgcEN.memo && tzDataType.isString(pobjQxFuncModule_AgcEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxFuncModule_AgcEN.memo}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.synchDate) == false && undefined !== pobjQxFuncModule_AgcEN.synchDate && tzDataType.isString(pobjQxFuncModule_AgcEN.synchDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[同步日期(synchDate)]的值:[${pobjQxFuncModule_AgcEN.synchDate}], 非法,应该为字符型(In 功能模块_Agc(QxFuncModule_Agc))!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.funcModuleAgcId) === true )
{
 throw new Error(`(errid:Watl000064)字段[功能模块Id]不能为空(In 功能模块_Agc)!(clsQxFuncModule_AgcBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.qxPrjId) == false && pobjQxFuncModule_AgcEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxFuncModule_AgcEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 功能模块_Agc)!(clsQxFuncModule_AgcBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxFuncModule_AgcEN.useStateId) == false && pobjQxFuncModule_AgcEN.useStateId != '[nuull]' && GetStrLen(pobjQxFuncModule_AgcEN.useStateId) !=  4)
{
 throw ("(errid:Watl000418)字段[UseStateId]作为外键字段,长度应该为4(In 功能模块_Agc)!(clsQxFuncModule_AgcBL:CheckPropertyNew)");
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
export  function QxFuncModule_Agc_GetJSONStrByObj (pobjQxFuncModule_AgcEN: clsQxFuncModule_AgcEN): string
{
pobjQxFuncModule_AgcEN.sfUpdFldSetStr = pobjQxFuncModule_AgcEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxFuncModule_AgcEN);
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
export  function QxFuncModule_Agc_GetObjLstByJSONStr (strJSON: string): Array<clsQxFuncModule_AgcEN>
{
let arrQxFuncModule_AgcObjLst = new Array<clsQxFuncModule_AgcEN>();
if (strJSON === "")
{
return arrQxFuncModule_AgcObjLst;
}
try
{
arrQxFuncModule_AgcObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxFuncModule_AgcObjLst;
}
return arrQxFuncModule_AgcObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxFuncModule_AgcObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxFuncModule_Agc_GetObjLstByJSONObjLst (arrQxFuncModule_AgcObjLstS: Array<clsQxFuncModule_AgcEN>): Array<clsQxFuncModule_AgcEN>
{
const arrQxFuncModule_AgcObjLst = new Array<clsQxFuncModule_AgcEN>();
for (const objInFor of arrQxFuncModule_AgcObjLstS) {
const obj1 = QxFuncModule_Agc_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxFuncModule_AgcObjLst.push(obj1);
}
return arrQxFuncModule_AgcObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxFuncModule_Agc_GetObjByJSONStr (strJSON: string): clsQxFuncModule_AgcEN
{
let pobjQxFuncModule_AgcEN = new clsQxFuncModule_AgcEN();
if (strJSON === "")
{
return pobjQxFuncModule_AgcEN;
}
try
{
pobjQxFuncModule_AgcEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxFuncModule_AgcEN;
}
return pobjQxFuncModule_AgcEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxFuncModule_Agc_GetCombineCondition(objQxFuncModule_AgcCond: clsQxFuncModule_AgcEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_FuncModuleAgcId) == true)
{
const strComparisonOpFuncModuleAgcId:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_FuncModuleAgcId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModule_AgcEN.con_FuncModuleAgcId, objQxFuncModule_AgcCond.funcModuleAgcId, strComparisonOpFuncModuleAgcId);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_FuncModuleName) == true)
{
const strComparisonOpFuncModuleName:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_FuncModuleName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModule_AgcEN.con_FuncModuleName, objQxFuncModule_AgcCond.funcModuleName, strComparisonOpFuncModuleName);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_FuncModuleEnName) == true)
{
const strComparisonOpFuncModuleEnName:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_FuncModuleEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModule_AgcEN.con_FuncModuleEnName, objQxFuncModule_AgcCond.funcModuleEnName, strComparisonOpFuncModuleEnName);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_FuncModuleNameSim) == true)
{
const strComparisonOpFuncModuleNameSim:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_FuncModuleNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModule_AgcEN.con_FuncModuleNameSim, objQxFuncModule_AgcCond.funcModuleNameSim, strComparisonOpFuncModuleNameSim);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModule_AgcEN.con_QxPrjId, objQxFuncModule_AgcCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsQxFuncModule_AgcEN.con_OrderNum, objQxFuncModule_AgcCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_UseStateId) == true)
{
const strComparisonOpUseStateId:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_UseStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModule_AgcEN.con_UseStateId, objQxFuncModule_AgcCond.useStateId, strComparisonOpUseStateId);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModule_AgcEN.con_UpdUser, objQxFuncModule_AgcCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModule_AgcEN.con_UpdDate, objQxFuncModule_AgcCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModule_AgcEN.con_Memo, objQxFuncModule_AgcCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objQxFuncModule_AgcCond.dicFldComparisonOp, clsQxFuncModule_AgcEN.con_SynchDate) == true)
{
const strComparisonOpSynchDate:string = objQxFuncModule_AgcCond.dicFldComparisonOp[clsQxFuncModule_AgcEN.con_SynchDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxFuncModule_AgcEN.con_SynchDate, objQxFuncModule_AgcCond.synchDate, strComparisonOpSynchDate);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxFuncModule_AgcENS:源对象
 * @param objQxFuncModule_AgcENT:目标对象
*/
export  function QxFuncModule_Agc_GetObjFromJsonObj(objQxFuncModule_AgcENS: clsQxFuncModule_AgcEN): clsQxFuncModule_AgcEN 
{
 const objQxFuncModule_AgcENT: clsQxFuncModule_AgcEN = new clsQxFuncModule_AgcEN();
ObjectAssign(objQxFuncModule_AgcENT, objQxFuncModule_AgcENS);
 return objQxFuncModule_AgcENT;
}