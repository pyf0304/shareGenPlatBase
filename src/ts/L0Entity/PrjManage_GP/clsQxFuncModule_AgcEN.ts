
 /**
 * 类名:clsQxFuncModule_AgcEN
 * 表名:QxFuncModule_Agc(00140101)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:33
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
 * 功能模块_Agc(QxFuncModule_Agc)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxFuncModule_AgcEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxFuncModule_Agc"; //当前表名,与该类相关的表名
public static _KeyFldName= "FuncModuleAgcId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["funcModuleAgcId", "funcModuleName", "funcModuleEnName", "funcModuleNameSim", "qxPrjId", "orderNum", "useStateId", "updUser", "updDate", "memo", "synchDate"];
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
private mstrFuncModuleAgcId = "";    //功能模块Id
private mstrFuncModuleName = "";    //模块名
private mstrFuncModuleEnName = "";    //模块英文名
private mstrFuncModuleNameSim = "";    //模块名_Sim
private mstrQxPrjId = "";    //项目Id
private mintOrderNum = 0;    //排序号
private mstrUseStateId = "";    //UseStateId
private mstrUpdUser = "";    //修改用户
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注
private mstrSynchDate = "";    //同步日期

/**
 * 功能模块Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFuncModuleAgcId (value: string)
{
if (value  != undefined)
{
 this.funcModuleAgcId = value;
    this.hmProperty["funcModuleAgcId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 模块名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFuncModuleName (value: string)
{
if (value  != undefined)
{
 this.funcModuleName = value;
    this.hmProperty["funcModuleName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 模块英文名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFuncModuleEnName (value: string)
{
if (value  != undefined)
{
 this.funcModuleEnName = value;
    this.hmProperty["funcModuleEnName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 模块名_Sim(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFuncModuleNameSim (value: string)
{
if (value  != undefined)
{
 this.funcModuleNameSim = value;
    this.hmProperty["funcModuleNameSim"] = true;
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
 * UseStateId(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUseStateId (value: string)
{
if (value  != undefined)
{
 this.useStateId = value;
    this.hmProperty["useStateId"] = true;
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
case clsQxFuncModule_AgcEN.con_FuncModuleAgcId:
return this.funcModuleAgcId;
case clsQxFuncModule_AgcEN.con_FuncModuleName:
return this.funcModuleName;
case clsQxFuncModule_AgcEN.con_FuncModuleEnName:
return this.funcModuleEnName;
case clsQxFuncModule_AgcEN.con_FuncModuleNameSim:
return this.funcModuleNameSim;
case clsQxFuncModule_AgcEN.con_QxPrjId:
return this.qxPrjId;
case clsQxFuncModule_AgcEN.con_OrderNum:
return this.orderNum;
case clsQxFuncModule_AgcEN.con_UseStateId:
return this.useStateId;
case clsQxFuncModule_AgcEN.con_UpdUser:
return this.updUser;
case clsQxFuncModule_AgcEN.con_UpdDate:
return this.updDate;
case clsQxFuncModule_AgcEN.con_Memo:
return this.memo;
case clsQxFuncModule_AgcEN.con_SynchDate:
return this.synchDate;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxFuncModule_Agc]中不存在!`;
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
case clsQxFuncModule_AgcEN.con_FuncModuleAgcId:
this.funcModuleAgcId = strValue;
    this.hmProperty["funcModuleAgcId"] = true;
break;
case clsQxFuncModule_AgcEN.con_FuncModuleName:
this.funcModuleName = strValue;
    this.hmProperty["funcModuleName"] = true;
break;
case clsQxFuncModule_AgcEN.con_FuncModuleEnName:
this.funcModuleEnName = strValue;
    this.hmProperty["funcModuleEnName"] = true;
break;
case clsQxFuncModule_AgcEN.con_FuncModuleNameSim:
this.funcModuleNameSim = strValue;
    this.hmProperty["funcModuleNameSim"] = true;
break;
case clsQxFuncModule_AgcEN.con_QxPrjId:
this.qxPrjId = strValue;
    this.hmProperty["qxPrjId"] = true;
break;
case clsQxFuncModule_AgcEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsQxFuncModule_AgcEN.con_UseStateId:
this.useStateId = strValue;
    this.hmProperty["useStateId"] = true;
break;
case clsQxFuncModule_AgcEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsQxFuncModule_AgcEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxFuncModule_AgcEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsQxFuncModule_AgcEN.con_SynchDate:
this.synchDate = strValue;
    this.hmProperty["synchDate"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxFuncModule_Agc]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public funcModuleAgcId = "";    //功能模块Id
public funcModuleName = "";    //模块名
public funcModuleEnName = "";    //模块英文名
public funcModuleNameSim = "";    //模块名_Sim
public qxPrjId = "";    //项目Id
public orderNum = 0;    //排序号
public useStateId = "";    //UseStateId
public updUser = "";    //修改用户
public updDate = "";    //修改日期
public memo = "";    //备注
public synchDate = "";    //同步日期


 /**
 * 常量:"FuncModuleAgcId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleAgcId(): string {return "funcModuleAgcId";}    //功能模块Id

 /**
 * 常量:"FuncModuleName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleName(): string {return "funcModuleName";}    //模块名

 /**
 * 常量:"FuncModuleEnName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleEnName(): string {return "funcModuleEnName";}    //模块英文名

 /**
 * 常量:"FuncModuleNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleNameSim(): string {return "funcModuleNameSim";}    //模块名_Sim

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //排序号

 /**
 * 常量:"UseStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UseStateId(): string {return "useStateId";}    //UseStateId

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改用户

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
 * 常量:"SynchDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SynchDate(): string {return "synchDate";}    //同步日期

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
//return propName in new clsQxFuncModule_AgcEN();
const instance = new clsQxFuncModule_AgcEN();
return instance.hasOwnProperty(propName);
}
}