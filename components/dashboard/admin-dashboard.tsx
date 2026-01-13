"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  DollarSign,
  Activity,
  TrendingUp,
  Calendar,
  Award,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface DashboardStats {
  totalMembers: number;
  activeMembers: number;
  monthlyRevenue: number;
  totalRevenue: number;
  todayAttendance: number;
  newMembersThisMonth: number;
  revenueGrowth: number;
  memberGrowth: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalMembers: 2547,
    activeMembers: 2103,
    monthlyRevenue: 125840,
    totalRevenue: 892450,
    todayAttendance: 342,
    newMembersThisMonth: 87,
    revenueGrowth: 12.5,
    memberGrowth: 8.3,
  });

  const [loading, setLoading] = useState(false);

  // Revenue Chart Data
  const revenueData = [
    { month: 'Jan', revenue: 85000 },
    { month: 'Feb', revenue: 92000 },
    { month: 'Mar', revenue: 88000 },
    { month: 'Apr', revenue: 105000 },
    { month: 'May', revenue: 112000 },
    { month: 'Jun', revenue: 118000 },
    { month: 'Jul', revenue: 115000 },
    { month: 'Aug', revenue: 122000 },
    { month: 'Sep', revenue: 128000 },
    { month: 'Oct', revenue: 125000 },
    { month: 'Nov', revenue: 130000 },
    { month: 'Dec', revenue: 125840 },
  ];

  // Members Chart Data
  const membersData = [
    { week: 'Week 1', newMembers: 18, renewals: 45 },
    { week: 'Week 2', newMembers: 25, renewals: 52 },
    { week: 'Week 3', newMembers: 22, renewals: 48 },
    { week: 'Week 4', newMembers: 22, renewals: 55 },
  ];

  const statCards = [
    {
      title: 'Total Members',
      value: stats.totalMembers.toLocaleString(),
      change: `+${stats.memberGrowth}%`,
      icon: Users,
      color: 'from-orange to-orange-light',
      bgColor: 'bg-orange/10',
    },
    {
      title: 'Monthly Revenue',
      value: `$${(stats.monthlyRevenue / 1000).toFixed(1)}K`,
      change: `+${stats.revenueGrowth}%`,
      icon: DollarSign,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-400/10',
    },
    {
      title: 'Today Attendance',
      value: stats.todayAttendance.toString(),
      change: '82%',
      icon: Activity,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-400/10',
    },
    {
      title: 'Active Members',
      value: stats.activeMembers.toLocaleString(),
      change: `${((stats.activeMembers / stats.totalMembers) * 100).toFixed(1)}%`,
      icon: TrendingUp,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-400/10',
    },
  ];

  const recentActivities = [
    { type: 'member', name: 'John Doe', action: 'joined Premium plan', time: '2 mins ago' },
    { type: 'payment', name: 'Sarah Wilson', action: 'paid $59.99', time: '15 mins ago' },
    { type: 'member', name: 'Mike Johnson', action: 'renewed membership', time: '32 mins ago' },
    { type: 'payment', name: 'Emily Brown', action: 'paid $99.99', time: '1 hour ago' },
    { type: 'member', name: 'David Chen', action: 'joined Basic plan', time: '2 hours ago' },
  ];

  return (
    <div className="bg-dark p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-black text-white mb-2 uppercase">
            Admin <span className="text-orange">Dashboard</span>
          </h1>
          <p className="text-gray-400">Overview of your gym's performance and metrics.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative bg-dark-100 rounded-2xl p-6 border border-orange/10 hover:border-orange/30 transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10 rounded-2xl blur-xl -z-10`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 ${card.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-orange" />
                    </div>
                    <h3 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">
                      {card.title}
                    </h3>
                    <p className="text-3xl font-black text-white">{card.value}</p>
                    <motion.div
                      className="text-xs font-medium text-green-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {card.change}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <motion.div
            className="bg-dark-100 rounded-2xl p-6 border border-orange/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-white uppercase">Revenue Trend</h3>
                <p className="text-gray-400 text-sm">Monthly revenue over the year</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-orange">${(stats.totalRevenue / 1000).toFixed(0)}K</p>
                <p className="text-xs text-gray-500">Total Revenue</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ff4500' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#ff4500" 
                  strokeWidth={3}
                  dot={{ fill: '#ff4500' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Members Chart */}
          <motion.div
            className="bg-dark-100 rounded-2xl p-6 border border-orange/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-white uppercase">Member Growth</h3>
                <p className="text-gray-400 text-sm">New members vs renewals</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-orange">{stats.newMembersThisMonth}</p>
                <p className="text-xs text-gray-500">This Month</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={membersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
                <XAxis dataKey="week" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ff4500' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="newMembers" fill="#ff4500" radius={[8, 8, 0, 0]} />
                <Bar dataKey="renewals" fill="#ffa500" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <motion.div
            className="lg:col-span-2 bg-dark-100 rounded-2xl p-6 border border-orange/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-black text-white uppercase mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-dark rounded-xl hover:bg-dark-200 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activity.type === 'member' ? 'bg-orange/10' : 'bg-green-400/10'
                  }`}>
                    {activity.type === 'member' ? (
                      <Users className="w-5 h-5 text-orange" />
                    ) : (
                      <DollarSign className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold">{activity.name}</p>
                    <p className="text-gray-400 text-sm">{activity.action}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="bg-dark-100 rounded-2xl p-6 border border-orange/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-xl font-black text-white uppercase mb-6">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { label: 'Add Member', icon: Users },
                { label: 'Create Plan', icon: Award },
                { label: 'View Payments', icon: DollarSign },
                { label: 'Schedule Class', icon: Calendar },
              ].map((action, i) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={i}
                    className="w-full flex items-center gap-3 p-4 bg-dark rounded-xl hover:bg-orange/10 border border-transparent hover:border-orange/30 transition-all text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange" />
                    </div>
                    <span className="text-white font-semibold">{action.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
