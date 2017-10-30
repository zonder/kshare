<template>
  <div>
    {{id}}
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
  },
  watch: {
    "$route": (to, from) => {
      this.id = to.params.id;
    }
  },
  created() {
    this.id = this.$route.params.id;
  }
};
</script>
 