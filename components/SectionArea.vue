<template lang="pug">
  div(
    :class='{"section__area--sp": $store.state.device.isSP}'
    :style='{"width": width}'
  ): slot
</template>

<script>
export default {
  props:['width']
}
</script>