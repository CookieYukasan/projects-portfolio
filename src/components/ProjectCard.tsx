import Image from 'next/image';

type ProjectProps = {
  data: {
    title: string;
    description: string;
    image?: string;
    link?: string;
    githubUrl?: string;
  };
};

export default function ProjectCard({ data }: ProjectProps) {
  const { title, description, image, link, githubUrl } = data;

  return (
    <div className="rounded-lg border border-[#873EFF] bg-[#171228] p-6 transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2">
      <div className="flex h-[222px] w-full items-center justify-center rounded bg-[#0E091B]">
        {!image && <SkeletonImage />}
        {image && (
          <Image
            className="object-cover p-5"
            src={image}
            alt={title}
            width={300}
            height={200}
          />
        )}
      </div>
      <h1 className="mt-6 font-ibmPlexMono text-xl font-medium text-[#AEAEAE] md:text-2xl">
        {title}
      </h1>
      <p className="mt-6 font-dmSans text-base font-medium text-zinc-500 md:text-2xl">
        {description}
      </p>
      <div className="mt-4 flex">
        <button
          disabled={!!!link}
          className="mr-6 w-full rounded bg-[#04D361] py-3 text-center font-dmSans text-base font-bold uppercase text-black disabled:cursor-not-allowed disabled:opacity-30"
        >
          <a href={link} target="_blank">
            Acessar
          </a>
        </button>
        <div className="group relative w-full">
          <button
            disabled={!!!githubUrl}
            className="group w-full rounded border border-[#04D361] py-3 text-center font-dmSans text-base font-bold uppercase text-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <a href={githubUrl} target="_blank">
              Github
            </a>
          </button>
          {!!!githubUrl && (
            <span className="absolute left-0 -translate-y-16 rounded-md bg-gray-800 py-1 px-4 text-center font-dmSans text-base text-gray-100 opacity-0 transition-opacity group-hover:opacity-100">
              O código deste projeto é privado
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function SkeletonImage() {
  return (
    <div className="flex h-56 w-full items-center justify-center rounded-md">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.5 18.75C52.5 23.7228 50.5246 28.4919 47.0083 32.0083C43.492 35.5246 38.7228 37.5 33.75 37.5C28.7772 37.5 24.0081 35.5246 20.4918 32.0083C16.9755 28.4919 15 23.7228 15 18.75C15 13.7772 16.9755 9.00805 20.4918 5.49175C24.0081 1.97544 28.7772 0 33.75 0C38.7228 0 43.492 1.97544 47.0083 5.49175C50.5246 9.00805 52.5 13.7772 52.5 18.75ZM84.1875 49.1475C83.4842 48.7952 82.6879 48.673 81.9113 48.7981C81.1346 48.9233 80.417 49.2895 79.86 49.845L52.035 85.17L32.085 64.38C31.3647 63.9004 30.5007 63.6848 29.6396 63.7695C28.7784 63.8543 27.973 64.2342 27.36 64.845L0.0150146 97.5V112.5C0.0150146 114.489 0.805191 116.397 2.21171 117.803C3.61824 119.21 5.52589 120 7.51502 120H112.515C113.5 120 114.475 119.806 115.385 119.429C116.295 119.052 117.122 118.5 117.818 117.803C118.515 117.107 119.067 116.28 119.444 115.37C119.821 114.46 120.015 113.485 120.015 112.5V78.75L84.1875 49.1475Z"
          fill="url(#paint0_linear_0_71)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_71"
            x1="60.015"
            y1="0"
            x2="60.015"
            y2="120"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#873EFF" />
            <stop offset="1" stopColor="#873EFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
