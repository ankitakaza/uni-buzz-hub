
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Bell, Menu, Search } from 'lucide-react';
import { Input } from './ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-unibrand-primary to-unibrand-tertiary flex items-center justify-center text-white font-bold">
              U
            </div>
            <span className="font-bold text-xl hidden md:inline-block gradient-text">UniConnect</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-unibrand-primary transition-colors">
            Home
          </Link>
          <Link to="/clubs" className="font-medium hover:text-unibrand-primary transition-colors">
            Clubs
          </Link>
          <Link to="/events" className="font-medium hover:text-unibrand-primary transition-colors">
            Events
          </Link>
          <Link to="/discover" className="font-medium hover:text-unibrand-primary transition-colors">
            Discover
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 rounded-full"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-unibrand-tertiary rounded-full"></span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="/profile" className="w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-3 px-6 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="font-medium py-2 hover:text-unibrand-primary transition-colors">
              Home
            </Link>
            <Link to="/clubs" className="font-medium py-2 hover:text-unibrand-primary transition-colors">
              Clubs
            </Link>
            <Link to="/events" className="font-medium py-2 hover:text-unibrand-primary transition-colors">
              Events
            </Link>
            <Link to="/discover" className="font-medium py-2 hover:text-unibrand-primary transition-colors">
              Discover
            </Link>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-8 rounded-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
