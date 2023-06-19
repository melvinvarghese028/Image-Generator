import { useEffect, useState } from 'react'

export const useObserver = (ref, options) => {
  const { rootMargin } = options
  const [observerEntry, setObserverEntry] = useState(null)
  useEffect(() => {
    if (!ref?.current) return
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(
      ([entry]) => {
        setObserverEntry(entry)
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
        }
      },
      { rootMargin }
    )
    observer.observe(ref.current)
  }, [ref, rootMargin])
  return observerEntry
}
