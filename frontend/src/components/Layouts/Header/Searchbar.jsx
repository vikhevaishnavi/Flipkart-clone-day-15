import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {

    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/products/${keyword}`)
        } else {
            navigate('/products');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-2/3 sm:w-9/12 px-1 sm:px-4 py-1.5 flex  items-center shadow-md bg-white rounded-sm">
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className="text-sm w-full flex-1 outline-none border-none placeholder-gray-500" type="text" placeholder="Search for products, brands and more" />
        <button type="submit" className="text-primary-blue relative " aria-label="Click me to submit the form"><SearchIcon /></button>
    </form>
    );
};

export default Searchbar;
