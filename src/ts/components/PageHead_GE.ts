import $ from 'jquery';
import { message } from '@/utils/myMessage';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { SetAHtmlInDivObj, SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { useUserStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PageHead_GE {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面

    try {
      const userStore = useUserStore();
      if (userStore.getUserId != '') {
        SetAHtmlInDivObj(
          PageHead_GE.divLayout,
          'lnkUserName',
          `${userStore.getUserName}(${userStore.getRoleName})`,
        );

        $('#spanMajorName').html(`${userStore.getMajorName}专业`);

        // 判断角色
        // 管理员
        const isShowEduCls = PageHead_GE.GetPropValue('isShowEduCls');
        if (isShowEduCls == 'true') {
          let strMsg = '';
          switch (userStore.getRoleId) {
            case enumQxRoles.System_Admin_00620001: //系统管理员
            case enumQxRoles.Secondary_School_System_Admin_00620018: //中学管理员
            case enumQxRoles.University_System_Admin_00620019: //中学管理员
              break;
            case '00620002':
            case '00620013':
              break;
            case '00620003':
            case enumQxRoles.High_School_Student_00620017:
              //学生

              break;
            default:
              strMsg = `角色:[${userStore.getRoleName}(${userStore.getRoleId})]在switch中没有被处理，请联系管理员！`;
              console.error(strMsg);
              alert(strMsg);
              break;
          }

          // const isShowTopic = PageHead_GE.GetPropValue('isShowTopic');
          // if (isShowTopic == 'true') {
          //   setTimeout(() => {
          //     this.Bind_TopicList();
          //   }, 200);
          // }

          //$("#divLoading").hide();
        }
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班教师
  public static async EduCls_Click(
    divName: HTMLDivElement,
    strIdCurrEduCls: string,
    strEduName: string,
    strTypeID: string,
  ) {
    //$("#hidIdCurrEduCls").val(strkey);
    // $('#spnEduClsName_Head').html(strEduName);
    SetSpanHtmlInDivObj(PageHead_GE.divLayout, 'spnEduClsName_Head', strEduName);
    clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strEduName;

    // $('#Paper_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Paper_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    message.success('已切换教学班！');
  }

  public static async Topic_Click(strTopicId: string, strTopicName: string) {
    //$("#hidIdCurrEduCls").val(strkey);
    // $('#spnEduClsName_Head').html(strEduName);
    SetSpanHtmlInDivObj(PageHead_GE.divLayout, 'spnTopicName_Head', strTopicName);
    clsPubLocalStorage.idCurrEduCls = strTopicId;

    clsPubLocalStorage.topicName = strTopicName;

    // $('#Paper_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Paper_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    message.success('已切换教学班！');
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    // const objPage = new SysScoreSummaryCRUD();
    console.log(strKeyId);

    switch (strCommandName) {
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要复制的记录！');
        //   return;
        // }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PageHead_GE.btn_Click');

        break;
    }
  }
}
