/**
 * 类名:QxRoles_DetailEx(界面:QxRolesCRUD,00140036)
 * 表名:QxRoles(00140014)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/19 11:27:34
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { QxRoles_Detail } from '@/viewsBase/UserManage_GP/QxRoles_Detail';
import QxRolesCRUDEx from '@/viewsShare/UserManage_GP/QxRolesCRUDEx';
/* QxRoles_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class QxRoles_DetailEx extends QxRoles_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objQxRolesCRUD: QxRolesCRUDEx = new QxRolesCRUDEx();
    const objPage: QxRoles_DetailEx = new QxRoles_DetailEx(objQxRolesCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(QxRoles_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
