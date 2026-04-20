
 /**
 * 类名:clsvQxUserRoleRelation
 * 表名:vQxUserRoleRelation(00140023)
 * 版本:2026.04.18.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/18 14:11:42
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * v用户角色关系(vQxUserRoleRelation)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvQxUserRoleRelation 
{
public static readonly _CurrTabName= "vQxUserRoleRelation"; //当前表名,与该类相关的表名
public static readonly _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 16;
public static readonly _AttributeName = ["mId", "userId", "userName", "departmentId", "departmentName", "userStateId", "userStateName", "stuTeacherId", "identityId", "identityDesc", "roleId", "roleName", "qxPrjId", "prjName", "memo", "id_XzCollege"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsvQxUserRoleRelation.con_mId:
return this.mId;
case clsvQxUserRoleRelation.con_UserId:
return this.userId;
case clsvQxUserRoleRelation.con_UserName:
return this.userName;
case clsvQxUserRoleRelation.con_DepartmentId:
return this.departmentId;
case clsvQxUserRoleRelation.con_DepartmentName:
return this.departmentName;
case clsvQxUserRoleRelation.con_UserStateId:
return this.userStateId;
case clsvQxUserRoleRelation.con_UserStateName:
return this.userStateName;
case clsvQxUserRoleRelation.con_StuTeacherId:
return this.stuTeacherId;
case clsvQxUserRoleRelation.con_IdentityId:
return this.identityId;
case clsvQxUserRoleRelation.con_IdentityDesc:
return this.identityDesc;
case clsvQxUserRoleRelation.con_RoleId:
return this.roleId;
case clsvQxUserRoleRelation.con_RoleName:
return this.roleName;
case clsvQxUserRoleRelation.con_QxPrjId:
return this.qxPrjId;
case clsvQxUserRoleRelation.con_PrjName:
return this.prjName;
case clsvQxUserRoleRelation.con_Memo:
return this.memo;
case clsvQxUserRoleRelation.con_Id_XzCollege:
return this.id_XzCollege;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUserRoleRelation]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_mId = "mId";    //流水号

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_UserId = "userId";    //用户ID

 /**
 * 常量:"UserName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_UserName = "userName";    //用户名

 /**
 * 常量:"DepartmentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_DepartmentId = "departmentId";    //部门Id

 /**
 * 常量:"DepartmentName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_DepartmentName = "departmentName";    //部门名

 /**
 * 常量:"UserStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_UserStateId = "userStateId";    //用户状态Id

 /**
 * 常量:"UserStateName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_UserStateName = "userStateName";    //用户状态名

 /**
 * 常量:"StuTeacherId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_StuTeacherId = "stuTeacherId";    //学工号

 /**
 * 常量:"IdentityId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_IdentityId = "identityId";    //身份编号

 /**
 * 常量:"IdentityDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_IdentityDesc = "identityDesc";    //身份描述

 /**
 * 常量:"RoleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_RoleId = "roleId";    //角色Id

 /**
 * 常量:"RoleName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_RoleName = "roleName";    //角色名称

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_QxPrjId = "qxPrjId";    //项目Id

 /**
 * 常量:"PrjName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_PrjName = "prjName";    //工程名

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_Memo = "memo";    //备注

 /**
 * 常量:"Id_XzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_Id_XzCollege = "id_XzCollege";    //学院Id
}