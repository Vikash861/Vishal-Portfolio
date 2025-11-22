export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/profile.jpg" 
              alt="John Doe" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-4">
              I am a dedicated MIS professional with 2 years of hands-on experience 
              in managing information systems, analyzing business data, and implementing 
              technology solutions that drive organizational efficiency.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              My expertise lies in bridging the gap between technical teams and business 
              stakeholders to deliver solutions that meet organizational objectives.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-semibold">Name:</h4>
                <p className="text-gray-600">John Doe</p>
              </div>
              <div>
                <h4 className="font-semibold">Email:</h4>
                <p className="text-gray-600">john.doe@email.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Experience:</h4>
                <p className="text-gray-600">2+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold">Location:</h4>
                <p className="text-gray-600">New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}