/**
 * 工程菜单(QxPrjMenus)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年01月01日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import {
  ObjectAssign,
  GetSortExpressInfo,
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxPrjMenus_GetObjLstAsync,
  QxPrjMenus_SortFunByKey,
  QxPrjMenus_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { clsQxPrjMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusENEx';
import {
  QxPageDispMode_func,
  QxPageDispMode_funcKey,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPageDispModeWApi';
import { clsQxPageDispModeEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPageDispModeEN';
import {
  QxPrjMenuSet_GetNameByMenuSetIdCache,
  QxPrjMenuSet_func,
  QxPrjMenuSet_funcKey,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
import { clsQxPrjMenuSetEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { GetCmPrjName, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { useQxRoleMenusStore } from '@/store/modulesShare/qxRoleMenus';

import { GetA_Empty, GetBr_Empty, GetDiv_Empty, GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { QxRoles_GetNameByRoleIdCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { useQxPrjMenuSetStore } from '@/store/modulesShare/qxPrjMenuSet';
import { useQxPrjMenusStore } from '@/store/modulesShare/qxPrjMenus';

export const qxPrjMenusExController = 'QxPrjMenusExApi';
export const qxPrjMenusEx_ConstructorName = 'qxPrjMenusEx';
export let menuSetId = '';
/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxPrjMenusEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxPrjMenusENS:源对象
 * @returns 目标对象=>clsQxPrjMenusEN:objQxPrjMenusENT
 **/
