"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Apple, Search, Clock, Flame, Star, Filter } from 'lucide-react';

const DietMenu = () => {
  const { isDark } = useDashboardMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMealType, setSelectedMealType] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const menuItems = [
    {
      id: 1,
      name: 'Grilled Chicken Salad',
      category: 'lunch',
      mealType: 'protein',
      calories: 350,
      protein: 35,
      carbs: 15,
      fat: 18,
      fiber: 8,
      prepTime: 15,
      difficulty: 'easy',
      rating: 4.8,
      ingredients: ['Chicken breast', 'Mixed greens', 'Cherry tomatoes', 'Olive oil'],
      allergens: ['None'],
      price: 12.99,
      available: true
    },
    {
      id: 2,
      name: 'Quinoa Buddha Bowl',
      category: 'lunch',
      mealType: 'vegetarian',
      calories: 420,
      protein: 18,
      carbs: 55,
      fat: 16,
      fiber: 12,
      prepTime: 20,
      difficulty: 'easy',
      rating: 4.6,
      ingredients: ['Quinoa', 'Roasted vegetables', 'Chickpeas', 'Tahini'],
      allergens: ['Sesame'],
      price: 14.99,
      available: true
    },
    {
      id: 3,
      name: 'Protein Power Smoothie',
      category: 'breakfast',
      mealType: 'drink',
      calories: 280,
      protein: 25,
      carbs: 32,
      fat: 6,
      fiber: 5,
      prepTime: 5,
      difficulty: 'easy',
      rating: 4.7,
      ingredients: ['Whey protein', 'Banana', 'Spinach', 'Almond milk'],
      allergens: ['Dairy', 'Nuts'],
      price: 8.99,
      available: true
    },
    {
      id: 4,
      name: 'Salmon with Asparagus',
      category: 'dinner',
      mealType: 'protein',
      calories: 450,
      protein: 38,
      carbs: 20,
      fat: 25,
      fiber: 6,
      prepTime: 25,
      difficulty: 'medium',
      rating: 4.9,
      ingredients: ['Atlantic salmon', 'Asparagus', 'Lemon', 'Garlic'],
      allergens: ['Fish'],
      price: 22.99,
      available: true
    },
    {
      id: 5,
      name: 'Overnight Oats',
      category: 'breakfast',
      mealType: 'carbs',
      calories: 320,
      protein: 12,
      carbs: 48,
      fat: 10,
      fiber: 8,
      prepTime: 0,
      difficulty: 'easy',
      rating: 4.5,
      ingredients: ['Rolled oats', 'Chia seeds', 'Berries', 'Honey'],
      allergens: ['Gluten'],
      price: 7.99,
      available: true
    },
    {
      id: 6,
      name: 'Turkey Wrap',
      category: 'lunch',
      mealType: 'protein',
      calories: 380,
      protein: 28,
      carbs: 35,
      fat: 12,
      fiber: 7,
      prepTime: 10,
      difficulty: 'easy',
      rating: 4.4,
      ingredients: ['Turkey breast', 'Whole wheat wrap', 'Lettuce', 'Tomato'],
      allergens: ['Gluten'],
      price: 11.99,
      available: true
    }
  ];

  const categories = ['all', 'breakfast', 'lunch', 'dinner', 'snack'];
  const mealTypes = ['all', 'protein', 'carbs', 'vegetarian', 'vegan', 'drink'];
  const sortOptions = ['name', 'calories', 'protein', 'rating', 'price'];

  const filteredItems = menuItems
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesMealType = selectedMealType === 'all' || item.mealType === selectedMealType;
      return matchesSearch && matchesCategory && matchesMealType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'calories':
          return a.calories - b.calories;
        case 'protein':
          return a.protein - b.protein;
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price - b.price;
        default:
          return 0;
      }
    });

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "w-3 h-3",
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            )}
          />
        ))}
        <span className={cn("text-xs ml-1", isDark ? "text-slate-300" : "text-slate-700")}>
          {rating}
        </span>
      </div>
    );
  };

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Diet Menu
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Browse our healthy and delicious meal options
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
            <input
              type="text"
              placeholder="Search meals or ingredients..."
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                Meal Type
              </label>
              <select
                value={selectedMealType}
                onChange={(e) => setSelectedMealType(e.target.value)}
                className={cn(
                  "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
              >
                {mealTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={cn(
                  "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <div className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium",
                isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"
              )}>
                {filteredItems.length} items
              </div>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border",
                isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
              )}
            >
              {/* Meal Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <Apple className="w-16 h-16 text-white" />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className={cn("font-semibold mb-1", isDark ? "text-slate-100" : "text-slate-900")}>
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      {renderStars(item.rating)}
                      <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                        ({item.rating})
                      </span>
                    </div>
                  </div>
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    item.category === 'breakfast' ? "bg-yellow-100 text-yellow-800" :
                    item.category === 'lunch' ? "bg-blue-100 text-blue-800" :
                    item.category === 'dinner' ? "bg-purple-100 text-purple-800" :
                    "bg-green-100 text-green-800"
                  )}>
                    {item.category}
                  </span>
                </div>

                {/* Nutrition Info */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="text-center">
                    <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>Cal</p>
                    <p className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                      {item.calories}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>Prot</p>
                    <p className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                      {item.protein}g
                    </p>
                  </div>
                  <div className="text-center">
                    <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>Carbs</p>
                    <p className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                      {item.carbs}g
                    </p>
                  </div>
                  <div className="text-center">
                    <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>Fat</p>
                    <p className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                      {item.fat}g
                    </p>
                  </div>
                </div>

                {/* Meal Details */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                      {item.prepTime} min prep
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Flame className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                      {item.difficulty}
                    </span>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-3">
                  <p className={cn("text-xs font-medium mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                    Ingredients
                  </p>
                  <p className={cn("text-xs", isDark ? "text-slate-300" : "text-slate-700")}>
                    {item.ingredients.slice(0, 3).join(', ')}
                    {item.ingredients.length > 3 && '...'}
                  </p>
                </div>

                {/* Allergens */}
                {item.allergens.length > 0 && (
                  <div className="mb-3">
                    <p className={cn("text-xs font-medium mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                      Allergens
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {item.allergens.map((allergen, index) => (
                        <span
                          key={index}
                          className={cn(
                            "px-2 py-1 rounded text-xs",
                            "bg-red-100 text-red-800"
                          )}
                        >
                          {allergen}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700">
                  <span className={cn("text-lg font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                    ${item.price}
                  </span>
                  <button
                    disabled={!item.available}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      item.available
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    )}
                  >
                    {item.available ? 'Order Now' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Apple className={cn("w-12 h-12 mx-auto mb-4", isDark ? "text-slate-600" : "text-slate-400")} />
            <p className={cn("text-lg font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
              No meals found
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

export default DietMenu;
