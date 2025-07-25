/**
 * 类名:clsQxRoleRightRelationExWApi
 * 表名:QxRoleRightRelation(00140118)
 * 版本:2024.02.03.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/04 14:39:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色赋权关系(QxRoleRightRelation)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/

import { qxRoleRightRelationCache } from '@/viewsShare/UserManage_GP/QxRoleRightRelationVueShare';
import { isFuncMapCache } from '@/viewsShare/UserManage_GP/QxRoleRightRelationVueShare';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxRoleRightRelation_GetObjLstCache,
  QxRoleRightRelation_GetObjLstAsync,
  QxRoleRightRelation_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxRoleRightRelationWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxRoleRightRelationEN } from '@/ts/L0Entity/UserManage_GP/clsQxRoleRightRelationEN';
import { clsQxRoleRightRelationENEx } from '@/ts/L0Entity/UserManage_GP/clsQxRoleRightRelationENEx';
import { QxProjects_func, QxProjects_funcKey } from '@/ts/L3ForWApi/PrjManage_GP/clsQxProjectsWApi';
import { clsQxProjectsEN } from '@/ts/L0Entity/PrjManage_GP/clsQxProjectsEN';
import { QxRoles_func, QxRoles_funcKey } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const qxRoleRightRelationExController = 'QxRoleRightRelationExApi';
export const qxRoleRightRelationEx_ConstructorName = 'qxRoleRightRelationEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxRoleRightRelationEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objQxRoleRightRelationENS:源对象
 * @returns 目标对象=>clsQxRoleRightRelationEN:objQxRoleRightRelationENT
 **/
