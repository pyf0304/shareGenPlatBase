
 /**
 * 类名:clsvQx_UserTypeENEx
 * 表名:vQx_UserType(00140134)
 * 版本:2026.04.18.2(服务器:WIN-SRV103-116)
 * 日期:2026/04/18 22:20:04
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * vQx_UserType(vQx_UserType)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvQx_UserTypeEN } from "@/ts/L0Entity/SysPara/clsvQx_UserTypeEN";

export class  clsvQx_UserTypeENEx extends clsvQx_UserTypeEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}

/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsvQx_UserTypeENEx();
const instance = new clsvQx_UserTypeENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}