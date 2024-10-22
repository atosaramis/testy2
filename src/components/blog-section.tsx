import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function BlogSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          RafalAi Experiments
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center">
        Learn how to build beautiful landing pages fast.
      </p>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Link href="#">
                <Card className="h-full shadow-lg">
                  <CardContent className="flex h-full flex-col items-start gap-5 px-0">
                    <div className="relative h-52 w-full">
                      <Image
                        alt="How to build a beautiful landing page in minutes"
                        src="/images/article-1.avif"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 px-5">
                      <p className="mb-auto text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
                        ultrices orci. Vivamus ante arcu, hendrerit.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Link href="#">
                <Card className="h-full shadow-lg">
                  <CardContent className="flex h-full flex-col items-start gap-5 px-0">
                    <div className="relative h-52 w-full">
                      <Image
                        alt="How to generate the perfect theme for your website with AI"
                        src="/images/article-2.avif"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 px-5">
                      <p className="mb-auto text-muted-foreground">
                        Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent
                        volutpat ut ipsum ac congue.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Link href="#">
                <Card className="h-full shadow-lg">
                  <CardContent className="flex h-full flex-col items-start gap-5 px-0">
                    <div className="relative h-52 w-full">
                      <Image
                        alt="How to build at the speed of no-code without customization limits"
                        src="/images/article-3.avif"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 px-5">
                      <p className="mb-auto text-muted-foreground">
                        Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Link href="#">
                <Card className="h-full shadow-lg">
                  <CardContent className="flex h-full flex-col items-start gap-5 px-0">
                    <div className="relative h-52 w-full">
                      <Image
                        alt="How to edit React components and Tailwind visually"
                        src="/images/article-4.avif"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 px-5">
                      <p className="mb-auto text-muted-foreground">
                        Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus.
                        Donec quis ornare elit.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Link href="#">
                <Card className="h-full shadow-lg">
                  <CardContent className="flex h-full flex-col items-start gap-5 px-0">
                    <div className="relative h-52 w-full">
                      <Image
                        alt="How to build at the speed of no-code without customization limits"
                        src="/images/article-5.avif"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 px-5">
                      <p className="mb-auto text-muted-foreground">
                        Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
