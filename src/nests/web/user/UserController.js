import User from "./User";
import MongoDatabase from "../../../database/MongoDatabase";

async function getById(id) {
    return await MongoDatabase.findOne("users", {
        "_id": id,
    });
}

async function getByName(name) {
    return await MongoDatabase.findOne("users", {
        "name": name,
    });
}

async function getByEmail(email) {
    return await MongoDatabase.findOne("users", {
        "email": email,
    });
}

async function create(name, email, password) {
    return await MongoDatabase.create("users", {
        name,
        email,
        password,
    });
}

function fromJson(json) {
    let user = new User();

    user.setId(json._id);
    user.setName(json.name);
    user.setEmail(json.email);
    user.setPictureUrl(json.pictureUrl);
    user.setBiography(json.biography);
    user.setBannerUrl(json.bannerUrl);
    user.setLinks(json.links);
    user.setComments(json.comments);
    user.setStats(json.stats);
    user.setPassword(json.password);

    return user;
}

export default {
    getById,
    getByName,
    getByEmail,
    fromJson,
}