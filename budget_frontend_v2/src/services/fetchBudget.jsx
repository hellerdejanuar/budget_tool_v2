import axios from "axios";

const baseURL = 'http://127.0.0.1:1337/api/budgets/';
const params = 'populate=budget_item'

export const getBudget = async ( id ) => {
  try {
    const response = await axios.get(`${baseURL}${id}?${params}`)
    return response.data;
  } 
  catch ( error ) {
    throw new Error(`Error fetching budgets. ${error}`);
  }

}