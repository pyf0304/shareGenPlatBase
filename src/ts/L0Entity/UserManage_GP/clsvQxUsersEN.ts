
 /**
 * 类名:clsvQxUsersEN
 * 表名:vQxUsers(00140024)
 * 版本:2026.04.18.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/18 13:02:35
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
 * v用户(vQxUsers)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxUsersEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "05"; //未知
public static readonly _PrimaryTypeId: string = "01"; //关键字
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "vQxUsers"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 28;
public static readonly _AttributeName = ["userId", "userName", "departmentId", "departmentName", "departmentAbbrName", "departmentTypeId", "departmentTypeName", "upDepartmentId", "upDepartmentName", "userStateId", "userStateName", "password", "effitiveBeginDate", "effitiveEndDate", "stuTeacherId", "identityId", "identityDesc", "openId", "headPic", "isSynch", "synchDate", "updDate", "updUser", "id_XzCollege", "memo", "id_GradeBase", "email", "phoneNumber"];
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
case clsvQxUsersEN.con_UserId:
return this.userId;
case clsvQxUsersEN.con_UserName:
return this.userName;
case clsvQxUsersEN.con_DepartmentId:
return this.departmentId;
case clsvQxUsersEN.con_DepartmentName:
return this.departmentName;
case clsvQxUsersEN.con_DepartmentAbbrName:
return this.departmentAbbrName;
case clsvQxUsersEN.con_DepartmentTypeId:
return this.departmentTypeId;
case clsvQxUsersEN.con_DepartmentTypeName:
return this.departmentTypeName;
case clsvQxUsersEN.con_UpDepartmentId:
return this.upDepartmentId;
case clsvQxUsersEN.con_UpDepartmentName:
return this.upDepartmentName;
case clsvQxUsersEN.con_UserStateId:
return this.userStateId;
case clsvQxUsersEN.con_UserStateName:
return this.userStateName;
case clsvQxUsersEN.con_Password:
return this.password;
case clsvQxUsersEN.con_EffitiveBeginDate:
return this.effitiveBeginDate;
case clsvQxUsersEN.con_EffitiveEndDate:
return this.effitiveEndDate;
case clsvQxUsersEN.con_StuTeacherId:
return this.stuTeacherId;
case clsvQxUsersEN.con_IdentityId:
return this.identityId;
case clsvQxUsersEN.con_IdentityDesc:
return this.identityDesc;
case clsvQxUsersEN.con_OpenId:
return this.openId;
case clsvQxUsersEN.con_headPic:
return this.headPic;
case clsvQxUsersEN.con_IsSynch:
return this.isSynch;
case clsvQxUsersEN.con_SynchDate:
return this.synchDate;
case clsvQxUsersEN.con_UpdDate:
return this.updDate;
case clsvQxUsersEN.con_UpdUser:
return this.updUser;
case clsvQxUsersEN.con_Id_XzCollege:
return this.id_XzCollege;
case clsvQxUsersEN.con_Memo:
return this.memo;
case clsvQxUsersEN.con_Id_GradeBase:
return this.id_GradeBase;
case clsvQxUsersEN.con_Email:
return this.email;
case clsvQxUsersEN.con_PhoneNumber:
return this.phoneNumber;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUsers]中不存在!`;
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
case clsvQxUsersEN.con_UserId:
this.userId = strValue;
break;
case clsvQxUsersEN.con_UserName:
this.userName = strValue;
break;
case clsvQxUsersEN.con_DepartmentId:
this.departmentId = strValue;
break;
case clsvQxUsersEN.con_DepartmentName:
this.departmentName = strValue;
break;
case clsvQxUsersEN.con_DepartmentAbbrName:
this.departmentAbbrName = strValue;
break;
case clsvQxUsersEN.con_DepartmentTypeId:
this.departmentTypeId = strValue;
break;
case clsvQxUsersEN.con_DepartmentTypeName:
this.departmentTypeName = strValue;
break;
case clsvQxUsersEN.con_UpDepartmentId:
this.upDepartmentId = strValue;
break;
case clsvQxUsersEN.con_UpDepartmentName:
this.upDepartmentName = strValue;
break;
case clsvQxUsersEN.con_UserStateId:
this.userStateId = strValue;
break;
case clsvQxUsersEN.con_UserStateName:
this.userStateName = strValue;
break;
case clsvQxUsersEN.con_Password:
this.password = strValue;
break;
case clsvQxUsersEN.con_EffitiveBeginDate:
this.effitiveBeginDate = strValue;
break;
case clsvQxUsersEN.con_EffitiveEndDate:
this.effitiveEndDate = strValue;
break;
case clsvQxUsersEN.con_StuTeacherId:
this.stuTeacherId = strValue;
break;
case clsvQxUsersEN.con_IdentityId:
this.identityId = strValue;
break;
case clsvQxUsersEN.con_IdentityDesc:
this.identityDesc = strValue;
break;
case clsvQxUsersEN.con_OpenId:
this.openId = strValue;
break;
case clsvQxUsersEN.con_headPic:
this.headPic = strValue;
break;
case clsvQxUsersEN.con_IsSynch:
this.isSynch = Boolean(strValue);
break;
case clsvQxUsersEN.con_SynchDate:
this.synchDate = strValue;
break;
case clsvQxUsersEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQxUsersEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvQxUsersEN.con_Id_XzCollege:
this.id_XzCollege = strValue;
break;
case clsvQxUsersEN.con_Memo:
this.memo = strValue;
break;
case clsvQxUsersEN.con_Id_GradeBase:
this.id_GradeBase = strValue;
break;
case clsvQxUsersEN.con_Email:
this.email = strValue;
break;
case clsvQxUsersEN.con_PhoneNumber:
this.phoneNumber = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUsers]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public userId = "";    //用户ID
public userName = "";    //用户名
public departmentId = "";    //部门Id
public departmentName = "";    //部门名
public departmentAbbrName = "";    //名称缩写
public departmentTypeId = "";    //部门类型ID
public departmentTypeName = "";    //部门类型名
public upDepartmentId = "";    //所属部门号
public upDepartmentName = "";    //上级部门
public userStateId = "";    //用户状态Id
public userStateName = "";    //用户状态名
public password = "";    //口令
public effitiveBeginDate = "";    //有效开始日期
public effitiveEndDate = "";    //有效结束日期
public stuTeacherId = "";    //学工号
public identityId = "";    //身份编号
public identityDesc = "";    //身份描述
public openId = "";    //微信openid
public headPic = "";    //头像
public isSynch = false;    //是否同步
public synchDate = "";    //同步日期
public updDate = "";    //修改日期
public updUser = "";    //修改用户
public id_XzCollege = "";    //学院Id
public memo = "";    //备注
public id_GradeBase = "";    //入学年级流水号
public email = "";    //邮箱
public phoneNumber = "";    //电话号码


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
 * 常量:"DepartmentAbbrName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_DepartmentAbbrName = "departmentAbbrName";    //名称缩写

 /**
 * 常量:"DepartmentTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_DepartmentTypeId = "departmentTypeId";    //部门类型ID

 /**
 * 常量:"DepartmentTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_DepartmentTypeName = "departmentTypeName";    //部门类型名

 /**
 * 常量:"UpDepartmentId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpDepartmentId = "upDepartmentId";    //所属部门号

 /**
 * 常量:"UpDepartmentName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpDepartmentName = "upDepartmentName";    //上级部门

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
 * 常量:"Password"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Password = "password";    //口令

 /**
 * 常量:"EffitiveBeginDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_EffitiveBeginDate = "effitiveBeginDate";    //有效开始日期

 /**
 * 常量:"EffitiveEndDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_EffitiveEndDate = "effitiveEndDate";    //有效结束日期

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
 * 常量:"OpenId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_OpenId = "openId";    //微信openid

 /**
 * 常量:"headPic"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_headPic = "headPic";    //头像

 /**
 * 常量:"IsSynch"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsSynch = "isSynch";    //是否同步

 /**
 * 常量:"SynchDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SynchDate = "synchDate";    //同步日期

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdDate = "updDate";    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdUser = "updUser";    //修改用户

 /**
 * 常量:"Id_XzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_XzCollege = "id_XzCollege";    //学院Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Memo = "memo";    //备注

 /**
 * 常量:"Id_GradeBase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_GradeBase = "id_GradeBase";    //入学年级流水号

 /**
 * 常量:"Email"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Email = "email";    //邮箱

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PhoneNumber = "phoneNumber";    //电话号码

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
//return propName in new clsvQxUsersEN();
const instance = new clsvQxUsersEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}