import { useRouter } from "next/router";

export default function FloatingContactButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact"); // Redirects to the Contact page
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "15px 20px",
        backgroundColor: "#0070f3",
        color: "#fff",
        border: "none",
        borderRadius: "50px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      Contact Us
    </button>
  );
}
