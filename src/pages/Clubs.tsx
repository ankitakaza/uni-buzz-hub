
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import ClubCard from '@/components/ClubCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

// Sample data
const clubs = [
  {
    id: '1',
    name: 'Programming Club',
    description: 'A community of coding enthusiasts working on exciting projects and hosting hackathons.',
    members: 126,
    logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    tags: ['Tech', 'Coding', 'Hackathons'],
    category: 'Tech'
  },
  {
    id: '2',
    name: 'Photography Society',
    description: 'Capture moments, tell stories. Join us to explore the art of photography and visual storytelling.',
    members: 84,
    logo: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    coverImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    tags: ['Arts', 'Photography', 'Creative'],
    category: 'Arts'
  },
  {
    id: '3',
    name: 'Debate Club',
    description: 'Sharpen your arguments and public speaking skills. Regular debates on current topics and competitions.',
    members: 52,
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    coverImage: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    tags: ['Debate', 'Public Speaking', 'Competitions'],
    category: 'Academic'
  },
  {
    id: '4',
    name: 'Music Band',
    description: 'Express yourself through music. We perform at campus events and host regular jam sessions.',
    members: 38,
    logo: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    coverImage: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    tags: ['Music', 'Performances', 'Arts'],
    category: 'Arts'
  },
  {
    id: '5',
    name: 'Sports Club',
    description: 'Stay fit and compete in various sports. Regular training sessions and inter-college tournaments.',
    members: 93,
    logo: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    tags: ['Sports', 'Fitness', 'Competitions'],
    category: 'Sports'
  },
  {
    id: '6',
    name: 'Drama Society',
    description: 'Explore the world of theater and performing arts. Regular workshops and plays throughout the year.',
    members: 67,
    logo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    coverImage: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    tags: ['Drama', 'Theater', 'Arts'],
    category: 'Arts'
  }
];

const categories = [
  { id: 'all', name: 'All Clubs' },
  { id: 'Tech', name: 'Technology' },
  { id: 'Arts', name: 'Arts & Culture' },
  { id: 'Sports', name: 'Sports & Fitness' },
  { id: 'Academic', name: 'Academic' }
];

const Clubs = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClubs = clubs.filter((club) => {
    const matchesCategory = activeCategory === 'all' || club.category === activeCategory;
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          club.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleJoinClub = (clubId: string) => {
    console.log('Join club:', clubId);
    // Implement join club logic
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <NavBar />
      <div className="container py-6">
        {/* Hero Section */}
        <div className="relative mb-6 overflow-hidden rounded-xl">
          <div className="bg-gradient-to-r from-unibrand-primary to-unibrand-tertiary p-8 md:p-12">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discover University Clubs & Societies
              </h1>
              <p className="text-white/80 mb-6">
                Find your community on campus. Join clubs that match your interests, make new friends, 
                and enhance your university experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary">Create New Club</Button>
                <Button variant="outline" className="bg-white/20 text-white border-white/20 hover:bg-white/30">
                  How to Join
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search clubs..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-1">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    className={activeCategory === category.id ? '' : 'bg-muted/30'}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="grid" className="mb-6">
          <TabsList className="grid w-full grid-cols-2 max-w-[200px]">
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>

          {/* Grid View */}
          <TabsContent value="grid">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredClubs.map((club) => (
                <ClubCard
                  key={club.id}
                  name={club.name}
                  description={club.description}
                  members={club.members}
                  logo={club.logo}
                  coverImage={club.coverImage}
                  tags={club.tags}
                  onJoin={() => handleJoinClub(club.id)}
                />
              ))}
            </div>
          </TabsContent>

          {/* List View */}
          <TabsContent value="list">
            <div className="space-y-4">
              {filteredClubs.map((club) => (
                <Card key={club.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 h-40 md:h-auto">
                      <img 
                        src={club.coverImage} 
                        alt={`${club.name} cover`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <img 
                            src={club.logo} 
                            alt={`${club.name} logo`}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <h3 className="font-bold text-lg">{club.name}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3">{club.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {club.tags.map((tag, index) => (
                            <Button key={index} variant="outline" size="sm" className="text-xs">
                              {tag}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm">{club.members} members</div>
                        <Button onClick={() => handleJoinClub(club.id)}>Join Club</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Clubs;
