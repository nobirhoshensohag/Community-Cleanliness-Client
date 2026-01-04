import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        
        <Fade triggerOnce>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-green-700 dark:text-green-400">
            About Clean Hub
          </h1>

          <p className="text-center max-w-3xl mx-auto mb-14 text-lg text-gray-600 dark:text-gray-300">
            Clean Hub একটি community-based platform যেখানে নাগরিকরা তাদের
            এলাকার পরিচ্ছন্নতা সংক্রান্ত সমস্যা রিপোর্ট করে এবং সম্মিলিতভাবে
            সমাধান নিশ্চিত করে।
          </p>
        </Fade>

        <div className="grid md:grid-cols-3 gap-8">
          <Slide direction="up" cascade triggerOnce>
            <div className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-green-600">
                🌱 Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                পরিচ্ছন্ন, নিরাপদ ও সচেতন সমাজ গড়ে তোলা যেখানে সবাই অংশগ্রহণ করতে পারে।
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-green-600">
                🤝 Community Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ভলান্টিয়ার ও সাধারণ মানুষ একসাথে কাজ করে সমস্যার সমাধান করে।
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3 text-green-600">
                🔍 Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                প্রতিটি রিপোর্টের স্ট্যাটাস সবার জন্য উন্মুক্ত।
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;