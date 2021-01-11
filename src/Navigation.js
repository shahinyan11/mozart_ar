import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './screens/Home'
import Intro from './screens/Intro'
import StartingPoint from './screens/StartingPoint'
import StartGame from './screens/StartGame'
import MainMenu from './screens/MainMenu'
import CurrentRiddle from './screens/CurrentRiddle'
import Camera from './screens/Camera'
import Map from './screens/Map'
import Rucksack from './screens/Rucksack/index'
import Hints from './screens/Hints'
import Settings from './screens/Settings'
import RiddleSolved from './screens/RiddleSolved'
import End from './screens/End'
import Singing from './screens/Singing'
import Flappy from './Games/Flappy'
import WhackAMole from './Games/WhackAMole'
import CatchTheDrops from './Games/CatchTheDrops'
import FireFighter from './Games/FireFighter'

const Navigation = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        Intro: {
            screen: Intro
        },
        StartingPoint: {
            screen: StartingPoint
        },
        StartGame: {
            screen: StartGame
        },
        MainMenu: {
            screen: MainMenu
        },
        CurrentRiddle: {
            screen: CurrentRiddle
        },
        Map: {
            screen: Map
        },
        Rucksack: {
            screen: Rucksack
        },
        Settings: {
            screen: Settings

        },
        Hints: {
            screen: Hints
        },
        // CameraAr: {
        //     screen: Camera
        // },
        Camera: {
            screen: Camera
        },
        // QRscaner: {
        //     screen: Camera,
        //     params: {type: 'qr'}
        //
        // },
        RiddleSolved: {
            screen: RiddleSolved

        },
        End: {
            screen: End
        },
        Singing: {
            screen: Singing
        },
        // GuessColor: {
        //     screen: GuessColor
        // },

        Flappy: {
            screen: Flappy
        },
        WhackAMole: {
            screen: WhackAMole
        },
        CatchTheDrops: {
            screen: CatchTheDrops
        },
        FireFighter: {
            screen: FireFighter
        },
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
        // initialRouteName: 'CatchTheDrops',
    }
);

export default createAppContainer( Navigation )
