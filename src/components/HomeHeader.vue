<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/customize">Customize</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
@import "@/assets/styles/header.css";
</style>
