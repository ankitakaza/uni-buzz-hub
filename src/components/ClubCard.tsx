
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Users } from 'lucide-react';

interface ClubCardProps {
  name: string;
  description: string;
  members: number;
  logo: string;
  coverImage: string;
  tags: string[];
  onJoin?: () => void;
}

const ClubCard: React.FC<ClubCardProps> = ({
  name,
  description,
  members,
  logo,
  coverImage,
  tags,
  onJoin
}) => {
  return (
    <Card className="uni-card overflow-hidden h-full flex flex-col">
      <div className="relative">
        <div className="h-24 w-full">
          <img 
            src={coverImage} 
            alt={`${name} cover`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-8 left-4 rounded-full border-4 border-background overflow-hidden">
          <img 
            src={logo} 
            alt={`${name} logo`}
            className="w-16 h-16 object-cover bg-white"
          />
        </div>
      </div>
      
      <CardContent className="pt-10 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>{members}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-3">
        <Button 
          variant="outline" 
          className="w-full hover:bg-unibrand-primary hover:text-white"
          onClick={onJoin}
        >
          Join Club
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClubCard;
