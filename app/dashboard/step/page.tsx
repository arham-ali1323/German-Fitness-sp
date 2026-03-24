"use client";

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Footprints, TrendingUp, Calendar, Target, Award, Activity, Zap } from 'lucide-react';

const Step = () => {
  const { isDark } = useDashboardMode();
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [currentSteps, setCurrentSteps] = useState(8432);
  const [goalSteps, setGoalSteps] = useState(10000);
  const [isEditing, setIsEditing] = useState(false);

  const stepData = {
    today: {
      current: 8432,
      goal: 10000,
      distance: 6.7, // km
      calories: 342,
      activeMinutes: 45,
      hourlySteps: [
        { hour: '6AM', steps: 0 },
        { hour: '7AM', steps: 1243 },
        { hour: '8AM', steps: 2156 },
        { hour: '9AM', steps: 3421 },
        { hour: '10AM', steps: 4567 },
        { hour: '11AM', steps: 5234 },
        { hour: '12PM', steps: 6789 },
        { hour: '1PM', steps: 7234 },
        { hour: '2PM', steps: 7456 },
        { hour: '3PM', steps: 7890 },
        { hour: '4PM', steps: 8234 },
        { hour: '5PM', steps: 8432 }
      ]
    },
    week: {
      current: 58924,
      goal: 70000,
      distance: 46.8,
      calories: 2357,
      activeMinutes: 315,
      dailySteps: [
        { day: 'Mon', steps: 12456 },
        { day: 'Tue', steps: 8234 },
        { day: 'Wed', steps: 9876 },
        { day: 'Thu', steps: 11234 },
        { day: 'Fri', steps: 7654 },
        { day: 'Sat', steps: 14567 },
        { day: 'Sun', steps: 8432 }
      ]
    },
    month: {
      current: 254678,
      goal: 300000,
      distance: 203.2,
      calories: 10187,
      activeMinutes: 1350,
      weeklySteps: [
        { week: 'Week 1', steps: 67890 },
        { week: 'Week 2', steps: 58924 },
        { week: 'Week 3', steps: 72345 },
        { week: 'Week 4', steps: 55519 }
      ]
    }
  };

  const currentData = stepData[selectedPeriod as keyof typeof stepData];
  const progressPercentage = (currentData.current / currentData.goal) * 100;

  const achievements = [
    {
      id: 1,
      title: 'First 10K Steps',
      description: 'Complete 10,000 steps in a single day',
      unlocked: true,
      date: '2024-03-15',
      icon: '🎯'
    },
    {
      id: 2,
      title: 'Week Warrior',
      description: 'Achieve step goal for 7 consecutive days',
      unlocked: true,
      date: '2024-03-10',
      icon: '🏆'
    },
    {
      id: 3,
      title: 'Century Club',
      description: 'Walk 100,000 steps in a month',
      unlocked: false,
      progress: 85,
      icon: '💯'
    },
    {
      id: 4,
      title: 'Marathon Walker',
      description: 'Walk 42.2 km in a single day',
      unlocked: false,
      progress: 60,
      icon: '🏃'
    }
  ];

  const challenges = [
    {
      id: 1,
      name: 'Spring Step Challenge',
      description: 'Walk 200,000 steps this month',
      current: 154678,
      goal: 200000,
      endDate: '2024-03-31',
      participants: 1247,
      rank: 42
    },
    {
      id: 2,
      name: 'Weekend Warrior',
      description: 'Double your weekend steps',
      current: 23001,
      goal: 30000,
      endDate: '2024-03-24',
      participants: 523,
      rank: 18
    }
  ];

  const handleGoalUpdate = () => {
    setIsEditing(false);
    // In a real app, save to backend
    console.log('New goal:', goalSteps);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 100) return 'text-green-500';
    if (percentage >= 75) return 'text-blue-500';
    if (percentage >= 50) return 'text-yellow-500';
    return 'text-orange-500';
  };

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Step Tracking
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Monitor your daily steps and walking progress
          </p>
        </div>

        {/* Period Selector */}
        <div className="mb-6 flex gap-2">
          {['today', 'week', 'month'].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                selectedPeriod === period
                  ? "bg-orange-500 text-white"
                  : isDark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Step Counter */}
        <div className={cn("rounded-xl p-8 border mb-6", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <Footprints className="w-12 h-12 text-white" />
            </div>
            
            <div className="mb-4">
              <p className={cn("text-5xl font-bold mb-2", getProgressColor(progressPercentage))}>
                {currentData.current.toLocaleString()}
              </p>
              <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                of {currentData.goal.toLocaleString()} steps
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className={cn("w-full rounded-full h-4", isDark ? "bg-slate-700" : "bg-slate-200")}>
                <div
                  className={cn(
                    "h-4 rounded-full transition-all duration-500",
                    progressPercentage >= 100 ? "bg-green-500" :
                    progressPercentage >= 75 ? "bg-blue-500" :
                    progressPercentage >= 50 ? "bg-yellow-500" :
                    "bg-orange-500"
                  )}
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                />
              </div>
              <p className={cn("text-sm mt-2 font-medium", getProgressColor(progressPercentage))}>
                {Math.round(progressPercentage)}% Complete
              </p>
            </div>

            {/* Goal Setting */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Target className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                {isEditing ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={goalSteps}
                      onChange={(e) => setGoalSteps(parseInt(e.target.value) || 10000)}
                      className={cn(
                        "w-24 px-2 py-1 border rounded text-center",
                        isDark
                          ? "bg-slate-700 text-slate-100 border-slate-600"
                          : "bg-white text-slate-900 border-slate-300"
                      )}
                    />
                    <button
                      onClick={handleGoalUpdate}
                      className={cn(
                        "px-3 py-1 rounded text-sm font-medium",
                        "bg-green-500 text-white hover:bg-green-600"
                      )}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className={cn(
                        "px-3 py-1 rounded text-sm font-medium",
                        isDark
                          ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                          : "border-slate-300 text-slate-700 hover:bg-slate-100"
                      )}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className={cn(
                      "px-3 py-1 rounded text-sm font-medium transition-colors",
                      isDark
                        ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                        : "border-slate-300 text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    Goal: {currentData.goal.toLocaleString()}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-2 mb-2">
              <Activity className={cn("w-4 h-4 text-blue-500")} />
              <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Distance
              </span>
            </div>
            <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              {currentData.distance}
            </p>
            <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
              kilometers
            </p>
          </div>

          <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-2 mb-2">
              <Zap className={cn("w-4 h-4 text-orange-500")} />
              <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Calories
              </span>
            </div>
            <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              {currentData.calories}
            </p>
            <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
              burned
            </p>
          </div>

          <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className={cn("w-4 h-4 text-green-500")} />
              <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Active Time
              </span>
            </div>
            <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              {currentData.activeMinutes}
            </p>
            <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
              minutes
            </p>
          </div>

          <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className={cn("w-4 h-4 text-purple-500")} />
              <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Avg Steps
              </span>
            </div>
            <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              {Math.round(currentData.current / (selectedPeriod === 'today' ? 1 : selectedPeriod === 'week' ? 7 : 30))}
            </p>
            <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
              per day
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Step Chart */}
          <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              {selectedPeriod === 'today' ? 'Hourly' : selectedPeriod === 'week' ? 'Daily' : 'Weekly'} Steps
            </h3>
            <div className="space-y-2">
              {(() => {
                const stepsData = selectedPeriod === 'today' ? (currentData as any).hourlySteps :
                  selectedPeriod === 'week' ? (currentData as any).dailySteps :
                  (currentData as any).weeklySteps;
                return stepsData?.map((item: any, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <span className={cn("text-sm w-16", isDark ? "text-slate-400" : "text-slate-600")}>
                    {selectedPeriod === 'today' ? item.hour : selectedPeriod === 'week' ? item.day : item.week}
                  </span>
                  <div className="flex-1">
                    <div className={cn("w-full rounded-full h-2", isDark ? "bg-slate-700" : "bg-slate-200")}>
                      <div
                        className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${(item.steps / Math.max(...stepsData.map(s => s.steps))) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                  <span className={cn("text-sm font-medium w-16 text-right", isDark ? "text-slate-300" : "text-slate-700")}>
                    {item.steps.toLocaleString()}
                  </span>
                </div>
              ));
              })()}
            </div>
          </div>

          {/* Achievements */}
          <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={cn(
                    "p-3 rounded-lg border",
                    achievement.unlocked
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : isDark
                      ? "border-slate-600 bg-slate-700"
                      : "border-slate-200 bg-slate-50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-lg",
                      achievement.unlocked
                        ? "bg-green-500"
                        : isDark
                        ? "bg-slate-600"
                        : "bg-slate-200"
                    )}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={cn("font-medium text-sm", isDark ? "text-slate-100" : "text-slate-900")}>
                        {achievement.title}
                      </h4>
                      <p className={cn("text-xs mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                        {achievement.description}
                      </p>
                      {achievement.unlocked ? (
                        <p className={cn("text-xs text-green-600", isDark ? "text-green-400" : "")}>
                          Unlocked {achievement.date}
                        </p>
                      ) : (
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                              Progress
                            </span>
                            <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                              {achievement.progress}%
                            </span>
                          </div>
                          <div className={cn("w-full rounded-full h-1", isDark ? "bg-slate-600" : "bg-slate-200")}>
                            <div
                              className="bg-blue-500 h-1 rounded-full"
                              style={{ width: `${achievement.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className={cn("rounded-xl p-6 border mt-6", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
          <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
            Active Challenges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className={cn(
                  "p-4 rounded-lg border",
                  isDark ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"
                )}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className={cn("font-medium", isDark ? "text-slate-100" : "text-slate-900")}>
                      {challenge.name}
                    </h4>
                    <p className={cn("text-sm mb-2", isDark ? "text-slate-400" : "text-slate-600")}>
                      {challenge.description}
                    </p>
                    <div className="flex gap-4 text-xs">
                      <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                        Ends: {challenge.endDate}
                      </span>
                      <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                        {challenge.participants} participants
                      </span>
                    </div>
                  </div>
                  <div className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    challenge.rank <= 10 ? "bg-yellow-100 text-yellow-800" :
                    challenge.rank <= 50 ? "bg-blue-100 text-blue-800" :
                    "bg-gray-100 text-gray-800"
                  )}>
                    Rank #{challenge.rank}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                      {challenge.current.toLocaleString()} / {challenge.goal.toLocaleString()} steps
                    </span>
                    <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                      {Math.round((challenge.current / challenge.goal) * 100)}%
                    </span>
                  </div>
                  <div className={cn("w-full rounded-full h-2", isDark ? "bg-slate-600" : "bg-slate-200")}>
                    <div
                      className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(challenge.current / challenge.goal) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
