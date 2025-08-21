"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, Video, Users, MessageCircle, Phone, FileText, Zap, Crown, Copy, Check } from "lucide-react"
import { useState } from "react"
import YouTubeVideoPopup from "./youtube-video-popup"

interface FreeSectionPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function FreeSectionPopup({ isOpen, onClose }: FreeSectionPopupProps) {
  const [showPremiumMenu, setShowPremiumMenu] = useState(false)
  const [showPasswordPopup, setShowPasswordPopup] = useState(false)
  const [showVideoPopup, setShowVideoPopup] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const quickAccess = [
    {
      title: "Panel Files",
      description: "Download free panel files",
      icon: Download,
      action: () => window.open("https://sub2unlock.io/YsyI1", "_blank"),
    },
    {
      title: "How to Download Panel",
      description: "Step-by-step guide to download and setup panels",
      icon: FileText,
      action: () => window.open("https://www.youtube.com/watch?v=SvlcJlW8LxY", "_blank"),
    },
    {
      title: "Panel Videos",
      description: "Watch tutorial videos and guides",
      icon: Video,
      action: () => setShowVideoPopup(true),
    },
    {
      title: "Panel User & Pass",
      description: "Get free login credentials for testing",
      icon: Users,
      action: () => window.open("https://just2earn.com/DAILYPASS", "_blank"),
    },
    {
      title: "Discord",
      description: "Join our Discord community",
      icon: MessageCircle,
      action: () => window.open("https://discord.gg/wcByrXycNa", "_blank"),
    },
    {
      title: "WhatsApp",
      description: "Contact us on WhatsApp",
      icon: Phone,
      action: () => window.open("https://chat.whatsapp.com/HREZWrlVKUGArnsohpRdss", "_blank"),
    },
  ]

  const premiumOptions = [
    {
      title: "Discord Premium",
      description: "Get premium access via Discord",
      icon: MessageCircle,
      action: () => window.open("https://discord.gg/wcByrXycNa", "_blank"),
    },
    {
      title: "WhatsApp Premium",
      description: "Contact for premium upgrade via WhatsApp",
      icon: Phone,
      action: () => window.open("https://chat.whatsapp.com/HREZWrlVKUGArnsohpRdss", "_blank"),
    },
  ]

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-effect border-primary/20 animate-in fade-in-0 zoom-in-95 duration-500 ease-out data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
              <Zap className="w-8 h-8 text-primary" />
              {showPremiumMenu ? "Premium Upgrade" : "Free Panel"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-lg">
              {showPremiumMenu
                ? "Choose your preferred method to upgrade to premium access!"
                : "Access our free panel resources and join our community for support!"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6 px-2">
            {!showPremiumMenu ? (
              <>
                <div>
                  <h3 className="text-xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Free Resources & Support
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {quickAccess.map((option, index) => {
                      const Icon = option.icon
                      return (
                        <Card
                          key={index}
                          className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-500 ease-out group cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-in fade-in-0 slide-in-from-bottom-4 h-fit min-h-[160px]"
                          style={{ animationDelay: `${index * 100}ms` }}
                          onClick={option.action}
                        >
                          <CardHeader className="text-center pb-3">
                            <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                              <Icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 leading-tight break-words">
                              {option.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-center pt-0 pb-4">
                            <CardDescription className="text-sm leading-relaxed">{option.description}</CardDescription>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>

                <div className="text-center p-6 glass-effect border-secondary/20 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 mt-8">
                  <Crown className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-secondary mb-2">Want Premium Access?</h3>
                  <p className="text-muted-foreground mb-4">
                    Upgrade to Premium for advanced features, unlimited access, and priority support!
                  </p>
                  <Button
                    className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/80 hover:to-primary/80 glow-pulse"
                    onClick={() => setShowPremiumMenu(true)}
                  >
                    <Crown className="w-4 h-4 mr-2" />
                    Upgrade to Premium
                  </Button>
                </div>
              </>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Choose Your Upgrade Method
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {premiumOptions.map((option, index) => {
                    const Icon = option.icon
                    return (
                      <Card
                        key={index}
                        className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-500 ease-out group cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-in fade-in-0 slide-in-from-bottom-4 h-fit min-h-[180px]"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={option.action}
                      >
                        <CardHeader className="text-center pb-3">
                          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                            <Icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 leading-tight break-words">
                            {option.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center pt-0 pb-4">
                          <CardDescription className="text-base leading-relaxed">{option.description}</CardDescription>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowPremiumMenu(false)}
                    className="glass-effect border-primary/20 bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    Back to Free Panel
                  </Button>
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

      <Dialog open={showPasswordPopup} onOpenChange={setShowPasswordPopup}>
        <DialogContent className="max-w-md glass-effect border-primary/20 animate-in fade-in-0 zoom-in-95 duration-500 ease-out">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Panel Credentials
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Use these credentials to access the free panel
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-6">
            <div className="p-4 glass-effect border-primary/20 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Username:</label>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="flex-1 p-2 bg-background/50 rounded border text-sm">in video</code>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard("in video")}
                      className="glass-effect border-primary/20"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground">Password:</label>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="flex-1 p-2 bg-background/50 rounded border text-sm">dailypass56</code>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard("dailypass56")}
                      className="glass-effect border-primary/20"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>These credentials are for testing purposes only.</p>
              <p>For premium access with unlimited features, upgrade now!</p>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
              onClick={() => window.open("https://just2earn.com/DAILYPASS", "_blank")}
            >
              <Users className="w-4 h-4 mr-2" />
              Access Panel
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowPasswordPopup(false)}
              className="glass-effect border-primary/20 bg-transparent hover:scale-105 transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <YouTubeVideoPopup isOpen={showVideoPopup} onClose={() => setShowVideoPopup(false)} />
    </>
  )
}
