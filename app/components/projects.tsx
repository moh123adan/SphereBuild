"use client";

import Image from "next/image";
import { Heart, Share2 } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  likes: number;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Keeyask project",
    likes: 10,
    imageUrl: "/images/pro1.png",
  },
  {
    id: 2,
    title: "Construction Site Safety",
    likes: 8,
    imageUrl: "/images/pro2.png",
  },
  {
    id: 3,
    title: "Bridge Infrastructure",
    likes: 15,
    imageUrl: "/images/pro3.png",
  },
  {
    id: 4,
    title: "High-rise Development",
    likes: 12,
    imageUrl: "/images/pro4.png",
  },
];

export default function Projects() {
  const [likedProjects, setLikedProjects] = useState<number[]>([]);

  const toggleLike = (projectId: number) => {
    setLikedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-4">PROJECTS</h2>
          <div className="w-24 h-1 bg-[#F7C94B] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group aspect-square overflow-hidden bg-gray-100"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleLike(project.id)}
                      className="flex items-center gap-2"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          likedProjects.includes(project.id)
                            ? "fill-red-500 text-red-500"
                            : "text-white"
                        }`}
                      />
                      <span>
                        {project.likes +
                          (likedProjects.includes(project.id) ? 1 : 0)}
                      </span>
                    </button>
                    <button className="p-2 hover:text-[#F7C94B] transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
