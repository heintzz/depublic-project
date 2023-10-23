import { FiChevronRight } from "react-icons/fi";

interface BreadcrumbProps {
  elements: string[];
}

const breadcrumbsTicket = ["Ticket", "Detail Event"];

export default function Breadcrumbs(props: BreadcrumbProps) {
  const { elements } = props;

  return (
    <nav className="flex text-xs" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a href="/">Home</a>
        </li>
        {elements.map((element, index) => {
          return (
            <li key={index}>
              <div className="flex items-center">
                <FiChevronRight size="1.75em" color="text-neutral-300" />
                <a
                  href={`/${element}`}
                  className={`ml-1 ${
                    element === elements[elements.length - 1]
                      ? "font-semibold text-primary-500"
                      : ""
                  }`}
                >
                  {breadcrumbsTicket[index]}
                </a>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
