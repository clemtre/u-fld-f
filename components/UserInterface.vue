<template>
  
  <div class="ctn-main" id="ctn-ui">
    <button @click="set('projets')">
      projets {{ this.getName('projets').on ? truePh : falsePh }}
    </button>

    <!-- images -->
    <button @click="set('images')">
      images {{ this.getName('images').on ? truePh : falsePh }}
    </button>
    <button @click="decr('images')" class="no-gap">
      -
    </button>
        <button @click="incr('images')" class="no-gap">
      +
    </button>
    <!-- images -->
    
    <button @click="set('bio')">
      bio {{ this.getName('bio').on ? truePh : falsePh }}
    </button>
    <button @click="set('clients')">
      clients {{ this.getName('clients').on ? truePh : falsePh }}
    </button>
    <button @click="set('darkmode')">
      night {{ this.getName('darkmode').on ? truePh : falsePh }}
    </button>
    <div id="ph-ui"></div>
  </div>
</template>

  <style scoped>
.dark-mode #ph-ui {
    background-color: var(--jaune);
}
.light-mode #ph-ui {
    background-color: var(--noir);
}
#ph-ui{
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  z-index: -10000;
}
.no-gap {
  margin-left: calc(var(--gutter) * -1);
  border-left: none;
}
button {
  }
#ctn-ui {
  z-index: 10000;
  display: flex;
  align-items: stretch;
  padding: var(--gutter);
  gap: var(--gutter);
  position: sticky;
  margin-top: calc(-1 * var(--gutter));
  top:var(--gutter)
}
button:hover {
  background-color: fuchsia;
  
}
</style>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      falsePh: '[_]',
      truePh: '[x]',
    }
  },
  methods: {
    set: function (arg) {
      const res = this.getName(arg)
      if (arg === 'darkmode') {
        if (res.on) {
          this.$colorMode.preference = 'light'
          } else {
          this.$colorMode.preference = 'dark'
        }
      }
      this.$store.commit('SWITCH', res)
    },

    incr: function (arg) {
      this.$store.commit('INCR', [this.getName(arg),1])
      !this.getName('images').on ? this.$store.commit('SWITCH', this.getName('images')) : null
    },
    decr: function (arg) {this.$store.commit('INCR', [this.getName(arg),-1])
      !this.getName('images').on ? this.$store.commit('SWITCH', this.getName('images')) : null
    }
  },
  computed: {
    ...mapGetters({
      getName: 'getName',
    }),
  },
}
</script>
