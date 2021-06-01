import { Router } from "express";
import UserController from "../nests/web/user/UserController";
import UserValidator from "../nests/web/user/UserValidator";
import ResponseUtils from "../utils/ResponseUtils"

const router = Router();

router.get("/", async (req, res) => {
    let { id, email, name } = req.query;
    let userJson = null;

    if (id) {
        userJson = await UserController.getById(id);
    } else if (email) {
        userJson = await UserController.getByEmail(email);
    } else if (name) {
        userJson = await UserController.getByName(name);
    } else {
        ResponseUtils.reject(res, 400, "No query was specified");
        return;
    }

    if (userJson) {
        let user = UserController.fromJson(userJson);

        if (user) {
            ResponseUtils.resolve(res, 200, user.toJson());
        } else {
            ResponseUtils.reject(res, 500, "User cannot be parsed");
        }
    } else {
        ResponseUtils.reject(res, 404, "User not found");
    }
});

router.post("/", async (req, res) => {
    let { name, email, password} = req.body;
    let validationResult = UserValidator.validate(name, email, password)

    if (validationResult) {
        ResponseUtils.reject(res, 400, validationResult);
    } else {
        if (await UserController.getByName(name) != null) {
            ResponseUtils.reject(res, 400, "Name already used");
        } else if (await UserController.getByEmail(name) != null) {
            ResponseUtils.reject(res, 400, "Email already used");
        } else {
            let user = UserController.create({name, email, password});
            let userJson = user.toJson();
            
            delete userJson.password;

            ResponseUtils.resolve(res, 201, userJson);
        }
    }
});