import "./SearchBar.css";
import "bulma/css/bulma.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label className="label">Enter Search term</label>
                <input 
                    placeholder="Enter search text" 
                    name="search"
                    value={term}
                    onChange={handleChange}
                    className="input"
                />
            </form>
        </div>
    )
}

export default SearchBar;
