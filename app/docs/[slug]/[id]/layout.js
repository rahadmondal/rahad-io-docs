import DocsLayout from "@/component/Layouts/DocsLayout";
import React from "react";

const Docslayout = async ({ children, params }) => {
  const getParams = await params;
  return <DocsLayout params={getParams}>{children}</DocsLayout>;
};

export default Docslayout;
