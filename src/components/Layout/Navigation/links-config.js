import wheelIcon from "../../../assets/img/nav-icons/wheel-icon.png";
import crashIcon from "../../../assets/img/nav-icons/crash-icon.png";
import diceIcon from "../../../assets/img/nav-icons/dice-icon.png";
import coinIcon from "../../../assets/img/nav-icons/coinflip-icon.svg";
import rewardsIcon from "../../../assets/img/nav-icons/rewards-icon.png";
import affiliatesIcon from "../../../assets/img/nav-icons/affiliates-icon.svg";

const linksConfig = [
  {
    name: "Wheel",
    icon: wheelIcon,
    url: "/wheel",
  },
  {
    name: "Crash",
    icon: crashIcon,
    url: "/crash",
  },
  {
    name: "Dice",
    icon: diceIcon,
    url: "/dice",
  },
  {
    name: "Coinflip",
    icon: coinIcon,
    url: "/coinflip",
    isSvg: true
  },
  {
    name: "Rewards",
    icon: rewardsIcon,
    url: "/rewards",
  },
  {
    name: "Affiliates",
    icon: affiliatesIcon,
    url: "/affiliates",
    isSvg: true
  },
];

export default linksConfig;
