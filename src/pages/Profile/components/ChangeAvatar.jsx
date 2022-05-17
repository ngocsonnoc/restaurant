import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import Loading from "../../../components/common/Loading/Loading";
import UserModel from "../../../models/UserModel";
import { toast, ToastContainer } from "react-toastify";

import { storage } from "../../../based/firabase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import nonAccentVietnamese from "../../../based/NonAccentVietnnamese";

const ChangeAvatar = (props) => {
    const history = useHistory()
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState(props.profile || new UserModel());
  const [values, setValues] = useState({
    imageFile: null,
    imageSrc: "",
  });
  useEffect(() => {
    setProfile(props.profile);
  }, [props.profile]);

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        imageFile: null,
        imageSrc: "",
      });
    }
  };
  const handleSave = () => {
    if (values.imageFile) {
      console.log(values.imageFile);
      debugger;

      const storageRef = ref(
        storage,
        `images/${nonAccentVietnamese(values.imageFile.name)}`
      );

      // Create file metadata including the content type
      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };

      // Upload the file and metadata
      const uploadTask = uploadBytesResumable(
        storageRef,
        values.imageFile,
        metadata
      );

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (err) => {
          console.log("err!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            props.handleSaveChange({ ...profile, avatar: url });
            props.onClose();
          });
        }
      );
    } else {
      toast.error("Có lỗi xảy ra. Vui lòng thử lại sau!");

      return;
    }
  };
  return (
    <Modal
      show={props.isShow}
      dialogClassName="lotus-modal frm-changepass"
      onEscapeKeyDown={() => props.onClose()}
    >
      {isLoading ? (
        <Loading isShow={isLoading} />
      ) : (
        <Modal.Body>
          <div className="address__header d-flex mb-3  align-items-center justify-content-between">
            <span className="font-weight-bold" style={{ fontSize: 17 }}>
              <span>Thay đổi ảnh đại diện</span>
            </span>
            <div onClick={() => props.onClose()}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="body mt-5 d-flex justify-content-center align-items-center flex-column">
            <div className="view-avatar d-flex justify-content-center align-items-center mb-1">
              <div className="user-avatar">
                {profile.avatar || values.imageSrc ? (
                  <img
                    alt="avatar"
                    src={values.imageSrc ? values.imageSrc : profile.avatar}
                  />
                ) : (
                  <div>
                    {profile.lastName ? profile.lastName.charAt[0] : ""}
                  </div>
                )}
              </div>
            </div>
            <div className="upload-avatar d-flex justify-content-center align-items-center mt-5 w-100">
              <div className="btn-confirm btn-light-outline-dark d-flex justify-content-center">
                <label htmlFor="avatar"> Cập nhật ảnh đại diện</label>
              </div>

              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={showPreview}
                accept="image/*"
                className="input-avatar d-none"
              />
            </div>
            {values.imageSrc ? (
              <div
                className="btn-confirm  d-flex justify-content-center mt-5"
                onClick={handleSave}
              >
                Lưu thay đổi
              </div>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
      )}
      <ToastContainer autoClose={2000} />
    </Modal>
  );
};

export default withRouter(ChangeAvatar);
