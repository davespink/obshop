function getVersion() {
  return ("GoShop v1.0");
}

/*
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

function isDebug() {
  return false;
}




const Utils = {
  doDebug(s) {
    if (isDebug())
      console.log(s);
  }
}


const Alert = {
  show(message) {
    alertText.innerHTML = "<h3>" + message + "</h3>";
    alertBox.classList.add("animate");
  },

}

*/

/*

const User = {
  name: "anon",
  description: "typical user",
  language: "en",
  get() {
    let l = location.href;
    let a = l.split("?");
    if (a.length > 1) {
      a = a[1].split("=");
      let u = a[1];
      return u;
    }
    else
      return (localStorage.getItem('in_user'));
  },
  set(user) {
    localStorage.setItem('in_user', user);
  },
  dir() {
    return this.get();
  },
  photoDir() {
    return this.dir() + "/photos"
  },
  go() {
    let user = prompt("go user");
    if (!user) {
      alert('no user');
      return;
    }
    this.set(user);
    loadDataFromDisk();
    showAlert("Welcome " + user);
    gid("idUser").innerHTML = "<H1>" + user + "</H1>";

  },
};
//
//    Item - the data stored on each item or container
//


*/

/*
const Item = {
  // belongs in UI
  create(type) {
    let newItem = Object.create(gItemArray[0]);

    pName = prompt('Enter item name', 'unNamed');
    if (pName == null) return false;

    let stampx = new Date().getTime();
    let stamp = stampx.toString();

    newItem.id = stamp;
    newItem.type = type;

    //  newItem.parentId = getCurrentParentId();

    newItem.name = pName;
    newItem.description = pName + " description";
    newItem.image = "./images/noimage.jpg";

    gItemArray.push(newItem);
    return newItem;
  },
  getChildren(id) {
    let children = [];
    for (let i = 0; i < gItemArray.length; i++) {
      //     
      if (gItemArray[i].parentId == id) {
        children.push(gItemArray[i].id);
        thisItemObject = gItemArray[i].id; // debug
      }
    }
    return children;
  },
  hasChildren(id) {
    return this.getChildren(id).length;
  },
  countChildren(id) {
    return this.getChildren(id).length;
  },
  getById(id) {
    return gItemArray[this.getIndexById(id)];
  },
  getIndexById(id) {
    for (i = 0; i < gItemArray.length; i++) {
      //     
      if (gItemArray[i].id == id) {
        return i;
      }
    }
  },
}
*/
/*
const UI = {
  showAllItems() {


    let bs = document.getElementsByClassName("hasFocus");
    let theFocus = bs[0];

    let el = document.getElementById("divItems");
    el.innerHTML = "";

    function showItem(thisItemObject) {
      Button.createItem(thisItemObject);
    }

    let showArray = gItemArray;

    //   showArray.sort(compareAlpha);

    showArray.forEach(item => {
      Button.createItem(item);
    })

    // restore focus
    if (theFocus)
      gid(theFocus.id).classList.add("hasFocus");


  },


  clearAllFocii() {

    let bs = document.getElementsByClassName("hasFocus");
    for (let i = 0; i < bs.length; i++) {
      bs[i].classList.remove("hasFocus");
    }

  },
}
*/

