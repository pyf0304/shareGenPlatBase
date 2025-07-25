
 /**
 * 类名:clsQxApplicationTypeEN
 * 表名:QxApplicationType(00140088)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:28
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 应用程序类型(QxApplicationType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxApplicationTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxApplicationType"; //当前表名,与该类相关的表名
public static _KeyFldName= "ApplicationTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["applicationTypeId", "applicationTypeName", "applicationTypeENName", "progLangTypeId", "progLangTypeId2", "progLangTypeId3", "progLangTypeId4", "progLangTypeId5", "isVisible", "orderNum", "memo"];
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
private mintApplicationTypeId = 0;    //应用程序类型Id
private mstrApplicationTypeName = "";    //应用程序类型名称
private mstrApplicationTypeENName = "";    //应用类型英文名
private mstrProgLangTypeId = "";    //编程语言类型Id
private mstrProgLangTypeId2 = "";    //编程语言类型Id2
private mstrProgLangTypeId3 = "";    //编程语言类型Id3
private mstrProgLangTypeId4 = "";    //编程语言类型Id4
private mstrProgLangTypeId5 = "";    //编程语言类型Id5
private mbolIsVisible = false;    //是否显示
private mintOrderNum = 0;    //排序号
private mstrMemo = "";    //备注

/**
 * 应用程序类型Id(说明:;字段类型:int;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetApplicationTypeId (value: number)
{
if (value  != undefined)
{
 this.applicationTypeId = value;
    this.hmProperty["applicationTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 应用程序类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetApplicationTypeName (value: string)
{
if (value  != undefined)
{
 this.applicationTypeName = value;
    this.hmProperty["applicationTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 应用类型英文名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetApplicationTypeENName (value: string)
{
if (value  != undefined)
{
 this.applicationTypeENName = value;
    this.hmProperty["applicationTypeENName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 编程语言类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProgLangTypeId (value: string)
{
if (value  != undefined)
{
 this.progLangTypeId = value;
    this.hmProperty["progLangTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 编程语言类型Id2(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProgLangTypeId2 (value: string)
{
if (value  != undefined)
{
 this.progLangTypeId2 = value;
    this.hmProperty["progLangTypeId2"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 编程语言类型Id3(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProgLangTypeId3 (value: string)
{
if (value  != undefined)
{
 this.progLangTypeId3 = value;
    this.hmProperty["progLangTypeId3"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 编程语言类型Id4(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProgLangTypeId4 (value: string)
{
if (value  != undefined)
{
 this.progLangTypeId4 = value;
    this.hmProperty["progLangTypeId4"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 编程语言类型Id5(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetProgLangTypeId5 (value: string)
{
if (value  != undefined)
{
 this.progLangTypeId5 = value;
    this.hmProperty["progLangTypeId5"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsVisible (value: boolean)
{
if (value  != undefined)
{
 this.isVisible = value;
    this.hmProperty["isVisible"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 排序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
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
case clsQxApplicationTypeEN.con_ApplicationTypeId:
return this.applicationTypeId;
case clsQxApplicationTypeEN.con_ApplicationTypeName:
return this.applicationTypeName;
case clsQxApplicationTypeEN.con_ApplicationTypeENName:
return this.applicationTypeENName;
case clsQxApplicationTypeEN.con_ProgLangTypeId:
return this.progLangTypeId;
case clsQxApplicationTypeEN.con_ProgLangTypeId2:
return this.progLangTypeId2;
case clsQxApplicationTypeEN.con_ProgLangTypeId3:
return this.progLangTypeId3;
case clsQxApplicationTypeEN.con_ProgLangTypeId4:
return this.progLangTypeId4;
case clsQxApplicationTypeEN.con_ProgLangTypeId5:
return this.progLangTypeId5;
case clsQxApplicationTypeEN.con_IsVisible:
return this.isVisible;
case clsQxApplicationTypeEN.con_OrderNum:
return this.orderNum;
case clsQxApplicationTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxApplicationType]中不存在!`;
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
case clsQxApplicationTypeEN.con_ApplicationTypeId:
this.applicationTypeId = Number(strValue);
    this.hmProperty["applicationTypeId"] = true;
break;
case clsQxApplicationTypeEN.con_ApplicationTypeName:
this.applicationTypeName = strValue;
    this.hmProperty["applicationTypeName"] = true;
break;
case clsQxApplicationTypeEN.con_ApplicationTypeENName:
this.applicationTypeENName = strValue;
    this.hmProperty["applicationTypeENName"] = true;
break;
case clsQxApplicationTypeEN.con_ProgLangTypeId:
this.progLangTypeId = strValue;
    this.hmProperty["progLangTypeId"] = true;
break;
case clsQxApplicationTypeEN.con_ProgLangTypeId2:
this.progLangTypeId2 = strValue;
    this.hmProperty["progLangTypeId2"] = true;
break;
case clsQxApplicationTypeEN.con_ProgLangTypeId3:
this.progLangTypeId3 = strValue;
    this.hmProperty["progLangTypeId3"] = true;
break;
case clsQxApplicationTypeEN.con_ProgLangTypeId4:
this.progLangTypeId4 = strValue;
    this.hmProperty["progLangTypeId4"] = true;
break;
case clsQxApplicationTypeEN.con_ProgLangTypeId5:
this.progLangTypeId5 = strValue;
    this.hmProperty["progLangTypeId5"] = true;
break;
case clsQxApplicationTypeEN.con_IsVisible:
this.isVisible = Boolean(strValue);
    this.hmProperty["isVisible"] = true;
break;
case clsQxApplicationTypeEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsQxApplicationTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxApplicationType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public applicationTypeId = 0;    //应用程序类型Id
public applicationTypeName = "";    //应用程序类型名称
public applicationTypeENName = "";    //应用类型英文名
public progLangTypeId = "";    //编程语言类型Id
public progLangTypeId2 = "";    //编程语言类型Id2
public progLangTypeId3 = "";    //编程语言类型Id3
public progLangTypeId4 = "";    //编程语言类型Id4
public progLangTypeId5 = "";    //编程语言类型Id5
public isVisible = false;    //是否显示
public orderNum = 0;    //排序号
public memo = "";    //备注


 /**
 * 常量:"ApplicationTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ApplicationTypeId(): string {return "applicationTypeId";}    //应用程序类型Id

 /**
 * 常量:"ApplicationTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ApplicationTypeName(): string {return "applicationTypeName";}    //应用程序类型名称

 /**
 * 常量:"ApplicationTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ApplicationTypeENName(): string {return "applicationTypeENName";}    //应用类型英文名

 /**
 * 常量:"ProgLangTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ProgLangTypeId(): string {return "progLangTypeId";}    //编程语言类型Id

 /**
 * 常量:"ProgLangTypeId2"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ProgLangTypeId2(): string {return "progLangTypeId2";}    //编程语言类型Id2

 /**
 * 常量:"ProgLangTypeId3"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ProgLangTypeId3(): string {return "progLangTypeId3";}    //编程语言类型Id3

 /**
 * 常量:"ProgLangTypeId4"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ProgLangTypeId4(): string {return "progLangTypeId4";}    //编程语言类型Id4

 /**
 * 常量:"ProgLangTypeId5"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ProgLangTypeId5(): string {return "progLangTypeId5";}    //编程语言类型Id5

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //排序号

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
//return propName in new clsQxApplicationTypeEN();
const instance = new clsQxApplicationTypeEN();
return instance.hasOwnProperty(propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export enum enumQxApplicationType 
{
}