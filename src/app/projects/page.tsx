import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function page() {
  return (
    <div className='text-8xl text-white p-20 font-semibold'>
      Projects
      <div className='mt-20 flex h-[200px] w-[200px] justify-center items-center ml-[300px] pl-[300px]'>
      <Carousel>
  <CarouselContent className=''>
    <CarouselItem className='text-4xl flex items-center justify-center'>   Forum Flux</CarouselItem>
    <CarouselItem>   project 2</CarouselItem>
    <CarouselItem>   project 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
      </div>
    </div>
  )
}
