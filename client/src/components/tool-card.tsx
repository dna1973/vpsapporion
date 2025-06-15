import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Box } from "lucide-react";
import { Tool, categories } from "@/data/tools";
import * as SimpleIcons from "react-icons/si";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  // Dynamically get icon component from react-icons/si
  const IconComponent = (SimpleIcons as any)[tool.icon] || Box;

  return (
    <Card className="card-hover bg-card border border-border transition-all duration-200 group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-[var(--accent-green)] rounded-lg flex items-center justify-center">
            <IconComponent className="text-white h-6 w-6" />
          </div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        
        <h3 className="text-lg font-semibold text-card-foreground mb-2">{tool.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{tool.description}</p>
        
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
            {categories[tool.category]}
          </Badge>
          <Button 
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a 
              href={`https://${tool.url}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <span>Acessar</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
