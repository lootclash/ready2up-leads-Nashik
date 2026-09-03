import { useEffect } from "react";
import "@/App.css";

function App() {
  useEffect(() => {
    window.location.replace("/ready2up.html");
  }, []);

  return (
    <div className="App" data-testid="redirecting">
      <p className="mt-5">Loading Ready2UP Sales Command Center…</p>
    </div>
  );
}

export default App;
