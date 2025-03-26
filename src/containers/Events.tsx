import briefcaseIcon from "../assets/briefcase.svg";
import commercialDiscountIcon from "../assets/commercial-discount-2.svg";
import happyIcon from "../assets/frame-272.svg";
import walletIcon from "../assets/wallet.svg";

function Events() {
  const categories = [
    {
      id: 1,
      icon: commercialDiscountIcon,
      iconAlt: "Comercial discount",
      bgColor: "bg-[#f8c54326]",
      textColor: "text-[#f8c543]",
      label: "Risparmia",
    },
    {
      id: 2,
      icon: walletIcon,
      iconAlt: "Wallet",
      bgColor: "bg-[#ff780026]",
      textColor: "text-[#ff7800]",
      label: "Guadagna",
    },
    {
      id: 3,
      icon: briefcaseIcon,
      iconAlt: "Briefcase",
      bgColor: "bg-[#5784e926]",
      textColor: "text-[#5784e9]",
      label: "Lavora",
    },
    {
      id: 4,
      icon: happyIcon,
      iconAlt: "Frame",
      bgColor: "bg-[#bf83fe26]",
      textColor: "text-[#bf83fe]",
      label: "Scopri",
    },
  ];

  return (
    <div className="flex items-center gap-3 w-full">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center gap-1.5 flex-1"
        >
          <div
            className={`flex w-16 h-16 items-center justify-center px-2 py-1 ${category.bgColor} rounded-[51px]`}
          >
            <img
              className="w-8 h-8"
              alt={category.iconAlt}
              src={category.icon}
            />
          </div>
          <div className={`w-fit font-semibold ${category.textColor} text-xs`}>
            {category.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
