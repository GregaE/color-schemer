<template>
  <div class="modal">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 42%;
  left: 50%;
  margin-top: -15rem;
  margin-left: -21rem;
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  width: 42rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 0rem 0rem 3rem 0rem;
  border-radius: var(--border-radius);
  box-shadow: var(--text-primary) 0px 0px 0.357143rem 0px;
  z-index: 1000;
}
</style>
