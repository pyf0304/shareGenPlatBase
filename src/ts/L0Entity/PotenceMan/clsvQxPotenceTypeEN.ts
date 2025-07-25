
 /**
 * 类名:clsvQxPotenceTypeEN
 * 表名:vQxPotenceType(00140026)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:47:23
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
 * v权限类型(vQxPotenceType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxPotenceTypeEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQxPotenceType"; //当前表名,与该类相关的表名
public static _KeyFldName= "PotenceTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 15;
public static AttributeName = ["potenceTypeId", "potenceTypeName", "qxPrjId", "prjName", "funcModuleId", "funcModuleName", "funcModuleNameSim", "orderNum", "inUse", "viewId", "viewName", "isVisible", "updDate", "updUserId", "memo"];
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
case clsvQxPotenceTypeEN.con_PotenceTypeId:
return this.potenceTypeId;
case clsvQxPotenceTypeEN.con_PotenceTypeName:
return this.potenceTypeName;
case clsvQxPotenceTypeEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxPotenceTypeEN.con_PrjName:
return this.prjName;
case clsvQxPotenceTypeEN.con_FuncModuleId:
return this.funcModuleId;
case clsvQxPotenceTypeEN.con_FuncModuleName:
return this.funcModuleName;
case clsvQxPotenceTypeEN.con_FuncModuleNameSim:
return this.funcModuleNameSim;
case clsvQxPotenceTypeEN.con_OrderNum:
return this.orderNum;
case clsvQxPotenceTypeEN.con_InUse:
return this.inUse;
case clsvQxPotenceTypeEN.con_ViewId:
return this.viewId;
case clsvQxPotenceTypeEN.con_ViewName:
return this.viewName;
case clsvQxPotenceTypeEN.con_IsVisible:
return this.isVisible;
case clsvQxPotenceTypeEN.con_UpdDate:
return this.updDate;
case clsvQxPotenceTypeEN.con_UpdUserId:
return this.updUserId;
case clsvQxPotenceTypeEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxPotenceType]中不存在!`;
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
case clsvQxPotenceTypeEN.con_PotenceTypeId:
this.potenceTypeId = strValue;
break;
case clsvQxPotenceTypeEN.con_PotenceTypeName:
this.potenceTypeName = strValue;
break;
case clsvQxPotenceTypeEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxPotenceTypeEN.con_PrjName:
this.prjName = strValue;
break;
case clsvQxPotenceTypeEN.con_FuncModuleId:
this.funcModuleId = strValue;
break;
case clsvQxPotenceTypeEN.con_FuncModuleName:
this.funcModuleName = strValue;
break;
case clsvQxPotenceTypeEN.con_FuncModuleNameSim:
this.funcModuleNameSim = strValue;
break;
case clsvQxPotenceTypeEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvQxPotenceTypeEN.con_InUse:
this.inUse = Boolean(strValue);
break;
case clsvQxPotenceTypeEN.con_ViewId:
this.viewId = strValue;
break;
case clsvQxPotenceTypeEN.con_ViewName:
this.viewName = strValue;
break;
case clsvQxPotenceTypeEN.con_IsVisible:
this.isVisible = Boolean(strValue);
break;
case clsvQxPotenceTypeEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQxPotenceTypeEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvQxPotenceTypeEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxPotenceType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public potenceTypeId = "";    //权限类型Id
public potenceTypeName = "";    //权限类型名
public qxPrjId = "";    //项目Id
public prjName = "";    //工程名
public funcModuleId = "";    //模块Id
public funcModuleName = "";    //模块名
public funcModuleNameSim = "";    //模块名_Sim
public orderNum = 0;    //排序号
public inUse = false;    //是否在用
public viewId = "";    //界面编号
public viewName = "";    //界面名称
public isVisible = false;    //是否显示
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"PotenceTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceTypeId(): string {return "potenceTypeId";}    //权限类型Id

 /**
 * 常量:"PotenceTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PotenceTypeName(): string {return "potenceTypeName";}    //权限类型名

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
 * 常量:"FuncModuleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleId(): string {return "funcModuleId";}    //模块Id

 /**
 * 常量:"FuncModuleName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleName(): string {return "funcModuleName";}    //模块名

 /**
 * 常量:"FuncModuleNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FuncModuleNameSim(): string {return "funcModuleNameSim";}    //模块名_Sim

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //排序号

 /**
 * 常量:"InUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

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
 * 常量:"IsVisible"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

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
//return propName in new clsvQxPotenceTypeEN();
const instance = new clsvQxPotenceTypeEN();
return instance.hasOwnProperty(propName);
}
}