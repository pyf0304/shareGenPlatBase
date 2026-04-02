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

// import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { clsStudentInfo } from '@/ts/L0Entity/UserManage/clsStudentInfo';
import { clsStudentInfoEN } from './types/entities.d';

import { clsStudentInfoENEx } from '@/ts/L0Entity/UserManage/clsStudentInfoENEx';
import { clsTeacherInfo } from './types/entities.d';
import { clsTeacherInfoEN } from './types/entities.d';

import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';

import { clsSchoolTermEN } from '@/ts/L0Entity/SysPara/clsSchoolTermEN';

import {
  SchoolTerm_func,
  SchoolTerm_funcKey,
  SchoolTerm_GetObjLstCache,
} from '@/ts/L3ForWApi/SysPara/clsSchoolTermWApi';

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

export { SchoolTerm_GetObjLstCache, SchoolTerm_func, SchoolTerm_funcKey };

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

export { clsStudentInfo };
// export { clsStudentInfoEN };
export { clsStudentInfoENEx };

export { clsStudentInfoEN };
export { clsTeacherInfo };
export { clsTeacherInfoEN };

export { clsXzSchoolEN };

export { clsSchoolTermEN };

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
