const HowItWorks = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-base-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Report Issue</h3>
            <p>Login করে আপনার এলাকার সমস্যা রিপোর্ট করুন।</p>
          </div>

          <div className="p-6 bg-base-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p>ভলান্টিয়ার ও কমিউনিটি সমস্যাটি যাচাই করবে।</p>
          </div>

          <div className="p-6 bg-base-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Clean & Resolve</h3>
            <p>সমস্যা সমাধান হয়ে এলাকা পরিষ্কার হবে।</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
