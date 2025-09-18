import { useState, type ReactNode, type FormEvent, type ChangeEvent } from 'react';

type ContactInfoItemProps = {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}

const ContactInfoItem = ({ icon, title, children }: ContactInfoItemProps) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-8 h-8 text-amber-800">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

const FormField = ({ id, name, label, type = 'text', value, onChange, error }: { id: string, name: string, label: string, type?: string, value: string, onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, error?: string }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {type === 'textarea' ? (
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                rows={4}
                className={`appearance-none block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm`}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
        ) : (
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className={`appearance-none block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm`}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
        )}
        {error && <p id={`${id}-error`} className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
);

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<Partial<typeof formData>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors: Partial<typeof formData> = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            // Here you would typically send the data to a server
            setIsSubmitted(true);
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Connect</p>
                    <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">Get in Touch</h1>
                    <p className="text-lg text-gray-600">
                        We'd love to hear from you. Fill out the form below or use our contact details to reach out for any inquiries or assistance.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-start">
                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                        {isSubmitted ? (
                            <div className="text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                                <p className="text-gray-600 mt-2">Your message has been sent successfully. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                                <FormField id="name" name="name" label="Full Name" value={formData.name} onChange={handleChange} error={errors.name} />
                                <FormField id="email" name="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                                <FormField id="subject" name="subject" label="Subject" value={formData.subject} onChange={handleChange} error={errors.subject} />
                                <FormField id="message" name="message" label="Message" type="textarea" value={formData.message} onChange={handleChange} error={errors.message} />
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    <div>
                         <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-8">
                             <ContactInfoItem
                                icon={<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z" fill="currentColor"></path></svg>}
                                title="Email"
                            >
                                <a href="mailto:info@palmcourtkarate.co.za?subject=Contact%20Us" className="hover:text-black transition-colors">info@palmcourtkarate.co.za</a>
                            </ContactInfoItem>
                            <ContactInfoItem
                                icon={<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.707 12.293C17.6142 12.2 17.504 12.1263 17.3827 12.076C17.2614 12.0257 17.1313 11.9998 17 11.9998C16.8687 11.9998 16.7386 12.0257 16.6173 12.076C16.496 12.1263 16.3858 12.2 16.293 12.293L14.699 13.887C13.96 13.667 12.581 13.167 11.707 12.293C10.833 11.419 10.333 10.04 10.113 9.30096L11.707 7.70696C11.7999 7.61417 11.8737 7.50397 11.924 7.38265C11.9743 7.26134 12.0002 7.13129 12.0002 6.99996C12.0002 6.86862 11.9743 6.73858 11.924 6.61726C11.8737 6.49595 11.7999 6.38575 11.707 6.29296L7.707 2.29296C7.61421 2.20001 7.50401 2.12627 7.38269 2.07596C7.26138 2.02565 7.13133 1.99976 7 1.99976C6.86866 1.99976 6.73862 2.02565 6.6173 2.07596C6.49599 2.12627 6.38579 2.20001 6.293 2.29296L3.581 5.00496C3.201 5.38496 2.987 5.90696 2.995 6.43996C3.018 7.86396 3.395 12.81 7.293 16.708C11.191 20.606 16.137 20.982 17.562 21.006H17.59C18.118 21.006 18.617 20.798 18.995 20.42L21.707 17.708C21.7999 17.6152 21.8737 17.505 21.924 17.3837C21.9743 17.2623 22.0002 17.1323 22.0002 17.001C22.0002 16.8696 21.9743 16.7396 21.924 16.6183C21.8737 16.4969 21.7999 16.3867 21.707 16.294L17.707 12.293ZM17.58 19.005C16.332 18.984 12.062 18.649 8.707 15.293C5.341 11.927 5.015 7.64196 4.995 6.41896L7 4.41396L9.586 6.99996L8.293 8.29296C8.17546 8.41041 8.08904 8.55529 8.04155 8.71453C7.99406 8.87376 7.987 9.04231 8.021 9.20496C8.045 9.31996 8.632 12.047 10.292 13.707C11.952 15.367 14.679 15.954 14.794 15.978C14.9565 16.0129 15.1253 16.0064 15.2846 15.9591C15.444 15.9117 15.5889 15.825 15.706 15.707L17 14.414L19.586 17L17.58 19.005V19.005Z" fill="currentColor"></path></svg>}
                                title="Phone"
                            >
                                <a href="tel:+27832286331" className="hover:text-black transition-colors">+27 (0)83 228 6331</a>
                            </ContactInfoItem>
                            <ContactInfoItem
                                icon={<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14ZM12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8Z" fill="currentColor"></path><path d="M11.42 21.814C11.5892 21.9349 11.792 21.9998 12 21.9998C12.208 21.9998 12.4107 21.9349 12.58 21.814C12.884 21.599 20.029 16.44 20 10C20 5.589 16.411 2 12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.116 21.599 11.42 21.814ZM12 4C15.309 4 18 6.691 18 10.005C18.021 14.443 13.612 18.428 12 19.735C10.389 18.427 5.979 14.441 6 10C6 6.691 8.691 4 12 4Z" fill="currentColor"></path></svg>}
                                title="Office"
                            >
                                <p>27 Janssens Road, Constantia Kloof, Roodepoort, 1709</p>
                            </ContactInfoItem>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.759082729804!2d27.9103988150287!3d-26.13944178346618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959ff6d2105c31%3A0x8f76e3e57f5c71a3!2s27%20Janssens%20Rd%2C%20Constantia%20Kloof%2C%20Roodepoort%2C%201709%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1689346215331!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dojo Location Map"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactUsPage;