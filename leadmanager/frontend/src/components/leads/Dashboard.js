import React, { Fragment } from "react";
import Form from "./Form";
import Leads from "./Leads";

export default function Dashboard() {
  return (
    <div style={{ alignSelf: "stretch" }}>
      <Form />
      <Leads />
    </div>
  );
}
