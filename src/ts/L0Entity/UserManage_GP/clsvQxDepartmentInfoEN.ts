
 /**
 * 类名:clsvQxDepartmentInfoEN
 * 表名:vQxDepartmentInfo(00140035)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:47:31
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v部门(vQxDepartmentInfo)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxDepartmentInfoEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQxDepartmentInfo"; //当前表名,与该类相关的表名
public static _KeyFldName= "DepartmentId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["departmentId", "departmentName", "departmentAbbrName", "departmentTypeId", "departmentTypeName", "upDepartmentId", "orderNum", "inUse", "memo", "userNum", "upDepartmentName"];
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
case clsvQxDepartmentInfoEN.con_DepartmentId:
return this.departmentId;
case clsvQxDepartmentInfoEN.con_DepartmentName:
return this.departmentName;
case clsvQxDepartmentInfoEN.con_DepartmentAbbrName:
return this.departmentAbbrName;
case clsvQxDepartmentInfoEN.con_DepartmentTypeId:
return this.departmentTypeId;
case clsvQxDepartmentInfoEN.con_DepartmentTypeName:
return this.departmentTypeName;
case clsvQxDepartmentInfoEN.con_UpDepartmentId:
return this.upDepartmentId;
case clsvQxDepartmentInfoEN.con_OrderNum:
return this.orderNum;
case clsvQxDepartmentInfoEN.con_InUse:
return this.inUse;
case clsvQxDepartmentInfoEN.con_Memo:
return this.memo;
case clsvQxDepartmentInfoEN.con_UserNum:
return this.userNum;
case clsvQxDepartmentInfoEN.con_UpDepartmentName:
return this.upDepartmentName;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxDepartmentInfo]中不存在!`;
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
case clsvQxDepartmentInfoEN.con_DepartmentId:
this.departmentId = strValue;
break;
case clsvQxDepartmentInfoEN.con_DepartmentName:
this.departmentName = strValue;
break;
case clsvQxDepartmentInfoEN.con_DepartmentAbbrName:
this.departmentAbbrName = strValue;
break;
case clsvQxDepartmentInfoEN.con_DepartmentTypeId:
this.departmentTypeId = strValue;
break;
case clsvQxDepartmentInfoEN.con_DepartmentTypeName:
this.departmentTypeName = strValue;
break;
case clsvQxDepartmentInfoEN.con_UpDepartmentId:
this.upDepartmentId = strValue;
break;
case clsvQxDepartmentInfoEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvQxDepartmentInfoEN.con_InUse:
this.inUse = Boolean(strValue);
break;
case clsvQxDepartmentInfoEN.con_Memo:
this.memo = strValue;
break;
case clsvQxDepartmentInfoEN.con_UserNum:
this.userNum = Number(strValue);
break;
case clsvQxDepartmentInfoEN.con_UpDepartmentName:
this.upDepartmentName = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxDepartmentInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public departmentId = "";    //部门Id
public departmentName = "";    //部门名
public departmentAbbrName = "";    //名称缩写
public departmentTypeId = "";    //部门类型ID
public departmentTypeName = "";    //部门类型名
public upDepartmentId = "";    //所属部门号
public orderNum = 0;    //排序号
public inUse = false;    //是否在用
public memo = "";    //备注
public userNum = 0;    //用户数
public upDepartmentName = "";    //上级部门


 /**
 * 常量:"DepartmentId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentId(): string {return "departmentId";}    //部门Id

 /**
 * 常量:"DepartmentName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentName(): string {return "departmentName";}    //部门名

 /**
 * 常量:"DepartmentAbbrName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentAbbrName(): string {return "departmentAbbrName";}    //名称缩写

 /**
 * 常量:"DepartmentTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentTypeId(): string {return "departmentTypeId";}    //部门类型ID

 /**
 * 常量:"DepartmentTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DepartmentTypeName(): string {return "departmentTypeName";}    //部门类型名

 /**
 * 常量:"UpDepartmentId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpDepartmentId(): string {return "upDepartmentId";}    //所属部门号

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
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"UserNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserNum(): string {return "userNum";}    //用户数

 /**
 * 常量:"UpDepartmentName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpDepartmentName(): string {return "upDepartmentName";}    //上级部门

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
//return propName in new clsvQxDepartmentInfoEN();
const instance = new clsvQxDepartmentInfoEN();
return instance.hasOwnProperty(propName);
}
}