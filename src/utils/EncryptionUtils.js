import bcrypt from "bcrypt";

function compareHash(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

function generateHash(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
}

export default {
    compareHash,
    generateHash,
};