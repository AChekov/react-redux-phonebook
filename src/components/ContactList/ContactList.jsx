import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getFilter, getItems } from 'redux/selectors';
import { Item, Contact, BtnClose } from './ContactList.styled';
// import { PropTypes } from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(getItems);
  const filterContact = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  console.log(visibleContacts);

  return (
    <ul>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Contact>
                {name}: {number}
              </Contact>
              <BtnClose type="button" onClick={handleDelete}>
                Delete
              </BtnClose>
            </Item>
          );
        })}
    </ul>
  );
};

// const ContactList = ({ contacts, onRemoveContact }) => (
//   <ul>
//     {contacts &&
//       contacts.map(({ id, name, number }) => {
//         return (
//           <Item key={id}>
//             <Contact>
//               {name}: {number}
//             </Contact>
//             <BtnClose type="button" onClick={() => onRemoveContact(id)}>
//               Delete
//             </BtnClose>
//           </Item>
//         );
//       })}
//   </ul>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   onRemoveContact: PropTypes.func,
// };

export default ContactList;
