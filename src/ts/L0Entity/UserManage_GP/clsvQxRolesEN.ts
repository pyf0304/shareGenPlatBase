
 /**
 * 类名:clsvQxRolesEN
 * 表名:vQxRoles(00140025)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:04:47
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v角色(vQxRoles)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxRolesEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "05"; //未知
public static readonly _PrimaryTypeId: string = "01"; //关键字
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "vQxRoles"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "RoleId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 10;
public static readonly _AttributeName = ["roleId", "roleName", "roleENName", "roleIndex", "qxPrjId", "prjName", "isInUse", "updDate", "updUserId", "memo"];
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
case clsvQxRolesEN.con_RoleId:
return this.roleId;
case clsvQxRolesEN.con_RoleName:
return this.roleName;
case clsvQxRolesEN.con_RoleENName:
return this.roleENName;
case clsvQxRolesEN.con_RoleIndex:
return this.roleIndex;
case clsvQxRolesEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxRolesEN.con_PrjName:
return this.prjName;
case clsvQxRolesEN.con_IsInUse:
return this.isInUse;
case clsvQxRolesEN.con_UpdDate:
return this.updDate;
case clsvQxRolesEN.con_UpdUserId:
return this.updUserId;
case clsvQxRolesEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxRoles]中不存在!`;
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
case clsvQxRolesEN.con_RoleId:
this.roleId = strValue;
break;
case clsvQxRolesEN.con_RoleName:
this.roleName = strValue;
break;
case clsvQxRolesEN.con_RoleENName:
this.roleENName = strValue;
break;
case clsvQxRolesEN.con_RoleIndex:
this.roleIndex = Number(strValue);
break;
case clsvQxRolesEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxRolesEN.con_PrjName:
this.prjName = strValue;
break;
case clsvQxRolesEN.con_IsInUse:
this.isInUse = Boolean(strValue);
break;
case clsvQxRolesEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQxRolesEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvQxRolesEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxRoles]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public roleId = "";    //角色Id
public roleName = "";    //角色名称
public roleENName = "";    //角色英文名
public roleIndex = 0;    //角色序号
public qxPrjId = "";    //项目Id
public prjName = "";    //工程名
public isInUse = false;    //是否在使用
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


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
 * 常量:"RoleENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_RoleENName = "roleENName";    //角色英文名

 /**
 * 常量:"RoleIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_RoleIndex = "roleIndex";    //角色序号

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_QxPrjId = "qxPrjId";    //项目Id

 /**
 * 常量:"PrjName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PrjName = "prjName";    //工程名

 /**
 * 常量:"IsInUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsInUse = "isInUse";    //是否在使用

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
//return propName in new clsvQxRolesEN();
const instance = new clsvQxRolesEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}