import { Router } from "express";
import Profile from "../web/profile/Profile";
import ProfileValidator from "../web/profile/ProfileValidator";
import ResponseUtils from "../utils/ResponseUtils"

const router = Router();

router.get("/", async (req, res) => {
    let { id, email, name } = req.query;
    let profile = null;

    if (id) {
        profile = await Profile.getById(id);
    } else if (email) {
        profile = await Profile.getByEmail(email);
    } else if (name) {
        profile = await Profile.getByName(name);
    } else {
        ResponseUtils.reject(res, 400, "No query was specified");
        return;
    }

    if (profile) {
        ResponseUtils.resolve(res, 200, profile);
    } else {
        ResponseUtils.reject(res, 404, "Profile not found");
    }
});

router.post("/", async (req, res) => {
    let { name, email, password } = req.body;
    let validationResult = ProfileValidator.validate(name, email, password)

    if (validationResult) {
        ResponseUtils.reject(res, 400, validationResult);
    } else {
        if (await Profile.getByName(name) != null) {
            ResponseUtils.reject(res, 400, "Name already used");
        } else if (await Profile.getByEmail(name) != null) {
            ResponseUtils.reject(res, 400, "Email already used");
        } else {
            let user = Profile.create({ name, email, password });

            ResponseUtils.resolve(res, 201, user);
        }
    }
});

export default router;