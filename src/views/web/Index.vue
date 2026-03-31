<template>
  <div id="divLayout" ref="refDivLayout" class="index-page">
    <PageHead_Game ref="refPageHead" :title="''"></PageHead_Game>

    <main class="index-main">
      <section class="hero-panel">
        <p class="hero-tag">Shared Module</p>
        <h1 class="hero-title">通用用户与权限管理</h1>
        <p class="hero-desc">
          当前首页仅保留登录与系统设置相关入口，用于作为共享能力模块的统一测试页面。
          其他项目接入后，可通过系统设置进入用户、角色、权限、菜单等管理界面进行联调与验证。
        </p>
        <div class="hero-actions">
          <button class="primary-btn" type="button" @click="openLogin">登录 / 切换账号</button>
          <button class="secondary-btn" type="button" @click="goSystemSettings">
            进入系统设置
          </button>
        </div>
      </section>

      <section class="summary-grid">
        <article class="summary-card">
          <h2>建议使用方式</h2>
          <p>先通过页头或当前页面完成登录，再从系统设置入口测试后台管理功能。</p>
        </article>
        <article class="summary-card">
          <h2>当前保留能力</h2>
          <p>登录、注册、角色切换、教学班切换，以及系统设置相关管理页面入口。</p>
        </article>
        <article class="summary-card">
          <h2>已移除展示内容</h2>
          <p>基础知识、知识测评、学习闯关、知识图谱、习题集、作业、社区等业务化入口。</p>
        </article>
      </section>

      <section class="guide-panel">
        <h2>测试流程</h2>
        <ol class="guide-list">
          <li>点击“登录 / 切换账号”，完成账号登录。</li>
          <li>如账号具备多个角色，可在页头切换角色后再继续验证。</li>
          <li>点击“进入系统设置”，测试用户、角色、权限和菜单相关界面。</li>
        </ol>
      </section>
    </main>

    <PageEnd_Game :title="''"></PageEnd_Game>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import PageEnd_Game from '@/views/Shared/PageEnd_Game.vue';
  import PageHead_Game from '@/views/Shared/PageHead_Game.vue';

  import { Index } from '@/views/web/Index';
  export default defineComponent({
    name: 'Index',
    components: {
      // 组件注册
      PageEnd_Game,
      PageHead_Game,
    },
    setup() {
      const refDivLayout = ref();
      const refPageHead = ref();

      onMounted(() => {
        Index.vuebtn_Click = btn_Click;
        window_onload();
      });

      function window_onload() {
        const objPage = new Index();
        objPage.PageLoad();
      }

      //重新加载
      function Reload() {
        // PageLoad()
      }

      //菜单通道
      function liMenu_Click(key: number) {
        const objPage = new Index();
        objPage.liMenu_Click(key);
      }

      function openLogin() {
        if (refPageHead.value?.btn_Click != null) {
          refPageHead.value.btn_Click('login', '');
          return;
        }
        Index.btn_Click('login', '');
      }

      function goSystemSettings() {
        liMenu_Click(9);
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Bind_EduClsList':
            refPageHead.value.Bind_EduClsList();
            return;
          case 'setRoles':
            refPageHead.value.setRoles();
            return;
          case 'setEduClss':
            refPageHead.value.setEduClss();
            return;

          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        Index.btn_Click(strCommandName, strKeyId);
      }
      return {
        refDivLayout,
        btn_Click,
        refPageHead,
        liMenu_Click,
        openLogin,
        goSystemSettings,
      };
    },
  });
</script>
<style scoped>
  .index-page {
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(196, 225, 255, 0.9), transparent 30%),
      linear-gradient(180deg, #eef5fb 0%, #f7f9fc 48%, #eef2f7 100%);
  }

  .index-main {
    width: min(1120px, calc(100% - 32px));
    margin: 0 auto;
    padding: 40px 0 56px;
  }

  .hero-panel {
    padding: 40px;
    border: 1px solid rgba(29, 74, 122, 0.12);
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 24px 60px rgba(18, 54, 92, 0.12);
    backdrop-filter: blur(6px);
  }

  .hero-tag {
    margin: 0 0 12px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #2f6f9f;
  }

  .hero-title {
    margin: 0;
    font-size: 40px;
    line-height: 1.15;
    color: #16324f;
  }

  .hero-desc {
    max-width: 760px;
    margin: 20px 0 0;
    font-size: 16px;
    line-height: 1.8;
    color: #4d6279;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 28px;
  }

  .primary-btn,
  .secondary-btn {
    min-width: 170px;
    padding: 12px 22px;
    border-radius: 999px;
    border: none;
    font-size: 15px;
    font-weight: 600;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;
    cursor: pointer;
  }

  .primary-btn {
    color: #fff;
    background: linear-gradient(135deg, #2468a2 0%, #1d4f7d 100%);
    box-shadow: 0 12px 24px rgba(29, 79, 125, 0.24);
  }

  .secondary-btn {
    color: #1d4f7d;
    background: rgba(36, 104, 162, 0.12);
    border: 1px solid rgba(36, 104, 162, 0.22);
  }

  .primary-btn:hover,
  .secondary-btn:hover {
    transform: translateY(-1px);
  }

  .summary-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    margin-top: 24px;
  }

  .summary-card,
  .guide-panel {
    padding: 24px;
    border: 1px solid rgba(29, 74, 122, 0.1);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 14px 34px rgba(22, 50, 79, 0.08);
  }

  .summary-card h2,
  .guide-panel h2 {
    margin: 0 0 12px;
    font-size: 20px;
    color: #16324f;
  }

  .summary-card p,
  .guide-list {
    margin: 0;
    font-size: 15px;
    line-height: 1.8;
    color: #566b80;
  }

  .guide-panel {
    margin-top: 24px;
  }

  .guide-list {
    padding-left: 20px;
  }

  .guide-list li + li {
    margin-top: 10px;
  }

  @media (max-width: 900px) {
    .summary-grid {
      grid-template-columns: 1fr;
    }

    .hero-panel {
      padding: 28px 22px;
    }

    .hero-title {
      font-size: 30px;
    }
  }

  @media (max-width: 600px) {
    .index-main {
      width: calc(100% - 24px);
      padding: 24px 0 40px;
    }

    .hero-actions {
      flex-direction: column;
    }

    .primary-btn,
    .secondary-btn {
      width: 100%;
    }
  }
</style>

<!-- <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script> -->
@/views/web/IndexBBak