/*
const Button = {
  click(id) {
    let b = gid(id);
    b.click();
  },
  idToItem(buttonId) {
    let a = buttonId.split("_");
    return a[1];
  },
  selectById(id) {
    let thisButton = gid("item_" + id);
    if (!thisButton)
      thisButton = gid("chain_" + id);
    return thisButton;
  },

  createSearch(itemObject) {

    let newButton = document.createElement('button');
    document.getElementById("divSearchResults").appendChild(newButton);

    // el.addEventListener("touchstart", touchStart);
    //  el.addEventListener("touchend", touchEnd);

    if (itemObject.type == 'c')
      buttonColor = `btn btn-primary`;
    else
      buttonColor = `btn btn-success`;

    buttonId = "search_" + itemObject.id;

    theHTML = `<button id="${buttonId}" 
        onClick="searchButtonClick('${itemObject.id}')" 
         class="${buttonColor}" style="margin:5px">${itemObject.name}</button>`;

    newButton.outerHTML = theHTML;

    return newButton;
  },

  createItem(itemObject) {
    let newButton = document.createElement('button');
    let el = document.getElementById("divItems");
    el.appendChild(newButton);

    // let Up = "\u21e7";
    // let Down = "\u21e9";

    let buttonColor = `btn btn-success`;

    let buttonId = "item_" + itemObject.id;
    let badgeLeftId = "badgeLeft_" + itemObject.id;
    let badgeRightId = "badgeRight_" + itemObject.id;
    let theHTML = `<button id="${buttonId}" onClick=buttonSelected("${buttonId}") 
           class="${buttonColor} bc-button" >${itemObject.name} <span   class="badge bg-dark inBadge" style="float:left">${itemObject.inStock}</span>
           <span class="badge bg-primary inBadge" style="float:right">${itemObject.toBuy}</span>
           </button>`;

    newButton.outerHTML = theHTML;


    return buttonId;

  },
 

  

}


*/

/////////////////////////
//
// array operations
//
////////////////////////
function getItemObjectById(id) {
  return Item.getById(id);
}

function getItemObjectIndexById(id) {
  return Item.getIndexById(id);
}
////////////////////////////////


/*
function doSearch() {
  // debugger;

  divSearchResults.innerHTML = '';
  let lookFor = (search.value).toUpperCase();
  if (lookFor.length < 3)
    return;

  for (let i = 0; i < gItemArray.length; i++) {
    let thisName = (gItemArray[i].name).toUpperCase();

    if (thisName.includes(lookFor)) {

      createSearchButton(gItemArray[i]);
    }

  }
}

*/
/*
function clearAllFocii() {
  UI.clearAllFocii();
  return;
  let bs = document.getElementsByClassName("hasFocus");
  for (let i = 0; i < bs.length; i++) {
    bs[i].classList.remove("hasFocus");
  }

}

*/


/*
function clickButton(id) {
  buttonId = "item_" + id;
  b = gid(buttonId);

  b.click();
}

*/

/*
function compareItems(aItem, bItem) {

  aName = aItem.name.toUpperCase();
  bName = bItem.name.toUpperCase();

  if (aName < bName) {
    return -1;
  }
  if (aName > bName) {
    return 1;
  }
  return 0;
}
function compareAlpha(aItem, bItem) {

  let aName = aItem.name;
  let bName = bItem.name;

  aName = aName.toUpperCase();
  bName = bName.toUpperCase();

  if (aName < bName) {
    return -1;
  }
  if (aName > bName) {
    return 1;
  }
  return 0;
}
*/


function doDebug(message) {
  // if (message.length == 0) gid("debugWindow").innerHTML = ""; else
  //  gid("debugWindow").innerHTML = gid("debugWindow").innerHTML + message + "</br>";

}

function showAlert(message, type) {
  Alert.show(message);
}

 


// User clicked here
function makeNewItem(type) {
  //debugger;
  thisItemObject = Item.create(type);
  if (!thisItemObject)
    return;

  gItemArray.push(thisItemObject);

  return thisItemObject;
   
}

/*
function handleClick() {
  alert();
  let thisButton = event.currentTarget;
  buttonSelected(thisButton.id);
}

function createChainButton(itemObject) {
  return Button.createChain(itemObject);
}


function createItemButton(itemObject) {
  return Button.createItem(itemObject);
}

*/
 
function buttonSelected(id) {
  clearAllFocii();
  let el = gid(id);
  el.classList.add("hasFocus");

  let itemId = Button.idToItem(id);
  let thisItem = Item.getById(itemId);

  itemName.value = thisItem.name;
  inStock.value = thisItem.inStock;
  itemName.value = thisItem.name;
  toBuy.value = thisItem.toBuy;
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
    //  saveDataToDisk();
  }
  xhttp.send("user=" + newUser);
}

