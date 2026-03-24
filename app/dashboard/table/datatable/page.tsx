"use client";

import React, { useState, useMemo } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { ChevronUp, ChevronDown, Search, Filter } from 'lucide-react';

type SortField = 'id' | 'name' | 'email' | 'role' | 'status' | 'joinDate' | 'lastLogin' | 'sessions';
type SortOrder = 'asc' | 'desc';

interface TableData {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'User';
  status: 'Active' | 'Inactive';
  joinDate: string;
  lastLogin: string;
  sessions: number;
}

const TableDatatable = () => {
  const { isDark } = useDashboardMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const tableData: TableData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2023-01-15', lastLogin: '2024-03-24', sessions: 245 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joinDate: '2023-02-20', lastLogin: '2024-03-23', sessions: 189 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive', joinDate: '2023-03-10', lastLogin: '2024-03-20', sessions: 156 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', joinDate: '2023-04-05', lastLogin: '2024-03-24', sessions: 298 },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Active', joinDate: '2023-05-12', lastLogin: '2024-03-22', sessions: 412 },
    { id: 6, name: 'Diana Lee', email: 'diana@example.com', role: 'Editor', status: 'Active', joinDate: '2023-06-18', lastLogin: '2024-03-24', sessions: 324 },
    { id: 7, name: 'Edward Davis', email: 'edward@example.com', role: 'User', status: 'Inactive', joinDate: '2023-07-22', lastLogin: '2024-03-15', sessions: 87 },
    { id: 8, name: 'Fiona Martinez', email: 'fiona@example.com', role: 'Admin', status: 'Active', joinDate: '2023-08-30', lastLogin: '2024-03-24', sessions: 567 },
    { id: 9, name: 'George Taylor', email: 'george@example.com', role: 'User', status: 'Active', joinDate: '2023-09-14', lastLogin: '2024-03-23', sessions: 234 },
    { id: 10, name: 'Helen White', email: 'helen@example.com', role: 'Editor', status: 'Active', joinDate: '2023-10-08', lastLogin: '2024-03-21', sessions: 189 },
  ];

  const filteredAndSortedData = useMemo(() => {
    let filtered = tableData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = selectedRole === 'all' || item.role === selectedRole;
      const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
      
      return matchesSearch && matchesRole && matchesStatus;
    });

    return filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [tableData, searchTerm, selectedRole, selectedStatus, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />;
  };

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Data Table
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Advanced data table with sorting, filtering, and search capabilities
          </p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
              <input
                type="text"
                placeholder="Search users..."
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
          </div>
          
          <div className="flex gap-2">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className={cn(
                "px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                isDark
                  ? "bg-slate-800 text-slate-100 border-slate-700"
                  : "bg-white text-slate-900 border-slate-300"
              )}
            >
              <option value="all">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="User">User</option>
            </select>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className={cn(
                "px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                isDark
                  ? "bg-slate-800 text-slate-100 border-slate-700"
                  : "bg-white text-slate-900 border-slate-300"
              )}
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={cn("border-b", isDark ? "border-slate-700" : "border-slate-200")}>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm cursor-pointer hover:text-orange-500 transition-colors", isDark ? "text-slate-300" : "text-slate-700")} onClick={() => handleSort('id')}>
                  <div className="flex items-center gap-1">
                    ID <SortIcon field="id" />
                  </div>
                </th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm cursor-pointer hover:text-orange-500 transition-colors", isDark ? "text-slate-300" : "text-slate-700")} onClick={() => handleSort('name')}>
                  <div className="flex items-center gap-1">
                    Name <SortIcon field="name" />
                  </div>
                </th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm cursor-pointer hover:text-orange-500 transition-colors", isDark ? "text-slate-300" : "text-slate-700")} onClick={() => handleSort('email')}>
                  <div className="flex items-center gap-1">
                    Email <SortIcon field="email" />
                  </div>
                </th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm cursor-pointer hover:text-orange-500 transition-colors", isDark ? "text-slate-300" : "text-slate-700")} onClick={() => handleSort('role')}>
                  <div className="flex items-center gap-1">
                    Role <SortIcon field="role" />
                  </div>
                </th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm cursor-pointer hover:text-orange-500 transition-colors", isDark ? "text-slate-300" : "text-slate-700")} onClick={() => handleSort('status')}>
                  <div className="flex items-center gap-1">
                    Status <SortIcon field="status" />
                  </div>
                </th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm cursor-pointer hover:text-orange-500 transition-colors", isDark ? "text-slate-300" : "text-slate-700")} onClick={() => handleSort('joinDate')}>
                  <div className="flex items-center gap-1">
                    Join Date <SortIcon field="joinDate" />
                  </div>
                </th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm cursor-pointer hover:text-orange-500 transition-colors", isDark ? "text-slate-300" : "text-slate-700")} onClick={() => handleSort('lastLogin')}>
                  <div className="flex items-center gap-1">
                    Last Login <SortIcon field="lastLogin" />
                  </div>
                </th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm cursor-pointer hover:text-orange-500 transition-colors", isDark ? "text-slate-300" : "text-slate-700")} onClick={() => handleSort('sessions')}>
                  <div className="flex items-center gap-1">
                    Sessions <SortIcon field="sessions" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedData.map((item) => (
                <tr key={item.id} className={cn("border-b transition-colors hover:bg-orange-50", isDark ? "border-slate-800 hover:bg-slate-800/50" : "border-slate-100")}>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-100" : "text-slate-900")}>{item.id}</td>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-100" : "text-slate-900")}>{item.name}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{item.email}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      item.role === 'Admin' ? "bg-purple-100 text-purple-800" :
                      item.role === 'Editor' ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    )}>
                      {item.role}
                    </span>
                  </td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      item.status === 'Active' ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    )}>
                      {item.status}
                    </span>
                  </td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{item.joinDate}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{item.lastLogin}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{item.sessions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Showing {filteredAndSortedData.length} of {tableData.length} results
          </p>
          <div className="flex gap-2">
            <button className={cn(
              "px-4 py-2 rounded text-sm border transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-50"
            )} disabled>
              Previous
            </button>
            <button className={cn(
              "px-4 py-2 rounded text-sm border transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-50"
            )} disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableDatatable;
