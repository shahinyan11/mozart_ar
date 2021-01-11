const data = {
    deviceSizes: {
        width: 414
    },
    gameScreens:[
        'Flappy',
        'WhackAMole',
        'CatchTheDrops',
        'FireFighter'
    ],
    riddleSolvedMessage: {
        message: "Rätsel wurde aktualisiert",
        type: "info",
        duration: 5000
    },
    elements: {
        water: {name: 'water', src: require('../assets/images/water.png'),  srcModal: require('../assets/images/water_small.png')},
        fire: {name: 'fire', src: require('../assets/images/fire.png'),  srcModal: require('../assets/images/fire_small.png')},
        air: {name: 'air', src: require('../assets/images/air.png'),  srcModal: require('../assets/images/air_small.png')},
        earth: {name: 'earth', src: require('../assets/images/earth.png'),  srcModal: require('../assets/images/earth_small.png')},
    },
    followingCoords: [
        {
            id: 1,
            type: 'ar',
            right: false,
            text: 'qr_code_1',
            element: 'water',
            name: 'water',
            appearing: true,
            src: require('../assets/images/QRCodes/qr_code_1.png'),
            coords: {latitude: 47.801986, longitude: 13.043915}
            // coords: {latitude: 40.793297,   longitude: 43.844671}
        },

        // {
        //     id: 2,
        //     type: 'ar',
        //     text: 'qr_code_2',
        //     right: true,
        //     element: null,
        //     appearing: true,
        //     src: require('../assets/images/QRCodes/qr_code_2.png'),
        //     coords: {latitude: 47.802086, longitude: 13.045016}
        //     // coords: {latitude: 40.793297,   longitude: 43.844671}
        // },

        {
            id: 2,
            type: 'ar',
            text: 'qr_code_3',
            right: false,
            appearing: true,
            element: 'air',
            name: 'air',
            src: require('../assets/images/QRCodes/qr_code_3.png'),
            coords: {latitude: 47.801155, longitude: 13.045655}
        },

        {
            id: 3,
            type: 'el',
            name: 'earth',
            appearing: true,
            src: require('../assets/images/earth.png'),
            coords: {latitude: 47.804000, longitude: 13.047750}
            // coords: {latitude: 40.7933319,    longitude: 43.8449612}
        },

        {
            id: 4,
            type: 'riddle',
            // coords: {latitude: 47.801704, longitude: 13.042159}
            coords: {latitude: 47.79983, longitude: 13.04903}
        },

        {
            id: 5,
            text: 'Makart Bridge',
            src: require('../assets/images/QRCodes/makart.png'),
        },

        {
            id: 6,
            text: 'flute',
            // src: require('../assets/images/QRCodes/flute.png'),
        }
    ],
    coordinates: {
        stage_1: [
            {
                origin: null,
                destination: {latitude: 47.804284, longitude: 13.048398},
            }
        ],
        stage_2: [
            {
                origin: null,
                destination: {latitude: 47.801709, longitude: 13.045181},
                // destination: {latitude: 40.786286,   longitude: 43.843194},

            }
        ],
        stage_3: [
            {
                origin: null,
                destination: {latitude: 47.801945, longitude: 13.043920},
            },
            {
                origin: null,
                destination: {latitude: 47.802064, longitude: 13.045017},
            },
            {
                origin: null,
                destination: {latitude: 47.801129, longitude: 13.045653},
            }
        ],
        stage_4: [
            {
                origin: null,
                destination: {latitude: 47.802714, longitude: 13.043696},
            },
        ],
        stage_5: [
            {
                origin: null,
                destination: {latitude: 47.801986, longitude: 13.043915},
            },
        ],
        stage_6: [
            {
                origin: null,
                destination: {latitude: 47.804123, longitude: 13.042568},
            },
        ],
        stage_7: [
            {
                origin: null,
                destination: {latitude: 47.801703, longitude: 13.042159},
            },
        ],
        stage_8: [
            {
                origin: null,
                destination: {latitude: 0, longitude: 0},
            },
        ],
        stage_9: [
            {
                origin: null,
                destination: {latitude: 47.800083, longitude: 13.043556},
            },
        ],
        stage_10: [
            {
                origin: null,
                destination: {latitude: 47.800083, longitude: 13.043556},
            },
        ],
        stage_11: [
            {
                origin: null,
                destination: {latitude: 47.798070, longitude: 13.049444},
            },
        ],
        stage_12: [
            {
                origin: null,
                destination: {latitude: 47.798070, longitude: 13.049444},
            },
        ],
        stage_13: [
            {
                origin: null,
                destination: {latitude: 47.79983, longitude: 13.04903},
            },
        ],
        stage_14: [
            {
                origin: null,
                destination: {latitude: 0, longitude: 0},
            },
        ],
        stage_15: [
            {
                origin: null,
                destination: {latitude: 47.802017, longitude: 13.047587},

            },
        ],
        stage_16: [
            {
                origin: null,
                destination: {latitude: 0, longitude: 0},
            },
        ],
        stage_17: [
            {
                origin: null,
                destination: {latitude: 0, longitude: 0},
            },
        ],
        stage_18: [
            {
                origin: null,
                destination: {latitude: 0, longitude: 0},
            },
        ],
        stage_19: [
            {
                origin: null,
                destination: {latitude: 0, longitude: 0},
            },
        ],
        stage_20: [
            {
                origin: null,
                destination: {latitude: 0, longitude: 0},
            },
        ],
    },
    riddles: {
        1: {
            text: "riddles.1.text",
            hints: []
        },
        2: {
            text: 'riddles.2.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.2.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.2.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.2.hints.3'
                },
            ]
        },
        3: {
            text: 'riddles.3.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.3.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.3.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.3.hints.3'
                },
            ]
        },
        4: {
            text: 'riddles.4.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.4.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.4.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.3.hints.1'
                },
            ]
        },
        5: {
            answer: 'nachtmusik',
            text: 'riddles.5.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.5.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.5.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.5.hints.3'
                },
            ]
        },
        6: {
            text: 'riddles.6.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.6.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.6.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.6.hints.3'
                },
            ]
        },
        7: {
            text: 'riddles.7.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.7.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.7.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.7.hints.3'
                },
            ]
        },
        8: {
            text: 'riddles.8.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.8.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.8.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.8.hints.3'
                },
            ]
        },
        9: {
            text: 'riddles.9.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.9.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.9.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.9.hints.3'
                },
            ]
        },
        10: {
            text: 'riddles.10.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.10.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.10.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.10.hints.3'
                },
            ]
        },
        11: {
            text: 'riddles.11.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.11.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.11.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.11.hints.3'
                },
            ]
        },
        12: {
            text: 'riddles.12.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.12.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.12.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.12.hints.3'
                },
            ]
        },
        13: {
            text: 'riddles.13.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.13.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.13.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.13.hints.3'
                },
            ]
        },
        14: {
            text: 'riddles.14.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.14.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.14.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.14.hints.3'
                },
            ]
        },
        15: {
            text: 'riddles.15.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.15.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.15.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.15.hints.3'
                },
            ]
        },
        16: {
            text: 'riddles.16.text',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.16.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.16.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.16.hints.3'
                },
            ]
        },
        17: {
            1: {
                answer: 'Freiherren von Schwarz',
                text: 'riddles.17.1.text',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.17.1.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.17.1.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.17.1.hints.3'
                    },
                ]
            },
            2: {
                answer: '7/18/1877',
                text: 'riddles.17.2.text',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.17.2.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.17.2.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'Driddles.17.1.hints.3'
                    },
                ]
            }
        },
        18: {
            1: {
                answer: 'Freiherren von Schwarz',
                solved: true,
                text: 'riddles.18.1.text',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.18.1.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.18.1.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.18.1.hints.3'
                    },
                ]
            },
            2: {
                answer: '7/18/1877',
                text: 'riddles.18.2.text',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.18.2.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.18.2.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.18.2.hints.3'
                    },
                ]
            }
        },
        19: {
            1: {
                answer: 'Freiherren von Schwarz',
                text: 'riddles.19.1.text',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.19.1.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.19.1.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.19.1.hints.3'
                    },
                ]
            },
            2: {
                answer: '7/18/1877',
                solved: true,
                text: 'riddles.19.2.text',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.19.2.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.19.2.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.19.2.hints.3'
                    },
                ]
            }
        },
        20: {
            1: {
                answer: 'Freiherren von Schwarz',
                text: 'riddles.20.1.text',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.20.1.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.20.1.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.20.1.hints.2'
                    },
                ]
            },
            2: {

                answer: '7/18/1877',
                text: 'riddles.20.2.text',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.20.2.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.20.2.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.20.2.hints.3'
                    },
                ]
            }
        },

    },
    squareNavigateButtons: [
        {
            id: 1,
            routName: 'MainMenu',
            text: 'buttons.mainMenu',
            icon: require('../assets/images/group-6.png'),
            color: '#e48146'
        },
        {
            id: 2,
            routName: 'CurrentRiddle',
            text: 'buttons.currentRiddle',
            icon: require('../assets/images/group-4.png'),
            color: '#e48146'
        },
        {
            id: 3,
            routName: 'Rucksack',
            text: 'buttons.rucksack',
            icon: require('../assets/images/group-8.png'),
            color: '#e48146'
        },
        {
            id: 4,
            routName: 'Map',
            text: 'buttons.map',
            icon: require('../assets/images/whiteMap.png'),
            color: '#e48146'
        },
        {
            id: 5,
            routName: 'Camera',
            type: 'ar',
            text: 'buttons.cameraAr',
            icon: require('../assets/images/group-11.png'),
            color: '#39abd7'
        },
        {
            id: 6,
            routName: 'Camera', //QRscaner
            type: 'qr',
            text: 'buttons.cameraQR',
            icon: require('../assets/images/group-10.png'),
            color: '#39abd7'
        },
        {
            id: 7,
            routName: 'Hints',
            text: 'buttons.hints',
            icon: require('../assets/images/group-9.png'),
            color: '#39abd7'
        }
    ],
    mapStyle: [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a0d9ef"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#021e28"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#021e28"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#007eae"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#007eae"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "color": "#005576"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#d5e6ed"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1397c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "color": "#1397c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#1397c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#005576"
                }
            ]
        }
    ],
};

export default data;
