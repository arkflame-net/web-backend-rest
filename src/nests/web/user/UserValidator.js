import * as Validator from "validator";

function validateName(name) {
    if (!Validator.isLength(name, { min: 3, max: 16 })) {
        return "Name too short or long";
    }

    if (!Validator.isAlphanumeric(name.replace(/\_/, ""))) {
        return "Invalid name";
    }
}

function validateEmail(email) {
    if (!Validator.isEmail(email)) {
        return "Invalid email"
    }
}

function validatePassword(password) {
    if (!Validator.isLength(password, { min: 3, max: 16 })) {
        return "Password too short or long";
    }
}

function validate(name, email, password) {
    let nameValidationResult = validateName(name);

    if (nameValidationResult) {
        return nameValidationResult;
    }

    let emailValidationResult = validateEmail(email);

    if (emailValidationResult) {
        return emailValidationResult;
    }

    let passwordValidationResult = validatePassword(password);

    if (passwordValidationResult) {
        return passwordValidationResult;
    }
}

export default {
    validate,
}