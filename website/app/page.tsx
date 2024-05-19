import Pagination from "./ui/pagination";
import ResourceList from "./ui/resource-list";
import Search from "./ui/search";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="flex flex-col flex-1 gap-4">
      <h2 className="text-neutral-900 dark:text-neutral-300 text-xl font-semibold">
        <i className="ri-fire-fill"></i> Latest
      </h2>
      <div>
        <Search />
      </div>
      <div className="flex-1">
        <ResourceList query={query} currentPage={currentPage} />
      </div>
    </div>
  );
}
