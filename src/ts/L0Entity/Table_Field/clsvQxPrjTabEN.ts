
 /**
 * 类名:clsvQxPrjTabEN
 * 表名:vQxPrjTab(00140097)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/02 11:37:37
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v工程表(vQxPrjTab)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxPrjTabEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "05"; //未知
public static readonly _PrimaryTypeId: string = "01"; //关键字
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "vQxPrjTab"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "TabId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 26;
public static readonly _AttributeName = ["tabId", "tabName", "tabCnName", "qxPrjId", "prjName", "sQLDSTypeId", "sqlDsTypeName", "tabStateId", "tabStateName", "isParaTab", "funcModuleAgcId", "funcModuleName", "funcModuleEnName", "owner", "keyword", "tabTypeId", "tabTypeName", "primaryTypeId", "primaryTypeName", "keyFldId", "keyFldName", "updUserId", "updDate", "memo", "updDate2", "relaViewId"];
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
case clsvQxPrjTabEN.con_TabId:
return this.tabId;
case clsvQxPrjTabEN.con_TabName:
return this.tabName;
case clsvQxPrjTabEN.con_TabCnName:
return this.tabCnName;
case clsvQxPrjTabEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxPrjTabEN.con_PrjName:
return this.prjName;
case clsvQxPrjTabEN.con_SQLDSTypeId:
return this.sQLDSTypeId;
case clsvQxPrjTabEN.con_SqlDsTypeName:
return this.sqlDsTypeName;
case clsvQxPrjTabEN.con_TabStateId:
return this.tabStateId;
case clsvQxPrjTabEN.con_TabStateName:
return this.tabStateName;
case clsvQxPrjTabEN.con_IsParaTab:
return this.isParaTab;
case clsvQxPrjTabEN.con_FuncModuleAgcId:
return this.funcModuleAgcId;
case clsvQxPrjTabEN.con_FuncModuleName:
return this.funcModuleName;
case clsvQxPrjTabEN.con_FuncModuleEnName:
return this.funcModuleEnName;
case clsvQxPrjTabEN.con_Owner:
return this.owner;
case clsvQxPrjTabEN.con_Keyword:
return this.keyword;
case clsvQxPrjTabEN.con_TabTypeId:
return this.tabTypeId;
case clsvQxPrjTabEN.con_TabTypeName:
return this.tabTypeName;
case clsvQxPrjTabEN.con_PrimaryTypeId:
return this.primaryTypeId;
case clsvQxPrjTabEN.con_PrimaryTypeName:
return this.primaryTypeName;
case clsvQxPrjTabEN.con_KeyFldId:
return this.keyFldId;
case clsvQxPrjTabEN.con_KeyFldName:
return this.keyFldName;
case clsvQxPrjTabEN.con_UpdUserId:
return this.updUserId;
case clsvQxPrjTabEN.con_UpdDate:
return this.updDate;
case clsvQxPrjTabEN.con_Memo:
return this.memo;
case clsvQxPrjTabEN.con_UpdDate2:
return this.updDate2;
case clsvQxPrjTabEN.con_RelaViewId:
return this.relaViewId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxPrjTab]中不存在!`;
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
case clsvQxPrjTabEN.con_TabId:
this.tabId = strValue;
break;
case clsvQxPrjTabEN.con_TabName:
this.tabName = strValue;
break;
case clsvQxPrjTabEN.con_TabCnName:
this.tabCnName = strValue;
break;
case clsvQxPrjTabEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxPrjTabEN.con_PrjName:
this.prjName = strValue;
break;
case clsvQxPrjTabEN.con_SQLDSTypeId:
this.sQLDSTypeId = strValue;
break;
case clsvQxPrjTabEN.con_SqlDsTypeName:
this.sqlDsTypeName = strValue;
break;
case clsvQxPrjTabEN.con_TabStateId:
this.tabStateId = strValue;
break;
case clsvQxPrjTabEN.con_TabStateName:
this.tabStateName = strValue;
break;
case clsvQxPrjTabEN.con_IsParaTab:
this.isParaTab = Boolean(strValue);
break;
case clsvQxPrjTabEN.con_FuncModuleAgcId:
this.funcModuleAgcId = strValue;
break;
case clsvQxPrjTabEN.con_FuncModuleName:
this.funcModuleName = strValue;
break;
case clsvQxPrjTabEN.con_FuncModuleEnName:
this.funcModuleEnName = strValue;
break;
case clsvQxPrjTabEN.con_Owner:
this.owner = strValue;
break;
case clsvQxPrjTabEN.con_Keyword:
this.keyword = strValue;
break;
case clsvQxPrjTabEN.con_TabTypeId:
this.tabTypeId = strValue;
break;
case clsvQxPrjTabEN.con_TabTypeName:
this.tabTypeName = strValue;
break;
case clsvQxPrjTabEN.con_PrimaryTypeId:
this.primaryTypeId = strValue;
break;
case clsvQxPrjTabEN.con_PrimaryTypeName:
this.primaryTypeName = strValue;
break;
case clsvQxPrjTabEN.con_KeyFldId:
this.keyFldId = strValue;
break;
case clsvQxPrjTabEN.con_KeyFldName:
this.keyFldName = strValue;
break;
case clsvQxPrjTabEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvQxPrjTabEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQxPrjTabEN.con_Memo:
this.memo = strValue;
break;
case clsvQxPrjTabEN.con_UpdDate2:
this.updDate2 = strValue;
break;
case clsvQxPrjTabEN.con_RelaViewId:
this.relaViewId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxPrjTab]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public tabId = "";    //表ID
public tabName = "";    //TabName
public tabCnName = "";    //表中文名
public qxPrjId = "";    //项目Id
public prjName = "";    //工程名
public sQLDSTypeId = "";    //数据源类型
public sqlDsTypeName = "";    //Sql数据源名
public tabStateId = "";    //表状态ID
public tabStateName = "";    //表状态名称
public isParaTab = false;    //是否参数表
public funcModuleAgcId = "";    //功能模块Id
public funcModuleName = "";    //模块名
public funcModuleEnName = "";    //模块英文名
public owner = "";    //拥有者
public keyword = "";    //关键字
public tabTypeId = "";    //表类型Id
public tabTypeName = "";    //表类型名
public primaryTypeId = "";    //主键类型ID
public primaryTypeName = "";    //主键类型名
public keyFldId = "";    //关键字段Id
public keyFldName = "";    //关键字段名
public updUserId = "";    //修改用户Id
public updDate = "";    //修改日期
public memo = "";    //备注
public updDate2 = "";    //UpdDate2
public relaViewId = "";    //RelaViewId


 /**
 * 常量:"TabId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_TabId = "tabId";    //表ID

 /**
 * 常量:"TabName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_TabName = "tabName";    //TabName

 /**
 * 常量:"TabCnName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_TabCnName = "tabCnName";    //表中文名

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_QxPrjId = "qxPrjId";    //项目Id

 /**
 * 常量:"PrjName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PrjName = "prjName";    //工程名

 /**
 * 常量:"SQLDSTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SQLDSTypeId = "sQLDSTypeId";    //数据源类型

 /**
 * 常量:"SqlDsTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SqlDsTypeName = "sqlDsTypeName";    //Sql数据源名

 /**
 * 常量:"TabStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_TabStateId = "tabStateId";    //表状态ID

 /**
 * 常量:"TabStateName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_TabStateName = "tabStateName";    //表状态名称

 /**
 * 常量:"IsParaTab"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsParaTab = "isParaTab";    //是否参数表

 /**
 * 常量:"FuncModuleAgcId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_FuncModuleAgcId = "funcModuleAgcId";    //功能模块Id

 /**
 * 常量:"FuncModuleName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_FuncModuleName = "funcModuleName";    //模块名

 /**
 * 常量:"FuncModuleEnName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_FuncModuleEnName = "funcModuleEnName";    //模块英文名

 /**
 * 常量:"Owner"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Owner = "owner";    //拥有者

 /**
 * 常量:"Keyword"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Keyword = "keyword";    //关键字

 /**
 * 常量:"TabTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_TabTypeId = "tabTypeId";    //表类型Id

 /**
 * 常量:"TabTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_TabTypeName = "tabTypeName";    //表类型名

 /**
 * 常量:"PrimaryTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PrimaryTypeId = "primaryTypeId";    //主键类型ID

 /**
 * 常量:"PrimaryTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PrimaryTypeName = "primaryTypeName";    //主键类型名

 /**
 * 常量:"KeyFldId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_KeyFldId = "keyFldId";    //关键字段Id

 /**
 * 常量:"KeyFldName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_KeyFldName = "keyFldName";    //关键字段名

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdUserId = "updUserId";    //修改用户Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdDate = "updDate";    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Memo = "memo";    //备注

 /**
 * 常量:"UpdDate2"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdDate2 = "updDate2";    //UpdDate2

 /**
 * 常量:"RelaViewId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_RelaViewId = "relaViewId";    //RelaViewId

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
//return propName in new clsvQxPrjTabEN();
const instance = new clsvQxPrjTabEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}