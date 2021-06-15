import { Router } from "express";
import { bcrypt } from "bcrypt";

const router = Router();

router.post("/login", async (req, res) => {
    let password = req.password;
    let databasePassword = database.getPassword();

    if (await bcrypt.compare(password, databasePassword)) {
        // Success
    } else {
        // Failed
    }
});

export default router;