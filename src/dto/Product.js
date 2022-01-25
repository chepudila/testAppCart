export default class Product {
    constructor(data = null) {
        this.price = data?.C;
        this.group = data?.G;
        this.id = data?.T;
        this.count = data?.P;
    }
}
