import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  MapPin,
  Phone,
  Send,
  Moon,
  Sun,
  Code,
  Database,
  PenTool,
  Users,
  Brain,
  Smartphone,
  Server,
  Box,
  FileCode,
  GitBranch,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ---- Editable data from CV ----
const PROFILE = {
  name: "Tumul Vikash",
  summary:
    "End-To-End Solution Builder \n (React Native, React.js, Node.js, SQL, Python)",
  about:
    "I am a Senior Software Engineer with 4+ years of experience, specializing in React Native and React.js. Over the years, I have successfully delivered production-grade mobile and web applications, leading projects from scratch to deployment on the Play Store and App Store. My expertise extends to backend development with Node.js, SQL, and MongoDB, making me capable of building complete end-to-end solutions. Beyond technical contributions, I have experience mentoring engineers, conducting code reviews, managing teams, and driving strategies for scalable product delivery. I am passionate about solving complex problems, contributing to impactful products, and continuously improving my skills in modern development practices.",
  location: "Bangalore, India",
  phone: "+91 9110804553",
  email: "tumulvikash@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1l63uGZX16YyYZxtn8xATtnELu6Uc7Zop/view?usp=sharing",
  socials: {
    github: "https://github.com/tumul-vikash",
    linkedin: "https://www.linkedin.com/in/tumul-vikash-114644308/",
    email: "mailto:tumulvikash@gmail.com",
  },
};

