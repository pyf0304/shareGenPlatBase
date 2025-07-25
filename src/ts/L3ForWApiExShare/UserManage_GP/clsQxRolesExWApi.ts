/**
 * 类名:clsQxRolesExWApi
 * 表名:QxRoles(01120920)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/28 22:46:47
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色(QxRoles)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年12月28日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/

import { qxRolesCache } from '@/viewsShare/UserManage_GP/QxRolesVueShare';
import { isFuncMapCache } from '@/viewsShare/UserManage_GP/QxRolesVueShare';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import { clsQxRolesENEx } from '@/ts/L0Entity/UserManage_GP/clsQxRolesENEx';
import {
  QxRoles_GetObjLstAsync,
  QxRoles_GetObjLstCache,
  QxRoles_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { UserType_func } from '@/ts/L3ForWApi/UserManage_GP/clsUserTypeWApi';
import { clsUserTypeEN } from '@/ts/L0Entity/UserManage_GP/clsUserTypeEN';
import { RoleType_func } from '@/ts/L3ForWApi/UserManage_GP/clsRoleTypeWApi';
import { clsRoleTypeEN } from '@/ts/L0Entity/UserManage_GP/clsRoleTypeEN';

export const qxRolesExController = 'QxRolesExApi';
export const qxRolesEx_ConstructorName = 'qxRolesEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxRolesEx_GetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objQxRolesENS:源对象
 * @returns 目标对象=>clsQxRolesEN:objQxRolesENT
 **/
