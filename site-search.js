/* WildDevon Global Search — drop-in, no dependencies
   Works on every page: add <script src="site-search.js"></script> before </body>
   and <button class="wd-search-btn"> anywhere in the nav.
*/
(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1. SEARCH INDEX                                                      */
  /* ------------------------------------------------------------------ */
  var INDEX = [
    /* ---- Category / hub pages ---- */
    { title: 'Devon Beaches',            url: 'devon-beaches.html',           emoji: '🏖️', category: 'Beaches',       area: 'all',      tags: 'beach sand surf swim rock pool dog family' },
    { title: 'Devon Walks',              url: 'devon-walks.html',             emoji: '🥾', category: 'Walks',         area: 'all',      tags: 'walk hike trail dartmoor coastal cliff' },
    { title: 'Wild Swimming Devon',      url: 'wild-swimming-devon.html',     emoji: '🏊', category: 'Wild Swimming', area: 'all',      tags: 'swim river sea lake wild swimming outdoor' },
    { title: 'Surfing in Devon',         url: 'surfing-in-devon.html',        emoji: '🏄', category: 'Surfing',       area: 'all',      tags: 'surf wave board croyde woolacombe saunton' },
    { title: 'Where to Stay in Devon',   url: 'where-to-stay-devon.html',     emoji: '🏡', category: 'Accommodation', area: 'all',      tags: 'stay hotel cottage camping glamping accommodation' },
    { title: 'Camping & Glamping Devon', url: 'camping-glamping-devon.html',  emoji: '⛺', category: 'Camping',       area: 'all',      tags: 'camp glamp tent pod safari dartmoor' },
    { title: 'Devon with Kids',          url: 'devon-with-kids.html',         emoji: '👨‍👩‍👧', category: 'Family',    area: 'all',      tags: 'kids family children activities days out' },
    { title: 'Coastal Walks Devon',      url: 'coastal-walks-devon.html',     emoji: '🌊', category: 'Walks',         area: 'all',      tags: 'coastal walk cliff south west coast path' },
    { title: 'Dartmoor Walks',           url: 'dartmoor-walks.html',          emoji: '🥾', category: 'Walks',         area: 'dartmoor', tags: 'dartmoor walks tors moor hike circular' },
    { title: 'North Devon Walks',        url: 'north-devon-walks.html',       emoji: '🥾', category: 'Walks',         area: 'north',    tags: 'north devon walks coast cliff circular' },
    { title: 'South Devon Walks',        url: 'south-devon-walks.html',       emoji: '🥾', category: 'Walks',         area: 'south',    tags: 'south devon walks coastal hams circular' },
    { title: 'East Devon Walks',         url: 'east-devon-walks.html',        emoji: '🥾', category: 'Walks',         area: 'east',     tags: 'east devon walks jurassic coast cliff' },
    { title: 'Family Walks Devon',       url: 'family-walks-devon.html',      emoji: '👨‍👩‍👧', category: 'Walks',    area: 'all',      tags: 'family walks devon kids easy short circular' },
    { title: 'Dog Friendly Walks Devon', url: 'dog-friendly-walks-devon.html',emoji: '🐶', category: 'Walks',         area: 'all',      tags: 'dog friendly walks devon off lead trail' },
    { title: 'Exmoor Walks Devon',       url: 'exmoor-walks-devon.html',      emoji: '🥾', category: 'Walks',         area: 'north',    tags: 'exmoor walks devon moorland valley waterfall' },
    { title: 'Hidden Beaches Devon',     url: 'hidden-beaches-devon.html',    emoji: '🗺️', category: 'Beaches',       area: 'all',      tags: 'hidden secret quiet beach cove secluded' },
    { title: 'Rock Pooling Devon',       url: 'rock-pooling-devon.html',      emoji: '🦀', category: 'Activities',    area: 'all',      tags: 'rock pool crab starfish sea creature kids' },
    { title: 'Fossil Hunting Devon',     url: 'fossil-hunting-devon.html',    emoji: '🦕', category: 'Activities',    area: 'east',     tags: 'fossil hunting devon jurassic coast lyme' },
    { title: 'Paddleboarding Devon',     url: 'paddleboarding-devon.html',    emoji: '🏄', category: 'Activities',    area: 'all',      tags: 'paddleboarding devon sup river sea estuary' },
    { title: 'Torre Abbey',              url: 'torre-abbey.html',             emoji: '🏛️', category: 'Activities',    area: 'south',    tags: 'torre abbey torquay history garden museum' },
    { title: 'Devon Outdoor Guide',      url: 'devon-outdoor-guide.html',     emoji: '🌿', category: 'Guide',         area: 'all',      tags: 'outdoor guide activities devon adventure' },

    /* ---- SEO articles ---- */
    { title: 'Dog Friendly Beaches North Devon', url: 'dog-friendly-beaches-north-devon.html', emoji: '🐶', category: 'Beaches', area: 'north', tags: 'dog friendly beach woolacombe croyde saunton pets' },
    { title: 'Wild Swimming Dartmoor',           url: 'wild-swimming-dartmoor.html',           emoji: '🏊', category: 'Wild Swimming', area: 'dartmoor', tags: 'swim dartmoor spitchwick sharrah river pool outdoor' },
    { title: 'About WildDevon',                  url: 'about.html',                            emoji: 'ℹ️', category: 'About',         area: 'all',      tags: 'about wilddevon editorial team' },

    /* ---- Beach category pages ---- */
    { title: 'North Devon Beaches',   url: 'north-devon-beaches.html',  emoji: '🏖️', category: 'Beaches', area: 'north', tags: 'beach north devon woolacombe croyde saunton surf dog' },
    { title: 'South Devon Beaches',   url: 'south-devon-beaches.html',  emoji: '🏖️', category: 'Beaches', area: 'south', tags: 'beach south devon salcombe hope cove bigbury burgh island' },
    { title: 'East Devon Beaches',    url: 'east-devon-beaches.html',   emoji: '🏖️', category: 'Beaches', area: 'east',  tags: 'beach east devon jurassic coast sidmouth beer exmouth' },

    /* ---- Accommodation pages ---- */
    { title: 'Where to Stay North Devon', url: 'north-devon-stays.html', emoji: '🏡', category: 'Accommodation', area: 'north',    tags: 'stay hotel cottage camping north devon woolacombe croyde ilfracombe' },
    { title: 'Where to Stay South Devon', url: 'south-devon-stays.html', emoji: '🏡', category: 'Accommodation', area: 'south',    tags: 'stay hotel cottage camping south devon salcombe dartmouth' },
    { title: 'Where to Stay East Devon',  url: 'east-devon-stays.html',  emoji: '🏡', category: 'Accommodation', area: 'east',     tags: 'stay hotel cottage camping east devon sidmouth exmouth' },
    { title: 'Where to Stay Dartmoor',    url: 'dartmoor-stays.html',    emoji: '🏡', category: 'Accommodation', area: 'dartmoor', tags: 'stay inn cottage camping dartmoor chagford tavistock' },

    /* ---- Individual beach pages — North Devon ---- */
    { title: 'Woolacombe Beach',      url: 'woolacombe-beach.html',      emoji: '🏖️', category: 'Beaches', area: 'north', tags: 'woolacombe beach surf dog family sand dunes' },
    { title: 'Croyde Beach',          url: 'croyde-beach.html',          emoji: '🏄', category: 'Beaches', area: 'north', tags: 'croyde beach surf surfing dog family' },
    { title: 'Saunton Sands',         url: 'saunton-sands.html',         emoji: '🏖️', category: 'Beaches', area: 'north', tags: 'saunton sands beach surf dog family dunes' },
    { title: 'Westward Ho! Beach',    url: 'westward-ho-beach.html',     emoji: '🏖️', category: 'Beaches', area: 'north', tags: 'westward ho beach pebble dog' },
    { title: 'Instow Beach',          url: 'instow-beach.html',          emoji: '🏖️', category: 'Beaches', area: 'north', tags: 'instow beach estuary dog sand' },
    { title: 'Hartland Quay Beach',   url: 'hartland-quay-beach.html',   emoji: '🌊', category: 'Beaches', area: 'north', tags: 'hartland quay dramatic cliff rock pool' },
    { title: 'Putsborough Sands',     url: 'putsborough-sands.html',     emoji: '🏖️', category: 'Beaches', area: 'north', tags: 'putsborough sands beach quiet family' },
    { title: 'Barricane Beach',       url: 'barricane-beach.html',       emoji: '🐚', category: 'Beaches', area: 'north', tags: 'barricane beach shells exotic cove woolacombe' },
    { title: 'Lynmouth Beach',        url: 'lynmouth-beach.html',        emoji: '🌊', category: 'Beaches', area: 'north', tags: 'lynmouth beach pebble exmoor village' },
    { title: 'Tunnels Beaches Ilfracombe', url: 'tunnels-beaches-ilfracombe.html', emoji: '🏖️', category: 'Beaches', area: 'north', tags: 'tunnels beaches ilfracombe tidal pool swim' },
    { title: 'Combe Martin Beach',   url: 'combe-martin-beach.html',    emoji: '🏖️', category: 'Beaches', area: 'north', tags: 'combe martin beach village north devon cove' },
    { title: 'Hele Bay Beach',       url: 'hele-bay-beach.html',        emoji: '🏖️', category: 'Beaches', area: 'north', tags: 'hele bay beach ilfracombe quiet cove' },
    { title: 'Lee Bay Beach',        url: 'lee-bay-beach.html',         emoji: '🌊', category: 'Beaches', area: 'north', tags: 'lee bay beach north devon quiet rocky' },

    /* ---- Individual beach pages — East Devon ---- */
    { title: 'Exmouth Beach',         url: 'exmouth-beach.html',         emoji: '🏖️', category: 'Beaches', area: 'east', tags: 'exmouth beach sand family water sports' },
    { title: 'Budleigh Salterton Beach', url: 'budleigh-salterton-beach.html', emoji: '🌊', category: 'Beaches', area: 'east', tags: 'budleigh salterton pebble quiet dog' },
    { title: 'Seaton Beach',          url: 'seaton-beach.html',          emoji: '🏖️', category: 'Beaches', area: 'east', tags: 'seaton beach pebble jurassic coast' },
    { title: 'Beer Beach Devon',      url: 'beer-beach-devon.html',      emoji: '⛵', category: 'Beaches', area: 'east', tags: 'beer beach fishing village cove jurassic' },
    { title: 'Branscombe Beach',      url: 'branscombe-beach.html',      emoji: '🌊', category: 'Beaches', area: 'east', tags: 'branscombe beach pebble cove jurassic coast quiet' },
    { title: 'Sidmouth Beach',        url: 'sidmouth-beach.html',        emoji: '🏖️', category: 'Beaches', area: 'east', tags: 'sidmouth beach regency town red cliffs' },
    { title: 'Ladram Bay Beach',      url: 'ladram-bay-beach.html',      emoji: '🏕️', category: 'Beaches', area: 'east', tags: 'ladram bay beach red rocks cove quiet' },

    /* ---- Individual beach pages — South Devon ---- */
    { title: 'Blackpool Sands Devon', url: 'blackpool-sands-devon.html', emoji: '🏖️', category: 'Beaches', area: 'south', tags: 'blackpool sands beach pine trees family swim' },
    { title: 'Bantham Beach',         url: 'bantham-beach.html',         emoji: '🏄', category: 'Beaches', area: 'south', tags: 'bantham beach surf estuary dog family' },
    { title: 'Bigbury on Sea',        url: 'bigbury-on-sea.html',        emoji: '🌊', category: 'Beaches', area: 'south', tags: 'bigbury on sea beach burgh island surf dog' },
    { title: 'Burgh Island Beach',    url: 'burgh-island-beach.html',    emoji: '🏝️', category: 'Beaches', area: 'south', tags: 'burgh island beach tidal island art deco dog' },
    { title: 'Paignton Beach',        url: 'paignton-beach.html',        emoji: '🏖️', category: 'Beaches', area: 'south', tags: 'paignton beach family sand torbay' },
    { title: 'Goodrington Sands',     url: 'goodrington-sands.html',     emoji: '🏖️', category: 'Beaches', area: 'south', tags: 'goodrington sands beach family torbay water park' },
    { title: 'Teignmouth Beach',      url: 'teignmouth-beach.html',      emoji: '🏖️', category: 'Beaches', area: 'south', tags: 'teignmouth beach family estuary pier' },
    { title: 'Dawlish Warren Beach',  url: 'dawlish-warren.html',        emoji: '🦆', category: 'Beaches', area: 'south', tags: 'dawlish warren beach nature reserve dog' },
    { title: 'Meadfoot Beach',        url: 'meadfoot-beach.html',        emoji: '🌊', category: 'Beaches', area: 'south', tags: 'meadfoot beach torquay quiet swim' },
    { title: 'Babbacombe Beach',      url: 'babbacombe-beach.html',      emoji: '⛵', category: 'Beaches', area: 'south', tags: 'babbacombe beach cliff railway torquay cove' },
    { title: 'Hope Cove Beach',       url: 'hope-cove-beach.html',       emoji: '⛵', category: 'Beaches', area: 'south', tags: 'hope cove beach village quiet dog swim' },
    { title: 'Slapton Sands',         url: 'slapton-sands.html',         emoji: '🏖️', category: 'Beaches', area: 'south', tags: 'slapton sands beach lagoon nature reserve dog' },
    { title: 'Torcross Beach',        url: 'torcross-beach.html',        emoji: '🌊', category: 'Beaches', area: 'south', tags: 'torcross beach village slapton line dog' },
    { title: 'South Milton Sands',    url: 'south-milton-sands.html',    emoji: '🏖️', category: 'Beaches', area: 'south', tags: 'south milton sands beach surf dog thurlestone' },
    { title: 'Thurlestone Beach',     url: 'thurlestone-beach.html',     emoji: '🌊', category: 'Beaches', area: 'south', tags: 'thurlestone beach rock arch surf dog' },
    { title: 'Broadsands Beach',      url: 'broadsands-beach.html',      emoji: '🏖️', category: 'Beaches', area: 'south', tags: 'broadsands beach family quiet torbay paignton' },
    { title: 'Beesands Beach',       url: 'beesands-beach.html',        emoji: '⛵', category: 'Beaches', area: 'south', tags: 'beesands beach fishing village south hams quiet' },

    /* ---- Individual walk pages — North Devon ---- */
    { title: 'Baggy Point Walk',               url: 'baggy-point-walk.html',               emoji: '🥾', category: 'Walks', area: 'north',    tags: 'baggy point walk croyde coast circular' },
    { title: 'Morte Point Walk',               url: 'morte-point-walk.html',               emoji: '🥾', category: 'Walks', area: 'north',    tags: 'morte point walk woolacombe dramatic coast' },
    { title: 'Valley of Rocks Walk',           url: 'valley-of-rocks-walk.html',           emoji: '🥾', category: 'Walks', area: 'north',    tags: 'valley of rocks walk lynton exmoor goats' },
    { title: 'Hartland Point to Clovelly Walk',url: 'hartland-point-to-clovelly-walk.html',emoji: '🥾', category: 'Walks', area: 'north',    tags: 'hartland point clovelly walk coast path dramatic' },
    { title: 'Watersmeet Walk',            url: 'watersmeet-walk.html',            emoji: '🥾', category: 'Walks', area: 'north',    tags: 'watersmeet walk exmoor lynmouth gorge river' },

    /* ---- Individual walk pages — Dartmoor ---- */
    { title: 'Dartmeet Walk Dartmoor',         url: 'dartmeet-walk-dartmoor.html',         emoji: '🥾', category: 'Walks', area: 'dartmoor', tags: 'dartmeet walk dartmoor river clapper bridge' },
    { title: 'Haytor Walk Dartmoor',           url: 'haytor-walk-dartmoor.html',           emoji: '🥾', category: 'Walks', area: 'dartmoor', tags: 'haytor walk dartmoor granite tor views' },
    { title: 'Hound Tor Walk Dartmoor',        url: 'hound-tor-walk-dartmoor.html',        emoji: '🥾', category: 'Walks', area: 'dartmoor', tags: 'hound tor walk dartmoor medieval village' },
    { title: 'Grimspound Walk Dartmoor',       url: 'grimspound-walk-dartmoor.html',       emoji: '🥾', category: 'Walks', area: 'dartmoor', tags: 'grimspound walk dartmoor bronze age village' },
    { title: 'Yes Tor High Willhays Walk',    url: 'yes-tor-high-willhays-walk.html',    emoji: '🥾', category: 'Walks', area: 'dartmoor', tags: 'yes tor high willhays walk dartmoor highest point' },
    { title: 'Postbridge Walk Dartmoor',       url: 'postbridge-walk-dartmoor.html',       emoji: '🥾', category: 'Walks', area: 'dartmoor', tags: 'postbridge walk dartmoor clapper bridge river' },
    { title: 'Burrator Reservoir Walk',        url: 'burrator-reservoir-walk.html',        emoji: '🥾', category: 'Walks', area: 'dartmoor', tags: 'burrator reservoir walk dartmoor woodland lake' },

    /* ---- Individual walk pages — South Devon ---- */
    { title: 'Lydford Gorge Walk',             url: 'lydford-gorge-walk.html',             emoji: '🥾', category: 'Walks', area: 'south',    tags: 'lydford gorge walk waterfall devon NT' },
    { title: 'Prawle Point Walk',              url: 'prawle-point-walk.html',              emoji: '🥾', category: 'Walks', area: 'south',    tags: 'prawle point walk southernmost devon coastal' },
    { title: 'Salcombe to Hope Cove Walk',     url: 'salcombe-to-hope-cove-walk.html',     emoji: '🥾', category: 'Walks', area: 'south',    tags: 'salcombe hope cove walk coastal path south hams' },
    { title: 'Start Point Walk',               url: 'start-point-walk.html',               emoji: '🥾', category: 'Walks', area: 'south',    tags: 'start point walk lighthouse coast south devon' },

    /* ---- Individual walk pages — East Devon / other ---- */
    { title: 'Beer Head Walk Jurassic Coast',  url: 'beer-head-walk-jurassic-coast.html',  emoji: '🥾', category: 'Walks', area: 'east',     tags: 'beer head walk jurassic coast chalk cliffs' },
    { title: 'Exe Estuary Walk',               url: 'exe-estuary-walk.html',               emoji: '🥾', category: 'Walks', area: 'east',     tags: 'exe estuary walk exmouth dawlish birds waders' },
    { title: 'Golitha Falls Walk',             url: 'golitha-falls-walk.html',             emoji: '🥾', category: 'Walks', area: 'all',      tags: 'golitha falls walk cornwall bodmin woodland waterfall' },
    { title: 'South West Coast Path Devon',    url: 'south-west-coast-path-devon.html',    emoji: '🥾', category: 'Walks', area: 'all',      tags: 'south west coast path devon walking route' },

    /* ---- Location guide pages ---- */
    { title: 'Budleigh Salterton Guide',       url: 'budleigh-salterton.html',             emoji: '🌊', category: 'Guide', area: 'east',     tags: 'budleigh salterton town guide pebble beach east devon' },
    { title: 'Ladram Bay Guide',               url: 'ladram-bay.html',                     emoji: '🏕️', category: 'Guide', area: 'east',     tags: 'ladram bay guide red rocks holiday park east devon' },
    { title: 'Hope Cove Devon Guide',          url: 'hope-cove-devon.html',                emoji: '⛵', category: 'Guide', area: 'south',    tags: 'hope cove devon village guide fishing quiet beach' }
  ];

  /* ------------------------------------------------------------------ */
  /* 2. INJECT CSS                                                        */
  /* ------------------------------------------------------------------ */
  var css = [
    /* Search button in nav */
    '.wd-search-btn{background:none;border:none;cursor:pointer;padding:0.3rem 0.5rem;',
    'color:var(--ocean,#1a4a5c);display:flex;align-items:center;border-radius:4px;',
    'transition:color 0.15s;}',
    '.wd-search-btn:hover{color:var(--teal,#2d7d8a);}',
    /* Overlay backdrop */
    '.wd-search-overlay{position:fixed;inset:0;background:rgba(28,43,46,0.72);',
    'z-index:9000;display:none;align-items:flex-start;justify-content:center;',
    'padding-top:90px;padding-left:1rem;padding-right:1rem;box-sizing:border-box;}',
    '.wd-search-overlay.wd-open{display:flex;}',
    /* Modal box */
    '.wd-search-modal{background:#fff;border-radius:10px;width:100%;max-width:640px;',
    'padding:1.5rem;box-shadow:0 20px 60px rgba(0,0,0,0.35);',
    'max-height:calc(100vh - 120px);display:flex;flex-direction:column;}',
    /* Header row */
    '.wd-search-header{display:flex;justify-content:space-between;align-items:center;',
    'margin-bottom:1rem;}',
    '.wd-search-title{font-size:0.95rem;font-weight:700;color:var(--ocean,#1a4a5c);}',
    '.wd-search-x{background:none;border:none;cursor:pointer;font-size:1.25rem;',
    'color:var(--slate,#3d4f52);padding:0.1rem 0.4rem;border-radius:3px;',
    'line-height:1;transition:background 0.15s;}',
    '.wd-search-x:hover{background:var(--foam,#e8f4f0);color:var(--teal,#2d7d8a);}',
    /* Text input */
    '.wd-search-input{width:100%;font-size:1.05rem;padding:0.7rem 1rem;',
    'border:2px solid var(--teal,#2d7d8a);border-radius:6px;outline:none;',
    'font-family:inherit;box-sizing:border-box;}',
    /* Results list */
    '.wd-search-results{margin-top:0.9rem;overflow-y:auto;flex:1;}',
    '.wd-search-result{display:flex;align-items:center;gap:0.6rem;padding:0.6rem 0.5rem;',
    'border-bottom:1px solid #eef1f1;text-decoration:none;border-radius:4px;',
    'color:var(--ocean,#1a4a5c);transition:background 0.12s;}',
    '.wd-search-result:last-child{border-bottom:none;}',
    '.wd-search-result:hover{background:var(--foam,#e8f4f0);}',
    '.wd-result-emoji{font-size:1.2rem;flex-shrink:0;}',
    '.wd-result-body{flex:1;min-width:0;}',
    '.wd-result-title{font-weight:600;font-size:0.93rem;white-space:nowrap;',
    'overflow:hidden;text-overflow:ellipsis;}',
    '.wd-result-meta{font-size:0.75rem;color:var(--slate,#3d4f52);margin-top:1px;}',
    /* Empty / hint states */
    '.wd-search-hint{padding:0.75rem 0.5rem;font-size:0.88rem;color:var(--slate,#3d4f52);}',
    /* Mobile tweak */
    '@media(max-width:500px){.wd-search-modal{padding:1rem;}',
    '.wd-search-input{font-size:1rem;}}'
  ].join('');

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ------------------------------------------------------------------ */
  /* 3. INJECT OVERLAY DOM                                                */
  /* ------------------------------------------------------------------ */
  var overlay = document.createElement('div');
  overlay.id = 'wd-search-overlay';
  overlay.className = 'wd-search-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Search WildDevon');
  overlay.innerHTML = [
    '<div class="wd-search-modal" id="wd-search-modal">',
      '<div class="wd-search-header">',
        '<span class="wd-search-title">Search WildDevon</span>',
        '<button class="wd-search-x" id="wd-search-x" aria-label="Close search">✕</button>',
      '</div>',
      '<input class="wd-search-input" id="wd-search-input" type="search"',
        ' placeholder="Try \'Croyde\', \'dog friendly\', \'wild swim\'…"',
        ' autocomplete="off" spellcheck="false">',
      '<div class="wd-search-results" id="wd-search-results">',
        '<p class="wd-search-hint">Start typing to search beaches, walks, places to stay and more.</p>',
      '</div>',
    '</div>'
  ].join('');
  document.body.appendChild(overlay);

  /* ------------------------------------------------------------------ */
  /* 4. SEARCH LOGIC                                                      */
  /* ------------------------------------------------------------------ */
  function scoreEntry(entry, q) {
    var s = 0;
    var tl = entry.title.toLowerCase();
    var tgs = entry.tags.toLowerCase();
    if (tl.indexOf(q) > -1) { s += 3; if (tl === q) s += 2; }
    if (tgs.indexOf(q) > -1) s += 1;
    if (entry.area.indexOf(q) > -1) s += 1;
    if (entry.category.toLowerCase().indexOf(q) > -1) s += 1;
    return s;
  }

  function renderResults(query) {
    var container = document.getElementById('wd-search-results');
    var q = query.trim().toLowerCase();
    if (!q) {
      container.innerHTML = '<p class="wd-search-hint">Start typing to search beaches, walks, places to stay and more.</p>';
      return;
    }
    var scored = [];
    for (var i = 0; i < INDEX.length; i++) {
      var s = scoreEntry(INDEX[i], q);
      if (s > 0) scored.push({ entry: INDEX[i], score: s });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    var top = scored.slice(0, 12);
    if (!top.length) {
      container.innerHTML = '<p class="wd-search-hint">No results for <strong>' + escHtml(query) + '</strong>. Try a beach name, activity, or area.</p>';
      return;
    }
    var html = '';
    for (var j = 0; j < top.length; j++) {
      var e = top[j].entry;
      html += '<a class="wd-search-result" href="' + e.url + '">' +
        '<span class="wd-result-emoji">' + e.emoji + '</span>' +
        '<span class="wd-result-body">' +
          '<div class="wd-result-title">' + escHtml(e.title) + '</div>' +
          '<div class="wd-result-meta">' + escHtml(e.category) +
            (e.area !== 'all' ? ' · ' + capitalise(e.area) + ' Devon' : '') +
          '</div>' +
        '</span>' +
        '</a>';
    }
    container.innerHTML = html;
  }

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function capitalise(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  /* ------------------------------------------------------------------ */
  /* 5. OPEN / CLOSE                                                      */
  /* ------------------------------------------------------------------ */
  function openSearch() {
    overlay.classList.add('wd-open');
    var inp = document.getElementById('wd-search-input');
    if (inp) { inp.value = ''; inp.focus(); }
    renderResults('');
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    overlay.classList.remove('wd-open');
    document.body.style.overflow = '';
  }

  /* Close button */
  document.getElementById('wd-search-x').addEventListener('click', closeSearch);

  /* Click outside modal */
  overlay.addEventListener('click', function (e) {
    var modal = document.getElementById('wd-search-modal');
    if (modal && !modal.contains(e.target)) closeSearch();
  });

  /* Escape key */
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Escape' || e.keyCode === 27) && overlay.classList.contains('wd-open')) {
      closeSearch();
    }
  });

  /* Live search */
  var debounceTimer;
  document.getElementById('wd-search-input').addEventListener('input', function () {
    clearTimeout(debounceTimer);
    var val = this.value;
    debounceTimer = setTimeout(function () { renderResults(val); }, 120);
  });

  /* ------------------------------------------------------------------ */
  /* 6. WIRE ALL .wd-search-btn BUTTONS                                  */
  /* ------------------------------------------------------------------ */
  function wireButtons() {
    var btns = document.querySelectorAll('.wd-search-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', openSearch);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireButtons);
  } else {
    wireButtons();
  }

})();
