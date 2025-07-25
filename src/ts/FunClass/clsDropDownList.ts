import { BindDdl_ObjLst, BindDdl_ObjLst_V } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';

import { useUserStore } from '@/store/modulesShare/user';

export class clsDropDownList {
  public static XzMajorUniq(arr: Array<clsXzMajorEN>): Array<clsXzMajorEN> {
    const arrObjLst_New: Array<clsXzMajorEN> = new Array<clsXzMajorEN>();
    for (const x of arr) {
      if (clsDropDownList.XzMajorIsExist(arrObjLst_New, x) == false) {
        arrObjLst_New.push(x);
      }
    }
    return arrObjLst_New;
  }

  public static XzMajorIsExist(arr: Array<clsXzMajorEN>, key: clsXzMajorEN) {
    const arr_Sel = arr.filter((x) => x.idXzMajor == key.idXzMajor);
    if (arr_Sel.length > 0) return true;
    return false;
  }
}
