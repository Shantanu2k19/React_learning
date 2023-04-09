import { useEffect, useState } from 'react';
import React from "react"
function App() {
  const useSpeechSynthesis = (props = {}) => {
    const { onEnd = () => {} } = props;
    const [voices, setVoices] = useState([]);
    const [speaking, setSpeaking] = useState(false);
    const [supported, setSupported] = useState(false);
  
    const processVoices = (voiceOptions) => {
      setVoices(voiceOptions);
    };
  
    const getVoices = () => {
      // Firefox seems to have voices upfront and never calls the
      // voiceschanged event
      let voiceOptions = window.speechSynthesis.getVoices();
      if (voiceOptions.length > 0) {
        processVoices(voiceOptions);
        return;
      }
  
      window.speechSynthesis.onvoiceschanged = (event) => {
        voiceOptions = event.target.getVoices();
        processVoices(voiceOptions);
      };
    };
  
    const handleEnd = () => {
      setSpeaking(false);
      onEnd();
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        setSupported(true);
        getVoices();
      }
    }, []);
  
    const speak = (args = {}) => {
      const { voice = null, text = '', rate = 1, pitch = 1, volume = 1 } = args;
      if (!supported) return;
      setSpeaking(true);
      // Firefox won't repeat an utterance that has been
      // spoken, so we need to create a new instance each time
      const utterance = new window.SpeechSynthesisUtterance();
      utterance.text = text;
      utterance.voice = voice;
      utterance.onend = handleEnd;
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;
      window.speechSynthesis.speak(utterance);
    };
  
    const cancel = () => {
      if (!supported) return;
      setSpeaking(false);
      window.speechSynthesis.cancel();
    };
  
    return {
      supported,
      speak,
      speaking,
      cancel,
      voices,
    };
  };

  const [text, setText] = useState('I am a robot');
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [voiceIndex, setVoiceIndex] = useState(null);
  const onEnd = () => {
    // You could do something here after speaking has finished
  };
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  const voice = voices[voiceIndex] || null;

  const styleFlexRow = { display: 'flex', flexDirection: 'row' };
  const styleContainerRatePitch = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12,
  };


  useEffect( () => {
    console.log(supported);
  }, []);



  return (
    <div>
         <form>
        <h2>Speech Synthesis</h2>
        {!supported && (
          <p>
            Oh no, it looks like your browser doesn&#39;t support Speech
            Synthesis.
          </p>
        )}
        {supported && (
          <React.Fragment>
            <p>
              {`Type a message below then click 'Speak'
                and SpeechSynthesis will read it out.`}
            </p>
            <label htmlFor="voice">Voice</label>
            <select
              id="voice"
              name="voice"
              value={voiceIndex || ''}
              onChange={(event) => {
                setVoiceIndex(event.target.value);
              }}
            >
              <option value="">Default</option>
              {voices.map((option, index) => (
                <option key={option.voiceURI} value={index}>
                  {`${option.lang} - ${option.name}`}
                </option>
              ))}
            </select>
            <div style={styleContainerRatePitch}>
              <div style={styleFlexRow}>
                <label htmlFor="rate">Rate: </label>
                <div className="rate-value">{rate}</div>
              </div>
              <input
                type="range"
                min="0.5"
                max="2"
                defaultValue="1"
                step="0.1"
                id="rate"
                onChange={(event) => {
                  setRate(event.target.value);
                }}
              />
            </div>
            <div style={styleContainerRatePitch}>
              <div style={styleFlexRow}>
                <label htmlFor="pitch">Pitch: </label>
                <div className="pitch-value">{pitch}</div>
              </div>
              <input
                type="range"
                min="0"
                max="2"
                defaultValue="1"
                step="0.1"
                id="pitch"
                onChange={(event) => {
                  setPitch(event.target.value);
                }}
              />
            </div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
            {speaking ? (
              <button type="button" onClick={cancel}>
                Stop
              </button>
            ) : (
              <button
                type="button"
                onClick={() => speak({ text, voice, rate, pitch })}
              >
                Speak
              </button>
            )}
          </React.Fragment>
        )}
      </form>
    </div>
  );
}

export default App;