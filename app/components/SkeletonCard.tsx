export const SkeletonCard = () => {
  return (
    <div className='bg-transparent dark:bg-secondary min-h-60 grid h-full rounded-sm shadow-sm'>
      <div className='max-h-40 w-auto bg-gray-200 dark:bg-gray-700 animate-pulse'></div>
      <div className='self-end px-4 pb-4 items-start flex flex-col'>
        <div className='h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded my-4 animate-pulse'></div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'></div>
          <div className='h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'></div>
          <div className='h-4 w-3/5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'></div>
        </div>
      </div>
    </div>
  )
}
