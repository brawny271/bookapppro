import React from 'react';
import { Pagination } from 'antd';
import './paginationcomponent.css';

const PaginationComponent = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  return (
    <div className="pagination">
      <Pagination
        pageSize={itemsPerPage}
        total={totalItems} 
        onChange={(page) => paginate(page)}
        current={currentPage} 
      />
    </div>
  );
};

export default PaginationComponent;