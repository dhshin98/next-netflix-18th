"use client";

export const SquareImg = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div style={{ width: "6.4375rem", height: "10.0625rem" }}>
      <img
        style={{ width: "6.4375rem", height: "10.0625rem", objectFit: "cover" }}
        className="block"
        src={imageUrl}
        alt="popularimage"
      />
    </div>
  );
};
