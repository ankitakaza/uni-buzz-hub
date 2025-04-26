
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface StoryCircleProps {
  name: string;
  imageUrl: string;
  seen?: boolean;
  onClick?: () => void;
}

const StoryCircle: React.FC<StoryCircleProps> = ({ 
  name, 
  imageUrl, 
  seen = false,
  onClick 
}) => {
  return (
    <div className="flex flex-col items-center space-y-1" onClick={onClick}>
      <div className={`cursor-pointer ${!seen ? 'story-ring' : ''}`}>
        <Avatar className={`h-16 w-16 ${seen ? 'border-2 border-muted' : 'border-2 border-background'}`}>
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-xs font-medium truncate max-w-[70px] text-center">
        {name}
      </span>
    </div>
  );
};

export default StoryCircle;
