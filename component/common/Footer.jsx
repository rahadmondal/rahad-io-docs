import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-slate-200 dark:border-white/10 bg-white dark:bg-navy-dark">
      <p className="text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Rahad Io Docs. Built for the
        Community.
      </p>
    </footer>
  );
};

export default Footer;