export function QxPrjMenusEx_CopyToEx(objQxPrjMenusENS: clsQxPrjMenusEN): clsQxPrjMenusENEx {
  const strThisFuncName = QxPrjMenusEx_CopyToEx.name;
  const objQxPrjMenusENT = new clsQxPrjMenusENEx();
  try {
    ObjectAssign(objQxPrjMenusENT, objQxPrjMenusENS);
    return objQxPrjMenusENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxPrjMenusENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxPrjMenusEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxPrjMenusENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxPrjMenusObjLst = await QxPrjMenus_GetObjLstAsync(objPagerPara.whereCond);
  const arrQxPrjMenusExObjLst = arrQxPrjMenusObjLst.map(QxPrjMenusEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxPrjMenusEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxPrjMenusExObjLst) {
      await QxPrjMenusEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxPrjMenusExObjLst.length == 0) return arrQxPrjMenusExObjLst;
  let arrQxPrjMenusSel: Array<clsQxPrjMenusENEx> = arrQxPrjMenusExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxPrjMenusSel = arrQxPrjMenusSel.sort(QxPrjMenusEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxPrjMenusSel = arrQxPrjMenusSel.sort(objPagerPara.sortFun);
    }
    arrQxPrjMenusSel = arrQxPrjMenusSel.slice(intStart, intEnd);
    return arrQxPrjMenusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxPrjMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPrjMenusENEx>();
}

export async function QxPrjMenusEx_GetObjExLstByPagerAsyncByOrder(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxPrjMenusENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxPrjMenusObjLst = await QxPrjMenus_GetObjLstAsync(objPagerPara.whereCond);
  let arrQxPrjMenusExObjLst = arrQxPrjMenusObjLst.map(QxPrjMenusEx_CopyToEx);
  arrQxPrjMenusExObjLst = arrQxPrjMenusExObjLst.sort(
    QxPrjMenusEx_SortFunByKey(clsQxPrjMenusENEx.con_MenuName, 'Asc'),
  );
  let iOrder = 20;
  for (const objQxPrjMenus of arrQxPrjMenusExObjLst) {
    if (objQxPrjMenus.upMenuId != '00000000') continue;
    objQxPrjMenus.orderNum = iOrder;
    let iiOrder = iOrder + 1;
    for (const objSub of arrQxPrjMenusExObjLst) {
      if (objSub.upMenuId != objQxPrjMenus.menuId) continue;
      objSub.orderNum = iiOrder;
      iiOrder++;
    }
    iOrder += 20;
  }
  arrQxPrjMenusExObjLst = arrQxPrjMenusExObjLst.sort(
    QxPrjMenusEx_SortFunByKey(clsQxPrjMenusENEx.con_OrderNum, 'Asc'),
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxPrjMenusEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxPrjMenusExObjLst) {
      await QxPrjMenusEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxPrjMenusExObjLst.length == 0) return arrQxPrjMenusExObjLst;
  let arrQxPrjMenusSel: Array<clsQxPrjMenusENEx> = arrQxPrjMenusExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxPrjMenusSel = arrQxPrjMenusSel.sort(QxPrjMenusEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxPrjMenusSel = arrQxPrjMenusSel.sort(objPagerPara.sortFun);
    }
    arrQxPrjMenusSel = arrQxPrjMenusSel.slice(intStart, intEnd);
    return arrQxPrjMenusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxPrjMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPrjMenusENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPrjMenusS:源对象
 **/
export async function QxPrjMenusEx_FuncMapPageDispModeName(objQxPrjMenus: clsQxPrjMenusENEx) {
  const strThisFuncName = QxPrjMenusEx_FuncMapPageDispModeName.name;
  try {
    if (IsNullOrEmpty(objQxPrjMenus.pageDispModeName) == true) {
      const QxPageDispModePageDispModeId = objQxPrjMenus.pageDispModeId;
      const QxPageDispModePageDispModeName = await QxPageDispMode_func(
        clsQxPageDispModeEN.con_PageDispModeId,
        clsQxPageDispModeEN.con_PageDispModeName,
        QxPageDispModePageDispModeId,
      );
      objQxPrjMenus.pageDispModeName = QxPageDispModePageDispModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000364)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPrjMenusS:源对象
 **/
// export async function QxPrjMenusEx_FuncMapMenuSetName(objQxPrjMenus: clsQxPrjMenusENEx) {
//   const strThisFuncName = QxPrjMenusEx_FuncMapMenuSetName.name;
//   try {
//     if (IsNullOrEmpty(objQxPrjMenus.menuSetName) == true) {
//       const QxPrjMenuSetMenuSetId = objQxPrjMenus.menuSetId;
//       const QxPrjMenuSetMenuSetName = await QxPrjMenuSet_func(
//         clsQxPrjMenuSetEN.con_MenuSetId,
//         clsQxPrjMenuSetEN.con_MenuSetName,
//         QxPrjMenuSetMenuSetId,
//       );
//       objQxPrjMenus.menuSetName = QxPrjMenuSetMenuSetName;
//     }
//   } catch (e) {
//     const strMsg = Format(
//       '(errid:Watl000404)函数映射表对象数据出错,{0}.(in {1}.{2})',
//       e,
//       qxPrjMenusEx_ConstructorName,
//       strThisFuncName,
//     );
//     console.error(strMsg);
//     alert(strMsg);
//   }
// }
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPrjMenusS:源对象
 **/
export async function QxPrjMenusEx_FuncMapDateTimeSim(objQxPrjMenus: clsQxPrjMenusENEx) {
  const strThisFuncName = QxPrjMenusEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objQxPrjMenus.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objQxPrjMenus.updDate);
      objQxPrjMenus.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxPrjMenusEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxPrjMenusENEx.con_PageDispModeName:
        return (a: clsQxPrjMenusENEx, b: clsQxPrjMenusENEx) => {
          return a.pageDispModeName.localeCompare(b.pageDispModeName);
        };

      case clsQxPrjMenusENEx.con_DateTimeSim:
        return (a: clsQxPrjMenusENEx, b: clsQxPrjMenusENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return QxPrjMenus_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxPrjMenusENEx.con_PageDispModeName:
        return (a: clsQxPrjMenusENEx, b: clsQxPrjMenusENEx) => {
          return b.pageDispModeName.localeCompare(a.pageDispModeName);
        };

      case clsQxPrjMenusENEx.con_DateTimeSim:
        return (a: clsQxPrjMenusENEx, b: clsQxPrjMenusENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return QxPrjMenus_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxPrjMenusEx_FuncMapByFldName(
  strFldName: string,
  objQxPrjMenusEx: clsQxPrjMenusENEx,
) {
  const strThisFuncName = QxPrjMenusEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxPrjMenusEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxPrjMenusENEx.con_PageDispModeName:
      return QxPrjMenusEx_FuncMapPageDispModeName(objQxPrjMenusEx);
    // case clsQxPrjMenusENEx.con_MenuSetName:
    //   return QxPrjMenusEx_FuncMapMenuSetName(objQxPrjMenusEx);
    case clsQxPrjMenusENEx.con_DateTimeSim:
      return QxPrjMenusEx_FuncMapDateTimeSim(objQxPrjMenusEx);
    case clsQxPrjMenusENEx.con_UpMenuName:
      return QxPrjMenusEx_FuncMapUpMenuName(objQxPrjMenusEx);
    case clsQxPrjMenusENEx.con_MenuNameEx:
      return QxPrjMenusEx_FuncMapMenuNameEx(objQxPrjMenusEx);

    case clsQxPrjMenusENEx.con_RoleNames:
      return QxPrjMenusEx_FuncMapRoleNamesWithDelButton(objQxPrjMenusEx);
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
 * @param objQxPrjMenusS:源对象
 **/
export async function QxPrjMenusEx_FuncMapKeyPageDispModeName(
  objQxPrjMenus: clsQxPrjMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxPrjMenusEx_FuncMapKeyPageDispModeName.name;
  try {
    if (IsNullOrEmpty(objQxPrjMenus.pageDispModeName) == true) return [];
    const QxPageDispModePageDispModeName = objQxPrjMenus.pageDispModeName;
    const arrPageDispModeId = await QxPageDispMode_funcKey(
      clsQxPageDispModeEN.con_PageDispModeName,
      QxPageDispModePageDispModeName,
      enumComparisonOp.Like_03,
    );
    return arrPageDispModeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000364)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjMenusEx_ConstructorName,
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
 * @param objQxPrjMenusS:源对象
 **/
// export async function QxPrjMenusEx_FuncMapKeyDateTimeSim(
//   objQxPrjMenus: clsQxPrjMenusENEx,
// ): Promise<Array<string>> {
//   const strThisFuncName = QxPrjMenusEx_FuncMapKeyDateTimeSim.name;
//   try {
//     if (IsNullOrEmpty(objQxPrjMenus.dateTimeSim) == true) return [];
//     const QxPrjMenusUpdDate = clsDateTime.GetDateTime_Sim(CommonDataNodeDateTimeSim);
//     return arrUpdDate;
//   } catch (e) {
//     const strMsg = Format(
//       '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
//       e,
//       qxPrjMenusEx_ConstructorName,
//       strThisFuncName,
//     );
//     console.error(strMsg);
//     alert(strMsg);
//     throw strMsg;
//   }
// }

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strQxPrjId:
 * @param strMenuSetId:
*/
export async function QxPrjMenusEx_BindDdl_UpMenuIdByQxPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strQxPrjId: string,
) {
  if (IsNullOrEmpty(strQxPrjId) == true) {
    const strMsg = Format(
      '参数:[strQxPrjId]不能为空！(In clsQxPrjMenusWApi.BindDdl_MenuIdByQxPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQxPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxPrjMenusWApi.BindDdl_MenuIdByQxPrjIdInDiv)',
      strQxPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_MenuIdByQxPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_MenuIdByQxPrjIdInDivCache");
  const strCondition = `${clsQxPrjMenusEN.con_QxPrjId} = '${strQxPrjId}' and ${clsQxPrjMenusEN.con_UpMenuId}='00000000' and ${clsQxPrjMenusEN.con_InUse} = '1'`;
  let arrObjLstSel = await QxPrjMenus_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;

  let arrObjExLstSel = arrObjLstSel.map(QxPrjMenusEx_CopyToEx);
  for (const objInFor of arrObjExLstSel) {
    await QxPrjMenusEx_FuncMapMenuNameEx(objInFor);
  }
  arrObjExLstSel = arrObjExLstSel.sort(
    QxPrjMenusEx_SortFunByKey(clsQxPrjMenusEN.con_MenuName, 'Asc'),
  );
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjExLstSel,
    clsQxPrjMenusEN.con_MenuId,
    clsQxPrjMenusENEx.con_MenuNameEx,
    '上级菜单',
  );
}

export async function QxPrjMenusEx_GetData4UpMenuIdByQxPrjId(
  strQxPrjId: string,
): Promise<Array<clsQxPrjMenusEN>> {
  if (IsNullOrEmpty(strQxPrjId) == true) {
    const strMsg = Format(
      '参数:[strQxPrjId]不能为空！(In clsQxPrjMenusWApi.BindDdl_MenuIdByQxPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQxPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxPrjMenusWApi.BindDdl_MenuIdByQxPrjIdInDiv)',
      strQxPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxPrjMenus = new Array<clsQxPrjMenusEN>();
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_MenuIdByQxPrjIdInDivCache");
  const strCondition = `${clsQxPrjMenusEN.con_QxPrjId} = '${strQxPrjId}' and ${clsQxPrjMenusEN.con_UpMenuId}='00000000' and ${clsQxPrjMenusEN.con_InUse} = '1'`;
  let arrObjLstSel = await QxPrjMenus_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return arrQxPrjMenus;

  let arrObjExLstSel = arrObjLstSel.map(QxPrjMenusEx_CopyToEx);
  for (const objInFor of arrObjExLstSel) {
    await QxPrjMenusEx_FuncMapMenuNameEx(objInFor);
  }
  arrObjExLstSel = arrObjExLstSel.sort(
    QxPrjMenusEx_SortFunByKey(clsQxPrjMenusEN.con_MenuName, 'Asc'),
  );
  const obj0 = new clsQxPrjMenusEN();
  obj0.menuId = '0';
  obj0.menuName = '选上级菜单...';

  arrQxPrjMenus.push(obj0);
  arrObjLstSel.forEach((x) => arrQxPrjMenus.push(x));

  return arrQxPrjMenus;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxPrjMenusS:源对象
 **/
export async function QxPrjMenusEx_FuncMapUpMenuName(objQxPrjMenus: clsQxPrjMenusENEx) {
  const strThisFuncName = QxPrjMenusEx_FuncMapUpMenuName.name;
  const qxPrjMenusStore = useQxPrjMenusStore();
  try {
    if (IsNullOrEmpty(objQxPrjMenus.upMenuName) == true) {
      const QxPrjMenusUpMenuId = objQxPrjMenus.upMenuId;
      if (QxPrjMenusUpMenuId == '00000000') {
        const intSubMenuCount = await QxPrjMenusEx_GetSubMenuCount(
          QxPrjMenusUpMenuId,
          objQxPrjMenus.qxPrjId,
        );
        objQxPrjMenus.upMenuName = `根菜单(${intSubMenuCount})`;
        return;
      }
      const QxPrjMenusMenuName = await qxPrjMenusStore.getMenuName(QxPrjMenusUpMenuId);
      const intSubMenuCount = await QxPrjMenusEx_GetSubMenuCount(
        QxPrjMenusUpMenuId,
        objQxPrjMenus.qxPrjId,
      );
      objQxPrjMenus.upMenuName = `${QxPrjMenusMenuName}(${intSubMenuCount})`;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000486)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function QxPrjMenusEx_FuncMapMenuNameEx(objQxPrjMenus: clsQxPrjMenusENEx) {
  const strThisFuncName = QxPrjMenusEx_FuncMapMenuNameEx.name;
  try {
    if (IsNullOrEmpty(objQxPrjMenus.menuNameEx) == true) {
      const QxPrjMenusMenuId = objQxPrjMenus.menuId;
      if (QxPrjMenusMenuId == '00000000') {
        const intSubMenuCount = await QxPrjMenusEx_GetSubMenuCount(
          QxPrjMenusMenuId,
          objQxPrjMenus.qxPrjId,
        );
        objQxPrjMenus.menuNameEx = `根菜单(${intSubMenuCount})`;
        return;
      }

      const intSubMenuCount = await QxPrjMenusEx_GetSubMenuCount(
        QxPrjMenusMenuId,
        objQxPrjMenus.qxPrjId,
      );
      objQxPrjMenus.menuNameEx = `${objQxPrjMenus.menuName}(${intSubMenuCount})`;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000486)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function QxPrjMenusEx_GetSubMenuCount(
  strMenuId: string,
  strQxPrjId: string,
): Promise<number> {
  const strThisFuncName = QxPrjMenusEx_GetSubMenuCount.name;
  try {
    const strCondition = `${clsQxPrjMenusEN.con_QxPrjId} = '${strQxPrjId}' and ${clsQxPrjMenusEN.con_UpMenuId}='${strMenuId}' and ${clsQxPrjMenusEN.con_InUse} = '1'`;
    let intRecCount = await QxPrjMenus_GetRecCountByCondAsync(strCondition);
    return intRecCount;
  } catch (e) {
    const strMsg = Format(
      '获取子菜单数出错,{0}.(in {1}.{2})',
      e,
      qxPrjMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return -1;
  }
}
export async function QxPrjMenusEx_FuncMapRoleNames(objQxPrjMenus: clsQxPrjMenusENEx) {
  const strThisFuncName = QxPrjMenusEx_FuncMapRoleNames.name;
  const qxRoleMenusStore = useQxRoleMenusStore();
  try {
    if (IsNullOrEmpty(objQxPrjMenus.roleNames) == true) {
      const QxPrjMenusMenuId = objQxPrjMenus.menuId;
      const QxPrjMenusRoleNames = await qxRoleMenusStore.getRoleNames(
        QxPrjMenusMenuId,
        clsSysPara4WebApi.cmPrjId,
        objQxPrjMenus.qxPrjId,
      );
      objQxPrjMenus.roleNames = QxPrjMenusRoleNames;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000486)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function QxPrjMenusEx_FuncMapRoleNamesWithDelButton(objQxPrjMenus: clsQxPrjMenusENEx) {
  const strThisFuncName = QxPrjMenusEx_FuncMapRoleNamesWithDelButton.name;
  const qxRoleMenusStore = useQxRoleMenusStore();
  const qxPrjMenuSetStore = useQxPrjMenuSetStore();
  try {
    // if (strMenuSetId == null || strMenuSetId == '') return;
    if (IsNullOrEmpty(objQxPrjMenus.roleNames) == true) {
      const strPrjId = clsSysPara4WebApi.currSelPrjId;
      const arrRoleIdCmPrjIds = await qxRoleMenusStore.getRoleIdCmPrjIdMenuSetIds(
        objQxPrjMenus.menuId,
        strPrjId,
      );
      if (arrRoleIdCmPrjIds.length == 0) {
        objQxPrjMenus.roleNames = '';
        return;
      }
      const divRoleNames = GetDiv_Empty('');

      for (const strRoleIdCmPrjId of arrRoleIdCmPrjIds) {
        const arr = strRoleIdCmPrjId.split('|');
        if (arr.length != 3) continue;
        const strRoleId = arr[0];
        const strCmPrjId = arr[1];
        const strMenuSetId = arr[2];

        if (strRoleId == '') continue;
        if (strRoleId == '00620000' && arrRoleIdCmPrjIds.length > 1) continue;
        const strRoleName = await QxRoles_GetNameByRoleIdCache(strRoleId, strPrjId);
        const strCmPrjName = GetCmPrjName(strCmPrjId);
        const strMenuSetName = await qxPrjMenuSetStore.getMenuSetName(strMenuSetId);

        const spnRole = GetSpan_Empty('text-secondary');
        spnRole.innerHTML = `${strRoleName}(${strCmPrjName}-${strMenuSetName})`;
        if (strCmPrjId != clsSysPara4WebApi.cmPrjId) {
          spnRole.classList.remove('text-secondary');
          spnRole.classList.add('light-red-text');
          spnRole.style.color = '#ff8080';
        }
        const aDel = GetA_Empty('text-primary ml-2 mr-2');
        aDel.innerHTML = '删除';
        aDel.id = 'aDel';
        aDel.href = 'javascript:void(0)';
        const objData = `${strRoleId}|${strMenuSetId}|${objQxPrjMenus.menuId}`;
        aDel.setAttribute('keyId', objData);
        // aDel.href = 'http://www.shnu.edu.cn';

        // (function (objData: any) {
        //   aDel.onclick = function () {
        //     console.error('aDel.onclick');
        //     clsQxUsersExWApi.vuebtn_Click('DelRole', objData);
        //   };
        // })(objData);
        const spnEmpty = GetSpan_Empty('text-secondary ml-2');
        spnEmpty.innerHTML = '&nbsp;';
        // const spnEmpty1 = GetSpan_Empty('text-secondary ml-2');
        // spnEmpty1.innerHTML = '&nbsp;&nbsp;';
        const spnBr1 = GetBr_Empty();
        divRoleNames.appendChild(spnRole);
        divRoleNames.appendChild(spnEmpty);
        if (strRoleName != '无' && strCmPrjId == clsSysPara4WebApi.cmPrjId) {
          divRoleNames.appendChild(aDel);
          divRoleNames.appendChild(spnBr1);
        } else if (strRoleName != '无') {
          divRoleNames.appendChild(spnBr1);
        }
      }
      objQxPrjMenus.roleNames = divRoleNames.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function QxPrjMenusEx_BindDdl_MenuIdByMenuSetIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strQxPrjId: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_MenuIdByMenuSetIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_MenuIdByMenuSetIdInDivCache");
  const strCondition = `${clsQxPrjMenusEN.con_QxPrjId} = '${strQxPrjId}' and ${clsQxPrjMenusEN.con_InUse} = '1'`;
  let arrObjLstSel = await QxPrjMenus_GetObjLstAsync(strCondition);

  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsQxPrjMenusEN.con_MenuId,
    clsQxPrjMenusEN.con_MenuName,
    '工程菜单',
  );
}
