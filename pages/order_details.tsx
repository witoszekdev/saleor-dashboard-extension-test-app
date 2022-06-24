import { useRouter } from 'next/router'
import React from 'react'

export const OrderDetails = () => {
  const router = useRouter()

  return (
    <div>
      Order details

      <pre>
        {JSON.stringify(router.query, null, 4)}
      </pre>
    </div>
  )
}

export default OrderDetails
