
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  attendees: number;
  category: string;
  featured?: boolean;
  onRegister?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  location,
  image,
  attendees,
  category,
  featured = false,
  onRegister
}) => {
  return (
    <Card className={`uni-card overflow-hidden ${featured ? 'border-2 border-unibrand-primary' : ''}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className={
            category === "Academic" ? "bg-blue-500"
            : category === "Cultural" ? "bg-purple-500"
            : category === "Sports" ? "bg-green-500"
            : category === "Tech" ? "bg-indigo-500"
            : "bg-unibrand-tertiary"
          }>
            {category}
          </Badge>
        </div>
        {featured && (
          <div className="absolute top-0 left-0 bg-unibrand-primary text-white px-4 py-1 rounded-br-lg text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg">{title}</h3>
      </CardHeader>
      
      <CardContent className="space-y-2 pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-1" />
          <span>{attendees} attending</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full" 
          variant={featured ? "default" : "outline"}
          onClick={onRegister}
        >
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
