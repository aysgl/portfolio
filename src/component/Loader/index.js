import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to hide the loader
        const hideLoader = () => {
            setLoading(false);
            document.body.style.overflow = 'visible';
        };

        // Attach the hideLoader function to the window.onload event
        window.onload = hideLoader;

        // Cleanup: remove the event listener when the component unmounts
        return () => {
            window.onload = null;
        };
    }, []);

    return (
        <div>
            {loading && (
                <div id="preloader">
                    <div className="pre-container">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div>
            )}
            {/* Your other components go here */}
        </div>
    );
};

export default Loader;
