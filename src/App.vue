<template>
  <ElConfigProvider :locale="locale">
    <layout v-if="route.path !== '/login'">
      <router-view />
    </layout>
    <router-view v-else />
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import layout from '@/components/layout/index.vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = zhCn

const route = useRoute()
</script>
