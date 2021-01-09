import React from "react";

const Contact = () => {
    return (
    <div class="mainApp">
        <h1>Contact Us!</h1>
        <form method="POST" action="https://formspree.io/f/xjvadjzj">
            <fieldset class="form-group">
                <input type="text" className="form-control" placeholder="Name" name="name"></input>
            </fieldset>

            <fieldset class="form-group">
                <input type="email" className="form-control" placeholder="Email"  name="email"></input>
            </fieldset>

            <fieldset class="form-group">
                <input type="text" className="form-control" placeholder="Enter message here" name="message" height="500px" id="messageInput"></input>
            </fieldset>
            <button type="submit" className="btn btn-block btn-success"> Send! </button>
        </form>
    </div>
    
    )
}

export default Contact;