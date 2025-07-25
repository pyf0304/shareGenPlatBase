
 /**
 * 类名:clsQxUsers4SynchEN
 * 表名:QxUsers4Synch(00140089)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:14
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:数据同步(DataSynch)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 用户4同步(QxUsers4Synch)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxUsers4SynchEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxUsers4Synch"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 23;
public static AttributeName = ["mId", "ipAddress", "userId", "userName", "userStateId", "openId", "identityId", "stuTeacherId", "password", "phoneNumber", "departmentId", "idXzCollege", "effitiveBeginDate", "effitiveEndDate", "email", "isArchive", "isAccessSynch", "accessSynchDate", "isExistUserInCurr", "isSamePwd", "updDate", "updUser", "memo"];
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
private mlngmId = 0;    //流水号
private mstrIpAddress = "";    //IP地址
private mstrUserId = "";    //用户ID
private mstrUserName = "";    //用户名
private mstrUserStateId = "";    //用户状态Id
private mstrOpenId = "";    //微信openid
private mstrIdentityId = "";    //身份编号
private mstrStuTeacherId = "";    //学工号
private mstrPassword = "";    //口令
private mstrPhoneNumber = "";    //电话号码
private mstrDepartmentId = "";    //部门Id
private mstrIdXzCollege = "";    //学院Id
private mstrEffitiveBeginDate = "";    //有效开始日期
private mstrEffitiveEndDate = "";    //有效结束日期
private mstrEmail = "";    //邮箱
private mbolIsArchive = false;    //是否存档
private mbolIsAccessSynch = false;    //是否处理同步
private mstrAccessSynchDate = "";    //处理同步日期
private mbolIsExistUserInCurr = false;    //当前是否存在用户
private mbolIsSamePwd = false;    //是否相同密码
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改用户
private mstrMemo = "";    //备注

/**
 * 流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetmId (value: number)
{
if (value  != undefined)
{
 this.mId = value;
    this.hmProperty["mId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * IP地址(说明:;字段类型:varchar;字段长度:23;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIpAddress (value: string)
{
if (value  != undefined)
{
 this.ipAddress = value;
    this.hmProperty["ipAddress"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
 * 学院Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdXzCollege (value: string)
{
if (value  != undefined)
{
 this.idXzCollege = value;
    this.hmProperty["idXzCollege"] = true;
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
 * 是否处理同步(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsAccessSynch (value: boolean)
{
if (value  != undefined)
{
 this.isAccessSynch = value;
    this.hmProperty["isAccessSynch"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 处理同步日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetAccessSynchDate (value: string)
{
if (value  != undefined)
{
 this.accessSynchDate = value;
    this.hmProperty["accessSynchDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 当前是否存在用户(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsExistUserInCurr (value: boolean)
{
if (value  != undefined)
{
 this.isExistUserInCurr = value;
    this.hmProperty["isExistUserInCurr"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否相同密码(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSamePwd (value: boolean)
{
if (value  != undefined)
{
 this.isSamePwd = value;
    this.hmProperty["isSamePwd"] = true;
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
case clsQxUsers4SynchEN.con_mId:
return this.mId;
case clsQxUsers4SynchEN.con_IpAddress:
return this.ipAddress;
case clsQxUsers4SynchEN.con_UserId:
return this.userId;
case clsQxUsers4SynchEN.con_UserName:
return this.userName;
case clsQxUsers4SynchEN.con_UserStateId:
return this.userStateId;
case clsQxUsers4SynchEN.con_OpenId:
return this.openId;
case clsQxUsers4SynchEN.con_IdentityId:
return this.identityId;
case clsQxUsers4SynchEN.con_StuTeacherId:
return this.stuTeacherId;
case clsQxUsers4SynchEN.con_Password:
return this.password;
case clsQxUsers4SynchEN.con_PhoneNumber:
return this.phoneNumber;
case clsQxUsers4SynchEN.con_DepartmentId:
return this.departmentId;
case clsQxUsers4SynchEN.con_IdXzCollege:
return this.idXzCollege;
case clsQxUsers4SynchEN.con_EffitiveBeginDate:
return this.effitiveBeginDate;
case clsQxUsers4SynchEN.con_EffitiveEndDate:
return this.effitiveEndDate;
case clsQxUsers4SynchEN.con_Email:
return this.email;
case clsQxUsers4SynchEN.con_IsArchive:
return this.isArchive;
case clsQxUsers4SynchEN.con_IsAccessSynch:
return this.isAccessSynch;
case clsQxUsers4SynchEN.con_AccessSynchDate:
return this.accessSynchDate;
case clsQxUsers4SynchEN.con_IsExistUserInCurr:
return this.isExistUserInCurr;
case clsQxUsers4SynchEN.con_IsSamePwd:
return this.isSamePwd;
case clsQxUsers4SynchEN.con_UpdDate:
return this.updDate;
case clsQxUsers4SynchEN.con_UpdUser:
return this.updUser;
case clsQxUsers4SynchEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUsers4Synch]中不存在!`;
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
case clsQxUsers4SynchEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsQxUsers4SynchEN.con_IpAddress:
this.ipAddress = strValue;
    this.hmProperty["ipAddress"] = true;
break;
case clsQxUsers4SynchEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsQxUsers4SynchEN.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case clsQxUsers4SynchEN.con_UserStateId:
this.userStateId = strValue;
    this.hmProperty["userStateId"] = true;
break;
case clsQxUsers4SynchEN.con_OpenId:
this.openId = strValue;
    this.hmProperty["openId"] = true;
break;
case clsQxUsers4SynchEN.con_IdentityId:
this.identityId = strValue;
    this.hmProperty["identityId"] = true;
break;
case clsQxUsers4SynchEN.con_StuTeacherId:
this.stuTeacherId = strValue;
    this.hmProperty["stuTeacherId"] = true;
break;
case clsQxUsers4SynchEN.con_Password:
this.password = strValue;
    this.hmProperty["password"] = true;
break;
case clsQxUsers4SynchEN.con_PhoneNumber:
this.phoneNumber = strValue;
    this.hmProperty["phoneNumber"] = true;
break;
case clsQxUsers4SynchEN.con_DepartmentId:
this.departmentId = strValue;
    this.hmProperty["departmentId"] = true;
break;
case clsQxUsers4SynchEN.con_IdXzCollege:
this.idXzCollege = strValue;
    this.hmProperty["idXzCollege"] = true;
break;
case clsQxUsers4SynchEN.con_EffitiveBeginDate:
this.effitiveBeginDate = strValue;
    this.hmProperty["effitiveBeginDate"] = true;
break;
case clsQxUsers4SynchEN.con_EffitiveEndDate:
this.effitiveEndDate = strValue;
    this.hmProperty["effitiveEndDate"] = true;
break;
case clsQxUsers4SynchEN.con_Email:
this.email = strValue;
    this.hmProperty["email"] = true;
break;
case clsQxUsers4SynchEN.con_IsArchive:
this.isArchive = Boolean(strValue);
    this.hmProperty["isArchive"] = true;
break;
case clsQxUsers4SynchEN.con_IsAccessSynch:
this.isAccessSynch = Boolean(strValue);
    this.hmProperty["isAccessSynch"] = true;
break;
case clsQxUsers4SynchEN.con_AccessSynchDate:
this.accessSynchDate = strValue;
    this.hmProperty["accessSynchDate"] = true;
break;
case clsQxUsers4SynchEN.con_IsExistUserInCurr:
this.isExistUserInCurr = Boolean(strValue);
    this.hmProperty["isExistUserInCurr"] = true;
break;
case clsQxUsers4SynchEN.con_IsSamePwd:
this.isSamePwd = Boolean(strValue);
    this.hmProperty["isSamePwd"] = true;
break;
case clsQxUsers4SynchEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxUsers4SynchEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsQxUsers4SynchEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxUsers4Synch]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //流水号
public ipAddress = "";    //IP地址
public userId = "";    //用户ID
public userName = "";    //用户名
public userStateId = "";    //用户状态Id
public openId = "";    //微信openid
public identityId = "";    //身份编号
public stuTeacherId = "";    //学工号
public password = "";    //口令
public phoneNumber = "";    //电话号码
public departmentId = "";    //部门Id
public idXzCollege = "";    //学院Id
public effitiveBeginDate = "";    //有效开始日期
public effitiveEndDate = "";    //有效结束日期
public email = "";    //邮箱
public isArchive = false;    //是否存档
public isAccessSynch = false;    //是否处理同步
public accessSynchDate = "";    //处理同步日期
public isExistUserInCurr = false;    //当前是否存在用户
public isSamePwd = false;    //是否相同密码
public updDate = "";    //修改日期
public updUser = "";    //修改用户
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //流水号

 /**
 * 常量:"IpAddress"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IpAddress(): string {return "ipAddress";}    //IP地址

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
 * 常量:"UserStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserStateId(): string {return "userStateId";}    //用户状态Id

 /**
 * 常量:"OpenId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OpenId(): string {return "openId";}    //微信openid

 /**
 * 常量:"IdentityId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdentityId(): string {return "identityId";}    //身份编号

 /**
 * 常量:"StuTeacherId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuTeacherId(): string {return "stuTeacherId";}    //学工号

 /**
 * 常量:"Password"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Password(): string {return "password";}    //口令

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话号码

 /**
 * 常量:"DepartmentId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentId(): string {return "departmentId";}    //部门Id

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院Id

 /**
 * 常量:"EffitiveBeginDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EffitiveBeginDate(): string {return "effitiveBeginDate";}    //有效开始日期

 /**
 * 常量:"EffitiveEndDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EffitiveEndDate(): string {return "effitiveEndDate";}    //有效结束日期

 /**
 * 常量:"Email"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Email(): string {return "email";}    //邮箱

 /**
 * 常量:"IsArchive"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsArchive(): string {return "isArchive";}    //是否存档

 /**
 * 常量:"IsAccessSynch"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsAccessSynch(): string {return "isAccessSynch";}    //是否处理同步

 /**
 * 常量:"AccessSynchDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AccessSynchDate(): string {return "accessSynchDate";}    //处理同步日期

 /**
 * 常量:"IsExistUserInCurr"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsExistUserInCurr(): string {return "isExistUserInCurr";}    //当前是否存在用户

 /**
 * 常量:"IsSamePwd"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSamePwd(): string {return "isSamePwd";}    //是否相同密码

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改用户

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
//return propName in new clsQxUsers4SynchEN();
const instance = new clsQxUsers4SynchEN();
return instance.hasOwnProperty(propName);
}
}