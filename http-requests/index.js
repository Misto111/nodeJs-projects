import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello!</h1>");

});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Miro</p>");

});

app.get("/contacts", (req, res) => {
    res.send("<h1>Contacts</h1><p>My phone number is: +359 898305845</p>");

});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});