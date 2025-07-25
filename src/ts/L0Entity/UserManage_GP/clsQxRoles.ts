
 /**
 * 类名:clsQxRoles
 * 表名:QxRoles(00140014)
 * 版本:2024.11.28.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/28 17:03:31
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 角色(QxRoles)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxRoles 
{
public static _CurrTabName= "QxRoles"; //当前表名,与该类相关的表名
public static _KeyFldName= "RoleId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["roleId", "roleName", "roleENName", "roleIndex", "userType", "userTypeId", "qxPrjId", "isInUse", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public roleId = "";    //角色Id
public roleName = "";    //角色名称
public roleENName = "";    //角色英文名
public roleIndex = 0;    //角色序号
public userType = "";    //用户类型
public userTypeId = "";    //用户类型Id
public qxPrjId = "";    //项目Id
public isInUse = false;    //是否在使用
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注

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
case clsQxRoles.con_RoleId:
return this.roleId;
case clsQxRoles.con_RoleName:
return this.roleName;
case clsQxRoles.con_RoleENName:
return this.roleENName;
case clsQxRoles.con_RoleIndex:
return this.roleIndex;
case clsQxRoles.con_UserType:
return this.userType;
case clsQxRoles.con_UserTypeId:
return this.userTypeId;
case clsQxRoles.con_QxPrjId:
return this.qxPrjId;
case clsQxRoles.con_IsInUse:
return this.isInUse;
case clsQxRoles.con_UpdDate:
return this.updDate;
case clsQxRoles.con_UpdUserId:
return this.updUserId;
case clsQxRoles.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxRoles]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"RoleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleId(): string {return "roleId";}    //角色Id

 /**
 * 常量:"RoleName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleName(): string {return "roleName";}    //角色名称

 /**
 * 常量:"RoleENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleENName(): string {return "roleENName";}    //角色英文名

 /**
 * 常量:"RoleIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleIndex(): string {return "roleIndex";}    //角色序号

 /**
 * 常量:"UserType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserType(): string {return "userType";}    //用户类型

 /**
 * 常量:"UserTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"IsInUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsInUse(): string {return "isInUse";}    //是否在使用

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumQxRoles
{
 /**
 * 统一平台总管理员
 **/
static readonly UP_Admin_00010001 = "00010001";
 /**
 * 项目管理员
 **/
static readonly Project_Admin_00010002 = "00010002";
 /**
 * 高级用户
 **/
static readonly Advanced_User_00010003 = "00010003";
 /**
 * 普通用户
 **/
static readonly Regular_User_00010004 = "00010004";
 /**
 * 无
 **/
static readonly none_00620000 = "00620000";
 /**
 * 系统管理员
 **/
static readonly System_Admin_00620001 = "00620001";
 /**
 * 普通教师
 **/
static readonly Regular_Teacher_00620002 = "00620002";
 /**
 * 普通学生
 **/
static readonly Regular_Student_00620003 = "00620003";
 /**
 * 小组长(微格)
 **/
static readonly Group_Leader_00620005 = "00620005";
 /**
 * 中小学实习指导老师
 **/
static readonly Mentor_for_K_12_Internship_00620006 = "00620006";
 /**
 * 学工办辅导员
 **/
static readonly Student_Affairs_Counselor_00620007 = "00620007";
 /**
 * 实习指导老师
 **/
static readonly Internship_Mentor_00620008 = "00620008";
 /**
 * 指导老师（微格）
 **/
static readonly Mentor_00620009 = "00620009";
 /**
 * 评审专家
 **/
static readonly Review_Expert_00620010 = "00620010";
 /**
 * 教务处
 **/
static readonly Academic_Affairs_Office_00620011 = "00620011";
 /**
 * 案例维护
 **/
static readonly Case_Maintenance_00620012 = "00620012";
 /**
 * 中小学教师
 **/
static readonly K_12_Teacher_00620013 = "00620013";
 /**
 * 教师(交建)
 **/
static readonly Construction_and_Building_00620014 = "00620014";
 /**
 * 交建答题学生
 **/
static readonly Construction_and_Building_Answering_Student_00620015 = "00620015";
 /**
 * 语音学生
 **/
static readonly Voice_Student_00620016 = "00620016";
 /**
 * 中学学生
 **/
static readonly High_School_Student_00620017 = "00620017";
 /**
 * 中学系统管理员
 **/
static readonly Secondary_School_System_Admin_00620018 = "00620018";
 /**
 * 系统管理员
 **/
static readonly System_Admin_01030001 = "01030001";
}