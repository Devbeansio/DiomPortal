import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { getInvoice } from "../../../../APIS/invoices";
import { usePaginatedQuery } from "../../../../hooks/query";
import { useParams } from "react-router-dom";

export const useInvoice = () => {
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();
  const { id } = useParams();

  const {
    data: { data: InvoiceData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["Invoice", currentPage], () =>
    getInvoice(pageSize, currentPage, token, id)
  );

  const pageOptions = {
    sizePerPage: pageSize,
    totalSize: total ?? 0,
    custom: true,
  };

  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["Invoice", nextPage], () =>
        getInvoice(pageSize, nextPage, token, id)
      );
    }
  }, [currentPage, queryClient]);

  return {
    currentPage,
    pageOptions,
    InvoiceData,
    hasNextPage,
    hasPreviousPage,
    total,
    isLoading,
    changeCurrentPage,
  };
};
