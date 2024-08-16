import React, { FC } from "react";
import classNames from "classnames";
import { AlertProps } from "./types";

export const Alert: FC<AlertProps> = (props) => {
  // const [hide, setHide] = useState(false);
  const {
    title,
    description,
    type = "default",
    onClose,
    closable = true,
  } = props;

  const classes = classNames("lucky-alert", {
    [`lucky-alert-${type}`]: type,
  });

  const titleClass = classNames("lucky-alert-title", {
    "bold-title": description,
  });

  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    // setHide(true);
  };

  return (
    <div className={classes}>
      <span className={titleClass}>{title}</span>
      {description && <p className="lucky-alert-desc">{description}</p>}
      {closable && (
        <span className="lucky-alert-close" onClick={handleClose}>
          1111
        </span>
      )}
    </div>
  );
};

export default Alert;
