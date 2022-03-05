<template>
  <v-list nav dense>
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in menus"
        :key="i"
        :to="item.url"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
  export default {

    props: {
      menus: { type: Array, default: () => ([]) }
    },

    data: () => ({
      selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),
  }
</script>