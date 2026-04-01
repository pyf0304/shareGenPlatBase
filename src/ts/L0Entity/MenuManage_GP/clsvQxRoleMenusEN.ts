
 /**
 * 类名:clsvQxRoleMenusEN
 * 表名:vQxRoleMenus(00140034)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:04:17
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v角色菜单(vQxRoleMenus)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxRoleMenusEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "05"; //未知
public static readonly _PrimaryTypeId: string = "02"; //identity
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "vQxRoleMenus"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 25;
public static readonly _AttributeName = ["mId", "roleId", "roleName", "qxPrjId", "menuId", "menuName", "prjName", "upMenuId", "linkFile", "qsParameters", "imgFile", "orderNum", "isLeafNode", "menuSetId", "menuSetName", "menuTitle", "pageDispModeId", "pageDispModeName", "inUse", "upMenuName", "roleNum", "isDisp", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsvQxRoleMenusEN.con_mId:
return this.mId;
case clsvQxRoleMenusEN.con_RoleId:
return this.roleId;
case clsvQxRoleMenusEN.con_RoleName:
return this.roleName;
case clsvQxRoleMenusEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxRoleMenusEN.con_MenuId:
return this.menuId;
case clsvQxRoleMenusEN.con_MenuName:
return this.menuName;
case clsvQxRoleMenusEN.con_PrjName:
return this.prjName;
case clsvQxRoleMenusEN.con_UpMenuId:
return this.upMenuId;
case clsvQxRoleMenusEN.con_LinkFile:
return this.linkFile;
case clsvQxRoleMenusEN.con_qsParameters:
return this.qsParameters;
case clsvQxRoleMenusEN.con_ImgFile:
return this.imgFile;
case clsvQxRoleMenusEN.con_OrderNum:
return this.orderNum;
case clsvQxRoleMenusEN.con_IsLeafNode:
return this.isLeafNode;
case clsvQxRoleMenusEN.con_MenuSetId:
return this.menuSetId;
case clsvQxRoleMenusEN.con_MenuSetName:
return this.menuSetName;
case clsvQxRoleMenusEN.con_MenuTitle:
return this.menuTitle;
case clsvQxRoleMenusEN.con_PageDispModeId:
return this.pageDispModeId;
case clsvQxRoleMenusEN.con_PageDispModeName:
return this.pageDispModeName;
case clsvQxRoleMenusEN.con_InUse:
return this.inUse;
case clsvQxRoleMenusEN.con_UpMenuName:
return this.upMenuName;
case clsvQxRoleMenusEN.con_RoleNum:
return this.roleNum;
case clsvQxRoleMenusEN.con_IsDisp:
return this.isDisp;
case clsvQxRoleMenusEN.con_UpdDate:
return this.updDate;
case clsvQxRoleMenusEN.con_UpdUserId:
return this.updUserId;
case clsvQxRoleMenusEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxRoleMenus]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsvQxRoleMenusEN.con_mId:
this.mId = Number(strValue);
break;
case clsvQxRoleMenusEN.con_RoleId:
this.roleId = strValue;
break;
case clsvQxRoleMenusEN.con_RoleName:
this.roleName = strValue;
break;
case clsvQxRoleMenusEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxRoleMenusEN.con_MenuId:
this.menuId = strValue;
break;
case clsvQxRoleMenusEN.con_MenuName:
this.menuName = strValue;
break;
case clsvQxRoleMenusEN.con_PrjName:
this.prjName = strValue;
break;
case clsvQxRoleMenusEN.con_UpMenuId:
this.upMenuId = strValue;
break;
case clsvQxRoleMenusEN.con_LinkFile:
this.linkFile = strValue;
break;
case clsvQxRoleMenusEN.con_qsParameters:
this.qsParameters = strValue;
break;
case clsvQxRoleMenusEN.con_ImgFile:
this.imgFile = strValue;
break;
case clsvQxRoleMenusEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvQxRoleMenusEN.con_IsLeafNode:
this.isLeafNode = Boolean(strValue);
break;
case clsvQxRoleMenusEN.con_MenuSetId:
this.menuSetId = strValue;
break;
case clsvQxRoleMenusEN.con_MenuSetName:
this.menuSetName = strValue;
break;
case clsvQxRoleMenusEN.con_MenuTitle:
this.menuTitle = strValue;
break;
case clsvQxRoleMenusEN.con_PageDispModeId:
this.pageDispModeId = strValue;
break;
case clsvQxRoleMenusEN.con_PageDispModeName:
this.pageDispModeName = strValue;
break;
case clsvQxRoleMenusEN.con_InUse:
this.inUse = Boolean(strValue);
break;
case clsvQxRoleMenusEN.con_UpMenuName:
this.upMenuName = strValue;
break;
case clsvQxRoleMenusEN.con_RoleNum:
this.roleNum = Number(strValue);
break;
case clsvQxRoleMenusEN.con_IsDisp:
this.isDisp = Boolean(strValue);
break;
case clsvQxRoleMenusEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQxRoleMenusEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvQxRoleMenusEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxRoleMenus]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //流水号
public roleId = "";    //角色Id
public roleName = "";    //角色名称
public qxPrjId = "";    //项目Id
public menuId = "";    //菜单Id
public menuName = "";    //菜单名
public prjName = "";    //工程名
public upMenuId = "";    //上级菜单Id
public linkFile = "";    //链接文件
public qsParameters = "";    //qs参数
public imgFile = "";    //图像文件
public orderNum = 0;    //排序号
public isLeafNode = false;    //是否叶子
public menuSetId = "";    //菜单集Id
public menuSetName = "";    //菜单集名称
public menuTitle = "";    //菜单标题
public pageDispModeId = "";    //页面显示模式Id
public pageDispModeName = "";    //页面显示模式名称
public inUse = false;    //是否在用
public upMenuName = "";    //上级菜单名
public roleNum = 0;    //角色数
public isDisp = false;    //是否显示
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_mId = "mId";    //流水号

 /**
 * 常量:"RoleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_RoleId = "roleId";    //角色Id

 /**
 * 常量:"RoleName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_RoleName = "roleName";    //角色名称

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_QxPrjId = "qxPrjId";    //项目Id

 /**
 * 常量:"MenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_MenuId = "menuId";    //菜单Id

 /**
 * 常量:"MenuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_MenuName = "menuName";    //菜单名

 /**
 * 常量:"PrjName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PrjName = "prjName";    //工程名

 /**
 * 常量:"UpMenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpMenuId = "upMenuId";    //上级菜单Id

 /**
 * 常量:"LinkFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_LinkFile = "linkFile";    //链接文件

 /**
 * 常量:"qsParameters"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_qsParameters = "qsParameters";    //qs参数

 /**
 * 常量:"ImgFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_ImgFile = "imgFile";    //图像文件

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_OrderNum = "orderNum";    //排序号

 /**
 * 常量:"IsLeafNode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsLeafNode = "isLeafNode";    //是否叶子

 /**
 * 常量:"MenuSetId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_MenuSetId = "menuSetId";    //菜单集Id

 /**
 * 常量:"MenuSetName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_MenuSetName = "menuSetName";    //菜单集名称

 /**
 * 常量:"MenuTitle"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_MenuTitle = "menuTitle";    //菜单标题

 /**
 * 常量:"PageDispModeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PageDispModeId = "pageDispModeId";    //页面显示模式Id

 /**
 * 常量:"PageDispModeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PageDispModeName = "pageDispModeName";    //页面显示模式名称

 /**
 * 常量:"InUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_InUse = "inUse";    //是否在用

 /**
 * 常量:"UpMenuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpMenuName = "upMenuName";    //上级菜单名

 /**
 * 常量:"RoleNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_RoleNum = "roleNum";    //角色数

 /**
 * 常量:"IsDisp"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsDisp = "isDisp";    //是否显示

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdDate = "updDate";    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdUserId = "updUserId";    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Memo = "memo";    //备注

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}

/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsvQxRoleMenusEN();
const instance = new clsvQxRoleMenusEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}