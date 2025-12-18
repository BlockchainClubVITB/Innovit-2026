import React, { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

const Preloader = ({ onLoadComplete }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = window.innerWidth <= MOBILE_BREAKPOINT;
        setIsMobile(checkMobile);

        // Skip preloader on desktop/laptop
        if (!checkMobile) {
            setIsLoading(false);
            if (onLoadComplete) onLoadComplete();
            return;
        }

        // Check if all resources are loaded (mobile only)
        const handleLoad = () => {
            // Wait a minimum of 1 second for better UX
            const minLoadTime = 1000;
            const startTime = performance.now();

            const checkResources = () => {
                const currentTime = performance.now();
                const elapsedTime = currentTime - startTime;

                // Check if document is ready and minimum time has passed
                if (document.readyState === 'complete' && elapsedTime >= minLoadTime) {
                    // Start fade out animation
                    setFadeOut(true);

                    // Remove preloader after fade out completes
                    setTimeout(() => {
                        setIsLoading(false);
                        if (onLoadComplete) onLoadComplete();
                    }, 500); // Match CSS transition duration
                } else {
                    // Check again
                    requestAnimationFrame(checkResources);
                }
            };

            checkResources();
        };

        // Start checking when component mounts
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [onLoadComplete, isMobile]);

    if (!isLoading) return null;

    return (
        <div
            className={`preloader ${fadeOut ? 'preloader-fade-out' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#0a0a0f',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                transition: 'opacity 0.5s ease-out',
                opacity: fadeOut ? 0 : 1
            }}
        >
            {/* Logo Container */}
            <div
                className="logo-container"
                style={{
                    animation: 'logoFade 2s ease-in-out infinite',
                    marginBottom: '2rem'
                }}
            >
                {/* Blockchain Club Logo */}
                <img
                    src="/Blockchain Club logo.png"
                    alt="VIT Bhopal Blockchain Club"
                    style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 0 20px rgba(245, 188, 34, 0.5))'
                    }}
                />
            </div>

            {/* Loading Text */}
            <div
                style={{
                    color: '#fff1ce',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: '0.1em',
                    animation: 'textPulse 1.5s ease-in-out infinite'
                }}
            >
                VIT BHOPAL BLOCKCHAIN CLUB
            </div>

            {/* Loading Spinner */}
            <div
                style={{
                    marginTop: '2rem',
                    width: '40px',
                    height: '40px',
                    border: '3px solid rgba(245, 188, 34, 0.2)',
                    borderTop: '3px solid #f5bc22',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }}
            />

            {/* Inline Keyframe Animations */}
            <style>{`
                @keyframes logoFade {
                    0%, 100% {
                        opacity: 0.6;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.05);
                    }
                }

                @keyframes textPulse {
                    0%, 100% {
                        opacity: 0.7;
                    }
                    50% {
                        opacity: 1;
                    }
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                .preloader-fade-out {
                    pointer-events: none;
                }
            `}</style>
        </div>
    );
};

export default Preloader;
