
 /**
 * 类名:clsQxRoleMenusENEx
 * 表名:QxRoleMenus(00140007)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:02:18
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 角色菜单(QxRoleMenus)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxRoleMenusEN } from "@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN";

export class  clsQxRoleMenusENEx extends clsQxRoleMenusEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsQxRoleMenusENEx.con_MenuName:
return this.menuName;
case clsQxRoleMenusENEx.con_RoleName:
return this.roleName;
case clsQxRoleMenusENEx.con_MenuSetName:
return this.menuSetName;
case clsQxRoleMenusENEx.con_OrderNum:
return this.orderNum;
case clsQxRoleMenusENEx.con_InUse:
return this.inUse;
case clsQxRoleMenusENEx.con_IsLeafNode:
return this.isLeafNode;
case clsQxRoleMenusENEx.con_PageDispModeId:
return this.pageDispModeId;
case clsQxRoleMenusENEx.con_UpMenuId:
return this.upMenuId;
case clsQxRoleMenusENEx.con_LinkFile:
return this.linkFile;
case clsQxRoleMenusENEx.con_PrjName:
return this.prjName;
case clsQxRoleMenusENEx.con_DateTimeSim:
return this.dateTimeSim;
case clsQxRoleMenusENEx.con_PageDispModeName:
return this.pageDispModeName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"MenuName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_MenuName = "menuName";    //菜单名

 /**
 * 常量:"RoleName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_RoleName = "roleName";    //角色名称

 /**
 * 常量:"MenuSetName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_MenuSetName = "menuSetName";    //菜单集名称

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_OrderNum = "orderNum";    //排序号

 /**
 * 常量:"InUse"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_InUse = "inUse";    //是否在用

 /**
 * 常量:"IsLeafNode"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_IsLeafNode = "isLeafNode";    //是否叶子

 /**
 * 常量:"PageDispModeId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_PageDispModeId = "pageDispModeId";    //页面显示模式Id

 /**
 * 常量:"UpMenuId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_UpMenuId = "upMenuId";    //上级菜单Id

 /**
 * 常量:"LinkFile"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_LinkFile = "linkFile";    //链接文件

 /**
 * 常量:"PrjName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_PrjName = "prjName";    //工程名

 /**
 * 常量:"DateTimeSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_DateTimeSim = "dateTimeSim";    //简化日期时间

 /**
 * 常量:"PageDispModeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_PageDispModeName = "pageDispModeName";    //页面显示模式名称

public menuName = "";    //菜单名
public roleName = "";    //角色名称
public menuSetName = "";    //菜单集名称
public orderNum = 0;    //排序号
public inUse = false;    //是否在用
public isLeafNode = false;    //是否叶子
public pageDispModeId = "";    //页面显示模式Id
public upMenuId = "";    //上级菜单Id
public linkFile = "";    //链接文件
public prjName = "";    //工程名
public dateTimeSim = "";    //简化日期时间
public pageDispModeName = "";    //页面显示模式名称

/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsQxRoleMenusENEx();
const instance = new clsQxRoleMenusENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}