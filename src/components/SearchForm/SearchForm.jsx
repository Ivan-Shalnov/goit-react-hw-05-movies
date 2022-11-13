import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
export const SearchForm = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const onFormSubmit = e => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query !== '') navigate(`?query=${query}`);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" ref={inputRef}></input>
      <button type="submit">Search</button>
    </form>
  );
};
