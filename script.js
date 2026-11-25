/*
  The interactive evidence panel is powered by one array of content objects.
  Clicking a tab updates the panel; left/right arrows support keyboard navigation.
  No framework, API, build step, or user tracking required.
*/
const exhibits = [
  {
    category: 'SOCIAL EXPECTATION',
    title: 'THE FUNERAL',
    fact: "At the vigil, Meursault drinks coffee and smokes, but does not cry. Witnesses later describe his conduct in court.",
    meaning: 'The prosecutor uses these details to portray him as heartless. They show what others expect of mourning, not what took place on the beach.',
    caution: 'A clinical diagnosis, or proof that he never cared for his mother.'
  },
  {
    category: 'THE CRIME',
    title: 'THE BEACH',
    fact: 'Meursault shoots an unnamed Arab man and fires four more shots after the first. The man dies.',
    meaning: 'The shooting is the act for which Meursault must answer. The sun and heat may shape the scene, but neither is an alibi.',
    caution: 'An argument that a distorted trial makes the killing acceptable.'
  },
  {
    category: 'THE SOCIAL SCRIPT',
    title: 'THE COURTROOM',
    fact: "The prosecutor questions his mourning and highlights that Meursault swam with Marie and saw a comedy soon after the funeral.",
    meaning: 'The courtroom becomes a test of recognizable grief. The prosecutor invites the jury to infer his criminal character from behavior that does not establish the shooting.',
    caution: 'A claim that every witness or juror shared exactly the same motives.'
  },
  {
    category: 'THE ABSURD',
    title: 'THE ENDING',
    fact: "Facing execution, Meursault rejects the chaplain’s promise of religious comfort and confronts the world’s indifference.",
    meaning: 'The absurd names a confrontation with a world that offers no assured meaning. That is different from claiming actions lack consequences.',
    caution: 'Treating the ending as approval of violence or disregard for the victim.'
  }
];

const tabs = Array.from(document.querySelectorAll('.case-tab'));
const panel = document.getElementById('evidence-panel');
const kicker = document.getElementById('evidence-kicker');
const title = document.getElementById('evidence-title');
const fact = document.getElementById('evidence-fact');
const meaning = document.getElementById('evidence-meaning');
const caution = document.getElementById('evidence-caution');
const visitCounter = document.getElementById('visited-count');
const nextButton = document.getElementById('next-exhibit');
const reviewed = new Set([0]);
let currentIndex = 0;

function showExhibit(index, focusTab = false) {
  const item = exhibits[index];
  currentIndex = index;
  reviewed.add(index);

  kicker.textContent = `EXHIBIT ${String(index + 1).padStart(2, '0')} / ${item.category}`;
  title.textContent = item.title;
  fact.textContent = item.fact;
  meaning.textContent = item.meaning;
  caution.textContent = item.caution;
  visitCounter.textContent = `${String(reviewed.size).padStart(2, '0')} / 04 EXHIBITS OPENED`;

  tabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === index;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', tabs[index].id);
  if (focusTab) tabs[index].focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showExhibit(index));
  tab.addEventListener('keydown', (event) => {
    let target;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') target = 0;
    if (event.key === 'End') target = tabs.length - 1;
    if (target !== undefined) {
      event.preventDefault();
      showExhibit(target, true);
    }
  });
});

nextButton.addEventListener('click', () => showExhibit((currentIndex + 1) % exhibits.length));


