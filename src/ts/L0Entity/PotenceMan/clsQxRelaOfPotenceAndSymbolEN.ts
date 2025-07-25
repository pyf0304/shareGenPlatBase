
 /**
 * 类名:clsQxRelaOfPotenceAndSymbolEN
 * 表名:QxRelaOfPotenceAndSymbol(00140020)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:04
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 权限编程标志关系(QxRelaOfPotenceAndSymbol)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxRelaOfPotenceAndSymbolEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxRelaOfPotenceAndSymbol"; //当前表名,与该类相关的表名
public static _KeyFldName= "RelaMid"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["relaMid", "potenceId", "symbolForProgramme", "symbolName", "memo", "qxPrjId", "updDate", "updUserId"];
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
private mlngRelaMid = 0;    //流水号
private mstrPotenceId = "";    //权限ID
private mstrSymbolForProgramme = "";    //编程标志
private mstrSymbolName = "";    //标志名称
private mstrMemo = "";    //备注
private mstrQxPrjId = "";    //项目Id
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id

/**
 * 流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRelaMid (value: number)
{
if (value  != undefined)
{
 this.relaMid = value;
    this.hmProperty["relaMid"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 权限ID(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPotenceId (value: string)
{
if (value  != undefined)
{
 this.potenceId = value;
    this.hmProperty["potenceId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 编程标志(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSymbolForProgramme (value: string)
{
if (value  != undefined)
{
 this.symbolForProgramme = value;
    this.hmProperty["symbolForProgramme"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 标志名称(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSymbolName (value: string)
{
if (value  != undefined)
{
 this.symbolName = value;
    this.hmProperty["symbolName"] = true;
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
case clsQxRelaOfPotenceAndSymbolEN.con_RelaMid:
return this.relaMid;
case clsQxRelaOfPotenceAndSymbolEN.con_PotenceId:
return this.potenceId;
case clsQxRelaOfPotenceAndSymbolEN.con_SymbolForProgramme:
return this.symbolForProgramme;
case clsQxRelaOfPotenceAndSymbolEN.con_SymbolName:
return this.symbolName;
case clsQxRelaOfPotenceAndSymbolEN.con_Memo:
return this.memo;
case clsQxRelaOfPotenceAndSymbolEN.con_QxPrjId:
return this.qxPrjId;
case clsQxRelaOfPotenceAndSymbolEN.con_UpdDate:
return this.updDate;
case clsQxRelaOfPotenceAndSymbolEN.con_UpdUserId:
return this.updUserId;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxRelaOfPotenceAndSymbol]中不存在!`;
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
case clsQxRelaOfPotenceAndSymbolEN.con_RelaMid:
this.relaMid = Number(strValue);
    this.hmProperty["relaMid"] = true;
break;
case clsQxRelaOfPotenceAndSymbolEN.con_PotenceId:
this.potenceId = strValue;
    this.hmProperty["potenceId"] = true;
break;
case clsQxRelaOfPotenceAndSymbolEN.con_SymbolForProgramme:
this.symbolForProgramme = strValue;
    this.hmProperty["symbolForProgramme"] = true;
break;
case clsQxRelaOfPotenceAndSymbolEN.con_SymbolName:
this.symbolName = strValue;
    this.hmProperty["symbolName"] = true;
break;
case clsQxRelaOfPotenceAndSymbolEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsQxRelaOfPotenceAndSymbolEN.con_QxPrjId:
this.qxPrjId = strValue;
    this.hmProperty["qxPrjId"] = true;
break;
case clsQxRelaOfPotenceAndSymbolEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxRelaOfPotenceAndSymbolEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxRelaOfPotenceAndSymbol]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public relaMid = 0;    //流水号
public potenceId = "";    //权限ID
public symbolForProgramme = "";    //编程标志
public symbolName = "";    //标志名称
public memo = "";    //备注
public qxPrjId = "";    //项目Id
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id


 /**
 * 常量:"RelaMid"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RelaMid(): string {return "relaMid";}    //流水号

 /**
 * 常量:"PotenceId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceId(): string {return "potenceId";}    //权限ID

 /**
 * 常量:"SymbolForProgramme"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SymbolForProgramme(): string {return "symbolForProgramme";}    //编程标志

 /**
 * 常量:"SymbolName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SymbolName(): string {return "symbolName";}    //标志名称

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

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
//return propName in new clsQxRelaOfPotenceAndSymbolEN();
const instance = new clsQxRelaOfPotenceAndSymbolEN();
return instance.hasOwnProperty(propName);
}
}