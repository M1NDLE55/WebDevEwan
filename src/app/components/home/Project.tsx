"use client";

import { PinContainer } from "../ui/3D-Pin";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Project({ project }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function getMeta(href: string) {
      try {
        const response = await fetch(
          `https://api.microlink.io/?url=${href}&meta=true`,
        );

        const data = await response.json();

        const imageURL = data.data.image.url;

        setImage(imageURL);
      } catch (error) {
        console.warn(error);
      }
    }

    if (!project.trueHref) {
      return;
    }

    getMeta(project.trueHref);
  }, []);

  return (
    <PinContainer title={project.localHref} href={project.localHref}>
      <div className="flex h-[20rem] w-[20rem] basis-full flex-col justify-between p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
        <div>
          <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-neutral-50">
            {project.title}
          </h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <p className="text-neutral-400 ">{project.description}</p>
          </div>
        </div>
        {image ? (
          <Image
            alt={project.title}
            src={image}
            width={1200}
            height={630}
            className="mt-4 w-full rounded-lg object-contain"
          />
        ) : (
          <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        )}
      </div>
    </PinContainer>
  );
}
