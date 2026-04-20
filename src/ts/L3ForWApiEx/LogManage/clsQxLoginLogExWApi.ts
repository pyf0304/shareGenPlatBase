/**
 * 类名:clsQxLoginLogExWApi
 * 表名:QxLoginLog(00140137)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/02 11:53:41
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日志管理(LogManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 登录日志(QxLoginLog)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2026年04月02日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { clsQxLoginLogENEx } from '@/ts/L0Entity/LogManage/clsQxLoginLogENEx';
import { QxLoginLog_SortFunByKey } from '@/ts/L3ForWApi/LogManage/clsQxLoginLogWApi';
import { clsQxLoginLogEN } from '@/ts/L0Entity/LogManage/clsQxLoginLogEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

export const qxLoginLogEx_Controller = 'QxLoginLogExApi';
export const qxLoginLogEx_ConstructorName = 'qxLoginLogEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxLoginLogEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxLoginLogENS:源对象
 * @returns 目标对象=>clsQxLoginLogEN:objQxLoginLogENT
 **/
export function QxLoginLogEx_CopyToEx(objQxLoginLogENS: clsQxLoginLogEN): clsQxLoginLogENEx {
  const strThisFuncName = QxLoginLogEx_CopyToEx.name;
  const objQxLoginLogENT = new clsQxLoginLogENEx();
  try {
    ObjectAssign(objQxLoginLogENT, objQxLoginLogENS);
    return objQxLoginLogENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxLoginLogEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxLoginLogENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxLoginLogEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxLoginLog_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxLoginLog_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxLoginLogEx_FuncMapByFldName(
  strFldName: string,
  objQxLoginLogEx: clsQxLoginLogENEx,
) {
  const strThisFuncName = QxLoginLogEx_FuncMapByFldName.name;
  console.log(objQxLoginLogEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxLoginLogEN._AttributeName;
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
