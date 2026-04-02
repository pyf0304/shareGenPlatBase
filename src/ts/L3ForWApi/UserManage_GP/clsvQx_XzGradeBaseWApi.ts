/**
 * 类名:clsvQx_XzGradeBaseWApi
 * 表名:vQx_XzGradeBase(00140132)
 * 版本:2026.04.01.1(服务器:WIN-SRV103-116)
 * 日期:2026/04/02 11:20:52
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
 * vQx_XzGradeBase(vQx_XzGradeBase)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2026年04月02日.
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
import { clsvQx_XzGradeBaseEN } from '@/ts/L0Entity/UserManage_GP/clsvQx_XzGradeBaseEN';
import { clsSysPara4WebApi, GetWebApiUrl_GP } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vQx_XzGradeBase_Controller = 'vQx_XzGradeBaseApi';
export const vQx_XzGradeBase_ConstructorName = 'vQx_XzGradeBase';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strId_GradeBase:关键字
 * @returns 对象
 **/
export async function vQx_XzGradeBase_GetObjById_GradeBaseAsync(
  strId_GradeBase: string,
): Promise<clsvQx_XzGradeBaseEN | null> {
  const strThisFuncName = 'GetObjById_GradeBaseAsync';

  if (IsNullOrEmpty(strId_GradeBase) == true) {
    const strMsg = Format(
      '参数:[strId_GradeBase]不能为空!(In clsvQx_XzGradeBaseWApi.GetObjById_GradeBaseAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strId_GradeBase.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strId_GradeBase]的长度:[{0}]不正确!(clsvQx_XzGradeBaseWApi.GetObjById_GradeBaseAsync)',
      strId_GradeBase.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjById_GradeBase';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strId_GradeBase,
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
      const objvQx_XzGradeBase = vQx_XzGradeBase_GetObjFromJsonObj(returnObj);
      return objvQx_XzGradeBase;
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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
 * @param strId_GradeBase:所给的关键字
 * @returns 对象
 */
export async function vQx_XzGradeBase_GetObjById_GradeBaselocalStorage(strId_GradeBase: string) {
  const strThisFuncName = 'GetObjById_GradeBaselocalStorage';

  if (IsNullOrEmpty(strId_GradeBase) == true) {
    const strMsg = Format(
      '参数:[strId_GradeBase]不能为空!(In clsvQx_XzGradeBaseWApi.GetObjById_GradeBaselocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strId_GradeBase.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strId_GradeBase]的长度:[{0}]不正确!(clsvQx_XzGradeBaseWApi.GetObjById_GradeBaselocalStorage)',
      strId_GradeBase.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvQx_XzGradeBaseEN._CurrTabName, strId_GradeBase);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvQx_XzGradeBaseCache: clsvQx_XzGradeBaseEN = JSON.parse(strTempObj);
    return objvQx_XzGradeBaseCache;
  }
  try {
    const objvQx_XzGradeBase = await vQx_XzGradeBase_GetObjById_GradeBaseAsync(strId_GradeBase);
    if (objvQx_XzGradeBase != null) {
      localStorage.setItem(strKey, JSON.stringify(objvQx_XzGradeBase));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvQx_XzGradeBase;
    }
    return objvQx_XzGradeBase;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strId_GradeBase,
      vQx_XzGradeBase_ConstructorName,
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
 * @param strId_GradeBase:所给的关键字
 * @returns 对象
 */
export async function vQx_XzGradeBase_GetObjById_GradeBaseCache(
  strId_GradeBase: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjById_GradeBaseCache';

  if (IsNullOrEmpty(strId_GradeBase) == true) {
    const strMsg = Format(
      '参数:[strId_GradeBase]不能为空!(In clsvQx_XzGradeBaseWApi.GetObjById_GradeBaseCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strId_GradeBase.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strId_GradeBase]的长度:[{0}]不正确!(clsvQx_XzGradeBaseWApi.GetObjById_GradeBaseCache)',
      strId_GradeBase.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstCache();
  try {
    const arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseObjLstCache.filter(
      (x) => x.id_GradeBase == strId_GradeBase,
    );
    let objvQx_XzGradeBase: clsvQx_XzGradeBaseEN;
    if (arrvQx_XzGradeBaseSel.length > 0) {
      objvQx_XzGradeBase = arrvQx_XzGradeBaseSel[0];
      return objvQx_XzGradeBase;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvQx_XzGradeBaseConst =
          await vQx_XzGradeBase_GetObjById_GradeBaseAsync(strId_GradeBase);
        if (objvQx_XzGradeBaseConst != null) {
          vQx_XzGradeBase_ReFreshThisCache();
          return objvQx_XzGradeBaseConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strId_GradeBase,
      vQx_XzGradeBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQx_XzGradeBase_SortFunDefa(
  a: clsvQx_XzGradeBaseEN,
  b: clsvQx_XzGradeBaseEN,
): number {
  return a.id_GradeBase.localeCompare(b.id_GradeBase);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQx_XzGradeBase_SortFunDefa2Fld(
  a: clsvQx_XzGradeBaseEN,
  b: clsvQx_XzGradeBaseEN,
): number {
  if (a.gradeBaseId == b.gradeBaseId) return a.gradeBaseName.localeCompare(b.gradeBaseName);
  else return a.gradeBaseId.localeCompare(b.gradeBaseId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQx_XzGradeBase_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvQx_XzGradeBaseEN.con_Id_GradeBase:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return a.id_GradeBase.localeCompare(b.id_GradeBase);
        };
      case clsvQx_XzGradeBaseEN.con_GradeBaseId:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return a.gradeBaseId.localeCompare(b.gradeBaseId);
        };
      case clsvQx_XzGradeBaseEN.con_GradeBaseName:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsvQx_XzGradeBaseEN.con_SchoolYear:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return a.schoolYear.localeCompare(b.schoolYear);
        };
      case clsvQx_XzGradeBaseEN.con_SchoolTerm:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return a.schoolTerm.localeCompare(b.schoolTerm);
        };
      case clsvQx_XzGradeBaseEN.con_EnterSchoolDate:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.enterSchoolDate == null) return -1;
          if (b.enterSchoolDate == null) return 1;
          return a.enterSchoolDate.localeCompare(b.enterSchoolDate);
        };
      case clsvQx_XzGradeBaseEN.con_CurrentTermSeq:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return a.currentTermSeq - b.currentTermSeq;
        };
      case clsvQx_XzGradeBaseEN.con_ExecPlanTermIndex:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return a.execPlanTermIndex - b.execPlanTermIndex;
        };
      case clsvQx_XzGradeBaseEN.con_SetEPTermIndexDate:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.setEPTermIndexDate == null) return -1;
          if (b.setEPTermIndexDate == null) return 1;
          return a.setEPTermIndexDate.localeCompare(b.setEPTermIndexDate);
        };
      case clsvQx_XzGradeBaseEN.con_IsOffed:
        return (a: clsvQx_XzGradeBaseEN) => {
          if (a.isOffed == true) return 1;
          else return -1;
        };
      case clsvQx_XzGradeBaseEN.con_ModifyDate:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.modifyDate == null) return -1;
          if (b.modifyDate == null) return 1;
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      case clsvQx_XzGradeBaseEN.con_ModifyUserId:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.modifyUserId == null) return -1;
          if (b.modifyUserId == null) return 1;
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsvQx_XzGradeBaseEN.con_PointCalcVersionId:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.pointCalcVersionId == null) return -1;
          if (b.pointCalcVersionId == null) return 1;
          return a.pointCalcVersionId.localeCompare(b.pointCalcVersionId);
        };
      case clsvQx_XzGradeBaseEN.con_GradeBaseNameA:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.gradeBaseNameA == null) return -1;
          if (b.gradeBaseNameA == null) return 1;
          return a.gradeBaseNameA.localeCompare(b.gradeBaseNameA);
        };
      case clsvQx_XzGradeBaseEN.con_BeginYearMonth:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.beginYearMonth == null) return -1;
          if (b.beginYearMonth == null) return 1;
          return a.beginYearMonth.localeCompare(b.beginYearMonth);
        };
      case clsvQx_XzGradeBaseEN.con_EndYearMonth:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.endYearMonth == null) return -1;
          if (b.endYearMonth == null) return 1;
          return a.endYearMonth.localeCompare(b.endYearMonth);
        };
      case clsvQx_XzGradeBaseEN.con_GradeIndex:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return a.gradeIndex - b.gradeIndex;
        };
      case clsvQx_XzGradeBaseEN.con_AllowUpBaseInfo:
        return (a: clsvQx_XzGradeBaseEN) => {
          if (a.allowUpBaseInfo == true) return 1;
          else return -1;
        };
      case clsvQx_XzGradeBaseEN.con_Prefix:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.prefix == null) return -1;
          if (b.prefix == null) return 1;
          return a.prefix.localeCompare(b.prefix);
        };
      case clsvQx_XzGradeBaseEN.con_IdStudyLevel:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.idStudyLevel == null) return -1;
          if (b.idStudyLevel == null) return 1;
          return a.idStudyLevel.localeCompare(b.idStudyLevel);
        };
      case clsvQx_XzGradeBaseEN.con_IsVisible:
        return (a: clsvQx_XzGradeBaseEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsvQx_XzGradeBaseEN.con_Memo:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vQx_XzGradeBase]中不存在!(in ${vQx_XzGradeBase_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvQx_XzGradeBaseEN.con_Id_GradeBase:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return b.id_GradeBase.localeCompare(a.id_GradeBase);
        };
      case clsvQx_XzGradeBaseEN.con_GradeBaseId:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return b.gradeBaseId.localeCompare(a.gradeBaseId);
        };
      case clsvQx_XzGradeBaseEN.con_GradeBaseName:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsvQx_XzGradeBaseEN.con_SchoolYear:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return b.schoolYear.localeCompare(a.schoolYear);
        };
      case clsvQx_XzGradeBaseEN.con_SchoolTerm:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return b.schoolTerm.localeCompare(a.schoolTerm);
        };
      case clsvQx_XzGradeBaseEN.con_EnterSchoolDate:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.enterSchoolDate == null) return -1;
          if (a.enterSchoolDate == null) return 1;
          return b.enterSchoolDate.localeCompare(a.enterSchoolDate);
        };
      case clsvQx_XzGradeBaseEN.con_CurrentTermSeq:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return b.currentTermSeq - a.currentTermSeq;
        };
      case clsvQx_XzGradeBaseEN.con_ExecPlanTermIndex:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return b.execPlanTermIndex - a.execPlanTermIndex;
        };
      case clsvQx_XzGradeBaseEN.con_SetEPTermIndexDate:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.setEPTermIndexDate == null) return -1;
          if (a.setEPTermIndexDate == null) return 1;
          return b.setEPTermIndexDate.localeCompare(a.setEPTermIndexDate);
        };
      case clsvQx_XzGradeBaseEN.con_IsOffed:
        return (b: clsvQx_XzGradeBaseEN) => {
          if (b.isOffed == true) return 1;
          else return -1;
        };
      case clsvQx_XzGradeBaseEN.con_ModifyDate:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.modifyDate == null) return -1;
          if (a.modifyDate == null) return 1;
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      case clsvQx_XzGradeBaseEN.con_ModifyUserId:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.modifyUserId == null) return -1;
          if (a.modifyUserId == null) return 1;
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsvQx_XzGradeBaseEN.con_PointCalcVersionId:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.pointCalcVersionId == null) return -1;
          if (a.pointCalcVersionId == null) return 1;
          return b.pointCalcVersionId.localeCompare(a.pointCalcVersionId);
        };
      case clsvQx_XzGradeBaseEN.con_GradeBaseNameA:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.gradeBaseNameA == null) return -1;
          if (a.gradeBaseNameA == null) return 1;
          return b.gradeBaseNameA.localeCompare(a.gradeBaseNameA);
        };
      case clsvQx_XzGradeBaseEN.con_BeginYearMonth:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.beginYearMonth == null) return -1;
          if (a.beginYearMonth == null) return 1;
          return b.beginYearMonth.localeCompare(a.beginYearMonth);
        };
      case clsvQx_XzGradeBaseEN.con_EndYearMonth:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.endYearMonth == null) return -1;
          if (a.endYearMonth == null) return 1;
          return b.endYearMonth.localeCompare(a.endYearMonth);
        };
      case clsvQx_XzGradeBaseEN.con_GradeIndex:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          return b.gradeIndex - a.gradeIndex;
        };
      case clsvQx_XzGradeBaseEN.con_AllowUpBaseInfo:
        return (b: clsvQx_XzGradeBaseEN) => {
          if (b.allowUpBaseInfo == true) return 1;
          else return -1;
        };
      case clsvQx_XzGradeBaseEN.con_Prefix:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.prefix == null) return -1;
          if (a.prefix == null) return 1;
          return b.prefix.localeCompare(a.prefix);
        };
      case clsvQx_XzGradeBaseEN.con_IdStudyLevel:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.idStudyLevel == null) return -1;
          if (a.idStudyLevel == null) return 1;
          return b.idStudyLevel.localeCompare(a.idStudyLevel);
        };
      case clsvQx_XzGradeBaseEN.con_IsVisible:
        return (b: clsvQx_XzGradeBaseEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsvQx_XzGradeBaseEN.con_Memo:
        return (a: clsvQx_XzGradeBaseEN, b: clsvQx_XzGradeBaseEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vQx_XzGradeBase]中不存在!(in ${vQx_XzGradeBase_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strId_GradeBase:所给的关键字
 * @returns 对象
 */
export async function vQx_XzGradeBase_GetNameById_GradeBaseCache(strId_GradeBase: string) {
  if (IsNullOrEmpty(strId_GradeBase) == true) {
    const strMsg = Format(
      '参数:[strId_GradeBase]不能为空!(In clsvQx_XzGradeBaseWApi.GetNameById_GradeBaseCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strId_GradeBase.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strId_GradeBase]的长度:[{0}]不正确!(clsvQx_XzGradeBaseWApi.GetNameById_GradeBaseCache)',
      strId_GradeBase.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstCache();
  if (arrvQx_XzGradeBaseObjLstCache == null) return '';
  try {
    const arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseObjLstCache.filter(
      (x) => x.id_GradeBase == strId_GradeBase,
    );
    let objvQx_XzGradeBase: clsvQx_XzGradeBaseEN;
    if (arrvQx_XzGradeBaseSel.length > 0) {
      objvQx_XzGradeBase = arrvQx_XzGradeBaseSel[0];
      return objvQx_XzGradeBase.gradeBaseName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strId_GradeBase,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vQx_XzGradeBase_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvQx_XzGradeBaseEN.con_Id_GradeBase:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.id_GradeBase === value;
      };
    case clsvQx_XzGradeBaseEN.con_GradeBaseId:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.gradeBaseId === value;
      };
    case clsvQx_XzGradeBaseEN.con_GradeBaseName:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.gradeBaseName === value;
      };
    case clsvQx_XzGradeBaseEN.con_SchoolYear:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.schoolYear === value;
      };
    case clsvQx_XzGradeBaseEN.con_SchoolTerm:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.schoolTerm === value;
      };
    case clsvQx_XzGradeBaseEN.con_EnterSchoolDate:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.enterSchoolDate === value;
      };
    case clsvQx_XzGradeBaseEN.con_CurrentTermSeq:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.currentTermSeq === value;
      };
    case clsvQx_XzGradeBaseEN.con_ExecPlanTermIndex:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.execPlanTermIndex === value;
      };
    case clsvQx_XzGradeBaseEN.con_SetEPTermIndexDate:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.setEPTermIndexDate === value;
      };
    case clsvQx_XzGradeBaseEN.con_IsOffed:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.isOffed === value;
      };
    case clsvQx_XzGradeBaseEN.con_ModifyDate:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.modifyDate === value;
      };
    case clsvQx_XzGradeBaseEN.con_ModifyUserId:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.modifyUserId === value;
      };
    case clsvQx_XzGradeBaseEN.con_PointCalcVersionId:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.pointCalcVersionId === value;
      };
    case clsvQx_XzGradeBaseEN.con_GradeBaseNameA:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.gradeBaseNameA === value;
      };
    case clsvQx_XzGradeBaseEN.con_BeginYearMonth:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.beginYearMonth === value;
      };
    case clsvQx_XzGradeBaseEN.con_EndYearMonth:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.endYearMonth === value;
      };
    case clsvQx_XzGradeBaseEN.con_GradeIndex:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.gradeIndex === value;
      };
    case clsvQx_XzGradeBaseEN.con_AllowUpBaseInfo:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.allowUpBaseInfo === value;
      };
    case clsvQx_XzGradeBaseEN.con_Prefix:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.prefix === value;
      };
    case clsvQx_XzGradeBaseEN.con_IdStudyLevel:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.idStudyLevel === value;
      };
    case clsvQx_XzGradeBaseEN.con_IsVisible:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.isVisible === value;
      };
    case clsvQx_XzGradeBaseEN.con_Memo:
      return (obj: clsvQx_XzGradeBaseEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vQx_XzGradeBase]中不存在!(in ${vQx_XzGradeBase_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vQx_XzGradeBase_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvQx_XzGradeBaseEN.con_Id_GradeBase) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvQx_XzGradeBaseEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvQx_XzGradeBaseEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strId_GradeBase = strInValue;
  if (IsNullOrEmpty(strId_GradeBase) == true) {
    return '';
  }
  const objvQx_XzGradeBase = await vQx_XzGradeBase_GetObjById_GradeBaseCache(strId_GradeBase);
  if (objvQx_XzGradeBase == null) return '';
  if (objvQx_XzGradeBase.GetFldValue(strOutFldName) == null) return '';
  return objvQx_XzGradeBase.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function vQx_XzGradeBase_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvQx_XzGradeBaseEN.con_Id_GradeBase) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvQx_XzGradeBase = await vQx_XzGradeBase_GetObjLstCache();
  if (arrvQx_XzGradeBase == null) return [];
  let arrvQx_XzGradeBaseSel = arrvQx_XzGradeBase;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvQx_XzGradeBaseSel.length == 0) return [];
  return arrvQx_XzGradeBaseSel.map((x) => x.id_GradeBase);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vQx_XzGradeBase_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvQx_XzGradeBaseEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

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
      const objvQx_XzGradeBase = vQx_XzGradeBase_GetObjFromJsonObj(returnObj);
      return objvQx_XzGradeBase;
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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvQx_XzGradeBaseEN._CurrTabName;
  if (IsNullOrEmpty(clsvQx_XzGradeBaseEN._WhereFormat) == false) {
    strWhereCond = clsvQx_XzGradeBaseEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsvQx_XzGradeBaseEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQx_XzGradeBaseEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvQx_XzGradeBaseExObjLstCache: Array<clsvQx_XzGradeBaseEN> = CacheHelper.Get(strKey);
    const arrvQx_XzGradeBaseObjLstT = vQx_XzGradeBase_GetObjLstByJSONObjLst(
      arrvQx_XzGradeBaseExObjLstCache,
    );
    return arrvQx_XzGradeBaseObjLstT;
  }
  try {
    const arrvQx_XzGradeBaseExObjLst = await vQx_XzGradeBase_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvQx_XzGradeBaseExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQx_XzGradeBaseExObjLst.length,
    );
    console.log(strInfo);
    return arrvQx_XzGradeBaseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvQx_XzGradeBaseEN._CurrTabName;
  if (IsNullOrEmpty(clsvQx_XzGradeBaseEN._WhereFormat) == false) {
    strWhereCond = clsvQx_XzGradeBaseEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsvQx_XzGradeBaseEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQx_XzGradeBaseEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvQx_XzGradeBaseExObjLstCache: Array<clsvQx_XzGradeBaseEN> = JSON.parse(strTempObjLst);
    const arrvQx_XzGradeBaseObjLstT = vQx_XzGradeBase_GetObjLstByJSONObjLst(
      arrvQx_XzGradeBaseExObjLstCache,
    );
    return arrvQx_XzGradeBaseObjLstT;
  }
  try {
    const arrvQx_XzGradeBaseExObjLst = await vQx_XzGradeBase_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvQx_XzGradeBaseExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQx_XzGradeBaseExObjLst.length,
    );
    console.log(strInfo);
    return arrvQx_XzGradeBaseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvQx_XzGradeBaseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvQx_XzGradeBaseObjLstCache: Array<clsvQx_XzGradeBaseEN> = JSON.parse(strTempObjLst);
    return arrvQx_XzGradeBaseObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vQx_XzGradeBase_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvQx_XzGradeBaseEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

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
          vQx_XzGradeBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQx_XzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvQx_XzGradeBaseEN._CurrTabName;
  if (IsNullOrEmpty(clsvQx_XzGradeBaseEN._WhereFormat) == false) {
    strWhereCond = clsvQx_XzGradeBaseEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsvQx_XzGradeBaseEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQx_XzGradeBaseEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvQx_XzGradeBaseExObjLstCache: Array<clsvQx_XzGradeBaseEN> = JSON.parse(strTempObjLst);
    const arrvQx_XzGradeBaseObjLstT = vQx_XzGradeBase_GetObjLstByJSONObjLst(
      arrvQx_XzGradeBaseExObjLstCache,
    );
    return arrvQx_XzGradeBaseObjLstT;
  }
  try {
    const arrvQx_XzGradeBaseExObjLst = await vQx_XzGradeBase_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvQx_XzGradeBaseExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQx_XzGradeBaseExObjLst.length,
    );
    console.log(strInfo);
    return arrvQx_XzGradeBaseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvQx_XzGradeBaseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvQx_XzGradeBaseObjLstCache: Array<clsvQx_XzGradeBaseEN> = JSON.parse(strTempObjLst);
    return arrvQx_XzGradeBaseObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQx_XzGradeBase_GetObjLstCache(): Promise<Array<clsvQx_XzGradeBaseEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvQx_XzGradeBaseObjLstCache;
  switch (clsvQx_XzGradeBaseEN._CacheModeId) {
    case '04': //sessionStorage
      arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstClientCache();
      break;
    default:
      arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstClientCache();
      break;
  }
  return arrvQx_XzGradeBaseObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQx_XzGradeBase_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvQx_XzGradeBaseObjLstCache;
  switch (clsvQx_XzGradeBaseEN._CacheModeId) {
    case '04': //sessionStorage
      arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvQx_XzGradeBaseObjLstCache = null;
      break;
    default:
      arrvQx_XzGradeBaseObjLstCache = null;
      break;
  }
  return arrvQx_XzGradeBaseObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrId_GradeBaseCond:条件对象
 * @returns 对象列表子集
 */
