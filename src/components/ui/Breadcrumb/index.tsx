"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  // Split the path into segments, e.g. /shop/electronics/macbook -> ['shop', 'electronics', 'macbook']
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="bg-[#F2F4F5] py-[17px] ">
      <div className="mx-auto max-w-[1242px] px-5">
        <ol className="flex items-center space-x-2 text-[12px] leading-[18px]  text-gray-600">
          <li className="flex items-center">
            <Link href="/" className="flex items-center hover:text-blue-500">
              <Image
                src="/images/product/House.svg"
                alt="Home"
                width={18}
                height={18}
                className="mr-1"
              />
              HOME
            </Link>
          </li>

          {segments.map((segment, idx) => {
            const href = "/" + segments.slice(0, idx + 1).join("/");
            const isLast = idx === segments.length - 1;
            const formatted =
              segment.charAt(0).toUpperCase() +
              segment.slice(1).replace(/-/g, " ");

            return (
              <li key={href} className="flex items-center">
                <span className="mx-2">›</span>
                {isLast ? (
                  <span className="text-blue-500 font-medium">{formatted}</span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-blue-500 capitalize transition-colors"
                  >
                    {formatted}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
