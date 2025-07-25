
 /**
 * 类名:QxPotenceTypeVueShare(界面:QxPotenceTypeCRUD,00140041)
 * 表名:QxPotenceType(00140003)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:04:27
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
import { clsQxPotenceTypeENEx } from "@/ts/L0Entity/PotenceMan/clsQxPotenceTypeENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsQxPotenceTypeEN } from "@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortQxPotenceTypeBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortQxPotenceTypeBy,
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
const refQxPotenceType_Detail = ref ();
const refQxPotenceType_Edit = ref ();
const refQxPotenceType_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refQxPotenceType_Detail,
refQxPotenceType_Edit,
refQxPotenceType_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refQxPotenceType_Detail,
refQxPotenceType_Edit,
refQxPotenceType_List, };

export const showErrorMessage = ref (false);
export const dataListQxPotenceType = ref<Array<clsQxPotenceTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const qxPotenceTypeCache: { [key: string]: clsQxPotenceTypeENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const potenceTypeId_q = ref('');
export const potenceTypeName_q = ref('');
export const qxPrjId_q = ref('');
export const funcModuleId_q = ref('');
export const isVisible_q = ref('0')
const qryVarSet = reactive({
 potenceTypeId_q,
 potenceTypeName_q,
 qxPrjId_q,
 funcModuleId_q,
 isVisible_q,});
export { qryVarSet };

//功能区变量定义
export const isVisible_f = ref('0')
export const funcModuleId_f = ref('');
const featureVarSet = reactive({
 isVisible_f,
 funcModuleId_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineQxPotenceTypeCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( potenceTypeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPotenceTypeEN.con_PotenceTypeId, potenceTypeId_q.value);
}
if ( potenceTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPotenceTypeEN.con_PotenceTypeName, potenceTypeName_q.value);
}
if ( funcModuleId_q.value != "" && funcModuleId_q.value != "0")
{
strWhereCond += Format(" And QxPotenceType.{0} = '{1}'", clsQxPotenceTypeEN.con_FuncModuleId, funcModuleId_q.value);
}
if (isVisible_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsQxPotenceTypeEN.con_IsVisible); 
}
else if (isVisible_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsQxPotenceTypeEN.con_IsVisible);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineQxPotenceTypeCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxPotenceTypeConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxPotenceTypeCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objQxPotenceTypeCond.SetCondFldValue(clsQxPotenceTypeEN.con_QxPrjId, QxPrjId_Local.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( potenceTypeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPotenceTypeEN.con_PotenceTypeId, potenceTypeId_q.value);
objQxPotenceTypeCond.SetCondFldValue(clsQxPotenceTypeEN.con_PotenceTypeId, potenceTypeId_q.value, "like");
}
if ( potenceTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPotenceTypeEN.con_PotenceTypeName, potenceTypeName_q.value);
objQxPotenceTypeCond.SetCondFldValue(clsQxPotenceTypeEN.con_PotenceTypeName, potenceTypeName_q.value, "like");
}
if ( funcModuleId_q.value != "" && funcModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPotenceTypeEN.con_FuncModuleId, funcModuleId_q.value);
objQxPotenceTypeCond.SetCondFldValue(clsQxPotenceTypeEN.con_FuncModuleId, funcModuleId_q.value, "=");
}
if (isVisible_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsQxPotenceTypeEN.con_IsVisible); 
objQxPotenceTypeCond.SetCondFldValue(clsQxPotenceTypeEN.con_IsVisible, true, "=");
}
else if (isVisible_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsQxPotenceTypeEN.con_IsVisible);
objQxPotenceTypeCond.SetCondFldValue(clsQxPotenceTypeEN.con_IsVisible, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineQxPotenceTypeConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxPotenceTypeCond.whereCond = strWhereCond;
return objQxPotenceTypeCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxPotenceTypeConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxPotenceTypeCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objQxPotenceTypeCond.SetCondFldValue(clsQxPotenceTypeEN.con_QxPrjId, QxPrjId_Local.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( potenceTypeId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPotenceTypeEN.con_PotenceTypeId, potenceTypeId_q.value);
objQxPotenceTypeCond.SetCondFldValue(clsQxPotenceTypeEN.con_PotenceTypeId, potenceTypeId_q.value, "like");
}
if ( potenceTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPotenceTypeEN.con_PotenceTypeName, potenceTypeName_q.value);
objQxPotenceTypeCond.SetCondFldValue(clsQxPotenceTypeEN.con_PotenceTypeName, potenceTypeName_q.value, "like");
}
if ( funcModuleId_q.value != "" && funcModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPotenceTypeEN.con_FuncModuleId, funcModuleId_q.value);
objQxPotenceTypeCond.SetCondFldValue(clsQxPotenceTypeEN.con_FuncModuleId, funcModuleId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineQxPotenceTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxPotenceTypeCond.whereCond = strWhereCond;
return objQxPotenceTypeCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsQxPotenceTypeENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListQxPotenceType.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refQxPotenceType_List.value != null) refQxPotenceType_List.value.selectAllChecked = false;
};

export  function QxPotenceType_DeleteKeyIdCache( strPotenceTypeId:string):void
{


if (
IsNullOrEmpty(strPotenceTypeId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strPotenceTypeId }`;
delete qxPotenceTypeCache[cacheKey];
return;
}
}