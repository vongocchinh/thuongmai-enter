import React,{useState} from "react";
import "./styles/styles.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Contact = () => {
  const [input, setInput] = useState({});
  const onChange=(e)=>{
    var inputData={...input,[e.target.name]:e.target.value}
    setInput(inputData);
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(input);
    setInput({});
    e.target.reset();
  }
  
  return (
    <>
      <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Contact</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-contact">
          <p className="name">Contact Us</p>
          
          <form onSubmit={onSubmit} >
            <span>
            <input onChange={onChange} type="text" name="name"  placeholder="Name" />
            <input onChange={onChange} type="text" name="phone"  placeholder="Phone" />
            </span>
            <input onChange={onChange} type="text" name="email"  placeholder="Email" />
            <textarea onChange={onChange} name="message" rows="" cols="message"></textarea>
            <input type="submit" name="" value="Save" />
            <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
