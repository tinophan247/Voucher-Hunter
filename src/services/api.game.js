/* eslint-disable import/no-anonymous-default-export */
import { ApiService } from "./api.services";

export class ApiGame extends ApiService {
  getGameList() {
    return this.get('games');
  }
}
export default new ApiGame();