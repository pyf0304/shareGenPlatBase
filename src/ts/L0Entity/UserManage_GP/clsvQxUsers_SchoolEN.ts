
 /**
 * 类名:clsvQxUsers_SchoolEN
 * 表名:vQxUsers_School(00140075)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:04:30
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
 * vUsers_School(vQxUsers_School)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxUsers_SchoolEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "05"; //未知
public static readonly _PrimaryTypeId: string = "01"; //关键字
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "vQxUsers_School"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 26;
public static readonly _AttributeName = ["userId", "userName", "departmentId", "departmentName", "departmentAbbrName", "departmentTypeId", "departmentTypeName", "upDepartmentId", "upDepartmentName", "userStateId", "userStateName", "identityId", "identityDesc", "cardNo", "stuTeacherId", "id_GradeBase", "gradeBaseName", "enterSchoolDate", "isOffed", "beginYearMonth", "endYearMonth", "cardState", "isLeaved", "updDate", "updUser", "memo"];
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
case clsvQxUsers_SchoolEN.con_UserId:
return this.userId;
case clsvQxUsers_SchoolEN.con_UserName:
return this.userName;
case clsvQxUsers_SchoolEN.con_DepartmentId:
return this.departmentId;
case clsvQxUsers_SchoolEN.con_DepartmentName:
return this.departmentName;
case clsvQxUsers_SchoolEN.con_DepartmentAbbrName:
return this.departmentAbbrName;
case clsvQxUsers_SchoolEN.con_DepartmentTypeId:
return this.departmentTypeId;
case clsvQxUsers_SchoolEN.con_DepartmentTypeName:
return this.departmentTypeName;
case clsvQxUsers_SchoolEN.con_UpDepartmentId:
return this.upDepartmentId;
case clsvQxUsers_SchoolEN.con_UpDepartmentName:
return this.upDepartmentName;
case clsvQxUsers_SchoolEN.con_UserStateId:
return this.userStateId;
case clsvQxUsers_SchoolEN.con_UserStateName:
return this.userStateName;
case clsvQxUsers_SchoolEN.con_IdentityId:
return this.identityId;
case clsvQxUsers_SchoolEN.con_IdentityDesc:
return this.identityDesc;
case clsvQxUsers_SchoolEN.con_CardNo:
return this.cardNo;
case clsvQxUsers_SchoolEN.con_StuTeacherId:
return this.stuTeacherId;
case clsvQxUsers_SchoolEN.con_Id_GradeBase:
return this.id_GradeBase;
case clsvQxUsers_SchoolEN.con_GradeBaseName:
return this.gradeBaseName;
case clsvQxUsers_SchoolEN.con_EnterSchoolDate:
return this.enterSchoolDate;
case clsvQxUsers_SchoolEN.con_IsOffed:
return this.isOffed;
case clsvQxUsers_SchoolEN.con_BeginYearMonth:
return this.beginYearMonth;
case clsvQxUsers_SchoolEN.con_EndYearMonth:
return this.endYearMonth;
case clsvQxUsers_SchoolEN.con_CardState:
return this.cardState;
case clsvQxUsers_SchoolEN.con_IsLeaved:
return this.isLeaved;
case clsvQxUsers_SchoolEN.con_UpdDate:
return this.updDate;
case clsvQxUsers_SchoolEN.con_UpdUser:
return this.updUser;
case clsvQxUsers_SchoolEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUsers_School]中不存在!`;
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
case clsvQxUsers_SchoolEN.con_UserId:
this.userId = strValue;
break;
case clsvQxUsers_SchoolEN.con_UserName:
this.userName = strValue;
break;
case clsvQxUsers_SchoolEN.con_DepartmentId:
this.departmentId = strValue;
break;
case clsvQxUsers_SchoolEN.con_DepartmentName:
this.departmentName = strValue;
break;
case clsvQxUsers_SchoolEN.con_DepartmentAbbrName:
this.departmentAbbrName = strValue;
break;
case clsvQxUsers_SchoolEN.con_DepartmentTypeId:
this.departmentTypeId = strValue;
break;
case clsvQxUsers_SchoolEN.con_DepartmentTypeName:
this.departmentTypeName = strValue;
break;
case clsvQxUsers_SchoolEN.con_UpDepartmentId:
this.upDepartmentId = strValue;
break;
case clsvQxUsers_SchoolEN.con_UpDepartmentName:
this.upDepartmentName = strValue;
break;
case clsvQxUsers_SchoolEN.con_UserStateId:
this.userStateId = strValue;
break;
case clsvQxUsers_SchoolEN.con_UserStateName:
this.userStateName = strValue;
break;
case clsvQxUsers_SchoolEN.con_IdentityId:
this.identityId = strValue;
break;
case clsvQxUsers_SchoolEN.con_IdentityDesc:
this.identityDesc = strValue;
break;
case clsvQxUsers_SchoolEN.con_CardNo:
this.cardNo = strValue;
break;
case clsvQxUsers_SchoolEN.con_StuTeacherId:
this.stuTeacherId = strValue;
break;
case clsvQxUsers_SchoolEN.con_Id_GradeBase:
this.id_GradeBase = strValue;
break;
case clsvQxUsers_SchoolEN.con_GradeBaseName:
this.gradeBaseName = strValue;
break;
case clsvQxUsers_SchoolEN.con_EnterSchoolDate:
this.enterSchoolDate = strValue;
break;
case clsvQxUsers_SchoolEN.con_IsOffed:
this.isOffed = Boolean(strValue);
break;
case clsvQxUsers_SchoolEN.con_BeginYearMonth:
this.beginYearMonth = strValue;
break;
case clsvQxUsers_SchoolEN.con_EndYearMonth:
this.endYearMonth = strValue;
break;
case clsvQxUsers_SchoolEN.con_CardState:
this.cardState = strValue;
break;
case clsvQxUsers_SchoolEN.con_IsLeaved:
this.isLeaved = Boolean(strValue);
break;
case clsvQxUsers_SchoolEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQxUsers_SchoolEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvQxUsers_SchoolEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxUsers_School]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public identityId = "";    //身份编号
public identityDesc = "";    //身份描述
public cardNo = "";    //卡号
public stuTeacherId = "";    //学工号
public id_GradeBase = "";    //入学年级流水号
public gradeBaseName = "";    //年级名称
public enterSchoolDate = "";    //进校日期
public isOffed = false;    //是否毕业
public beginYearMonth = "";    //开始年月
public endYearMonth = "";    //结束年月
public cardState = "";    //卡状态
public isLeaved = false;    //IsLeaved
public updDate = "";    //修改日期
public updUser = "";    //修改用户
public memo = "";    //备注


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
 * 常量:"CardNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CardNo = "cardNo";    //卡号

 /**
 * 常量:"StuTeacherId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_StuTeacherId = "stuTeacherId";    //学工号

 /**
 * 常量:"Id_GradeBase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_GradeBase = "id_GradeBase";    //入学年级流水号

 /**
 * 常量:"GradeBaseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_GradeBaseName = "gradeBaseName";    //年级名称

 /**
 * 常量:"EnterSchoolDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_EnterSchoolDate = "enterSchoolDate";    //进校日期

 /**
 * 常量:"IsOffed"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsOffed = "isOffed";    //是否毕业

 /**
 * 常量:"BeginYearMonth"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_BeginYearMonth = "beginYearMonth";    //开始年月

 /**
 * 常量:"EndYearMonth"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_EndYearMonth = "endYearMonth";    //结束年月

 /**
 * 常量:"CardState"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CardState = "cardState";    //卡状态

 /**
 * 常量:"IsLeaved"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsLeaved = "isLeaved";    //IsLeaved

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
//return propName in new clsvQxUsers_SchoolEN();
const instance = new clsvQxUsers_SchoolEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}