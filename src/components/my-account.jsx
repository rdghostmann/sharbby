"use client"

import { Bell, MapPin, Flag, Compass, Heart, CreditCard, Smartphone, HelpCircle, MessageSquare, FileText, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function MyAccount() {
  return (
    (<div className="bg-background min-h-screen">
      <header className="bg-primary text-primary-foreground p-6">
        <h1 className="text-lg font-semibold text-center">My Account</h1>
        <div className="mt-4 flex items-center gap-4">
          <Avatar className="border h-12 w-12">
            <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Vince" />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-xl font-medium">Vince</p>
            <p className="text-primary-foreground/70 text-sm">vince@example.com</p>
          </div>
        </div>
      </header>
      <div className="py-6 px-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Receive Notifications
              </Label>
              <Switch className="bg-blue-600" id="notifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Location Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                My Location
              </Label>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Chicago</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <Flag className="h-4 w-4" />
                My Country
              </Label>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">United States</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="location-content" className="flex items-center gap-2">
                <Compass className="h-4 w-4" />
                Location Based Content
              </Label>
              <Switch id="location-content" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { icon: Heart, label: "My Favorites" },
              { icon: CreditCard, label: "Saved Payment Methods" },
              { icon: Smartphone, label: "Change App Icon" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Label>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Help & Guidance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { icon: HelpCircle, label: "Need Help?" },
              { icon: MessageSquare, label: "Give Us Feedback" },
              { icon: FileText, label: "Legal" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Label>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>)
  );
}

