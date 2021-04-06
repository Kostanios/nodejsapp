const express = require('express');

const db = require('../../localDB/members.json')

const router = express.Router();

// Get all members
router.get('', (req, res)=> {
    res.send(db)
})

// Get single member
router.get('/:id', (req, res)=> {
    const searchId = req.params.id
    const found = db.some(member => member.id == searchId)
    if(found){
      res.send(db.filter( member => member.id == searchId))
    } else {
      res.status(400).json({msg: `members with id : ${searchId} not found`})
    }
    
})

module.exports = router
