<template lang="pug">
  div(
    :class='{"section__area--sp": $store.state.device.isSP}'
    :style='{"width": width, "maxWidth": "calc(1020px - 15px * 3 - 330px)"}'
  ): slot
</template>

<script>
export default {
  props:['width']
}
</script>