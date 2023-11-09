//메인페이지
import Header from "./Header";
import NavBar from "@/components/navbar";
import styled from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-between items-center h-screen w-full relative">
      <Header />
      <div className="self-start">{children}</div>
      <NavBar />
    </section>
  );
}
