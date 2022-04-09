
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
    page: { backgroundColor: "white", paddingRight: 40, paddingLeft: 40 },
    section: { textAlign: "center", marginTop: 20, marginBottom: 20 },
    inline: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    column: { display: "flex", flexDirection: "column" },
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
  
const NisarFile = (props) => {
    console.log('----->', props)
  return (
      
          <Document>
              <Page style={styles.page}>
                  <View style={[styles.inline]}>
                  <View style={styles.column}>
            <View style={(styles.th, { marginTop: 40 })}>
             
                          <Text>Devbeans</Text>
                          <Text> { props.title}</Text>
                          </View>
                      </View>
                      </View>
                          </Page>
          
              </Document>
     

      
  )
}

export default NisarFile