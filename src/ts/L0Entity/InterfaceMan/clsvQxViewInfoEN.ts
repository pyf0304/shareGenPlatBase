
 /**
 * 类名:clsvQxViewInfoEN
 * 表名:vQxViewInfo(00140029)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:46:36
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
 * v界面信息(vQxViewInfo)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxViewInfoEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQxViewInfo"; //当前表名,与该类相关的表名
public static _KeyFldName= "ViewId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["viewId", "viewName", "viewCnName", "fileName", "filePath", "defaMenuName", "viewTypeCode", "dataBaseName", "qxPrjId", "prjName", "viewFunction", "viewDetail", "moduleId", "moduleName", "updDate", "updUserId", "memo"];
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
case clsvQxViewInfoEN.con_ViewId:
return this.viewId;
case clsvQxViewInfoEN.con_ViewName:
return this.viewName;
case clsvQxViewInfoEN.con_ViewCnName:
return this.viewCnName;
case clsvQxViewInfoEN.con_FileName:
return this.fileName;
case clsvQxViewInfoEN.con_FilePath:
return this.filePath;
case clsvQxViewInfoEN.con_DefaMenuName:
return this.defaMenuName;
case clsvQxViewInfoEN.con_ViewTypeCode:
return this.viewTypeCode;
case clsvQxViewInfoEN.con_DataBaseName:
return this.dataBaseName;
case clsvQxViewInfoEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxViewInfoEN.con_PrjName:
return this.prjName;
case clsvQxViewInfoEN.con_ViewFunction:
return this.viewFunction;
case clsvQxViewInfoEN.con_ViewDetail:
return this.viewDetail;
case clsvQxViewInfoEN.con_ModuleId:
return this.moduleId;
case clsvQxViewInfoEN.con_ModuleName:
return this.moduleName;
case clsvQxViewInfoEN.con_UpdDate:
return this.updDate;
case clsvQxViewInfoEN.con_UpdUserId:
return this.updUserId;
case clsvQxViewInfoEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxViewInfo]中不存在!`;
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
case clsvQxViewInfoEN.con_ViewId:
this.viewId = strValue;
break;
case clsvQxViewInfoEN.con_ViewName:
this.viewName = strValue;
break;
case clsvQxViewInfoEN.con_ViewCnName:
this.viewCnName = strValue;
break;
case clsvQxViewInfoEN.con_FileName:
this.fileName = strValue;
break;
case clsvQxViewInfoEN.con_FilePath:
this.filePath = strValue;
break;
case clsvQxViewInfoEN.con_DefaMenuName:
this.defaMenuName = strValue;
break;
case clsvQxViewInfoEN.con_ViewTypeCode:
this.viewTypeCode = strValue;
break;
case clsvQxViewInfoEN.con_DataBaseName:
this.dataBaseName = strValue;
break;
case clsvQxViewInfoEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxViewInfoEN.con_PrjName:
this.prjName = strValue;
break;
case clsvQxViewInfoEN.con_ViewFunction:
this.viewFunction = strValue;
break;
case clsvQxViewInfoEN.con_ViewDetail:
this.viewDetail = strValue;
break;
case clsvQxViewInfoEN.con_ModuleId:
this.moduleId = strValue;
break;
case clsvQxViewInfoEN.con_ModuleName:
this.moduleName = strValue;
break;
case clsvQxViewInfoEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQxViewInfoEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvQxViewInfoEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxViewInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public prjName = "";    //工程名
public viewFunction = "";    //界面功能
public viewDetail = "";    //界面详细信息
public moduleId = "";    //模块号
public moduleName = "";    //模块名称
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
 * 常量:"PrjName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PrjName(): string {return "prjName";}    //工程名

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
 * 常量:"ModuleName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModuleName(): string {return "moduleName";}    //模块名称

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
//return propName in new clsvQxViewInfoEN();
const instance = new clsvQxViewInfoEN();
return instance.hasOwnProperty(propName);
}
}