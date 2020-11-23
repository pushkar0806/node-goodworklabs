const express = require('express');
const fs = require('fs');
const router = express.Router({ caseSensitive: true });

router.get('/:module_name/:screen_name', async (req, res) => {


    fs.readFile(`specifications/${req.params.module_name}/${req.params.screen_name}.json`, (err, data) => {
        if (err && err.errno === -2) {
            return res.send({message: `File ${req.params.screen_name}.json doesn't exists in the /${req.params.module_name}`})  
        }
        let result = JSON.parse(data);
        res.send(result)
    });

})

module.exports = router;
