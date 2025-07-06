<template>
  <component
    :is="loading ? Preloader : componentToRender"
    v-bind="routeParams"
  />
</template>

<script>
import { ref, onMounted, defineComponent } from 'vue';
import Preloader from './Preloader.vue';

export default defineComponent({
  name: 'Loading',
  components: { Preloader },
  props: {
    componentToRender: {
      type: Object,
      required: true
    },
    routeParams: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const loading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    });

    return {
      loading,
      componentToRender: props.componentToRender,
      Preloader
    };
  }
});
</script>