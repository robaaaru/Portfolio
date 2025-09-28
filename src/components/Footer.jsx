import { Square, PanelsTopLeft, Building, SquarePen, SquareUser } from "lucide-react";

export default function Footer({ setPage }) {
  const strokeWidth = 1.8;

  const baseIconClasses =
    "stroke-gray-700 hover:stroke-[#048688] lg:w-[1.7rem] lg:h-[1.75rem] w-[1.3rem] h-[1.3rem] hover:-translate-y-1 transition-transform duration-175 ease-in cursor-pointer";
  const wrapperClasses = "h-10";

  const icons = [
    { icon: Square, key: "Square" },
    { icon: PanelsTopLeft, key: "PanelsTopLeft" },
    { icon: Building, key: "Building" },
    { icon: SquarePen, key: "SquarePen" },
    { icon: SquareUser, key: "SquareUser" },
  ];

  return (
    <footer className="fixed bottom-0 w-full p-5 h-17 overflow-hidden backdrop-blur-2xl">
      <div className="flex justify-center items-center gap-6">
        {icons.map(({ icon: Icon, key }, index) => (
          <button
            key={key}
            onClick={() => setPage(index)}
            className={wrapperClasses}
            aria-label={key}
          >
            <Icon strokeWidth={strokeWidth} className={baseIconClasses} />
          </button>
        ))}
      </div>
    </footer>
  );
}
