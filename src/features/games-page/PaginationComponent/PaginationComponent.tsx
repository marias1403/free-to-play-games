import React, { FC, useState, useEffect } from 'react';
import { Pagination, PaginationProps } from 'antd';
import { IPaginationComponentProps } from '../../../types/types';
import { DEFAULT_ITEMS_PER_PAGE } from '../../../constants/constants';

const PaginationComponent: FC<IPaginationComponentProps> = (
  {
    total,
    games,
    onSetItemsToDisplay,
  },
) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = DEFAULT_ITEMS_PER_PAGE;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    onSetItemsToDisplay(games.slice(startIndex, endIndex));
  }, [currentPage, endIndex, games, onSetItemsToDisplay, startIndex]);

  useEffect(() => {
    setCurrentPage(1);
  }, [games]);

  const onPageChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
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
