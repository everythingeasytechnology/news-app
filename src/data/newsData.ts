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
      "Kristoff's team says the modification shaves valuable seconds off descents without breaking any technical regulations, and other squads are already scrambling to find similar discontinued shells before the rules catch up.",
      "The helmet itself was discontinued by its manufacturer nearly four years ago after a redesign shifted the brand's focus toward lighter, more ventilated shells for hot-weather stages. Kristoff's mechanics reportedly sourced two of the old models from a retired teammate's personal collection and modified the shell's rear vents to further smooth airflow around the neck.",
      "Aerodynamicists who reviewed photos from the race estimate the setup could save somewhere between three and six watts at race pace, a marginal gain that becomes meaningful over a three-week stage race. Whether rivals can legally replicate the trick before the season's next major tour remains an open question, since the exact shell is no longer in production.",
      "Team mechanics across the peloton have started quietly reaching out to retired riders and old sponsors in search of similar discontinued shells, according to two people familiar with the informal trading that goes on in service course parking lots during rest days. One mechanic, who asked not to be named because he wasn't authorized to speak about equipment strategy, said his team had already tracked down three candidate helmets but was still waiting on wind-tunnel data before committing.",
      "The governing body's technical commission says it is aware of the trend and is reviewing whether any rule changes are needed, though officials stressed that as long as a helmet passed its original safety certification, riders are free to use it regardless of when it was manufactured. That loophole, some engineers argue, could keep discontinued gear in circulation for years even as manufacturers push riders toward newer, more expensive equipment.",
      "For now, Kristoff has declined to comment on the specifics, telling reporters only that \"some things are worth keeping to yourself until the finish line.\" His team's directeur sportif was similarly tight-lipped, smiling when asked directly about the helmet before changing the subject to the following day's stage profile.",
      "Whatever the exact numbers turn out to be, the episode has reignited a familiar debate in the sport: how much of professional cycling's marginal-gains arms race is genuine engineering breakthrough, and how much is simply knowing where to look in a warehouse nobody else remembers exists.",
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
      "The final vote came after a marathon negotiating session that stretched past midnight, with a small group of moderate senators from both parties holding out for changes to how the funding would be distributed among states. In the end, a compromise formula tied roughly forty percent of the money to population and the rest to a set of need-based criteria, including the age of existing infrastructure and rates of rural broadband access.",
      "Transportation officials say the bill's roughly two hundred billion dollars earmarked for roads and bridges would fund repairs on more than four thousand structures currently rated in poor condition by federal inspectors, along with a smaller pool of money set aside for entirely new transit projects in growing metropolitan areas.",
      "The broadband provisions drew some of the fiercest debate. Rural-state senators pushed successfully for guaranteed minimum funding levels regardless of population density, arguing that market-based deployment has consistently left their constituents without reliable service. Telecom industry groups had lobbied against fixed set-asides, warning they could result in inefficient spending in areas with genuinely low demand.",
      "House leadership has signaled the bill will move quickly once it clears committee review, though several representatives from urban districts have already floated amendments to redirect a larger share of transit funding toward existing subway and light-rail systems rather than new highway construction. Whether those changes survive is likely to determine how long the bill takes to reach the president's desk.",
      "Budget analysts note that even with the compromise financing structure attached to the bill, roughly a third of the package will still add directly to the deficit over the next decade, a detail that fiscal hawks in both chambers say they intend to raise again before any final vote. For now, though, the Senate's passage marks the furthest an infrastructure package has advanced in nearly six years.",
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
      "The architecture reworks how the chip schedules tasks across its efficiency and performance cores, using a new predictive model that shifts workloads before a task actually demands more power rather than reacting after the fact. Engineers involved in the project say that shift alone accounts for roughly half of the reported efficiency gains.",
      "Early silicon samples were tested across a range of workloads, from video editing timelines to compiling large codebases, and in each case the chip maintained lower sustained temperatures than the previous generation while finishing tasks in comparable or shorter time. Independent reviewers who got early access under embargo described the thermal difference as \"immediately noticeable\" even through a laptop's aluminum chassis.",
      "The efficiency gains are expected to matter most for thin-and-light laptops, which have historically had to choose between performance and battery life due to limited space for cooling hardware. Several device makers are reportedly designing fanless models around the new chip for the first time, betting that its lower heat output makes passive cooling viable even under sustained load.",
      "Software compatibility remains a lingering question. The new scheduling model requires operating system support to fully realize its efficiency claims, and it's still unclear how quickly that support will roll out across every platform the chip is expected to ship on. A company spokesperson said updates are already in testing with several major OS partners and should be ready well ahead of the chip's public launch.",
      "Pricing for laptops built on the new architecture hasn't been announced, but supply chain sources suggest the manufacturing process is only modestly more expensive than the current generation, which could keep the price premium smaller than past architectural leaps. If those numbers hold, next year's laptop refresh cycle could be one of the more significant in recent memory.",
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
      "The study followed participants for an average of eight years, using wearable activity trackers rather than self-reported logs to measure actual walking behavior, a detail researchers say strengthens confidence in the results compared to older studies that relied on participants' memory of their own habits.",
      "Participants were grouped by average daily step count and walking pace rather than total exercise time, and the researchers found that pace mattered nearly as much as duration. Those who walked briskly enough to raise their heart rate noticeably, even for short stretches, saw greater benefit than those who covered similar distances at a slower, more leisurely pace.",
      "Cardiologists not involved in the study cautioned against reading too much into any single finding, noting that people who walk regularly may differ from those who don't in other health-relevant ways that are hard to fully control for statistically. Still, several called the results consistent with a growing body of research suggesting that moderate, consistent activity offers most of the cardiovascular benefit once associated only with more intense exercise regimens.",
      "The researchers also found a dose-response relationship up to a point: benefits continued to increase with more daily walking time before plateauing at around 40 minutes, after which additional walking showed diminishing returns for heart-disease risk specifically, though the authors noted other health benefits from additional activity likely continue beyond that threshold.",
      "Public health officials say the findings could inform future exercise guidelines, particularly for populations who find structured gym-based exercise inaccessible due to cost, time, or mobility constraints. Walking, the study's lead author noted, remains one of the few forms of exercise that requires no equipment, no membership, and can be built directly into an existing daily routine like a commute.",
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
      "The latest reading showed core inflation falling to its lowest level in nearly two years, driven largely by declining energy costs and a slowdown in shelter price increases that had been one of the stickiest components of the broader index. Economists had widely expected a smaller decline, making the surprise particularly welcome for markets that have spent much of the year bracing for disappointing data.",
      "Bond yields fell sharply on the news as traders repriced expectations for future rate decisions, with futures markets now pricing in a meaningfully higher probability that policymakers hold rates steady at their next meeting rather than continuing to tighten. That shift rippled through equity markets, with rate-sensitive sectors like real estate and small-cap technology leading the day's gains.",
      "Not every part of the market cheered equally. Financial stocks lagged the broader rally, with some analysts noting that a faster-than-expected end to the rate-hiking cycle could compress the lending margins that have boosted bank profits over the past two years. A handful of regional bank executives, speaking at an industry conference the same day, said they were still planning around the possibility of further hikes despite the improved data.",
      "Consumer sentiment surveys released alongside the inflation figures showed a modest but real improvement, with more respondents saying they expect their household finances to improve over the next twelve months than at any point since the current tightening cycle began. Retailers, who have spent the past year cautiously managing inventory amid uncertain demand, said the combination of cooling inflation and improving sentiment could support a stronger-than-expected holiday shopping season.",
      "Still, several economists warned against declaring victory too early, pointing out that a single month of favorable data does not guarantee a sustained trend, and that the labor market — still historically tight by most measures — remains the biggest wildcard for where inflation heads next. All eyes now turn to next month's employment report, widely seen as the next major test for whether today's rally has real staying power.",
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
      "Strength coaches who work with national-level squads say the biggest mistake younger players make is chasing maximal lifts in the weight room at the expense of movement quality. A player who can squat heavy but can't decelerate and change direction under control, they argue, is more likely to get injured than one who trains with lighter loads but prioritizes landing mechanics and joint stability.",
      "Plyometric work typically forms the backbone of in-season power training, with box jumps, depth jumps, and short reactive hops designed to improve how quickly a player can convert ground contact into vertical force. Because volleyball demands repeated jumping over the course of a match, coaches increasingly track jump fatigue using wearable sensors, pulling players from high-intensity jump drills once their explosiveness starts to noticeably decline.",
      "Shoulder health gets particular attention given how much overhead loading the sport demands, between serving, spiking, and blocking. Many programs now build in dedicated rotator cuff and scapular stability work several times a week, treating it as preventative maintenance rather than rehabilitation after the fact. Physical therapists who work with volleyball programs say this shift has meaningfully reduced overuse shoulder injuries over the past decade.",
      "Footwork drills round out most training sessions, often using ladder and cone patterns designed to mimic the specific lateral and diagonal movements players make while covering the court. Coaches emphasize that raw speed matters less than the ability to read a play and react instantly, which is why many footwork drills incorporate a visual or auditory cue that forces the athlete to make a split-second decision rather than following a predetermined pattern.",
      "Nutrition and recovery round out the picture, with many programs now employing dedicated recovery specialists who monitor sleep quality and muscle soreness alongside the physical training itself. As one strength coach put it, the training that doesn't show up on a highlight reel — the mobility work, the recovery protocols, the unglamorous footwork drills — is usually what separates players who have long, healthy careers from those who peak early and fade.",
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
      "Offer day itself is coordinated nationally so that no single school or local authority has an advantage in releasing decisions early, a system put in place after complaints in previous years that some families were getting a head start on appeals or alternative arrangements simply because their local council processed applications faster than neighboring ones.",
      "Officials say the majority of families receive an offer for one of their top three preferences, though allocation rates vary significantly by area depending on how oversubscribed local schools are relative to the number of applicants. In densely populated urban districts, some popular schools receive well over three applications for every available place, while schools in less densely populated areas may have significantly more flexibility.",
      "For families who don't receive their preferred placement, the appeals process typically requires a formal written case explaining why the alternative offer is unsuitable, along with any supporting evidence such as medical needs, sibling connections at the preferred school, or demonstrable hardship related to travel distance. Panels hearing these appeals are independent of the school itself and are legally required to weigh both the family's circumstances and the practical capacity constraints the school is operating under.",
      "Education consultants who help families navigate the process say the biggest mistake parents make is waiting until after receiving a disappointing offer to start researching their options. Families who research admissions criteria, catchment boundaries, and historical offer patterns well in advance of application deadlines are generally better positioned regardless of the outcome, since they can make more informed decisions about which schools to list as preferences in the first place.",
      "Local authorities have also expanded waiting list transparency in recent years, with several now publishing anonymized data on how far down waiting lists moved in previous years for popular schools. While that data doesn't guarantee any individual family will get a place, officials say it gives parents a more realistic picture of their odds than they previously had, reducing the number of appeals filed on cases with little realistic chance of success.",
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
      "Hydration is consistently cited as the simplest and most overlooked habit. After several hours without water overnight, the body is mildly dehydrated by morning, and physicians note that even a modest fluid deficit can measurably slow metabolic processes and contribute to the sluggishness many people attribute purely to needing caffeine.",
      "Morning sunlight exposure has drawn increasing attention from sleep researchers, who say that getting outside within the first hour of waking helps regulate the body's circadian rhythm, which in turn influences hormone release patterns tied to both energy metabolism and appetite regulation later in the day. Even ten to fifteen minutes outdoors, on a cloudy day, appears to provide a meaningful signal to the body's internal clock.",
      "Protein-forward breakfasts are another habit doctors frequently recommend, citing research showing that protein has a higher thermic effect than carbohydrates or fat, meaning the body burns more calories digesting it. Beyond the metabolic argument, physicians also note that protein tends to be more satiating, which can reduce mid-morning snacking driven by hunger rather than genuine appetite.",
      "Movement early in the day, even something as modest as a short walk, appears to have outsized benefits compared to the same activity performed later, according to several of the researchers interviewed. The theory is that morning movement helps activate glucose uptake in muscle tissue after the relatively low-activity period of sleep, though researchers caution this area still needs more dedicated study before firm conclusions can be drawn.",
      "Finally, doctors point to consistent wake times as an underrated habit, arguing that irregular sleep schedules — even when total sleep duration stays the same — can disrupt the same hormonal rhythms that morning sunlight helps regulate. Taken together, physicians say these habits work less through any single dramatic mechanism and more through the cumulative effect of giving the body consistent, predictable signals every morning.",
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
      "Most of the destinations on this year's list share a common thread: they require just enough extra effort to reach that the crowds thin out considerably compared to beaches accessible directly by car. In several cases, that means a twenty- to forty-minute hike along coastal trails, while in others a short boat charter from a nearby harbor town is the only realistic way in.",
      "Local tourism boards have taken a cautious approach to promoting these spots, aware that a sudden surge in visitors could strain the limited infrastructure — some of these beaches have no facilities whatsoever, no lifeguards, and no cell service, which is precisely part of their appeal to the travelers seeking them out. Several guides interviewed for this piece asked that exact coordinates be left out of the article, preferring instead to describe general regions and let interested travelers do their own research.",
      "Boat access tends to open up an entirely different tier of hidden beaches, ones with no walking trail at all and reachable only by water. Small operators running half-day snorkeling and beach-hopping charters say demand for these trips has grown steadily over the past few seasons, as more travelers search specifically for alternatives to the increasingly crowded flagship beaches that dominate typical travel itineraries.",
      "Timing matters as much as location, guides say. Arriving in the first hour or two after sunrise not only avoids the midday heat in many of these destinations but also means having what might otherwise be a popular spot almost entirely to yourself, since most visitors — even those willing to make the trek — tend to arrive later in the morning or early afternoon.",
      "For travelers planning a trip built around these lesser-known spots, local guides offer a consistent piece of advice: pack in everything you'll need, including water, food, and sun protection, and plan to pack out all your trash as well, since none of these locations have on-site facilities. That self-sufficiency, more than any single beach's beauty, is often what keeps them quiet in the first place.",
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
      "The redesign centers on a new arrangement of performance and efficiency cores, moving away from the roughly fixed ratios used in previous generations toward a configuration that can be tuned per device depending on whether a manufacturer is prioritizing raw speed or all-day battery life.",
      "Engineers who worked on the project say the biggest gains came not from a single breakthrough but from a series of smaller improvements across the manufacturing process, power delivery, and scheduling software all landing in the same generation. Individually, none of those changes would have been headline-worthy, but together they add up to a meaningfully different thermal and performance profile.",
      "Device makers attending the private preview event described the chip as the first in several years that felt like a genuine architectural shift rather than an incremental refresh, with several noting plans to redesign their thinnest laptop chassis around the new thermal headroom the chip provides rather than simply dropping it into existing designs.",
      "Battery life claims are still being independently verified, but early demo units reportedly lasted noticeably longer under identical mixed-use benchmarks compared to current-generation machines running similar workloads, a difference attendees said was large enough to notice without needing a stopwatch.",
      "Analysts covering the laptop market say the timing is notable, arriving just as competition in the space has intensified from chip designs built around different core architectures entirely. Whether this generation is enough to shift market share meaningfully will likely depend as much on pricing and device design as on the underlying silicon itself.",
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
      "The current wave of funding differs from earlier cycles in that investors are increasingly focused on companies solving narrow, well-defined workflows rather than building general-purpose agents meant to handle any task. Founders say this shift reflects hard-won lessons from earlier attempts that promised broad capability but struggled to deliver consistent results in production environments.",
      "Reliability has emerged as the defining engineering challenge of the category. Several founders described spending the majority of their engineering time not on expanding what their agents can do, but on building verification layers, fallback behaviors, and monitoring systems that catch failures before they cascade into larger problems, particularly for agents given access to real financial transactions or customer-facing systems.",
      "Enterprise customers evaluating these tools say the sales conversation has shifted noticeably over the past year, from demonstrations of impressive but narrow capability toward detailed questions about audit trails, error rates under real-world conditions, and what happens when an agent encounters a situation outside its training. That shift has favored companies with genuine production deployments over those still largely operating in demo mode.",
      "Talent competition in the space remains intense, with several founders noting that senior engineers with experience building reliable distributed systems — rather than pure machine learning specialists — have become some of the most sought-after hires, reflecting how much of the hard engineering work in this category is about orchestration and failure handling rather than model capability itself.",
      "Investors remain divided on how the market will consolidate. Some believe a handful of platform companies will eventually dominate by offering the underlying infrastructure other companies build on top of, while others argue the market will stay fragmented across many vertical-specific agents, each too specialized and too deeply integrated with a particular industry's workflows for a single platform to serve well.",
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
      "The crease issue, long considered the category's most persistent flaw, has been addressed through a combination of a redesigned hinge mechanism that distributes folding stress across a wider arc and a new display layer material that's more resistant to permanent deformation. Reviewers who spent extended time with early units say the crease is still faintly visible under direct light at certain angles, but no longer noticeable during normal use.",
      "Hinge durability testing, historically a weak point that led to embarrassing failure videos in earlier generations, has also improved substantially according to third-party lab results, with the latest mechanisms rated for significantly more fold cycles than devices from just two years ago. Manufacturers have also extended warranty coverage specifically for hinge-related issues, a move analysts read as a sign of growing confidence in the underlying engineering.",
      "Despite the durability improvements, foldables remain a premium category, with prices still running well above equivalent non-folding flagship phones. Component costs for the flexible display and reinforced hinge assembly account for most of that premium, and while those costs have come down year over year, manufacturers say a foldable reaching price parity with standard flagships is still likely several years away.",
      "Battery life continues to lag behind traditional phones as well, largely a function of the limited space available for battery cells within a folding chassis. Several manufacturers have responded by prioritizing efficiency-focused chips in their foldable lineups rather than the absolute fastest silicon available, a trade-off reviewers generally described as reasonable given how the category tends to be used.",
      "Even with those caveats, industry analysts tracking the category say sentiment has shifted meaningfully. Where foldables were once viewed largely as a novelty for early adopters willing to tolerate compromises, the latest generation is increasingly discussed as a legitimate flagship alternative, with several analysts predicting foldables could account for a meaningfully larger share of premium phone sales within the next two product cycles.",
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
      "The committee markup process stretched over three separate sessions, with the most contentious debate centered on how strictly to tie federal funding to specific labor and environmental standards. A compromise ultimately tied a portion of the funding to those standards while leaving states more flexibility on projects funded through a separate, smaller block-grant mechanism.",
      "Committee members from both parties described the negotiations as unusually collaborative compared to recent legislative sessions, with several noting that the shared political incentive to deliver visible infrastructure improvements ahead of upcoming elections helped keep talks from breaking down at several points where they might have in the past.",
      "Not every provision survived the markup process intact. An earlier version of the bill included a dedicated fund for high-speed rail projects, which was ultimately stripped out after opposition from lawmakers representing states unlikely to see direct benefit from rail investment, a decision that disappointed transit advocates who had lobbied heavily for its inclusion.",
      "Staffers involved in drafting the bill say the coming weeks will focus heavily on the formula used to distribute funds to individual states, an area where even lawmakers who support the bill's broader goals have significant disagreements. Several senators from smaller states have already signaled they'll push for guaranteed minimum funding levels regardless of population, similar to provisions included in past infrastructure legislation.",
      "Assuming the bill clears its final procedural hurdles, implementation officials say the first wave of funding likely wouldn't reach state transportation departments until at least the following fiscal year, given the administrative process required to establish grant programs and review project applications from what is expected to be thousands of eligible jurisdictions nationwide.",
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
      "The plan passed after nearly a year of public hearings and revisions, with the final version splitting funding between new construction on city-owned land and incentive programs designed to encourage private developers to include affordable units in market-rate projects. City officials say the mixed approach was chosen specifically to avoid the years-long delays that have historically slowed purely city-led housing projects.",
      "A significant portion of the funding is earmarked for a handful of larger sites currently used as surface parking lots or vacant municipal land, which officials say can move to construction faster than sites requiring extensive rezoning or environmental review. Smaller, scattered-site developments elsewhere in the city are expected to follow on a longer timeline.",
      "Developer incentives built into the plan include expedited permitting and modest property tax abatements for projects that include a minimum percentage of units priced below market rate, an approach city planners say has shown mixed results in other cities depending on how aggressively it's enforced and how generous the incentives are relative to what developers could earn building market-rate units instead.",
      "Housing advocates who have pushed for this kind of plan for years welcomed the vote as a meaningful step, but several cautioned that similar announcements in the past have stalled during the zoning and permitting phases, sometimes for years, as neighborhood opposition and legal challenges slowed individual projects even after city-wide plans were formally approved.",
      "City council members acknowledged those concerns directly during the vote, with several committing to a public tracking dashboard that will show the status of every funded project from initial approval through completion, an accountability measure advocates had specifically requested after previous housing initiatives were criticized for a lack of transparency about actual construction progress.",
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
      "The two-month pause followed a disagreement over agricultural export quotas that both sides now describe as largely resolved, with negotiators settling on a phased quota increase over three years rather than the immediate change originally proposed, a compromise designed to give domestic producers time to adjust to increased competition.",
      "Industry groups on both sides have been closely tracking the talks, with manufacturing associations generally supportive of a deal given the tariff relief it would provide on intermediate goods used in domestic production, while some agricultural groups have expressed continued reservations about the pace of the proposed quota changes even under the revised timeline.",
      "Trade officials involved in the negotiations say the remaining sticking points are narrower than the issues that caused the earlier breakdown, largely centered now on dispute-resolution mechanisms for handling disagreements after any deal takes effect, rather than the substance of the tariff and quota changes themselves.",
      "Economists who model the potential impact of a finalized deal estimate it could boost bilateral trade volume by a meaningful percentage over the following several years, though they caution that similar projections for past trade agreements have often proven optimistic once implementation details and compliance costs are factored in.",
      "Both delegations have set an informal target of finalizing the agreement's text before the end of the current quarter, though officials familiar with the talks note that similar deadlines have slipped before, and that the final stretch of any trade negotiation tends to be where the most politically sensitive compromises get made or unmade.",
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
      "The club's transformation over the course of the season was as much tactical as it was mental, according to players who described a preseason built almost entirely around defensive organization after a previous campaign in which the team conceded the second-most goals in the league. That defensive foundation, more than any single signing, is what most players point to when explaining the turnaround.",
      "Financially, the club operates with one of the smallest wage budgets in the top division, a gap the manager has openly acknowledged and built the team's identity around rather than trying to hide. Several key players were signed from lower divisions for modest transfer fees, players the manager specifically targeted for their work rate and tactical discipline over raw individual talent.",
      "The title-winning goal itself came in the fourth minute of stoppage time, a scrambled finish after a corner that had been worked on specifically in training that week, according to the assistant coach who designed the set piece. Video of the goal and the ensuing celebration has since been viewed millions of times, with pundits calling it one of the most dramatic conclusions to a title race in recent memory.",
      "League officials have already begun fielding questions about whether the club's rise reflects a broader shift in competitive balance or is simply an exceptional one-off season, a question that will likely take several more campaigns to answer definitively. Rival clubs, meanwhile, are reportedly studying the team's defensive setup closely ahead of the following season.",
      "For a fanbase that had grown accustomed to relegation battles rather than title races, the celebration stretched well into the following morning, with local businesses reporting the busiest overnight period in years. The club has announced a parade through the city center, expected to draw crowds that organizers say could exceed anything the city has seen for a sporting event.",
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
      "The helmet itself was discontinued by its manufacturer nearly four years ago after a redesign shifted the brand's focus toward lighter, more ventilated shells for hot-weather stages. Kristoff's mechanics reportedly sourced two of the old models from a retired teammate's personal collection and modified the shell's rear vents to further smooth airflow around the neck.",
      "Aerodynamicists who reviewed photos from the race estimate the setup could save somewhere between three and six watts at race pace, a marginal gain that becomes meaningful over a three-week stage race. Whether rivals can legally replicate the trick before the season's next major tour remains an open question, since the exact shell is no longer in production.",
      "Team mechanics across the peloton have started quietly reaching out to retired riders and old sponsors in search of similar discontinued shells, according to two people familiar with the informal trading that goes on in service course parking lots during rest days. The governing body's technical commission says it is reviewing whether any rule changes are needed, though officials stressed that as long as a helmet passed its original safety certification, riders remain free to use it regardless of when it was manufactured.",
      "For now, Kristoff has declined to comment on the specifics, telling reporters only that \"some things are worth keeping to yourself until the finish line.\" Whatever the exact numbers turn out to be, the episode has reignited a familiar debate in the sport about how much of cycling's marginal-gains arms race is genuine engineering breakthrough versus simply knowing where to look in a warehouse nobody else remembers exists.",
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
      "The record-breaking performance came in what was otherwise a fairly ordinary regular-season matchup, with the rookie methodically setting up teammates throughout all four quarters rather than chasing the record in a single dramatic stretch. Coaches on the opposing bench reportedly began double-teaming him in the fourth quarter specifically to slow the pace, a strategy that briefly worked before he found an open teammate for assist number eighteen anyway.",
      "Scouts who evaluated him before the draft consistently flagged his passing instincts as his standout skill, even as questions lingered about his outside shooting and defensive positioning at the professional level. Several pre-draft reports specifically compared his court vision to players a generation older, praising his ability to see developing plays before they fully materialize.",
      "The previous franchise record had stood for more than three decades, set by a veteran point guard during what many consider the high point of that era's up-tempo offensive system. That the rookie broke it in essentially his first full professional season, rather than years into a veteran career, has drawn particular attention from analysts who track historical statistical trends across different eras of the sport.",
      "His head coach, speaking after the game, credited the team's offensive system for creating opportunities but was quick to add that the passing reads themselves were entirely the rookie's own decision-making, not a product of scripted plays. Teammates echoed that sentiment, with the team's leading scorer noting that the rookie routinely finds passing windows that \"most guys wouldn't even see, let alone throw through.\"",
      "League statisticians note that while the assists record is franchise-specific rather than league-wide, the rookie now sits among the top statistical performers league-wide for his position this season, a distinction that has fueled early rookie-of-the-year conversations even with more than half the season still remaining.",
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
      "Box office analysts note that the film's opening was unusually well-distributed across both domestic and international markets, rather than being driven primarily by any single territory, a pattern that studio executives say reflects years of deliberate marketing investment in international markets ahead of the release.",
      "Critics were broadly positive, with several reviews specifically praising the film for expanding on the original's world-building without losing the character-driven storytelling that made the first installment resonate with audiences. That combination — spectacle paired with genuine character stakes — is exactly the balance the studio said it prioritized during a lengthy and reportedly contentious production process.",
      "Theater chains reported unusually strong repeat viewership in the film's first week, with exit polling suggesting a meaningful percentage of opening weekend audiences had already seen the film at least once before, a trend industry watchers say has become increasingly important to a film's total box office performance in the current theatrical landscape.",
      "The record-breaking opening has reportedly prompted at least two rival studios to reconsider release dates for their own upcoming tentpole films, wary of competing directly against a title generating this much sustained audience interest. One competing release has already been pushed back several weeks, according to industry trade reports.",
      "Studio executives, while celebrating the numbers publicly, have been notably cautious about declaring the film's ultimate box office ceiling, citing the unpredictable nature of how a film's momentum can shift in its second and third weekends depending on critical word of mouth and the competitive slate of films releasing shortly after.",
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
      "The film was shot in just over three weeks on a budget that industry observers describe as a fraction of what major studios typically spend on marketing alone for a comparable release, a constraint the director says forced creative decisions that ultimately strengthened the finished film rather than limiting it.",
      "Festival programmers reportedly moved the film to a larger venue after early buzz from press screenings suggested demand would outstrip its originally scheduled smaller theater, a decision that proved well-founded when the premiere screening sold out within hours of tickets becoming available to festival attendees.",
      "The lead performance has drawn particular attention from critics, several of whom specifically praised the actor's ability to convey significant emotional shifts through restraint rather than more overt dramatic choices, a performance style several reviewers noted stood out sharply against louder, more conventionally awards-baiting performances elsewhere in this year's festival lineup.",
      "Distribution rights remain unclaimed as of this writing, though sources familiar with the negotiations say at least three major distributors have entered serious discussions following the film's reception, with final terms expected to be announced within the coming weeks. Films that generate this level of festival buzz without a distributor attached have historically sold quickly once bidding begins in earnest.",
      "The director, speaking after the premiere, said the film's small scale was never a constraint she felt limited by, describing the modest budget as having forced a level of focus on character and dialogue that a larger production, with more resources and more competing creative voices, might not have allowed for.",
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
      "The announcement came during a closely watched studio presentation that also included updates on several other upcoming projects, though this particular film drew by far the loudest reaction from the audience in attendance, according to reporters covering the event live.",
      "The teaser trailer itself, running just under ninety seconds, deliberately withheld most plot details in favor of tone-setting visuals and a brief glimpse of the film's central antagonist, whose identity has been the subject of extensive fan speculation for months. Studio marketing executives said the approach was intentional, aiming to generate discussion without giving away major story beats this early in the promotional cycle.",
      "Production sources indicate principal photography wrapped several months ago and the film is now well into post-production, with visual effects work — reportedly extensive given the scope of the project — expected to continue right up until close to the announced release date, a timeline that has become increasingly common for large-scale effects-driven films.",
      "The director's comments about returning characters have fueled significant fan speculation about which supporting cast members from earlier installments might return, with several online communities already compiling detailed theories based on frame-by-frame analysis of the teaser trailer's brief glimpses of set pieces and background details.",
      "Box office analysts, reacting to the announcement, noted that the confirmed release date places the film in a notably competitive summer slate, going up against at least two other major franchise releases within a few weeks of its own premiere, setting up what could be one of the more closely watched box office competitions of the year.",
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

export const allSections: { key: string; title: string; data: Article[] }[] = [
  { key: "breaking", title: "Breaking News", data: breakingNewsData },
  ...newsSections,
];

export function getSectionByKey(
  key: string | undefined,
): { key: string; title: string; data: Article[] } | undefined {
  if (!key) return undefined;
  return allSections.find((section) => section.key === key);
}

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
