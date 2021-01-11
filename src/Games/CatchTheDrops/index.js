import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Animated, Text, ImageBackground, Dimensions} from 'react-native'
import {styles} from './styles'
import NavigationService from "../../NavigationService";
import Emitter from "../../services/Emitter";

const win = Dimensions.get('window');

class CatchTheDrops extends Component {

    constructor(props) {
        super(props);

        this.cupX = null;
        this.moveAccess = false;
        this.cupImage = null;
        this.container = null;

        this.cupPositionByScreen = {
            y: win.height - styles.cupContainer.height + styles.cupPosition.top,
            x: 0
        };

        this.state = {
            score: 0,
            count: 100,
            hiddenDrops: [],
            gameOver: false,
            started: false
        }
    }


    componentDidUpdate(prevProps, prevState) {
        const {score, count} = this.state;
        if (score !== prevState.score && score === 30) {
            Emitter.call('take-element', {elementName: 'water'});
            NavigationService.navigate("Rucksack", {elementName: 'water'})
        }
        if (count !== prevState.count && count === 0) {
            this.setState({gameOver: true});
        }
    }


    startNewGame = () => {
        this.animatedValues = Array.apply(null, Array(100)).map(this.createAnimatedValues);
        this.drops = {};
        this.setState({
            score: 0,
            count: 100,

            hiddenDrops: [],
            gameOver: false,
            started: true
        });

        this.setAnimatedTiming()
    };

    setAnimatedTiming = () => {
        this.animatedValues.map((value, index)=>{
            setTimeout(()=>{
                Animated.timing(
                    value.top,
                    {
                        toValue: win.height,
                        duration: 3000,
                    }
                ).start(() => {
                    this.setState({count: this.state.count - 1});
                    value.top.removeListener()

                });
            }, index * 500)
        });
    };

    createAnimatedValues = (value, index) => {
        let top = new Animated.Value(-30);
        let left = parseInt(Math.random() * (win.width - 70) + 35);
        let id = index;

        top.addListener(({value}) => {
            const cupX = this.cupPositionByScreen.x;
            const cupY = this.cupPositionByScreen.y;

            if (this.isRightPosition(left, value, cupX, cupY) && this.drops[id]) {
                this.setState({
                    score: this.state.score + 1,
                    hiddenDrops: [...this.state.hiddenDrops, id]
                });

                Animated.timing(top).stop();
                top.removeListener();
            }
        });
        return ({top, left, id})
    };

    isRightPosition = (dropX, dropY, cupX, cupY) => {
        const dropWidth = styles.imageDrop.width;
        const dropHeight = styles.imageDrop.height;
        const cupWidth = styles.cupPosition.width;
        const cupHeight = styles.cupPosition.height;

        const isRightX = dropX >= cupX && dropX + dropWidth <= cupX + cupWidth;
        const isRightY = dropY + dropHeight >= cupY && dropY < cupY + cupHeight;

        return isRightX && isRightY

    };

    onMove = (event) => {
        if (this.moveAccess) {
            const left = (this.cupX + (event.pageX - this.cupX)) - styles.cupContainer.width / 2;
            this.cupPositionByScreen.x = left + styles.cupPosition.left;
            this.cupImage.setNativeProps({style: {left}})
        }
    };

    handleTouch = (nativeEvent) => {
        console.log(nativeEvent);
        this.cupX = nativeEvent.pageX;
        this.moveAccess = true
    };

    render() {
        const {score, hiddenDrops, count, gameOver, started} = this.state;
        const key = Math.ceil(score / 3);
        return (
            <View style={{flex: 1, position: 'relative'}}
                  ref={(ref) => {
                      this.container = ref
                  }}
                  onMoveShouldSetResponder={(value) => {
                      this.onMove(value.nativeEvent)
                  }}
            >
                {
                    gameOver || !started ?
                        <View style={styles.gameOver}>
                            <Text style={styles.text}> {gameOver ? 'Game Over' : 'Click For Start'} </Text>
                            <TouchableOpacity onPress={this.startNewGame}>
                                <Image style={styles.restart}
                                       source={gameOver ? require('./images/btn-restart.png') : require('./images/btn-play.png')}/>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.container}>
                            {this.animatedValues.map((value) => (
                                hiddenDrops.indexOf(value.id) < 0 ?
                                    <Animated.View
                                        key={value.id}
                                        style={[styles.animView, {top: value.top, left: value.left}]}
                                        ref={(ref) => {
                                            this.drops[value.id] = ref
                                        }}
                                    >
                                        <Image
                                            style={styles.imageDrop}

                                            source={require('./images/drop.png')}
                                        />
                                    </Animated.View>
                                    : null
                            ))}
                        </View>
                }
                <ImageBackground
                    style={styles.imageBackground}
                    source={require('./images/bg.jpg')}
                >

                    <View style={{width: '100%'}}>
                        <Text style={styles.score}>{count}</Text>
                        <View style={styles.scoreBox}>
                            <Text style={styles.score}>{score}</Text>
                            <Text style={styles.score}>/</Text>
                            <Text style={styles.score}>30</Text>
                        </View>
                    </View>


                    <View style={styles.cupContainer}
                          onTouchStart={(value) => {
                              this.handleTouch(value.nativeEvent)
                          }}
                          onTouchEnd={() => {
                              this.moveAccess = false
                          }}
                          ref={(ref) => {
                              this.cupImage = ref
                          }}
                    >
                        <Text style={styles.cupPosition}/>

                        <Image source={require('./images/bowl_1.png')}
                               style={{...styles.image, ...(key <= 1 ? {opacity: 1} : {})}}/>
                        <Image source={require('./images/bowl_2.png')}
                               style={{...styles.image, ...(key === 2 ? {opacity: 1} : {})}}/>
                        <Image source={require('./images/bowl_3.png')}
                               style={{...styles.image, ...(key === 3 ? {opacity: 1} : {})}}/>
                        <Image source={require('./images/bowl_4.png')}
                               style={{...styles.image, ...(key === 4 ? {opacity: 1} : {})}}/>
                        <Image source={require('./images/bowl_5.png')}
                               style={{...styles.image, ...(key === 5 ? {opacity: 1} : {})}}/>
                        <Image source={require('./images/bowl_6.png')}
                               style={{...styles.image, ...(key === 6 ? {opacity: 1} : {})}}/>
                        <Image source={require('./images/bowl_7.png')}
                               style={{...styles.image, ...(key === 7 ? {opacity: 1} : {})}}/>
                        <Image source={require('./images/bowl_8.png')}
                               style={{...styles.image, ...(key === 8 ? {opacity: 1} : {})}}/>
                        <Image source={require('./images/bowl_9.png')}
                               style={{...styles.image, ...(key === 9 ? {opacity: 1} : {})}}/>
                        <Image source={require('./images/bowl_10.png')}
                               style={{...styles.image, ...(key === 10 ? {opacity: 1} : {})}}/>

                    </View>
                </ImageBackground>


            </View>
        );
    }
}

export default CatchTheDrops;
