import "./App.css";
import React, { useRef } from 'react';

function App() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(true);
  const [speakingAnim, setSpeakingAnim] = React.useState(false);
  const [listeningAnim, setListeningAnim] = React.useState(false);
  

  //styles
  const startLeft = "moveAndExpandLeft 0.5s 1 ease-in-out forwards";
  const startRight = "moveAndExpandRight 0.5s 1 ease-in-out forwards";

  const stopLeft = "moveAndCollapseLeft 0.5s 1 ease-in-out forwards";
  const stopRight = "moveAndCollapseRight 0.5s 1 ease-in-out forwards";

  const staticCenter = "none";

  //voice animation
  const listenAnimation = "listening-pulse 7.5s infinite ease-in-out";
  
  
  const speakingAnimationOuterL = "pulse-outer-left 5s infinite ease-in-out";
  const speakingAnimationOuterR = "pulse-outer-right 5s infinite ease-in-out";
  const speakingAnimationInner = "pulse-inner 7.5s infinite ease-in-out";




  const dotAnimRef = useRef(null);

  const [centerAnimation, setCenterAnimation] = React.useState();
  const [leftAnimation, setLeftAnimation] = React.useState();
  const [rightAnimation, setRightAnimation] = React.useState();

  const handleAnimation = (param) => {
    switch(param)
    {
      case 1:
        // console.log("off/on ; ",);
        voiceEnabled? console.log("turning off"): console.log("turining ONN");
        
        voiceEnabled ? closeVoiceAnimation() : openVoiceAnimation();
        return;
      case 2:
        console.log("Start listening");
        StartListening();
        return;
      case 3:
        console.log("start speaking");
        StartSpeaking();
        return;
    }
  }

  //turn on/off voice 
  function openVoiceAnimation(){
    console.log("opening voice ");

    setCenterAnimation(staticCenter);
    setLeftAnimation(startLeft);
    setRightAnimation(startRight);

    setVoiceEnabled(true);

    setListeningAnim(false);
    setSpeakingAnim(false);
  }

  function closeVoiceAnimation(){
    setCenterAnimation(staticCenter);
    setLeftAnimation(stopLeft);
    setRightAnimation(stopRight);

    setVoiceEnabled(false);

    setListeningAnim(false);
    setSpeakingAnim(false);
  }

  function StartListening(){

    if(!voiceEnabled) openVoiceAnimation();

    setListeningAnim(true);
    setSpeakingAnim(false);

    setCenterAnimation(listenAnimation);
    setLeftAnimation(listenAnimation);
    setRightAnimation(listenAnimation);
  }

  function StartSpeaking(){
    if(!voiceEnabled) openVoiceAnimation();

    setSpeakingAnim(true);
    setListeningAnim(false);

    setCenterAnimation(speakingAnimationInner);
    setLeftAnimation(speakingAnimationOuterL);
    setRightAnimation(speakingAnimationOuterR);
  }

  // React.useEffect( () => {
  //   console.log("hello bitches");
  //   if(voiceEnabled) openVoiceAnimation();
  // },[]);

  const [leftL, setleftL] = React.useState("-65px");
  const [leftR, setleftR] = React.useState("65px");

  React.useEffect( () => {
    console.log("hello");
    if(voiceEnabled)
    {
      setleftL("-65px");
      setleftR("65px");
    }
    else
    {
      setleftL("-65px");
      setleftR("65px");
    }
  },[voiceEnabled]);

  const handleAnimationEnd = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <div className="container">
        <div id="chatbot">
          {/* center div  */}
          <div 
            ref={dotAnimRef} 
            className="dot"
            onAnimationEnd={handleAnimationEnd}
            style={{
              animation: centerAnimation,
            }}
          ></div>
          {/* left  */}
          <div 
            className="dot"
            style={{
              // animation: leftAnimation,
              // left: voiceEnabled? "-32px": "-65px",

              left: leftL
            }}
          ></div>
          
          {/* right  */}
          <div 
            className="dot"
            style={{
              animation: rightAnimation,
              // left: voiceEnabled? "0px": "65px",
              left: leftR

            }}
          ></div>
        </div>
        
        <div id="chatbot-corner"></div>

        <div id="antenna"
          // style={{
          //     animation : speakingAnim? "antenna-appear 7.5s infinite ease-in-out":"none"
          // }}
          >
          <div id="beam"
        //   style={{
        //     animation : speakingAnim? "beam-appear 7.5s infinite ease-in-out":"none"
        // }}
          ></div>
          <div id="beam-pulsar"
        //   style={{
        //     animation : speakingAnim? "beam-pulsar-appear 7.5s infinite ease-in-out":"none"
        // }}
        ></div>
        </div>

      </div>
      <br />
      <br />
      <br />

      <button onClick={() => handleAnimation(1)}>on/off</button>
      <button onClick={() => handleAnimation(2)}>startListening</button>
      <button onClick={() => handleAnimation(3)}>startSpeaking</button>
    </>
  );
}

export default App;