/*
  Step 7 addition: an explicit contrast between facts about the shooting
  and the social expectations emphasized at Meursault's trial.
  This is literary classification, not a statement about admissibility in court.
*/
const courtroomPrompts = [
  {
    prompt: 'Meursault shoots a man on the beach.',
    answer: 'act',
    explanation: 'This is the killing itself. The court has to address this act, independent of how Meursault mourned his mother.'
  },
  {
    prompt: 'He does not cry at his mother’s funeral.',
    answer: 'norm',
    explanation: 'This concerns socially expected grief. The prosecutor uses it to portray his character, but it does not establish what happened on the beach.'
  },
  {
    prompt: 'He fires four more shots after the first.',
    answer: 'act',
    explanation: 'These actions are directly part of the shooting. The website does not argue that Meursault is innocent.'
  },
  {
    prompt: 'He goes swimming with Marie and watches a comedy soon after the funeral.',
    answer: 'norm',
    explanation: 'The prosecution treats this as a breach of expected mourning. It is a social judgment, not an account of the killing.'
  }
];

const testPosition = document.getElementById('test-position');
const testScore = document.getElementById('test-score');
const testPrompt = document.getElementById('test-prompt');
const testFeedback = document.getElementById('test-feedback');
const testAdvance = document.getElementById('test-advance');
const testButtons = [...document.querySelectorAll('.test-choice')];
let promptIndex = 0;
let correctCount = 0;
let answered = false;

function renderCourtroomPrompt() {
  const item = courtroomPrompts[promptIndex];
  testPosition.textContent = `PROMPT ${String(promptIndex + 1).padStart(2, '0')} / ${String(courtroomPrompts.length).padStart(2, '0')}`;
  testPrompt.textContent = item.prompt;
  testScore.textContent = `${correctCount} CORRECT`;
  testFeedback.textContent = '';
  testFeedback.className = 'test-feedback';
  answered = false;
  testButtons.forEach((button) => {
    button.hidden = false;
    button.disabled = false;
    button.classList.remove('selected', 'incorrect');
  });
  testAdvance.hidden = true;
}

function answerCourtroom(choice) {
  if (answered) return;
  const item = courtroomPrompts[promptIndex];
  const isCorrect = choice === item.answer;
  answered = true;
  if (isCorrect) correctCount += 1;
  testScore.textContent = `${correctCount} CORRECT`;
  testButtons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.choice === item.answer) button.classList.add('selected');
    else if (button.dataset.choice === choice && !isCorrect) button.classList.add('incorrect');
  });
  testFeedback.className = `test-feedback ${isCorrect ? 'correct' : 'try-again'}`;
  testFeedback.textContent = `${isCorrect ? 'Good distinction.' : 'Look again.'} ${item.explanation}`;
  testAdvance.hidden = false;
  testAdvance.innerHTML = promptIndex === courtroomPrompts.length - 1
    ? 'See the verdict <span aria-hidden="true">→</span>'
    : 'Next detail <span aria-hidden="true">→</span>';
  // The selected answer is disabled; move keyboard focus to the newly enabled action.
  testAdvance.focus();
}

function completeCourtroomTest() {
  testPosition.textContent = 'CROSS-EXAMINATION COMPLETE';
  testPrompt.textContent = `You classified ${correctCount} of ${courtroomPrompts.length} details correctly.`;
  testButtons.forEach((button) => { button.hidden = true; });
  testFeedback.className = 'test-feedback correct';
  testFeedback.textContent = 'The point is not that the crime disappears. It is that the courtroom repeatedly turns social nonconformity into evidence of character. The unnamed victim and the violence remain real.';
  testAdvance.hidden = false;
  testAdvance.innerHTML = 'Try again <span aria-hidden="true">↻</span>';
}

testButtons.forEach((button) => {
  button.addEventListener('click', () => answerCourtroom(button.dataset.choice));
});

testAdvance.addEventListener('click', () => {
  if (promptIndex < courtroomPrompts.length - 1) {
    promptIndex += 1;
    renderCourtroomPrompt();
    testButtons[0].focus();
  } else if (testPosition.textContent === 'CROSS-EXAMINATION COMPLETE') {
    promptIndex = 0;
    correctCount = 0;
    renderCourtroomPrompt();
    testButtons[0].focus();
  } else {
    completeCourtroomTest();
  }
});

renderCourtroomPrompt();

// Keep the initial panel copy in sync with the exhibit data.
showExhibit(0);
