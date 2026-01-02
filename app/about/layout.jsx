import Footer from "@/components/Footer";

export const metadata = {
  title: "John Maliwa | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
