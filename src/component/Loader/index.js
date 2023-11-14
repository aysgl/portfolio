import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const hideLoader = () => {
            setLoading(false);
            document.body.style.overflow = 'visible';
        };

        // Set a timeout to ensure the loader is hidden even if the window.onload event doesn't fire
        const timeoutId = setTimeout(hideLoader, 1000);

        return () => {
            // Clear the timeout when the component unmounts
            clearTimeout(timeoutId);
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
