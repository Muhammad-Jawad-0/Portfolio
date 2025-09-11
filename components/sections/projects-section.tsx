"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Variants } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "/E-commerce-goo-food.PNG",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Mongodb",
      "Stripe",
      "cloudinary",
      "Redux",
      "JWT",
    ],
    githubUrl: "https://github.com/Muhammad-Jawad-0/GoFood-App",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Chat App",
    description:
      "A real-time chat application built with React and Firebase, featuring secure authentication, instant messaging, and cloud-based data storage. Includes support for multiple chat rooms, live status updates, and a clean responsive UI for seamless communication across devices.",
    image: "/chat-app.PNG",
    technologies: [
      "React",
      "Firebase",
      "Firestore",
      "Firebase-Realtime",
      "tailwind CSS",
    ],
    githubUrl: "https://github.com/Muhammad-Jawad-0/ChatApp",
    liveUrl: "https://chat-app-basic-firebase.netlify.app/",
    featured: true,
  },
  {
    id: 3,
    title: "airForShare",
    description:
      "A Firebase-powered web app for instant text and file sharing across devices. Users can copy/paste text or upload multiple files, which are automatically bundled into a downloadable ZIP. Real-time sync ensures smooth cross-device access, with secure cloud storage and a minimal, responsive interface for easy sharing.",
    image: "/airforshare-img.PNG",
    technologies: ["React", "Firebase", "realtimeDb", "CSS Modules"],
    githubUrl: "https://github.com/Muhammad-Jawad-0/airForShare-App",
    liveUrl: "https://airforshare-app.netlify.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A content management system for bloggers with markdown support, SEO optimization, and social sharing features.",
    image: "/blogging-img.PNG",
    technologies: ["React.js", "Tailwind CSS", "Firebase", "ContextApi"],
    githubUrl: "https://github.com/Muhammad-Jawad-0/Blogging-App",
    liveUrl: "https://blogging-app-firebase.netlify.app/",
    featured: false,
  },
  {
    id: 5,
    title: "Facebook Clone",
    description:
      "A Facebook Clone built with the MERN stack, featuring secure authentication, real-time posts, likes, comments, and profile management with image uploads — delivering a responsive and engaging social media experience.",
    image: "/fb-img.PNG",
    technologies: [
      "React.js",
      "Node.js",
      "JavaScript",
      "Express.js",
      "Mongodb",
      "Css3",
    ],
    githubUrl: "https://github.com/Muhammad-Jawad-0/Social-Media-UI",
    liveUrl: "/",
    featured: false,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "A simple Weather App built with React that fetches real-time weather data from an external API, showing temperature, conditions, and location details with a clean, user-friendly interface.",
    image: "/weather-imgs.PNG",
    technologies: ["html", "css", "js", "React.js"],
    githubUrl: "https://github.com/Muhammad-Jawad-0/React-Weather-App",
    liveUrl: "https://weather-app-using-react-by-jawad.netlify.app",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Portfolio
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Featured Projects
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            A selection of my recent work showcasing different technologies and
            problem-solving approaches.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-pretty">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 hover:scale-105 transition-transform duration-200"
                  >
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="hover:scale-105 transition-transform duration-200 bg-transparent"
          >
            <Link
              href="https://github.com/Muhammad-Jawad-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
