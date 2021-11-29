// @flow
import * as React from "react";
import style from "./button.module.scss";
type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};
type State = {};

export class Button extends React.Component<Props, State> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.botao} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
