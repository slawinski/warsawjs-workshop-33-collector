<template>
<<<<<<< HEAD
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
import { postDebt } from "../service/api.service.js";

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
      await postDebt(this.debt);
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
=======
  <v-card style="width: 100%;">
    <v-toolbar
      color="indigo"
      dark
      dense
    >
      <v-toolbar-title>Add new debt</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>send</v-icon>
    </v-toolbar>
    <v-form>
      <v-autocomplete
        v-model="selected"
        :items="['John Kowalski', 'Adam Johnes', 'Ian Goodmore', 'Fahrad Agron']"
        chips
        label="Who?"
        full-width
        hide-details
        hide-no-data
        hide-selected
        multiple
        single-line
      ></v-autocomplete>
      <v-divider></v-divider>
      <v-text-field
        label="What?"
        placeholder="What?"
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-text-field
        label="Amount"
        placeholder="How much?"
        single-line
        full-width
        hide-details
      ></v-text-field>
    </v-form>
  </v-card>
</template>

<script>
export default {
    name: 'AddDebtForm',
    data () {
      return {
        selected: ['John Kowalski'],
        items: ['John Kowalski', 'Adam Johnes', 'Ian Goodmore', 'Fahrad Agron'],
        title: 'Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa'
      }
    }
}
</script>

<style>

</style>
>>>>>>> 69def7d2317b048209635cb5d3f1ad9b15ec9605
