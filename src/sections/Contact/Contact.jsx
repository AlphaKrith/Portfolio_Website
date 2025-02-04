import React from 'react'
import styles from "./ContactStyles.module.css"

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="https://formspree.io/f/xovajown" method='post'>
            <div className="fromGroup">
                <label htmlFor="name" hidden>Name</label>
                <input type="text" name='name' id='name' placeholder='Name' required />
            </div>

            <div className="fromGroup">
                <label htmlFor="email" hidden>Email</label>
                <input type="text" email='email' id='email' placeholder='Email Id' required />
            </div>

            <div className="fromGroup">
                <label htmlFor="message" hidden>Message</label>
                <textarea type="text" message='message' id='message' placeholder='Message' required></textarea>
            </div>

            <input className='hover btn' type="submit" value="Submit"/>
        </form>
    </section>
  )
}

export default Contact
