import express from 'express';

const app = express();

app.get("/", (req, res) => {
    
});

app.listen(1234, () => {
    console.log("서버 켜짐");
})