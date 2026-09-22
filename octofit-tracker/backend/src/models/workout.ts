import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, trim: true },
    duration: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export default mongoose.model('Workout', workoutSchema);