import { GitFork, Star, Users } from "lucide-react";

const GitHubStatus = async () => {
  let data = {
    stargazers_count: 0,
    forks_count: 0,
    subscribers_count: 0,
  };

  try {
    const res = await fetch(
      "https://api.github.com/repos/rahadmondal/rahad-io-docs",
      {
        next: { revalidate: 60 },
      }
    );

    if (res.ok) {
      data = await res.json();
    }
  } catch (e) {
    // Fail হলে default মান থাকবে
  }

  return (
    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-slate-200 dark:border-white/10 pt-8">
      <Item
        icon={<Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
        label="Stars"
        value={data.stargazers_count || "—"}
      />

      <Item
        icon={<GitFork className="w-5 h-5 text-purple-500" />}
        label="Forks"
        value={data.forks_count || "—"}
      />

      <Item
        icon={<Users className="w-5 h-5 text-blue-500" />}
        label="Watchers"
        value={data.subscribers_count || "—"}
      />
    </div>
  );
};

const Item = ({ icon, label, value }) => (
  <div className="text-center">
    <div className="flex items-center justify-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
      {icon} {value}
    </div>
    <div className="text-xs text-slate-500 uppercase font-semibold mt-1">
      {label}
    </div>
  </div>
);

export default GitHubStatus;
