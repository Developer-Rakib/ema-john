function addtoLocalStore(id) {
    let objData = getDataFromStore();

    // // get data 
    // const data = localStorage.getItem("cartItem")
    // if (data) {
    //     objData = JSON.parse(data);
    // } else {
    //     objData = {};
    // }

    // add quantity 
    let quantity = objData[id];

    if (quantity) {
        objData[id] = quantity + 1;
    } else {
        objData[id] = 1;

    }
    localStorage.setItem("cartItem", JSON.stringify(objData))

}

function getDataFromStore() {
    let objData;
    // get data 
    const data = localStorage.getItem("cartItem")
    if (data) {
        objData = JSON.parse(data);
    } else {
        objData = {};
    }
    return objData;
}

function removeFromLocalStore(id) {
    let getItem = localStorage.getItem("cartItem");
    if (getItem) {
        let data = JSON.parse(getItem);
        if (id in data) {
            delete data[id];
            localStorage.setItem("cartItem", JSON.stringify(data))
        }
    }

}
function removeAllFromLocalStore() {
    localStorage.removeItem("cartItem")


}

export { addtoLocalStore, removeFromLocalStore, removeAllFromLocalStore, getDataFromStore }