
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Calendar } from 'lucide-react';

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  image?: string;
}

interface TrendingTopic {
  id: string;
  name: string;
  count: number;
}

interface SuggestedClub {
  id: string;
  name: string;
  logo: string;
}

interface RightSidebarProps {
  upcomingEvents: UpcomingEvent[];
  trendingTopics: TrendingTopic[];
  suggestedClubs: SuggestedClub[];
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  upcomingEvents,
  trendingTopics,
  suggestedClubs
}) => {
  return (
    <div className="space-y-4">
      {/* Upcoming Events */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex items-start space-x-2">
              <div className="bg-muted rounded-md p-1 flex flex-col items-center justify-center w-12 h-12">
                <Calendar className="h-4 w-4" />
                <span className="text-xs font-medium">{event.date}</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{event.title}</p>
                <Button variant="link" className="p-0 h-auto text-xs text-unibrand-primary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full">
            View All Events
          </Button>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Trending Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2">
            {trendingTopics.map((topic, index) => (
              <li key={topic.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground font-medium">#{index + 1}</span>
                  <span className="text-sm font-medium">#{topic.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{topic.count} posts</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Suggested Clubs */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Suggested Clubs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {suggestedClubs.map((club) => (
              <div key={club.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={club.logo} alt={club.name} />
                    <AvatarFallback>{club.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{club.name}</span>
                </div>
                <Button variant="outline" size="sm" className="h-8">
                  Join
                </Button>
              </div>
            ))}
            <Button variant="ghost" size="sm" className="w-full">
              Explore More Clubs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;
