import React from "react";
import Image from "next/image";
import { projects } from "@/data/project";

const Project: React.FC = () => {
  return (
    <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
      {projects.map((project, index) => (
        <div key={index} className="">
          <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
            {/* <Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            width={50}
                            height={50}
                            className="rounded-full shadow-md"
                        /> */}
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-secondary">
                {project.name}
              </h3>
              {/* <p className="text-sm text-foreground-accent">{testimonial.role}</p> */}
            </div>
          </div>
          <Image
            src={project.imageSrc}
            alt={`${project.name} avatar`}
            width={350}
            height={250}
            className=""
          />
          {/* <p className="text-foreground-accent text-center lg:text-left">&quot;{testimonial.message}&quot;</p> */}
        </div>
      ))}
    </div>
  );
};

export default Project;
