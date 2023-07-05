import React, {useCallback} from 'react';
import style from './Main.module.scss'
import ava from "../assets/image/ava.jpg";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'
/*
const particlesOpt = {
    interactivity: {
        events: {
            onClick: {enable: true, mode: "push"},
            onHover: {enable: true, mode: "repulse"},
            resize: true
        },
        /!*modes: {
            push: {quantity: 4},
            repulse: {distance: 200, duration: 0.4}
        }*!/
    },
    particles: {
        color: {value: '#20C997FF'},
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {enable: true},
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            straight: false,
            outModes: {default: "split"},
            random: false
        },
        number: {value: 80, density: {enable: true, area: 800}},
        opacity: {value: 0.5},
        shape: {type: "circle"},
        size: {value: {min: 1, max: 5}}
    }
}*/
const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            10,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const Main = () => {

    const avatar = {backgroundImage: 'url(' + ava + ')'}
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
    }, []);
    return (
        <div id={"home"} className={style.mainBlock}>
            <Particles className={style.particles}
                       init={particlesInit}
                       loaded={particlesLoaded}
                       background={{color: {value: "#0d47a1"}}}
                       fpsLimit={100}
                       detectRetina={false}
                       options={{
                           interactivity: {
                               events: {
                                   onClick: {enable: true, mode: "push"},
                                   onHover: {enable: true, mode: "repulse"},
                                   resize: true
                               },
                               modes: {
                                   push: {quantity: 4},
                                   repulse: {distance: 200, duration: 0.4}
                               }
                           },
                           particles: {
                               color: {value: '#20C997FF'},
                               links: {
                                   color: "#ffffff",
                                   distance: 150,
                                   enable: true,
                                   opacity: 0.5,
                                   width: 1
                               },
                               collisions: {enable: true},
                               move: {
                                   enable: true,
                                   speed: 2,
                                   direction: "none",
                                   straight: false,
                                   outModes: {default: "split"},
                                   random: false
                               },
                               number: {value: 80, density: {enable: true, area: 800}},
                               opacity: {value: 0.5},
                               shape: {type: "circle"},
                               size: {value: {min: 1, max: 5}}
                           }
                       }}/>
            <Fade top>
                <div className={style.container}>
                    <div className={style.greeting}>
                        <div><span>Hi! </span></div>
                        <span>I'm Kirill <span>Pravdin</span></span>
                        <span><div><ReactTypingEffect typingDelay={2000} speed={200} eraseDelay={300} text={"Frontend Developer"}/></div></span>
                    </div>
                    <Tilt options={defaultOptions}>
                        <div className={style.photo} style={avatar}>
                        </div>
                    </Tilt>

                </div>
            </Fade>
        </div>
    );
};

export default Main;