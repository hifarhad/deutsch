const vocab = [
    {
        word: "der Erlös",
        meaning: "Revenue / proceeds from a sale or activity.",
        ex1: "Der <span class='highlight'>Erlös</span> aus dem neuen SAP-Modul muss im Quartalsbericht sichtbar sein.",
        ex2: "Wir müssen die <span class='highlight'>Erlöse</span> und die Projektausgaben genau gegenüberstellen.",
        source: "Goethe C1 Business"
    },
    {
        word: "die Rückstellung",
        meaning: "Provision / reserve. Money set aside for a future uncertain expense.",
        ex1: "Für die anstehenden System-Upgrades müssen wir eine <span class='highlight'>Rückstellung</span> bilden.",
        ex2: "Die <span class='highlight'>Rückstellungen</span> für das laufende Geschäftsjahr sind streng reguliert.",
        source: "SAP FI / Accounting"
    },
    {
        word: "die Zuständigkeit",
        meaning: "Responsibility / who officially owns a task or problem.",
        ex1: "Für die Berechtigungsprüfung liegt die <span class='highlight'>Zuständigkeit</span> beim Security-Team.",
        ex2: "Das fällt nicht in meinen <span class='highlight'>Zuständigkeitsbereich</span>, frag bitte den Product Owner.",
        source: "Public Administration"
    },
    {
        word: "der Sachverhalt",
        meaning: "The facts / circumstances of a situation (without opinions).",
        ex1: "Bevor wir den Bug melden, muss ich den technischen <span class='highlight'>Sachverhalt</span> erst prüfen.",
        ex2: "Können Sie den <span class='highlight'>Sachverhalt</span> bitte kurz im Ticket zusammenfassen?",
        source: "Legal / Administration"
    },
    {
        word: "die Rahmenbedingungen",
        meaning: "Framework conditions / constraints you must work within.",
        ex1: "Unter diesen zeitlichen <span class='highlight'>Rahmenbedingungen</span> ist das Release kaum machbar.",
        ex2: "Wir müssen die neuen datenschutzrechtlichen <span class='highlight'>Rahmenbedingungen</span> berücksichtigen.",
        source: "Goethe C1 Business"
    },
    {
        word: "die Vorgehensweise",
        meaning: "Approach / procedure / how you plan to do something.",
        ex1: "Lass uns kurz die <span class='highlight'>Vorgehensweise</span> für das nächste Refactoring besprechen.",
        ex2: "Diese <span class='highlight'>Vorgehensweise</span> hat sich bei früheren Migrationen bewährt.",
        source: "IHK Project Management"
    },
    {
        word: "die Abstimmung",
        meaning: "Coordination / alignment with others (not voting!).",
        ex1: "Ich starte das Deployment erst nach kurzer <span class='highlight'>Abstimmung</span> mit der IT.",
        ex2: "Die interne <span class='highlight'>Abstimmung</span> zwischen den Teams hat länger gedauert.",
        source: "Office German"
    },
    {
        word: "die Umsetzung",
        meaning: "Implementation / putting a plan into practice.",
        ex1: "Die Idee ist gut, aber die technische <span class='highlight'>Umsetzung</span> wird viel Zeit kosten.",
        ex2: "Wer ist für die <span class='highlight'>Umsetzung</span> des neuen Features im nächsten Sprint zuständig?",
        source: "Goethe C1 Business"
    },
    {
        word: "der Aufwand",
        meaning: "Effort / resources / time required for a task.",
        ex1: "Der Zeit<span class='highlight'>aufwand</span> für diese kleine Anpassung ist relativ gering.",
        ex2: "Wir müssen den <span class='highlight'>Aufwand</span> und den geschäftlichen Nutzen genau abwägen.",
        source: "Office German"
    },
    {
        word: "die Einnahmequelle",
        meaning: "Source of income / revenue stream.",
        ex1: "Die öffentlichen Zuschüsse sind eine wichtige <span class='highlight'>Einnahmequelle</span> für dieses Projekt.",
        ex2: "Wir müssen langfristig neue, stabile <span class='highlight'>Einnahmequellen</span> erschließen.",
        source: "Business German"
    },
    {
        word: "die Frist",
        meaning: "Deadline / time limit (more formal than 'Deadline').",
        ex1: "Können wir die <span class='highlight'>Frist</span> für die Lieferung noch um eine Woche verlängern?",
        ex2: "Wir müssen die gesetzliche <span class='highlight'>Frist</span> unbedingt einhalten.",
        source: "Legal / Business"
    },
    {
        word: "der Engpass",
        meaning: "Bottleneck. Something slowing the whole process down.",
        ex1: "Die IT-Abteilung ist momentan der größte <span class='highlight'>Engpass</span> im Projekt.",
        ex2: "Wir müssen diesen <span class='highlight'>Engpass</span> beseitigen, sonst verzögert sich alles.",
        source: "Goethe C1 Business"
    },
    {
        word: "die Schnittstelle",
        meaning: "Interface / point of contact (software or people).",
        ex1: "Ich bin die <span class='highlight'>Schnittstelle</span> zwischen dem Kunden und der Entwicklung.",
        ex2: "Die <span class='highlight'>Schnittstelle</span> zwischen den beiden Systemen funktioniert noch nicht.",
        source: "IT / Business"
    },
    {
        word: "die Abhängigkeit",
        meaning: "Dependency. Task A cannot start until Task B is done.",
        ex1: "Wir haben hier eine starke <span class='highlight'>Abhängigkeit</span> von der externen Agentur.",
        ex2: "Bitte prüf die <span class='highlight'>Abhängigkeiten</span> im Projektplan.",
        source: "Project Management"
    },
    {
        word: "priorisieren",
        meaning: "To prioritize. Deciding what matters most.",
        ex1: "Wir müssen die Anforderungen für das nächste Quartal <span class='highlight'>priorisieren</span>.",
        ex2: "Kannst du das Ticket bitte höher <span class='highlight'>priorisieren</span>?",
        source: "Office German"
    },
    {
        word: "eskalieren",
        meaning: "To escalate. Taking a problem to a higher level.",
        ex1: "Wenn der Kunde bis morgen nicht reagiert, muss ich das <span class='highlight'>eskalieren</span>.",
        ex2: "Das Thema ist bereits <span class='highlight'>eskaliert</span> worden, kümmere dich bitte darum.",
        source: "Office German"
    },
    {
        word: "der Meilenstein",
        meaning: "Milestone. A major checkpoint in a project.",
        ex1: "Der Go-Live ist der wichtigste <span class='highlight'>Meilenstein</span> in diesem Jahr.",
        ex2: "Wir haben den ersten <span class='highlight'>Meilenstein</span> erfolgreich erreicht.",
        source: "Project Management"
    },
    {
        word: "verbindlich",
        meaning: "Binding / firm. Not just a casual promise.",
        ex1: "Bitte gib mir eine <span class='highlight'>verbindliche</span> Aussage bis Freitag.",
        ex2: "Das Angebot ist <span class='highlight'>verbindlich</span>, wir können es nicht mehr ändern.",
        source: "Business / Legal"
    },
    {
        word: "zeitnah",
        meaning: "Promptly / very soon. Classic office German.",
        ex1: "Ich werde mich <span class='highlight'>zeitnah</span> bei dir melden.",
        ex2: "Bitte senden Sie uns die Unterlagen <span class='highlight'>zeitnah</span> zu.",
        source: "Office German"
    },
    {
        word: "vorbehaltlich",
        meaning: "Subject to. 'If X happens, then Y.'",
        ex1: "Die Zusage ist <span class='highlight'>vorbehaltlich</span> der Budgetfreigabe.",
        ex2: "<span class='highlight'>Vorbehaltlich</span> deiner Prüfung können wir das so machen.",
        source: "Legal / Business"
    },
    {
        word: "gegenlesen",
        meaning: "To proofread / review before sending.",
        ex1: "Kannst du meine E-Mail kurz <span class='highlight'>gegenlesen</span>?",
        ex2: "Ich habe den Entwurf, könnt ihr mal <span class='highlight'>gegenlesen</span>?",
        source: "Office German"
    },
    {
        word: "auf dem Schirm haben",
        meaning: "To have on your radar / be aware of something.",
        ex1: "Hast du das neue Compliance-Thema <span class='highlight'>auf dem Schirm</span>?",
        ex2: "Ich habe das <span class='highlight'>auf dem Schirm</span>, keine Sorge.",
        source: "Office German (Idiom)"
    },
    {
        word: "nachreichen",
        meaning: "To submit something later / follow up with documents.",
        ex1: "Ich habe den Bericht noch nicht, ich werde ihn <span class='highlight'>nachreichen</span>.",
        ex2: "Fehlende Dokumente können bis Freitag <span class='highlight'>nachgereicht</span> werden.",
        source: "Administration"
    },
    {
        word: "vertagen",
        meaning: "To postpone / adjourn a meeting.",
        ex1: "Da nicht alle da sind, müssen wir das Thema <span class='highlight'>vertagen</span>.",
        ex2: "Die Sitzung wurde auf nächste Woche <span class='highlight'>vertagt</span>.",
        source: "Meetings / Governance"
    },
    {
        word: "die Ursache",
        meaning: "Root cause. The real reason something went wrong.",
        ex1: "Wir müssen erst die <span class='highlight'>Ursache</span> für den Systemausfall finden.",
        ex2: "Die <span class='highlight'>Ursache</span> des Fehlers ist noch unklar.",
        source: "IT / Business"
    },
    {
        word: "die Auswirkung",
        meaning: "Impact / effect on other things.",
        ex1: "Was hat diese Änderung für <span class='highlight'>Auswirkungen</span> auf die Nutzer?",
        ex2: "Wir müssen die finanziellen <span class='highlight'>Auswirkungen</span> prüfen.",
        source: "Goethe C1 Business"
    },
    {
        word: "beheben",
        meaning: "To fix / resolve a bug, error, or problem.",
        ex1: "Die IT arbeitet daran, den Fehler zu <span class='highlight'>beheben</span>.",
        ex2: "Wir konnten das Problem erfolgreich <span class='highlight'>beheben</span>.",
        source: "IT / Office"
    },
    {
        word: "die Freigabe",
        meaning: "Approval / release. The official 'yes' to proceed.",
        ex1: "Ich warte noch auf die <span class='highlight'>Freigabe</span> vom Management.",
        ex2: "Ohne die offizielle <span class='highlight'>Freigabe</span> dürfen wir nicht starten.",
        source: "SAP / Business"
    },
    {
        word: "veranschlagen",
        meaning: "To estimate / budget for something.",
        ex1: "Wie viel Zeit hast du für diese Aufgabe <span class='highlight'>veranschlagt</span>?",
        ex2: "Die Kosten für das Projekt waren zu niedrig <span class='highlight'>veranschlagt</span>.",
        source: "Finance / Project Mgmt"
    },
    {
        word: "die Ausschreibung",
        meaning: "Tender / public call for bids.",
        ex1: "Die öffentliche <span class='highlight'>Ausschreibung</span> für das neue Modul läuft bis Ende des Monats.",
        ex2: "Wir müssen die Anforderungen für die <span class='highlight'>Ausschreibung</span> genau formulieren.",
        source: "Public Sector / Goethe C1"
    },
    {
        word: "das Lastenheft",
        meaning: "Requirements spec. What the client WANTS.",
        ex1: "Im <span class='highlight'>Lastenheft</span> steht, dass das System 10.000 User bedienen muss.",
        ex2: "Wir müssen das <span class='highlight'>Lastenheft</span> prüfen, bevor wir das Pflichtenheft schreiben.",
        source: "IHK IT Project Mgmt"
    },
    {
        word: "die Gewährleistung",
        meaning: "Statutory warranty / legal guarantee.",
        ex1: "Der Fehler tritt nach zwei Jahren auf, da greift die <span class='highlight'>Gewährleistung</span> nicht mehr.",
        ex2: "Wir müssen die Mängel innerhalb der <span class='highlight'>Gewährleistungsfrist</span> beheben.",
        source: "BGB / Business Law"
    },
    {
        word: "die Kulanz",
        meaning: "Goodwill. Doing something nice without legal obligation.",
        ex1: "Aus <span class='highlight'>Kulanz</span> ersetzen wir die Hardware, obwohl die Garantie abgelaufen ist.",
        ex2: "Das ist keine rechtliche Pflicht, das machen wir nur aus <span class='highlight'>Kulanz</span>.",
        source: "Goethe C1 Business"
    },
    {
        word: "der Mahnlauf",
        meaning: "Dunning run. Automated SAP payment reminder process.",
        ex1: "Der automatische <span class='highlight'>Mahnlauf</span> für offene Forderungen startet heute Nacht.",
        ex2: "Bitte prüf den <span class='highlight'>Mahnlauf</span>, bevor du die Dateien an die Bank schickst.",
        source: "SAP FI Terminology"
    },
    {
        word: "die Stornierung",
        meaning: "Reversal / cancellation of a financial document.",
        ex1: "Wir müssen eine <span class='highlight'>Stornierung</span> der falschen Rechnung im System vornehmen.",
        ex2: "Die <span class='highlight'>Stornierung</span> des Belegs ist nur möglich, wenn er noch nicht gebucht ist.",
        source: "SAP FI / Accounting"
    },
    {
        word: "die Kontierung",
        meaning: "Account assignment. Which GL account a transaction belongs to.",
        ex1: "Die <span class='highlight'>Kontierung</span> für diese Reisekostenabrechnung ist falsch.",
        ex2: "Bitte prüf die <span class='highlight'>Kontierung</span>, bevor du den Beleg freigibst.",
        source: "SAP FI / Controlling"
    },
    {
        word: "die Liquidität",
        meaning: "Liquidity. Having enough cash to pay immediate bills.",
        ex1: "Durch die verspäteten Zahlungen sinkt unsere <span class='highlight'>Liquidität</span>.",
        ex2: "Wir müssen die <span class='highlight'>Liquidität</span> für das nächste Quartal genau planen.",
        source: "Goethe C1 Finance"
    },
    {
        word: "die Abschreibung",
        meaning: "Depreciation. Writing off asset value over time.",
        ex1: "Die Server-Hardware wird über fünf Jahre linear <span class='highlight'>abgeschrieben</span>.",
        ex2: "Wir müssen die <span class='highlight'>Abschreibungen</span> im Budget berücksichtigen.",
        source: "IHK Accounting / SAP AA"
    },
    {
        word: "der Zuschuss",
        meaning: "Grant / subsidy. Government money that doesn't need repayment.",
        ex1: "Für dieses Digitalisierungsprojekt bekommen wir einen <span class='highlight'>Zuschuss</span> vom Bund.",
        ex2: "Der <span class='highlight'>Zuschuss</span> deckt genau 50 Prozent der Projektkosten.",
        source: "Public Sector / Funding"
    },
    {
        word: "die Verordnung",
        meaning: "Regulation / ordinance issued by government.",
        ex1: "Laut der neuen Datenschutz-<span class='highlight'>Verordnung</span> müssen wir die Server umziehen.",
        ex2: "Diese technische <span class='highlight'>Verordnung</span> tritt am ersten Januar in Kraft.",
        source: "Legal / Public Admin"
    },
    {
        word: "die Fälligkeit",
        meaning: "Due date / maturity. When payment officially becomes due.",
        ex1: "Die <span class='highlight'>Fälligkeit</span> der Rechnung ist der 15. des nächsten Monats.",
        ex2: "Wir haben die <span class='highlight'>Fälligkeit</span> der Verbindlichkeiten im System geprüft.",
        source: "Goethe C1 Finance"
    },
    {
        word: "die Gutschrift",
        meaning: "Credit note. Reducing the amount a customer owes.",
        ex1: "Wir stellen dem Kunden eine <span class='highlight'>Gutschrift</span> über den fehlerhaften Betrag aus.",
        ex2: "Die <span class='highlight'>Gutschrift</span> wurde heute im SAP-System gebucht.",
        source: "SAP FI / Accounting"
    },
    {
        word: "die Pönale",
        meaning: "Penalty clause. Financial penalty for missing a deadline.",
        ex1: "Wenn wir den Go-Live verzögern, fällt eine hohe <span class='highlight'>Pönale</span> an.",
        ex2: "Die <span class='highlight'>Pönale</span> beträgt 0,5 Prozent der Auftragssumme pro Woche.",
        source: "Contract Law / IT"
    },
    {
        word: "der Beleg",
        meaning: "Document / voucher. Proof of a business transaction.",
        ex1: "Ohne einen entsprechenden <span class='highlight'>Beleg</span> kann ich die Ausgabe nicht buchen.",
        ex2: "Bitte hefte alle <span class='highlight'>Belege</span> für die Steuerprüfung gut auf.",
        source: "SAP FI / GoBD"
    },
    {
        word: "die Genehmigung",
        meaning: "Official approval (more formal than Freigabe).",
        ex1: "Wir warten noch auf die <span class='highlight'>Genehmigung</span> des Budgets durch den Vorstand.",
        ex2: "Der Antrag erfordert die <span class='highlight'>Genehmigung</span> der Datenschutzbehörde.",
        source: "Public Administration"
    },
    {
        word: "die Umlage",
        meaning: "Levy / cost apportionment among departments.",
        ex1: "Die IT-Kosten werden über eine <span class='highlight'>Umlage</span> auf alle Abteilungen verteilt.",
        ex2: "Wir müssen die <span class='highlight'>Umlage</span> der Gemeinkosten neu konfigurieren.",
        source: "SAP CO / Finance"
    },
    {
        word: "die Abschlagszahlung",
        meaning: "Progress payment / installment before project completion.",
        ex1: "Wir fordern heute die erste <span class='highlight'>Abschlagszahlung</span> für das Modul an.",
        ex2: "Der Vertrag sieht monatliche <span class='highlight'>Abschlagszahlungen</span> vor.",
        source: "Contract / Billing"
    },
    {
        word: "die Einspruchsfrist",
        meaning: "Deadline to appeal / objection period.",
        ex1: "Die <span class='highlight'>Einspruchsfrist</span> für den Steuerbescheid beträgt einen Monat.",
        ex2: "Wir müssen den Widerspruch einreichen, bevor die <span class='highlight'>Einspruchsfrist</span> abläuft.",
        source: "Legal / Public Admin"
    },
    {
        word: "die Rentabilität",
        meaning: "Profitability / return on investment.",
        ex1: "Die <span class='highlight'>Rentabilität</span> dieses neuen Cloud-Projekts ist noch unklar.",
        ex2: "Wir müssen die <span class='highlight'>Rentabilität</span> der Investition dem Vorstand präsentieren.",
        source: "Goethe C1 / Controlling"
    },
    {
        word: "die Tagesordnung",
        meaning: "Agenda. Official list of meeting topics.",
        ex1: "Bitte schick mir die <span class='highlight'>Tagesordnung</span> für die Aufsichtsratssitzung.",
        ex2: "Punkt 7 der <span class='highlight'>Tagesordnung</span> wurde kurzfristig gestrichen.",
        source: "Governance / Meetings"
    },
    {
        word: "der Beschluss",
        meaning: "Resolution / formal decision by a board or committee.",
        ex1: "Der <span class='highlight'>Beschluss</span> zur Budgetkürzung wurde im Protokoll festgehalten.",
        ex2: "Wir brauchen einen formellen <span class='highlight'>Beschluss</span> des Gremiums.",
        source: "Public Admin / Governance"
    },
    {
        word: "die Abfindung",
        meaning: "Severance pay when a contract is terminated.",
        ex1: "Wir haben uns auf eine <span class='highlight'>Abfindung</span> von drei Bruttogehältern geeinigt.",
        ex2: "Die Höhe der <span class='highlight'>Abfindung</span> hängt von der Betriebszugehörigkeit ab.",
        source: "German Labor Law"
    },
    {
        word: "die Subvention",
        meaning: "Government subsidy to support a business or sector.",
        ex1: "Die <span class='highlight'>Subventionen</span> für den öffentlichen Nahverkehr werden gekürzt.",
        ex2: "Ohne staatliche <span class='highlight'>Subventionen</span> wäre das Projekt nicht wirtschaftlich.",
        source: "Public Finance"
    },
    {
        word: "die Satzung",
        meaning: "Statutes / articles of association of an organization.",
        ex1: "Laut unserer <span class='highlight'>Satzung</span> muss der Vorstand alle zwei Jahre gewählt werden.",
        ex2: "Die Änderung der <span class='highlight'>Satzung</span> erfordert eine Mehrheit von 75 Prozent.",
        source: "Corporate Law"
    },
    {
        word: "die Schweigepflicht",
        meaning: "Duty of confidentiality. Legally binding secrecy.",
        ex1: "Als externer Berater unterliegst du der strengen <span class='highlight'>Schweigepflicht</span>.",
        ex2: "Ich darf dir die Details nicht sagen, das verstößt gegen meine <span class='highlight'>Schweigepflicht</span>.",
        source: "Legal / Compliance"
    }
];
