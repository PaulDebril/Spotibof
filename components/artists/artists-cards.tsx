import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Album } from "../../app/data/albums";
import { playlists } from "../../app/data/playlists";

import { cn } from "@/lib/utils";
import { ContextMenu, ContextMenuTrigger } from "../ui/context-menu";
import { artist } from "@/types";

interface ArtistProps extends React.HTMLAttributes<HTMLDivElement> {
  artist: artist;
  album: Album;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}
export function ArtistsCards({
  artist,
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: ArtistProps) {
  return (
    <>
      <div className={cn("space-y-3", className)} {...props}>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="overflow-hidden rounded-md">
              <Image
                src={album.cover}
                alt={album.name}
                width={width}
                height={height}
                className={cn(
                  "h-auto w-auto object-cover transition-all hover:scale-105",
                  aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                )}
              />
            </div>
          </ContextMenuTrigger>
        </ContextMenu>
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">{artist.name}</h3>
        </div>
      </div>
    </>
  );
}
