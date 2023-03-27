import axios from "axios";

export default class FakeYoutubeClient {
  async search({ parmas }) {
    return parmas.relatedToVideoId
      ? axios.get("/videos/related.json")
      : axios.get("/videos/search.json");
    // `/videos/${parmas.relatedToVideoId ? "related" : "search"}.json`
  }
  async videos() {
    return axios.get("/videos/popular.json");
  }

  async channels() {
    return axios.get("/videos/channel.json");
  }
}
