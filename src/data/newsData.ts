export interface Article {
  id: string;
  category: string;
  image: string;
  title: string;
  sourceName: string;
  sourceAvatar: string;
  verified: boolean;
  metaLine: string;
  body: string[];
}

export const breakingNewsData: Article[] = [
  {
    id: "break-1",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
    title: "Alexander wears modified helmet in road races",
    sourceName: "CNN Indonesia",
    sourceAvatar: "https://i.pravatar.cc/100?img=11",
    verified: true,
    metaLine: "Trending • 6 hours ago",
    body: [
      "As a tech department, we're usually pretty good at spotting tech that's out of the ordinary. During time trials we're used to seeing new aero innovation, and while there are certainly aero tricks used in road stages, they are harder to spot.",
      "A case in point, throughout the Volta ao Algarve, Alexander Kristoff has been wearing an old discontinued time trial helmet, complete with visor removed, in the road stages without anyone picking up. He even wore it during the queen stage in the mountains, prompting rival riders to ask his mechanics where they could get one.",
      "Kristoff's team says the modification shaves valuable seconds off descents without breaking any technical regulations, and other squads are already scrambling to find similar discontinued shells before the rules catch up. As a tech department, we're usually pretty good at spotting tech that's out of the ordinary. During time trials we're used to seeing new aero innovation, and while there are certainly aero tricks used in road stages, they are harder to spot.",
      "A case in point, throughout the Volta ao Algarve, Alexander Kristoff has been wearing an old discontinued time trial helmet, complete with visor removed, in the road stages without anyone picking up. He even wore it during the queen stage in the mountains, prompting rival riders to ask his mechanics where they could get one.",
      "Kristoff's team says the modification shaves valuable seconds off descents without breaking any technical regulations, and other squads are already scrambling to find similar discontinued shells before the rules catch up.As a tech department, we're usually pretty good at spotting tech that's out of the ordinary. During time trials we're used to seeing new aero innovation, and while there are certainly aero tricks used in road stages, they are harder to spot.",
      "A case in point, throughout the Volta ao Algarve, Alexander Kristoff has been wearing an old discontinued time trial helmet, complete with visor removed, in the road stages without anyone picking up. He even wore it during the queen stage in the mountains, prompting rival riders to ask his mechanics where they could get one.",
      "Kristoff's team says the modification shaves valuable seconds off descents without breaking any technical regulations, and other squads are already scrambling to find similar discontinued shells before the rules catch up.",
    ],
  },
  {
    id: "break-2",
    category: "Politics",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop",
    title: "Senate votes on new infrastructure spending bill",
    sourceName: "BBC News",
    sourceAvatar: "https://i.pravatar.cc/100?img=25",
    verified: true,
    metaLine: "Trending • 2 hours ago",
    body: [
      "The Senate passed a sweeping infrastructure package late Tuesday after months of negotiation, sending the bill to the House for a final vote.",
      "Supporters say the funding will modernize aging bridges, expand broadband access in rural areas, and create thousands of construction jobs over the next five years.",
      "Critics argue the price tag is too high and are pushing for amendments before the bill can be signed into law.",
    ],
  },
  {
    id: "break-3",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    title: "New chip design promises faster, cooler laptops",
    sourceName: "The Verge",
    sourceAvatar: "https://i.pravatar.cc/100?img=8",
    verified: true,
    metaLine: "Trending • 4 hours ago",
    body: [
      "A new chip architecture unveiled this week claims to cut power draw by nearly a third while boosting multi-core performance, according to early benchmarks.",
      "Manufacturers say laptops built on the new design could arrive by next year, with promises of longer battery life and quieter fans under heavy workloads.",
    ],
  },
  {
    id: "break-4",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
    title: "Study links daily walking to lower heart disease risk",
    sourceName: "Reuters",
    sourceAvatar: "https://i.pravatar.cc/100?img=15",
    verified: false,
    metaLine: "Trending • 1 day ago",
    body: [
      "Researchers tracking over 50,000 adults found that just 20 minutes of brisk walking a day was associated with a meaningfully lower risk of cardiovascular disease.",
      "The effect held even for participants who did no other structured exercise, suggesting that consistency matters more than intensity for long-term heart health.",
    ],
  },
  {
    id: "break-5",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    title: "Markets rally as inflation figures beat expectations",
    sourceName: "Bloomberg",
    sourceAvatar: "https://i.pravatar.cc/100?img=52",
    verified: true,
    metaLine: "Trending • 5 hours ago",
    body: [
      "Stocks climbed sharply after new data showed inflation cooling faster than economists had forecast, easing pressure on central banks to keep raising rates.",
      "Analysts caution the rally could be short-lived if upcoming jobs reports come in hotter than expected, but for now investors are betting on a softer landing.",
    ],
  },
];

