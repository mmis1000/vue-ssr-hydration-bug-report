<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
  async setup () {
    await new Promise<void>(resolve => setTimeout(resolve, 1000))
    return () => {
      return (<>
        <div>inner</div>
        <div>inner</div>
      </>)
    }
  }
})
</script>