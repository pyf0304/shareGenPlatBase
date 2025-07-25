
 /**
 * 类名:QxRoleMenusVueShare(界面:QxRoleMenusCRUD,00140029)
 * 表名:QxRoleMenus(00140007)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:02:14
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
import { clsQxRoleMenusENEx } from "@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsQxRoleMenusEN } from "@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortQxRoleMenusBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortQxRoleMenusBy,
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
const refQxRoleMenus_Detail = ref ();
const refQxRoleMenus_Edit = ref ();
const refQxRoleMenus_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refQxRoleMenus_Detail,
refQxRoleMenus_Edit,
refQxRoleMenus_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refQxRoleMenus_Detail,
refQxRoleMenus_Edit,
refQxRoleMenus_List, };

export const showErrorMessage = ref (false);
export const dataListQxRoleMenus = ref<Array<clsQxRoleMenusENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const qxRoleMenusCache: { [key: string]: clsQxRoleMenusENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const roleId_q = ref('');
export const qxPrjId_q = ref('');
export const menuId_q = ref('');
const qryVarSet = reactive({
 roleId_q,
 qxPrjId_q,
 menuId_q,});
export { qryVarSet };

//功能区变量定义
export const menuSetId_f = ref('');
export const roleId_f = ref('');
const featureVarSet = reactive({
 menuSetId_f,
 roleId_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineQxRoleMenusCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( roleId_q.value != "" && roleId_q.value != "0")
{
strWhereCond += Format(" And QxRoleMenus.{0} = '{1}'", clsQxRoleMenusEN.con_RoleId, roleId_q.value);
}
if ( menuId_q.value != "" && menuId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRoleMenusEN.con_MenuId, menuId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineQxRoleMenusCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxRoleMenusConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxRoleMenusCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objQxRoleMenusCond.SetCondFldValue(clsQxRoleMenusEN.con_QxPrjId, QxPrjId_Local.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( roleId_q.value != "" && roleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRoleMenusEN.con_RoleId, roleId_q.value);
objQxRoleMenusCond.SetCondFldValue(clsQxRoleMenusEN.con_RoleId, roleId_q.value, "=");
}
if ( menuId_q.value != "" && menuId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRoleMenusEN.con_MenuId, menuId_q.value);
objQxRoleMenusCond.SetCondFldValue(clsQxRoleMenusEN.con_MenuId, menuId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineQxRoleMenusConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxRoleMenusCond.whereCond = strWhereCond;
return objQxRoleMenusCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxRoleMenusConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxRoleMenusCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objQxRoleMenusCond.SetCondFldValue(clsQxRoleMenusEN.con_QxPrjId, QxPrjId_Local.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( roleId_q.value != "" && roleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRoleMenusEN.con_RoleId, roleId_q.value);
objQxRoleMenusCond.SetCondFldValue(clsQxRoleMenusEN.con_RoleId, roleId_q.value, "=");
}
if ( menuId_q.value != "" && menuId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRoleMenusEN.con_MenuId, menuId_q.value);
objQxRoleMenusCond.SetCondFldValue(clsQxRoleMenusEN.con_MenuId, menuId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineQxRoleMenusConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxRoleMenusCond.whereCond = strWhereCond;
return objQxRoleMenusCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsQxRoleMenusENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListQxRoleMenus.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refQxRoleMenus_List.value != null) refQxRoleMenus_List.value.selectAllChecked = false;
};

export  function QxRoleMenus_DeleteKeyIdCache(strQxPrjId: string,  lngmId:number):void
{

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In QxRoleMenusVueShare.QxRoleMenus.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(QxRoleMenusVueShare.QxRoleMenus.ReFreshCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }_${ strQxPrjId }`;
delete qxRoleMenusCache[cacheKey];
return;
}
}