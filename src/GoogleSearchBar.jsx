import React, { useState } from 'react';

function GoogleSearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Simulate fetching suggestions (replace with actual API call)
    if (value.length > 2) {
      const simulatedSuggestions = [
        `"${value}" in the news`,
        `"${value}" definition`,
        `"${value}" near me`,
        `images of ${value}`,
      ];
      setSuggestions(simulatedSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    // Here you would typically perform the search with the selected suggestion
    console.log('Searching for:', suggestion);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Here you would typically perform the search
    console.log('Searching for:', searchTerm);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Optionally clear suggestions on blur if not focused
    setTimeout(() => {
      if (!isFocused) {
        setSuggestions([]);
      }
    }, 100);
  };

  return (
    <div className="google-search-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-bar-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search Google or type a URL"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {searchTerm && (
            <button
              type="button"
              className="clear-button"
              onClick={() => setSearchTerm('')}
            >
              X
            </button>
          )}
        </div>
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default GoogleSearchBar;
