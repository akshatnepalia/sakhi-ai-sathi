
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MessageCircle, Heart, Users, Trophy, Star, ThumbsUp, Share2 } from 'lucide-react';
import ShareButton from './ShareButton';

const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const forumPosts = [
    {
      id: 1,
      title: "अचार बिजनेस में सफलता की कहानी",
      author: "Priya Sharma",
      category: "success-stories",
      content: "मैंने ₹5000 से शुरू करके अब महीने में ₹50,000 कमा रही हूं। यहां मेरे टिप्स हैं...",
      likes: 45,
      replies: 12,
      timeAgo: "2 hours ago",
      tags: ["pickle", "success", "marketing"]
    },
    {
      id: 2,
      title: "How to get MUDRA loan approved quickly?",
      author: "Sunita Devi",
      category: "funding",
      content: "I need help with MUDRA loan documentation. What documents are most important?",
      likes: 28,
      replies: 8,
      timeAgo: "5 hours ago",
      tags: ["mudra", "loan", "documentation"]
    },
    {
      id: 3,
      title: "Handicraft export - कैसे शुरू करें?",
      author: "Meera Patel",
      category: "export",
      content: "मैं अपने हस्तशिल्प को विदेश में बेचना चाहती हूं। कोई गाइड कर सकता है?",
      likes: 67,
      replies: 19,
      timeAgo: "1 day ago",
      tags: ["handicrafts", "export", "global"]
    },
    {
      id: 4,
      title: "Digital marketing tips for food business",
      author: "Kavita Singh",
      category: "marketing",
      content: "Sharing my Instagram growth strategy that helped me get 10K followers in 3 months",
      likes: 89,
      replies: 24,
      timeAgo: "2 days ago",
      tags: ["digital", "marketing", "food", "instagram"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: MessageCircle, count: 156 },
    { id: 'success-stories', name: 'Success Stories', icon: Trophy, count: 23 },
    { id: 'funding', name: 'Funding Help', icon: Users, count: 41 },
    { id: 'marketing', name: 'Marketing Tips', icon: Star, count: 32 },
    { id: 'export', name: 'Export Guide', icon: Share2, count: 18 }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? forumPosts 
    : forumPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🏘️ SakhiCopilot Community
          </h1>
          <p className="text-gray-600">
            Connect, share, and learn with fellow women entrepreneurs
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map(category => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      <span className="flex-1 text-left">{category.name}</span>
                      <Badge variant="secondary" className="ml-2">
                        {category.count}
                      </Badge>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Members</span>
                  <span className="font-bold text-purple-600">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Posts This Week</span>
                  <span className="font-bold text-green-600">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Success Stories</span>
                  <span className="font-bold text-orange-600">23</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4">
            {/* Create Post Button */}
            <Card className="border-2 border-dashed border-purple-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Share Your Story or Ask a Question
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Help other women entrepreneurs by sharing your experience
                </p>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Create New Post
                </Button>
              </CardContent>
            </Card>

            {/* Forum Posts */}
            {filteredPosts.map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>by {post.author}</span>
                        <span>•</span>
                        <span>{post.timeAgo}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {post.category}
                    </Badge>
                  </div>

                  <p className="text-gray-700 mb-4">
                    {post.content}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="mb-4" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.replies} replies
                      </Button>
                    </div>
                    
                    <ShareButton 
                      type="scheme" 
                      data={{
                        title: post.title,
                        content: post.content,
                        author: post.author
                      }}
                      variant="ghost"
                      size="sm"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center py-6">
              <Button variant="outline" className="px-8">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;
