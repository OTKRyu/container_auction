import Trucker from "../../source/Entity/trucker";

import TruckerImpl from "../../source/Usecase/truckerImpl";
import AccountImpl from "../../source/Usecase/accountImpl";

import TruckerPermanence from "../../source/Controller/truckerPermanence";

class TruckerPermanenceMock implements TruckerPermanence {
  createTrucker(truckerId: number) {
    const account = new AccountImpl(0, 100);
    const trucker = new TruckerImpl(truckerId, "trucker", account);
    return trucker;
  }
  getTrucker(truckerId: number) {
    const trucker = this.createTrucker(truckerId);
    return trucker;
  }
  getTruckers() {
    const trucker = this.createTrucker(0);
    return [trucker];
  }
  getNewTruckerId() {
    return 0;
  }
  saveTrucker(trucker: Trucker) {
    return;
  }
  fetchTrucker(trucker: Trucker) {
    return;
  }
}

export default TruckerPermanenceMock;
