import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
        <button onClick={handleScrollTop} className="btn btn-outline scroll-top-btn">
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}