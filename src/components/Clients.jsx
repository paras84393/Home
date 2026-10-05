import React from "react";

const clients = [
  {
    name: "Scholar Scribe Solutions",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209654/xntrova-wp-media/xntrova-wp-media/27-93030f459f54a40f.webp",
  },
  {
    name: "ETEX",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209657/xntrova-wp-media/xntrova-wp-media/25-b12b5da59d88eafd.webp",
  },
  {
    name: "Pitti Jewels & Pearls",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209663/xntrova-wp-media/xntrova-wp-media/5-3699036ea4992f89.webp",
  },
  {
    name: "Berryan Luiz",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209665/xntrova-wp-media/xntrova-wp-media/2-89328e3e86eae27d.webp",
  },
  {
    name: "Fortune Mattresses",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209668/xntrova-wp-media/xntrova-wp-media/21-74fc495daed31461.webp",
  },
  {
    name: "NITDA",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209670/xntrova-wp-media/xntrova-wp-media/19-b8fef04fa64e0b05.webp",
  },
  {
    name: "Mahadev Tours",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209680/xntrova-wp-media/xntrova-wp-media/Mahadev-India-Tours-logo-3-7622aec07f6d516f.webp",
  },
  {
    name: "Online Yoga Life",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209681/xntrova-wp-media/xntrova-wp-media/14-c5ca267d660cc31a.webp",
  },
  {
    name: "Quality Tech Engineers",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209683/xntrova-wp-media/xntrova-wp-media/13-df6ae5ebe4b0c8df.webp",
  },
  {
    name: "Posh Wave",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209684/xntrova-wp-media/xntrova-wp-media/12-b2d21ac96cca2801.webp",
  },
  {
    name: "Adoraa Grafully",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209686/xntrova-wp-media/xntrova-wp-media/11-9c51b0c19319cbe6.webp",
  },
  {
    name: "Envest Suru",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209687/xntrova-wp-media/xntrova-wp-media/10-697cf96f47b9fc9f.webp",
  },
  {
    name: "Insinc",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209688/xntrova-wp-media/xntrova-wp-media/9-3cf2bab0944e67a5.webp",
  },
  {
    name: "Myaza Good Health Naturally",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209689/xntrova-wp-media/xntrova-wp-media/8-8a482ffcf5e818f5.webp",
  },
  {
    name: "Chetan Herbals",
    logo:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_500/v1787209690/xntrova-wp-media/xntrova-wp-media/4-e5bc3948fd2634d9.webp",
  },
];

const infiniteClients = [...clients, ...clients];

const Clients = () => {
  return (
    <section className="border-t border-[var(--x-border)] pt-20">

      {/* Header */}
      <div className="text-center">

        <span className="eyebrow">
          Selected Businesses
        </span>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--x-ink)] md:text-4xl">
          Businesses We've Worked With
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--x-muted)] md:text-base">
          From emerging brands to established businesses, explore a
          selection of clients publicly featured by Xntrova.
        </p>

      </div>


      {/* Client marquee */}
      <div className="relative mt-10 overflow-hidden">

        {/* Left fade */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 left-0 z-10
            w-16
            bg-gradient-to-r
            from-white
            to-transparent
            md:w-28
          "
        />

        {/* Right fade */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 right-0 z-10
            w-16
            bg-gradient-to-l
            from-white
            to-transparent
            md:w-28
          "
        />

        {/* Track */}
        <div className="clients-track flex w-max py-5">

          {infiniteClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="
                group
                mx-2
                flex
                h-[110px]
                w-[190px]
                shrink-0
                items-center
                justify-center
                border
                border-[var(--x-border)]
                bg-white
                px-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.03]
                hover:border-[#cbd9dd]
                hover:shadow-[0_16px_35px_rgba(7,26,33,0.10)]
              "
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
                className="
                  max-h-14
                  max-w-[145px]
                  object-contain
                  opacity-100
                  grayscale-0
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Clients;