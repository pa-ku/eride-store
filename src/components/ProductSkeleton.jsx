export default function ProductSkeleton() {
  return (
    <>
      <div className="relative w-96 rounded-xl p-2 shadow-md duration-300 hover:shadow-lg md:w-64">
        <div className="animate-skeleton h-52  w-full rounded-xl bg-gray-300"></div>

        <div className="flex flex-col gap-1 py-2">
          <span className="animate-skeleton rounded-xl h-6 w-44"></span>
          <span className="animate-skeleton rounded-xl h-6 w-20"></span>
          <span className="animate-skeleton rounded-xl h-6 w-28"></span>
        </div>
      </div>
    </>
  )
}
