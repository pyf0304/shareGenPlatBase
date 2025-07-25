
 /**
 * 类名:QxRolesVueShare(界面:QxRolesCRUD,00140036)
 * 表名:QxRoles(00140014)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:03:03
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
import { clsQxRolesENEx } from "@/ts/L0Entity/UserManage_GP/clsQxRolesENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsQxRolesEN } from "@/ts/L0Entity/UserManage_GP/clsQxRolesEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortQxRolesBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortQxRolesBy,
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
const refQxRoles_Detail = ref ();
const refQxRoles_Edit = ref ();
const refQxRoles_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refQxRoles_Detail,
refQxRoles_Edit,
refQxRoles_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refQxRoles_Detail,
refQxRoles_Edit,
refQxRoles_List, };

export const showErrorMessage = ref (false);
export const dataListQxRoles = ref<Array<clsQxRolesENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const qxRolesCache: { [key: string]: clsQxRolesENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const roleId_q = ref('');
export const roleName_q = ref('');
export const roleENName_q = ref('');
export const qxPrjId_q = ref('');
export const isInUse_q = ref('0')
export const userTypeId_q = ref('');
export const roleTypeId_q = ref('');
const qryVarSet = reactive({
 roleId_q,
 roleName_q,
 roleENName_q,
 qxPrjId_q,
 isInUse_q,
 userTypeId_q,
 roleTypeId_q,});
export { qryVarSet };

//功能区变量定义
export const roleTypeId_f = ref('');
export const userTypeId_f = ref('');
const featureVarSet = reactive({
 roleTypeId_f,
 userTypeId_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineQxRolesCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( roleId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxRolesEN.con_RoleId, roleId_q.value);
}
if ( roleName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxRolesEN.con_RoleName, roleName_q.value);
}
if ( roleENName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxRolesEN.con_RoleENName, roleENName_q.value);
}
if ( qxPrjId_q.value != "" && qxPrjId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRolesEN.con_QxPrjId, qxPrjId_q.value);
}
if (isInUse_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsQxRolesEN.con_IsInUse); 
}
else if (isInUse_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsQxRolesEN.con_IsInUse);
}
if ( userTypeId_q.value != "" && userTypeId_q.value != "0")
{
strWhereCond += Format(" And QxRoles.{0} = '{1}'", clsQxRolesEN.con_UserTypeId, userTypeId_q.value);
}
if ( roleTypeId_q.value != "" && roleTypeId_q.value != "0")
{
strWhereCond += Format(" And QxRoles.{0} = '{1}'", clsQxRolesEN.con_RoleTypeId, roleTypeId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineQxRolesCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxRolesConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxRolesCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( roleId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxRolesEN.con_RoleId, roleId_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_RoleId, roleId_q.value, "like");
}
if ( roleName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxRolesEN.con_RoleName, roleName_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_RoleName, roleName_q.value, "like");
}
if ( roleENName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxRolesEN.con_RoleENName, roleENName_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_RoleENName, roleENName_q.value, "like");
}
if ( qxPrjId_q.value != "" && qxPrjId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRolesEN.con_QxPrjId, qxPrjId_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_QxPrjId, qxPrjId_q.value, "=");
}
if (isInUse_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsQxRolesEN.con_IsInUse); 
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_IsInUse, true, "=");
}
else if (isInUse_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsQxRolesEN.con_IsInUse);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_IsInUse, false, "=");
}
if ( userTypeId_q.value != "" && userTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRolesEN.con_UserTypeId, userTypeId_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_UserTypeId, userTypeId_q.value, "=");
}
if ( roleTypeId_q.value != "" && roleTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRolesEN.con_RoleTypeId, roleTypeId_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_RoleTypeId, roleTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineQxRolesConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxRolesCond.whereCond = strWhereCond;
return objQxRolesCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxRolesConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objQxRolesCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( roleId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxRolesEN.con_RoleId, roleId_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_RoleId, roleId_q.value, "like");
}
if ( roleName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxRolesEN.con_RoleName, roleName_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_RoleName, roleName_q.value, "like");
}
if ( roleENName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsQxRolesEN.con_RoleENName, roleENName_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_RoleENName, roleENName_q.value, "like");
}
if ( qxPrjId_q.value != "" && qxPrjId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRolesEN.con_QxPrjId, qxPrjId_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_QxPrjId, qxPrjId_q.value, "=");
}
if ( userTypeId_q.value != "" && userTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRolesEN.con_UserTypeId, userTypeId_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_UserTypeId, userTypeId_q.value, "=");
}
if ( roleTypeId_q.value != "" && roleTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsQxRolesEN.con_RoleTypeId, roleTypeId_q.value);
objQxRolesCond.SetCondFldValue(clsQxRolesEN.con_RoleTypeId, roleTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineQxRolesConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objQxRolesCond.whereCond = strWhereCond;
return objQxRolesCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsQxRolesENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListQxRoles.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refQxRoles_List.value != null) refQxRoles_List.value.selectAllChecked = false;
};

export  function QxRoles_DeleteKeyIdCache(strQxPrjId: string,  strRoleId:string):void
{

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In QxRolesVueShare.QxRoles.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(QxRolesVueShare.QxRoles.ReFreshCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}


if (
IsNullOrEmpty(strRoleId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strRoleId }_${ strQxPrjId }`;
delete qxRolesCache[cacheKey];
return;
}
}