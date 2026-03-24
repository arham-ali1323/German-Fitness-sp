"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Apple, Calendar, Target, TrendingUp, Clock, Flame, Award } from 'lucide-react';

const DietDetails = () => {
  const { isDark } = useDashboardMode();
  const [selectedWeek, setSelectedWeek] = useState('current');
  const [selectedDay, setSelectedDay] = useState('monday');

  const weeklyPlans = {
    current: {
      week: 'Mar 18 - Mar 24, 2024',
      totalCalories: 10500,
      avgDailyCalories: 1500,
      protein: 420,
      carbs: 1260,
      fat: 420,
      waterIntake: 56, // liters
      meals: 35
    },
    previous: {
      week: 'Mar 11 - Mar 17, 2024',
      totalCalories: 10200,
      avgDailyCalories: 1457,
      protein: 405,
      carbs: 1224,
      fat: 405,
      waterIntake: 49,
      meals: 33
    }
  };

  const dailyPlans = {
    monday: {
      date: '2024-03-18',
      meals: [
        {
          name: 'Protein Smoothie',
          time: '7:00 AM',
          calories: 320,
          protein: 25,
          carbs: 35,
          fat: 8,
          type: 'breakfast',
          completed: true
        },
        {
          name: 'Greek Yogurt Parfait',
          time: '10:00 AM',
          calories: 180,
          protein: 15,
          carbs: 22,
          fat: 4,
          type: 'snack',
          completed: true
        },
        {
          name: 'Grilled Chicken Salad',
          time: '12:30 PM',
          calories: 450,
          protein: 38,
          carbs: 25,
          fat: 18,
          type: 'lunch',
          completed: true
        },
        {
          name: 'Apple with Almond Butter',
          time: '3:30 PM',
          calories: 200,
          protein: 6,
          carbs: 24,
          fat: 12,
          type: 'snack',
          completed: false
        },
        {
          name: 'Salmon with Vegetables',
          time: '7:00 PM',
          calories: 520,
          protein: 42,
          carbs: 35,
          fat: 22,
          type: 'dinner',
          completed: false
        }
      ],
      totalCalories: 1670,
      totalProtein: 126,
      totalCarbs: 141,
      totalFat: 64,
      waterIntake: 2.8,
      completed: 3,
      total: 5
    },
    tuesday: {
      date: '2024-03-19',
      meals: [
        {
          name: 'Overnight Oats',
          time: '7:30 AM',
          calories: 350,
          protein: 12,
          carbs: 52,
          fat: 10,
          type: 'breakfast',
          completed: true
        },
        {
          name: 'Protein Bar',
          time: '10:00 AM',
          calories: 200,
          protein: 20,
          carbs: 18,
          fat: 8,
          type: 'snack',
          completed: true
        },
        {
          name: 'Turkey Wrap',
          time: '1:00 PM',
          calories: 380,
          protein: 28,
          carbs: 35,
          fat: 12,
          type: 'lunch',
          completed: true
        },
        {
          name: 'Mixed Nuts',
          time: '4:00 PM',
          calories: 170,
          protein: 6,
          carbs: 8,
          fat: 15,
          type: 'snack',
          completed: false
        },
        {
          name: 'Lean Beef Stir-fry',
          time: '7:30 PM',
          calories: 480,
          protein: 35,
          carbs: 42,
          fat: 18,
          type: 'dinner',
          completed: false
        }
      ],
      totalCalories: 1580,
      totalProtein: 101,
      totalCarbs: 155,
      totalFat: 63,
      waterIntake: 2.5,
      completed: 3,
      total: 5
    }
  };

  const currentPlan = weeklyPlans[selectedWeek as keyof typeof weeklyPlans];
  const currentDay = dailyPlans[selectedDay as keyof typeof dailyPlans] || dailyPlans.monday;

  const progressPercentage = (currentDay.completed / currentDay.total) * 100;

  const getMealTypeColor = (type: string) => {
    switch (type) {
      case 'breakfast':
        return 'bg-yellow-100 text-yellow-800';
      case 'lunch':
        return 'bg-blue-100 text-blue-800';
      case 'dinner':
        return 'bg-purple-100 text-purple-800';
      case 'snack':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Diet Details
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Track your daily nutrition and meal plans
          </p>
        </div>

        {/* Week Selector */}
        <div className="mb-6">
          <div className="flex gap-2">
            {Object.keys(weeklyPlans).map((week) => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  selectedWeek === week
                    ? "bg-orange-500 text-white"
                    : isDark
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                {week === 'current' ? 'Current Week' : 'Previous Week'}
              </button>
            ))}
          </div>
          <p className={cn("text-sm mt-2", isDark ? "text-slate-400" : "text-slate-600")}>
            {currentPlan.week}
          </p>
        </div>

        {/* Weekly Overview */}
        <div className={cn("rounded-xl p-6 border mb-6", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
          <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
            Weekly Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className={cn("w-12 h-12 mx-auto mb-2 rounded-full bg-orange-100 flex items-center justify-center")}>
                <Flame className="w-6 h-6 text-orange-500" />
              </div>
              <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                {currentPlan.totalCalories}
              </p>
              <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Total Calories
              </p>
            </div>
            <div className="text-center">
              <div className={cn("w-12 h-12 mx-auto mb-2 rounded-full bg-blue-100 flex items-center justify-center")}>
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                {currentPlan.avgDailyCalories}
              </p>
              <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Daily Average
              </p>
            </div>
            <div className="text-center">
              <div className={cn("w-12 h-12 mx-auto mb-2 rounded-full bg-green-100 flex items-center justify-center")}>
                <Apple className="w-6 h-6 text-green-500" />
              </div>
              <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                {currentPlan.protein}g
              </p>
              <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Total Protein
              </p>
            </div>
            <div className="text-center">
              <div className={cn("w-12 h-12 mx-auto mb-2 rounded-full bg-purple-100 flex items-center justify-center")}>
                <TrendingUp className="w-6 h-6 text-purple-500" />
              </div>
              <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                {currentPlan.carbs}g
              </p>
              <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Total Carbs
              </p>
            </div>
            <div className="text-center">
              <div className={cn("w-12 h-12 mx-auto mb-2 rounded-full bg-yellow-100 flex items-center justify-center")}>
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                {currentPlan.waterIntake}L
              </p>
              <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Water Intake
              </p>
            </div>
            <div className="text-center">
              <div className={cn("w-12 h-12 mx-auto mb-2 rounded-full bg-red-100 flex items-center justify-center")}>
                <Award className="w-6 h-6 text-red-500" />
              </div>
              <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                {currentPlan.meals}
              </p>
              <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Total Meals
              </p>
            </div>
          </div>
        </div>

        {/* Day Selector */}
        <div className="mb-6">
          <h3 className={cn("text-lg font-semibold mb-3", isDark ? "text-slate-100" : "text-slate-900")}>
            Daily Plan
          </h3>
          <div className="flex gap-2">
            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  selectedDay === day
                    ? "bg-orange-500 text-white"
                    : isDark
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                {day.charAt(0).toUpperCase() + day.slice(1, 3)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Daily Meals */}
          <div className="lg:col-span-2">
            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={cn("text-lg font-semibold", isDark ? "text-slate-100" : "text-slate-900")}>
                  {currentDay.date}
                </h3>
                <div className="flex items-center gap-2">
                  <span className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                    Progress:
                  </span>
                  <div className={cn("w-32 rounded-full h-2", isDark ? "bg-slate-700" : "bg-slate-200")}>
                    <div
                      className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                    {currentDay.completed}/{currentDay.total}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {currentDay.meals.map((meal, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-4 rounded-lg border",
                      meal.completed
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : isDark
                        ? "border-slate-600 bg-slate-700"
                        : "border-slate-200 bg-slate-50"
                    )}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center",
                          meal.completed
                            ? "bg-green-500 text-white"
                            : isDark
                            ? "bg-slate-600 text-slate-300"
                            : "bg-slate-200 text-slate-600"
                        )}>
                          {meal.completed ? '✓' : index + 1}
                        </div>
                        <div>
                          <h4 className={cn("font-medium", isDark ? "text-slate-100" : "text-slate-900")}>
                            {meal.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                              {meal.time}
                            </span>
                            <span className={cn(
                              "px-2 py-1 rounded-full text-xs font-medium",
                              getMealTypeColor(meal.type)
                            )}>
                              {meal.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={cn("text-lg font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                          {meal.calories}
                        </p>
                        <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                          calories
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className={cn("block text-xs mb-1", isDark ? "text-slate-500" : "text-slate-500")}>
                          Protein
                        </span>
                        <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {meal.protein}g
                        </span>
                      </div>
                      <div>
                        <span className={cn("block text-xs mb-1", isDark ? "text-slate-500" : "text-slate-500")}>
                          Carbs
                        </span>
                        <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {meal.carbs}g
                        </span>
                      </div>
                      <div>
                        <span className={cn("block text-xs mb-1", isDark ? "text-slate-500" : "text-slate-500")}>
                          Fat
                        </span>
                        <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {meal.fat}g
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Daily Summary */}
          <div className="lg:col-span-1">
            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                Daily Summary
              </h3>

              <div className="space-y-4">
                <div className={cn("p-4 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-50")}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                      Total Calories
                    </span>
                    <span className={cn("text-lg font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                      {currentDay.totalCalories}
                    </span>
                  </div>
                  <div className={cn("w-full rounded-full h-2", isDark ? "bg-slate-600" : "bg-slate-200")}>
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: `${(currentDay.totalCalories / 2000) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className={cn("p-3 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-50")}>
                    <p className={cn("text-lg font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                      {currentDay.totalProtein}g
                    </p>
                    <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      Protein
                    </p>
                  </div>
                  <div className={cn("p-3 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-50")}>
                    <p className={cn("text-lg font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                      {currentDay.totalCarbs}g
                    </p>
                    <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      Carbs
                    </p>
                  </div>
                  <div className={cn("p-3 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-50")}>
                    <p className={cn("text-lg font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                      {currentDay.totalFat}g
                    </p>
                    <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      Fat
                    </p>
                  </div>
                </div>

                <div className={cn("p-4 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-50")}>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                      Water Intake
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={cn("text-lg font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                      {currentDay.waterIntake}L
                    </span>
                    <span className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                      of 3L goal
                    </span>
                  </div>
                  <div className={cn("w-full rounded-full h-2 mt-2", isDark ? "bg-slate-600" : "bg-slate-200")}>
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(currentDay.waterIntake / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <div className={cn("p-4 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-50")}>
                  <h4 className={cn("text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Macros Distribution
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                        Protein
                      </span>
                      <span className={cn("text-xs font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                        {Math.round((currentDay.totalProtein * 4 / currentDay.totalCalories) * 100)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                        Carbs
                      </span>
                      <span className={cn("text-xs font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                        {Math.round((currentDay.totalCarbs * 4 / currentDay.totalCalories) * 100)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                        Fat
                      </span>
                      <span className={cn("text-xs font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                        {Math.round((currentDay.totalFat * 9 / currentDay.totalCalories) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietDetails;
