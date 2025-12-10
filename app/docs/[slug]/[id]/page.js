import ContentDisplay from "@/component/content/ContentDisplay";
import React from "react";

const Contentpage = async ({ params }) => {
  const getParams = await params;
  return <ContentDisplay params={getParams} />;
};

export default Contentpage;
