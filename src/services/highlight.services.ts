import { SummaryType } from "src/types/highlight.type";
import { ResponseSingleType } from "src/types/response.type";

const getHighlight = async (): Promise<ResponseSingleType<SummaryType>> => {
  const response = await fetch("http://localhost:5000/highlight");
  const data = await response.json();
  return data;
};

export const highlightServices = { getHighlight };
