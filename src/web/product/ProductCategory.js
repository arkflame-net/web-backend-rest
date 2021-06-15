class ProductCategory {
    fields = {};

    setId(id) {
        this.fields._id = id;
    }

    setProducts(products) {
        this.fields.products = products;
    }

    toJson() {
        return { ...fields };
    }
}