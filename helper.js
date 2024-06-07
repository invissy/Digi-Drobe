// helper functions :D

const paramExists = (arg, varName) => {
    if (arg === undefined) throw new Error(`${varName} not provided`);
}

const stringCheck = (arg, varName) => {
    paramExists(arg, varName);
    if (typeof arg !== "string") throw new Error(`${varName} is not a string`);
    arg = arg.trim();
    if (arg.length === 0) throw new Error(`${varName} is an empty string`);
    return arg;
}

export const nameCheck = (arg) => {
    paramExists(arg, "name");
    arg = stringCheck(arg, "name");
    const regex = /^[a-zA-Z]{2,25}$/;
    if (!regex.test(arg)) throw new Error(`${arg} is not a valid name`);
    return arg;
}

export const usernameCheck = (arg) => {
    paramExists(arg, "username");
    arg = stringCheck(arg, "username");
    const regex = /^[a-z]{5,25}$/;
    arg = arg.toLowerCase();
    if (!regex.test(arg)) throw new Error(`${arg} is not a valid username`);
    return arg;
}

export const emailCheck = (arg) => {
    paramExists(arg, "email");
    arg = stringCheck(arg, "email");
    // taken from https://emailregex.com/ (i love the internet!)
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    arg = arg.toLowerCase();
    if (!regex.test(arg)) throw new Error(`${arg} is not a valid email`);
    return arg;
}