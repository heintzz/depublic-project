export default function SectionSeparator(props: { clsx?: string }) {
  return <div className={`h-3 bg-gray-100 ${props.clsx || ""}`}></div>;
}
