module.exports = {
    overview: require("../locales.config.js")["de"],
    navbar: {
        home: 'Startseite',
        dashboard: 'Kontroll Panel',
        discover: 'Erkunden',
        partners: 'Partner',
        team: 'Team',
        support: 'Support Server',
        invite: 'Bot Hinzufügen',
        login: 'Einloggen'
    },
    footer: {
        rights: 'Alle Rechte vorbehalten.',
        description: 'Der beste Giveaway Bot auf Discord! Verbessern Sie Ihre Social-Media-Accounts organisch, indem Sie fortschrittliche und benutzerdefinierte Verlosungen erstellen. Es liegt in Ihren Händen...',
        menus: {
            first: {
                title: 'Wichtig',
                items: {
                    home: 'Startseite',
                    dashboard: 'Kontroll Panel',
                    support: 'Support Server',
                    add: 'Bot Hinzufügen'
                }
            },
            second: {
                title: 'GiveAways',
                items: {
                    partners: 'Partner',
                    team: 'Team'
                }
            },
            third: {
                title: 'Unternehmen',
                items: {
                    tos: 'Nutzungsbedingungen',
                    privacy: 'Datenschutz'
                }
            },
        },
        developedWith: 'Entwickelt mit ❤️ von clqu & Swôth & bearbeited vom GiveAways Team.',
        allServices: 'Alle Dienste sind online.',
        someServices: 'Ein paar Dienste sind offline.'
    },
    index: {
        title: 'Der beste Giveaway Bot auf Discord!',
        description: 'Indem Sie mit GiveAways fortschrittliche und benuterdefinierte Verlosungen erstellen, können Sie Ihre Social-Media-Konten verbessern und organischen Auftrieb gewinnen!',
        buttons: {
            dashboard: 'Kontroll Panel',
            support: 'Support Server',
            with_discord: 'Einloggen mit Discord'
        },
        features: {
            title: 'Warum <span class="text-amber-500 font-bold">GiveAways</span>',
            description: 'Mit GiveAways können Sie Ihre Social-Media-Konten verbessern und organische Zuwächse erzielen, indem Sie fortschrittliche und benutzerdefinierte Verlosungen erstellen!',
            buttonText: 'Zu Discord hinzufügen',
            items: [
                 { icon: 'fal fa-star', title: 'Einfaches Erstellen bedingter Verlosungen', description: 'Sie können die Mitglieder Ihrer Träume in kurzer Zeit haben. Sie können organischen Zuwachs erhalten, indem Sie ein bedingtes Werbegeschenk eröffnen, indem Sie Ihren sozialen Medienkonten wie YouTube, Twitch, TikTok, etc. auf GiveAways folgen. Warum versuchen Sie nicht, ein Gewinnspiel für mehr Informationen zu eröffnen?' },
                 { icon: 'fal fa-star', title: 'Erstellen Sie Ihre eigenen Werbegeschenke', description: 'Sie können den Bot schnell zum Server hinzufügen und Ihre eigene Verlosung auf der Website erstellen und anpassen. Über das Dashboard können Sie im Detail überprüfen, wer an der Verlosung teilgenommen hat und wer an der Verlosung teil nimmt.'},
                 { icon: 'fal fa-star', title: 'Verlosungen entdecken', description: 'Sie können an der Verlosung in der Rubrik "Entdecken" teilnehmen und Preise gewinnen, und Sie können die verbleibende Zeit als auch detaillierte Informationen auf dem Panel sehen.' },
                 { icon: 'fal fa-star', title: 'Sich selbst Special fühlen', description: 'Mit dem Kauf von Boosts, können Sie mehr als 20 Werbegeschenke gleichzeitig auf Ihrem Server verschenken! Allerdings, können Sie ein Werbegeschenk nur 20 Mal wiederholen und einbetten. Sie können Ihre Werbegeschenke mit einem Passwort schützen.' }
            ]
        },
        advanced: [
            { placement: "left", imageUrl: 'https://i.imgur.com/twQBhV3.png', title: 'Vergrößern Sie Ihre Konten', description: 'Entwickeln Sie Ihre Konten organisch weiter mit GiveAways und lassen sie wachsen.'},
            { placement: "right", imageUrl: 'https://i.imgur.com/aQFJbiI.png', title: 'Sperren Sie Ihre Werbegeschenke', description: "Verschlüsseln Sie Ihre privaten Verlosungen mit GiveAways Verschlüsselungssystem." }
            { placement: "left", imageUrl: 'https://i.imgur.com/KsBUSAB.png', title: 'Erweitern Sie Ihren Server', description: "Sie können Ihre Server schneller wachsen lassen, indem Sie eine Einladungspflicht zu Ihren Werbegeschenken hinzufügen." 
        ],
        statistics: {
            chosen: 'Ausgewählt von <span class="text-amber-500">{server_count}</span> Servern',
            labels: {
                guilds: 'Server',
                members: 'Nutzer',
                giveaways: 'Verlosungen',
                joins: 'Beitritte',
            }
        }
    },
    discover: {
        title: 'Entdecken',
        description: 'Entdecken Sie hier öffentliche Verlosungen und nehmen Sie an Verlosungen teil, um den Preis zu finden und zu gewinnen, den Sie brauchen!',
        searchInput: 'Suche nach Geschenken, Titel, Servernamen usw.',
        settings: {
            title: 'Einstellungen',
            description: 'Die Verlosungen sind die Sortiereinstellungen.',
            amount: {
                title: 'Wie viele?',
                description: 'Hier können Sie die Anzahl der aufzulistenden Verlosungen ändern.'
            },
            sort: {
                title: 'Sortierung',
                miniNote: 'Sortierung nach Preis',
                description: 'Ermöglicht es Ihnen, die Reihenfolge der Auflistung zu ändern.'
            }
        },
        az: '(A-Z) Alphabetisch',
        za: '(Z-A) Alphabetisch',
        noreq: 'Keine Anforderungen.',
        reqs: 'Anforderungen'
    },
    spotify: {
      not: 'Hört nichts auf Spotify.',
      current: 'Hört sich etwas auf Spotify an.'
    },
    team: {
        title: 'Lerne die Helden kennen!',
        description: 'Hier finden Sie alle, die an GiveAways mitarbeiten und mitgestalten <br>. Vielen Dank an unser Team! <3',
        linkcordLang: 'en',
        noWidget: 'Kein Widget',
        roles: {
            'Founder': 'Founder',
            'Co-Founder': 'Co-Founder',
            'Community-Manager': 'Community Manager',
            'Developer': 'Developer',
            'Designer': 'Designer',
            'Moderator': 'Moderator'
        }
    },
    create: {
        title: 'Erstellen Sie ein Werbegeschenk!',
        description: 'Verteilen Sie Geschenke an Ihre Mitglieder, indem Sie ein Werbegeschenk erstellen!',
        inputs: {
            title: {
                title: 'Titel',
                description: 'Geben Sie den Titel Ihres Werbegeschenks ein'
            },
            description: {
                title: 'Beschreibung',
                description: 'Geben Sie Ihre Verlosungs-Beschreibung ein'
            },
            prize: {
                title: 'Preis',
                description: 'Geben Sie Ihren Werbegeschenkpreis ein'
            },
            enddate: {
                title: 'Enddatum',
                description: 'Geben Sie das Datum ein, an dem die Aktion endet'
            },
            winners: {
                title: 'Gewinner Anzahl',
                description: 'Geben Sie die Anzahl der Gewinner ein',
                recommendet: 'Empfohlen: 1 Gewinner'
            },
            channel: {
                title: 'Kanal',
                description: 'Die Werbebotschaft wird in diesem Kanal gesendet.'
            },
            requirements: {
                title: 'Anforderungen',
                description: 'Sobald Ihre Mitglieder die von Ihnen festgelegten Bedingungen erfüllen, können sie an der Verlosung teilnehmen'
            },
            role: {
                title: 'Erforderliche Rolle',
                description: 'Wählen Sie die Discord-Rolle, die an der Verlosung teilnehmen kann.'
            },
            invite: {
                title: 'Anzahl der Einladungen die erforderlich sind',
                description: 'Wählen Sie aus, wie viele Einladungen sie benötigt, um an der Verlosung teilzunehmen. (Beispiel: 3)'
            },
            presentation: {
                title: 'Präsentation',
                description: 'Wenn Sie "Privat" wählen, wird Ihre Verlosung nicht in "Entdecken" erscheinen, wenn Sie jedoch "Öffentlich" wählen, wird Ihre Verlosung in "Entdecken" erscheinen.'
            },
        },
        button: "Einreichen",
        presentationPrivate: 'Privat',
        presentationPublic: 'Öffentlich',
        requirementsDropdownText: 'Sie suchen weitere Optionen? Schauen Sie sich Ihre Verbindungen an!',
        presentationTippy: 'Wichtige Einstellung',
        unReachTippy: 'Dies ist Ihr Recht, ein Werbegeschenk zu eröffnen. Sie haben das Recht, {MORE} weitere Werbegeschenke zu öffnen.',
        reachTippy: 'Sie haben Ihr Giveaway-Limit erreicht.',
        reachedText: 'Du has das Werbegeschenk limit erreicht.<br /> <span class="text-amber-400/50 ml-1 hover:underline cursor-pointer"><i class="fad fa-diamond"></i> Booste</span> den server für mehr kapazität.'
    },
    user: {
        profile: {
            giveaways: {
                title: '{USER}\' sind dem Werbegeschenk beigetreten.'
            }
        },
        dropdown: {
            profile: 'Profil',
            guilds: 'Server',
            connections: 'Verbindungen',
            panel: 'Administrator Bereich',
            redeem: 'Einlösen',
            logout: 'Ausloggen',
            _profile: 'Sehe dein Profil!',
            _guilds: 'Wähle einen Server!',
            _connections: 'Verwalten Sie Ihre Verbindungen!',
            _panel: 'Sehr, sehr geheim :)',
            _redeem: 'Verwenden Sie den Promo-Code!',
            _logout: 'Beenden Sie die Sitzung der Website!'
        },
        connections: {
            title: 'Verbindungen',
            description: 'Sie können die Konten der sozialen Medien auf GiveAways hier verwalten.',
            button: {
                logout: 'Zum Abmelden anklicken',
                connect: 'Verbinde dich mit <b>{PROVIDER}</b>',
                connectMini: 'Zum Verbinden klicken',
                logged: 'Eingeloggt als <b>{ACCOUNT}</b>'
            }
        },
        redeem: {
            title: 'Einlösen',
            description: 'Sie können Ihren Code hier einlösen!',
            inputPlaceholder: 'Ihr Geschenkcode hier',
            button: 'Einlösen',
            didntWork: 'Der Code hat nicht funktioniert?',
            success: '🎉 Herzlichen Glückwunsch! {COUNT} Boosts wurden zu deinem Account hinzugefügt!'
        }
    },
    dashboard: {
        selectServer: {
            title: 'Server auswählen',
            description: 'Wenn Ihr Server nicht hier ist, <u>login</u> wieder!',
            serverUnderText: 'Zum Auswählen anklicken!',
            buttons: {
                manage: 'Verwalten',
                add: 'Bot einrichten'
            }
        },
        stats: {
            total: 'Alle Werbegeschenke',
            active: 'Aktive Werbegeschenke',
            activeTippy: 'Boost zur Erhöhung des Limits!',
            ended: 'Beendete Verlosungen',
            participants: 'Insgesamte Teilnehmer'
        },
        auditLog: {
            title: 'Audit-Protokoll',
            description: 'Das Protokoll der Änderungen, die an GiveAways auf diesem Server vorgenommen wurden, kann hier eingesehen werden.',
            table: {
                user: 'Benutzer',
                date: 'Datum',
                action: 'Aktion',
                message: 'Nachricht'
            },
            boost: 'Hat den Server geboostet!',
            unboost: 'Hat den Server ge unboosted!',
            giveaway_delete: 'Hat eine Verlosung gelöscht.',
            giveaway_create: 'Hat eine Verlosung gestartet.',
            giveaway_finish: 'Verlosung beendet.',
            giveaway_join: 'Ist einer Verlosung beigetreten.',
            giveawaY_reroll: 'Hat ein Werbegeschenk neu ausgelosst.'
        },
    },
};
