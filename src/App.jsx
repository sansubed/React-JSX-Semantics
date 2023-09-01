import "./App.css";
function App() {
  return (
    <div>
      <header>
        <h2>Frontend Bootcamp</h2>
      </header>
      <main>
        <h2 style={{ color: "red" }}> Get fluent in web development using:</h2>{" "}
        <br />
        <div className="box">
          <nav>
            <ul>
              <li>
                <h3 style={{ color: "black" }}> HTML </h3>
              </li>
              <li>
                <h3 style={{ color: "black" }}> CSS </h3>
              </li>
              <li>
                <h3 style={{ color: "black" }}> JAVASCRIPT </h3>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <footer>
        <h2>The End</h2>
      </footer>
    </div>
  );
}

export default App;
