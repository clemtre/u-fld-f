<template>
  <div class="ui">
    <p @click="$emit('stateBio')"> about {{ state.bio ? '[x]' : '[ ]' }} </p>
    <p @click="$emit('stateImages')"> images {{ state.images ? '[x]' : '[ ]' }} </p>
    <p @click="$emit('stateText')"> text {{ state.text ? '[x]' : '[ ]' }} </p>
    <p @click="$emit('stateDarkMode')"> darkmode {{ state.darkMode ? '[x]' : '[ ]'}}</p>
  </div>
</template>

<script>

export default {
  name: 'UserInterface',
  props: ['state'],
}
</script>

<style>
    .ui {
        border: 1px solid yellow;
        margin:12px;
        padding: 12px;
        position: fixed;
        width: fit-content;
    }

</style>