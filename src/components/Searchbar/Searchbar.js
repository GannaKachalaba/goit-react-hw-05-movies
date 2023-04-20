import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChangeInput = e => {
    setQuery(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Enter the name of the film');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={onChangeInput}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
Searchbar.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
