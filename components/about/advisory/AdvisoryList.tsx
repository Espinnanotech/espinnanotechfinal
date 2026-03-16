"use client";

import { AdvisorCard } from "./AdvisorCard";

const ADVISORS = [
  {
    name: "Dr. Ashutosh Sharma",
    position: "Ex-Secretary, Department of Science and Technology, Government of India; Professor, Chemical Engineering Dept IIT",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Ashok Mishra",
    position: "Ex-Director, IIT Bombay",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Prof. Chandrashekhar Sharma",
    position: "Dean of R&D, IIT Hyderabad",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Prof. Dipankar Bandyopadhyay",
    position: "Professor in Department of Chemical Engineering IIT Guwahati",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Abhijit Majumder",
    position: "Associate Professor in the Department of Chemical Engineering, IIT Bombay",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Akhilesh Kumar Sahu",
    position: "Assistant Professor in Chemical Engineering, IIT Guwahati",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
  }
] as const;