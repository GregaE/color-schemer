<script>
import { mapActions } from "vuex";
import Button from "@/components/ui/Button/Button.vue";
import PieChart from "@/components/ui/PieChart.vue";

export default {
  components: {
    PieChart,
    Button,
  },
  props: ["scheme"],
  data: () => ({
    isOpen: false,
  }),
  methods: {
    handleRename(e) {
      if (e instanceof KeyboardEvent && e.code !== "Enter") return;
      if (this.isOpen) {
        if (this.scheme.name !== document.getElementById("rename-input").value)
          this.renameUserScheme({
            schemeId: this.scheme._id,
            user_id: "6245d8c249e428cdbaa8d920",
            newName: document.getElementById("rename-input").value,
          });
      }
      this.isOpen = !this.isOpen;
    },
    ...mapActions(["deleteUserScheme", "renameUserScheme", "setScheme"]),
  },
};
</script>

<template>
  <div class="user-scheme">
    <i
      @click="
        deleteUserScheme({
          schemeId: scheme._id,
          user_id: '6245d8c249e428cdbaa8d920',
        })
      "
      class="fa fa-trash"
      aria-label="delete saved scheme"
    />
    <PieChart :colorsArr="scheme.colors" />
    <p>
      <span v-if="!isOpen" @dblclick="handleRename($event)">{{
        scheme.name
      }}</span>
      <input
        v-else
        type="text"
        :value="`${scheme.name}`"
        @keydown="handleRename($event)"
        id="rename-input"
      />
    </p>
    <Button @click="setScheme(scheme.colors)" variant="primary">Apply</Button>
  </div>
</template>

<style lang="scss" scoped>
.user-scheme {
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  height: max-content;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 1.5rem 4.5rem 2.5rem 4.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--text-primary) 0px 0px 0.357143rem 0px;
  font-size: 2rem;

  i {
    cursor: pointer;
  }

  .fa-trash {
    align-self: flex-end;
    margin-right: -2rem;
  }

  p {
    width: 100%;
    text-align: center;
    span {
      line-height: 3.8rem;
    }
    input[type="text"] {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      font-size: 1.5rem;
      width: 14rem;
    }
  }
}
</style>
