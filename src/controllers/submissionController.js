const Submission = require('../models/submission');
const asyncHandler = require('../utils/asyncHandler');

// @desc    Get all submissions with filtering, sorting, and pagination
// @route   GET /api/submissions
// @access  Public / Private
const getSubmissions = asyncHandler(async (req, res) => {
  // 1. FILTERING
  const queryObj = { ...req.query };
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach((el) => delete queryObj[el]);

  // Advanced filtering (e.g., gte, gt, lte, lt)
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let query = Submission.find(JSON.parse(queryStr));

  // 2. SORTING
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt'); // Default: newest first
  }

  // 3. PAGINATION
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;

  query = query.skip(skip).limit(limit);

  // Execute query
  const submissions = await query;

  // Send response
  res.status(200).json({
    success: true,
    count: submissions.length,
    page,
    limit,
    data: submissions,
  });
});

// @desc    Get single submission by ID
// @route   GET /api/submissions/:id
// @access  Public / Private
const getSubmissionById = asyncHandler(async (req, res) => {
  const submission = await Submission.findById(req.params.id);

  if (!submission) {
    res.status(404);
    throw new Error('Submission not found');
  }

  res.status(200).json({
    success: true,
    data: submission,
  });
});

// @desc    Create new submission
// @route   POST /api/submissions
// @access  Private
const createSubmission = asyncHandler(async (req, res) => {
  const submission = await Submission.create(req.body);

  res.status(201).json({
    success: true,
    data: submission,
  });
});

// @desc    Update submission
// @route   PUT /api/submissions/:id
// @access  Private
const updateSubmission = asyncHandler(async (req, res) => {
  let submission = await Submission.findById(req.params.id);

  if (!submission) {
    res.status(404);
    throw new Error('Submission not found');
  }

  submission = await Submission.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: submission,
  });
});

// @desc    Delete submission
// @route   DELETE /api/submissions/:id
// @access  Private
const deleteSubmission = asyncHandler(async (req, res) => {
  const submission = await Submission.findByIdAndDelete(req.params.id);

  if (!submission) {
    res.status(404);
    throw new Error('Submission not found');
  }

  res.status(200).json({
    success: true,
    message: 'Submission deleted successfully',
  });
});

module.exports = {
  getSubmissions,
  getSubmissionById,
  createSubmission,
  updateSubmission,
  deleteSubmission,
};