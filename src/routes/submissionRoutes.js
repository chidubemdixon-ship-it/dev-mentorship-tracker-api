const express = require('express');
const router = express.Router();
const {
    getAllSubmissions,
    getSubmissionById,
    createSubmission,
    updateSubmission,
    deleteSubmission
} = require('../controllers/submissionController');

// Routes for /api/submissions
router.route('/')
    .get(getAllSubmissions)
    .post(createSubmission);

router.route('/:id')
    .get(getSubmissionById)
    .put(updateSubmission)
    .delete(deleteSubmission);

module.exports = router;