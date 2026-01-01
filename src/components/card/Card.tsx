import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  img: { src: string; alt?: string; style?: string };
  title: string;
  description: string;
  ref?: React.Ref<HTMLDivElement>;
  containerStyle?: string;
}

function Card({
  img,
  title,
  description,
  ref,
  containerStyle,
  ...props
}: CardProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "max-w-70 h-fit rounded-xl overflow-hidden shadow-sm bg-white transition-all",
        containerStyle
      )}
      {...props}
    >
      <img
        src={img.src}
        alt={img.alt ?? "image"}
        className={cn("w-full object-cover h-60 object-top", img.style)}
      />
      <div className={cn("p-5 pt-3")}>
        <p className={cn("text-lg font-semibold mt-2 max-md:text-base")}>
          {title}
        </p>
        <p className={cn("text-gray-600 mt-1 max-md:text-sm")}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
