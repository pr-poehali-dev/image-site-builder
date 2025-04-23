
const MemeFooter = () => {
  return (
    <footer className="bg-meme-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">МемЛандия</h2>
            <p className="text-sm opacity-75">Лучшие мемы для хорошего настроения</p>
          </div>
          
          <div className="flex flex-col text-center md:text-right">
            <p className="text-sm opacity-75">© {new Date().getFullYear()} МемЛандия</p>
            <p className="text-sm opacity-75">Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MemeFooter;
