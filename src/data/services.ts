// src/data/services.ts

import { 
  Wrench, 
  Zap, 
  Droplets, 
  Paintbrush, 
  Wind, 
  Hammer,
  // ... other icons
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number; // Add this for calculation
  icon: any;
  image: string;
  popular?: boolean;
  features?: string[];
}

export const services: Service[] = [
  {
    id: "plumbing",
    name: "Plumbing Services",
    description: "Expert plumbing solutions for all your needs",
    price: "₹299",
    priceValue: 299,
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800",
    popular: true,
    features: ["Leak Repairs", "Pipe Installation", "Drain Cleaning"],
  },
  {
    id: "electrical",
    name: "Electrical Services",
    description: "Safe and reliable electrical work",
    price: "₹349",
    priceValue: 349,
    icon: Zap,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800",
    popular: true,
    features: ["Wiring", "Repairs", "Installation"],
  },
  // ... add more services
];