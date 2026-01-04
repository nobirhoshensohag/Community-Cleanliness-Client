const FAQ = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>

        <div className="space-y-4">
          <details className="p-4 bg-base-100 rounded-lg shadow">
            <summary className="font-semibold cursor-pointer">
              কিভাবে রিপোর্ট করবো?
            </summary>
            <p className="mt-2">Login করে Add Issue থেকে রিপোর্ট করুন।</p>
          </details>

          <details className="p-4 bg-base-100 rounded-lg shadow">
            <summary className="font-semibold cursor-pointer">
              রিপোর্ট কতদিনে সমাধান হয়?
            </summary>
            <p className="mt-2">সাধারণত ৩–৭ দিনের মধ্যে।</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
