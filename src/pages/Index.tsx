
import MemeHeader from "@/components/MemeHeader";
import MemeSection from "@/components/MemeSection";
import MemeFooter from "@/components/MemeFooter";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <MemeHeader />
      
      <main className="flex-grow">
        <MemeSection />
      </main>
      
      <MemeFooter />
    </div>
  );
};

export default Index;
