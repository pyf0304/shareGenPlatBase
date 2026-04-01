/**
 * 类名:QxCmProjectCRUDEx(界面:QxCmProjectCRUD,00140045)
 * 表名:QxCmProject(00140119)
 * 版本:2026.03.27.1(服务器:PYF-AI)
 * 日期:2026/03/31 22:55:56
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:系统管理(SysManage)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { QxCmProjectCRUD } from '@/viewsBase/SysManage/QxCmProjectCRUD';
import { viewVarSet, divVarSet, refQxCmProject_Edit } from '@/views/SysManage/QxCmProjectVueShare';
import { Format } from '@/ts/PubFun/clsString';
import QxCmProject_EditEx from '@/views/SysManage/QxCmProject_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** QxCmProjectCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class QxCmProjectCRUDEx extends QxCmProjectCRUD implements IShowList {
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return this._pageSize ?? 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QxCmProjectCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxCmProjectCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_QxCmProject4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QxCmProject':
        alert('该类没有绑定该函数：[this.BindGv_QxCmProject4Func]!');
        //this.BindGv_QxCmProject4Func(divVarSet.refDivList);
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
    let objPage: QxCmProjectCRUDEx;
    let objPageEdit;
    if (QxCmProjectCRUD.objPageCRUD == null) {
      QxCmProjectCRUD.objPageCRUD = new QxCmProjectCRUDEx();
      objPage = <QxCmProjectCRUDEx>QxCmProjectCRUDEx.objPageCRUD;
    } else {
      objPage = <QxCmProjectCRUDEx>QxCmProjectCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new QxCmProject_EditEx('QxCmProject_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refQxCmProject_Edit.value.btnQxCmProject_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new QxCmProject_EditEx('QxCmProject_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);

        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        const strCmPrjId = strKeyId;
        refQxCmProject_Edit.value.btnQxCmProject_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(QxCmProjectCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case '|Ex':
        viewVarSet.sortQxCmProjectBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'useStateName|Ex':
        viewVarSet.sortQxCmProjectBy = `useStateName ${sortDirection}|(QxUseState)QxCmProject.UseStateId = QxUseState.UseStateId|`;
        break;
      default:
        viewVarSet.sortQxCmProjectBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_QxCmProject4Func(this.listPara.listDiv);
  }
}
