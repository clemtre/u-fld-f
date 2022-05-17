<template>
  
  <div class="ctn-main" id="ctn-ui">
    <button @click="set('images')">
      images {{ this.getName('images').on ? truePh : falsePh }}
    </button>
    <button @click="set('bio')">
      bio {{ this.getName('bio').on ? truePh : falsePh }}
    </button>
    <button @click="set('clients')">
      images {{ this.getName('clients').on ? truePh : falsePh }}
    </button>
    <button @click="set('darkmode')">
      darkmode {{ this.getName('darkmode').on ? truePh : falsePh }}
    </button>
  </div>
</template>

  <style scoped>
    
#ctn-ui {
  display: flex;
  align-items: stretch;
  padding: var(--gutter);
  gap: var(--gutter);
  position: sticky;
  margin-top: calc(-1 * var(--gutter));
  top:var(--gutter)
}
button {
  
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
  },
  computed: {
    ...mapGetters({
      getName: 'getName',
    }),
  },
}
</script>
