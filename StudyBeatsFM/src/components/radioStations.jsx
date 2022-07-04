import React from "react";
import { motion } from "framer-motion";
import triangle from "../images/playBtn.png";

const RadioStations = ({
  Ambient,
  Anime,
  Astral,
  ChillHop,
  Cow,
  Spinnin,
  Ivy,
  High,
  Lofi,
  Study,
  Jazz,
  Nice
}) => {
  return (
    <div className="radioList">
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ambient}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Nhạc gì hổng biết
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Anime}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Nhạc cho Wibu
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.25 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Astral}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Nhạc chìll chíll chill
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.35 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={ChillHop}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Nhạc chill híp hốp
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.45 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Cow}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Nhạc nghe dễ ngủ
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.65 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ivy}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Ivy Records
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.75 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={High}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          H5G1 Music
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Lofi}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          <span> Cô gái Lô phi </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Nice}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          <span> Nai xừ guys </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.95 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Spinnin}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Spinnin Records
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.05 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Study}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Nhạc nghe học nè
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Jazz}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Nhạc quán cà pheeee
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RadioStations;
