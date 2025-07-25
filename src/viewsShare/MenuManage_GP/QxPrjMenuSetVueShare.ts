
 /**
 * 类名:QxPrjMenuSetVueShare(界面:QxPrjMenuSetCRUD,00140043)
 * 表名:QxPrjMenuSet(00140045)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:04:41
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsQxPrjMenuSetENEx } from "@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsQxPrjMenuSetEN } from "@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortQxPrjMenuSetBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortQxPrjMenuSetBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const QxPrjId_Local = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refQxPrjMenuSet_Edit = ref ();
const refQxPrjMenuSet_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refQxPrjMenuSet_Edit,
refQxPrjMenuSet_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refQxPrjMenuSet_Edit,
refQxPrjMenuSet_List, };

export const showErrorMessage = ref (false);
export const dataListQxPrjMenuSet = ref<Array<clsQxPrjMenuSetENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const qxPrjMenuSetCache: { [key: string]: clsQxPrjMenuSetENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const menuSetId_q = ref('');
export const menuSetName_q = ref('');
export const menuSetENName_q = ref('');
export const qxPrjId_q = ref('');
export const cmPrjId_q = ref('');
const qryVarSet = reactive({
 menuSetId_q,
 menuSetName_q,
 menuSetENName_q,
 qxPrjId_q,
 cmPrjId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineQxPrjMenuSetCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and CmPrjId ='{0}'", CmPrjId_Local.value);
try
{
if ( menuSetId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenuSetEN.con_MenuSetId, menuSetId_q.value);
}
if ( menuSetName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenuSetEN.con_MenuSetName, menuSetName_q.value);
}
if ( menuSetENName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenuSetEN.con_MenuSetENName, menuSetENName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineQxPrjMenuSetCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxPrjMenuSetConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxPrjMenuSetCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objQxPrjMenuSetCond.SetCondFldValue(clsQxPrjMenuSetEN.con_QxPrjId, QxPrjId_Local.value, "=");
objQxPrjMenuSetCond.SetCondFldValue(clsQxPrjMenuSetEN.con_CmPrjId, CmPrjId_Local.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( menuSetId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenuSetEN.con_MenuSetId, menuSetId_q.value);
objQxPrjMenuSetCond.SetCondFldValue(clsQxPrjMenuSetEN.con_MenuSetId, menuSetId_q.value, "like");
}
if ( menuSetName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenuSetEN.con_MenuSetName, menuSetName_q.value);
objQxPrjMenuSetCond.SetCondFldValue(clsQxPrjMenuSetEN.con_MenuSetName, menuSetName_q.value, "like");
}
if ( menuSetENName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenuSetEN.con_MenuSetENName, menuSetENName_q.value);
objQxPrjMenuSetCond.SetCondFldValue(clsQxPrjMenuSetEN.con_MenuSetENName, menuSetENName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineQxPrjMenuSetConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxPrjMenuSetCond.whereCond = strWhereCond;
return objQxPrjMenuSetCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxPrjMenuSetConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxPrjMenuSetCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objQxPrjMenuSetCond.SetCondFldValue(clsQxPrjMenuSetEN.con_QxPrjId, QxPrjId_Local.value, "=");
objQxPrjMenuSetCond.SetCondFldValue(clsQxPrjMenuSetEN.con_CmPrjId, CmPrjId_Local.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( menuSetId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenuSetEN.con_MenuSetId, menuSetId_q.value);
objQxPrjMenuSetCond.SetCondFldValue(clsQxPrjMenuSetEN.con_MenuSetId, menuSetId_q.value, "like");
}
if ( menuSetName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenuSetEN.con_MenuSetName, menuSetName_q.value);
objQxPrjMenuSetCond.SetCondFldValue(clsQxPrjMenuSetEN.con_MenuSetName, menuSetName_q.value, "like");
}
if ( menuSetENName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenuSetEN.con_MenuSetENName, menuSetENName_q.value);
objQxPrjMenuSetCond.SetCondFldValue(clsQxPrjMenuSetEN.con_MenuSetENName, menuSetENName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineQxPrjMenuSetConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxPrjMenuSetCond.whereCond = strWhereCond;
return objQxPrjMenuSetCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsQxPrjMenuSetENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListQxPrjMenuSet.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refQxPrjMenuSet_List.value != null) refQxPrjMenuSet_List.value.selectAllChecked = false;
};

export  function QxPrjMenuSet_DeleteKeyIdCache( strMenuSetId:string):void
{


if (
IsNullOrEmpty(strMenuSetId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strMenuSetId }`;
delete qxPrjMenuSetCache[cacheKey];
return;
}
}