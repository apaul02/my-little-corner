export default function BooksTab() {
    const books = [
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            note: "Hold up, this is kinda fire!!",
            currentlyReading: true,
        },
        {
            title: "Meditations",
            author: "Marcus Aurelius",
            note: "Stoic wisdom that applies just as much to life as it does to building things.",
        },
        {
            title: "Nicomachean Ethics",
            author: "Aristotle",
            note: "On virtue, purpose, and what it means to live a good life.",
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
                Books
            </h2>

            <hr className="mb-6 w-16 border-t-2" style={{ borderColor: "var(--accent)" }} />

            <div className="flex flex-col gap-5">
                {books.map((book) => (
                    <div key={book.title}>
                        <div className="mb-0.5 flex items-center gap-2">
                            <h3
                                className="text-base font-bold"
                                style={{
                                    color: "var(--card-text)",
                                    fontFamily: "var(--font-merriweather), Georgia, serif",
                                }}
                            >
                                {book.title}
                            </h3>
                            {"currentlyReading" in book && book.currentlyReading && (
                                <span
                                    className="rounded-sm border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
                                    style={{
                                        borderColor: "var(--accent)",
                                        color: "var(--accent)",
                                    }}
                                >
                                    Currently Reading
                                </span>
                            )}
                        </div>
                        <p
                            className="mb-1 text-xs font-semibold italic uppercase tracking-wider"
                            style={{ color: "var(--card-subtext)" }}
                        >
                            {book.author}
                        </p>
                        <p
                            className="text-sm leading-relaxed"
                            style={{
                                color: "var(--card-subtext)",
                                fontFamily: "var(--font-merriweather), Georgia, serif",
                            }}
                        >
                            {book.note}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
