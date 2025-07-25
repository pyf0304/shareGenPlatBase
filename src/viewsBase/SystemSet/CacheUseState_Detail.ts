/**
 * 类名:CacheUseState_Detail(界面:CacheUseStateCRUD,01120263)
 * 表名:CacheUseState(01120689)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/10 13:12:34
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:系统设置(SystemSet)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { CacheUseState_GetObjBymIdAsync } from '@/ts/L3ForWApi/SystemSet/clsCacheUseStateWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCacheUseStateEN } from '@/ts/L0Entity/SystemSet/clsCacheUseStateEN';
import { divVarSet, refCacheUseState_Detail } from '@/viewsShare/SystemSet/CacheUseStateVueShare';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* CacheUseState_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class CacheUseState_Detail {
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
  public HideDialog_CacheUseState() {
    if (CacheUseState_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refCacheUseState_Detail.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_CacheUseState(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_CacheUseState.name;
    if (CacheUseState_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refCacheUseState_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refCacheUseState_Detail.value.showDialog();
    }
    divVarSet.refDivDetail = refCacheUseState_Detail.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (CacheUseState_Detail.times4TestShowDialog < 2) {
        CacheUseState_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_CacheUseState(strOp);
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
      CacheUseState_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelCacheUseState = '关闭';
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
    const bolIsSuccess = await this.ShowDialog_CacheUseState('Detail');
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
  public async DetailRecord(lngmId: number): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelCacheUseState = '关闭';
    try {
      const objCacheUseStateEN = await CacheUseState_GetObjBymIdAsync(lngmId);
      if (objCacheUseStateEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromCacheUseStateClass(objCacheUseStateEN);
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
    const bolIsSuccess = await this.ShowDialog_CacheUseState('Detail');
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
  <param name = "pobjCacheUseStateEN">表实体类对象</param>
*/
  public ShowDetailDataFromCacheUseStateClass(pobjCacheUseStateEN: clsCacheUseStateEN) {
    this.userId_d = pobjCacheUseStateEN.userId; // 用户ID
    this.cacheModeId_d = pobjCacheUseStateEN.cacheModeId; // 缓存方式Id
    this.cacheKey_d = pobjCacheUseStateEN.cacheKey; // 缓存关键字
    this.cacheSize_d = pobjCacheUseStateEN.cacheSize; // 缓存大小
    this.useDate_d = pobjCacheUseStateEN.useDate; // 使用日期
    this.memo_d = pobjCacheUseStateEN.memo; // 备注
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelCacheUseState(value: string) {
    refCacheUseState_Detail.value.strCancelButtonText = value;
  }
  /**
   * 缓存关键字 (Used In ShowDetailDataFromClass())
   **/
  public set cacheKey_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblCacheKey_d', value);
  }
  /**
   * 缓存方式Id (Used In ShowDetailDataFromClass())
   **/
  public set cacheModeId_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblCacheModeId_d', value);
  }
  /**
   * 缓存大小 (Used In ShowDetailDataFromClass())
   **/
  public set cacheSize_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      divVarSet.refDivDetail,
      'lblCacheSize_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblMemo_d', value);
  }
  /**
   * 使用日期 (Used In ShowDetailDataFromClass())
   **/
  public set useDate_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblUseDate_d', value);
  }
  /**
   * 用户ID (Used In ShowDetailDataFromClass())
   **/
  public set userId_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblUserId_d', value);
  }
}
