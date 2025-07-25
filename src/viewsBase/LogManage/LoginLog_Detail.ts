﻿/**
 * 类名:LoginLog_Detail(界面:LoginLogCRUD,01120242)
 * 表名:LoginLog(01120357)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/18 01:22:38
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日志管理(LogManage)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { LoginLog_GetObjByLoginLogIdAsync } from '@/ts/L3ForWApi/LogManage/clsLoginLogWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsLoginLogEN } from '@/ts/L0Entity/LogManage/clsLoginLogEN';
import { divVarSet, refLoginLog_Detail } from '@/viewsShare/LogManage/LoginLogVueShare';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* LoginLog_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class LoginLog_Detail {
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  private iShowList: IShowList;
  public mstrListDiv = 'divDataLst';
  public bolIsLoadDetailRegion = false; //记录是否导入编辑区的变量
  public divName4Detail = 'divDetail'; //编辑区的Id
  /**
   * 获取当前组件的divEdit的层对象
   **/
  public get thisDivDetail(): HTMLDivElement {
    return divVarSet.refDivDetail;
  }
  /**
   * 获取当前组件的divEdit的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return divVarSet.refDivDetail;
  }
  constructor(objShowList: IShowList) {
    this.iShowList = objShowList;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_LoginLog() {
    if (LoginLog_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refLoginLog_Detail.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_LoginLog(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_LoginLog.name;
    if (LoginLog_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refLoginLog_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refLoginLog_Detail.value.showDialog();
    }
    divVarSet.refDivDetail = refLoginLog_Detail.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (LoginLog_Detail.times4TestShowDialog < 2) {
        LoginLog_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_LoginLog(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      LoginLog_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelLoginLog = '关闭';
    }
    return true;
  }

  /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_LoginLog('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      const lngKeyId = Number(strKeyId);
      this.DetailRecord(lngKeyId);
    } catch (e) {
      const strMsg = Format(
        '详细信息记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 
 根据关键字详细信息记录
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord)
  <param name = "sender">参数列表</param>
*/
  public async DetailRecord(lngLoginLogId: number): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelLoginLog = '关闭';
    try {
      const objLoginLogEN = await LoginLog_GetObjByLoginLogIdAsync(lngLoginLogId);
      if (objLoginLogEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromLoginLogClass(objLoginLogEN);
      console.log('完成DetailRecord!');
    } catch (e) {
      const strMsg = Format(
        '显示详细信息不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }

  /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
  public async btnDetailRecord_Click(strKeyId: string) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_LoginLog('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    const lngKeyId = Number(strKeyId);
    this.DetailRecord(lngKeyId);
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass)
  <param name = "pobjLoginLogEN">表实体类对象</param>
*/
  public ShowDetailDataFromLoginLogClass(pobjLoginLogEN: clsLoginLogEN) {
    this.loginLogNumber_d = pobjLoginLogEN.loginLogNumber; // LoginLogNumber
    this.loginIP_d = pobjLoginLogEN.loginIP; // LoginIP
    this.failReason_d = pobjLoginLogEN.failReason; // FailReason
    this.loginResult_d = pobjLoginLogEN.loginResult; // LoginResult
    this.loginTime_d = pobjLoginLogEN.loginTime; // LoginTime
    this.loginUserId_d = pobjLoginLogEN.loginUserId; // LoginUserId
    this.onlineTime_d = pobjLoginLogEN.onlineTime; // OnlineTime
    this.outTime_d = pobjLoginLogEN.outTime; // OutTime
    this.memo_d = pobjLoginLogEN.memo; // 备注
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelLoginLog(value: string) {
    refLoginLog_Detail.value.strCancelButtonText = value;
  }
  /**
   * FailReason (Used In ShowDetailDataFromClass())
   **/
  public set failReason_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblFailReason_d', value);
  }
  /**
   * LoginIP (Used In ShowDetailDataFromClass())
   **/
  public set loginIP_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblLoginIP_d', value);
  }
  /**
   * LoginLogNumber (Used In ShowDetailDataFromClass())
   **/
  public set loginLogNumber_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblLoginLogNumber_d', value);
  }
  /**
   * LoginResult (Used In ShowDetailDataFromClass())
   **/
  public set loginResult_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblLoginResult_d', value);
  }
  /**
   * LoginTime (Used In ShowDetailDataFromClass())
   **/
  public set loginTime_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblLoginTime_d', value);
  }
  /**
   * LoginUserId (Used In ShowDetailDataFromClass())
   **/
  public set loginUserId_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblLoginUserId_d', value);
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblMemo_d', value);
  }
  /**
   * OnlineTime (Used In ShowDetailDataFromClass())
   **/
  public set onlineTime_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblOnlineTime_d', value);
  }
  /**
   * OutTime (Used In ShowDetailDataFromClass())
   **/
  public set outTime_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblOutTime_d', value);
  }
}
