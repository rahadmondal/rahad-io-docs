import React from "react";

const Docspage = async ({ params }) => {
  const Pageparams = await params;

  console.log(Pageparams);
  return <div>content</div>;
};

export default Docspage;
