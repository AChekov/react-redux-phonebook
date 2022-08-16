import { InputFilter, LabelFilter } from './Filter.styled';
// import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const handleInput = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <LabelFilter>
      <InputFilter
        type="text"
        placeholder="Find contacts by name"
        value={filterName}
        onChange={handleInput}
      />
    </LabelFilter>
  );
};

// const Filter = ({ filter, onChange }) => (
//   <LabelFilter>
//     <InputFilter
//       type="text"
//       placeholder="Find contacts by name"
//       value={filter}
//       onChange={onChange}
//     />
//   </LabelFilter>
// );

// Filter.propTypes = {
//   filter: PropTypes.string,
//   onChange: PropTypes.func,
// };

export default Filter;
