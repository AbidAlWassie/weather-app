export default function Loading() {
  return (
    <div className="min-h-[92vh] flex flex-col gap-4 mx-6 pt-12 pb-24">
      <div className="flex flex-col gap-4">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>

      <div className="flex flex-wrap flex-row gap-4">
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
      </div>

      <div className="flex gap-4">
        <div className="skeleton h-12 w-32"></div>
        <div className="skeleton h-12 w-32"></div>
      </div>
    </div>
  )
}