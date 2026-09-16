// App logic for SlashTyper - English Typing & Slash Reading

let currentIndex = 0;
let typedText = "";
let errors = 0;
let correctKeystrokes = 0;
let totalKeystrokes = 0;
let startTime = null;
let timerInterval = null;
let currentStreak = 0;
let maxStreak = 0;
let isCompleted = false;
let playedChunks = [];
let isVoicePlaying = false;
let currentUtterance = null;

// Audio Configuration
let isSoundEnabled = true;
let isVoiceEnabled = true;
let voiceRate = 1.0;
let translationTiming = "typing"; // typing, always, hidden

// Keyboard and Theme Configuration
let isKeyboardGuideEnabled = true;
let currentTheme = "dark";

const keyboardLayout = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"],
  ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"],
  ["SPACE"]
];

// Learning Stats
let stats = {
  totalSentencesTyped: parseInt(localStorage.getItem("stats_total_sentences")) || 0,
  averageWpm: parseFloat(localStorage.getItem("stats_avg_wpm")) || 0,
  averageAccuracy: parseFloat(localStorage.getItem("stats_avg_accuracy")) || 0,
  history: JSON.parse(localStorage.getItem("stats_history")) || []
};

// --- DOM Elements ---
const wordsContainer = document.getElementById("words-container");
const translationContainer = document.getElementById("translation-container");
const hiddenInput = document.getElementById("hidden-input");
const typingTrigger = document.getElementById("typing-trigger");
const focusNotice = document.getElementById("focus-notice");

const statWpm = document.getElementById("stat-wpm");
const statAccuracy = document.getElementById("stat-accuracy");
const statStreak = document.getElementById("stat-streak");
const statProgress = document.getElementById("stat-progress");

const btnPrev = null;
const btnNext = null;
const btnReset = document.getElementById("btn-reset");
const btnSpeak = document.getElementById("btn-speak");

const btnSettings = document.getElementById("btn-settings");
const modalSettings = document.getElementById("modal-settings");
const closeSettings = document.getElementById("close-settings");
const btnSaveSettings = document.getElementById("btn-save-settings");
const settingVoice = document.getElementById("setting-voice");
const settingSound = document.getElementById("setting-sound");
const settingKeyboardGuide = document.getElementById("setting-keyboard-guide");
const settingTheme = document.getElementById("setting-theme");
const keyboardGuide = document.getElementById("keyboard-guide");
const settingVoiceRate = document.getElementById("setting-voice-rate");
const voiceRateVal = document.getElementById("voice-rate-val");

const btnLibrary = document.getElementById("btn-library");
const modalLibrary = document.getElementById("modal-library");
const closeLibrary = document.getElementById("close-library");

const btnStats = document.getElementById("btn-stats");
const modalStats = document.getElementById("modal-stats");
const closeStats = document.getElementById("close-stats");
const btnClearStats = document.getElementById("btn-clear-stats");
const totalTypedSentencesEl = document.getElementById("total-typed-sentences");
const avgWpmEl = document.getElementById("avg-wpm");
const avgAccuracyEl = document.getElementById("avg-accuracy");
const customSentenceList = document.getElementById("custom-sentence-list");

// Audio Elements
const audioClick1 = document.getElementById("audio-click-1");
const audioClick2 = document.getElementById("audio-click-2");
const audioError = document.getElementById("audio-error");
const audioSuccess = document.getElementById("audio-success");

const settingTranslationTiming = document.getElementById("setting-translation-timing");
const passageProgressBar = document.getElementById("passage-progress-bar");

// --- Initialization ---
function init() {
  loadSettings();
  setupEventListeners();
  initKeyboard();
  
  const savedIndex = parseInt(localStorage.getItem("current_sentence_index")) || 0;
  const startIndex = (savedIndex >= 0 && savedIndex < sentences.length) ? savedIndex : 0;
  loadSentence(startIndex);
  
  updateStatsDisplay();
}

function loadSettings() {
  isSoundEnabled = localStorage.getItem("setting_sound") !== "false";
  isVoiceEnabled = localStorage.getItem("setting_voice") !== "false";
  isKeyboardGuideEnabled = localStorage.getItem("setting_keyboard_guide") !== "false";
  currentTheme = localStorage.getItem("setting_theme") || "dark";
  voiceRate = parseFloat(localStorage.getItem("setting_voice_rate")) || 1.0;
  translationTiming = localStorage.getItem("setting_translation_timing") || "typing";

  settingSound.checked = isSoundEnabled;
  settingVoice.checked = isVoiceEnabled;
  settingKeyboardGuide.checked = isKeyboardGuideEnabled;
  settingTheme.value = currentTheme;
  settingVoiceRate.value = voiceRate;
  voiceRateVal.textContent = voiceRate.toFixed(1);

  settingTranslationTiming.value = translationTiming;
  
  applyTheme(currentTheme);
  updateKeyboardGuideVisibility();
}

function applyTheme(theme) {
  document.body.classList.remove("theme-dark", "theme-light", "theme-cyberpunk", "theme-forest");
  if (theme !== "dark") {
    document.body.classList.add(`theme-${theme}`);
  }
}

function updateKeyboardGuideVisibility() {
  if (isKeyboardGuideEnabled) {
    keyboardGuide.classList.remove("hidden");
  } else {
    keyboardGuide.classList.add("hidden");
  }
}

function initKeyboard() {
  keyboardGuide.innerHTML = "";
  keyboardLayout.forEach(row => {
    const rowEl = document.createElement("div");
    rowEl.className = "kb-row";
    row.forEach(key => {
      const keyEl = document.createElement("div");
      keyEl.className = "kb-key";
      if (key === "SPACE") {
        keyEl.className += " space-key";
        keyEl.dataset.key = " ";
        keyEl.textContent = "Space";
      } else {
        keyEl.dataset.key = key.toLowerCase();
        keyEl.textContent = key;
      }
      rowEl.appendChild(keyEl);
    });
    keyboardGuide.appendChild(rowEl);
  });
}

function updateKeyboardHighlight(nextChar) {
  if (!isKeyboardGuideEnabled) return;
  document.querySelectorAll(".kb-key").forEach(k => k.classList.remove("next-key"));
  
  if (!nextChar) return;
  let targetChar = nextChar.toLowerCase();
  if (nextChar === " " || nextChar === "\n") {
    targetChar = " ";
  }
  const keyEl = document.querySelector(`.kb-key[data-key="${targetChar}"]`);
  if (keyEl) {
    keyEl.classList.add("next-key");
  }
}

function animateKeyPress(char, isCorrect) {
  if (!isKeyboardGuideEnabled) return;
  let targetChar = char.toLowerCase();
  if (char === " " || char === "\n") {
    targetChar = " ";
  }
  const keyEl = document.querySelector(`.kb-key[data-key="${targetChar}"]`);
  if (keyEl) {
    const classToAdd = isCorrect ? "active-press" : "error-press";
    keyEl.classList.add(classToAdd);
    setTimeout(() => {
      keyEl.classList.remove(classToAdd);
    }, 120);
  }
}

// --- Offline English-Japanese Dictionary is loaded from dictionary.js (ejDictionary) ---

// Phrasal verbs and multi-word idioms dictionary
let wordTranslations = {};
let wordWrappers = []; // Store metadata of each word wrapper to update dynamically

// Detect multi-word phrases and phrasal verbs dynamically
function getActivePhrasesForSentence(text) {
  const lowercaseText = text.toLowerCase();
  const matched = [];
  
  // Check current sentence AI translations for phrase keys containing spaces
  const sentence = sentences[currentIndex];
  if (sentence && sentence.wordTranslations) {
    for (const key in sentence.wordTranslations) {
      const lowerKey = key.toLowerCase().trim();
      if (lowerKey.includes(" ") && lowercaseText.includes(lowerKey)) {
        if (!matched.includes(lowerKey)) {
          matched.push(lowerKey);
        }
      }
    }
  }
  
  // Sort descending by length so longer phrases match first in RegExp
  matched.sort((a, b) => b.length - a.length);
  return matched;
}

function translateWordsOfSentence(sentence) {
  const allText = sentence.chunks.map(c => c.en).join(" ");
  const activePhrases = getActivePhrasesForSentence(allText);
  const words = [...new Set(allText.toLowerCase().match(/\b[a-zA-Z0-9']+\b/g))] || [];
  
  const allItems = [...activePhrases, ...words];
  
  allItems.forEach(item => {
    const itemLower = item.toLowerCase().trim();
    let aiTrans = null;
    if (sentence.wordTranslations) {
      for (const k in sentence.wordTranslations) {
        if (k.toLowerCase().trim() === itemLower) {
          aiTrans = sentence.wordTranslations[k];
          break;
        }
      }
    }

    if (aiTrans) {
      wordTranslations[itemLower] = aiTrans;
    } else {
      wordTranslations[itemLower] = "";
    }
  });

  updateWordTranslationsUI();
}

function updateWordTranslationsUI() {
  wordWrappers.forEach(meta => {
    const transEl = document.getElementById(`word-trans-${meta.id}`);
    if (transEl) {
      const transText = wordTranslations[meta.word.toLowerCase()];
      if (transText) {
        transEl.textContent = transText;
      } else {
        transEl.textContent = "";
      }
    }
  });
}

// --- Sentence Loader & Rendering ---
let currentSentenceText = "";
let chunkEndIndices = [];

function skipNonTypeableChars(forceCrossSeparator = false) {
  let currentChunkLimit = currentSentenceText.length;
  if (!forceCrossSeparator && chunkEndIndices.length > 0) {
    for (let i = 0; i < chunkEndIndices.length; i++) {
      if (typedText.length < chunkEndIndices[i]) {
        currentChunkLimit = chunkEndIndices[i];
        break;
      }
    }
  }

  while (typedText.length < currentSentenceText.length && typedText.length < currentChunkLimit) {
    const nextChar = currentSentenceText[typedText.length];
    if (!/[a-zA-Z0-9]/.test(nextChar)) {
      typedText += nextChar;
    } else {
      break;
    }
  }
}

function loadSentence(index) {
  if (index < 0 || index >= sentences.length) return;
  
  currentIndex = index;
  localStorage.setItem("current_sentence_index", index);
  const sentence = sentences[currentIndex];
  // Reconstruct English display text with visual separators
  // Make sure we have proper chunks
  
  // Create combined English string
  currentSentenceText = sentence.chunks.map(c => c.en.trim()).join(" ");
  
  // Pre-calculate boundary indices
  chunkEndIndices = [];
  let accumulated = 0;
  sentence.chunks.forEach((chunk, idx) => {
    accumulated += chunk.en.trim().length;
    chunkEndIndices.push(accumulated);
    if (idx < sentence.chunks.length - 1) {
      accumulated += 1; // for " " separator
    }
  });

  // Restore progress state from localStorage
  const savedProgress = localStorage.getItem(`progress_${sentence.id}`);
  if (savedProgress !== null) {
    typedText = savedProgress;
    playedChunks = [];
    sentence.chunks.forEach((chunk, idx) => {
      if (typedText.length >= chunkEndIndices[idx]) {
        playedChunks.push(idx);
      }
    });
  } else {
    typedText = "";
    playedChunks = [];
  }

  isVoicePlaying = false;
  if (currentUtterance) {
    currentUtterance.onend = null;
    currentUtterance.onerror = null;
    currentUtterance = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  skipNonTypeableChars(false);
  errors = 0;
  correctKeystrokes = 0;
  totalKeystrokes = 0;
  startTime = null;
  clearInterval(timerInterval);
  timerInterval = null;
  isCompleted = false;
  
  const modeTextEl = document.getElementById("mode-text");
  if (modeTextEl) {
    modeTextEl.textContent = sentence.title || "カスタム教材";
  }

  // Render display
  renderTypingArea();
  renderTranslation();
  updateProgressUI();

  // Async translate words of the sentence
  translateWordsOfSentence(sentence);
  
  // Pre-fetch word translations for next sentence if it is already analyzed
  if (currentIndex + 1 < sentences.length) {
    const nextIdx = currentIndex + 1;
    const nextSentence = sentences[nextIdx];
    if (nextSentence.chunks && nextSentence.chunks.length > 0) {
      translateWordsOfSentence(nextSentence);
    }
  }
  
  // Button states
  if (btnPrev) btnPrev.disabled = currentIndex === 0;
  if (btnNext) btnNext.disabled = currentIndex === sentences.length - 1;
}



function renderTypingArea() {
  wordsContainer.innerHTML = "";
  wordWrappers = []; // Reset wrappers metadata
  
  const sentence = sentences[currentIndex];
  let charIndex = 0;
  let wordCounter = 0;
  
  sentence.chunks.forEach((chunk, chunkIdx) => {
    // Create chunk wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "chunk-wrapper";
    wrapper.id = `chunk-wrapper-${chunkIdx}`;
    
    // Create English area (First)
    const engDiv = document.createElement("div");
    engDiv.className = "chunk-english";
    
    // Tokenize chunk.en into words, phrasal verbs, and other characters
    const chunkText = chunk.en.trim();
    const allText = sentence.chunks.map(c => c.en).join(" ");
    const activePhrases = getActivePhrasesForSentence(allText);
    
    let regex;
    if (activePhrases.length > 0) {
      const escaped = activePhrases.map(p => p.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
      regex = new RegExp(`(${escaped}|\\b[a-zA-Z0-9']+\\b)`, 'gi');
    } else {
      regex = /(\b[a-zA-Z0-9']+\b)/gi;
    }
    
    const tokens = chunkText.split(regex).filter(Boolean);
    
    tokens.forEach(token => {
      const isWord = /\b[a-zA-Z0-9']+\b/.test(token) || activePhrases.includes(token.toLowerCase());
      
      if (isWord) {
        // Create word wrapper
        const wordWrap = document.createElement("span");
        wordWrap.className = "word-wrapper";
        wordWrap.addEventListener("click", (e) => {
          e.stopPropagation();
          const cleanWord = token.replace(/[^a-zA-Z0-9']/g, "").toLowerCase();
          showDictionary(cleanWord);
        });
        
        // Word translation span (above)
        const wordTrans = document.createElement("span");
        wordTrans.className = "word-translation";
        const wId = `${chunkIdx}-${wordCounter}`;
        wordTrans.id = `word-trans-${wId}`;
        
        // Set cached translation if available immediately
        const tokenLower = token.toLowerCase();
        const cached = wordTranslations[tokenLower] || "";
        if (cached) {
          wordTrans.textContent = cached;
        }
        wordWrap.appendChild(wordTrans);
        
        // Word letters span (below)
        const wordLetters = document.createElement("span");
        wordLetters.className = "word-letters";
        
        const startIdx = charIndex;
        for (let i = 0; i < token.length; i++) {
          const span = document.createElement("span");
          span.className = "char";
          span.dataset.index = charIndex;
          span.textContent = token[i];
          wordLetters.appendChild(span);
          charIndex++;
        }
        const endIdx = charIndex - 1;
        wordWrap.appendChild(wordLetters);
        
        engDiv.appendChild(wordWrap);
        
        // Save metadata to update translation text and toggle visibility
        wordWrappers.push({
          id: wId,
          word: token,
          startIdx: startIdx,
          endIdx: endIdx
        });
        
        wordCounter++;
      } else {
        // Render punctuation/spaces directly
        for (let i = 0; i < token.length; i++) {
          const span = document.createElement("span");
          span.className = "char";
          span.dataset.index = charIndex;
          
          const char = token[i];
          if (char === " ") {
            span.textContent = " ";
            span.classList.add("space-char");
          } else {
            span.textContent = char;
          }
          engDiv.appendChild(span);
          charIndex++;
        }
      }
    });
    
    // Create Translation area (Second, so it displays below English)
    const transDiv = document.createElement("div");
    transDiv.className = "chunk-translation";
    transDiv.id = `chunk-trans-${chunkIdx}`;
    transDiv.textContent = chunk.ja;
    
    if (translationTiming === "always") {
      transDiv.classList.add("visible");
    }
    
    wrapper.appendChild(engDiv);
    wrapper.appendChild(transDiv);
    wordsContainer.appendChild(wrapper);
    
    // If not the last chunk, add a visual separator (just a space, no slash)
    if (chunkIdx < sentence.chunks.length - 1) {
      const separator = document.createElement("span");
      separator.className = "chunk-separator char";
      separator.textContent = " ";
      separator.dataset.index = charIndex;
      wordsContainer.appendChild(separator);
      charIndex += 1;
    }
  });
  
  updateTypingFeedback();
}

function updateTranslationVisibility() {
  const sentence = sentences[currentIndex];
  
  // Find which chunk is currently active
  let activeChunkIdx = -1;
  for (let i = 0; i < chunkEndIndices.length; i++) {
    if (typedText.length < chunkEndIndices[i]) {
      activeChunkIdx = i;
      break;
    }
  }

  // Update Progress Bar
  const progressPercent = currentSentenceText.length > 0 ? (typedText.length / currentSentenceText.length) * 100 : 0;
  if (passageProgressBar) {
    passageProgressBar.style.width = `${progressPercent}%`;
  }
  
  // 1. Update Chunk translations and wrappers
  sentence.chunks.forEach((chunk, idx) => {
    const isCompletedChunk = typedText.length >= chunkEndIndices[idx];
    const transEl = document.getElementById(`chunk-trans-${idx}`);
    const wrapperEl = document.getElementById(`chunk-wrapper-${idx}`);
    
    if (transEl && wrapperEl) {
      // Manage active/completed visual states
      if (isCompleted || activeChunkIdx === -1 || idx < activeChunkIdx) {
        wrapperEl.classList.add("completed");
        wrapperEl.classList.remove("active");
      } else if (idx === activeChunkIdx) {
        wrapperEl.classList.add("active");
        wrapperEl.classList.remove("completed");
        wrapperEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        wrapperEl.classList.remove("active", "completed");
      }

      // Handle Translation Visibility Timing
      let showTrans = false;
      if (translationTiming === "always") {
        showTrans = true;
      } else if (translationTiming === "hidden") {
        showTrans = isCompleted;
      } else { // "typing" (default)
        showTrans = isCompletedChunk || isCompleted;
      }

      // Hide translation if it is identical to the source text (e.g. raw Japanese import)
      if (chunk.en.trim() === chunk.ja.trim()) {
        showTrans = false;
      }

      if (showTrans) {
        transEl.classList.add("visible");
      } else {
        transEl.classList.remove("visible");
      }
      
      // Chunk completion audio feedback
      if (isCompletedChunk) {
        if (!playedChunks.includes(idx)) {
          playedChunks.push(idx);
          if (isVoiceEnabled) {
            speakText(chunk.en, () => {
              isVoicePlaying = false;
              skipNonTypeableChars(true);
              skipNonTypeableChars(false);
              updateTypingFeedback();
              
              // If this was the last chunk, complete the sentence now!
              if (typedText.length === currentSentenceText.length) {
                completeSentence();
              }
            });
          }
        }
      } else {
        playedChunks = playedChunks.filter(c => c !== idx);
      }
    }
  });

  // 2. Update Word-by-word translations
  wordWrappers.forEach(meta => {
    const transEl = document.getElementById(`word-trans-${meta.id}`);
    if (transEl) {
      const isWordCompleted = typedText.length > meta.endIdx;
      if (isWordCompleted || isCompleted) {
        transEl.classList.add("visible");
      } else {
        transEl.classList.remove("visible");
      }
    }
  });

  // Trigger incremental background analysis for next parts of the same material
  if (activeChunkIdx !== -1 && activeChunkIdx >= chunkEndIndices.length - 2) {
    triggerIncrementalAnalysis(currentIndex);
  }
}

function renderTranslation() {
  // Clear the bottom translation container as we show it right below each chunk
  translationContainer.innerHTML = "";
}

function updateProgressUI() {
  statProgress.textContent = `${currentIndex + 1}/${sentences.length}`;
  statWpm.textContent = "0";
  statAccuracy.textContent = "100%";
  statStreak.textContent = currentStreak;
}

// --- Typing Input Handler ---
function handleKeyDown(e) {
  // Ignore modifiers
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  // Block key presses while voice is playing
  if (isVoicePlaying) {
    e.preventDefault();
    return;
  }
  
  // Prevent default scroll behavior for space bar
  if (e.key === " ") {
    e.preventDefault();
  }

  if (isCompleted) {
    if (e.key === "Enter") {
      goToNextSentence();
    }
    return;
  }

  // Start timer on first keystroke
  if (!startTime) {
    startTime = Date.now();
    startTimer();
  }


  const expectedChar = currentSentenceText[typedText.length];
  const inputChar = e.key;

  // Handle Backspace
  if (e.key === "Backspace") {
    if (typedText.length > 0) {
      typedText = typedText.slice(0, -1);
      while (typedText.length > 0 && !/[a-zA-Z0-9]/.test(currentSentenceText[typedText.length - 1])) {
        typedText = typedText.slice(0, -1);
      }
      if (typedText.length > 0) {
        typedText = typedText.slice(0, -1);
      }
      skipNonTypeableChars(false);
      playKeySound(false);
      updateTypingFeedback();
    }
    return;
  }

  // Character length check to avoid typing beyond bounds
  if (typedText.length >= currentSentenceText.length) return;

  // Only handle single characters
  if (inputChar.length !== 1) return;

  totalKeystrokes++;

  // Validate character input (Case insensitive!)
  if (inputChar.toLowerCase() === expectedChar.toLowerCase()) {
    typedText += expectedChar;
    correctKeystrokes++;
    currentStreak++;
    if (currentStreak > maxStreak) maxStreak = currentStreak;
    playKeySound(true);
    animateKeyPress(expectedChar, true);
    
    // First, skip any non-typeable chars within the current chunk (like punctuation)
    skipNonTypeableChars(false);
    
    // Check if we just completed a chunk (including the last chunk of the sentence)
    const currentChunkIdx = chunkEndIndices.indexOf(typedText.length);
    if (currentChunkIdx !== -1 && isVoiceEnabled) {
      isVoicePlaying = true;
    } else {
      skipNonTypeableChars(true);
      skipNonTypeableChars(false);
    }
  } else {
    errors++;
    currentStreak = 0;
    playErrorSound();
    animateKeyPress(inputChar, false);
    triggerMissAnimation();
  }

  updateTypingFeedback();
  calculateStats();

  // Check sentence completion (only if not waiting for voice)
  if (!isVoicePlaying && typedText.length === currentSentenceText.length) {
    completeSentence();
  }
}

function updateTypingFeedback() {
  const spans = wordsContainer.querySelectorAll(".char");
  let currentSpan = null;
  
  // If voice is playing, keep the focus/highlight on the last character of the completed chunk
  const activeIndex = isVoicePlaying ? Math.max(0, typedText.length - 1) : typedText.length;
  
  spans.forEach((span) => {
    const idx = parseInt(span.dataset.index);
    span.classList.remove("correct", "current");
    
    if (span.classList.contains("chunk-separator")) {
      const startIdx = idx;
      if (activeIndex > startIdx) {
        span.classList.add("correct");
      } else if (activeIndex >= startIdx && activeIndex < startIdx + 1) {
        span.classList.add("current");
        currentSpan = span;
      }
    } else {
      if (idx < activeIndex) {
        span.classList.add("correct");
      } else if (idx === activeIndex) {
        span.classList.add("current");
        currentSpan = span;
      }
    }
  });
  
  const expectedChar = currentSentenceText[activeIndex];
  updateKeyboardHighlight(expectedChar);

  updateTranslationVisibility();
  saveSentenceProgress();

  // Scroll active character into vertical center of the container
  if (currentSpan) {
    const containerRect = wordsContainer.getBoundingClientRect();
    const spanRect = currentSpan.getBoundingClientRect();
    const relativeTop = spanRect.top - containerRect.top + wordsContainer.scrollTop;
    const targetScrollTop = relativeTop - (containerRect.height / 2) + (spanRect.height / 2);
    
    wordsContainer.scrollTo({
      top: targetScrollTop,
      behavior: "smooth"
    });
  }
}

function saveSentenceProgress() {
  if (currentIndex >= 0 && currentIndex < sentences.length) {
    const sentence = sentences[currentIndex];
    localStorage.setItem(`progress_${sentence.id}`, typedText);
  }
}

function triggerMissAnimation() {
  wordsContainer.classList.add("shake");
  setTimeout(() => {
    wordsContainer.classList.remove("shake");
  }, 150);
}

// WPM and Accuracy Calculation
function calculateStats() {
  if (!startTime) return;
  const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
  if (timeElapsed <= 0) return;

  // Standard WPM: (keys typed / 5) / minutes
  const wpm = Math.round((correctKeystrokes / 5) / timeElapsed);
  const accuracy = totalKeystrokes > 0 ? Math.round((correctKeystrokes / totalKeystrokes) * 100) : 100;

  statWpm.textContent = wpm;
  statAccuracy.textContent = `${accuracy}%`;
  statStreak.textContent = currentStreak;
}

function startTimer() {
  timerInterval = setInterval(calculateStats, 500);
}

// Complete current sentence
function completeSentence() {
  isCompleted = true;
  clearInterval(timerInterval);
  playSuccessSound();

  const splash = document.createElement("div");
  splash.className = "success-splash";
  const targetCard = document.querySelector(".typing-card");
  if (targetCard) {
    targetCard.appendChild(splash);
    setTimeout(() => splash.remove(), 1200);
  }

  // Save score to history
  saveSessionToStats();

  // Clear progress so it starts fresh next time
  const sentence = sentences[currentIndex];
  localStorage.removeItem(`progress_${sentence.id}`);

  // Automatically go to the next sentence after a short delay
  setTimeout(() => {
    goToNextSentence();
  }, 600);
}

function goToNextSentence() {
  if (currentIndex < sentences.length - 1) {
    loadSentence(currentIndex + 1);
  }
}

// --- Audio Controls ---
function playKeySound(isCorrect) {
  if (!isSoundEnabled) return;
  
  if (isCorrect) {
    // Alternate typing click sounds
    const sound = Math.random() > 0.5 ? audioClick1 : audioClick2;
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }
}

function playErrorSound() {
  if (!isSoundEnabled) return;
  audioError.currentTime = 0;
  audioError.play().catch(() => {});
}

function playSuccessSound() {
  if (!isSoundEnabled) return;
  audioSuccess.currentTime = 0;
  audioSuccess.play().catch(() => {});
}

function speakText(text, onEndCallback) {
  if (!window.speechSynthesis) {
    if (onEndCallback) onEndCallback();
    return;
  }

  // Clear callbacks of previous utterance before cancelling to prevent race conditions
  if (currentUtterance) {
    currentUtterance.onend = null;
    currentUtterance.onerror = null;
  }

  window.speechSynthesis.cancel(); // Stop current speaking

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = voiceRate;
  
  // Find a premium native voice if possible
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith("en-") && v.name.includes("Google")) || 
                  voices.find(v => v.lang.startsWith("en-"));
  if (enVoice) {
    utterance.voice = enVoice;
  }
  
  currentUtterance = utterance;
  
  if (onEndCallback) {
    utterance.onend = () => {
      if (currentUtterance === utterance) {
        currentUtterance = null;
      }
      onEndCallback();
    };
    utterance.onerror = () => {
      if (currentUtterance === utterance) {
        currentUtterance = null;
      }
      onEndCallback();
    };
  }
  
  window.speechSynthesis.speak(utterance);
}

// --- Dictionary API Integration ---
async function showDictionary(word) {
  const modalDict = document.getElementById("modal-dict");
  const dictWordTitle = document.getElementById("dict-word-title");
  const dictModalBody = document.getElementById("dict-modal-body");
  const dictWebLink = document.getElementById("dict-web-link");
  
  dictWordTitle.textContent = word;
  dictModalBody.innerHTML = '<div class="dict-loading">🔍 辞書データを取得中...</div>';
  dictWebLink.href = `https://ejje.weblio.jp/content/${encodeURIComponent(word)}`;
  
  openModal(modalDict);
  
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!res.ok) {
      throw new Error("詳細な定義が見つかりませんでした。");
    }
    const data = await res.json();
    if (data && data.length > 0) {
      const entry = data[0];
      let html = "";
      
      // Phonetics & Audio
      if (entry.phonetic || entry.phonetics) {
        const phoneticText = entry.phonetic || (entry.phonetics.find(p => p.text)?.text || "");
        const audioUrl = entry.phonetics.find(p => p.audio)?.audio || "";
        
        html += `<div class="dict-phonetic">${phoneticText}`;
        if (audioUrl) {
          html += `
            <button class="dict-audio-btn" onclick="const a=new Audio('${audioUrl}');a.play();">
              🔊 聴く
            </button>
          `;
        }
        html += `</div>`;
      }
      
      // Meanings
      entry.meanings.forEach(meaning => {
        html += `
          <div class="dict-definition-block">
            <span class="dict-part-of-speech">${meaning.partOfSpeech}</span>
            <ul class="dict-meaning-list">
        `;
        meaning.definitions.slice(0, 3).forEach(def => {
          html += `<li class="dict-meaning-item">${def.definition}`;
          if (def.example) {
            html += `<div class="dict-example">e.g. ${def.example}</div>`;
          }
          html += `</li>`;
        });
        html += `
            </ul>
          </div>
        `;
      });
      
      dictModalBody.innerHTML = html;
    } else {
      throw new Error();
    }
  } catch (e) {
    const localTrans = wordTranslations[word.toLowerCase()];
    let errorHtml = `
      <div class="dict-error">
        英英辞書の定義データが見つかりませんでした。<br>
        Weblioなどの日本語辞書サイトで詳細をご確認ください。
      </div>
    `;
    if (localTrans) {
      errorHtml = `
        <div class="dict-definition-block" style="margin-top: 10px;">
          <span class="dict-part-of-speech" style="background: rgba(16, 185, 129, 0.15); color: #10b981;">和訳 (AI)</span>
          <ul class="dict-meaning-list">
            <li class="dict-meaning-item" style="font-size: 1.1rem; font-weight: bold; color: var(--text-primary);">${localTrans}</li>
          </ul>
        </div>
      `;
    }
    dictModalBody.innerHTML = errorHtml;
  }
}

// --- History & Stats Logic ---
function saveSessionToStats() {
  if (!startTime) return;
  const timeElapsed = (Date.now() - startTime) / 1000 / 60;
  const wpm = Math.round((correctKeystrokes / 5) / timeElapsed) || 0;
  const accuracy = totalKeystrokes > 0 ? Math.round((correctKeystrokes / totalKeystrokes) * 100) : 100;

  stats.totalSentencesTyped++;
  
  // Calculate running average
  stats.averageWpm = Math.round(((stats.averageWpm * (stats.totalSentencesTyped - 1)) + wpm) / stats.totalSentencesTyped);
  stats.averageAccuracy = Math.round(((stats.averageAccuracy * (stats.totalSentencesTyped - 1)) + accuracy) / stats.totalSentencesTyped);
  
  stats.history.push({
    date: new Date().toLocaleDateString(),
    wpm: wpm,
    accuracy: accuracy,
    sentenceId: sentences[currentIndex].id
  });

  // Save
  localStorage.setItem("stats_total_sentences", stats.totalSentencesTyped);
  localStorage.setItem("stats_avg_wpm", stats.averageWpm);
  localStorage.setItem("stats_avg_accuracy", stats.averageAccuracy);
  localStorage.setItem("stats_history", JSON.stringify(stats.history));
}

function updateStatsDisplay() {
  totalTypedSentencesEl.textContent = stats.totalSentencesTyped;
  avgWpmEl.textContent = stats.averageWpm;
  avgAccuracyEl.textContent = `${stats.averageAccuracy}%`;
}

function updateLibraryDisplay(activeCategory = "all") {
  customSentenceList.innerHTML = "";

  if (sentences.length === 0) {
    customSentenceList.innerHTML = '<div class="empty-list-notice">教材はまだありません。</div>';
    return;
  }

  // Categories definition
  const categories = {
    speech: { title: "歴史的名演説 (Historic Speeches)", icon: "🎙️", items: [] },
    alice: { title: "名作文学: 不思議の国のアリス (Alice in Wonderland)", icon: "🐇", items: [] },
    myth: { title: "ギリシャ神話 (Greek Myths)", icon: "⚡", items: [] },
    bible: { title: "聖書 (The Holy Bible)", icon: "📖", items: [] },
    quotes: { title: "世界の名言 (Inspiring Quotes)", icon: "💬", items: [] }
  };

  // Sort sentences into categories
  sentences.forEach((item, idx) => {
    const id = item.id || "";
    const title = item.title || "";
    let cat = "speech"; // Default fallback
    if (id.startsWith("alice") || title.includes("アリス")) {
      cat = "alice";
    } else if (id.startsWith("myth") || title.includes("神話")) {
      cat = "myth";
    } else if (id.startsWith("bible") || title.includes("聖書")) {
      cat = "bible";
    } else if (id.startsWith("quote") || title.includes("名言")) {
      cat = "quotes";
    } else if (id.startsWith("speech") || title.includes("演説") || title.includes("スピーチ")) {
      cat = "speech";
    }
    categories[cat].items.push({ item, idx });
  });

  // Render each category based on activeCategory
  Object.keys(categories).forEach(catKey => {
    if (activeCategory !== "all" && activeCategory !== catKey) return;

    const cat = categories[catKey];
    if (cat.items.length === 0) return;

    const section = document.createElement("div");
    section.className = "library-category-section";

    const titleEl = document.createElement("h3");
    titleEl.className = "library-category-title";
    titleEl.innerHTML = `<span>${cat.icon}</span> ${cat.title}`;
    section.appendChild(titleEl);

    const grid = document.createElement("div");
    grid.className = "library-grid";

    cat.items.forEach(({ item, idx }) => {
      // Check if cleared
      const isCleared = stats.history.some(h => h.sentenceId === item.id);
      const clearBadge = isCleared ? '<span class="clear-badge">★ クリア済</span>' : '';

      // Word count
      const wordCount = item.english.split(/\s+/).filter(Boolean).length;

      // Genre tag badge styling
      let badgeClass = "genre-speech";
      let badgeLabel = "演説";
      if (catKey === "alice") { badgeClass = "genre-alice"; badgeLabel = "文学"; }
      else if (catKey === "myth") { badgeClass = "genre-myth"; badgeLabel = "神話"; }
      else if (catKey === "bible") { badgeClass = "genre-bible"; badgeLabel = "聖書"; }
      else if (catKey === "quotes") { badgeClass = "genre-quotes"; badgeLabel = "名言"; }

      const card = document.createElement("div");
      card.className = "library-card";
      card.innerHTML = `
        <div class="library-card-header">
          <span class="genre-badge ${badgeClass}">${badgeLabel}</span>
          ${clearBadge}
        </div>
        <div class="library-card-title">${item.title}</div>
        <div class="library-card-footer">
          <span class="library-card-meta">${wordCount}語 / ${item.chunks ? item.chunks.length : 0}チャンク</span>
          <button class="library-card-play-btn">
            <svg class="svg-icon" viewBox="0 0 24 24" style="stroke: currentColor; stroke-width: 2; width: 14px; height: 14px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            練習する
          </button>
        </div>
      `;

      card.addEventListener("click", () => {
        loadSentence(idx);
        closeModal(modalLibrary);
      });

      grid.appendChild(card);
    });

    section.appendChild(grid);
    customSentenceList.appendChild(section);
  });
}

function clearStats() {
  if (confirm("これまでの学習履歴とスタッツをすべてリセットしますか？")) {
    stats = {
      totalSentencesTyped: 0,
      averageWpm: 0,
      averageAccuracy: 0,
      history: []
    };
    localStorage.removeItem("stats_total_sentences");
    localStorage.removeItem("stats_avg_wpm");
    localStorage.removeItem("stats_avg_accuracy");
    localStorage.removeItem("stats_history");
    updateStatsDisplay();
    updateProgressUI();
  }
}

// --- Modal Helper Functions ---
function openModal(modal) {
  modal.classList.add("open");
  if (modal === modalStats) {
    updateStatsDisplay();
  } else if (modal === modalLibrary) {
    const tabs = document.querySelectorAll(".library-tab");
    tabs.forEach(t => t.classList.remove("active"));
    const allTab = document.querySelector(".library-tab[data-category='all']");
    if (allTab) allTab.classList.add("active");
    updateLibraryDisplay("all");
  }
}

function closeModal(modal) {
  modal.classList.remove("open");
  focusHiddenInput();
}

function focusHiddenInput() {
  hiddenInput.focus();
  typingTrigger.classList.add("focused");
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Page level typing trigger
  typingTrigger.addEventListener("click", () => {
    focusHiddenInput();
  });

  hiddenInput.addEventListener("keydown", handleKeyDown);
  hiddenInput.addEventListener("blur", () => {
    typingTrigger.classList.remove("focused");
  });

  // Modal open buttons
  btnSettings.addEventListener("click", () => openModal(modalSettings));
  btnStats.addEventListener("click", () => openModal(modalStats));
  btnLibrary.addEventListener("click", () => openModal(modalLibrary));

  // Modal close buttons
  closeSettings.addEventListener("click", () => closeModal(modalSettings));
  closeStats.addEventListener("click", () => closeModal(modalStats));
  closeLibrary.addEventListener("click", () => closeModal(modalLibrary));
  document.getElementById("close-dict").addEventListener("click", () => closeModal(document.getElementById("modal-dict")));

  // Category Tab filters
  const tabs = document.querySelectorAll(".library-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.dataset.category;
      updateLibraryDisplay(category);
    });
  });

  // Modal Save/Action events
  btnSaveSettings.addEventListener("click", () => {
    isSoundEnabled = settingSound.checked;
    isVoiceEnabled = settingVoice.checked;
    isKeyboardGuideEnabled = settingKeyboardGuide.checked;
    currentTheme = settingTheme.value;
    voiceRate = parseFloat(settingVoiceRate.value);

    translationTiming = settingTranslationTiming.value;

    localStorage.setItem("setting_sound", isSoundEnabled);
    localStorage.setItem("setting_voice", isVoiceEnabled);
    localStorage.setItem("setting_keyboard_guide", isKeyboardGuideEnabled);
    localStorage.setItem("setting_theme", currentTheme);
    localStorage.setItem("setting_voice_rate", voiceRate);
    localStorage.setItem("setting_translation_timing", translationTiming);

    applyTheme(currentTheme);
    updateKeyboardGuideVisibility();
    updateTranslationVisibility();

    closeModal(modalSettings);
  });

  settingVoiceRate.addEventListener("input", (e) => {
    voiceRateVal.textContent = parseFloat(e.target.value).toFixed(1);
  });

  btnClearStats.addEventListener("click", clearStats);

  // Keyboard navigation
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (currentIndex > 0) loadSentence(currentIndex - 1);
    });
  }
  if (btnNext) {
    btnNext.addEventListener("click", goToNextSentence);
  }
  btnReset.addEventListener("click", () => {
    localStorage.removeItem(`progress_${sentences[currentIndex].id}`);
    loadSentence(currentIndex);
  });
  
  btnSpeak.addEventListener("click", () => {
    speakText(currentSentenceText.replace(/\//g, ""));
  });

  // Close modal when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target === modalSettings) closeModal(modalSettings);
    if (e.target === modalStats) closeModal(modalStats);
    if (e.target === modalLibrary) closeModal(modalLibrary);
    if (e.target === document.getElementById("modal-dict")) closeModal(document.getElementById("modal-dict"));
  });

  // Sync speech voices in case they load late
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }
}

// Start
window.onload = init;
