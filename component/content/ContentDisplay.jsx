import { getContent } from "@/lib/doc";
import React from "react";

const ContentDisplay = ({ params }) => {
  const { id, slug } = params;

  const content = getContent(id, slug);
  return (
    <div>
      ContentDisplay , : {id} ,: {slug}
    </div>
  );
};

export default ContentDisplay;
