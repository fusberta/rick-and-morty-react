import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {

  return (
    <ReactPaginate 
    pageCount={totalPages} 
    pageLinkClassName='pagination-item'
    containerClassName='pagination'
    pageRangeDisplayed={2}
    previousLabel='❮' 
    nextLabel='❯'
    previousClassName='arrows'
    nextClassName='arrows'
    activeLinkClassName='pagination-active-item'
    onPageChange={(data) => {
      setCurrentPage(data.selected + 1)
    }}
    forcePage={currentPage === 1 ? 0 : currentPage - 1}
    />
    
  );
};

export default Pagination;