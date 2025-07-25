/**
 * 类名:QxUsers_DetailEx(界面:QxUsersCRUD,00140033)
 * 表名:QxUsers(00140015)
 * 版本:2024.09.16.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/25 10:09:51
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433MSEduSys
 * PrjDataBaseId:0199
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { QxUsers_Detail } from '@/viewsBase/UserManage_GP/QxUsers_Detail';
import QxUsersCRUDEx from '@/viewsShare/UserManage_GP/QxUsersCRUDEx';
/* QxUsers_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class QxUsers_DetailEx extends QxUsers_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objQxUsersCRUD: QxUsersCRUDEx = new QxUsersCRUDEx();
    const objPage: QxUsers_DetailEx = new QxUsers_DetailEx(objQxUsersCRUD);

    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(QxUsers_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
