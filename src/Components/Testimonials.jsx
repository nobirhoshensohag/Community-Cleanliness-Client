const Testimonials = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What People Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-base-100 rounded-xl shadow">
            “আমাদের এলাকার সমস্যাগুলো দ্রুত সমাধান হচ্ছে।”
          </div>
          <div className="p-6 bg-base-100 rounded-xl shadow">
            “খুবই সুন্দর এবং সহজ একটি প্ল্যাটফর্ম।”
          </div>
          <div className="p-6 bg-base-100 rounded-xl shadow">
            “কমিউনিটির জন্য অসাধারণ উদ্যোগ।”
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
