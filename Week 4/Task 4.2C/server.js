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

app.get('/exponentiate', (req, res) => {
    try {
        const { base, exponent } = req.query;
        if (!isValid(base) || !isValid(exponent)) {
            throw new Error('Invalid parameters. Please provide valid numbers for base and exponent.');
        }
        const result = Math.pow(parseFloat(base), parseFloat(exponent));
        res.json({ message: `SUCCESS! Your result is: ${result}` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/square-root', (req, res) => {
    try {
        const { number } = req.query;
        if (!isValid(number) || parseFloat(number) < 0) {
            throw new Error('Invalid parameter. Please provide a valid non-negative number for square root operation.');
        }
        const result = Math.sqrt(parseFloat(number));
        res.json({ message: `SUCCESS! Your result is: ${result}` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/modulo', (req, res) => {
    try {
        const { dividend, divisor } = req.query;
        if (!isValid(dividend) || !isValid(divisor) || parseFloat(divisor) === 0) {
            throw new Error('Invalid parameters. Please provide valid numbers for dividend and non-zero divisor.');
        }
        const result = parseFloat(dividend) % parseFloat(divisor);
        res.json({ message: `SUCCESS! Your result is: ${result}` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(`
        <h1>Welcome to Vanessa's Arithmetic Microservice</h1>
        <p>This microservice provides basic and advanced arithmetic operations.</p>
        <h2>Basic Arithmetic Operations Endpoints:</h2>
        <ul>
            <li>/add?n1={number}&n2={number} - Addition</li>
            <li>/subtract?n1={number}&n2={number} - Subtraction</li>
            <li>/multiply?n1={number}&n2={number} - Multiplication</li>
            <li>/divide?n1={number}&n2={number} - Division</li>
        </ul>
        <h2>Advanced Arithmetic Operations Endpoints:</h2>
        <ul>
            <li>/exponentiate?base={number}&exponent={number} - Exponentiation</li>
            <li>/square-root?number={number} - Square Root</li>
            <li>/modulo?dividend={number}&divisor={number} - Modulo Operation</li>
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