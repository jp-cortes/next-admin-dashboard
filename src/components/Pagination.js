import React, { useEffect } from 'react';

export default function Pagination({
    offSet, 
    setOffSet,
    PRODUCTS_LIMIT,
    page, 
    setPage,
    allResults
}) {
    const PAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const plusPage = (p) => {        
        if(page !== p) {
            setPage(p);
        }
        
}
const nextPage = () => {        
        setPage(page + 1);
}
const previousPage = () => {
    if(page >= 1) {
        setPage(page - 1);
    }
}
useEffect(() => {
    setOffSet(PRODUCTS_LIMIT * page);
}, [page, PRODUCTS_LIMIT, offSet])

    
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <div className="flex flex-1 justify-between sm:hidden">
    <button
    onClick={previousPage}
    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
        Previous        
        </button>
    <button
    onClick={nextPage}
     className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
        Next
        </button>
  </div>
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-gray-700"> 
        Showing
        {' '} 
        <span className="font-medium">{!offSet ? '1' : offSet}</span>
        {' '}
        to
        {' '}
        <span className="font-medium">{offSet + 10}</span>{' '}
        of {' '}
        <span className="font-medium">{allResults}</span>
        {' '}
        Products
      </p>
    </div>
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        {page > 1 &&  <button 
        onClick={previousPage}
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
          
        </button>}
        
        {PAGES.map((number, index) => <Pages key={index} pageNumber={number} callBack={() => plusPage(number) }/>)}
       {page === 9 ? null : <button 
        onClick={nextPage}
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
          
        </button>}
      </nav>
    </div>
  </div>
</div>
  )
}
const Pages = ({pageNumber, callBack}) => {
    return (
        <button onClick={callBack}
        class="focus:bg-amber-600 relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ">
            {pageNumber}
            </button>
    )
}