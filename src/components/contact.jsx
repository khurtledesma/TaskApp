import React from "react";

const Contact = () => {
    return (
    <div class="mainApp">
        <h1>Contact Us!</h1>
        <form>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="Name" name="name"></input>
            </fieldset>

            <fieldset class="form-group">
                <input type="email" class="form-control" placeholder="Email"  name="email"></input>
            </fieldset>

            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="Enter message here" name="message" height="500px" id="messageInput"></input>
            </fieldset>
            <button type="submit" class="btn btn-block btn-success"> Send! </button>
        </form>
    </div>
    
    )
}

export default Contact;