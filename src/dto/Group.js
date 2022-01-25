export default class Group {
    constructor(data = null, id = null) {
        this.id = id;
        this.verbose = data?.G;

        if (data?.B) {
            let products = {};

            for (const key in data.B) {
                products[key] = {
                    id: key,
                    verbose: data.B[key].N,
                };
            }

            this.products = products;
        } else {
            this.products = {};
        }
    }
}
