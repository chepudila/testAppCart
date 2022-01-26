import data from "./data.json"
import names from "./names.json"

export function getMainMenu() {
    return [
        { name: "Dashboard", verbose: "Главная" },
        { name: "Cart", verbose: "Корзина" },
    ];
}

export function getDataJson() {
    return data;
}

export function getNamesJson() {
    return names;
}

export function getDollarExchangeRate() {
    return Math.random() * (80 - 20) + 20;
}
