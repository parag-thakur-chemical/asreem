import Image from "next/image";
import { motion } from "framer-motion";

export const AboutChED = () => {
  return (
    <motion.section
      className="py-12 md:py-16 bg-green-100 text-gray-800 md:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-forestGreen"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About ChED, SVNIT
        </motion.h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white rounded-xl p-6 shadow-md">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/ched.jpg"
              alt="Chemical Engineering Department"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 text-justify">
              <p>
                The Chemical Engineering Department of Sardar Vallabhbhai
                National Institute of Technology, Surat was started in 1995-96.
                As a separate Department, its potential has been recognized as a
                rich resource of well trained Chemical Engineers. It is today
                one of the premier Departments of this college. The Department
                has built up a comprehensive research infrastructure with
                top-notch facilities for carrying cutting-edge teaching and
                research.
              </p>
              <p>
                Constant efforts are being put up to make this department to be
                ranked as one of the best in India within the next few years.
                The Department strives to provide graduate students with
                facilities and an environment that are conducive for creative
                and dynamic work. Chemical Engineering is the most sought after
                branch in the state of Gujarat.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
