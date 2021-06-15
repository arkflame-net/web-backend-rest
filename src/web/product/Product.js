class Product {
    fields = {};

    setId(id) {
        this.fields._id = id;
    }

    setName(name) {
        this.fields.name = name;
    }

    setDescription(description) {
        this.fields.description = description;
    }

    toJson() {
        return { ...fields };
    }
}