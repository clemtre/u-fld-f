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
.grad {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 16px;
  width: 100%;
}
* {
  color: var(--blanc);
  font-size: 24px;
  text-align: right;
  margin-right: 16px;
}
p {
  align-self: center;
}
.wrapper {
  width: 100%;
  border-top: 1px solid var(--blanc);
}
.el {
  justify-content: flex-end;
  width: 100%;
  display: flex;
  background-color: black;
}
</style>