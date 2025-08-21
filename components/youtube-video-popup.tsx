"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Play, ExternalLink, Calendar, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"

interface YouTubeVideoPopupProps {
  isOpen: boolean
  onClose: () => void
}

interface VideoData {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  url: string
}

export default function YouTubeVideoPopup({ isOpen, onClose }: YouTubeVideoPopupProps) {
  const [videoData, setVideoData] = useState<VideoData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen && !videoData) {
      fetchLatestVideo()
    }
  }, [isOpen])

  const fetchLatestVideo = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/youtube/latest-video")

      if (!response.ok) {
        throw new Error("Failed to fetch video")
      }

      const data = await response.json()
      setVideoData(data)
    } catch (err) {
      setError("Failed to load latest video. Please try again later.")
      console.error("Error fetching video:", err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl glass-effect border-primary/20 animate-in fade-in-0 zoom-in-95 duration-500 ease-out">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
            <Play className="w-6 h-6 text-primary" />
            Latest Panel Video
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Watch the latest tutorial from Eren Xiters YouTube channel
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-2 text-muted-foreground">Loading latest video...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="text-red-400 mb-4">{error}</div>
              <Button
                onClick={fetchLatestVideo}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
              >
                Try Again
              </Button>
            </div>
          )}

          {videoData && !loading && (
            <div className="space-y-6">
              {/* Video Thumbnail */}
              <div className="relative group cursor-pointer" onClick={() => window.open(videoData.url, "_blank")}>
                <img
                  src={videoData.thumbnail || "/placeholder.svg"}
                  alt={videoData.title}
                  className="w-full h-64 object-cover rounded-lg border border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-tight">{videoData.title}</h3>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Published on {formatDate(videoData.publishedAt)}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed line-clamp-3">{videoData.description}</p>

                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open(videoData.url, "_blank")}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 glow-pulse"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => window.open("https://www.youtube.com/@erenxiters", "_blank")}
                    className="glass-effect border-primary/20 hover:border-primary/40"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Channel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="glass-effect border-primary/20 bg-transparent hover:scale-105 transition-all duration-300"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
