import { ApiService } from "./api.services";

export class ApiPartnerGateWay extends ApiService {
  getListPartner() {
    return this.get('Partner');
  }
  
}
export default new ApiPartnerGateWay();