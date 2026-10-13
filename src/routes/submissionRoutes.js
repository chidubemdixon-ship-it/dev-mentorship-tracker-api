const express = require('express');
const router = express.Router();
const {
  getSubmissions,
  getSubmissionById,
  createSubmission,
  updateSubmission,
  deleteSubmission
} = require('../controllers/submissionController');

// Clean mapping of routes
router.route('/')
  .get(getSubmissions)
  .post(createSubmission);

router.route('/:id')
  .get(getSubmissionById)
  .put(updateSubmission)
  .delete(deleteSubmission);

module.exports = router;