export async function vQx_XzGradeBase_GetSubObjLstCache(
  objvQx_XzGradeBaseCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstCache();
  let arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseObjLstCache;
  if (objvQx_XzGradeBaseCond.GetConditions().length == 0) return arrvQx_XzGradeBaseSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvQx_XzGradeBaseCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvQx_XzGradeBaseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvQx_XzGradeBaseCond),
      vQx_XzGradeBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvQx_XzGradeBaseEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrId_GradeBase:关键字列表
 * @returns 对象列表
 **/
export async function vQx_XzGradeBase_GetObjLstById_GradeBaseLstAsync(
  arrId_GradeBase: Array<string>,
): Promise<Array<clsvQx_XzGradeBaseEN>> {
  const strThisFuncName = 'GetObjLstById_GradeBaseLstAsync';
  const strAction = 'GetObjLstById_GradeBaseLst';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrId_GradeBase, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQx_XzGradeBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQx_XzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
 * @param arrstrId_GradeBaseLst:关键字列表
 * @returns 对象列表
 */
export async function vQx_XzGradeBase_GetObjLstById_GradeBaseLstCache(
  arrId_GradeBaseLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstById_GradeBaseLstCache';
  try {
    const arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstCache();
    const arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseObjLstCache.filter(
      (x) => arrId_GradeBaseLst.indexOf(x.id_GradeBase) > -1,
    );
    return arrvQx_XzGradeBaseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrId_GradeBaseLst.join(','),
      vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvQx_XzGradeBaseEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

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
          vQx_XzGradeBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQx_XzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvQx_XzGradeBaseEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

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
          vQx_XzGradeBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQx_XzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
 * @param objstrId_GradeBaseCond:条件对象
 * @returns 对象列表子集
 */
export async function vQx_XzGradeBase_IsExistRecordCache(
  objvQx_XzGradeBaseCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstCache();
  if (arrvQx_XzGradeBaseObjLstCache == null) return false;
  let arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseObjLstCache;
  if (objvQx_XzGradeBaseCond.GetConditions().length == 0)
    return arrvQx_XzGradeBaseSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvQx_XzGradeBaseCond.GetConditions()) {
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
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvQx_XzGradeBaseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvQx_XzGradeBaseCond),
      vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
 * @param strId_GradeBase:所给的关键字
 * @returns 对象
 */
export async function vQx_XzGradeBase_IsExistCache(strId_GradeBase: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstCache();
  if (arrvQx_XzGradeBaseObjLstCache == null) return false;
  try {
    const arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseObjLstCache.filter(
      (x) => x.id_GradeBase == strId_GradeBase,
    );
    if (arrvQx_XzGradeBaseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strId_GradeBase,
      vQx_XzGradeBase_ConstructorName,
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
 * @param strId_GradeBase:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vQx_XzGradeBase_IsExistAsync(strId_GradeBase: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strId_GradeBase,
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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
export async function vQx_XzGradeBase_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl_GP(vQx_XzGradeBase_Controller, strAction);

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
        vQx_XzGradeBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQx_XzGradeBase_ConstructorName,
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
 * @param objvQx_XzGradeBaseCond:条件对象
 * @returns 对象列表记录数
 */
export async function vQx_XzGradeBase_GetRecCountByCondCache(
  objvQx_XzGradeBaseCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvQx_XzGradeBaseObjLstCache = await vQx_XzGradeBase_GetObjLstCache();
  if (arrvQx_XzGradeBaseObjLstCache == null) return 0;
  let arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseObjLstCache;
  if (objvQx_XzGradeBaseCond.GetConditions().length == 0) return arrvQx_XzGradeBaseSel.length;
  try {
    for (const objCondition of objvQx_XzGradeBaseCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvQx_XzGradeBaseSel = arrvQx_XzGradeBaseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvQx_XzGradeBaseSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvQx_XzGradeBaseCond),
      vQx_XzGradeBase_ConstructorName,
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
export function vQx_XzGradeBase_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vQx_XzGradeBase_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvQx_XzGradeBaseEN._CurrTabName;
    switch (clsvQx_XzGradeBaseEN._CacheModeId) {
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
    clsvQx_XzGradeBaseEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vQx_XzGradeBase_GetLastRefreshTime(): string {
  if (clsvQx_XzGradeBaseEN._RefreshTimeLst.length == 0) return '';
  return clsvQx_XzGradeBaseEN._RefreshTimeLst[clsvQx_XzGradeBaseEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param bolIsVisible:
*/
export async function vQx_XzGradeBase_BindDdl_Id_GradeBaseByIsVisibleInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  bolIsVisible: boolean,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_Id_GradeBaseByIsVisibleInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_Id_GradeBaseByIsVisibleInDivCache");
  let arrObjLstSel = await vQx_XzGradeBase_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.isVisible == bolIsVisible);
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvQx_XzGradeBaseEN.con_Id_GradeBase,
    clsvQx_XzGradeBaseEN.con_GradeBaseName,
    '选vQx_XzGradeBase...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param bolIsVisible:
*/
export async function vQx_XzGradeBase_GetArrvQx_XzGradeBaseByIsVisibleCache(bolIsVisible: boolean) {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_Id_GradeBaseByIsVisibleInDivCache");
  const arrvQx_XzGradeBase = new Array<clsvQx_XzGradeBaseEN>();
  let arrObjLstSel = await vQx_XzGradeBase_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.isVisible == bolIsVisible);
  const obj0 = new clsvQx_XzGradeBaseEN();
  obj0.id_GradeBase = '0';
  obj0.gradeBaseName = '选vQx_XzGradeBase...';
  arrvQx_XzGradeBase.push(obj0);
  arrObjLstSel.forEach((x) => arrvQx_XzGradeBase.push(x));
  return arrvQx_XzGradeBase;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vQx_XzGradeBase_GetJSONStrByObj(
  pobjvQx_XzGradeBaseEN: clsvQx_XzGradeBaseEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvQx_XzGradeBaseEN);
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
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vQx_XzGradeBase_GetObjLstByJSONStr(strJSON: string): Array<clsvQx_XzGradeBaseEN> {
  let arrvQx_XzGradeBaseObjLst = new Array<clsvQx_XzGradeBaseEN>();
  if (strJSON === '') {
    return arrvQx_XzGradeBaseObjLst;
  }
  try {
    arrvQx_XzGradeBaseObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvQx_XzGradeBaseObjLst;
  }
  return arrvQx_XzGradeBaseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQx_XzGradeBaseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vQx_XzGradeBase_GetObjLstByJSONObjLst(
  arrvQx_XzGradeBaseObjLstS: Array<clsvQx_XzGradeBaseEN>,
): Array<clsvQx_XzGradeBaseEN> {
  const arrvQx_XzGradeBaseObjLst = new Array<clsvQx_XzGradeBaseEN>();
  for (const objInFor of arrvQx_XzGradeBaseObjLstS) {
    const obj1 = vQx_XzGradeBase_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvQx_XzGradeBaseObjLst.push(obj1);
  }
  return arrvQx_XzGradeBaseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vQx_XzGradeBase_GetObjByJSONStr(strJSON: string): clsvQx_XzGradeBaseEN {
  let pobjvQx_XzGradeBaseEN = new clsvQx_XzGradeBaseEN();
  if (strJSON === '') {
    return pobjvQx_XzGradeBaseEN;
  }
  try {
    pobjvQx_XzGradeBaseEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvQx_XzGradeBaseEN;
  }
  return pobjvQx_XzGradeBaseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vQx_XzGradeBase_GetCombineCondition(
  objvQx_XzGradeBaseCond: clsvQx_XzGradeBaseEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_Id_GradeBase,
    ) == true
  ) {
    const strComparisonOpId_GradeBase: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_Id_GradeBase];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_Id_GradeBase,
      objvQx_XzGradeBaseCond.id_GradeBase,
      strComparisonOpId_GradeBase,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_GradeBaseId,
    ) == true
  ) {
    const strComparisonOpGradeBaseId: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_GradeBaseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_GradeBaseId,
      objvQx_XzGradeBaseCond.gradeBaseId,
      strComparisonOpGradeBaseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_GradeBaseName,
    ) == true
  ) {
    const strComparisonOpGradeBaseName: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_GradeBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_GradeBaseName,
      objvQx_XzGradeBaseCond.gradeBaseName,
      strComparisonOpGradeBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_SchoolYear,
    ) == true
  ) {
    const strComparisonOpSchoolYear: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_SchoolYear];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_SchoolYear,
      objvQx_XzGradeBaseCond.schoolYear,
      strComparisonOpSchoolYear,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_SchoolTerm,
    ) == true
  ) {
    const strComparisonOpSchoolTerm: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_SchoolTerm];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_SchoolTerm,
      objvQx_XzGradeBaseCond.schoolTerm,
      strComparisonOpSchoolTerm,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_EnterSchoolDate,
    ) == true
  ) {
    const strComparisonOpEnterSchoolDate: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_EnterSchoolDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_EnterSchoolDate,
      objvQx_XzGradeBaseCond.enterSchoolDate,
      strComparisonOpEnterSchoolDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_CurrentTermSeq,
    ) == true
  ) {
    const strComparisonOpCurrentTermSeq: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_CurrentTermSeq];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvQx_XzGradeBaseEN.con_CurrentTermSeq,
      objvQx_XzGradeBaseCond.currentTermSeq,
      strComparisonOpCurrentTermSeq,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_ExecPlanTermIndex,
    ) == true
  ) {
    const strComparisonOpExecPlanTermIndex: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_ExecPlanTermIndex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvQx_XzGradeBaseEN.con_ExecPlanTermIndex,
      objvQx_XzGradeBaseCond.execPlanTermIndex,
      strComparisonOpExecPlanTermIndex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_SetEPTermIndexDate,
    ) == true
  ) {
    const strComparisonOpSetEPTermIndexDate: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_SetEPTermIndexDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_SetEPTermIndexDate,
      objvQx_XzGradeBaseCond.setEPTermIndexDate,
      strComparisonOpSetEPTermIndexDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_IsOffed,
    ) == true
  ) {
    if (objvQx_XzGradeBaseCond.isOffed == true) {
      strWhereCond += Format(" And {0} = '1'", clsvQx_XzGradeBaseEN.con_IsOffed);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvQx_XzGradeBaseEN.con_IsOffed);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_ModifyDate,
    ) == true
  ) {
    const strComparisonOpModifyDate: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_ModifyDate,
      objvQx_XzGradeBaseCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_ModifyUserId,
      objvQx_XzGradeBaseCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_PointCalcVersionId,
    ) == true
  ) {
    const strComparisonOpPointCalcVersionId: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_PointCalcVersionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_PointCalcVersionId,
      objvQx_XzGradeBaseCond.pointCalcVersionId,
      strComparisonOpPointCalcVersionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_GradeBaseNameA,
    ) == true
  ) {
    const strComparisonOpGradeBaseNameA: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_GradeBaseNameA];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_GradeBaseNameA,
      objvQx_XzGradeBaseCond.gradeBaseNameA,
      strComparisonOpGradeBaseNameA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_BeginYearMonth,
    ) == true
  ) {
    const strComparisonOpBeginYearMonth: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_BeginYearMonth];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_BeginYearMonth,
      objvQx_XzGradeBaseCond.beginYearMonth,
      strComparisonOpBeginYearMonth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_EndYearMonth,
    ) == true
  ) {
    const strComparisonOpEndYearMonth: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_EndYearMonth];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_EndYearMonth,
      objvQx_XzGradeBaseCond.endYearMonth,
      strComparisonOpEndYearMonth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_GradeIndex,
    ) == true
  ) {
    const strComparisonOpGradeIndex: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_GradeIndex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvQx_XzGradeBaseEN.con_GradeIndex,
      objvQx_XzGradeBaseCond.gradeIndex,
      strComparisonOpGradeIndex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_AllowUpBaseInfo,
    ) == true
  ) {
    if (objvQx_XzGradeBaseCond.allowUpBaseInfo == true) {
      strWhereCond += Format(" And {0} = '1'", clsvQx_XzGradeBaseEN.con_AllowUpBaseInfo);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvQx_XzGradeBaseEN.con_AllowUpBaseInfo);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_Prefix,
    ) == true
  ) {
    const strComparisonOpPrefix: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_Prefix];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_Prefix,
      objvQx_XzGradeBaseCond.prefix,
      strComparisonOpPrefix,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_IdStudyLevel,
    ) == true
  ) {
    const strComparisonOpIdStudyLevel: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_IdStudyLevel];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_IdStudyLevel,
      objvQx_XzGradeBaseCond.idStudyLevel,
      strComparisonOpIdStudyLevel,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_IsVisible,
    ) == true
  ) {
    if (objvQx_XzGradeBaseCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsvQx_XzGradeBaseEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvQx_XzGradeBaseEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQx_XzGradeBaseCond.dicFldComparisonOp,
      clsvQx_XzGradeBaseEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvQx_XzGradeBaseCond.dicFldComparisonOp[clsvQx_XzGradeBaseEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQx_XzGradeBaseEN.con_Memo,
      objvQx_XzGradeBaseCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQx_XzGradeBaseENS:源对象
 * @param objvQx_XzGradeBaseENT:目标对象
 */
export function vQx_XzGradeBase_GetObjFromJsonObj(
  objvQx_XzGradeBaseENS: clsvQx_XzGradeBaseEN,
): clsvQx_XzGradeBaseEN {
  const objvQx_XzGradeBaseENT: clsvQx_XzGradeBaseEN = new clsvQx_XzGradeBaseEN();
  ObjectAssign(objvQx_XzGradeBaseENT, objvQx_XzGradeBaseENS);
  return objvQx_XzGradeBaseENT;
}
