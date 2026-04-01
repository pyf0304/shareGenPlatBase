
 /**
 * 类名:clsQxRoleRightRelationENEx
 * 表名:QxRoleRightRelation(00140118)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:01:08
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 角色赋权关系(QxRoleRightRelation)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxRoleRightRelationEN } from "@/ts/L0Entity/UserManage_GP/clsQxRoleRightRelationEN";

export class  clsQxRoleRightRelationENEx extends clsQxRoleRightRelationEN
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
case clsQxRoleRightRelationENEx.con_RoleName:
return this.roleName;
case clsQxRoleRightRelationENEx.con_MyRoleName:
return this.myRoleName;
case clsQxRoleRightRelationENEx.con_PrjName:
return this.prjName;
case clsQxRoleRightRelationENEx.con_DateTimeSim:
return this.dateTimeSim;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"RoleName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_RoleName = "roleName";    //角色名称

 /**
 * 常量:"MyRoleName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_MyRoleName = "myRoleName";    //主角色名称

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

public roleName = "";    //角色名称
public myRoleName = "";    //主角色名称
public prjName = "";    //工程名
public dateTimeSim = "";    //简化日期时间

/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsQxRoleRightRelationENEx();
const instance = new clsQxRoleRightRelationENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}