import axios from "axios";

export default {
  async getDebts() {
    const response = await axios.get("http://localhost:3000/debts");
    return response.data;
  },
  async postDebt(payload) {
    return await axios.post("http://localhost:3000/debts/", payload);
  },
  async removeDebt(id) {
    return await axios.delete("http://localhost:3000/debts/" + id, id);
  }
}