<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { flags } from "~/assets/img-imports/commonIcons";
import { useCommonStore } from "~/stores/common";

const router = useRouter();
const route = useRoute();

const commonStore = useCommonStore();

const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const switchLocale = (code, close) => {
  const isEventPage = route.name.startsWith("events-eventSlug");

  router.push({ path: switchLocalePath(code) });

  // if (isEventPage) reloadNuxtApp();
};

const languages = {
  ro: {
    name: "Română",
  },
  en: {
    name: "English",
  },
};
</script>

<template lang="pug">
ClientOnly <!-- To be removed once headlessUI fixes hydration issues -->
  .language-switch.menu-item
    Menu.relative(
      as='div'
      v-slot='{ open }'
    )
      .menu-button-wrapper
        MenuButton.text-base.font-bold.outline-none.flex.items-center(:class="{ scrolled: commonStore.scrolledGetter }")
          span {{ languages[locale].name }}
          Icon.inline(:src="flags[locale].path" :alt="flags[locale].alt" :width="'15'" class="ml-2")
      transition(enter-active-class='transition ease-out duration-100' enter-from-class='transform opacity-0 scale-95' enter-to-class='transform opacity-100 scale-100' leave-active-class='transition ease-in duration-75' leave-from-class='transform opacity-100 scale-100' leave-to-class='transform opacity-0 scale-95')
        MenuItems.menu-items
          MenuItem(v-for='(language, code) in languages' v-slot='{ close }')
            p(@click="switchLocale(code)" :class="{ active: code === locale }")
              Icon(:src="flags[code].path" :alt="flags[code].alt" :width="'15'" class="mr-2")
              | {{ language.name }}
</template>

<style lang="scss" scoped>
.language-switch {
  .menu-button-wrapper {
    button {
      transition: 0.1s;
      &.scrolled {
        @apply text-xs;
      }

      span {
        @apply hidden md:inline;
      }
    }
  }

  .menu-items {
    @apply absolute md:left-0 z-10 pb-2 pt-4 mt-3 md:origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none right-0;
    box-shadow: 0 2px 32px 0 rgb(0 0 0 / 6%);
    width: 142px;

    @screen md {
      transform: translate(calc(-50% + 24px), 0);
    }

    p {
      @apply cursor-pointer flex text-black font-semibold hover:text-blue-20 mb-3 px-6;

      &.active {
        @apply text-blue-20;
      }
    }
  }
}
</style>
