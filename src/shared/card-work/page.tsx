import "./cardwork.scss";
import Image from "next/image";

interface CardWorkProps {
  label: string;
  img: any | string; // Accepts both static images and URLs
  description: string;
  link?: string; // Optional for projects without a link
}

export function CardWork({ label, img, description, link }: CardWorkProps) {
  return (
    <div className="card_container">
      <label className="card_label">{label}</label>

      <div className="card_image">
        <Image loading="lazy" src={img} alt={label} width={350} height={200} />
      </div>

      <p className="card_description">{description}</p>

      <div className="btn">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button>View</button>
          </a>
        ) : (
          <button disabled>No Link</button>
        )}
      </div>
    </div>
  );
}
