﻿/**
 * 类名:clsQxUserStateExWApi
 * 表名:QxUserState(01120926)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/12 11:41:34
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
 * 用户状态(QxUserState)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年12月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/

import { qxUserStateCache } from '@/viewsShare/UserManage_GP/QxUserStateVueShare';
import { isFuncMapCache } from '@/viewsShare/UserManage_GP/QxUserStateVueShare';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxUserState_GetObjLstCache,
  QxUserState_GetObjLstAsync,
  QxUserState_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUserStateWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxUserStateEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserStateEN';
import { clsQxUserStateENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUserStateENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const qxUserStateExController = 'QxUserStateExApi';
export const qxUserStateEx_ConstructorName = 'qxUserStateEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxUserStateEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxUserStateENS:源对象
 * @returns 目标对象=>clsQxUserStateEN:objQxUserStateENT
 **/
export function QxUserStateEx_CopyToEx(objQxUserStateENS: clsQxUserStateEN): clsQxUserStateENEx {
  const strThisFuncName = QxUserStateEx_CopyToEx.name;
  const objQxUserStateENT = new clsQxUserStateENEx();
  try {
    ObjectAssign(objQxUserStateENT, objQxUserStateENS);
    return objQxUserStateENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserStateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxUserStateENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUserStateEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUserStateENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxUserStateObjLst = await QxUserState_GetObjLstAsync(objPagerPara.whereCond);
  const arrQxUserStateExObjLst = arrQxUserStateObjLst.map(QxUserStateEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxUserStateEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxUserStateExObjLst) {
      await QxUserStateEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxUserStateExObjLst.length == 0) return arrQxUserStateExObjLst;
  let arrQxUserStateSel: Array<clsQxUserStateENEx> = arrQxUserStateExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxUserStateSel = arrQxUserStateSel.sort(
        QxUserStateEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxUserStateSel = arrQxUserStateSel.sort(objPagerPara.sortFun);
    }
    arrQxUserStateSel = arrQxUserStateSel.slice(intStart, intEnd);
    return arrQxUserStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUserStateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUserStateENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-12
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUserStateEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxUserState_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxUserState_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-12-12
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxUserStateEx_FuncMapByFldName(
  strFldName: string,
  objQxUserStateEx: clsQxUserStateENEx,
) {
  const strThisFuncName = QxUserStateEx_FuncMapByFldName.name;
  console.log(objQxUserStateEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxUserStateEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUserStateEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUserStateENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrQxUserStateObjLst = await QxUserState_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsQxUserStateENEx>();
  const arrQxUserStateExObjLst = arrQxUserStateObjLst.map((obj) => {
    const cacheKey = `${obj.userStateId}`;
    if (qxUserStateCache[cacheKey]) {
      const oldObj = qxUserStateCache[cacheKey];
      return oldObj;
    } else {
      const newObj = QxUserStateEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      qxUserStateCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await QxUserStateEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxUserStateEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrQxUserStateExObjLst) {
      await QxUserStateEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.userStateId}`;
      qxUserStateCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrQxUserStateExObjLst.length == 0) return arrQxUserStateExObjLst;
  let arrQxUserStateSel: Array<clsQxUserStateENEx> = arrQxUserStateExObjLst;
  const objQxUserStateCond = objPagerPara.conditionCollection;
  if (objQxUserStateCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrQxUserStateExObjLst;
  }
  try {
    for (const objCondition of objQxUserStateCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrQxUserStateSel = arrQxUserStateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxUserStateSel = arrQxUserStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxUserStateSel = arrQxUserStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxUserStateSel = arrQxUserStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxUserStateSel = arrQxUserStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxUserStateSel = arrQxUserStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxUserStateSel = arrQxUserStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxUserStateSel = arrQxUserStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQxUserStateSel = arrQxUserStateSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxUserStateSel = arrQxUserStateSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxUserStateSel = arrQxUserStateSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxUserStateSel = arrQxUserStateSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxUserStateSel = arrQxUserStateSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxUserStateSel = arrQxUserStateSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxUserStateSel = arrQxUserStateSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQxUserStateSel.length == 0) return arrQxUserStateSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrQxUserStateSel = arrQxUserStateSel.sort(
        QxUserStateEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxUserStateSel = arrQxUserStateSel.sort(objPagerPara.sortFun);
    }
    arrQxUserStateSel = arrQxUserStateSel.slice(intStart, intEnd);
    return arrQxUserStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUserStateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUserStateENEx>();
}
