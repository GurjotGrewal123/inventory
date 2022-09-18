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
    <div className="App">
      <AddItem addItem={addItemToData} />
      <ItemsDisplay items={data["items"]} />
      <SearchBar updateSearchParams={updateFilters} />

    </div>
  );
}

export default App;
