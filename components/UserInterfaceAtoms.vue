<template>
  
  <div>
    <p>{{name}} {{ state ? '[x]' : '[ ]' }}</p>
  </div>
</template>

<script>
export default {
  props: ['state', 'name'],
}
</script>

<style>
</style>