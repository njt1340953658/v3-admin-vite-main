import { ref } from "vue"
import { defineStore } from "pinia"
import layoutSettings from "../interface/layout"

export const useSettingsStore = defineStore("settings", () => {
  const showThemeSwitch = ref<boolean>(layoutSettings.showThemeSwitch)
  const showScreenfull = ref<boolean>(layoutSettings.showScreenfull)

  return { showThemeSwitch, showScreenfull }
})
