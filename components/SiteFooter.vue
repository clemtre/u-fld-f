<template>
  <div class="wrapper">
    <!-- <div class="grad"></div>   -->
    <div class="el">
      <p>
        © Unexplored Fields 2022 — contact@unexploredfields.com —
        <a target="_blank" href="https://www.instagram.com/unexplored_fields/"
          >@unexploredfields</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped >
p,a {
  color: var(--A);
  font-size: var(--M);
  text-align: right;
  /* margin-right: var(--gutter); */
}
p {
  align-self: center;
  margin: 10px;
}
.wrapper {
  border-top: 1px solid var(--A);
z-index: 99999999999999999999999999 ;
  width: 100%;
  /* border-top: 1px solid var(--blanc); */
}
.el {
  justify-content: flex-end;
  width: 100%;
  display: flex;
  background-color: var(--B);
}
</style>