// Disk operations to load or save data
function downloadData() {
  Disk.downloadData();
}

// This will be replaced when the use id code is working
function loadTestData() {

  // now comes from disk

  Disk.loadData("testdata.txt");

  UI.showAllItems();

  chain_0.click();

  showAlert("loaded test data");
}



function DoNewItem() {
  it = Item.create("I");
  Button.createItem(it);
  UI.showAllItems();
}

function getFocusButtonId() {
  let bs = document.getElementsByClassName("hasFocus");
  let el = bs[0];
  if (!el) { alert("choose item"); return; }
  return el.id;
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
  }
}

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



 


function gid(id) {
  return document.getElementById(id);
}
function getFocusId() {
  let arr = document.getElementsByClassName("hasFocus");
  if (!arr.length) return null;
  let selected = arr[0];
  let id = selected.id;

  let a = id.split("_");
  return a[1];
}

function getIndexById(thisId) {

  for (let i = 0; i < itemArray.length; i++) {
    if (thisId == itemArray[i].id) {
      return i;
      break;
    }
  }

}


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


function DoUpdateButton() {

  let thisId = getFocusId();
  if (!thisId) {
    alert("select an item, or click + in menu");
    return;
  }

  for (let i = 0; i < itemArray.length; i++) {
    if (thisId == itemArray[i].id) {
      formToArray(i);
      break;
    }
  }

}

function DoNewButton() {

  newItem = Object.create(item);
  newItem.id = getStamp();
  newItem.name = "new item";
  itemArray.unshift(newItem);

  buttonToForm(newItem);

  displayList();

  clearFocus();
  (gid("item_" + newItem.id)).classList.add('hasFocus');

  alert("added a new item");

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
  }
}

function formToArray(index) {
  itemArray[index].name = itemName.value;
  itemArray[index].inStock = inStock.value;
  itemArray[index].toBuy = toBuy.value;

  displayList();
}


function DoNewButton() {

  newItem = Object.create(item);
  newItem.id = getStamp();
  newItem.name = "new item";
  itemArray.unshift(newItem);

  buttonToForm(newItem);

  displayList();

  clearFocus();
  (gid("item_" + newItem.id)).classList.add('hasFocus');

  alert("added a new item");

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


function doSelectType() {

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

  listType = event.currentTarget.id;


  if (listType == "product") {
    itemArray = Global.productArray.map(obj => ({ ...obj }));
  }

  if (listType == "shop") {
    itemArray = Global.shopArray.map(obj => ({ ...obj }));
  }
  if (listType == "section") {
    itemArray = Global.sectionArray.map(obj => ({ ...obj }));
  }

  Global.meta.listType = listType;

  displayList();
}

function displayList() {

  theDiv = divItems;
  let listType = Global.meta.listType;

  let focus = getFocusId();

  divItems.innerHTML = "";
  itemArray.forEach(item => {

    let newButton = document.createElement('button');
    theDiv.appendChild(newButton);

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


function showAlert(message) {
  alertText.innerHTML = "<h3>" + message + "</h3>";
  alertBox.classList.add("animate");
}

function formToArray(index) {
  itemArray[index].name = itemName.value;
  itemArray[index].inStock = inStock.value;
  itemArray[index].toBuy = toBuy.value;

  displayList();
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

function buttonToForm(item) {
  itemName.value = item.name;
  inStock.value = item.inStock;
  toBuy.value = item.toBuy;

}



function selectButton(e) {

  function getItemById(id) {

    let a = id.split("_");
    let thisId = a[1];
    itemArray.forEach
      (item => {
        if (item.id == thisId) {

          buttonToForm(item);

        }
      });
  }


  clearFocus();
  e.currentTarget.classList.add("hasFocus");

  let thisId = e.currentTarget.id;
  let thisItem = getItemById(thisId);

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