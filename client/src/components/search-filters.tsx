import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { categories, type Category } from "@/data/tools";

interface SearchFiltersProps {
  onSearchChange: (search: string) => void;
  onCategoryChange: (category: Category) => void;
  currentCategory: Category;
}

export function SearchFilters({ onSearchChange, onCategoryChange, currentCategory }: SearchFiltersProps) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onSearchChange(value);
  };

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Buscar ferramentas..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="search-animation pl-12 py-4 bg-white dark:bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
        />
      </div>
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(categories).map(([key, label]) => (
          <Button
            key={key}
            variant={currentCategory === key ? "default" : "secondary"}
            size="sm"
            onClick={() => onCategoryChange(key as Category)}
            className="category-pill font-medium"
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
