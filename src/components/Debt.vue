<template>
  <v-card>
    <v-card-title>
      <h3>{{ this.id }}. {{ this.title }}</h3>
    </v-card-title>
    <v-card-text> {{ this.who }} - {{ this.amount | monetize }} </v-card-text>
    <v-card-actions>
      <v-btn flat color="orange" @click="remove">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import DebtService from "../service/debts.service.js";
export default {
  name: "Debt",
  filters: {
    monetize: function(value) {
      return value + " zł";
    }
  },
  methods: {
    async remove() {
      await DebtService.removeDebt(this.id);
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    who: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
};
</script>

<style></style>
