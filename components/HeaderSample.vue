<template>
  <div id="comp" >
      <p >{{msg}}</p>
  </div>
  <!-- :style="ok ? event : null" -->
</template>

<script>
export default {
    name:'HeaderSample',
    data(){
        return{
            a:1
        }
    },
    props: [
        'msg','ok'
    ],
    
    
    
}
</script>

<style>
    #comp {
        width: 100%;
        height: 200px;
        background-color: lightblue;
        
    }
    .event {
        color:blue;
        font-size: 32px;
    }
</style>