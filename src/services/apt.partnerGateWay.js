/* eslint-disable import/no-anonymous-default-export */
import { ApiService } from "./api.services";

export class ApiPartnerGateWay extends ApiService {
  getListPartner() {
    return this.get('Partner');
  }
  
}
export default new ApiPartnerGateWay();