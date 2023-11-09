//메인페이지
import Header from "./Header";
import NavBar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
      <NavBar />
    </section>
  );
}
