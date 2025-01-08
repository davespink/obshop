function getVersion() {
  return ("obShop v1.0e");
}


/*  Helper functions */

function gid(id) {
  return document.getElementById(id);
}
function hid(el) {
  el.style.display = 'none';
}
function vid(el) {
  el.style.display = 'initial';
}
function tvid(el) {
  if (el.style.display == 'initial')
    hid(el)
  else vid(el);
}
function viz(el) {
  if (el.style.display == 'initial')
    return true; else return false;
}
function isa(el, c) {
  if (el == undefined || el == null || el == document)
    return false;
  if (el.classList.contains(c))
    return true; else return false;
}



function getFocusId() {
  let arr = document.getElementsByClassName("hasFocus");
  if (!arr.length) return null;
  let selected = arr[0];
  let id = selected.id;

  let a = id.split("_");
  return a[1];
}

function getItemObjectById(id) {
  let i = getIndexById(id);
  return itemArray[i];
}


function getIndexById(thisId) {
  for (let i = 0; i < itemArray.length; i++) {
    if (thisId == itemArray[i].id) {
      return i;
      break;
    }
  }
}






function createUser() {

  let newUser = User.get();

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "createuser.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onload = function () {
    let resp = this.responseText;
    let a = resp.split("_"); // a[0] should be 0
    if (a[0] != "0") {
      alert("failed to create user - " + a[1]);
    }
    else
      loadTestData();

  }
  xhttp.send("user=" + newUser);
}

// Disk operations to load or save data
function downloadData() {
  alert("not yet");
  Disk.downloadData();
}


function getFocusButtonId() {
  let bs = document.getElementsByClassName("hasFocus");
  let el = bs[0];
  if (!el) { alert("choose item"); return; }
  return el.id;
}




/*
function DoUpdateButton() {
  let bs = document.getElementsByClassName("hasFocus");
  let el = bs[0];
  if (!el) { alert("choose item"); return; }
  let id = Button.idToItem(el.id);
  //el.remove();
  let theIndex = Item.getIndexById(id);

  gItemArray[theIndex].name = itemName.value;
  gItemArray[theIndex].inStock = inStock.value;
  gItemArray[theIndex].toBuy = toBuy.value;

  UI.showAllItems();

  gid(el.id).classList.add("hasFocus");
}

*/

function DoUpdateButton() {

  let thisId = getFocusId();
  if (!thisId) {
    alert("select an item, or click + in menu");
    return;
  }

  for (let i = 0; i < itemArray.length; i++) {
    if (thisId == itemArray[i].id) {
      formToItem(i);
      break;
    }
  }

}



function DoDeleteButton() {

  let itBe;
  if (itBe = getFocusId()) {
    itemArray.splice(getIndexById(itBe), 1);
    clearFocus();
    displayList();

    itemName.value = "";
    toBuy.value = 0;
    inStock.value = 0;
  } else {

    alert("select an item");
    return;
  }
}

function DoNewButton() {

  newItem = Object.create(item);
  newItem.id = getStamp();
  newItem.name = "new item";
  itemArray.unshift(newItem);

  //buttonToForm(newItem);

  displayList();

  clearFocus();
  (gid("item_" + newItem.id)).classList.add('hasFocus');

  alert("added a new item");

}


function doSaveBuyFrom() {

  // go through all buy froms and get state of the check 
  let itBe = getFocusId();

  if (!itBe) {
    alert("select product");
    return;
  }
  console.log(itBe);

  let itemObject = getItemObjectById(itBe);
  itemObject.buyFrom = [];


  for (const child of buyFromList.children) {
    if (child.children[0].checked) {
      let thisButton = child.id;
      a = thisButton.split("_");
      itemObject.buyFrom.push(a[1]);
      console.log(child.id);
    }
  }
}


