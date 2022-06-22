<template>
  <nav class="navbar navbar-dark bg-transparent fixed-top m-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> 
        <span>MENU</span>
      </a>
      <a class="text-white"> <span>線上訂房 Booking</span> </a>
    </div>
</nav>
</template>

<script>

</script>

<style lang='scss'>

nav{
  letter-spacing: 3px;
  a{
    text-decoration: none;
    cursor: pointer;
    span{
      transition: letter-spacing 0.5s;
    }
    &:hover > span{
      letter-spacing: 4px;
    }
  }
}
</style>