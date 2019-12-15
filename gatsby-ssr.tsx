import * as React from "react";
import { renderToString } from "react-dom/server";
import {Provider} from "./src/store";

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }: any) => {
  const ConnectedBody = () => (
    <Provider>
      {bodyComponent}
    </Provider>
  );
  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
