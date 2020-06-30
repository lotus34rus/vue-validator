<template>
    <footer class="footer">
        <p class="product-version">Инструменты для рассылок ( v.1.1 )</p>
        <p class="author-link">Made with &#10084; by <a href="http://dm-code.ru">Dmitriy M.</a></p>
    </footer>
</template>


<script>

export default {
  name: 'Footer',
}

</script>
<style scoped>
.footer{
    margin-top: 40px;
    height: 70px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0px 15px;
    justify-content: space-between;
}

.footer a{
    font-weight: 600;
    color:#fff;
    text-decoration: none;
}
</style>