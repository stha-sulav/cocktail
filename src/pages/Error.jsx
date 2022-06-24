import React from "react";

import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h1>No Page Found</h1>
        <Link to={"/"} className="btn btn-primary">
          back home
        </Link>
      </div>
    </div>
  );
};
