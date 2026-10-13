// Temporary in-memory database
let submissions = [
  { id: 1, milestoneTitle: "Milestone 1: Setup & ERD", repoUrl: "https://github.com/example/repo-1", status: "pending" },
  { id: 2, milestoneTitle: "Milestone 2: CRUD Endpoints", repoUrl: "https://github.com/example/repo-2", status: "in-review" }
];

// @desc    Get all submissions
// @route   GET /api/submissions
const getSubmissions = (req, res) => {
  res.status(200).json({ success: true, count: submissions.length, data: submissions });
};

// @desc    Get a single submission by ID
// @route   GET /api/submissions/:id
const getSubmissionById = (req, res) => {
  const submission = submissions.find(s => s.id === parseInt(req.params.id));
  if (!submission) {
    return res.status(404).json({ success: false, error: "Submission not found" });
  }
  res.status(200).json({ success: true, data: submission });
};

// @desc    Create a new submission
// @route   POST /api/submissions
const createSubmission = (req, res) => {
  const { milestoneTitle, repoUrl, description } = req.body;
  
  if (!milestoneTitle || !repoUrl) {
    return res.status(400).json({ success: false, error: "milestoneTitle and repoUrl are required" });
  }

  const newSubmission = {
    id: submissions.length + 1,
    milestoneTitle,
    repoUrl,
    description: description || "",
    status: "pending"
  };

  submissions.push(newSubmission);
  res.status(201).json({ success: true, data: newSubmission });
};

// @desc    Update a submission
// @route   PUT /api/submissions/:id
const updateSubmission = (req, res) => {
  const submission = submissions.find(s => s.id === parseInt(req.params.id));
  if (!submission) {
    return res.status(404).json({ success: false, error: "Submission not found" });
  }

  const { milestoneTitle, repoUrl, status } = req.body;
  if (milestoneTitle) submission.milestoneTitle = milestoneTitle;
  if (repoUrl) submission.repoUrl = repoUrl;
  if (status) submission.status = status;

  res.status(200).json({ success: true, data: submission });
};

// @desc    Delete a submission
// @route   DELETE /api/submissions/:id
const deleteSubmission = (req, res) => {
  const index = submissions.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ success: false, error: "Submission not found" });
  }

  const deletedSubmission = submissions.splice(index, 1);
  res.status(200).json({ success: true, data: deletedSubmission[0] });
};

module.exports = {
  getSubmissions,
  getSubmissionById,
  createSubmission,
  updateSubmission,
  deleteSubmission
};