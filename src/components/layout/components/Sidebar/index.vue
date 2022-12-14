<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/modules/app'
import { usePermissionStore } from '@/store/modules/permission'
import SidebarItem from './SidebarItem.vue'
import { getCssVariableValue } from '@/utils/utilTool'

const v3SidebarMenuBgColor = getCssVariableValue('--v3-sidebar-menu-bg-color')
const v3SidebarMenuTextColor = getCssVariableValue('--v3-sidebar-menu-text-color')
const v3SidebarMenuActiveTextColor = getCssVariableValue('--v3-sidebar-menu-active-text-color')

const route = useRoute()
const appStore = useAppStore()
const permissionStore = usePermissionStore()

const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta?.activeMenu) {
    return meta.activeMenu
  }
  return path
})

const isCollapse = computed(() => {
  return !appStore.sidebar.opened
})
</script>

<template>
  <div>
    <div class="sidebar_Logo">后台管理系统</div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="v3SidebarMenuBgColor"
        :text-color="v3SidebarMenuTextColor"
        :active-text-color="v3SidebarMenuActiveTextColor"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in permissionStore.routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
@mixin tip-line {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: var(--v3-sidebar-menu-tip-line-bg-color);
  }
}

.sidebar_Logo {
  height: 50px;
  color: var(--v3-sidebar-menu-text-color);
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  background-color: var(--v3-sidebarlogo-bg-color);
}

.el-scrollbar {
  height: 100%;
  ::v-deep(.scrollbar-wrapper) {
    // 限制水平宽度
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  // 滚动条
  ::v-deep(.el-scrollbar__bar) {
    &.is-horizontal {
      // 隐藏水平滚动条
      display: none;
    }
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}

::v-deep(.el-menu-item),
::v-deep(.el-sub-menu__title),
::v-deep(.el-sub-menu .el-menu-item) {
  height: var(--v3-sidebar-menu-item-height);
  line-height: var(--v3-sidebar-menu-item-height);
  &:hover {
    background-color: var(--v3-sidebar-menu-hover-bg-color);
  }
  display: block;
  * {
    vertical-align: middle;
  }
}

::v-deep(.el-menu-item) {
  &.is-active {
    @include tip-line;
    background-color: var(--v3-sidebar-menu-hover-bg-color);
  }
}

.el-menu--collapse {
  ::v-deep(.el-sub-menu) {
    &.is-active {
      .el-sub-menu__title {
        color: var(--v3-sidebar-menu-active-text-color) !important;
        @include tip-line;
      }
    }
  }
}
</style>
