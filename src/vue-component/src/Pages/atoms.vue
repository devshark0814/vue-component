<template>
  <div>
    <v-container grid-list-xs>
      <v-row>
        <v-col>
          <base-text-box-default v-model="text" placeholder="aaa"></base-text-box-default>{{ text }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <base-button-default icon="mdi-cloud-upload" btnText="test" @click="test"></base-button-default>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import BaseTextBoxDefault from '@/components/Atoms/Form/Textbox/BaseTextBoxDefault.vue';
import BaseButtonDefault from '@/components/Atoms/Button/BaseButtonDefault.vue';
export default {
  components: {
    BaseTextBoxDefault,
    BaseButtonDefault
  },

  data() {
    return {
      text: '',
    }
  },

  methods: {
    test() {
      alert('aaaa');
    }
  }
}
</script>