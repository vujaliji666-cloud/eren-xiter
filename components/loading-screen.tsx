"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setLoading(false)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 backdrop-blur-sm">
      <div className="text-center space-y-8 animate-in fade-in-0 zoom-in-95 duration-1000">
        <div className="relative">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/eren-xiter-logo.png"
              alt="Eren Xiter Logo"
              width={300}
              height={150}
              className="animate-pulse"
              priority
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 blur-2xl rounded-full animate-pulse" />
        </div>

        <div className="w-80 mx-auto space-y-4">
          <div className="h-1 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out rounded-full shadow-lg shadow-primary/50"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
          <p className="text-muted-foreground text-sm font-medium">Loading {progress}%</p>
        </div>
      </div>
    </div>
  )
}
