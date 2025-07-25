﻿/**
 * 类名:clsvQxUsersSimExWApi
 * 表名:vQxUsersSim(00140121)
 * 版本:2024.02.03.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/04 16:23:30
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
 * v用户Sim(vQxUsersSim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvQxUsersSimENEx } from '@/ts/L0Entity/UserManage_GP/clsvQxUsersSimENEx';
import {
  vQxUsersSim_GetObjLstAsync,
  vQxUsersSim_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsvQxUsersSimWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvQxUsersSimEN } from '@/ts/L0Entity/UserManage_GP/clsvQxUsersSimEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vQxUsersSimExController = 'vQxUsersSimExApi';
export const vQxUsersSimEx_ConstructorName = 'vQxUsersSimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vQxUsersSimEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvQxUsersSimENS:源对象
 * @returns 目标对象=>clsvQxUsersSimEN:objvQxUsersSimENT
 **/
export function vQxUsersSimEx_CopyToEx(objvQxUsersSimENS: clsvQxUsersSimEN): clsvQxUsersSimENEx {
  const strThisFuncName = vQxUsersSimEx_CopyToEx.name;
  const objvQxUsersSimENT = new clsvQxUsersSimENEx();
  try {
    ObjectAssign(objvQxUsersSimENT, objvQxUsersSimENS);
    return objvQxUsersSimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vQxUsersSimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvQxUsersSimENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vQxUsersSimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvQxUsersSimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvQxUsersSimObjLst = await vQxUsersSim_GetObjLstAsync(objPagerPara.whereCond);
  const arrvQxUsersSimExObjLst = arrvQxUsersSimObjLst.map(vQxUsersSimEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvQxUsersSimEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvQxUsersSimExObjLst) {
      await vQxUsersSimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvQxUsersSimExObjLst.length == 0) return arrvQxUsersSimExObjLst;
  let arrvQxUsersSimSel: Array<clsvQxUsersSimENEx> = arrvQxUsersSimExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvQxUsersSimSel = arrvQxUsersSimSel.sort(
        vQxUsersSimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvQxUsersSimSel = arrvQxUsersSimSel.sort(objPagerPara.sortFun);
    }
    arrvQxUsersSimSel = arrvQxUsersSimSel.slice(intStart, intEnd);
    return arrvQxUsersSimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vQxUsersSimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvQxUsersSimENEx>();
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
export function vQxUsersSimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vQxUsersSim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vQxUsersSim_SortFunByKey(strKey, AscOrDesc);
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
export function vQxUsersSimEx_FuncMapByFldName(
  strFldName: string,
  objvQxUsersSimEx: clsvQxUsersSimENEx,
) {
  const strThisFuncName = vQxUsersSimEx_FuncMapByFldName.name;
  console.log(objvQxUsersSimEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvQxUsersSimEN.AttributeName;
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function vQxUsersSimEx_GetArrvQxUsersSim(): Promise<Array<clsvQxUsersSimENEx>> {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_UserIdInDivCache");
  const arrvQxUsersSim = new Array<clsvQxUsersSimENEx>();
  const strCondition = `1=1`;
  let arrObjLstSel = await vQxUsersSim_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return arrvQxUsersSim;
  arrObjLstSel = arrObjLstSel.sort((a, b) => a.userName.localeCompare(b.userName));
  let arrvUsersSimEx = arrObjLstSel.map(vQxUsersSimEx_CopyToEx);
  arrvUsersSimEx = arrvUsersSimEx.map((x) => {
    x.userNameEx = `${x.userName}-${x.userId}`;
    return x;
  });
  const obj0 = new clsvQxUsersSimENEx();
  obj0.userId = '0';
  obj0.userNameEx = '选用户...';
  arrvQxUsersSim.push(obj0);
  arrvUsersSimEx.forEach((x) => arrvQxUsersSim.push(x));
  return arrvQxUsersSim;
}
