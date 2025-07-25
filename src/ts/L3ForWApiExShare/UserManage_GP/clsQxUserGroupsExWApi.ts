
 /**
 * 类名:clsQxUserGroupsExWApi
 * 表名:QxUserGroups(00140010)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/16 20:49:02
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * 用户组(QxUserGroups)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2025年03月16日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxUserGroupsENEx } from "@/ts/L0Entity/UserManage_GP/clsQxUserGroupsENEx";
import { QxUserGroups_GetObjLstByPagerAsync,QxUserGroups_SortFunByKey } from "@/ts/L3ForWApi/UserManage_GP/clsQxUserGroupsWApi";
import { clsQxUserGroupsEN } from "@/ts/L0Entity/UserManage_GP/clsQxUserGroupsEN";
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

export const qxUserGroupsEx_Controller = "QxUserGroupsExApi";
export const qxUserGroupsEx_ConstructorName = "qxUserGroupsEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function QxUserGroupsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxUserGroupsENS:源对象
 * @returns 目标对象=>clsQxUserGroupsEN:objQxUserGroupsENT
 **/
export  function QxUserGroupsEx_CopyToEx(objQxUserGroupsENS:clsQxUserGroupsEN ): clsQxUserGroupsENEx
{
const strThisFuncName  = QxUserGroupsEx_CopyToEx.name;
 const objQxUserGroupsENT = new clsQxUserGroupsENEx();
try
{
ObjectAssign(objQxUserGroupsENT, objQxUserGroupsENS);
 return objQxUserGroupsENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, qxUserGroupsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objQxUserGroupsENT;
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function QxUserGroupsEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsQxUserGroupsENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrQxUserGroupsObjLst = await QxUserGroups_GetObjLstByPagerAsync(objPagerPara);
const arrQxUserGroupsExObjLst = arrQxUserGroupsObjLst.map(QxUserGroupsEx_CopyToEx);
if (arrQxUserGroupsExObjLst.length == 0) return arrQxUserGroupsExObjLst;
let arrQxUserGroupsSel: Array < clsQxUserGroupsENEx > = arrQxUserGroupsExObjLst;
try {
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxUserGroupsSel = arrQxUserGroupsSel.sort(QxUserGroupsEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxUserGroupsSel = arrQxUserGroupsSel.sort(objPagerPara.sortFun);
}
return arrQxUserGroupsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxUserGroupsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxUserGroupsENEx>();
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
export  function QxUserGroupsEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return QxUserGroups_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return QxUserGroups_SortFunByKey(strKey, AscOrDesc);
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
export  function QxUserGroupsEx_FuncMapByFldName(strFldName: string, objQxUserGroupsEx: clsQxUserGroupsENEx)
{
const strThisFuncName = QxUserGroupsEx_FuncMapByFldName.name;
console.log(objQxUserGroupsEx);
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsQxUserGroupsEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}
