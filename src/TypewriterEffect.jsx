import { useState } from "react";

const TypewriterEffect = () => {
  const [typedSentence, setTypedSentence] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    // TODO Display the text with typewriter effect
    let sentence = data.get("sentence");
    let displayedStr = "You typed: ";
    typeSentence(displayedStr, sentence);
  };

  const typeSentence = (currentSentence, remainingSentence) => {
    setTimeout(() => {
      let newSentence = currentSentence + remainingSentence[0];

      setTypedSentence(newSentence);

      if (remainingSentence.length > 1) {
        let newRemaining = remainingSentence.slice(1);
        typeSentence(newSentence, newRemaining);
      }
    }, 500);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="sentence"
          placeholder="Type a sentence"
          style={{ width: "300px" }}
        />
        <button type="submit">Display with typewriter effect</button>
      </form>
      <p>{typedSentence}</p>
    </div>
  );
};

export default TypewriterEffect;
