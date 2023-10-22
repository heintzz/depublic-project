export default function SectionSeparator(props: { additionalClassname?: string }) {
  return <div className={`h-3 bg-gray-100 ${props.additionalClassname || ""}`}></div>;
}
