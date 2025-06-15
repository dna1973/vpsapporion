import { useState, useMemo } from "react";
import { Server, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchFilters } from "@/components/search-filters";
import { ToolCard } from "@/components/tool-card";
import { useTheme } from "@/components/theme-provider";
import { tools, type Category } from "@/data/tools";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [currentCategory, setCurrentCategory] = useState<Category>("all");

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(search.toLowerCase()) || 
        tool.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = currentCategory === "all" || tool.category === currentCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, currentCategory]);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-[var(--accent-green)] rounded-xl flex items-center justify-center">
                <Server className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Painel de Ferramentas</h1>
                <p className="text-muted-foreground text-sm">
                  Daniel VPS • <span className="font-medium">{filteredTools.length}</span> ferramentas disponíveis
                </p>
              </div>
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-xl"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchFilters
          onSearchChange={setSearch}
          onCategoryChange={setCurrentCategory}
          currentCategory={currentCategory}
        />

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.name}
                className="fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 text-muted-foreground">
              <Server className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhuma ferramenta encontrada
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou termos de busca
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Daniel VPS • Painel de Ferramentas • 
              <span className="text-primary ml-1">estdudioai.site</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Acesso centralizado a ferramentas de automação, produtividade e desenvolvimento
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
