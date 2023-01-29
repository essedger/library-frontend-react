import React from "react";

import { Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { UploadFile, UploadProps } from "antd/lib/upload/interface";
import { UploadChangeParam } from "antd/es/upload";
import "./styles.scss";

interface UploadAvatarProps extends UploadProps {
  loading?: boolean;
  onChangeUpload: (info: UploadChangeParam<UploadFile>) => void;
  file?: string | undefined;
}

function UploadAvatar({
  loading,
  onChangeUpload,
  file,
  ...props
}: UploadAvatarProps) {
  const customRequest = () => null;
  const uploadButton = (
    <div className="upload-avatar__button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
    </div>
  );
  const avatar = (
    <div className="upload-avatar__button">
      {loading ? <LoadingOutlined /> : <img src={file} alt="avatar" />}
    </div>
  );

  return (
    <div className="upload-avatar">
      <Upload
        customRequest={customRequest}
        showUploadList={false}
        onChange={onChangeUpload}
        {...props}
      >
        {file ? avatar : uploadButton}
      </Upload>
    </div>
  );
}

export default UploadAvatar;
