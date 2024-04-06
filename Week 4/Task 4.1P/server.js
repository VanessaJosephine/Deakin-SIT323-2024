const express = require("express");
const app = express();

app.get("/add", (req, res) => {
    try {
        const { n1, n2 } = req.query;
        if (!isValid(n1) || !isValid(n2))
            throw new Error('INVALID parameters. Please provide valid numbers!');
        const result = parseFloat(n1) + parseFloat(n2);
        res.json({ message: `SUCCESS! Your result is: ${result}` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/subtract", (req, res) => {
    try {
        const { n1, n2 } = req.query;
        if (!isValid(n1) || !isValid(n2))
            throw new Error('INVALID parameters. Please provide valid numbers!');
        const result = parseFloat(n1) - parseFloat(n2);
        res.json({ message: `SUCCESS! Your result is: ${result}` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/multiply", (req, res) => {
    try {
        const { n1, n2 } = req.query;
        if (!isValid(n1) || !isValid(n2))
            throw new Error('INVALID parameters. Please provide valid numbers!');
        const result = parseFloat(n1) * parseFloat(n2);
        res.json({ message: `SUCCESS! Your result is: ${result}` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/divide", (req, res) => {
    try {
        const { n1, n2 } = req.query;
        if (!isValid(n1) || !isValid(n2))
            throw new Error('INVALID parameters. Please provide valid numbers!');
        const result = parseFloat(n1) / parseFloat(n2);
        res.json({ message: `SUCCESS! Your result is: ${result}` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(`
        <h1>Welcome to Vanessa's Arithmetic Microservice</h1>
        <p>This microservice provides basic arithmetic operations.</p>
        <h2>API Endpoints:</h2>
        <ul>
            <li>/add?n1={number}&n2={number} - Addition</li>
            <li>/subtract?n1={number}&n2={number} - Subtraction</li>
            <li>/multiply?n1={number}&n2={number} - Multiplication</li>
            <li>/divide?n1={number}&n2={number} - Division</li>
        </ul>
    `);
})

const port = 8080;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});

// Helper function to validate if a value is a valid number
function isValid(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}