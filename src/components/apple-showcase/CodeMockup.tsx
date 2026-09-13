import React from "react";
import "./mockups.scss";

export function CodeMockup() {
  return (
    <div className="apple-mockup-window code-mockup">
      <div className="window-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="window-tab">
          <i className="bi bi-filetype-tsx"></i>
          <span>StageLink.service.ts &bull; NestJS + Prisma</span>
        </div>
        <div className="window-actions">
          <span className="badge-status">
            <span className="status-indicator live"></span> 18ms &bull; OpenNext Edge
          </span>
        </div>
      </div>

      <div className="code-body">
        <div className="line-numbers">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
          <span>07</span>
          <span>08</span>
          <span>09</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
        </div>
        <pre className="code-content">
          <code>
{`// StageLink Monorepo: Next.js 15 + NestJS + Prisma Vector
@Injectable()
export class TalentSearchService {
  constructor(private readonly prisma: PrismaService) {}

  async searchPerformers(vector: number[], category: string) {
    return this.prisma.$queryRaw\`
      SELECT id, name, category, hourly_rate
      FROM performers WHERE category = \${category}
      ORDER BY embedding <=> \${vector}::vector LIMIT 10;
    \`;
  }
}`}
          </code>
        </pre>
      </div>

      <div className="mockup-footer-stats">
        <div className="stat-chip">
          <span className="stat-label">Stack</span>
          <span className="stat-val">Next.js 15 &bull; NestJS</span>
        </div>
        <div className="stat-chip">
          <span className="stat-label">Database</span>
          <span className="stat-val">Prisma &bull; PGVector</span>
        </div>
        <div className="stat-chip">
          <span className="stat-label">Deployment</span>
          <span className="stat-val">Cloudflare Pages &bull; OpenNext</span>
        </div>
      </div>
    </div>
  );
}

export default CodeMockup;
