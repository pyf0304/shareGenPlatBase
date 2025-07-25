
 /**
 * 类名:QxPrjPotenceVueShare(界面:QxPrjPotenceCRUD,00140042)
 * 表名:QxPrjPotence(00140005)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:04:35
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:权限管理(PotenceMan)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsQxPrjPotenceENEx } from "@/ts/L0Entity/PotenceMan/clsQxPrjPotenceENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsQxPrjPotenceEN } from "@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortQxPrjPotenceBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortQxPrjPotenceBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const QxPrjId_Local = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refQxPrjPotence_Detail = ref ();
const refQxPrjPotence_Edit = ref ();
const refQxPrjPotence_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refQxPrjPotence_Detail,
refQxPrjPotence_Edit,
refQxPrjPotence_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refQxPrjPotence_Detail,
refQxPrjPotence_Edit,
refQxPrjPotence_List, };

export const showErrorMessage = ref (false);
export const dataListQxPrjPotence = ref<Array<clsQxPrjPotenceENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const qxPrjPotenceCache: { [key: string]: clsQxPrjPotenceENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const potenceId_q = ref('');
export const potenceName_q = ref('');
export const qxPrjId_q = ref('');
export const funcModuleId_q = ref('');
export const potenceTypeId_q = ref('');
const qryVarSet = reactive({
 potenceId_q,
 potenceName_q,
 qxPrjId_q,
 funcModuleId_q,
 potenceTypeId_q,});
export { qryVarSet };

//功能区变量定义
export const roleId_f = ref('');
const featureVarSet = reactive({
 roleId_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineQxPrjPotenceCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( potenceId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjPotenceEN.con_PotenceId, potenceId_q.value);
}
if ( potenceName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjPotenceEN.con_PotenceName, potenceName_q.value);
}
if ( funcModuleId_q.value != "" && funcModuleId_q.value != "0")
{
strWhereCond += Format(" And QxPrjPotence.{0} = '{1}'", clsQxPrjPotenceEN.con_FuncModuleId, funcModuleId_q.value);
}
if ( potenceTypeId_q.value != "" && potenceTypeId_q.value != "0")
{
strWhereCond += Format(" And QxPrjPotence.{0} = '{1}'", clsQxPrjPotenceEN.con_PotenceTypeId, potenceTypeId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineQxPrjPotenceCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxPrjPotenceConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxPrjPotenceCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objQxPrjPotenceCond.SetCondFldValue(clsQxPrjPotenceEN.con_QxPrjId, QxPrjId_Local.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( potenceId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjPotenceEN.con_PotenceId, potenceId_q.value);
objQxPrjPotenceCond.SetCondFldValue(clsQxPrjPotenceEN.con_PotenceId, potenceId_q.value, "like");
}
if ( potenceName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjPotenceEN.con_PotenceName, potenceName_q.value);
objQxPrjPotenceCond.SetCondFldValue(clsQxPrjPotenceEN.con_PotenceName, potenceName_q.value, "like");
}
if ( funcModuleId_q.value != "" && funcModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjPotenceEN.con_FuncModuleId, funcModuleId_q.value);
objQxPrjPotenceCond.SetCondFldValue(clsQxPrjPotenceEN.con_FuncModuleId, funcModuleId_q.value, "=");
}
if ( potenceTypeId_q.value != "" && potenceTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjPotenceEN.con_PotenceTypeId, potenceTypeId_q.value);
objQxPrjPotenceCond.SetCondFldValue(clsQxPrjPotenceEN.con_PotenceTypeId, potenceTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineQxPrjPotenceConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxPrjPotenceCond.whereCond = strWhereCond;
return objQxPrjPotenceCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxPrjPotenceConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxPrjPotenceCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objQxPrjPotenceCond.SetCondFldValue(clsQxPrjPotenceEN.con_QxPrjId, QxPrjId_Local.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( potenceId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjPotenceEN.con_PotenceId, potenceId_q.value);
objQxPrjPotenceCond.SetCondFldValue(clsQxPrjPotenceEN.con_PotenceId, potenceId_q.value, "like");
}
if ( potenceName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjPotenceEN.con_PotenceName, potenceName_q.value);
objQxPrjPotenceCond.SetCondFldValue(clsQxPrjPotenceEN.con_PotenceName, potenceName_q.value, "like");
}
if ( funcModuleId_q.value != "" && funcModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjPotenceEN.con_FuncModuleId, funcModuleId_q.value);
objQxPrjPotenceCond.SetCondFldValue(clsQxPrjPotenceEN.con_FuncModuleId, funcModuleId_q.value, "=");
}
if ( potenceTypeId_q.value != "" && potenceTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjPotenceEN.con_PotenceTypeId, potenceTypeId_q.value);
objQxPrjPotenceCond.SetCondFldValue(clsQxPrjPotenceEN.con_PotenceTypeId, potenceTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineQxPrjPotenceConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxPrjPotenceCond.whereCond = strWhereCond;
return objQxPrjPotenceCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsQxPrjPotenceENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListQxPrjPotence.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refQxPrjPotence_List.value != null) refQxPrjPotence_List.value.selectAllChecked = false;
};

export  function QxPrjPotence_DeleteKeyIdCache(strQxPrjId: string,  strPotenceId:string):void
{

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In QxPrjPotenceVueShare.QxPrjPotence.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(QxPrjPotenceVueShare.QxPrjPotence.ReFreshCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}


if (
IsNullOrEmpty(strPotenceId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strPotenceId }_${ strQxPrjId }`;
delete qxPrjPotenceCache[cacheKey];
return;
}
}