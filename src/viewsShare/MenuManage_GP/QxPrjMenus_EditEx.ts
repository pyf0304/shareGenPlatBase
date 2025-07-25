/**
 * 类名:QxPrjMenus_EditEx(界面:QxPrjMenusCRUD)
 * 表名:QxPrjMenus(00140004)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/01 21:14:40
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { useUserStore } from '@/store/modulesShare/user';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { QxPrjMenus_GetMaxStrIdByPrefixAsync } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ClearSelectValueByIdInDivObj, SetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { message } from '@/utils/myMessage';
import { QxPrjMenus_Edit } from '@/viewsBase/MenuManage_GP/QxPrjMenus_Edit';
import { refQxPrjMenus_Edit, divVarSet } from '@/viewsShare/MenuManage_GP/QxPrjMenusVueShare';
import { QxPrjId_Local } from '@/viewsShare/MenuManage_GP/QxRoleMenusVueShare';
/* QxPrjMenus_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class QxPrjMenus_EditEx extends QxPrjMenus_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: QxPrjMenus_EditEx = <QxPrjMenus_EditEx>(
      QxPrjMenus_Edit.GetPageEditObj('QxPrjMenus_EditEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[QxPrjMenus_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
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
        break;
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
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(strKeyId);
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
  public async PutDataToQxPrjMenusClass(pobjQxPrjMenusEN: clsQxPrjMenusEN) {
    const userStore = useUserStore();
    pobjQxPrjMenusEN.SetMenuId(this.keyId); // 菜单Id
    pobjQxPrjMenusEN.SetMenuName(refQxPrjMenus_Edit.value.menuName); // 菜单名
    pobjQxPrjMenusEN.SetQxPrjId(clsSysPara4WebApi.currSelPrjId); // 项目Id
    pobjQxPrjMenusEN.SetMenuTitle(refQxPrjMenus_Edit.value.menuTitle); // 菜单标题
    pobjQxPrjMenusEN.SetMenuControlName(refQxPrjMenus_Edit.value.menuControlName); // 菜单控件名
    pobjQxPrjMenusEN.SetUpMenuId(refQxPrjMenus_Edit.value.upMenuId); // 上级菜单Id
    if (pobjQxPrjMenusEN.upMenuId == '') pobjQxPrjMenusEN.SetUpMenuId('00000000');
    pobjQxPrjMenusEN.SetLinkFile(refQxPrjMenus_Edit.value.linkFile); // 链接文件
    pobjQxPrjMenusEN.SetqsParameters(refQxPrjMenus_Edit.value.qsParameters); // qs参数
    pobjQxPrjMenusEN.SetPageDispModeId(refQxPrjMenus_Edit.value.pageDispModeId); // 显示模式
    pobjQxPrjMenusEN.SetImgFile(refQxPrjMenus_Edit.value.imgFile); // 图像文件
    pobjQxPrjMenusEN.SetOrderNum(refQxPrjMenus_Edit.value.orderNum); // 排序号
    pobjQxPrjMenusEN.SetIsLeafNode(refQxPrjMenus_Edit.value.isLeafNode); // 是否叶子
    pobjQxPrjMenusEN.SetInUse(refQxPrjMenus_Edit.value.inUse); // 是否在用
    pobjQxPrjMenusEN.SetMemo(refQxPrjMenus_Edit.value.memo); // 备注
    pobjQxPrjMenusEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjQxPrjMenusEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucQxPrjMenusB1.menuId = QxPrjMenusGetMaxStrId_S();
    refQxPrjMenus_Edit.value.inUse = true;
    try {
      const returnString = await QxPrjMenus_GetMaxStrIdByPrefixAsync(QxPrjId_Local.value);
      if (returnString == '') {
        const strInfo = Format('获取表QxPrjMenus的最大关键字为空,不成功,请检查!');
        //显示信息框
        alert(strInfo);
      } else {
        this.keyId = returnString;
      }
    } catch (e) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    // this.menuId = '';
    refQxPrjMenus_Edit.value.menuName = '';
    refQxPrjMenus_Edit.value.menuTitle = '';
    refQxPrjMenus_Edit.value.menuControlName = '';
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlUpMenuId');
    refQxPrjMenus_Edit.value.linkFile = '';
    refQxPrjMenus_Edit.value.qsParameters = '';
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlPageDispModeId');
    refQxPrjMenus_Edit.value.imgFile = '';
    refQxPrjMenus_Edit.value.orderNum = 0;
    refQxPrjMenus_Edit.value.isLeafNode = false;
    refQxPrjMenus_Edit.value.inUse = false;
    refQxPrjMenus_Edit.value.memo = '';
  }
  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjQxPrjMenusEN">表实体类对象</param>
   **/
  public async GetDataFromQxPrjMenusClass(pobjQxPrjMenusEN: clsQxPrjMenusEN) {
    // this.menuId = pobjQxPrjMenusEN.menuId; // 菜单Id
    refQxPrjMenus_Edit.value.menuName = pobjQxPrjMenusEN.menuName; // 菜单名
    refQxPrjMenus_Edit.value.menuTitle = pobjQxPrjMenusEN.menuTitle; // 菜单标题
    refQxPrjMenus_Edit.value.menuControlName = pobjQxPrjMenusEN.menuControlName; // 菜单控件名
    refQxPrjMenus_Edit.value.upMenuId = pobjQxPrjMenusEN.upMenuId; // 上级菜单Id
    refQxPrjMenus_Edit.value.linkFile = pobjQxPrjMenusEN.linkFile; // 链接文件
    refQxPrjMenus_Edit.value.qsParameters = pobjQxPrjMenusEN.qsParameters; // qs参数
    refQxPrjMenus_Edit.value.pageDispModeId = pobjQxPrjMenusEN.pageDispModeId; // 显示模式
    refQxPrjMenus_Edit.value.imgFile = pobjQxPrjMenusEN.imgFile; // 图像文件
    refQxPrjMenus_Edit.value.orderNum = pobjQxPrjMenusEN.orderNum; // 排序号
    refQxPrjMenus_Edit.value.isLeafNode = pobjQxPrjMenusEN.isLeafNode; // 是否叶子
    refQxPrjMenus_Edit.value.inUse = pobjQxPrjMenusEN.inUse; // 是否在用
    refQxPrjMenus_Edit.value.memo = pobjQxPrjMenusEN.memo; // 备注
  }
}
