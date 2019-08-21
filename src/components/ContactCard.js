import React from "react";

function ContactCard(props){
    return (
        <div>
            <h3 style={{display: props.name ? "block" : "none"}}>ContactCard</h3>
            <h4>{props.contact.name}</h4>
            <h4 style={{color: !props.name && "gray"}}>{props.contact.company}</h4>
            <h4>{props.contact.phone}</h4>
        </div>
    )
}

export default ContactCard;