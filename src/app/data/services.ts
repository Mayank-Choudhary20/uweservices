import { Wrench, Zap, Sparkles, Wind, Paintbrush, Hammer, Trees, Bug } from "lucide-react";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: any;
  image: string;
  features: string[];
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "plumbing",
    name: "Plumbing Services",
    description: "Expert plumbing repairs, installations, and maintenance for your home",
    price: "₹599 - ₹2,999",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1613839397604-65fffe7fc3d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyJTIwZml4aW5nJTIwc2lua3xlbnwxfHx8fDE3NzU2MzU2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Leak repairs", "Pipe installation", "Drain cleaning", "24/7 emergency service"],
    popular: true,
  },
  {
    id: "electrical",
    name: "Electrical Work",
    description: "Licensed electricians for safe and reliable electrical services",
    price: "₹799 - ₹4,999",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjByZXNpZGVudGlhbCUyMGhvbWV8ZW58MXx8fHwxNzc1NjIyMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Wiring & rewiring", "Lighting installation", "Circuit breaker repair", "Safety inspections"],
    popular: true,
  },
  {
    id: "cleaning",
    name: "House Cleaning",
    description: "Professional deep cleaning and regular maintenance services",
    price: "₹499 - ₹1,999",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1758273238594-9a9d6c20eaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNsZWFuaW5nJTIwc2VydmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzU2MzM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Deep cleaning", "Regular maintenance", "Move-in/out cleaning", "Eco-friendly products"],
    popular: true,
  },
  {
    id: "hvac",
    name: "HVAC Services",
    description: "Heating and cooling system installation, repair, and maintenance",
    price: "₹999 - ₹6,999",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1630481721508-5d37097dd8fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodmFjJTIwdGVjaG5pY2lhbiUyMGFpciUyMGNvbmRpdGlvbmluZ3xlbnwxfHx8fDE3NzU1Nzg4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["AC repair & installation", "Furnace maintenance", "Duct cleaning", "Thermostat setup"],
  },
  {
    id: "painting",
    name: "Painting Services",
    description: "Interior and exterior painting by skilled professionals",
    price: "₹1,499 - ₹9,999",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1752649937956-f2c09651bf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWludGVyJTIwcGFpbnRpbmclMjB3YWxsfGVufDF8fHx8MTc3NTY0MjY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Interior painting", "Exterior painting", "Cabinet refinishing", "Color consultation"],
  },
  {
    id: "carpentry",
    name: "Carpentry & Woodwork",
    description: "Custom woodwork, repairs, and furniture assembly",
    price: "₹799 - ₹4,499",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1728633826211-4e04854e344e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya2luZyUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzU1Nzg4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Custom furniture", "Door & window repair", "Deck building", "Furniture assembly"],
  },
  {
    id: "landscaping",
    name: "Landscaping",
    description: "Professional lawn care and garden maintenance services",
    price: "₹599 - ₹2,999",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1721318308400-fd8da6c51efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGVyJTIwZ2FyZGVuJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzc1NjQyNjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Lawn mowing", "Garden design", "Tree trimming", "Seasonal cleanup"],
  },
  {
    id: "pest-control",
    name: "Pest Control",
    description: "Safe and effective pest removal and prevention services",
    price: "₹499 - ₹2,499",
    icon: Bug,
    image: "https://images.unsplash.com/photo-1687840936382-7333b7d26fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHByb2Zlc3Npb25hbCUyMGhvbWV8ZW58MXx8fHwxNzc1NjQyNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Insect removal", "Rodent control", "Preventive treatments", "Eco-friendly options"],
  },
];