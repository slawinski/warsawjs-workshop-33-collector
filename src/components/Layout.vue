<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
<<<<<<< HEAD
      <v-toolbar-title>Collector: Get your debt!</v-toolbar-title>
=======
      <v-toolbar-title>Collector - your debt listing</v-toolbar-title>
>>>>>>> 69def7d2317b048209635cb5d3f1ad9b15ec9605
    </v-toolbar>
    <v-content id="content">
      <v-container fluid fill-height>
<<<<<<< HEAD
        <v-layout justify-center align-center>
          <v-flex text-xs-center>
            <debt-list />
            <add-debt-form />
          </v-flex>
=======
        <v-layout justify-center align-baseline>
          <DebtList v-bind:debts="debts"></DebtList>
>>>>>>> 69def7d2317b048209635cb5d3f1ad9b15ec9605
        </v-layout>
      </v-container>
    </v-content>
    <v-content id="form">
      <v-container fluid fill-height>
        <v-layout justify-center align-baseline>
          <AddDebtForm></AddDebtForm>
        </v-layout>
      </v-container>
    </v-content>
  <v-footer class="pa-3" dark>
    <v-spacer></v-spacer>
    <div>&copy; {{ currentYear }} - Collector Team</div>
  </v-footer>
  </v-app>
</template>

<script>
<<<<<<< HEAD
import DebtList from "./DebtList";
import AddDebtForm from "./AddDebtForm";

export default {
  name: "Layout",
  components: {
    AddDebtForm,
    DebtList
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  computed: {
    currentYear: function() {
      return new Date().getFullYear();
    }
  }
};
=======
import DebtList from './DebtList'
import AddDebtForm from './AddDebtForm'

  export default {
    name: 'Layout',
    components: {
      DebtList,
      AddDebtForm
    },
    data: () => ({
      drawer: null,
      debts: [
        { 
          name: 'Pizza',
          who: 'Peter Kowalski',
          amount: 5.99,
        },
        { 
          name: 'Ramen',
          who: 'John Kowalski',
          amount: 25.99,
        }
      ]
    }),
    props: {
      source: String
    },
    computed: {
      currentYear: function () {
        return new Date().getFullYear()
      }
    },
    methods: {
      greet: function (event) {
        // `this` inside methods points to the Vue instance
        alert('Hello ' + this.name + '!')
        // `event` is the native DOM event
        if (event) {
          alert(event.target.tagName)
        }
    }
  }
  }
>>>>>>> 69def7d2317b048209635cb5d3f1ad9b15ec9605
</script>

<style></style>
