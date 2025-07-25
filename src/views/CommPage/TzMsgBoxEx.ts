import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';

import { enumQuestionType } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';

import { QuestionType_GetObjByQuestionTypeIdCache } from '@/ts/L3ForWApi/SystemSet/clsQuestionTypeWApi';
import {
  GetLi_Empty,
  GetDiv_Empty,
  GetSpan_Empty,
  GetTextAreaEmpty,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { TzMsgBox } from './TzMsgBox';
import { useUserStore } from '@/store/modulesShare/user';

declare const window: any;
/* TzMsgBoxEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class TzMsgBoxEx extends TzMsgBox {
  public static examBatchNo_Static = '';

  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage = TzMsgBoxEx.objPageEdit;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnCloseReturn_Click();
        break;
      case 'CloseReturn': //提交
        objPage.btnCloseReturn_Click();
        break;
      default:
        const strMsg = '命令:' + strCommandName + '在函数(TzMsgBoxEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnOKUpd_Click() {
    const strCommandText: string = this.btnCloseReturn_Click.name;
    const userStore = useUserStore();
    try {
      //判断session是否失效
      if (userStore.userId != '') {
        let strInfo;
        switch (strCommandText) {
          case '关闭':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            const returnBool = await this.CloseBoxReturn();
            strInfo = returnBool ? '修改成功！' : '修改不成功！';
            strInfo += '(In ge_GameLevelCRUD.btnOKUpd_Click)';

            //显示信息框
            console.log(strInfo);
            alert(strInfo);
            if (returnBool == true) {
              // HideDialog();
            }

            break;
          default:
            const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnOKUpd_Click())`;
            alert(strMsg);
            break;
        }
      } else {
        alert('登录超时，请重新登录');
        window.top.location.href = '../Web/Login';
      }
      HideDivInDivObj(TzMsgBox.divEdit, 'divLoading');
      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  //    /* 修改记录
  //(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnShowMsgBox_Click)
  //*/
  //    public async btnShowMsgBox_Click(strKeyId: string, strPara:string) {
  //        this.opType = 'ShowMsgBox';
  //        //const strKeyId = GetFirstCheckedKeyIdInDiv();
  //        if (strKeyId == "") {
  //            alert("请选择需要修改的记录！");
  //            return;
  //        }
  //        TzMsgBoxEx.examBatchNo_Static = strPara;
  //        //读取session角色 来判断绑定不同数据列表
  //        //获取用户角色来判断显示不同的列表数据；
  //        const strUserId = userStore.userId;
  //        const strRoleId = userStore.getRoleId;

  //        //判断角色
  //        //管理员

  //        if (this.bolIsLoadEditRegion == false)  //
  //        {
  //            const responseBool = await this.AddDPV_Edit(this.divName4MsgBox);
  //            // 为编辑区绑定下拉框
  //            const conBindDdl = await this.BindDdl4EditRegionInDiv();
  //            ShowDialog('ShowMsgBox');
  //            this.bolIsLoadEditRegion = true;  //
  //            this.ShowMsgBox(strKeyId);
  //        }
  //        else {
  //            ShowDialog('ShowMsgBox');
  //            this.ShowMsgBox(strKeyId);
  //        }

  //    }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_ShowMsgBox)
   * @param sender">参数列表</param>
   **/
  public async ShowMsgBox(strGameLevelId: string): Promise<boolean> {
    const strThisFuncName = this.ShowMsgBox.name;
    this.keyId = strGameLevelId;
    const strCourseId = clsPubLocalStorage.courseId;
    try {
      console.log('完成ShowMsgBox!');
      return true;
    } catch (e) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnShowMsgBox_Click)
   **/
  public async btnShowMsgBox_Click(strKeyId: string, strPara: string) {
    const strThisFuncName = this.btnShowMsgBox_Click.name;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '显示记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    TzMsgBoxEx.examBatchNo_Static = strPara;
    try {
      //
      const bolIsSuccess = await this.ShowDialog_TzMsgBox(this.opType);
      if (bolIsSuccess == false) return;
      this.opType = 'ShowMsgBox';
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegionInDiv();

      this.bolIsLoadEditRegion = true; //
      this.btnCloseReturn = '关闭';
      const update = await this.ShowMsgBox(strKeyId);
      if (update == false) {
        const strMsg = Format('在显示记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (TzMsgBox.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        this.ShowDialog_TzMsgBox('ShowMsgBox');
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在显示记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
