
 /**
 * 类名:clsQxPrjSite4DownLoadEN
 * 表名:QxPrjSite4DownLoad(00140055)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:20
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
 * 文件下载站点(QxPrjSite4DownLoad)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxPrjSite4DownLoadEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxPrjSite4DownLoad"; //当前表名,与该类相关的表名
public static _KeyFldName= "PrjSiteId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["prjSiteId", "prjSiteName", "qxPrjId", "ftpServer", "ftpUserId", "ftpUserPassword", "updDate", "updUserId", "memo"];
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
private mstrPrjSiteId = "";    //工程站点Id
private mstrPrjSiteName = "";    //工程站点名
private mstrQxPrjId = "";    //项目Id
private mstrFtpServer = "";    //Ftp服务器
private mstrFtpUserId = "";    //Ftp用户Id
private mstrFtpUserPassword = "";    //Ftp用户口令
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

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
 * 工程站点名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPrjSiteName (value: string)
{
if (value  != undefined)
{
 this.prjSiteName = value;
    this.hmProperty["prjSiteName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 项目Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQxPrjId (value: string)
{
if (value  != undefined)
{
 this.qxPrjId = value;
    this.hmProperty["qxPrjId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Ftp服务器(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFtpServer (value: string)
{
if (value  != undefined)
{
 this.ftpServer = value;
    this.hmProperty["ftpServer"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Ftp用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFtpUserId (value: string)
{
if (value  != undefined)
{
 this.ftpUserId = value;
    this.hmProperty["ftpUserId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Ftp用户口令(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFtpUserPassword (value: string)
{
if (value  != undefined)
{
 this.ftpUserPassword = value;
    this.hmProperty["ftpUserPassword"] = true;
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
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
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
case clsQxPrjSite4DownLoadEN.con_PrjSiteId:
return this.prjSiteId;
case clsQxPrjSite4DownLoadEN.con_PrjSiteName:
return this.prjSiteName;
case clsQxPrjSite4DownLoadEN.con_QxPrjId:
return this.qxPrjId;
case clsQxPrjSite4DownLoadEN.con_FtpServer:
return this.ftpServer;
case clsQxPrjSite4DownLoadEN.con_FtpUserId:
return this.ftpUserId;
case clsQxPrjSite4DownLoadEN.con_FtpUserPassword:
return this.ftpUserPassword;
case clsQxPrjSite4DownLoadEN.con_UpdDate:
return this.updDate;
case clsQxPrjSite4DownLoadEN.con_UpdUserId:
return this.updUserId;
case clsQxPrjSite4DownLoadEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxPrjSite4DownLoad]中不存在!`;
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
case clsQxPrjSite4DownLoadEN.con_PrjSiteId:
this.prjSiteId = strValue;
    this.hmProperty["prjSiteId"] = true;
break;
case clsQxPrjSite4DownLoadEN.con_PrjSiteName:
this.prjSiteName = strValue;
    this.hmProperty["prjSiteName"] = true;
break;
case clsQxPrjSite4DownLoadEN.con_QxPrjId:
this.qxPrjId = strValue;
    this.hmProperty["qxPrjId"] = true;
break;
case clsQxPrjSite4DownLoadEN.con_FtpServer:
this.ftpServer = strValue;
    this.hmProperty["ftpServer"] = true;
break;
case clsQxPrjSite4DownLoadEN.con_FtpUserId:
this.ftpUserId = strValue;
    this.hmProperty["ftpUserId"] = true;
break;
case clsQxPrjSite4DownLoadEN.con_FtpUserPassword:
this.ftpUserPassword = strValue;
    this.hmProperty["ftpUserPassword"] = true;
break;
case clsQxPrjSite4DownLoadEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxPrjSite4DownLoadEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsQxPrjSite4DownLoadEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxPrjSite4DownLoad]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public prjSiteId = "";    //工程站点Id
public prjSiteName = "";    //工程站点名
public qxPrjId = "";    //项目Id
public ftpServer = "";    //Ftp服务器
public ftpUserId = "";    //Ftp用户Id
public ftpUserPassword = "";    //Ftp用户口令
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"PrjSiteId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PrjSiteId(): string {return "prjSiteId";}    //工程站点Id

 /**
 * 常量:"PrjSiteName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PrjSiteName(): string {return "prjSiteName";}    //工程站点名

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"FtpServer"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FtpServer(): string {return "ftpServer";}    //Ftp服务器

 /**
 * 常量:"FtpUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FtpUserId(): string {return "ftpUserId";}    //Ftp用户Id

 /**
 * 常量:"FtpUserPassword"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FtpUserPassword(): string {return "ftpUserPassword";}    //Ftp用户口令

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

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
//return propName in new clsQxPrjSite4DownLoadEN();
const instance = new clsQxPrjSite4DownLoadEN();
return instance.hasOwnProperty(propName);
}
}