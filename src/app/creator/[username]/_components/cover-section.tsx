import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface CoverSectionProps {
  coverImage: string;
  profileImage: string;
  name: string;
}
export function CoverSection({
  coverImage,
  profileImage,
  name,
}: CoverSectionProps) {
  return (
    <div className="relative h-48 w-full sm:h-64 md:h-80">
      <Image
        src={coverImage}
        alt={name}
        fill
        className="object-cover"
        priority
        quality={100}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div className="absolute bottom-2 md:bottom-6 left-0 right-0 p-4 md:p-8">
        <div className="container mx-auto max-w-6xl">

          <div className="flex flex-col items-center sm:items-end sm:flex-row gap-4 sm:gap-6">

            <div className="relative flex-shrink-0">
              <Avatar className="h-20 w-20 border-2 md:border-4 border-white sm:w-24 sm:h-24 md:h-32  md:w-32 shadow-2xl group">
                <AvatarImage
                  className="group-hover:scale-125 duration-300 group-hover:-rotate-6"
                  src={profileImage}
                />
                <AvatarFallback className="text-lg md:text-xl font-bold">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="pb-0 sm:pb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-center sm:text-left">
                    {name}
                </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
