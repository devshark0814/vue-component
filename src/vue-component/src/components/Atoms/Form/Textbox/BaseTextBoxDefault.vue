<template>
  <v-text-field
    v-model="inputVal"
    :label="label"
    :placeholder="placeholder"
    hide-details="auto"
    outlined
    dense
  ></v-text-field>
</template>
<script>
export default {

  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },

  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(inval) {
        this.$emit('input', inval);
      }
    }
  },
}
</script>