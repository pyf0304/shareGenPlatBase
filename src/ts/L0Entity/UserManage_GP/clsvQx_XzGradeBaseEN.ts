
 /**
 * 类名:clsvQx_XzGradeBaseEN
 * 表名:vQx_XzGradeBase(00140132)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/02 11:20:50
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
 * vQx_XzGradeBase(vQx_XzGradeBase)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQx_XzGradeBaseEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "03"; //localStorage
public static readonly _PrimaryTypeId: string = "01"; //关键字
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "vQx_XzGradeBase"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "Id_GradeBase"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 22;
public static readonly _AttributeName = ["id_GradeBase", "gradeBaseId", "gradeBaseName", "schoolYear", "schoolTerm", "enterSchoolDate", "currentTermSeq", "execPlanTermIndex", "setEPTermIndexDate", "isOffed", "modifyDate", "modifyUserId", "pointCalcVersionId", "gradeBaseNameA", "beginYearMonth", "endYearMonth", "gradeIndex", "allowUpBaseInfo", "prefix", "idStudyLevel", "isVisible", "memo"];
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
case clsvQx_XzGradeBaseEN.con_Id_GradeBase:
return this.id_GradeBase;
case clsvQx_XzGradeBaseEN.con_GradeBaseId:
return this.gradeBaseId;
case clsvQx_XzGradeBaseEN.con_GradeBaseName:
return this.gradeBaseName;
case clsvQx_XzGradeBaseEN.con_SchoolYear:
return this.schoolYear;
case clsvQx_XzGradeBaseEN.con_SchoolTerm:
return this.schoolTerm;
case clsvQx_XzGradeBaseEN.con_EnterSchoolDate:
return this.enterSchoolDate;
case clsvQx_XzGradeBaseEN.con_CurrentTermSeq:
return this.currentTermSeq;
case clsvQx_XzGradeBaseEN.con_ExecPlanTermIndex:
return this.execPlanTermIndex;
case clsvQx_XzGradeBaseEN.con_SetEPTermIndexDate:
return this.setEPTermIndexDate;
case clsvQx_XzGradeBaseEN.con_IsOffed:
return this.isOffed;
case clsvQx_XzGradeBaseEN.con_ModifyDate:
return this.modifyDate;
case clsvQx_XzGradeBaseEN.con_ModifyUserId:
return this.modifyUserId;
case clsvQx_XzGradeBaseEN.con_PointCalcVersionId:
return this.pointCalcVersionId;
case clsvQx_XzGradeBaseEN.con_GradeBaseNameA:
return this.gradeBaseNameA;
case clsvQx_XzGradeBaseEN.con_BeginYearMonth:
return this.beginYearMonth;
case clsvQx_XzGradeBaseEN.con_EndYearMonth:
return this.endYearMonth;
case clsvQx_XzGradeBaseEN.con_GradeIndex:
return this.gradeIndex;
case clsvQx_XzGradeBaseEN.con_AllowUpBaseInfo:
return this.allowUpBaseInfo;
case clsvQx_XzGradeBaseEN.con_Prefix:
return this.prefix;
case clsvQx_XzGradeBaseEN.con_IdStudyLevel:
return this.idStudyLevel;
case clsvQx_XzGradeBaseEN.con_IsVisible:
return this.isVisible;
case clsvQx_XzGradeBaseEN.con_Memo:
return this.memo;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQx_XzGradeBase]中不存在!`;
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
case clsvQx_XzGradeBaseEN.con_Id_GradeBase:
this.id_GradeBase = strValue;
break;
case clsvQx_XzGradeBaseEN.con_GradeBaseId:
this.gradeBaseId = strValue;
break;
case clsvQx_XzGradeBaseEN.con_GradeBaseName:
this.gradeBaseName = strValue;
break;
case clsvQx_XzGradeBaseEN.con_SchoolYear:
this.schoolYear = strValue;
break;
case clsvQx_XzGradeBaseEN.con_SchoolTerm:
this.schoolTerm = strValue;
break;
case clsvQx_XzGradeBaseEN.con_EnterSchoolDate:
this.enterSchoolDate = strValue;
break;
case clsvQx_XzGradeBaseEN.con_CurrentTermSeq:
this.currentTermSeq = Number(strValue);
break;
case clsvQx_XzGradeBaseEN.con_ExecPlanTermIndex:
this.execPlanTermIndex = Number(strValue);
break;
case clsvQx_XzGradeBaseEN.con_SetEPTermIndexDate:
this.setEPTermIndexDate = strValue;
break;
case clsvQx_XzGradeBaseEN.con_IsOffed:
this.isOffed = Boolean(strValue);
break;
case clsvQx_XzGradeBaseEN.con_ModifyDate:
this.modifyDate = strValue;
break;
case clsvQx_XzGradeBaseEN.con_ModifyUserId:
this.modifyUserId = strValue;
break;
case clsvQx_XzGradeBaseEN.con_PointCalcVersionId:
this.pointCalcVersionId = strValue;
break;
case clsvQx_XzGradeBaseEN.con_GradeBaseNameA:
this.gradeBaseNameA = strValue;
break;
case clsvQx_XzGradeBaseEN.con_BeginYearMonth:
this.beginYearMonth = strValue;
break;
case clsvQx_XzGradeBaseEN.con_EndYearMonth:
this.endYearMonth = strValue;
break;
case clsvQx_XzGradeBaseEN.con_GradeIndex:
this.gradeIndex = Number(strValue);
break;
case clsvQx_XzGradeBaseEN.con_AllowUpBaseInfo:
this.allowUpBaseInfo = Boolean(strValue);
break;
case clsvQx_XzGradeBaseEN.con_Prefix:
this.prefix = strValue;
break;
case clsvQx_XzGradeBaseEN.con_IdStudyLevel:
this.idStudyLevel = strValue;
break;
case clsvQx_XzGradeBaseEN.con_IsVisible:
this.isVisible = Boolean(strValue);
break;
case clsvQx_XzGradeBaseEN.con_Memo:
this.memo = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQx_XzGradeBase]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public id_GradeBase = "";    //入学年级流水号
public gradeBaseId = "";    //年级代号
public gradeBaseName = "";    //年级名称
public schoolYear = "";    //学年
public schoolTerm = "";    //学期
public enterSchoolDate = "";    //进校日期
public currentTermSeq = 0;    //当前学期
public execPlanTermIndex = 0;    //生成执行计划学期
public setEPTermIndexDate = "";    //设定执行计划学期日期
public isOffed = false;    //是否毕业
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public pointCalcVersionId = "";    //PointCalcVersionId
public gradeBaseNameA = "";    //GradeBaseNameA
public beginYearMonth = "";    //开始年月
public endYearMonth = "";    //结束年月
public gradeIndex = 0;    //年级序号
public allowUpBaseInfo = false;    //允许修改基本信息
public prefix = "";    //Prefix
public idStudyLevel = "";    //IdStudyLevel
public isVisible = false;    //是否显示
public memo = "";    //备注


 /**
 * 常量:"Id_GradeBase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Id_GradeBase = "id_GradeBase";    //入学年级流水号

 /**
 * 常量:"GradeBaseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_GradeBaseId = "gradeBaseId";    //年级代号

 /**
 * 常量:"GradeBaseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_GradeBaseName = "gradeBaseName";    //年级名称

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SchoolYear = "schoolYear";    //学年

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SchoolTerm = "schoolTerm";    //学期

 /**
 * 常量:"EnterSchoolDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_EnterSchoolDate = "enterSchoolDate";    //进校日期

 /**
 * 常量:"CurrentTermSeq"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CurrentTermSeq = "currentTermSeq";    //当前学期

 /**
 * 常量:"ExecPlanTermIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_ExecPlanTermIndex = "execPlanTermIndex";    //生成执行计划学期

 /**
 * 常量:"SetEPTermIndexDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_SetEPTermIndexDate = "setEPTermIndexDate";    //设定执行计划学期日期

 /**
 * 常量:"IsOffed"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsOffed = "isOffed";    //是否毕业

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_ModifyDate = "modifyDate";    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_ModifyUserId = "modifyUserId";    //修改人

 /**
 * 常量:"PointCalcVersionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PointCalcVersionId = "pointCalcVersionId";    //PointCalcVersionId

 /**
 * 常量:"GradeBaseNameA"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_GradeBaseNameA = "gradeBaseNameA";    //GradeBaseNameA

 /**
 * 常量:"BeginYearMonth"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_BeginYearMonth = "beginYearMonth";    //开始年月

 /**
 * 常量:"EndYearMonth"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_EndYearMonth = "endYearMonth";    //结束年月

 /**
 * 常量:"GradeIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_GradeIndex = "gradeIndex";    //年级序号

 /**
 * 常量:"AllowUpBaseInfo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_AllowUpBaseInfo = "allowUpBaseInfo";    //允许修改基本信息

 /**
 * 常量:"Prefix"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Prefix = "prefix";    //Prefix

 /**
 * 常量:"IdStudyLevel"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IdStudyLevel = "idStudyLevel";    //IdStudyLevel

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_IsVisible = "isVisible";    //是否显示

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
//return propName in new clsvQx_XzGradeBaseEN();
const instance = new clsvQx_XzGradeBaseEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}