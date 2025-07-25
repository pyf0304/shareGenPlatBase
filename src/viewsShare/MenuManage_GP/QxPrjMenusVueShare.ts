
 /**
 * 类名:QxPrjMenusVueShare(界面:QxPrjMenusCRUD,00140040)
 * 表名:QxPrjMenus(00140004)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:04:20
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
import { clsQxPrjMenusENEx } from "@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsQxPrjMenusEN } from "@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortQxPrjMenusBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortQxPrjMenusBy,
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
const refQxPrjMenus_Detail = ref ();
const refQxPrjMenus_Edit = ref ();
const refQxPrjMenus_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refQxPrjMenus_Detail,
refQxPrjMenus_Edit,
refQxPrjMenus_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refQxPrjMenus_Detail,
refQxPrjMenus_Edit,
refQxPrjMenus_List, };

export const showErrorMessage = ref (false);
export const dataListQxPrjMenus = ref<Array<clsQxPrjMenusENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const qxPrjMenusCache: { [key: string]: clsQxPrjMenusENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const menuId_q = ref('');
export const menuName_q = ref('');
export const upMenuId_q = ref('');
export const menuTitle_q = ref('');
export const isLeafNode_q = ref('0')
export const inUse_q = ref('0')
export const menuSetId_q = ref('');
const qryVarSet = reactive({
 menuId_q,
 menuName_q,
 upMenuId_q,
 menuTitle_q,
 isLeafNode_q,
 inUse_q,
 menuSetId_q,});
export { qryVarSet };

//功能区变量定义
export const inUse_f = ref('0')
export const menuSetId_f = ref('');
const featureVarSet = reactive({
 inUse_f,
 menuSetId_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineQxPrjMenusCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( menuId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenusEN.con_MenuId, menuId_q.value);
}
if ( menuName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenusEN.con_MenuName, menuName_q.value);
}
if ( upMenuId_q.value != "" && upMenuId_q.value != "0")
{
strWhereCond += Format(" And QxPrjMenus.{0} = '{1}'", clsQxPrjMenusEN.con_UpMenuId, upMenuId_q.value);
}
if ( menuTitle_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenusEN.con_MenuTitle, menuTitle_q.value);
}
if (isLeafNode_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_IsLeafNode); 
}
else if (isLeafNode_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_IsLeafNode);
}
if (inUse_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_InUse); 
}
else if (inUse_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_InUse);
}
if ( menuSetId_q.value != "" && menuSetId_q.value != "0")
{
strWhereCond += Format(" And 1 ", menuSetId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineQxPrjMenusCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxPrjMenusConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxPrjMenusCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( menuId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenusEN.con_MenuId, menuId_q.value);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuId, menuId_q.value, "like");
}
if ( menuName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenusEN.con_MenuName, menuName_q.value);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuName, menuName_q.value, "like");
}
if ( upMenuId_q.value != "" && upMenuId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjMenusEN.con_UpMenuId, upMenuId_q.value);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_UpMenuId, upMenuId_q.value, "=");
}
if ( menuTitle_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenusEN.con_MenuTitle, menuTitle_q.value);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuTitle, menuTitle_q.value, "like");
}
if (isLeafNode_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_IsLeafNode); 
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_IsLeafNode, true, "=");
}
else if (isLeafNode_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_IsLeafNode);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_IsLeafNode, false, "=");
}
if (inUse_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_InUse); 
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_InUse, true, "=");
}
else if (inUse_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_InUse);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_InUse, false, "=");
}
if ( menuSetId_q.value != "" && menuSetId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjMenusENEx.con_MenuSetId, menuSetId_q.value);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusENEx.con_MenuSetId, menuSetId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineQxPrjMenusConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxPrjMenusCond.whereCond = strWhereCond;
return objQxPrjMenusCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxPrjMenusConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxPrjMenusCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( menuId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenusEN.con_MenuId, menuId_q.value);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuId, menuId_q.value, "like");
}
if ( menuName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenusEN.con_MenuName, menuName_q.value);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuName, menuName_q.value, "like");
}
if ( upMenuId_q.value != "" && upMenuId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjMenusEN.con_UpMenuId, upMenuId_q.value);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_UpMenuId, upMenuId_q.value, "=");
}
if ( menuTitle_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenusEN.con_MenuTitle, menuTitle_q.value);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuTitle, menuTitle_q.value, "like");
}
if ( menuSetId_q.value != "" && menuSetId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxPrjMenusENEx.con_MenuSetId, menuSetId_q.value);
objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusENEx.con_MenuSetId, menuSetId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineQxPrjMenusConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxPrjMenusCond.whereCond = strWhereCond;
return objQxPrjMenusCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsQxPrjMenusENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListQxPrjMenus.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refQxPrjMenus_List.value != null) refQxPrjMenus_List.value.selectAllChecked = false;
};

export  function QxPrjMenus_DeleteKeyIdCache( strMenuId:string):void
{


if (
IsNullOrEmpty(strMenuId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strMenuId }`;
delete qxPrjMenusCache[cacheKey];
return;
}
}