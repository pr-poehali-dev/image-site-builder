
import { Button } from "@/components/ui/button";
import { GithubIcon, Share2Icon, HomeIcon } from "lucide-react";

const MemeHeader = () => {
  return (
    <header className="w-full bg-meme-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-5 w-5" />
          <span className="text-lg font-bold">МемЛандия</span>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-meme-accent"
            onClick={() => window.location.href = "/"}
          >
            Главная
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-meme-accent"
          >
            Коллекция
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-meme-accent flex items-center gap-1"
          >
            <Share2Icon className="h-4 w-4" />
            <span>Поделиться</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MemeHeader;
