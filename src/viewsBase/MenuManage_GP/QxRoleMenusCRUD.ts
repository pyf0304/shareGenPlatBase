/**
 * 类名:QxRoleMenusCRUD(界面:QxRoleMenusCRUD,00140029)
 * 表名:QxRoleMenus(00140007)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 16:02:08
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { clsQxRoleMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusENEx';
import {
  QxPrjId_Local,
  CombineQxRoleMenusConditionObj4ExportExcel,
  CombineQxRoleMenusConditionObj,
  QxRoleMenus_DeleteKeyIdCache,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refQxRoleMenus_List,
} from '@/viewsShare/MenuManage_GP/QxRoleMenusVueShare';
import {
  QxRoleMenus_GetRecCountByCondCache,
  QxRoleMenus_GetSubObjLstCache,
  QxRoleMenus_DelRecordAsync,
  QxRoleMenus_ReFreshCache,
  QxRoleMenus_GetObjBymIdAsync,
  QxRoleMenus_FuncMapByFldName,
  QxRoleMenus_GetObjExLstByPagerCache,
  QxRoleMenus_GetObjLstBymIdLstAsync,
  QxRoleMenus_AddNewRecordAsync,
  QxRoleMenus_UpdateRecordAsync,
  QxRoleMenus_DelQxRoleMenussAsync,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxRoleMenusWApi';
import { QxRoleMenusEx_CopyToEx } from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxRoleMenusExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { QxPrjMenuSet_BindDdl_MenuSetIdByCmPrjIdInDivCache } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
import { QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetSelectValueInDivObj,
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsQxRoleMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN';
import {
  ObjectAssign,
  BindTab,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPager } from '@/ts/PubFun/clsPager';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ListPara, clsOperateList, GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
/** QxRoleMenusCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class QxRoleMenusCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public objPager: clsPager;
  public static objPageCRUD: QxRoleMenusCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  constructor() {
    this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
    QxRoleMenusCRUD.objPageCRUD = this;
    this.objPager = new clsPager(this);
  }
  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList(): HTMLDivElement {
    return divVarSet.refDivList;
  }
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return divVarSet.refDivLayout;
  }
  /**
   * 获取当前界面的主表名
   **/
  public get thisTabName(): string {
    return clsQxRoleMenusEN._CurrTabName;
  }
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public abstract InitVarSet(): void;
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public abstract InitCtlVar(): void;

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      await this.InitVarSet();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();
      if (viewVarSet.sortQxRoleMenusBy == '')
        viewVarSet.sortQxRoleMenusBy = `${clsQxRoleMenusEN.con_MenuId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_QxRoleMenus4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_QxRoleMenus4Func(divVarSet.refDivList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrQxRoleMenusObjLst: Array<clsQxRoleMenusEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrQxRoleMenusObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsQxRoleMenusEN = arrQxRoleMenusObjLst[i];
      const objRow: Record<string, any> = {};
      for (let j = 0; j < intColNum; j++) {
        const fldName = arrDataColumn[j].fldName;
        const colHeader = arrDataColumn[j].colHeader;
        const value = objEN.GetFldValue(fldName); // Get the value using fldName
        objRow[colHeader] = value; // Use colHeader as the property name
      }
      arrData.push(objRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('角色菜单({0})导出.xlsx', clsQxRoleMenusEN._CurrTabName);
    const strSheetName = '角色菜单列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
   **/
  public CombineData4Func(
    arrQxRoleMenusExObjLst: Array<clsQxRoleMenusENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrQxRoleMenusExObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsQxRoleMenusENEx = arrQxRoleMenusExObjLst[i];
      const objRow: Record<string, any> = {};
      for (let j = 0; j < intColNum; j++) {
        const fldName = arrDataColumn[j].fldName;
        const colHeader = arrDataColumn[j].colHeader;
        const value = objEN.GetFldValue(fldName); // Get the value using fldName
        objRow[colHeader] = value; // Use colHeader as the property name
      }
      arrData.push(objRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('角色菜单({0})导出.xlsx', clsQxRoleMenusEN._CurrTabName);
    const strSheetName = '角色菜单列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_ExportExcel4Func)
   **/
  public async ExportExcel_QxRoleMenus4Func(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_QxRoleMenus4Func.name;
    if (viewVarSet.sortQxRoleMenusBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortQxRoleMenusBy)为空,请检查!(In BindGv_QxRoleMenusCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    const objQxRoleMenusCond = await CombineQxRoleMenusConditionObj4ExportExcel();
    let arrQxRoleMenusExObjLst: Array<clsQxRoleMenusENEx> = [];
    try {
      this.recCount = await QxRoleMenus_GetRecCountByCondCache(
        objQxRoleMenusCond,
        QxPrjId_Local.value,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objQxRoleMenusCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      const arrQxRoleMenusObjLst = await QxRoleMenus_GetSubObjLstCache(
        objQxRoleMenusCond,
        QxPrjId_Local.value,
      );
      arrQxRoleMenusExObjLst = arrQxRoleMenusObjLst.map(QxRoleMenusEx_CopyToEx);
    } catch (e) {
      const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    if (arrQxRoleMenusExObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsQxRoleMenusEN._CurrTabName, QxPrjId_Local.value);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: clsQxRoleMenusEN.con_RoleId,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '角色Id',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 2,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: clsQxRoleMenusENEx.con_RoleName,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '角色名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 3,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: clsQxRoleMenusEN.con_MenuId,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '菜单Id',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 4,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: clsQxRoleMenusENEx.con_MenuName,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '菜单名',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 5,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: clsQxRoleMenusENEx.con_MenuSetName,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '菜单集名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 6,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: clsQxRoleMenusEN.con_IsDisp,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否显示',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 7,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: clsQxRoleMenusEN.con_UpdDate,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 8,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: clsQxRoleMenusEN.con_Memo,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 9,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      try {
        await this.ExtendFldFuncMap(arrQxRoleMenusExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }
      arrQxRoleMenusExObjLst = arrQxRoleMenusExObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrQxRoleMenusExObjLst, arrDataColumn);
      //console.log("完成BindGv_QxRoleMenus!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[MenuSetId]
   * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_MenuSetIdInDivInFeature(strCmPrjId: string) {
    if (IsNullOrEmpty(strCmPrjId) == true) {
      const strMsg = Format('参数:[strCmPrjId]不能为空!(In .SetDdl_MenuSetIdInDivInFeature)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strCmPrjId.length != 6) {
      const strMsg = Format(
        '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(.SetDdl_MenuSetIdInDivInFeature)',
        strCmPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    await QxPrjMenuSet_BindDdl_MenuSetIdByCmPrjIdInDivCache(
      divVarSet.refDivFunction,
      'ddlMenuSetId',
      strCmPrjId,
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[RoleId]
   * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_RoleIdInDivInFeature(strQxPrjId: string) {
    if (IsNullOrEmpty(strQxPrjId) == true) {
      const strMsg = Format('参数:[strQxPrjId]不能为空!(In .SetDdl_RoleIdInDivInFeature)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(.SetDdl_RoleIdInDivInFeature)',
        strQxPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strQxPrjId) == true) {
      const strMsg = Format('参数:[strQxPrjId]不能为空!(In .SetDdl_RoleIdInDivInFeature)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(.SetDdl_RoleIdInDivInFeature)',
        strQxPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache(
      divVarSet.refDivFunction,
      'ddlRoleId',
      strQxPrjId,
    ); //
  }

  /** 设置字段值-RoleId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetRoleId_Click() {
    const strThisFuncName = this.btnSetRoleId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置角色Id的${this.thisTabName}记录!`);
        return '';
      }
      const strRoleId = GetSelectValueInDivObj(divVarSet.refDivFunction, 'ddlRoleId_SetFldValue');
      if (strRoleId == '') {
        const strMsg = '请输入角色Id(RoleId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strRoleId=' + strRoleId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetRoleId(arrKeyIds, strRoleId);
      await this.BindGv_QxRoleMenus4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-MenuSetId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetMenuSetId_Click() {
    const strThisFuncName = this.btnSetMenuSetId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置菜单集Id的${this.thisTabName}记录!`);
        return '';
      }
      const strMenuSetId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlMenuSetId_SetFldValue',
      );
      if (strMenuSetId == '') {
        const strMsg = '请输入菜单集Id(MenuSetId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strMenuSetId=' + strMenuSetId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetMenuSetId(arrKeyIds, strMenuSetId);
      await this.BindGv_QxRoleMenus4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 添加新记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   **/
  public async btnCopyRecord_Click() {
    const strThisFuncName = this.btnCopyRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要克隆的${this.thisTabName}记录!`);
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await this.BindGv_QxRoleMenus4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "lngmId": 表关键字
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   **/
  public async btnDelRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnDelRecordInTab_Click.name;
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(0) == false) {
        return;
      }
      const lngKeyId = Number(strKeyId);
      await this.DelRecord(lngKeyId);
      await this.BindGv_QxRoleMenus4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里选择记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   **/
  public async btnSelectRecordInTab_Click(lngmId: number) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (lngmId == 0) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(lngmId);
    } catch (e) {
      const strMsg = `选择记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 根据关键字删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   **/
  public async DelRecord(lngmId: number) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await QxRoleMenus_DelRecordAsync(lngmId);
      if (returnInt > 0) {
        QxRoleMenus_ReFreshCache(QxPrjId_Local.value);
        const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除${this.thisTabName}记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 根据关键字选择相应的记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
   * @param sender:参数列表
   **/
  public async SelectRecord(lngmId: number) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objQxRoleMenusEN = await QxRoleMenus_GetObjBymIdAsync(lngmId);
      console.log('完成SelectRecord!', objQxRoleMenusEN);
      Redirect('/Index/Main_QxRoleMenus');
    } catch (e) {
      const strMsg = `根据关键字获取相应的${this.thisTabName}记录的对象不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecord_Click() {
    const strThisFuncName = this.btnDelRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(arrKeyIds.length) == false) {
        return;
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_QxRoleMenus4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   **/
  public async btnExportExcel_Click() {
    await this.ExportExcel_QxRoleMenus4Func();
  }

  /** 显示QxRoleMenus对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrQxRoleMenusObjLst:需要绑定的对象列表
   **/
  public async BindTab_QxRoleMenus(
    divContainer: HTMLDivElement,
    arrQxRoleMenusExObjLst: Array<clsQxRoleMenusENEx>,
  ) {
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_OrderNum,
        sortBy: 'orderNum',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '排序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_RoleName,
        sortBy: 'roleName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '角色名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusEN.con_MenuId,
        sortBy: clsQxRoleMenusEN.con_MenuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_MenuName,
        sortBy: 'menuName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_MenuSetId,
        sortBy: 'menuSetId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单集Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_MenuSetName,
        sortBy: 'menuSetName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单集名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_IsLeafNode,
        sortBy: 'isLeafNode',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否叶子',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_PageDispModeName,
        sortBy: 'pageDispModeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '显示模式',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_InUse,
        sortBy: 'inUse',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否在用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_UpMenuId,
        sortBy: 'upMenuId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '上级菜单Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusEN.con_IsDisp,
        sortBy: clsQxRoleMenusEN.con_IsDisp,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否显示',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    if (refQxRoleMenus_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrQxRoleMenusExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_QxRoleMenus函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrQxRoleMenusExObjLst,
        arrDataColumn,
        clsQxRoleMenusEN.con_mId,
        this,
      );
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /**
   * 是否显示所有错误
   **/
  public get dispAllErrMsg_q(): boolean {
    return true;
  }

  /** 显示QxRoleMenus对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrQxRoleMenusExObjLst:需要绑定的对象列表
   **/
  public async BindTab_QxRoleMenus4Func(
    divContainer: HTMLDivElement,
    arrQxRoleMenusExObjLst: Array<clsQxRoleMenusENEx>,
  ) {
    const strThisFuncName = this.BindTab_QxRoleMenus4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_OrderNum,
        sortBy: 'orderNum',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '排序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_RoleName,
        sortBy: 'roleName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '角色名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusEN.con_MenuId,
        sortBy: clsQxRoleMenusEN.con_MenuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_MenuName,
        sortBy: 'menuName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_MenuSetId,
        sortBy: 'menuSetId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单集Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_MenuSetName,
        sortBy: 'menuSetName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单集名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_IsLeafNode,
        sortBy: 'isLeafNode',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否叶子',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_PageDispModeName,
        sortBy: 'pageDispModeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '显示模式',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_InUse,
        sortBy: 'inUse',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否在用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusENEx.con_UpMenuId,
        sortBy: 'upMenuId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '上级菜单Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleMenusEN.con_IsDisp,
        sortBy: clsQxRoleMenusEN.con_IsDisp,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否显示',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrQxRoleMenusExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refQxRoleMenus_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrQxRoleMenusExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_QxRoleMenus4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrQxRoleMenusExObjLst,
        arrDataColumn,
        clsQxRoleMenusEN.con_mId,
        this,
      );
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrQxRoleMenusExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrQxRoleMenusExObjLst: Array<clsQxRoleMenusENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsQxRoleMenusEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrQxRoleMenusExObjLst) {
        objInFor.qxPrjId = QxPrjId_Local.value;
        objInFor.qxPrjId = QxPrjId_Local.value;
        await QxRoleMenus_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 函数功能:在数据 列表中跳转到某一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
   * @param intPageIndex:页序号
   **/
  public async IndexPage(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    //console.log("跳转到" + intPageIndex + "页");
    this.SetCurrPageIndex(intPageIndex);
    await this.BindGv_QxRoleMenus4Func(this.listPara.listDiv);
  }

  /** 函数功能:在数据列表中跳转到下一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_NextPage)
   **/
  public async NextPage() {
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) + 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 函数功能:在数据列表中跳转到前一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PrevPage)
   **/
  public async PrevPage() {
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) - 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func)
   **/
  public async BindGv_QxRoleMenus4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_QxRoleMenus4Func.name;
    if (viewVarSet.sortQxRoleMenusBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortQxRoleMenusBy)为空,请检查!(In BindGv_QxRoleMenusCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objQxRoleMenusCond = await CombineQxRoleMenusConditionObj();
    objQxRoleMenusCond.SetCondFldValue(clsQxRoleMenusEN.con_QxPrjId, QxPrjId_Local.value, '=');
    const strWhereCond = JSON.stringify(objQxRoleMenusCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrQxRoleMenusExObjLst: Array<clsQxRoleMenusENEx> = [];
    try {
      this.recCount = await QxRoleMenus_GetRecCountByCondCache(
        objQxRoleMenusCond,
        QxPrjId_Local.value,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objQxRoleMenusCond.whereCond,
        );
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objQxRoleMenusCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrQxRoleMenusExObjLst, true);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (QxRoleMenusCRUD.sortFunStatic != undefined) {
        strSortFun = QxRoleMenusCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objQxRoleMenusCond,
        orderBy: viewVarSet.sortQxRoleMenusBy,
        sortFun: strSortFun,
      };
      arrQxRoleMenusExObjLst = await QxRoleMenus_GetObjExLstByPagerCache(
        objPagerPara,
        QxPrjId_Local.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrQxRoleMenusExObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsQxRoleMenusEN._CurrTabName, QxPrjId_Local.value);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_QxRoleMenus4Func(divList, arrQxRoleMenusExObjLst);
      //console.log("完成BindGv_QxRoleMenus4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objQxRoleMenusENS:源对象
   * @returns 目标对象=>clsQxRoleMenusEN:objQxRoleMenusENT
   **/
  public CopyToEx(objQxRoleMenusENS: clsQxRoleMenusEN): clsQxRoleMenusENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objQxRoleMenusENT = new clsQxRoleMenusENEx();
    try {
      ObjectAssign(objQxRoleMenusENT, objQxRoleMenusENS);
      return objQxRoleMenusENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objQxRoleMenusENT;
    }
  }

  /**
   * 排序函数。根据表对象中随机两个字段的值进行比较,正常使用时,需用该类的扩展类的同名函数
   * 作者:pyf
   * 日期:
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortFunExportExcel)
   * @param a:比较的第1个对象
   * @param b:比较的第1个对象
   * @returns 返回两个对象比较的结果
   **/
  public SortFunExportExcel(a: clsQxRoleMenusEN, b: clsQxRoleMenusEN): number {
    if (a.qxPrjId == b.qxPrjId) {
      if (a.qxPrjId == null) return -1;
      if (b.qxPrjId == null) return 1;
      return a.qxPrjId.localeCompare(b.qxPrjId);
    } else {
      if (b.memo == null) return -1;
      if (a.memo == null) return 1;
      return a.memo.localeCompare(b.memo);
    }
  }

  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public abstract SortColumn(sortColumnKey: string, sortDirection: string): void;
  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      viewVarSet.ascOrDesc4SortFun,
      viewVarSet.sortQxRoleMenusBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (Object.prototype.hasOwnProperty.call(clsQxRoleMenusENEx, sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
      return;
    }
    viewVarSet.sortQxRoleMenusBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    QxRoleMenusCRUD.sortFunStatic = sortFun;
    await this.BindGv_QxRoleMenus4Func(this.listPara.listDiv);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrmId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrQxRoleMenusObjLst = await QxRoleMenus_GetObjLstBymIdLstAsync(arrmId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrQxRoleMenusObjLst) {
        const returnBool = await QxRoleMenus_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          QxRoleMenus_ReFreshCache(QxPrjId_Local.value);
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 设置字段值-RoleId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetRoleId(arrmId: Array<string>, strRoleId: string) {
    const strThisFuncName = this.SetRoleId.name;
    if (strRoleId == null || strRoleId == '') {
      const strMsg = '请输入角色Id(RoleId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrmId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrQxRoleMenusObjLst = await QxRoleMenus_GetObjLstBymIdLstAsync(arrmId);
      let intCount = 0;
      for (const objInFor of arrQxRoleMenusObjLst) {
        const objQxRoleMenusEN = new clsQxRoleMenusEN();
        ObjectAssign(objQxRoleMenusEN, objInFor);
        objQxRoleMenusEN.SetmId(objInFor.mId);
        objQxRoleMenusEN.SetRoleId(strRoleId);
        let returnBool = false;
        try {
          objQxRoleMenusEN.sfUpdFldSetStr = objQxRoleMenusEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await QxRoleMenus_UpdateRecordAsync(objQxRoleMenusEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          QxRoleMenus_DeleteKeyIdCache(QxPrjId_Local.value, objInFor.mId);
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        QxRoleMenus_ReFreshCache(QxPrjId_Local.value);
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 设置字段值-MenuSetId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetMenuSetId(arrmId: Array<string>, strMenuSetId: string) {
    const strThisFuncName = this.SetMenuSetId.name;
    if (strMenuSetId == null || strMenuSetId == '') {
      const strMsg = '请输入菜单集Id(MenuSetId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrmId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrQxRoleMenusObjLst = await QxRoleMenus_GetObjLstBymIdLstAsync(arrmId);
      let intCount = 0;
      for (const objInFor of arrQxRoleMenusObjLst) {
        const objQxRoleMenusEN = new clsQxRoleMenusEN();
        ObjectAssign(objQxRoleMenusEN, objInFor);
        objQxRoleMenusEN.SetmId(objInFor.mId);
        objQxRoleMenusEN.SetMenuSetId(strMenuSetId);
        let returnBool = false;
        try {
          objQxRoleMenusEN.sfUpdFldSetStr = objQxRoleMenusEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await QxRoleMenus_UpdateRecordAsync(objQxRoleMenusEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          QxRoleMenus_DeleteKeyIdCache(QxPrjId_Local.value, objInFor.mId);
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        QxRoleMenus_ReFreshCache(QxPrjId_Local.value);
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrmId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await QxRoleMenus_DelQxRoleMenussAsync(arrmId);
      if (returnInt > 0) {
        QxRoleMenus_ReFreshCache(QxPrjId_Local.value);
        const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除${this.thisTabName}记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 显示{0}对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
   * @param divContainer:显示容器
   * @param objQxRoleMenus:需要显示的对象
   **/
  public ShowQxRoleMenusObj(divContainer: HTMLDivElement, objQxRoleMenus: clsQxRoleMenusEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objQxRoleMenus);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objQxRoleMenus.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjQxRoleMenusEN:表实体类对象
   * @returns 列表的第一个关键字值
   **/
  public GetFirstKey(): string {
    if (arrSelectedKeys.length == 1) {
      return arrSelectedKeys[0];
    } else {
      alert(`请选择一个关键字!目前选择了:${arrSelectedKeys.length}个关键字。`);
      return '';
    }
  }

  /** 函数功能:预留函数,在某一个层(div)里绑定数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
   **/
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }

  /** 函数功能:设置当前页序号
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetCurrPageIndex)
   * @param value:页序号
   * @param strDivName4Pager:当前分页所在的层(div)
   **/
  public SetCurrPageIndex(value: number) {
    this.objPager.currPageIndex = value;
  }

  /**
   * 设置界面标题-相当使用ViewState功能
   **/
  public set ViewTitle(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivLayout, 'lblViewTitle', value);
  }
  /**
   * 设置界面标题
   **/
  public get ViewTitle(): string {
    const strValue = GetLabelHtmlInDivObj(divVarSet.refDivLayout, 'lblViewTitle');
    return strValue;
  }
}
