/* Shared, deterministic typing rules. Spaces and punctuation advance automatically. */
(function (root) {
  const typeable = c => /^[a-z0-9]$/i.test(c || '');
  const skip = (text, position) => {
    while (position < text.length && !typeable(text[position])) position++;
    return position;
  };
  const create = text => ({ position: skip(text, 0), attempts: 0, correct: 0, elapsed: 0 });
  const input = (text, state, char) => {
    if (!typeable(char) || state.position >= text.length) return null;
    state.attempts++;
    if (char.toLowerCase() !== text[state.position].toLowerCase()) return false;
    state.correct++;
    state.position = skip(text, state.position + 1);
    return true;
  };
  const backspace = (text, state) => {
    let position = state.position - 1;
    while (position >= 0 && !typeable(text[position])) position--;
    state.position = position < 0 ? skip(text, 0) : position;
  };
  const metrics = (text, state) => ({
    wpm: state.elapsed > 0 ? Math.round((text.slice(0, state.position).match(/[a-z0-9]/gi) || []).length * 12000 / Math.max(1000, state.elapsed)) : 0,
    accuracy: state.attempts ? Math.round(state.correct / state.attempts * 100) : 100,
    progress: text.length ? Math.round(state.position / text.length * 100) : 0
  });
  const restore = (text, saved) => {
    const fresh = create(text);
    if (!saved || !Number.isInteger(saved.position) || saved.position < 0 || saved.position >= text.length ||
        !Number.isInteger(saved.attempts) || !Number.isInteger(saved.correct) || saved.correct < 0 ||
        saved.attempts < saved.correct || !Number.isFinite(saved.elapsed) || saved.elapsed < 0) return fresh;
    return {position: skip(text, saved.position), attempts: saved.attempts, correct: saved.correct, elapsed: saved.elapsed};
  };
  const api = {typeable, create, input, backspace, metrics, restore};
  if (typeof module !== 'undefined') module.exports = api;
  else root.TypingEngine = api;
})(typeof window === 'undefined' ? globalThis : window);
