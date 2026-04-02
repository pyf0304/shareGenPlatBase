
 /**
 * 类名:clsvQx_XzClgEN
 * 表名:vQx_XzClg(00140130)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/02 00:13:10
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
 * vQx_XzClg(vQx_XzClg)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQx_XzClgEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "03"; //localStorage
public static readonly _PrimaryTypeId: string = "01"; //关键字
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "vQx_XzClg"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "Id_XzCollege"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 15;
public static readonly _AttributeName = ["id_XzCollege", "collegeId", "collegeIdInGP", "collegeName", "collegeNameA", "clgEnglishName", "phoneNumber", "webSite", "id_Uni", "modifyUserId", "memo", "isVisible", "orderNum", "modifyDate", "id_School"];
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
case clsvQx_XzClgEN.con_Id_XzCollege:
return this.id_XzCollege;
case clsvQx_XzClgEN.con_CollegeId:
return this.collegeId;
case clsvQx_XzClgEN.con_CollegeIdInGP:
return this.collegeIdInGP;
case clsvQx_XzClgEN.con_CollegeName:
return this.collegeName;
case clsvQx_XzClgEN.con_CollegeNameA:
return this.collegeNameA;
case clsvQx_XzClgEN.con_ClgEnglishName:
return this.clgEnglishName;
case clsvQx_XzClgEN.con_PhoneNumber:
return this.phoneNumber;
case clsvQx_XzClgEN.con_WebSite:
return this.webSite;
case clsvQx_XzClgEN.con_Id_Uni:
return this.id_Uni;
case clsvQx_XzClgEN.con_ModifyUserId:
return this.modifyUserId;
case clsvQx_XzClgEN.con_Memo:
return this.memo;
case clsvQx_XzClgEN.con_IsVisible:
return this.isVisible;
case clsvQx_XzClgEN.con_OrderNum:
return this.orderNum;
case clsvQx_XzClgEN.con_ModifyDate:
return this.modifyDate;
case clsvQx_XzClgEN.con_Id_School:
return this.id_School;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQx_XzClg]中不存在!`;
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
case clsvQx_XzClgEN.con_Id_XzCollege:
this.id_XzCollege = strValue;
break;
case clsvQx_XzClgEN.con_CollegeId:
this.collegeId = strValue;
break;
case clsvQx_XzClgEN.con_CollegeIdInGP:
this.collegeIdInGP = strValue;
break;
case clsvQx_XzClgEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvQx_XzClgEN.con_CollegeNameA:
this.collegeNameA = strValue;
break;
case clsvQx_XzClgEN.con_ClgEnglishName:
this.clgEnglishName = strValue;
break;
case clsvQx_XzClgEN.con_PhoneNumber:
this.phoneNumber = strValue;
break;
case clsvQx_XzClgEN.con_WebSite:
this.webSite = strValue;
break;
case clsvQx_XzClgEN.con_Id_Uni:
this.id_Uni = strValue;
break;
case clsvQx_XzClgEN.con_ModifyUserId:
this.modifyUserId = strValue;
break;
case clsvQx_XzClgEN.con_Memo:
this.memo = strValue;
break;
case clsvQx_XzClgEN.con_IsVisible:
this.isVisible = Boolean(strValue);
break;
case clsvQx_XzClgEN.con_OrderNum:
this.orderNum = Number(strValue);
break;
case clsvQx_XzClgEN.con_ModifyDate:
this.modifyDate = strValue;
break;
case clsvQx_XzClgEN.con_Id_School:
this.id_School = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQx_XzClg]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public id_XzCollege = "";    //学院Id
public collegeId = "";    //CollegeId
public collegeIdInGP = "";    //CollegeIdInGP
public collegeName = "";    //学院名
public collegeNameA = "";    //CollegeNameA
public clgEnglishName = "";    //ClgEnglishName
public phoneNumber = "";    //电话号码
public webSite = "";    //WebSite
public id_Uni = "";    //Id_Uni
public modifyUserId = "";    //修改人
public memo = "";    //备注
public isVisible = false;    //是否显示
public orderNum = 0;    //排序号
public modifyDate = "";    //修改日期
public id_School = "";    //学校流水号


 /**
 * 常量:"Id_XzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_XzCollege = "id_XzCollege";    //学院Id

 /**
 * 常量:"CollegeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CollegeId = "collegeId";    //CollegeId

 /**
 * 常量:"CollegeIdInGP"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CollegeIdInGP = "collegeIdInGP";    //CollegeIdInGP

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CollegeName = "collegeName";    //学院名

 /**
 * 常量:"CollegeNameA"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CollegeNameA = "collegeNameA";    //CollegeNameA

 /**
 * 常量:"ClgEnglishName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_ClgEnglishName = "clgEnglishName";    //ClgEnglishName

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PhoneNumber = "phoneNumber";    //电话号码

 /**
 * 常量:"WebSite"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_WebSite = "webSite";    //WebSite

 /**
 * 常量:"Id_Uni"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_Uni = "id_Uni";    //Id_Uni

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_ModifyUserId = "modifyUserId";    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Memo = "memo";    //备注

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsVisible = "isVisible";    //是否显示

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_OrderNum = "orderNum";    //排序号

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_ModifyDate = "modifyDate";    //修改日期

 /**
 * 常量:"Id_School"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_School = "id_School";    //学校流水号

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
//return propName in new clsvQx_XzClgEN();
const instance = new clsvQx_XzClgEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}