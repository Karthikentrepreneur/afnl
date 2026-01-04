import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  X,
  MapPin,
  Globe,
  ExternalLink,
  Phone,
  Mail,
  Home,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

/* =========================
   SINGLE BRAND COLOR
========================= */
const PRIMARY = "rgb(45 139 77)";

/* =========================
   TYPES
========================= */
interface ContactSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/* =========================
   DATA (UNCHANGED)
========================= */
const countries = [
  {
    code: "in",
    name: "India",
    lat: 19.1061,
    lng: 72.883,
    cities: [
      {
        name: "Mumbai",
        lat: 19.1061,
        lng: 72.883,
        address:
          "Town Center - 2,Office No.607,6th Floor, Marol,Andheri Kurla Road,Andheri East, Mumbai - 400059.",
        contacts: ["+91 8879756838, 022-35131688 / 35113475 / 35082586"],
        email: "info@oecl.sg",
      },
      {
        name: "Delhi",
        lat: 28.5894,
        lng: 77.0318,
        address:
          "Plot No. 15, 1st Floor,Block C, Pocket 8, Sector 17, Dwarka,New Delhi 110075",
        contacts: ["+91 11 41088871"],
        email: "info@oecl.sg",
      },
      {
        name: "Chennai Warehouse",
        lat: 13.0231,
        lng: 79.9632,
        address:
          "Survey No.209/6A(Part)209/6B(Part), Mannur & Valarpuram Village, Perambakkam Road, Sriperumbudur Taluk, Kanchipuram District-602105",
        contacts: ["+91 9994355523"],
        email: "info@oecl.sg",
      },
      {
        name: "Chennai",
        lat: 13.0068,
        lng: 80.2048,
        address:
          "Roma Building, Door No. 10, 3rd Floor, G.S.T. Road, Alandur, Chennai-600 016",
        contacts: ["044 4689 4646"],
        email: "info@oecl.sg",
      },
      {
        name: "Kerala",
        lat: 9.9323,
        lng: 76.2996,
        address:
          "CC 59/801A Elizabeth Memorial Building, Thevara Ferry Jn, Cochin 682013 , Kerala.",
        contacts: ["+91 484 4019192 / 93"],
        email: "info@oecl.sg",
      },
      {
        name: "Hyderabad",
        lat: 17.4425,
        lng: 78.4735,
        address:
          "H.No. 1-8-450/1/A-7 Indian Airlines colony ,Opp Police Lines, BegumpetHyderabad-500016,Telangana",
        contacts: ["040-49559704"],
        email: "info@oecl.sg",
      },
      {
        name: "Bangalore",
        lat: 13.0185,
        lng: 77.6419,
        address:
          "3C-964 IIIrd Cross Street,HRBR LAYOUT 1st Block,Kalayan Nagar Bannaswadi,Bengaluru - 560043.",
        contacts: ["+91 9841676259"],
        email: "info@oecl.sg",
      },
      {
        name: "Kolkata",
        lat: 22.5745,
        lng: 88.4353,
        address:
          "Imagine Techpark, Unit No. 10,19th. Floor, Block DN 6, Sector - VSalt Lake City, Kolkata,West Bengal, India - 700091",
        contacts: ["+91 33 4814 9162 / 63"],
        email: "info@oecl.sg",
      },
    ],
  },
  /* ---- OTHER COUNTRIES UNCHANGED ---- */
];

