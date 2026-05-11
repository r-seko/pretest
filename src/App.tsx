import { useEffect, useState } from "react"
import { RankingItem } from "./components/RankingItem"
import { InitialLivers } from "./data/data"
import type { Liver } from "./type/type"
import styled from "styled-components"


const Cover = styled.div`
  position: relative;  
  max-width: 300px;
  height: 400px;
  background-color: #fff;
  margin: 0 auto;
`

export default function App() {
  const [livers, setLivers] = useState<Liver[]>(InitialLivers)

  useEffect(() => {
    const timerID = setInterval(() => {
      setLivers(prev =>
        prev.map(liver => {
          const isUpdated = Math.random() > 0.6;

          if (isUpdated) {
            return {
              ...liver,
              score: liver.score + Math.round(Math.random() * 1000)
            };
          }
          return liver;
        })
      );
    }, 1000);

    return () => clearInterval(timerID);
  }, [])

  const sortedLivers = [...livers].sort((a, b) => b.score - a.score);

  return (
    <Cover>
      {livers.map(liver => {
        const rankIndex = sortedLivers.findIndex(l => l.userID === liver.userID);

        return (< RankingItem
          key={liver.userID}
          liver={liver}
          index={rankIndex} />
        )
      }
      )}
    </Cover>
  )
}
