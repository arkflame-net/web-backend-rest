import { MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'arkflame';
const client = new MongoClient(url);

async function findOne(collectionName, params) {
    let collection = this.database.collection(collectionName);
    let document = await collection.findOne(params);

    return document;
}

async function create(collectionName, params) {
    let collection = this.database.collection(collectionName);
    let result = await collection.insertOne(params);

    return await findOne(collectionName, result.insertedId);
}

function connect() {
    client.connect((error) => {
        if (error) {
            console.log("[MongoDB] Error connecting to " + url + " in database " + databaseName);
        } else {
            this.database = client.db(databaseName);
        }
    });
}

client.on("connect", () => {
    console.log("[MongoDB] Connected to " + url + " in database " + databaseName);
});

client.on("disconnect", () => {
    connect();
});

connect();

export default {
    findOne,
}