import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";
// import Stylesfunc from "../usePdf.js";
const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },

  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  row: {
    flexDirection: "row",
    fontSize: "11px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    border: "1px solid #EEE",
    fontSize: "17px",
    width: "100%",
    borderStyle: "solid",
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  cell: {
    width: "15%",
  },
  headerText: {
    borderTop: "none",
    width: "15%",
    flexGrow: 1,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500,
  },
});
const GeneratePdf = (props) => {
  
  return (
    <Document>
      <Page style={styles.page} size="A4" wrap>
        <View style={styles.table}>
          <View style={(styles.row, styles.header)}>
            <Text style={(styles.headerText, styles.tableCellHeader)}>
              <b>ID</b>
            </Text>
            <Text style={(styles.headerText, styles.tableCellHeader)}>
              <b>Booking ID</b>
            </Text>
            <Text style={(styles.headerText, styles.tableCellHeader)}>
              <b>Booking Start</b>
            </Text>
            <Text style={(styles.headerText, styles.tableCellHeader)}>
              <b>Booking End</b>
            </Text>
            <Text style={(styles.headerText, styles.tableCellHeader)}>
              <b>Location Name</b>
            </Text>
            <Text style={(styles.headerText, styles.tableCellHeader)}>
              <b>Resource Name</b>
            </Text>
            <Text style={(styles.headerText, styles.tableCellHeader)}>
              <b>Customer Name</b>
            </Text>
            <Text style={(styles.headerText, styles.tableCellHeader)}>
              <b>Charged</b>
            </Text>
          </View>
       
          {props.data && props.data.map((element) => {
             const startTime = moment(element.fromTime).format("YYYY-MM-DD HH:mm");
             const  endTime = moment(element.toTime).format("YYYY-MM-DD HH:mm");
            return (
              
          
              
          <View style={styles.row}>
            <Text style={styles.cell}>1 </Text>
            <Text style={styles.cell}> {element.id} </Text>
                  <Text style={styles.cell}>{startTime}</Text>
                  <Text style={styles.cell}>{endTime}</Text>
            <Text style={styles.cell}>{element.businessName} </Text>
                <Text style={styles.cell}>{element.resourceName}</Text>
            <Text style={styles.cell}>{element.userName} </Text>
            <Text style={styles.cell}>{element.totalAmount} </Text>
        </View>
          )}) }  
          {/* <View style={styles.row}>
            <Text style={styles.cell}>Column 1 </Text>
            <Text style={styles.cell}>Column 2 </Text>
            <Text style={styles.cell}> Row 2</Text>
            <Text style={styles.cell}> Row 2</Text>
            <Text style={styles.cell}> Row 2</Text>
            <Text style={styles.cell}> Row 2</Text>
            <Text style={styles.cell}>Row 2</Text>
            <Text style={styles.cell}>Row 2</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>Row 3</Text>
            <Text style={styles.cell}>Row 3</Text>
            <Text style={styles.cell}>Row 3</Text>
            <Text style={styles.cell}> Row 3</Text>
            <Text style={styles.cell}>Row 3</Text>
            <Text style={styles.cell}>Row 3</Text>
            <Text style={styles.cell}> Row 3</Text>
            <Text style={styles.cell}>Row 3</Text>
          </View>*/}
        </View> 
      </Page>
    </Document>
  );
};

export default GeneratePdf;
