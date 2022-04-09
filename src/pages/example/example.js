import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Deletee from "../../images/Icons/deletee.png";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Button, Form } from "react-bootstrap";
import "../../css/pos1.css";
import Editbtn from "../../images/Icons/edit.png";
import axiosClient from "../../config/axios";
import Checkbox from "@material-ui/core/Checkbox";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
// import { fetchInventoryShow } from "../../store/actions/inventoryShowAction";
import { fetchInventoryShow } from "../../store/actions/inventoryAction";
const isIndeterminate = (indeterminate) => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };

const Inventoryshow_page = () => {
  const history = useHistory();
  const [checkbox1, setCheckbox1] = useState([]);
  const [checkbox2, setCheckbox2] = useState([]);
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();

  const [multiple, setMultiple] = useState("");
  const [barierToken, setBarierToken] = useState("");
  const [productCategories, setProductCategories] = useState();
  const [searchData, setSearchData] = useState([]);
  const Inventories = useSelector((state) => state.inventory.inventories);
  const loading = useSelector((state) => state.inventory.loading);
  //inventoryShow
  const [test, setTest] = useState({
    columns: [
      {
        name: "Barcode",
        selector: "product_Barcode",
        sortable: true,
      },
      {
        name: "Name",
        selector: "product_Name",
        sortable: true,
      },
      {
        name: "Quantity",
        selector: "product_Quantity",
        sortable: true,
      },
      {
        name: "Product Category",
        selector: "product_Category_Name",
        sortable: true,
      },
      {
        name: "Purchase Price",
        selector: "product_Purchase_Price",
        sortable: true,
      },
      {
        name: "Sale price",
        selector: "product_Sale_Price",
        sortable: true,
      },
      {
        name: "Action",
        key: "edit",
        text: "Edit",
        className: "edit",
        width: 100,
        align: "left",
        sortable: false,
        cell: (record) => {
          return (
            <div>
              <Link
                to={`/Inventory/edit/${record.product_Barcode}`}
                className=""
              >
                <img variant="rounded" src={Editbtn} />
              </Link>
            </div>
          );
        },
      },
      // {
      //   name: "Edit",
      //   selector: "product_Barcode",
      //   cell: () => (

      //     <a
      //     href="/Inventory/inventory_product_edit_page/"
      //     >
      //       <img variant="rounded" src={Editbtn} />
      //     </a>
      //     // </a>
      //   ),
      // },
    ],
  });

  useEffect(() => {
    const myToken = localStorage.getItem("accessToken");

    setBarierToken(myToken);
    getCategory(myToken);
    dispatch(fetchInventoryShow());
  }, []);

  const searchByName = (item) => {

    const searchItem = item.target.value.toLowerCase();
    setSearchData(
      Inventories.filter((i) => {
        return i.product_Name.toLowerCase().match(searchItem);
      })
    );
  };

  const searchByCategory = (item) => {
    const searchItem = item.target.value.toLowerCase();
 
    setSearchData(
      Inventories.filter((i) => {
        return i.product_Category_Name.toLowerCase().match(searchItem);
      })
    );
  };

  // const searchItem = item.toLowerCase();
  // setSearchData(
  //   tableData.filter((i) => {
  //     return i.product_Name.toLowerCase().match(searchItem);

  // })
  // );
  // };

  // useEffect(() => {
  //   productgetfunct();
  // }, []);

  // *****************get category API start from here********************
 
  const getCategory = (barierToken) => {
    var config = {
      method: "get",
      url: "/category/",
      headers: {
        Authorization: "Bearer " + barierToken,
      },
    };

    axiosClient(config)
      .then(function (response) {
        setProductCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // **********************All product get API start************************
  
  const productgetfunct = () => {
    // var config = {
    //   method: "get",
    //   url: "/product/",
    //   headers: {
    //     // Authorization:
    //     //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMTkuMTYwLjkwLjMwXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjMxNTI0MTY0LCJleHAiOjE2MzIxMjg5NjQsIm5iZiI6MTYzMTUyNDE2NCwianRpIjoiNXB1amt4TkhGZzlBdEFuOCIsInN1YiI6IjYxMTNhNzE5MzE0YTAwMDA5ODAwMDYwNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.FZ0WHz0NicaDQw4PX83ey6xVTUVgfs8Fo3Jqi5zzrF8",
    //     Authorization: "Bearer " + barierToken,
    //   },
    // };
    // axiosClient(config)
    //   .then(function (response) {
    //     setTableData(response.data);
    // localStorage.setItem("Inventorytabledata", JSON.stringify(tableData));
    // const InventoryTableData = localStorage.getItem("Inventorytabledata");
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  // **********************All product get API End**************************

  // const handleRowClicked = row => {
  //   const updatedData = tableData.map(item => {
  //     if (row.id !== item.id) {
  //       return item;
  //     }
  //     return {
  //       ...item,
  //       toggleSelected: !item.toggleSelected
  //     };
  //   });
  //   setData(updatedData);
  // };

  if (loading) {
    return (
      <div className="spinner-center">
        <Spinner animation="border" className="spinnersize " />
      </div>
    );
  }
  return (
    <div className="inventoryshowpagemaindivpaddingcss">
      <Container fluid>
        <row className="inventoryshowpagerow ">
          <div className=" inventoryshowpageheading mt-4 mb-5">
            <h2>
              <b>Inventory</b>
            </h2>
          </div>
          <div className="inventoryshowbtnalignment mt-4">
            <Link to="/Inventory/inventory_additionwithtax">
              <Button variant="success inventoryaddbtn inventorieshowpagesaddbtn">
                <small>Add New Product</small>
              </Button>
            </Link>
          </div>
        </row>
      </Container>

      <Container fluid>
        <Card className="inventoryshpwpagecard ">
          <div>
            <Row className="mt-4">
              <div className="col-md-2">
                <h4 className="inventoryaddgeneralinfolabel ">
                  <h3> All Products</h3>
                </h4>
              </div>
              <div className="col-md-3">
                <input
                  className="form-control inventorypagesearchbox"
                  type="text"
                  placeholder="Search by Name"
                  aria-label="Search"
                  onFocus={() => {}}
                  onChange={searchByName}
                />
              </div>
              <div className="col-md-3">
                <Form.Group controlId="exampleForm.SelectCustom">
                  <select
                    onChange={searchByCategory}
                    class="form-select inventoryadditiontextboxheightwidth inventorylabelstextbox"
                    id="inputGroupSelect01"
                  >
                    <option selected>Choose Product Category</option>
                    {productCategories?.map((element) => {
                      return <option>{element.product_Category_Name}</option>;
                    })}
                  </select>
                </Form.Group>
              </div>
              <div className="col-md-4">
                {/* <img className="inventoryshowpagedelteicon" src={Deletee} /> */}
              </div>
            </Row>
          </div>

          <div className="inventoryshowpagetabletext" borderless>
            <DataTable
              headers
              columns={test.columns}
              // data={tableData}
              // data={searchData.length !== 0 ? searchData : tableData}
              data={searchData.length !== 0 ? searchData : Inventories}
              defaultSortField="title"
              sortIcon={<SortIcon />}
              selectableRows
              selectableRowsComponent={Checkbox}
              selectableRowsComponentProps={selectableRowsComponentProps}
              // onRowClicked={handleRowClicked}
            />
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Inventoryshow_page;
