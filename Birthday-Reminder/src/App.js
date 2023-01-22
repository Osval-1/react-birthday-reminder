import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [person, setPerson] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>{person.length} Birthdays today</h2>
        <List data={person} />
        <button onClick={() => setPerson([])}>Delete all</button>
      </section>
    </main>
  );
}

export default App;
