
 /**
 * 类名:clsQxUserDownLoadDetailLogEN
 * 表名:QxUserDownLoadDetailLog(00140059)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:24
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
 * 用户下载日志细节(QxUserDownLoadDetailLog)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxUserDownLoadDetailLogEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxUserDownLoadDetailLog"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["mId", "userDownLoadLogId", "fileName", "version", "isSuccess", "logInfo", "memo"];
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
private mstrUserDownLoadLogId = "";    //用户下载日志Id
private mstrFileName = "";    //文件名
private mstrVersion = "";    //版本
private mbolIsSuccess = false;    //是否成功
private mstrLogInfo = "";    //日志信息
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
 * 文件名(说明:;字段类型:varchar;字段长度:500;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileName (value: string)
{
if (value  != undefined)
{
 this.fileName = value;
    this.hmProperty["fileName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 版本(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVersion (value: string)
{
if (value  != undefined)
{
 this.version = value;
    this.hmProperty["version"] = true;
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
case clsQxUserDownLoadDetailLogEN.con_mId:
return this.mId;
case clsQxUserDownLoadDetailLogEN.con_UserDownLoadLogId:
return this.userDownLoadLogId;
case clsQxUserDownLoadDetailLogEN.con_FileName:
return this.fileName;
case clsQxUserDownLoadDetailLogEN.con_Version:
return this.version;
case clsQxUserDownLoadDetailLogEN.con_IsSuccess:
return this.isSuccess;
case clsQxUserDownLoadDetailLogEN.con_LogInfo:
return this.logInfo;
case clsQxUserDownLoadDetailLogEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUserDownLoadDetailLog]中不存在!`;
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
case clsQxUserDownLoadDetailLogEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsQxUserDownLoadDetailLogEN.con_UserDownLoadLogId:
this.userDownLoadLogId = strValue;
    this.hmProperty["userDownLoadLogId"] = true;
break;
case clsQxUserDownLoadDetailLogEN.con_FileName:
this.fileName = strValue;
    this.hmProperty["fileName"] = true;
break;
case clsQxUserDownLoadDetailLogEN.con_Version:
this.version = strValue;
    this.hmProperty["version"] = true;
break;
case clsQxUserDownLoadDetailLogEN.con_IsSuccess:
this.isSuccess = Boolean(strValue);
    this.hmProperty["isSuccess"] = true;
break;
case clsQxUserDownLoadDetailLogEN.con_LogInfo:
this.logInfo = strValue;
    this.hmProperty["logInfo"] = true;
break;
case clsQxUserDownLoadDetailLogEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxUserDownLoadDetailLog]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //流水号
public userDownLoadLogId = "";    //用户下载日志Id
public fileName = "";    //文件名
public version = "";    //版本
public isSuccess = false;    //是否成功
public logInfo = "";    //日志信息
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //流水号

 /**
 * 常量:"UserDownLoadLogId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserDownLoadLogId(): string {return "userDownLoadLogId";}    //用户下载日志Id

 /**
 * 常量:"FileName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileName(): string {return "fileName";}    //文件名

 /**
 * 常量:"Version"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Version(): string {return "version";}    //版本

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
//return propName in new clsQxUserDownLoadDetailLogEN();
const instance = new clsQxUserDownLoadDetailLogEN();
return instance.hasOwnProperty(propName);
}
}