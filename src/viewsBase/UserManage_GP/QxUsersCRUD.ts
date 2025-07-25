/**
 * 类名:QxUsersCRUD(界面:QxUsersCRUD,00140033)
 * 表名:QxUsers(00140015)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/13 11:18:20
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { clsQxUsersENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUsersENEx';
import {
  CombineQxUsersCondition,
  QxUsers_DeleteKeyIdCache,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refQxUsers_List,
} from '@/viewsShare/UserManage_GP/QxUsersVueShare';
import {
  QxUsers_GetRecCountByCondAsync,
  QxUsers_GetObjLstAsync,
  QxUsers_DelRecordAsync,
  QxUsers_GetObjByUserIdAsync,
  QxUsers_GetObjLstByUserIdLstAsync,
  QxUsers_AddNewRecordAsync,
  QxUsers_UpdateRecordAsync,
  QxUsers_DelQxUserssAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';
import {
  QxUsersEx_CopyToEx,
  QxUsersEx_FuncMapByFldName,
  QxUsersEx_GetObjExLstByPagerAsync,
  QxUsersEx_FuncMapKeyDepartmentTypeId,
} from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxUsersExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { XzSchool_BindDdl_IdSchoolInDivCache } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetSelectValueInDivObj,
  GetDivObjInDivObj,
  intersectSets,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
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
/** QxUsersCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class QxUsersCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public objPager: clsPager;
  public static objPageCRUD: QxUsersCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  constructor() {
    this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
    QxUsersCRUD.objPageCRUD = this;
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
    return clsQxUsersEN._CurrTabName;
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
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      await this.InitVarSet();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();
      if (viewVarSet.sortQxUsersBy == '')
        viewVarSet.sortQxUsersBy = `${clsQxUsersEN.con_UserId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_QxUsers4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

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
      if (viewVarSet.sortQxUsersBy == '')
        viewVarSet.sortQxUsersBy = `${clsQxUsersEN.con_UserId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_QxUsers4Func(divVarSet.refDivList);
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
    await this.BindGv_QxUsers4Func(divVarSet.refDivList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrQxUsersObjLst: Array<clsQxUsersEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrQxUsersObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsQxUsersEN = arrQxUsersObjLst[i];
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
    const strFileName = Format('用户({0})导出.xlsx', clsQxUsersEN._CurrTabName);
    const strSheetName = '用户列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
   **/
  public CombineData4Func(
    arrQxUsersExObjLst: Array<clsQxUsersENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrQxUsersExObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsQxUsersENEx = arrQxUsersExObjLst[i];
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
    const strFileName = Format('用户({0})导出.xlsx', clsQxUsersEN._CurrTabName);
    const strSheetName = '用户列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_ExportExcel4Func_NoCache)
   **/
  public async ExportExcel_QxUsers4Func(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_QxUsers4Func.name;
    if (viewVarSet.sortQxUsersBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortQxUsersBy)为空,请检查!(In BindGv_QxUsersCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const strWhereCond = await CombineQxUsersCondition();
    let arrQxUsersExObjLst: Array<clsQxUsersENEx> = [];
    try {
      this.recCount = await QxUsers_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      const arrQxUsersObjLst = await QxUsers_GetObjLstAsync(strWhereCond);
      arrQxUsersExObjLst = arrQxUsersObjLst.map(QxUsersEx_CopyToEx);
    } catch (e) {
      const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    if (arrQxUsersExObjLst.length == 0) {
      const strKey = Format('{0}', clsQxUsersEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'userId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '用户ID',
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
          fldName: 'userName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '用户名',
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
          fldName: 'departmentId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '部门名',
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
          fldName: 'userStateId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '用户状态',
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
          fldName: 'password',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '口令',
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
          fldName: 'effitiveBeginDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '有效开始日期',
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
          fldName: 'effitiveEndDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '有效结束日期',
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
          fldName: 'identityId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '身份',
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
          fldName: 'isArchive',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否存档',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 10,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'email',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '邮箱',
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
          fldName: 'phoneNumber',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '电话号码',
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
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
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
          fldName: 'updUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改用户',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
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
        await this.ExtendFldFuncMap(arrQxUsersExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }
      arrQxUsersExObjLst = arrQxUsersExObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrQxUsersExObjLst, arrDataColumn);
      //console.log("完成BindGv_QxUsers!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
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

  /**
   * 设置绑定下拉框，针对字段:[IdSchool]
   * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdSchoolInDivInFeature() {
    await XzSchool_BindDdl_IdSchoolInDivCache(divVarSet.refDivFunction, 'ddlIdSchool'); //
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
      await this.BindGv_QxUsers4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-IdSchool
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetIdSchool_Click() {
    const strThisFuncName = this.btnSetIdSchool_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置学校流水号的${this.thisTabName}记录!`);
        return '';
      }
      const strIdSchool = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlIdSchool_SetFldValue',
      );
      if (strIdSchool == '') {
        const strMsg = '请输入学校流水号(IdSchool)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strIdSchool=' + strIdSchool);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetIdSchool(arrKeyIds, strIdSchool);
      await this.BindGv_QxUsers4Func(divVarSet.refDivList);
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
      await this.BindGv_QxUsers4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strUserId": 表关键字
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
      await this.DelRecord(strKeyId);
      await this.BindGv_QxUsers4Func(divVarSet.refDivList);
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
  public async btnSelectRecordInTab_Click(strUserId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strUserId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strUserId);
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
  public async DelRecord(strUserId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await QxUsers_DelRecordAsync(strUserId);
      if (returnInt > 0) {
        //QxUsers_ReFreshCache();
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
  public async SelectRecord(strUserId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objQxUsersEN = await QxUsers_GetObjByUserIdAsync(strUserId);
      console.log('完成SelectRecord!', objQxUsersEN);
      Redirect('/Index/Main_QxUsers');
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
      await this.BindGv_QxUsers4Func(divVarSet.refDivList);
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
    await this.ExportExcel_QxUsers4Func();
  }

  /** 显示QxUsers对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrQxUsersObjLst:需要绑定的对象列表
   **/
  public async BindTab_QxUsers(
    divContainer: HTMLDivElement,
    arrQxUsersExObjLst: Array<clsQxUsersENEx>,
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
        fldName: clsQxUsersEN.con_UserId,
        sortBy: 'userId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户ID',
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
        fldName: clsQxUsersENEx.con_RoleNames,
        sortBy: 'roleNames',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '角色s',
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
        fldName: clsQxUsersEN.con_UserName,
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户名',
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
        fldName: clsQxUsersEN.con_Password,
        sortBy: clsQxUsersEN.con_Password,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '口令',
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
        fldName: clsQxUsersEN.con_EffitiveEndDate,
        sortBy: 'effitiveEndDate',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '有效结束日期',
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
        fldName: clsQxUsersENEx.con_DepartmentName,
        sortBy: 'departmentName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '部门名',
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
        fldName: clsQxUsersENEx.con_DepartmentTypeName,
        sortBy: 'departmentTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '部门类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersENEx.con_UserStateName,
        sortBy: clsQxUsersENEx.con_UserStateName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户状态',
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
        fldName: clsQxUsersENEx.con_CollegeName,
        sortBy: clsQxUsersENEx.con_CollegeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名',
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
        fldName: clsQxUsersENEx.con_SchoolName,
        sortBy: clsQxUsersENEx.con_SchoolName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学校名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersENEx.con_GradeBaseName,
        sortBy: clsQxUsersENEx.con_GradeBaseName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '年级',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 16,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    if (refQxUsers_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrQxUsersExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_QxUsers函数中，divDataLst不存在!');
        return;
      }
      await BindTab(divDataLst, arrQxUsersExObjLst, arrDataColumn, clsQxUsersEN.con_UserId, this);
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

  /** 显示QxUsers对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrQxUsersExObjLst:需要绑定的对象列表
   **/
  public async BindTab_QxUsers4Func(
    divContainer: HTMLDivElement,
    arrQxUsersExObjLst: Array<clsQxUsersENEx>,
  ) {
    const strThisFuncName = this.BindTab_QxUsers4Func.name;
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
        fldName: clsQxUsersEN.con_UserId,
        sortBy: 'userId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户ID',
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
        fldName: clsQxUsersENEx.con_RoleNames,
        sortBy: 'roleNames',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '角色s',
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
        fldName: clsQxUsersEN.con_UserName,
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户名',
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
        fldName: clsQxUsersEN.con_Password,
        sortBy: clsQxUsersEN.con_Password,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '口令',
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
        fldName: clsQxUsersEN.con_EffitiveEndDate,
        sortBy: 'effitiveEndDate',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '有效结束日期',
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
        fldName: clsQxUsersENEx.con_DepartmentName,
        sortBy: 'departmentName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '部门名',
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
        fldName: clsQxUsersENEx.con_DepartmentTypeName,
        sortBy: 'departmentTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '部门类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersENEx.con_UserStateName,
        sortBy: clsQxUsersENEx.con_UserStateName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户状态',
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
        fldName: clsQxUsersENEx.con_CollegeName,
        sortBy: clsQxUsersENEx.con_CollegeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名',
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
        fldName: clsQxUsersENEx.con_SchoolName,
        sortBy: clsQxUsersENEx.con_SchoolName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学校名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersENEx.con_GradeBaseName,
        sortBy: clsQxUsersENEx.con_GradeBaseName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '年级',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 16,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrQxUsersExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refQxUsers_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrQxUsersExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_QxUsers4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(divDataLst, arrQxUsersExObjLst, arrDataColumn, clsQxUsersEN.con_UserId, this);
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrQxUsersExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrQxUsersExObjLst: Array<clsQxUsersENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsQxUsersEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrQxUsersExObjLst) {
        await QxUsersEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_QxUsers4Func(this.listPara.listDiv);
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
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_QxUsers4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_QxUsers4Func.name;
    if (divList == null) {
      const strMsg = Format(
        '用于显示列表的div为空,请检查!(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.listPara.listDiv = divList;
    if (viewVarSet.sortQxUsersBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortQxUsersBy)为空,请检查!(In BindGv_QxUsersCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await CombineQxUsersCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrQxUsersExObjLst: Array<clsQxUsersENEx> = [];
    try {
      this.recCount = await QxUsers_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrQxUsersExObjLst, true);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortQxUsersBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrQxUsersExObjLst = await QxUsersEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrQxUsersExObjLst.length == 0) {
      const strKey = Format('{0}', clsQxUsersEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_QxUsers4Func(divList, arrQxUsersExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objQxUsersENS:源对象
   * @returns 目标对象=>clsQxUsersEN:objQxUsersENT
   **/
  public CopyToEx(objQxUsersENS: clsQxUsersEN): clsQxUsersENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objQxUsersENT = new clsQxUsersENEx();
    try {
      ObjectAssign(objQxUsersENT, objQxUsersENS);
      return objQxUsersENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objQxUsersENT;
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
  public SortFunExportExcel(a: clsQxUsersEN, b: clsQxUsersEN): number {
    if (a.memo == b.memo) {
      if (a.memo == null) return -1;
      if (b.memo == null) return 1;
      return a.memo.localeCompare(b.memo);
    } else {
      if (b.departmentId == null) return -1;
      if (a.departmentId == null) return 1;
      return a.departmentId.localeCompare(b.departmentId);
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
      viewVarSet.sortQxUsersBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (clsQxUsersENEx.hasProperty(sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
      return;
    }
    viewVarSet.sortQxUsersBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    QxUsersCRUD.sortFunStatic = sortFun;
    await this.BindGv_QxUsers4Func(this.listPara.listDiv);
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetConditionInFldValueLst)
   * @returns 相关字段的InFldId列表(Array<string>)
   **/
  public async GetCondition_DepartmentIdLst_In(): Promise<Array<string>> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objQxUsersCond = new clsQxUsersENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    let arrDepartmentIdInclude: Array<string> = [];
    try {
      if (this.departmentTypeId_q != '' && this.departmentTypeId_q != '0') {
        objQxUsersCond.SetCondFldValue(
          clsQxUsersENEx.con_DepartmentTypeId,
          this.departmentTypeId_q,
          '=',
        );

        const arrDepartmentId_DepartmentTypeId = await QxUsersEx_FuncMapKeyDepartmentTypeId(
          objQxUsersCond,
        );
        if (arrDepartmentIdInclude.length == 0) {
          arrDepartmentIdInclude = arrDepartmentId_DepartmentTypeId.map((x) => x.toString());
        } else {
          arrDepartmentIdInclude = intersectSets(
            arrDepartmentIdInclude,
            arrDepartmentId_DepartmentTypeId.map((x) => x.toString()),
          );
        }
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0029)在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return arrDepartmentIdInclude;
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrUserId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrQxUsersObjLst = await QxUsers_GetObjLstByUserIdLstAsync(arrUserId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrQxUsersObjLst) {
        const returnBool = await QxUsers_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          //QxUsers_ReFreshCache();
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
  public async SetRoleId(arrUserId: Array<string>, strRoleId: string) {
    const strThisFuncName = this.SetRoleId.name;
    if (strRoleId == null || strRoleId == '') {
      const strMsg = '请输入角色Id(RoleId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrUserId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrQxUsersObjLst = await QxUsers_GetObjLstByUserIdLstAsync(arrUserId);
      let intCount = 0;
      for (const objInFor of arrQxUsersObjLst) {
        const objQxUsersEN = new clsQxUsersEN();
        ObjectAssign(objQxUsersEN, objInFor);
        objQxUsersEN.SetUserId(objInFor.userId);
        //objQxUsersEN.SetRoleId(strRoleId);
        let returnBool = false;
        try {
          objQxUsersEN.sfUpdFldSetStr = objQxUsersEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await QxUsers_UpdateRecordAsync(objQxUsersEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          //QxUsers_DeleteKeyIdCache(objInFor.userId);
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
        //QxUsers_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 设置字段值-IdSchool
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetIdSchool(arrUserId: Array<string>, strIdSchool: string) {
    const strThisFuncName = this.SetIdSchool.name;
    if (strIdSchool == null || strIdSchool == '') {
      const strMsg = '请输入学校流水号(IdSchool)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrUserId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrQxUsersObjLst = await QxUsers_GetObjLstByUserIdLstAsync(arrUserId);
      let intCount = 0;
      for (const objInFor of arrQxUsersObjLst) {
        const objQxUsersEN = new clsQxUsersEN();
        ObjectAssign(objQxUsersEN, objInFor);
        objQxUsersEN.SetUserId(objInFor.userId);
        objQxUsersEN.SetIdSchool(strIdSchool);
        let returnBool = false;
        try {
          objQxUsersEN.sfUpdFldSetStr = objQxUsersEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await QxUsers_UpdateRecordAsync(objQxUsersEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          //QxUsers_DeleteKeyIdCache(objInFor.userId);
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
        //QxUsers_ReFreshCache();
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
  public async DelMultiRecord(arrUserId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await QxUsers_DelQxUserssAsync(arrUserId);
      if (returnInt > 0) {
        //QxUsers_ReFreshCache();
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
   * @param objQxUsers:需要显示的对象
   **/
  public ShowQxUsersObj(divContainer: HTMLDivElement, objQxUsers: clsQxUsersEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objQxUsers);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objQxUsers.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjQxUsersEN:表实体类对象
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
   * 部门Id (Used In GetConditionInFldValueLst())
   **/
  public get departmentTypeId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlDepartmentTypeId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
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
