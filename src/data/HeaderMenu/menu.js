


export const routes = [
          {
            id: 1,
            name: "Magazyn",
            path: "/magazyn",
            routes: [
                    {
                        id: 1,
                        title: "Asortyment",
                        path: "/magazyn/asortyment"
                    },
                    {
                        id: 2,
                        title: "Dokumenty Magazynowe",
                        path: "/magazyn/dokumenty"
                    },
                    {
                        id: 3,
                        title: "Analiza",
                        path: "/magazyn/analiza"
                    },
                    {
                        id: 4,
                        title: "Pobrane cześci - Damel",
                        path: "/magazyn/damel"
                    },
                    {
                        id: 5,
                        title: "Zamówienia",
                        path: "/magazyn/zamowienia"
                    }
                ],
            },
            {
                id: 2,
                name: "Warsztat",
                path: "/warsztat",
                routes: [
                    {
                        id: 1,
                        title: "Nowe zlecenie",
                        path: "/warsztat/dodaj"
                    },
                    {
                        id: 2,
                        title: "Zlecenia napraw",
                        path: "/warsztat/wyswietl"
                    },
                    {
                        id: 3,
                        title: "Czas pracy",
                        path: "/warsztat/czaspracy"
                    },
                    {
                        id: 4,
                        title: "Analiza napraw - historia",
                        path: "/warsztat/analiza"
                    }
                ],
            },
            {
                id: 3,
                name: "Pojazdy",
                path: "/pojazdy",
                routes: [
                    {
                        id: 1,
                        title: "Nowy pojazd",
                        path: "/pojazdy/wyswietl"
                    }
                ],
            },
            {
                id: 4,
                name: "Ustawienia",
                path: "/ustawienia",
                routes: [
                    {
                        id: 1,
                        title: "Moje konto",
                        path: "/ustawienia/mojekonto"
                    },
                    {
                        id: 2,
                        title: "Użytkownicy",
                        path: "/ustawienia/uzytkownicy"
                    }
                ]
            }
        ]
        
        
        
