"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Droplets,
  Flame,
  Heart,
  Clock,
  Users,
  Search,
  Bell,
  Settings,
  ChevronRight,
  Play,
  Target,
  Dumbbell,
  Moon,
  Sun,
  X
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as RePieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const FitnessDashboard = () => {
  const { isDark, toggleMode } = useDashboardMode();
  const [selectedPeriod, setSelectedPeriod] = useState('Weekly');
  const [searchQuery, setSearchQuery] = useState('');
  const [showThemeSettings, setShowThemeSettings] = useState(false);
  const [sidebarMode, setSidebarMode] = useState('Light');
  const [sidebarType, setSidebarType] = useState('Horizontal');
  const [layoutMode, setLayoutMode] = useState('Light');

  // Activity data for bar chart
  const activityData = [
    { day: 'Mon', activity: 65 },
    { day: 'Tue', activity: 78 },
    { day: 'Wed', activity: 82 },
    { day: 'Thu', activity: 71 },
    { day: 'Fri', activity: 89 },
    { day: 'Sat', activity: 95 },
    { day: 'Sun', activity: 68 },
  ];

  // Progress data for pie chart
  const progressData = [
    { name: 'Completed', value: 65, color: '#10b981' },
    { name: 'Remaining', value: 35, color: '#374151' },
  ];

  // Heart rate data for line chart
  const heartRateData = [
    { time: '6AM', rate: 72 },
    { time: '9AM', rate: 85 },
    { time: '12PM', rate: 110 },
    { time: '3PM', rate: 95 },
    { time: '6PM', rate: 110 },
    { time: '9PM', rate: 78 },
  ];

  const keyMetrics = [
    {
      title: 'Steps',
      value: '3.500',
      unit: 'Steps',
      subtitle: '50% of your goals',
      icon: Activity,
      color: 'from-blue-500 to-blue-600',
      progress: 50,
      type: 'progress'
    },
    {
      title: 'Water',
      value: '2.25',
      unit: 'Liters',
      subtitle: 'Daily intake',
      icon: Droplets,
      color: 'from-orange-500 to-orange-600',
      type: 'value'
    },
    {
      title: 'Calories',
      value: 'Today Under',
      unit: '1,850 / 2,200',
      subtitle: 'Daily goal',
      icon: Flame,
      color: 'from-orange-500 to-red-500',
      type: 'gauge',
      percentage: 84
    },
    {
      title: 'Heart Rate',
      value: '110',
      unit: 'Bpm',
      subtitle: 'Average today',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      type: 'chart',
      data: heartRateData
    },
  ];

  const dailyActivities = [
    {
      title: 'Running',
      current: 70,
      target: 80,
      unit: 'km',
      icon: Activity,
      color: 'text-blue-500'
    },
    {
      title: 'Sleeping',
      current: 50,
      target: 60,
      unit: 'hrs',
      icon: Clock,
      color: 'text-purple-500'
    },
    {
      title: 'Weight Lifting',
      current: 4,
      target: 10,
      unit: 'Sets',
      icon: Dumbbell,
      color: 'text-green-500'
    },
    {
      title: 'Weight Loss',
      current: 70,
      target: 100,
      unit: 'kg',
      icon: Target,
      color: 'text-orange-500'
    },
  ];

  const popularWorkouts = [
    {
      title: 'Strength Training',
      level: 'Intermediate',
      duration: '45 min',
      image: '/api/placeholder/gym-strength.jpg',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'HIIT Cardio',
      level: 'Advanced',
      duration: '30 min',
      image: '/api/placeholder/gym-hiit.jpg',
      color: 'from-green-500 to-orange-600'
    },
    {
      title: 'CrossFit',
      level: 'Expert',
      duration: '60 min',
      image: '/api/placeholder/gym-crossfit.jpg',
      color: 'from-orange-500 to-red-600'
    },
  ];

  const categories = [
    { name: 'Weight Lifting', icon: '🏋️' },
    { name: 'Cardio', icon: '🏃' },
    { name: 'CrossFit', icon: '💪' },
    { name: 'Yoga', icon: '🧘‍♀️' },
    { name: 'Boxing', icon: '🥊' },
    { name: 'Swimming', icon: '🏊' },
  ];

  const bestExercises = [
    { name: 'Bench Press', duration: '45 sec', image: '/api/placeholder/gym-bench.jpg' },
    { name: 'Deadlifts', duration: '60 sec', image: '/api/placeholder/gym-deadlift.jpg' },
    { name: 'Squats', duration: '50 sec', image: '/api/placeholder/gym-squat.jpg' },
    { name: 'Pull-ups', duration: '30 sec', image: '/api/placeholder/gym-pullup.jpg' },
  ];

  const renderMetricCard = (metric, index) => {
    const Icon = metric.icon;
    
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={cn(
          "rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border",
          isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-500")}>{metric.subtitle}</span>
        </div>
        
        <h3 className={cn("text-2xl font-bold mb-1", isDark ? "text-slate-100" : "text-slate-900")}>
          {metric.value}
        </h3>
        <p className={cn("text-sm mb-4", isDark ? "text-slate-300" : "text-slate-600")}>{metric.unit}</p>
        
        {metric.type === 'progress' && (
          <div className={cn("w-full rounded-full h-2", isDark ? "bg-slate-800" : "bg-slate-200")}>
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${metric.progress}%` }}
            />
          </div>
        )}
        
        {metric.type === 'gauge' && (
          <div className="relative w-24 h-12 mx-auto">
            <div className={cn("absolute inset-0 rounded-full border-8 border-t-transparent border-r-transparent transform -rotate-90", isDark ? "border-slate-800" : "border-slate-200")}></div>
            <div 
              className="absolute inset-0 rounded-full border-8 border-orange-500 border-t-transparent border-r-transparent transform -rotate-90 transition-all duration-500"
              style={{ transform: `rotate(-90deg) rotate(${metric.percentage * 1.8}deg)` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={cn("text-xs font-bold", isDark ? "text-slate-200" : "text-slate-700")}>{metric.percentage}%</span>
            </div>
          </div>
        )}
        
        {metric.type === 'chart' && metric.data && (
          <ResponsiveContainer width="100%" height={60}>
            <LineChart data={metric.data}>
              <Line 
                type="monotone" 
                dataKey="rate" 
                stroke="#ef4444" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className={cn("text-4xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
                Fitness Dashboard
              </h1>
              <p className={cn("text-lg", isDark ? "text-slate-400" : "text-slate-600")}>
                Track your fitness journey and progress
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className={cn(
                "relative",
                isDark ? "bg-slate-800" : "bg-white"
              )}>
                <Search className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5", isDark ? "text-slate-400" : "text-slate-500")} />
                <input
                  type="text"
                  placeholder="Search workouts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500",
                    isDark ? "bg-slate-900 text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300"
                  )}
                />
              </div>
              <button
                onClick={toggleMode}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
                )}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </button>
              <button className={cn(
                "p-2 rounded-lg transition-colors relative",
                isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
              )}>
                <Bell className={cn("w-5 h-5", isDark ? "text-slate-400" : "text-slate-600")} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
          <div className={cn(
            "h-1 rounded-full",
            isDark ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-to-r from-blue-500 to-purple-600"
          )}></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => renderMetricCard(metric, index))}
        </div>

        {/* Activity & Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Activity Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={cn(
              "rounded-2xl p-6 shadow-lg border",
              isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={cn("text-lg font-semibold", isDark ? "text-slate-100" : "text-slate-900")}>Activity</h3>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className={cn(
                  "px-3 py-1 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border",
                  isDark ? "bg-slate-900 text-slate-100 border-slate-800" : "bg-white text-slate-900 border-slate-300"
                )}
              >
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Bar dataKey="activity" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Progress Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className={cn(
              "rounded-2xl p-6 shadow-lg border",
              isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={cn("text-lg font-semibold", isDark ? "text-slate-100" : "text-slate-900")}>Progress</h3>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className={cn(
                  "px-3 py-1 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border",
                  isDark ? "bg-slate-900 text-slate-100 border-slate-800" : "bg-white text-slate-900 border-slate-300"
                )}
              >
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <RePieChart>
                <Pie
                  data={progressData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {progressData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>65%</p>
              <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-500")}>Completed</p>
            </div>
          </motion.div>
        </div>

        {/* Daily Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dailyActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={cn(
                "rounded-2xl p-6 shadow-lg border",
                isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <activity.icon className={`w-6 h-6 ${activity.color}`} />
                <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-500")}>
                  {activity.current}/{activity.target} {activity.unit}
                </span>
              </div>
              <h4 className={cn("text-lg font-semibold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>{activity.title}</h4>
              <div className={cn("w-full rounded-full h-2", isDark ? "bg-slate-800" : "bg-slate-200")}>
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(activity.current / activity.target) * 100}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popular Workouts */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className={cn("text-xl font-semibold", isDark ? "text-slate-100" : "text-slate-900")}>Popular Workouts</h3>
            <button className={cn("flex items-center gap-1", isDark ? "text-orange-300 hover:text-orange-200" : "text-orange-600 hover:text-orange-700")}>
              See more <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularWorkouts.map((workout, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={cn(
                  "rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer border",
                  isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                )}
              >
                <div className={`h-40 bg-gradient-to-r ${workout.color} flex items-center justify-center`}>
                  <Dumbbell className="w-16 h-16 text-white" />
                </div>
                <div>
                  <h4 className={cn("font-semibold mb-1", isDark ? "text-slate-100" : "text-slate-900")}>{workout.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-500")}>{workout.level}</span>
                    <span className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-500")}>{workout.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full Body Workout & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Full Body Toning Workout */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className={cn(
              "lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border",
              isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
            )}
          >
            <div className="h-64 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
              <div className="text-center text-white">
                <Dumbbell className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Gym Workout Pro</h3>
                <p className="mb-6">Advanced strength training program</p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
                  <Play className="w-5 h-5" />
                  Start Workout
                </button>
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className={cn(
              "rounded-2xl p-6 shadow-lg border",
              isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className={cn("text-lg font-semibold", isDark ? "text-slate-100" : "text-slate-900")}>Categories</h3>
              <button className={cn("text-sm", isDark ? "text-orange-300 hover:text-orange-200" : "text-orange-600 hover:text-orange-700")}>
                See more
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={cn(
                    "flex flex-col items-center p-3 rounded-lg transition-colors",
                    isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
                  )}
                >
                  <span className="text-2xl mb-1">{category.icon}</span>
                  <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Best Exercises */}
        <div
          className={cn(
            "rounded-2xl p-6 shadow-lg border",
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className={cn("text-xl font-semibold", isDark ? "text-slate-100" : "text-slate-900")}>Best Exercises</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              All Exercises
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bestExercises.map((exercise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
                  isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
                )}
              >
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", isDark ? "bg-slate-800" : "bg-slate-200")}>
                  <Activity className={cn("w-6 h-6", isDark ? "text-slate-400" : "text-slate-600")} />
                </div>
                <div>
                  <h4 className={cn("font-medium", isDark ? "text-slate-100" : "text-slate-900")}>{exercise.name}</h4>
                  <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-500")}>{exercise.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      {/* Theme Settings Modal */}
      {showThemeSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowThemeSettings(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
              "relative w-full max-w-md mx-4 rounded-2xl shadow-2xl border p-6 max-h-[90vh] overflow-y-auto",
              isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
            )}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#f97316 transparent'
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                width: 6px;
              }
              div::-webkit-scrollbar-track {
                background: transparent;
              }
              div::-webkit-scrollbar-thumb {
                background-color: #f97316;
                border-radius: 3px;
              }
              div::-webkit-scrollbar-thumb:hover {
                background-color: #ea580c;
              }
            `}</style>
            
            <div className="flex items-center justify-between mb-6">
              <h2 className={cn("text-xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                Theme Settings
              </h2>
              <button
                onClick={() => setShowThemeSettings(false)}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
                )}
              >
                <X className={cn("w-5 h-5", isDark ? "text-slate-400" : "text-slate-600")} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Sidebar Mode */}
              <div>
                <h3 className={cn("text-sm font-medium mb-3", isDark ? "text-slate-300" : "text-slate-700")}>
                  SIDEBAR MODE
                </h3>
                <div className="flex gap-2">
                  {['Light', 'Dark'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setSidebarMode(mode)}
                      className={cn(
                        "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                        sidebarMode === mode
                          ? "bg-orange-500 text-white"
                          : isDark
                            ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      )}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sidebar Type */}
              <div>
                <h3 className={cn("text-sm font-medium mb-3", isDark ? "text-slate-300" : "text-slate-700")}>
                  SIDEBAR TYPE
                </h3>
                <div className="flex gap-2">
                  {['Full', 'Collapse', 'Horizontal'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSidebarType(type)}
                      className={cn(
                        "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                        sidebarType === type
                          ? "bg-orange-500 text-white"
                          : isDark
                            ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Layout Mode */}
              <div>
                <h3 className={cn("text-sm font-medium mb-3", isDark ? "text-slate-300" : "text-slate-700")}>
                  LAYOUT MODE
                </h3>
                <div className="flex gap-2">
                  {['Light', 'Dark'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => {
                        setLayoutMode(mode);
                        if (mode === 'Dark' && !isDark) {
                          toggleMode();
                        } else if (mode === 'Light' && isDark) {
                          toggleMode();
                        }
                      }}
                      className={cn(
                        "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                        (mode === 'Dark' ? isDark : mode === 'Light' && !isDark)
                          ? "bg-orange-500 text-white"
                          : isDark
                            ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      )}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      </div>
    </div>
  );
};

export default FitnessDashboard;
