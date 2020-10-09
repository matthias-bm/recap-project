<template>
  <div>
    <!-- <div>{{ maData }}</div>

    <div>{{ maMethode() }}</div>
    <button @click="maMethode">Click</button>

    <img :src="url">
    <div v-bind:class="{ red: estRouge }"></div>

    <h1 v-once>{{ bonjour }}</h1>
    {{ direBonjour() }} 

    <p v-html="html"></p> 

    <button v-on:click="resultat++">
          Compteur : {{resultat}}
    </button>

    <input v-model="number" type="number">
    <hr>
    <div>{{ number }}</div> 

    <h1>{{ adresse }}</h1>
    <h2>Convertisseur euros/dollars</h2>
    <p>
      EUR à changer en USD :
      <input v-model="euros">
    </p>
    <p>{{ conversion }}</p>
    <h3 v-if="true">Inséré et visible sur le DOM</h3>
    <h3 v-if="false">Pas sur le DOM</h3>

    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>

  <div v-nom-directive>
    Exemple directive
  </div>

  <div>
    {{ 'jean dupont' | monFiltre }}
  </div>
  
  <transition name="mon-animation" appear>
    <div style="background: red; height: 200px; width: 200px;"></div>
  </transition>

  <form @submit.prevent="trySubmit">
  </form>

  <div>{{ todosLength }}</div>-->

  <button @click="incrementer(parametre)">Incrementer</button>

  </div>
</template>

<script>
  // import Vue from 'vue'
  // import _ from 'lodash'
  // import VueResource from 'vue-resource'
  // import axios from 'axios'
  // Vue.use(VueResource);
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'mon-composant',
    data: () => ({
      // numbers: [1,2,3,4,5,6,7,8,9],
      // euros: '',
      // taux: '',
      // conversion: 'Je ne peux pas vous donner une réponse avant que vous ne rentriez un nombre !',
      // numero: "3",
      // rue: "rue des Roses",
      // ville: "Paris",
      // maData: 'text',
      // url: 'mon-image.fr',
      // bonjour: 'Bonjour',
      // html: 'Ce message contient un lien vers le profil de <a href="#">Jean Dupont</a>.',
      // resultat: 0,
      // number: 0
    }),
    methods: {
      ...mapMutations(['incrementer'])
      // changePage() {
      //   this.$router.go(1) // naviguer vers l'URL suivante
      //   this.$router.go(-1) // naviguer vers l'URL précédente
      //   this.$router.go(-2) // naviguer deux pages en arrière
      // },
      // trySubmit() {
      //   axios.post('URL_BDD.fr', parametre, options)
      //   .then(res => console.log(res)) 
      //   .catch(err => console.log(err))
      // },
      // maMethode() {
      //   alert('Hello')
      // },
      // direBonjour() {
      //   return this.bonjour = "Salut !"
      // },
      // getConversion: _.debounce(
      //   function () {
      //     if (!this.euros) {
      //       this.conversion = 'Je ne peux pas vous donner une réponse avant que vous ne rentriez un nombre !';
      //       return;
      //     } else if (this.euros.search(/^[\d.,]+$/) === -1) {
      //       this.conversion = "Ne tapez que des chiffres"
      //       return;
      //     }
      //     this.conversion = 'Je récupère le taux de change...'
      //     this.$http.get('https://api.exchangeratesapi.io/latest')
      //       .then(function (response) {
      //         this.taux = response.body.rates.USD;
      //         this.conversion = `${(this.taux * this.euros.replace(',', '.')).toFixed(2)} $`;
      //       })
      //       .catch(function (error) {
      //         this.conversion = "Erreur ! Impossible d'accéder à l'API." + error
      //       })
      //   },
      //   500
      // )
    },
    computed: {
        ...mapGetters(['todosLength']),
      // adresse() {
      //   return `${this.numero}, ${this.rue} ${this.ville}`;
      // }
    },
    watch: {
      // euros() {
      //   this.conversion = "J'attends que vous arrêtiez de taper..."
      //   this.getConversion()
      // }
    },
    directives: {
      // nomDirective: (el) => {
      //   el.style.backgroundColor = 'red'
      // }
    },
    filters: {
      // monFiltre(valeur) {
      //   return valeur.charAt(0).toUpperCase() + valeur.slice(1)
      // }
    }
  }
</script>

<style scoped>

  .mon-animation-enter-active {
    animation: fade-in .5s;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

</style>