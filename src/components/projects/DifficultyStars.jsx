// import { motion } from "framer-motion";

// const difficultyMap = {
//   1: {
//     title: "Novice",
//     color: "text-emerald-400",
//   },
//   2: {
//     title: "Apprentice",
//     color: "text-lime-400",
//   },
//   3: {
//     title: "Veteran",
//     color: "text-amber-400",
//   },
//   4: {
//     title: "Master",
//     color: "text-orange-400",
//   },
//   5: {
//     title: "Legendary",
//     color: "text-goldBright",
//   },
// };

// export default function DifficultyStars({ difficulty = 3 }) {
//   const config = difficultyMap[difficulty] || difficultyMap[3];

//   return (
//     <div className="flex flex-col gap-2">
//       {/* Stars */}

//       <div className="flex items-center gap-1">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <motion.span
//             key={star}
//             whileHover={{
//               scale: 1.25,
//               rotate: -8,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 350,
//             }}
//             className={`
//               text-lg
//               select-none
//               transition-colors
//               duration-300
//               ${
//                 star <= difficulty
//                   ? "text-goldBright drop-shadow-[0_0_6px_rgba(255,210,120,.45)]"
//                   : "text-[#4b4138]"
//               }
//             `}
//           >
//             ★
//           </motion.span>
//         ))}
//       </div>

//       {/* Label */}

//       <motion.span
//         initial={{
//           opacity: 0,
//           y: 6,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.4,
//         }}
//         className={`
//           text-xs
//           tracking-[3px]
//           uppercase
//           ${config.color}
//         `}
//       >
//         {config.title}
//       </motion.span>
//     </div>
//   );
// }
