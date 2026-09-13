import Img from "@/assets/march_project_logo.png";
import Image from "next/image";

export default function CodeWork() {
  return (
    <div className="showcase-content">
      <div className="showcase-header">
        <Image
          src={Img}
          alt="Code Work Logo"
          width={80}
          height={80}
          className="showcase-logo"
        />
        <h2>Software Engineering & AI Products</h2>
      </div>
      <p className="showcase-description">
        Architecting and engineering production full-stack systems and startup platforms (StageLink, betterLiving, MayClinic, TTT).
        Specialized in TypeScript, Next.js 15, NestJS, Prisma ORM, PostgreSQL with Vector Search &amp; Spatial GIS, and Cloudflare serverless edge deployments.
      </p>
      <div className="tech-pills">
        <span>TypeScript</span>
        <span>Next.js 15 &bull; React 19</span>
        <span>NestJS &bull; Prisma ORM</span>
        <span>PostgreSQL &bull; PGVector</span>
        <span>Spatial GIS &bull; Mapbox</span>
        <span>Cloudflare Pages &bull; Workers</span>
        <span>Hono.js &bull; Fastify</span>
        <span>Python &bull; AsyncIO</span>
      </div>
    </div>
  );
}
