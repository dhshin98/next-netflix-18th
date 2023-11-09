//메인페이지
import Header from "./Header";
import NavBar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center">
      <Header />
      <div className="self-start w-full">{children}</div>
      <NavBar />
    </section>
  );
}
