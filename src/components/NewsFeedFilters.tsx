
import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

interface Filter {
  id: string;
  name: string;
  count?: number;
}

interface NewsFeedFiltersProps {
  filters: Filter[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

const NewsFeedFilters: React.FC<NewsFeedFiltersProps> = ({
  filters,
  activeFilter,
  onFilterChange
}) => {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-3">Filter By</h3>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            size="sm"
            className={`rounded-full ${activeFilter === filter.id ? '' : 'bg-muted/30'}`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.name}
            {filter.count !== undefined && (
              <Badge 
                variant="secondary" 
                className="ml-1 h-5 min-w-[20px] bg-background text-foreground"
              >
                {filter.count}
              </Badge>
            )}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default NewsFeedFilters;
