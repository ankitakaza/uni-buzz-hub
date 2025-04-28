
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import NewsFeedFilters from '@/components/NewsFeedFilters';
import PostCard from '@/components/PostCard';
import RightSidebar from '@/components/RightSidebar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Image, Smile } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Sample data
const filters = [
  { id: 'all', name: 'All' },
  { id: 'academics', name: 'Academics', count: 12 },
  { id: 'clubs', name: 'Clubs', count: 8 },
  { id: 'sports', name: 'Sports', count: 5 },
  { id: 'events', name: 'Events', count: 7 },
  { id: 'announcements', name: 'Announcements', count: 3 },
];

const posts = [
  {
    id: '1',
    author: {
      name: 'CS Department',
      avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      role: 'Department'
    },
    content: {
      text: 'Attention all CS students! The annual hackathon registration is now open. Form your teams and register by June 15th. Great prizes await the winners!',
      tags: ['hackathon', 'coding', 'competition']
    },
    timestamp: '2 hours ago',
    category: 'Academics',
    likes: 45,
    comments: 12
  },
  {
    id: '2',
    author: {
      name: 'Photography Club',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      role: 'Club'
    },
    content: {
      text: 'Check out these amazing shots from our weekend campus photowalk! Join us next Saturday for another creative session.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      tags: ['photography', 'campus', 'creative']
    },
    timestamp: '5 hours ago',
    category: 'Clubs',
    likes: 78,
    comments: 23
  },
  {
    id: '3',
    author: {
      name: 'Student Council',
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      role: 'Official'
    },
    content: {
      text: 'Important announcement: The campus will be closed on Monday for maintenance. All classes will be held online. Check your email for the Zoom links.',
      tags: ['announcement', 'campus']
    },
    timestamp: '1 day ago',
    category: 'Announcements',
    likes: 112,
    comments: 34
  }
];

const upcomingEvents = [
  {
    id: '1',
    title: 'End of Semester Party',
    date: 'Jun 25',
  },
  {
    id: '2',
    title: 'Web Dev Workshop',
    date: 'Jun 18',
  },
  {
    id: '3',
    title: 'Career Fair 2023',
    date: 'Jun 30',
  }
];

const trendingTopics = [
  { id: '1', name: 'summerfest', count: 234 },
  { id: '2', name: 'finalsweek', count: 187 },
  { id: '3', name: 'internship', count: 152 },
  { id: '4', name: 'campuscafe', count: 98 },
  { id: '5', name: 'gradnight', count: 89 }
];

const suggestedClubs = [
  {
    id: '1',
    name: 'Robotics Club',
    logo: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '2',
    name: 'Film Society',
    logo: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '3',
    name: 'Chess Club',
    logo: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [postContent, setPostContent] = useState('');

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      console.log('New post content:', postContent);
      setPostContent('');
      // Implement post creation logic
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <NavBar />
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden md:block md:col-span-2">
            <div className="space-y-4 sticky top-20">
              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="story-ring">
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                        alt="Profile"
                        className="rounded-full h-20 w-20 border-2 border-background"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Sarah Connor</h3>
                    <p className="text-sm text-muted-foreground">Computer Science, Year 3</p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="text-center">
                      <p className="font-bold">24</p>
                      <p className="text-xs text-muted-foreground">Posts</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">412</p>
                      <p className="text-xs text-muted-foreground">Friends</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">6</p>
                      <p className="text-xs text-muted-foreground">Clubs</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">View Profile</Button>
                </CardContent>
              </Card>

              <NewsFeedFilters
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-3">
            <div className="space-y-4">
              {/* Create Post */}
              <Card>
                <CardContent className="p-4">
                  <Tabs defaultValue="post">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger value="post">Post</TabsTrigger>
                      <TabsTrigger value="photo">Photo</TabsTrigger>
                      <TabsTrigger value="poll">Poll</TabsTrigger>
                    </TabsList>
                    <TabsContent value="post" className="space-y-4">
                      <Textarea
                        placeholder="What's on your mind, Sarah?"
                        className="min-h-[100px]"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                      />
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Image className="mr-1 h-4 w-4" />
                            Photo
                          </Button>
                          <Button size="sm" variant="outline">
                            <Smile className="mr-1 h-4 w-4" />
                            Feeling
                          </Button>
                        </div>
                        <Button 
                          onClick={handlePostSubmit}
                          disabled={!postContent.trim()}
                        >
                          Post
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="photo">
                      <div className="space-y-4">
                        <div className="border-2 border-dashed border-muted rounded-md p-8 text-center">
                          <Image className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-muted-foreground">Drag and drop or click to upload</p>
                          <Input type="file" className="hidden" id="photo-upload" />
                          <Button variant="outline" className="mt-4" onClick={() => document.getElementById('photo-upload')?.click()}>
                            Choose File
                          </Button>
                        </div>
                        <Textarea placeholder="Write a caption..." className="min-h-[80px]" />
                        <Button className="w-full">Upload Photo</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="poll">
                      <div className="space-y-4">
                        <Input placeholder="Ask a question..." />
                        <div className="space-y-2">
                          <Input placeholder="Option 1" />
                          <Input placeholder="Option 2" />
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          + Add Option
                        </Button>
                        <Separator />
                        <Button className="w-full">Create Poll</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Mobile Filters */}
              <div className="md:hidden">
                <NewsFeedFilters
                  filters={filters}
                  activeFilter={activeFilter}
                  onFilterChange={handleFilterChange}
                />
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {posts.map((post) => (
                  <PostCard
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    timestamp={post.timestamp}
                    category={post.category}
                    likes={post.likes}
                    comments={post.comments}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Hidden on mobile */}
          <div className="hidden md:block md:col-span-2">
            <div className="sticky top-20">
              <RightSidebar
                upcomingEvents={upcomingEvents}
                trendingTopics={trendingTopics}
                suggestedClubs={suggestedClubs}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
