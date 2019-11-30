import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    // const proxy = 'https://cors-anywhere.herokuapp.com/';
    try {
      const res = await axios(
        `//api.giphy.com/v1/gifs/search?q=${this.query}&api_key=zb0GF9tH99N0q22DA8jAP5vNA00kGCXk&limit=5`
      );
      this.result = res.data.data;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
