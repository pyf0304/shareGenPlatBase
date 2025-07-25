
 /**
 * 类名:clsQxServer4SynchEN
 * 表名:QxServer4Synch(00140091)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:22
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
 * 同步服务器(QxServer4Synch)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxServer4SynchEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxServer4Synch"; //当前表名,与该类相关的表名
public static _KeyFldName= "ServerId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["serverId", "serverName", "ipAddress", "webApiAddress", "isSelf", "inUse", "updDate", "updUser", "memo"];
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
private mstrServerId = "";    //服务器Id
private mstrServerName = "";    //服务器名
private mstrIpAddress = "";    //IP地址
private mstrWebApiAddress = "";    //WApi地址
private mbolIsSelf = false;    //是否当前服务器
private mbolInUse = false;    //是否在用
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改用户
private mstrMemo = "";    //备注

/**
 * 服务器Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetServerId (value: string)
{
if (value  != undefined)
{
 this.serverId = value;
    this.hmProperty["serverId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 服务器名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetServerName (value: string)
{
if (value  != undefined)
{
 this.serverName = value;
    this.hmProperty["serverName"] = true;
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
 * WApi地址(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWebApiAddress (value: string)
{
if (value  != undefined)
{
 this.webApiAddress = value;
    this.hmProperty["webApiAddress"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否当前服务器(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSelf (value: boolean)
{
if (value  != undefined)
{
 this.isSelf = value;
    this.hmProperty["isSelf"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetInUse (value: boolean)
{
if (value  != undefined)
{
 this.inUse = value;
    this.hmProperty["inUse"] = true;
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
case clsQxServer4SynchEN.con_ServerId:
return this.serverId;
case clsQxServer4SynchEN.con_ServerName:
return this.serverName;
case clsQxServer4SynchEN.con_IpAddress:
return this.ipAddress;
case clsQxServer4SynchEN.con_WebApiAddress:
return this.webApiAddress;
case clsQxServer4SynchEN.con_IsSelf:
return this.isSelf;
case clsQxServer4SynchEN.con_InUse:
return this.inUse;
case clsQxServer4SynchEN.con_UpdDate:
return this.updDate;
case clsQxServer4SynchEN.con_UpdUser:
return this.updUser;
case clsQxServer4SynchEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxServer4Synch]中不存在!`;
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
case clsQxServer4SynchEN.con_ServerId:
this.serverId = strValue;
    this.hmProperty["serverId"] = true;
break;
case clsQxServer4SynchEN.con_ServerName:
this.serverName = strValue;
    this.hmProperty["serverName"] = true;
break;
case clsQxServer4SynchEN.con_IpAddress:
this.ipAddress = strValue;
    this.hmProperty["ipAddress"] = true;
break;
case clsQxServer4SynchEN.con_WebApiAddress:
this.webApiAddress = strValue;
    this.hmProperty["webApiAddress"] = true;
break;
case clsQxServer4SynchEN.con_IsSelf:
this.isSelf = Boolean(strValue);
    this.hmProperty["isSelf"] = true;
break;
case clsQxServer4SynchEN.con_InUse:
this.inUse = Boolean(strValue);
    this.hmProperty["inUse"] = true;
break;
case clsQxServer4SynchEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxServer4SynchEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsQxServer4SynchEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxServer4Synch]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public serverId = "";    //服务器Id
public serverName = "";    //服务器名
public ipAddress = "";    //IP地址
public webApiAddress = "";    //WApi地址
public isSelf = false;    //是否当前服务器
public inUse = false;    //是否在用
public updDate = "";    //修改日期
public updUser = "";    //修改用户
public memo = "";    //备注


 /**
 * 常量:"ServerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ServerId(): string {return "serverId";}    //服务器Id

 /**
 * 常量:"ServerName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ServerName(): string {return "serverName";}    //服务器名

 /**
 * 常量:"IpAddress"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IpAddress(): string {return "ipAddress";}    //IP地址

 /**
 * 常量:"WebApiAddress"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WebApiAddress(): string {return "webApiAddress";}    //WApi地址

 /**
 * 常量:"IsSelf"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsSelf(): string {return "isSelf";}    //是否当前服务器

 /**
 * 常量:"InUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

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
//return propName in new clsQxServer4SynchEN();
const instance = new clsQxServer4SynchEN();
return instance.hasOwnProperty(propName);
}
}