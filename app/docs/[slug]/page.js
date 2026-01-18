import { getDocument } from "@/lib/doc";
import Link from "next/link";

const Docspage = async ({ params }) => {
  const { slug } = await params;
  const allDocs = getDocument(slug);
  const firstDocs = allDocs.find((doc) => doc.order === 1) || allDocs[0];
  return (
    <div>
      <h1>content</h1>
      <Link href={`/docs/${slug}/${firstDocs.id}`}> Start Learning</Link>
    </div>
  );
};

export default Docspage;
