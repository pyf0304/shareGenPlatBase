
 /**
 * 类名:clsvQxUsersSim
 * 表名:vQxUsersSim(00140121)
 * 版本:2026.04.18.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/18 13:04:26
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
 * v用户Sim(vQxUsersSim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvQxUsersSim 
{
public static readonly _CurrTabName= "vQxUsersSim"; //当前表名,与该类相关的表名
public static readonly _KeyFldName= "UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 4;
public static readonly _AttributeName = ["userId", "userName", "id_XzCollege", "departmentId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public userId = "";    //用户ID
public userName = "";    //用户名
public id_XzCollege = "";    //学院Id
public departmentId = "";    //部门Id

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
case clsvQxUsersSim.con_UserId:
return this.userId;
case clsvQxUsersSim.con_UserName:
return this.userName;
case clsvQxUsersSim.con_Id_XzCollege:
return this.id_XzCollege;
case clsvQxUsersSim.con_DepartmentId:
return this.departmentId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUsersSim]中不存在!`;
console.error(strMsg);
return "";
}
}


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
 * 常量:"Id_XzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_Id_XzCollege = "id_XzCollege";    //学院Id

 /**
 * 常量:"DepartmentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static readonly con_DepartmentId = "departmentId";    //部门Id
}