"use client";

export const Previews = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div style={{ width: "6.375rem", height: "6.375rem" }}>
      <img
        style={{ width: "6.375rem", height: "6.375rem", objectFit: "cover" }}
        className="block rounded-full"
        src={imageUrl}
        alt="previewimage"
      />
    </div>
  );
};
