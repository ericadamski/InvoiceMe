import React from "react";

export default function Styles() {
  return (
    <style global jsx>{`
      *[contenteditable="true"] {
        position: relative;
      }

      *[contenteditable="true"]::before {
        content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA4LjcwODY1VjExSDIuMjkxMzVMOS4wNDkzIDQuMjQyMDVMNi43NTc5NSAxLjk1MDdMMCA4LjcwODY1Wk0xMC44MjEzIDIuNDcwMDdDMTEuMDU5NiAyLjIzMTc3IDExLjA1OTYgMS44NDY4MyAxMC44MjEzIDEuNjA4NTNMOS4zOTE0NyAwLjE3ODcyNUM5LjE1MzE3IC0wLjA1OTU3NTEgOC43NjgyMyAtMC4wNTk1NzUxIDguNTI5OTMgMC4xNzg3MjVMNy40MTE3NSAxLjI5NjlMOS43MDMxIDMuNTg4MjVMMTAuODIxMyAyLjQ3MDA3VjIuNDcwMDdaIiBmaWxsPSIjMjMyOTQ2Ii8+PC9zdmc+");
        position: absolute;
        width: 11px;
        height: 11px;
        left: -16px;
        display: none;
      }
      *[contenteditable="true"]:hover::before {
        display: unset;
      }

      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local("Poppins Light"), local("Poppins-Light"),
          url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local("Poppins Medium"), local("Poppins-Medium"),
          url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local("Poppins Bold"), local("Poppins-Bold"),
          url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      :root {
        --background: #232946;
        --foreground: #fffffe;
        --paragraph: #b8c1ec;
        --button: #eebbc3;
        --stroke: #121629;
        --error: #e0719e;
        --font: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
          "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        --inner-border-radius: 0.25rem;
        --outer-border-radius: 0.5rem;
      }
      *,
      * > * {
        box-sizing: border-box;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        padding: 0;
        margin: 0;
      }
      html,
      body {
        margin: 0;
        padding: 0;
        color: var(--foreground);
        box-sizing: border-box;
        font-family: var(--font);
        background: var(--background);
        overflow-x: hidden;
        width: 100vw;
      }
      a {
        font-weight: bold;
        display: inline-flex;
        color: var(--foreground);
      }
      a:visited {
        color: var(--foreground);
      }
      input::placeholder {
        color: var(--foreground);
      }
    `}</style>
  );
}
