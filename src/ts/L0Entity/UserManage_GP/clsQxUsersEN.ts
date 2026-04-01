
 /**
 * 类名:clsQxUsersEN
 * 表名:QxUsers(00140015)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:00:20
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
 * 用户(QxUsers)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxUsersEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = ""; //
public static readonly _PrimaryTypeId: string = "01"; //关键字
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "QxUsers"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 23;
public static readonly _AttributeName = ["userId", "userName", "departmentId", "userStateId", "password", "effitiveBeginDate", "effitiveEndDate", "stuTeacherId", "identityId", "isArchive", "openId", "email", "phoneNumber", "isSynch", "synchDate", "detailInfoTab", "id_GradeBase", "id_School", "headPic", "id_XzCollege", "updDate", "updUser", "memo"];
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
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrUserId = "";    //用户ID
private mstrUserName = "";    //用户名
private mstrDepartmentId = "";    //部门Id
private mstrUserStateId = "";    //用户状态Id
private mstrPassword = "";    //口令
private mstrEffitiveBeginDate = "";    //有效开始日期
private mstrEffitiveEndDate = "";    //有效结束日期
private mstrStuTeacherId = "";    //学工号
private mstrIdentityId = "";    //身份编号
private mbolIsArchive = false;    //是否存档
private mstrOpenId = "";    //微信openid
private mstrEmail = "";    //邮箱
private mstrPhoneNumber = "";    //电话号码
private mbolIsSynch = false;    //是否同步
private mstrSynchDate = "";    //同步日期
private mstrDetailInfoTab = "";    //详细信息表
private mstrId_GradeBase = "";    //入学年级流水号
private mstrId_School = "";    //学校流水号
private mstrheadPic = "";    //头像
private mstrId_XzCollege = "";    //学院Id
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改用户
private mstrMemo = "";    //备注

/**
 * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserId (value: string)
{
if (value  != undefined)
{
 this.userId = value;
    this.hmProperty["userId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserName (value: string)
{
if (value  != undefined)
{
 this.userName = value;
    this.hmProperty["userName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 部门Id(说明:;字段类型:varchar;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDepartmentId (value: string)
{
if (value  != undefined)
{
 this.departmentId = value;
    this.hmProperty["departmentId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户状态Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserStateId (value: string)
{
if (value  != undefined)
{
 this.userStateId = value;
    this.hmProperty["userStateId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 口令(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPassword (value: string)
{
if (value  != undefined)
{
 this.password = value;
    this.hmProperty["password"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 有效开始日期(说明:;字段类型:varchar;字段长度:14;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEffitiveBeginDate (value: string)
{
if (value  != undefined)
{
 this.effitiveBeginDate = value;
    this.hmProperty["effitiveBeginDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 有效结束日期(说明:;字段类型:varchar;字段长度:14;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEffitiveEndDate (value: string)
{
if (value  != undefined)
{
 this.effitiveEndDate = value;
    this.hmProperty["effitiveEndDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学工号(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStuTeacherId (value: string)
{
if (value  != undefined)
{
 this.stuTeacherId = value;
    this.hmProperty["stuTeacherId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 身份编号(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdentityId (value: string)
{
if (value  != undefined)
{
 this.identityId = value;
    this.hmProperty["identityId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否存档(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsArchive (value: boolean)
{
if (value  != undefined)
{
 this.isArchive = value;
    this.hmProperty["isArchive"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 微信openid(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOpenId (value: string)
{
if (value  != undefined)
{
 this.openId = value;
    this.hmProperty["openId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 邮箱(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetEmail (value: string)
{
if (value  != undefined)
{
 this.email = value;
    this.hmProperty["email"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 电话号码(说明:;字段类型:varchar;字段长度:15;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPhoneNumber (value: string)
{
if (value  != undefined)
{
 this.phoneNumber = value;
    this.hmProperty["phoneNumber"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否同步(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSynch (value: boolean)
{
if (value  != undefined)
{
 this.isSynch = value;
    this.hmProperty["isSynch"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 同步日期(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSynchDate (value: string)
{
if (value  != undefined)
{
 this.synchDate = value;
    this.hmProperty["synchDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 详细信息表(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDetailInfoTab (value: string)
{
if (value  != undefined)
{
 this.detailInfoTab = value;
    this.hmProperty["detailInfoTab"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 入学年级流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetId_GradeBase (value: string)
{
if (value  != undefined)
{
 this.id_GradeBase = value;
    this.hmProperty["id_GradeBase"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetId_School (value: string)
{
if (value  != undefined)
{
 this.id_School = value;
    this.hmProperty["id_School"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 头像(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetheadPic (value: string)
{
if (value  != undefined)
{
 this.headPic = value;
    this.hmProperty["headPic"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学院Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetId_XzCollege (value: string)
{
if (value  != undefined)
{
 this.id_XzCollege = value;
    this.hmProperty["id_XzCollege"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改用户(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
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
case clsQxUsersEN.con_UserId:
return this.userId;
case clsQxUsersEN.con_UserName:
return this.userName;
case clsQxUsersEN.con_DepartmentId:
return this.departmentId;
case clsQxUsersEN.con_UserStateId:
return this.userStateId;
case clsQxUsersEN.con_Password:
return this.password;
case clsQxUsersEN.con_EffitiveBeginDate:
return this.effitiveBeginDate;
case clsQxUsersEN.con_EffitiveEndDate:
return this.effitiveEndDate;
case clsQxUsersEN.con_StuTeacherId:
return this.stuTeacherId;
case clsQxUsersEN.con_IdentityId:
return this.identityId;
case clsQxUsersEN.con_IsArchive:
return this.isArchive;
case clsQxUsersEN.con_OpenId:
return this.openId;
case clsQxUsersEN.con_Email:
return this.email;
case clsQxUsersEN.con_PhoneNumber:
return this.phoneNumber;
case clsQxUsersEN.con_IsSynch:
return this.isSynch;
case clsQxUsersEN.con_SynchDate:
return this.synchDate;
case clsQxUsersEN.con_DetailInfoTab:
return this.detailInfoTab;
case clsQxUsersEN.con_Id_GradeBase:
return this.id_GradeBase;
case clsQxUsersEN.con_Id_School:
return this.id_School;
case clsQxUsersEN.con_headPic:
return this.headPic;
case clsQxUsersEN.con_Id_XzCollege:
return this.id_XzCollege;
case clsQxUsersEN.con_UpdDate:
return this.updDate;
case clsQxUsersEN.con_UpdUser:
return this.updUser;
case clsQxUsersEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUsers]中不存在!`;
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
case clsQxUsersEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsQxUsersEN.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case clsQxUsersEN.con_DepartmentId:
this.departmentId = strValue;
    this.hmProperty["departmentId"] = true;
break;
case clsQxUsersEN.con_UserStateId:
this.userStateId = strValue;
    this.hmProperty["userStateId"] = true;
break;
case clsQxUsersEN.con_Password:
this.password = strValue;
    this.hmProperty["password"] = true;
break;
case clsQxUsersEN.con_EffitiveBeginDate:
this.effitiveBeginDate = strValue;
    this.hmProperty["effitiveBeginDate"] = true;
break;
case clsQxUsersEN.con_EffitiveEndDate:
this.effitiveEndDate = strValue;
    this.hmProperty["effitiveEndDate"] = true;
break;
case clsQxUsersEN.con_StuTeacherId:
this.stuTeacherId = strValue;
    this.hmProperty["stuTeacherId"] = true;
break;
case clsQxUsersEN.con_IdentityId:
this.identityId = strValue;
    this.hmProperty["identityId"] = true;
break;
case clsQxUsersEN.con_IsArchive:
this.isArchive = Boolean(strValue);
    this.hmProperty["isArchive"] = true;
break;
case clsQxUsersEN.con_OpenId:
this.openId = strValue;
    this.hmProperty["openId"] = true;
break;
case clsQxUsersEN.con_Email:
this.email = strValue;
    this.hmProperty["email"] = true;
break;
case clsQxUsersEN.con_PhoneNumber:
this.phoneNumber = strValue;
    this.hmProperty["phoneNumber"] = true;
break;
case clsQxUsersEN.con_IsSynch:
this.isSynch = Boolean(strValue);
    this.hmProperty["isSynch"] = true;
break;
case clsQxUsersEN.con_SynchDate:
this.synchDate = strValue;
    this.hmProperty["synchDate"] = true;
break;
case clsQxUsersEN.con_DetailInfoTab:
this.detailInfoTab = strValue;
    this.hmProperty["detailInfoTab"] = true;
break;
case clsQxUsersEN.con_Id_GradeBase:
this.id_GradeBase = strValue;
    this.hmProperty["id_GradeBase"] = true;
break;
case clsQxUsersEN.con_Id_School:
this.id_School = strValue;
    this.hmProperty["id_School"] = true;
break;
case clsQxUsersEN.con_headPic:
this.headPic = strValue;
    this.hmProperty["headPic"] = true;
break;
case clsQxUsersEN.con_Id_XzCollege:
this.id_XzCollege = strValue;
    this.hmProperty["id_XzCollege"] = true;
break;
case clsQxUsersEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxUsersEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsQxUsersEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUsers]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public userStateId = "";    //用户状态Id
public password = "";    //口令
public effitiveBeginDate = "";    //有效开始日期
public effitiveEndDate = "";    //有效结束日期
public stuTeacherId = "";    //学工号
public identityId = "";    //身份编号
public isArchive = false;    //是否存档
public openId = "";    //微信openid
public email = "";    //邮箱
public phoneNumber = "";    //电话号码
public isSynch = false;    //是否同步
public synchDate = "";    //同步日期
public detailInfoTab = "";    //详细信息表
public id_GradeBase = "";    //入学年级流水号
public id_School = "";    //学校流水号
public headPic = "";    //头像
public id_XzCollege = "";    //学院Id
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
 * 常量:"UserStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UserStateId = "userStateId";    //用户状态Id

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
 * 常量:"IsArchive"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsArchive = "isArchive";    //是否存档

 /**
 * 常量:"OpenId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_OpenId = "openId";    //微信openid

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
 * 常量:"DetailInfoTab"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_DetailInfoTab = "detailInfoTab";    //详细信息表

 /**
 * 常量:"Id_GradeBase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_GradeBase = "id_GradeBase";    //入学年级流水号

 /**
 * 常量:"Id_School"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_School = "id_School";    //学校流水号

 /**
 * 常量:"headPic"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_headPic = "headPic";    //头像

 /**
 * 常量:"Id_XzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_XzCollege = "id_XzCollege";    //学院Id

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
//return propName in new clsQxUsersEN();
const instance = new clsQxUsersEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}