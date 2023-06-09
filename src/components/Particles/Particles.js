import Particles from "react-particles";
import {loadSlim} from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
    const options = useMemo(()=>{
        return {
            particles: {
                links: {
                    enable:true,
                },
                move: {
                    enable: true,
                    speed: {min: 0.3, max:3},
                },
                opacity: {
                    value: {min:0.3, max:0.7 }
                },
            },
        };
    },[]);
    
    const particlesInit = useCallback((engine) =>{
        loadSlim(engine);
    },[]);

    return<Particles init={particlesInit} options={options}/>;
};

export default ParticlesComponent;