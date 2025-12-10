import ContentDisplay from "@/component/content/ContentDisplay";
import React from "react";

const Contentpage = async ({ params }) => {
  const getParams = await params;
  const { id } = getParams;
  return <ContentDisplay id={id} />;
};

export default Contentpage;
