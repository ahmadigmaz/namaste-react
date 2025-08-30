
const About = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        About Us
      </h1>
      <h2 className="text-xl text-gray-600 text-center mb-8">
        Discover Our Story & Passion for Great Food 🍴
      </h2>

      {/* Intro Section */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          Welcome to <span className="font-semibold text-green-600">Foodie's Paradise</span> – your ultimate
          destination for delicious meals, authentic flavors, and an
          unforgettable dining experience. 🌟
        </p>
        <p>
          Our journey began with a simple love for food and a mission to bring
          people together. Whether you’re craving traditional Indian spices,
          continental delights, or quick bites, we’ve got something for
          everyone. 🍕🍔🥗
        </p>
        <p>
          We believe that <span className="font-semibold text-green-600">food is more than just a meal</span> — it’s
          an emotion, a connection, and a memory in the making. ❤️
        </p>
      </div>

      {/* Vision Section */}
      <div className="bg-gray-50 rounded-xl shadow-inner p-6 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">✨ Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          To serve happiness on every plate and to make dining not just about
          food, but about creating joyful experiences for everyone.
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-green-600">Foodie's Paradise</span> | Made with ❤️ for Food
        Lovers
      </footer>
    </div>
  );
};

export default About;
