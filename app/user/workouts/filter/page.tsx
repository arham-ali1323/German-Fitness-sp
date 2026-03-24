"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Dumbbell, Filter, Clock, Target, TrendingUp, Search, Calendar } from 'lucide-react';

const WorkoutFilter = () => {
  const { isDark } = useDashboardMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');

  const workouts = [
    {
      id: 1,
      name: 'Full Body Strength',
      category: 'strength',
      difficulty: 'intermediate',
      duration: 45,
      calories: 350,
      equipment: ['Dumbbells', 'Bench'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'HIIT Cardio Blast',
      category: 'cardio',
      difficulty: 'advanced',
      duration: 30,
      calories: 400,
      equipment: ['None'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'Yoga Flow',
      category: 'flexibility',
      difficulty: 'beginner',
      duration: 60,
      calories: 200,
      equipment: ['Yoga Mat'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      name: 'Upper Body Pump',
      category: 'strength',
      difficulty: 'intermediate',
      duration: 40,
      calories: 300,
      equipment: ['Dumbbells', 'Resistance Bands'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      name: 'Core Crusher',
      category: 'core',
      difficulty: 'advanced',
      duration: 25,
      calories: 250,
      equipment: ['Exercise Mat'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      name: 'Morning Stretch',
      category: 'flexibility',
      difficulty: 'beginner',
      duration: 20,
      calories: 100,
      equipment: ['None'],
      image: '/api/placeholder/300/200'
    }
  ];

  const filteredWorkouts = workouts.filter(workout => {
    const matchesSearch = workout.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || workout.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || workout.difficulty === selectedDifficulty;
    const matchesDuration = selectedDuration === 'all' || 
      (selectedDuration === 'short' && workout.duration <= 30) ||
      (selectedDuration === 'medium' && workout.duration > 30 && workout.duration <= 45) ||
      (selectedDuration === 'long' && workout.duration > 45);
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration;
  });

  const categories = ['all', 'strength', 'cardio', 'flexibility', 'core'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];
  const durations = ['all', 'short', 'medium', 'long'];

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Workout Filter
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Find the perfect workout based on your preferences
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
            <input
              type="text"
              placeholder="Search workouts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={cn(
                "w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                isDark
                  ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                  : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={cn(
                  "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className={cn(
                  "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
              >
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>
                    {diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Duration
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className={cn(
                  "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
              >
                <option value="all">All Durations</option>
                <option value="short">Short (&le;30min)</option>
                <option value="medium">Medium (31-45min)</option>
                <option value="long">Long (&gt;45min)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Showing {filteredWorkouts.length} of {workouts.length} workouts
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkouts.map((workout) => (
            <div
              key={workout.id}
              className={cn(
                "rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer border",
                isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
              )}
            >
              <div className="h-40 bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center">
                <Dumbbell className="w-16 h-16 text-white" />
              </div>
              <div className="p-4">
                <h3 className={cn("font-semibold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
                  {workout.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    workout.difficulty === 'beginner' ? "bg-green-100 text-green-800" :
                    workout.difficulty === 'intermediate' ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  )}>
                    {workout.difficulty}
                  </span>
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    isDark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-700"
                  )}>
                    {workout.category}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                      {workout.duration} minutes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                      {workout.calories} calories
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <p className={cn("text-xs mb-2", isDark ? "text-slate-400" : "text-slate-600")}>
                    Equipment: {workout.equipment.join(', ')}
                  </p>
                  <button className={cn(
                    "w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                    "bg-orange-500 text-white hover:bg-orange-600"
                  )}>
                    Start Workout
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-12">
            <Filter className={cn("w-12 h-12 mx-auto mb-4", isDark ? "text-slate-600" : "text-slate-400")} />
            <p className={cn("text-lg font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
              No workouts found
            </p>
            <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutFilter;
