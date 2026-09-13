"use client";

import { Dropdown } from "@/shared/dropdown/Dropdown";
import Link from "next/link";
import "./about.scss";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Apple Display Header */}
      <div className="about-header">
        <h1 className="about-title">About</h1>
        <p className="about-subtitle">
          Tanuphat Sojindamanee (March) &bull; Developer, Actor, MC &amp; INTP
        </p>
      </div>

      {/* 1. ABOUT ME & PERSONAL VIBE */}
      <Dropdown label="About Me &amp; Personal Vibe" defaultOpen={true}>
        {/* Apple Spec-Sheet Grid */}
        <div className="apple-spec-grid">
          <div className="spec-row">
            <span className="spec-label">Full Name</span>
            <span className="spec-value">Tanuphat Sojindamanee (March)</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Date of Birth</span>
            <span className="spec-value">27 March 2004</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Location</span>
            <span className="spec-value">Bangkok &amp; Phitsanulok, Thailand</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Languages</span>
            <span className="spec-value">Thai (Native), English (IELTS 6.5)</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Education</span>
            <span className="spec-value">Mahidol University &bull; B.Sc. DST</span>
          </div>
        </div>

        {/* Configurator Option Chips */}
        <div className="apple-chip-group">
          <span className="apple-chip highlight">
            <i className="bi bi-person-badge"></i> INTP (Analytical &amp; Curious)
          </span>
          <span className="apple-chip">
            <i className="bi bi-arrows-vertical"></i> 175 cm
          </span>
          <span className="apple-chip">
            <i className="bi bi-activity"></i> 80kg Athletic Goal
          </span>
          <span className="apple-chip">
            <i className="bi bi-film"></i> Me Mind Y Studio
          </span>
          <span className="apple-chip">
            <i className="bi bi-mic-fill"></i> Bilingual Stage MC
          </span>
        </div>

        {/* Apple Editorial Persona Blocks */}
        <div className="apple-editorial-block">
          <div className="block-label">Off-Camera Character &amp; Personality</div>
          <p>
            While public MCing and acting involve high energy and commanding stage presence, off-camera I am a true INTP: calm, observant, and reflective.
          </p>
          <p>
            I value quiet environments, first-principles thinking, and deep one-on-one conversations. Low-drama, direct, and thoughtful.
          </p>
        </div>

        <div className="apple-editorial-block">
          <div className="block-label">What I Value in People (Friends &amp; Dating)</div>
          <p>
            &bull; <strong>Authentic Curiosity:</strong> People who genuinely care about what they study, build, or create.
          </p>
          <p>
            &bull; <strong>Direct Communication:</strong> Honest, straightforward conversations without games or pretense.
          </p>
          <p>
            &bull; <strong>Mutual Growth:</strong> Friends and partners who actively pursue their goals and support each other&apos;s ambition.
          </p>
          <p>
            &bull; <strong>Comfortable Companionship:</strong> Enjoying relaxed banter over good coffee, working side by side, or exploring new ideas.
          </p>
        </div>

        {/* Apple Action Pill CTAs */}
        <div className="apple-action-row">
          <a
            href="https://www.instagram.com/marchtanu"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-pill"
          >
            <i className="bi bi-instagram"></i> Instagram (@marchtanu)
          </a>
          <a
            href="https://line.me/ti/p/RnNtEUmp5j"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-ghost"
          >
            <i className="bi bi-line"></i> LINE
          </a>
          <a
            href="https://discordapp.com/users/1312469948391493704"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-ghost"
          >
            <i className="bi bi-discord"></i> Discord
          </a>
          <Link href="/pages/contact" className="apple-btn-ghost">
            <i className="bi bi-envelope-fill"></i> Contact Form
          </Link>
        </div>
      </Dropdown>

      {/* 2. EDUCATION */}
      <Dropdown label="Education">
        <div className="apple-milestone">
          <div className="milestone-title">Mahidol University (Faculty of ICT)</div>
          <div className="milestone-meta">Bachelor of Science in Digital Science and Technology (DST) &bull; 2025 &ndash; Present</div>
          <div className="milestone-desc">
            Key Academic Focus: Advanced Software Engineering, Data Structures &amp; Algorithms, Database Management Systems (DBMS under Aj. Preecha), System Design &amp; Architecture, Human-Computer Interaction, and Digital Product Innovation.
          </div>
        </div>

        <div className="apple-milestone">
          <div className="milestone-title">Naresuan University Secondary Demonstration School (High School)</div>
          <div className="milestone-meta">Science-Mathematics Program &bull; 2022 &ndash; 2025 &bull; GPAX: 3.38</div>
        </div>

        <div className="apple-milestone">
          <div className="milestone-title">Naresuan University Secondary Demonstration School (Middle School)</div>
          <div className="milestone-meta">English Integrated Study Program &bull; 2019 &ndash; 2022 &bull; GPAX: 3.10</div>
        </div>
      </Dropdown>

      {/* 3. START-UP VENTURES */}
      <Dropdown label="Start-up Ventures">
        <div className="apple-milestone">
          <div className="milestone-title">StageLink &bull; Co-Founder &amp; Full-Stack Engineer</div>
          <div className="milestone-meta">Venue Operating System &amp; Performance Recognition Sentinel</div>
          <div className="milestone-desc">
            Co-founded the live-performance recognition meter and venue operating system connecting Thai music venues with fair copyright reporting (MCT) under a &ldquo;No MCT bill, no audit&rdquo; bundled model. Engineered the Next.js web platform (Song Request Wall, night revenue analytics, multi-site fleet dashboard) and the Blackbox hardware Sentinel acoustic meter.
          </div>
        </div>

        <div className="apple-milestone">
          <div className="milestone-title">Kindee Health Intelligence &bull; Founder &amp; Lead Architect</div>
          <div className="milestone-meta">Personal Health Intelligence &amp; Nutrition System</div>
          <div className="milestone-desc">
            Personal health and nutrition intelligence platform aggregating biometric data, wearable inputs, and meal photos. Features custom allergen checking, macronutrient tracking, and personalized daily nutrition recommendations fueled by exercise physiology and nutrition science.
          </div>
        </div>
      </Dropdown>

      {/* 4. CODE & SOFTWARE ENGINEERING */}
      <Dropdown label="Code &amp; Software Engineering">
        <div className="apple-milestone">
          <div className="milestone-title">Featured Production Software Systems</div>
          <div className="milestone-desc">
            <p>
              <strong>betterLiving (Real Estate Discovery):</strong> Bilingual discovery platform built with Next.js, Fastify, and a 260+ field PostgreSQL schema with spatial indexing (<code>earthdistance</code> / <code>cube</code>) and Mapbox GL JS interactive spatial maps.
            </p>
            <p>
              <strong>auhip / Jarvis (Personal AI Assistant):</strong> Desktop AI assistant with acoustic double-snap voice activation, offline Vosk STT with cloud fallback, MediaPipe hand gesture controls, and Ollama local-to-cloud Gemini routing on PyQt6 AsyncIO.
            </p>
            <p>
              <strong>THAI THAI THAI (TTT):</strong> Serverless receipt verification and loyalty platforms using Astro, Hono.js on Cloudflare Workers, Cloudflare D1 SQL, and Cloudflare R2 object storage.
            </p>
            <p>
              <strong>MayClinic:</strong> Bilingual clinic management and practice billing platform with Next.js, TypeScript, MySQL, and secure AWS S3 medical records.
            </p>
            <p>
              <strong>B-Smart POS &amp; ERP / Beautie Point:</strong> POS &amp; ERP systems with Next.js, Angular, Tailwind CSS, Recharts dashboards, and Ruby on Rails RESTful APIs.
            </p>
            <p>
              <strong>NUD Channel:</strong> NestJS microservices with GraphQL, MongoDB, RabbitMQ event bus, and Nuxt.js/Vue admin panel.
            </p>
          </div>
        </div>

        {/* Apple Accessory Utility Cards */}
        <div className="apple-utility-grid">
          <div className="apple-utility-card">
            <h4>Languages</h4>
            <p>TypeScript, JavaScript, Python, Ruby, SQL (PostgreSQL, MySQL), Go, Dart</p>
          </div>
          <div className="apple-utility-card">
            <h4>Front-End</h4>
            <p>Next.js 16, React 19, Astro, Angular, Nuxt.js (Vue.js), Tailwind CSS, Sass</p>
          </div>
          <div className="apple-utility-card">
            <h4>Back-End &amp; APIs</h4>
            <p>NestJS, Hono.js, Fastify, Express.js, Ruby on Rails, GraphQL, REST APIs, Socket.io</p>
          </div>
          <div className="apple-utility-card">
            <h4>Databases &amp; ORMs</h4>
            <p>Prisma ORM, TypeORM, PostgreSQL (PGVector &amp; Spatial), MySQL, Cloudflare D1, TimescaleDB, MongoDB</p>
          </div>
          <div className="apple-utility-card">
            <h4>Cloud &amp; DevOps</h4>
            <p>Cloudflare Pages/Workers/R2/D1, AWS S3, Supabase, Firebase Admin, Docker, Turborepo</p>
          </div>
          <div className="apple-utility-card">
            <h4>Testing &amp; Tools</h4>
            <p>Cypress, Jest, Postman, Figma, Git, GitHub, GitLab, VS Code</p>
          </div>
        </div>
      </Dropdown>

      {/* 5. MASTER OF CEREMONIES (MC) */}
      <Dropdown label="Master of Ceremonies (MC) &amp; Live Stage Hosting">
        <div className="apple-milestone">
          <div className="milestone-title">Bilingual Stage Hosting &amp; Keynote Moderation</div>
          <div className="milestone-meta">Certified Fluent in Thai &amp; English (IELTS Academic Speaking 7.0)</div>
          <div className="milestone-desc">
            Bilingual Master of Ceremonies facilitating live stage programs, keynote speaker introductions, panel discussions, and audience engagement with natural conversational poise.
          </div>
        </div>

        <div className="apple-milestone">
          <div className="milestone-title">Audiovisual &amp; Technical Stage Foundation</div>
          <div className="milestone-meta">Audiovisual Department Tech Lead &bull; 2024</div>
          <div className="milestone-desc">
            Hands-on technical background leading livestream broadcasting, soundboard operation, and audio/visual coordination for official school conferences and assemblies.
          </div>
        </div>

        <div className="apple-milestone">
          <div className="milestone-title">Live Crowd Calibration &amp; Improvisation</div>
          <div className="milestone-meta">Live Arenas &bull; University Events &bull; Fast-Paced Formats</div>
          <div className="milestone-desc">
            Skilled in reading audience energy, spontaneous crowd banter, managing unexpected stage delays, and maintaining composure under live broadcast environments.
          </div>
        </div>

        <div className="apple-editorial-block">
          <div className="block-label">Event Formats &amp; Booking Availability</div>
          <p>
            Available for booking across tech conferences, startup demo days, academic symposiums, product launches, and bilingual corporate events.
          </p>
        </div>
      </Dropdown>

      {/* 6. DRAMATIC ACTING & COMMERCIAL MODELING */}
      <Dropdown label="Dramatic Acting &amp; Commercial Modeling">
        <div className="apple-milestone">
          <div className="milestone-title">Dramatic Series Acting &bull; Me Mind Y Studio</div>
          <div className="milestone-meta">Signed Actor (@marchtanu) &bull; Screen Productions</div>
          <div className="milestone-desc">
            Professional series actor under <strong>Me Mind Y Studio</strong> (@marchtanu). Active in production shooting queues, character arc development, intense script interpretation, dramatic dialogues, and screen performance workshops.
          </div>
        </div>

        <div className="apple-milestone">
          <div className="milestone-title">Commercial &amp; Fashion Modeling</div>
          <div className="milestone-meta">Studio Strobe &bull; Editorial Lookbooks</div>
          <div className="milestone-desc">
            Studio strobe photography, brand lookbooks, contemporary streetwear, and formal tailored menswear with athletic presence, camera poise, and strong visual storytelling.
          </div>
        </div>
      </Dropdown>

      {/* 7. TIKTOK & CONTENT CREATION */}
      <Dropdown label="TikTok &amp; Content Creation (@marchtanu)">
        <div className="apple-milestone">
          <div className="milestone-title">Short-Form Video Creator &bull; @marchtanu</div>
          <div className="milestone-meta">TikTok &bull; Instagram Reels</div>
          <div className="milestone-desc">
            Active digital creator on TikTok and Instagram (<strong>@marchtanu</strong>), producing dynamic content sharing tech development, startup behind-the-scenes, university life at Mahidol, acting rehearsals, fitness milestones, and modern lifestyle.
          </div>
        </div>

        <div className="apple-milestone">
          <div className="milestone-title">Creator Pipelines &amp; Video Automation</div>
          <div className="milestone-meta">Daydream NLE &bull; Python FFmpeg Automation</div>
          <div className="milestone-desc">
            Daydream NLE, custom Python FFmpeg automated video pipelines, mobile cinematography, sound design, and viral retention pacing tailored for modern digital audiences.
          </div>
        </div>
      </Dropdown>

      {/* 8. GYM, BODYBUILDING & ATHLETIC HEALTH SCIENCE */}
      <Dropdown label="Gym, Bodybuilding &amp; Athletic Health Science">
        <div className="apple-milestone">
          <div className="milestone-title">80kg Athletic Physique Transformation</div>
          <div className="milestone-meta">Hypertrophy &bull; Progressive Overload &bull; Cardiovascular Conditioning</div>
          <div className="milestone-desc">
            Dedicated bodybuilding and strength training with a clear 80kg athletic goal. Applying progressive overload principles, structured hypertrophy splits, and cardiovascular conditioning.
          </div>
        </div>

        <div className="apple-milestone">
          <div className="milestone-title">Nutrition Science &amp; Kindee Domain Foundation</div>
          <div className="milestone-meta">Exercise Physiology &bull; Macronutrient Tracking</div>
          <div className="milestone-desc">
            Deep personal study in exercise biomechanics, macronutrient balance, and metabolic tracking. This hands-on commitment to athletic nutrition directly fueled the foundational algorithms and health models for founding the <strong>Kindee</strong> platform.
          </div>
        </div>

        <div className="apple-milestone">
          <div className="milestone-title">Endurance &amp; Stamina</div>
          <div className="milestone-desc">
            Physical discipline directly elevates mental clarity for intensive software architecture, empowers commanding stage presence as an MC, and provides stamina for marathon 14-hour series shooting days.
          </div>
        </div>
      </Dropdown>

      {/* 9. CERTIFICATIONS, LEADERSHIP & PHILOSOPHY */}
      <Dropdown label="Certifications, Leadership &amp; Philosophy">
        <div className="apple-milestone">
          <div className="milestone-title">IELTS Academic &bull; Overall Band Score 6.5</div>
          <div className="milestone-meta">CEFR C1 Competency &bull; Speaking: 7.0 | Reading: 7.0 | Listening: 6.5 | Writing: 5.0</div>
        </div>

        <div className="apple-milestone">
          <div className="milestone-title">Audiovisual &amp; Tech Lead (2024)</div>
          <div className="milestone-meta">Naresuan University Secondary Demonstration School</div>
          <div className="milestone-desc">
            Led digital livestream technology, multi-camera broadcasting, and media productions for official school conferences and academic assemblies.
          </div>
        </div>

        {/* Apple Editorial Quote */}
        <div className="apple-quote-block">
          <blockquote>
            &ldquo;I build at the intersection of technology, entrepreneurship, stage communication, dramatic performance, and physical discipline. Whether architecting software, hosting live arenas, performing on-screen, or training in the gym, my goal is to push human potential, solve meaningful problems, and connect deeply with people.&rdquo;
          </blockquote>
        </div>
      </Dropdown>
    </div>
  );
}
