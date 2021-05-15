const router = require('express').Router();

router.get('/welcome', async (req, res) => {
    res.json({
        msg: "Node application welcomes you"
    });
});

router.get('/greetings', async (req, res) => {
    res.json({
        msg: "Node application says hi :)"
    });
});

router.post("/print-body", async (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Body printed successfully"
    });
});

module.exports = router;