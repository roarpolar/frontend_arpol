import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer'; 
import Cardpanel from './components/cards/Cardpanel'; // Importando o Cardpanel

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [username] = useState('João Silva');

  // Dados dos cards (exemplo)
  const cardData = [
    { title: 'Card 1', content: 'Conteúdo do Card 1' },
    { title: 'Card 2', content: 'Conteúdo do Card 2' },
    { title: 'Card 3', content: 'Conteúdo do Card 3' },
    { title: 'Card 4', content: 'Conteúdo do Card 4' },
    { title: 'Card 5', content: 'Conteúdo do Card 5' },
    { title: 'Card 6', content: 'Conteúdo do Card 6' },
    { title: 'Card 7', content: 'Conteúdo do Card 7' },
    { title: 'Card 8', content: 'Conteúdo do Card 8' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex h-full">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar 
            username={username}
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <main className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cardData.map((card, index) => (
                <Cardpanel key={index} title={card.title} content={card.content} name={''} street={''} number={''} city={''} state={''} postCode={''} onClick={function (): void {
                  throw new Error('Function not implemented.');
                } } />
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer /> {/* Adicionando o rodapé aqui */}
    </div>
  );
}

export default App;





