import mongoose from 'mongoose';

import Activity from '../models/activity';
import Leaderboard from '../models/leaderboard';
import Team from '../models/team';
import User from '../models/user';
import Workout from '../models/workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { username: 'alex.runner', email: 'alex@example.com', name: 'Alex Morgan' },
      { username: 'jordan.lifts', email: 'jordan@example.com', name: 'Jordan Lee' },
      { username: 'sam.cyclist', email: 'sam@example.com', name: 'Sam Rivera' },
    ]);

    await Team.create([
      { name: 'Morning Momentum', members: [users[0]._id, users[1]._id] },
      { name: 'Weekend Warriors', members: [users[1]._id, users[2]._id] },
    ]);

    await Activity.create([
      { user: users[0]._id, type: 'Running', duration: 35, date: new Date('2026-09-18') },
      { user: users[1]._id, type: 'Strength training', duration: 50, date: new Date('2026-09-19') },
      { user: users[2]._id, type: 'Cycling', duration: 75, date: new Date('2026-09-20') },
    ]);

    await Leaderboard.create([
      { user: users[0]._id, points: 420 },
      { user: users[1]._id, points: 385 },
      { user: users[2]._id, points: 310 },
    ]);

    await Workout.create([
      { name: 'Full-body foundation', category: 'Strength', difficulty: 'Beginner', duration: 30 },
      { name: 'Tempo run', category: 'Cardio', difficulty: 'Intermediate', duration: 35 },
      { name: 'Mobility reset', category: 'Flexibility', difficulty: 'Beginner', duration: 20 },
    ]);

    console.log('Seeded users, teams, activities, leaderboard, and workouts');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
