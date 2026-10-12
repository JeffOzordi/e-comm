function App() {
  return (
    <div className="grid">
      <div className="bg-amber-600">NAV</div>

      <div className="grid sm:grid-cols-2">
        <div className="hidden sm:block bg-amber-300">aside</div>
        <div className="bg-sky-500">main</div>
      </div>
    </div>
  );
}

export default App;
