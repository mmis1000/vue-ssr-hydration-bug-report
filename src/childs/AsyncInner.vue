<script lang="tsx">
import { defineComponent } from 'vue';
import AsyncInnerMost from './AsyncInnerMost.vue';

export default defineComponent({
  setup () {
    return () => {
      return <AsyncInnerMost />
    }
  }
})
</script>