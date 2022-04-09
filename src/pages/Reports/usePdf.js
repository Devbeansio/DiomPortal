
import { StyleSheet } from "@react-pdf/renderer";

const Stylesfunc = () => {
  const styles = StyleSheet.create({
    page: { flexDirection: "column", padding: 25 },
    table: {
      fontSize: 10,
      width: 550,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignContent: "stretch",
      flexWrap: "nowrap",
      alignItems: "stretch",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignContent: "stretch",
      flexWrap: "nowrap",
      alignItems: "stretch",
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 35,
    },
    cell: {
      // borderColor: "#cc0000",
      borderStyle: "solid",
      borderWidth: 2,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "auto",
      alignSelf: "stretch",
    },
    header: {
      backgroundColor: "#eee",
      // backgroundColor : "black"
    },
    headerText: {
      fontSize: 11,
      fontWeight: 1200,
      color: "#1a245c",
      // color: 'green',
      margin: 8,
    },
    tableText: {
      margin: 10,
      fontSize: 10,
      color: "black",
    },
  });
  return { styles };
};

export default Stylesfunc;
