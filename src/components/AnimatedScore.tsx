import { useEffect, useRef, useState } from "react";

type Props = {
    score: number;
};

export const AnimatedScore = ({ score }: Props) => {
    const [displayScore, setDisplayScore] = useState(score);
    const prevScoreRef = useRef(score);

    useEffect(() => {
        const startScore = prevScoreRef.current;
        const endScore = score;

        if (startScore === endScore) return;

        const duration = 400;
        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentScore = Math.round(startScore + (endScore - startScore) * progress);

            setDisplayScore(currentScore);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                prevScoreRef.current = endScore;
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [score]);

    return <span>{displayScore}pt</span>
};