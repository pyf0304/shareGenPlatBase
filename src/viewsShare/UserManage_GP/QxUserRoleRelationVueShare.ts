
 /**
 * 类名:QxUserRoleRelationVueShare(界面:QxUserRoleRelationCRUD,00140030)
 * 表名:QxUserRoleRelation(00140013)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:02:22
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
import { clsQxUserRoleRelationENEx } from "@/ts/L0Entity/UserManage_GP/clsQxUserRoleRelationENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsQxUserRoleRelationEN } from "@/ts/L0Entity/UserManage_GP/clsQxUserRoleRelationEN";
import { Format } from "@/ts/PubFun/clsString";

const ascOrDesc4SortFun = ref ('Asc');
const sortQxUserRoleRelationBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortQxUserRoleRelationBy,
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
const refQxUserRoleRelation_Detail = ref ();
const refQxUserRoleRelation_Edit = ref ();
const refQxUserRoleRelation_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refQxUserRoleRelation_Detail,
refQxUserRoleRelation_Edit,
refQxUserRoleRelation_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refQxUserRoleRelation_Detail,
refQxUserRoleRelation_Edit,
refQxUserRoleRelation_List, };

export const showErrorMessage = ref (false);
export const dataListQxUserRoleRelation = ref<Array<clsQxUserRoleRelationENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const qxUserRoleRelationCache: { [key: string]: clsQxUserRoleRelationENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const userId_q = ref('');
export const roleId_q = ref('');
export const qxPrjId_q = ref('');
export const idSchool_q = ref('');
const qryVarSet = reactive({
 userId_q,
 roleId_q,
 qxPrjId_q,
 idSchool_q,});
export { qryVarSet };

//功能区变量定义
export const idSchool_f = ref('');
const featureVarSet = reactive({
 idSchool_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineQxUserRoleRelationCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxUserRoleRelationEN.con_UserId, userId_q.value);
}
if ( roleId_q.value != "" && roleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxUserRoleRelationEN.con_RoleId, roleId_q.value);
}
if ( idSchool_q.value != "" && idSchool_q.value != "0")
{
strWhereCond += Format(" And QxUserRoleRelation.{0} = '{1}'", clsQxUserRoleRelationEN.con_IdSchool, idSchool_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineQxUserRoleRelationCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxUserRoleRelationConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxUserRoleRelationCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objQxUserRoleRelationCond.SetCondFldValue(clsQxUserRoleRelationEN.con_QxPrjId, QxPrjId_Local.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxUserRoleRelationEN.con_UserId, userId_q.value);
objQxUserRoleRelationCond.SetCondFldValue(clsQxUserRoleRelationEN.con_UserId, userId_q.value, "=");
}
if ( roleId_q.value != "" && roleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxUserRoleRelationEN.con_RoleId, roleId_q.value);
objQxUserRoleRelationCond.SetCondFldValue(clsQxUserRoleRelationEN.con_RoleId, roleId_q.value, "=");
}
if ( idSchool_q.value != "" && idSchool_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxUserRoleRelationEN.con_IdSchool, idSchool_q.value);
objQxUserRoleRelationCond.SetCondFldValue(clsQxUserRoleRelationEN.con_IdSchool, idSchool_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineQxUserRoleRelationConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxUserRoleRelationCond.whereCond = strWhereCond;
return objQxUserRoleRelationCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxUserRoleRelationConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxUserRoleRelationCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objQxUserRoleRelationCond.SetCondFldValue(clsQxUserRoleRelationEN.con_QxPrjId, QxPrjId_Local.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxUserRoleRelationEN.con_UserId, userId_q.value);
objQxUserRoleRelationCond.SetCondFldValue(clsQxUserRoleRelationEN.con_UserId, userId_q.value, "=");
}
if ( roleId_q.value != "" && roleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxUserRoleRelationEN.con_RoleId, roleId_q.value);
objQxUserRoleRelationCond.SetCondFldValue(clsQxUserRoleRelationEN.con_RoleId, roleId_q.value, "=");
}
if ( idSchool_q.value != "" && idSchool_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxUserRoleRelationEN.con_IdSchool, idSchool_q.value);
objQxUserRoleRelationCond.SetCondFldValue(clsQxUserRoleRelationEN.con_IdSchool, idSchool_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineQxUserRoleRelationConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxUserRoleRelationCond.whereCond = strWhereCond;
return objQxUserRoleRelationCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsQxUserRoleRelationENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListQxUserRoleRelation.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refQxUserRoleRelation_List.value != null) refQxUserRoleRelation_List.value.selectAllChecked = false;
};

export  function QxUserRoleRelation_DeleteKeyIdCache( lngmId:number):void
{


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }`;
delete qxUserRoleRelationCache[cacheKey];
return;
}
}