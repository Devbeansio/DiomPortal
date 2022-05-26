// import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

// import moment from "moment";
// const styles = StyleSheet.create({
//   page: { backgroundColor: "white", paddingRight: 40, paddingLeft: 40 },
//   section: { textAlign: "center", marginTop: 20, marginBottom: 20 },
//   inline: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   column: {
//     display: "flex",
//     flexDirection: "column",
//     // border: 1,
//     flexGrow: 2,
//   },
//   th: {
//     padding: 4,
//     color: "black",
//     fontWeight: "bold",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "flex-start",
//   },
//   td: {
//     padding: 4,
//     color: "black",
//     fontWeight: 400,
//     display: "flex",
//     flexDirection: "row",
//     fontSize: 12,
//     justifyContent: "flex-start",
//   },
//   SmallHeading: {
//     fontSize: 11,
//   },
//   SmallHeadingNumber: {
//     fontSize: 14,
//   },
// });

// /** A component Which will Generate Downloadbale PDF*/
// const GeneratePdf = (props) => {
//   const createdat = moment(props.InvoiceData.createdAt).format("YYYY-MM-DD ");
//   const bookingfrom = moment(props.InvoiceData.bookingFromTime).format(
//     "YYYY-MM-DD "
//   );
//   const bookingto = moment(props.InvoiceData.bookingToTime).format(
//     "YYYY-MM-DD "
//   );

//   return (
//     <Document>
//       <Page style={styles.page}>
//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View style={(styles.th, { marginTop: 40 })}>
//               <Text>
//                 {props.InvoiceData.customerData
//                   ? props.InvoiceData.customerData.username
//                   : null}
//               </Text>
//               {/* <Text>{props.booking}</Text> */}
//             </View>
//           </View>

//           <View style={[styles.inline]}>
//             <View style={styles.column}>
//               <View
//                 style={
//                   (styles.td, { fontWeight: 300, fontSize: 16, marginTop: 40 })
//                 }
//               >
//                 <Text style={{ width: 200 }}></Text>
//               </View>
//             </View>
//           </View>
//           <View style={styles.column}>
//             <View style={(styles.td, { marginTop: 40 })}>
//               <Text style={{ width: 100 }}>
//                 {props.InvoiceData.id ? props.InvoiceData.id : null}
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 300, fontSize: 16, marginTop: 40 })
//               }
//             >
//               <Text style={{ width: 400 }}>
//                 {props.InvoiceData.customerData
//                   ? props.InvoiceData.customerData.email
//                   : null}
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 200, fontSize: 12, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 400 }}>
//                 {props.InvoiceData.customerData
//                   ? props.InvoiceData.customerData.MobilePhone
//                   : null}
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>Resource Type</Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>
//                 {props.InvoiceData.resourceTypeName}
//               </Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>Location</Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>
//                 {" "}
//                 {props.InvoiceData.businessName
//                   ? props.InvoiceData.businessName
//                   : null}
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>Resource Name</Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>
//                 {props.InvoiceData.resourceName
//                   ? props.InvoiceData.resourceName
//                   : null}
//               </Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>Booking Date</Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>{createdat}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}> Unit Price</Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>
//                 {props.InvoiceData.unitPrice
//                   ? props.InvoiceData.unitPrice
//                   : null}
//               </Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>Booking Type</Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>
//                 {props.InvoiceData.bookingType
//                   ? props.InvoiceData.bookingType
//                   : null}
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 229 }}></Text>
//             </View>
//           </View>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>Booking Start</Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>{bookingfrom}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 229 }}></Text>
//             </View>
//           </View>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>Booking End</Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>{bookingto}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 200, fontSize: 12, marginTop: 45 })
//               }
//             >
//               <Text>Booking Details</Text>
//             </View>
//           </View>
//         </View>

//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>
//                 {props.InvoiceData.resourceTypeName
//                   ? props.InvoiceData.resourceTypeName
//                   : null}
//               </Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 200 }}></Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>
//                 {props.InvoiceData.total ? props.InvoiceData.total : null}
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>VAT</Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 200 }}></Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 150, fontSize: 10, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>
//                 {props.InvoiceData.vatPrice ? props.InvoiceData.vatPrice : null}
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={[styles.inline]}>
//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 260, fontSize: 16, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 120 }}>Total Payable</Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 260, fontSize: 16, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 180 }}></Text>
//             </View>
//           </View>

//           <View style={styles.column}>
//             <View
//               style={
//                 (styles.td, { fontWeight: 180, fontSize: 16, marginTop: 45 })
//               }
//             >
//               <Text style={{ width: 100 }}>
//                 {props.InvoiceData.balanceWithVat
//                   ? props.InvoiceData.balanceWithVat
//                   : null}
//               </Text>
//             </View>
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default GeneratePdf;






import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

import moment from "moment";
const styles = StyleSheet.create({
  page: { backgroundColor: "white", paddingRight: 40, paddingLeft: 40 },
  section: { textAlign: "center", marginTop: 20, marginBottom: 20 },
  inline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    // border: 1,
    flexGrow: 2,
  },
  th: {
    padding: 4,
    color: "black",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  td: {
    padding: 4,
    color: "black",
    fontWeight: 400,
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    justifyContent: "flex-start",
  },
  SmallHeading: {
    fontSize: 11,
  },
  SmallHeadingNumber: {
    fontSize: 14,
  },
});

/** A component Which will Generate Downloadbale PDF*/
const GeneratePdf = (props) => {
  const aaa = props.InvoiceData.erpInvoiceUrl
  ? props.InvoiceData.erpInvoiceUrl
  : null

  return (
    <Document>
      <Page style={styles.page}>
        <View style={[styles.inline]}>
          <View style={styles.column}>
            <View style={(styles.th, { marginTop: 40 })}>
              <Text>
                {aaa}
              </Text>
              {/* <Text>{props.booking}</Text> */}
            </View>
          </View>

          
         
        </View>
       
        
      </Page>
    </Document>
  );
};

export default GeneratePdf;
