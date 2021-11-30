import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch</h3>
            <p>
              Mustache palo santo hashtag humblebrag pinterest. Tacos franzen
              vice chicharrones. La croix pabst leggings, iPhone bitters venmo
              twee neutra.
            </p>
            <p>
              seitan chicharrones pour-over kinfolk. Gastropub you probably
              haven't heard of them schlitz, humblebrag XOXO pug truffaut plaid
              narwhal.
            </p>
            <p>
              Helvetica 90's hella four loko occupy yuccie, hot chicken cred
              copper mug brooklyn fashion axe mustache pork belly. Marfa
              mumblecore bicycle rights blog etsy chartreuse. Coloring book
              pinterest literally meh cold-pressed. Vexillologist migas meh food
              truck photo booth portland ugh.
            </p>
          </article>
          <article className="form contact-form">
            <div className="form-row">
              <label htmlFor="name">your name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">your name</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">your name</label>
              <textarea name="message" id="email" />
            </div>
            <button type="submit" className="btn block">
              Submit
            </button>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
