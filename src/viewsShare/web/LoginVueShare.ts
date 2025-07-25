/**
 * 类名:TeachingCaseResCaseVueShare(界面:TeachingCaseResCaseCRUD,01120191)
 * 表名:TeachingCaseResCase(01120377)
 * 版本:2024.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/23 17:20:14
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:教学案例资源(TeachingCaseResLib)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortTeachingCaseResCaseBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortTeachingCaseResCaseBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CourseId_Cache = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refLogin_Edit = ref();
const refTeachingCaseResCase_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refLogin_Edit,
  refTeachingCaseResCase_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refLogin_Edit,
  refTeachingCaseResCase_List,
};

export const showErrorMessage = ref(false);

export const emptyRecNumInfo = ref('');

//查询区变量定义
export const teachingCaseResCaseName_q = ref('');
export const idCaseType_q = ref('');
export const courseId_q = ref('');
export const caseLevelId_q = ref('');
const qryVarSet = reactive({
  teachingCaseResCaseName_q,
  idCaseType_q,
  courseId_q,
  caseLevelId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };
