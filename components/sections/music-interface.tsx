"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Play, Radio, LayoutGrid, Mic2, Music2, User, Library, Clock, ListMusic } from "lucide-react"
import { cn } from "@/lib/utils"
import type React from "react" // Import React

const mainPlaylists = [
  {
    title: "React Rendezvous",
    artist: "Ethan Byte",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
  },
  {
    title: "Async Awakenings",
    artist: "Nina Netcode",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop",
  },
  {
    title: "The Art of Reusability",
    artist: "Lena Logic",
    image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=300&h=300&fit=crop",
  },
  {
    title: "Stateful Symphony",
    artist: "Beth Binary",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop",
  },
]

const madeForYou = [
  {
    title: "Thinking Components",
    artist: "Lena Logic",
    image: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&h=300&fit=crop",
  },
  {
    title: "Functional Fury",
    artist: "Beth Binary",
    image: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?w=300&h=300&fit=crop",
  },
  {
    title: "React Rendezvous",
    artist: "Ethan Byte",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
  },
  {
    title: "Stateful Symphony",
    artist: "Beth Binary",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop",
  },
  {
    title: "Async Awakenings",
    artist: "Nina Netcode",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop",
  },
  {
    title: "The Art of Reusability",
    artist: "Lena Logic",
    image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=300&h=300&fit=crop",
  },
]

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  text: string
  variant?: "default" | "ghost"
}

function SidebarItem({ icon, text, variant = "default", className, ...props }: SidebarItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        variant === "default" ? "text-muted-foreground hover:text-primary hover:bg-muted" : "",
        variant === "ghost" ? "hover:bg-muted" : "",
        className,
      )}
      {...props}
    >
      {icon}
      {text}
    </div>
  )
}

export function MusicInterface() {
  return (
    <Card className="h-[800px]">
      <CardContent className="flex p-0">
        <div className="w-[240px] border-r p-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-tight mb-2">Discover</h3>
              <SidebarItem icon={<Play className="h-4 w-4" />} text="Listen Now" variant="ghost" className="bg-muted" />
              <SidebarItem icon={<LayoutGrid className="h-4 w-4" />} text="Browse" />
              <SidebarItem icon={<Radio className="h-4 w-4" />} text="Radio" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-tight mb-2">Library</h3>
              <SidebarItem icon={<ListMusic className="h-4 w-4" />} text="Playlists" />
              <SidebarItem icon={<Music2 className="h-4 w-4" />} text="Songs" />
              <SidebarItem icon={<User className="h-4 w-4" />} text="Made for You" />
              <SidebarItem icon={<Mic2 className="h-4 w-4" />} text="Artists" />
              <SidebarItem icon={<Library className="h-4 w-4" />} text="Albums" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-tight mb-2">Playlists</h3>
              <SidebarItem icon={<Clock className="h-4 w-4" />} text="Recently Added" />
              <SidebarItem icon={<Clock className="h-4 w-4" />} text="Recently Played" />
              <SidebarItem icon={<ListMusic className="h-4 w-4" />} text="Top Songs" />
              <SidebarItem icon={<Library className="h-4 w-4" />} text="Top Albums" />
              <SidebarItem icon={<Mic2 className="h-4 w-4" />} text="Top Artists" />
              <SidebarItem icon={<Music2 className="h-4 w-4" />} text="Logic Discography" />
              <SidebarItem icon={<Clock className="h-4 w-4" />} text="Bedtime Beats" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="border-b">
            <div className="flex h-16 items-center px-4 justify-between">
              <Tabs defaultValue="music" className="w-full max-w-[400px]">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="music">Music</TabsTrigger>
                  <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                  <TabsTrigger value="live">Live</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add music
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-10rem)]">
            <div className="p-8 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">Listen Now</h2>
                    <p className="text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {mainPlaylists.map((playlist) => (
                    <div key={playlist.title} className="space-y-3">
                      <div className="overflow-hidden rounded-md">
                        <img
                          src={playlist.image || "/placeholder.svg"}
                          alt={playlist.title}
                          className="aspect-square h-auto w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium leading-none">{playlist.title}</h3>
                        <p className="text-xs text-muted-foreground">{playlist.artist}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
                    <p className="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  {madeForYou.map((playlist) => (
                    <div key={playlist.title} className="space-y-3">
                      <div className="overflow-hidden rounded-md">
                        <img
                          src={playlist.image || "/placeholder.svg"}
                          alt={playlist.title}
                          className="aspect-square h-auto w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium leading-none">{playlist.title}</h3>
                        <p className="text-xs text-muted-foreground">{playlist.artist}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}

