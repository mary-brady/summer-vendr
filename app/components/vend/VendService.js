import VendingMachine from "../../models/VendingMachine.js";

//Private Parts


const vm = new VendingMachine()



//public to controller
class VendService {
  constructor() {

  }
  getItems() {
    return vm.getItems()
  }
  addMoney(type) {
    vm.addMoney(type)
    return vm.transactionTotal.toFixed(2)
  }
  vend(foodId) {
    return vm.vend(foodId)
  }
  giveChange() {

  }
}


export default VendService