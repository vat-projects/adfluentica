import Link from "next/link";
import React from "react";
import "@/styles/404.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="_container">
        <div className="not-found__body">
          <h1>404</h1>
          <div className="col">
            <h2>Page not found</h2>
            <p>
              Oh, we can't seem to find the page you're looking for. <br />
              Try going back to the previous page or:
            </p>
          </div>
        </div>
        <div className="button">
          <Link href="/">Go to home page</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
