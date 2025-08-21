"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import LoadingScreen from "@/components/loading-screen"
import ParticleBackground from "@/components/particle-background"
import FreeSectionPopup from "@/components/free-section-popup"
import PremiumContactPopup from "@/components/premium-contact-popup"
import { Crown, Zap, Shield, Star, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const [showFreePopup, setShowFreePopup] = useState(false)
  const [showPremiumPopup, setShowPremiumPopup] = useState(false)

  const scrollToPremium = () => {
    const premiumSection = document.getElementById("premium")
    if (premiumSection) {
      premiumSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  return (
    <>
      <LoadingScreen />
      <ParticleBackground />

      <div className="min-h-screen relative">
        {/* Header */}
        <header className="fixed top-0 w-full z-40 backdrop-blur-md bg-background/20 border-b border-primary/10">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/eren-xiter-logo.png"
                alt="Eren Xiter Logo"
                width={80}
                height={40}
                className="smooth-hover"
                priority
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-foreground/80 hover:text-foreground transition-all duration-300 nav-smooth relative group py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#services"
                className="text-foreground/80 hover:text-foreground transition-all duration-300 nav-smooth relative group py-2"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-foreground/80 hover:text-foreground transition-all duration-300 nav-smooth relative group py-2"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-foreground transition-all duration-300 nav-smooth relative group py-2"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-20 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="relative">
                <div className="flex justify-center mb-8">
                  <Image
                    src="/images/eren-xiter-logo.png"
                    alt="Eren Xiter Logo"
                    width={400}
                    height={200}
                    className="float-animation"
                    priority
                  />
                </div>
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl rounded-full" />
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Professional Free Fire Panel Developer
              </p>

              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Unlock the ultimate Free Fire experience with our premium panels, tools, and resources. Join thousands
                of satisfied gamers worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 glow-pulse text-lg px-8 py-6 smooth-hover"
                  onClick={() => setShowFreePopup(true)}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Free Panel
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="glass-effect border-primary/20 hover:border-primary/40 text-lg px-8 py-6 bg-transparent smooth-hover"
                  onClick={scrollToPremium}
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Go Premium
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose between our free resources or unlock premium features
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Section */}
              <Card
                className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-500 cursor-pointer group hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                onClick={() => setShowFreePopup(true)}
              >
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Free Panel</CardTitle>
                  <CardDescription className="text-lg">Get started with limited gaming features</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      Aimbot features (50 uses/day)
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      Sniper tools (limited)
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      Basic ESP & Chams
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      Community support
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary smooth-hover">
                    Access Free Panel
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Section */}
              <Card
                id="premium"
                className="glass-effect border-secondary/20 hover:border-secondary/40 transition-all duration-500 group relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20"
              >
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    PREMIUM
                  </div>
                </div>
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Crown className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Premium Access</CardTitle>
                  <CardDescription className="text-lg">Unlimited gaming features and premium support</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-secondary mr-2" />
                      Unlimited Aimbot Head, Drag, V2 & AimX
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-secondary mr-2" />
                      All Sniper Tools (AWM-Y, AWM, M82B Quick Switch)
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-secondary mr-2" />
                      Full Chams Menu & ESP (Blue, Red, 2D, Moco)
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-secondary mr-2" />
                      Advanced Settings & Mobile Control
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-secondary mr-2" />
                      Priority support & instant updates
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/80 hover:to-primary/80 glow-pulse smooth-hover"
                    onClick={() => setShowPremiumPopup(true)}
                  >
                    Upgrade to Premium
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section id="developer" className="py-20 bg-gradient-to-b from-background/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                Meet the Developer
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional Free Fire panel development with years of experience
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          Eren Xiter
                        </h3>
                        <p className="text-xl text-muted-foreground">Professional Free Fire Panel Developer</p>
                      </div>

                      <div className="space-y-4 text-foreground/80">
                        <p className="text-lg leading-relaxed">
                          Specialized in creating advanced Free Fire gaming panels with cutting-edge features. Dedicated
                          to providing the gaming community with reliable, high-performance tools.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="text-center p-4 glass-effect rounded-lg">
                            <div className="text-2xl font-bold text-primary">5000+</div>
                            <div className="text-sm text-muted-foreground">Happy Users</div>
                          </div>
                          <div className="text-center p-4 glass-effect rounded-lg">
                            <div className="text-2xl font-bold text-secondary">24/7</div>
                            <div className="text-sm text-muted-foreground">Support</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button
                          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 smooth-hover"
                          onClick={() => window.open("https://www.youtube.com/@erenxiters", "_blank")}
                        >
                          <Star className="w-4 h-4 mr-2" />
                          YouTube Channel
                        </Button>
                        <Button
                          variant="outline"
                          className="glass-effect border-primary/20 hover:border-primary/40 smooth-hover bg-transparent"
                          onClick={() => setShowPremiumPopup(true)}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Contact Developer
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center glass-effect group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                          <Image
                            src="/images/developer-profile.jpg"
                            alt="Eren Xiter Developer"
                            width={256}
                            height={256}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 blur-2xl rounded-full opacity-50" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t border-primary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <Image
                  src="/images/eren-xiter-logo.png"
                  alt="Eren Xiter Logo"
                  width={60}
                  height={30}
                  className="smooth-hover"
                />
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="glass-effect smooth-hover text-xs px-3 py-1"
                  onClick={() => window.open("https://discord.gg/wcByrXycNa", "_blank")}
                >
                  <MessageCircle className="w-3 h-3 mr-1" />
                  Discord
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="glass-effect smooth-hover text-xs px-3 py-1"
                  onClick={() => window.open("https://chat.whatsapp.com/HREZWrlVKUGArnsohpRdss", "_blank")}
                >
                  <Phone className="w-3 h-3 mr-1" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="text-center mt-4 pt-4 border-t border-primary/10">
              <p className="text-muted-foreground text-sm">
                © 2025 Eren Xiter. All rights reserved. Professional Free Fire Panel Development.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <FreeSectionPopup isOpen={showFreePopup} onClose={() => setShowFreePopup(false)} />
      <PremiumContactPopup isOpen={showPremiumPopup} onClose={() => setShowPremiumPopup(false)} />
    </>
  )
}
