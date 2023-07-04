import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import ava from "../assets/image/ava.jpg";
import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";


const Main = () => {
    const avatar = {backgroundImage: 'url(' + ava + ')'}
/*    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);*/
    return (
        <div className={style.mainBlock}>
            {/*<Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                background={{ color: { value: "#0d47a1" } }}
                fpsLimit={200}
                detectRetina={true}
                options={{
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "repulse" },
                            resize: true
                        },
                        modes: {
                            push: { quantity: 4 },
                            repulse: { distance: 200, duration: 0.4 }
                        }
                    },
                    particles: {
                        color: { value: "#ffffff" },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: { enable: true },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            straight: false,
                            outModes: { default: "split" },
                            random: false
                        },
                        number: { value: 80, density: { enable: true, area: 800 } },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 5 } }
                    }
                }}
            />*/}
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi all!</span>
                    <Title title={"My name is Kirill Pravdin"}/>
                    <p>I am a frontend developer</p>
                </div>
                <div className={style.photo} style={avatar}>
                </div>
            </div>

        </div>
    );
};

export default Main;