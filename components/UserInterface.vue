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
      images {{ this.getName('clients').on ? truePh : falsePh }}
    </button>
    <button @click="set('darkmode')">
      night {{ this.getName('darkmode').on ? truePh : falsePh }}
    </button>
  </div>
</template>

  <style scoped>

.no-gap {
  margin-left: calc(var(--gutter) * -1);
  border-left: none;
}

#ctn-ui {
  z-index: 99999;
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
          this.$colorMode.preference = 'dark'
        } else {
          this.$colorMode.preference = 'light'
        }
      }
      this.$store.commit('SWITCH', res)
    },
    incr: function (arg) {this.$store.commit('INCR', this.getName(arg))},
    decr: function (arg) {this.$store.commit('DECR', this.getName(arg))}
  },
  computed: {
    ...mapGetters({
      getName: 'getName',
    }),
  },
}
</script>
