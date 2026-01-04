const Newsletter = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-6">Latest updates পেতে ইমেইল দিন</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered text-black w-full sm:w-80"
          />
          <button className="btn btn-secondary">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
