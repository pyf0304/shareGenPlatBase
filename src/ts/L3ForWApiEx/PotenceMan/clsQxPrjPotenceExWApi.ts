﻿/**
 * 类名:clsQxPrjPotenceExWApi
 * 表名:QxPrjPotence(00140005)
 * 版本:2024.02.03.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/04 16:19:24
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程权限(QxPrjPotence)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxPrjPotence_GetObjLstCache,
  QxPrjPotence_GetObjLstAsync,
  QxPrjPotence_SortFunByKey,
} from '@/ts/L3ForWApi/PotenceMan/clsQxPrjPotenceWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxPrjPotenceEN } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN';
import { clsQxPrjPotenceENEx } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceENEx';
import {
  QxFuncModule_func,
  QxFuncModule_funcKey,
} from '@/ts/L3ForWApi/PrjManage_GP/clsQxFuncModuleWApi';
import { clsQxFuncModuleEN } from '@/ts/L0Entity/PrjManage_GP/clsQxFuncModuleEN';
import {
  QxPotenceType_func,
  QxPotenceType_funcKey,
} from '@/ts/L3ForWApi/PotenceMan/clsQxPotenceTypeWApi';
import { clsQxPotenceTypeEN } from '@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN';

import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { useQxPrjMenusStore } from '@/store/modulesShare/qxPrjMenus';

export const qxPrjPotenceExController = 'QxPrjPotenceExApi';
export const qxPrjPotenceEx_ConstructorName = 'qxPrjPotenceEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxPrjPotenceEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxPrjPotenceENS:源对象
 * @returns 目标对象=>clsQxPrjPotenceEN:objQxPrjPotenceENT
 **/
