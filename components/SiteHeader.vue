<template>
  <div class="padder">
    <div class="wrapper">
      <button @click="$emit('listToggle')" id="index" class="header">
        <img v-if="projetSwitch" src="~/assets/svg/fullscreen-exit-line.svg" alt="">
        <img v-if="!projetSwitch" src="~/assets/svg/list-check.svg" alt="">
      </button>
      <button @click="$emit('darkToggle')" class="header">
        <img v-if="darkSwitch" src="~/assets/svg/moon-line.svg" alt="">
        <img v-if="!darkSwitch" src="~/assets/svg/sun-line.svg" alt="">
        <!-- {{ darkSwitch ? 'dark' : 'light'}} -->
      </button>
      <button @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        info
      </button>
    </div>
    <transition name="info">
      <div class="show" v-show="toShowOnHover">
        <div class="bio paragraph" v-html="bio.descriptif"></div>
        <!-- <p v-html="bio.network"></p> -->
        <ul>
          <li>{{ bio.mail }}></li>
          <li>{{ bio.tel }}</li>
          <li>{{ bio.ville }}</li>
        </ul>
      </div>
      <!--<uf-logo size="32px" color="#FFFFFF" :inline="true"/> -->
    </transition>
  </div>
</template>

<script>
import UfLogo from './UfLogo.vue'
export default {
  components: {
    UfLogo,
  },
  data() {
    return {
      toShowOnHover: false,
      
    }
  },
  props: ['projetSwitch', 'bio', 'darkSwitch'],
  methods: {
    mouseEnter: function () {
      this.toShowOnHover = !this.toShowOnHover
    },
    mouseLeave: function () {
      this.toShowOnHover = false
    },
  },
}
</script>

<style scoped>

.header {
  color: black
}

 .bio >>> p {
  color : white 
}

.char {
  top: 0;
  display: none;
  letter-spacing: 0;
  font-size: 15px;
}
.banner {
  position: absolute;

  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
}
#lettrage {
  float: left;
  width: 128px;
  height: auto;
}

ul {
  width: 300px;
  float: left;
}

li {
  width: 300px;
}

#index {
  margin-left: 12px;
}

.padder {
  width: 100%;
  border-bottom: 1px solid black;
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  mix-blend-mode: none;

  background-color: #ffea00;
}

.wrapper {
  height: 54px;
}

* {
  font-size: 32px;
}

.info-enter-active {
  transition: all 0.3s;
}

.info-enter-active {
  transition: all 0.3s;
}

.info-enter,
.info-leave-to,
.info-leave-active {
  opacity: 0;
}

p:hover {
  cursor: zoom-in;
}

.show {
  pointer-events: all !important;

  position: fixed;
  overflow: auto;
  z-index: 1000;
  width: 100%;
  left: 0;
  height: fit-content;
  mix-blend-mode: unset;
  background-color: black;
  padding: 18px;
  margin-top :0px;
}

p {
  font-style: normal;
  text-align: left;
  width: 960px;
}

p,
li {
  float: left;
  color: white;
}

li {
  float: right;
  text-align: right;
}

@media screen and (max-width: 960px) {
  p {
    columns: 1;

    width: 100%;
  }

  ul,
  p,
  li {
    font-size: 24px;
  }

  li,
  ul {
    width: 100%;
  }
  ul {
    margin-top: 64px;
    border-top: 1px solid white;
    padding-top: 16px;
  }
}

@media screen and (min-width: 960px) {
  p {
    columns: 2;
  }

  ul,
  p,
  li {
    font-size: 18px;
  }

  ul {
    float: right;
  }

  li {
    margin-left: 64px;
  }
}
</style>
