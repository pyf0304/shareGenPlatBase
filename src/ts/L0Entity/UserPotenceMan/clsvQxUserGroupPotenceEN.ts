
 /**
 * 类名:clsvQxUserGroupPotenceEN
 * 表名:vQxUserGroupPotence(00140022)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:46:51
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户权限管理(UserPotenceMan)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v用户权限关系(vQxUserGroupPotence)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxUserGroupPotenceEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQxUserGroupPotence"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 20;
public static AttributeName = ["mId", "userId", "userName", "groupId", "groupName", "roleId", "roleName", "qxPrjId", "prjName", "potenceId", "potenceName", "potenceTypeId", "potenceTypeName", "menuId", "menuName", "upMenuId", "relaMid", "symbolForProgramme", "symbolName", "memo"];
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
case clsvQxUserGroupPotenceEN.con_mId:
return this.mId;
case clsvQxUserGroupPotenceEN.con_UserId:
return this.userId;
case clsvQxUserGroupPotenceEN.con_UserName:
return this.userName;
case clsvQxUserGroupPotenceEN.con_GroupId:
return this.groupId;
case clsvQxUserGroupPotenceEN.con_GroupName:
return this.groupName;
case clsvQxUserGroupPotenceEN.con_RoleId:
return this.roleId;
case clsvQxUserGroupPotenceEN.con_RoleName:
return this.roleName;
case clsvQxUserGroupPotenceEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxUserGroupPotenceEN.con_PrjName:
return this.prjName;
case clsvQxUserGroupPotenceEN.con_PotenceId:
return this.potenceId;
case clsvQxUserGroupPotenceEN.con_PotenceName:
return this.potenceName;
case clsvQxUserGroupPotenceEN.con_PotenceTypeId:
return this.potenceTypeId;
case clsvQxUserGroupPotenceEN.con_PotenceTypeName:
return this.potenceTypeName;
case clsvQxUserGroupPotenceEN.con_MenuId:
return this.menuId;
case clsvQxUserGroupPotenceEN.con_MenuName:
return this.menuName;
case clsvQxUserGroupPotenceEN.con_UpMenuId:
return this.upMenuId;
case clsvQxUserGroupPotenceEN.con_RelaMid:
return this.relaMid;
case clsvQxUserGroupPotenceEN.con_SymbolForProgramme:
return this.symbolForProgramme;
case clsvQxUserGroupPotenceEN.con_SymbolName:
return this.symbolName;
case clsvQxUserGroupPotenceEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUserGroupPotence]中不存在!`;
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
case clsvQxUserGroupPotenceEN.con_mId:
this.mId = Number(strValue);
break;
case clsvQxUserGroupPotenceEN.con_UserId:
this.userId = strValue;
break;
case clsvQxUserGroupPotenceEN.con_UserName:
this.userName = strValue;
break;
case clsvQxUserGroupPotenceEN.con_GroupId:
this.groupId = strValue;
break;
case clsvQxUserGroupPotenceEN.con_GroupName:
this.groupName = strValue;
break;
case clsvQxUserGroupPotenceEN.con_RoleId:
this.roleId = strValue;
break;
case clsvQxUserGroupPotenceEN.con_RoleName:
this.roleName = strValue;
break;
case clsvQxUserGroupPotenceEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxUserGroupPotenceEN.con_PrjName:
this.prjName = strValue;
break;
case clsvQxUserGroupPotenceEN.con_PotenceId:
this.potenceId = strValue;
break;
case clsvQxUserGroupPotenceEN.con_PotenceName:
this.potenceName = strValue;
break;
case clsvQxUserGroupPotenceEN.con_PotenceTypeId:
this.potenceTypeId = strValue;
break;
case clsvQxUserGroupPotenceEN.con_PotenceTypeName:
this.potenceTypeName = strValue;
break;
case clsvQxUserGroupPotenceEN.con_MenuId:
this.menuId = strValue;
break;
case clsvQxUserGroupPotenceEN.con_MenuName:
this.menuName = strValue;
break;
case clsvQxUserGroupPotenceEN.con_UpMenuId:
this.upMenuId = strValue;
break;
case clsvQxUserGroupPotenceEN.con_RelaMid:
this.relaMid = Number(strValue);
break;
case clsvQxUserGroupPotenceEN.con_SymbolForProgramme:
this.symbolForProgramme = strValue;
break;
case clsvQxUserGroupPotenceEN.con_SymbolName:
this.symbolName = strValue;
break;
case clsvQxUserGroupPotenceEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUserGroupPotence]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //流水号
public userId = "";    //用户ID
public userName = "";    //用户名
public groupId = "";    //组Id
public groupName = "";    //组名
public roleId = "";    //角色Id
public roleName = "";    //角色名称
public qxPrjId = "";    //项目Id
public prjName = "";    //工程名
public potenceId = "";    //权限ID
public potenceName = "";    //权限名称
public potenceTypeId = "";    //权限类型Id
public potenceTypeName = "";    //权限类型名
public menuId = "";    //菜单Id
public menuName = "";    //菜单名
public upMenuId = "";    //上级菜单Id
public relaMid = 0;    //流水号
public symbolForProgramme = "";    //编程标志
public symbolName = "";    //标志名称
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //流水号

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"UserName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"GroupId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GroupId(): string {return "groupId";}    //组Id

 /**
 * 常量:"GroupName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GroupName(): string {return "groupName";}    //组名

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
 * 常量:"PotenceId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceId(): string {return "potenceId";}    //权限ID

 /**
 * 常量:"PotenceName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceName(): string {return "potenceName";}    //权限名称

 /**
 * 常量:"PotenceTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceTypeId(): string {return "potenceTypeId";}    //权限类型Id

 /**
 * 常量:"PotenceTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceTypeName(): string {return "potenceTypeName";}    //权限类型名

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
 * 常量:"UpMenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpMenuId(): string {return "upMenuId";}    //上级菜单Id

 /**
 * 常量:"RelaMid"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RelaMid(): string {return "relaMid";}    //流水号

 /**
 * 常量:"SymbolForProgramme"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SymbolForProgramme(): string {return "symbolForProgramme";}    //编程标志

 /**
 * 常量:"SymbolName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SymbolName(): string {return "symbolName";}    //标志名称

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
//return propName in new clsvQxUserGroupPotenceEN();
const instance = new clsvQxUserGroupPotenceEN();
return instance.hasOwnProperty(propName);
}
}