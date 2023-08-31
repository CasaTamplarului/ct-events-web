<template>
  <div class="tv-static w-full aspect-[16/9]">
    <!-- <section></section>
  <svg>
    <filter id="noise">
      <feTurbulence id="turbulence">
        <animate
          attributeName="baseFrequency"
          dur="50s"
          values="0.9 0.9;0.8 0.8; 0.9 0.9"
          repeatCount="indefinite"
        ></animate>
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
    </filter>
  </svg> -->
  </div>
</template>

<style lang="scss" scoped>
.tv-static {
  background: repeating-radial-gradient(#000 0 0.0001%, #fff 0 0.0002%) 50% 0/2500px
      2500px,
    repeating-conic-gradient(#000 0 0.0001%, #fff 0 0.0002%) 60% 60%/2500px
      2500px;
  background-blend-mode: difference;
  animation: b 0.2s infinite alternate;

  @keyframes b {
    100% {
      background-position: 50% 0, 60% 50%;
    }
  }
  // section {
  //   position: absolute;
  //   top: -50px;
  //   left: -50px;
  //   width: calc(100% + 50px);
  //   height: calc(100% + 50px);
  //   background: repeating-linear-gradient(#111, #111 50%, white 50%, white);
  //   background-size: 5px 5px;
  //   filter: url(#noise);
  // }

  // svg {
  //   width: 0;
  //   height: 0;
  // }
}
</style>
