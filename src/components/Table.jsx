import { twMerge } from 'tailwind-merge'

const Table = ({ ...props }) => {
  return (
    <div className='relative w-full overflow-x-auto py-3 px-1'>
      <table
        className='w-full caption-bottom text-base xl:text-lg border border-midle-gray'
        {...props}
      />
    </div>
  )
}

const TableHeader = ({ ...props }) => {
  return <thead className='[&_tr]:border-b ' {...props} />
}

const TableHead = ({ ...props }) => {
  return (
    <th
      className='text-dark-gray h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]'
      {...props}
    />
  )
}

const TableBody = ({ ...props }) => {
  return <tbody className='[&_tr:last-child]:border-0' {...props} />
}

const TableRow = ({ ...props }) => {
  return (
    <tr
      className='hover:bg-midle-gray border-b border-midle-gray transition-colors'
      {...props}
    />
  )
}

// eslint-disable-next-line react/prop-types
const TableCell = ({ className, ...props }) => {
  return (
    <td
      className={twMerge(
        `p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,
        className
      )}
      {...props}
    />
  )
}

export { Table, TableHead, TableHeader, TableBody, TableRow, TableCell }
