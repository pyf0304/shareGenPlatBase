
 /**
 * 类名:clsQxUserDownLoadLogEN
 * 表名:QxUserDownLoadLog(00140058)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:25
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:工程文件下载(PrjFileDownLoad)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 用户下载日志(QxUserDownLoadLog)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxUserDownLoadLogEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxUserDownLoadLog"; //当前表名,与该类相关的表名
public static _KeyFldName= "UserDownLoadLogId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["userDownLoadLogId", "userId", "prjSiteId", "downLownDate", "isSuccess", "logInfo", "memo"];
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
private mstrUserDownLoadLogId = "";    //用户下载日志Id
private mstrUserId = "";    //用户ID
private mstrPrjSiteId = "";    //工程站点Id
private mstrDownLownDate = "";    //下载日期
private mbolIsSuccess = false;    //是否成功
private mstrLogInfo = "";    //日志信息
private mstrMemo = "";    //备注

/**
 * 用户下载日志Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserDownLoadLogId (value: string)
{
if (value  != undefined)
{
 this.userDownLoadLogId = value;
    this.hmProperty["userDownLoadLogId"] = true;
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
 * 工程站点Id(说明:;字段类型:char;字段长度:6;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPrjSiteId (value: string)
{
if (value  != undefined)
{
 this.prjSiteId = value;
    this.hmProperty["prjSiteId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 下载日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDownLownDate (value: string)
{
if (value  != undefined)
{
 this.downLownDate = value;
    this.hmProperty["downLownDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否成功(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSuccess (value: boolean)
{
if (value  != undefined)
{
 this.isSuccess = value;
    this.hmProperty["isSuccess"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 日志信息(说明:;字段类型:varchar;字段长度:500;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLogInfo (value: string)
{
if (value  != undefined)
{
 this.logInfo = value;
    this.hmProperty["logInfo"] = true;
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
case clsQxUserDownLoadLogEN.con_UserDownLoadLogId:
return this.userDownLoadLogId;
case clsQxUserDownLoadLogEN.con_UserId:
return this.userId;
case clsQxUserDownLoadLogEN.con_PrjSiteId:
return this.prjSiteId;
case clsQxUserDownLoadLogEN.con_DownLownDate:
return this.downLownDate;
case clsQxUserDownLoadLogEN.con_IsSuccess:
return this.isSuccess;
case clsQxUserDownLoadLogEN.con_LogInfo:
return this.logInfo;
case clsQxUserDownLoadLogEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUserDownLoadLog]中不存在!`;
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
case clsQxUserDownLoadLogEN.con_UserDownLoadLogId:
this.userDownLoadLogId = strValue;
    this.hmProperty["userDownLoadLogId"] = true;
break;
case clsQxUserDownLoadLogEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsQxUserDownLoadLogEN.con_PrjSiteId:
this.prjSiteId = strValue;
    this.hmProperty["prjSiteId"] = true;
break;
case clsQxUserDownLoadLogEN.con_DownLownDate:
this.downLownDate = strValue;
    this.hmProperty["downLownDate"] = true;
break;
case clsQxUserDownLoadLogEN.con_IsSuccess:
this.isSuccess = Boolean(strValue);
    this.hmProperty["isSuccess"] = true;
break;
case clsQxUserDownLoadLogEN.con_LogInfo:
this.logInfo = strValue;
    this.hmProperty["logInfo"] = true;
break;
case clsQxUserDownLoadLogEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxUserDownLoadLog]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public userDownLoadLogId = "";    //用户下载日志Id
public userId = "";    //用户ID
public prjSiteId = "";    //工程站点Id
public downLownDate = "";    //下载日期
public isSuccess = false;    //是否成功
public logInfo = "";    //日志信息
public memo = "";    //备注


 /**
 * 常量:"UserDownLoadLogId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserDownLoadLogId(): string {return "userDownLoadLogId";}    //用户下载日志Id

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"PrjSiteId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PrjSiteId(): string {return "prjSiteId";}    //工程站点Id

 /**
 * 常量:"DownLownDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DownLownDate(): string {return "downLownDate";}    //下载日期

 /**
 * 常量:"IsSuccess"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSuccess(): string {return "isSuccess";}    //是否成功

 /**
 * 常量:"LogInfo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LogInfo(): string {return "logInfo";}    //日志信息

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
//return propName in new clsQxUserDownLoadLogEN();
const instance = new clsQxUserDownLoadLogEN();
return instance.hasOwnProperty(propName);
}
}