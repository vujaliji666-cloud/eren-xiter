import { NextResponse } from "next/server"

export async function GET() {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY

    if (!API_KEY) {
      console.log("[v0] YouTube API key not found")
      return NextResponse.json({ error: "YouTube API key not configured" }, { status: 500 })
    }

    const handleResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=erenxiters&key=${API_KEY}`,
    )

    if (!handleResponse.ok) {
      console.log("[v0] Failed to search for channel")
      throw new Error("Failed to search for channel")
    }

    const handleData = await handleResponse.json()
    console.log("[v0] Handle search response:", JSON.stringify(handleData, null, 2))

    if (!handleData.items || handleData.items.length === 0) {
      console.log("[v0] No channel found for erenxiters")
      return NextResponse.json({ error: "Channel not found" }, { status: 404 })
    }

    const CHANNEL_ID = handleData.items[0].snippet.channelId
    console.log("[v0] Found channel ID:", CHANNEL_ID)

    // Get the channel's uploads playlist ID
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`,
    )

    if (!channelResponse.ok) {
      console.log("[v0] Failed to fetch channel data")
      throw new Error("Failed to fetch channel data")
    }

    const channelData = await channelResponse.json()
    console.log("[v0] Channel data response:", JSON.stringify(channelData, null, 2))

    if (!channelData.items || channelData.items.length === 0) {
      console.log("[v0] No channel items found")
      return NextResponse.json({ error: "Channel data not found" }, { status: 404 })
    }

    const uploadsPlaylistId = channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads

    if (!uploadsPlaylistId) {
      console.log("[v0] Could not find uploads playlist")
      throw new Error("Could not find uploads playlist")
    }

    console.log("[v0] Uploads playlist ID:", uploadsPlaylistId)

    // Get the latest video from the uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&order=date&key=${API_KEY}`,
    )

    if (!videosResponse.ok) {
      console.log("[v0] Failed to fetch videos")
      throw new Error("Failed to fetch videos")
    }

    const videosData = await videosResponse.json()
    console.log("[v0] Videos data response:", JSON.stringify(videosData, null, 2))

    if (!videosData.items || videosData.items.length === 0) {
      console.log("[v0] No videos found in playlist")
      return NextResponse.json({ error: "No videos found" }, { status: 404 })
    }

    const latestVideo = videosData.items[0]

    const videoData = {
      id: latestVideo.snippet.resourceId.videoId,
      title: latestVideo.snippet.title,
      description: latestVideo.snippet.description,
      thumbnail: latestVideo.snippet.thumbnails.high?.url || latestVideo.snippet.thumbnails.default?.url,
      publishedAt: latestVideo.snippet.publishedAt,
      url: `https://www.youtube.com/watch?v=${latestVideo.snippet.resourceId.videoId}`,
    }

    console.log("[v0] Successfully fetched video data:", videoData.title)
    return NextResponse.json(videoData)
  } catch (error) {
    console.error("[v0] YouTube API Error:", error)
    return NextResponse.json({ error: "Failed to fetch latest video" }, { status: 500 })
  }
}
