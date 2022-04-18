// import React, { useState } from "react";
// import Select from "react-select";
// import "react-toastify/dist/ReactToastify.css";
// import { Row, Col, Button, FormGroup, Label, Form } from "reactstrap";
// import Dropzone from "react-dropzone";

// import "react-toastify/dist/ReactToastify.css";

// import { DIOM_BASED_URLS } from "../../config/url";
// import "../../pages/Locations/css/MyLocationDetailed.css";

// const LocationTagView = (props) => {
//   const { e } = props;

//   const locationedittagfunc = () => {
//     fetch(
//       `${DIOM_BASED_URLS}/admin-business-locations/${id}/${locationImgId}`,
//       {
//         method: "PATCH",
//         headers: {
//           Accept: "application/json, text/plain",
//           "Content-Type": "application/json;charset=UTF-8",
//           Authorization: "Bearer " + token,
//         },
//         body: JSON.stringify({
//           locationTag: locationEditTag,
//         }),
//       }
//     )
//       .then((result3) => {
//         if (result3.status === 200) {
//           toast.success("Updated Successfully");
//           getlocations();
//         } else if (result3.status === 204) {
//           toast.success("Updated Successfully");
//           getlocations();
//         } else {
//           toast.error(" Something went wrong");
//         }

//         setEnableEdit(false);
//         setModal_static(false);

//         // getdiomBrandfunc()
//       })
//       .catch((error) => toast.error(" Something went wrong"));
//   };

//   const imagedeletedfunc = (_id) => {
//     fetch(`${DIOM_BASED_URLS}/admin-business-locations/${id}/${_id}`, {
//       method: "DELETE",
//       headers: {
//         Accept: "application/json, text/plain",
//         "Content-Type": "application/json;charset=UTF-8",
//         Authorization: "Bearer " + token,
//       },
//     })
//       .then((result3) => {
//         toast.success("Deleted Successfully");
//         getlocations();
//       })
//       .catch((error) => toast.error(" Something went wrong"));
//   };

//   return (
//     <>
//       <Row>
//         <Col md={4}>
//           <Form className="dropzone">
//             <Dropzone
//               onDrop={(acceptedFiles) => {
//                 // handleAcceptedFiles(acceptedFiles);
//               }}
//             >
//               {({ getRootProps, getInputProps }) => (
//                 <div>
//                   <div className="dz-message needsclick" {...getRootProps()}>
//                     <input {...getInputProps()} />
//                     <img
//                       src={e.imageUrl}
//                       alt="image"
//                       style={{
//                         height: 250,
//                         width: 200,
//                       }}
//                     />
//                   </div>
//                 </div>
//               )}
//             </Dropzone>
//           </Form>
//           <div className="dropzone-previews mt-3" id="file-previews"></div>
//         </Col>
//         <Col md={1}></Col>
//         <Col md={4}>
//           <FormGroup className="select2-container">
//             <Label className="locationstatus">Location Tags</Label>
//             {/* {enableEdit? */}
//             <Select
//               value={{ label: locationEditTag || e.locationTag }}
//               onChange={(opt) => handellocationeditfunc(opt.label, e._id)}
//               options={diomBrand}
//               classNamePrefix="select2-selection"
//             />
//           </FormGroup>
//         </Col>

//         <Col md={1}></Col>
//         <Col md={2}>
//           <Button
//             type="button"
//             color="dark"
//             outline
//             className="waves-effect waves-light me-1 mylocationdetailsavebtn w-100"
//             onClick={() => imagedeletedfunc(e._id)}
//           >
//             Remove
//           </Button>
//           {/* {enableEdit? */}

//           <Button
//             block
//             color="success"
//             className="waves-effect waves-light mylocationdetailsavebtn  w-100"
//             onClick={locationedittagfunc}
//           >
//             Save
//           </Button>
//           {/* :
//         <Button
//           block
//           color="success"
//           className="waves-effect waves-light mylocationdetailsavebtn  w-100"
//           // onClick={locationedittagfunc}
//           onClick={locationTagEditButtonfunc}
//         >
//           Edit
//         </Button>
//         } */}
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default LocationTagView;
