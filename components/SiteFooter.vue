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
  color: var(--blanc);
  font-size: var(--M);
  text-align: right;
  margin-right: var(--gutter);
}
p {
  align-self: center;
  margin-top: 0;
}
.wrapper {
  border-top: 1px solid var(--blanc);

  width: 100%;
  /* border-top: 1px solid var(--blanc); */
  padding-top: calc(var(--gutter) * 2)
}
.el {
  justify-content: flex-end;
  width: 100%;
  display: flex;
  background-color: var(--noir);
}
</style>