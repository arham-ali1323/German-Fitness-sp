export default function Footer() {
  return (
    <footer className="relative bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-16">
        {/* brand */}
        <div>
          <h2 className="text-3xl font-extrabold uppercase leading-tight">
            Achieve <br /> Wellbeing
          </h2>
          <p className="mt-4 text-orange-500 uppercase tracking-widest text-sm">
            Core strength
          </p>
        </div>

        {/* contact */}
        <div>
          <h3 className="uppercase font-bold mb-4">Hadkaur</h3>
          <p className="text-gray-400 text-sm mb-4">
            Welcome to Hadkaur Fitness! We are here to support and guide you.
          </p>

          <p className="text-sm">
            <span className="block text-gray-400">Call us anytime</span>
            <span className="text-orange-500 font-bold">
              +123 45677345
            </span>
          </p>

          <p className="mt-4 text-sm">
            <span className="block text-gray-400">Visit our location</span>
            1710 15th Ave SE Unit A <br />
            Renton, WA 98058-5055
          </p>
        </div>

        {/* services */}
        <div>
          <h3 className="uppercase font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Personal Training</li>
            <li>Group Workout</li>
            <li>Muscle Building</li>
            <li>Virtual Gym Training</li>
            <li>Weightloss Training</li>
            <li>Body Stretching</li>
          </ul>
        </div>

        {/* social */}
        <div>
          <h3 className="uppercase font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {["F", "G+", "IG", "IN"].map((s) => (
              <div
                key={s}
                className="w-10 h-10 flex items-center justify-center border border-white/20"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <span>© 2025 Hadkaur. All rights reserved.</span>
        <span>Privacy Policy · Terms & Condition</span>
      </div>
    </footer>
  );
}
