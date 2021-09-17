# react-typewriter-component

> A simple set of components that can be used to make text adventures in React, entirely client-side.

[![NPM](https://img.shields.io/npm/v/react-typewriter-component.svg)](https://www.npmjs.com/package/react-typewriter-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

View the components in action [here](https://k-m-crawford.github.io/react-typewriter-component/)

## Install

```bash
npm install react-typewriter-component
```

## Usage

The **StoryPage** component leverages several **Typewriter** components to create text for a page. State and callbacks can be used to modify what component will display and when (**StoryPage** components have an optional _active_ prop that can be used to activate the component without re-rendering previous **StoryPage** components). Note that the _typeSpeed_ prop is also optional. 

Currently, inline styles are restricted to red, green, and blue; any text surrounded by tags \\R, \\G or \\B will be coloured. Future updates will include visual effects, sound queues, and more. 

**StoryPage** components can have _actionable_ prompts that prompt the user with buttons after the text is displayed. Actionables can have conditionals for if they are displayed as well as callbacks for what functions to perform after being clicked.

Pair with **react-router-dom** for a complete text adventure engine. 

```jsx
import React from 'react'
import { useState } from 'react'
import { StoryPage } from 'react-typewriter-component'

const App = () => {

  const [ mySwitch, setSwitch ] = useState(false)

  return (
    <>
      <StoryPage msgs={["Here is an example on how to use this React component.",
                           "Currently, only colours \\Rred\\R and \\Bblue\\B are supported. More to come.",
                           "Style the component using regular CSS.",
                           "Messages can be skipped by clicking or pressing space.",
                           "Actionables are buttons displayed after the messages have been finished typing.",
                           "They have callbacks that can be used to set state (or whatever you like) to move your text adventure along.",
                           "The 'StoryPage' component has an 'active' switch that can be used to prompt new text to display after actionables.",
                           "Forthcoming features will include conditionals for actionables, more typing effects, sound queues, and more."]}
                    typeSpeed={100}
                    actionables={[
                      {conditional: () => { return true },
                       text: "I will appear as long as the conditional function returns true.",
                       callback: () => doSomething() },
                      {text: "Click me for more text.",
                       callback: () => setSwitch(true)},
                      {text: "Non-functional actionable"}
                    ]} />
      <StoryPage msgs={["You clicked the button and activated more text! This one types faster.",
                        "That's all for the example."]} 
      actionables={[
        {text: "Non-functional actionable"}
      ]}
      active={mySwitch} />
    </>
  )

}
```

## License

MIT © [k-m-crawford](https://github.com/k-m-crawford)
