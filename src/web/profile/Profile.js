import MongoDatabase from "../../../database/MongoDatabase";

/* Fields ->
    _id
    *name
    *email
    profilePictureUrl
    biography
    bannerUrl
    links
    comments
    webstats
    roles
*/

async function getById(id) {
    return await MongoDatabase.findOne("profiles", {
        "_id": id,
    });
}

async function getByName(name) {
    return await MongoDatabase.findOne("profiles", {
        "name": name,
    });
}

async function getByEmail(email) {
    return await MongoDatabase.findOne("profiles", {
        "email": email,
    });
}

async function create(name, email) {
    return await MongoDatabase.create("profiles", {
        name,
        email,
    });
}

export default {
    getById,
    getByName,
    getByEmail,
    fromJson,
}