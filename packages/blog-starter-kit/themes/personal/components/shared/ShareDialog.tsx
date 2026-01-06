"use client";

import { useState } from "react";
import { Link, Mail, Send, Copy, MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, WhatsAppIcon, XIcon } from "@/components/icons";
import { toast } from "react-toastify";
import { IconBrandTelegram } from "@tabler/icons-react";
export interface ShareableContent {
  id: string;
  type: "post" | "product" | "profile" | "shop";
  title: string;
  description?: string;
  image?: string;
  url: string;
}

interface ShareDialogProps {
  content: ShareableContent;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Added Telegram, Instagram, and TikTok to shareOptions
const shareOptions = [
  { name: "WhatsApp", icon: () => <WhatsAppIcon className="w-5 h-5" /> },
  { name: "Facebook", icon: () => <FacebookIcon className="w-5 h-5" /> },
  { name: "X", icon: () => <XIcon className="w-5 h-5" /> },
  { name: "Telegram", icon: () => <IconBrandTelegram className="w-5 h-5" /> },
  { name: "Email", icon: Mail },
  { name: "Copy Link", icon: Link },
];

export function ShareDialog({ content, open, onOpenChange }: ShareDialogProps) {
  const [isCopying, setIsCopying] = useState(false);

  const handleShare = async (platform: string) => {
    const shareText = `${content.title}\n${content.description || ""}\n\n${
      content.url
    }`;

    try {
      switch (platform) {
        case "WhatsApp":
          window.open(
            `https://wa.me/?text=${encodeURIComponent(shareText)}`,
            "_blank"
          );
          break;
        case "Facebook":
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              content.url
            )}`,
            "_blank"
          );
          break;
        case "X":
          window.open(
            `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
            "_blank"
          );
          break;
        case "Telegram":
          window.open(
            `https://t.me/share/url?url=${encodeURIComponent(
              content.url
            )}&text=${encodeURIComponent(content.title)}`,
            "_blank"
          );
          break;
        case "Email":
          window.location.href = `mailto:?subject=${encodeURIComponent(
            content.title
          )}&body=${encodeURIComponent(shareText)}`;
          break;
        case "Copy Link":
          setIsCopying(true);
          await navigator.clipboard.writeText(content.url);
          toast.success("Link copied to clipboard!");
          setIsCopying(false);
          break;
        default:
          if (navigator.share) {
            await navigator.share({
              title: content.title,
              text: content.description,
              url: content.url,
            });
          }
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast.error("Failed to share. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 border-zinc-800 text-zinc-100">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Send className="h-5 w-5 text-primary" />
            Share {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Share this {content.type} with your friends and followers
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-4 gap-4 py-4">
          {shareOptions.map((option) => (
            <Button
              key={option.name}
              variant="ghost"
              className="flex flex-col items-center gap-2 h-auto py-3 text-white hover:bg-zinc-800"
              onClick={() => handleShare(option.name)}
              disabled={isCopying && option.name === "Copy Link"}
            >
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                {option.name === "Copy Link" && isCopying ? (
                  <Copy className="w-5 h-5 animate-pulse" />
                ) : (
                  <option.icon />
                )}
              </div>
              <span className="text-xs text-zinc-300">{option.name}</span>
            </Button>
          ))}
        </div>

        <div className="flex items-center space-x-2 py-2">
          <Input
            readOnly
            value={content.url}
            className="bg-zinc-800 border-zinc-700 text-zinc-300"
          />
          <Button
            variant="outline"
            className="shrink-0 border-zinc-700"
            onClick={() => handleShare("Copy Link")}
            disabled={isCopying}
          >
            {isCopying ? (
              <Copy className="h-4 w-4 animate-pulse" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
