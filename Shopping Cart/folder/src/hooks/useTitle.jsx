import React, { useEffect } from 'react'

export const useTitle = (tagname) => {
        useEffect(() => {
          document.title = `${tagname} | Shopping Cart`
        }, [tagname])
        
  return null;
}

