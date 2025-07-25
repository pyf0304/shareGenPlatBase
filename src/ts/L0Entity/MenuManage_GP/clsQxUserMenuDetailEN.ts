
 /**
 * 类名:clsQxUserMenuDetailEN
 * 表名:QxUserMenuDetail(00140011)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:22:09
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 用户菜单(QxUserMenuDetail)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxUserMenuDetailEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxUserMenuDetail"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["mId", "menuId", "menuName", "isDisp", "upMenuId", "linkFile", "imgFile", "isCustomMenu", "userId", "qxPrjId", "orderNum", "memo"];
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
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mlngmId = 0;    //流水号
private mstrMenuId = "";    //菜单Id
private mstrMenuName = "";    //菜单名
private mbolIsDisp = false;    //是否显示
private mstrUpMenuId = "";    //上级菜单Id
private mstrLinkFile = "";    //链接文件
private mstrImgFile = "";    //图像文件
private mbolIsCustomMenu = false;    //是否定制菜单
private mstrUserId = "";    //用户ID
private mstrQxPrjId = "";    //项目Id
private mintOrderNum = 0;    //排序号
private mstrMemo = "";    //备注

/**
 * 流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetmId (value: number)
{
if (value  != undefined)
{
 this.mId = value;
    this.hmProperty["mId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 菜单Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMenuId (value: string)
{
if (value  != undefined)
{
 this.menuId = value;
    this.hmProperty["menuId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 菜单名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMenuName (value: string)
{
if (value  != undefined)
{
 this.menuName = value;
    this.hmProperty["menuName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDisp (value: boolean)
{
if (value  != undefined)
{
 this.isDisp = value;
    this.hmProperty["isDisp"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 上级菜单Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpMenuId (value: string)
{
if (value  != undefined)
{
 this.upMenuId = value;
    this.hmProperty["upMenuId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 链接文件(说明:;字段类型:varchar;字段长度:500;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLinkFile (value: string)
{
if (value  != undefined)
{
 this.linkFile = value;
    this.hmProperty["linkFile"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 图像文件(说明:;字段类型:varchar;字段长度:300;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetImgFile (value: string)
{
if (value  != undefined)
{
 this.imgFile = value;
    this.hmProperty["imgFile"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否定制菜单(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsCustomMenu (value: boolean)
{
if (value  != undefined)
{
 this.isCustomMenu = value;
    this.hmProperty["isCustomMenu"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserId (value: string)
{
if (value  != undefined)
{
 this.userId = value;
    this.hmProperty["userId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 项目Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQxPrjId (value: string)
{
if (value  != undefined)
{
 this.qxPrjId = value;
    this.hmProperty["qxPrjId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 排序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
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
case clsQxUserMenuDetailEN.con_mId:
return this.mId;
case clsQxUserMenuDetailEN.con_MenuId:
return this.menuId;
case clsQxUserMenuDetailEN.con_MenuName:
return this.menuName;
case clsQxUserMenuDetailEN.con_IsDisp:
return this.isDisp;
case clsQxUserMenuDetailEN.con_UpMenuId:
return this.upMenuId;
case clsQxUserMenuDetailEN.con_LinkFile:
return this.linkFile;
case clsQxUserMenuDetailEN.con_ImgFile:
return this.imgFile;
case clsQxUserMenuDetailEN.con_IsCustomMenu:
return this.isCustomMenu;
case clsQxUserMenuDetailEN.con_UserId:
return this.userId;
case clsQxUserMenuDetailEN.con_QxPrjId:
return this.qxPrjId;
case clsQxUserMenuDetailEN.con_OrderNum:
return this.orderNum;
case clsQxUserMenuDetailEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUserMenuDetail]中不存在!`;
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
case clsQxUserMenuDetailEN.con_mId:
this.mId = Number(strValue);
    this.hmProperty["mId"] = true;
break;
case clsQxUserMenuDetailEN.con_MenuId:
this.menuId = strValue;
    this.hmProperty["menuId"] = true;
break;
case clsQxUserMenuDetailEN.con_MenuName:
this.menuName = strValue;
    this.hmProperty["menuName"] = true;
break;
case clsQxUserMenuDetailEN.con_IsDisp:
this.isDisp = Boolean(strValue);
    this.hmProperty["isDisp"] = true;
break;
case clsQxUserMenuDetailEN.con_UpMenuId:
this.upMenuId = strValue;
    this.hmProperty["upMenuId"] = true;
break;
case clsQxUserMenuDetailEN.con_LinkFile:
this.linkFile = strValue;
    this.hmProperty["linkFile"] = true;
break;
case clsQxUserMenuDetailEN.con_ImgFile:
this.imgFile = strValue;
    this.hmProperty["imgFile"] = true;
break;
case clsQxUserMenuDetailEN.con_IsCustomMenu:
this.isCustomMenu = Boolean(strValue);
    this.hmProperty["isCustomMenu"] = true;
break;
case clsQxUserMenuDetailEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clsQxUserMenuDetailEN.con_QxPrjId:
this.qxPrjId = strValue;
    this.hmProperty["qxPrjId"] = true;
break;
case clsQxUserMenuDetailEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsQxUserMenuDetailEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUserMenuDetail]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public mId = 0;    //流水号
public menuId = "";    //菜单Id
public menuName = "";    //菜单名
public isDisp = false;    //是否显示
public upMenuId = "";    //上级菜单Id
public linkFile = "";    //链接文件
public imgFile = "";    //图像文件
public isCustomMenu = false;    //是否定制菜单
public userId = "";    //用户ID
public qxPrjId = "";    //项目Id
public orderNum = 0;    //排序号
public memo = "";    //备注


 /**
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //流水号

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
 * 常量:"IsDisp"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsDisp(): string {return "isDisp";}    //是否显示

 /**
 * 常量:"UpMenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpMenuId(): string {return "upMenuId";}    //上级菜单Id

 /**
 * 常量:"LinkFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LinkFile(): string {return "linkFile";}    //链接文件

 /**
 * 常量:"ImgFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ImgFile(): string {return "imgFile";}    //图像文件

 /**
 * 常量:"IsCustomMenu"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsCustomMenu(): string {return "isCustomMenu";}    //是否定制菜单

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //排序号

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
//return propName in new clsQxUserMenuDetailEN();
const instance = new clsQxUserMenuDetailEN();
return instance.hasOwnProperty(propName);
}
}