export const recommendationData: Article[] = [
  {
    id: "rec-1",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=400&auto=format&fit=crop",
    title: "What Training Do Vollyball Players Need?",
    sourceName: "McKindney",
    sourceAvatar: "https://i.pravatar.cc/100?img=11",
    verified: false,
    metaLine: "Feb 27,2023",
    body: [
      "Elite volleyball players build their training around explosive power, lateral quickness, and shoulder durability, coaches say, rather than raw strength alone.",
      "A typical week mixes plyometrics for vertical jump, resistance work to protect the rotator cuff, and hours of reactive footwork drills to sharpen court awareness.",
    ],
  },
  {
    id: "rec-2",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop",
    title: "Secondary school places: When do parents find out?",
    sourceName: "Rosemary",
    sourceAvatar: "https://i.pravatar.cc/100?img=5",
    verified: false,
    metaLine: "Feb 28,2023",
    body: [
      "Local authorities are reminding families that national offer day falls on the same date every year, with letters and emails going out simultaneously nationwide.",
      "Parents who are unhappy with their allocated place have a limited window to lodge an appeal, and education officials recommend starting the process early.",
    ],
  },
  {
    id: "rec-3",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=400&auto=format&fit=crop",
    title: "Five morning habits doctors say boost your metabolism",
    sourceName: "Daniel Cho",
    sourceAvatar: "https://i.pravatar.cc/100?img=15",
    verified: false,
    metaLine: "Mar 3,2023",
    body: [
      "From hydrating before coffee to getting early sunlight exposure, doctors say small morning habits can meaningfully affect energy levels and metabolism throughout the day.",
      "Experts stress that no single habit is a silver bullet, but stacking a few consistently tends to produce noticeable results within a few weeks.",
    ],
  },
  {
    id: "rec-4",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=400&auto=format&fit=crop",
    title: "Ten hidden beaches worth the detour this summer",
    sourceName: "Priya Nair",
    sourceAvatar: "https://i.pravatar.cc/100?img=32",
    verified: false,
    metaLine: "Mar 6,2023",
    body: [
      "Beyond the crowded coastal hotspots, a handful of quieter coves are drawing attention from travelers looking to avoid the summer rush.",
      "Local guides recommend visiting early morning or by boat, since several of these beaches are only reachable on foot or water.",
    ],
  },
];

export const technologyData: Article[] = [
  {
    id: "tech-1",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
    title: "New chip design promises faster, cooler laptops",
    sourceName: "Aiden Cole",
    sourceAvatar: "https://i.pravatar.cc/100?img=8",
    verified: false,
    metaLine: "Mar 1,2023",
    body: [
      "Chipmakers are betting on a redesigned core layout to squeeze more performance per watt out of thin-and-light laptops.",
      "Early samples shown at a private event ran cooler under load than current-generation chips while matching their peak speeds.",
    ],
  },
  {
    id: "tech-2",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop",
    title: "Startups race to build the next generation of AI agents",
    sourceName: "Wei Zhang",
    sourceAvatar: "https://i.pravatar.cc/100?img=21",
    verified: false,
    metaLine: "Mar 4,2023",
    body: [
      "Venture funding for autonomous software agents has surged this quarter, with investors betting the tools will handle increasingly complex multi-step tasks.",
      "Founders say the biggest remaining challenge is reliability, not raw capability, as agents still occasionally fail on tasks that require long-horizon planning.",
    ],
  },
  {
    id: "tech-3",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop",
    title: "Foldable screens are finally getting good, reviewers say",
    sourceName: "Sofia Ramos",
    sourceAvatar: "https://i.pravatar.cc/100?img=13",
    verified: false,
    metaLine: "Mar 7,2023",
    body: [
      "After several rocky generations, reviewers say the latest crop of foldable phones has finally solved the visible crease and hinge durability complaints that plagued earlier models.",
      "Battery life and pricing remain sticking points, but analysts expect foldables to cross into the mainstream within the next two product cycles.",
    ],
  },
];

export const politicsData: Article[] = [
  {
    id: "pol-1",
    category: "Politics",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=400&auto=format&fit=crop",
    title: "Senate votes on new infrastructure spending bill",
    sourceName: "Marcus Lee",
    sourceAvatar: "https://i.pravatar.cc/100?img=25",
    verified: false,
    metaLine: "Mar 2,2023",
    body: [
      "Lawmakers on both sides claimed partial victory after the amended bill cleared committee with broad bipartisan support.",
      "The final vote is expected within the month, though several lawmakers say they will push for further changes before signing off.",
    ],
  },
  {
    id: "pol-2",
    category: "Politics",
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400&auto=format&fit=crop",
    title: "City council approves new affordable housing plan",
    sourceName: "Grace Owens",
    sourceAvatar: "https://i.pravatar.cc/100?img=44",
    verified: false,
    metaLine: "Mar 5,2023",
    body: [
      "The plan sets aside funding for over two thousand new units across the city, with construction expected to begin next spring.",
      "Housing advocates welcomed the vote but warned that zoning delays have derailed similar plans in the past.",
    ],
  },
  {
    id: "pol-3",
    category: "Politics",
    image:
      "https://images.unsplash.com/photo-1591189863430-ab87e120f312?q=80&w=400&auto=format&fit=crop",
    title: "Trade talks resume as both sides signal compromise",
    sourceName: "Hassan Ali",
    sourceAvatar: "https://i.pravatar.cc/100?img=52",
    verified: false,
    metaLine: "Mar 8,2023",
    body: [
      "Negotiators returned to the table this week after a two-month standoff, with both delegations describing the mood as cautiously optimistic.",
      "A deal, if reached, would remove tariffs on several key exports and is expected to be finalized before the end of the quarter.",
    ],
  },
];

