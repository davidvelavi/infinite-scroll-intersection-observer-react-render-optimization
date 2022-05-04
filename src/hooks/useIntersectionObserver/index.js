import { useEffect, useState } from "react"

export const useIntersectionObserver = ({scrollingArea}) => {
  const [observer, setObserver] = useState(null)
  const [isIntersecting, setIsIntersecting]= useState(false)


  useEffect(()=>{
    const options = {
      root: scrollingArea,
      rootMargin: '500px',
      threshold: 0.5
    }
    const handleIntersectionObserver = ([entries], observer)=>{  
      setIsIntersecting(entries.isIntersecting);
    }
    setObserver(new IntersectionObserver(handleIntersectionObserver, options))
  },[scrollingArea])

  return {observer, isIntersecting}
}