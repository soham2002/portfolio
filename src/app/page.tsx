'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ColourfulText from "@/components/ui/colourful-text";
import { Home, Mail, Phone, Book, Moon, Sun, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <motion.header 
        className="px-4 lg:px-6 h-14 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link className="flex items-center justify-center" href="#">
          <Home className="h-6 w-6" />
          <span className="sr-only">Portfolio Blog</span>
        </Link>
        <motion.nav 
          className="ml-auto flex gap-4 sm:gap-6 items-center"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {["Home", "About", "Reading", "Blog", "Resume"].map((item) => (
            <motion.div key={item} variants={fadeInUp}>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href={`#${item.toLowerCase()}`}>
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div variants={fadeInUp}>
            <ThemeToggle />
          </motion.div>
        </motion.nav>
      </motion.header>
      <main className="flex-1">
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32" 
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.section
          className="w-full py-20 md:py-32 lg:py-10 flex flex-col items-center justify-center text-center"
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          >
          <div className="container px-5 md:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
            
          {/* <motion.h1 
              className="text-3xl font-bold tracking-tighter sm:text-3xl sm:text-3xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              This is
            </motion.h1> */}
            <motion.h1 
              className="text-3xl font-bold tracking-tighter sm:text-3xl sm:text-8xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <ColourfulText text="Soham Banerjee" />
            </motion.h1>
            {/* <motion.h1 
              className="text-3xl font-bold tracking-tighter sm:text-3xl sm:text-3xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Thou clicketh? Thy hast good taste.
            </motion.h1> */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='flex justify-center w-full'
            >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-blue dark:text-white flex items-center space-x-2 px-6 py-2"
            >
            <span>Don't Click Me</span>
            </HoverBorderGradient>

            </motion.div> */}

          </div>
        </motion.section>
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr] items-start">
              <motion.div 
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/me2.png"
                  alt="Profile picture"
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </motion.div>
              <div>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-6">
                I&apos;m a passionate tech professional with skills in Application Security, Machine Learning, and Generative AI. Experienced in developing AI solutions, secure applications, and data-driven projects. Passionate about optimizing systems and creating innovative tech solutions.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://github.com/soham2002" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://linkedin.com/in/sohambanerjee26/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="https://x.com/Plzcheck26" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
            <h3 className="mt-12 text-2xl font-bold tracking-tighter sm:text-3xl">Recent Projects</h3>
            <motion.div 
              className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: "GreenRoots", desc: "AI Model for Mapping Mangrove Depletion & Planting Prediction", tech: "Award Winning 🏆, Google Earth Engine, NDVI Mapping, Random Forest", link: "https://hackthonduo.github.io/GRWebsite/" },
                { title: "DocuChat", desc: "GenAI Multi-PDF Query Solver, with RAG implementation", tech: "GEN AI, RAG, FAISS, Langchain, HuggingFace, Pinecone Database", link: "https://docuchat-pdf.streamlit.app/" },
                { title: "Windows Pwner", desc: "Metasploit Payload to take control of any windows machine", tech: "CyberSecurity, Metaspoilt, Social Engineering", link: "https://github.com/soham2002/Windows-PWNer" }
              ].map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.split(', ').map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm transition-colors hover:bg-primary/20 hover:text-primary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button asChild>
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">View Project</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800" 
          id="reading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 flex items-center">
              Currently Reading
              <span className="ml-2 w-3 h-3 bg-green-500 rounded-full animate-pulse inline-block align-top -mt-1"></span>
            </h2>
            <motion.div 
              className="grid gap-6 lg:grid-cols-2"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Work-related Reading",
                  books: [
                    "Clean Code by Robert C. Martin",
                    "Design Patterns by Erich Gamma et al.",
                    "Practical Malware Analysis by Andrew Honig"
                  ]
                },
                {
                  title: "Leisure Reading",
                  books: [
                    "Interpretation of Dreams by Sigmund Freud",
                    "The Ride of a Lifetime by Robert Iger",
                    "Illusions by Richard Bach"
                  ]
                }
              ].map((category, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center"><Book className="mr-2" /> {category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        {category.books.map((book, bookIndex) => (
                          <li key={bookIndex}>{book}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-700" 
          id="blog"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Blog Posts</h2>
            <motion.div 
              className="grid gap-6 sm:grid-cols-2"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: "Log4Shell Analysis", date: "December 12, 2024", excerpt: "The discovery of Log4Shell in December 2021 sent shockwaves through the cybersecurity landscape. This vulnerability left countless systems exposed to exploitation..." , link: "https://vehere.com/threat-severity-high/log4shell-vulnerability-critical-analysis/" },
                { title: "USB Fragmentation", date: "Dec 26, 2024", excerpt: "You plugged in a USB drive only to see several disk drives pop up in the Windows File Explorer. This can’t be fixed by simply reformatting... " , link: "https://medium.com/@sohamnotes/how-to-fix-a-usb-drive-fragmented-into-separate-partitions-97ff67adf0ee" }
              ].map((post, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>Published on {post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{post.excerpt}</p>
                      <Button className="mt-4" variant="outline">
                        <Link href={post.link}>
                          Read More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32" 
          id="resume"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Resume</h2>
            <motion.div 
              className="grid gap-6 lg:grid-cols-[1fr_2fr]"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>sohambanerjee762@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Phone className="h-4 w-4" />
                      <span>+91 9874014180</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Home className="h-4 w-4" />
                      <span>Kolkata, West Bengal, India</span>
                    </div>
                  </CardContent>
                </Card>
              <br />
              <motion.div variants={fadeInUp} className="flex space-x-4">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-blue dark:text-white flex items-center space-x-2 px-6 py-2"
                >
                  <Link href="https://www.behance.net/sohambanerjee2">
                    Design Portfolio
                  </Link>
                </HoverBorderGradient>
                <Button className="items-center justify-center gap-2" asChild>
                  <Link href="https://drive.google.com/file/d/1zuj4e4OVqF0xXPRg_qg6O_hAkS142KST/view?usp=sharing">
                    Download Resume
                  </Link>
                </Button>
                {/* <Button className="items-center justify-right gap-1" asChild>
                  <Link href="/design-portfolio">
                    Design Portfolio
                  </Link>
                </Button> */}
              </motion.div>
              </motion.div>
              <div className="space-y-6">
                {[
                  {
                    title: "Work Experience",
                    content: (
                      <>
                        <h3 className="font-semibold">Threat Research Intern, Vehere</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">October 2024 - Present</p>
                        <ul className="list-disc list-inside mt-2">
                          <li>Developed correlation rules to identify emerging threats and vulnerabilities.</li>
                          <li>Created a comprehensive library of 100+ malware PCAPs.</li>
                          <li>Authored threat research blogs and led competitive analysis studies</li>
                        </ul>
                      </>
                    )
                  },
                  {
                    title: "Education",
                    content: (
                      <>
                        <h3 className="font-semibold">Masters in Computer Application (MCA)</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Vellore Institute of Technology (VIT), Vellore, Class of &apos;25</p>
                        <br />
                        <h3 className="font-semibold">Bachelor in Computer Application (BCA)</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">The Heritage Academy(THA), Kolkata, Class of &apos;23</p>
                      </>
                    )
                  },
                  {
                    title: "Skills",
                    content: (
                      <ul className="list-disc list-inside">
                        <li><b>CyberSecurity</b> (WireShark, PCAP Analysis)</li>
                        <li><b>Machine Learning</b> (TensorFlow, Keras, OpenCV, ResNet)</li>
                        <li>Python</li>
                        <li>Bash Scripting</li>
                        <li>SQL and NoSQL databases</li>
                      </ul>
                    )
                  }
                ].map((section, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      <CardHeader>
                        <CardTitle>{section.title}</CardTitle>
                      </CardHeader>
                      <CardContent>{section.content}</CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <motion.footer 
        className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
            © 2025 Soham Banerjee.
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com/soham2002" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/sohambanerjee26/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://x.com/Plzcheck26" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}