const SKILLS = [
  { name: "React Native", icon: Smartphone },
  { name: "React.js", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Python", icon: FileCode },
  { name: "Firebase", icon: Server },
  { name: "Express.js", icon: Box },
  { name: "Redux", icon: GitBranch },
  { name: "Figma", icon: PenTool },
  { name: "Leadership", icon: Users },
  { name: "People Management", icon: Users },
  { name: "Strategy Building", icon: Brain },
];

const EXPERIENCE = [
  {
    company: "Tap.Health",
    role: "Senior Software Engineer - React Native",
    period: "Aug 2024 – Dec 2024, Gurgaon, India",
    points: [
      "Led a team of 5-6 engineers to deliver new features for Tap.Health.",
      "Built strategies for team efficiency and smooth delivery.",
      "Recruited and trained interns and full-time engineers.",
      "Collaborated with cross-functional teams for product research and delivery.",
    ],
  },
  {
    company: "Geniefie",
    role: "Software Engineer - React Native",
    period: "Jun 2023 – Apr 2024, Noida, India",
    points: [
      "Built the app from scratch using React Native, Node.js, Firebase, and PostgreSQL.",
      "Collaborated with DevOps for hosting, CI/CD pipelines, and production deployment.",
      "Published apps to Play Store and App Store.",
      "Integrated MS AppCenter CodePush for dynamic updates.",
      "Built frontend dashboard using React.js.",
    ],
  },
  {
    company: "The Crypto Launchpad",
    role: "React Native Developer",
    period: "Oct 2022 – May 2023, Remote",
    points: [
      "Developed ViPay, a multichain crypto wallet from scratch.",
      "Used Realm DB for storing private keys and crypto modules for Web3 transactions.",
      "Integrated REST APIs and Firebase Cloud Messaging for notifications.",
    ],
  },
  {
    company: "Intellipaat",
    role: "Mobile Application Developer (React Native)",
    period: "Jun 2022 – Oct 2022, Bangalore, India",
    points: [
      "Transformed existing websites into mobile apps.",
      "Integrated Firebase systems such as Cloud Messaging and Social Auth.",
      "Collaborated with UI/UX and backend teams for design and API integration.",
    ],
  },
  {
    company: "Bithyve UK LTD",
    role: "React Native Developer",
    period: "Jan 2022 – May 2022, Bangalore, India",
    points: [
      "Worked on Hexawallet (BitcoinTribe).",
      "Developed features with React Native, Node.js, and TypeScript.",
      "Managed CI/CD pipeline for server and app publishing.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Real Forest",
    description:
      "Tree management app to track and tag trees, including measurement features using phone camera.",
    tech: ["React Native", "PHP", "MySQL", "Firebase"],
  },
  {
    title: "Ondambo Investments",
    description:
      "Cab booking app for Namibia with driver and user apps, real-time socket communication, and Google Maps integration.",
    tech: ["React Native", "Node.js", "Google Maps API", "Firebase"],
  },
  {
    title: "Lakshya Organization",
    description:
      "Event management app for food and event orders, built for a client running an event management business.",
    tech: ["React Native", "PHP", "Firebase"],
  },
];

const EDUCATION = [
  {
    school: "Acharya Institutes",
    degree: "Bachelor of Engineering",
    period: "Aug 2015 – May 2021, Bangalore, India",
  },
];

// ---- Helpers ----
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <motion.h2
        {...fadeUp}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 text-emerald-900 dark:text-emerald-300"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

export default function Portfolio() {
  const [dark, setDark] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on click
    }
  };

  const navLinks = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Education", "education"],
    ["Contact", "contact"],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 dark:text-gray-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/40 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-6 text-sm">
            {navLinks.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-emerald-700 dark:hover:text-emerald-400 focus:outline-none"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* <Button
              variant="ghost"
              size="icon"
              aria-label="toggle theme"
              onClick={() => setDark((d) => !d)}
            >
              {dark ? (
                <Sun className="h-5 w-5 text-emerald-600" />
              ) : (
                <Moon className="h-5 w-5 text-emerald-400" />
              )}
            </Button> */}
            <Button
              asChild
              className="bg-emerald-700 hover:bg-emerald-800 text-white"
            >
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
                <Download className="h-4 w-4 mr-2" /> Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3 space-y-3">
            {navLinks.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left py-2 hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <main id="home" className="max-w-6xl mx-auto px-4">
        <section className="pt-12 sm:pt-20 pb-6">
          <motion.div
            {...fadeUp}
            className="grid md:grid-cols-1 gap-8 items-center"
          >
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-emerald-900 dark:text-emerald-300">
                {PROFILE.name}
              </h1>
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                {PROFILE.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-emerald-700" />{" "}
                  {PROFILE.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Phone className="h-4 w-4 text-emerald-700" /> {PROFILE.phone}
                </span>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-1 hover:underline text-emerald-800 dark:text-emerald-300"
                >
                  <Mail className="h-4 w-4" /> {PROFILE.email}
                </a>
              </div>
              <div className="mt-6 flex gap-3">
                <Button
                  asChild
                  variant="secondary"
                  className="border-emerald-700 text-emerald-800 dark:text-emerald-300"
                >
                  <a
                    href={PROFILE.socials.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="border-emerald-700 text-emerald-800 dark:text-emerald-300"
                >
                  <a
                    href={PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-emerald-700 text-emerald-800 dark:text-emerald-300"
                >
                  <a href={`mailto:${PROFILE.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <Section id="about" title="About">
          <motion.p
            {...fadeUp}
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            {PROFILE.about}
          </motion.p>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="grid md:grid-cols-2 gap-6">
            {EXPERIENCE.map((job) => (
              <motion.div key={job.company} {...fadeUp}>
                <Card className="h-full border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-emerald-900 dark:text-emerald-300">
                      <span>
                        {job.role} · {job.company}
                      </span>
                      <span className="text-sm font-normal text-gray-500">
                        {job.period}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      {job.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Freelance Projects">
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <motion.div key={p.title} {...fadeUp}>
                <Card className="h-full flex flex-col border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-emerald-900 dark:text-emerald-300">
                      {p.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grow">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <motion.div {...fadeUp} className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <Badge
                key={s.name}
                className="text-sm py-1 px-3 rounded-full bg-gray-800 text-white inline-flex items-center gap-1"
              >
                <s.icon className="h-4 w-4" /> {s.name}
              </Badge>
            ))}
          </motion.div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          {EDUCATION.map((edu) => (
            <motion.div key={edu.school} {...fadeUp}>
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-emerald-900 dark:text-emerald-300">
                    {edu.school}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <motion.form
            {...fadeUp}
            className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-5"
          >
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <Input
                  placeholder="Enter your name"
                  required
                  className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/50"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <Input
                placeholder="Enter subject"
                required
                className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/50"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <Textarea
                placeholder="Write your message..."
                required
                className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 min-h-[140px] focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/50"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between pt-2">
              <Button
                type="submit"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg shadow-md transition-transform hover:scale-105"
                onClick={() => {
                  const name = (
                    document.getElementById("name") as HTMLInputElement
                  )?.value.trim();
                  const subject = (
                    document.getElementById("subject") as HTMLInputElement
                  )?.value.trim();
                  const message = (
                    document.getElementById("message") as HTMLTextAreaElement
                  )?.value.trim();
                  const errorEl = document.getElementById("form-error");

                  if (!name || !subject || !message) {
                    if (errorEl)
                      errorEl.textContent = "⚠️ Please fill in all fields.";
                    return;
                  }

                  if (errorEl) errorEl.textContent = "";

                  // ✅ Build mailto link
                  const mailto = `mailto:${
                    PROFILE.email
                  }?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(
                    `Hello, my name is ${name}.\n\n${message}`
                  )}`;

                  window.location.href = mailto; // Opens default mail app or Gmail in browser
                }}
              >
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </div>
          </motion.form>
        </Section>
      </main>
    </div>
  );
}
