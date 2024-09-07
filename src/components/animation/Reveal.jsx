/* eslint-disable react-hooks/exhaustive-deps */
"use client";


import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

export const Reveal = ({ children, hiddenValue = { opacity: 0, x: 75 }, visibleValue = { opacity: 1, x: 0 }, overFlowValue = "'hidden'", transitionValue = { duration: 0.7, delay: 0.5 } }) => {

    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInview) {
            mainControls.start("visible");
        }
    }, [isInview]);

    return (
        <div ref={ref} style={{ overflow: overFlowValue }} >
            <motion.div
                variants={{
                    hidden: hiddenValue,
                    visible: visibleValue
                }}
                initial="hidden"
                animate={mainControls}
                transition={transitionValue}
            >
                {children}
            </motion.div>
        </div>
    );
};

Reveal.propTypes = {
    children: PropTypes.node,
    overFlowValue: PropTypes.string,
    transitionValue: PropTypes.shape({
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),
    hiddenValue: PropTypes.PropTypes.shape({
        opacity: PropTypes.number,
        x: PropTypes.number, // Permitir la propiedad x
        y: PropTypes.number
    }),
    visibleValue: PropTypes.shape({
        opacity: PropTypes.number,
        x: PropTypes.number, // Permitir la propiedad x
        y: PropTypes.number
    })
};