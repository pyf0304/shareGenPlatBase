
 /**
 * 类名:clsQxViewInfoEN
 * 表名:QxViewInfo(00140017)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:16
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:界面管理(InterfaceMan)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 界面(QxViewInfo)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxViewInfoEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "06"; //前缀自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxViewInfo"; //当前表名,与该类相关的表名
public static _KeyFldName= "ViewId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["viewId", "viewName", "viewCnName", "fileName", "filePath", "defaMenuName", "viewTypeCode", "dataBaseName", "qxPrjId", "viewFunction", "viewDetail", "moduleId", "updDate", "updUserId", "memo"];
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
private mstrViewId = "";    //界面编号
private mstrViewName = "";    //界面名称
private mstrViewCnName = "";    //界面中文名称
private mstrFileName = "";    //文件名
private mstrFilePath = "";    //文件路径
private mstrDefaMenuName = "";    //缺省菜单名
private mstrViewTypeCode = "";    //界面类型码
private mstrDataBaseName = "";    //数据库名称
private mstrQxPrjId = "";    //项目Id
private mstrViewFunction = "";    //界面功能
private mstrViewDetail = "";    //界面详细信息
private mstrModuleId = "";    //模块号
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * 界面编号(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewId (value: string)
{
if (value  != undefined)
{
 this.viewId = value;
    this.hmProperty["viewId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 界面名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewName (value: string)
{
if (value  != undefined)
{
 this.viewName = value;
    this.hmProperty["viewName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 界面中文名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewCnName (value: string)
{
if (value  != undefined)
{
 this.viewCnName = value;
    this.hmProperty["viewCnName"] = true;
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
 * 文件路径(说明:;字段类型:varchar;字段长度:500;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFilePath (value: string)
{
if (value  != undefined)
{
 this.filePath = value;
    this.hmProperty["filePath"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 缺省菜单名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDefaMenuName (value: string)
{
if (value  != undefined)
{
 this.defaMenuName = value;
    this.hmProperty["defaMenuName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 界面类型码(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewTypeCode (value: string)
{
if (value  != undefined)
{
 this.viewTypeCode = value;
    this.hmProperty["viewTypeCode"] = true;
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
 * 界面功能(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewFunction (value: string)
{
if (value  != undefined)
{
 this.viewFunction = value;
    this.hmProperty["viewFunction"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 界面详细信息(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewDetail (value: string)
{
if (value  != undefined)
{
 this.viewDetail = value;
    this.hmProperty["viewDetail"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 模块号(说明:;字段类型:char;字段长度:6;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetModuleId (value: string)
{
if (value  != undefined)
{
 this.moduleId = value;
    this.hmProperty["moduleId"] = true;
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
case clsQxViewInfoEN.con_ViewId:
return this.viewId;
case clsQxViewInfoEN.con_ViewName:
return this.viewName;
case clsQxViewInfoEN.con_ViewCnName:
return this.viewCnName;
case clsQxViewInfoEN.con_FileName:
return this.fileName;
case clsQxViewInfoEN.con_FilePath:
return this.filePath;
case clsQxViewInfoEN.con_DefaMenuName:
return this.defaMenuName;
case clsQxViewInfoEN.con_ViewTypeCode:
return this.viewTypeCode;
case clsQxViewInfoEN.con_DataBaseName:
return this.dataBaseName;
case clsQxViewInfoEN.con_QxPrjId:
return this.qxPrjId;
case clsQxViewInfoEN.con_ViewFunction:
return this.viewFunction;
case clsQxViewInfoEN.con_ViewDetail:
return this.viewDetail;
case clsQxViewInfoEN.con_ModuleId:
return this.moduleId;
case clsQxViewInfoEN.con_UpdDate:
return this.updDate;
case clsQxViewInfoEN.con_UpdUserId:
return this.updUserId;
case clsQxViewInfoEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxViewInfo]中不存在!`;
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
case clsQxViewInfoEN.con_ViewId:
this.viewId = strValue;
    this.hmProperty["viewId"] = true;
break;
case clsQxViewInfoEN.con_ViewName:
this.viewName = strValue;
    this.hmProperty["viewName"] = true;
break;
case clsQxViewInfoEN.con_ViewCnName:
this.viewCnName = strValue;
    this.hmProperty["viewCnName"] = true;
break;
case clsQxViewInfoEN.con_FileName:
this.fileName = strValue;
    this.hmProperty["fileName"] = true;
break;
case clsQxViewInfoEN.con_FilePath:
this.filePath = strValue;
    this.hmProperty["filePath"] = true;
break;
case clsQxViewInfoEN.con_DefaMenuName:
this.defaMenuName = strValue;
    this.hmProperty["defaMenuName"] = true;
break;
case clsQxViewInfoEN.con_ViewTypeCode:
this.viewTypeCode = strValue;
    this.hmProperty["viewTypeCode"] = true;
break;
case clsQxViewInfoEN.con_DataBaseName:
this.dataBaseName = strValue;
    this.hmProperty["dataBaseName"] = true;
break;
case clsQxViewInfoEN.con_QxPrjId:
this.qxPrjId = strValue;
    this.hmProperty["qxPrjId"] = true;
break;
case clsQxViewInfoEN.con_ViewFunction:
this.viewFunction = strValue;
    this.hmProperty["viewFunction"] = true;
break;
case clsQxViewInfoEN.con_ViewDetail:
this.viewDetail = strValue;
    this.hmProperty["viewDetail"] = true;
break;
case clsQxViewInfoEN.con_ModuleId:
this.moduleId = strValue;
    this.hmProperty["moduleId"] = true;
break;
case clsQxViewInfoEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxViewInfoEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsQxViewInfoEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxViewInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public viewId = "";    //界面编号
public viewName = "";    //界面名称
public viewCnName = "";    //界面中文名称
public fileName = "";    //文件名
public filePath = "";    //文件路径
public defaMenuName = "";    //缺省菜单名
public viewTypeCode = "";    //界面类型码
public dataBaseName = "";    //数据库名称
public qxPrjId = "";    //项目Id
public viewFunction = "";    //界面功能
public viewDetail = "";    //界面详细信息
public moduleId = "";    //模块号
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"ViewId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewId(): string {return "viewId";}    //界面编号

 /**
 * 常量:"ViewName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewName(): string {return "viewName";}    //界面名称

 /**
 * 常量:"ViewCnName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewCnName(): string {return "viewCnName";}    //界面中文名称

 /**
 * 常量:"FileName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileName(): string {return "fileName";}    //文件名

 /**
 * 常量:"FilePath"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FilePath(): string {return "filePath";}    //文件路径

 /**
 * 常量:"DefaMenuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DefaMenuName(): string {return "defaMenuName";}    //缺省菜单名

 /**
 * 常量:"ViewTypeCode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewTypeCode(): string {return "viewTypeCode";}    //界面类型码

 /**
 * 常量:"DataBaseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DataBaseName(): string {return "dataBaseName";}    //数据库名称

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"ViewFunction"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewFunction(): string {return "viewFunction";}    //界面功能

 /**
 * 常量:"ViewDetail"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewDetail(): string {return "viewDetail";}    //界面详细信息

 /**
 * 常量:"ModuleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModuleId(): string {return "moduleId";}    //模块号

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
//return propName in new clsQxViewInfoEN();
const instance = new clsQxViewInfoEN();
return instance.hasOwnProperty(propName);
}
}