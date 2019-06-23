<template>
<<<<<<< HEAD
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
import { getDebts } from "../service/api.service.js";
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
    this.debts = await getDebts();
  }
};
</script>
<style>
.card {
  margin-bottom: 10px;
}
</style>
=======
    <ul>
        <li v-for="(debt, id) in debts" :key="id" >
            {{debt.name}} by {{ debt.who }}
            {{debt.amount}}
        </li>
    </ul>
</template>

<script>
import Debt from './Debt'

export default {
    name: 'DebtList',
    components: {
      Debt
    },
    props: ['debts'],
}
</script>

<style>

</style>
>>>>>>> 69def7d2317b048209635cb5d3f1ad9b15ec9605
