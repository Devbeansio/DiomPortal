import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { getuserprofile } from "../../APIS/userProfle";
import { usePaginatedQuery } from "../../hooks/query";

export const useUserProfile = () => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();

  const {
    data: { data: userProfileData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["userprofile",`${currentPage}` ,`${pageSize}`], () =>
    getuserprofile(pageSize, currentPage, token,history)
  );
// console.log("hasNextPage",hasNextPage)

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const pagelengthnum = (e) => {
    if (e.target.value === "1") {
      setPageSize(10);
    } else if (e.target.value === "2") {
      setPageSize(30);
    } else if (e.target.value === "3") {
      setPageSize(50);
    }
  };

  const pageOptions = {
    sizePerPage: pageSize,
    totalSize: total ?? 0,
    custom: true,
  };

  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["userprofile", `${currentPage}` ,`${pageSize}`], () =>
        getuserprofile(pageSize, nextPage, token, history)
      );
    }
  }, [currentPage, queryClient]);

  return {
    currentPage,
    pageOptions,
    userProfileData,
    hasNextPage,
    hasPreviousPage,
    total,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    isLoading,

    changeCurrentPage,
  };
};
