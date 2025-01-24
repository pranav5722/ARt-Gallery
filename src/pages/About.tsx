import { motion } from 'framer-motion';
import { Camera, Palette, Users, Globe, Code, Shield, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "AR Technology",
    description: "Experience artwork in augmented reality, bringing digital art into your physical space."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Artist Community",
    description: "Join a vibrant community of digital artists pushing the boundaries of creative expression."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Global Reach",
    description: "Share your work with art enthusiasts and collectors from around the world."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Interactive Experience",
    description: "Engage with art in new ways through our innovative AR platform."
  }
];
const technologies = [
  { icon: <Code className="w-6 h-6" />, label: "Advanced AR Technology" },
  { icon: <Shield className="w-6 h-6" />, label: "Secure Platform" },
  { icon: <Zap className="w-6 h-6" />, label: "Fast Performance" },
  { icon: <Award className="w-6 h-6" />, label: "Quality Assurance" }
];

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              About ARt Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're revolutionizing the way people experience digital art through augmented reality technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="text-indigo-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r text-white">
              Our Technology
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technology to provide the best possible experience for artists and art enthusiasts.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-indigo-400 mb-4 flex justify-center">
                  {tech.icon}
                </div>
                <p className="text-gray-300">{tech.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;