/**
 * 类名:QxRoleRightRelationCRUDEx(界面:QxRoleRightRelationCRUD,00140044)
 * 表名:QxRoleRightRelation(00140118)
 * 版本:2024.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/24 09:55:26
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { QxRoleRightRelationCRUD } from '@/viewsBase/UserManage_GP/QxRoleRightRelationCRUD';
import {
  viewVarSet,
  divVarSet,
  refQxRoleRightRelation_Edit,
} from '@/viewsShare/UserManage_GP/QxRoleRightRelationVueShare';
import { Format } from '@/ts/PubFun/clsString';
import QxRoleRightRelation_EditEx from '@/viewsShare/UserManage_GP/QxRoleRightRelation_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** QxRoleRightRelationCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class QxRoleRightRelationCRUDEx extends QxRoleRightRelationCRUD implements IShowList {
  //public static mstrSortQxRoleRightRelationBy = "mId";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QxRoleRightRelationCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxRoleRightRelationCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_QxRoleRightRelation]!${strType}${strPara}`);
    //this.BindGv_QxRoleRightRelation4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QxRoleRightRelation':
        this.BindGv_QxRoleRightRelation4Func(divVarSet.refDivList);
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
    let objPage: QxRoleRightRelationCRUDEx;
    let objPageEdit;
    if (QxRoleRightRelationCRUD.objPageCRUD == null) {
      QxRoleRightRelationCRUD.objPageCRUD = new QxRoleRightRelationCRUDEx();
      objPage = <QxRoleRightRelationCRUDEx>QxRoleRightRelationCRUDEx.objPageCRUD;
    } else {
      objPage = <QxRoleRightRelationCRUDEx>QxRoleRightRelationCRUDEx.objPageCRUD;
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
        objPageEdit = new QxRoleRightRelation_EditEx('QxRoleRightRelation_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refQxRoleRightRelation_Edit.value.btnQxRoleRightRelation_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new QxRoleRightRelation_EditEx('QxRoleRightRelation_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refQxRoleRightRelation_Edit.value.btnQxRoleRightRelation_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
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
        strMsg = `命令:${strCommandName}在函数(QxRoleRightRelationCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'roleName|Ex':
        viewVarSet.sortQxRoleRightRelationBy = `QxRoles|RoleName ${sortDirection}|QxRoleRightRelation.RoleId = QxRoles.RoleId`;
        break;
      case 'myRoleName|Ex':
        viewVarSet.sortQxRoleRightRelationBy = `QxRoles|MyRoleName ${sortDirection}|QxRoleRightRelation.RoleId = QxRoles.RoleId`;
        break;
      case 'prjName|Ex':
        viewVarSet.sortQxRoleRightRelationBy = `QxProjects|PrjName ${sortDirection}|QxRoleRightRelation.QxPrjId = QxProjects.QxPrjId`;
        break;
      case 'dateTimeSim|Ex':
        viewVarSet.sortQxRoleRightRelationBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortQxRoleRightRelationBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_QxRoleRightRelation4Func(divVarSet.refDivList);
  }
}
