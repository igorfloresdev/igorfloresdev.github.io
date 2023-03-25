import Main from "./components/Main";
import MobileBar from "./components/MobileBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div data-theme="dark" className="App flex">
      <Sidebar title='< Igor Flores />' subtitle='Desenvolvedor Front-end' className="hidden lg:flex" />
      <MobileBar title='< Igor Flores />' className="fixed bg-base-300 w-screen z-50 lg:hidden" />
      <div className='w-screen h-screen flex flex-col overflow-auto scroll-smooth'>
        <Main />
      </div>
    </div>
  );
}

export default App;
