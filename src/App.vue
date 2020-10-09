<template>
  <div>
    <router-view></router-view>
    <!-- <router-link to="/Comp1">Accueil</router-link> -->
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    created() {
      // axios.get(URL)
      // .then( res => { console.log(res);
      //   this.users = res.data;
      // })
      // .catch( err => console.log(err));
    }
  }
</script>

<style>
</style>
