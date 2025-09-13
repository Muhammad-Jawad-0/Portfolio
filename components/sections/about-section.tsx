// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Download } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const skills = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "JavaScript",
//   "Tailwind CSS",
//   "MUI",
//   "Ant Design",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "Firebase",
//   "RESTful APIs",
//   "HTML5",
//   "CSS3",
//   "Git",
//   "Github",
//   "Figma",
//   "Responsive Design",
//   "Performance Optimization",
// ];

// export function AboutSection() {
//   return (
//     <section id="about" className="py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <motion.div
//           className="mx-auto max-w-2xl lg:text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-base font-semibold leading-7 text-primary">
//             About Me
//           </h2>
//           <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
//             Passionate About Building Modern Web Experiences
//           </p>
//         </motion.div>

//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
//           {/* Profile Image */}
//           <motion.div
//             className="lg:col-span-1"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <Card className="overflow-hidden">
//               <CardContent className="p-0">
//                 <div className="aspect-square relative bg-muted">
//                   <Image
//                     src="professional-Img.jpeg"
//                     alt="Muhammad Jawad - MERN Stack Developer"
//                     fill
//                     className="object-cover transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Bio and Skills */}
//           <motion.div
//             className="lg:col-span-1"
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="lg:max-w-lg">
//               <motion.p
//                 className="text-lg leading-8 text-muted-foreground text-pretty mb-6"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 Currently growing my skills as a MERN stack developer with 5
//                 months of experience, I enjoy building modern, responsive web
//                 apps using Next.js, TypeScript, and Firebase. On the backend, I
//                 work with Node.js, Express, RESTful APIs, and MongoDB to create
//                 secure and scalable solutions — always exploring new tools and
//                 best practices to improve my craft.
//               </motion.p>

//               <motion.p
//                 className="text-lg leading-8 text-muted-foreground text-pretty mb-8"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 When I’m not coding, I enjoy learning new design trends,
//                 experimenting with side projects, and writing blog posts to
//                 share my journey. I also spend time exploring open-source
//                 codebases and engaging with developer communities to keep
//                 growing.
//               </motion.p>

//               {/* Skills */}
//               <motion.div
//                 className="mb-8"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   Core Skills
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {skills.map((skill, index) => (
//                     <motion.div
//                       key={skill}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <Badge variant="secondary" className="text-sm">
//                         {skill}
//                       </Badge>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* CTA */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Button asChild size="lg" className="group">
//                   <Link href="/resume.pdf" target="_blank">
//                     <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
//                     Download Resume
//                   </Link>
//                 </Button>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



// ============================================================================


"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "MUI",
  "Ant Design",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "RESTful APIs",
  "HTML5",
  "CSS3",
  "Git",
  "Github",
  "Figma",
  "Responsive Design",
  "Performance Optimization",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            About Me
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Passionate About Building Modern Web Experiences
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* Profile Image */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative bg-muted">
                  <Image
                    src="professional-Img.jpeg"
                    alt="Muhammad Jawad - MERN Stack Developer"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bio and Skills */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:max-w-lg">
              <motion.p
                className="text-lg leading-8 text-muted-foreground text-pretty mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Currently growing my skills as a MERN stack developer with 5
                months of experience, I enjoy building modern, responsive web
                apps using Next.js, TypeScript, and Firebase. On the backend, I
                work with Node.js, Express, RESTful APIs, and MongoDB to create
                secure and scalable solutions — always exploring new tools and
                best practices to improve my craft.
              </motion.p>

              <motion.p
                className="text-lg leading-8 text-muted-foreground text-pretty mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                When I’m not coding, I enjoy learning new design trends,
                experimenting with side projects, and writing blog posts to
                share my journey. I also spend time exploring open-source
                codebases and engaging with developer communities to keep
                growing.
              </motion.p>

              {/* Skills */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <Button asChild size="lg" className="group">
                  <a href="/Muhammad-Jawad-JavaScript-Developer.pdf" download>
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
