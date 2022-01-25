import { store } from "../store";
import { getDataJson, getDollarExchangeRate, getNamesJson } from "../api";
import Product from "../dto/Product";
import Group from "../dto/Group";

async function setAllData() {
    let dataJson = await getDataJson();
    let NamesJson = await getNamesJson();
    let newProductsData = {};
    let newProductsGroups = {};

    for (const product of dataJson.Value.Goods) {
        let newProduct = new Product(product);
        newProductsData[newProduct.id] = newProduct;
    }

    for (const key in NamesJson) {
        newProductsGroups[key] = new Group(NamesJson[key], key);
    }

    store.commit("SET_PRODUCTS_DATA", newProductsData);
    store.commit("SET_PRODUCTS_GROUPS", newProductsGroups);
    store.commit("SET_DOLLAR_EXCHANGE_RATE", await getDollarExchangeRate());
}

const workers = function () {
    setAllData();
    setInterval(setAllData, 15000);
};

export { workers };
