import VendService from "./VendService.js";
import VendingMachine from "../../models/VendingMachine.js";

//PRIVATE PARTS

//variables outside of the exported class are not accessible
const vendService = new VendService()

function drawTotal(total) {
  document.getElementById('total').innerText = total
}
function drawItems() {
  let items = vendService.getItems()
  //draw the items to the page
  let template = ''
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    template += `
    <div class="food-item"> <button onclick="drawVend()">
    <img src="${item.img}" alt = ""></button>
    <h3>$${item.price}</h3> 
    </div>
    `
  }
  document.getElementById('food').innerHTML = template
}

function drawVend(foodId) {
  let vendItem = vendService.getItems()
  for (let i = 0; i < vendItem.length; i++) {
    const element = vendItem[i];
    if (foodId = element.id)
      return vendService.vend(foodId)
  }
}



//PUBLIC PARTS
//Controllers are used for getting user input
//Updating Screen
//Sending and reciving data from Service
class VendController {
  constructor() {

  }



  //used to send money to service
  addMoney(cur) {
    console.log('controller: ', cur)
    let total = vendService.addMoney(cur)
    console.log('returned to controller: ', total)
    drawTotal(total)
  }


}

drawItems()

export default VendController