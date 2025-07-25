<template>
  <div id="divLayout" ref="refDivLayout" class="app-container">
    <!-- 顶部开始 -->
    <header>
      <PageHeadCom
        ref="PageHeadRef"
        :title="strTitle"
        :isShowEduCls="'true'"
        :header-height="'60px'"
        :is-show-paper-iframe="'false'"
        :is-show-topic="'false'"
        :is-show-search="'false'"
        :is-show-major="'true'"
        :is-show-attention="'true'"
        :paper-id="''"
      ></PageHeadCom>
    </header>
    <!-- 顶部结束 -->
    <!-- 中部开始 -->
    <div class="main-content">
      <!-- 左侧菜单开始 -->
      <aside class="sidebar">
        <!-- 菜单内容 -->
        <!-- <ul>
          <li v-for="module in menu" :key="module.name">
            {{ module.name }}
            <ul>
              <li v-for="item in module.items" :key="item.name">
                <button @click="addTab(module.name, item.name)">
                  {{ item.name }}
                </button>
              </li>
            </ul>
          </li>
        </ul> -->
        <!-- 菜单内容 -->
        <!-- <div> -->
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)">游戏化学习平台</a>
          </div>
        </nav>
        <div class="container-fluid">
          <ul class="nav flex-column">
            <li class="nav-item" v-for="(module, index) in menu" :key="index">
              <a
                class="nav-link module-name"
                :class="{ active: module.active }"
                href="javascript:void"
                @click="toggleActive(module)"
              >
                {{ module.name }}
              </a>
              <ul class="nav flex-column ml-1" v-if="module.active">
                <li class="nav-item" v-for="(item, idx) in module.items" :key="idx">
                  <a
                    class="nav-link item-name"
                    :class="{ item_active: item.active }"
                    href="javascript:void"
                    @click="addTab(module.name, item.name)"
                    >{{ item.name }}
                  </a>
                </li>
              </ul>
              <!-- 分隔底纹 -->
              <!-- <hr class="module-divider mt-1" v-if="index !== menu.length - 1" /> -->
            </li>
          </ul>
        </div>
        <!-- </div> -->
      </aside>
      <!-- <div class="x-slide_left"></div> -->
      <!-- 左侧菜单结束 -->
      <!-- 右侧主体开始 -->
      <main class="content">
        <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
          <ul class="layui-tab-title">
            <li class="home"> <font-awesome-icon icon="fa-regular fa-heart" />我的桌面 </li>
          </ul>
          <div id="tab_right" class="layui-unselect layui-form-select layui-form-selected">
            <dl>
              <dd data-type="this">关闭当前</dd>
              <dd data-type="other">关闭其它</dd>
              <dd data-type="all">关闭全部</dd>
            </dl>
          </div>
          <!-- <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
              <iframe
                id="Index_iframe"
                src="../Web/Welcome"
                frameborder="0"
                scrolling="yes"
                class="x-iframe"
              ></iframe>
            </div>
          </div> -->

          <el-tabs v-model="currentTab">
            <el-tab-pane v-for="tab in tabs" :key="tab.name">
              <template v-slot:label>
                <span class="mr-2">{{ tab.label }}</span>
                <span>&nbsp;&nbsp;</span>

                <a href="javascript:void(0)" class="ml-2" title="移除该页面" @click="closeTab(tab)">
                  <font-awesome-icon icon="times" style="color: rgb(164, 207, 247)" />
                </a>
              </template>
              <component :is="tab.component" :paras="tab.paras"></component>
            </el-tab-pane>
          </el-tabs>

          <div id="tab_show"></div>
        </div>
      </main>
      <div class="page-content-bg"></div>
    </div>
    <!-- 右侧主体结束 -->
    <!-- 中部结束 -->

    <input id="hidPage" type="hidden" />
  </div>
