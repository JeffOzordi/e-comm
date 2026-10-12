import NavBar from './components/NavBar';

function App() {

  return (
    <div className="grid bg-white dark:bg-gray-600">
      <NavBar />
      <div className="grid sm:grid-cols-2">
        <div className="hidden sm:block bg-amber-300">aside</div>
        <div className="bg-sky-500">main</div>
      </div>
    </div>
  );
}

export default App;