export const sportsData: Article[] = [
  {
    id: "sport-1",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=400&auto=format&fit=crop",
    title: "Underdog club clinches league title on final matchday",
    sourceName: "Diego Fernandez",
    sourceAvatar: "https://i.pravatar.cc/100?img=17",
    verified: false,
    metaLine: "Mar 1,2023",
    body: [
      "A last-minute winner sealed the title for a club that started the season as relegation favorites, capping one of the most unlikely runs in league history.",
      'Fans flooded the streets in celebration as the manager credited a tight defensive system and a squad that "refused to stop believing."',
    ],
  },
  {
    id: "sport-2",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400&auto=format&fit=crop",
    title: "Alexander wears modified helmet in road races",
    sourceName: "CNN Indonesia",
    sourceAvatar: "https://i.pravatar.cc/100?img=11",
    verified: true,
    metaLine: "Trending • 6 hours ago",
    body: [
      "As a tech department, we're usually pretty good at spotting tech that's out of the ordinary. During time trials we're used to seeing new aero innovation, and while there are certainly aero tricks used in road stages, they are harder to spot.",
      "A case in point, throughout the Volta ao Algarve, Alexander Kristoff has been wearing an old discontinued time trial helmet, complete with visor removed, in the road stages without anyone picking up. He even wore it during the queen stage in the mountains, prompting rival riders to ask his mechanics where they could get one.",
      "Kristoff's team says the modification shaves valuable seconds off descents without breaking any technical regulations, and other squads are already scrambling to find similar discontinued shells before the rules catch up.",
    ],
  },
  {
    id: "sport-3",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=400&auto=format&fit=crop",
    title: "Rookie point guard breaks 30-year assists record",
    sourceName: "Tyrone Banks",
    sourceAvatar: "https://i.pravatar.cc/100?img=36",
    verified: false,
    metaLine: "Mar 6,2023",
    body: [
      "The 20-year-old guard racked up 19 assists in a single game, eclipsing a franchise record that had stood since the early 1990s.",
      'Teammates say his court vision "looks like it belongs to someone who has played 500 more games than he has."',
    ],
  },
];

export const moviesData: Article[] = [
  {
    id: "movie-1",
    category: "Movies",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400&auto=format&fit=crop",
    title: "Long-awaited sequel breaks opening weekend records",
    sourceName: "Nina Petrova",
    sourceAvatar: "https://i.pravatar.cc/100?img=48",
    verified: false,
    metaLine: "Mar 2,2023",
    body: [
      "The sequel pulled in a record opening weekend, driven by strong reviews and years of pent-up anticipation from fans of the original.",
      "Industry analysts say the result could reshape release strategy for the rest of the year, with several rival studios reportedly moving up their own premiere dates.",
    ],
  },
  {
    id: "movie-2",
    category: "Movies",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400&auto=format&fit=crop",
    title: "Indie drama surprises critics at this year’s film festival",
    sourceName: "Omar Suleiman",
    sourceAvatar: "https://i.pravatar.cc/100?img=9",
    verified: false,
    metaLine: "Mar 5,2023",
    body: [
      "Made on a fraction of a typical studio budget, the film earned a lengthy standing ovation at its festival premiere and is already drawing distributor interest.",
      "Critics have praised the lead performance as one of the year's most understated, with several calling it an early awards-season contender.",
    ],
  },
  {
    id: "movie-3",
    category: "Movies",
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=400&auto=format&fit=crop",
    title: "Studio confirms release date for next big superhero film",
    sourceName: "Ella Thompson",
    sourceAvatar: "https://i.pravatar.cc/100?img=29",
    verified: false,
    metaLine: "Mar 9,2023",
    body: [
      "The studio confirmed a summer release date alongside the first teaser trailer, ending months of speculation from fans online.",
      'Casting details remain under wraps, though the director hinted that "a few familiar faces" from earlier films will return in expanded roles.',
    ],
  },
];

export const newsSections: { key: string; title: string; data: Article[] }[] = [
  { key: "recommendation", title: "Recommendation", data: recommendationData },
  { key: "technology", title: "Technology", data: technologyData },
  { key: "politics", title: "Politics", data: politicsData },
  { key: "sports", title: "Sports", data: sportsData },
  { key: "movies", title: "Movies", data: moviesData },
];

export const allArticles: Article[] = [
  ...breakingNewsData,
  ...recommendationData,
  ...technologyData,
  ...politicsData,
  ...sportsData,
  ...moviesData,
];

export function getArticleById(id: string | undefined): Article | undefined {
  if (!id) return undefined;
  return allArticles.find((article) => article.id === id);
}
