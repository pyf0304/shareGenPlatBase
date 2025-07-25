
 /**
 * 类名:clsvQxPrjPotenceEN
 * 表名:vQxPrjPotence(00140027)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:47:12
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
 * v工程权限(vQxPrjPotence)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxPrjPotenceEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQxPrjPotence"; //当前表名,与该类相关的表名
public static _KeyFldName= "PotenceId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 20;
public static AttributeName = ["potenceId", "potenceName", "qxPrjId", "prjName", "funcModuleId", "potenceTypeId", "potenceTypeName", "funcModuleName", "funcModuleNameSim", "inUse", "isVisible", "menuId", "menuName", "upMenuId", "isLeafNode", "upMenuName", "updDate", "updUserId", "memo", "symbolNum"];
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
case clsvQxPrjPotenceEN.con_PotenceId:
return this.potenceId;
case clsvQxPrjPotenceEN.con_PotenceName:
return this.potenceName;
case clsvQxPrjPotenceEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxPrjPotenceEN.con_PrjName:
return this.prjName;
case clsvQxPrjPotenceEN.con_FuncModuleId:
return this.funcModuleId;
case clsvQxPrjPotenceEN.con_PotenceTypeId:
return this.potenceTypeId;
case clsvQxPrjPotenceEN.con_PotenceTypeName:
return this.potenceTypeName;
case clsvQxPrjPotenceEN.con_FuncModuleName:
return this.funcModuleName;
case clsvQxPrjPotenceEN.con_FuncModuleNameSim:
return this.funcModuleNameSim;
case clsvQxPrjPotenceEN.con_InUse:
return this.inUse;
case clsvQxPrjPotenceEN.con_IsVisible:
return this.isVisible;
case clsvQxPrjPotenceEN.con_MenuId:
return this.menuId;
case clsvQxPrjPotenceEN.con_MenuName:
return this.menuName;
case clsvQxPrjPotenceEN.con_UpMenuId:
return this.upMenuId;
case clsvQxPrjPotenceEN.con_IsLeafNode:
return this.isLeafNode;
case clsvQxPrjPotenceEN.con_UpMenuName:
return this.upMenuName;
case clsvQxPrjPotenceEN.con_UpdDate:
return this.updDate;
case clsvQxPrjPotenceEN.con_UpdUserId:
return this.updUserId;
case clsvQxPrjPotenceEN.con_Memo:
return this.memo;
case clsvQxPrjPotenceEN.con_SymbolNum:
return this.symbolNum;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxPrjPotence]中不存在!`;
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
case clsvQxPrjPotenceEN.con_PotenceId:
this.potenceId = strValue;
break;
case clsvQxPrjPotenceEN.con_PotenceName:
this.potenceName = strValue;
break;
case clsvQxPrjPotenceEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxPrjPotenceEN.con_PrjName:
this.prjName = strValue;
break;
case clsvQxPrjPotenceEN.con_FuncModuleId:
this.funcModuleId = strValue;
break;
case clsvQxPrjPotenceEN.con_PotenceTypeId:
this.potenceTypeId = strValue;
break;
case clsvQxPrjPotenceEN.con_PotenceTypeName:
this.potenceTypeName = strValue;
break;
case clsvQxPrjPotenceEN.con_FuncModuleName:
this.funcModuleName = strValue;
break;
case clsvQxPrjPotenceEN.con_FuncModuleNameSim:
this.funcModuleNameSim = strValue;
break;
case clsvQxPrjPotenceEN.con_InUse:
this.inUse = Boolean(strValue);
break;
case clsvQxPrjPotenceEN.con_IsVisible:
this.isVisible = Boolean(strValue);
break;
case clsvQxPrjPotenceEN.con_MenuId:
this.menuId = strValue;
break;
case clsvQxPrjPotenceEN.con_MenuName:
this.menuName = strValue;
break;
case clsvQxPrjPotenceEN.con_UpMenuId:
this.upMenuId = strValue;
break;
case clsvQxPrjPotenceEN.con_IsLeafNode:
this.isLeafNode = Boolean(strValue);
break;
case clsvQxPrjPotenceEN.con_UpMenuName:
this.upMenuName = strValue;
break;
case clsvQxPrjPotenceEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQxPrjPotenceEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvQxPrjPotenceEN.con_Memo:
this.memo = strValue;
break;
case clsvQxPrjPotenceEN.con_SymbolNum:
this.symbolNum = Number(strValue);
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxPrjPotence]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public potenceId = "";    //权限ID
public potenceName = "";    //权限名称
public qxPrjId = "";    //项目Id
public prjName = "";    //工程名
public funcModuleId = "";    //模块Id
public potenceTypeId = "";    //权限类型Id
public potenceTypeName = "";    //权限类型名
public funcModuleName = "";    //模块名
public funcModuleNameSim = "";    //模块名_Sim
public inUse = false;    //是否在用
public isVisible = false;    //是否显示
public menuId = "";    //菜单Id
public menuName = "";    //菜单名
public upMenuId = "";    //上级菜单Id
public isLeafNode = false;    //是否叶子
public upMenuName = "";    //上级菜单名
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注
public symbolNum = 0;    //标志数


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
 * 常量:"InUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"MenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuId(): string {return "menuId";}    //菜单Id

 /**
 * 常量:"MenuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuName(): string {return "menuName";}    //菜单名

 /**
 * 常量:"UpMenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpMenuId(): string {return "upMenuId";}    //上级菜单Id

 /**
 * 常量:"IsLeafNode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsLeafNode(): string {return "isLeafNode";}    //是否叶子

 /**
 * 常量:"UpMenuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpMenuName(): string {return "upMenuName";}    //上级菜单名

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
 * 常量:"SymbolNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SymbolNum(): string {return "symbolNum";}    //标志数

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
//return propName in new clsvQxPrjPotenceEN();
const instance = new clsvQxPrjPotenceEN();
return instance.hasOwnProperty(propName);
}
}