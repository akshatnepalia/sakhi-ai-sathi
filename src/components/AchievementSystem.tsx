
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star, Target, Zap, Award, Crown, Medal, Gift } from 'lucide-react';

const AchievementSystem = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const userStats = {
    totalPoints: 2450,
    level: 8,
    nextLevelPoints: 3000,
    completedAchievements: 12,
    totalAchievements: 24,
    streak: 7
  };

  const achievements = [
    {
      id: 1,
      title: "First Business Plan",
      description: "Create your first business plan",
      icon: Target,
      points: 100,
      category: "business",
      completed: true,
      completedDate: "2024-01-15",
      badge: "🎯"
    },
    {
      id: 2,
      title: "Funding Expert",
      description: "Learn about 5 different funding options",
      icon: Trophy,
      points: 200,
      category: "funding",
      completed: true,
      completedDate: "2024-01-20",
      badge: "💰"
    },
    {
      id: 3,
      title: "Marketing Guru",
      description: "Complete digital marketing course",
      icon: Star,
      points: 300,
      category: "marketing",
      completed: false,
      progress: 75,
      badge: "📈"
    },
    {
      id: 4,
      title: "Community Helper",
      description: "Help 10 entrepreneurs in forum",
      icon: Award,
      points: 250,
      category: "community",
      completed: true,
      completedDate: "2024-01-25",
      badge: "🤝"
    },
    {
      id: 5,
      title: "Export Champion",
      description: "Learn export procedures and documentation",
      icon: Crown,
      points: 400,
      category: "export",
      completed: false,
      progress: 40,
      badge: "🌍"
    },
    {
      id: 6,
      title: "Financial Wizard",
      description: "Master all financial calculators",
      icon: Zap,
      points: 350,
      category: "finance",
      completed: false,
      progress: 60,
      badge: "🧮"
    }
  ];

  const levels = [
    { level: 1, title: "Beginner", points: 0, color: "gray" },
    { level: 5, title: "Learner", points: 1000, color: "blue" },
    { level: 10, title: "Entrepreneur", points: 2500, color: "green" },
    { level: 15, title: "Expert", points: 5000, color: "purple" },
    { level: 20, title: "Master", points: 10000, color: "orange" },
    { level: 25, title: "Legend", points: 20000, color: "red" }
  ];

  const categories = [
    { id: 'all', name: 'All Achievements', count: 24 },
    { id: 'business', name: 'Business', count: 6 },
    { id: 'funding', name: 'Funding', count: 4 },
    { id: 'marketing', name: 'Marketing', count: 5 },
    { id: 'community', name: 'Community', count: 3 },
    { id: 'export', name: 'Export', count: 3 },
    { id: 'finance', name: 'Finance', count: 3 }
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const progressToNextLevel = ((userStats.totalPoints - 2000) / (userStats.nextLevelPoints - 2000)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🏆 Achievement Center
          </h1>
          <p className="text-gray-600">
            Track your progress and unlock rewards as you grow your business
          </p>
        </div>

        {/* User Progress Card */}
        <Card className="mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{userStats.level}</div>
                <div className="text-sm opacity-90">Current Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{userStats.totalPoints}</div>
                <div className="text-sm opacity-90">Total Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{userStats.completedAchievements}</div>
                <div className="text-sm opacity-90">Achievements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{userStats.streak}</div>
                <div className="text-sm opacity-90">Day Streak</div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Progress to Level {userStats.level + 1}</span>
                <span className="text-sm">{userStats.totalPoints}/{userStats.nextLevelPoints}</span>
              </div>
              <Progress value={progressToNextLevel} className="bg-white/20" />
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="flex-1 text-left">{category.name}</span>
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Level Progress */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Level System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {levels.map(levelInfo => (
                  <div 
                    key={levelInfo.level} 
                    className={`flex items-center justify-between p-2 rounded ${
                      userStats.level >= levelInfo.level ? 'bg-green-100' : 'bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Medal className={`w-4 h-4 ${
                        userStats.level >= levelInfo.level ? 'text-green-600' : 'text-gray-400'
                      }`} />
                      <span className="text-sm font-medium">{levelInfo.title}</span>
                    </div>
                    <span className="text-xs text-gray-500">{levelInfo.points}+</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-4">
              {filteredAchievements.map(achievement => {
                const Icon = achievement.icon;
                return (
                  <Card 
                    key={achievement.id} 
                    className={`relative overflow-hidden ${
                      achievement.completed 
                        ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-200' 
                        : 'bg-white'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${
                            achievement.completed 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-200 text-gray-500'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-2xl">{achievement.badge}</div>
                      </div>

                      {achievement.completed ? (
                        <div className="flex items-center justify-between">
                          <Badge className="bg-green-500">
                            Completed
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Gift className="w-4 h-4" />
                            <span>+{achievement.points} points</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Progress</span>
                            <span className="text-sm font-medium">
                              {achievement.progress || 0}%
                            </span>
                          </div>
                          <Progress value={achievement.progress || 0} />
                          <div className="text-right text-sm text-gray-500">
                            Reward: {achievement.points} points
                          </div>
                        </div>
                      )}
                    </CardContent>
                    
                    {achievement.completed && (
                      <div className="absolute top-2 right-2">
                        <Trophy className="w-6 h-6 text-yellow-500" />
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementSystem;
