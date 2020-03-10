---
title: Customizing Amplify's Auth Component
createdDate: "2020-02-25"
updatedDate: "2020-02-25"
image: welcoming.png
draft: true
description: "We will modify the Auth component from AWS Amplify to fit our UI needs without tocuhing the authentication logic."
tags: AWS,Amplify,React
path: "/blog/customizing-aws-auth-component"
---

Amplify gives us everything we need out the of the box for authentication through AWS Cognito. The `aws-amplify-react` package even includes a component built for us to handle

- Sign In
- Sign Up
- Creating an Account

This is nice and all, however then you are at the mercy of using the default look of Amplify UI.

It would be nice if we could just override the rendering function but keep the component logic.

Well we can.

Luckily the components from `aws-amplify-react` are class components. We can extend these classes to override the render method while calling thier parent's class functions to manage the state and functionality.
This keeps us in charge of the UI while AWS can handle the logic.

Take a look at the `CustomSignIn` component below.

```tsx
import React from "react"
import TextField from "@material-ui/core/TextField"
import { Button } from "@material-ui/core"
import { SignIn, Link } from "aws-amplify-react"
import { ISignInProps } from "aws-amplify-react/lib-esm/Auth/SignIn"

export class CustomSignIn extends SignIn {
  constructor(props: ISignInProps) {
    super(props)
    this._validAuthStates = ["signIn", "signedOut", "signedUp"]
  }

  showComponent(theme: any) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "75%",
          justifyContent: "center",
          paddingLeft: "25%",
          paddingRight: "25%",
        }}
      >
        <div>
          <h2> Welcome to the rest of your life</h2>
          <h3> Financial life that is</h3>
          <TextField
            defaultValue="Email"
            inputProps={{ "aria-label": "Email" }}
            style={{ marginBottom: "1rem" }}
            fullWidth
            /**
             * I believe the id and key has to match something amplify recognizes
             */
            id="email"
            key="email"
            name="email"
            label="email"
            /**
             * Uses the parents components onChange handler
             */
            onChange={this.handleInputChange}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            defaultValue="Password"
            inputProps={{ "aria-label": "password" }}
            style={{ marginBottom: "1rem" }}
            fullWidth
            /**
             * I believe the id and key has to match something amplify recognizes
             */
            id="password"
            key="password"
            name="password"
            type="password"
            label="password"
            /**
             * Uses the parents components onChange handler
             */
            onChange={this.handleInputChange}
            variant="outlined"
          />
        </div>
        <div>
          <Link href="#" onClick={() => super.changeState("signUp")}>
            Sign Up
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={() => super.signIn("")}
            style={{ marginLeft: "15%" }}
          >
            Sign In
          </Button>
        </div>
      </div>
    )
  }
}
```

As you can see, this overrides the `SignIn` component from the `aws-amplify-react` package.

Fist take a look at the constructor.

```typescript
export class CustomSignIn extends SignIn {
  constructor(props: ISignInProps) {
    super(props)
    this._validAuthStates = ["signIn", "signedOut", "signedUp"]
  }
}
```

Notice `this._validAuthStates`, Amplify uses `authState` to track the current auth status of a user.
With `this._validAuthStates` we can determine which state is valid for this particular component.
Amplify then uses this to only render the component when in these states.

Things that still need to be written about

1. If you do not require a username, how you map the email field to username.

2. How to display error messages. (Wrong username/password)

https://blog.kylegalbraith.com/2018/11/29/how-to-easily-customize-the-aws-amplify-authentication-ui/
