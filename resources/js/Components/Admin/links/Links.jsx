import React from "react";
import Icon from "../icon/Icon";
import classNames from "classnames";
import { InertiaLink } from "@inertiajs/inertia-react";

export const LinkItem = ({ ...props }) => {
  return (
    <li>
      {props.tag !== "a" ? (
        <InertiaLink to={process.env.PUBLIC_URL + props.link} {...props}>
          {props.icon ? <Icon name={props.icon} /> : null} <span>{props.text || props.children}</span>
        </InertiaLink>
      ) : (
        <a href={process.env.PUBLIC_URL + props.link} onClick={(ev) => ev.preventDefault()}>
          {props.icon ? <Icon name={props.icon} /> : null} <span>{props.text || props.children}</span>
        </a>
      )}
    </li>
  );
};

export const LinkList = ({ ...props }) => {
  const listClasses = classNames({
    "link-list": !props.opt,
    "link-list-opt": props.opt,
    [`${props.className}`]: props.className,
  });
  return <ul className={listClasses}>{props.children}</ul>;
};
