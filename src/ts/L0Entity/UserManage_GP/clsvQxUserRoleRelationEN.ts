
 /**
 * 类名:clsvQxUserRoleRelationEN
 * 表名:vQxUserRoleRelation(00140023)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:46:48
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v用户角色关系(vQxUserRoleRelation)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxUserRoleRelationEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQxUserRoleRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["mId", "userId", "userName", "departmentId", "departmentName", "userStateId", "userStateName", "stuTeacherId", "identityId", "identityDesc", "roleId", "roleName", "qxPrjId", "prjName", "memo", "idXzCollege", "collegeName", "password"];
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
case clsvQxUserRoleRelationEN.con_mId:
return this.mId;
case clsvQxUserRoleRelationEN.con_UserId:
return this.userId;
case clsvQxUserRoleRelationEN.con_UserName:
return this.userName;
case clsvQxUserRoleRelationEN.con_DepartmentId:
return this.departmentId;
case clsvQxUserRoleRelationEN.con_DepartmentName:
return this.departmentName;
case clsvQxUserRoleRelationEN.con_UserStateId:
return this.userStateId;
case clsvQxUserRoleRelationEN.con_UserStateName:
return this.userStateName;
case clsvQxUserRoleRelationEN.con_StuTeacherId:
return this.stuTeacherId;
case clsvQxUserRoleRelationEN.con_IdentityId:
return this.identityId;
case clsvQxUserRoleRelationEN.con_IdentityDesc:
return this.identityDesc;
case clsvQxUserRoleRelationEN.con_RoleId:
return this.roleId;
case clsvQxUserRoleRelationEN.con_RoleName:
return this.roleName;
case clsvQxUserRoleRelationEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxUserRoleRelationEN.con_PrjName:
return this.prjName;
case clsvQxUserRoleRelationEN.con_Memo:
return this.memo;
case clsvQxUserRoleRelationEN.con_IdXzCollege:
return this.idXzCollege;
case clsvQxUserRoleRelationEN.con_CollegeName:
return this.collegeName;
case clsvQxUserRoleRelationEN.con_Password:
return this.password;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUserRoleRelation]中不存在!`;
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
case clsvQxUserRoleRelationEN.con_mId:
this.mId = Number(strValue);
break;
case clsvQxUserRoleRelationEN.con_UserId:
this.userId = strValue;
break;
case clsvQxUserRoleRelationEN.con_UserName:
this.userName = strValue;
break;
case clsvQxUserRoleRelationEN.con_DepartmentId:
this.departmentId = strValue;
break;
case clsvQxUserRoleRelationEN.con_DepartmentName:
this.departmentName = strValue;
break;
case clsvQxUserRoleRelationEN.con_UserStateId:
this.userStateId = strValue;
break;
case clsvQxUserRoleRelationEN.con_UserStateName:
this.userStateName = strValue;
break;
case clsvQxUserRoleRelationEN.con_StuTeacherId:
this.stuTeacherId = strValue;
break;
case clsvQxUserRoleRelationEN.con_IdentityId:
this.identityId = strValue;
break;
case clsvQxUserRoleRelationEN.con_IdentityDesc:
this.identityDesc = strValue;
break;
case clsvQxUserRoleRelationEN.con_RoleId:
this.roleId = strValue;
break;
case clsvQxUserRoleRelationEN.con_RoleName:
this.roleName = strValue;
break;
case clsvQxUserRoleRelationEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxUserRoleRelationEN.con_PrjName:
this.prjName = strValue;
break;
case clsvQxUserRoleRelationEN.con_Memo:
this.memo = strValue;
break;
case clsvQxUserRoleRelationEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvQxUserRoleRelationEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvQxUserRoleRelationEN.con_Password:
this.password = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUserRoleRelation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public departmentId = "";    //部门Id
public departmentName = "";    //部门名
public userStateId = "";    //用户状态Id
public userStateName = "";    //用户状态名
public stuTeacherId = "";    //学工号
public identityId = "";    //身份编号
public identityDesc = "";    //身份描述
public roleId = "";    //角色Id
public roleName = "";    //角色名称
public qxPrjId = "";    //项目Id
public prjName = "";    //工程名
public memo = "";    //备注
public idXzCollege = "";    //学院Id
public collegeName = "";    //学院名
public password = "";    //口令


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
 * 常量:"DepartmentId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentId(): string {return "departmentId";}    //部门Id

 /**
 * 常量:"DepartmentName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentName(): string {return "departmentName";}    //部门名

 /**
 * 常量:"UserStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserStateId(): string {return "userStateId";}    //用户状态Id

 /**
 * 常量:"UserStateName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserStateName(): string {return "userStateName";}    //用户状态名

 /**
 * 常量:"StuTeacherId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuTeacherId(): string {return "stuTeacherId";}    //学工号

 /**
 * 常量:"IdentityId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdentityId(): string {return "identityId";}    //身份编号

 /**
 * 常量:"IdentityDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdentityDesc(): string {return "identityDesc";}    //身份描述

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
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院Id

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名

 /**
 * 常量:"Password"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Password(): string {return "password";}    //口令

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
//return propName in new clsvQxUserRoleRelationEN();
const instance = new clsvQxUserRoleRelationEN();
return instance.hasOwnProperty(propName);
}
}