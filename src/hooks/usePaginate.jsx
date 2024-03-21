/** @format */

import React, { useMemo } from "react";
import { BsThreeDots } from "react-icons/bs";
import { generateRange } from "~/ultils/helper";

const usePaginate = ({
  total = 0,
  currentPage = 1,
  sibling = 0,
  limit = 1,
}) => {
  const paginationArr = useMemo(() => {
    const paginationCount = Math.ceil(total / limit);
    //5

    const totalPaginationItem = 5 + sibling * 2;

    if (paginationCount <= totalPaginationItem)
      return generateRange(1, paginationCount);

    const isShowDotsLeft = currentPage - sibling > 3;
    const isShowDotsRight = currentPage + sibling < paginationCount - 2;

    if (isShowDotsLeft && !isShowDotsRight) {
      const rightStart = paginationCount - 2 - sibling * 2;
      const rightArr = generateRange(rightStart, paginationCount);

      return [1, <BsThreeDots />, ...rightArr];
    }
    if (!isShowDotsLeft && isShowDotsRight) {
      const leftArr = generateRange(1, 3 + sibling * 2);
      return [...leftArr, <BsThreeDots />, paginationCount];
    }
    const siblingLeft = Math.max(1, currentPage - sibling);
    const siblingRight = Math.min(paginationCount, currentPage + sibling);

    if (isShowDotsLeft && isShowDotsRight) {
      const middleArr = generateRange(siblingLeft, siblingRight);

      return [
        1,
        <BsThreeDots />,
        ...middleArr,
        <BsThreeDots />,
        paginationCount,
      ];
    }
  }, [total, currentPage, sibling]);
  return paginationArr;
};

export default usePaginate;
