/**
 * 类名:clsQxDepartmentTypeExWApi
 * 表名:QxDepartmentType(00140037)
 * 版本:2024.11.13.2(服务器:WIN-SRV103-116)
 * 日期:2024/11/16 08:54:16
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433MSEduSys
 * PrjDataBaseId:0199
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 部门类型(QxDepartmentType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月16日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxDepartmentType_GetObjLstCache,
  QxDepartmentType_SortFunByKey,
} from '@/ts/L3ForWApi/SysPara/clsQxDepartmentTypeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxDepartmentTypeEN } from '@/ts/L0Entity/SysPara/clsQxDepartmentTypeEN';
import { clsQxDepartmentTypeENEx } from '@/ts/L0Entity/SysPara/clsQxDepartmentTypeENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const qxDepartmentTypeExController = 'QxDepartmentTypeExApi';
export const qxDepartmentTypeEx_ConstructorName = 'qxDepartmentTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxDepartmentTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxDepartmentTypeENS:源对象
 * @returns 目标对象=>clsQxDepartmentTypeEN:objQxDepartmentTypeENT
 **/
export function QxDepartmentTypeEx_CopyToEx(
  objQxDepartmentTypeENS: clsQxDepartmentTypeEN,
): clsQxDepartmentTypeENEx {
  const strThisFuncName = QxDepartmentTypeEx_CopyToEx.name;
  const objQxDepartmentTypeENT = new clsQxDepartmentTypeENEx();
  try {
    ObjectAssign(objQxDepartmentTypeENT, objQxDepartmentTypeENS);
    return objQxDepartmentTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxDepartmentTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxDepartmentTypeENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-16
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxDepartmentTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxDepartmentType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxDepartmentType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-16
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxDepartmentTypeEx_FuncMapByFldName(
  strFldName: string,
  objQxDepartmentTypeEx: clsQxDepartmentTypeENEx,
) {
  const strThisFuncName = QxDepartmentTypeEx_FuncMapByFldName.name;
  console.log(objQxDepartmentTypeEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxDepartmentTypeEN.AttributeName;
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
