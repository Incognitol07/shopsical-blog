import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface DownloadAppModalProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function DownloadAppModal({ children, open, onOpenChange }: DownloadAppModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Get the Shopsical App</DialogTitle>
          <DialogDescription className="text-center text-slate-600 text-lg pt-2">
            Shop with friends, share your finds, and get exclusive deals. Available on iOS and Android.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-6 py-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="https://apps.apple.com/us/app/shopsical/id6751852637"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:-translate-y-1 flex justify-center"
            >
              <Image
                src="/app-store-badge.png"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="object-contain h-12 w-auto"
                priority
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.t_dax.shopsicalapp"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:-translate-y-1 flex justify-center"
            >
              <Image
                src="/play-store-badge.png"
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="object-contain h-12 w-auto"
                priority
              />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
