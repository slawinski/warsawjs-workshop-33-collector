<template>
  <div v-if="debts.length">
    <div v-for="debt in debts" :key="debt.title">
      <debt
        class="card"
        :id="debt.id"
        :title="debt.title"
        :who="debt.who"
        :amount="debt.amount"
      />
    </div>
  </div>
</template>

<script>
import DebtService from "../service/debts.service.js";
import Debt from "./Debt";

export default {
  name: "DebtList",
  components: {
    Debt
  },
  data: function() {
    return {
      debts: []
    };
  },
  async created() {
    this.debts = await DebtService.getDebts();
  }
};
</script>
<style>
.card {
  margin-bottom: 10px;
}
</style>
