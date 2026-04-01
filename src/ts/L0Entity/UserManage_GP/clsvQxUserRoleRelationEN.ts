
 /**
 * 类名:clsvQxUserRoleRelationEN
 * 表名:vQxUserRoleRelation(00140023)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:04:45
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
 * v用户角色关系(vQxUserRoleRelation)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxUserRoleRelationEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "05"; //未知
public static readonly _PrimaryTypeId: string = "02"; //identity
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "vQxUserRoleRelation"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 16;
public static readonly _AttributeName = ["mId", "userId", "userName", "departmentId", "departmentName", "userStateId", "userStateName", "stuTeacherId", "identityId", "identityDesc", "roleId", "roleName", "qxPrjId", "prjName", "memo", "id_XzCollege"];
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
case clsvQxUserRoleRelationEN.con_Id_XzCollege:
return this.id_XzCollege;
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
case clsvQxUserRoleRelationEN.con_Id_XzCollege:
this.id_XzCollege = strValue;
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
public id_XzCollege = "";    //学院Id


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_mId = "mId";    //流水号

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UserId = "userId";    //用户ID

 /**
 * 常量:"UserName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UserName = "userName";    //用户名

 /**
 * 常量:"DepartmentId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_DepartmentId = "departmentId";    //部门Id

 /**
 * 常量:"DepartmentName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_DepartmentName = "departmentName";    //部门名

 /**
 * 常量:"UserStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UserStateId = "userStateId";    //用户状态Id

 /**
 * 常量:"UserStateName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UserStateName = "userStateName";    //用户状态名

 /**
 * 常量:"StuTeacherId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_StuTeacherId = "stuTeacherId";    //学工号

 /**
 * 常量:"IdentityId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IdentityId = "identityId";    //身份编号

 /**
 * 常量:"IdentityDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IdentityDesc = "identityDesc";    //身份描述

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
 * 常量:"PrjName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PrjName = "prjName";    //工程名

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Memo = "memo";    //备注

 /**
 * 常量:"Id_XzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_XzCollege = "id_XzCollege";    //学院Id

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
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}