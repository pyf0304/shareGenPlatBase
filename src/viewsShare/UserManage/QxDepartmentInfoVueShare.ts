/**
 * 类名:QxDepartmentInfoVueShare(界面:QxDepartmentInfoCRUD,00140034)
 * 表名:QxDepartmentInfo(00140030)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 09:01:35
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:系统参数(SysPara)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsQxDepartmentInfoEN } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoEN';
import { clsQxDepartmentInfoENEx } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoENEx';

const ascOrDesc4SortFun = ref('Asc');
const sortQxDepartmentInfoBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortQxDepartmentInfoBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refQxDepartmentInfo_Detail = ref();
const refQxDepartmentInfo_Edit = ref();
const refQxDepartmentInfo_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refQxDepartmentInfo_Detail,
  refQxDepartmentInfo_Edit,
  refQxDepartmentInfo_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refQxDepartmentInfo_Detail,
  refQxDepartmentInfo_Edit,
  refQxDepartmentInfo_List,
};

export const showErrorMessage = ref(false);
export const dataListQxDepartmentInfo = ref<Array<clsQxDepartmentInfoENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const qxDepartmentInfoCache: { [key: string]: clsQxDepartmentInfoENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const departmentId_q = ref('');
export const departmentName_q = ref('');
export const departmentAbbrName_q = ref('');
export const departmentTypeId_q = ref('');
export const upDepartmentId_q = ref('');
export const inUse_q = ref('0');
const qryVarSet = reactive({
  departmentId_q,
  departmentName_q,
  departmentAbbrName_q,
  departmentTypeId_q,
  upDepartmentId_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxDepartmentInfoCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (departmentId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxDepartmentInfoEN.con_DepartmentId,
        departmentId_q.value,
      );
    }
    if (departmentName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxDepartmentInfoEN.con_DepartmentName,
        departmentName_q.value,
      );
    }
    if (departmentAbbrName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxDepartmentInfoEN.con_DepartmentAbbrName,
        departmentAbbrName_q.value,
      );
    }
    if (departmentTypeId_q.value != '' && departmentTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQxDepartmentInfoEN.con_DepartmentTypeId,
        departmentTypeId_q.value,
      );
    }
    if (upDepartmentId_q.value != '' && upDepartmentId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQxDepartmentInfoEN.con_UpDepartmentId,
        upDepartmentId_q.value,
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsQxDepartmentInfoEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxDepartmentInfoEN.con_InUse);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineQxDepartmentInfoCondition)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return strWhereCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxDepartmentInfoConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objQxDepartmentInfoCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (departmentId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxDepartmentInfoEN.con_DepartmentId,
        departmentId_q.value,
      );
      objQxDepartmentInfoCond.SetCondFldValue(
        clsQxDepartmentInfoEN.con_DepartmentId,
        departmentId_q.value,
        'like',
      );
    }
    if (departmentName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxDepartmentInfoEN.con_DepartmentName,
        departmentName_q.value,
      );
      objQxDepartmentInfoCond.SetCondFldValue(
        clsQxDepartmentInfoEN.con_DepartmentName,
        departmentName_q.value,
        'like',
      );
    }
    if (departmentAbbrName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxDepartmentInfoEN.con_DepartmentAbbrName,
        departmentAbbrName_q.value,
      );
      objQxDepartmentInfoCond.SetCondFldValue(
        clsQxDepartmentInfoEN.con_DepartmentAbbrName,
        departmentAbbrName_q.value,
        'like',
      );
    }
    if (departmentTypeId_q.value != '' && departmentTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQxDepartmentInfoEN.con_DepartmentTypeId,
        departmentTypeId_q.value,
      );
      objQxDepartmentInfoCond.SetCondFldValue(
        clsQxDepartmentInfoEN.con_DepartmentTypeId,
        departmentTypeId_q.value,
        '=',
      );
    }
    if (upDepartmentId_q.value != '' && upDepartmentId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQxDepartmentInfoEN.con_UpDepartmentId,
        upDepartmentId_q.value,
      );
      objQxDepartmentInfoCond.SetCondFldValue(
        clsQxDepartmentInfoEN.con_UpDepartmentId,
        upDepartmentId_q.value,
        '=',
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsQxDepartmentInfoEN.con_InUse);
      objQxDepartmentInfoCond.SetCondFldValue(clsQxDepartmentInfoEN.con_InUse, true, '=');
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxDepartmentInfoEN.con_InUse);
      objQxDepartmentInfoCond.SetCondFldValue(clsQxDepartmentInfoEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineQxDepartmentInfoConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQxDepartmentInfoCond.whereCond = strWhereCond;
  return objQxDepartmentInfoCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxDepartmentInfoConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objQxDepartmentInfoCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (departmentId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQxDepartmentInfoEN.con_DepartmentId,
          departmentId_q.value,
        );
        objQxDepartmentInfoCond.SetCondFldValue(
          clsQxDepartmentInfoEN.con_DepartmentId,
          departmentId_q.value,
          'like',
        );
      }
      if (departmentName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQxDepartmentInfoEN.con_DepartmentName,
          departmentName_q.value,
        );
        objQxDepartmentInfoCond.SetCondFldValue(
          clsQxDepartmentInfoEN.con_DepartmentName,
          departmentName_q.value,
          'like',
        );
      }
      if (departmentAbbrName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQxDepartmentInfoEN.con_DepartmentAbbrName,
          departmentAbbrName_q.value,
        );
        objQxDepartmentInfoCond.SetCondFldValue(
          clsQxDepartmentInfoEN.con_DepartmentAbbrName,
          departmentAbbrName_q.value,
          'like',
        );
      }
      if (departmentTypeId_q.value != '' && departmentTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQxDepartmentInfoEN.con_DepartmentTypeId,
          departmentTypeId_q.value,
        );
        objQxDepartmentInfoCond.SetCondFldValue(
          clsQxDepartmentInfoEN.con_DepartmentTypeId,
          departmentTypeId_q.value,
          '=',
        );
      }
      if (upDepartmentId_q.value != '' && upDepartmentId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQxDepartmentInfoEN.con_UpDepartmentId,
          upDepartmentId_q.value,
        );
        objQxDepartmentInfoCond.SetCondFldValue(
          clsQxDepartmentInfoEN.con_UpDepartmentId,
          upDepartmentId_q.value,
          '=',
        );
      }
      if (inUse_q.value == 'true') {
        strWhereCond += Format(" And {0} = '1'", clsQxDepartmentInfoEN.con_InUse);
        objQxDepartmentInfoCond.SetCondFldValue(clsQxDepartmentInfoEN.con_InUse, true, '=');
      } else {
        strWhereCond += Format(" And {0} = '0'", clsQxDepartmentInfoEN.con_InUse);
        objQxDepartmentInfoCond.SetCondFldValue(clsQxDepartmentInfoEN.con_InUse, false, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineQxDepartmentInfoConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objQxDepartmentInfoCond.whereCond = strWhereCond;
    return objQxDepartmentInfoCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsQxDepartmentInfoENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListQxDepartmentInfo.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refQxDepartmentInfo_List.value != null)
    refQxDepartmentInfo_List.value.selectAllChecked = false;
};

export function QxDepartmentInfo_DeleteKeyIdCache(strDepartmentId: string): void {
  if (IsNullOrEmpty(strDepartmentId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strDepartmentId}`;
    delete qxDepartmentInfoCache[cacheKey];
    return;
  }
}
