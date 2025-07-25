
 /**
 * 类名:clsvQxPrjMenusEN
 * 表名:vQxPrjMenus(00140046)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:47:20
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v工程菜单(vQxPrjMenus)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxPrjMenusEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQxPrjMenus"; //当前表名,与该类相关的表名
public static _KeyFldName= "MenuId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 29;
public static AttributeName = ["menuId", "menuName", "qxPrjId", "prjName", "upMenuId", "linkFile", "qsParameters", "tabId", "tabName", "imgFile", "roleId", "roleName", "orderNum", "isLeafNode", "menuSetId", "menuSetName", "menuTitle", "pageDispModeId", "pageDispModeName", "inUse", "menuControlName", "applicationTypeId", "applicationTypeName", "updDate", "updUserId", "memo", "upMenuName", "subMenusNum", "roleNum"];
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
case clsvQxPrjMenusEN.con_MenuId:
return this.menuId;
case clsvQxPrjMenusEN.con_MenuName:
return this.menuName;
case clsvQxPrjMenusEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxPrjMenusEN.con_PrjName:
return this.prjName;
case clsvQxPrjMenusEN.con_UpMenuId:
return this.upMenuId;
case clsvQxPrjMenusEN.con_LinkFile:
return this.linkFile;
case clsvQxPrjMenusEN.con_qsParameters:
return this.qsParameters;
case clsvQxPrjMenusEN.con_TabId:
return this.tabId;
case clsvQxPrjMenusEN.con_TabName:
return this.tabName;
case clsvQxPrjMenusEN.con_ImgFile:
return this.imgFile;
case clsvQxPrjMenusEN.con_RoleId:
return this.roleId;
case clsvQxPrjMenusEN.con_RoleName:
return this.roleName;
case clsvQxPrjMenusEN.con_OrderNum:
return this.orderNum;
case clsvQxPrjMenusEN.con_IsLeafNode:
return this.isLeafNode;
case clsvQxPrjMenusEN.con_MenuSetId:
return this.menuSetId;
case clsvQxPrjMenusEN.con_MenuSetName:
return this.menuSetName;
case clsvQxPrjMenusEN.con_MenuTitle:
return this.menuTitle;
case clsvQxPrjMenusEN.con_PageDispModeId:
return this.pageDispModeId;
case clsvQxPrjMenusEN.con_PageDispModeName:
return this.pageDispModeName;
case clsvQxPrjMenusEN.con_InUse:
return this.inUse;
case clsvQxPrjMenusEN.con_MenuControlName:
return this.menuControlName;
case clsvQxPrjMenusEN.con_ApplicationTypeId:
return this.applicationTypeId;
case clsvQxPrjMenusEN.con_ApplicationTypeName:
return this.applicationTypeName;
case clsvQxPrjMenusEN.con_UpdDate:
return this.updDate;
case clsvQxPrjMenusEN.con_UpdUserId:
return this.updUserId;
case clsvQxPrjMenusEN.con_Memo:
return this.memo;
case clsvQxPrjMenusEN.con_UpMenuName:
return this.upMenuName;
case clsvQxPrjMenusEN.con_SubMenusNum:
return this.subMenusNum;
case clsvQxPrjMenusEN.con_RoleNum:
return this.roleNum;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxPrjMenus]中不存在!`;
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
case clsvQxPrjMenusEN.con_MenuId:
this.menuId = strValue;
break;
case clsvQxPrjMenusEN.con_MenuName:
this.menuName = strValue;
break;
case clsvQxPrjMenusEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxPrjMenusEN.con_PrjName:
this.prjName = strValue;
break;
case clsvQxPrjMenusEN.con_UpMenuId:
this.upMenuId = strValue;
break;
case clsvQxPrjMenusEN.con_LinkFile:
this.linkFile = strValue;
break;
case clsvQxPrjMenusEN.con_qsParameters:
this.qsParameters = strValue;
break;
case clsvQxPrjMenusEN.con_TabId:
this.tabId = strValue;
break;
case clsvQxPrjMenusEN.con_TabName:
this.tabName = strValue;
break;
case clsvQxPrjMenusEN.con_ImgFile:
this.imgFile = strValue;
break;
case clsvQxPrjMenusEN.con_RoleId:
this.roleId = strValue;
break;
case clsvQxPrjMenusEN.con_RoleName:
this.roleName = strValue;
break;
case clsvQxPrjMenusEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvQxPrjMenusEN.con_IsLeafNode:
this.isLeafNode = Boolean(strValue);
break;
case clsvQxPrjMenusEN.con_MenuSetId:
this.menuSetId = strValue;
break;
case clsvQxPrjMenusEN.con_MenuSetName:
this.menuSetName = strValue;
break;
case clsvQxPrjMenusEN.con_MenuTitle:
this.menuTitle = strValue;
break;
case clsvQxPrjMenusEN.con_PageDispModeId:
this.pageDispModeId = strValue;
break;
case clsvQxPrjMenusEN.con_PageDispModeName:
this.pageDispModeName = strValue;
break;
case clsvQxPrjMenusEN.con_InUse:
this.inUse = Boolean(strValue);
break;
case clsvQxPrjMenusEN.con_MenuControlName:
this.menuControlName = strValue;
break;
case clsvQxPrjMenusEN.con_ApplicationTypeId:
this.applicationTypeId = Number(strValue);
break;
case clsvQxPrjMenusEN.con_ApplicationTypeName:
this.applicationTypeName = strValue;
break;
case clsvQxPrjMenusEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQxPrjMenusEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvQxPrjMenusEN.con_Memo:
this.memo = strValue;
break;
case clsvQxPrjMenusEN.con_UpMenuName:
this.upMenuName = strValue;
break;
case clsvQxPrjMenusEN.con_SubMenusNum:
this.subMenusNum = Number(strValue);
break;
case clsvQxPrjMenusEN.con_RoleNum:
this.roleNum = Number(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxPrjMenus]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public menuId = "";    //菜单Id
public menuName = "";    //菜单名
public qxPrjId = "";    //项目Id
public prjName = "";    //工程名
public upMenuId = "";    //上级菜单Id
public linkFile = "";    //链接文件
public qsParameters = "";    //qs参数
public tabId = "";    //表ID
public tabName = "";    //TabName
public imgFile = "";    //图像文件
public roleId = "";    //角色Id
public roleName = "";    //角色名称
public orderNum = 0;    //排序号
public isLeafNode = false;    //是否叶子
public menuSetId = "";    //菜单集Id
public menuSetName = "";    //菜单集名称
public menuTitle = "";    //菜单标题
public pageDispModeId = "";    //页面显示模式Id
public pageDispModeName = "";    //页面显示模式名称
public inUse = false;    //是否在用
public menuControlName = "";    //菜单控件名
public applicationTypeId = 0;    //应用程序类型Id
public applicationTypeName = "";    //应用程序类型名称
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注
public upMenuName = "";    //上级菜单名
public subMenusNum = 0;    //子菜单数
public roleNum = 0;    //角色数


 /**
 * 常量:"MenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuId(): string {return "menuId";}    //菜单Id

 /**
 * 常量:"MenuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuName(): string {return "menuName";}    //菜单名

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"PrjName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PrjName(): string {return "prjName";}    //工程名

 /**
 * 常量:"UpMenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpMenuId(): string {return "upMenuId";}    //上级菜单Id

 /**
 * 常量:"LinkFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LinkFile(): string {return "linkFile";}    //链接文件

 /**
 * 常量:"qsParameters"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_qsParameters(): string {return "qsParameters";}    //qs参数

 /**
 * 常量:"TabId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TabId(): string {return "tabId";}    //表ID

 /**
 * 常量:"TabName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TabName(): string {return "tabName";}    //TabName

 /**
 * 常量:"ImgFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ImgFile(): string {return "imgFile";}    //图像文件

 /**
 * 常量:"RoleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RoleId(): string {return "roleId";}    //角色Id

 /**
 * 常量:"RoleName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RoleName(): string {return "roleName";}    //角色名称

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //排序号

 /**
 * 常量:"IsLeafNode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsLeafNode(): string {return "isLeafNode";}    //是否叶子

 /**
 * 常量:"MenuSetId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuSetId(): string {return "menuSetId";}    //菜单集Id

 /**
 * 常量:"MenuSetName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuSetName(): string {return "menuSetName";}    //菜单集名称

 /**
 * 常量:"MenuTitle"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuTitle(): string {return "menuTitle";}    //菜单标题

 /**
 * 常量:"PageDispModeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PageDispModeId(): string {return "pageDispModeId";}    //页面显示模式Id

 /**
 * 常量:"PageDispModeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PageDispModeName(): string {return "pageDispModeName";}    //页面显示模式名称

 /**
 * 常量:"InUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

 /**
 * 常量:"MenuControlName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuControlName(): string {return "menuControlName";}    //菜单控件名

 /**
 * 常量:"ApplicationTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ApplicationTypeId(): string {return "applicationTypeId";}    //应用程序类型Id

 /**
 * 常量:"ApplicationTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ApplicationTypeName(): string {return "applicationTypeName";}    //应用程序类型名称

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"UpMenuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpMenuName(): string {return "upMenuName";}    //上级菜单名

 /**
 * 常量:"SubMenusNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubMenusNum(): string {return "subMenusNum";}    //子菜单数

 /**
 * 常量:"RoleNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RoleNum(): string {return "roleNum";}    //角色数

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
//return propName in new clsvQxPrjMenusEN();
const instance = new clsvQxPrjMenusEN();
return instance.hasOwnProperty(propName);
}
}