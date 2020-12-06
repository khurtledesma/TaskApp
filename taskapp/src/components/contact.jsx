import React from "react";

const Contact = () => {
    return (
    <div class="mainApp">
        <h1>Contact Us!</h1>
        <form>
            <fieldset>
                <label for="name">Name:</label>
                <input type="text" name="name"></input>
            </fieldset>

            <fieldset>
                <label for="email">Email:</label>
                <input type="email" name="email"></input>
            </fieldset>

            <fieldset>
                <label for="message">Message:</label>
                <input type="text" name="message"></input>
            </fieldset>
            <button type="submit"> Send! </button>
        </form>
    </div>
    
    )
}

export default Contact;