
import { static as staticDir } from "express";

const constructorMethod = (app) => {
    app.use("/", userRoutes);

    app.use("/public", staticDir("public"));
    app.use("*", (req, res) => {
        res.redirect("/");
    });
};

export default constructorMethod;