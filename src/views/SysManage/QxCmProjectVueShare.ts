/**
 * 类名:QxCmProjectVueShare(界面:QxCmProjectCRUD,00140045)
 * 表名:QxCmProject(00140119)
 * 版本:2026.03.27.1(服务器:WIN-SRV103-116)
 * 日期:2026/03/30 06:30:22
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:系统管理(SysManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsQxCmProjectENEx } from '@/ts/L0Entity/SysManage/clsQxCmProjectENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxCmProjectEN } from '@/ts/L0Entity/SysManage/clsQxCmProjectEN';

const ascOrDesc4SortFun = ref('Asc');
const sortQxCmProjectBy = ref('');

const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortQxCmProjectBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const QxPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refQxCmProject_Edit = ref();
const refQxCmProject_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refQxCmProject_Edit,
  refQxCmProject_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refQxCmProject_Edit,
  refQxCmProject_List,
};

export const showErrorMessage = ref(false);
export const dataListQxCmProject = ref<Array<clsQxCmProjectENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const qxCmProjectCache: { [key: string]: clsQxCmProjectENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const cmPrjId_q = ref('');
export const cmPrjName_q = ref('');
export const qxPrjId_q = ref('');
export const useStateId_q = ref('');
const qryVarSet = reactive({
  cmPrjId_q,
  cmPrjName_q,
  qxPrjId_q,
  useStateId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxCmProjectCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (cmPrjId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxCmProjectEN.con_CmPrjId,
        cmPrjId_q.value,
      );
    }
    if (cmPrjName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxCmProjectEN.con_CmPrjName,
        cmPrjName_q.value,
      );
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(
        " And QxCmProject.{0} = '{1}'",
        clsQxCmProjectEN.con_UseStateId,
        useStateId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineQxCmProjectCondition)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return strWhereCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxCmProjectConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objQxCmProjectCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objQxCmProjectCond.SetCondFldValue(clsQxCmProjectEN.con_QxPrjId, QxPrjId_Local.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (cmPrjId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxCmProjectEN.con_CmPrjId,
        cmPrjId_q.value,
      );
      objQxCmProjectCond.SetCondFldValue(clsQxCmProjectEN.con_CmPrjId, cmPrjId_q.value, 'like');
    }
    if (cmPrjName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxCmProjectEN.con_CmPrjName,
        cmPrjName_q.value,
      );
      objQxCmProjectCond.SetCondFldValue(clsQxCmProjectEN.con_CmPrjName, cmPrjName_q.value, 'like');
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQxCmProjectEN.con_UseStateId,
        useStateId_q.value,
      );
      objQxCmProjectCond.SetCondFldValue(clsQxCmProjectEN.con_UseStateId, useStateId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineQxCmProjectConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQxCmProjectCond.whereCond = strWhereCond;
  return objQxCmProjectCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsQxCmProjectENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListQxCmProject.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refQxCmProject_List.value != null) refQxCmProject_List.value.selectAllChecked = false;
};

export function QxCmProject_DeleteKeyIdCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strCmPrjId}`;
    delete qxCmProjectCache[cacheKey];
    return;
  }
}