function showBuyFromList() {

  buyFromList.innerHTML = '';

  Global.shopArray.forEach(item => {

    let newButton = document.createElement('button');
    buyFromList.appendChild(newButton);

    buttonId = "shop_" + item.id;
    newButton.id = buttonId;
    // get focus an find the
    checked = "";
    newButton.innerHTML = item.name + "&nbsp" + `<input type="checkbox" ` + checked + ` onClick="doSaveBuyFrom()"></input`;

    newButton.classList.add("btn");
    newButton.classList.add("btn-primary");
    newButton.classList.add("btn-buyFrom");

    /*
    newButton.addEventListener("click", function () {
      alert("this");
    }
    );
*/
    newButton.style.backgroundColor = item.backgroundColor;

  });


}

function doSelectType(id) {




  // save current data first!
  listType = Global.meta.listType;

  if (listType == "product") {
    Global.productArray = itemArray.map(obj => ({ ...obj }));

  }
  if (listType == "shop") {
    Global.shopArray = itemArray.map(obj => ({ ...obj }));;

  }
  if (listType == "section") {
    Global.sectionArray = itemArray.map(obj => ({ ...obj }));

  }

  // show new list type
  //listType = event.currentTarget.id;

  listType = id;

  if (listType == "product") {
    itemArray = Global.productArray.map(obj => ({ ...obj }));
    inStockRow.style.display = 'table-row';
    toBuyRow.style.display = 'table-row';
    buyFromRow.style.display = 'table-row';

    hid(colorRow);

    showBuyFromList();


  }
  if (listType == "shop") {
    itemArray = Global.shopArray.map(obj => ({ ...obj }));
    hid(inStockRow); hid(toBuyRow); hid(buyFromRow);
    colorRow.style.display = 'table-row';
  }
  if (listType == "section") {
    itemArray = Global.sectionArray.map(obj => ({ ...obj }));
    hid(inStockRow); hid(toBuyRow); hid(buyFromRow);
    colorRow.style.display = 'table-row';
  }

  Global.meta.listType = listType;


  showType.innerHTML = "<h1>" + listType + "</h1>";
  displayList();
}


function formToItem(index) {

  itemArray[index].name = itemName.value;
  itemArray[index].inStock = inStock.value;
  itemArray[index].toBuy = toBuy.value;
  itemArray[index].backgroundColor = backgroundColor.value;
  itemArray[index].textColor = textColor.value;

  displayList();
}


let saveStamp = 1;
function getStamp() {
  while (true) {
    let stamp = (new Date().getTime()).toString();

    if (stamp != saveStamp) {
      saveStamp = stamp;
      return stamp;
    }
  }
}



function displayList() {

  // theDiv = divItems;
  let listType = Global.meta.listType;

  let focus = getFocusId();

  divItems.innerHTML = "";
  itemArray.forEach(item => {

    let newButton = document.createElement('button');
    divItems.appendChild(newButton);

    buttonId = "item_" + item.id;
    newButton.id = buttonId;
    newButton.classList.add("btn");
    if (listType == "product")
      newButton.classList.add("btn-success");
    else if (listType == "shop")
      newButton.classList.add("btn-primary");
    else if (listType == "section")
      newButton.classList.add("btn-dark");

    newButton.classList.add("btn-item");
    if (item.textColor)
      newButton.style.color = item.textColor;
    if (item.backgroundColor)
      newButton.style.backgroundColor = item.backgroundColor
    newButton.innerHTML = item.name + `<span class="badge bg-primary inBadge" style="float:left">`
      + item.inStock + `</span><span class="badge bg-primary inBadge" style="float:right">` + item.toBuy + `</span>`

    const element = gid(buttonId);
    newButton.addEventListener("click", selectButton);

  });

  if (focus) {
    let el = gid("item_" + focus);
    if (el)
      (gid("item_" + focus)).classList.add("hasFocus");
  }

}



////////////////////////////
//  Disk functions
////////////////////////////

