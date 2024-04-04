
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Album } from "../../app/data/albums";
import { playlists } from "../../app/data/playlists";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { artist } from "@/types";

const rdmimage = "https://fakeimg.pl/500x500/?text=X";

interface ArtistProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  img?: any;
  artist: artist;
}
export function ArtistsCards({
  aspectRatio = "portrait",
  artist,
  width,
  height,
  className,
  img,
  ...props
}: ArtistProps) {
  return (
    <>
      <div className={cn("space-y-3", className)} {...props}>
        <div className="overflow-hidden rounded-md">
          <Image
            src={img.message ? rdmimage : img}
            alt={"album.name"}
            width={width}
            height={height}
            className={cn(
              "h-auto w-auto object-cover transition-all hover:scale-105",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        </div>
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">{artist.name}</h3>
        </div>
      </div>
    </>
  );
}
