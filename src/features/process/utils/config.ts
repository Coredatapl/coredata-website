import { Circle } from "../types/circle";

// Link thickness by weight: 3 = h-6 (main circles), 2 = h-4 (medium circles), 1 = h-1.5 (small circles)
// px must match the Tailwind class (h-6 = 24px, h-4 = 16px, h-1.5 = 6px)
export const ThicknessLevels = {
  3: { cls: "h-6", px: 24 },
  2: { cls: "h-4", px: 16 },
  1: { cls: "h-1.5", px: 6 },
} as const;

export const SizeLevels = {
  main: "lg:w-[16%]",
  m: "lg:w-[9%]",
  s: "lg:w-[5%]",
} as const;

export const ColorVariants = {
  default: "bg-blue-400",
  blue: "bg-blue-400 hover:bg-brand-blue",
  violet: "bg-blue-400 hover:bg-brand-violet",
  sky: "bg-blue-400 hover:bg-brand-sky",
  green: "bg-blue-400 hover:bg-brand-green",
};

export const MainCircles: Circle[] = [
  {
    x: 0.42,
    y: 0.685,
    size: "main",
    color: "violet",
    title: "1. Analysis",
    text: "Analysis is the foundation of every AI solution. We dissect your existing business workflows, identify operational bottlenecks and map out the exact processes that require automation.",
  },
  {
    x: 0.261,
    y: 0.401,
    size: "main",
    color: "blue",
    title: "2. Modeling",
    text: "Modeling translates business logic into technical architecture. In this phase, we select and design the optimal AI models tailored specifically to your data.",
  },
  {
    x: 0.487,
    y: 0.268,
    size: "main",
    color: "sky",
    title: "3. Learning",
    text: "Learning is where the AI gains its intelligence. We train the selected models using your specific datasets. This step allows the system to understand context and extract structured data from unstructured documents.",
  },
  {
    x: 0.69,
    y: 0.519,
    size: "main",
    color: "green",
    title: "4. Optimization",
    text: "Optimization ensures peak performance and cost-efficiency. We continuously refine, test, and tune the AI models to maximize processing speed and reduce operational costs.",
  },
];

export const MainCount = MainCircles.length;

export const DecorCircles: Circle[] = [
  { x: 0.4, y: 0.07, size: "s", color: "default", title: "4" },
  { x: 0.6, y: 0.138, size: "s", color: "default", title: "5" },
  { x: 0.179, y: 0.207, size: "s", color: "default", title: "6" },
  { x: 0.357, y: 0.217, size: "s", color: "default", title: "7" },
  { x: 0.089, y: 0.476, size: "s", color: "default", title: "8" },
  { x: 0.2, y: 0.61, size: "m", color: "default", title: "9" },
  { x: 0.28, y: 0.75, size: "s", color: "default", title: "10" },
  { x: 0.34, y: 0.93, size: "m", color: "default", title: "11" },
  { x: 0.574, y: 0.753, size: "s", color: "default", title: "12" },
  { x: 0.533, y: 0.519, size: "s", color: "default", title: "13" },
  { x: 0.735, y: 0.235, size: "m", color: "default", title: "14" },
  { x: 0.88, y: 0.431, size: "m", color: "default", title: "15" },
  { x: 0.788, y: 0.693, size: "s", color: "default", title: "16" },
];

// [circleA, circleB, weight] - connectors run centre to centre and are hidden under the circles
export const Connectors = [
  // main chain 1 → 2 → 3 → 4
  [0, 1, 3],
  [1, 2, 3],
  [2, 3, 3],
  // links touching medium circles
  [2, 14, 2],
  [0, 9, 2],
  [14, 3, 2],
  [5, 14, 1],
  [14, 15, 1],
  [15, 3, 2],
  [15, 16, 1],
  [8, 9, 1],
  [9, 1, 2],
  [9, 10, 1],
  [12, 11, 1],
  [10, 11, 1],
  [11, 0, 2],
  // links between small circles (and small <=> main)
  [4, 2, 1],
  [4, 6, 1],
  [4, 5, 1],
  [4, 7, 1],
  [6, 7, 1],
  [6, 1, 1],
  [6, 8, 1],
  [7, 2, 1],
  [7, 1, 1],
  [5, 2, 1],
  [16, 12, 1],
  [16, 3, 1],
  [12, 0, 1],
  [12, 13, 1],
  [13, 2, 1],
  [13, 0, 1],
  [13, 3, 1],
  [8, 1, 1],
  [10, 0, 1],
];