function saveToDisk() {

  listType = Global.meta.listType;
  let s = "Global." + listType + "Array = itemArray";
  eval(s);

  const theData = JSON.stringify(Global);

  const xhttp = new XMLHttpRequest();
  var req = "savetodisk.php";
  // let user = User.get();


  //  user = "TESTUSER";
  req += "?filename=" + "autosave_" + user + ".txt";
  ///alert(user + ' save');
  xhttp.open("POST", req);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onload = function () {

  }
  xhttp.send("data=" + theData);

}


function loadFromDisk() {

  const xhttp = new XMLHttpRequest();
  let req = "loadfromdisk.php";
  // let user = "TESTUSER";

  req += "?filename=" + "autosave_" + user + ".txt";
  xhttp.open("POST", req);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onload = function () {

    let json = this.responseText;
    Global = JSON.parse(json);



    listType = Global.meta.listType;
    s = "itemArray = Global." + listType + "Array";
    eval(s);


    displayList();
    showAlert("done load from disk ");

  }
  xhttp.send();
}

//////////////////////////////////////////

function showAlert(message) {
  alertText.innerHTML = "<h3>" + message + "</h3>";
  alertBox.classList.add("animate");
}

function formToItem(index) {
  itemArray[index].name = itemName.value;
  itemArray[index].inStock = inStock.value;
  itemArray[index].toBuy = toBuy.value;
  itemArray[index].textColor = textColor.value;
  itemArray[index].backgroundColor = backgroundColor.value;
  displayList();
}

//
//    Up and down
//

function itemUp() {

  let id = getFocusId();
  if (!id) {
    alert("select an item, or select + in menu");
    return;
  }

  idx = getIndexById(id);

  if (!idx) return;
  let thisItemIndex = itemArray[idx];

  itemArray[idx] = itemArray[idx - 1];
  itemArray[idx - 1] = thisItemIndex;

  clearFocus();

  displayList();

  (gid("item_" + id)).classList.add('hasFocus');

}

function itemDown() {

  let id = getFocusId();
  if (!id) {
    alert("select an item, or select + to add a new item");
    return;
  }

  let idx = getIndexById(id);

  if (idx + 1 == itemArray.length) return;
  let thisItemIndex = itemArray[idx];

  itemArray[idx] = itemArray[idx + 1];
  itemArray[idx + 1] = thisItemIndex;


  clearFocus();

  displayList();

  (gid("item_" + id)).classList.add('hasFocus');
}


function clearFocus() {
  let arr = document.getElementsByClassName("btn-item");
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove("hasFocus");
  }
}

function itemToForm(item) {



  function setSelectedBuyFrom(bfId) {

    console.log(bfId);
    let id = "shop_" + bfId;
    let el = gid(id);
    let checkBox = el.children[0];

    checkBox.checked = true;
  }


  itemName.value = item.name;
  inStock.value = item.inStock;
  toBuy.value = item.toBuy;
  if (item.backgroundColor)
    backgroundColor.value = item.backgroundColor;
  if (item.textColor)
    textColor.value = item.textColor;

  showBuyFromList();

  if (item.buyFrom) {
    if (item.buyFrom.length) {
      for (let i = 0; i < item.buyFrom.length; i++) {
        bfId = item.buyFrom[i];
        setSelectedBuyFrom(bfId);
      }

    }
  }

}

function getItemById(id) {



  let a = id.split("_");
  let thisId = a[1];


  for (let i = 0; i < itemArray.length; i++) {
    if (itemArray[i].id == thisId)
      return itemArray[i];
  }



}


function selectButton(e) {

  clearFocus();
  e.currentTarget.classList.add("hasFocus");

  thisItem = getItemById(e.currentTarget.id);

  itemToForm(thisItem);

}


class obObject {
  constructor(type) {  // Class constructor
    this._type = type;  // Class body/properties
  }
  get(type) { return this._type }
}

class obButton extends obObject {
  constructor() {
    super('obButton');
    this.model = mod;
  }

}