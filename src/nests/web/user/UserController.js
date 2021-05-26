import User from "./User";
import MongoDatabase from "../../../database/MongoDatabase";

function getByName(name) {
    return MongoDatabase.findOne("users", {
        "name": name,
    });
}

function getByEmail(email) {
    return MongoDatabase.findOne("users", {
        "email": email,
    });
}

function fromJson(json) {
    let user = new User();

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