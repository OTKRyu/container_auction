import Cargo from "../../Entity/cargo";

import CargoPermanence from "../../Controller/cargoPermanence";

class CargoPermanenceMock implements CargoPermanence {
  registerCargo(cargoId: number) {
    const cargo = new Cargo(
      cargoId,
      "cargo",
      "container",
      "2023-02-20",
      undefined,
      0
    );
    return cargo;
  }
  getCargo(cargoId: number) {
    const cargo = this.registerCargo(cargoId);
    return cargo;
  }
  getCargos() {
    const cargo = this.registerCargo(0);
    return [cargo];
  }
  getNewCargoId() {
    return 0;
  }
  saveCargo(cargo: Cargo) {
    return;
  }
  fetchCargo(cargo: Cargo) {
    return;
  }
}

export default CargoPermanenceMock;