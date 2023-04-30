interface SnippetProps {
  title: string
  subtext: string
  border: string
}

export const Snippet = ({ title, subtext, border }: SnippetProps) => {
  return (
    <div className=" ">
      <div className="text-gray-300 text-base">{title}</div>

      <div
        className={`text-black text-lg font-semibold border-l-4 border-${border}-500 pl-2`}
      >
        {subtext}
      </div>
    </div>
  )
}
