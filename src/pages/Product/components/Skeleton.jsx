export default function ShowcaseSkeleton() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex gap-5">
        <div className="animate-skeleton size-96 rounded-lg"></div>
        <div className="flex flex-col gap-5">
          <div className="animate-skeleton h-10 w-96 rounded-lg"></div>
          <div className="animate-skeleton h-44 w-96 rounded-lg"></div>
          <div className="animate-skeleton h-10 w-64 rounded-lg"></div>
          <div className="animate-skeleton h-10 w-64 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}
