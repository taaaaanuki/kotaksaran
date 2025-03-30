const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
    host: 'db.octavia.id',
    user: 'o753_KotakSaran', // replace with your database username
    password: '147s:-DSe3tQIf', // replace with your database password
    database: 'o753_KotakSaran' // replace with your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// API endpoint to handle form submissions
app.post('/submit', (req, res) => {
    const { name, class: className, recipient, message, date } = req.body;

    const submissionData = { name, class: className, recipient, message, date };
    const query = 'INSERT INTO submissions SET ?';

    db.query(query, submissionData, (error, results) => {
        if (error) {
            return res.status(500).send('Error saving data to database.');
        }
        res.redirect('thank_you.html');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
