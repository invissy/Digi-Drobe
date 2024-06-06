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

const nameCheck = (arg) => {
    const regex = /^[a-z]{2,25}$/;
    arg = arg.toLowerCase();
    if (!regex.test(arg)) throw new Error(`${arg} is not a valid name`);
    return arg;
}