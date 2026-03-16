import React from "react";
import { Cover } from "@/components/ui/cover";

export function MissionSection() {
  return (
    <div className="text-center max-w-7xl mx-auto mt-12">
      {/* Title "Mission" */}
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Mission
      </h1>

      {/* Red Horizontal Line */}
      <hr className="w-60  border-red-500 mx-auto mb-6" />

      {/* Mission Statement */}
      <h2 className="text-4xl md:text-4xl lg:text-4xl font-semibold relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-black via-black to-neutral-700 dark:from-black dark:via-white dark:to-white mb-8">
        To <span className="text-red-500">Enhance</span> life across the <span className="text-red-500">Globe</span> with<br />
        sustainable and <span className="text-5xl shadow-lg font-bold">Innovative Nanotech</span> Solutions
      </h2>
    </div>
  );
}

















// import React from "react";
// import { Cover } from "@/components/ui/cover";

// export function MissionSection() {
//   return (
//     <div>
//       <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-black via-black to-neutral-700 dark:from-black dark:via-white dark:to-white     ">
//       To <span className="text-red-500">Enhance</span> life across the <span className="text-red-500">Globe</span> with<br />sustainable and <Cover>Innovative Nanotech</Cover> Solutions
//       </h2>
//     </div>
//   );
// }
