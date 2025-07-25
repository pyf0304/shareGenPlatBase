import { createPinia, setActivePinia } from 'pinia';

// 创建并设置 Pinia 实例
const pinia = createPinia();
setActivePinia(pinia);

export * from './viewsShare/LogManage';
export * from './viewsShare/MenuManage_GP';
export * from './viewsShare/PotenceMan';
export * from './viewsShare/SystemSet';
export * from './viewsShare/ResourceMan';
export * from './viewsShare/UserManage_GP';
// export * from './ts/L0Entity/BaseInfo';
import { clsXzMajorEN } from './ts/L0Entity/BaseInfo/clsXzMajorEN';

import {
  XzMajor_func,
  XzMajor_funcKey,
  XzMajor_GetObjByIdXzMajorAsync,
  XzMajor_IsExistAsync,
  XzMajor_GetObjLstCache,
  XzMajor_GetArrXzMajor,
  XzMajor_GetArrXzMajorByIdXzCollege,
  XzMajor_GetObjLstAsync,
  XzMajor_GetNameByIdXzMajorCache,
  XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache,
  XzMajor_BindDdl_IdXzMajorInDivCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { clsvStudentInfo_SimEN } from '@/ts/L0Entity/UserManage/clsvStudentInfo_SimEN';
// import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { clsStudentInfo } from '@/ts/L0Entity/UserManage/clsStudentInfo';
import { clsStudentInfoEN } from './types/entities.d';

import { clsStudentInfoENEx } from '@/ts/L0Entity/UserManage/clsStudentInfoENEx';
import { clsTeacherInfo } from './types/entities.d';
import { clsTeacherInfoEN } from './types/entities.d';

import {
  vStudentInfo_Sim_func,
  vStudentInfo_Sim_funcKey,
  vStudentInfo_Sim_GetArrvStudentInfo_Sim,
  vStudentInfo_Sim_GetObjLstCache,
} from '@/ts/L3ForWApi/UserManage/clsvStudentInfo_SimWApi';
import { StudentInfo_GetObjByIdStudentInfoAsync } from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';

import { TeacherInfoEx_GetObjByTeacherId } from '@/ts/L3ForWApiExShare/BaseInfo/clsTeacherInfoExWApi';

import { TeacherInfo_GetObjByIdTeacherAsync } from '@/ts/L3ForWApi/BaseInfo/clsTeacherInfoWApi';
import { vTeacherInfo_Sim_func } from '@/ts/L3ForWApi/BaseInfo/clsvTeacherInfo_SimWApi';
import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
import {
  XzSchool_BindDdl_IdSchoolInDivCache,
  XzSchool_func,
  XzSchool_funcKey,
  XzSchool_GetArrXzSchool,
  XzSchool_GetObjByIdSchoolAsync,
  XzSchool_GetObjByIdSchoolCache,
} from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';

import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/UserManage_GP/clsXzGradeBaseEN';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage_GP/clsXzClgEN';
import { clscc_CourseTypeEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseTypeEN';
import { clscc_CourseTypeENEx } from '@/ts/L0Entity/CourseLearning/clscc_CourseTypeENEx';
import { clsSchoolTermEN } from '@/ts/L0Entity/SysPara/clsSchoolTermEN';
import { clsXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorDirectionEN';
import {
  XzGrade_BindDdl_IdGradeInDivCache,
  XzGrade_func,
  XzGrade_funcKey,
  XzGrade_GetArrXzGrade,
  XzGrade_GetObjLstCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { clsXzClg } from '@/ts/L0Entity/UserManage_GP/clsXzClg';
import {
  XzClgEx_BindDdl_IdXzCollegeByUserTypeInDivCache,
  XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx,
  XzClgEx_GetDepartmentIdInGPByIdCollege,
  XzClgEx_GetObjByCollegeId,
  XzClgEx_GetObjByCollegeName,
} from '@/ts/L3ForWApiExShare/BaseInfo/clsXzClgExWApi';
import { XzGradeBaseEx_BindDdl_idGradeBaseInDivCache } from '@/ts/L3ForWApiExShare/SysPara/clsvXzGradeBaseExWApi';
import {
  XzMajorDirection_func,
  XzMajorDirection_funcKey,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorDirectionWApi';
import {
  XzClg_BindDdl_IdXzCollegeByUserTypeIdInDivCache,
  XzClg_func,
  XzClg_funcKey,
  XzClg_GetObjByIdXzCollegeAsync,
  XzClg_GetObjLstAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsXzClgWApi';
import {
  XzGradeBase_BindDdl_IdGradeBaseByIsVisibleInDivCache,
  XzGradeBase_func,
  XzGradeBase_funcKey,
  XzGradeBase_GetObjLstAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsXzGradeBaseWApi';
import {
  SchoolTerm_func,
  SchoolTerm_funcKey,
  SchoolTerm_GetObjLstCache,
} from '@/ts/L3ForWApi/SysPara/clsSchoolTermWApi';
import { clsvXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsvXzMajorDirectionEN';
import { vXzMajorDirection_GetSubObjLstCache } from '@/ts/L3ForWApi/BaseInfo/clsvXzMajorDirectionWApi';
import { QxUsers_Edit } from '@/viewsBase/UserManage_GP/QxUsers_Edit';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import {
  QxUsers_UpdateRecordAsync,
  QxUsers_GetObjByUserIdAsync,
  QxUsers_GetObjLstAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';
import {
  QxUserRoleRelationEx_GetObjByUserIdAndRoleId,
  QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId,
} from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxUserRoleRelationExWApi';
import {
  vQxUsersSim_func,
  vQxUsersSim_funcKey,
  vQxUsersSim_GetObjByUserIdAsync,
  vQxUsersSim_GetObjLstCache,
} from '@/ts/L3ForWApi/UserManage_GP/clsvQxUsersSimWApi';
import { clsQxRolesEN, enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import { QxRoleRightRelationEx_FuncMapByFldName } from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxRoleRightRelationExWApi';
import {
  QxRoleMenus_SortByCmPrjIdMenuSet,
  QxRoleMenusEx_GetObjLstByCmPrjId,
  QxRoleMenusEx_GetObjLstByMenuId,
  QxRoleMenusEx_GetObjLstByMenuIdAndPrjId,
  QxRoleMenusEx_GetObjLstByMenuSetId,
} from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxRoleMenusExWApi';
import {
  QxRolePotenceRelaEx_GetObjLstByPotenceIdAndPrjId,
  QxRolePotenceRelaEx_GetObjLstByPrjId,
} from '@/ts/L3ForWApiExShare/PotenceMan/clsQxRolePotenceRelaExWApi';
import {
  QxRoles_GetNameByRoleIdCache,
  QxRoles_GetObjByRoleIdCache,
  QxRoles_GetObjLstByRoleIdLstCache,
  QxRoles_GetObjLstCache,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { clsQxPrjMenus } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenus';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { QxPrjMenus_GetObjByMenuIdAsync } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { clsQxPrjMenuSet } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSet';
import { clsQxPrjMenuSetEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetEN';
import { QxPrjMenuSet_GetObjByMenuSetIdAsync } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
import { clsQxRoleMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN';
import { clsQxRoleMenus } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenus';
import { clsQxUserRoleRelationEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserRoleRelationEN';
import { clsQxUserRoleRelation } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelation';
import {
  QxUserIdentity_BindDdl_IdentityIdInDivCache,
  QxUserIdentity_func,
  QxUserIdentity_funcKey,
  QxUserIdentity_GetObjByIdentityIdCache,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUserIdentityWApi';
import { clsvQxUsersSimEN } from '@/ts/L0Entity/UserManage_GP/clsvQxUsersSimEN';
import { clsvQxUsersSim } from '@/ts/L0Entity/UserManage_GP/clsvQxUsersSim';
import { clsQxUserStateEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserStateEN';
import { clsQxUserIdentityEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserIdentityEN';
import { QxUserState_func } from '@/ts/L3ForWApi/UserManage_GP/clsQxUserStateWApi';
import { QxUserRoleRelation_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage_GP/clsQxUserRoleRelationWApi';
import {
  QxPageDispMode_GetObjLstAsync,
  QxPageDispMode_GetObjLstCache,
  QxPageDispMode_SortFunByKey,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPageDispModeWApi';

export {
  XzMajor_func,
  XzMajor_funcKey,
  XzMajor_GetObjByIdXzMajorAsync,
  XzMajor_IsExistAsync,
  XzMajor_GetObjLstCache,
  XzMajor_GetArrXzMajor,
  XzMajor_GetArrXzMajorByIdXzCollege,
  XzMajor_GetObjLstAsync,
  XzMajor_GetNameByIdXzMajorCache,
  XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache,
  XzMajor_BindDdl_IdXzMajorInDivCache,
};

export { StudentInfo_GetObjByIdStudentInfoAsync };
export {
  vStudentInfo_Sim_func,
  vStudentInfo_Sim_funcKey,
  vStudentInfo_Sim_GetObjLstCache,
  vStudentInfo_Sim_GetArrvStudentInfo_Sim,
};
export { TeacherInfo_GetObjByIdTeacherAsync };
export { TeacherInfoEx_GetObjByTeacherId };
export { vTeacherInfo_Sim_func };

export {
  XzSchool_GetObjByIdSchoolAsync,
  XzSchool_GetObjByIdSchoolCache,
  XzSchool_GetArrXzSchool,
  XzSchool_BindDdl_IdSchoolInDivCache,
  XzSchool_func,
  XzSchool_funcKey,
};
export { XzGrade_GetArrXzGrade, XzGrade_BindDdl_IdGradeInDivCache };

export {
  XzClgEx_GetObjByCollegeId,
  XzClgEx_GetObjByCollegeName,
  XzClgEx_BindDdl_IdXzCollegeByUserTypeInDivCache,
  XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx,
  XzClgEx_GetDepartmentIdInGPByIdCollege,
};

export { XzGrade_GetObjLstCache, XzGrade_func, XzGrade_funcKey };

export { XzGradeBaseEx_BindDdl_idGradeBaseInDivCache };
export { XzMajorDirection_func, XzMajorDirection_funcKey };
export {
  XzClg_funcKey,
  XzClg_GetObjByIdXzCollegeAsync,
  XzClg_func,
  XzClg_GetObjLstAsync,
  XzClg_BindDdl_IdXzCollegeByUserTypeIdInDivCache,
};
export {
  XzGradeBase_func,
  XzGradeBase_funcKey,
  XzGradeBase_BindDdl_IdGradeBaseByIsVisibleInDivCache,
};

export { SchoolTerm_GetObjLstCache, SchoolTerm_func, SchoolTerm_funcKey };

export { XzGradeBase_GetObjLstAsync };
export { vXzMajorDirection_GetSubObjLstCache };

export { QxUsers_UpdateRecordAsync, QxUsers_GetObjByUserIdAsync, QxUsers_GetObjLstAsync };

export {
  QxRoles_GetObjLstCache,
  QxRoles_GetNameByRoleIdCache,
  QxRoles_GetObjByRoleIdCache,
  QxRoles_GetObjLstByRoleIdLstCache,
};

export {
  QxUserRoleRelationEx_GetObjByUserIdAndRoleId,
  QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId,
};
export {
  vQxUsersSim_GetObjByUserIdAsync,
  vQxUsersSim_func,
  vQxUsersSim_funcKey,
  vQxUsersSim_GetObjLstCache,
};
export { QxRoleRightRelationEx_FuncMapByFldName };
export {
  QxRoleMenusEx_GetObjLstByCmPrjId,
  QxRoleMenusEx_GetObjLstByMenuId,
  QxRoleMenusEx_GetObjLstByMenuIdAndPrjId,
  QxRoleMenusEx_GetObjLstByMenuSetId,
  QxRoleMenus_SortByCmPrjIdMenuSet,
};

export { QxRolePotenceRelaEx_GetObjLstByPotenceIdAndPrjId, QxRolePotenceRelaEx_GetObjLstByPrjId };

export { QxPrjMenus_GetObjByMenuIdAsync };

export { QxPrjMenuSet_GetObjByMenuSetIdAsync };

export { QxUserIdentity_BindDdl_IdentityIdInDivCache, QxUserIdentity_GetObjByIdentityIdCache };

export { QxUserIdentity_func, QxUserIdentity_funcKey };
export { QxUserState_func };
export { QxUserRoleRelation_GetObjLstAsync };

export {
  QxPageDispMode_GetObjLstCache,
  QxPageDispMode_GetObjLstAsync,
  QxPageDispMode_SortFunByKey,
};

// 导出加法函数
export function add(a: number, b: number) {
  return a + b;
}

// 导出减法函数
export function mySubtract(a: number, b: number) {
  return a - b;
}

// 导出生成随机数函数
export function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { clsXzMajorEN };
export { clsXzMajorDirectionEN };
export { clsvStudentInfo_SimEN };
export { clsStudentInfo };
// export { clsStudentInfoEN };
export { clsStudentInfoENEx };

export { clsStudentInfoEN };
export { clsTeacherInfo };
export { clsTeacherInfoEN };

export { clsXzSchoolEN };

export { clsXzGradeEN };

export { clscc_CourseEN };
export { clsXzGradeBaseEN };
export { clsXzClgEN, clsXzClg };

export { clscc_CourseTypeEN, clscc_CourseTypeENEx };
export { clsSchoolTermEN };

export { clsvXzMajorDirectionEN };

export { QxUsers_Edit };

export { clsQxUsersEN };

export { enumQxRoles };

export { clsQxRolesEN };

export { clsQxPrjMenus };
export { clsQxPrjMenusEN };

export { clsQxPrjMenuSet };
export { clsQxPrjMenuSetEN };

export { clsQxRoleMenus };
export { clsQxRoleMenusEN };

export { clsQxUserRoleRelationEN };
export { clsQxUserRoleRelation };
export { clsvQxUsersSimEN };
export { clsvQxUsersSim };
export { clsQxUserStateEN };
export { clsQxUserIdentityEN };
