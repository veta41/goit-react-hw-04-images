import { useState } from 'react';
import {
  Input,
  SearchBarForm,
  Icon,
  SearchbarHeader,
  Button,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchbarHeader>
      <SearchBarForm
        onSubmit={e => {
          e.preventDefault();
          onSubmit(inputValue);
          setInputValue('');
        }}
      >
        <Button type="submit" disabled={isLoading}>
          <Icon />
        </Button>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </SearchBarForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