</template>
<script lang="ts">
  import $ from 'jquery';
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import { markRaw, computed, defineComponent, onMounted, ref } from 'vue';

  // import UsersCRUD0 from '@/viewsShare/UserManage/UsersCRUD.vue';
  import QxRoleRightRelationCRUD0 from '@/viewsShare/UserManage_GP/QxRoleRightRelationCRUD.vue';

  import QxUsersCRUD0 from '@/viewsShare/UserManage_GP/QxUsersCRUD.vue';
  import QxRolesCRUD0 from '@/viewsShare/UserManage_GP/QxRolesCRUD.vue';
  import QxUserRoleRelationCRUD0 from '@/viewsShare/UserManage_GP/QxUserRoleRelationCRUD.vue';

  import QxPrjMenusCRUD0 from '@/viewsShare/MenuManage_GP/QxPrjMenusCRUD.vue';
  import QxRoleMenusCRUD0 from '@/viewsShare/MenuManage_GP/QxRoleMenusCRUD.vue';
  import QxPotenceTypeCRUD0 from '@/viewsShare/PotenceMan/QxPotenceTypeCRUD.vue';
  import QxPrjPotenceCRUD0 from '@/viewsShare/PotenceMan/QxPrjPotenceCRUD.vue';

  // import PersonalKnowledgeView0 from '@/views/GradEduTopic/PersonalKnowledgeView.vue';
  // import gs_UserConfig0 from '@/views/GradEduTools/gs_UserConfig.vue';
  import CacheUseStateCRUD0 from '@/viewsShare/SystemSet/CacheUseStateCRUD.vue';
  import XzSchoolCRUD0 from '@/viewsShare/SystemSet/XzSchoolCRUD.vue';

  // import SysCommentTypeCRUD0 from '@/views/RT_Params/SysCommentTypeCRUD.vue';

  import Welcome0 from '@/views/web/Welcome.vue';

  import UploadXlsFile0 from '@/viewsShare/tools/UploadXlsFile.vue';

  import router from '@/router';

  import { IndexIframe } from '@/views/web/GPIndexIframe';
  import { message } from '@/utils/myMessage';
  import { GetDivObjInDivObj, GetDivObjInDivObjN } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import PageHeadCom from '@/ts/components/PageHead_GE.vue';
  import { useQxRoleMenusStore } from '@/store/modulesShare/qxRoleMenus';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { useRoute } from 'vue-router';
  import { refDivLayout } from './GPIndexIframeVueShare';
  // 定义 item 的类型
  interface Item {
    name: string;
    title: string;
    active: boolean;
    component: any; // 根据实际情况定义类型
    paras: string;
  }
  export default defineComponent({
    name: 'PaperIframe',
    components: {
      // 组件注册
      //   Paper_QUDI,
      //   Paper_List,
      //   SysScoreSummaryNewTotal,
      PageHeadCom,
    },
    props: {
      page: {
        type: String,
        required: false,
      },
    },
    setup(props) {
      const userStore = useUserStore();
      const qxRoleMenusStore = useQxRoleMenusStore();
      const route = useRoute(); // 获取当前路由信息
      const strTitle = ref('游戏化学习-后台管理');

      // const About = markRaw(About0);
      const menuSetId = ref('');

      // const UsersCRUD = markRaw(UsersCRUD0);
      const QxRoleRightRelationCRUD = markRaw(QxRoleRightRelationCRUD0);

      const QxUsersCRUD = markRaw(QxUsersCRUD0);
      const QxRolesCRUD = markRaw(QxRolesCRUD0);
      const QxUserRoleRelationCRUD = markRaw(QxUserRoleRelationCRUD0);
      const QxPrjMenusCRUD = markRaw(QxPrjMenusCRUD0);
      const QxRoleMenusCRUD = markRaw(QxRoleMenusCRUD0);
      const QxPotenceTypeCRUD = markRaw(QxPotenceTypeCRUD0);
      const QxPrjPotenceCRUD = markRaw(QxPrjPotenceCRUD0);

      // const PersonalKnowledgeView = markRaw(PersonalKnowledgeView0);
      // const gs_UserConfig = markRaw(gs_UserConfig0);
      const CacheUseStateCRUD = markRaw(CacheUseStateCRUD0);
      const XzSchoolCRUD = markRaw(XzSchoolCRUD0);

      // const SysCommentTypeCRUD = markRaw(SysCommentTypeCRUD0);

      const Welcome = markRaw(Welcome0);
      // 菜单数据
      const menu = ref([
        {
          name: '用户管理',
          active: false,
          items: [
            // { name: '用户维护', title: '', active: false, component: UsersCRUD, paras: '' },
            // <a @click="xadmin.add_tab('用户维护','../UserManage/Users_QUDI')">
            { name: '平台用户维护', title: '', active: false, component: QxUsersCRUD, paras: '' },
            { name: '平台角色维护', title: '', active: false, component: QxRolesCRUD, paras: '' },

            {
              name: '用户角色关系维护',
              title: '',
              active: false,
              component: QxUserRoleRelationCRUD,
              paras: '',
            },

            {
              name: '工程菜单维护',
              title: '',
              active: false,
              component: QxPrjMenusCRUD,
              paras: 'EditTabName=QxPrjMenus',
            },
            {
              name: '角色菜单',
              title: '',
              active: false,
              component: QxRoleMenusCRUD,
              paras: 'EditTabName=QxRoleMenus',
            },
            // <a @click="xadmin.add_tab('用户维护','../UserManage/Users_QUDI')">
            {
              name: '权限类型维护',
              title: '',
              active: false,
              component: QxPotenceTypeCRUD,
              paras: '',
            },
            {
              name: '权限维护',
              title: '',
              active: false,
              component: QxPrjPotenceCRUD,
              paras: '',
            },

            {
              name: '角色赋权关系',
              title: '',
              active: false,
              component: QxRoleRightRelationCRUD,
              paras: '',
            },
          ],
        },

        {
          name: '系统设置',
          active: false,
          items: [
            // <a  @click="xadmin.add_tab('分数权重管理','../ParameterTable/SysScoreWeight_QUDI_TS')"
            // {
            //   name: '个人知识点查看',
            //   title: '',
            //   active: false,
            //   component: PersonalKnowledgeView,
            //   paras: '',
            // },
            // <a  @click="xadmin.add_tab('个人知识点查看', '../GradEduTopic/PersonalKnowledgeView')"

            // <a @click="xadmin.add_tab('各观点分享配置', '../GradEduTools/gs_UserConfig')">
            { name: '缓存配置', title: '', active: false, component: CacheUseStateCRUD, paras: '' },
            { name: '学校维护', title: '', active: false, component: XzSchoolCRUD, paras: '' },

            // <a @click="xadmin.add_tab('缓存配置', '../SystemSet_Share/CacheUseStateCRUD')">

            // <a  @click="xadmin.add_tab('评论类型管理','../GradEduTopic/SysCommentType_QUDI_TS')"

            // <a onclick="xadmin.add_tab('个人知识点查看', '../GraduateEduTopic/PersonalKnowledgeView')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>个人知识点查看</cite>
            // </a>
            // {
            //   name: '个人知识点查看',
            //   title: '',
            //   active: false,
            //   component: PersonalKnowledgeView,
            //   paras: '',
            // },
          ],
        },
      ]);

      const tabs = ref<any[]>([
        {
          label: '欢迎',
          name: 'Welcome',
          component: Welcome,
          paras: '',
        },
      ]);
      // 当前标签页
      const currentTab = ref('');
      const lastCurrentTab = ref('');
      // 添加标签页
      const addTab = (moduleName: string, componentName: string) => {
        const existingTab = tabs.value.find((tab: any) => tab.name === componentName);
        if (!existingTab) {
          const selectedModule = menu.value.find((module: any) => module.name === moduleName);
          if (selectedModule) {
            const selectedComponent = (selectedModule.items as Item[]).find(
              (item: any) => item.name === componentName,
            );
            if (selectedComponent) {
              tabs.value.push({
                label: componentName,
                name: componentName,
                component: selectedComponent.component,
                paras: selectedComponent.paras,
              });
              lastCurrentTab.value = currentTab.value;
              currentTab.value = componentName;
            }
            toggleActiveItem(selectedComponent);
            // selectedModule.items.forEach((m) => {
            //   if (m !== componentName) {
            //     m.active = false;
            //   }
            // });
            // selectedComponent.active = !module.active;
          }
        } else {
          lastCurrentTab.value = currentTab.value;
          currentTab.value = componentName;
        }
        // console.log('currentTab:', currentTab);
        // console.log('currentTab.value:', currentTab.value);

        setTimeout(() => {
          SelectedTab(componentName);
        }, 500);
      };
      const SelectedTab = (componentName: string) => {
        for (let i = 0; i < tabs.value.length; i++) {
          if (tabs.value[i].name == componentName) {
            const divName = refDivLayout.value;
            const divCurr = GetDivObjInDivObjN(divName, `tab-${i}`);
            if (divCurr) divCurr.click();
          }
        }
      };
      const removeTab = (moduleName: string, componentName: string) => {
        const existingTab = tabs.value.find((tab: any) => tab.name === componentName);
        if (existingTab) {
          let indexToRemove = tabs.value.indexOf(componentName); // 获取要移除的元素的索引
          if (indexToRemove !== -1) {
            tabs.value.splice(indexToRemove, 1); // 从数组中移除一个元素
          }

          currentTab.value = lastCurrentTab.value;
        }
        toggleActive(currentTab.value);

        setTimeout(() => {
          SelectedTab(componentName);
        }, 100);
      };
      const closeTab = (tabName: string) => {
        let indexToRemove = tabs.value.indexOf(tabName); // 获取要移除的元素的索引

        tabs.value.splice(indexToRemove, 1);
        if (currentTab.value === tabs.value[indexToRemove]?.name) {
          currentTab.value = ''; // 关闭当前标签页
        }
      };
      // function removeTab(tabName: string): void {
      //   let indexToActive = tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引

      //   tabsStore.removeTab(tabName);
      //   tabsRef.value = tabsStore.myTabs;
      //   if (indexToActive > 0) {
      //     activeTab.value = indexToActive - 1;
      //   } else {
      //     activeTab.value = 0;
      //   }
      // }
      const activeTab = ref(0);
      // 切换菜单状态
      const toggleActive = (module: any) => {
        menu.value.forEach((m: any) => {
          if (m !== module) {
            m.active = false;
          }
        });
        module.active = !module.active;
      };
      const toggleActiveItem = (item: any) => {
        menu.value.forEach((m: any) => {
          m.items.forEach((i: any) => {
            if (i !== item) {
              i.active = false;
            }
          });
        });
        item.active = !item.active;
      };
      // const currentTabComponent = computed(() => {
      //   return tabs[activeTab.value].component;
      // });
      onMounted(async () => {
        if (typeof route.query.menuSetId === 'string') {
          menuSetId.value = route.query.menuSetId;
        }
        let strMsg;
        switch (menuSetId.value) {
          case '0018':
            strTitle.value = '研究生论文阅读系统-个人中心';
            break;
          case '0025':
            strTitle.value = '游戏化教育平台-后台管理';
            break;
          case '0026':
            strTitle.value = '游戏化教育平台-个人中心';
            break;
          default:
            strMsg = `菜单集Id:${menuSetId.value} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
        const strRoleId = userStore.roleId;
        // console.log(strRoleId);

        const arrMenuName_CurrMenuSet = await qxRoleMenusStore.getMenuNamesByCmPrjId(
          strRoleId,
          menuSetId.value,
          clsSysPara4WebApi.cmPrjId,
        );
        // console.log('arrMenuName_CurrMenuSet:', arrMenuName_CurrMenuSet);
        menu.value = menu.value.filter((x: any) => arrMenuName_CurrMenuSet.indexOf(x.name) > -1);
        // console.log(menu.value);
        IndexIframe.GetPropValue = GetPropValue;
        IndexIframe.divLayout = refDivLayout.value;
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'menuSetId':
            return menuSetId.value;
          default:
            return '';
        }
        return '';
      }
      //清空框架页
      function RemoveIfame_Click() {
        localStorage.removeItem('hid');
        $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
      }
      //接收的参数
      // function GetRequest() {
      //   const url = location.search; //获取url中"?"符后的字串
      //   const theRequest = new Object();
      //   if (url.indexOf('?') != -1) {
      //  const str = url.substring(1);
      //  strs = str.split('&');
      //  for (let i = 0; i < strs.length; i++) {
      // theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //  }
      //   }
      //   return theRequest;
      // }
      //加载首页
      function window_onload() {
        //加载页面的时候关闭控制框架的所有缓存页面
        RemoveIfame_Click();
        // const Request = new Object();
        // Request = GetRequest();
        // const str1 = Request['page'];

        // const objPage = new IndexIframe();
        // objPage.PageLoad();
        // setInterval('Bind_QuestionsCount1()', 300000); //指定300s刷新一次
      }

      //切换教学班
      function EduCls_Click(strkey: string, strName: string, strTypeID: string) {
        const objPage = new IndexIframe();
        const divName = refDivLayout.value;
        objPage.EduCls_Click(divName, strkey, strName, strTypeID, '');
        //RemoveIfame_Click();
      }
      //加载欢迎页
      //function WelcomeLoad_Click() {
      //  const objPage = new welcome.Welcome();
      //  objPage.PageLoad();
      //}
      //信息提示
      function layui_Alert(iconKey: string, strMsg: string) {
        message.success(strMsg);
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          default:
            break;
        }
      }
      return {
        refDivLayout,
        tabs,
        activeTab,

        btn_Click,
        toggleActive,
        menu,
        addTab,
        removeTab,
        currentTab,
        closeTab,

        menuSetId,
        strTitle,
      };
    },
  });
</script>
<style scoped>
  #ModularName {
    font-size: 18px;
    font-style: italic;
    /*font-weight: bold;*/
  }
  /* 样式可以根据需求进行修改 */
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  header {
    /* background-color: #333; */
    /* color: white; */
    padding: 20px;
    text-align: center;
  }
  .main-content {
    display: flex;
    flex: 1;
  }
  .sidebar {
    background-color: #f0f0f0;
    width: 250px;
    padding: 20px;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar li {
    margin-bottom: 1px;
  }
  .content {
    flex: 1;
    padding: 20px;
  }
  .nav-link {
    cursor: pointer;
    background-color: #f2f8fc;
  }

  .nav-link.active {
    font-weight: bold;
    background-color: #60b6f3;
  }
  /* .nav-item {
  } */

  .module-divider {
    border-top: 2px solid #d1b1b1;
    margin: 0;
  }
  .module-name {
    font-weight: bold;
    padding: 10px 0;
    font-size: 1.05rem;
  }
  .item-name {
    font-weight: normal;
    /* background-color: #7ac2f5; */
    font-size: 0.9rem;
  }
  .module-active {
    font-weight: bold;
    background-color: #1a9bf7;
  }
  .item_active {
    font-weight: bold;
    background-color: #dadcf3;
  }
</style>
<!-- // 
// <script src="~/lib/Xadmin/js/x1admin.js" type="text/javascript"></script>
//  -->
@/views/web/GPIndexIframe./GPIndexIframeVueShare
