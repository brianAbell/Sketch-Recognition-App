const express = require('express');
const app = express();
const PORT = 3001; // We're using 3001, assuming your React app is running on 3000

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
