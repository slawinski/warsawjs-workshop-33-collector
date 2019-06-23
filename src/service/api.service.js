import axios from "axios";

export async function getDebts() {
  const response = await axios.get("http://localhost:3000/debts");
  return response.data;
}

export async function postDebt(payload) {
  return await axios.post("http://localhost:3000/debts/", payload);
}

export async function removeDebt(id) {
  return await axios.delete("http://localhost:3000/debts/" + id, id);
}
