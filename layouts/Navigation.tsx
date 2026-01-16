// components/Navigation.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { getIconComponent } from "./iconUtils";
import navData from "./nav-data.json";

// Types
interface LinkItem {
  label: string;
  path: string;
}

interface MenuSection {
  heading: string;
  key: string;
  items: LinkItem[];
}

interface MenuBlock {
  icon: string;
  title: string;
  items?: LinkItem[];
  sections?: MenuSection[];
}

interface NavItem {
  name: string;
  path: string;
}

// Import JSON data with proper typing
const {
  topLevelItems,
  whoWeAre,
  manageBusiness,
  services,
  industry,
  platforms,
  start,
} = navData as {
  topLevelItems: NavItem[];
  whoWeAre: MenuBlock[];
  manageBusiness: MenuBlock[];
  services: MenuBlock[];
  industry: MenuBlock[];
  platforms: MenuBlock[];
  start: MenuBlock[];
};

/* ---------------- COLLAPSIBLE SECTION COMPONENT --------------- */

function CollapsibleSection({
  section,
  onNavItemClick,
}: {
  section: MenuSection;
  onNavItemClick?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-1.5">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-left text-[13px] uppercase tracking-[0.12em] text-white hover:text-white transition-colors"
      >
        <span>{section.heading}</span>
        <ChevronDown
          className={`w-3 h-3 ml-2 transition-transform duration-150 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <div className="space-y-1.5 mt-1">
          {section.items.map((link, j) => (
            <Link
              key={j}
              href={link.path}
              onClick={() => onNavItemClick?.()}
              className="block text-[14px] leading-[1.4] transition-colors text-white hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- MEGA MENU RENDERER COMPONENT --------------- */

interface MegaMenuProps {
  menuData: MenuBlock[];
  isActive: boolean;
  menuKey: string;
  width?: string;
  columns?: number;
  position?: "left" | "center" | "right" | "left-edge" | "right-edge";
  offsetX?: number;
  alignTo?: "parent" | "screen" | "container";
  /** Hide animation duration in milliseconds */
  hideDelay?: number;
}

function MegaMenuRenderer({
  menuData,
  isActive,
  menuKey,
  width = "960px",
  columns = 3,
  position = "center",
  offsetX = 0,
  alignTo = "parent",
  hideDelay = 500,
  onNavItemClick,
}: MegaMenuProps & { onNavItemClick?: () => void }) {
  const pathname = usePathname();
  const [forceHide, setForceHide] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset forceHide when route changes so menus can open again
    setForceHide(false);
    setIsHiding(false);
    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, [pathname]);

  useEffect(() => {
    // Global click fallback: if user clicks outside the menu or its parent, trigger hide
    const onDocumentClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (forceHide) return;

      if (menuRef.current && parentRef.current) {
        if (
          !menuRef.current.contains(target) &&
          !parentRef.current.contains(target)
        ) {
          triggerHide();
        }
      }
    };

    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [forceHide]);

  const triggerHide = (delay = hideDelay) => {
    // start the CSS fade/translate animation
    setIsHiding(true);
    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = window.setTimeout(() => {
      setForceHide(true);
      setIsHiding(false);
      hideTimeoutRef.current = null;
    }, delay);
  };

  const navLinkPath =
    menuKey === "start"
      ? "/start-business"
      : menuKey === "whoWeAre"
      ? "/about"
      : menuKey === "manageBusiness"
      ? "/manage-business"
      : menuKey === "services"
      ? "/services"
      : menuKey === "industry"
      ? "/industry"
      : menuKey === "platforms"
      ? "/platforms"
      : `/${menuKey}`;

  const gridColumnsClass =
    columns === 3
      ? "grid-cols-3"
      : columns === 4
      ? "grid-cols-4"
      : "grid-cols-3";

  const displayName =
    menuKey === "start"
      ? "Start"
      : menuKey === "whoWeAre"
      ? "Who we are"
      : menuKey === "manageBusiness"
      ? "Manage"
      : menuKey === "services"
      ? "Grow"
      : menuKey === "industry"
      ? "Industry"
      : menuKey === "platforms"
      ? "Platform"
      : menuKey;

  const parentRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updatePosition = () => {
      if (!parentRef.current || !menuRef.current) return;

      const parentRect = parentRef.current.getBoundingClientRect();
      const menuWidth = parseInt(width.replace("px", ""));

      let leftPosition = 0;

      switch (position) {
        case "left-edge":
          leftPosition = 0;
          break;
        case "left":
          leftPosition = 0;
          break;
        case "center":
          leftPosition = parentRect.left + parentRect.width / 2 - menuWidth / 2;
          break;
        case "right":
          leftPosition = parentRect.right - menuWidth;
          break;
        case "right-edge":
          leftPosition = window.innerWidth - menuWidth;
          break;
        default:
          leftPosition = parentRect.left + parentRect.width / 2 - menuWidth / 2;
      }

      leftPosition += offsetX;

      if (alignTo === "screen") {
        leftPosition = Math.max(
          0,
          Math.min(leftPosition, window.innerWidth - menuWidth)
        );
      }

      setMenuStyle({
        width: width,
        left: `${leftPosition}px`,
        position: "fixed" as const,
        top: `${parentRect.bottom + 12}px`,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, [width, position, offsetX, alignTo]);

  // Reset forceHide when mouse enters the trigger - this fixes the issue
  // where hover doesn't work after clicking a link
  const handleMouseEnter = () => {
    if (forceHide) {
      setForceHide(false);
    }
    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setIsHiding(false);
  };

  return (
    <div
      ref={parentRef}
      className="relative inline-flex items-center group"
      onMouseEnter={handleMouseEnter}
    >
      <Link
        href={navLinkPath}
        onClick={() => {
          triggerHide();
          onNavItemClick?.();
        }}
        className={`cursor-pointer text-[12px] xl:text-[15px] tracking-[0.04em] uppercase transition-colors duration-200 flex items-center gap-0.5 xl:gap-1 ${
          isActive ? "text-white font-semibold" : "text-white font-normal"
        } hover:text-white`}
      >
        <span>{displayName}</span>
        <ChevronDown className="w-3 h-3 ml-0.5 xl:ml-1 transition-transform duration-150 group-hover:rotate-180" />
      </Link>

      <div
        ref={menuRef}
        style={{ ...menuStyle, transitionDuration: `${hideDelay}ms` }}
        /* temporary test: extremely large to make the change obvious */
        className={
          `fixed rounded-3xl bg-[#111111]/95 border border-[#262626] shadow-[0_32px_60px_rgba(0,0,0,0.80)] py-6 px-0 transition-all ease-out z-[50] backdrop-blur-md text-[28px] ` +
          `invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 ` +
          `${
            isHiding
              ? "visible opacity-0 -translate-y-2 pointer-events-none"
              : ""
          } ` +
          `${forceHide ? "hidden" : ""}`
        }
      >
        <div className="px-8 max-h-[70vh] overflow-y-auto no-scrollbar">
          <div className={`grid ${gridColumnsClass} gap-x-10 gap-y-6`}>
            {menuData.map((block, i) => {
              const IconComponent = getIconComponent(block.icon);
              return (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1C1C1C] text-white">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[15px] font-semibold text-white">
                      {block.title}
                    </span>
                  </div>

                  {block.items && (
                    <div className="space-y-1.5">
                      {block.items.map((link, j) => (
                        <Link
                          key={j}
                          href={link.path}
                          onClick={() => {
                            triggerHide();
                            onNavItemClick?.();
                          }}
                          className="block text-[14px] leading-[1.4] transition-colors text-white/90 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {block.sections && (
                    <div className="space-y-3">
                      {block.sections.map((section) => (
                        <CollapsibleSection
                          key={section.key}
                          section={section}
                          onNavItemClick={() => {
                            triggerHide();
                            onNavItemClick?.();
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- MAIN NAVIGATION COMPONENT --------------- */

export default function Navigation({
  onNavItemClick,
}: {
  onNavItemClick?: () => void;
}) {
  const pathname = usePathname();

  // Handle null pathname with optional chaining and default empty string
  const currentPath = pathname || "";

  const isPlatformsActive = currentPath.startsWith("/platforms");
  const isStartActive =
    currentPath.startsWith("/start-business") ||
    currentPath.startsWith("/start");
  const isManageBusinessActive = currentPath.startsWith("/manage-business");
  const isServicesActive = currentPath.startsWith("/services");
  const isIndustryActive = currentPath.startsWith("/industry");
  const isAboutActive = currentPath.startsWith("/about");

  return (
    <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
      {topLevelItems.map((item: NavItem, index: number) => {
        const path = item.path;
        const isPlatforms = path === "/platforms";
        const isStart = path === "/start-business";
        const isManageBusiness = path === "/manage-business";
        const isServices = path === "/services";
        const isIndustry = path === "/industry";
        const isAbout = path === "/about";
        const isExpand = path === "/expand-business";

        if (isExpand) {
          return (
            <Link
              key={index}
              href={item.path}
              onClick={() => onNavItemClick?.()}
              className="cursor-pointer text-[15px] tracking-[0.04em] uppercase transition-colors duration-200 text-white font-normal hover:text-white"
            >
              {item.name}
            </Link>
          );
        }

        if (isAbout) {
          return (
            <MegaMenuRenderer
              key={index}
              menuData={whoWeAre}
              isActive={isAboutActive}
              menuKey="whoWeAre"
              width="500px"
              columns={3}
              position="right"
              offsetX={-20}
              alignTo="screen"
              onNavItemClick={onNavItemClick}
            />
          );
        }

        if (isServices) {
          return (
            <MegaMenuRenderer
              key={index}
              menuData={services}
              isActive={isServicesActive}
              menuKey="services"
              width="1200px"
              columns={3}
              position="center"
              alignTo="screen"
              onNavItemClick={onNavItemClick}
            />
          );
        }

        if (isIndustry) {
          return (
            <MegaMenuRenderer
              key={index}
              menuData={industry}
              isActive={isIndustryActive}
              menuKey="industry"
              width="960px"
              columns={4}
              position="center"
              offsetX={-100}
              alignTo="screen"
              onNavItemClick={onNavItemClick}
            />
          );
        }

        if (isManageBusiness) {
          return (
            <MegaMenuRenderer
              key={index}
              menuData={manageBusiness}
              isActive={isManageBusinessActive}
              menuKey="manageBusiness"
              width="1200px"
              columns={3}
              position="left"
              offsetX={10}
              alignTo="screen"
              onNavItemClick={onNavItemClick}
            />
          );
        }

        if (isPlatforms) {
          return (
            <MegaMenuRenderer
              key={index}
              menuData={platforms}
              isActive={isPlatformsActive}
              menuKey="platforms"
              width="960px"
              columns={4}
              position="right"
              offsetX={-10}
              alignTo="screen"
              onNavItemClick={onNavItemClick}
            />
          );
        }

        if (isStart) {
          return (
            <MegaMenuRenderer
              key={index}
              menuData={start}
              isActive={isStartActive}
              menuKey="start"
              width="1200px"
              columns={4}
              position="left"
              offsetX={20}
              alignTo="screen"
              onNavItemClick={onNavItemClick}
            />
          );
        }

        return null;
      })}
    </nav>
  );
}
