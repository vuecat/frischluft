<template>
  <!-- search bar for desktop view -->
  <div
      id="search-bar"
      class="hidden lg:flex transition-all items-center h-11 mr-2 rounded-lg
          bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06]
          dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10"
  >
    <Icon :icon="'material-symbols:search'" class="absolute text-[1.25rem] pointer-events-none ml-3 transition my-auto text-black/30 dark:text-white/30" />
    <input
        :placeholder="i18n(I18nKey.search)"
        v-model="keywordDesktop"
        @focus="search(keywordDesktop, true)"
        class="transition-all pl-10 text-sm bg-transparent outline-0
         h-full w-40 active:w-60 focus:w-60 text-black/50 dark:text-white/50"
    />
  </div>

  <!-- toggle btn for phone/tablet view -->
  <button
      @click="togglePanel"
      aria-label="Search Panel"
      id="search-switch"
      class="btn-plain scale-animation lg:!hidden rounded-lg w-11 h-11 active:scale-90"
  >
    <Icon :icon="'material-symbols:search'" class="text-[1.25rem]" />
  </button>

  <!-- search panel -->
  <div
      id="search-panel"
      :class="['float-panel', 'float-panel-closed', 'search-panel', 'absolute', 'md:w-[30rem]', 'top-20', 'left-4', 'md:left-[unset]', 'right-4', 'shadow-2xl', 'rounded-2xl', 'p-2', { 'float-panel-open': result.length > 0 }]"
  >
    <!-- search bar inside panel for phone/tablet -->
    <div
        id="search-bar-inside"
        class="flex relative lg:hidden transition-all items-center h-11 rounded-xl
        bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06]
        dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10"
    >
      <Icon :icon="'material-symbols:search'" class="absolute text-[1.25rem] pointer-events-none ml-3 transition my-auto text-black/30 dark:text-white/30" />
      <input
          placeholder="Search"
          v-model="keywordMobile"
          class="pl-10 absolute inset-0 text-sm bg-transparent outline-0
                 focus:w-60 text-black/50 dark:text-white/50"
      />
    </div>

    <!-- search results -->
    <a
        v-for="item in result"
        :key="item.url"
        :href="item.url"
        class="transition first-of-type:mt-2 lg:first-of-type:mt-0 group block
         rounded-xl text-lg px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)]"
    >
      <div class="transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]">
        {{ item.meta.title }}
        <Icon :icon="'fa6-solid:chevron-right'" class="transition text-[0.75rem] translate-x-1 my-auto text-[var(--primary)]" />
      </div>
      <div class="transition text-sm text-50" v-html="item.excerpt"></div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted,watch } from 'vue';
import { url } from '@utils/url-utils.ts';
import { i18n } from '@i18n/translation';
import I18nKey from '@i18n/i18nKey';
import {Icon} from '@iconify/vue';

const keywordDesktop = ref('');
const keywordMobile = ref('');
const result = ref<any[]>([]);

const fakeResult = [
  {
    url: url('/'),
    meta: {
      title: 'This Is a Fake Search Result',
    },
    excerpt:
        'Because the search cannot work in the <mark>dev</mark> environment.',
  },
  {
    url: url('/'),
    meta: {
      title: 'If You Want to Test the Search',
    },
    excerpt: 'Try running <mark>npm build && npm preview</mark> instead.',
  },
];

let search = (keyword: string, isDesktop: boolean) => {};

onMounted(() => {
  search = async (keyword: string, isDesktop: boolean) => {
    const panel = document.getElementById('search-panel');
    if (!panel) return;

    if (!keyword && isDesktop) {
      panel.classList.add('float-panel-closed');
      return;
    }

    let arr = [];
    if (import.meta.env.PROD) {
      const ret = await pagefind.search(keyword);
      for (const item of ret.results) {
        arr.push(await item.data());
      }
    } else {
      // Mock data for non-production environment
      arr = fakeResult;
    }

    if (!arr.length && isDesktop) {
      panel.classList.add('float-panel-closed');
      return;
    }

    if (isDesktop) {
      panel.classList.remove('float-panel-closed');
    }
    result.value = arr;
  };
});

const togglePanel = () => {
  const panel = document.getElementById('search-panel');
  panel?.classList.toggle('float-panel-closed');
};

// Watchers to reactively call search
watch(keywordDesktop, (newVal) => {
  search(newVal, true);
});

watch(keywordMobile, (newVal) => {
  search(newVal, false);
});
</script>

<style scoped>
input:focus {
  outline: 0;
}
</style>
