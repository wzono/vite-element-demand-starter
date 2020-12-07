<template>
  <h1>{{ msg }}</h1>
  <el-card
    
  >
    <el-button
      type="primary"
      @click="count++"
    >count is: {{ count }}</el-button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </el-card>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    makeLoading() {
      const loading = this.$loading({ fullscreen: true });

      setTimeout(() => {
        loading.close();
      }, 500);
    },
  },
  created() {
    this.makeLoading();
  },
};
</script>
