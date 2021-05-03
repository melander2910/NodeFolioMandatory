const router = require("express").Router();

const projects = [
    {
        title: "TuneIt",
        description: "TuneIt is a guitar tuner created with mozillas Web Audio API",
        gitURL: "https://github.com/melander2910/melander2910.github.io",
        images: [],
        technologiesInvoled: ["Javascript", "Html", "CSS"]
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});


module.exports = {
    router
};