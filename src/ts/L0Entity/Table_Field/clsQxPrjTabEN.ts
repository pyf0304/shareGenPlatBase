
 /**
 * 类名:clsQxPrjTabEN
 * 表名:QxPrjTab(00140096)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:45
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 工程表(QxPrjTab)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxPrjTabEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "06"; //前缀自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxPrjTab"; //当前表名,与该类相关的表名
public static _KeyFldName= "TabId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 20;
public static AttributeName = ["tabId", "tabName", "tabCnName", "qxPrjId", "sQLDSTypeId", "tabStateId", "isParaTab", "funcModuleAgcId", "owner", "keyword", "tabTypeId", "relaViewId", "primaryTypeId", "primaryTypeName", "keyFldId", "keyFldName", "updUserId", "updDate", "memo", "synchDate"];
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
private mstrTabId = "";    //表ID
private mstrTabName = "";    //TabName
private mstrTabCnName = "";    //表中文名
private mstrQxPrjId = "";    //项目Id
private mstrSQLDSTypeId = "";    //数据源类型
private mstrTabStateId = "";    //表状态ID
private mbolIsParaTab = false;    //是否参数表
private mstrFuncModuleAgcId = "";    //功能模块Id
private mstrOwner = "";    //拥有者
private mstrKeyword = "";    //关键字
private mstrTabTypeId = "";    //表类型Id
private mstrRelaViewId = "";    //RelaViewId
private mstrPrimaryTypeId = "";    //主键类型ID
private mstrPrimaryTypeName = "";    //主键类型名
private mstrKeyFldId = "";    //关键字段Id
private mstrKeyFldName = "";    //关键字段名
private mstrUpdUserId = "";    //修改用户Id
private mstrUpdDate = "";    //修改日期
private mstrMemo = "";    //备注
private mstrSynchDate = "";    //同步日期

/**
 * 表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTabId (value: string)
{
if (value  != undefined)
{
 this.tabId = value;
    this.hmProperty["tabId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * TabName(说明:;字段类型:varchar;字段长度:100;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTabName (value: string)
{
if (value  != undefined)
{
 this.tabName = value;
    this.hmProperty["tabName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 表中文名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTabCnName (value: string)
{
if (value  != undefined)
{
 this.tabCnName = value;
    this.hmProperty["tabCnName"] = true;
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
 * 数据源类型(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSQLDSTypeId (value: string)
{
if (value  != undefined)
{
 this.sQLDSTypeId = value;
    this.hmProperty["sQLDSTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 表状态ID(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTabStateId (value: string)
{
if (value  != undefined)
{
 this.tabStateId = value;
    this.hmProperty["tabStateId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否参数表(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsParaTab (value: boolean)
{
if (value  != undefined)
{
 this.isParaTab = value;
    this.hmProperty["isParaTab"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

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
 * 拥有者(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOwner (value: string)
{
if (value  != undefined)
{
 this.owner = value;
    this.hmProperty["owner"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 关键字(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeyword (value: string)
{
if (value  != undefined)
{
 this.keyword = value;
    this.hmProperty["keyword"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 表类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTabTypeId (value: string)
{
if (value  != undefined)
{
 this.tabTypeId = value;
    this.hmProperty["tabTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * RelaViewId(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRelaViewId (value: string)
{
if (value  != undefined)
{
 this.relaViewId = value;
    this.hmProperty["relaViewId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 主键类型ID(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPrimaryTypeId (value: string)
{
if (value  != undefined)
{
 this.primaryTypeId = value;
    this.hmProperty["primaryTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 主键类型名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPrimaryTypeName (value: string)
{
if (value  != undefined)
{
 this.primaryTypeName = value;
    this.hmProperty["primaryTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 关键字段Id(说明:;字段类型:varchar;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeyFldId (value: string)
{
if (value  != undefined)
{
 this.keyFldId = value;
    this.hmProperty["keyFldId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 关键字段名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKeyFldName (value: string)
{
if (value  != undefined)
{
 this.keyFldName = value;
    this.hmProperty["keyFldName"] = true;
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
case clsQxPrjTabEN.con_TabId:
return this.tabId;
case clsQxPrjTabEN.con_TabName:
return this.tabName;
case clsQxPrjTabEN.con_TabCnName:
return this.tabCnName;
case clsQxPrjTabEN.con_QxPrjId:
return this.qxPrjId;
case clsQxPrjTabEN.con_SQLDSTypeId:
return this.sQLDSTypeId;
case clsQxPrjTabEN.con_TabStateId:
return this.tabStateId;
case clsQxPrjTabEN.con_IsParaTab:
return this.isParaTab;
case clsQxPrjTabEN.con_FuncModuleAgcId:
return this.funcModuleAgcId;
case clsQxPrjTabEN.con_Owner:
return this.owner;
case clsQxPrjTabEN.con_Keyword:
return this.keyword;
case clsQxPrjTabEN.con_TabTypeId:
return this.tabTypeId;
case clsQxPrjTabEN.con_RelaViewId:
return this.relaViewId;
case clsQxPrjTabEN.con_PrimaryTypeId:
return this.primaryTypeId;
case clsQxPrjTabEN.con_PrimaryTypeName:
return this.primaryTypeName;
case clsQxPrjTabEN.con_KeyFldId:
return this.keyFldId;
case clsQxPrjTabEN.con_KeyFldName:
return this.keyFldName;
case clsQxPrjTabEN.con_UpdUserId:
return this.updUserId;
case clsQxPrjTabEN.con_UpdDate:
return this.updDate;
case clsQxPrjTabEN.con_Memo:
return this.memo;
case clsQxPrjTabEN.con_SynchDate:
return this.synchDate;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxPrjTab]中不存在!`;
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
case clsQxPrjTabEN.con_TabId:
this.tabId = strValue;
    this.hmProperty["tabId"] = true;
break;
case clsQxPrjTabEN.con_TabName:
this.tabName = strValue;
    this.hmProperty["tabName"] = true;
break;
case clsQxPrjTabEN.con_TabCnName:
this.tabCnName = strValue;
    this.hmProperty["tabCnName"] = true;
break;
case clsQxPrjTabEN.con_QxPrjId:
this.qxPrjId = strValue;
    this.hmProperty["qxPrjId"] = true;
break;
case clsQxPrjTabEN.con_SQLDSTypeId:
this.sQLDSTypeId = strValue;
    this.hmProperty["sQLDSTypeId"] = true;
break;
case clsQxPrjTabEN.con_TabStateId:
this.tabStateId = strValue;
    this.hmProperty["tabStateId"] = true;
break;
case clsQxPrjTabEN.con_IsParaTab:
this.isParaTab = Boolean(strValue);
    this.hmProperty["isParaTab"] = true;
break;
case clsQxPrjTabEN.con_FuncModuleAgcId:
this.funcModuleAgcId = strValue;
    this.hmProperty["funcModuleAgcId"] = true;
break;
case clsQxPrjTabEN.con_Owner:
this.owner = strValue;
    this.hmProperty["owner"] = true;
break;
case clsQxPrjTabEN.con_Keyword:
this.keyword = strValue;
    this.hmProperty["keyword"] = true;
break;
case clsQxPrjTabEN.con_TabTypeId:
this.tabTypeId = strValue;
    this.hmProperty["tabTypeId"] = true;
break;
case clsQxPrjTabEN.con_RelaViewId:
this.relaViewId = strValue;
    this.hmProperty["relaViewId"] = true;
break;
case clsQxPrjTabEN.con_PrimaryTypeId:
this.primaryTypeId = strValue;
    this.hmProperty["primaryTypeId"] = true;
break;
case clsQxPrjTabEN.con_PrimaryTypeName:
this.primaryTypeName = strValue;
    this.hmProperty["primaryTypeName"] = true;
break;
case clsQxPrjTabEN.con_KeyFldId:
this.keyFldId = strValue;
    this.hmProperty["keyFldId"] = true;
break;
case clsQxPrjTabEN.con_KeyFldName:
this.keyFldName = strValue;
    this.hmProperty["keyFldName"] = true;
break;
case clsQxPrjTabEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsQxPrjTabEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxPrjTabEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsQxPrjTabEN.con_SynchDate:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxPrjTab]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public tabId = "";    //表ID
public tabName = "";    //TabName
public tabCnName = "";    //表中文名
public qxPrjId = "";    //项目Id
public sQLDSTypeId = "";    //数据源类型
public tabStateId = "";    //表状态ID
public isParaTab = false;    //是否参数表
public funcModuleAgcId = "";    //功能模块Id
public owner = "";    //拥有者
public keyword = "";    //关键字
public tabTypeId = "";    //表类型Id
public relaViewId = "";    //RelaViewId
public primaryTypeId = "";    //主键类型ID
public primaryTypeName = "";    //主键类型名
public keyFldId = "";    //关键字段Id
public keyFldName = "";    //关键字段名
public updUserId = "";    //修改用户Id
public updDate = "";    //修改日期
public memo = "";    //备注
public synchDate = "";    //同步日期


 /**
 * 常量:"TabId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TabId(): string {return "tabId";}    //表ID

 /**
 * 常量:"TabName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TabName(): string {return "tabName";}    //TabName

 /**
 * 常量:"TabCnName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TabCnName(): string {return "tabCnName";}    //表中文名

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"SQLDSTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SQLDSTypeId(): string {return "sQLDSTypeId";}    //数据源类型

 /**
 * 常量:"TabStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TabStateId(): string {return "tabStateId";}    //表状态ID

 /**
 * 常量:"IsParaTab"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsParaTab(): string {return "isParaTab";}    //是否参数表

 /**
 * 常量:"FuncModuleAgcId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleAgcId(): string {return "funcModuleAgcId";}    //功能模块Id

 /**
 * 常量:"Owner"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Owner(): string {return "owner";}    //拥有者

 /**
 * 常量:"Keyword"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Keyword(): string {return "keyword";}    //关键字

 /**
 * 常量:"TabTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TabTypeId(): string {return "tabTypeId";}    //表类型Id

 /**
 * 常量:"RelaViewId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RelaViewId(): string {return "relaViewId";}    //RelaViewId

 /**
 * 常量:"PrimaryTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PrimaryTypeId(): string {return "primaryTypeId";}    //主键类型ID

 /**
 * 常量:"PrimaryTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PrimaryTypeName(): string {return "primaryTypeName";}    //主键类型名

 /**
 * 常量:"KeyFldId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KeyFldId(): string {return "keyFldId";}    //关键字段Id

 /**
 * 常量:"KeyFldName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KeyFldName(): string {return "keyFldName";}    //关键字段名

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

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
//return propName in new clsQxPrjTabEN();
const instance = new clsQxPrjTabEN();
return instance.hasOwnProperty(propName);
}
}