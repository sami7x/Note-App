/**
 * GET/
 * Homepage
 */
exports.homePage = async(req, res) => {
    const locals = {
        title: "Node Application",
        description: "Free NodeJS Notes App"
    };
    res.render("index", locals);
};

/**
 * GET/
 * About
 */
 exports.about = async(req, res) => {
    const locals = {
        title: "About - NodeJS Notes",
        description: "Free NodeJS Notes App"
    };
    res.render("about", locals);
};