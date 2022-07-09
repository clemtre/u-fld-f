<template>
  <div class="ctn-main" id="ctn-ui">
    <p class="resume" v-html="$store.state.Bio.resume"></p>
    <div class="ctn-button">
      <button @click="set('projets')">
        projects {{ this.getName('projets').on ? truePh : falsePh }}
      </button>

      <!-- images -->
      <!-- <button @click="set('images')">
      images {{ this.getName('images').on ? truePh : falsePh }}
    </button>
    <button @click="decr('images')" class="no-gap">
      -
    </button>
        <button @click="incr('images')" class="no-gap">
      +
    </button> -->
      <!-- images -->

      <button @click="set('bio')">
        info {{ this.getName('bio').on ? truePh : falsePh }}
      </button>
      <button>writing [x]</button>
      <!-- <button @click="set('clients')">
      clients {{ this.getName('clients').on ? truePh : falsePh }}
    </button> -->
      <button @click="darkToggle()">darkmode</button>
      <!-- <button @click="set('darkmode')">
        night {{ this.getName('darkmode').on ? truePh : falsePh }}
      </button> -->
    </div>
    <div id="ph-ui"></div>
  </div>
</template>

  <style scoped>
.dark-mode #ph-ui {
  /* background-color: var(--jaune); */
}
#ph-ui {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10000;
}
.no-gap {
  margin-left: calc(var(--gutter) * -1);
  border-left: none;
}
button {
  font-size: var(--M);
  padding: 0px;
  /* background-color: var(--jaune); */
  /* border: 10px solid var(--jaune); */
}
.symbole {
  /* color:var(--blanc); */
  display: inline-block;
  transform: translate(-5px, -5px);
}
#ctn-ui {
  z-index: 10000;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 20px);
  row-gap: 5px;
  /* padding: var(--gutter); */
  column-gap: var(--gutter);
  position: sticky;
  margin-top: calc(-1 * var(--gutter));
  top: var(--gutter);
  justify-content: space-between;
}
.ctn-button {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.ctn-button *:not(:first-child) {
  border-left: 1px solid var(--A);
  padding-left: 10px;
}
button:hover {
  background-color: fuchsia;
  padding: 0 10px;
  color: var(--B);
}
.resume {
  margin: 0;
  order: 10;
  text-align: right;
  align-self: flex-end;
  width: max-content;
}
</style>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      falsePh: '[_]',
      truePh: '[x]',
      val:'2'
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
      this.$store.commit('INCR', [this.getName(arg), 1])
      !this.getName('images').on
        ? this.$store.commit('SWITCH', this.getName('images'))
        : null
    },
    decr: function (arg) {
      this.$store.commit('INCR', [this.getName(arg), -1])
      !this.getName('images').on
        ? this.$store.commit('SWITCH', this.getName('images'))
        : null
    },
    darkToggle: function (val) {
      this.$style()
    },
  },
  computed: {
    ...mapGetters({
      getName: 'getName',
    }),
  },
}
</script>
