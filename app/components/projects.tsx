"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // import useRouter for programmatic navigation
import { Heart, Share2 } from "lucide-react";

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
  const router = useRouter(); // Instantiate useRouter for programmatic navigation

  const toggleLike = (projectId: number) => {
    setLikedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  // Function to navigate to Keyask when the image is clicked
  const handleImageClick = () => {
    router.push("/keyask"); // Navigate to the keyask page
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
              className="relative group aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div
                onClick={handleImageClick}
                className="relative w-full h-full cursor-pointer"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project info */}
              <div className="absolute bottom-0 text-center  text-white p-4">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <div className="flex items-center mt-2">
                  <Heart
                    className="mr-2 cursor-pointer"
                    onClick={() => toggleLike(project.id)}
                    color={likedProjects.includes(project.id) ? "red" : "white"}
                  />
                  <span>{project.likes}</span>
                </div>
                <div className="flex items-center mt-2">
                  <Share2 className="mr-2 cursor-pointer" />
                  <span>Share</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
