"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, X } from "lucide-react"

interface PremiumContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function PremiumContactPopup({ isOpen, onClose }: PremiumContactPopupProps) {
  const handleDiscordClick = () => {
    window.open("https://discord.gg/wcByrXycNa", "_blank")
  }

  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/HREZWrlVKUGArnsohpRdss", "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-effect border-primary/20 max-w-md mx-auto bg-background/95 backdrop-blur-xl">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute -top-2 -right-2 h-8 w-8 rounded-full hover:bg-primary/10"
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
            Contact for Premium
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <p className="text-center text-foreground/80 mb-6">
            Choose your preferred method to contact us about premium access
          </p>

          <div className="grid gap-4">
            <Button
              onClick={handleDiscordClick}
              className="w-full h-16 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white smooth-hover group"
            >
              <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="font-semibold">Join Discord Server</div>
                <div className="text-sm opacity-90">Get instant support</div>
              </div>
            </Button>

            <Button
              onClick={handleWhatsAppClick}
              className="w-full h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white smooth-hover group"
            >
              <Phone className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="font-semibold">WhatsApp Group</div>
                <div className="text-sm opacity-90">Direct messaging</div>
              </div>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
