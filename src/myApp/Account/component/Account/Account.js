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
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
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
  const { handleSubmit, control, reset } = useForm();
  const [imgUser, setImgUser] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [dateType, setDateType] = React.useState(true);
  const [showInput, setInput] = React.useState(null);
  const wrapper = React.createRef();
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
          <Controller
            name="userName"
            control={control}
            defaultValue={""}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                style={{ width: "100%" }}
                {...field}
              />
            )}
          />
          <Controller
            name="date"
            control={control}
            defaultValue={""}
            onFocus={() => {
              setDateType(true);
            }}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                autoFocus
                margin="dense"
                id="name"
                onFocus={() => {
                  setDateType(true);
                }}
                label=""
                type={dateType ? "date" : "text"}
                onBlur={() => {
                  setDateType(false);
                }}
                fullWidth
                style={{ width: "100%", marginTop: 20 }}
                {...field}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            defaultValue={""}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Address"
                type="text"
                fullWidth
                style={{ width: "100%", marginBottom: 20 }}
                {...field}
              />
            )}
          />
          <Controller
            name="gender"
            control={control}
            defaultValue={""}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <Select
                style={{ width: "100%", marginTop: 20 }}
                {...field}
                options={[
                  { value: "1", label: "Male" },
                  { value: "0", label: "Female" },
                ]}
              />
            )}
          />
        </>
      );
    }
    if (e === 2) {
      return (
        <>
          <Controller
            name="language"
            control={control}
            defaultValue={""}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Language"
                type="text"
                fullWidth
                style={{ width: "100%" }}
                {...field}
              />
            )}
          />
          <Controller
            name="time_zone"
            control={control}
            defaultValue={""}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Time zone"
                type="text"
                fullWidth
                style={{ width: "100%" }}
                {...field}
              />
            )}
          />
          <Controller
            name="account_status"
            control={control}
            defaultValue={""}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Account status"
                type="text"
                fullWidth
                style={{ width: "100%" }}
                {...field}
              />
            )}
          />
        </>
      );
    }
    if (e === 3) {
      return (
        <>
          <Controller
            name="email"
            control={control}
            defaultValue={""}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                margin="dense"
                id="name"
                label="Email"
                type="text"
                fullWidth
                style={{ width: "100%" }}
              />
            )}
          />
        </>
      );
    }
    if (e === 4) {
      return (
        <>
          <Controller
            name="phone"
            control={control}
            defaultValue={""}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                margin="dense"
                id="name"
                label="Phone"
                type="text"
                fullWidth
                style={{ width: "100%" }}
              />
            )}
          />
        </>
      );
    }
    if (e === 5) {
      return (
        <>
          <Controller
            name="password"
            control={control}
            defaultValue={""}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="text"
                fullWidth
                style={{ width: "100%" }}
              />
            )}
          />
        </>
      );
    }
  };

  const showName = (e) => {
    if (e === 1) {
      return "Form Personal Detail";
    }
    if (e === 2) {
      return "Form Account Setting";
    }
    if (e === 3) {
      return "Form Email Address";
    }
    if (e === 4) {
      return "Form Phone Address";
    }
    if (e === 5) {
      return "Form Security";
    }
  };
  const onSubmit = (data) => {
    reset();
    console.log(data);
  };
  const showForm = (open, wrapper) => {
    return (
      <Dialog
        ref={wrapper}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form style={{ height: "auto" }} onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="form-dialog-title">
            {showName(showInput)}
          </DialogTitle>
          <DialogContent className="DialogContent">
            {showInputModel(showInput)}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  };
  return (
    <>
      {showForm(open, wrapper)}
      <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Account</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
        </div>
      </div>
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
