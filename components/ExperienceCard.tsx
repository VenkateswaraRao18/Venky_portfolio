import Image from "next/image";

interface Props {
  company: string;
  role: string;
  description: string;
  date: string;
  logo: string;
  type?: string;
}

export default function ExperienceCard({
  company,
  role,
  description,
  date,
  logo,
  type,
}: Props) {
  return (
    <div className="flex gap-6 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
      
      {/* Logo */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image
          src={logo}
          alt={company}
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1" >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{company}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">{date}</p>
            {type && (
              <span className="inline-block mt-2 px-3 py-1 text-xs border border-gray-300 rounded-md">
                {type}
              </span>
            )}
          </div>
        </div>

        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}