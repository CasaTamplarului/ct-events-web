<template lang="pug">
.bottom-navbar-wrapper
  .bottom-navbar-content.h-full
    .menu-wrapper
      NuxtLink(to="#description")
        span {{ $t('event.description') }}
        Icon(
          :src="svgs.circleInfoSolidBlack.path"
          :alt="svgs.circleInfoSolidBlack.alt"
        )
      NuxtLink(to="#dateLocation")
        span {{ $t('event.date_and_location') }}
        Icon(
          :src="svgs.calendarRegularBlack.path"
          :alt="svgs.calendarRegularBlack.alt"
        )
      NuxtLink(to="#dateLocation")
        //- span {{ $t('event.location') }}
        Icon(
          :src="svgs.locationDotSolidBlack.path"
          :alt="svgs.locationDotSolidBlack.alt"
        )
    .action-wrapper
      button.btn-blue
        span {{ $t('common.get_tickets_alt') }}
        Icon(
          :src="svgs.ticketSolidWhite.path"
          :alt="svgs.ticketSolidWhite.alt"
        )
</template>

<script setup>
import { svgs } from "~/assets/img-imports/commonIcons";
</script>

<style lang="scss">
.bottom-navbar-wrapper {
  @apply bottom-0 h-full w-full left-0 right-0 mx-auto inline-block z-50 sticky max-h-[64px] bg-white;

  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1),
    0 -1px 2px -1px rgba(0, 0, 0, 0.1);
  transition: 0.1s;

  .bottom-navbar-content {
    @apply flex items-center w-full justify-between px-4 py-2 relative z-50;

    @screen xl {
      @apply px-20;
    }

    .menu-wrapper {
      @apply font-semibold w-full;

      a {
        @apply mr-10 hover:text-gray-700 duration-100 relative;

        &:after {
          @apply absolute left-1/2 w-0 -bottom-1 block;

          background: none repeat scroll 0 0 transparent;
          content: "";
          height: 2px;
          background: #528399;
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
        }

        &:hover:after {
          left: -10%;
          width: 120%;
        }

        &:last-of-type {
          @apply hidden;
        }

        img {
          @apply hidden;
        }

        @media (max-width: 550px) {
          @apply mx-0 flex items-center;

          &:last-of-type {
            @apply block;
          }

          span {
            @apply hidden;
          }

          img {
            @apply block w-5;
          }
        }

        @media (max-width: 460px) {
          @apply px-2;
        }

        @media (max-width: 348px) {
          @apply ml-0;
        }
      }

      @media (max-width: 550px) {
        @apply flex items-center justify-between;
      }
    }

    .action-wrapper {
      @media (max-width: 550px) {
        @apply ml-16;
        // @apply ml-0;
      }

      @media (max-width: 460px) {
        @apply ml-12;
      }

      @media (max-width: 348px) {
        @apply ml-6;
      }

      button {
        span {
          @apply hidden sm:block whitespace-nowrap;
        }

        img {
          @apply w-5 block sm:hidden;

          min-width: 20px !important;
        }
      }
    }
  }
}
</style>
