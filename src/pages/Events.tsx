
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Sample data
const events = [
  {
    id: '1',
    title: 'Annual Tech Summit',
    description: 'Join us for a day of inspiring talks, workshops, and networking with industry leaders.',
    date: 'June 28, 2023',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    attendees: 156,
    category: 'Tech',
    featured: true,
    organizer: 'Computer Science Department'
  },
  {
    id: '2',
    title: 'Summer Music Festival',
    description: 'A celebration of music featuring performances by student bands and special guests.',
    date: 'July 15, 2023',
    location: 'Campus Lawn',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    attendees: 324,
    category: 'Cultural',
    featured: true,
    organizer: 'Student Arts Council'
  },
  {
    id: '3',
    title: 'Career Fair 2023',
    description: 'Connect with top employers, explore internship opportunities, and get career advice.',
    date: 'June 30, 2023',
    location: 'University Center',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    attendees: 215,
    category: 'Academic',
    featured: false,
    organizer: 'Career Services'
  },
  {
    id: '4',
    title: 'Intramural Sports Tournament',
    description: 'Compete in various sports and represent your department in this annual tournament.',
    date: 'July 8-10, 2023',
    location: 'Sports Complex',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    attendees: 178,
    category: 'Sports',
    featured: false,
    organizer: 'Athletics Department'
  },
  {
    id: '5',
    title: 'Hackathon Challenge',
    description: 'A 48-hour coding challenge to build innovative solutions for real-world problems.',
    date: 'July 22-24, 2023',
    location: 'Innovation Lab',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    attendees: 92,
    category: 'Tech',
    featured: false,
    organizer: 'Programming Club'
  },
  {
    id: '6',
    title: 'Photography Exhibition',
    description: 'Showcasing the best works of our university photography enthusiasts.',
    date: 'July 5, 2023',
    location: 'Art Gallery',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    attendees: 67,
    category: 'Cultural',
    featured: false,
    organizer: 'Photography Club'
  }
];

const categories = [
  { id: 'all', name: 'All Events' },
  { id: 'Tech', name: 'Technology' },
  { id: 'Cultural', name: 'Arts & Culture' },
  { id: 'Sports', name: 'Sports' },
  { id: 'Academic', name: 'Academic' }
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const filteredEvents = events.filter((event) => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredEvents = filteredEvents.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  const handleRegister = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      toast({
        title: "Registration Successful!",
        description: `You've registered for ${event.title}. Check your email for details.`,
        duration: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <NavBar />
      <div className="container py-6">
        {/* Hero Section */}
        <div className="mb-6 bg-gradient-to-r from-unibrand-accent to-unibrand-tertiary rounded-xl overflow-hidden">
          <div className="p-8 md:p-12 relative">
            <div className="max-w-3xl relative z-10">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-white/20">
                University Events
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discover, Attend, and <br />Create Amazing Events
              </h1>
              <p className="text-white/80 mb-6 max-w-2xl">
                Explore the upcoming events on campus, register for your favorites, and connect 
                with fellow students and organizations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-white text-unibrand-primary hover:bg-white/90">
                  Create Event
                </Button>
                <Button variant="outline" className="bg-white/20 text-white border-white/20 hover:bg-white/30">
                  <Calendar className="h-4 w-4 mr-2" /> View Calendar
                </Button>
              </div>
            </div>
            
            <div className="absolute right-0 bottom-0 opacity-20 md:opacity-40">
              <Calendar className="h-48 w-48 text-white" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Input
                type="date"
                className="text-muted-foreground"
              />
              
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

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  location={event.location}
                  image={event.image}
                  attendees={event.attendees}
                  category={event.category}
                  featured={true}
                  onRegister={() => handleRegister(event.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tabs */}
        <Tabs defaultValue="upcoming" className="mb-6">
          <TabsList className="grid max-w-[400px] grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="pt-4">
            {regularEvents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {regularEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    location={event.location}
                    image={event.image}
                    attendees={event.attendees}
                    category={event.category}
                    onRegister={() => handleRegister(event.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No events found matching your criteria.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Past events will be shown here.</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Event Map */}
        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="h-64 bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mb-2 mx-auto" />
                  <p className="text-muted-foreground">Event Map Coming Soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Events;
