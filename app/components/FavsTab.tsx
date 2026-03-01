export default function FavsTab() {
    const games = [
        {
            title: "The Witcher 3",
            note: "Favourite game of all time. Played it nearly three times — still can't get over how good it is.",
        },
        {
            title: "Skyrim",
            note: '"Hey, you. You\'re finally awake."',
        },
        {
            title: "BioShock Infinite",
            note: "Still can't get over the ending.",
        },
    ];

    const shows = [
        {
            title: "True Detective",
            note: "Season 1 was a masterpiece. Highly recommend watching after reading about the Yellow King.",
        },
        {
            title: "Dark",
            note: "Probably my favourite time-related show.",
        },
        {
            title: "Attack on Titan",
            note: "Cried after the ending.",
        },
        {
            title: "Hunter × Hunter",
            note: "Can't get over the Chimera Ant arc.",
        },
        {
            title: "Hometown Cha-Cha-Cha",
            note: "This K-drama just feels like home — even though I'm from India.",
        },
    ];

    return (
        <div>
            <h2
                className="mb-5 font-serif text-2xl font-bold tracking-tight sm:text-3xl"
                style={{
                    color: "var(--card-text)",
                    fontFamily: "var(--font-merriweather), Georgia, serif",
                }}
            >
                Favourites
            </h2>

            <hr className="mb-6 w-16 border-t-2" style={{ borderColor: "var(--accent)" }} />

            {/* Games */}
            <h3
                className="mb-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
            >
                Games
            </h3>
            <div className="mb-6 flex flex-col gap-3">
                {games.map((item) => (
                    <div key={item.title}>
                        <span
                            className="text-base font-bold"
                            style={{
                                color: "var(--card-text)",
                                fontFamily: "var(--font-merriweather), Georgia, serif",
                            }}
                        >
                            {item.title}
                        </span>
                        <span
                            className="ml-2 text-sm italic"
                            style={{
                                color: "var(--card-subtext)",
                                fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                            }}
                        >
                            — {item.note}
                        </span>
                    </div>
                ))}
            </div>

            {/* Shows & Movies */}
            <h3
                className="mb-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
            >
                Shows &amp; Movies
            </h3>
            <div className="flex flex-col gap-3">
                {shows.map((item) => (
                    <div key={item.title}>
                        <span
                            className="text-base font-bold"
                            style={{
                                color: "var(--card-text)",
                                fontFamily: "var(--font-merriweather), Georgia, serif",
                            }}
                        >
                            {item.title}
                        </span>
                        <span
                            className="ml-2 text-sm italic"
                            style={{
                                color: "var(--card-subtext)",
                                fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                            }}
                        >
                            — {item.note}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
