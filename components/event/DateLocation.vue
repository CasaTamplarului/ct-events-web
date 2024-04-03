<template lang="pug">
.date-location-wrapper
  h2#dateLocation {{ $t('event.date_and_location') }}
  .details-container
    p {{ startDate }}
      span(v-if="endDate") &nbsp;- {{ endDate }}
    p Casa de Vacanță Rehoboth, DJ764B, Valea Drăganului 407478, Romania
  .action-container.mt-2
    button.btn-blue.sm.flex.items-center(@click="handleGetDirections") {{ $t('event.map.get_directions') }}
      Icon.ml-3(
        width="18px"
        :src="mapIcons.directionsSolidWhite.path"
        :alt="mapIcons.directionsSolidWhite.alt"
      )
  .map-container.mt-4
    ClientOnly
      MapboxMap(
        ref="map"
        map-id="eventLocation"
        :style="mapStyle"
        :options="mapOptions"
      )
        MapboxDefaultMarker(
          marker-id="locationMarker"
          :lnglat="locationCoordinates"
        )
</template>

<script setup>
import { mapIcons } from "~/assets/img-imports/commonIcons";

const { localeProperties } = useI18n();
const locationCoordinates = [23.9595983, 46.400034];
const mapStyle =
  "width: 100%; position: relative; height: 100%; border-radius: 1.5rem";
const mapOptions = {
  style: "mapbox://styles/mapbox/standard",
  center: locationCoordinates,
  zoom: 12,
  customAttribution: "Casa Tâmplarului",
  scrollZoom: true,
};

const startDate = useDateFormat(
  new Date("2023-06-22T18:00"),
  "DD MMM YYYY, HH:mm",
  { locales: localeProperties.value.iso }
);
const endDate = useDateFormat(
  new Date("2023-06-25T14:00"),
  "DD MMM YYYY, HH:mm",
  { locales: localeProperties.value.iso }
);

const handleGetDirections = () => {
  const destination = "Tabăra+de+Vară+Casa+Tâmplarului";
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  // Open the URL in a new tab
  window.open(mapsUrl, "_blank");
};
</script>

<style lang="scss" scoped>
.date-location-wrapper {
  .map-container {
    @apply w-full h-80;
  }
}
</style>

<style lang="scss">
.date-location-wrapper {
  .map-container {
    #eventLocation {
      .mapboxgl-ctrl-attrib-inner {
        a {
          @apply text-base px-4;
        }
      }
    }
  }
}
</style>
