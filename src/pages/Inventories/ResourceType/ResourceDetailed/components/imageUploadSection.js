// import React from 'react'

// const ImageUploadSection=(props)=> {
//     return (
//         <div>
//              <span>
//       <Row>
//         <Col md={4}>
//           <Form className="dropzone">
//             <Dropzone
//               onDrop={(acceptedFiles) => {
               
//                 handleAcceptedFiles(acceptedFiles);
//               }}
//             >
//               {({ getRootProps, getInputProps }) => (
//                 <div>
//                   <div className="dz-message needsclick" {...getRootProps()}>
//                     <input {...getInputProps()} />

//                     <div className="mb-3">
//                       <i className="display-4 text-muted ri-upload-cloud-2-line" />
//                     </div>
//                     {/* <h4>Drop files here or click to upload.</h4> */}
//                   </div>
//                 </div>
//               )}
//             </Dropzone>
//           </Form>
//         </Col>
//         <Col md={4}>
//           <FormGroup className="select2-container">
//             <Label className="itemlabels">Location in the image</Label>
//             <Select
//               // value={selectedGroup}

//               // onChange={(opt) => setLocationlabel(opt.label)}
//             //  options={}
              
//             // options={optionGroup}
//               options={props.diomLocation}
//               placeholder="Select Location "
//               classNamePrefix="select2-selection"
//             />
//           </FormGroup>
//         </Col>
//         <Col md={2}></Col>
//         <Col md={2}>
//           <Button
//             block
//             color="success"
//             className="waves-effect waves-light  mt-4 w-100"
//             // disabled={imglocationsbtn1}
//             onClick={uploadFile}
//             // onClick={() => {
//             //   setLocationstagsbuttonresult(true);
//             // }}
//           >
//             Save
//           </Button>
//           {/* {imglocationsincrement} */}
//         </Col>
//       </Row>
//     </span>
//         </div>
//     )
// }

// export default ImageUploadSection
