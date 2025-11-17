"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CarouselWithAutoplayProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselWithAutoplay({
  children,
  className,
}: CarouselWithAutoplayProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className={className}
    >
      {children}
    </Carousel>
  );
}

export { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious };

