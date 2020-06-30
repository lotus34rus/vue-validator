<template>
        <div class="header">
            <div class="wrapper">
                <h1>{{title}}</h1>
            </div>
            <Menu></Menu>
        </div>
</template>


<script>
import Menu from "./Menu.vue"

export default {
  name: 'Header',
  data: function(){
      return {
          title: "Инструменты для рассылок"
      }
  },
  components: {
      Menu,
  }
}
</script>
<style scoped>
    h1{
        font-size: 24px;
        padding-bottom: 10px;
        text-align: left;
    }
    .header{
        background: #000;
        padding-top: 20px;
        color: #fff;
    }
    .header .wrapper{
        min-height: unset;
    }
</style>