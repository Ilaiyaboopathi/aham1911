import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HomeIcon,
  BuildingOffice2Icon,
  GlobeAsiaAustraliaIcon,
  WrenchScrewdriverIcon,
  PlusIcon,
  BanknotesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ProductsSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
    {
      id: 'homeConstruction',
      title: t('products.items.homeConstruction.title'),
      description: t('products.items.homeConstruction.description'),
      icon: HomeIcon,
      image: 'https://images.unsplash.com/photo-1628133287836-40bd5453bed1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxob21lJTIwb3duZXJzaGlwfGVufDB8fHx8MTc2MDAxMzIwN3ww&ixlib=rb-4.1.0&q=85',
      features: ['Stage-wise disbursement', 'Competitive rates', 'Flexible repayment'],
      gradient: 'from-blue-500 to-indigo-600',
      href: "https://aham.mbwhost.in/home-construction-loan" // ✅ Added link
    },
    {
      id: 'plotConstruction',
      title: t('products.items.plotConstruction.title'),
      description: t('products.items.plotConstruction.description'),
      icon: BuildingOffice2Icon,
      image: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg',
      features: ['Single loan solution', 'Land + Construction', 'End-to-end support'],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'nriLoan',
      title: t('products.items.nriLoan.title'),
      description: t('products.items.nriLoan.description'),
      icon: GlobeAsiaAustraliaIcon,
      image: 'https://images.unsplash.com/photo-1730130596425-197566414dc4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYW1pbHklMjBob21lfGVufDB8fHx8MTc2MDAxMzE5Nnww&ixlib=rb-4.1.0&q=85',
      features: ['NRI special rates', 'Remote processing', 'Overseas income'],
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      id: 'renovation',
      title: t('products.items.renovation.title'),
      description: t('products.items.renovation.description'),
      icon: WrenchScrewdriverIcon,
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwZmluYW5jZSUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NjAwMTMyMDF8MA&ixlib=rb-4.1.0&q=85',
      features: ['Home improvements', 'Quick approval', 'Modern upgrades'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'extension',
      title: t('products.items.extension.title'),
      description: t('products.items.extension.description'),
      icon: PlusIcon,
      image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxob3VzaW5nJTIwZmluYW5jZSUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NjAwMTMyMDF8MA&ixlib=rb-4.1.0&q=85',
      features: ['Space expansion', 'Additional floors', 'Value enhancement'],
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'mortgage',
      title: t('products.items.mortgage.title'),
      description: t('products.items.mortgage.description'),
      icon: BanknotesIcon,
      image: 'https://images.pexels.com/photos/7937708/pexels-photo-7937708.jpeg',
      features: ['Loan against property', 'Business funding', 'Personal needs'],
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative">
        
        {/* Title */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={cardVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('products.title')}
          </motion.h2>
          <motion.p variants={cardVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <a href={product.href || "#"} key={product.id} className="block">
              <motion.div
                variants={cardVariants}
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden h-full">

                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-80`} />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="flex items-center space-x-2 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                      <span>{t('common.learnMore')}</span>
                      <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProductsSection;