export function QxRoleRightRelationEx_CopyToEx(
  objQxRoleRightRelationENS: clsQxRoleRightRelationEN,
): clsQxRoleRightRelationENEx {
  const strThisFuncName = QxRoleRightRelationEx_CopyToEx.name;
  const objQxRoleRightRelationENT = new clsQxRoleRightRelationENEx();
  try {
    ObjectAssign(objQxRoleRightRelationENT, objQxRoleRightRelationENS);
    return objQxRoleRightRelationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleRightRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxRoleRightRelationENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRoleRightRelationEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxRoleRightRelationENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxRoleRightRelationObjLst = await QxRoleRightRelation_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrQxRoleRightRelationExObjLst = arrQxRoleRightRelationObjLst.map(
    QxRoleRightRelationEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxRoleRightRelationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxRoleRightRelationExObjLst) {
      await QxRoleRightRelationEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxRoleRightRelationExObjLst.length == 0) return arrQxRoleRightRelationExObjLst;
  let arrQxRoleRightRelationSel: Array<clsQxRoleRightRelationENEx> = arrQxRoleRightRelationExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.sort(
        QxRoleRightRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.sort(objPagerPara.sortFun);
    }
    arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.slice(intStart, intEnd);
    return arrQxRoleRightRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxRoleRightRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRoleRightRelationENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleRightRelationS:源对象
 **/
export async function QxRoleRightRelationEx_FuncMapPrjName(
  objQxRoleRightRelation: clsQxRoleRightRelationENEx,
) {
  const strThisFuncName = QxRoleRightRelationEx_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objQxRoleRightRelation.prjName) == true) {
      const QxProjectsQxPrjId = objQxRoleRightRelation.qxPrjId;
      const QxProjectsPrjName = await QxProjects_func(
        clsQxProjectsEN.con_QxPrjId,
        clsQxProjectsEN.con_PrjName,
        QxProjectsQxPrjId,
      );
      objQxRoleRightRelation.prjName = QxProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000286)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleRightRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleRightRelationS:源对象
 **/
export async function QxRoleRightRelationEx_FuncMapRoleName(
  objQxRoleRightRelation: clsQxRoleRightRelationENEx,
) {
  const strThisFuncName = QxRoleRightRelationEx_FuncMapRoleName.name;
  try {
    if (IsNullOrEmpty(objQxRoleRightRelation.roleName) == true) {
      const QxRolesRoleId = objQxRoleRightRelation.roleId;
      const QxRolesRoleName = await QxRoles_func(
        clsQxRolesEN.con_RoleId,
        clsQxRolesEN.con_RoleName,
        QxRolesRoleId,
        objQxRoleRightRelation.qxPrjId,
      );
      objQxRoleRightRelation.roleName = QxRolesRoleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleRightRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleRightRelationS:源对象
 **/
export async function QxRoleRightRelationEx_FuncMapMyRoleName(
  objQxRoleRightRelation: clsQxRoleRightRelationENEx,
) {
  const strThisFuncName = QxRoleRightRelationEx_FuncMapMyRoleName.name;
  try {
    if (IsNullOrEmpty(objQxRoleRightRelation.myRoleName) == true) {
      const QxRolesRoleId = objQxRoleRightRelation.roleId;
      const QxRolesRoleName = await QxRoles_func(
        clsQxRolesEN.con_RoleId,
        clsQxRolesEN.con_RoleName,
        QxRolesRoleId,
        objQxRoleRightRelation.qxPrjId,
      );
      objQxRoleRightRelation.myRoleName = QxRolesRoleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000485)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleRightRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRoleRightRelationEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxRoleRightRelationENEx.con_RoleName:
        return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
          return a.roleName.localeCompare(b.roleName);
        };
      case clsQxRoleRightRelationENEx.con_MyRoleName:
        return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
          return a.myRoleName.localeCompare(b.myRoleName);
        };
      case clsQxRoleRightRelationENEx.con_PrjName:
        return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      default:
        return QxRoleRightRelation_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxRoleRightRelationENEx.con_RoleName:
        return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
          return b.roleName.localeCompare(a.roleName);
        };
      case clsQxRoleRightRelationENEx.con_MyRoleName:
        return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
          return b.myRoleName.localeCompare(a.myRoleName);
        };
      case clsQxRoleRightRelationENEx.con_PrjName:
        return (a: clsQxRoleRightRelationENEx, b: clsQxRoleRightRelationENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      default:
        return QxRoleRightRelation_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleRightRelationS:源对象
 **/
export async function QxRoleRightRelationEx_FuncMapKeyPrjName(
  objQxRoleRightRelation: clsQxRoleRightRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleRightRelationEx_FuncMapKeyPrjName.name;
  try {
    if (IsNullOrEmpty(objQxRoleRightRelation.prjName) == true) return [];
    const QxProjectsPrjName = objQxRoleRightRelation.prjName;
    const arrQxPrjId = await QxProjects_funcKey(
      clsQxProjectsEN.con_PrjName,
      QxProjectsPrjName,
      enumComparisonOp.Like_03,
    );
    return arrQxPrjId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000286)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleRightRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleRightRelationS:源对象
 **/
export async function QxRoleRightRelationEx_FuncMapKeyRoleName(
  objQxRoleRightRelation: clsQxRoleRightRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleRightRelationEx_FuncMapKeyRoleName.name;
  try {
    if (IsNullOrEmpty(objQxRoleRightRelation.roleName) == true) return [];
    const QxRolesRoleName = objQxRoleRightRelation.roleName;
    const arrRoleId = await QxRoles_funcKey(
      clsQxRolesEN.con_RoleName,
      QxRolesRoleName,
      objQxRoleRightRelation.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrRoleId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleRightRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleRightRelationS:源对象
 **/
export async function QxRoleRightRelationEx_FuncMapKeyMyRoleName(
  objQxRoleRightRelation: clsQxRoleRightRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleRightRelationEx_FuncMapKeyMyRoleName.name;
  try {
    if (IsNullOrEmpty(objQxRoleRightRelation.myRoleName) == true) return [];
    const QxRolesRoleName = objQxRoleRightRelation.roleName;
    const arrRoleId = await QxRoles_funcKey(
      clsQxRolesEN.con_RoleName,
      QxRolesRoleName,
      objQxRoleRightRelation.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrRoleId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000485)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleRightRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRoleRightRelationEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxRoleRightRelationENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrQxRoleRightRelationObjLst = await QxRoleRightRelation_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsQxRoleRightRelationENEx>();
  const arrQxRoleRightRelationExObjLst = arrQxRoleRightRelationObjLst.map((obj) => {
    const cacheKey = `${obj.mId}`;
    if (qxRoleRightRelationCache[cacheKey]) {
      const oldObj = qxRoleRightRelationCache[cacheKey];
      return oldObj;
    } else {
      const newObj = QxRoleRightRelationEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      qxRoleRightRelationCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await QxRoleRightRelationEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxRoleRightRelationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrQxRoleRightRelationExObjLst) {
      await QxRoleRightRelationEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}`;
      qxRoleRightRelationCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrQxRoleRightRelationExObjLst.length == 0) return arrQxRoleRightRelationExObjLst;
  let arrQxRoleRightRelationSel: Array<clsQxRoleRightRelationENEx> = arrQxRoleRightRelationExObjLst;
  const objQxRoleRightRelationCond = objPagerPara.conditionCollection;
  if (objQxRoleRightRelationCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrQxRoleRightRelationExObjLst;
  }
  try {
    for (const objCondition of objQxRoleRightRelationCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxRoleRightRelationSel.length == 0) return arrQxRoleRightRelationSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.sort(
        QxRoleRightRelationEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.sort(objPagerPara.sortFun);
    }
    arrQxRoleRightRelationSel = arrQxRoleRightRelationSel.slice(intStart, intEnd);
    return arrQxRoleRightRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxRoleRightRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRoleRightRelationENEx>();
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxRoleRightRelationEx_FuncMapByFldName(
  strFldName: string,
  objQxRoleRightRelationEx: clsQxRoleRightRelationENEx,
) {
  const strThisFuncName = QxRoleRightRelationEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxRoleRightRelationEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxRoleRightRelationENEx.con_RoleName:
      return QxRoleRightRelationEx_FuncMapRoleName(objQxRoleRightRelationEx);
    case clsQxRoleRightRelationENEx.con_MyRoleName:
      return QxRoleRightRelationEx_FuncMapMyRoleName(objQxRoleRightRelationEx);
    case clsQxRoleRightRelationENEx.con_PrjName:
      return QxRoleRightRelationEx_FuncMapPrjName(objQxRoleRightRelationEx);
    case clsQxRoleRightRelationENEx.con_DateTimeSim:
      return QxRoleRightRelationEx_FuncMapDateTimeSim(objQxRoleRightRelationEx);
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
 * @param objQxRoleRightRelationS:源对象
 **/
export async function QxRoleRightRelationEx_FuncMapDateTimeSim(
  objQxRoleRightRelation: clsQxRoleRightRelationENEx,
) {
  const strThisFuncName = QxRoleRightRelationEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objQxRoleRightRelation.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objQxRoleRightRelation.updDate);
      objQxRoleRightRelation.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001033)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleRightRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
