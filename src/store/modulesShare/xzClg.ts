import {
  vQx_XzClg_GetFirstObjAsync,
  vQx_XzClg_GetObjById_XzCollegeAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsvQx_XzClgWApi';
import { vQx_XzClgEx_GetObjByCollegeId } from '@/ts/L3ForWApiEx/UserManage_GP/clsvQx_XzClgExWApi';
import { clsvQx_XzClgEN } from '@/ts/L0Entity/UserManage_GP/clsvQx_XzClgEN';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface xzClgSimEN {
//   IdXzCollege: string;
//   collegeName: string;
// }

export function XzClgEx_CopyTo(objXzClgENS: clsvQx_XzClgEN): clsvQx_XzClgEN {
  const strThisFuncName = XzClgEx_CopyTo.name;
  const objXzClgENT = new clsvQx_XzClgEN();
  try {
    ObjectAssign(objXzClgENT, objXzClgENS);
    return objXzClgENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objXzClgENT;
  }
}
// 定义 TabsState
export interface XzClgState {
  xzClgLst: clsvQx_XzClgEN[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useXzClgStore = defineStore('XzClg', {
  state(): XzClgState {
    return {
      xzClgLst: [],
    };
  },

  actions: {
    async getCollegeName(strIdXzCollege: string): Promise<string> {
      if (strIdXzCollege == '') return '';
      if (strIdXzCollege == null) return '';
      const objXzClg0 = this.xzClgLst.find((x: any) => x.id_XzCollege === strIdXzCollege);
      if (objXzClg0 != null && objXzClg0 != undefined) return objXzClg0.collegeName;
      let objXzClgEN = await vQx_XzClg_GetObjById_XzCollegeAsync(strIdXzCollege);
      if (objXzClgEN == null) {
        const strMsg = `IdXzCollege=${strIdXzCollege} 的XzClg中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objXzClg = XzClgEx_CopyTo(objXzClgEN);
      this.xzClgLst.push(objXzClg);
      return objXzClg.collegeName;
    },
    async getCollegeId(strIdXzCollege: string): Promise<string> {
      if (strIdXzCollege == '') return '';
      if (strIdXzCollege == null) return '';
      const objXzClg0 = this.xzClgLst.find((x: any) => x.id_XzCollege === strIdXzCollege);
      if (objXzClg0 != null && objXzClg0 != undefined) return objXzClg0.collegeId;
      let objXzClgEN = await vQx_XzClg_GetObjById_XzCollegeAsync(strIdXzCollege);
      if (objXzClgEN == null) {
        const strMsg = `IdXzCollege=${strIdXzCollege} 的XzClg中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objXzClg = XzClgEx_CopyTo(objXzClgEN);
      this.xzClgLst.push(objXzClg);
      return objXzClg.collegeId;
    },
    async getIdXzCollege(strCollegeId: string): Promise<string> {
      if (strCollegeId == '') return '';
      if (strCollegeId == null) return '';
      const objXzClg0 = this.xzClgLst.find((x: any) => x.collegeId === strCollegeId);
      if (objXzClg0 != null && objXzClg0 != undefined) return objXzClg0.id_XzCollege;
      let objXzClgEN = await vQx_XzClgEx_GetObjByCollegeId(strCollegeId);
      if (objXzClgEN == null) {
        const strMsg = `CollegeId=${strCollegeId} 的XzClg中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objXzClg = XzClgEx_CopyTo(objXzClgEN);
      this.xzClgLst.push(objXzClg);
      return objXzClg.id_XzCollege;
    },
    async getIdXzCollegeByName(strCollegeName: string, strIdSchool: string): Promise<string> {
      if (strCollegeName == '') return '';
      if (strCollegeName == null) return '';
      const objXzClg0 = this.xzClgLst.find((x: any) => x.collegeName === strCollegeName);
      if (objXzClg0 != null && objXzClg0 != undefined) return objXzClg0.id_XzCollege;
      const strWhereCond = Format(
        "collegeName='{0}' and id_School='{1}'",
        strCollegeName,
        strIdSchool,
      );
      let objXzClgEN = await vQx_XzClg_GetFirstObjAsync(strWhereCond);
      if (objXzClgEN == null) {
        const strMsg = `CollegeName=${strCollegeName} 的XzClg中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objXzClg = XzClgEx_CopyTo(objXzClgEN);
      this.xzClgLst.push(objXzClg);
      return objXzClg.id_XzCollege;
    },
    async getObj(strIdXzCollege: string): Promise<clsvQx_XzClgEN | null> {
      if (strIdXzCollege == '') return null;
      if (strIdXzCollege == null) return null;
      const objXzClg0 = this.xzClgLst.find((x: any) => x.id_XzCollege === strIdXzCollege);
      if (objXzClg0 != null && objXzClg0 != undefined) return XzClgEx_CopyTo(objXzClg0 as any);

      let objXzClgEN = await vQx_XzClg_GetObjById_XzCollegeAsync(strIdXzCollege);
      if (objXzClgEN == null) {
        const strMsg = `IdXzCollege=${strIdXzCollege} 的XzClg中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objXzClg = XzClgEx_CopyTo(objXzClgEN);
      this.xzClgLst.push(objXzClg);
      return objXzClg;
    },

    getIdXzCollegeLstByCollegeId(
      strCollegeId: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrxzClg;
      let arrIdXzCollege: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrxzClg = this.xzClgLst.filter((x: any) => x.collegeId === strCollegeId);
          arrIdXzCollege = arrxzClg.map((x: any) => x.id_XzCollege);
          break;
        case enumComparisonOp.Like_03:
          arrxzClg = this.xzClgLst.filter((x: any) => x.collegeId.indexOf(strCollegeId) > -1);
          arrIdXzCollege = arrxzClg.map((x: any) => x.id_XzCollege);
          break;
      }
      return arrIdXzCollege;
    },
    getIdXzCollegeLstByCollegeName(
      strCollegeName: string,
      strIdSchool: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrxzClg;
      let arrIdXzCollege: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrxzClg = this.xzClgLst.filter(
            (x: any) => x.collegeName === strCollegeName && x.id_School === strIdSchool,
          );
          arrIdXzCollege = arrxzClg.map((x: any) => x.id_XzCollege);
          break;
        case enumComparisonOp.Like_03:
          arrxzClg = this.xzClgLst.filter(
            (x: any) => x.id_School === strIdSchool && x.collegeName.indexOf(strCollegeName) > -1,
          );
          arrIdXzCollege = arrxzClg.map((x: any) => x.id_XzCollege);
          break;
      }
      return arrIdXzCollege;
    },
    getIdXzCollegeLstByIdXzCollege(
      strIdXzCollege: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrxzClg;
      let arrIdXzCollege: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrxzClg = this.xzClgLst.filter((x: any) => x.id_XzCollege === strIdXzCollege);
          arrIdXzCollege = arrxzClg.map((x: any) => x.id_XzCollege);
          break;
      }
      return arrIdXzCollege;
    },
    getIdXzCollegeLstByCollegeIdLst(
      arrCollegeId: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrxzClg;
      let arrIdXzCollege: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrxzClg = this.xzClgLst.filter((x: any) => arrCollegeId.indexOf(x.collegeId) > -1);
          arrIdXzCollege = arrxzClg.map((x: any) => x.id_XzCollege);
          break;
      }
      return arrIdXzCollege;
    },
    async getFieldValue(strIdXzCollege: string, strOutFldName: string): Promise<string> {
      let objXzClg = this.xzClgLst.find((x: any) => x.id_XzCollege === strIdXzCollege);
      if (objXzClg == null) {
        const objXzClgEN = await vQx_XzClg_GetObjById_XzCollegeAsync(strIdXzCollege);
        if (objXzClgEN == null) return '';
        objXzClg = XzClgEx_CopyTo(objXzClgEN);
        this.xzClgLst.push(objXzClg);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsvQx_XzClgEN.con_CollegeId:
          return objXzClg.collegeId;
        case clsvQx_XzClgEN.con_CollegeName:
          return objXzClg.collegeName;
        case clsvQx_XzClgEN.con_Id_XzCollege:
          return objXzClg.id_XzCollege;

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[XzClg]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

// export const xzClgStore = useXzClgStore();
