import React from "react";


const ContactForm = (props) => {
    return (
        <form action="post">
            <div className="form-group my-4">
                <input className="form-control" placeholder="Họ và tên" />
            </div>
            <div className="form-group my-4">
                <input className="form-control" placeholder="Email" type="email" />
            </div>
            <div className="form-group my-4">
                <textarea className="form-control" placeholder="Nội dung" rows="4"/>
            </div>

            <button onClick={props.submit} className="btn btn-primary">Gửi liên hệ</button>
        </form>
    )
}

export default ContactForm
