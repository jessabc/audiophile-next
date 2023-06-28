"use client"
import { useEffect, useRef, useState } from "react"


interface FadeInBottomSectionProps {
  children: React.ReactNode
}


export  function FadeInBottomSection({children}: FadeInBottomSectionProps) {
  const [isVisible, setVisible] = useState(true);
  const domRef =   useRef<HTMLDivElement | null>(null);

  // https://stackoverflow.com/questions/73051303/intersection-observer-in-typescript-throws-error-in-useref
  useEffect(() => {
    const thisDomRef = domRef
    if (!thisDomRef.current) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    })
    
    if (thisDomRef.current) observer.observe(thisDomRef?.current)

    return () => {
      if (thisDomRef.current) observer.unobserve(thisDomRef?.current)
    }
  }, [])

  return (
    <div
      className={`fade-in-bottom-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  )
}

// The ref value 'domRef.current' will likely have changed by the time this effect cleanup function runs. If 
// this ref points to a node rendered by React, copy 'domRef.current' to a variable inside the effect, and use that variable 
// in the cleanup function.  react-hooks/exhaustive-deps 