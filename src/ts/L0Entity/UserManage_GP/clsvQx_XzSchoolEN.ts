
 /**
 * 类名:clsvQx_XzSchoolEN
 * 表名:vQx_XzSchool(00140131)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 23:49:19
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * vQx_XzSchool(vQx_XzSchool)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQx_XzSchoolEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "03"; //localStorage
public static readonly _PrimaryTypeId: string = "00"; //非关键字
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "vQx_XzSchool"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "Id_School"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 10;
public static readonly _AttributeName = ["id_School", "schoolId", "schoolName", "schoolTypeId", "schoolTypeName", "memo", "isCurrentUse", "schoolNameA", "updDate", "updUserId"];
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
case clsvQx_XzSchoolEN.con_Id_School:
return this.id_School;
case clsvQx_XzSchoolEN.con_SchoolId:
return this.schoolId;
case clsvQx_XzSchoolEN.con_SchoolName:
return this.schoolName;
case clsvQx_XzSchoolEN.con_SchoolTypeId:
return this.schoolTypeId;
case clsvQx_XzSchoolEN.con_SchoolTypeName:
return this.schoolTypeName;
case clsvQx_XzSchoolEN.con_Memo:
return this.memo;
case clsvQx_XzSchoolEN.con_IsCurrentUse:
return this.isCurrentUse;
case clsvQx_XzSchoolEN.con_SchoolNameA:
return this.schoolNameA;
case clsvQx_XzSchoolEN.con_UpdDate:
return this.updDate;
case clsvQx_XzSchoolEN.con_UpdUserId:
return this.updUserId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQx_XzSchool]中不存在!`;
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
case clsvQx_XzSchoolEN.con_Id_School:
this.id_School = strValue;
break;
case clsvQx_XzSchoolEN.con_SchoolId:
this.schoolId = strValue;
break;
case clsvQx_XzSchoolEN.con_SchoolName:
this.schoolName = strValue;
break;
case clsvQx_XzSchoolEN.con_SchoolTypeId:
this.schoolTypeId = strValue;
break;
case clsvQx_XzSchoolEN.con_SchoolTypeName:
this.schoolTypeName = strValue;
break;
case clsvQx_XzSchoolEN.con_Memo:
this.memo = strValue;
break;
case clsvQx_XzSchoolEN.con_IsCurrentUse:
this.isCurrentUse = Boolean(strValue);
break;
case clsvQx_XzSchoolEN.con_SchoolNameA:
this.schoolNameA = strValue;
break;
case clsvQx_XzSchoolEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvQx_XzSchoolEN.con_UpdUserId:
this.updUserId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQx_XzSchool]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public id_School = "";    //学校流水号
public schoolId = "";    //学校Id
public schoolName = "";    //学校名称
public schoolTypeId = "";    //学校类型Id
public schoolTypeName = "";    //SchoolTypeName
public memo = "";    //备注
public isCurrentUse = false;    //是否当前使用
public schoolNameA = "";    //学校简称
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id


 /**
 * 常量:"Id_School"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_School = "id_School";    //学校流水号

 /**
 * 常量:"SchoolId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SchoolId = "schoolId";    //学校Id

 /**
 * 常量:"SchoolName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SchoolName = "schoolName";    //学校名称

 /**
 * 常量:"SchoolTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SchoolTypeId = "schoolTypeId";    //学校类型Id

 /**
 * 常量:"SchoolTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SchoolTypeName = "schoolTypeName";    //SchoolTypeName

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Memo = "memo";    //备注

 /**
 * 常量:"IsCurrentUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsCurrentUse = "isCurrentUse";    //是否当前使用

 /**
 * 常量:"SchoolNameA"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SchoolNameA = "schoolNameA";    //学校简称

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdDate = "updDate";    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdUserId = "updUserId";    //修改用户Id

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
//return propName in new clsvQx_XzSchoolEN();
const instance = new clsvQx_XzSchoolEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}