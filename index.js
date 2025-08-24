import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2x2 ">Shafaeth.dev</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>
      </nav>

      <section id="home" className="flex flex-col items-center justify-center text-center py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-6"
        >
          Hi, I'm <span className="text-purple-400">Shafaeth</span> 👩‍💻
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-2xl"
        >
          A passionate CSE student building creative projects, portfolios, and cool ideas.
        </motion.p>
        <div className="mt-8 flex space-x-4">
          <Button className="bg-purple-500 hover:bg-purple-600">View Projects</Button>
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">Contact Me</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          I'm a first-semester CSE student at East West University. I love coding, solving problems,
          and building creative things. My journey has just started, and this website will grow as I learn more.
        </p>
      </section>


      <section id="projects" className="py-24 bg-gray-800/50">
        <h3 className="text-3xl font-bold mb-12 text-center">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[1, 2, 3].map((p) => (
            <motion.div
              key={p}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl shadow-lg bg-gray-900/80 border border-gray-700"
            >
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Project {p}</h4>
                  <p className="text-gray-400">Short description of your project {p}.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>


      <section id="contact" className="py-24 max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="text-gray-300 mb-6">Feel free to connect with me on my socials:</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Shafaeth123" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><Github size={28} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><Linkedin size={28} /></a>
          <a href="mailto:youremail@example.com" className="hover:text-purple-400"><Mail size={28} /></a>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Shafaeth. All rights reserved.
      </footer>
    </div>
  );
}
