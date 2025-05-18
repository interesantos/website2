export default function CustomerStories() {
  const testimonials = [
    {
      id: 1,
      quote: "The 7-day pack was perfect for my week-long trip. Delivered to my hotel the next day, and the water was crisp and safe!",
      author: "Emma, Australia",
      type: "Tourist"
    },
    {
      id: 2,
      quote: "I ordered the 5-pack for my 14-day stay. So convenient, and the English website made it a breeze to use!",
      author: "John, UK", 
      type: "Visitor"
    },
    {
      id: 3,
      quote: "As an expat, the subscription saves me so much time. I get 90L monthly, and the quality is top-notch!",
      author: "Sarah, US",
      type: "Expat"
    },
    {
      id: 4,
      quote: "The 1.5L bottles were a lifesaver for our family villa. Safe water, fast delivery, and great support!",
      author: "Hans, Germany",
      type: "Tourist"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Trusted by Koh Samui's Visitors and Expats</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