/* =========================
   COMPONENT
========================= */
const ContactSidebar: React.FC<ContactSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  const location = useLocation();
  const isIndiaPage = location.pathname.startsWith("/india");
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [selectedCityIndexes, setSelectedCityIndexes] = useState<
    Record<string, number>
  >({});
  const isMobile = useIsMobile();

  const sortedCountries = [...countries]
    .filter((c) => !(isIndiaPage && c.code === "pk"))
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    iframeRef.current = document.querySelector(
      'iframe[title="Interactive Map"]'
    );
  }, []);

  useEffect(() => {
    if (sortedCountries.length) {
      const firstCountry = sortedCountries[0];
      const firstCity = firstCountry.cities[0];
      setExpandedCountry(firstCountry.name);
      const indexMap: Record<string, number> = {};
      sortedCountries.forEach((c) => (indexMap[c.name] = 0));
      setSelectedCityIndexes(indexMap);
      navigateToLocation(firstCity.lat, firstCity.lng);
    }
  }, []);

  const navigateToLocation = (lat: number, lng: number) => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    iframe.src = `https://www.google.com/maps/d/u/0/embed?mid=1rF5337I7j7xk98at6ZPdMul4aglzrLg&z=12&ll=${lat},${lng}&hl=en&output=embed`;
  };

  const handleCitySelection = (country: any, index: number) => {
    setSelectedCityIndexes((p) => ({ ...p, [country.name]: index }));
    const city = country.cities[index];
    navigateToLocation(city.lat, city.lng);
  };

  const isSelectedCity = (country: string, index: number) =>
    selectedCityIndexes[country] === index;

  return (
    <>
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      <div className="my-3 w-full max-w-[520px] mx-auto px-2">
        {/* HEADER */}
        <div
          className="flex justify-between items-center px-4 py-3 text-white rounded-t-xl"
          style={{ backgroundColor: PRIMARY }}
        >
          <div className="flex items-center gap-2">
            <Globe size={18} />
            <h2 className="font-bold text-lg">Global Locations</h2>
          </div>
          {isMobile && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={16} />
            </Button>
          )}
        </div>

        {/* CONTENT */}
        <ScrollArea className="h-[calc(100vh-10rem)] bg-white rounded-b-xl shadow-md">
          <div className="p-4">
            <Accordion
              type="single"
              collapsible
              value={expandedCountry || ""}
              className="space-y-3"
            >
              {sortedCountries.map((country) => (
                <AccordionItem
                  key={country.name}
                  value={country.name}
                  className="border border-gray-200 rounded-lg"
                >
                  <AccordionTrigger
                    onClick={() => {
                      setExpandedCountry(
                        expandedCountry === country.name
                          ? null
                          : country.name
                      );
                      navigateToLocation(country.lat, country.lng);
                    }}
                    className="px-3 py-2 hover:bg-[rgba(45,139,77,0.08)]"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={`/${country.code}.svg`}
                        className="w-6 h-6"
                      />
                      <span>{country.name}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-3 py-2">
                    {country.cities.map((city: any, index: number) => (
                      <div key={index} className="mb-2">
                        <Button
                          variant="ghost"
                          onClick={() =>
                            handleCitySelection(country, index)
                          }
                          className={cn(
                            "w-full justify-start border rounded-md",
                            isSelectedCity(country.name, index)
                              ? "bg-[rgba(45,139,77,0.12)] border-[rgb(45,139,77)]"
                              : "hover:bg-[rgba(45,139,77,0.06)]"
                          )}
                        >
                          <MapPin
                            size={16}
                            className="mr-2"
                            style={{ color: PRIMARY }}
                          />
                          {city.name}
                          <ChevronRight
                            size={16}
                            className="ml-auto"
                            style={{ color: PRIMARY }}
                          />
                        </Button>

                        {isSelectedCity(country.name, index) && (
                          <div className="mt-2 p-3 border rounded-lg text-sm">
                            <h4
                              className="font-semibold mb-2"
                              style={{ color: PRIMARY }}
                            >
                              {city.name} Office
                            </h4>

                            <div className="flex mb-2">
                              <Home
                                size={16}
                                className="mr-2"
                                style={{ color: PRIMARY }}
                              />
                              {city.address}
                            </div>

                            {city.contacts?.map(
                              (c: string, i: number) => (
                                <div key={i} className="flex mb-1">
                                  <Phone
                                    size={16}
                                    className="mr-2"
                                    style={{ color: PRIMARY }}
                                  />
                                  {c}
                                </div>
                              )
                            )}

                            {city.email && (
                              <a
                                href={`mailto:${city.email}`}
                                className="flex items-center"
                                style={{ color: PRIMARY }}
                              >
                                <Mail size={16} className="mr-2" />
                                {city.email}
                                <ExternalLink
                                  size={12}
                                  className="ml-1"
                                />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default ContactSidebar;
