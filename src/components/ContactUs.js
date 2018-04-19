import React from 'react'

const ContactUs = (props) => {
  return(
    <section className="section">
      <div className="container">
        <div class="columns">
          <div class="column is-half">

          </div>

          <div class="column is-half">
            <h1 className="title">Contact</h1>
            <h2 className="subtitle">
              Feel free to contact me below about any design work or just to say hi.
            </h2>

            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="Name" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input className="input" type="email" placeholder="Email" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Textarea" placeholder="Message"></textarea>
              </div>
            </div>

            <div className="field">
              <label class="label">Budget - if applicable</label>
              <div className="control">
                <div class="select">
                  <select>
                    <option>$1 - $49</option>
                    <option>$50 - $99</option>
                    <option>$100 - $300</option>
                    <option>$300 - $500</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactUs
