import { useState } from 'react';

//gives a form for users (emploteyers) a way to be able to quickly contact me through the page. 

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.email.includes('@')) newErrors.email = 'Invalid email address.';
    if (!form.message) newErrors.message = 'Message cannot be empty.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', form);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      {errors.name && <p className="error">{errors.name}</p>}
      
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      {errors.email && <p className="error">{errors.email}</p>}

      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" />
      {errors.message && <p className="error">{errors.message}</p>}

      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
