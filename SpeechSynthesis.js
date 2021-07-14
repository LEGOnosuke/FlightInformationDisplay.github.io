
  // 発言を作成
  const uttr = new SpeechSynthesisUtterance(SpeakText);
  // 発言を再生 (発言キューに発言を追加)
  speechSynthesis.speak(uttr);
