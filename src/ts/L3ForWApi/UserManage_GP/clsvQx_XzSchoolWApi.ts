/**
 * 类名:clsvQx_XzSchoolWApi
 * 表名:vQx_XzSchool(00140131)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/01 23:49:20
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vQx_XzSchool(vQx_XzSchool)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2026年04月01日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import {
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvQx_XzSchoolEN } from '@/ts/L0Entity/UserManage_GP/clsvQx_XzSchoolEN';
import { clsSysPara4WebApi, GetWebApiUrl_GP } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vQx_XzSchool_Controller = 'vQx_XzSchoolApi';
export const vQx_XzSchool_ConstructorName = 'vQx_XzSchool';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strId_School:关键字
 * @returns 对象
 **/
export async function vQx_XzSchool_GetObjById_SchoolAsync(
  strId_School: string,
): Promise<clsvQx_XzSchoolEN | null> {
  const strThisFuncName = 'GetObjById_SchoolAsync';

  if (IsNullOrEmpty(strId_School) == true) {
    const strMsg = Format(
      '参数:[strId_School]不能为空!(In clsvQx_XzSchoolWApi.GetObjById_SchoolAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strId_School.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strId_School]的长度:[{0}]不正确!(clsvQx_XzSchoolWApi.GetObjById_SchoolAsync)',
      strId_School.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjById_School';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strId_School,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objvQx_XzSchool = vQx_XzSchool_GetObjFromJsonObj(returnObj);
      return objvQx_XzSchool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strId_School:所给的关键字
 * @returns 对象
 */
export async function vQx_XzSchool_GetObjById_SchoollocalStorage(strId_School: string) {
  const strThisFuncName = 'GetObjById_SchoollocalStorage';

  if (IsNullOrEmpty(strId_School) == true) {
    const strMsg = Format(
      '参数:[strId_School]不能为空!(In clsvQx_XzSchoolWApi.GetObjById_SchoollocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strId_School.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strId_School]的长度:[{0}]不正确!(clsvQx_XzSchoolWApi.GetObjById_SchoollocalStorage)',
      strId_School.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvQx_XzSchoolEN._CurrTabName, strId_School);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvQx_XzSchoolCache: clsvQx_XzSchoolEN = JSON.parse(strTempObj);
    return objvQx_XzSchoolCache;
  }
  try {
    const objvQx_XzSchool = await vQx_XzSchool_GetObjById_SchoolAsync(strId_School);
    if (objvQx_XzSchool != null) {
      localStorage.setItem(strKey, JSON.stringify(objvQx_XzSchool));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvQx_XzSchool;
    }
    return objvQx_XzSchool;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strId_School,
      vQx_XzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strId_School:所给的关键字
 * @returns 对象
 */
export async function vQx_XzSchool_GetObjById_SchoolCache(
  strId_School: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjById_SchoolCache';

  if (IsNullOrEmpty(strId_School) == true) {
    const strMsg = Format(
      '参数:[strId_School]不能为空!(In clsvQx_XzSchoolWApi.GetObjById_SchoolCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strId_School.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strId_School]的长度:[{0}]不正确!(clsvQx_XzSchoolWApi.GetObjById_SchoolCache)',
      strId_School.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstCache();
  try {
    const arrvQx_XzSchoolSel = arrvQx_XzSchoolObjLstCache.filter(
      (x) => x.id_School == strId_School,
    );
    let objvQx_XzSchool: clsvQx_XzSchoolEN;
    if (arrvQx_XzSchoolSel.length > 0) {
      objvQx_XzSchool = arrvQx_XzSchoolSel[0];
      return objvQx_XzSchool;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvQx_XzSchoolConst = await vQx_XzSchool_GetObjById_SchoolAsync(strId_School);
        if (objvQx_XzSchoolConst != null) {
          vQx_XzSchool_ReFreshThisCache();
          return objvQx_XzSchoolConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strId_School,
      vQx_XzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQx_XzSchool_SortFunDefa(a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN): number {
  return a.id_School.localeCompare(b.id_School);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQx_XzSchool_SortFunDefa2Fld(a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN): number {
  if (a.schoolId == b.schoolId) return a.schoolName.localeCompare(b.schoolName);
  else return a.schoolId.localeCompare(b.schoolId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQx_XzSchool_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvQx_XzSchoolEN.con_Id_School:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          return a.id_School.localeCompare(b.id_School);
        };
      case clsvQx_XzSchoolEN.con_SchoolId:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          return a.schoolId.localeCompare(b.schoolId);
        };
      case clsvQx_XzSchoolEN.con_SchoolName:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          return a.schoolName.localeCompare(b.schoolName);
        };
      case clsvQx_XzSchoolEN.con_SchoolTypeId:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          if (a.schoolTypeId == null) return -1;
          if (b.schoolTypeId == null) return 1;
          return a.schoolTypeId.localeCompare(b.schoolTypeId);
        };
      case clsvQx_XzSchoolEN.con_SchoolTypeName:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          if (a.schoolTypeName == null) return -1;
          if (b.schoolTypeName == null) return 1;
          return a.schoolTypeName.localeCompare(b.schoolTypeName);
        };
      case clsvQx_XzSchoolEN.con_Memo:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvQx_XzSchoolEN.con_IsCurrentUse:
        return (a: clsvQx_XzSchoolEN) => {
          if (a.isCurrentUse == true) return 1;
          else return -1;
        };
      case clsvQx_XzSchoolEN.con_SchoolNameA:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          return a.schoolNameA.localeCompare(b.schoolNameA);
        };
      case clsvQx_XzSchoolEN.con_UpdDate:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvQx_XzSchoolEN.con_UpdUserId:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vQx_XzSchool]中不存在!(in ${vQx_XzSchool_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvQx_XzSchoolEN.con_Id_School:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          return b.id_School.localeCompare(a.id_School);
        };
      case clsvQx_XzSchoolEN.con_SchoolId:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          return b.schoolId.localeCompare(a.schoolId);
        };
      case clsvQx_XzSchoolEN.con_SchoolName:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          return b.schoolName.localeCompare(a.schoolName);
        };
      case clsvQx_XzSchoolEN.con_SchoolTypeId:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          if (b.schoolTypeId == null) return -1;
          if (a.schoolTypeId == null) return 1;
          return b.schoolTypeId.localeCompare(a.schoolTypeId);
        };
      case clsvQx_XzSchoolEN.con_SchoolTypeName:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          if (b.schoolTypeName == null) return -1;
          if (a.schoolTypeName == null) return 1;
          return b.schoolTypeName.localeCompare(a.schoolTypeName);
        };
      case clsvQx_XzSchoolEN.con_Memo:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvQx_XzSchoolEN.con_IsCurrentUse:
        return (b: clsvQx_XzSchoolEN) => {
          if (b.isCurrentUse == true) return 1;
          else return -1;
        };
      case clsvQx_XzSchoolEN.con_SchoolNameA:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          return b.schoolNameA.localeCompare(a.schoolNameA);
        };
      case clsvQx_XzSchoolEN.con_UpdDate:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvQx_XzSchoolEN.con_UpdUserId:
        return (a: clsvQx_XzSchoolEN, b: clsvQx_XzSchoolEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vQx_XzSchool]中不存在!(in ${vQx_XzSchool_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strId_School:所给的关键字
 * @returns 对象
 */
export async function vQx_XzSchool_GetNameById_SchoolCache(strId_School: string) {
  if (IsNullOrEmpty(strId_School) == true) {
    const strMsg = Format(
      '参数:[strId_School]不能为空!(In clsvQx_XzSchoolWApi.GetNameById_SchoolCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strId_School.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strId_School]的长度:[{0}]不正确!(clsvQx_XzSchoolWApi.GetNameById_SchoolCache)',
      strId_School.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstCache();
  if (arrvQx_XzSchoolObjLstCache == null) return '';
  try {
    const arrvQx_XzSchoolSel = arrvQx_XzSchoolObjLstCache.filter(
      (x) => x.id_School == strId_School,
    );
    let objvQx_XzSchool: clsvQx_XzSchoolEN;
    if (arrvQx_XzSchoolSel.length > 0) {
      objvQx_XzSchool = arrvQx_XzSchoolSel[0];
      return objvQx_XzSchool.schoolName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strId_School,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vQx_XzSchool_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvQx_XzSchoolEN.con_Id_School:
      return (obj: clsvQx_XzSchoolEN) => {
        return obj.id_School === value;
      };
    case clsvQx_XzSchoolEN.con_SchoolId:
      return (obj: clsvQx_XzSchoolEN) => {
        return obj.schoolId === value;
      };
    case clsvQx_XzSchoolEN.con_SchoolName:
      return (obj: clsvQx_XzSchoolEN) => {
        return obj.schoolName === value;
      };
    case clsvQx_XzSchoolEN.con_SchoolTypeId:
      return (obj: clsvQx_XzSchoolEN) => {
        return obj.schoolTypeId === value;
      };
    case clsvQx_XzSchoolEN.con_SchoolTypeName:
      return (obj: clsvQx_XzSchoolEN) => {
        return obj.schoolTypeName === value;
      };
    case clsvQx_XzSchoolEN.con_Memo:
      return (obj: clsvQx_XzSchoolEN) => {
        return obj.memo === value;
      };
    case clsvQx_XzSchoolEN.con_IsCurrentUse:
      return (obj: clsvQx_XzSchoolEN) => {
        return obj.isCurrentUse === value;
      };
    case clsvQx_XzSchoolEN.con_SchoolNameA:
      return (obj: clsvQx_XzSchoolEN) => {
        return obj.schoolNameA === value;
      };
    case clsvQx_XzSchoolEN.con_UpdDate:
      return (obj: clsvQx_XzSchoolEN) => {
        return obj.updDate === value;
      };
    case clsvQx_XzSchoolEN.con_UpdUserId:
      return (obj: clsvQx_XzSchoolEN) => {
        return obj.updUserId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vQx_XzSchool]中不存在!(in ${vQx_XzSchool_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vQx_XzSchool_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvQx_XzSchoolEN.con_Id_School) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvQx_XzSchoolEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvQx_XzSchoolEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strId_School = strInValue;
  if (IsNullOrEmpty(strId_School) == true) {
    return '';
  }
  const objvQx_XzSchool = await vQx_XzSchool_GetObjById_SchoolCache(strId_School);
  if (objvQx_XzSchool == null) return '';
  if (objvQx_XzSchool.GetFldValue(strOutFldName) == null) return '';
  return objvQx_XzSchool.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function vQx_XzSchool_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvQx_XzSchoolEN.con_Id_School) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvQx_XzSchool = await vQx_XzSchool_GetObjLstCache();
  if (arrvQx_XzSchool == null) return [];
  let arrvQx_XzSchoolSel = arrvQx_XzSchool;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvQx_XzSchoolSel.length == 0) return [];
  return arrvQx_XzSchoolSel.map((x) => x.id_School);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vQx_XzSchool_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vQx_XzSchool_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 */
export async function vQx_XzSchool_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export async function vQx_XzSchool_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvQx_XzSchoolEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objvQx_XzSchool = vQx_XzSchool_GetObjFromJsonObj(returnObj);
      return objvQx_XzSchool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQx_XzSchool_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvQx_XzSchoolEN._CurrTabName;
  if (IsNullOrEmpty(clsvQx_XzSchoolEN._WhereFormat) == false) {
    strWhereCond = clsvQx_XzSchoolEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsvQx_XzSchoolEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQx_XzSchoolEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvQx_XzSchoolExObjLstCache: Array<clsvQx_XzSchoolEN> = CacheHelper.Get(strKey);
    const arrvQx_XzSchoolObjLstT = vQx_XzSchool_GetObjLstByJSONObjLst(arrvQx_XzSchoolExObjLstCache);
    return arrvQx_XzSchoolObjLstT;
  }
  try {
    const arrvQx_XzSchoolExObjLst = await vQx_XzSchool_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvQx_XzSchoolExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQx_XzSchoolExObjLst.length,
    );
    console.log(strInfo);
    return arrvQx_XzSchoolExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQx_XzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQx_XzSchool_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvQx_XzSchoolEN._CurrTabName;
  if (IsNullOrEmpty(clsvQx_XzSchoolEN._WhereFormat) == false) {
    strWhereCond = clsvQx_XzSchoolEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsvQx_XzSchoolEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQx_XzSchoolEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvQx_XzSchoolExObjLstCache: Array<clsvQx_XzSchoolEN> = JSON.parse(strTempObjLst);
    const arrvQx_XzSchoolObjLstT = vQx_XzSchool_GetObjLstByJSONObjLst(arrvQx_XzSchoolExObjLstCache);
    return arrvQx_XzSchoolObjLstT;
  }
  try {
    const arrvQx_XzSchoolExObjLst = await vQx_XzSchool_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvQx_XzSchoolExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQx_XzSchoolExObjLst.length,
    );
    console.log(strInfo);
    return arrvQx_XzSchoolExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQx_XzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQx_XzSchool_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvQx_XzSchoolEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvQx_XzSchoolObjLstCache: Array<clsvQx_XzSchoolEN> = JSON.parse(strTempObjLst);
    return arrvQx_XzSchoolObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vQx_XzSchool_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvQx_XzSchoolEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQx_XzSchool_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQx_XzSchool_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQx_XzSchool_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvQx_XzSchoolEN._CurrTabName;
  if (IsNullOrEmpty(clsvQx_XzSchoolEN._WhereFormat) == false) {
    strWhereCond = clsvQx_XzSchoolEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsvQx_XzSchoolEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQx_XzSchoolEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvQx_XzSchoolExObjLstCache: Array<clsvQx_XzSchoolEN> = JSON.parse(strTempObjLst);
    const arrvQx_XzSchoolObjLstT = vQx_XzSchool_GetObjLstByJSONObjLst(arrvQx_XzSchoolExObjLstCache);
    return arrvQx_XzSchoolObjLstT;
  }
  try {
    const arrvQx_XzSchoolExObjLst = await vQx_XzSchool_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvQx_XzSchoolExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQx_XzSchoolExObjLst.length,
    );
    console.log(strInfo);
    return arrvQx_XzSchoolExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQx_XzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQx_XzSchool_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvQx_XzSchoolEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvQx_XzSchoolObjLstCache: Array<clsvQx_XzSchoolEN> = JSON.parse(strTempObjLst);
    return arrvQx_XzSchoolObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQx_XzSchool_GetObjLstCache(): Promise<Array<clsvQx_XzSchoolEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvQx_XzSchoolObjLstCache;
  switch (clsvQx_XzSchoolEN._CacheModeId) {
    case '04': //sessionStorage
      arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstClientCache();
      break;
    default:
      arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstClientCache();
      break;
  }
  return arrvQx_XzSchoolObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQx_XzSchool_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvQx_XzSchoolObjLstCache;
  switch (clsvQx_XzSchoolEN._CacheModeId) {
    case '04': //sessionStorage
      arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvQx_XzSchoolObjLstCache = null;
      break;
    default:
      arrvQx_XzSchoolObjLstCache = null;
      break;
  }
  return arrvQx_XzSchoolObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrId_SchoolCond:条件对象
 * @returns 对象列表子集
 */
export async function vQx_XzSchool_GetSubObjLstCache(objvQx_XzSchoolCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstCache();
  let arrvQx_XzSchoolSel = arrvQx_XzSchoolObjLstCache;
  if (objvQx_XzSchoolCond.GetConditions().length == 0) return arrvQx_XzSchoolSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvQx_XzSchoolCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvQx_XzSchoolSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvQx_XzSchoolCond),
      vQx_XzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvQx_XzSchoolEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrId_School:关键字列表
 * @returns 对象列表
 **/
export async function vQx_XzSchool_GetObjLstById_SchoolLstAsync(
  arrId_School: Array<string>,
): Promise<Array<clsvQx_XzSchoolEN>> {
  const strThisFuncName = 'GetObjLstById_SchoolLstAsync';
  const strAction = 'GetObjLstById_SchoolLst';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrId_School, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQx_XzSchool_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQx_XzSchool_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrId_SchoolLst:关键字列表
 * @returns 对象列表
 */
export async function vQx_XzSchool_GetObjLstById_SchoolLstCache(arrId_SchoolLst: Array<string>) {
  const strThisFuncName = 'GetObjLstById_SchoolLstCache';
  try {
    const arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstCache();
    const arrvQx_XzSchoolSel = arrvQx_XzSchoolObjLstCache.filter(
      (x) => arrId_SchoolLst.indexOf(x.id_School) > -1,
    );
    return arrvQx_XzSchoolSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrId_SchoolLst.join(','),
      vQx_XzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
}

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function vQx_XzSchool_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvQx_XzSchoolEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQx_XzSchool_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQx_XzSchool_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vQx_XzSchool_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvQx_XzSchoolEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRangePara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQx_XzSchool_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQx_XzSchool_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrId_SchoolCond:条件对象
 * @returns 对象列表子集
 */
export async function vQx_XzSchool_IsExistRecordCache(objvQx_XzSchoolCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstCache();
  if (arrvQx_XzSchoolObjLstCache == null) return false;
  let arrvQx_XzSchoolSel = arrvQx_XzSchoolObjLstCache;
  if (objvQx_XzSchoolCond.GetConditions().length == 0)
    return arrvQx_XzSchoolSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvQx_XzSchoolCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvQx_XzSchoolSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvQx_XzSchoolCond),
      vQx_XzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return false;
}

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function vQx_XzSchool_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strId_School:所给的关键字
 * @returns 对象
 */
export async function vQx_XzSchool_IsExistCache(strId_School: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstCache();
  if (arrvQx_XzSchoolObjLstCache == null) return false;
  try {
    const arrvQx_XzSchoolSel = arrvQx_XzSchoolObjLstCache.filter(
      (x) => x.id_School == strId_School,
    );
    if (arrvQx_XzSchoolSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strId_School,
      vQx_XzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return false;
}

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strId_School:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vQx_XzSchool_IsExistAsync(strId_School: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strId_School,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export async function vQx_XzSchool_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl_GP(vQx_XzSchool_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzSchool_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objvQx_XzSchoolCond:条件对象
 * @returns 对象列表记录数
 */
export async function vQx_XzSchool_GetRecCountByCondCache(
  objvQx_XzSchoolCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvQx_XzSchoolObjLstCache = await vQx_XzSchool_GetObjLstCache();
  if (arrvQx_XzSchoolObjLstCache == null) return 0;
  let arrvQx_XzSchoolSel = arrvQx_XzSchoolObjLstCache;
  if (objvQx_XzSchoolCond.GetConditions().length == 0) return arrvQx_XzSchoolSel.length;
  try {
    for (const objCondition of objvQx_XzSchoolCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvQx_XzSchoolSel = arrvQx_XzSchoolSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvQx_XzSchoolSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvQx_XzSchoolCond),
      vQx_XzSchool_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vQx_XzSchool_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vQx_XzSchool_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvQx_XzSchoolEN._CurrTabName;
    switch (clsvQx_XzSchoolEN._CacheModeId) {
      case '04': //sessionStorage
        sessionStorage.removeItem(strKey);
        break;
      case '03': //localStorage
        localStorage.removeItem(strKey);
        break;
      case '02': //ClientCache
        CacheHelper.Remove(strKey);
        break;
      default:
        CacheHelper.Remove(strKey);
        break;
    }
    clsvQx_XzSchoolEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/**
 * 获取最新的缓存刷新时间
 * @returns 最新的缓存刷新时间，字符串型
 **/
export function vQx_XzSchool_GetLastRefreshTime(): string {
  if (clsvQx_XzSchoolEN._RefreshTimeLst.length == 0) return '';
  return clsvQx_XzSchoolEN._RefreshTimeLst[clsvQx_XzSchoolEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function vQx_XzSchool_BindDdl_Id_SchoolInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_Id_SchoolInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_Id_SchoolInDivCache");
  const arrObjLstSel = await vQx_XzSchool_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvQx_XzSchoolEN.con_Id_School,
    clsvQx_XzSchoolEN.con_SchoolName,
    '选vQx_XzSchool...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function vQx_XzSchool_GetArrvQx_XzSchool() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_Id_SchoolInDivCache");
  const arrvQx_XzSchool = new Array<clsvQx_XzSchoolEN>();
  const arrObjLstSel = await vQx_XzSchool_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsvQx_XzSchoolEN();
  obj0.id_School = '0';
  obj0.schoolName = '选vQx_XzSchool...';
  arrvQx_XzSchool.push(obj0);
  arrObjLstSel.forEach((x) => arrvQx_XzSchool.push(x));
  return arrvQx_XzSchool;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vQx_XzSchool_GetJSONStrByObj(pobjvQx_XzSchoolEN: clsvQx_XzSchoolEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvQx_XzSchoolEN);
  } catch (objException) {
    const strEx = GetExceptionStr(objException);
    myShowErrorMsg(strEx);
  }
  if (strJson == undefined) return '';
  else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vQx_XzSchool_GetObjLstByJSONStr(strJSON: string): Array<clsvQx_XzSchoolEN> {
  let arrvQx_XzSchoolObjLst = new Array<clsvQx_XzSchoolEN>();
  if (strJSON === '') {
    return arrvQx_XzSchoolObjLst;
  }
  try {
    arrvQx_XzSchoolObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvQx_XzSchoolObjLst;
  }
  return arrvQx_XzSchoolObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQx_XzSchoolObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vQx_XzSchool_GetObjLstByJSONObjLst(
  arrvQx_XzSchoolObjLstS: Array<clsvQx_XzSchoolEN>,
): Array<clsvQx_XzSchoolEN> {
  const arrvQx_XzSchoolObjLst = new Array<clsvQx_XzSchoolEN>();
  for (const objInFor of arrvQx_XzSchoolObjLstS) {
    const obj1 = vQx_XzSchool_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvQx_XzSchoolObjLst.push(obj1);
  }
  return arrvQx_XzSchoolObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vQx_XzSchool_GetObjByJSONStr(strJSON: string): clsvQx_XzSchoolEN {
  let pobjvQx_XzSchoolEN = new clsvQx_XzSchoolEN();
  if (strJSON === '') {
    return pobjvQx_XzSchoolEN;
  }
  try {
    pobjvQx_XzSchoolEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvQx_XzSchoolEN;
  }
  return pobjvQx_XzSchoolEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vQx_XzSchool_GetCombineCondition(objvQx_XzSchoolCond: clsvQx_XzSchoolEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzSchoolCond.dicFldComparisonOp,
      clsvQx_XzSchoolEN.con_Id_School,
    ) == true
  ) {
    const strComparisonOpId_School: string =
      objvQx_XzSchoolCond.dicFldComparisonOp[clsvQx_XzSchoolEN.con_Id_School];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzSchoolEN.con_Id_School,
      objvQx_XzSchoolCond.id_School,
      strComparisonOpId_School,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzSchoolCond.dicFldComparisonOp,
      clsvQx_XzSchoolEN.con_SchoolId,
    ) == true
  ) {
    const strComparisonOpSchoolId: string =
      objvQx_XzSchoolCond.dicFldComparisonOp[clsvQx_XzSchoolEN.con_SchoolId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzSchoolEN.con_SchoolId,
      objvQx_XzSchoolCond.schoolId,
      strComparisonOpSchoolId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzSchoolCond.dicFldComparisonOp,
      clsvQx_XzSchoolEN.con_SchoolName,
    ) == true
  ) {
    const strComparisonOpSchoolName: string =
      objvQx_XzSchoolCond.dicFldComparisonOp[clsvQx_XzSchoolEN.con_SchoolName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzSchoolEN.con_SchoolName,
      objvQx_XzSchoolCond.schoolName,
      strComparisonOpSchoolName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzSchoolCond.dicFldComparisonOp,
      clsvQx_XzSchoolEN.con_SchoolTypeId,
    ) == true
  ) {
    const strComparisonOpSchoolTypeId: string =
      objvQx_XzSchoolCond.dicFldComparisonOp[clsvQx_XzSchoolEN.con_SchoolTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzSchoolEN.con_SchoolTypeId,
      objvQx_XzSchoolCond.schoolTypeId,
      strComparisonOpSchoolTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzSchoolCond.dicFldComparisonOp,
      clsvQx_XzSchoolEN.con_SchoolTypeName,
    ) == true
  ) {
    const strComparisonOpSchoolTypeName: string =
      objvQx_XzSchoolCond.dicFldComparisonOp[clsvQx_XzSchoolEN.con_SchoolTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzSchoolEN.con_SchoolTypeName,
      objvQx_XzSchoolCond.schoolTypeName,
      strComparisonOpSchoolTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzSchoolCond.dicFldComparisonOp,
      clsvQx_XzSchoolEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvQx_XzSchoolCond.dicFldComparisonOp[clsvQx_XzSchoolEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzSchoolEN.con_Memo,
      objvQx_XzSchoolCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzSchoolCond.dicFldComparisonOp,
      clsvQx_XzSchoolEN.con_IsCurrentUse,
    ) == true
  ) {
    if (objvQx_XzSchoolCond.isCurrentUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvQx_XzSchoolEN.con_IsCurrentUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvQx_XzSchoolEN.con_IsCurrentUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzSchoolCond.dicFldComparisonOp,
      clsvQx_XzSchoolEN.con_SchoolNameA,
    ) == true
  ) {
    const strComparisonOpSchoolNameA: string =
      objvQx_XzSchoolCond.dicFldComparisonOp[clsvQx_XzSchoolEN.con_SchoolNameA];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzSchoolEN.con_SchoolNameA,
      objvQx_XzSchoolCond.schoolNameA,
      strComparisonOpSchoolNameA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzSchoolCond.dicFldComparisonOp,
      clsvQx_XzSchoolEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvQx_XzSchoolCond.dicFldComparisonOp[clsvQx_XzSchoolEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzSchoolEN.con_UpdDate,
      objvQx_XzSchoolCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzSchoolCond.dicFldComparisonOp,
      clsvQx_XzSchoolEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objvQx_XzSchoolCond.dicFldComparisonOp[clsvQx_XzSchoolEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzSchoolEN.con_UpdUserId,
      objvQx_XzSchoolCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQx_XzSchoolENS:源对象
 * @param objvQx_XzSchoolENT:目标对象
 */
export function vQx_XzSchool_GetObjFromJsonObj(
  objvQx_XzSchoolENS: clsvQx_XzSchoolEN,
): clsvQx_XzSchoolEN {
  const objvQx_XzSchoolENT: clsvQx_XzSchoolEN = new clsvQx_XzSchoolEN();
  ObjectAssign(objvQx_XzSchoolENT, objvQx_XzSchoolENS);
  return objvQx_XzSchoolENT;
}
