<template>
  <v-btn
    :color="color"
    :loading="loading"
    @click="clickBtn"
  >
    <v-icon v-if="icon" class="mr-2">
      {{ icon }}
    </v-icon>
    {{ btnText }}
  </v-btn>
</template>
<script>
export default {

  props: {
    color: {
      type: String,
      default: 'primary'
    },
    btnText: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },

  methods: {
    clickBtn() {
      this.$emit('click');
    }
  }
}
</script>