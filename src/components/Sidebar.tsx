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
const countries = [{
  code: "in",
  name: "India",
  lat: 19.1061,
  lng: 72.8830,
  cities: [{
    name: "Mumbai",
    lat: 19.1061,
    lng: 72.8830,
    address: "Town Center - 2,Office No.607,6th Floor, Marol,Andheri Kurla Road,Andheri East, Mumbai - 400059.",
    contacts: ["+91 8879756838, 022-35131688 / 35113475 / 35082586"],
    email: "info@oecl.sg"
  }, {
    name: "Delhi",
    lat: 28.5894,
    lng: 77.0318,
    address: "Plot No. 15, 1st Floor,Block C, Pocket 8, Sector 17, Dwarka,New Delhi 110075",
    contacts: ["+91 11 41088871"],
    email: "info@oecl.sg"
  },{
    name: "Chennai Warehouse",
    lat: 13.0231,
    lng: 79.9632,
    address: "Survey No.209/6A(Part)209/6B(Part), Mannur & Valarpuram Village, Perambakkam Road, Sriperumbudur Taluk, Kanchipuram District-602105",
    contacts: ["+91 9994355523"],
    email: "info@oecl.sg"
  }, {
    name: "Chennai",
    lat: 13.0068,
    lng: 80.2048,
    address: "Roma Building, Door No. 10, 3rd Floor, G.S.T. Road, Alandur, Chennai-600 016",
    contacts: ["044 4689 4646"],
     email: "info@oecl.sg"
  }, {
    name: "Kerala",
    lat: 9.9323,
    lng: 76.2996,
    address: "CC 59/801A Elizabeth Memorial Building, Thevara Ferry Jn, Cochin 682013 , Kerala.",
    contacts: ["+91 484 4019192 / 93"],
    email: "info@oecl.sg"
  },{
    name: "Hyderabad",
    lat: 17.4425,
    lng: 78.4735,
    address: "H.No. 1-8-450/1/A-7 Indian Airlines colony ,Opp Police Lines, BegumpetHyderabad-500016,Telangana",
    contacts: ["040-49559704"],
    email: "info@oecl.sg"
  },{
    name: "Bangalore",
    lat: 13.0185,
    lng: 77.6419,
    address: "3C-964 IIIrd Cross Street,HRBR LAYOUT 1st Block,Kalayan Nagar Bannaswadi,Bengaluru - 560043.",
    contacts: ["+91 9841676259"],
    email: "info@oecl.sg"
  }, {
    name: "Kolkata",
    lat: 22.5745,
    lng: 88.4353,
    address: "Imagine Techpark, Unit No. 10,19th. Floor, Block DN 6, Sector - VSalt Lake City, Kolkata,West Bengal, India - 700091",
    contacts: ["+91 33 4814 9162 / 63"],
    email: "info@oecl.sg"
  }]
},  {
  code: "my",
  name: "Malaysia",
  lat: 1.4842,
  lng: 103.7629,
  cities: [{
    name: "PASIRGUDANG",
    lat: 1.4842,
    lng: 103.7629,
    address: "Unit 20-03A, Level 20 Menara Zurich, 15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru",
    contacts: ["+603-3319 2778 / 74 / 75, 79"],
    email: "info@oecl.sg"
  }, {
    name: "PORTKLANG",
    lat: 2.9982,
    lng: 101.3831,
    address: "MTBBT 2, 3A-5, Jalan Batu Nilam 16, The Landmark (Behind AEON Mall), Bandar Bukit Tinggi 2, 41200, Klang, Selangor D.E",
    contacts: ["+603 - 3319 2778 / 74 / 75"],
    email: "info@oecl.sg"
  }]
}, {
  code: "ae",
  name: "United Arab Emirates (UAE)",
    lat: 25.2048,
    lng: 55.2708,
  cities: [{
    name: "Dubai",
    lat: 25.2048,
    lng: 55.2708,
    address: "Office # 509, Al Nazar Plaza, Oud Metha, Dubai, U.A.E",
    contacts: ["+971 4 3433388"]
  }, {
    name: "JEBEL ALI",
    lat: 24.9857,
    lng: 55.1436,
    address: "Warehouse# Zg06, Near Roundabout 13, North Zone, p. B No: 30821, jebel Ali, Dubai, U.A.E",
    contacts: ["+971 4 8819787"]
  }, {
    name: "ABU DHABI",
    lat: 24.4539,
    lng: 54.3773,
    address: "PB No: 30500, Office 3-1, Unit 101, 1st Floor, Al Jaber Jewellery Building, Al Khalidiya, Abu Dhabi, U.A.E",
    contacts: ["+971 50 4337214"]
  }]
}, {
  code: "qa",
  name: "Qatar",
    lat: 25.276987,
    lng: 51.520008,
  cities: [{
    name: "Doha",
    lat: 25.276987,
    lng: 51.520008,
    address: "Office no: 48, 2nd Floor, Al matar Centre, Old Airport Road Doha",
    contacts: ["0974 33622555"]
  }]
},{
  code: "cn",
  name: "China",
    lat: 22.54262,
    lng: 114.11696,
  cities: [{
    name: "China",
    lat: 22.54262,
    lng: 114.11696,
    address: "13C02, Block A, Zhaoxin Huijin Plaza 3085 Shennan East Road, Luohu, Shenzhen.",
    contacts: ["+86 75582222447"],
    email: "helen@haixun.co"
  }]
}, {
  code: "sa",
  name: "Saudi Arabia",
  lat: 26.4207,
    lng: 50.0888,
  cities: [{
    name: "Dammam",
    lat: 26.4207,
    lng: 50.0888,
    address: "Building No.2817, Secondary No9403, King Faisal Road, Al Tubebayshi Dist, Dammam, KSA 32233",
    contacts: ["+966 13 343 0003"]
  }, {
    name: "Riyadh",
    lat: 24.7136,
    lng: 46.6753,
    address: "Room No. T18, Rail Business Centre, Bldg No. 3823, Omar Aimukhtar St, Thulaim, Riyadh 11332",
    contacts: ["+966 11295 0020"]
  }, {
    name: "Jeddah",
    lat: 21.4858,
    lng: 39.1925,
    address: "Al-Madinah Al-Munawarah Road, Al Sharafeyah, Jeddah 4542 -22234, Kingdom of Saudi Arabia",
    contacts: ["+966 12 578 0874"]
  }]
},{
  code: "sg",
  name: "Singapore",
  lat: 1.3521,
  lng: 103.8198,
  cities: [{
    name: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    address: "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore - 099447",
    contacts: ["+ 65 69080838"],
    email: "info@oecl.sg"
  }]
}, {
  code: "id",
  name: "Indonesia",
  lat: -6.2088,
  lng: 106.8456,
  cities: [{
    name: "Jakarta",
    lat: -6.2088,
    lng: 106.8456,
    address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
    contacts: ["+62 21 529 20292, 522 4887"],
    email: "logistics.jkt@oecl.sg"
  }, {
    name: "Surabaya",
    lat: -7.2575,
    lng: 112.7521,
    address: "Japfa Indoland Center, Japfa Tower 1, Lantai 4/401-A JL Jend, Basuki Rahmat 129-137, Surabaya 60271",
    contacts: ["+62 21 529 20292, 522 4887"],
    email: "logistics.jkt@oecl.sg"
  }]
}, {
  code: "lk",
  name: "Sri Lanka",
  lat: 6.9271,
  lng: 79.8612,
  cities: [{
    name: "Colombo",
    lat: 6.9271,
    lng: 79.8612,
    address: "Ceylinco House, 9th Floor, No. 69, Janadhipathi Mawatha, Colombo 01, Sri Lanka",
    contacts: ["+94 114477499", "+94 114477494 / 98"],
    email: "info.cmb@globalconsol.com"
  }]
}, {
  code: "th",
  name: "Thailand",
  lat: 13.72957,  
  lng: 100.53095,
  cities: [{
    name: "Bangkok",
    lat: 13.72957,  
    lng: 100.53095,
    address: "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500 109",
    contacts: ["+662-634-3240", "+662-634-3942"],
    email: "info@oecl.sg"
  }]
}, {
  code: "mm",
  name: "Myanmar",
  lat: 16.8409,
  lng: 96.1735,
  cities: [{
    name: "Yangon",
    lat: 16.8409,
    lng: 96.1735,
    address: "No.608, Room 8B, Bo Soon Pat Tower, Merchant Street, Pabedan Township, Yangon, Myanmar",
    contacts: ["+951 243158", "+951 377985, 243101"],
    email: "info@globalconsol.com"
  }]
},{
  code: "pk",
  name: "Pakistan",
  lat: 24.8608,
  lng: 67.0097,
  cities: [{
    name: "Karachi",
    lat: 24.8608,
    lng: 67.0097,
    address: "Suite No.301, 3rd Floor, Fortune Center, Shahrah-e-Faisal, Block 6, PECHS, Karachi, Pakistan",
    contacts: ["+92-300-8282511", "+92-21-34302281-5"],
    email: "info.pk@globalconsol.com"
  }, {
    name: "Lahore",
    lat: 31.5204,
    lng: 74.3487,
    address: "Office # 301, 3rd Floor, Gulberg Arcade Main Market, Gulberg 2, Lahore, Pakistan",
    contacts: ["+92 42-35782306/07/08"],
    email: "info.pk@globalconsol.com"
  }]
},  {
  code: "us",
  name: "United States (USA)",
  lat: 41.8622,
  lng: -87.7209,
  cities: [{
    name: "Chicago",
    lat: 41.8622,
    lng: -87.7209,
    address: "939 W. North Avenue, Suite 750, Chicago, IL 60642",
    contacts: ["+1 847 254 7320"],
    email: "info@gglusa.us"
  }, {
    name: "New York",
    lat: 37.4545,
    lng: -122.1818,
    address: "New Jersey Branch, 33 Wood Avenue South Suite 600, Iselin, NJ 08830",
    contacts: ["+1 732 456 6780"],
    email: "info@gglusa.us"
  }, {
    name: "Los Angeles",
    lat: 40.5330,
    lng: -74.3481,
    address: "2250 South Central Avenue Compton, CA 90220",
    contacts: ["+1 310 928 3903"],
    email: "info@gglusa.us"
  }]
}, {
  code: "gb",
  name: "United Kingdom (UK)",
  lat: 51.5074,
  lng: -0.1278,
  cities: [{
    name: "London",
    lat: 51.5074,
    lng: -0.1278,
    address: "167-169 Great Portland Street 5th Floor, London W1W 5PF, United Kingdom",
    contacts: ["+44 (0) 203 393 9508"]
  }]
}, {
  code: "au",
  name: "Australia",
  lat: -37.7064,
  lng: 144.8503,
  cities: [{
    name: "Melbourne",
    lat: -37.7064,
    lng: 144.8503,
    address: "Suite 5, 7-9 Mallet Road, Tullamarine, Victoria, 3043",
    contacts: ["Mob: +61 432254969", "Tel: +61 388205157"],
    email: "info@gglaustralia.com"
  }]
}];
/*========================= */
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
