import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      purple: "#8661de";
      blue: "#00bac7";
      gray: "#f6f6f6";
      green: "#07b495";
      lightGreen: "#99ecdd";
      darkGray: "#54595d";
    };
    boxShadow: {
      normal: "0 3px 8px 0 rgb(0 0 0 / 10%)";
      purple: "0 3px 8px 0 #d6c9ff";
      blue: "0 3px 8px 0 #b3e2e6";
    };
  }
}
