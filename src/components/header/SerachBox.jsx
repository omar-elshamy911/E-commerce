import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState(""); // تم تعديل الاسم الإملائي ليكون searchTerm
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => { // تم تعديل الاسم الإملائي ليكون handleSubmit
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSuggestions([]);
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!searchTerm.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await res.json();
        setSuggestions(data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("Search Error :", error);
        setSuggestions([]);
      }
    };

    const debounce = setTimeout(() => { // تم تعديل الاسم الإملائي ليكون debounce
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  useEffect(() => {
    setSuggestions([]);
  }, [location]);

  return (
    <div className="searchBox_Container">
      <form onSubmit={handleSubmit} className="search_box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search For Products"
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item) => (
            /* ✅ التعديل هنا: تم نقل الـ key إلى عنصر الـ Link لأنه الأب المباشر داخل الـ map */
            <Link to={`/products/${item.id}`} key={item.id}>
              <li>
                <img src={item.images[0]} alt={item.title} /> 
                <span>{item.title}</span> 
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
