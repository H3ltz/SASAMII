const STORAGE_KEY = "sasamii_v1";

const CATEGORY_LABELS = {
  keel: "Kõne ja keel",
  motoorika: "Motoorika ja liikumine",
  malu: "Mälu",
  loovus: "Loovus",
  loogika: "Loogika"
};

// Vanus on salvestatud kuudes (0–48 kuud = 0–4 aastat)
const ACTIVITIES = [
  {
    id: "helide-kuulamine",
    title: "Helide kuulamine silmad kinni",
    category: "keel",
    minAgeMonths: 12,
    maxAgeMonths: 30,
    durationMin: 5,
    materialGroup: "kodused asjad",
    materials: ["lusikas", "kruus", "kortsutatav paber"],
    summary: "Laps kuulab erinevaid igapäevaseid helisid ja püüab ära arvata või nimetada, mis neid tekitas.",
    steps: [
      "Vali 3–4 tuttavat kodust eset, millel on selge heli.",
      "Paluge lapsel silmad kinni panna või pöörata selg.",
      "Tee ühe eseme abil heli (nt koputa lusikaga kruusi) ja küsi: „Mis häält sa kuulsid?“",
      "Kiida iga katset ja nimeta sõnu koos selgelt."
    ],
    developmentNote: "Arendab kuulmistähelepanu, sõnavara ja põhjuse-tagajärje seostamist."
  },
  {
    id: "pildikaartide-jutustus",
    title: "Kolme asja jutuke",
    category: "keel",
    minAgeMonths: 24,
    maxAgeMonths: 48,
    durationMin: 10,
    materialGroup: "kodused asjad",
    materials: ["3 väikest mänguasja või eset"],
    summary: "Võtke kolm juhuslikku eset ja mõelge nende ümber koos lühike ja lõbus lugu.",
    steps: [
      "Valige koos kolm eset, näiteks auto, kamm ja käbi.",
      "Alusta lausega: „Ühel päeval läks väike auto jalutama...“",
      "Lase lapsel lisada, mis järgmiseks juhtus või mida teised tegelased ütlesid.",
      "Lõpetage lugu rahulikult ja naeratusega."
    ],
    developmentNote: "Toetab jutustamisoskust, lausete moodustamist ja fantaasiat."
  },
  {
    id: "padjarada",
    title: "Padjarada ja üle astumine",
    category: "motoorika",
    minAgeMonths: 12,
    maxAgeMonths: 36,
    durationMin: 10,
    materialGroup: "padjad ja tekid",
    materials: ["diivanipadjad", "tekid"],
    summary: "Ehitage elutuppa madal takistusrada, kus laps saab astuda üle, mööda või ronida.",
    steps: [
      "Aseta padjad põrandale nii, et vahele jääb piisavalt ruumi astumiseks.",
      "Näita ette, kuidas aeglaselt tasakaalu hoides üle liikuda.",
      "Muuda rada vastavalt lapse oskustele – väiksematele madalamad ja tihedamad vahed.",
      "Hoia tempo rahulik ja julgustav."
    ],
    developmentNote: "Arendab tasakaalu, kehatunnetust ja jämemotoorikat."
  },
  {
    id: "peidus-kausis",
    title: "Mis on kausis peidus?",
    category: "malu",
    minAgeMonths: 15,
    maxAgeMonths: 36,
    durationMin: 10,
    materialGroup: "kodused asjad",
    materials: ["väike kauss", "rätik", "2–3 tuttavat asja"],
    summary: "Klassikaline mälu- ja tähelepanumäng, mis sobib hästi ka lühikeseks pausiks.",
    steps: [
      "Näita lapsele kahte või kolme tuttavat asja ja nimeta need koos.",
      "Kata esemed rätikuga või pane üks neist peitu.",
      "Küsi: „Mis asi siin peidus on?“ või „Mis muutus?“",
      "Tõsta rätik ära ja rõõmustage koos."
    ],
    developmentNote: "Treenib töömälu, keskendumist ja visuaalset äratundmist."
  },
  {
    id: "templid-kasnaga",
    title: "Trükkimine käsna või paberiga",
    category: "loovus",
    minAgeMonths: 24,
    maxAgeMonths: 48,
    durationMin: 15,
    materialGroup: "paber ja pliiatsid",
    materials: ["paber", "värvid või pliiatsid", "nõudepesukäsn"],
    summary: "Loov tegevus, kus saab teha mustreid ja rääkida värvidest ning kujunditest.",
    steps: [
      "Kata laud ja pane valmis paber ning veidi värvi või pliiatsid.",
      "Lõika käsnast väike tükk, mida on mugav kätte võtta.",
      "Tupsutage koos paberile jälgi ja arutage, milliseid kujundeid need meenutavad.",
      "Pange valmis töö kuivama ja kiitke pingutust."
    ],
    developmentNote: "Arendab käelist osavust, loovust ja värvide nimetamist."
  },
  {
    id: "suur-ja-vaike",
    title: "Suure ja väikese sorteerimine",
    category: "loogika",
    minAgeMonths: 24,
    maxAgeMonths: 48,
    durationMin: 10,
    materialGroup: "kodused asjad",
    materials: ["2 karpi või kaussi", "eri suuruses sokid või klotsid"],
    summary: "Laps rühmitab esemeid suuruse või paari järgi kahte eraldi anumasse.",
    steps: [
      "Pane lauale kaks eraldi karpi või kaussi.",
      "Näita ühte suurt ja ühte väikest eset ning võrrelge neid.",
      "Paluge lapsel sorteerida ülejäänud asjad õigesse rühma.",
      "Lugege koos, mitu asja kummaski kastis on."
    ],
    developmentNote: "Arendab loogilist mõtlemist, klassifitseerimist ja varajast matemaatilist taipu."
  },
  {
    id: "lounavari-ja-vari",
    title: "Varjude püüdmine taskulambi või valgusega",
    category: "loogika",
    minAgeMonths: 18,
    maxAgeMonths: 48,
    durationMin: 5,
    materialGroup: "kodused asjad",
    materials: ["taskulamp või aknast paistev valgus", "mänguasi"],
    summary: "Kiire 5-minutiline avastushetk, kuidas valgus ja vari seinal liiguvad.",
    steps: [
      "Suuna valgus heledale seinale või paberile.",
      "Hoia mänguasja või oma käsi valguse ja seina vahel.",
      "Liiguta eset lähemale ja kaugemale ning vaadake, kuidas vari muutub.",
      "Katseta ka eri asendeid ja küsi, miks vari suuremaks läheb."
    ],
    developmentNote: "Toetab vaatlusoskust, uudishimu ja põhjuse-tagajärje mõistmist."
  },
  {
    id: "loune-vesi-valamine",
    title: "Vee valamine ühest topsist teise",
    category: "motoorika",
    minAgeMonths: 18,
    maxAgeMonths: 36,
    durationMin: 10,
    materialGroup: "veega mäng",
    materials: ["2 plasttopsi või kannu", "rätik", "leige vesi"],
    summary: "Rahulik ja keskenduma panev tegevus, mis arendab käte koordinatsiooni.",
    steps: [
      "Laota põrandale või lauale rätik, et tilgad ei teeks pahandust.",
      "Täida üks tops osaliselt veega.",
      "Näita aeglaselt, kuidas valada vesi teise topsi ilma maha ajamata.",
      "Kui vett läheb üle, pühkige see koos rätikuga ära."
    ],
    developmentNote: "Arendab peenmotoorikat, silma-käe koostööd ja kannatlikkust."
  },
  {
    id: "oueretk-aarded",
    title: "Väike aardejaht õues või hoovis",
    category: "motoorika",
    minAgeMonths: 12,
    maxAgeMonths: 48,
    durationMin: 15,
    materialGroup: "õues / loodus",
    materials: ["väike kott või korv"],
    summary: "Jalutuskäik või hoovimäng, kus otsitakse kindlaid looduslikke leide.",
    steps: [
      "Lepige kokku 2–3 lihtsat asja, mida otsida (nt langenud leht, sile kivi, oks).",
      "Jalutage rahulikus tempos ja vaadelge ümbrust koos.",
      "Pange leitud asjad korvi ja nimetage need üle.",
      "Jäta ohtlikud või määrdunud esemed puutumata."
    ],
    developmentNote: "Arendab liikumisaktiivsust, meeli ja looduse märkamist."
  },
  {
    id: "laul-ja-liigutus",
    title: "Salmilaul liigutustega beebile ja väikelapsele",
    category: "keel",
    minAgeMonths: 0,
    maxAgeMonths: 24,
    durationMin: 5,
    materialGroup: "kodused asjad",
    materials: ["vahendid pole vajalikud"],
    summary: "Lähedust ja rütmitaju loov laulu- ja silmsidemäng kõige pisematele.",
    steps: [
      "Istu lapsega vastamisi või hoia teda süles nii, et näete teineteist.",
      "Laula aeglaselt ja selgelt tuttavat lastelaulu või salmi.",
      "Tee rütmi järgi õrnu liigutusi (nt plaksuta, puuduta sõrmi või kiiguta).",
      "Jälgi lapse reaktsiooni ja korda seda, mis talle rõõmu tegi."
    ],
    developmentNote: "Toetab kiindumussuhet, rütmitaju ja keelelise arengu alustalasid."
  },
  {
    id: "mida-me-tana-tegi",
    title: "Päeva meenutamine enne und",
    category: "malu",
    minAgeMonths: 24,
    maxAgeMonths: 48,
    durationMin: 5,
    materialGroup: "kodused asjad",
    materials: ["vahendid pole vajalikud"],
    summary: "Lühike ja rahustav õhtune või uinakueelne vestlus päeva sündmustest.",
    steps: [
      "Heitke mugavalt ja võtke paar minutit vaikust.",
      "Küsi üks lihtne küsimus, nt: „Mis oli täna kõige naljakam hetk?“",
      "Toeta last meenutamisel ja kinnita tema tundeid.",
      "Lõpeta rahuliku sooviga homseks."
    ],
    developmentNote: "Arendab sündmuste meenutamist, ajataju ja emotsionaalset turvatunnet."
  },
  {
    id: "joonista-tunne",
    title: "Kiire kritseldus: rõõmus, kiire või rahulik",
    category: "loovus",
    minAgeMonths: 24,
    maxAgeMonths: 48,
    durationMin: 15,
    materialGroup: "paber ja pliiatsid",
    materials: ["paber", "rasvakriidid või viltpliiatsid"],
    summary: "Vaba joonistamine, kus jooned muutuvad vastavalt meeleolule või liikumisele.",
    steps: [
      "Anna lapsele paber ja paar mugavat pliiatsit või kriiti.",
      "Katsetage, kuidas näeb välja „kiire joon“ ja kuidas „rahulik looklev joon“.",
      "Lase lapsel ise valida värv ja teema.",
      "Kuula, mida laps oma joonistuse kohta jutustab."
    ],
    developmentNote: "Arendab eneseväljendust, käelihaste kontrolli ja loovat mõtlemist."
  }
];

