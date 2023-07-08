import { Label } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const changeInput = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <input onChange={changeInput} />
    </Label>
  );
};

export default ContactFilter;
