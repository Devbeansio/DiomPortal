import App from "./App";
import { BounceLoader } from "react-spinners";
import LoadingOverlay from "react-loading-overlay";
import { useIsFetching } from "react-query";

const AppWithLoader = (props, children) => {
  const isFetching = useIsFetching();
  console.log("dadas", isFetching);
  return (
    <LoadingOverlay
      active={isFetching}
      spinner={<BounceLoader />}
    ></LoadingOverlay>
  );
};
export default AppWithLoader;
