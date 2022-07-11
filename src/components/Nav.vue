<template>
  <nav
    :class="{ preload: isPreload }"
    class="navbar navbar-dark bg-transparent fixed-top"
  >
    <div class="container-fluid">
      <section>
        <div class="menu">
          <input
            id="menu-toggle"
            type="checkbox"
            v-model="navState"
            @click="onNavClick"
          />
          <label class="menu-toggle-trigger" for="menu-toggle"> </label>
          <label class="menu-toggle-burger" for="menu-toggle"> </label>
          <div
            class="menu-body d-flex flex-column justify-content-around align-items-center py-5"
          >
            <router-link to="/room-daybreak" @click="navState = false">
              <img src="@/assets/images/daybreak-white.svg" alt="" />
            </router-link>
            <router-link to="/room-latebreak" @click="navState = false">
              <img src="@/assets/images/latebreak-white.svg" alt="" />
            </router-link>
            <router-link to="/booking-rule" @click="navState = false">
              線上訂房<span> Booking</span>
            </router-link>
            <router-link to="/about" @click="navState = false">
              關於曉宅山<span> About Daybreak</span>
            </router-link>
            <router-link to="/news" @click="navState = false">
             最新消息<span> News</span> 
             </router-link>
            <router-link to="/contact" @click="navState = false">
              聯絡我們<span> Contact Us</span>
            </router-link>
            <router-link to="/" @click="navState = false">
              <img src="@/assets/images/small-logo.svg" alt="" />
            </router-link>
          </div>
        </div>
      </section>

      <router-link to="/booking-rule" class="text-white">
        <span>線上訂房 Booking</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const navState = ref(false)
    const isPreload = ref(true)
    const onNavClick = () => {
      if (isPreload.value) isPreload.value = false
    }
    return { navState, onNavClick, isPreload }
  },
}
</script>

<style scoped lang="scss">
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif, 'Noto Serif TC';

nav {
  font-family: $Serif;
  letter-spacing: 3px;
  margin: 20px;

  $font-family: 'Open Sans', sans-serif;
  $font-size: 1em;

  $color-text: rgb(255, 255, 255);
  $color-menu: #262626;

  $menu-animation-time: 1s;
  $burger-animation-time: 1s;

  $menu-animation-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  $burger-animation-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  body {
    font-family: $font-family;
    font-size: $font-size;
  }

  #menu-toggle[type='checkbox']:not(:checked),
  #menu-toggle[type='checkbox']:checked {
    display: none;
  }

  .menu-toggle-trigger,
  .menu-toggle-burger,
  .menu-toggle-burger:before {
    position: absolute;

    top: 1.6em;
    left: 1.6em;
    width: 2em;
    height: 2px;
    background-color: $color-text;
    border-radius: 2px;
    cursor: pointer;
    z-index: 100;
    transition: $burger-animation-time $menu-animation-function;
  }

  .menu-toggle-trigger {
    height: 2em;
    background: none;
  }

  .menu-toggle-burger {
    &:before {
      content: '';
      top: 10px;
      left: 0;
    }
  }

  .menu-body {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgb(41, 43, 40);
    margin: -20px;
    padding: 0;
    top: 0;
    left: -2000px;
    z-index: 10;
    animation: checkboxUncheckedAnimation $burger-animation-time both;
    img {
      height: 70px;
    }
    a {
      color: white;
      letter-spacing: 3px;
    }
  }

  #menu-toggle:checked + .menu-toggle-trigger {
    & + .menu-toggle-burger {
      top: 35px;
      transform: rotate(405deg);
      transition: transform $burger-animation-time $burger-animation-function;

      &:before {
        top: 0;
        transform: rotate(-90deg);
        transition: transform $burger-animation-time $burger-animation-function;
      }
    }

    & + .menu-toggle-burger + .menu-body {
      left: 0;
      animation: checkboxCheckedAnimation $menu-animation-time
        $menu-animation-function both;
    }
  }

  @keyframes checkboxCheckedAnimation {
    0% {
      left: -2000px;
      opacity: 0;
    }
    100% {
      left: 0;
      opacity: 1;
    }
  }

  @keyframes checkboxUncheckedAnimation {
    0% {
      left: 0;
      opacity: 1;
    }
    100% {
      left: -2000px;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    span {
      transition: letter-spacing 0.5s;
    }
    &:hover > span {
      letter-spacing: 4px;
    }
  }
}

nav.preload .menu-body {
  animation-duration: 0s !important;
  -webkit-animation-duration: 0s !important;
}
</style>
