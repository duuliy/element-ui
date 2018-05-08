<template>
    <div id="options" >
        <v-distpicker :placeholders="placeholders"></v-distpicker>
    </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'

    export default {
        name: 'options',
      components: { VDistpicker },
      data() {
        return {
          placeholders: {
            province: '------- 省 --------',
            city: '--- 市 ---',
            area: '--- 区 ---',
          }
        }
      }
    }
</script>

<style scoped>

</style>
