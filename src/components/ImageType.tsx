"use client";
import Image from "next/image";
export const SquareImg = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div
      style={{ width: "6.4375rem", height: "10.0625rem", position: "relative" }}
    >
      <Image
        src={imageUrl}
        alt="popularimage"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export const Previews = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div
      style={{ width: "6.375rem", height: "6.375rem", position: "relative" }}
    >
      <Image
        src={imageUrl}
        alt="previewimage"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};
