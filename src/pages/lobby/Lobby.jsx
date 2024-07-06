import './Lobby.css'
import styled from "styled-components";

import GameMode from "../../components/lobby/GameMode.jsx";
import PlayerSidebar from "./PlayerSidebar.jsx";
import Character from "../../components/lobby/Character.jsx";

const Lobby = () => {



  return (
    <div className="inner">
      <div className="home container">
        <div className="header">
          <div className="left-item"></div>
          <div className="center-item">
            <div className="logo-img"> 로고 </div>
          </div>
          <div className="right-item">
            <button className="ranking"> 랭킹 </button>
          </div>
        </div>

        <div className="content">
          <div className="side">
            <PlayerSidebar />
          </div>

          <div className="game-content">

            <div className="character-section">
              <Character />
              <Character />
              <Character />
            </div>

            <div className="mode-section">
              <div className="left">
                <Button id='left-btn'> {"<"} </Button>
              </div>
              <div className="game-mode">
                <GameMode /> 
                <GameMode /> 
                <GameMode /> 
              </div>
              <div className="right">
                <Button id='right-btn'> {">"} </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Lobby;

const Button = styled.button`
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;
`