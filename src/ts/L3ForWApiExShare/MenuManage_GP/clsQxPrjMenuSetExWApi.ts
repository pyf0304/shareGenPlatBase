/**
 * 类名:clsQxPrjMenuSetExWApi
 * 表名:QxPrjMenuSet(00140045)
 * 版本:2024.02.03.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/04 16:22:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 菜单集(QxPrjMenuSet)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/

import { qxPrjMenuSetCache } from '@/viewsShare/MenuManage_GP/QxPrjMenuSetVueShare';
import { isFuncMapCache } from '@/viewsShare/MenuManage_GP/QxPrjMenuSetVueShare';
import {
  ObjectAssign,
  GetSortExpressInfo,
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxPrjMenuSet_GetObjLstCache,
  QxPrjMenuSet_GetObjLstAsync,
  QxPrjMenuSet_SortFunByKey,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxPrjMenuSetEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetEN';
import { clsQxPrjMenuSetENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const qxPrjMenuSetExController = 'QxPrjMenuSetExApi';
export const qxPrjMenuSetEx_ConstructorName = 'qxPrjMenuSetEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxPrjMenuSetEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxPrjMenuSetENS:源对象
 * @returns 目标对象=>clsQxPrjMenuSetEN:objQxPrjMenuSetENT
 **/
export function QxPrjMenuSetEx_CopyToEx(
  objQxPrjMenuSetENS: clsQxPrjMenuSetEN,
): clsQxPrjMenuSetENEx {
  const strThisFuncName = QxPrjMenuSetEx_CopyToEx.name;
  const objQxPrjMenuSetENT = new clsQxPrjMenuSetENEx();
  try {
    ObjectAssign(objQxPrjMenuSetENT, objQxPrjMenuSetENS);
    return objQxPrjMenuSetENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPrjMenuSetEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxPrjMenuSetENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxPrjMenuSetEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxPrjMenuSetENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxPrjMenuSetObjLst = await QxPrjMenuSet_GetObjLstAsync(objPagerPara.whereCond);
  const arrQxPrjMenuSetExObjLst = arrQxPrjMenuSetObjLst.map(QxPrjMenuSetEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxPrjMenuSetEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxPrjMenuSetExObjLst) {
      await QxPrjMenuSetEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxPrjMenuSetExObjLst.length == 0) return arrQxPrjMenuSetExObjLst;
  let arrQxPrjMenuSetSel: Array<clsQxPrjMenuSetENEx> = arrQxPrjMenuSetExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.sort(
        QxPrjMenuSetEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.sort(objPagerPara.sortFun);
    }
    arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.slice(intStart, intEnd);
    return arrQxPrjMenuSetSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxPrjMenuSetEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPrjMenuSetENEx>();
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
export function QxPrjMenuSetEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxPrjMenuSet_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxPrjMenuSet_SortFunByKey(strKey, AscOrDesc);
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
export function QxPrjMenuSetEx_FuncMapByFldName(
  strFldName: string,
  objQxPrjMenuSetEx: clsQxPrjMenuSetENEx,
) {
  const strThisFuncName = QxPrjMenuSetEx_FuncMapByFldName.name;
  console.log(objQxPrjMenuSetEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxPrjMenuSetEN.AttributeName;
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
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCmPrjId:
*/
export async function QxPrjMenuSetEx_BindDdl_MenuSetIdQxPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strQxPrjId: string,
) {
  if (IsNullOrEmpty(strQxPrjId) == true) {
    const strMsg = Format(
      '参数:[strQxPrjId]不能为空！(In clsQxPrjMenuSetWApi.BindDdl_MenuSetIdQxPrjIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQxPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsQxPrjMenuSetWApi.BindDdl_MenuSetIdQxPrjIdInDivCache)',
      strQxPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_MenuSetIdByCmPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_MenuSetIdByCmPrjIdInDivCache");
  let arrObjLstSel = await QxPrjMenuSet_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.qxPrjId == strQxPrjId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsQxPrjMenuSetEN.con_MenuSetId,
    clsQxPrjMenuSetEN.con_MenuSetName,
    '菜单集',
  );
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxPrjMenuSetEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxPrjMenuSetENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrQxPrjMenuSetObjLst = await QxPrjMenuSet_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsQxPrjMenuSetENEx>();
  const arrQxPrjMenuSetExObjLst = arrQxPrjMenuSetObjLst.map((obj) => {
    const cacheKey = `${obj.menuSetId}`;
    if (qxPrjMenuSetCache[cacheKey]) {
      const oldObj = qxPrjMenuSetCache[cacheKey];
      return oldObj;
    } else {
      const newObj = QxPrjMenuSetEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      qxPrjMenuSetCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await QxPrjMenuSetEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxPrjMenuSetEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrQxPrjMenuSetExObjLst) {
      await QxPrjMenuSetEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.menuSetId}`;
      qxPrjMenuSetCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrQxPrjMenuSetExObjLst.length == 0) return arrQxPrjMenuSetExObjLst;
  let arrQxPrjMenuSetSel: Array<clsQxPrjMenuSetENEx> = arrQxPrjMenuSetExObjLst;
  const objQxPrjMenuSetCond = objPagerPara.conditionCollection;
  if (objQxPrjMenuSetCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrQxPrjMenuSetExObjLst;
  }
  try {
    for (const objCondition of objQxPrjMenuSetCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxPrjMenuSetSel.length == 0) return arrQxPrjMenuSetSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.sort(
        QxPrjMenuSetEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.sort(objPagerPara.sortFun);
    }
    arrQxPrjMenuSetSel = arrQxPrjMenuSetSel.slice(intStart, intEnd);
    return arrQxPrjMenuSetSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxPrjMenuSetEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPrjMenuSetENEx>();
}
