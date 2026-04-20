const Contact = () => {
  const location = import.meta.env.VITE_LOCATION; // Using your .env variable

  return (
    <section
      id="contact"
      style={{ padding: "60px 10%", background: "#f9f9f9" }}
    >
      <h2 style={{ color: "#003366" }}>Get In Touch</h2>
      <p>Have questions about admissions? Visit us or send a message.</p>
      <div style={{ marginTop: "20px" }}>
        <p>
          📍 <b>Address:</b> {location}
        </p>
        <p>
          📞 <b>Phone:</b> +234 800 123 4567
        </p>
        <p>
          📧 <b>Email:</b> info@samsschool.edu.ng
        </p>
      </div>
    </section>
  );
};
export default Contact;
