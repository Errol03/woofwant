<template lang="pug">
  <div id="cart">
  h1 寵物籃
  <br>
    vs-table(:items="items" :fields="fields")
      template(#cell(img)="data")
        img(:src="data.item.img" style="width: 50px")
      template(#cell(price)="data")
        p ${{data.item.price}}
      template(#cell(action)="data")
        b-button(variant="danger" @click="delCart(data.index)")
          font-awesome-icon(:icon="['fas', 'trash']")
  </div>
</template>
<script>
export default {
  name: 'Cart',
  data() {
    return {
      fields: [
        {
          key: 'img',
          label: '圖片'
        },
        {
          key: 'name',
          label: '品名'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'action',
          label: '操作'
        }
      ]
    }
  },
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
    delCart(index) {
      this.$store.commit('delCart', index)
    }
  }
}
</script>
<style lang="stylus"></style>
