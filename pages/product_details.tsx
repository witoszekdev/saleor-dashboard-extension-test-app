import { useRouter } from 'next/router'
import React from 'react'

export const ProductDetails = () => {
  const router = useRouter()

  return (
    <div>
      Product details

      <pre>
        {JSON.stringify(router.query, null, 4)}
      </pre>
    </div>
  )
}

export default ProductDetails
