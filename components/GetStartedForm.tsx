"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function GetStartedForm() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    organization: "",
    contactNumber: "",
    country: "",
    address: "",
    productInterest: "",
    quantity: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-6">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold mb-6">Get Started with E-SPIN NANOTECH</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-[120px_1fr_1fr] gap-4">
          <select
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none cursor-pointer"
          >
            <option value="" disabled>Title *</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
          </select>
          <Input
            required
            placeholder="First Name *"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <Input
            required
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>

        <Input
          required
          type="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          required
          placeholder="Designation *"
          value={formData.designation}
          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
        />

        <Input
          required
          placeholder="Organization/University *"
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            required
            type="tel"
            placeholder="Contact Number *"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
          />
          <Input
            required
            placeholder="Country *"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />
        </div>

        <Input
          required
          placeholder="Address *"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={formData.productInterest}
            onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none cursor-pointer"
          >
            <option value="" disabled>Product Interest</option>
            <option value="Nanofiber Membrane">Nanofiber Membrane</option>
            <option value="Air Filtration Membrane">Air Filtration Membrane</option>
            <option value="Ion-Exchange Membrane">Ion-Exchange Membrane</option>
            <option value="Cosmetic Membranes">Cosmetic Membranes</option>
            <option value="Customized Membrane">Customized Membrane</option>
            <option value="Electrospinning Equipment">Electrospinning Equipment</option>
            <option value="Functional Products">Functional Products</option>
            <option value="Other">Other</option>
          </select>
          <Input
            placeholder="Estimated Quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          />
        </div>

        <Textarea
          required
          placeholder="Your Requirements *"
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          className="min-h-[120px]"
        />

        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
          Submit
        </Button>
      </form>
    </div>
  );
}
