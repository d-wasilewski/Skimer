import theme from "../../theme.js"
import BlueWave from "../../../images/ButtonWaveMain.svg"

export default {
   waveButton: {
      padding: "10px 15px",
      border: `3px ${theme.pallette.main} solid`,
      fontSize: 16,
      textShadow: "0 3px 5px rgba(#000, 0.25)",
      whiteSpace: "nowrap",
      color: theme.pallette.main,
      fontWeight: "bold",
      cursor: "pointer",
      userSelect: "none",
      background: "transparent",
      backgroundImage: `url(${BlueWave})`,
      backgroundRepeat: "repeat-x",
      backgroundPosition: "0 -100%",
      transition: "1s ease",
      borderRadius: 9999,
      "&:hover": {
         backgroundPosition: "150% 30%",
         color: "white",
      },
   },
}
