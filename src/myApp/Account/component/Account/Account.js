/* eslint-disable no-unreachable */
import React, { useState } from "react";
import "./styles/styles.scss";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));
const Img =
  "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg";
const Account = () => {
  const classes = useStyles();

  const [imgUser, setImgUser] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [dateType, setDateType] = React.useState(false);
  const [showInput, setInput] = React.useState(null);

  const handleClickOpen = (e) => {
    if (e === "1") {
      setInput(1);
    }
    if (e === "2") {
      setInput(2);
    }
    if (e === "3") {
      setInput(3);
    }
    if (e === "4") {
      setInput(4);
    }
    if (e === "5") {
      setInput(5);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onUpdateImg = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImgUser(URL.createObjectURL(event.target.files[0]));
    }
  };
  const showInputModel = (e) => {
    if (e === 1) {
      return (
        <>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            style={{ width: "100%" }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Date Birthday"
            type={dateType ? "text" : "date"}
            onFocus={() => {
              setDateType(false);
            }}
            onBlur={() => {
              setDateType(true);
            }}
            fullWidth
            style={{ width: "100%" }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Gender"
            type="text"
            fullWidth
            style={{ width: "100%" }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="text"
            fullWidth
            style={{ width: "100%" }}
          />
        </>
      );
    }
    if (e === 2) {
      return (
        <>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Language"
            type="text"
            fullWidth
            style={{ width: "100%" }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Time zone"
            type="text"
            fullWidth
            style={{ width: "100%" }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Account status"
            type="text"
            fullWidth
            style={{ width: "100%" }}
          />
        </>
      );
    }
    if (e === 3) {
      return (
        <>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="text"
            fullWidth
            style={{ width: "100%" }}
          />
        </>
      );
    }
    if (e === 4) {
      return (
        <>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            type="text"
            fullWidth
            style={{ width: "100%" }}
          />
        </>
      );
    }
    if (e === 5) {
      return (
        <>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="text"
            fullWidth
            style={{ width: "100%" }}
          />
        </>
      );
    }
  };

  const showName = (e) => {

    if(e===1){
        return "Form Personal Detail"
    }
    if(e===2){
        return "Form Account Setting"
    }
    if(e===3){
        return "Form Email Address"
    }
    if(e===4){
        return "Form Phone Address"
    }
    if(e===5){
        return "Form Security"
    }
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{showName(showInput)}</DialogTitle>
        <DialogContent className="DialogContent">
          {showInputModel(showInput)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <div className="container">
        <div className="container-account">
          <div className="container-account-left">
            <div className="container-account-img">
              <div className="container-account-img-item">
                <img alt="" src={imgUser ? imgUser : Img} />
                <div className="bt-input">
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                    onChange={onUpdateImg}
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </div>
              </div>
              <div className="container-account-img-item">
                <p>HELLO, Võ Ngọc Chính</p>
              </div>
              <div className="container-account-img-item"></div>
            </div>
          </div>
          <div className="container-account-right">
            <div className="container-account-detail">
              <p>
                <span>Personal Detail</span>
                <span>
                  <EditIcon
                    className="EditIcon"
                    onClick={() => handleClickOpen("1")}
                  />
                </span>
              </p>
              <div className="container-account-detail-1">
                <div className="container-account-detail-left">
                  <div>Name</div>
                  <div>Date Birthday</div>

                  <div>Gender</div>
                  <div>Address</div>
                </div>
                <div className="container-account-detail-right">
                  <p>Võ Ngọc Chính</p>
                  <p>14-10-2000</p>
                  <p>Male</p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout
                  </p>
                </div>
              </div>
            </div>
            <div className="container-account-detail">
              <p>
                <span>Account Setting</span>
                <span>
                  <EditIcon
                    className="EditIcon"
                    onClick={() => handleClickOpen("2")}
                  />
                </span>
              </p>
              <div className="container-account-detail-1">
                <div className="container-account-detail-left">
                  <div>Language</div>
                  <div>Time zone</div>
                  <div>Account Status</div>
                </div>
                <div className="container-account-detail-right">
                  <p>English</p>
                  <p>Central VietNam</p>
                  <p>Enable</p>
                </div>
              </div>
            </div>
            <div className="container-account-detail">
              <p>
                <span>Email Address</span>
                <span>
                  <EditIcon
                    className="EditIcon"
                    onClick={() => handleClickOpen("3")}
                  />
                </span>
              </p>
              <div className="container-account-detail-1">
                <div className="container-account-detail-left">
                  <div>Email</div>
                </div>
                <div className="container-account-detail-right">
                  <p>ngocchinh1410@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="container-account-detail">
              <p>
                <span>Phone Address</span>
                <span>
                  <EditIcon
                    className="EditIcon"
                    onClick={() => handleClickOpen("4")}
                  />
                </span>
              </p>
              <div className="container-account-detail-1">
                <div className="container-account-detail-left">
                  <div>Phone</div>
                </div>
                <div className="container-account-detail-right">
                  <p>0763717084</p>
                </div>
              </div>
            </div>
            <div className="container-account-detail">
              <p>
                <span>Security</span>
                <span>
                  <EditIcon
                    className="EditIcon"
                    onClick={() => handleClickOpen("5")}
                  />
                </span>
              </p>
              <div className="container-account-detail-1">
                <div className="container-account-detail-left">
                  <div>Password</div>
                </div>
                <div className="container-account-detail-right">
                  <p>******************</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
