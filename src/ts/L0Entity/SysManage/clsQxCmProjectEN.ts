
 /**
 * 类名:clsQxCmProjectEN
 * 表名:QxCmProject(00140119)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 02:04:06
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统管理(SysManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * QxCmProject(QxCmProject)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxCmProjectEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = ""; //
public static readonly _PrimaryTypeId: string = "01"; //关键字
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "QxCmProject"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "CmPrjId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 7;
public static readonly _AttributeName = ["cmPrjId", "cmPrjName", "qxPrjId", "useStateId", "updDate", "updUserId", "memo"];
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
private mstrCmPrjId = "";    //Cm项目Id
private mstrCmPrjName = "";    //CmPrjName
private mstrQxPrjId = "";    //项目Id
private mstrUseStateId = "";    //使用状态Id
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * Cm项目Id(说明:;字段类型:char;字段长度:6;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCmPrjId (value: string)
{
if (value  != undefined)
{
 this.cmPrjId = value;
    this.hmProperty["cmPrjId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * CmPrjName(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCmPrjName (value: string)
{
if (value  != undefined)
{
 this.cmPrjName = value;
    this.hmProperty["cmPrjName"] = true;
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
 * 使用状态Id(说明:;字段类型:char;字段长度:2;是否可空:False)
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
case clsQxCmProjectEN.con_CmPrjId:
return this.cmPrjId;
case clsQxCmProjectEN.con_CmPrjName:
return this.cmPrjName;
case clsQxCmProjectEN.con_QxPrjId:
return this.qxPrjId;
case clsQxCmProjectEN.con_UseStateId:
return this.useStateId;
case clsQxCmProjectEN.con_UpdDate:
return this.updDate;
case clsQxCmProjectEN.con_UpdUserId:
return this.updUserId;
case clsQxCmProjectEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxCmProject]中不存在!`;
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
case clsQxCmProjectEN.con_CmPrjId:
this.cmPrjId = strValue;
    this.hmProperty["cmPrjId"] = true;
break;
case clsQxCmProjectEN.con_CmPrjName:
this.cmPrjName = strValue;
    this.hmProperty["cmPrjName"] = true;
break;
case clsQxCmProjectEN.con_QxPrjId:
this.qxPrjId = strValue;
    this.hmProperty["qxPrjId"] = true;
break;
case clsQxCmProjectEN.con_UseStateId:
this.useStateId = strValue;
    this.hmProperty["useStateId"] = true;
break;
case clsQxCmProjectEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxCmProjectEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsQxCmProjectEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxCmProject]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public cmPrjId = "";    //Cm项目Id
public cmPrjName = "";    //CmPrjName
public qxPrjId = "";    //项目Id
public useStateId = "";    //使用状态Id
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"CmPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CmPrjId = "cmPrjId";    //Cm项目Id

 /**
 * 常量:"CmPrjName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CmPrjName = "cmPrjName";    //CmPrjName

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_QxPrjId = "qxPrjId";    //项目Id

 /**
 * 常量:"UseStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UseStateId = "useStateId";    //使用状态Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdDate = "updDate";    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdUserId = "updUserId";    //修改用户Id

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
//return propName in new clsQxCmProjectEN();
const instance = new clsQxCmProjectEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}