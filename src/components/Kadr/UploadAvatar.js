import React from "react";
import { Upload, Icon, message } from "antd";
import styled from "styled-components";

const StyledUpload = styled(Upload)`
  .ant-upload {
    width: 100% !important;
    /* height: 17rem !important; */
  }
`;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("Faqat JPG/PNG formatdagi fayl yuklashingiz mumkin!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Rasm 2MB'dan kichik bo'lishi kerak!");
  }
  return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.props.loading ? "loading" : "file-image"} />
        <div className="ant-upload-text">Rasmni yuklang</div>
      </div>
    );

    return (
      <StyledUpload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.props.onChange}
      >
        {this.props.file ? (
          <img src={this.props.file} alt="avatar" style={{ width: "100%" }} />
        ) : (
            uploadButton
          )}
      </StyledUpload>
    );
  }
}

export default Avatar;
