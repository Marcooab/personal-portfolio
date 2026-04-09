import useScrollPosition from "../../hooks/useScrollPosition";

function ScrollUpButton() {
  const scrollY = useScrollPosition();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (scrollY < 300) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full text-xl shadow-lg transition-colors duration-300 z-50"
    >
      ↑
    </button>
  );
}

export default ScrollUpButton;