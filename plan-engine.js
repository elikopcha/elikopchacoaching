// ─────────────────────────────────────────────
// ELI KOPCHA COACHING — PLAN GENERATION ENGINE
// All plans generated client-side, no API needed
// ─────────────────────────────────────────────

function generateKickstartPlan(intake) {
  const { name, age, weight, gender, goal, body_type, experience, days, activity, sleep, struggles, height } = intake;

  const wt = parseFloat(weight);
  const proteinLow  = Math.round(wt * 0.7);
  const proteinHigh = Math.round(wt * 1.0);
  const numDays = parseInt(days);
  const isMale = gender === 'male';
  const isFemale = gender === 'female';

  // ── STRUGGLE CALLOUTS ──────────────────────────────────────
  function struggleNote() {
    const s = struggles || [];
    if (s.includes('cravings'))       return `You mentioned food cravings — that's exactly what this nutrition approach is designed to kill. Eat from the list, eat when hungry, and the cravings stop chasing you.`;
    if (s.includes('past_failures'))  return `You've tried things that didn't work before. That's not a you problem — it's a program problem. This is different: no restriction, no starvation, just real food and real movement.`;
    if (s.includes('consistency'))    return `Consistency has been the struggle — which usually means the plan was too complicated. This one isn't. It's the same things, done well, repeated.`;
    if (s.includes('diet'))           return `Not knowing what to eat is one of the most common things I hear. By the end of day one, you'll have complete clarity on that.`;
    if (s.includes('time'))           return `You said time is tight. Good — these workouts are 45–55 minutes, three to four times a week. That's it.`;
    if (s.includes('motivation'))     return `Motivation follows action, not the other way around. Don't wait to feel ready. Start today, and the motivation will catch up.`;
    if (s.includes('stress'))         return `High stress and poor sleep are making everything harder — fat loss, muscle building, energy. We're going to attack those directly in this plan.`;
    return `The goal here isn't to overwhelm you in week one — it's to build real momentum with sustainable habits that actually stick.`;
  }

  // ── SLEEP CALLOUT ──────────────────────────────────────────
  function sleepNote() {
    if (sleep === 'poor')  return `**Your sleep needs immediate attention.** You're currently under 6 hours — that's your biggest blocker right now, ahead of everything else. Fat loss stalls, muscle doesn't build, cravings spike. Getting to 7 hours minimum is step one this week.`;
    if (sleep === 'okay')  return `**Sleep is something to work on this week.** You're getting 6–7 hours — close, but you want to be at 7 minimum, 8 ideally. Even 30–45 extra minutes makes a measurable difference in how you feel and how your body responds.`;
    if (sleep === 'good')  return `Sleep is solid. Keep it there. If you can nudge it to 8 hours consistently, do it — it's free performance.`;
    return `Sleep is dialed in. That's a real advantage. Protect it.`;
  }

  // ── BODY TYPE CONTEXT ──────────────────────────────────────
  function bodyTypeNote() {
    if (body_type === 'skinny')      return isMale
      ? `You're lean already — the focus here is building size and strength, especially in your upper body. Don't be afraid to eat more than feels comfortable at first.`
      : `You're lean already — the focus is building shape and strength, especially in your lower body. Fuel your training; this isn't a diet phase.`;
    if (body_type === 'skinny_fat')  return `Skinny fat responds well to this exact approach — training hard with big lifts while eating clean, natural food. You'll see the body start to shift within a few weeks.`;
    if (body_type === 'overweight')  return `The combination of lifting and hitting your steps every day is the most powerful fat loss tool there is. Don't rush it — the plan is already working even when the scale moves slowly.`;
    if (body_type === 'athletic')    return `You already have a base to work with. The goal is to sharpen it — tighten the nutrition, push the lifts, and build the habits that make this permanent.`;
    return `You've got a solid starting point. The combination of these workouts and this nutrition approach will produce visible results within two weeks.`;
  }

  // ── ACTIVITY NOTE ──────────────────────────────────────────
  function activityNote() {
    if (activity === 'sedentary') return `Since your daily life is mostly sedentary, hitting 8,000 steps will require intentional effort — short walks, parking farther away, walking after meals. Build those habits this week.`;
    if (activity === 'light')     return `You already move some during the day — that's a head start on your step goal. Stack a short morning walk and an evening walk and you'll hit 8,000 without thinking about it.`;
    return `Your active daily life already builds a step base. Use a phone or watch to confirm you're hitting 8,000 — you likely already are on most days.`;
  }

  // ── TRAINING SPLITS ────────────────────────────────────────

  const UPPER_MALE_A = [
    { name: 'Barbell Bench Press',        sets: 3, note: 'Chest, shoulders, triceps' },
    { name: 'Barbell Bent-Over Row',      sets: 3, note: 'Back, biceps' },
    { name: 'Seated Dumbbell OHP',        sets: 3, note: 'Shoulders' },
    { name: 'Weighted Pull-Up or Lat Pulldown', sets: 3, note: 'Back width, biceps' },
    { name: 'Incline Dumbbell Press',     sets: 2, note: 'Upper chest' },
    { name: 'Barbell or Dumbbell Curl',   sets: 2, note: 'Biceps' },
  ];

  const UPPER_MALE_B = [
    { name: 'Incline Barbell Press',      sets: 3, note: 'Upper chest, shoulders' },
    { name: 'Cable or Machine Row',       sets: 3, note: 'Back thickness' },
    { name: 'Arnold Press',               sets: 3, note: 'Full shoulder development' },
    { name: 'Chest-Supported DB Row',     sets: 3, note: 'Back, rear delts' },
    { name: 'Cable Fly or Pec Deck',      sets: 2, note: 'Chest isolation' },
    { name: 'Skull Crushers or Pushdown', sets: 2, note: 'Triceps' },
  ];

  const LOWER_MALE_A = [
    { name: 'Barbell Back Squat',         sets: 3, note: 'Quads, glutes, overall legs' },
    { name: 'Romanian Deadlift',          sets: 3, note: 'Hamstrings, glutes' },
    { name: 'Leg Press',                  sets: 3, note: 'Quads, glutes' },
    { name: 'Leg Curl Machine',           sets: 2, note: 'Hamstrings' },
    { name: 'Standing Calf Raise',        sets: 3, note: 'Calves' },
  ];

  const LOWER_MALE_B = [
    { name: 'Conventional Deadlift',      sets: 3, note: 'Full posterior chain' },
    { name: 'Hack Squat or Leg Press',    sets: 3, note: 'Quad focus' },
    { name: 'Walking Lunges',             sets: 3, note: 'Quads, glutes, balance' },
    { name: 'Leg Extension Machine',      sets: 2, note: 'Quad isolation' },
    { name: 'Seated Calf Raise',          sets: 3, note: 'Calves' },
  ];

  const UPPER_FEMALE_A = [
    { name: 'Dumbbell Bench Press',       sets: 3, note: 'Chest, shoulders, triceps' },
    { name: 'Cable Row or Machine Row',   sets: 3, note: 'Back, biceps' },
    { name: 'Dumbbell Lateral Raise',     sets: 3, note: 'Side delts — shoulder width' },
    { name: 'Lat Pulldown',               sets: 3, note: 'Back width' },
    { name: 'Dumbbell Curl',              sets: 2, note: 'Biceps' },
    { name: 'Tricep Pushdown',            sets: 2, note: 'Triceps' },
  ];

  const UPPER_FEMALE_B = [
    { name: 'Incline Dumbbell Press',     sets: 3, note: 'Upper chest, shoulders' },
    { name: 'Chest-Supported DB Row',     sets: 3, note: 'Back thickness, rear delts' },
    { name: 'Seated DB OHP',              sets: 3, note: 'Shoulder strength' },
    { name: 'Assisted Pull-Up or Pulldown', sets: 3, note: 'Back, biceps' },
    { name: 'Pec Deck or Cable Fly',      sets: 2, note: 'Chest' },
    { name: 'Overhead Tricep Extension',  sets: 2, note: 'Triceps' },
  ];

  const LOWER_FEMALE_A = [
    { name: 'Barbell Hip Thrust',         sets: 3, note: 'Glutes — top priority' },
    { name: 'Barbell Back Squat',         sets: 3, note: 'Quads, glutes' },
    { name: 'Romanian Deadlift',          sets: 3, note: 'Hamstrings, glutes' },
    { name: 'Walking Lunges',             sets: 3, note: 'Glutes, quads, balance' },
    { name: 'Abduction Machine',          sets: 3, note: 'Outer glutes, hips' },
    { name: 'Standing Calf Raise',        sets: 2, note: 'Calves' },
  ];

  const LOWER_FEMALE_B = [
    { name: 'Sumo Deadlift',              sets: 3, note: 'Inner thighs, glutes, hamstrings' },
    { name: 'Leg Press (feet high/wide)', sets: 3, note: 'Glute-focused leg press' },
    { name: 'Bulgarian Split Squat',      sets: 3, note: 'Single-leg glute and quad work' },
    { name: 'Leg Curl Machine',           sets: 3, note: 'Hamstrings' },
    { name: 'Cable Kickback',             sets: 2, note: 'Glute isolation' },
    { name: 'Seated Calf Raise',          sets: 2, note: 'Calves' },
  ];

  const FULLBODY_MALE_BEG = [
    { name: 'Barbell Back Squat',         sets: 2, note: 'Legs, glutes, core' },
    { name: 'Barbell Bench Press',        sets: 2, note: 'Chest, shoulders, triceps' },
    { name: 'Barbell Bent-Over Row',      sets: 2, note: 'Back, biceps' },
    { name: 'Seated Dumbbell OHP',        sets: 2, note: 'Shoulders' },
    { name: 'Romanian Deadlift',          sets: 2, note: 'Hamstrings, glutes' },
    { name: 'Lat Pulldown',               sets: 2, note: 'Back width' },
  ];

  const FULLBODY_MALE_INT = [
    { name: 'Barbell Back Squat',         sets: 3, note: 'Legs, glutes, core' },
    { name: 'Barbell Bench Press',        sets: 3, note: 'Chest, shoulders, triceps' },
    { name: 'Barbell Bent-Over Row',      sets: 3, note: 'Back, biceps' },
    { name: 'Overhead Press',             sets: 3, note: 'Shoulders, upper chest' },
    { name: 'Romanian Deadlift',          sets: 3, note: 'Hamstrings, glutes' },
    { name: 'Weighted Pull-Up or Pulldown', sets: 2, note: 'Back width, biceps' },
    { name: 'Dumbbell Curl',              sets: 2, note: 'Biceps' },
  ];

  const FULLBODY_FEMALE_BEG = [
    { name: 'Barbell Hip Thrust',         sets: 2, note: 'Glutes — priority #1' },
    { name: 'Goblet Squat',               sets: 2, note: 'Quads, glutes' },
    { name: 'Romanian Deadlift',          sets: 2, note: 'Hamstrings, glutes' },
    { name: 'Dumbbell Bench Press',       sets: 2, note: 'Chest, shoulders' },
    { name: 'Lat Pulldown',               sets: 2, note: 'Back width' },
    { name: 'Dumbbell Lateral Raise',     sets: 2, note: 'Shoulders' },
  ];

  const FULLBODY_FEMALE_INT = [
    { name: 'Barbell Hip Thrust',         sets: 3, note: 'Glutes — priority #1' },
    { name: 'Barbell Back Squat',         sets: 3, note: 'Quads, glutes' },
    { name: 'Romanian Deadlift',          sets: 3, note: 'Hamstrings, glutes' },
    { name: 'Dumbbell Bench Press',       sets: 2, note: 'Chest, shoulders' },
    { name: 'Cable Row',                  sets: 3, note: 'Back, biceps' },
    { name: 'Dumbbell Lateral Raise',     sets: 2, note: 'Shoulders' },
    { name: 'Walking Lunges',             sets: 2, note: 'Glutes, quads' },
  ];

  // ── SELECT EXERCISES BASED ON SPLIT ────────────────────────
  const isAdv = experience === 'advanced';
  const isInt = experience === 'intermediate';
  const isBeg = experience === 'beginner';
  const setsMod = (isAdv || isInt) ? 3 : 2;

  function formatExercises(list, sessionLabel) {
    let html = `<h3>${sessionLabel}</h3><ul>`;
    list.forEach(ex => {
      html += `<li><strong>${ex.name}</strong> — ${ex.sets} sets × 8–12 reps <span class="ex-note">(${ex.note})</span></li>`;
    });
    html += `</ul>`;
    return html;
  }

  // ── BUILD SCHEDULE + EXERCISES ─────────────────────────────
  let scheduleHtml = '';
  let exerciseHtml = '';
  let weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  if (numDays <= 3) {
    // FULL BODY
    const fbExercises = isMale
      ? (isBeg ? FULLBODY_MALE_BEG : FULLBODY_MALE_INT)
      : (isBeg ? FULLBODY_FEMALE_BEG : FULLBODY_FEMALE_INT);

    let schedule = [];
    if (numDays === 2) {
      schedule = [
        { day: 'Monday',    type: '🏋️ Full Body', session: 'Full Body' },
        { day: 'Tuesday',   type: '🚶 Rest / Steps', session: null },
        { day: 'Wednesday', type: '🚶 Rest / Steps', session: null },
        { day: 'Thursday',  type: '🏋️ Full Body', session: 'Full Body' },
        { day: 'Friday',    type: '🚶 Rest / Steps', session: null },
        { day: 'Saturday',  type: '🚶 Active Rest', session: null },
        { day: 'Sunday',    type: '🚶 Rest', session: null },
      ];
    } else {
      schedule = [
        { day: 'Monday',    type: '🏋️ Full Body A', session: 'Full Body' },
        { day: 'Tuesday',   type: '🚶 Rest / Steps', session: null },
        { day: 'Wednesday', type: '🏋️ Full Body B', session: 'Full Body' },
        { day: 'Thursday',  type: '🚶 Rest / Steps', session: null },
        { day: 'Friday',    type: '🏋️ Full Body C', session: 'Full Body' },
        { day: 'Saturday',  type: '🚶 Active Rest', session: null },
        { day: 'Sunday',    type: '🚶 Rest', session: null },
      ];
    }

    scheduleHtml = '<ul>' + schedule.map(s =>
      `<li><strong>${s.day}:</strong> ${s.type}</li>`
    ).join('') + '</ul>';

    exerciseHtml = formatExercises(fbExercises, 'Every Training Session (same exercises, add weight over time)');
    exerciseHtml += `<blockquote>Progressive overload: Start a new weight at 6 reps to failure. Once you can hit 10 reps with that same weight, increase by 10–20 lbs and start over. Last set of each exercise to failure only.</blockquote>`;

  } else {
    // UPPER / LOWER SPLIT
    const upperA = isMale ? UPPER_MALE_A : UPPER_FEMALE_A;
    const upperB = isMale ? UPPER_MALE_B : UPPER_FEMALE_B;
    const lowerA = isMale ? LOWER_MALE_A : LOWER_FEMALE_A;
    const lowerB = isMale ? LOWER_MALE_B : LOWER_FEMALE_B;

    let schedule = [];
    if (numDays === 4) {
      schedule = [
        { day: 'Monday',    type: '🏋️ Upper A' },
        { day: 'Tuesday',   type: '🏋️ Lower A' },
        { day: 'Wednesday', type: '🚶 Rest / Steps' },
        { day: 'Thursday',  type: '🏋️ Upper B' },
        { day: 'Friday',    type: '🏋️ Lower B' },
        { day: 'Saturday',  type: '🚶 Active Rest' },
        { day: 'Sunday',    type: '🚶 Rest' },
      ];
    } else {
      schedule = [
        { day: 'Monday',    type: '🏋️ Upper A' },
        { day: 'Tuesday',   type: '🏋️ Lower A' },
        { day: 'Wednesday', type: '🚶 Rest / Steps' },
        { day: 'Thursday',  type: '🏋️ Upper B' },
        { day: 'Friday',    type: '🏋️ Lower B' },
        { day: 'Saturday',  type: '🏋️ Upper A (repeat)' },
        { day: 'Sunday',    type: '🚶 Rest' },
      ];
    }

    scheduleHtml = '<ul>' + schedule.map(s =>
      `<li><strong>${s.day}:</strong> ${s.type}</li>`
    ).join('') + '</ul>';

    exerciseHtml  = formatExercises(upperA, 'Upper Body A');
    exerciseHtml += formatExercises(lowerA, 'Lower Body A');
    exerciseHtml += formatExercises(upperB, 'Upper Body B');
    exerciseHtml += formatExercises(lowerB, 'Lower Body B');
    exerciseHtml += `<blockquote>Progressive overload: Start a new weight at 6 reps to failure. Once you can hit 10 reps with that same weight, increase by 10–20 lbs and start over. Last set of each exercise to failure only.</blockquote>`;
  }

  // ── GOAL-SPECIFIC NUTRITION TONE ───────────────────────────
  function nutritionFocus() {
    if (goal === 'fat_loss') return `Your goal is fat loss, so the most important thing is staying on the approved food list and stopping when you're no longer hungry — not when you're full. These foods naturally regulate appetite. You won't need to track calories or restrict yourself — the food choices do the work.`;
    if (goal === 'muscle')   return `Your goal is building muscle, so don't under-eat. Eat when you're hungry, prioritize red meat and dairy as your foundation, and make sure protein is in every meal. Your body needs fuel to build — this is not a diet phase.`;
    if (goal === 'recomp')   return `Recomposition — losing fat and building muscle simultaneously — works best when you eat clean, lift hard, and let the body sort itself out. These foods support both goals at once. Don't restrict; just stay on the list.`;
    return `You're building health from the ground up. These foods aren't a temporary fix — they're the long-term foundation of a body that runs well without needing shortcuts or supplements.`;
  }

  // ── 7-DAY ROADMAP ──────────────────────────────────────────
  function buildRoadmap(schedule) {
    const days = [
      { label: 'Day 1 — Monday',    training: schedule[0] },
      { label: 'Day 2 — Tuesday',   training: schedule[1] },
      { label: 'Day 3 — Wednesday', training: schedule[2] },
      { label: 'Day 4 — Thursday',  training: schedule[3] },
      { label: 'Day 5 — Friday',    training: schedule[4] },
      { label: 'Day 6 — Saturday',  training: schedule[5] },
      { label: 'Day 7 — Sunday',    training: schedule[6] },
    ];

    const habitCues = [
      'Start your morning with natural sunlight — even 5 minutes outside.',
      'No phone for the first 10 minutes after waking. Drink a glass of water first.',
      'Walk after your largest meal of the day. Even 10 minutes helps.',
      'Before bed: no screens 30 minutes out. Your sleep quality will thank you.',
      'Check in with yourself: are you eating from hunger, or boredom? Stay intentional.',
      'Have your one daily cheat item ready so it feels like a reward, not a failure.',
      'Reflect on the week: what went well? What was hard? Note it — that\'s your data.',
    ];

    const eatFocus = [
      'Red meat as your main protein today. Fruit with or before your workout.',
      'Whole milk or full-fat Greek yogurt with breakfast. Chicken or fish for dinner.',
      'Focus on fruit today — watermelon, grapes, oranges. Orange juice in the morning.',
      'Red meat at lunch or dinner. Butter on everything you cook. Honey if you want something sweet.',
      'Fish or chicken today. Full-fat dairy as a snack. Your one cheat item if you want it.',
      'Keep it simple today — red meat, fruit, dairy. Enjoy your cheat item.',
      'Eat relaxed today. Stay on the list. Note what foods felt best this week.',
    ];

    let html = '';
    days.forEach((d, i) => {
      const isTraining = d.training && d.training.session !== null && !d.training.type.includes('Rest');
      const trainLine = isTraining
        ? `🏋️ <strong>Train today:</strong> ${d.training.type.replace('🏋️ ', '')}`
        : `🚶 <strong>Rest day:</strong> Steps are the workout today. Hit 8,000.`;
      html += `<div class="day-card">
        <div class="day-label">${d.label}</div>
        <ul>
          <li>${trainLine}</li>
          <li>📍 <strong>Steps:</strong> 8,000+ minimum${isTraining ? ' — steps still count on training days' : ''}</li>
          <li>🍽️ <strong>Eat:</strong> ${eatFocus[i]}</li>
          <li>💡 <strong>Habit:</strong> ${habitCues[i]}</li>
        </ul>
      </div>`;
    });
    return html;
  }

  // Build the schedule array for roadmap
  let roadmapSchedule = [];
  if (numDays === 2) {
    roadmapSchedule = [
      { type: '🏋️ Full Body', session: 'Full Body' },
      { type: '🚶 Rest / Steps', session: null },
      { type: '🚶 Rest / Steps', session: null },
      { type: '🏋️ Full Body', session: 'Full Body' },
      { type: '🚶 Rest / Steps', session: null },
      { type: '🚶 Active Rest', session: null },
      { type: '🚶 Rest', session: null },
    ];
  } else if (numDays === 3) {
    roadmapSchedule = [
      { type: '🏋️ Full Body A', session: 'Full Body' },
      { type: '🚶 Rest / Steps', session: null },
      { type: '🏋️ Full Body B', session: 'Full Body' },
      { type: '🚶 Rest / Steps', session: null },
      { type: '🏋️ Full Body C', session: 'Full Body' },
      { type: '🚶 Active Rest', session: null },
      { type: '🚶 Rest', session: null },
    ];
  } else if (numDays === 4) {
    roadmapSchedule = [
      { type: '🏋️ Upper A', session: 'Upper A' },
      { type: '🏋️ Lower A', session: 'Lower A' },
      { type: '🚶 Rest / Steps', session: null },
      { type: '🏋️ Upper B', session: 'Upper B' },
      { type: '🏋️ Lower B', session: 'Lower B' },
      { type: '🚶 Active Rest', session: null },
      { type: '🚶 Rest', session: null },
    ];
  } else {
    roadmapSchedule = [
      { type: '🏋️ Upper A', session: 'Upper A' },
      { type: '🏋️ Lower A', session: 'Lower A' },
      { type: '🚶 Rest / Steps', session: null },
      { type: '🏋️ Upper B', session: 'Upper B' },
      { type: '🏋️ Lower B', session: 'Lower B' },
      { type: '🏋️ Upper A (repeat)', session: 'Upper A' },
      { type: '🚶 Rest', session: null },
    ];
  }

  // ── ASSEMBLE THE FULL PLAN ──────────────────────────────────
  const splitName = numDays <= 3 ? 'Full Body 3×/week' : 'Upper / Lower Split';
  const goalLabel = { fat_loss: 'Fat Loss', muscle: 'Muscle Building', recomp: 'Body Recomposition', health: 'General Health' }[goal] || goal;

  const plan = `
<h1>Hey ${name} — here's your plan.</h1>
<p>${struggleNote()} ${bodyTypeNote()}</p>

<h1>Your Weekly Training Schedule</h1>
<p>Based on your ${numDays} days/week, you're on a <strong>${splitName}</strong>.</p>
${scheduleHtml}
<p><em>Workouts run 45–55 minutes. Never more than an hour.</em></p>

<h1>Your Workout Breakdown</h1>
${exerciseHtml}

<h1>Your Nutrition Approach</h1>
<p>${nutritionFocus()}</p>
<h3>Approved Foods — Eat These Freely</h3>
<ul>
  <li><strong>Red meat (~80% lean)</strong> — ground beef, ribeye, NY strip. This is your foundation. Eat it often.</li>
  <li><strong>Sugary/watery fruit</strong> — watermelon, grapes, oranges, berries, bananas, melon. Great any time, especially pre-workout.</li>
  <li><strong>Dairy</strong> — whole milk, full-fat Greek yogurt, butter, full-fat cheese. Don't fear the fat.</li>
  <li><strong>Chicken and fish</strong> — grilled, baked, pan-seared. Secondary to red meat but excellent.</li>
  <li><strong>Honey</strong> — use it as a sweetener. It's real food.</li>
  <li><strong>Organ meats</strong> — liver, heart (optional, but incredibly nutrient-dense if you're up for it).</li>
  <li><strong>One daily cheat item</strong> — anything you want, under 400 calories. This is your daily release valve.</li>
</ul>
<h3>Avoid These Completely</h3>
<ul>
  <li>Vegetables, grains, bread, pasta, rice, crackers</li>
  <li>Candy, chips, ultra-processed snacks (except your one daily cheat item)</li>
  <li>Seed oils — use butter instead</li>
  <li>Alcohol — ideally none; max 3 drinks per week if needed</li>
</ul>
<h3>Two Simple Rules</h3>
<ul>
  <li><strong>Pre-workout:</strong> In the 90 minutes before training, eat only fruit. Nothing else. This is the best fuel for your session.</li>
  <li><strong>Morning:</strong> Orange juice (not from concentrate, no added sugar) in the morning is encouraged. It's real food.</li>
</ul>
<p>Your protein target is <strong>${proteinLow}–${proteinHigh}g/day</strong>. You don't need to track it — just make sure a protein source (red meat, dairy, chicken, fish) anchors every meal.</p>
<blockquote>Eat when you're hungry. Stop when you're no longer hungry — not when you're full. There's a difference. Learn to feel it.</blockquote>

<h1>Daily Non-Negotiables</h1>
<ul>
  <li>✅ <strong>8,000+ steps every single day</strong> — training days included. This is non-negotiable.</li>
  <li>✅ <strong>7 hours of sleep minimum</strong> — 8 is the target. This is where your body actually changes.</li>
  <li>✅ <strong>Morning sunlight</strong> — get outside within an hour of waking. 5–10 minutes minimum. It sets your circadian rhythm and improves everything.</li>
  <li>✅ <strong>Eat only from the approved list</strong> — plus your one daily cheat item. No exceptions during these 7 days.</li>
  <li>✅ <strong>Minimize stress</strong> — stress raises cortisol, cortisol holds fat and kills muscle. Protect your energy.</li>
</ul>
${sleepNote()}

<h1>Your 7-Day Roadmap</h1>
<p>Here's exactly what to focus on each day.</p>
${buildRoadmap(roadmapSchedule)}

<h1>A Note From Eli</h1>
<p>The goal here isn't to survive 7 days and quit. It's to prove to yourself that this way of living is actually enjoyable — not a grind. Real food, real movement, real sleep. No starvation, no complicated systems built to fail.</p>
<p>Come out of this week with one habit locked in. Then add another. That's how it compounds. <strong>Start today.</strong></p>
<p style="margin-top:20px; padding:20px 22px; background:rgba(74,144,226,0.07); border:1px solid rgba(74,144,226,0.25); border-radius:10px; line-height:1.65;">Ready to take this further? If you want a personalized plan, 1-on-1 support, and coaching until you reach your goal weight — <a href="https://elikopchacoaching.vercel.app" style="color:#4A90E2; font-weight:600; text-decoration:none;">visit my full coaching page</a> to get started.</p>
`;

  return plan.trim();
}

// Export for use in HTML
if (typeof module !== 'undefined') module.exports = { generateKickstartPlan };
