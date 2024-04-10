import axios from "axios";

const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium";

const server = {
  async getAllEntries() {
    try {
      const response = await axios.get(`${URL}/all`);
      return response.data.data.sort((a, b) => a.id - b.id);
    } catch (error) {
      console.error(error);
    }
  },

  async getCategory(category) {
    try {
      const response = await axios.get(`${URL}/category/${category}`);
      return response.data.data.sort((a, b) => a.id - b.id);
    } catch (error) {
      console.error(error);
    }
  },

  async getEntry(name) {
    try {
      const response = await axios.get(`${URL}/entry/${name}`);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default server;
