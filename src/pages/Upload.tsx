import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Upload = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    image: '',
    remarks: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        artwork_title: formData.title,
        artwork_description: formData.description,
        artwork_image: formData.image,
        artwork_remarks: formData.remarks
      };

      await emailjs.send(
        'service_ekd7mp6',
        'template_ech1mne',
        templateParams,
        'vPhmNhvCQSDpexiNm'
      );

      alert('Your artwork has been submitted successfully!');
      setFormData({
        name: '',
        email: '',
        title: '',
        description: '',
        image: '',
        remarks: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your artwork. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 text-center mb-8"
          >
            Submit Your Artwork
          </motion.h1>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 }}
            className="space-y-6 bg-white p-8 rounded-lg shadow"
          >
            <motion.div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </motion.div>

            <motion.div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </motion.div>

            <motion.div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Artwork Title
              </label>
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                type="text"
                id="title"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </motion.div>

            <motion.div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <motion.textarea
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                id="description"
                rows={3}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-700">
                Artwork Link
              </label>
              <motion.textarea
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                id="image"
                rows={1}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-700">
                Remarks (if any)
              </label>
              <motion.textarea
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                id="remarks"
                rows={2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.remarks}
                onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
              />
            </motion.div>

            <motion.div>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Artwork
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Upload;
