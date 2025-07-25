
 /**
 * 类名:clsvQxPrjMenuSetENEx
 * 表名:vQxPrjMenuSet(00140072)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:47:19
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * v菜单集(vQxPrjMenuSet)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvQxPrjMenuSetEN } from "@/ts/L0Entity/MenuManage_GP/clsvQxPrjMenuSetEN";

export class  clsvQxPrjMenuSetENEx extends clsvQxPrjMenuSetEN
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
//return propName in new clsvQxPrjMenuSetENEx();
const instance = new clsvQxPrjMenuSetENEx();
return instance.hasOwnProperty(propName);
}
}