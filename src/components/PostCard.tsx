
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { Badge } from './ui/badge';

interface PostCardProps {
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  content: {
    text: string;
    image?: string;
    tags?: string[];
  };
  timestamp: string;
  category?: string;
  likes: number;
  comments: number;
}

const PostCard: React.FC<PostCardProps> = ({
  author,
  content,
  timestamp,
  category,
  likes: initialLikes,
  comments
}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="uni-card overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex space-x-2 items-center">
          <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-xs text-muted-foreground flex items-center">
              {author.role && <span className="mr-2">{author.role}</span>}
              <span>{timestamp}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {category && (
            <Badge variant="outline" className="bg-accent/20 hover:bg-accent/30">
              {category}
            </Badge>
          )}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Save Post</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Hide</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      
      <CardContent className="pt-3">
        <p className="text-sm mb-3">{content.text}</p>
        
        {content.image && (
          <div className="rounded-lg overflow-hidden mb-3">
            <img 
              src={content.image} 
              alt="Post content" 
              className="w-full h-auto object-cover"
              style={{ maxHeight: '400px' }}
            />
          </div>
        )}
        
        {content.tags && content.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {content.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="border-t pt-3 flex justify-between">
        <div className="flex space-x-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center text-muted-foreground hover:text-unibrand-primary"
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 mr-1 ${liked ? 'fill-unibrand-tertiary text-unibrand-tertiary' : ''}`} />
            <span>{likes}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center text-muted-foreground hover:text-unibrand-primary"
          >
            <MessageCircle className="h-4 w-4 mr-1" />
            <span>{comments}</span>
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-muted-foreground hover:text-unibrand-primary"
        >
          <Share className="h-4 w-4 mr-1" />
          <span>Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
