const header = 'https://cors-anywhere.herokuapp.com/'
const Data = [
    {
        Date:'December 19 - June 6',
        img: 'stock',
        ListOfCountries: [
            {
                DisplayCountry: "North America",
                SubcountryList: [
                    {
                        Name:"NA West",
                        ListOfTournaments: [
                            {
                                TourneyName: "Final Leaderboard",
                                url: ""
                            },
                            {
                                TourneyName:"Tourney 1",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217877%20/ranking?limit=0&offset=0                                "
                            },
                            {
                                TourneyName:"Tourney 2",
                                // url: header + ""
                            }
                        ] 
                    },
                    {
                        Name:"NA East",
                        ListOfTournaments: [
                            {
                                TourneyName: "Final Leaderboard",
                                url: ""
                            },
                            {
                                TourneyName:"Tourney 1",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217876%20/ranking?limit=0&offset=0                                "
                            },
                            {
                                TourneyName:"Tourney 2",
                                // url: header + ""
                            }
                        ] 
                    }
                ]

            },
        ]},
    {
        Date:'December 12 - June 6',
        img: 'stock',
        ListOfCountries: [
            {
                DisplayCountry: "EU",
                SubcountryList: [
                    {
                        Name:"EU West",
                        ListOfTournaments: [
                            {
                                TourneyName: "Final Leaderboard",
                                url: ""
                            },
                            {
                                TourneyName:"Tourney 1",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/218104%20/ranking?limit=0&offset=0                                "
                            },
                            {
                                TourneyName:"Tourney 2",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/218106%20/ranking?limit=0&offset=0                                "
                            }
                        ] 
                    },
                    {
                        Name:"EU East",
                        ListOfTournaments: [
                            {
                                TourneyName: "Final Leaderboard",
                                url: ""
                            },
                            {
                                TourneyName:"Tourney 1",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/218064%20/ranking?limit=0&offset=0                                "
                            },
                            {
                                TourneyName:"Tourney 2",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/218066%20/ranking?limit=0&offset=0                                "
                            }
                        ] 
                    }

                ]

            },
            {
                DisplayCountry: "OCE",
                SubcountryList: [
                    {
                        Name:"OCE",
                        ListOfTournaments: [
                            {
                                TourneyName: "Final Leaderboard",
                                url: ""
                            },
                            {
                                TourneyName:"Tourney 1",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217909/ranking?limit=0&offset=0"
                            },
                            {
                                TourneyName:"Tourney 2",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/218227%20/ranking?limit=0&offset=0"
                            }
                        ] 
                    }
                ]

            },
            {
                DisplayCountry: "ME",
                SubcountryList: [
                    {
                        Name:"ME",
                        ListOfTournaments: [
                            {
                                TourneyName: "Final Leaderboard",
                                url: ""
                            },
                            {
                                TourneyName:"Tourney 1",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/218136%20/ranking?limit=0&offset=0                                "
                            },
                            {
                                TourneyName:"Tourney 2",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/218140%20/ranking?limit=0&offset=0                                "
                            }
                        ] 
                    }
                ]

            }
            
        ]
    },
    {
        Date:'December 5 - June 6',
        img: 'stock',
        ListOfCountries:  [
            {
                DisplayCountry: "Latin America",
                SubcountryList: [
                    {
                        Name:"LA North",
                        ListOfTournaments: [
                            {
                                TourneyName: "Final Leaderboard",
                                url: ""
                            },
                            {
                                TourneyName:"Tourney 1",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217874%20/ranking?limit=0&offset=0                                "
                            },
                            {
                                TourneyName:"Tourney 2",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217980%20/ranking?limit=0&offset=0                                "
                            }
                        ] 
                    },
                    {
                        Name:"LA South",
                        ListOfTournaments:[
                            {
                                TourneyName: "Final Leaderboard",
                                url: ""
                            },
                            {
                                TourneyName:"Tourney 1",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217875%20/ranking?limit=0&offset=0                                "
                            },
                            {
                                TourneyName:"Tourney 2",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217981%20/ranking?limit=0&offset=0                                "
                            }
                        ] 
                    }
                ]

            },
            {
                DisplayCountry: "Mexico",
                SubcountryList: [
                    {
                        Name:"Mexico",
                        ListOfTournaments: [
                            {
                                TourneyName: "Final Leaderboard",
                                url: ""
                            },
                            {
                                TourneyName:"Tourney 1",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217871%20/ranking?limit=0&offset=0                                "
                            },
                            {
                                TourneyName:"Tourney 2",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217978%20/ranking?limit=0&offset=0                                "
                            }
                        ] 
                    }
                ]

            },
            {
                DisplayCountry: "Brazil",
                SubcountryList: [
                    {
                        Name:"Brazil",
                        ListOfTournaments: [
                            {
                                TourneyName: "Final Leaderboard",
                                url: ""
                            },
                            {
                                TourneyName:"Tourney 1",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217873%20/ranking?limit=0&offset=0                                "
                            },
                            {
                                TourneyName:"Tourney 2",
                                url: header + "https://api.eslgaming.com/play/v1/leagues/217979%20/ranking?limit=0&offset=0                                "
                            }
                        ] 
                    }
                ]

            }
            
        ]
    }

]

export default Data