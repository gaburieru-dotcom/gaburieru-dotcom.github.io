'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const engine = window.TypingEngine;
  const starters = [
    {id:'start-hello',title:'はじめの一歩',english:'Hello, world! I learn a little every day.',chunks:[{en:'Hello, world!',ja:'こんにちは、世界！'},{en:'I learn a little every day.',ja:'私は毎日少しずつ学びます。'}],wordTranslations:{learn:'学ぶ',little:'少し',every:'毎〜'}},
    {id:'start-morning',title:'朝のひととき',english:'I open the window. The air is cool and fresh.',chunks:[{en:'I open the window.',ja:'私は窓を開けます。'},{en:'The air is cool and fresh.',ja:'空気はひんやりとして、すがすがしいです。'}],wordTranslations:{window:'窓',air:'空気',fresh:'新鮮な、すがすがしい'}},
    {id:'start-step',title:'自分のペースで',english:'Take a small step today. You can try again tomorrow.',chunks:[{en:'Take a small step today.',ja:'今日は小さな一歩を踏み出しましょう。'},{en:'You can try again tomorrow.',ja:'明日また挑戦できます。'}],wordTranslations:{step:'一歩',again:'もう一度',tomorrow:'明日'}}
  ];
  const lessons = [...starters, ...window.defaultSentences];
  const categoryNames = {all:'すべて',start:'短文練習',speech:'演説',alice:'文学',myth:'神話',bible:'聖書',quote:'名言'};
  const category = lesson => lesson.id.startsWith('genesis') ? 'bible' : lesson.id.split('-')[0];
  let storageOK = true;
  const store = {
    get(key, fallback) {try {const value = localStorage.getItem('slashtyper:'+key); return value === null ? fallback : JSON.parse(value);} catch {return fallback;}},
    set(key, value) {try {localStorage.setItem('slashtyper:'+key, JSON.stringify(value));} catch {storageOK = false; $('storage-status').textContent = 'このブラウザでは保存できません。画面を閉じると記録が失われます。';}}
  };
  const savedSettings = store.get('settings', {});
  let settings = {translation:['completed','always','hidden'].includes(savedSettings?.translation) ? savedSettings.translation : 'completed',rate:[.7,1,1.2].includes(savedSettings?.rate) ? savedSettings.rate : 1,voice:savedSettings?.voice === true};
  let history = store.get('history', []);
  if (!Array.isArray(history)) history = [];
  history = history.filter(h => h && typeof h.id === 'string' && Number.isFinite(h.date) && Number.isFinite(h.wpm) && Number.isFinite(h.accuracy)).slice(-100);
  let index = Math.max(0, lessons.findIndex(l => l.id === store.get('lesson', null)));
  let lesson, text, state, spans = [], chunks = [], complete = false, started = false, lastTick = null;
  let activeCategory = 'all', speaking = null, speechTimeout = null;
  const input = $('typing-input');
  function save() {
    store.set('lesson', lesson.id);
    store.set('progress:'+lesson.id, complete ? null : {...state, text});
  }
  function tick() {
    const now = performance.now();
    if (lastTick !== null) state.elapsed += Math.max(0, now - lastTick);
    lastTick = started && !complete && document.activeElement === input && !document.hidden ? now : null;
  }
  function pause() {tick(); lastTick = null; save();}
  function stopSpeech() {
    clearTimeout(speechTimeout);
    if (speaking) {speaking.onend = null; speaking.onerror = null;}
    speaking = null;
    window.speechSynthesis?.cancel();
    $('stop-speech').hidden = true;
  }
  function speak() {
    stopSpeech();
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      $('input-status').textContent = 'このブラウザでは読み上げを利用できません。入力練習はそのまま使えます。';
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; utterance.rate = settings.rate;
    const voice = speechSynthesis.getVoices().find(v => v.lang.startsWith('en'));
    if (voice) utterance.voice = voice;
    utterance.onend = () => {if (speaking === utterance) stopSpeech();};
    utterance.onerror = () => {
      if (speaking !== utterance) return;
      stopSpeech(); $('input-status').textContent = '音声を再生できませんでした。端末の音声設定を確認してください。';
    };
    speaking = utterance; $('stop-speech').hidden = false;
    try {speechSynthesis.speak(utterance);} catch {stopSpeech();}
    speechTimeout = setTimeout(stopSpeech, 180000);
  }
  function loadLesson(nextIndex, reset = false) {
    stopSpeech();
    if (lesson) pause();
    index = nextIndex; lesson = lessons[index];
    text = lesson.chunks.map(c => c.en.trim()).join(' ');
    const saved = reset ? null : store.get('progress:'+lesson.id, null);
    state = engine.restore(text, saved?.text === text ? saved : null);
    complete = false; started = false; lastTick = null;
    input.disabled = false; input.value = ''; input.setAttribute('aria-invalid','false');
    $('result').hidden = true;
    $('lesson-title').textContent = lesson.title.replace(/【フル全文】/g,'');
    $('lesson-category').textContent = categoryNames[category(lesson)] || '英文練習';
    $('lesson-number').textContent = `${index + 1} / ${lessons.length}`;
    $('lesson-meta').textContent = `${text.split(/\s+/).length}語 ・ ${lesson.chunks.length}つのまとまり`;
    status(state.position > 0 ? '保存した続きから再開できます。' : '準備ができたら、最初の文字を入力しましょう。');
    renderPassage(); update(); save();
  }
  function renderPassage() {
    const passage = $('passage'); passage.replaceChildren(); spans = []; chunks = [];
    let position = 0;
    lesson.chunks.forEach((chunk, ci) => {
      const block = document.createElement('div'); block.className = 'chunk';
      const english = document.createElement('div'); english.className = 'english';
      const start = position;
      for (const token of chunk.en.trim().match(/[a-zA-Z]+(?:['’-][a-zA-Z]+)*|[^a-zA-Z]+/g) || []) {
        const isWord = /^[a-zA-Z]/.test(token);
        const wrapper = document.createElement(isWord ? 'button' : 'span');
        if (isWord) {
          wrapper.className = 'word'; wrapper.type = 'button'; wrapper.setAttribute('aria-label', token+' の意味');
          wrapper.addEventListener('click', () => showDictionary(token));
        }
        for (const char of token) {
          const span = document.createElement('span'); span.className = 'char'; span.textContent = char;
          spans.push({el:span,position:position++}); wrapper.append(span);
        }
        english.append(wrapper);
      }
      const translation = document.createElement('p'); translation.className = 'translation'; translation.lang = 'ja'; translation.textContent = chunk.ja;
      block.append(english, translation); passage.append(block);
      chunks.push({block,translation,start,end:position});
      if (ci < lesson.chunks.length - 1) position++;
    });
  }
  function update() {
    for (const {el, position} of spans) {
      el.classList.toggle('correct', position < state.position);
      el.classList.toggle('current', position === state.position && !complete);
    }
    for (const chunk of chunks) {
      const done = state.position >= chunk.end;
      const active = state.position >= chunk.start && state.position < chunk.end;
      const wasActive = chunk.block.classList.contains('active');
      chunk.block.classList.toggle('active', active); chunk.block.classList.toggle('done', done);
      const visible = settings.translation === 'always' || (settings.translation === 'completed' && done);
      chunk.translation.classList.toggle('concealed', !visible); chunk.translation.setAttribute('aria-hidden', String(!visible));
      if (active && !wasActive && started) {
        const container = $('passage');
        container.scrollTop += chunk.block.getBoundingClientRect().top - container.getBoundingClientRect().top - 8;
      }
    }
    const metrics = engine.metrics(text,state);
    $('wpm').textContent = metrics.wpm; $('accuracy').textContent = metrics.accuracy+'%'; $('progress').textContent = metrics.progress+'%';
    $('progress-bar').style.width = metrics.progress+'%';
    document.querySelector('.progress-track').setAttribute('aria-valuenow',metrics.progress);
  }
  function status(message, error = false) {
    $('input-status').textContent = message; $('input-status').classList.toggle('error',error); input.setAttribute('aria-invalid',String(error));
  }
  function finish() {
    if (complete) return;
    tick(); complete = true; lastTick = null;
    const result = engine.metrics(text,state);
    history.push({id:lesson.id,date:Date.now(),wpm:result.wpm,accuracy:result.accuracy}); history = history.slice(-100);
    store.set('history',history); save(); update();
    $('result-summary').textContent = `${result.wpm} WPM · 正確率 ${result.accuracy}% · ${Math.max(1,Math.round(state.elapsed/1000))}秒`;
    $('result').hidden = false; input.disabled = true;
    $('next-lesson').textContent = index === lessons.length - 1 ? '教材を選ぶ →' : '次の教材へ →';
    status('完了しました。結果を確認して、次の教材に進めます。');
    $('next-lesson').focus({preventScroll:true});
    if (settings.voice) speak();
  }
  function accept(value) {
    if (complete) return;
    for (const char of value) {
      if (!engine.typeable(char)) continue;
      if (!started) {started = true; lastTick = performance.now();}
      tick();
      const correct = engine.input(text,state,char);
      if (correct === false) {status(`次の文字は「${text[state.position]}」です。もう一度どうぞ。`,true); break;}
      status('その調子です。意味のまとまりを意識してみましょう。');
      if (state.position >= text.length) {finish(); break;}
    }
    update(); save();
  }
  input.addEventListener('input', e => {
    if (e.isComposing) return;
    const value = input.value; input.value = '';
    if (/[^\x00-\x7f]/.test(value)) {status('キーボードを半角英数に切り替えてください。',true); return;}
    accept(value);
  });
  input.addEventListener('compositionend', () => {input.value = ''; status('キーボードを半角英数に切り替えてください。',true);});
  input.addEventListener('keydown', e => {
    if (e.key === 'Backspace' && !e.isComposing && !complete) {e.preventDefault(); engine.backspace(text,state); update(); save();}
  });
  input.addEventListener('beforeinput', e => {
    if (e.inputType === 'deleteContentBackward') {e.preventDefault(); if (!complete) {engine.backspace(text,state);update();save();}}
  });
  for (const event of ['paste','drop']) input.addEventListener(event,e => {e.preventDefault(); status('練習のため、貼り付けではなく一文字ずつ入力してください。');});
  input.addEventListener('focus', () => {if (started && !complete) lastTick = performance.now();});
  input.addEventListener('blur',pause);
  document.addEventListener('visibilitychange', () => {if (document.hidden) {pause();stopSpeech();} else if (document.activeElement === input && started && !complete) lastTick = performance.now();});
  window.addEventListener('pagehide',pause);
  setInterval(() => {if (lastTick !== null) {tick(); update();save();}},1000);
  function openDialog(id) {pause(); stopSpeech(); $(id).showModal();}
  for (const dialog of document.querySelectorAll('dialog')) {
    dialog.querySelector('[data-close]').addEventListener('click',() => dialog.close());
    dialog.addEventListener('click',e => {if(e.target === dialog) {const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  }
  $('restart').addEventListener('click',() => {loadLesson(index,true);input.focus();});
  $('next-lesson').addEventListener('click',() => {if(index < lessons.length-1) {loadLesson(index+1);input.focus();} else {$('library-open').click();}});
  $('speak').addEventListener('click',speak); $('stop-speech').addEventListener('click',stopSpeech);
  function renderLibrary() {
    const query = $('lesson-search').value.toLowerCase().trim();
    const list = $('lesson-list'); list.replaceChildren();
    lessons.forEach((item,i) => {
      if ((activeCategory !== 'all' && category(item) !== activeCategory) || !(item.title+' '+item.english).toLowerCase().includes(query)) return;
      const button = document.createElement('button'); button.className = 'lesson-choice';
      const info = document.createElement('span'), title = document.createElement('strong'), detail = document.createElement('small'), action = document.createElement('span');
      title.textContent = item.title.replace(/【フル全文】/g,'');
      detail.textContent = `${categoryNames[category(item)] || '英文'} · ${item.chunks.map(c=>c.en).join(' ').split(/\s+/).length}語${history.some(h=>h.id===item.id)?' · クリア済み':''}`;
      action.textContent = item.id === lesson.id ? '練習中' : '開始 →';
      info.append(title,detail);button.append(info,action);
      button.addEventListener('click',() => {loadLesson(i);$('library').close();input.focus();}); list.append(button);
    });
    $('lesson-count').textContent = list.children.length ? `${list.children.length}件の教材` : '該当する教材がありません。検索条件を変えてみてください。';
  }
  Object.entries(categoryNames).forEach(([key,name]) => {
    const button = document.createElement('button');button.textContent=name;button.setAttribute('aria-pressed',String(key===activeCategory));
    button.addEventListener('click',() => {activeCategory=key;for(const b of $('categories').children)b.setAttribute('aria-pressed',String(b===button));renderLibrary();});$('categories').append(button);
  });
  $('library-open').addEventListener('click',() => {renderLibrary();openDialog('library');});
  $('lesson-search').addEventListener('input',renderLibrary);
  $('settings-open').addEventListener('click',() => {$('translation').value=settings.translation;$('voice-rate').value=settings.rate;$('auto-voice').checked=settings.voice;openDialog('settings');});
  $('settings-form').addEventListener('submit',e => {e.preventDefault();settings={translation:$('translation').value,rate:Number($('voice-rate').value),voice:$('auto-voice').checked};store.set('settings',settings);update();$('settings').close();});
  function renderHistory() {
    $('history-list').replaceChildren();$('clear-confirm').hidden=true;
    $('clear-history').disabled=!history.length;
    const average = key => history.length ? Math.round(history.reduce((sum,h)=>sum+h[key],0)/history.length) : 0;
    $('history-summary').textContent = history.length ? `${history.length}回の練習 · 平均 ${average('wpm')} WPM · 正確率 ${average('accuracy')}%` : 'まだ記録はありません。最初の教材をクリアしてみましょう。';
    [...history].reverse().forEach(h => {
      const row=document.createElement('div');row.className='history-row';const title=document.createElement('strong'),detail=document.createElement('small');
      title.textContent=lessons.find(l=>l.id===h.id)?.title || '教材';detail.textContent=`${new Date(h.date).toLocaleString('ja-JP')} · ${h.wpm} WPM · ${h.accuracy}%`;row.append(title,detail);$('history-list').append(row);
    });
  }
  $('history-open').addEventListener('click',() => {renderHistory();openDialog('history');});
  $('clear-history').addEventListener('click',() => {$('clear-confirm').hidden=false;$('cancel-clear').focus();});
  $('cancel-clear').addEventListener('click',() => {$('clear-confirm').hidden=true;$('clear-history').focus();});
  $('confirm-clear').addEventListener('click',() => {history=[];store.set('history',history);renderHistory();});
  function showDictionary(word) {
    const key=word.toLowerCase();
    const entry=Object.entries(lesson.wordTranslations || {}).find(([w])=>w.toLowerCase()===key);
    const meaning=entry?.[1] || ejDictionary[key];
    $('dictionary-word').textContent=word;
    $('dictionary-meaning').textContent=meaning || '内蔵辞書にこの語の訳がありません。下のリンクから確認できます。';
    $('dictionary-link').href='https://ejje.weblio.jp/content/'+encodeURIComponent(word);
    openDialog('dictionary');
  }
  loadLesson(index);
})();
