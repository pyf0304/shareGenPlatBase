/**
 * 类名:QxRolesCRUDEx(界面:QxRolesCRUD,00140036)
 * 表名:QxRoles(00140014)
 * 版本:2024.11.13.2(服务器:WIN-SRV103-116)
 * 日期:2024/11/16 11:33:41
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433MSEduSys
 * PrjDataBaseId:0199
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { QxRolesCRUD } from '@/viewsBase/UserManage_GP/QxRolesCRUD';
import {
  viewVarSet,
  divVarSet,
  refQxRoles_Edit,
  refQxRoles_Detail,
} from '@/viewsShare/UserManage_GP/QxRolesVueShare';
import { Format } from '@/ts/PubFun/clsString';
import QxRoles_EditEx from '@/viewsShare/UserManage_GP/QxRoles_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** QxRolesCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class QxRolesCRUDEx extends QxRolesCRUD implements IShowList {
  //public static mstrSortQxRolesBy = "RoleId";
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
    console.log('InitVarSet in QxRolesCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxRolesCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_QxRoles]!${strType}${strPara}`);
    //this.BindGv_QxRolesCache(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QxRoles':
        this.BindGv_QxRoles4Func(divVarSet.refDivList);
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
    let objPage: QxRolesCRUDEx;
    let objPageEdit;
    if (QxRolesCRUD.objPageCRUD == null) {
      QxRolesCRUD.objPageCRUD = new QxRolesCRUDEx();
      objPage = <QxRolesCRUDEx>QxRolesCRUDEx.objPageCRUD;
    } else {
      objPage = <QxRolesCRUDEx>QxRolesCRUDEx.objPageCRUD;
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
        objPageEdit = new QxRoles_EditEx('QxRoles_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refQxRoles_Edit.value.btnQxRoles_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refQxRoles_Detail.value.btnQxRoles_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new QxRoles_EditEx('QxRoles_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refQxRoles_Edit.value.btnQxRoles_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:${strCommandName}在函数(QxRolesCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'userTypeNameSim|Ex':
        viewVarSet.sortQxRolesBy = `UserType|userTypeNameSim ${sortDirection}|QxRoles.UserTypeId = UserType.UserTypeId`;
        break;
      case 'roleTypeName|Ex':
        viewVarSet.sortQxRolesBy = `RoleType|roleTypeName ${sortDirection}|QxRoles.RoleTypeId = RoleType.RoleTypeId`;
        break;
      default:
        viewVarSet.sortQxRolesBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_QxRoles4Func(this.listPara.listDiv);
  }
}
