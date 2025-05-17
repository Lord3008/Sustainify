
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  location: string;
  image: string;
}

const TestimonialCard = ({ quote, name, role, location, image }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <p className="italic text-gray-600">"{quote}"</p>
          </div>
          <div className="mt-auto flex items-center pt-4 border-t border-gray-100">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-gray-500">{role}, {location}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sustainify has transformed the way I farm. I've connected with local businesses and now sell my produce directly to restaurants in the city!",
      name: "Rajesh Patel",
      role: "Organic Farmer",
      location: "Karnataka",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "As an urban dweller passionate about sustainability, Sustainify helped me find a community garden where I can grow my own vegetables.",
      name: "Priya Singh",
      role: "Software Engineer",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "The knowledge sharing between experienced farmers and newcomers like me has been invaluable. My crop yield has increased by 30% this year!",
      name: "Amit Kumar",
      role: "New Farmer",
      location: "Punjab",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-sustainify-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from the farmers and citizens who have found solutions through our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              location={testimonial.location}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
