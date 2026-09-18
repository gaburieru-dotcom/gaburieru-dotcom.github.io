const test = require('node:test');
const assert = require('node:assert/strict');
const e = require('../slashtyper/engine.js');
const lessons = require('../slashtyper/sentences.js');
test('ignores case and punctuation; errors do not advance; backspace removes one letter', () => {
 const text='Hi, you!'; const s=e.create(text);
 assert.equal(e.input(text,s,'x'),false);assert.equal(s.position,0);
 e.input(text,s,'h');e.input(text,s,'I');assert.equal(s.position,4);
 e.backspace(text,s);assert.equal(s.position,1);
 e.input(text,s,'i'); for(const c of 'you')e.input(text,s,c);
 assert.equal(s.position,text.length);assert.equal(e.metrics(text,s).accuracy,86);
 assert.equal(e.input(text,s,'z'),null);
});
test('resume validates storage and completion never restores as an unfinished session',()=>{
 const text='Hello!'; const s=e.create(text); e.input(text,s,'h');s.elapsed=1000;
 assert.deepEqual(e.restore(text,s),s);
 for(const saved of [null,{...s,position:99},{...s,correct:999},{...s,elapsed:-1},{...s,position:text.length}])assert.deepEqual(e.restore(text,saved),e.create(text));
});
test('WPM measures completed characters, not repeated corrections',()=>{
 const text='ab cd';const s=e.create(text);for(const c of 'abcd')e.input(text,s,c);s.elapsed=60000;
 assert.equal(e.metrics(text,s).wpm,1);e.backspace(text,s);assert.equal(s.position,4);
});
test('every existing lesson can reach completion using the typing rules',()=>{
 const ids=new Set();
 for(const l of lessons){assert.ok(!ids.has(l.id));ids.add(l.id);assert.ok(l.chunks.length);
 const text=l.chunks.map(c=>c.en.trim()).join(' ');const s=e.create(text);
 for(const char of text)if(e.typeable(char))assert.equal(e.input(text,s,char),true,l.id);
 assert.equal(s.position,text.length,l.id);assert.equal(e.metrics(text,s).accuracy,100);
 }
});
