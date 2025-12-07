import React from "react";
import Link from "next/link";

const Button = ({
  children,
  variant = "primary", // ডিফল্ট বাটন স্টাইল 'primary'
  href,
  className = "",
  ...props
}) => {
  // ১. বেস স্টাইল (যেগুলো সব বাটনেই থাকবে)
  const baseStyles =
    "h-12 px-8 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  // ২. ভেরিয়েন্ট অনুযায়ী স্টাইল
  const variants = {
    primary:
      "bg-primary hover:bg-primary-hover  text-white shadow-lg  border hover:border-indigo-500/50 border-transparent transition group",
    secondary:
      "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white hover:border-indigo-500/50 transition group",
  };

  // ৩. ফাইনাল ক্লাস কম্বিনেশন
  const finalClass = `${baseStyles} ${
    variants[variant] || variants.primary
  } ${className}`;

  // ৪. যদি 'href' থাকে তবে এটা Link হবে, না থাকলে সাধারণ button
  if (href) {
    return (
      <Link href={href} className={finalClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
