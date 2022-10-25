<template>
  <div>
    <Suspense>
      <div>
        <ChildVue />
      </div>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { provide, Suspense } from "vue";
import ChildVue from "./childs/Child.vue";
import { CounterKey } from "./provides"
const data = reactive({
  count: 1
})

provide(CounterKey, data)
</script>
<style scoped>
.logo {
  text-align: center;
}

nav {
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  border-radius: 4px;
}
</style>