function createDefaultState() {
  return {
    profile: {
      name: "",
      ageMonths: null,
      unit: "years"
    },
    filters: {
      search: "",
      category: "all",
      ageGroup: "all",
      duration: "all",
      material: "all",
      hideRecent: true
    },
    activeView: "explore",
    favorites: [],
    completedHistory: [],
    recentIds: [],
    lastQuickMinutes: null,
    aiDrafts: []
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultState();
    const parsed = JSON.parse(raw);
    const fallback = createDefaultState();
    return {
      ...fallback,
      ...parsed,
      profile: { ...fallback.profile, ...(parsed.profile || {}) },
      filters: { ...fallback.filters, ...(parsed.filters || {}) }
    };
  } catch (err) {
    console.warn("Ei saanud localStorage andmeid lugeda:", err);
    return createDefaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn("Ei saanud localStorage andmeid salvestada:", err);
  }
}

let state = loadState();
let modalActivityId = null;

// DOM viited
const dom = {
  navExploreCount: document.getElementById("navExploreCount"),
  navFavoritesCount: document.getElementById("navFavoritesCount"),
  navHistoryCount: document.getElementById("navHistoryCount"),
  navButtons: Array.from(document.querySelectorAll(".nav-pill[data-view]")),
  sections: {
    explore: document.getElementById("sectionExplore"),
    favorites: document.getElementById("sectionFavorites"),
    history: document.getElementById("sectionHistory"),
    "ai-soon": document.getElementById("sectionAiSoon")
  },
  profileForm: document.getElementById("profileForm"),
  childName: document.getElementById("childName"),
  childAgeValue: document.getElementById("childAgeValue"),
  childAgeUnit: document.getElementById("childAgeUnit"),
  clearProfileBtn: document.getElementById("clearProfileBtn"),
  profileSummary: document.getElementById("profileSummary"),
  profileBadge: document.getElementById("profileBadge"),
  quickTimeButtons: Array.from(document.querySelectorAll(".time-btn[data-quick-time]")),
  quickPickResult: document.getElementById("quickPickResult"),
  searchInput: document.getElementById("searchInput"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  categoryChips: Array.from(document.querySelectorAll("#categoryChips .chip")),
  ageFilter: document.getElementById("ageFilter"),
  durationFilter: document.getElementById("durationFilter"),
  materialFilter: document.getElementById("materialFilter"),
  hideRecentToggle: document.getElementById("hideRecentToggle"),
  resultsCount: document.getElementById("resultsCount"),
  activitiesGrid: document.getElementById("activitiesGrid"),
  favoritesGrid: document.getElementById("favoritesGrid"),
  historyList: document.getElementById("historyList"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  aiDraftForm: document.getElementById("aiDraftForm"),
  aiMaterialsInput: document.getElementById("aiMaterialsInput"),
  aiMoodInput: document.getElementById("aiMoodInput"),
  aiDraftFeedback: document.getElementById("aiDraftFeedback"),
  modal: document.getElementById("activityModal"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  modalCategory: document.getElementById("modalCategory"),
  modalTitle: document.getElementById("modalTitle"),
  modalMeta: document.getElementById("modalMeta"),
  modalSummary: document.getElementById("modalSummary"),
  modalMaterials: document.getElementById("modalMaterials"),
  modalSteps: document.getElementById("modalSteps"),
  modalDevNote: document.getElementById("modalDevNote"),
  modalFavoriteBtn: document.getElementById("modalFavoriteBtn"),
  modalCompleteBtn: document.getElementById("modalCompleteBtn")
};

function formatAgeRange(minMonths, maxMonths) {
  const minY = Math.floor(minMonths / 12);
  const maxY = Math.ceil(maxMonths / 12);
  if (minMonths === 0 && maxMonths <= 24) {
    return `0–${maxY} a`;
  }
  return `${minY}–${maxY} a`;
}

function formatChildAge(months) {
  if (months === null || months === undefined || Number.isNaN(months)) return "";
  if (months < 12) return `${months} kuud`;
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  if (remMonths === 0) return `${years} ${years === 1 ? "aasta" : "aastat"}`;
  return `${years} a ${remMonths} k`;
}

function matchesAgeGroup(activity, group) {
  if (!group || group === "all") return true;
  const ranges = {
    "0-1": [0, 12],
    "1-2": [12, 24],
    "2-3": [24, 36],
    "3-4": [36, 48]
  };
  const range = ranges[group];
  if (!range) return true;
  const [gMin, gMax] = range;
  return activity.minAgeMonths < gMax && activity.maxAgeMonths > gMin;
}

function matchesProfileAge(activity) {
  const age = state.profile.ageMonths;
  if (age === null || age === undefined) return true;
  return age >= activity.minAgeMonths && age <= activity.maxAgeMonths;
}

function getFilteredActivities() {
  const query = state.filters.search.trim().toLowerCase();

  return ACTIVITIES.filter((act) => {
    if (state.filters.category !== "all" && act.category !== state.filters.category) {
      return false;
    }
    if (!matchesAgeGroup(act, state.filters.ageGroup)) {
      return false;
    }
    if (state.filters.duration !== "all") {
      const maxDur = Number(state.filters.duration);
      if (act.durationMin > maxDur) return false;
    }
    if (state.filters.material !== "all" && act.materialGroup !== state.filters.material) {
      return false;
    }
    if (state.filters.hideRecent && state.recentIds.includes(act.id)) {
      return false;
    }
    if (query) {
      const haystack = [
        act.title,
        act.summary,
        CATEGORY_LABELS[act.category] || "",
        ...act.materials,
        ...act.steps
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}

function pickQuickActivity(minutes) {
  const durNum = Number(minutes);
  state.lastQuickMinutes = durNum;

  const byTime = ACTIVITIES.filter((a) => a.durationMin <= durNum);
  const byAgeAndTime = byTime.filter((a) => matchesProfileAge(a));
  const poolBase = byAgeAndTime.length > 0 ? byAgeAndTime : byTime;

  const nonRecent = poolBase.filter((a) => !state.recentIds.includes(a.id));
  const candidates = nonRecent.length > 0 ? nonRecent : poolBase;

  if (candidates.length === 0) {
    renderQuickPick(null, durNum);
    saveState();
    return;
  }

  const chosen = candidates[Math.floor(Math.random() * candidates.length)];
  renderQuickPick(chosen, durNum);
  saveState();
}

function renderQuickPick(activity, minutes) {
  dom.quickTimeButtons.forEach((btn) => {
    btn.classList.toggle("is-selected", Number(btn.dataset.quickTime) === Number(minutes));
  });

  if (!minutes) {
    dom.quickPickResult.innerHTML = `<span class="muted">Klõpsa 5, 10 või 15 min, et saada kiire soovitus.</span>`;
    return;
  }

  if (!activity) {
    dom.quickPickResult.innerHTML = `<span class="muted">Selle aja jaoks ei leitud hetkel sobivat tegevust.</span>`;
    return;
  }

  dom.quickPickResult.innerHTML = `
    <div class="quick-suggestion-row">
      <div>
        <div class="quick-suggestion-title">${escapeHtml(activity.title)}</div>
        <div class="quick-suggestion-meta">${CATEGORY_LABELS[activity.category]} • ${activity.durationMin} min • ${formatAgeRange(activity.minAgeMonths, activity.maxAgeMonths)}</div>
      </div>
      <button type="button" class="btn btn-primary btn-sm" data-open-modal="${activity.id}">Vaata juhiseid</button>
    </div>
  `;
}

function toggleFavorite(activityId) {
  const idx = state.favorites.indexOf(activityId);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
  } else {
    state.favorites.unshift(activityId);
  }
  saveState();
  renderAll();
}

function markCompleted(activityId) {
  const act = ACTIVITIES.find((a) => a.id === activityId);
  if (!act) return;

  const entry = {
    id: act.id,
    title: act.title,
    category: act.category,
    durationMin: act.durationMin,
    completedAt: new Date().toISOString()
  };

  state.completedHistory.unshift(entry);
  state.recentIds = [act.id, ...state.recentIds.filter((id) => id !== act.id)].slice(0, 4);
  saveState();
  renderAll();
}

function clearHistory() {
  state.completedHistory = [];
  state.recentIds = [];
  saveState();
  renderAll();
}

function renderProfileUI() {
  const { name, ageMonths, unit } = state.profile;
  dom.childName.value = name || "";

  if (ageMonths !== null && ageMonths !== undefined) {
    if (unit === "months") {
      dom.childAgeValue.value = ageMonths;
      dom.childAgeUnit.value = "months";
    } else {
      dom.childAgeValue.value = Math.round((ageMonths / 12) * 10) / 10;
      dom.childAgeUnit.value = "years";
    }
  } else {
    dom.childAgeValue.value = "";
    dom.childAgeUnit.value = unit || "years";
  }

  if (name || ageMonths !== null) {
    const labelName = name ? `<strong>${escapeHtml(name)}</strong>` : "Laps";
    const labelAge = ageMonths !== null ? ` (${formatChildAge(ageMonths)})` : "";
    dom.profileSummary.innerHTML = `Aktiivne profiil: ${labelName}${labelAge}. Soovitused arvestavad vanust.`;
    dom.profileBadge.textContent = ageMonths !== null ? formatChildAge(ageMonths) : "Profiil aktiivne";
  } else {
    dom.profileSummary.innerHTML = `Profiil pole veel lisatud – kuvame kõiki tegevusi vahemikus 0–4 aastat.`;
    dom.profileBadge.textContent = "0–4 a";
  }
}

function createActivityCardHTML(activity) {
  const isFav = state.favorites.includes(activity.id);
  const isRecent = state.recentIds.includes(activity.id);
  const ageMatch = matchesProfileAge(activity);

  return `
    <article class="activity-card">
      <div class="card-top-meta">
        <span class="cat-badge">${CATEGORY_LABELS[activity.category] || activity.category}</span>
        <span class="age-time-text">${formatAgeRange(activity.minAgeMonths, activity.maxAgeMonths)} • ${activity.durationMin} min</span>
      </div>
      <h3 class="activity-title">${escapeHtml(activity.title)}</h3>
      <p class="activity-summary">${escapeHtml(activity.summary)}</p>
      <div class="card-materials">
        <strong>Vahendid:</strong> ${escapeHtml(activity.materials.join(", "))}
        ${state.profile.ageMonths !== null && ageMatch ? ` • <span class="muted">Sobib vanusele</span>` : ""}
        ${isRecent ? ` • <span class="muted">Hiljuti tehtud</span>` : ""}
      </div>
      <div class="card-actions">
        <button type="button" class="btn btn-primary btn-sm" data-open-modal="${activity.id}">Ava juhised</button>
        <div style="display:flex;gap:0.35rem;">
          <button type="button" class="icon-action ${isFav ? "is-active" : ""}" data-toggle-fav="${activity.id}" title="Lemmik">
            ${isFav ? "♥ Lemmik" : "♡ Lemmik"}
          </button>
          <button type="button" class="icon-action" data-complete-act="${activity.id}" title="Märgi tehtuks">
            ✓ Tehtud
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderActivitiesGrid() {
  const filtered = getFilteredActivities();
  const total = ACTIVITIES.length;
  dom.resultsCount.textContent = `Leitud ${filtered.length} tegevust (kogus kokku ${total})`;

  if (filtered.length === 0) {
    dom.activitiesGrid.innerHTML = `
      <div class="empty-state">
        <p>Valitud filtritele vastavaid tegevusi ei leitud.</p>
        <p class="muted" style="margin-top:0.35rem;">Proovi muuta vanust, kestust, vahendeid või lülita välja „Väldi hiljuti tehtud tegevusi”.</p>
      </div>
    `;
    return;
  }

  dom.activitiesGrid.innerHTML = filtered.map(createActivityCardHTML).join("");
}

function renderFavoritesGrid() {
  const favActivities = state.favorites
    .map((id) => ACTIVITIES.find((a) => a.id === id))
    .filter(Boolean);

  if (favActivities.length === 0) {
    dom.favoritesGrid.innerHTML = `
      <div class="empty-state">
        <p>Sul pole veel salvestatud lemmiktegevusi.</p>
        <p class="muted" style="margin-top:0.35rem;">Klõpsa mõne tegevuse kaardil „♡ Lemmik”, et see siia salvestada.</p>
      </div>
    `;
    return;
  }

  dom.favoritesGrid.innerHTML = favActivities.map(createActivityCardHTML).join("");
}

function renderHistoryList() {
  if (state.completedHistory.length === 0) {
    dom.historyList.innerHTML = `
      <div class="empty-state">
        <p>Tehtud tegevuste ajalugu on veel tühi.</p>
        <p class="muted" style="margin-top:0.35rem;">Kui olete tegevuse koos lapsega läbi teinud, vajuta „✓ Tehtud”.</p>
      </div>
    `;
    return;
  }

  dom.historyList.innerHTML = state.completedHistory
    .map((item) => {
      const dateStr = item.completedAt
        ? new Date(item.completedAt).toLocaleString("et-EE", {
            dateStyle: "medium",
            timeStyle: "short"
          })
        : "";
      return `
        <div class="history-item">
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <div class="muted" style="font-size:0.82rem;">
              ${CATEGORY_LABELS[item.category] || item.category} • ${item.durationMin} min${dateStr ? ` • ${dateStr}` : ""}
            </div>
          </div>
          <button type="button" class="btn btn-ghost btn-sm" data-open-modal="${item.id}">Vaata uuesti</button>
        </div>
      `;
    })
    .join("");
}

function renderNavAndView() {
  dom.navExploreCount.textContent = ACTIVITIES.length;
  dom.navFavoritesCount.textContent = state.favorites.length;
  dom.navHistoryCount.textContent = state.completedHistory.length;

  dom.navButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.view === state.activeView);
  });

  Object.entries(dom.sections).forEach(([key, el]) => {
    if (!el) return;
    el.classList.toggle("is-hidden", key !== state.activeView);
  });
}

function openModal(activityId) {
  const act = ACTIVITIES.find((a) => a.id === activityId);
  if (!act) return;

  modalActivityId = activityId;
  dom.modalCategory.textContent = CATEGORY_LABELS[act.category] || act.category;
  dom.modalTitle.textContent = act.title;
  dom.modalMeta.innerHTML = `
    <span>Vanus: <strong>${formatAgeRange(act.minAgeMonths, act.maxAgeMonths)}</strong></span>
    <span>•</span>
    <span>Kestus: <strong>${act.durationMin} min</strong></span>
  `;
  dom.modalSummary.textContent = act.summary;
  dom.modalMaterials.innerHTML = act.materials.map((m) => `<li>${escapeHtml(m)}</li>`).join("");
  dom.modalSteps.innerHTML = act.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("");
  dom.modalDevNote.textContent = act.developmentNote;

  const isFav = state.favorites.includes(act.id);
  dom.modalFavoriteBtn.textContent = isFav ? "♥ Lemmikutes" : "♡ Lisa lemmikutesse";

  dom.modal.classList.remove("is-hidden");
}

function closeModal() {
  modalActivityId = null;
  dom.modal.classList.add("is-hidden");
}

function syncFiltersToUI() {
  dom.searchInput.value = state.filters.search;
  dom.ageFilter.value = state.filters.ageGroup;
  dom.durationFilter.value = state.filters.duration;
  dom.materialFilter.value = state.filters.material;
  dom.hideRecentToggle.checked = state.filters.hideRecent;

  dom.categoryChips.forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === state.filters.category);
  });
}

function renderAll() {
  renderNavAndView();
  renderProfileUI();
  syncFiltersToUI();
  renderActivitiesGrid();
  renderFavoritesGrid();
  renderHistoryList();
  if (state.lastQuickMinutes) {
    const matches = ACTIVITIES.filter((a) => a.durationMin <= state.lastQuickMinutes);
    renderQuickPick(matches[0] || null, state.lastQuickMinutes);
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// Sündmuste kuulajad
dom.navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.activeView = btn.dataset.view;
    saveState();
    renderNavAndView();
  });
});

dom.profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = dom.childName.value.trim();
  const rawAge = dom.childAgeValue.value.trim();
  const unit = dom.childAgeUnit.value;

  let ageMonths = null;
  if (rawAge !== "") {
    const num = Number(rawAge);
    if (!Number.isNaN(num) && num >= 0) {
      ageMonths = unit === "years" ? Math.min(48, Math.round(num * 12)) : Math.min(48, Math.round(num));
    }
  }

  state.profile = { name, ageMonths, unit };
  saveState();
  renderProfileUI();
  renderActivitiesGrid();
});

dom.clearProfileBtn.addEventListener("click", () => {
  state.profile = { name: "", ageMonths: null, unit: "years" };
  saveState();
  renderProfileUI();
  renderActivitiesGrid();
});

dom.quickTimeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    pickQuickActivity(Number(btn.dataset.quickTime));
  });
});

dom.searchInput.addEventListener("input", (e) => {
  state.filters.search = e.target.value;
  saveState();
  renderActivitiesGrid();
});

dom.categoryChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    state.filters.category = chip.dataset.category;
    saveState();
    syncFiltersToUI();
    renderActivitiesGrid();
  });
});

dom.ageFilter.addEventListener("change", (e) => {
  state.filters.ageGroup = e.target.value;
  saveState();
  renderActivitiesGrid();
});

dom.durationFilter.addEventListener("change", (e) => {
  state.filters.duration = e.target.value;
  saveState();
  renderActivitiesGrid();
});

dom.materialFilter.addEventListener("change", (e) => {
  state.filters.material = e.target.value;
  saveState();
  renderActivitiesGrid();
});

dom.hideRecentToggle.addEventListener("change", (e) => {
  state.filters.hideRecent = e.target.checked;
  saveState();
  renderActivitiesGrid();
});

dom.resetFiltersBtn.addEventListener("click", () => {
  state.filters = {
    search: "",
    category: "all",
    ageGroup: "all",
    duration: "all",
    material: "all",
    hideRecent: true
  };
  saveState();
  syncFiltersToUI();
  renderActivitiesGrid();
});

document.addEventListener("click", (e) => {
  const modalTrigger = e.target.closest("[data-open-modal]");
  if (modalTrigger) {
    openModal(modalTrigger.dataset.openModal);
    return;
  }

  const favTrigger = e.target.closest("[data-toggle-fav]");
  if (favTrigger) {
    toggleFavorite(favTrigger.dataset.toggleFav);
    return;
  }

  const completeTrigger = e.target.closest("[data-complete-act]");
  if (completeTrigger) {
    markCompleted(completeTrigger.dataset.completeAct);
  }
});

dom.closeModalBtn.addEventListener("click", closeModal);
dom.modal.addEventListener("click", (e) => {
  if (e.target === dom.modal) closeModal();
});

dom.modalFavoriteBtn.addEventListener("click", () => {
  if (!modalActivityId) return;
  toggleFavorite(modalActivityId);
  const isFav = state.favorites.includes(modalActivityId);
  dom.modalFavoriteBtn.textContent = isFav ? "♥ Lemmikutes" : "♡ Lisa lemmikutesse";
});

dom.modalCompleteBtn.addEventListener("click", () => {
  if (!modalActivityId) return;
  markCompleted(modalActivityId);
  closeModal();
});

dom.clearHistoryBtn.addEventListener("click", clearHistory);

dom.aiDraftForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const materials = dom.aiMaterialsInput.value.trim();
  const mood = dom.aiMoodInput.value.trim();
  if (!materials && !mood) {
    dom.aiDraftFeedback.textContent = "Lisa vähemalt üks märksõna vahendite või soovi kohta.";
    return;
  }
  state.aiDrafts.unshift({ materials, mood, savedAt: new Date().toISOString() });
  saveState();
  dom.aiMaterialsInput.value = "";
  dom.aiMoodInput.value = "";
  dom.aiDraftFeedback.textContent = "Mõte salvestatud brauserisse tulevase AI-ideegeneraatori jaoks!";
});

renderAll();