export function QxPrjPotenceEx_CopyToEx(
  objQxPrjPotenceENS: clsQxPrjPotenceEN,
): clsQxPrjPotenceENEx {
  const strThisFuncName = QxPrjPotenceEx_CopyToEx.name;
  const objQxPrjPotenceENT = new clsQxPrjPotenceENEx();
  try {
    ObjectAssign(objQxPrjPotenceENT, objQxPrjPotenceENS);
    return objQxPrjPotenceENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjPotenceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxPrjPotenceENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxPrjPotenceEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxPrjPotenceENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxPrjPotenceObjLst = await QxPrjPotence_GetObjLstAsync(objPagerPara.whereCond);
  const arrQxPrjPotenceExObjLst = arrQxPrjPotenceObjLst.map(QxPrjPotenceEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxPrjPotenceEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxPrjPotenceExObjLst) {
      await QxPrjPotenceEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxPrjPotenceExObjLst.length == 0) return arrQxPrjPotenceExObjLst;
  let arrQxPrjPotenceSel: Array<clsQxPrjPotenceENEx> = arrQxPrjPotenceExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxPrjPotenceSel = arrQxPrjPotenceSel.sort(
        QxPrjPotenceEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxPrjPotenceSel = arrQxPrjPotenceSel.sort(objPagerPara.sortFun);
    }
    arrQxPrjPotenceSel = arrQxPrjPotenceSel.slice(intStart, intEnd);
    return arrQxPrjPotenceSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxPrjPotenceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPrjPotenceENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPrjPotenceS:源对象
 **/
export async function QxPrjPotenceEx_FuncMapFuncModuleName(objQxPrjPotence: clsQxPrjPotenceENEx) {
  const strThisFuncName = QxPrjPotenceEx_FuncMapFuncModuleName.name;
  try {
    if (IsNullOrEmpty(objQxPrjPotence.funcModuleName) == true) {
      const QxFuncModuleFuncModuleId = objQxPrjPotence.funcModuleId;
      const QxFuncModuleFuncModuleName = await QxFuncModule_func(
        clsQxFuncModuleEN.con_FuncModuleId,
        clsQxFuncModuleEN.con_FuncModuleName,
        QxFuncModuleFuncModuleId,
      );
      objQxPrjPotence.funcModuleName = QxFuncModuleFuncModuleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000342)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjPotenceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPrjPotenceS:源对象
 **/
export async function QxPrjPotenceEx_FuncMapPotenceTypeName(objQxPrjPotence: clsQxPrjPotenceENEx) {
  const strThisFuncName = QxPrjPotenceEx_FuncMapPotenceTypeName.name;
  try {
    if (IsNullOrEmpty(objQxPrjPotence.potenceTypeName) == true) {
      const QxPotenceTypePotenceTypeId = objQxPrjPotence.potenceTypeId;
      const QxPotenceTypePotenceTypeName = await QxPotenceType_func(
        clsQxPotenceTypeEN.con_PotenceTypeId,
        clsQxPotenceTypeEN.con_PotenceTypeName,
        QxPotenceTypePotenceTypeId,
      );
      objQxPrjPotence.potenceTypeName = QxPotenceTypePotenceTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000487)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjPotenceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPrjPotenceS:源对象
 **/
export async function QxPrjPotenceEx_FuncMapDateTimeSim(objQxPrjPotence: clsQxPrjPotenceENEx) {
  const strThisFuncName = QxPrjPotenceEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objQxPrjPotence.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objQxPrjPotence.updDate);
      objQxPrjPotence.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjPotenceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPrjPotenceS:源对象
 **/
export async function QxPrjPotenceEx_FuncMapMenuName(objQxPrjPotence: clsQxPrjPotenceENEx) {
  const strThisFuncName = QxPrjPotenceEx_FuncMapMenuName.name;
  const qxPrjMenusStore = useQxPrjMenusStore();
  try {
    if (IsNullOrEmpty(objQxPrjPotence.menuName) == true) {
      const QxPrjMenusMenuId = objQxPrjPotence.menuId;
      const QxPrjMenusMenuName = await qxPrjMenusStore.getMenuName(QxPrjMenusMenuId);
      objQxPrjPotence.menuName = QxPrjMenusMenuName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000403)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjPotenceEx_ConstructorName,
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
export function QxPrjPotenceEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxPrjPotenceENEx.con_FuncModuleName:
        return (a: clsQxPrjPotenceENEx, b: clsQxPrjPotenceENEx) => {
          return a.funcModuleName.localeCompare(b.funcModuleName);
        };
      case clsQxPrjPotenceENEx.con_PotenceTypeName:
        return (a: clsQxPrjPotenceENEx, b: clsQxPrjPotenceENEx) => {
          return a.potenceTypeName.localeCompare(b.potenceTypeName);
        };
      case clsQxPrjPotenceENEx.con_DateTimeSim:
        return (a: clsQxPrjPotenceENEx, b: clsQxPrjPotenceENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsQxPrjPotenceENEx.con_MenuName:
        return (a: clsQxPrjPotenceENEx, b: clsQxPrjPotenceENEx) => {
          return a.menuName.localeCompare(b.menuName);
        };
      case clsQxPrjPotenceENEx.con_RoleNames:
        return (a: clsQxPrjPotenceENEx, b: clsQxPrjPotenceENEx) => {
          return a.roleNames.localeCompare(b.roleNames);
        };
      default:
        return QxPrjPotence_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxPrjPotenceENEx.con_FuncModuleName:
        return (a: clsQxPrjPotenceENEx, b: clsQxPrjPotenceENEx) => {
          return b.funcModuleName.localeCompare(a.funcModuleName);
        };
      case clsQxPrjPotenceENEx.con_PotenceTypeName:
        return (a: clsQxPrjPotenceENEx, b: clsQxPrjPotenceENEx) => {
          return b.potenceTypeName.localeCompare(a.potenceTypeName);
        };
      case clsQxPrjPotenceENEx.con_DateTimeSim:
        return (a: clsQxPrjPotenceENEx, b: clsQxPrjPotenceENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsQxPrjPotenceENEx.con_MenuName:
        return (a: clsQxPrjPotenceENEx, b: clsQxPrjPotenceENEx) => {
          return b.menuName.localeCompare(a.menuName);
        };
      case clsQxPrjPotenceENEx.con_RoleNames:
        return (a: clsQxPrjPotenceENEx, b: clsQxPrjPotenceENEx) => {
          return b.roleNames.localeCompare(a.roleNames);
        };
      default:
        return QxPrjPotence_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-02-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxPrjPotenceEx_FuncMapByFldName(
  strFldName: string,
  objQxPrjPotenceEx: clsQxPrjPotenceENEx,
) {
  const strThisFuncName = QxPrjPotenceEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxPrjPotenceEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxPrjPotenceENEx.con_FuncModuleName:
      return QxPrjPotenceEx_FuncMapFuncModuleName(objQxPrjPotenceEx);
    case clsQxPrjPotenceENEx.con_PotenceTypeName:
      return QxPrjPotenceEx_FuncMapPotenceTypeName(objQxPrjPotenceEx);
    case clsQxPrjPotenceENEx.con_DateTimeSim:
      return QxPrjPotenceEx_FuncMapDateTimeSim(objQxPrjPotenceEx);
    case clsQxPrjPotenceENEx.con_MenuName:
      return QxPrjPotenceEx_FuncMapMenuName(objQxPrjPotenceEx);
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxPrjPotenceS:源对象
 **/
export async function QxPrjPotenceEx_FuncMapKeyFuncModuleName(
  objQxPrjPotence: clsQxPrjPotenceENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxPrjPotenceEx_FuncMapKeyFuncModuleName.name;
  try {
    if (IsNullOrEmpty(objQxPrjPotence.funcModuleName) == true) return [];
    const QxFuncModuleFuncModuleName = objQxPrjPotence.funcModuleName;
    const arrFuncModuleId = await QxFuncModule_funcKey(
      clsQxFuncModuleEN.con_FuncModuleName,
      QxFuncModuleFuncModuleName,
      enumComparisonOp.Like_03,
    );
    return arrFuncModuleId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000342)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjPotenceEx_ConstructorName,
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
 * @param objQxPrjPotenceS:源对象
 **/
export async function QxPrjPotenceEx_FuncMapKeyPotenceTypeName(
  objQxPrjPotence: clsQxPrjPotenceENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxPrjPotenceEx_FuncMapKeyPotenceTypeName.name;
  try {
    if (IsNullOrEmpty(objQxPrjPotence.potenceTypeName) == true) return [];
    const QxPotenceTypePotenceTypeName = objQxPrjPotence.potenceTypeName;
    const arrPotenceTypeId = await QxPotenceType_funcKey(
      clsQxPotenceTypeEN.con_PotenceTypeName,
      QxPotenceTypePotenceTypeName,
      enumComparisonOp.Like_03,
    );
    return arrPotenceTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000487)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjPotenceEx_ConstructorName,
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
 * @param objQxPrjPotenceS:源对象
 **/
export async function QxPrjPotenceEx_FuncMapKeyMenuName(
  objQxPrjPotence: clsQxPrjPotenceENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxPrjPotenceEx_FuncMapKeyMenuName.name;
  const qxPrjMenusStore = useQxPrjMenusStore();
  try {
    if (IsNullOrEmpty(objQxPrjPotence.menuName) == true) return [];
    const QxPrjMenusMenuName = objQxPrjPotence.menuName;
    const arrMenuId = await qxPrjMenusStore.getMenuIdLstByMenuName(
      QxPrjMenusMenuName,
      enumComparisonOp.Like_03,
    );
    return arrMenuId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000403)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjPotenceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
