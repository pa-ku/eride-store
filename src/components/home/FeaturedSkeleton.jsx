export default function FeaturedSkeleton() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-max gap-5">
        <div className="space-y-2 ">
          <div className="animate-skeleton  h-8 w-32 rounded-lg"></div>
          <div className="animate-skeleton h-8 w-32 rounded-lg"></div>
          <div className="animate-skeleton h-44 w-80 rounded-lg"></div>
          <div className="animate-skeleton h-14 w-full md:w-32 rounded-lg"></div>
        </div>
        <div className="animate-skeleton rounded-lx h-80 w-96 rounded-lg"></div>
      </div>
    </>
  )
}
