
 /**
 * 类名:clsQxPrjMenuSet
 * 表名:QxPrjMenuSet(00140045)
 * 版本:2024.02.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/26 15:31:16
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 菜单集(QxPrjMenuSet)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxPrjMenuSet 
{
public static _CurrTabName= "QxPrjMenuSet"; //当前表名,与该类相关的表名
public static _KeyFldName= "MenuSetId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["menuSetId", "menuSetName", "menuSetENName", "qxPrjId", "cmPrjId", "isDefault", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public menuSetId = "";    //菜单集Id
public menuSetName = "";    //菜单集名称
public menuSetENName = "";    //菜单集英文名
public qxPrjId = "";    //项目Id
public cmPrjId = "";    //Cm项目Id
public isDefault = false;    //是否默认
public updDate = "";    //修改日期
public updUser = "";    //修改用户
public memo = "";    //备注

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsQxPrjMenuSet.con_MenuSetId:
return this.menuSetId;
case clsQxPrjMenuSet.con_MenuSetName:
return this.menuSetName;
case clsQxPrjMenuSet.con_MenuSetENName:
return this.menuSetENName;
case clsQxPrjMenuSet.con_QxPrjId:
return this.qxPrjId;
case clsQxPrjMenuSet.con_CmPrjId:
return this.cmPrjId;
case clsQxPrjMenuSet.con_IsDefault:
return this.isDefault;
case clsQxPrjMenuSet.con_UpdDate:
return this.updDate;
case clsQxPrjMenuSet.con_UpdUser:
return this.updUser;
case clsQxPrjMenuSet.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxPrjMenuSet]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"MenuSetId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MenuSetId(): string {return "menuSetId";}    //菜单集Id

 /**
 * 常量:"MenuSetName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MenuSetName(): string {return "menuSetName";}    //菜单集名称

 /**
 * 常量:"MenuSetENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MenuSetENName(): string {return "menuSetENName";}    //菜单集英文名

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"CmPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CmPrjId(): string {return "cmPrjId";}    //Cm项目Id

 /**
 * 常量:"IsDefault"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDefault(): string {return "isDefault";}    //是否默认

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改用户

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumQxPrjMenuSet
{
}