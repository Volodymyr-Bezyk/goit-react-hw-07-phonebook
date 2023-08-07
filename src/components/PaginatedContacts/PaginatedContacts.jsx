import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Box from 'components/Box';
import ContactListRow from 'components/ContactListRow';
import { Contact } from 'components/ContactList/ContactList.styled';
import { StyledPaginatedContacts } from './PaginatedContacts.styled';
import Error from 'components/Error';
import { selectors } from 'redux/index';

const PaginatedContacts = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredContacts = useSelector(selectors.selectVisibleContacts);
  const status = useSelector(selectors.selectActiveStatus);
  const filter = useSelector(selectors.selectFilter);
  const error = useSelector(selectors.selectError);

  useEffect(() => {
    setItemOffset(0);
    setCurrentPage(0);
  }, [status, filter]);

  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredContacts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredContacts.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % filteredContacts.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
  };

  return (
    <>
      {error && <Error />}
      {!error && currentItems.length > 0 && (
        <Box as="ul" display="flex" flexDirection="column-reverse">
          {currentItems.map(contact => (
            <Contact key={contact.id}>{<ContactListRow contact={contact} />}</Contact>
          ))}
        </Box>
      )}
      {!error && currentItems.length > 0 && (
        <StyledPaginatedContacts
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          className={'paginate'}
          pageClassName={'pagItem'}
          forcePage={currentPage}
        />
      )}
    </>
  );
};

export default PaginatedContacts;
