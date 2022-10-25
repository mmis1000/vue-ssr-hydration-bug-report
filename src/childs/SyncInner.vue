<script lang="tsx">
import { CounterKey } from '@/provides';
import { defineComponent, inject, Suspense } from 'vue';

export default defineComponent({
  setup () {
    const counter = inject(CounterKey)

    counter!.count++
    return () => {
      return (<>
        <div>inner</div>
        <div>inner</div>
      </>)
    }
  }
})
</script>