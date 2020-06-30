import { useState, useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import getIn from "get-value";
import setIn from "set-value";
import InvoicePreview from "../components/InvoicePreview";
import Button from "../components/Button";
import SquirrelAlone from "../vectors/SquirrelAlone";
const Invoice = dynamic(() => import("../components/Invoice"), { ssr: false });
const PDFDownloadLink = dynamic(
  () =>
    import("@react-pdf/renderer").then(
      ({ PDFDownloadLink }) => PDFDownloadLink
    ),
  {
    ssr: false,
  }
);

function reducer(state, action) {
  switch (action.type) {
    case "update-name": {
      return { ...state, name: action.value };
    }
    case "update-property": {
      const newState = { ...state };

      setIn(newState, action.property, action.value);

      return newState;
    }
    case "add-new-line-item": {
      return {
        ...state,
        lineItems: [
          ...state.lineItems,
          {
            name: "New line item",
            description: "A simple description of the item",
            amount: 100,
          },
        ],
      };
    }
    case "update-line-item": {
      const newState = { ...state, lineItems: [...state.lineItems] };

      newState.lineItems.splice(action.index, 1, {
        ...newState.lineItems[action.index],
        [action.property]: action.value,
      });

      return newState;
    }
  }
  return state;
}

export default function Generate() {
  const { query, push } = useRouter();
  const [previewing, setPreviewing] = useState(false);
  const [formState, dispatch] = useReducer(reducer, {
    name: query.name,
    address: {
      street: "123 Examle drive",
      zip: "Ottawa, Ontario, Candaa, K2J 0T1",
      phoneNumber: "+1 123 111 2344",
    },
    billTo: {
    //   name: "Kevin Van Gundy",
    //   companyName: "Vercel Inc.",
    //   street: "340 S Lemon Ave #4133",
    //   zip: "Walnut, CA 91789",
      name: "Jim Halpert",
      companyName: "Dunder Mifflin Inc.",
      street: "1725 Slough Avenue",
      zip: "Scranton, PA",
    },
    invoiceNumber: Math.round(Math.random() * 100000),
    date: new Date().toLocaleString("us-EN", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    lineItems: [
      {
        name: "A line item",
        description: "A description of a line item",
        amount: 1900.19,
      },
    ],
  });

  useEffect(() => {
    if (query.name !== formState.name) {
      dispatch({
        type: "update-name",
        value: query.name,
      });
    }
  }, [query.name, formState.name]);

  const addRow = () => {
    dispatch({ type: "add-new-line-item" });
  };

  const itemModifierFactory = (item, index, property) => {
    return (event) => {
      process.env.NODE_ENV !== "production" &&
        console.log(
          `Changing ${item.name}.[${property}] from ${item[property]} to ${event.target.innerHTML}`
        );

      dispatch({
        type: "update-line-item",
        property,
        index,
        value: event.target.innerHTML,
      });
    };
  };

  const handlerFactory = (property) => {
    return (event) => {
      process.env.NODE_ENV !== "production" &&
        console.log(
          `Changing [${property}] from ${getIn(formState, property)} to ${
            event.target.innerHTML
          }`
        );

      dispatch({
        type: "update-property",
        property,
        value: event.target.innerHTML,
      });
    };
  };

  return (
    <>
      <section className="main">
        <div className="main__header">
          <h1 className="header__title">Generate an invoice</h1>
          <p className="header__description">
            Generating invoice for {formState.name}
          </p>
        </div>
        <div className="main__content">
          <div className="content__sidebar">
            <SquirrelAlone />
            {/* <PDFDownloadLink
              document={<Invoice {...formState} print />}
              fileName={`Invoice ${formState.invoiceNumber} - ${formState.billTo.companyName}`}
            >
              {({ url, loading, error }) => (
                console.log({ error, url }), (<Button loading>Download</Button>)
              )}
            </PDFDownloadLink> */}
            <div style={{ height: "1rem" }} />
            <Button
              secondary
              onClick={() => {
                setPreviewing(!previewing);
              }}
            >
              {previewing ? "Edit" : "Preview"}
            </Button>
            <div style={{ height: "1rem" }} />
            <Button secondary onClick={() => push("/")}>
              Home
            </Button>
          </div>
          <div className="content__pdf">
            <InvoicePreview
              previewing={previewing}
              {...formState}
              handleItemModification={itemModifierFactory}
              handleRowAdd={addRow}
              handlers={{
                street: handlerFactory("address.street"),
                zip: handlerFactory("address.zip"),
                phone: handlerFactory("address.phoneNumber"),
                billName: handlerFactory("billTo.name"),
                billCompanyName: handlerFactory("billTo.companyName"),
                billStreet: handlerFactory("billTo.street"),
                billZip: handlerFactory("billTo.zip"),
                invoiceNumber: handlerFactory("invoiceNumber"),
                date: handlerFactory("date"),
              }}
            />
            {previewing && <Invoice {...formState} />}
          </div>
        </div>
      </section>
      <style jsx>{`
        .main > .main__content > .content__sidebar {
          padding: 0 2rem;
        }

        .main > .main__content > .content__pdf {
          position: relative;
        }

        .main > .main__content {
          display: flex;
          height: 100%;
          width: 100%;
        }

        .main > .main__header > .header__title {
          font-size: 1.5rem;
        }

        .main > .main__header > .header__description {
          font-size: 0.75rem;
          font-weight: 300;
        }

        .main > .main__header {
          padding: 1rem;
        }

        .main > .main__header,
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main {
          height: 100vh;
        }
      `}</style>
    </>
  );
}
