import React from "react";
import formatAmount from "../utils/formatAmount";
import Button from "../components/Button";

const color = "#232946";

export default function InvoicePreview(props) {
  return (
    <div
      style={{
        width: 595,
        minHeight: 842,
        padding: 32,
        color,
        background: "var(--foreground)",
        borderRadius: "var(--outer-border-radius)",
        opacity: props.previewing && 0.5,
        pointerEvents: props.previewing && "none",
      }}
    >
      {/* header */}
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        {/* Invoicer */}
        <div style={{ flexGrow: 1 }}>
          <p style={{ fontSize: 24, fontWeight: "bold", color }}>
            {props.name}
          </p>
          <p contentEditable onBlur={props.handlers?.street}>
            {props.address?.street}
          </p>
          <p contentEditable onBlur={props.handlers?.zip}>
            {props.address?.zip}
          </p>
          {props.address?.phoneNumber && (
            <p contentEditable onBlur={props.handlers?.phone}>
              {props.address?.phoneNumber}
            </p>
          )}
        </div>
        {/* Invoice data */}
        <div style={{ disaply: "flex" }}>
          <p style={{ fontSize: 32, fontWeight: "bold", color }}>Invoice</p>
          <p
            style={{ fontSize: 14, color }}
            contentEditable
            onBlur={props.handlers?.invoiceNumber}
          >
            {props.invoiceNumber}
          </p>
          <p
            style={{ fontSize: 14, color }}
            contentEditable
            onBlur={props.handlers?.date}
          >
            {props.date}
          </p>
        </div>
      </div>
      <div style={{ height: 48 }} />
      {/* Bill to */}
      <div>
        <p>Bill to:</p>
        <p
          style={{ fontSize: 24, fontWeight: "bold", color }}
          contentEditable
          onBlur={props.handlers?.billName}
        >
          {props.billTo?.name}
        </p>
        <p
          style={{ fontWeight: "bold" }}
          contentEditable
          onBlur={props.handlers?.billCompanyName}
        >
          {props.billTo?.companyName}
        </p>
        <p contentEditable onBlur={props.handlers?.billStreet}>
          {props.billTo?.street}
        </p>
        <p contentEditable onBlur={props.handlers?.billZip}>
          {props.billTo?.zip}
        </p>
      </div>
      <div style={{ height: 48 }} />
      {/* Table  */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Table heaader */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: color,
            color: "#fffffe",
            padding: "8px",
          }}
        >
          <div style={{ flexGrow: 1 }}>
            <p>Description</p>
          </div>
          <div
            style={{
              borderLeftStyle: "solid",
              borderLeft: 4,
              borderColor: "#fffffe",
              padding: "0 8px",
              minWidth: 150,
            }}
          >
            <p>Amount</p>
          </div>
        </div>
        {/* Table rows */}
        <div style={{ flexGrow: 1 }}>
          {props.lineItems.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  padding: "8px",
                }}
              >
                <div style={{ flexGrow: 1 }}>
                  <p
                    contentEditable
                    onBlur={props.handleItemModification(item, index, "name")}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{ fontSize: 12 }}
                    contentEditable
                    onBlur={props.handleItemModification(
                      item,
                      index,
                      "description"
                    )}
                  >
                    {item.description}
                  </p>
                </div>
                <div
                  style={{
                    borderLeft: 4,
                    borderColor: "#fffffe",
                    padding: "0 8px",
                    minWidth: 150,
                  }}
                >
                  <p
                    contentEditable
                    onBlur={props.handleItemModification(item, index, "amount")}
                  >
                    {formatAmount(item.amount)}
                  </p>
                </div>
              </div>
            );
          })}
          <Button style={{ width: 200 }} onClick={props.handleRowAdd}>
            Add item
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            padding: "8px",
            paddingRight: 0,
          }}
        >
          <div style={{ flexGrow: 1 }} />
          <div
            style={{
              borderLeft: 4,
              minWidth: 150,
              backgroundColor: color,
              color: "#fffffe",
              padding: 8,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p style={{ flexGrow: 1, fontWeight: 700 }}>
              {formatAmount(
                props.lineItems.reduce(
                  (total, item) =>
                    total + +item.amount.toString().replace(/,/g, ""),
                  0
                )
              )}
            </p>
            <p>Total</p>
          </div>
        </div>
      </div>
      <div
        fixed
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
        }}
      >
        <p style={{ fontSize: 12 }}>Generated by</p>
      </div>
    </div>
  );
}
