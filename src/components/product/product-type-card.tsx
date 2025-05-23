'use client';

type ProductTypeCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function ProductTypeCard({
  title,
  description,
  icon,
}: ProductTypeCardProps) {
  return (
    <div className="w-full max-w-[380px] flex gap-1 p-4 border rounded-md hover:bg-amber-50 transition duration-200 ease-in-out cursor-pointer select-none">
      <div className="min-w-12 flex items-center">
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-amber-300">
          {icon}
        </div>
      </div>
      <div className="flex flex-col justify-center ml-2">
        <span className="text-base font-semibold">{title}</span>
        <span className="text-sm leading-4.5 text-gray-500">{description}</span>
      </div>
    </div>
  );
}
