import { ComponentMap, EntityMap } from './types/myComponents';
import { clsXzMajorEN } from './ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsStudentInfoEN } from './ts/L0Entity/UserManage/clsStudentInfoEN';
import { QxUsers_Edit } from './viewsBase/UserManage_GP/QxUsers_Edit';

// share-prj/index.d.ts
import { DefineComponent } from 'vue';

export const TeacherInfoCRUD: DefineComponent;
export const XzMajorCRUD: DefineComponent;
export function add(a: number, b: number): number;
export function subtract(a: number, b: number): number;
export const baseInfoMap: ComponentMap;
export { ComponentMap, EntityMap };
export { clsXzMajorEN };
export { clsStudentInfoEN };
export { QxUsers_Edit };
