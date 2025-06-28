import Image from "next/image";
import { motion } from "framer-motion";

export const AboutSVNIT = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 via-white to-yellow-100 text-gray-800 md:px-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-forestGreen"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About SVNIT
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8 rounded-2xl shadow-lg bg-gradient-to-br from-green-50 via-white to-green-100 border-2 border-green-200 p-8 mb-8 hover:scale-105 transition-transform duration-200">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/svnit.jpg"
              alt="SVNIT Campus"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 text-justify">
              <p>
                Sardar Vallabhbhai National Institute of Technology, Surat known
                as SVNIT - Surat was set up with the objective to provide high
                quality technical education to meet the needs of the Nation in
                the present competitive world. This Institute was established in
                1961 for imparting technical education in Chemical, Civil,
                Mechanical and Electrical Engineering.
              </p>
              <p>
                The UG program in Chemical Engineering started in the year
                1995-96. In exercise of the powers conferred by section 3 of the
                University Grants Commission (UGC) Act, 1956, the Central
                Government, on the advice of the University Grants Commission,
                has declared the Sardar Vallabhbhai Regional College of
                Engineering & Technology (SVREC), Surat as Sardar Vallabhbhai
                National Institute of Technology (SVNIT), Surat with status of
                "Deemed University" with effect from 4th December 2002.
              </p>
              <p>
                The Institute has been granted the status of 'Institute of
                National Importance' w.e.f. Aug.15, 2007.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
