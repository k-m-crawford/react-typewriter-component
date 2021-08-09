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

export default App