export function QxRolesEx_CopyToEx(objQxRolesENS: clsQxRolesEN): clsQxRolesENEx {
  const strThisFuncName = QxRolesEx_CopyToEx.name;
  const objQxRolesENT = new clsQxRolesENEx();
  try {
    ObjectAssign(objQxRolesENT, objQxRolesENS);
    return objQxRolesENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxRolesENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRolesEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxRolesENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxRolesObjLst = await QxRoles_GetObjLstAsync(objPagerPara.whereCond);
  const arrQxRolesExObjLst = arrQxRolesObjLst.map(QxRolesEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxRolesEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxRolesExObjLst) {
      await QxRolesEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxRolesExObjLst.length == 0) return arrQxRolesExObjLst;
  let arrQxRolesSel: Array<clsQxRolesENEx> = arrQxRolesExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxRolesSel = arrQxRolesSel.sort(QxRolesEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxRolesSel = arrQxRolesSel.sort(objPagerPara.sortFun);
    }
    arrQxRolesSel = arrQxRolesSel.slice(intStart, intEnd);
    return arrQxRolesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRolesENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-28
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRolesEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxRoles_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxRoles_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-12-28
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxRolesEx_FuncMapByFldName(strFldName: string, objQxRolesEx: clsQxRolesENEx) {
  const strThisFuncName = QxRolesEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxRolesEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxRolesENEx.con_UserTypeName:
      return QxRolesEx_FuncMapUserTypeName(objQxRolesEx);
    case clsQxRolesENEx.con_UserTypeNameSim:
      return QxRolesEx_FuncMapUserTypeNameSim(objQxRolesEx);
    case clsQxRolesENEx.con_RoleTypeName:
      return QxRolesEx_FuncMapRoleTypeName(objQxRolesEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRolesS:源对象
 **/
export async function QxRolesEx_FuncMapUserTypeName(objQxRoles: clsQxRolesENEx) {
  const strThisFuncName = QxRolesEx_FuncMapUserTypeName.name;
  try {
    if (IsNullOrEmpty(objQxRoles.userTypeName) == true) {
      const UserTypeUserTypeId = objQxRoles.userTypeId;
      const UserTypeUserTypeName = await UserType_func(
        clsUserTypeEN.con_UserTypeId,
        clsUserTypeEN.con_UserTypeName,
        UserTypeUserTypeId,
      );
      objQxRoles.userTypeName = UserTypeUserTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000991)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRolesS:源对象
 **/
export async function QxRolesEx_FuncMapUserTypeNameSim(objQxRoles: clsQxRolesENEx) {
  const strThisFuncName = QxRolesEx_FuncMapUserTypeNameSim.name;
  try {
    if (IsNullOrEmpty(objQxRoles.userTypeNameSim) == true) {
      const UserTypeUserTypeId = objQxRoles.userTypeId;
      const UserTypeUserTypeNameSim = await UserType_func(
        clsUserTypeEN.con_UserTypeId,
        clsUserTypeEN.con_UserTypeNameSim,
        UserTypeUserTypeId,
      );
      objQxRoles.userTypeNameSim = UserTypeUserTypeNameSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000992)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRolesS:源对象
 **/
export async function QxRolesEx_FuncMapRoleTypeName(objQxRoles: clsQxRolesENEx) {
  const strThisFuncName = QxRolesEx_FuncMapRoleTypeName.name;
  try {
    if (IsNullOrEmpty(objQxRoles.roleTypeName) == true) {
      const RoleTypeRoleTypeId = objQxRoles.roleTypeId;
      const RoleTypeRoleTypeName = await RoleType_func(
        clsRoleTypeEN.con_RoleTypeId,
        clsRoleTypeEN.con_RoleTypeName,
        RoleTypeRoleTypeId,
      );
      objQxRoles.roleTypeName = RoleTypeRoleTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001021)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strQxPrjId:
*/
export async function QxRolesEx_GetArrQxRolesByQxPrjIdEx(strQxPrjId: string) {
  if (IsNullOrEmpty(strQxPrjId) == true) {
    const strMsg = Format(
      '参数:[strQxPrjId]不能为空！(In clsQxRolesWApi.BindDdl_RoleIdByQxPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQxPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxRolesWApi.BindDdl_RoleIdByQxPrjIdInDiv)',
      strQxPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_RoleIdByQxPrjIdInDivCache");
  const arrQxRoles = new Array<clsQxRolesEN>();
  let arrObjLstSel = await QxRoles_GetObjLstCache(strQxPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.qxPrjId == strQxPrjId);
  arrObjLstSel = arrObjLstSel.sort((a, b) => a.roleName.localeCompare(b.roleName));
  const obj0 = new clsQxRolesEN();
  obj0.roleId = '0';
  obj0.roleName = '选角色...';
  arrQxRoles.push(obj0);
  arrObjLstSel.forEach((x) => arrQxRoles.push(x));
  return arrQxRoles;
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRolesEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strQxPrjId: string,
): Promise<Array<clsQxRolesENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrQxRolesObjLst = await QxRoles_GetObjLstCache(strQxPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsQxRolesENEx>();
  const arrQxRolesExObjLst = arrQxRolesObjLst.map((obj) => {
    const cacheKey = `${obj.roleId}_${obj.qxPrjId}`;
    if (qxRolesCache[cacheKey]) {
      const oldObj = qxRolesCache[cacheKey];
      return oldObj;
    } else {
      const newObj = QxRolesEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      qxRolesCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await QxRolesEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxRolesEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrQxRolesExObjLst) {
      await QxRolesEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.roleId}_${newObj.qxPrjId}`;
      qxRolesCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrQxRolesExObjLst.length == 0) return arrQxRolesExObjLst;
  let arrQxRolesSel: Array<clsQxRolesENEx> = arrQxRolesExObjLst;
  const objQxRolesCond = objPagerPara.conditionCollection;
  if (objQxRolesCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrQxRolesExObjLst;
  }
  try {
    for (const objCondition of objQxRolesCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrQxRolesSel = arrQxRolesSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxRolesSel = arrQxRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxRolesSel = arrQxRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxRolesSel = arrQxRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxRolesSel = arrQxRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxRolesSel = arrQxRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxRolesSel = arrQxRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxRolesSel = arrQxRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQxRolesSel = arrQxRolesSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxRolesSel = arrQxRolesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxRolesSel = arrQxRolesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxRolesSel = arrQxRolesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxRolesSel = arrQxRolesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxRolesSel = arrQxRolesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxRolesSel = arrQxRolesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQxRolesSel.length == 0) return arrQxRolesSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrQxRolesSel = arrQxRolesSel.sort(
        QxRolesEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxRolesSel = arrQxRolesSel.sort(objPagerPara.sortFun);
    }
    arrQxRolesSel = arrQxRolesSel.slice(intStart, intEnd);
    return arrQxRolesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRolesENEx>();
}
