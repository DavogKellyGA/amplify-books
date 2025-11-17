import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json"; // created automatically by Amplify
Amplify.configure(outputs);

const client = generateClient();

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function load() {
      const { data } = await client.models.Book.list();
      setBooks(data);
    }
    load();
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", margin: "2rem" }}>
      <h1>My Amplify Book List</h1>
      {books.length === 0 && <p>No books yet — add one from Amplify Studio!</p>}
      <ul>
        {books.map(b => (
          <li key={b.id}><strong>{b.title}</strong> — {b.author}</li>
        ))}
      </ul>
    </main>
  );
}
