
import MemeCard from "@/components/MemeCard";

const MemeSection = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-meme-primary">
          Мем дня
        </h1>
        
        <div className="max-w-lg mx-auto">
          <MemeCard 
            imageUrl="https://cdn.poehali.dev/files/e1543318-6c5b-43ea-92f7-9fe7cde79419.jpg"
            altText="Мем 'Хочу оливье и редиса по скидочке'"
          />
        </div>
        
        <div className="mt-10 bg-meme-secondary rounded-lg p-6 max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-3 text-meme-primary">Описание мема</h2>
          <p className="text-gray-700 mb-4">
            Этот популярный мем выражает то чувство, когда одновременно хочется и праздничного оливье, 
            и при этом не пропустить выгодные скидки на редис. Отражает менталитет любителей праздничных блюд и экономных покупок.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-meme-accent text-white px-3 py-1 rounded-full text-sm">
              #оливье
            </span>
            <span className="bg-meme-accent text-white px-3 py-1 rounded-full text-sm">
              #скидки
            </span>
            <span className="bg-meme-accent text-white px-3 py-1 rounded-full text-sm">
              #редис
            </span>
            <span className="bg-meme-accent text-white px-3 py-1 rounded-full text-sm">
              #мемы
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeSection;
