import { motion } from "framer-motion";
import {
  Terminal,
  GitBranch,
  Activity,
  Layers,
  Shield,
  Cpu,
} from "lucide-react";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { TextReveal } from "../components/ui/TextReveal";

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
}

// function BentoCard({})

// function CodeBlock() {}

// function MetricBar({})

export function BentoGrid() {
  return (
    <section
      id="bento"
      className="relative py-16 md:py-32 px-4"
      aria-label="Product Overview"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        {/* Bento grid */}
        {/* Card 1 — Large: Deploy terminal (spans 2 cols) */}
        {/* Card 2 — Branch previews */}
        {/* Card 3 — Analytics */}
        {/* Card 4 — Infrastructure & Security (spans 2 cols) */}
        {/* Infrastructure side */}
        {/* Security side */}
      </div>
    </section>
  );
}

// Need to import Globe for the infrastructure card
// function Globe({}){}
