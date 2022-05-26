import { DIOM_BASED_URLS } from "../config/url";
import moment from "moment";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all resource in DIOM
 */

export const getInvoices = async (
  size = 30,
  page = 1,
  token = "",
  applyFilter = false
) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/invoices?size=${size}&page=${page}`,

    {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!res.ok) {
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();

  const Invoiceslistingdata = resJson.data.map((element, index) => ({
    ...element,
    id: index + 1,
    invoiceId: element.id,
    bookingId: element.bookingId,
    totalPaid: element.total,
    paymentMethod: element.paymentMethod,
    createdAt: moment(element.createdAt).format("YYYY-MM-DD "),
    customerData: element.customerName,
  }));

  return {
    data: Invoiceslistingdata,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};

export const getInvoice = async (size = 30, page = 1, token = "", id) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/invoices/${id}`,

    {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!res.ok) {
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();

  const InvoiceData = resJson.data;
  // console.log("InvoiceData", InvoiceData);

  return {
    data: InvoiceData,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};
