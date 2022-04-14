import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const CanvasStyles = {
    position: 'fixed',
    PointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
}


class Confetti extends React.Component {
    constructor(props) {
        super(props);
        this.animationInstance = null;
    }

    MakeShot = (particleRatio, opts) => {
        this.animationInstance && this.animationInstance({
            ...opts,
            origin: { y: 0.7 },
            particleCount: Math.floor(200 * particleRatio)
        });
    }

    fire = () => {
        this.MakeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });

        this.MakeShot(0.2, {
            spread: 60,
        });

        this.MakeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });

        this.MakeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });

        this.MakeShot(0.35, {
            spread: 120,
            startVelocity: 45,
        });
    }

    FireHandler = () => {
        this.fire()
    };

    getInstance = (instance) => {
        this.animationInstance = instance;
    }

    render() {
        return (   
            <div style={{display: 'flex', alignSelf: 'center', height: '100vh', width: '20vw'}}>
                <button onClick={this.FireHandler}>Click me!</button>
                <ReactCanvasConfetti refConfetti={this.getInstance} style={CanvasStyles}/>
            </div>
        );
    }
}

export default Confetti;