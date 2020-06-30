<template>
    <nav class="menu">
        <div class="wrapper">
            <ul>
                <!-- <li><a href="/">Чистка номеров</a></li> -->
                 <router-link to="/">Главная</router-link>
                 <router-link to="/ru">Номера РФ</router-link>
                 <router-link to="/rb">Номера РБ</router-link>

            </ul>
        </div>
    </nav>
</template>


<script>
export default {
    name: 'Menu',
    // data: function(){
    //     return {

    //     }
    // },
}
</script>


<style scoped>

    .menu{
        padding-bottom: 10px;
        padding-top: 10px;
        border-top:1px solid rgba(255,255,255, 0.5);
    }
    .menu ul{
        list-style-type: none;
    }
    .menu  a{
        color: white;
        font-size: 18px;
        text-decoration: none;
        transition: 0.3s;
        margin-right: 20px;
    }
    .menu  a:hover{
        text-decoration: underline;
    }
    .menu .router-link-exact-active{
        text-decoration: underline;
    }
     .header .wrapper{
        min-height: unset;
    }

</style>