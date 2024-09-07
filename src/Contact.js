import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }

    iframe {
      border: 0;
      width: 100%;
      height: 400px;
      allowfullscreen: "";
      loading: "lazy";
      referrerpolicy: "no-referrer-when-downgrade";
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      iframe {
        height: 300px;
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55574.58198440044!2d77.66765785166722!3d29.47519407846565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1ba00983523d%3A0xc6a75ba008574871!2sMuzaffarnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1725539249079!5m2!1sen!2sin"
  title="Google Map Location"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mqazngqo"
            method="POST"
            className="contact-inputs"
          >
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              autoComplete="off"
            />

            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
            />

            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter your message"
              required
              autoComplete="off"
            ></textarea>

            <input type="submit" value="Send" aria-label="Send Message" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
