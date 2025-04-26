
import React from 'react';
import StoryCircle from './StoryCircle';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface Story {
  id: string;
  name: string;
  imageUrl: string;
  seen: boolean;
}

interface StoriesListProps {
  stories: Story[];
  onViewStory?: (id: string) => void;
  onAddStory?: () => void;
}

const StoriesList: React.FC<StoriesListProps> = ({
  stories,
  onViewStory,
  onAddStory
}) => {
  const scrollLeft = () => {
    const container = document.getElementById('stories-container');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('stories-container');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <Card className="p-4 relative">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">Stories</h3>
        <Button variant="ghost" size="sm" onClick={onAddStory}>
          Add Story <Plus className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <div className="relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 h-8 w-8 bg-background/80 backdrop-blur-sm rounded-full shadow-md"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div 
          id="stories-container"
          className="flex space-x-4 overflow-x-auto scrollbar-hide py-2 px-2"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {stories.map((story) => (
            <StoryCircle
              key={story.id}
              name={story.name}
              imageUrl={story.imageUrl}
              seen={story.seen}
              onClick={() => onViewStory && onViewStory(story.id)}
            />
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 h-8 w-8 bg-background/80 backdrop-blur-sm rounded-full shadow-md"
          onClick={scrollRight}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default StoriesList;
