const profileController = require('../controller/profileController')
const router = require('express').Router()

router.get('/api/profiles', profileController.getAllProfiles);
router.get('/api/profiles/:id', profileController.getSingleProfile)
router.post('/api/profiles', profileController.addNewProfile)
router.put('/api/profiles', profileController.updateProfile)
router.delete('/api/profiles/:id', profileController.deleteProfile)


module.exports = router