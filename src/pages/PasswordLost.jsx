import React from "react";
import { Link } from "react-router-dom";

export default function PasswordLost() {
  return (
    <div>
      <h2>Well! That sucks! I don't have time to fix that, sorry!</h2>
      <Link to="/">Back</Link>
    </div>
  );
}
