/**
 * 类名:QxDepartmentInfo_DetailEx(界面:QxDepartmentInfoCRUD,00140034)
 * 表名:QxDepartmentInfo(00140030)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/10 06:59:52
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:系统参数(SysPara)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { QxDepartmentInfo_Detail } from '@/viewsBase/UserManage_GP/QxDepartmentInfo_Detail';
import QxDepartmentInfoCRUDEx from '@/viewsShare/UserManage/QxDepartmentInfoCRUDEx';
/* QxDepartmentInfo_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class QxDepartmentInfo_DetailEx extends QxDepartmentInfo_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objQxDepartmentInfoCRUD: QxDepartmentInfoCRUDEx = new QxDepartmentInfoCRUDEx();
    const objPage: QxDepartmentInfo_DetailEx = new QxDepartmentInfo_DetailEx(
      objQxDepartmentInfoCRUD,
    );
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(QxDepartmentInfo_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
