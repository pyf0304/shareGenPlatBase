
 /**
 * 类名:clsvQx_UserTypeEN
 * 表名:vQx_UserType(00140134)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/02 10:54:21
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * vQx_UserType(vQx_UserType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQx_UserTypeEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "03"; //localStorage
public static readonly _PrimaryTypeId: string = "01"; //关键字
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "vQx_UserType"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "UserTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 5;
public static readonly _AttributeName = ["userTypeId", "userTypeName", "userTypeNameSim", "userTypeENName", "memo"];
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
case clsvQx_UserTypeEN.con_UserTypeId:
return this.userTypeId;
case clsvQx_UserTypeEN.con_UserTypeName:
return this.userTypeName;
case clsvQx_UserTypeEN.con_UserTypeNameSim:
return this.userTypeNameSim;
case clsvQx_UserTypeEN.con_UserTypeENName:
return this.userTypeENName;
case clsvQx_UserTypeEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQx_UserType]中不存在!`;
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
case clsvQx_UserTypeEN.con_UserTypeId:
this.userTypeId = strValue;
break;
case clsvQx_UserTypeEN.con_UserTypeName:
this.userTypeName = strValue;
break;
case clsvQx_UserTypeEN.con_UserTypeNameSim:
this.userTypeNameSim = strValue;
break;
case clsvQx_UserTypeEN.con_UserTypeENName:
this.userTypeENName = strValue;
break;
case clsvQx_UserTypeEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQx_UserType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public userTypeId = "";    //用户类型Id
public userTypeName = "";    //用户类型名
public userTypeNameSim = "";    //用户类型简称
public userTypeENName = "";    //用户类型英文名
public memo = "";    //备注


 /**
 * 常量:"UserTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UserTypeId = "userTypeId";    //用户类型Id

 /**
 * 常量:"UserTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UserTypeName = "userTypeName";    //用户类型名

 /**
 * 常量:"UserTypeNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UserTypeNameSim = "userTypeNameSim";    //用户类型简称

 /**
 * 常量:"UserTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UserTypeENName = "userTypeENName";    //用户类型英文名

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
//return propName in new clsvQx_UserTypeEN();
const instance = new clsvQx_UserTypeEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}