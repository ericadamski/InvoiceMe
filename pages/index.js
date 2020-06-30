import Router from "next/router";
import Head from "next/head";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "styled-jsx/css";
import Button from "../components/Button";
import Label from "../components/Label";
import Squirrel from "../vectors/Squirrel";

const { className: formClassName, styles: formStyles } = css.resolve`
  background: var(--foreground);
  border-radius: var(--outer-border-radius);
  padding: 2rem 3rem;
  min-width: 400px;
`;

const { className: inputClassName, styles: inputStyles } = css.resolve`
  background: var(--paragraph);
  border: none;
  border-radius: var(--inner-border-radius);
  padding: 0.75rem 0.5rem;
  font-size: 1rem;
  color: var(--foreground);
  width: 100%;
`;

const FormSchema = Yup.object({
  name: Yup.string().required("Please start with your name."),
});

export default function Home() {
  const handleSubmit = ({ name }) => {
    Router.push(`/g?name=${name}`);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>InvoiceMe | Generate invoices free</title>
        <meta
          key="viewport"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta
          key="theme-color"
          name="theme-color"
          content="var(--background)"
        />
        <meta name="twitter:site" key="twitter:site" content="@zealigan" />
        <meta
          name="twitter:card"
          key="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="og:title"
          key="og:title"
          content="InvoiceMe | Generate invoices free"
        />
        <link key="favicon" rel="shortcut icon" href="/logo.png" />
        <meta
          name="og:url"
          key="og:url"
          content="https://invoiceme.vercel.app"
        />
        <meta
          name="description"
          key="description"
          content="Generate simple invoices - free"
        />
        <meta
          name="og:description"
          key="og:description"
          content="Generate simple invoices - free"
        />
        <meta
          name="og:image"
          key="og:image"
          content="https://invoiceme.vercel.app/social.png"
        />
      </Head>
      <section className="main">
        <div className="main__header">
          <h1 className="header__title">Generate an invoice</h1>
          <p className="header__description">Enter your name to get started</p>
        </div>
        <div className="main__form">
          <Formik
            validationSchema={FormSchema}
            initialValues={{ name: "" }}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className={formClassName}>
                <Label htmlFor="name" error={touched.name && errors.name}>
                  Name
                </Label>
                <Field
                  name="name"
                  className={inputClassName}
                  placeholder="Your name"
                />
                <div style={{ height: "1.5rem" }} />
                <Button type="submit">Get invoice</Button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="main__image">
          <div style={{ height: "2rem" }} />
          <Squirrel />
        </div>
      </section>
      {inputStyles}
      {formStyles}
      <style jsx>{`
        .main > .main__form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--background);
          flex-grow: 1;
        }

        .main > .main__header > .header__description {
          font-size: 1.25rem;
          font-weight: 300;
        }

        .main > .main__header > .header__title {
          font-size: 3rem;
          font-weight: bold;
        }

        .main > .main__header,
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .main {
          height: 100vh;
        }
      `}</style>
    </>
  );
}
