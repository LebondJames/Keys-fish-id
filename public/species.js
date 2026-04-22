const SPECIES = [
  // ── GROUPER ──────────────────────────────────────────────────────────────
  {
    id:"gag_grouper", name:"Gag Grouper", scientific:"Mycteroperca microlepis",
    category:"grouper", status:"keep", minSize:24, bagLimit:3,
    groupBagLimit:"3 per person, 6 aggregate grouper", season:"Open year-round in Keys (check current closures)",
    protected:false, depth:"20–120 ft, structure and reef",
    confusedWith:["Black Grouper","Scamp Grouper"],
    keyID:["Marble/chain-link pattern on sides","Pale to dark gray body","Soft dorsal has rounded edge","White margin on tail"],
    warning:null
  },
  {
    id:"black_grouper", name:"Black Grouper", scientific:"Mycteroperca bonaci",
    category:"grouper", status:"keep", minSize:24, bagLimit:3,
    groupBagLimit:"3 per person, 6 aggregate grouper", season:"Open year-round",
    protected:false, depth:"60–250 ft, hard bottom and ledges",
    confusedWith:["Gag Grouper","Warsaw Grouper"],
    keyID:["Dark olive/black rectangular blotches","Brassy orange-yellow around mouth","Flat top to head profile","Rectangular dark patches along sides"],
    warning:null
  },
  {
    id:"red_grouper", name:"Red Grouper", scientific:"Epinephelus morio",
    category:"grouper", status:"keep", minSize:20, bagLimit:3,
    groupBagLimit:"3 per person, 6 aggregate grouper", season:"Open year-round",
    protected:false, depth:"10–400 ft, most common 60–400 ft",
    confusedWith:["Nassau Grouper","Vermilion Snapper (small)"],
    keyID:["Brick red to brownish-red body","White spots/blotches on sides","Second spine of dorsal fin longest","Lining of mouth orange-red"],
    warning:null
  },
  {
    id:"goliath_grouper", name:"Goliath Grouper", scientific:"Epinephelus itajara",
    category:"grouper", status:"protected", minSize:null, bagLimit:0,
    groupBagLimit:"ZERO — fully protected", season:"No harvest permitted",
    protected:true, depth:"Shallow reefs, wrecks, bridges — 10–150 ft",
    confusedWith:["Large Gag Grouper","Warsaw Grouper (juveniles)"],
    keyID:["Massive size — up to 800 lbs","Broad flat head","Small black spots on body and fins","Juveniles have irregular brown blotches"],
    warning:"FULLY PROTECTED. Do not remove from water. Touching or removing is a serious federal violation. Release immediately if caught."
  },
  {
    id:"nassau_grouper", name:"Nassau Grouper", scientific:"Epinephelus striatus",
    category:"grouper", status:"protected", minSize:null, bagLimit:0,
    groupBagLimit:"ZERO — fully protected", season:"No harvest permitted",
    protected:true, depth:"Coral reefs, 10–100 ft",
    confusedWith:["Red Grouper","Gag Grouper"],
    keyID:["5 dark brown vertical bars on body","Black saddle spot at base of tail","Dark stripe through eye","Can rapidly change color/pattern"],
    warning:"FULLY PROTECTED in Florida. Immediate release required. Federal violation to possess."
  },
  {
    id:"snowy_grouper", name:"Snowy Grouper", scientific:"Hyporthodus niveatus",
    category:"grouper", status:"keep", minSize:20, bagLimit:1,
    groupBagLimit:"1 per person per day", season:"Check current season",
    protected:false, depth:"300–1,000 ft",
    confusedWith:["Black Grouper","Gag Grouper"],
    keyID:["Dark body with white spots in rows","Spots fade in large adults","Yellow eye","Deep water fish — usually 300+ ft"],
    warning:"1 fish bag limit. Deep drop species."
  },
  {
    id:"scamp_grouper", name:"Scamp Grouper", scientific:"Mycteroperca phenax",
    category:"grouper", status:"keep", minSize:16, bagLimit:3,
    groupBagLimit:"3 per person, 6 aggregate grouper", season:"Open year-round",
    protected:false, depth:"40–300 ft, rocky bottom and ledges",
    confusedWith:["Gag Grouper","Black Grouper"],
    keyID:["Small spots forming lines along sides","Distinctive brushy tail edge","More slender than gag","Yellow-orange around mouth"],
    warning:null
  },
  // ── SNAPPER ───────────────────────────────────────────────────────────────
  {
    id:"mutton_snapper", name:"Mutton Snapper", scientific:"Lutjanus analis",
    category:"snapper", status:"keep", minSize:16, bagLimit:10,
    groupBagLimit:"10 per person aggregate snapper", season:"Open year-round",
    protected:false, depth:"Reefs and hard bottom, 30–300 ft",
    confusedWith:["Lane Snapper","Yellowtail Snapper"],
    keyID:["Olive green back, red/pink sides","Distinctive black spot below dorsal fin","Blue line under eye","Tail and fins reddish"],
    warning:null
  },
  {
    id:"lane_snapper", name:"Lane Snapper", scientific:"Lutjanus synagris",
    category:"snapper", status:"keep", minSize:8, bagLimit:10,
    groupBagLimit:"10 per person aggregate snapper", season:"Open year-round",
    protected:false, depth:"Shallow reefs and grass flats, 10–130 ft",
    confusedWith:["Mutton Snapper","Vermilion Snapper"],
    keyID:["Pink/red with yellow stripes along sides","Black spot on lateral line below dorsal","Smaller than mutton — usually under 14 inches","Yellow fins"],
    warning:null
  },
  {
    id:"vermilion_snapper", name:"Vermilion Snapper", scientific:"Rhomboplites aurorubens",
    category:"snapper", status:"keep", minSize:10, bagLimit:10,
    groupBagLimit:"10 per person aggregate snapper", season:"Open year-round",
    protected:false, depth:"100–300 ft, offshore reefs",
    confusedWith:["Red Snapper","Silk Snapper"],
    keyID:["Bright red/vermilion entire body","Narrow diagonal blue lines on upper sides","Smaller and slimmer than red snapper","Yellow iris"],
    warning:"Often confused with red snapper — different bag and size limits."
  },
  {
    id:"yellowtail_snapper", name:"Yellowtail Snapper", scientific:"Ocyurus chrysurus",
    category:"snapper", status:"keep", minSize:10, bagLimit:10,
    groupBagLimit:"10 per person aggregate snapper", season:"Open year-round",
    protected:false, depth:"Reefs and wrecks, 10–200 ft",
    confusedWith:["Lane Snapper"],
    keyID:["Unmistakable bright yellow stripe from mouth to forked yellow tail","Olive/bluish back with yellow spots","Slender body","Most recognizable snapper in the Keys"],
    warning:null
  },
  {
    id:"red_snapper", name:"Red Snapper", scientific:"Lutjanus campechanus",
    category:"snapper", status:"keep", minSize:16, bagLimit:2,
    groupBagLimit:"2 per person per day — very limited", season:"Check — very restricted season, limited days per year",
    protected:false, depth:"Offshore reefs and structure, 50–300 ft",
    confusedWith:["Vermilion Snapper","Lane Snapper"],
    keyID:["Deep red body all over","Red eye with no yellow iris","Pointed anal fin","Larger and deeper-bodied than vermilion"],
    warning:"VERY RESTRICTED — only 2 fish per person. Season is limited to specific days per year. Verify current season before keeping."
  },
  // ── PELAGIC ───────────────────────────────────────────────────────────────
  {
    id:"wahoo", name:"Wahoo", scientific:"Acanthocybium solandri",
    category:"pelagic", status:"keep", minSize:null, bagLimit:null,
    groupBagLimit:"No federal limit", season:"Open year-round",
    protected:false, depth:"Open water, trolling 100–1,000 ft",
    confusedWith:["King Mackerel","Escolar"],
    keyID:["Electric blue/green back, silvery sides","Vertical blue tiger stripes (fade after death)","Long narrow snout with razor teeth","Streamlined torpedo shape"],
    warning:null
  },
  {
    id:"king_mackerel", name:"King Mackerel", scientific:"Scomberomorus cavalla",
    category:"pelagic", status:"keep", minSize:24, bagLimit:3,
    groupBagLimit:"3 per person per day", season:"Open year-round in Keys",
    protected:false, depth:"Offshore reefs and open water, 30–150 ft",
    confusedWith:["Wahoo","Spanish Mackerel","Cero Mackerel"],
    keyID:["Silver body, no spots as adult","Lateral line dips sharply at mid-body","Yellowish pectoral fin","No vertical stripes like wahoo"],
    warning:"24-inch minimum. Commonly confused with wahoo — check lateral line dip."
  },
  {
    id:"cobia", name:"Cobia", scientific:"Rachycentron canadum",
    category:"pelagic", status:"keep", minSize:33, bagLimit:1,
    groupBagLimit:"1 per person, 2 per vessel", season:"Open year-round",
    protected:false, depth:"Surface to 60 ft, nearshore and offshore",
    confusedWith:["Remora/Sharksuckers (similar shape)"],
    keyID:["Dark brown back, white/cream belly","Broad dark lateral stripe","Flat head, large mouth","Often found near buoys, rays, and sharks"],
    warning:"33-inch minimum. Only 1 per person / 2 per vessel."
  },
  {
    id:"mahi_mahi", name:"Mahi-Mahi", scientific:"Coryphaena hippurus",
    category:"pelagic", status:"keep", minSize:20, bagLimit:10,
    groupBagLimit:"10 per person per day", season:"Open year-round",
    protected:false, depth:"Open water, weedlines, 100–1,000 ft",
    confusedWith:["Pompano Dolphin (smaller version)"],
    keyID:["Brilliant blue/green/gold colors (fade fast after death)","Blunt square head (males), rounded (females)","Long dorsal fin runs full length of body","Colors fade to gray/yellow after death"],
    warning:null
  },
  {
    id:"spanish_mackerel", name:"Spanish Mackerel", scientific:"Scomberomorus maculatus",
    category:"pelagic", status:"keep", minSize:12, bagLimit:15,
    groupBagLimit:"15 per person per day", season:"Open year-round",
    protected:false, depth:"Inshore and nearshore, 10–40 ft",
    confusedWith:["King Mackerel (small kings)","Cero Mackerel"],
    keyID:["Silver body with golden/orange spots","No stripes — spots only","Lateral line curves gradually (not sharply like kingfish)","Smaller than kingfish — usually under 24 inches"],
    warning:null
  },
  {
    id:"cero_mackerel", name:"Cero Mackerel", scientific:"Scomberomorus regalis",
    category:"pelagic", status:"keep", minSize:12, bagLimit:15,
    groupBagLimit:"15 per person per day", season:"Open year-round",
    protected:false, depth:"Nearshore reefs and wrecks, 10–80 ft",
    confusedWith:["Spanish Mackerel","King Mackerel"],
    keyID:["Yellow/orange spots AND stripes on sides","Lateral line curves gradually","Bronze/yellow stripe runs mid-body","Similar size to Spanish mackerel"],
    warning:null
  },
  // ── JACKS ─────────────────────────────────────────────────────────────────
  {
    id:"greater_amberjack", name:"Greater Amberjack", scientific:"Seriola dumerili",
    category:"jack", status:"keep", minSize:34, bagLimit:1,
    groupBagLimit:"1 per person per day", season:"Check — frequent seasonal closures",
    protected:false, depth:"Wrecks and reefs, 60–240 ft",
    confusedWith:["Almaco Jack","Banded Rudderfish"],
    keyID:["Amber/gold stripe from eye to tail","Dark olive-brown back","No scutes on lateral line","Amber band through eye — key ID"],
    warning:"34-inch minimum. Only 1 per person. Frequent closures — check current regs before keeping."
  },
  {
    id:"almaco_jack", name:"Almaco Jack", scientific:"Seriola rivoliana",
    category:"jack", status:"keep", minSize:null, bagLimit:null,
    groupBagLimit:"No federal bag limit", season:"Open year-round",
    protected:false, depth:"Offshore open water and deep reefs",
    confusedWith:["Greater Amberjack","Banded Rudderfish"],
    keyID:["Deeper, more compressed body than AJ","Amber stripe faint or absent","Elongated dorsal and anal fin lobes","Olive/brown-amber body — slimmer profile than AJ"],
    warning:"No limit — but commonly confused with amberjack which HAS strict limits. Verify before keeping."
  },
  // ── TUNA ──────────────────────────────────────────────────────────────────
  {
    id:"blackfin_tuna", name:"Blackfin Tuna", scientific:"Thunnus atlanticus",
    category:"pelagic", status:"keep", minSize:null, bagLimit:null,
    groupBagLimit:"No federal limit", season:"Open year-round",
    protected:false, depth:"Offshore open water, 100–1,000 ft",
    confusedWith:["Skipjack Tuna","Little Tunny"],
    keyID:["Dark back with yellow stripe on sides","Small finlets yellow-tipped","Shorter pectoral fins than yellowfin","Smaller than yellowfin — usually under 30 lbs"],
    warning:null
  },
  {
    id:"yellowfin_tuna", name:"Yellowfin Tuna", scientific:"Thunnus albacares",
    category:"pelagic", status:"keep", minSize:27, bagLimit:3,
    groupBagLimit:"3 per person per day", season:"Open year-round",
    protected:false, depth:"Offshore open water, 200–2,000 ft",
    confusedWith:["Blackfin Tuna","Bigeye Tuna"],
    keyID:["Bright yellow finlets and second dorsal fin","Yellow stripe along sides","Long pectoral fins reaching past second dorsal","Can exceed 200 lbs"],
    warning:"27-inch minimum in federal waters. Check current regs."
  },
  {
    id:"bluefin_tuna", name:"Atlantic Bluefin Tuna", scientific:"Thunnus thynnus",
    category:"pelagic", status:"keep", minSize:73, bagLimit:1,
    groupBagLimit:"Highly regulated — HMS permit required", season:"Check NOAA HMS — very restricted",
    protected:false, depth:"Offshore open water, 200–2,000 ft",
    confusedWith:["Yellowfin Tuna","Bigeye Tuna"],
    keyID:["Very short pectoral fins (key ID vs yellowfin)","Dark blue-black back","No yellow on finlets","Massive — can exceed 1,000 lbs"],
    warning:"HIGHLY REGULATED. Requires HMS Angling permit. 73-inch minimum. Strict quotas — verify current season and limits with NOAA before keeping."
  },
  {
    id:"skipjack_tuna", name:"Skipjack Tuna", scientific:"Katsuwonus pelamis",
    category:"pelagic", status:"keep", minSize:null, bagLimit:null,
    groupBagLimit:"No federal limit", season:"Open year-round",
    protected:false, depth:"Open water, surface to 850 ft",
    confusedWith:["Blackfin Tuna","Little Tunny"],
    keyID:["4–6 dark horizontal stripes on lower belly — key ID","No spots on sides","Dark blue back","Usually under 20 lbs in the Keys"],
    warning:null
  },
  {
    id:"little_tunny", name:"Little Tunny (Bonito)", scientific:"Euthynnus alletteratus",
    category:"pelagic", status:"keep", minSize:null, bagLimit:null,
    groupBagLimit:"No federal limit", season:"Open year-round",
    protected:false, depth:"Nearshore and offshore, surface to 150 ft",
    confusedWith:["Blackfin Tuna","Skipjack Tuna","Atlantic Bonito"],
    keyID:["Dark worm-like markings on back (key ID)","3–5 dark spots between pectoral and pelvic fins","No stripes on belly like skipjack","Often confused for tuna — no bag limit vs tuna limits"],
    warning:null
  },
  // ── BAITFISH ──────────────────────────────────────────────────────────────
  {
    id:"ballyhoo", name:"Ballyhoo", scientific:"Hemiramphus brasiliensis",
    category:"pelagic", status:"keep", minSize:null, bagLimit:null,
    groupBagLimit:"No limit — baitfish", season:"Open year-round",
    protected:false, depth:"Surface, nearshore and offshore",
    confusedWith:["Halfbeak species"],
    keyID:["Long lower jaw extending well past upper jaw","Slender silver body","Orange-tipped lower jaw","Most popular Keys trolling bait"],
    warning:null
  },
  // ── INSHORE / FLATS ───────────────────────────────────────────────────────
  {
    id:"tarpon", name:"Tarpon", scientific:"Megalops atlanticus",
    category:"inshore", status:"keep", minSize:null, bagLimit:0,
    groupBagLimit:"Catch and release only — no harvest without special tag",
    season:"Open for catch-and-release year-round",
    protected:false, depth:"Flats, channels, bridges — 0–100 ft",
    confusedWith:["Ladyfish (much smaller)"],
    keyID:["Massive silver scales — like mirrors","Upturned mouth with bony plates","Last ray of dorsal fin very elongated","Can exceed 200 lbs — leaps dramatically when hooked"],
    warning:"Catch and release only. Killing or possessing requires a $50 tag. The Silver King — handle with care and release quickly."
  },
  {
    id:"bonefish", name:"Bonefish", scientific:"Albula vulpes",
    category:"inshore", status:"keep", minSize:null, bagLimit:0,
    groupBagLimit:"Catch and release strongly encouraged",
    season:"Open year-round — catch and release",
    protected:false, depth:"Flats, 1–6 ft",
    confusedWith:["Ladyfish","Small Tarpon"],
    keyID:["Bright silver streamlined body","Distinctive downward-pointing snout for rooting in sand","Forked tail","Ghost of the flats — spooks easily"],
    warning:null
  },
  {
    id:"snook", name:"Snook", scientific:"Centropomus undecimalis",
    category:"inshore", status:"keep", minSize:28, bagLimit:1,
    groupBagLimit:"1 per person per day", season:"Check — closed season June 1–Aug 31 and Dec 1–Jan 31",
    protected:false, depth:"Inshore mangroves, bridges, passes — 0–30 ft",
    confusedWith:["Robalo (same fish, Spanish name)"],
    keyID:["Bold black lateral line running full length","Concave sloping forehead","Protruding lower jaw","Yellow pectoral fins"],
    warning:"28-inch minimum. Only 1 per day. CLOSED June 1–Aug 31 and Dec 1–Jan 31. Check current status."
  },
  {
    id:"redfish", name:"Redfish (Red Drum)", scientific:"Sciaenops ocellatus",
    category:"inshore", status:"keep", minSize:18, bagLimit:1,
    groupBagLimit:"1 per person per day — slot limit applies",
    season:"Open year-round but slot limit strictly enforced",
    protected:false, depth:"Shallow flats, grass beds, nearshore — 0–40 ft",
    confusedWith:["Black Drum (similar body shape)"],
    keyID:["One or more black spots at base of tail — key ID","Copper/bronze body","Underslung mouth (feeds head-down)","Slot limit: must be 18–27 inches to keep"],
    warning:"SLOT LIMIT: must be between 18 and 27 inches. Too big or too small — release it. 1 per person per day."
  },
  {
    id:"permit", name:"Permit", scientific:"Trachinotus falcatus",
    category:"inshore", status:"keep", minSize:11, bagLimit:2,
    groupBagLimit:"2 per person per day", season:"Open year-round",
    protected:false, depth:"Flats, reefs, wrecks — 1–100 ft",
    confusedWith:["Florida Pompano"],
    keyID:["Very deep compressed body — almost diamond-shaped","Long sickle-shaped fins","Small mouth, forehead steep","Much larger than pompano — can reach 40+ lbs"],
    warning:null
  },
  {
    id:"florida_pompano", name:"Florida Pompano", scientific:"Trachinotus carolinus",
    category:"inshore", status:"keep", minSize:11, bagLimit:6,
    groupBagLimit:"6 per person per day", season:"Open year-round",
    protected:false, depth:"Surf, nearshore, flats — 0–30 ft",
    confusedWith:["Permit"],
    keyID:["Smaller and rounder than permit","Short snout","Yellowish belly","Usually under 3 lbs — permit can reach 40+ lbs"],
    warning:null
  },
  // ── BILLFISH ──────────────────────────────────────────────────────────────
  {
    id:"sailfish", name:"Sailfish", scientific:"Istiophorus albicans",
    category:"billfish", status:"keep", minSize:63, bagLimit:1,
    groupBagLimit:"1 per person — catch and release strongly encouraged",
    season:"Open year-round — release encouraged",
    protected:false, depth:"Offshore open water, 100–1,000 ft",
    confusedWith:["Spearfish (rare)"],
    keyID:["Enormous sail-like dorsal fin — unmistakable","Electric blue spots on sail when excited","Long bill","Most common billfish in the Florida Keys"],
    warning:"63-inch minimum lower jaw to fork. Release is strongly encouraged — sailfish are the signature Keys sport fish."
  },
  {
    id:"blue_marlin", name:"Blue Marlin", scientific:"Makaira nigricans",
    category:"billfish", status:"keep", minSize:99, bagLimit:1,
    groupBagLimit:"1 per vessel per day", season:"Open year-round — release encouraged",
    protected:false, depth:"Offshore blue water, 500–2,000 ft",
    confusedWith:["White Marlin","Spearfish"],
    keyID:["Cobalt blue back, silver-white belly","Rigid pointed bill","No spots on dorsal fin (unlike sailfish)","Can exceed 1,000 lbs"],
    warning:"99-inch minimum (lower jaw to fork). 1 per vessel per day. Release strongly encouraged."
  },
  {
    id:"swordfish", name:"Swordfish", scientific:"Xiphias gladius",
    category:"billfish", status:"keep", minSize:47, bagLimit:1,
    groupBagLimit:"1 per person per day", season:"Open year-round",
    protected:false, depth:"Deep water and surface at night, 600–2,000 ft",
    confusedWith:["Marlin (different bill shape)"],
    keyID:["Flat sword-shaped bill — round in marlin, flat in swordfish","No scales on adults","Large crescent-shaped tail","No pelvic fins"],
    warning:"47-inch minimum (lower jaw to fork). 1 per person per day."
  },
  // ── DEEP WATER ────────────────────────────────────────────────────────────
  {
    id:"golden_tilefish", name:"Golden Tilefish", scientific:"Lopholatilus chamaeleonticeps",
    category:"deep", status:"keep", minSize:null, bagLimit:7,
    groupBagLimit:"7 per person per day", season:"Open year-round",
    protected:false, depth:"400–800 ft, sand/mud bottom",
    confusedWith:["Blueline Tilefish"],
    keyID:["Golden yellow/iridescent body","Distinctive fleshy crest on top of head","Blue-green and yellow spots","Deep water — 400–800 ft"],
    warning:null
  },
  // ── INVASIVE ──────────────────────────────────────────────────────────────
  {
    id:"lionfish", name:"Lionfish", scientific:"Pterois volitans",
    category:"invasive", status:"keep", minSize:null, bagLimit:null,
    groupBagLimit:"No limit — remove as many as possible",
    season:"Open year-round — actively encouraged to harvest",
    protected:false, depth:"Reefs and wrecks, 10–300 ft",
    confusedWith:["Nothing — unmistakable"],
    keyID:["Fan-like pectoral fins","Striped red/white/brown body","Long venomous dorsal spines","Found on reefs and wrecks"],
    warning:"VENOMOUS SPINES — handle with care. Use tongs or a net. Despite this, please keep every one you catch — they are invasive and destroying reef ecosystems. Excellent eating."
  },
  // ── GUIDE ONLY (not in model — too few training photos) ──────────────────
  {
    id:"tripletail", name:"Tripletail", scientific:"Lobotes surinamensis",
    category:"pelagic", status:"keep", minSize:15, bagLimit:1,
    groupBagLimit:"1 per person per day", season:"Open year-round",
    protected:false, depth:"Near surface, floating debris and buoys — 0–30 ft",
    confusedWith:["Nothing — unique body shape"],
    keyID:["Three rounded fins at rear look like three tails","Dark mottled brown/black body","Often floating sideways near debris","Ambush predator — very still"],
    warning:null
  },
];
