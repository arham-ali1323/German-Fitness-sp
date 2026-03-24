"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Dumbbell, Play, Pause, RotateCcw, CheckCircle, Timer } from 'lucide-react';

const BodyWorkout = () => {
  const { isDark } = useDashboardMode();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const exercises = [
    {
      id: 1,
      name: 'Jumping Jacks',
      targetReps: 30,
      duration: 30,
      muscleGroup: 'Full Body',
      difficulty: 'beginner',
      description: 'A classic cardio exercise that works your entire body',
      instructions: 'Start with feet together, arms at sides. Jump while spreading legs shoulder-width apart and raising arms overhead. Return to starting position.'
    },
    {
      id: 2,
      name: 'Push-ups',
      targetReps: 15,
      duration: 45,
      muscleGroup: 'Upper Body',
      difficulty: 'intermediate',
      description: 'Build upper body strength with this fundamental exercise',
      instructions: 'Start in plank position. Lower body until chest nearly touches floor, then push back up. Keep core engaged throughout.'
    },
    {
      id: 3,
      name: 'Squats',
      targetReps: 20,
      duration: 40,
      muscleGroup: 'Lower Body',
      difficulty: 'beginner',
      description: 'Strengthen your legs and glutes with squats',
      instructions: 'Stand with feet shoulder-width apart. Lower hips back and down as if sitting in a chair. Keep chest up and knees behind toes.'
    },
    {
      id: 4,
      name: 'Plank',
      targetReps: 1,
      duration: 60,
      muscleGroup: 'Core',
      difficulty: 'intermediate',
      description: 'Core strengthening exercise that builds stability',
      instructions: 'Hold push-up position with body in straight line from head to heels. Engage core and hold steady breathing.'
    },
    {
      id: 5,
      name: 'Lunges',
      targetReps: 12,
      duration: 40,
      muscleGroup: 'Lower Body',
      difficulty: 'beginner',
      description: 'Unilateral leg exercise for balance and strength',
      instructions: 'Step forward with one leg, lowering hips until both knees are 90 degrees. Push back to starting position and alternate legs.'
    },
    {
      id: 6,
      name: 'Mountain Climbers',
      targetReps: 20,
      duration: 30,
      muscleGroup: 'Full Body',
      difficulty: 'intermediate',
      description: 'Dynamic exercise combining cardio and core work',
      instructions: 'Start in plank position. Alternately drive knees toward chest in a running motion while keeping hips steady.'
    },
    {
      id: 7,
      name: 'Burpees',
      targetReps: 8,
      duration: 50,
      muscleGroup: 'Full Body',
      difficulty: 'advanced',
      description: 'Intense full-body exercise for maximum calorie burn',
      instructions: 'Squat down, place hands on floor, jump feet back to plank, do push-up, jump feet back, then jump up with arms overhead.'
    },
    {
      id: 8,
      name: 'Crunches',
      targetReps: 25,
      duration: 30,
      muscleGroup: 'Core',
      difficulty: 'beginner',
      description: 'Targeted abdominal exercise',
      instructions: 'Lie on back, knees bent, hands behind head. Lift shoulders off floor using abs, not neck. Lower and repeat.'
    }
  ];

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleStartExercise = () => {
    setIsPlaying(true);
    setTimer(exercises[currentExercise].duration);
    setIsTimerActive(true);
  };

  const handlePauseExercise = () => {
    setIsPlaying(false);
    setIsTimerActive(false);
  };

  const handleNextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setIsPlaying(false);
      setTimer(0);
      setIsTimerActive(false);
    }
  };

  const handlePreviousExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      setIsPlaying(false);
      setTimer(0);
      setIsTimerActive(false);
    }
  };

  const handleCompleteExercise = () => {
    setCompletedExercises([...completedExercises, currentExercise]);
    setIsPlaying(false);
    setTimer(0);
    setIsTimerActive(false);
    if (currentExercise < exercises.length - 1) {
      handleNextExercise();
    }
  };

  const handleReset = () => {
    setCurrentExercise(0);
    setIsPlaying(false);
    setCompletedExercises([]);
    setTimer(0);
    setIsTimerActive(false);
  };

  const current = exercises[currentExercise];
  const progress = ((currentExercise + (completedExercises.includes(currentExercise) ? 1 : 0)) / exercises.length) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Body Workout
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Complete full-body workout routine with timer and progress tracking
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
              Workout Progress
            </span>
            <span className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
              {completedExercises.length} / {exercises.length} completed
            </span>
          </div>
          <div className={cn("w-full rounded-full h-2", isDark ? "bg-slate-800" : "bg-slate-200")}>
            <div 
              className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Exercise List */}
          <div className="lg:col-span-1">
            <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Exercises
            </h3>
            <div className="space-y-2">
              {exercises.map((exercise, index) => (
                <div
                  key={exercise.id}
                  onClick={() => index !== currentExercise && setCurrentExercise(index)}
                  className={cn(
                    "p-3 rounded-lg border cursor-pointer transition-colors",
                    index === currentExercise
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : completedExercises.includes(index)
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : isDark
                      ? "border-slate-700 bg-slate-800 hover:bg-slate-700"
                      : "border-slate-200 bg-white hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {completedExercises.includes(index) ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : index === currentExercise ? (
                        <Play className="w-4 h-4 text-orange-500" />
                      ) : (
                        <div className={cn("w-4 h-4 rounded-full border-2", isDark ? "border-slate-600" : "border-slate-400")} />
                      )}
                      <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                        {exercise.name}
                      </span>
                    </div>
                    <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      {exercise.duration}s
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Exercise */}
          <div className="lg:col-span-2">
            <div className={cn(
              "rounded-xl p-6 border",
              isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
            )}>
              {/* Timer Display */}
              <div className="text-center mb-6">
                <div className={cn(
                  "inline-flex items-center justify-center w-32 h-32 rounded-full border-4 mb-4",
                  isTimerActive ? "border-orange-500" : "border-slate-300",
                  isDark && !isTimerActive ? "border-slate-600" : ""
                )}>
                  <div className="text-center">
                    <Timer className={cn("w-8 h-8 mx-auto mb-2", isTimerActive ? "text-orange-500" : isDark ? "text-slate-400" : "text-slate-500")} />
                    <div className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                      {formatTime(timer)}
                    </div>
                  </div>
                </div>
                <h2 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
                  {current.name}
                </h2>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className={cn(
                    "px-3 py-1 rounded-full font-medium",
                    current.difficulty === 'beginner' ? "bg-green-100 text-green-800" :
                    current.difficulty === 'intermediate' ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  )}>
                    {current.difficulty}
                  </span>
                  <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                    {current.muscleGroup}
                  </span>
                  <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                    {current.targetReps} reps
                  </span>
                </div>
              </div>

              {/* Exercise Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Description
                  </h3>
                  <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                    {current.description}
                  </p>
                </div>
                <div>
                  <h3 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Instructions
                  </h3>
                  <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                    {current.instructions}
                  </p>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex gap-3">
                {!isPlaying ? (
                  <button
                    onClick={handleStartExercise}
                    className={cn(
                      "flex-1 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                      "bg-orange-500 text-white hover:bg-orange-600"
                    )}
                  >
                    <Play className="w-4 h-4" />
                    Start Exercise
                  </button>
                ) : (
                  <button
                    onClick={handlePauseExercise}
                    className={cn(
                      "flex-1 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                      "bg-yellow-500 text-white hover:bg-yellow-600"
                    )}
                  >
                    <Pause className="w-4 h-4" />
                    Pause
                  </button>
                )}

                <button
                  onClick={handleCompleteExercise}
                  disabled={!isPlaying}
                  className={cn(
                    "py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                    isPlaying
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  )}
                >
                  <CheckCircle className="w-4 h-4" />
                  Complete
                </button>

                <button
                  onClick={handleReset}
                  className={cn(
                    "py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                    isDark
                      ? "border-slate-700 text-slate-300 hover:bg-slate-700"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  )}
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePreviousExercise}
                  disabled={currentExercise === 0}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    currentExercise === 0
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : isDark
                      ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  )}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextExercise}
                  disabled={currentExercise === exercises.length - 1}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    currentExercise === exercises.length - 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : isDark
                      ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  )}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyWorkout;
