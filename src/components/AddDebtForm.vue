<template>
  <v-form ref="form">
    <v-text-field v-model="debt.title" label="Title" required></v-text-field>

    <v-text-field v-model="debt.who" label="Who" required></v-text-field>

    <v-text-field v-model="debt.amount" label="Amount" required></v-text-field>

    <v-btn color="success" @click="post">
      Add
    </v-btn>

    <v-btn color="error" @click="reset">
      Reset
    </v-btn>
  </v-form>
</template>

<script>
import DebtService from "../service/debts.service.js";

export default {
  name: "AppDebtForm",
  data: function() {
    return {
      debt: {
        title: "",
        who: "",
        amount: ""
      }
    };
  },
  methods: {
    async post() {
      await DebtService.postDebt(this.debt);
      await this.reset();
    },
    reset() {
      this.debt.title = "";
      this.debt.who = "";
      this.debt.amount = "";
    }
  }
};
</script>

<style></style>
