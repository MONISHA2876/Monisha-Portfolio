'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import Model from './ModelContact';
import { useEffect, useState } from 'react';

export default function ContactModel() {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' }); 
    // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [isDark, setIsDark] = useState(true);
    
    // Check dark mode from HTML class
    useEffect(() => {
        const checkDarkMode = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setIsDark(isDarkMode);
        };
        checkDarkMode();
        
        // Listen for theme changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        
        return () => observer.disconnect();
    }, []);

    return (
        <Canvas camera={{position:[0,0,25],fov:45}} className='dark:bg-slate-900 bg-[#eeecdd] rounded-2xl w-md h-[70vh]'>
            <ambientLight intensity={isDark ? 0.2 : 0.5} color='#1a1a40' />
            <ambientLight intensity={isDark ? 0.5 : 2} color='#eedde7' />
            <directionalLight position={[5,5,5]} intensity={isDark ? 1 : 5} />
            <OrbitControls 
                makeDefault 
                enableZoom={!isTablet}
                enablePan={false}
                maxDistance={5}
                minDistance={0}
                maxPolarAngle={Math.PI / 2.2}   // 82 degrees (thoda neeche)
                minPolarAngle={Math.PI / 3}     // 60 degrees (thoda upar)
                maxAzimuthAngle={Math.PI /12}   // 30 degrees right
                minAzimuthAngle={-Math.PI / 12}  // 30 degrees left
                enableDamping={true}
                dampingFactor={0.05}
                target={[0, 0, 0]}
            />
            <Model scale={isTablet ? 0.7 : 1} position={isTablet ? [0,-0.5,1] : [0,-0.8,0]} rotation={[0,-Math.PI/8,0]} />
        </Canvas>
    );
}