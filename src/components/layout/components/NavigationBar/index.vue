<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'
import { useUserStore } from '@/store/modules/user'
import { UserFilled } from '@element-plus/icons-vue'
import Hamburger from '../Hamburger/index.vue'
import BreadCrumb from '../Breadcrumb/index.vue'
import Screenfull from '@/components/Screenfull/index.vue'

const router = useRouter()
const appStore = useAppStore()
const settingsStore = useSettingsStore()
const userStore = useUserStore()

const sidebar = computed(() => {
  return appStore.sidebar
})

const showScreenfull = computed(() => {
  return settingsStore.showScreenfull
})

const state = reactive({
  toggleSideBar: () => {
    appStore.toggleSidebar(false)
  },
  logout: () => {
    userStore.logout()
    router.push('/login').catch((err) => {
      console.warn(err)
    })
  }
})
</script>

<template>
  <div class="navigation-bar">
    <Hamburger :is-active="sidebar.opened" class="hamburger" @toggle-click="state.toggleSideBar" />
    <BreadCrumb class="breadcrumb" />
    <div class="right-menu">
      <Screenfull v-if="showScreenfull" class="right-menu-item" />
      <el-dropdown class="right-menu-item">
        <el-avatar :icon="UserFilled" :size="34" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="state.logout">
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-bar {
  overflow: hidden;
  background: #fff;
  height: var(--v3-navigationbar-height);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  .hamburger {
    display: flex;
    align-items: center;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
  }
  .right-menu {
    float: right;
    margin-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    color: #606266;
    .right-menu-item {
      padding: 0 10px;
      cursor: pointer;
    }
  }
}
</style>
