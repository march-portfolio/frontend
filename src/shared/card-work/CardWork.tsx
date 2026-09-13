import "./cardwork.scss";
import Image, { StaticImageData } from "next/image";

interface CardWorkProps {
  label: string;
  img: StaticImageData | string;
  description: string;
  tags?: string[];
  link?: string;
}

export function CardWork({ label, img, description, tags, link }: CardWorkProps) {
  return (
    <div className="card_container">
      <h3 className="card_label">{label}</h3>

      <div className="card_image">
        <Image loading="lazy" src={img} alt={label} width={350} height={200} />
      </div>

      <p className="card_description">{description}</p>

      {tags && tags.length > 0 && (
        <div className="card_tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="card_tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="btn">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="card_btn_link">
            View Project
          </a>
        ) : (
          <span className="card_btn_disabled">Coming Soon</span>
        )}
      </div>
    </div>
  );
}

export default CardWork;
