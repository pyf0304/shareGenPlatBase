/**
 * 类名:QxPrjUserRelation_EditEx(界面:QxPrjUserRelationCRUD,00140031)
 * 表名:QxPrjUserRelation(00140031)
 * 版本:2024.11.13.2(服务器:WIN-SRV103-116)
 * 日期:2024/11/16 11:33:49
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433MSEduSys
 * PrjDataBaseId:0199
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS,0258)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { message } from '@/utils/myMessage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { QxPrjUserRelation_Edit } from '@/viewsBase/UserManage_GP/QxPrjUserRelation_Edit';
/* QxPrjUserRelation_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class QxPrjUserRelation_EditEx extends QxPrjUserRelation_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: QxPrjUserRelation_EditEx = <QxPrjUserRelation_EditEx>(
      QxPrjUserRelation_Edit.GetPageEditObj('QxPrjUserRelation_EditEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[QxPrjUserRelation_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
      console.error(strMsg);
      message.warning(strMsg);
      return;
    }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(Number(strKeyId));
        } else {
          objPage.btnUpdateRecord_Click(Number(strKeyId));
        }
        break;
      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          strKeyId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
