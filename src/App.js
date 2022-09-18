import './App.css';
import SearchBar from "./SearchBar";
import { useState } from "react";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] })

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
  };

  return (
    <div className="container">
      <div className="row mt-4"><AddItem addItem={addItemToData} /></div>
      <div className="row mt-4"><SearchBar updateSearchParams={updateFilters} /></div>
      <div className="row mt-4"><ItemsDisplay items={data["items"]} /></div>
    </div>
  );
}

export default App;
