<script setup lang="ts">
import type { LIGHT_DARK_MODE } from '@/types/config.ts'
import { DARK_MODE, LIGHT_MODE } from '@constants/constants.ts'
import { Icon } from '@iconify/vue'
import {
  applyThemeToDocument,
  getStoredTheme,
  setTheme,
} from '@utils/setting-utils.ts'
import { onMounted } from 'vue'
import { ref } from 'vue'

const seq: LIGHT_DARK_MODE[] = [LIGHT_MODE, DARK_MODE]
const mode = ref<LIGHT_DARK_MODE>(LIGHT_MODE)

onMounted(() => {
  mode.value = getStoredTheme()
  const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)')
  const changeThemeWhenSchemeChanged: Parameters<
    typeof darkModePreference.addEventListener<'change'>
  >[1] = e => {
    applyThemeToDocument(mode.value)
  }
  darkModePreference.addEventListener('change', changeThemeWhenSchemeChanged)
  return () => {
    darkModePreference.removeEventListener(
      'change',
      changeThemeWhenSchemeChanged,
    )
  }
})

function switchScheme(newMode: LIGHT_DARK_MODE) {
  mode.value = newMode
  setTheme(newMode)
}

function toggleScheme() {
  let i = 0
  for (; i < seq.length; i++) {
    if (seq[i] === mode.value) {
      break
    }
  }
  switchScheme(seq[(i + 1) % seq.length])
}
</script>

<template>
  <!-- z-50 make the panel higher than other float panels -->
  <div class="relative z-50" role="menu" tabindex="-1">
    <button aria-label="Light/Dark Mode" role="menuitem" class="relative btn-plain scale-animation rounded-lg h-9 w-9 active:scale-90" id="scheme-switch" @click="toggleScheme">
      <div :class="{'absolute':true, 'opacity-0':mode!==LIGHT_MODE}">
        <Icon icon="material-symbols:wb-sunny-outline-rounded" class="text-[1.25rem]"></Icon>
      </div>
      <div :class="{'absolute':true, 'opacity-0':mode!==DARK_MODE}">
        <Icon icon="material-symbols:dark-mode-outline-rounded" class="text-[1.25rem]"></Icon>
      </div>
    </button>
  </div>
</template>

<style scoped>
</style>