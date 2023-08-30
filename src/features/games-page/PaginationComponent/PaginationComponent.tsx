import React, { FC, useState, useEffect } from 'react';
import { Pagination, PaginationProps } from 'antd';
import { IPaginationComponentProps } from '../../../types/types';

const PaginationComponent: FC<IPaginationComponentProps> = (
  {
    total,
    games,
    onSetItemsToDisplay,
  },
) => {
  const currentPageFromLocalStorage = localStorage.getItem('currentPage');
  const initialPage = currentPageFromLocalStorage ? parseInt(currentPageFromLocalStorage, 10) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    onSetItemsToDisplay(games.slice(startIndex, endIndex));
  }, [games, startIndex, endIndex, onSetItemsToDisplay]);

  useEffect(() => {
    setCurrentPage(1);
    localStorage.setItem('currentPage', '1');
  }, [games]);

  const onPageChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page.toString());
  };

  return (
    <Pagination
      style={{ marginTop: 50 }}
      current={currentPage}
      onChange={onPageChange}
      total={total}
      pageSize={itemsPerPage}
      showSizeChanger={false} />
  );
};

export default PaginationComponent;
