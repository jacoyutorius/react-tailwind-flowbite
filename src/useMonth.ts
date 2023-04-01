import { useState } from 'react'

const useMonth = () => {
  const [month, setMonth] = useState("202304")

  return {
    month,
    setMonth
  }
}

export default useMonth