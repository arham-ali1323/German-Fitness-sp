"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface User {
  id: number;
  fname: string;
  lname: string;
  email: string;
  dob: string;
  address: string;
}

export default function CRUDPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      fname: "ali",
      lname: "ahmed",
      email: "ali.ahmed@example.com",
      dob: "1990-01-01",
      address: "123 Street",
    },
    {
      id: 2,
      fname: "ahmed",
      lname: "khalid",
      email: "ahmed.khalid@example.com",
      dob: "1992-05-15",
      address: "456 Street",
    },
  ]);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    address: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.email ||
      !formData.dob ||
      !formData.address
    )
      return;

    if (editingId !== null) {
      // Update existing user
      setUsers(
        users.map((u) => (u.id === editingId ? { ...u, ...formData } : u)),
      );
    } else {
      // Add new user
      const newUser = { id: users.length + 1, ...formData };
      setUsers([...users, newUser]);
    }

    // Reset form
    setFormData({ fname: "", lname: "", email: "", dob: "", address: "" });
    setEditingId(null);
  };

  const handleEdit = (user: User) => {
    setFormData({ ...user });
    setEditingId(user.id);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleCancel = () => {
    setFormData({ fname: "", lname: "", email: "", dob: "", address: "" });
    setEditingId(null);
  };

  return (
    <div className="p-6 space-y-6 min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
      </div>

      {/* Form */}
      <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-slate-100">
            {editingId ? "Edit User" : "Add User"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="fname"
                className="text-slate-900 dark:text-slate-100"
              >
                First Name
              </Label>
              <Input
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="lname"
                className="text-slate-900 dark:text-slate-100"
              >
                Last Name
              </Label>
              <Input
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-slate-900 dark:text-slate-100"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="dob"
                className="text-slate-900 dark:text-slate-100"
              >
                Date of Birth
              </Label>
              <Input
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label
                htmlFor="address"
                className="text-slate-900 dark:text-slate-100"
              >
                Address
              </Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            {/* Add/Update Button */}
            <Button
              onClick={handleAddOrUpdate}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              {editingId ? "Update" : "Add"}
            </Button>

            {/* Cancel Button */}
            {editingId && (
              <Button
                variant="outline"
                onClick={handleCancel}
                className="border-red-500 bg-red-500 text-white hover:bg-red-700 hover:text-white"
              >
                Cancel
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-slate-100">
            User List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-slate-900 dark:text-slate-100">
                  ID
                </TableHead>
                <TableHead className="text-slate-900 dark:text-slate-100">
                  First Name
                </TableHead>
                <TableHead className="text-slate-900 dark:text-slate-100">
                  Last Name
                </TableHead>
                <TableHead className="text-slate-900 dark:text-slate-100">
                  Email
                </TableHead>
                <TableHead className="text-slate-900 dark:text-slate-100">
                  DOB
                </TableHead>
                <TableHead className="text-slate-900 dark:text-slate-100">
                  Address
                </TableHead>
                <TableHead className="text-slate-900 dark:text-slate-100">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-4 text-slate-500 dark:text-slate-400"
                  >
                    No users found.
                  </TableCell>
                </TableRow>
              )}
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="text-slate-900 dark:text-slate-100">
                    {user.id}
                  </TableCell>
                  <TableCell className="text-slate-900 dark:text-slate-100">
                    {user.fname}
                  </TableCell>
                  <TableCell className="text-slate-900 dark:text-slate-100">
                    {user.lname}
                  </TableCell>
                  <TableCell className="text-slate-900 dark:text-slate-100">
                    {user.email}
                  </TableCell>
                  <TableCell className="text-slate-900 dark:text-slate-100">
                    {user.dob}
                  </TableCell>
                  <TableCell className="text-slate-900 dark:text-slate-100">
                    {user.address}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-500 bg-green-500 text-white hover:bg-green-700 hover:text-white"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-500 bg-red-500 text-white hover:bg-red-700 hover:text-white"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
