import React from "react";

function ContactCard(props){
    return (
        <div>
            <h3>ContactCard</h3>
            <h4>{props.contact.name}</h4>
            <h4>{props.contact.company}</h4>
            <h4>{props.contact.phone}</h4>
        </div>
    )
}

export default ContactCard;