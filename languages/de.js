module.exports = {
    overview: require("../locales.config.js")["de"],
    navbar: {
        home: 'Startseite',
        dashboard: 'Kontroll Panel',
        discover: 'Erkunden',
        partners: 'Partner',
        team: 'Team',
        status: 'Status',
        support: 'Support Server',
        invite: 'Bot Hinzufügen',
        login: 'Einloggen'
    },
    footer: {
        rights: 'Alle Rechte vorbehalten.',
        description: 'Der beste Giveaway Bot auf Discord! Verbessern Sie Ihren Discord Server erheblich, indem Sie Verlosungen nach Ihrem Bedarf erstellen. Es liegt in Ihren Händen...',
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
                    team: 'Team',
                    status: 'Status',
                    upvote: 'Upvote',
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
        title: 'Der beste Giveaway Bot auf Discord.',
        description: 'Indem Sie mit GiveAways fortschrittliche Werbegeschenke erstellen, können Sie Ihren Discord Server verbessern und organischen Auftrieb gewinnen!',
        buttons: {
            dashboard: 'Kontroll Panel',
            support: 'Support Server',
            with_discord: 'Einloggen mit Discord'
        },
        features: {
            title: 'Warum <span class="text-amber-500 font-bold">GiveAways</span>?',
            description: 'Mit GiveAways, können Sie Ihren Discord Server verbessern und erhebliche Zuwächse erzielen, indem Sie fortschrittliche Verlosungen erstellen!',
            buttonText: 'Zu Discord hinzufügen',
            items: [
                 { icon: 'fal fa-star', title: 'Einfaches Erstellen Bedingter Verlosungen', description: 'Sie können die Mitglieder Ihrer Träume in kurzer Zeit haben. Sie können erheblichen Zuwachs erhalten, indem Sie eine bedingte Verlosung eröffnen. Warum versuchen Sie nicht, eine Verlosung für mehr Informationen zu eröffnen?' },
                 { icon: 'fal fa-star', title: 'Erstellen Sie Ihre Eigenen Verlosungen', description: 'Sie können den Bot schnell zu Ihrem Server hinzufügen und Ihre eigenen Verlosungen auf der Website erstellen und anpassen. Über das Dashboard können Sie im Detail überprüfen, wer an der Verlosung teilgenommen hat.'},
                 { icon: 'fal fa-star', title: 'Verlosungen Entdecken ', description: 'Sie können an der Verlosung in der Rubrik "Entdecken" teilnehmen und Preise gewinnen, außerdem, können Sie die verbleibende Zeit, als auch detaillierte Informationen auf dem Panel sehen.' },
                 { icon: 'fal fa-star', title: 'Sich Selbst Besonders Fühlen', description: 'Mit dem Kauf von Boosts, können Sie mehr als 20 Verlosungen gleichzeitig auf Ihrem Server aktiv laufen haben, ebenfalls, können Sie Ihre Verlosungen 20 Mal wiederholen und einbetten. Sie können Ihre Verlosungen mit einem Passwort schützen.' }
            ]
        },
        advanced: [
            { placement: "left", imageUrl: 'https://i.imgur.com/lmotpuT.png', title: 'Verbessern Sie Ihre Verlosungen IServers', description: 'Entwickeln Sie Ihren Discord Server organisch weiter mit GiveAways und lassen sie ihn wachsen.'},
            { placement: "right", imageUrl: 'https://i.imgur.com/aQFJbiI.png', title: 'Sperren Sie Ihre Werbegeschenke', description: "Verschlüsseln Sie Ihre privaten Verlosungen mit GiveAways Verschlüsselungssystem." },
            { placement: "left", imageUrl: 'https://i.imgur.com/KsBUSAB.png', title: 'Erweitern Sie Ihren Server', description: "Sie können Ihre Server schneller wachsen lassen, indem Sie eine Einladungspflicht zu Ihren Werbegeschenken hinzufügen." },
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
    daily: {
        title: "Tägliche Belohnungen",
        description: "Beanspruchen sie Ihre Täglichen Belohnungen hier.",
        your_last_reward_was: "Ihre letzte Belohnung war:",
        claim_button: "Beanspruchen",
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
        description: 'Hier finden Sie alle, die an GiveAways mitarbeiten und mitgestalten. <br> Vielen Dank an unser Team! <3',
        linkcordLang: 'en',
        noWidget: 'Kein Widget',
        roles: {
            'Founder': 'Founder',
            'Co-Founder': 'Co-Founder',
            'Community-Manager': 'Community Manager',
            'Developer': 'Developer',
            'Designer': 'Designer',
            'Moderator': 'Moderator',
            'Helper': 'Helper'
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
            banner: {
                title: 'Banner',
                description: 'Fügen sie ihren Banner hinzu'
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
            old: {
                title: 'Account Older',
                description: 'How much days should be the account old?'
            },
            age: {
                title: 'Member Age',
                description: 'How much days should be the user in the server?'
            },
            norole: {
                title: 'Required No Role',
                description: 'Select the Discord role that cant participate in the giveaway.'
            },
            invite: {
                title: 'Anzahl der Einladungen die erforderlich sind',
                description: 'Wählen Sie aus, wie viele Einladungen sie benötigt, um an der Verlosung teilzunehmen. (Beispiel: 3)'
            },
            presentation: {
                title: 'Präsentation',
                description: 'Wenn Sie "Privat" wählen, wird Ihre Verlosung nicht in "Entdecken" erscheinen, wenn Sie jedoch "Öffentlich" wählen, wird Ihre Verlosung in "Entdecken" erscheinen.'
            },
            tag: {
                title: 'Member Tag',
                description: 'What should be the tag that can participate in the giveaway.'
            },
            message: {
                title: 'Message Limit Required',
                description: 'What should be the message limit that she needs to enter the giveaway. (Ex: 100)'
            },
            
        },
        button: "Einreichen",
        presentationPrivate: 'Privat',
        presentationPublic: 'Öffentlich',
        requirementsDropdownText: 'Wollen sie mehr Anforderungen? Treten sie unseren Discord Server bei und fragen sie uns nach neuen Anforderungen!',
        presentationTippy: 'Wichtige Einstellung',
        unReachTippy: 'Dies ist Ihr Recht, ein Werbegeschenk zu eröffnen. Sie haben das Recht, {MORE} weitere Werbegeschenke zu öffnen.',
        reachTippy: 'Sie haben Ihr Giveaway-Limit erreicht.',
        reachedText: 'Du has das Werbegeschenk limit erreicht.<br /> <span class="text-amber-400/50 ml-1 hover:underline cursor-pointer"><i class="fad fa-diamond"></i> Booste</span> den server für mehr kapazität.'
    },
    partners: {
        title: "Unsere Partner",
        description: "Du kannst hier unsere Partner sehen!"
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
            daily: 'Tägliche Belohung',
            upvote: 'Upvote',
            panel: 'Administrator Bereich',
            notifications: 'Benachrichtigungen',
            redeem: 'Einlösen',
            logout: 'Ausloggen',
            _profile: 'Sehe dein Profil!',
            _guilds: 'Wähle einen Server!',
            _daily: 'Erhalte deine Tägliche belohnung!',
            _upvote: 'Upvote für GiveAways!',
            _panel: 'Sehr, sehr geheim :)',
            _redeem: 'Verwenden Sie den Promo-Code!',
            _notifications: 'Sehe deine Benachrichtigungen!',
            _logout: 'Beenden Sie die Sitzung der Website!'
        },
        notifications: {
            title: "Deine Benachrichtigungen",
            won_part1: "Du hast das",
            won_part2: "giveaway gewonnen!",
            won_part3: "Dein gewinn ist hier:",
            won_part4: "Wenn du glaubst das der Preis falsch ist, kontaktiere den Werbegeschenk veranstalter.",
            no_notifications: "Du hast keine Benachrichtigungen!",
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
        managing: 'Du verwaltest gerade:',
        pages: 'Seiten',
        more: 'Mehr',
        not_autorized_message: 'Du bist nicht autoriziert diesen server zu verwalten!',
        selectServer: {
            title: 'Server auswählen',
            description: 'Wenn Ihr Server nicht hier ist, <u>login</u> wieder!',
            serverUnderText: 'Zum Auswählen anklicken!',
            buttons: {
                manage: 'Verwalten',
                add: 'Bot einrichten'
            }
        },
        settings: {
            free: 'Gratis',
            soon: 'KOMMT BALD',
            _soon: 'Nur diejenigen, die den letzten Boost-Level erreicht haben, können ihn nutzen.',
            embed_editor_title: 'Einbettungs Einstellung',
            bot_name: 'GiveAways',
            bot_label: 'bot',
            today_at: 'Heute um',
            youcan: 'Sie können Text in Bereiche mit kursiver Schrift und geringer Deckkraft einfügen. Sie können den gewünschten Text bearbeiten, indem Sie ihn anklicken. (Pflichtfelder können nicht bearbeitet werden!)',
            reset: 'Reset',
            save: 'Speichern',
            logs_title: 'Logs',
            logs_desc: 'Poste Logs in einem Discord Kanal',
            enabled: 'Aktiviert',
            disabled: 'Deaktiviert',
            log_channel_title: 'Log Kanal'
          },
          allgiveaways: {
              create_button_title: 'Erstellen',
              title_label: 'Titel',
              prize_label: 'Preis',
              total_winners_label: 'Insgesamte Gewinner',
              status_title: 'Status',
              total_participants: 'Insgesamte Teilnehmer',
              pin_label: 'Pin Code',
              actions_label: 'Aktionen'
          },
        stats: {
            total: 'Alle Werbegeschenke',
            active: 'Aktive Werbegeschenke',
            activeTippy: 'Boost zur Erhöhung des Limits!',
            ended: 'Beendete Verlosungen',
            participants: 'Insgesamte Teilnehmer'
        },
        sidebar: {
            dashboard: 'Kontroll Panel',
            create: 'Werbegeschenk Erstellen',
            active: 'Aktive Werbegeschenke',
            ended: 'Geendete Werbegeschenke',
            all: 'Alle Werbegeschenke',
            boost: 'Boosts',
            settings: 'Einstellungen'
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
