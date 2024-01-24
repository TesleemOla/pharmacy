import React from 'react'
import { isAuthenticated } from '@/utils/Auth'
const DashboardIndex = () => {
  return (
    <div>DashboardIndex</div>

  )
}

export default isAuthenticated(DashboardIndex)