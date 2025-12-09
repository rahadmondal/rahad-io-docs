import DocsLayout from "@/component/Layouts/DocsLayout";
import React from "react";

const Docslayout = async ({ children, params }) => {
  const { slug } = await params;
  return <DocsLayout slug={slug}>{children}</DocsLayout>;
};

export default Docslayout;
