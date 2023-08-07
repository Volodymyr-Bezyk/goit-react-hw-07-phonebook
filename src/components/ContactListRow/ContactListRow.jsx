import { AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Checkbox from 'components/Checkbox';
import { Info, InfoBtn } from './ContactListRow.styled';
import { operations } from 'redux/index';

const ContactListRow = ({ contact }) => {
  console.log('contact', contact);
  const { name, number, email, id, status } = contact;
  const dispatch = useDispatch();
  const onDeleteClick = () => dispatch(operations.deleteContact(id));
  const onToggleClick = () => dispatch(operations.toggleFavourite(contact));

  return (
    <>
      <Checkbox status={status} onToggleClick={onToggleClick} />
      <Info>{name}</Info>
      <Info>{number}</Info>
      <Info>{email}</Info>
      <InfoBtn type="button" onClick={onDeleteClick}>
        <AiTwotoneDelete size={12} />
      </InfoBtn>
    </>
  );
};

export default ContactListRow;

ContactListRow.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    email: PropTypes.string,
    id: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }),
};
