<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>Collector: Get your debt!</v-toolbar-title>
    </v-toolbar>
    <v-content id="content">
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex text-xs-center>
            <debt-list />
            <add-debt-form />
          </v-flex>
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
</script>

<style></style>
