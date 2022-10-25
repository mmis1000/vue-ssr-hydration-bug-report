<script lang="tsx">
import { CounterKey } from '@/provides';
import { defineComponent, inject, Suspense } from 'vue';
import AsyncInner from './AsyncInner.vue';
import SyncInner from './SyncInner.vue';

export default defineComponent({
  setup () {
    const counter = inject(CounterKey)

    return () => {
      return (<>
        <div>Async { counter?.count }</div>
        <div>Async { counter?.count }</div>
        <SyncInner />
        <AsyncInner opts={{}} />
      </>)
    }
  }
})
</script>