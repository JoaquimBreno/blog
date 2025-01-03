"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"; // Adjust the import path as needed
import { Input } from "@/components/ui/input"; // Adjust the import path as needed

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement the subscription logic here
    console.log('Subscribing with:', email);
    // Reset the input field or provide user feedback
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <Input 
        type="email" 
        placeholder="Your email address" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
};

export default SubscribeForm;