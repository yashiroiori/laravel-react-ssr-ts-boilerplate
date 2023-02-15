import React from "react";
import Icon from "../icon/Icon";
import classNames from "classnames";
import { InertiaLink } from "@inertiajs/inertia-react";

export const Block = ({ className, size, ...props }) => {
  const blockClass = classNames({
    "nk-block": true,
    [`nk-block-${size}`]: size,
    [`${className}`]: className,
  });
  return <div className={blockClass}>{props.children}</div>;
};
export const BlockContent = ({ className, ...props }) => {
  const blockContentClass = classNames({
    "nk-block-content": true,
    [`${className}`]: className,
  });
  return <div className={blockContentClass}>{props.children}</div>;
};

export const BlockBetween = ({ className, size, ...props }) => {
  return (
    <div className={`${size ? `nk-block-between-${size}` : "nk-block-between"} ${className ? className : ""}`}>
      {props.children}
    </div>
  );
};
export const BlockHead = ({ className, size, wide, ...props }) => {
  const blockHeadClass = classNames({
    "nk-block-head": true,
    [`nk-block-head-${size}`]: size,
    [`wide-${wide}`]: wide,
    [`${className}`]: className,
  });
  return <div className={blockHeadClass}>{props.children}</div>;
};
export const BlockHeadContent = ({ className, ...props }) => {
  return <div className={[`nk-block-head-content${className ? " " + className : ""}`]}>{props.children}</div>;
};
export const BlockTitle = ({ className, page, ...props }) => {
  const classes = [`nk-block-title ${page ? "page-title" : "title"}${className ? " " + className : ""}`];
  return (
    <React.Fragment>
      {!props.tag ? (
        <h3 className={classes}>{props.children}</h3>
      ) : (
        <props.tag className={classes}>{props.children}</props.tag>
      )}
    </React.Fragment>
  );
};
export const BlockDes = ({ className, page, ...props }) => {
  const classes = [`nk-block-des${className ? " " + className : ""}`];
  return <div className={classes}>{props.children}</div>;
};

export const BlockHeadSub = ({ className, ...props }) => {
  return (
    <div className={`nk-block-head-sub ${className ? className : ""}`}>
      <span>{props.children}</span>
    </div>
  );
};

export const BlockImage = ({ classNames, ...props }) => {
  return <div className={`nk-block-image ${classNames ? classNames : ""}`}>{props.children}</div>;
};

export const BackTo = ({ className, link, icon, onClick, ...props }) => {
  const classes = [`back-to${className ? " " + className : ""}`];
  return (
    <div className="nk-block-head-sub" onClick={onClick}>
      <InertiaLink className={classes} to={process.env.PUBLIC_URL + link}>
        <Icon name={icon} />
        <span>{props.children}</span>
      </InertiaLink>
    </div>
  );
};
