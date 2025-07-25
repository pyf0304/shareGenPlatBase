
 /**
 * 类名:QxPrjUserRelationVueShare(界面:QxPrjUserRelationCRUD,00140031)
 * 表名:QxPrjUserRelation(00140031)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:02:31
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsQxPrjUserRelationENEx } from "@/ts/L0Entity/UserManage_GP/clsQxPrjUserRelationENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsQxPrjUserRelationEN } from "@/ts/L0Entity/UserManage_GP/clsQxPrjUserRelationEN";
import { Format } from "@/ts/PubFun/clsString";

const ascOrDesc4SortFun = ref ('Asc');
const sortQxPrjUserRelationBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortQxPrjUserRelationBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refQxPrjUserRelation_Detail = ref ();
const refQxPrjUserRelation_Edit = ref ();
const refQxPrjUserRelation_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refQxPrjUserRelation_Detail,
refQxPrjUserRelation_Edit,
refQxPrjUserRelation_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refQxPrjUserRelation_Detail,
refQxPrjUserRelation_Edit,
refQxPrjUserRelation_List, };

export const showErrorMessage = ref (false);
export const dataListQxPrjUserRelation = ref<Array<clsQxPrjUserRelationENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const qxPrjUserRelationCache: { [key: string]: clsQxPrjUserRelationENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const qxPrjId_q = ref('');
export const userId_q = ref('');
export const updUser_q = ref('');
const qryVarSet = reactive({
 qxPrjId_q,
 userId_q,
 updUser_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineQxPrjUserRelationCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( qxPrjId_q.value != "" && qxPrjId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjUserRelationEN.con_QxPrjId, qxPrjId_q.value);
}
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjUserRelationEN.con_UserId, userId_q.value);
}
if ( updUser_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjUserRelationEN.con_UpdUser, updUser_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineQxPrjUserRelationCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxPrjUserRelationConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxPrjUserRelationCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( qxPrjId_q.value != "" && qxPrjId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjUserRelationEN.con_QxPrjId, qxPrjId_q.value);
objQxPrjUserRelationCond.SetCondFldValue(clsQxPrjUserRelationEN.con_QxPrjId, qxPrjId_q.value, "=");
}
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjUserRelationEN.con_UserId, userId_q.value);
objQxPrjUserRelationCond.SetCondFldValue(clsQxPrjUserRelationEN.con_UserId, userId_q.value, "=");
}
if ( updUser_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjUserRelationEN.con_UpdUser, updUser_q.value);
objQxPrjUserRelationCond.SetCondFldValue(clsQxPrjUserRelationEN.con_UpdUser, updUser_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineQxPrjUserRelationConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxPrjUserRelationCond.whereCond = strWhereCond;
return objQxPrjUserRelationCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxPrjUserRelationConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxPrjUserRelationCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( qxPrjId_q.value != "" && qxPrjId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjUserRelationEN.con_QxPrjId, qxPrjId_q.value);
objQxPrjUserRelationCond.SetCondFldValue(clsQxPrjUserRelationEN.con_QxPrjId, qxPrjId_q.value, "=");
}
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjUserRelationEN.con_UserId, userId_q.value);
objQxPrjUserRelationCond.SetCondFldValue(clsQxPrjUserRelationEN.con_UserId, userId_q.value, "=");
}
if ( updUser_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjUserRelationEN.con_UpdUser, updUser_q.value);
objQxPrjUserRelationCond.SetCondFldValue(clsQxPrjUserRelationEN.con_UpdUser, updUser_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineQxPrjUserRelationConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxPrjUserRelationCond.whereCond = strWhereCond;
return objQxPrjUserRelationCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsQxPrjUserRelationENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListQxPrjUserRelation.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refQxPrjUserRelation_List.value != null) refQxPrjUserRelation_List.value.selectAllChecked = false;
};

export  function QxPrjUserRelation_DeleteKeyIdCache( lngmId:number):void
{


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }`;
delete qxPrjUserRelationCache[cacheKey];
return;
}
}