//import * as QQ from "q";
import { QxPrjMenusCRUD } from '@/viewsBase/MenuManage_GP/QxPrjMenusCRUD';
import QxPrjMenus_EditEx from '@/viewsShare/MenuManage_GP/QxPrjMenus_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectObjInDivObj,
  GetSelectSelectedIndexInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import {
  QxPrjMenusEx_FuncMapByFldName,
  QxPrjMenusEx_GetObjExLstByPagerAsyncByOrder,
} from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxPrjMenusExWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsQxPrjMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusENEx';

import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { QxRoleMenus_ReFreshCache } from '@/ts/L3ForWApi/MenuManage_GP/clsQxRoleMenusWApi';
import { clsQxRoleMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN';
import { QxPrjMenuSet_GetNameByMenuSetIdCache } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
import { QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { QxRoleMenusEx_SetRoleMenu } from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxRoleMenusExWApi';
import { useQxRoleMenusStore } from '@/store/modulesShare/qxRoleMenus';
import { QxRoleMenusEx_GetMenuIdLstByCmPrjId } from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxRoleMenusExWApi';
import { useUserStore } from '@/store/modulesShare/user';
import { QxPrjMenuSetEx_BindDdl_MenuSetIdQxPrjIdInDivCache } from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxPrjMenuSetExWApi';
import { QxPrjMenus_GetRecCountByCondAsync } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import {
  refQxPrjMenus_Detail,
  refQxPrjMenus_Edit,
  viewVarSet,
  QxPrjId_Local,
  qryVarSet,
  divVarSet,
  featureVarSet,
} from '@/viewsShare/MenuManage_GP/QxPrjMenusVueShare';

/** QxPrjMenusCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class QxPrjMenusCRUDEx extends QxPrjMenusCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //public static mstrSortQxPrjMenusBy = "MenuId";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 15;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QxUsersCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxUsersCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_QxPrjMenus]!${strType}${strPara}`);
    //this.BindGv_QxPrjMenus4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QxPrjMenus':
        this.BindGv_QxPrjMenus4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: QxPrjMenusCRUDEx;
    let objPageEdit;
    if (QxPrjMenusCRUD.objPageCRUD == null) {
      QxPrjMenusCRUD.objPageCRUD = new QxPrjMenusCRUDEx();
      objPage = <QxPrjMenusCRUDEx>QxPrjMenusCRUD.objPageCRUD;
    } else {
      objPage = <QxPrjMenusCRUDEx>QxPrjMenusCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'SetRoleId': //自定义功能:设置角色
        objPage.btnSetRoleId_Click();
        break;
      case 'SetMenuSetId': //自定义功能:设置菜单集
      case 'setMenuSetId': //自定义功能:设置菜单集
        objPage.btnSetMenuSetId_Click();
        break;
      case 'SetInUse': //自定义功能:设置是否在用
        objPage.btnSetInUse_Click();
        break;

      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new QxPrjMenus_EditEx('QxPrjMenus_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refQxPrjMenus_Edit.value.btnQxPrjMenus_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refQxPrjMenus_Detail.value.btnQxPrjMenus_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new QxPrjMenus_EditEx('QxPrjMenus_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refQxPrjMenus_Edit.value.btnQxPrjMenus_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(QxPrjMenusCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      QxPrjId_Local.value = clsSysPara4WebApi.currSelPrjId;
      // QxPrjId_Cache.value = clsSysPara4WebApi.currSelPrjId;
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      // qryVarSet.inUse_q = '是';

      viewVarSet.sortQxPrjMenusBy = 'menuId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_QxPrjMenus4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const strQxPrjId = clsSysPara4WebApi.currSelPrjId; //Session存储、local存储

    // await this.SetDdl_UpMenuIdInDiv(strQxPrjId); //查询区域
    // await this.SetDdl_MenuSetIdInDiv(clsSysPara4WebApi.currSelPrjId); //功能区域
    // BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbIsLeafNode_q');

    // BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbInUse_q');
  }

  /** 函数功能:为功能区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4FeatureRegion)
   **/
  public async BindDdl4FeatureRegion() {
    // await this.SetDdl_MenuSetIdInDivInFeature(clsSysPara4WebApi.cmPrjId); //功能区域
    await this.SetDdl_RoleIdInDivInFeature(clsSysPara4WebApi.currSelPrjId); //功能区域
  }

  // public async SetDdl_MenuSetIdInDiv(strQxPrjId: string) {
  //   await QxPrjMenuSetEx_BindDdl_MenuSetIdQxPrjIdInDivCache(
  //     divVarSet.refDivQuery,
  //     'ddlMenuSetId_q',
  //     strQxPrjId,
  //   ); //
  // }
  public async SetDdl_RoleIdInDivInFeature(strQxPrjId: string) {
    await QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache(
      divVarSet.refDivFunction,
      'ddlRoleId_SetFldValue',
      strQxPrjId,
    ); //
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_QxPrjMenus4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_QxPrjMenus4Func.name;
    if (viewVarSet.sortQxPrjMenusBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortQxPrjMenusBy)为空,请检查!(In BindGv_QxPrjMenusCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineQxPrjMenusCondition();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrQxPrjMenusExObjLst: Array<clsQxPrjMenusENEx> = [];
    try {
      this.recCount = await QxPrjMenus_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const divDataLst: HTMLDivElement = <HTMLDivElement>document.getElementById('divDataLst');
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          strWhereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      // if (viewVarSet.ascOrDesc4SortFun != undefined) {
      //   strSortFun = viewVarSet.ascOrDesc4SortFun(viewVarSet.ascOrDesc4SortFun);
      // }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortQxPrjMenusBy,
        sortFun: strSortFun,
      };
      arrQxPrjMenusExObjLst = await QxPrjMenusEx_GetObjExLstByPagerAsyncByOrder(objPagerPara);
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrQxPrjMenusExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsQxPrjMenusEN._CurrTabName,
        clsSysPara4WebApi.currSelPrjId,
      );
      const strMsg = Format('根据条件获取的记录数为0!(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_QxPrjMenus4Func(divList, arrQxPrjMenusExObjLst);
      //console.log("完成BindGv_QxPrjMenus4Func!");
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 显示QxPrjMenus对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrQxPrjMenusExObjLst:需要绑定的对象列表
   **/
  public async BindTab_QxPrjMenus4Func(
    divContainer: HTMLDivElement,
    arrQxPrjMenusExObjLst: Array<clsQxPrjMenusENEx>,
  ) {
    const strThisFuncName = this.BindTab_QxPrjMenus4Func.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
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
        fldName: clsQxPrjMenusEN.con_MenuId,
        sortBy: clsQxPrjMenusEN.con_MenuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单Id',
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
        fldName: clsQxPrjMenusENEx.con_UpMenuName,
        sortBy: 'upMenuName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '上级菜单名',
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
        fldName: clsQxPrjMenusENEx.con_MenuNameEx,
        sortBy: clsQxPrjMenusEN.con_MenuName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单名',
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
        fldName: clsQxPrjMenusENEx.con_RoleNames,
        sortBy: 'roleNames',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '相关角色',
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
        fldName: clsQxPrjMenusEN.con_LinkFile,
        sortBy: clsQxPrjMenusEN.con_LinkFile,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '链接文件',
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
        fldName: clsQxPrjMenusEN.con_OrderNum,
        sortBy: clsQxPrjMenusEN.con_OrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '排序号',
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
        fldName: clsQxPrjMenusEN.con_IsLeafNode,
        sortBy: clsQxPrjMenusEN.con_IsLeafNode,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '叶子?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Icon',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxPrjMenusEN.con_MenuTitle,
        sortBy: clsQxPrjMenusEN.con_MenuTitle,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单标题',
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
        fldName: clsQxPrjMenusEN.con_InUse,
        sortBy: clsQxPrjMenusEN.con_InUse,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '在用?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Icon',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxPrjMenusENEx.con_DateTimeSim,
        sortBy: 'dateTimeSim',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrQxPrjMenusExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrQxPrjMenusExObjLst,
      arrDataColumn,
      clsQxPrjMenusEN.con_MenuId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrQxPrjMenusExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrQxPrjMenusExObjLst: Array<clsQxPrjMenusENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsQxPrjMenusEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrQxPrjMenusExObjLst) {
        await QxPrjMenusEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }
  /** 设置字段值-InUse
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetInUse_Click() {
    const strThisFuncName = this.btnSetInUse_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置是否在用的记录!');
        return '';
      }
      const strInUse = featureVarSet.inUse_f;
      const bolInUse: boolean = strInUse == '1' ? true : false;
      //console.log('bolInUse=' + bolInUse);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds, bolInUse);
      await this.BindGv_QxPrjMenus4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-RoleId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetRoleId_Click() {
    const strThisFuncName = this.btnSetRoleId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置角色Id的记录!');
        console.error('Error: ', '请选择需要设置角色Id的记录!');
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
      const strMenuSetId = featureVarSet.menuSetId_f;
      if (strMenuSetId == '') {
        const strMsg = '请输入菜单集Id(MenuSetId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      // SetSelectValueByIdInDivObj(divVarSet.refDivQuery, 'ddlMenuSetId_q', strMenuSetId);
      await this.SetRoleId(arrKeyIds, strMenuSetId, strRoleId);
      await this.BindGv_QxPrjMenus4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-MenuSetId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetMenuSetId_Click() {
    const strThisFuncName = this.btnSetMenuSetId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置菜单集Id的记录!');
        return '';
      }
      const strMenuSetId = featureVarSet.menuSetId_f;
      if (strMenuSetId == '') {
        const strMsg = '请输入菜单集Id(MenuSetId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      // SetSelectValueByIdInDivObj(divVarSet.refDivQuery, 'ddlMenuSetId_q', strMenuSetId);
      qryVarSet.menuSetId_q = strMenuSetId;
      //console.log('strMenuSetId=' + strMenuSetId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetMenuSetId(arrKeyIds, strMenuSetId);
      await this.BindGv_QxPrjMenus4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-MenuSetId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetMenuSetId(arrMenuId: Array<string>, strMenuSetId: string) {
    const strThisFuncName = this.SetMenuSetId.name;
    if (strMenuSetId == null || strMenuSetId == '') {
      const strMsg = '请输入菜单集Id(MenuSetId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrMenuId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    const qxRoleMenusStore = useQxRoleMenusStore();
    try {
      const userStore = useUserStore();
      const strRoleId = '00620000';
      // const arrQxRoleMenusObjLst = await QxPrjMenus_GetObjLstByMenuIdLstAsync(arrMenuId);
      let intCount = 0;
      for (const strMenuId of arrMenuId) {
        let returnBool = false;
        try {
          returnBool = await QxRoleMenusEx_SetRoleMenu(
            clsSysPara4WebApi.currSelPrjId,
            clsSysPara4WebApi.cmPrjId,
            strMenuSetId,
            strRoleId,
            strMenuId,
            userStore.getUserId,
          );
          qxRoleMenusStore.delMenuId(strMenuId, clsSysPara4WebApi.currSelPrjId);
          const strTemp = await qxRoleMenusStore.getRefreshMenuId(strMenuId);
          console.log(strTemp);
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
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
        QxRoleMenus_ReFreshCache(clsSysPara4WebApi.currSelPrjId);
      }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 设置字段值-RoleId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetRoleId(arrMenuId: Array<string>, strMenuSetId: string, strRoleId: string) {
    const strThisFuncName = this.SetRoleId.name;
    if (strMenuSetId == null || strMenuSetId == '') {
      const strMsg = '请输入菜单集Id(MenuSetId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (strRoleId == null || strRoleId == '') {
      const strMsg = '请输入角色Id(RoleId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrMenuId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    const userStore = useUserStore();
    const qxRoleMenusStore = useQxRoleMenusStore();
    try {
      let intCount = 0;
      for (const strMenuId of arrMenuId) {
        let returnBool = false;
        try {
          returnBool = await QxRoleMenusEx_SetRoleMenu(
            clsSysPara4WebApi.currSelPrjId,
            clsSysPara4WebApi.cmPrjId,
            strMenuSetId,
            strRoleId,
            strMenuId,
            userStore.getUserId,
          );
          qxRoleMenusStore.delMenuId(strMenuId, clsSysPara4WebApi.currSelPrjId);
          const strTemp = await qxRoleMenusStore.getRefreshMenuId(strMenuId);
          console.log(strTemp);
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
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
        QxRoleMenus_ReFreshCache(clsSysPara4WebApi.currSelPrjId);
      }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineQxPrjMenusCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const qxRoleMenusStore = useQxRoleMenusStore();
    strWhereCond += ` and ${clsQxPrjMenusEN.con_QxPrjId} = '${QxPrjId_Local.value}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.editTabName == clsQxRoleMenusEN._CurrTabName) {
        const arrMenuId = await QxRoleMenusEx_GetMenuIdLstByCmPrjId(
          clsSysPara4WebApi.currSelPrjId,
          clsSysPara4WebApi.cmPrjId,
        );
        strWhereCond += ` and ${clsQxPrjMenusEN.con_MenuId} in (${arrMenuId
          .map((x) => `'${x}'`)
          .join(',')})`;
      }
      if (qryVarSet.menuId_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQxPrjMenusEN.con_MenuId,
          qryVarSet.menuId_q,
        );
      }
      if (qryVarSet.menuName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQxPrjMenusEN.con_MenuName,
          qryVarSet.menuName_q,
        );
      }
      if (qryVarSet.upMenuId_q != '' && qryVarSet.upMenuId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQxPrjMenusEN.con_UpMenuId,
          qryVarSet.upMenuId_q,
        );
      }

      if (qryVarSet.menuTitle_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQxPrjMenusEN.con_MenuTitle,
          qryVarSet.menuTitle_q,
        );
      }
      if (GetSelectSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlbIsLeafNode_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_IsLeafNode);
      } else if (GetSelectSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlbIsLeafNode_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_IsLeafNode);
      }
      if (GetSelectSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlbInUse_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_InUse);
      } else if (GetSelectSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlbInUse_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_InUse);
      }
      if (qryVarSet.menuSetId_q != '' && qryVarSet.menuSetId_q != '0') {
        // const strCmPrjId = await qxPrjMenuSetStore.getCmPrjId(this.menuSetId_q);
        const arrMenuId = await qxRoleMenusStore.getMenuIdsByMenuSetId(qryVarSet.menuSetId_q);
        if (arrMenuId.length == 0) {
          const strMenuSetName = await QxPrjMenuSet_GetNameByMenuSetIdCache(qryVarSet.menuSetId_q);
          const strMsg = `菜单集：{strMenuSetName}没有相应子菜单！`;
          alert(strMsg);
          return strWhereCond;
        }
        const strMenuIdLst = arrMenuId.map((x) => `'${x}'`).join(',');
        // strWhereCond += Format(" And {0} in ()= '{1}'", clsQxPrjMenusEN.con_MenuId, this.menuSetId_q);
        strWhereCond += ` and ${clsQxPrjMenusEN.con_MenuId} in (${strMenuIdLst})`;
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineQxPrjMenusConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  public get editTabName(): string {
    return QxPrjMenusCRUDEx.GetPropValue('editTabName');
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    if (qryVarSet.menuSetId_q == '') {
      alert('请选择一个菜单集！');
      const ddlMenuSetId_q = GetSelectObjInDivObj(divVarSet.refDivQuery, 'ddlMenuSetId_q');
      ddlMenuSetId_q.focus();
      return;
    }
    const userStore = useUserStore();
    userStore.setMenuSetId(qryVarSet.menuSetId_q);
    this.SetCurrPageIndex(1);
    await this.BindGv_QxPrjMenus4Func(divVarSet.refDivList);
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'upMenuName|Ex':
        viewVarSet.sortQxPrjMenusBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'roleNames|Ex':
        viewVarSet.sortQxPrjMenusBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'pageDispModeName|Ex':
        viewVarSet.sortQxPrjMenusBy = `QxPageDispMode|PageDispModeName ${sortDirection}|QxPrjMenus.PageDispModeId = QxPageDispMode.PageDispModeId`;
        break;
      case 'dateTimeSim|Ex':
        viewVarSet.sortQxPrjMenusBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortQxPrjMenusBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_QxPrjMenus4Func(this.thisDivList);
  }
}
