
 /**
 * 类名:clsQxFuncModule_AgcExWApi
 * 表名:QxFuncModule_Agc(00140101)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:50:10
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:工程管理(PrjManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * 功能模块_Agc(QxFuncModule_Agc)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2025年03月16日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxFuncModule_AgcENEx } from "@/ts/L0Entity/PrjManage_GP/clsQxFuncModule_AgcENEx";
import { QxFuncModule_Agc_GetObjLstByPagerAsync,QxFuncModule_Agc_SortFunByKey } from "@/ts/L3ForWApi/PrjManage_GP/clsQxFuncModule_AgcWApi";
import { clsQxFuncModule_AgcEN } from "@/ts/L0Entity/PrjManage_GP/clsQxFuncModule_AgcEN";
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

export const qxFuncModule_AgcEx_Controller = "QxFuncModule_AgcExApi";
export const qxFuncModule_AgcEx_ConstructorName = "qxFuncModule_AgcEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function QxFuncModule_AgcEx_GetWebApiUrl(strController: string, strAction: string): string {
let strServiceUrl:string;
let strCurrIPAddressAndPort = "";
if (clsSysPara4WebApi.bolIsLocalHost == false)
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
}
else
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
}
if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true)
{
strServiceUrl = Format("{0}/{1}/{2}", strCurrIPAddressAndPort, strController, strAction);
}
else
{
strServiceUrl = Format("{0}/{1}/{2}/{3}", strCurrIPAddressAndPort, clsSysPara4WebApi.CurrPrx, strController, strAction);
}
return strServiceUrl;
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objQxFuncModule_AgcENS:源对象
 * @returns 目标对象=>clsQxFuncModule_AgcEN:objQxFuncModule_AgcENT
 **/
export  function QxFuncModule_AgcEx_CopyToEx(objQxFuncModule_AgcENS:clsQxFuncModule_AgcEN ): clsQxFuncModule_AgcENEx
{
const strThisFuncName  = QxFuncModule_AgcEx_CopyToEx.name;
 const objQxFuncModule_AgcENT = new clsQxFuncModule_AgcENEx();
try
{
ObjectAssign(objQxFuncModule_AgcENT, objQxFuncModule_AgcENS);
 return objQxFuncModule_AgcENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, qxFuncModule_AgcEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objQxFuncModule_AgcENT;
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function QxFuncModule_AgcEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsQxFuncModule_AgcENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrQxFuncModule_AgcObjLst = await QxFuncModule_Agc_GetObjLstByPagerAsync(objPagerPara);
const arrQxFuncModule_AgcExObjLst = arrQxFuncModule_AgcObjLst.map(QxFuncModule_AgcEx_CopyToEx);
if (arrQxFuncModule_AgcExObjLst.length == 0) return arrQxFuncModule_AgcExObjLst;
let arrQxFuncModule_AgcSel: Array < clsQxFuncModule_AgcENEx > = arrQxFuncModule_AgcExObjLst;
try {
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxFuncModule_AgcSel = arrQxFuncModule_AgcSel.sort(QxFuncModule_AgcEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxFuncModule_AgcSel = arrQxFuncModule_AgcSel.sort(objPagerPara.sortFun);
}
return arrQxFuncModule_AgcSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxFuncModule_AgcEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxFuncModule_AgcENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxFuncModule_AgcEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return QxFuncModule_Agc_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return QxFuncModule_Agc_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-03-16
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function QxFuncModule_AgcEx_FuncMapByFldName(strFldName: string, objQxFuncModule_AgcEx: clsQxFuncModule_AgcENEx)
{
const strThisFuncName = QxFuncModule_AgcEx_FuncMapByFldName.name;
console.log(objQxFuncModule_AgcEx);
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsQxFuncModule_AgcEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}
