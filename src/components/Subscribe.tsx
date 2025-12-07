/**
 * TODO: Subscribe Component - Ready for implementation
 * 
 * To enable this feature:
 * 1. Uncomment imports in:
 *    - src/components/MainContent.tsx
 *    - src/app/blog/page.tsx
 *    - src/app/subscribe/page.tsx
 * 2. Uncomment "Subscribe" link in src/components/NavItems.tsx
 * 3. Set up email service (Resend, Buttondown, or ConvertKit)
 * 4. Create API route at src/app/api/subscribe/route.ts
 * 5. Add environment variables (RESEND_API_KEY or similar)
 */

"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing with:', email);
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-300">
      <p className="mb-4" style={{ fontFamily: "Geist Mono, monospace", lineHeight: "150%" }}>
        Get new essays sent to you
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        <Input 
          type="email" 
          placeholder="Your email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 border-black"
          style={{ fontFamily: "Geist Mono, monospace" }}
        />
        <Button type="submit" className="bg-black text-white hover:bg-gray-800" style={{ fontFamily: "Geist Mono, monospace" }}>
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default SubscribeForm;