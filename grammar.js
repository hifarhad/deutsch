const grammar = [
    {
        topic: "Konjunktiv I in Berichten",
        pattern: "Used for indirect speech in reports/emails (he said that...)",
        examples: [
            "Der Geschäftsführer <span class='highlight'>teilte mit</span>, dass das Budget <span class='highlight'>ausreiche</span>.",
            "Laut E-Mail <span class='highlight'>sei</span> das Projekt <span class='highlight'>verzögert</span>.",
            "Der Kunde <span class='highlight'>wünsche</span> eine schnellere Umsetzung."
        ],
        note: "Konjunktiv I = 'sufficient' → 'ausreiche', 'is' → 'sei', 'wishes' → 'wünsche'"
    },
    {
        topic: "Passiv-Alternativen",
        pattern: "Instead of 'werden + Partizip II', Germans use these:",
        examples: [
            "Das Problem <span class='highlight'>lässt sich</span> leicht lösen. (= kann gelöst werden)",
            "Das ist <span class='highlight'>machbar</span>. (= kann gemacht werden)",
            "Die Änderung ist <span class='highlight'>umsetzbar</span>. (= kann umgesetzt werden)"
        ],
        note: "-bar, -lich, sich lassen = passive alternatives"
    },
    {
        topic: "Nominalisierung",
        pattern: "Turning verbs into nouns (very German office style)",
        examples: [
            "Wir müssen die <span class='highlight'>Umsetzung</span> beschleunigen. (= umsetzen)",
            "Die <span class='highlight'>Prüfung</span> dauert zwei Tage. (= prüfen)",
            "Nach der <span class='highlight'>Freigabe</span> starten wir. (= freigeben)"
        ],
        note: "Germans love nouns. 'Wir prüfen' → 'Die Prüfung'"
    },
    {
        topic: "Infinitiv mit 'zu'",
        pattern: "After certain verbs: planen, versuchen, beginnen, etc.",
        examples: [
            "Wir <span class='highlight'>planen</span>, das Modul nächste Woche <span class='highlight'>zu implementieren</span>.",
            "Er <span class='highlight'>versucht</span>, die Frist <span class='highlight'>einzuhalten</span>.",
            "Sie <span class='highlight'>beginnt</span>, die Anforderungen <span class='highlight'>zu dokumentieren</span>."
        ],
        note: "Separable verbs: einhalten → einzuhalten"
    },
    {
        topic: "Konjunktiv II für Höflichkeit",
        pattern: "Making requests softer and more polite",
        examples: [
            "<span class='highlight'>Könnten</span> Sie mir die Datei schicken? (softer than 'Können Sie')",
            "Ich <span class='highlight'>hätte</span> gerne eine Rückmeldung.",
            "Wir <span class='highlight'>würden</span> vorschlagen, das Projekt zu verschieben."
        ],
        note: "könnten, hätten, würden = polite office German"
    },
    {
        topic: "Relativsätze mit Präpositionen",
        pattern: "Connecting ideas with prepositions + relative pronouns",
        examples: [
            "Das System, <span class='highlight'>auf dem</span> wir arbeiten, ist veraltet.",
            "Der Kollege, <span class='highlight'>mit dem</span> ich gesprochen habe, ist zuständig.",
            "Die Funktion, <span class='highlight'>für die</span> wir uns entschieden haben, ist effizienter."
        ],
        note: "auf dem (Dativ), mit dem (Dativ), für die (Akkusativ)"
    },
    {
        topic: "Partizip I als Adjektiv",
        pattern: "Present participle used as adjective (-end)",
        examples: [
            "Das ist ein <span class='highlight'>laufendes</span> Projekt. (= das gerade läuft)",
            "Wir haben <span class='highlight'>steigende</span> Kosten. (= die steigen)",
            "Das ist eine <span class='highlight'>wachsende</span> Herausforderung."
        ],
        note: "laufend, steigend, wachsend = active/ongoing"
    },
    {
        topic: "Partizip II als Adjektiv",
        pattern: "Past participle used as adjective (-t, -en)",
        examples: [
            "Das ist ein <span class='highlight'>geplantes</span> Feature. (= das geplant wurde)",
            "Wir nutzen die <span class='highlight'>implementierte</span> Lösung.",
            "Das ist ein <span class='highlight'>bewährtes</span> Verfahren."
        ],
        note: "geplant, implementiert, bewährt = passive/completed"
    },
    {
        topic: "Doppeltes Partizip",
        pattern: "Modal verbs in perfect tense: haben + Partizip II + Infinitiv",
        examples: [
            "Wir <span class='highlight'>haben</span> das Projekt <span class='highlight'>abschließen müssen</span>.",
            "Sie <span class='highlight'>hat</span> die Datei <span class='highlight'>hochladen können</span>.",
            "Ich <span class='highlight'>habe</span> es <span class='highlight'>versuchen wollen</span>."
        ],
        note: "Not 'gemusst' but 'müssen' at the end!"
    },
    {
        topic: "N-Deklination",
        pattern: "Masculine nouns that add -n in all cases except nominative",
        examples: [
            "Der <span class='highlight'>Kunde</span> hat angerufen. (Nom)",
            "Ich habe den <span class='highlight'>Kunden</span> informiert. (Akk)",
            "Mit dem <span class='highlight'>Kunden</span> haben wir gesprochen. (Dat)"
        ],
        note: "Common: Kunde, Mitarbeiter, Bär, Löwe, Name"
    },
    {
        topic: "Modalpartikeln im Business",
        pattern: "Small words that add attitude: ja, doch, mal, eben, halt",
        examples: [
            "Das ist <span class='highlight'>ja</span> klar. (obvious, as you know)",
            "Komm <span class='highlight'>mal</span> rüber. (casual, quick)",
            "Das <span class='highlight'>halt</span> so. (that's just how it is)"
        ],
        note: "These make you sound native, not textbook"
    },
    {
        topic: "Futur I vs. Präsens",
        pattern: "Germans often use present tense for future",
        examples: [
            "Wir <span class='highlight'>starten</span> morgen. (not 'werden starten')",
            "Ich <span class='highlight'>schicke</span> dir die Datei gleich.",
            "Das Projekt <span class='highlight'>beginnt</span> nächste Woche."
        ],
        note: "Futur I (werden + Inf) is rare in spoken German"
    },
    {
        topic: "Konsekutive Sätze",
        pattern: "Cause and effect: sodass, deshalb, daher, deswegen",
        examples: [
            "Das Budget ist gekürzt, <span class='highlight'>sodass</span> wir sparen müssen.",
            "Der Server ist ausgefallen, <span class='highlight'>deshalb</span> ist das System down.",
            "Wir haben keine Rückmeldung erhalten, <span class='highlight'>daher</span> warten wir."
        ],
        note: "sodass + Verb at end | deshalb/daher/deswegen + Verb second"
    },
    {
        topic: "Konzessive Sätze",
        pattern: "Contrast: obwohl, trotzdem, dennoch, aber",
        examples: [
            "<span class='highlight'>Obwohl</span> wir spät dran sind, schaffen wir es.",
            "Das Budget ist knapp, <span class='highlight'>trotzdem</span> müssen wir liefern.",
            "Die Anforderung ist komplex, <span class='highlight'>dennoch</span> ist sie umsetzbar."
        ],
        note: "obwohl + Verb at end | trotzdem/dennoch + Verb second"
    },
    {
        topic: "Konditionalsätze",
        pattern: "If/then: wenn, falls, dann, in dem Fall",
        examples: [
            "<span class='highlight'>Wenn</span> der Kunde zustimmt, <span class='highlight'>dann</span> starten wir.",
            "<span class='highlight'>Falls</span> es Probleme gibt, melde ich mich.",
            "Wir warten auf die Freigabe, <span class='highlight'>in dem Fall</span> können wir nicht starten."
        ],
        note: "wenn/falls + Verb at end | dann + Verb second"
    },
    {
        topic: "Temporale Sätze",
        pattern: "Time: bevor, nachdem, während, seitdem, bis",
        examples: [
            "<span class='highlight'>Bevor</span> wir starten, müssen wir prüfen.",
            "<span class='highlight'>Nachdem</span> die Freigabe da ist, implementieren wir.",
            "<span class='highlight'>Während</span> des Meetings wurden Entscheidungen getroffen."
        ],
        note: "All these push the verb to the end"
    },
    {
        topic: "Lokale Sätze",
        pattern: "Place: wo, wohin, woher, überall, nirgendwo",
        examples: [
            "Das System, <span class='highlight'>wo</span> wir arbeiten, ist neu.",
            "Ich gehe <span class='highlight'>wohin</span>, wo es ruhig ist.",
            "Er kommt <span class='highlight'>woher</span>, wo Deutsch gesprochen wird."
        ],
        note: "Colloquial: 'wo' instead of 'in dem' or 'an dem'"
    },
    {
        topic: "Modale Sätze",
        pattern: "How/Manner: indem, dadurch, dass, ohne dass",
        examples: [
            "Wir sparen Kosten, <span class='highlight'>indem</span> wir automatisieren.",
            "<span class='highlight'>Dadurch, dass</span> wir früher starten, gewinnen wir Zeit.",
            "Er hat es geschafft, <span class='highlight'>ohne dass</span> wir helfen mussten."
        ],
        note: "indem = by doing | ohne dass = without doing"
    }
];
