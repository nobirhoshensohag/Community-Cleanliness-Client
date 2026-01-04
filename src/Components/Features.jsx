const Features = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Clean Hub?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-5 bg-base-100 shadow rounded-lg text-center">
            Easy Reporting
          </div>
          <div className="p-5 bg-base-100 shadow rounded-lg text-center">
            Community Driven
          </div>
          <div className="p-5 bg-base-100 shadow rounded-lg text-center">
            Real-Time Updates
          </div>
          <div className="p-5 bg-base-100 shadow rounded-lg text-center">
            Secure Platform
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
