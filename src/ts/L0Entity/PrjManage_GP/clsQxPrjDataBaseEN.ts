
 /**
 * 类名:clsQxPrjDataBaseEN
 * 表名:QxPrjDataBase(00140039)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:36
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:工程管理(PrjManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 数据库对象(QxPrjDataBase)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxPrjDataBaseEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxPrjDataBase"; //当前表名,与该类相关的表名
public static _KeyFldName= "QxPrjDataBaseId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["qxPrjDataBaseId", "prjDataBaseName", "dataBaseName", "databaseOwner", "dataBasePwd", "dataBaseTypeId", "dataBaseUserId", "ipAddress", "sID", "tableSpace", "userId", "updDate", "memo"];
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
private mstrQxPrjDataBaseId = "";    //项目数据库Id
private mstrPrjDataBaseName = "";    //项目数据库名
private mstrDataBaseName = "";    //数据库名称
private mstrDatabaseOwner = "";    //数据库拥有者
private mstrDataBasePwd = "";    //数据库用户口令
private mstrDataBaseTypeId = "";    //数据库类型ID
private mstrDataBaseUserId = "";    //数据库用户Id
private mstrIpAddress = "";    //IP地址
private mstrSID = "";    //SID
private mstrTableSpace = "";    //表空间
private mstrUserId = "";    //用户ID
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注

/**
 * 项目数据库Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQxPrjDataBaseId (value: string)
{
if (value  != undefined)
{
 this.qxPrjDataBaseId = value;
    this.hmProperty["qxPrjDataBaseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 项目数据库名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPrjDataBaseName (value: string)
{
if (value  != undefined)
{
 this.prjDataBaseName = value;
    this.hmProperty["prjDataBaseName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据库名称(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDataBaseName (value: string)
{
if (value  != undefined)
{
 this.dataBaseName = value;
    this.hmProperty["dataBaseName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据库拥有者(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDatabaseOwner (value: string)
{
if (value  != undefined)
{
 this.databaseOwner = value;
    this.hmProperty["databaseOwner"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据库用户口令(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDataBasePwd (value: string)
{
if (value  != undefined)
{
 this.dataBasePwd = value;
    this.hmProperty["dataBasePwd"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据库类型ID(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDataBaseTypeId (value: string)
{
if (value  != undefined)
{
 this.dataBaseTypeId = value;
    this.hmProperty["dataBaseTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 数据库用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDataBaseUserId (value: string)
{
if (value  != undefined)
{
 this.dataBaseUserId = value;
    this.hmProperty["dataBaseUserId"] = true;
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
 * SID(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSID (value: string)
{
if (value  != undefined)
{
 this.sID = value;
    this.hmProperty["sID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 表空间(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTableSpace (value: string)
{
if (value  != undefined)
{
 this.tableSpace = value;
    this.hmProperty["tableSpace"] = true;
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
case clsQxPrjDataBaseEN.con_QxPrjDataBaseId:
return this.qxPrjDataBaseId;
case clsQxPrjDataBaseEN.con_PrjDataBaseName:
return this.prjDataBaseName;
case clsQxPrjDataBaseEN.con_DataBaseName:
return this.dataBaseName;
case clsQxPrjDataBaseEN.con_DatabaseOwner:
return this.databaseOwner;
case clsQxPrjDataBaseEN.con_DataBasePwd:
return this.dataBasePwd;
case clsQxPrjDataBaseEN.con_DataBaseTypeId:
return this.dataBaseTypeId;
case clsQxPrjDataBaseEN.con_DataBaseUserId:
return this.dataBaseUserId;
case clsQxPrjDataBaseEN.con_IpAddress:
return this.ipAddress;
case clsQxPrjDataBaseEN.con_SID:
return this.sID;
case clsQxPrjDataBaseEN.con_TableSpace:
return this.tableSpace;
case clsQxPrjDataBaseEN.con_UserId:
return this.userId;
case clsQxPrjDataBaseEN.con_UpdDate:
return this.updDate;
case clsQxPrjDataBaseEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxPrjDataBase]中不存在!`;
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
case clsQxPrjDataBaseEN.con_QxPrjDataBaseId:
this.qxPrjDataBaseId = strValue;
    this.hmProperty["qxPrjDataBaseId"] = true;
break;
case clsQxPrjDataBaseEN.con_PrjDataBaseName:
this.prjDataBaseName = strValue;
    this.hmProperty["prjDataBaseName"] = true;
break;
case clsQxPrjDataBaseEN.con_DataBaseName:
this.dataBaseName = strValue;
    this.hmProperty["dataBaseName"] = true;
break;
case clsQxPrjDataBaseEN.con_DatabaseOwner:
this.databaseOwner = strValue;
    this.hmProperty["databaseOwner"] = true;
break;
case clsQxPrjDataBaseEN.con_DataBasePwd:
this.dataBasePwd = strValue;
    this.hmProperty["dataBasePwd"] = true;
break;
case clsQxPrjDataBaseEN.con_DataBaseTypeId:
this.dataBaseTypeId = strValue;
    this.hmProperty["dataBaseTypeId"] = true;
break;
case clsQxPrjDataBaseEN.con_DataBaseUserId:
this.dataBaseUserId = strValue;
    this.hmProperty["dataBaseUserId"] = true;
break;
case clsQxPrjDataBaseEN.con_IpAddress:
this.ipAddress = strValue;
    this.hmProperty["ipAddress"] = true;
break;
case clsQxPrjDataBaseEN.con_SID:
this.sID = strValue;
    this.hmProperty["sID"] = true;
break;
case clsQxPrjDataBaseEN.con_TableSpace:
this.tableSpace = strValue;
    this.hmProperty["tableSpace"] = true;
break;
case clsQxPrjDataBaseEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsQxPrjDataBaseEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxPrjDataBaseEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxPrjDataBase]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public qxPrjDataBaseId = "";    //项目数据库Id
public prjDataBaseName = "";    //项目数据库名
public dataBaseName = "";    //数据库名称
public databaseOwner = "";    //数据库拥有者
public dataBasePwd = "";    //数据库用户口令
public dataBaseTypeId = "";    //数据库类型ID
public dataBaseUserId = "";    //数据库用户Id
public ipAddress = "";    //IP地址
public sID = "";    //SID
public tableSpace = "";    //表空间
public userId = "";    //用户ID
public updDate = "";    //修改日期
public memo = "";    //备注


 /**
 * 常量:"QxPrjDataBaseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjDataBaseId(): string {return "qxPrjDataBaseId";}    //项目数据库Id

 /**
 * 常量:"PrjDataBaseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PrjDataBaseName(): string {return "prjDataBaseName";}    //项目数据库名

 /**
 * 常量:"DataBaseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DataBaseName(): string {return "dataBaseName";}    //数据库名称

 /**
 * 常量:"DatabaseOwner"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DatabaseOwner(): string {return "databaseOwner";}    //数据库拥有者

 /**
 * 常量:"DataBasePwd"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DataBasePwd(): string {return "dataBasePwd";}    //数据库用户口令

 /**
 * 常量:"DataBaseTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DataBaseTypeId(): string {return "dataBaseTypeId";}    //数据库类型ID

 /**
 * 常量:"DataBaseUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DataBaseUserId(): string {return "dataBaseUserId";}    //数据库用户Id

 /**
 * 常量:"IpAddress"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IpAddress(): string {return "ipAddress";}    //IP地址

 /**
 * 常量:"SID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SID(): string {return "sID";}    //SID

 /**
 * 常量:"TableSpace"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TableSpace(): string {return "tableSpace";}    //表空间

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

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
//return propName in new clsQxPrjDataBaseEN();
const instance = new clsQxPrjDataBaseEN();
return instance.hasOwnProperty(propName);
}
}