
 /**
 * 类名:clsvQxViewPotenceEN
 * 表名:vQxViewPotence(00140028)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:46:33
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
 * v界面权限(vQxViewPotence)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxViewPotenceEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQxViewPotence"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["mId", "qxPrjId", "potenceId", "potenceName", "prjName", "viewId", "viewName", "level", "moduleId", "moduleName", "memo"];
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
case clsvQxViewPotenceEN.con_mId:
return this.mId;
case clsvQxViewPotenceEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxViewPotenceEN.con_PotenceId:
return this.potenceId;
case clsvQxViewPotenceEN.con_PotenceName:
return this.potenceName;
case clsvQxViewPotenceEN.con_PrjName:
return this.prjName;
case clsvQxViewPotenceEN.con_ViewId:
return this.viewId;
case clsvQxViewPotenceEN.con_ViewName:
return this.viewName;
case clsvQxViewPotenceEN.con_Level:
return this.level;
case clsvQxViewPotenceEN.con_ModuleId:
return this.moduleId;
case clsvQxViewPotenceEN.con_ModuleName:
return this.moduleName;
case clsvQxViewPotenceEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxViewPotence]中不存在!`;
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
case clsvQxViewPotenceEN.con_mId:
this.mId = Number(strValue);
break;
case clsvQxViewPotenceEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxViewPotenceEN.con_PotenceId:
this.potenceId = strValue;
break;
case clsvQxViewPotenceEN.con_PotenceName:
this.potenceName = strValue;
break;
case clsvQxViewPotenceEN.con_PrjName:
this.prjName = strValue;
break;
case clsvQxViewPotenceEN.con_ViewId:
this.viewId = strValue;
break;
case clsvQxViewPotenceEN.con_ViewName:
this.viewName = strValue;
break;
case clsvQxViewPotenceEN.con_Level:
this.level = Number(strValue);
break;
case clsvQxViewPotenceEN.con_ModuleId:
this.moduleId = strValue;
break;
case clsvQxViewPotenceEN.con_ModuleName:
this.moduleName = strValue;
break;
case clsvQxViewPotenceEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxViewPotence]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //流水号
public qxPrjId = "";    //项目Id
public potenceId = "";    //权限ID
public potenceName = "";    //权限名称
public prjName = "";    //工程名
public viewId = "";    //界面编号
public viewName = "";    //界面名称
public level = 0;    //等级
public moduleId = "";    //模块号
public moduleName = "";    //模块名称
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //流水号

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"PotenceId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceId(): string {return "potenceId";}    //权限ID

 /**
 * 常量:"PotenceName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceName(): string {return "potenceName";}    //权限名称

 /**
 * 常量:"PrjName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PrjName(): string {return "prjName";}    //工程名

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
 * 常量:"Level"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Level(): string {return "level";}    //等级

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
//return propName in new clsvQxViewPotenceEN();
const instance = new clsvQxViewPotenceEN();
return instance.hasOwnProperty(propName);
}
}