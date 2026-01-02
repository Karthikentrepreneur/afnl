import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface CountryData {
  country: string;
  company: string;
  website: string;
  priority: number;
  flag?: string;
  route?: string;
  slug?: string;
}

const countries: CountryData[] = [
  { country: "SINGAPORE", company: "OECL", website: "https://www.oecl.sg/home", priority: 1, flag: "/sg.svg", slug: "" },
  { country: "MALAYSIA", company: "OECL", website: "https://www.oecl.sg/malaysia/home", priority: 2, flag: "/my.svg", slug: "malaysia" },
  { country: "INDONESIA", company: "OECL", website: "https://www.oecl.sg/indonesia/home", priority: 3, flag: "/id.svg", slug: "indonesia" },
  { country: "THAILAND", company: "OECL", website: "https://www.oecl.sg/thailand/home", priority: 4, flag: "/th.svg", slug: "thailand" },
  { country: "MYANMAR", company: "GC", website: "https://www.globalconsol.com", priority: 5, flag: "/mm.svg", slug: "myanmar" },
  { country: "CHINA", company: "Haixun", website: "https://www.haixun.co/", priority: 6, flag: "/cn.svg", slug: "china" },
  { country: "AUSTRALIA", company: "GGL", website: "https://www.gglaustralia.com/", priority: 7, flag: "/au.svg", slug: "australia" },
  { country: "INDIA", company: "OECL", website: "https://www.oecl.sg/india/home", priority: 8, flag: "/in.svg", slug: "india" },
  { country: "SRI LANKA", company: "GC", website: "https://www.globalconsol.com", priority: 9, flag: "/lk.svg", slug: "sri-lanka" },
  { country: "PAKISTAN", company: "GC", website: "https://www.globalconsol.com", priority: 10, flag: "/pk.svg", slug: "pakistan" },
  { country: "QATAR", company: "ONE GLOBAL", website: "https://oneglobalqatar.com/", priority: 11, flag: "/qa.svg", slug: "qatar" },
  { country: "SAUDI ARABIA", company: "AMASS", website: "https://amassmiddleeast.com/", priority: 12, flag: "/sa.svg", slug: "saudi-arabia" },
  { country: "UAE", company: "AMASS", website: "https://amassmiddleeast.com/", priority: 13, flag: "/ae.svg", slug: "uae" },
  { country: "USA", company: "GGL", website: "https://gglusa.us/", priority: 14, flag: "/us.svg", slug: "usa" },
  { country: "UK", company: "Moltech", website: "https://moltech.uk/", priority: 15, flag: "/gb.svg", slug: "uk" },
];

const CountrySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Always UAE
  const displayCountry = countries.find(
    (c) => c.country === "UAE"
  ) as CountryData;

  const sortedCountries = countries
    .filter((c) => c.country !== "UAE")
    .sort((a, b) => a.priority - b.priority);

  const handleCountrySelect = (country: CountryData) => {
    const currentPath = location.pathname;
    let targetRoute = country.route;

    if (currentPath.includes("/about-us")) {
      const prefix = country.slug ? `/${country.slug}` : "";
      targetRoute = `${prefix}/about-us`;
    } else if (currentPath.includes("/contact")) {
      const prefix = country.slug ? `/${country.slug}` : "";
      targetRoute = `${prefix}/contact`;
    }

    if (targetRoute) {
      window.location.href = targetRoute;
    } else {
      window.open(country.website, "_blank", "noopener,noreferrer");
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative z-50 flex items-center gap-2">
      {/* Always UAE Flag */}
      <img
        src={displayCountry.flag}
        alt="UAE flag"
        className="w-6 h-6 rounded shadow-sm object-cover"
      />

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button className="bg-black text-white border-black hover:bg-black/90 px-4 py-2 rounded-full flex items-center gap-2">
            <Globe className="w-6 h-6" />
            <span className="flex items-center gap-1">
              Switch Country <ChevronDown className="h-3 w-3" />
            </span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="center"
          className="w-[280px] h-[90vh] bg-white p-2 rounded-lg shadow-lg"
        >
          <ScrollArea className="h-full w-full pr-2">
            <div className="grid gap-1 p-1">
              {sortedCountries.map((country) => (
                <DropdownMenuItem
                  key={country.country}
                  onSelect={(e) => {
                    e.preventDefault();
                    handleCountrySelect(country);
                  }}
                  className="
                    group cursor-pointer
                    bg-white
                    hover:bg-black
                    rounded-md
                    py-4 px-3
                    transition-all
                  "
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center w-full"
                  >
                    <img
                      src={country.flag}
                      alt={country.country}
                      className="w-6 h-6 rounded-sm shadow-sm"
                    />

                    <div className="ml-3 flex-1">
                      <div className="text-sm font-medium text-black group-hover:text-white transition-colors">
                        {country.country}
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-white transition-colors">
                        {country.company}
                      </div>
                    </div>
                  </motion.div>
                </DropdownMenuItem>
              ))}
            </div>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CountrySelector;
