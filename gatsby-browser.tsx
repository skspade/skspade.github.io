import * as React from "react";
import {Provider} from "./src/store";

export const wrapRootElement = ({ element }: any) =>
    <Provider >
      {element}
    </Provider>;
