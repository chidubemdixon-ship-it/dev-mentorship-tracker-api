const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    milestoneTitle: {
        type: String,
        required: [true, 'Milestone title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    repoUrl: {
        type: String,
        required: [true, 'Repository URL is required'],
        trim: true
    },
    description: {
        type: String,
        maxlength: [500, 'Description cannot exceed 500 characters']
    },
    status: {
        type: String,
        enum: ['pending', 'in-review', 'approved', 'changes-requested'],
        default: 'pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Submission', submissionSchema);