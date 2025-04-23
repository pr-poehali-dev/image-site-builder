
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShareIcon, HeartIcon, DownloadIcon } from "lucide-react";

interface MemeCardProps {
  imageUrl: string;
  altText: string;
}

const MemeCard = ({ imageUrl, altText }: MemeCardProps) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Хочу оливье и редиса по скидочке',
        text: 'Посмотри какой мем я нашел!',
        url: window.location.href,
      })
      .catch((error) => console.log('Ошибка шаринга', error));
    } else {
      // Копирование ссылки в буфер обмена
      navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована в буфер обмена');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'mem-olivye.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="overflow-hidden border-2 border-meme-primary shadow-lg max-w-md mx-auto">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={altText} 
            className="w-full object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="bg-meme-secondary p-4 flex justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1 border-meme-accent text-meme-accent hover:bg-meme-accent hover:text-white"
          onClick={() => alert('Мем добавлен в избранное!')}
        >
          <HeartIcon className="h-4 w-4" />
          <span>Нравится</span>
        </Button>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1 border-meme-accent text-meme-accent hover:bg-meme-accent hover:text-white"
            onClick={handleDownload}
          >
            <DownloadIcon className="h-4 w-4" />
            <span>Скачать</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1 border-meme-accent text-meme-accent hover:bg-meme-accent hover:text-white"
            onClick={handleShare}
          >
            <ShareIcon className="h-4 w-4" />
            <span>Поделиться</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MemeCard;
