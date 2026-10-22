const Submission = require('../models/submission');

// @desc    Get all submissions
exports.getAllSubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find();
        res.status(200).json({ success: true, count: submissions.length, data: submissions });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get single submission by ID
exports.getSubmissionById = async (req, res) => {
    try {
        const submission = await Submission.findById(req.params.id);
        if (!submission) {
            return res.status(404).json({ success: false, message: 'Submission not found' });
        }
        res.status(200).json({ success: true, data: submission });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Invalid ID format or server error' });
    }
};

// @desc    Create new submission
exports.createSubmission = async (req, res) => {
    try {
        const newSubmission = await Submission.create(req.body);
        res.status(201).json({ success: true, data: newSubmission });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Update submission
exports.updateSubmission = async (req, res) => {
    try {
        const updatedSubmission = await Submission.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedSubmission) {
            return res.status(404).json({ success: false, message: 'Submission not found' });
        }
        res.status(200).json({ success: true, data: updatedSubmission });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Delete submission
exports.deleteSubmission = async (req, res) => {
    try {
        const deletedSubmission = await Submission.findByIdAndDelete(req.params.id);
        if (!deletedSubmission) {
            return res.status(404).json({ success: false, message: 'Submission not found' });
        }
        res.status(200).json({ success: true, message: 'Submission deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};