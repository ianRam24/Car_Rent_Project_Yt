'use client';

import { useState } from 'react';
import { SearchManufacturer } from './';

export default function SearchBar() {
  const [manufacurer, setManufacurer] = useState('');
  const handleSearch = () => {};
  return (
    <form
      className="search-bar"
      onSubmit={handleSearch}
    >
      <div className="searchbar__items">
        <SearchManufacturer
          manufacturer={manufacurer}
          setManufacturer={setManufacurer}
        />
      </div>
    </form>
  );
}
