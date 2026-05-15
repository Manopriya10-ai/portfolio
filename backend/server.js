const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post("/contact", (req, res) => {

    const { name, email, message } = req.body;

    console.log("Message Received:");

    console.log(name);

    console.log(email);

    console.log(message);

    res.json({
        success: true,
        message: "Message received successfully"
    });

});

app.listen(5000, () => {

    console.log("Server running on port 5000");

});