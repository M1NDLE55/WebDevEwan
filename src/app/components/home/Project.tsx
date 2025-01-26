"use client";

import { PinContainer } from "../ui/3D-Pin";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { Project } from "../global/Projects";

export default function Project({ project }: { project: Project }) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    async function getMeta(href: string) {
      try {
        const response = await fetch(
          `https://api.microlink.io/?url=${href}&meta=true`,
        );

        const data = await response.json();

        const imageURL = data.data.image.url as string;

        setImage(imageURL);
      } catch (error) {
        console.warn(error);
      }
    }

    if (!project.links.website || project.links.hideOG) {
      return;
    }

    getMeta(project.links.website);
  }, []);

  return (
    <PinContainer title={project.localHref} href={project.localHref}>
      <div className="flex h-[20rem] w-[20rem] basis-full flex-col justify-between p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
        <div>
          <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-neutral-50">
            {project.name}
          </h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <p className="text-neutral-400 ">{project.shortDescription}</p>
          </div>
        </div>
        {project.tags && (
          <div className="mt-3 flex flex-row gap-2">
            {project.tags.map((tag) => (
              <div
                key={tag.name}
                className={`${tag.color} rounded-full px-2 text-sm text-black`}
              >
                {tag.name}
              </div>
            ))}
          </div>
        )}
        {image ? (
          <Image
            alt={project.name}
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
